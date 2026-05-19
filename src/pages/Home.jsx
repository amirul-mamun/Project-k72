import React from 'react'
import Video from '../components/home/Video'
import HeroBottomText from '../components/home/HeroBottomText'

const Home = () => {
  return (
    <div >
        <div className='h-screen w-screen fixed co'><Video/></div>
        <div className='h-screen w-screen relative flex ' >
             <HomeHeroText />
             <HeroBottomText/>
        </div>
    </div>
  )
}

export default Home