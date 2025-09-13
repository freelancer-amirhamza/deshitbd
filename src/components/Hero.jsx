import React from 'react'
import image  from "../assets/Vector 1.jpg"

const Hero = () => {
  return (
    <div className=''>
        <div className="flex   w-full h-full">
            <img src={image} className='object-cover w-full h-full ' alt="" />
        </div>
    </div>
  )
}

export default Hero