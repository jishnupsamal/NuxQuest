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
<p className='text-sm [@media(min-width:460px)]:text-base'>NuxEland is the legendary land of the magical, mystic and undiscovered. It is as old as time itself. <span className='text-red-500 font-bold'>Veronica Verma</span> was the first from Earth to venture to this unknown land. NuxQuest is the website developed by Veronica Verma to help other adventurers in their journey to NuxEland. It is home to many mythical creatures and beasts like griffins, dragons, basilisks, and unicorns. Many legends like <span className='text-red-500 font-bold'>Jishnu the Enlightened One</span> roam the land since a thousand years to help the people. Beware of horrendous criminals like <span className='text-red-500 font-bold'>Aiz the Vampire</span>, infamous <span className='text-red-500 font-bold'>Pirate Bootleg Aslam</span> and <span className='text-red-500 font-bold'>Kushagra the Tyrant</span>, if wish to live.<br/><br/> 
<img className='[@media(min-width:570px)]:h-[450px] [@media(min-width:570px)]:w-[600px] [@media(min-width:760px)]:h-[550px] [@media(min-width:760px)]:w-[750px] mx-auto' src="/map.webp" alt="map" />
<br/><br/>
ipsam quaerat provident! Necessitatibus aliquam aspernatur nulla pariatur, quae et debitis quos totam id hic.
Expedita aperiam enim libero aliquid? Voluptatem, veritatis voluptates blanditiis nostrum beatae sed soluta, ex repellat accusamus laborum minus hic dolore amet possimus? Iusto, expedita officiis. Vel maxime rerum itaque provident!
Expedita exercitationem sae quas fugiat iusto modi sit, cumque doloremque inventore! Quibusdam eos, molestias cupiditate praesentium suscipit explicabo aut cum atque laboriosam nesciunt!
Unde consectetur enim odio ad odit molestias iste maiores! Perspiciatis exercitationem id quasi vel, dolores cumque nesciunt voluptatum animi repudiandae, aperiam quidem aspernatur pariatur praesentium! Vel odit dolore id corporis?
Nemo, unde quasi officiis voluptatibus facere, magnam sed voluptas voluptate pariatur ex iste! Ipsam expedita excepturi voluptatibus consectetur ve dignissimos.</p>
    <div>
      <h1 className='text-2xl [@media(min-width:460px)]:text-5xl mt-4 font-bold leading-[60px]'>Dialect of NuxEland: <span className='text-red-500 font-bold'>Exalia</span></h1>
      <p>Exalia is the 1000-year old ancient dialect spoken all across NuxEland. It is very easy to read and write and <span className='text-red-500 font-bold'>Veronica Verma</span> herself learnt it only in two months in her journey to NuxEland. It is was first written by <span className='text-red-500 font-bold'>Jishnu the Enlightened One</span>. He was born in secluded village in <span className='text-red-500 font-bold'>Baxlam Kingdom</span>. He developed Exalia at the age of 15 and sought to educate many others to elevate them from conflict. Throughout the years, Exalia has united many communities and is the national language of NuxEland.</p>
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
