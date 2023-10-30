import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
// import { ListEncyclopedia } from '../Components/EncyclopediaMethod'
import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

function Encyclopedia() {
  const [enc, setEnc] = useState('')
  const API_URL = BASE_URL + '/encyclopedia/'
  
  useEffect(() => {
    axios.get(API_URL)
      .then(res => console.log(res))
      .catch(
        function (e) {
          console.log(e)
        })
  })
  return (
    <>
      <Navbar />
      <button>Add Term</button>


    </>
  )
}

export default Encyclopedia


