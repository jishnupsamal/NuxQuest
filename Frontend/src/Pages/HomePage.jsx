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
<span className='text-red-500 font-bold'>Aizium Mines</span> is a notorious and grim island nestled in a remote, forgotten corner of the world. It has earned a dark reputation as a place where cruelty and tyranny reign supreme. <span className='text-red-500 font-bold'>Aiz, the blood thirsty vampire</span>, rules over this desolate and unforgiving land, using it as the backdrop for his ruthless ambitions.<span className='text-red-500 font-bold'>Heavenly Splits</span> is a vast and diverse continent that tells a remarkable story of change, transformation, and resilience. Once a singular landmass of breathtaking unity, it underwent a profound shift when the heavens themselves intervened in a momentous earthquake that forever altered its fate. Heavenly Splits is a vast and diverse continent that tells a remarkable story of change, transformation, and resilience. Once a singular landmass of breathtaking unity, it underwent a profound shift when the heavens themselves intervened in a momentous earthquake that forever altered its fate. <span className='text-red-500 font-bold'>Baxlam Kingdom</span> is a realm of enchanting beauty and rich cultural heritage nestled in a picturesque corner of the nuxEland world. This serene kingdom is renowned for its breathtaking landscapes, historic architecture, and the magnificent <span className='text-red-500 font-bold'>Lake Kabuto</span>, which serves as both a natural jewel and a vital connection to the vast seas beyond. <br /><br />
<span className='text-red-500 font-bold'>Robin Front</span>, a lawless pirate island, stands as an audacious monument to rebellion, debauchery, and defiance of the norms of civilization. Located in the heart of treacherous waters, this haven for swashbucklers, renegades, and freebooters is a place where chaos reigns supreme and the pirate code is the only law.
At the heart of this lawless domain is <span className='text-red-500 font-bold'>Pirate Bootleg Aslam</span>, a notorious figure whose name strikes fear into the hearts of all who sail these waters. Aslam is the undisputed ruler of Robin Front, the only voice to be heeded and the final arbiter of disputes among pirates. His word is as binding as any code, and his authority is unchallenged.
</p>

<h1 className='text-2xl [@media(min-width:460px)]:text-5xl font-bold leading-[60px]'>Tangential Truffs: The Quirk of NuxEland
</h1>
<p className='text-sm [@media(min-width:460px)]:text-base'>Tangential Truffs, a phenomenon unique to NuxEland, is a tale of both bafflement and charm, reflecting the unwavering spirit of its people in the face of an unconventional predicament. It all began with the whimsical curiosity of a rather <span className='text-red-500 font-bold'>misguided explorer, Antasumbus</span>, whose accidental discovery reshaped the course of NuxEland's history.
<br /><br />
<h3 className='text-red-900 font-semibold text-2xl'>The Original Tangential Truffs:</h3>
The original Tangential Truffs is an island of remarkable beauty and splendor, known for its lush landscapes, tranquil beaches, and abundant natural wonders. The island's inhabitants, a close-knit community, take immense pride in their unique identity and the harmony they have created on their island paradise.
<br /><br />
<h3 className='text-red-900 font-semibold text-2xl'>The Stumble upon "Tangential Truffs 2":</h3>
One fateful day, Antasumbus, driven by his reckless exploration and whimsical sense of adventure, stumbled upon another island that bore a striking resemblance to the original Tangential Truffs. Mistaking this newfound land for a hitherto undiscovered territory, he boldly christened it "Tangential Truffs 2." Little did he realize the colossal confusion he had sown.
</p>
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
