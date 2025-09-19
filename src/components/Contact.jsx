import React from 'react'
import bg_image from "../assets/Rectangle 32.jpg"
import bg_image1 from "../assets/ellipse.png"
import { IoCall } from 'react-icons/io5'
import { SlEnvolope } from 'react-icons/sl'

const Contact = () => {
  return (
    <div className="">
      <div className="w-full flex relative  ">
        <img src={bg_image} alt="" className="" />
        <img src={bg_image1} alt="" className="z-30 absolute" />
        <div className="absolute z-50 flex flex-col gap-2 py-5 w-full items-center justify-center ">
          <h1 className="text-4xl font-semibold text-white ">Say Hello</h1>
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center justify-center text-white">
              <IoCall />
              <span className="text-xl">+880 181 332 0587</span>
            </div>
            <div className="flex items-center justify-center text-white">
              <SlEnvolope />
              <span className="text-xl">info@deshit-bd.com</span>
            </div>
          </div>
          <button
          className="bg-white text-secondary px-12 py-3 duration-300 rounded-4xl font-semibold
          transition-colors hover:bg-secondary border-2 border-white hover:text-white cursor-pointer">
            Free Consultation</button>
        </div>
      </div>
    </div>
  )
}

export default Contact