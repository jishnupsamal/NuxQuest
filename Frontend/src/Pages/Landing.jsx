import React from 'react'
import Anchor from '../Components/Link'

function Landing() {
  return (
    // <div className="overflow-hidden h-[100vh] before:bg-[url('/landingBg.jpg')] before:absolute before:top-0 before:bg-no-repeat before:bg-cover before:bg-center before:bottom-0 before:right-0 before:left-0  flex justify-center items-center before:z-2 before:h-[100vh] before:w-[100vw] before:blur-[5px]">
    //   <div className='[@media(min-width:727px)]:h-3/5 h-2/5 w-3/5 bg-gray-800/80 z-10 shadow-2xl shadow-black flex flex-col justify-evenly'>
    //     <div className='text-center border-y-2 border-white w-3/5 [@media(min-width:455px)]:text-3xl [@media(min-width:727px)]:text-5xl py-3 font-extrabold mx-auto'>
    //         <p className='text-yellow-400'>Welcome to
    //         </p>
    //         <p className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-green-600 via-gray-700 leading-loose'>
    //             NuxQuest
    //         </p>
    //     </div>
    //   </div>
    // </div>
    <div className="overflow-hidden h-[100vh] w-full before:bg-[url('/landingBg.jpg')] before:absolute before:top-0 before:bg-no-repeat before:bg-cover before:bg-center before:bottom-0 before:right-0 before:left-0  flex justify-center items-center before:z-2 before:h-[100vh] before:w-[100vw] before:blur-[3px]">
      <img src="/nuxquestlogo.webp" alt="nuxquestlogo" className='z-10 [@media(min-width:731px)]:h-[700px] mx-auto' />
      <Anchor href={'/home'} content={'Enter'} exStyle={'px-4 text-white font-bold  mx-auto p-2 rounded-sm z-[11]  self-center absolute'}/>
    </div>
  )
}

export default Landing
