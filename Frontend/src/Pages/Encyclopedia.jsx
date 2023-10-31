import React, { useEffect, useState, useRef } from 'react'
import { ErrorMessage, Field, Form, Formik, useField } from 'formik';
import * as Yup from "yup";
import Navbar from '../Components/Navbar'

import Card from '../Components/Card';

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,


  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Textarea,
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

  // const handleClose = () => setOpen(false);


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

      <div className='flex flex-col w-2/3 mx-auto justify-center items-center gap-y-4'>
<h1 className='font-bold text-5xl leading-20'>NuxeLand Encyclopedia</h1>
<p className='text-xl text-center leading-[30px] mb-2'>Find information on all the majestic flora and fauna of <span className='text-red-500'>NuxeLand</span> that you might encoutner in your journey.</p>
      <Button color="red" onClick={handleOpen}>Add Term</Button>
      <Dialog
    size="xs"
    open={open}
    handler={handleOpen}
    className="bg-transparent shadow-none"
  >
    <DialogBody>


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

              .then((res) => {
                // console.log(res)
                axios.get(API_URL)
                .then(res => setEnc(res.data))
                .catch(
                  function (e) {
                    console.log(e)
                  })
              })

            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(formik) => (

          <Form encType='multipart/form-data' className='flex flex-col justify-evenly mx-auto h-[480px] w-2/3 ' >

            <Field type="text" name="term" placeholder="Term" className='w-full p-2 placeholder:text-gray-600 text-black outline-gray-500 outline-1 border-2 border-black rounded-full outline'/>
       
            <ErrorMessage name='term'
              render={msg => <div style={{ color: 'red' }}>{msg}</div>} // Renders the Error Message @Robin style accordingly
            />
          
            <Field as='textarea' name="defn" placeholder="Definition" className='h-[250px] text-black placeholder:text-gray-600 outline-gray-500 border-2 border-black outline-1 rounded-lg outline w-full p-2'/>
             {/* <Textarea name='defn' label='Definition' rows={6}/> */}
            <ErrorMessage name='defn'
              render={msg => <div style={{ color: 'red' }}>{msg}</div>} // Renders the Error Message @Robin style accordingly
            />
            <input className='text-green-500' name="image" type="file" onBlur={(e) => formik.setFieldValue("image", e.currentTarget.files[0])} />
            <Button type="submit" variant='gradient' color='deep-orange'>Submit</Button>
          </Form>
        )}
      </Formik>
              </DialogBody>
      </Dialog >
      {/* Form Ends */}

      </div>
      <div className='flex flex-row mt-4 w-full flex-wrap justify-evenly'>
      {enc.map(term => (
        <div className='text-center hover:cursor-[url(/cursorFinger.png),_pointer] ' key={term.slug}>
          <Link className='hover:cursor-[url(/cursorFinger.png),_pointer]' to={`${term.slug}`}>
            <Card imgUrl={term.image} style={'h-[400px]  w-[300px]'}/>
            <h2 className='font-semibold'>{term.term}</h2>
            </Link>
        </div>
      ))}
      </div>
    </>
  )
}

export default Encyclopedia

// Dialog Component

const CreateEntryDialog = (open, handleOpen) => (

  <Dialog
    size="xs"
    open={open}
    handler={handleOpen}
    className="bg-transparent shadow-none"
  >

    {/* <Card className="mx-auto w-full max-w-[24rem]">
      <CardBody>

      </CardBody>
    </Card> */}

  </Dialog >
)

const FileUpload = ({ fileRef, ...props }) => {
  const [field, meta] = useField(props);
  return (

    <div className=''>
      <label className='bg-gray-600' htmlFor="image">Choose files</label>{" "}
      <input className='bg-gray-600 ' ref={fileRef} multiple={false} type="file"

        accept="image/png, image/jpeg, .jpg, .gif" onChange={e => setImage(e.currentTarget.files[0])}
        {...field} />
      {meta.touched && meta.error ? (
        <div style={{ color: "red" }}>{meta.error}</div>
      ) : null}
    </div>
  );
};