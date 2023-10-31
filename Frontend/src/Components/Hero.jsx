import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Fade from 'react-reveal/Fade';
// bg-[url('/heroBg.png')]
function Hero() {
  return (
    <div className="text-white text-4xl z-2  [@media(min-width:520px)]:text-7xl font-extrabold flex flex-col  bg-cover bg-center bg-no-repeat justify-center  h-[300px] pb-3 pl-2 py-4 gap-y-2">
      <Fade cascade className='flex'>
        <div>

        <span className=' text-black'>Welcome </span> <span className='text-black'>Adventurer</span>
        </div>
        </Fade>
    <div className=" text-red-600 text-2xl [@media(min-width:520px)]:text-5xl ">
          <Typewriter
          
            words={['Whatever you seek.', 'Anything you need.', 'Expectations shall exceed.']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={60}
            delaySpeed={1000}
          />

    </div>
    </div>
  )
}

export default Hero
