import React, { useEffect, useState, useRef } from 'react'
import { ErrorMessage, Field, Form, Formik, useField } from 'formik';
import * as Yup from "yup";
import Navbar from '../Components/Navbar'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import axios from 'axios'
import { Link } from 'react-router-dom'

// VITE_API_BASE_URL = 'https://nuxquest.onrender.com' set in .env
const BASE_URL = import.meta.env.VITE_API_BASE_URL

// const API_URL = 'http://127.0.0.1:4200' + '/encyclopedia/'
function Encyclopedia() {
  const [enc, setEnc] = useState([])
  const API_URL = BASE_URL + '/encyclopedia/'
  const fileRef = useRef(null);
  const [image, setImage] = useState('')
  const [open, setOpen] = useState(false);
  const EntrySchema = Yup.object().shape({
    term: Yup.string()
      .required('Required'),
    defn: Yup.string()
      .required('Required'),
    image: Yup.mixed()
      .test("is-file-too-big", "File exceeds 5MB", () => {
        let valid = true;
        const files = fileRef?.current?.files;
        if (files) {
          const fileArr = Array.from(files);
          fileArr.forEach((file) => {
            const size = file.size / 1024 / 1024;
            if (size > 5) {
              valid = false;
            }
          });
        }
        return valid;
      })
      .test(
        "is-file-of-correct-type",
        "File is not of supported type",
        () => {
          let valid = true;
          const files = fileRef?.current?.files;
          if (files) {
            const fileArr = Array.from(files);
            fileArr.forEach((file) => {
              const type = file.type.split("/")[1];
              const validTypes = [
                "jpeg",
                "png",
                "jpg",
                "gif",
              ];
              if (!validTypes.includes(type)) {
                valid = false;
              }
            });
          }
          return valid;
        }
      )
  });
  // });

  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios.get(API_URL)
      .then(res => setEnc(res.data))
      .catch(
        function (e) {
          console.log(e)
        })
  }, [])
  return (
    <>
      <Navbar />
      <Button color="red" onClick={handleOpen}>Add Term</Button>

      {/* Form Starts */}
      <Formik
        initialValues={{ term: '', defn: '' }}
        validationSchema={EntrySchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            console.log(values)
            axios.post(API_URL, values,
              {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              })
              .then(res => console.log(res))
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(formik) => (
          <Form encType='multipart/form-data'>
            <Field type="text" name="term" placeholder="Term" />
            <ErrorMessage name='term'
              render={msg => <div style={{ color: 'red' }}>{msg}</div>} // Renders the Error Message @Robin style accordingly
            />
            <Field as='textarea' name="defn" placeholder="Doe" />
            <ErrorMessage name='defn'
              render={msg => <div style={{ color: 'red' }}>{msg}</div>} // Renders the Error Message @Robin style accordingly
            />
            <input name="image" type="file" onBlur={(e) => formik.setFieldValue("image", e.currentTarget.files[0])} />
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
      {/* Form Ends */}

      {enc.map(term => (
        <div key={term.slug}>
          <Link to={`${term.slug}`}><h2>{term.term}</h2></Link>
        </div>
      ))}

    </>
  )
}

export default Encyclopedia

// Dialog Component
const CreateEntryDialog = (open, handleOpen, handleClose) => (
  <Dialog
    size="xs"
    open={open}
    handler={handleOpen}
    className="bg-transparent shadow-none"
  >
    <Card className="mx-auto w-full max-w-[24rem]">
      <CardBody>

      </CardBody>
    </Card>
  </Dialog >
)

const FileUpload = ({ fileRef, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor="image">Choose files</label>{" "}
      <input ref={fileRef} multiple={false} type="file"
        accept="image/png, image/jpeg, .jpg, .gif" onChange={e => setImage(e.currentTarget.files[0])}
        {...field} />
      {meta.touched && meta.error ? (
        <div style={{ color: "red" }}>{meta.error}</div>
      ) : null}
    </div>
  );
};