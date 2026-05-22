import React from 'react'
import videoFile from '../../assets/69496b2d.mp4'

const Video = () => {
  return (
    <div className='h-full w-full' >
        <video autoPlay loop muted playsInline className='h-full w-full object-cover'> <source src={videoFile} type="video/mp4" /></video>
    </div>
  )
}

export default Video