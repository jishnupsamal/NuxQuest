import React from 'react'

function Card(props) {
  return (
<div className={`body dark-background flex justify-center flex-col ${props.style} bg-no-repeat bg-center`} style={{backgroundSize:'140%!important'}}>
      <div className="outer-border border-2 h-[99%] w-[98%] border-solid border-[#DE9B72] bg-black mx-0 my-auto p-[6px]">
         <div className={`mid-border w-full h-full border-[6px] m-auto border-[#DE9B72] bg-[url('${props.imgUrl}')] bg-center bg-cover bg-no-repeat`}>
            <div className="inner-border flex justify-center flex-col relative  border-2 border-solid border-[#DE9B72] h-full w-full m-auto">
              <img className="vertical-decoration top-0 absolute left-0 right-0 m-auto w-[11em]" src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"/>
              <img className="vertical-decoration bottom-0 absolute left-0 right-0 m-auto rotate-180 w-[11em]" src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"/>
            </div>
         </div>
      </div>
</div>
  )
}

export default Card
