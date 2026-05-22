import React from 'react'
import { Link } from 'react-router-dom'

const HeroBottomText = () => {
  return (
  <div className='flex items-center justify-center gap-4'>
        <div className='border-3 hover:border-lime-400 hover:text-lime-400 h-32 flex items-center px-10 border-white rounded-full uppercase' >
          <Link className='text-[6vw] -mt-1 leading-tight' to="/projects" >Projects</Link>
        </div>
        <div className='border-3 hover:border-lime-400 hover:text-lime-400 h-32 flex items-center px-10 border-white rounded-full uppercase' >
          <Link className='text-[6vw] -mt-1 leading-tight' to= '/agence'>Agence</Link>
        </div>
  </div>
  )
}

export default HeroBottomText