import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import {useLocation} from "react-router-dom"

const Stairs = ({children}) => {
      const currentPath = useLocation().pathname
       const pageRaf = useRef(null)
      console.log(currentPath)
      
    const stairsParentRef= useRef(null)
    useGSAP( function(){       
        const tl = gsap.timeline()
        
        tl.to(stairsParentRef.current,{
            display:'block'
        })
        tl.from('.stairs', {
            height:0,
            stagger: {
                amount: -0.25
            }
        }),
        tl.to('.stairs',{
            y: '100%',
            stagger:{
                amount:-0.25
            }
        })
        tl.to(stairsParentRef.current,{
            display:'none'
        })
        tl.to('.stairs',{
            y:0
        })
        gsap.from(pageRaf.current,{
            opacity:0,
            delay:1,
        })
    },[currentPath])
  return (
    <div>

        <div ref={stairsParentRef} className='h-screen w-full z-20 fixed top-0 ' >
          <div  className='h-screen w-full flex' >
          <div className='stairs h-full w-1/5 bg-black'></div>
          <div className='stairs h-full w-1/5 bg-black'></div>
          <div className='stairs h-full w-1/5 bg-black'></div>
          <div className='stairs h-full w-1/5 bg-black'></div>
          <div className='stairs h-full w-1/5 bg-black'></div>
          </div>
        </div>

        <div ref= {pageRaf} >
            {children}
        </div>
    </div>
  )
}

export default Stairs