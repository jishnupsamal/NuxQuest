import Navbar from '../Components/Navbar'
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import Spinner from '../Components/Spinner';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Broadcast() {
  const [open, setOpen] = useState(1);
  // const [alwaysOpen, setAlwaysOpen] = useState(true);
  const [vis, setVis] = useState(0)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [aList,setAList]=useState([])
  const [formData, setFormData] = useState({

    title: '',
    content: '',

  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    }
    )
    console.log(formData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = {}


    if (!formData.title.trim()) {
      validationErrors.title = "This is required"
    } 
    if (!formData.content.trim()) {
      validationErrors.content = "This is required"
    } 
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true)
      axios.post('https://nuxquest.onrender.com/announcement/', { title: formData.title, content: formData.content }).then((res) => {
        console.log(res.status)
        if (res.status === 201) {
setLoading(false)
axios.get('https://nuxquest.onrender.com/announcement/')
.then((res) =>{setAList(res.data.reverse())
   console.log(aList)
  
})
 .catch((err) => console.log(err))
        }
      }).catch((errors) => {
        setLoading(false)
        setVis(1)
        setTimeout(() => {
          setVis(0)
        }, 2000);
      })
    }

  }
  useEffect(() => {
   axios.get('https://nuxquest.onrender.com/announcement/')
   .then((res) => {setAList(res.data.reverse())
     console.log(aList)
    }
  
  )
    .catch((err) => console.log(err))
  }, []);

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
   

  return (
  <>
  <Navbar/>
  <div className='text-center mt-3'>
  <h1 className='font-bold text-5xl leading-20'>Global Broadcast</h1>
  <h3 className='text-2xl'>Send a Global Message to all other adventures of <span className='text-red-500'>
       Nuxeland
    </span>
    </h3>
    <form  className='flex flex-col justify-evenly mx-auto h-[400px] w-1/2'>
    <Input name='title' onChange={handleChange} variant="outlined" label="Title" />
    {errors.title && <span className='text-red-400'>{errors.title}</span>}
    <Textarea name='content' size="lg" onChange={handleChange} label="Description" rows={8}/>
    {errors.content && <span className='text-red-400'>{errors.content}</span>}
    <Button color='deep-orange' onClick={handleSubmit} variant="gradient">Submit</Button>
    {vis ? <span className='text-red-400 block'>Broadcast Failed</span> : ''}
    {loading && <Spinner />}
    </form>
  </div>
  <hr
      className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-25 dark:opacity-100"
    />
    <h1 className='font-bold text-5xl leading-20 mx-auto text-center my-2'>Global Feed</h1>
    <div className='w-2/3 mx-auto mb-10 border-2 border-solid border-black p-4 bg-yellow-500/50 rounded-lg hover:cursor-[url(/cursorFinger.png),_pointer'>
 
      {aList.length > 0 ? aList.map((elem,ind)=>{
        return <Accordion animate={CUSTOM_ANIMATION} className='hover:cursor-[url(/cursorPointer.png),default]' key={ind} open={open === elem.id}>
        <AccordionHeader className='hover:cursor-[url(/cursorFinger.png),_pointer]' onClick={() => handleOpen(elem.id)}>
          {elem.title}
        </AccordionHeader>
        <AccordionBody>
         {elem.content}
        </AccordionBody>
      </Accordion>
      }): <p className='text-center text-xl text-black'>No global announcements.</p>}
  
    </div>
  </>
  )
}

export default Broadcast

