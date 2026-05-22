import React from 'react'
import Video  from './Video'


const HomeHeroText = () => {
  return (
    <div className='pt-8' >
       <div className='text-[8vw] leading-[7vw] flex justify-center items-center' >L'ETINCELLE</div>
       <div className='text-[8vw] leading-[7vw] flex justify-center items-start' >QUI <div className='h-[11vh] mt-5 w-[11.5vw] rounded-full  object-cover overflow-hidden' ><Video key="small-video"/></div> GENERE</div>
       <div className='text-[8vw] leading-[7vw] flex justify-center items-center' >LA CREATIVEITE </div>
    </div>
  )
}

export default HomeHeroText