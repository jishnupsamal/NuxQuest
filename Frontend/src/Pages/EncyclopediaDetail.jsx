import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Routes, Route, useParams } from 'react-router-dom';
import axios from 'axios';

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
                <img src={encDetail.image} />
                <h1>{encDetail.term}</h1>
                <p>{encDetail.defn}</p>
                <small>{encDetail.date_added}</small>
            </div>
        </>
    )
}

export default EncyclopediaDetail