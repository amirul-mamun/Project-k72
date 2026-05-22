import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HeroBottomText from '../components/home/HeroBottomText'

const Home = () => {
  return (
    <div >
        <div className='h-screen w-screen fixed'><Video key="bg-video"/></div>
        <div className='h-screen w-screen relative  flex flex-col justify-between items-center' >
             <HomeHeroText/>
             <HeroBottomText/>
        </div>
    </div>
  )
}

export default Home