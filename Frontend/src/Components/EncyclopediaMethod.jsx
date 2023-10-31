import React, { useEffect } from 'react'
import axios from 'axios'
import Card from './Card'
import Navbar from './Navbar'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

 const ListEncyclopedia = () => {
    const API_URL = BASE_URL + '/encyclopedia/{slug}/'
    
    return (
        <>

            
        </>
    )
}

export default ListEncyclopedia