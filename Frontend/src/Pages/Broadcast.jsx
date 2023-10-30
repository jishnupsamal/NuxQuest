import Navbar from '../Components/Navbar'
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import Spinner from '../Components/Spinner';

function Broadcast() {
  const [vis, setVis] = useState(0)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
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

    // if (!formData.longDesc.trim()) {
    //   validationErrors.longDesc = "This is required"
    // } 
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
 
      setLoading(true)
      axios.post('https://nuxquest.onrender.com/announcement/', { title: formData.title, content: formData.content }).then((res) => {
        console.log(res.status)
        if (res.status === 200) {
console.log(res.body)
setLoading(false)
          // axios.get('https://dadacon.onrender.com/user/', {
          //   headers: {
          //     Authorization: `Bearer ${token}`
          //   }
          // })
          //   .then((res) => setUser(res.data))
          //   .catch((err) => console.log(err))
        }
      }).catch((errors) => {
        setLoading(false)
        setVis(1)
        setTimeout(() => {
          setVis(0)
        }, 4000);
      })
    }

  }

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
    {/* <Input name='shortDesc' variant="outlined" onChange={handleChange} label="Short Description" />
    {errors.email && <span className='text-red-400'>{errors.email}</span>} */}
    <Textarea name='content' size="lg" onChange={handleChange} label="Description" rows={8}/>
    {errors.content && <span className='text-red-400'>{errors.content}</span>}
    <Button color='deep-orange' onClick={handleSubmit} variant="gradient">Submit</Button>
    {vis ? <span className='text-red-400 block'>Access denied</span> : ''}
    {loading && <Spinner />}
    </form>
  </div>
  <hr
      className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-25 dark:opacity-100"
    />
    <div>
    </div>
  </>
  )
}

export default Broadcast

