import  { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'


const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)
  const imagediv = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    "https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1642364861013-2c33f2dcfbcf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661610771229-2fc225e093aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1544168190-79c17527004f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1682433070003-ebc1dff983ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww"
  ]


  useGSAP(function(){
    gsap.to(imagediv.current,{
      scrollTrigger:{
        trigger: imagediv.current,
        markers: true,
        start: "top 35%",
        end: "top -100%",
        scrub: 2,
        pin: true,
        onUpdate: (elem) =>{
          let imageIndex = Math.floor(elem.progress * imageArray.length)
          if(imageIndex < 1){
            imageRef.current.src =  imageArray[imageIndex];
          } else{
            imageRef.current.src = imageArray[imageIndex -1]
          }
        }
      }
      
    })
  })
  
  return (
    <div className='text-black' >
      <div className="section1">
        <div ref={imagediv} className='absolute h-[76] w-60 rounded-2xl overflow-hidden object-cover top-[35%] left-[32%]' >
         <img ref={imageRef} src="https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
       </div>
       <div className='relative' >
         <div className=' mt-[55vh] '  >
           <h1 className='text-[18vw] uppercase leading-[16vw] text-center ' >Soixan7e <br /> douze</h1>
         </div>
         <div className='pl-[40%] mt-20' >
            <p className='text-5xl' > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis soluta laudantium illum id perspiciatis, labore nesciunt officia ullam eius omnis quae, unde recusandae veritatis, perferendis asperiores voluptate! Eveniet nobis, nostrum voluptas commodi quae ut voluptate eum sunt ea et aspernatur libero? Cumque illo sequi reiciendis?</p>
         </div>
       </div>
      </div>
      <div className="section2 h-screen "></div>

    </div>
  )
}

export default Agence