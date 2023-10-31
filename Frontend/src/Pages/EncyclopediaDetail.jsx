import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Routes, Route, useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../Components/Card';

const EncyclopediaDetail = () => {
    const [encDetail, setEncDetail] = useState({})
    const { slug } = useParams()
    const BASE_URL = import.meta.env.VITE_API_BASE_URL
    const API_URL = BASE_URL + `/encyclopedia/${slug}`

    useEffect(() => {
        axios.get(API_URL)
            .then(res => setEncDetail(res.data))
            .catch(e => console.log(e))
    }, [])

    return (
        <>
            <Navbar />
            <div>
             
            </div>
                <section className=" body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap-reverse">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h1 className="text-red-500 font-bold text-3xl [@media(min-width:319px)]:text-5xl title-font  mb-4">{encDetail.term}</h1>
        <div className="flex mb-4">
         </div>
        <div className='h-[200px] '>
      <p className="leading-relaxed  mb-4 [@media(min-width:299px)]:text-base text-sm">{encDetail.defn}</p>
        <div className="flex border-t border-gray-800 py-2">
            <span className="text-black [@media(min-width:299px)]:text-base text-[12px]">Date Added</span>
            <span className="ml-auto [@media(min-width:290px)]:text-base text-[12px] text-black">{encDetail.date_added}</span>
            </div> 
            </div>
      </div>
      <Card imgUrl={encDetail.image} style="" />

    </div>
  </div>
</section>
        </>
    )
}

export default EncyclopediaDetail