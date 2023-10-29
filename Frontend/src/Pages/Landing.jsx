import React from 'react'
import Anchor from '../Components/Link'

function Landing() {
  return (
    <div className="overflow-hidden h-[100vh] before:bg-[url('/landingBg.jpg')] before:absolute before:top-0 before:bg-no-repeat before:bg-cover before:bg-center before:bottom-0 before:right-0 before:left-0  flex justify-center items-center before:z-2 before:h-[100vh] before:w-[100vw] before:blur-[5px]">
      <div className='h-3/5 w-3/5 bg-gray-800/80 z-10 shadow-2xl shadow-black flex flex-col justify-evenly'>
        <div className='text-center border-y-2 border-white w-3/5 text-5xl py-3 font-extrabold mx-auto'>
            <p className='text-yellow-400'>Welcome to
            </p>
            <p className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-emerald-600 via-zinc-700 leading-loose'>
                NuxQuest
            </p>
        </div>
            <Anchor href={'/home'} content={'Get Started'} exStyle={'pl-3 text-white font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-28 mx-auto p-2 rounded-lg'}/>
      </div>
    </div>
  )
}

export default Landing
