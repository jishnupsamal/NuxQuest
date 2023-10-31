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
    <div className='p-3 my-5'>
    <h1 className='text-5xl font-bold leading-[60px]'>What is ExunLand?</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo perspiciatis ea laudantium a veniam esse nemo expedita similique nobis ut aspernatur earum, reiciendis eligendi reprehenderit distinctio iste numquam, itaque obcaecati.
Dolore ipsam dicta consequatur repellat velit itaque, excepturi magnam harum iusto et consequuntur tenetur ratione rem ea. Repellat fugiat non, perspiciatis rerum deserunt sint omnis animi quos saepe quis blanditiis.
Iure corporis inventore  voluptate recusandae expedita ea nulla corrupti neque in earum esse, inventore, necessitatibus numquam natus! Eveniet quo eius accusantium quam veniam ducimus necessitatibus similique aliquam beatae.
Voluptatum neque vero nulla minima ad magnam illum sapiente quos amet. Autem nesciunt dolore quo voluptatibus aspernatur laudantium repudiandae eos, delectus ut corporis laboriosam, libero nisi assumenda dolorum, dolorem aliquid.
Saepe assumenda officiis rem. Veritatisuod, cupiditate architecto<br/><br/> 
<img src="" alt="map" />
<br/><br/>
ipsam quaerat provident! Necessitatibus aliquam aspernatur nulla pariatur, quae et debitis quos totam id hic.
Expedita aperiam enim libero aliquid? Voluptatem, veritatis voluptates blanditiis nostrum beatae sed soluta, ex repellat accusamus laborum minus hic dolore amet possimus? Iusto, expedita officiis. Vel maxime rerum itaque provident!
Expedita exercitationem sae quas fugiat iusto modi sit, cumque doloremque inventore! Quibusdam eos, molestias cupiditate praesentium suscipit explicabo aut cum atque laboriosam nesciunt!
Unde consectetur enim odio ad odit molestias iste maiores! Perspiciatis exercitationem id quasi vel, dolores cumque nesciunt voluptatum animi repudiandae, aperiam quidem aspernatur pariatur praesentium! Vel odit dolore id corporis?
Nemo, unde quasi officiis voluptatibus facere, magnam sed voluptas voluptate pariatur ex iste! Ipsam expedita excepturi voluptatibus consectetur ve dignissimos.</p>
    <div>
      <h1 className='text-5xl mt-4 font-bold leading-[60px]'>Dialect of NuxEland: <span className='text-red-500'>Exalia</span></h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eos saepe veritatis voluptas, voluptatum tenetur ipsa vero quisquam voluptates quasi? Ad unde sit iste cupiditate sed voluptatibus, saepe corrupti. Quis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque repellat animi temporibus, harum quos dolorem culpa fuga, quibusdam iure quia incidunt, labore nam voluptates cumque soluta enim? Dolorem, nisi?
      Ratione molestias sapiente animi distinctio accusantium temporibus fugit harum alias maiores beatae minus quibusdam, sint enim aspernatur facere doloribus, et alias?
      Aperiam ea ducimus molestiae nulla reiciendis.voluptatum.
      Consectetur porro iste explicabo provident deleniti aliquid, nam esse officiis amet, molestiae quibusdam tempore, sit deserunt totam! Hic ipsum velit, perferendis tempore ratione doloribus eveniet sunt, recusandae adipisci deleniti exercitationem!
      Deleniti aperiam dolore laborum, hic ullam iusto maxime veritatis voluptatum, nulla explicabo, officia ab exercitationem accusantium assumenda suscipit atque dolor iste eveniet cum voluptate deserunt. Consectetur voluptates dolorem ex reprehenderit?</p>
      <div className='w-[400px] mt-3 mx-auto flex flex-col gap-y-3'>

      <textarea placeholder='Enter Text' className={`${font} placeholder:text-gray-800 text-black text-md outline-gray-700 outline p-3   outline-1 rounded-lg block w-full`}  color='deep-orange' rows={8}/>
      <Button  variant='gradient' onClick={handleClick} className='h-[40px]  hover:cursor-[url(/cursorFinger.png),_pointer] w-[150px]' color='amber'>Translate</Button>
      </div>
    </div>
    </div>


</>
  )
}

export default HomePage
