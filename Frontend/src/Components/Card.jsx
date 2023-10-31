import React from 'react'
// 28px width and height gap between image and container
function Card(props) {
  return (
<div className={`body flex justify-center flex-col h-[200px] w-[200px]  [@media(min-width:299px)]:h-[250px] [@media(min-width:467px)]:h-[400px] mx-auto [@media(min-width:299px)]:w-[250px] [@media(min-width:467px)]:w-[400px] ${props.style} `}>
      <div className="outer-border border-2 [@media(min-width:467px)]:h-[400px] [@media(min-width:299px)]:w-[250px] [@media(min-width:467px)]:w-[400px] border-solid border-[#DE9B72] bg-black mx-0 my-auto p-[6px] [@media(min-width:299px)]:h-[250px] h-[200px] w-[200px]">
         <div className='mid-border w-full h-full border-[6px] m-auto border-[#DE9B72]'>
          <img className='absolute object-cover h-[172px] w-[172px] [@media(min-width:299px)]:h-[222px] [@media(min-width:299px)]:w-[222px] [@media(min-width:467px)]:w-[372px] [@media(min-width:467px)]:h-[372px]' src={props.imgUrl} alt="" />
            <div className="inner-border flex justify-center flex-col relative  border-2 border-solid border-[#DE9B72] h-full w-full m-auto">
              <img className="vertical-decoration top-0 absolute left-0 right-0 m-auto w-[11em] " src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"/>
              <img className="vertical-decoration bottom-0 absolute left-0 right-0 m-auto rotate-180 w-[11em]" src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"/>
            </div>
         </div>
      </div>
</div>
  )
}

export default Card
