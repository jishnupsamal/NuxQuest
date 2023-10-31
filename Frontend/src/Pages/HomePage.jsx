import React, { useState } from 'react'
import Card from '../Components/Card';

import Navbar from '../Components/Navbar.jsx';
import Hero from '../Components/Hero';
import { Button, Textarea } from '@material-tailwind/react';

function HomePage() {

  const [font,SetFont]=useState('')

const handleClick=()=>{
  if (font==='font-Esoteric'){
    SetFont('')
  }
    else{
SetFont('font-Esoteric')
    }
}
  return (
    <>
    <Navbar/>
    <Hero/>
    {/* <Card/> */}
    <div className='p-4 my-5'>
    <h1 className='text-2xl [@media(min-width:460px)]:text-5xl font-bold leading-[60px]'>What is NuxEland?</h1>
<p className='text-sm [@media(min-width:460px)]:text-base'>NuxEland is the  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo perspiciatis ea laudantium a veniam esse nemo expedita similique nobis ut aspernatur earum, reiciendis eligendi reprehenderit distinctio iste numquam, itaque obcaecati.
Dolore ipsam dicta consequatur repellat velit itaque, excepturi magnam harum iusto et consequuntur tenetur ratione rem ea. Repellat fugiat non, perspiciatis rerum deserunt sint omnis animi quos saepe quis blanditiis.
Iure corporis inventore  voluptate recusandae expedita ea nulla corrupti neque in earum esse, inventore, necessitatibus numquam natus! Eveniet quo eius accusantium quam veniam ducimus necessitatibus similique aliquam beatae.
Voluptatum neque vero nulla minima ad magnam illum sapiente quos amet. Autem nesciunt dolore quo voluptatibus aspernatur laudantium repudiandae eos, delectus ut corporis laboriosam, libero nisi assumenda dolorum, dolorem aliquid.
Saepe assumenda officiis rem. Veritatisuod, cupiditate architecto<br/><br/> 
<img className='[@media(min-width:570px)]:h-[450px] [@media(min-width:570px)]:w-[600px] [@media(min-width:760px)]:h-[550px] [@media(min-width:760px)]:w-[750px] mx-auto' src="/map.webp" alt="map" />
<br/><br/>
ipsam quaerat provident! Necessitatibus aliquam aspernatur nulla pariatur, quae et debitis quos totam id hic.
Expedita aperiam enim libero aliquid? Voluptatem, veritatis voluptates blanditiis nostrum beatae sed soluta, ex repellat accusamus laborum minus hic dolore amet possimus? Iusto, expedita officiis. Vel maxime rerum itaque provident!
Expedita exercitationem sae quas fugiat iusto modi sit, cumque doloremque inventore! Quibusdam eos, molestias cupiditate praesentium suscipit explicabo aut cum atque laboriosam nesciunt!
Unde consectetur enim odio ad odit molestias iste maiores! Perspiciatis exercitationem id quasi vel, dolores cumque nesciunt voluptatum animi repudiandae, aperiam quidem aspernatur pariatur praesentium! Vel odit dolore id corporis?
Nemo, unde quasi officiis voluptatibus facere, magnam sed voluptas voluptate pariatur ex iste! Ipsam expedita excepturi voluptatibus consectetur ve dignissimos.</p>
    <div>
      <h1 className='text-2xl [@media(min-width:460px)]:text-5xl mt-4 font-bold leading-[60px]'>Dialect of NuxEland: <span className='text-red-500'>Exalia</span></h1>
      <p>Exalia is the 1000-year old ancient dialect spoken all across NuxEland. It is very easy to read and write and <span className='text-red-500'>Veronica Verma</span> herself learnt it only in two months in her journey to NuxEland. It is was first written by <span className='text-red-500'>Jishnu the Enlightened One</span>. He was born in secluded village in <span className='text-red-500'>Baxlam Kingdom</span>. He developed Exalia at the age of 15 and sought to educate many others to elevate them from conflict. Throughout the years, Exalia has united many communities and is the national language of NuxEland.</p>
      <div className='w-[250px] [@media(min-width:460px)]:w-[400px] mt-3 mx-auto flex flex-col gap-y-3'>

      <textarea placeholder='Enter Text' className={`${font} placeholder:text-gray-800 font-bold text-black text-md outline-gray-700 outline p-3   outline-1 rounded-lg block w-full`}  color='deep-orange' rows={8}/>
      <Button  variant='gradient' onClick={handleClick} className='h-[40px]  hover:cursor-[url(/cursorFinger.png),_pointer] w-[150px]' color='amber'>Translate</Button>
      </div>
    </div>
    </div>


</>
  )
}

export default HomePage
