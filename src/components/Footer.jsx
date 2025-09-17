import React from 'react'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa6'
import { Link } from 'react-router'

const Footer = () => {
  return (
   <div className="flex items-center w-full justify-center">
    <div className="container mx-auto z-30 m-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      <div className="grid gap-5 my-8">
        <h1 className="text-2xl font-semibold">Links</h1>
      <ul className="grid w-full gap-3">
        <li className="font-medium text-xl  text-neutral-500 hover:text-primary cursor-pointer w-full flex ">
          <Link to="/">Company</Link>
        </li>
        <li className="font-medium text-xl text-neutral-500 hover:text-primary cursor-pointer w-full flex ">
          <Link to="/">Products</Link>
        </li>
        <li className="font-medium text-xl text-neutral-500 hover:text-primary cursor-pointer w-full flex ">
          <Link to="/">Projects</Link>
        </li>
      </ul>
      </div>
      <div className="grid gap-5 my-8">
        <h1 className="text-2xl font-semibold">Trainings</h1>
      <ul className="grid w-full gap-3">
        <li className="font-medium text-xl  text-neutral-500 hover:text-primary cursor-pointer w-full flex ">
          <Link to="/">Flutter</Link>
        </li>
        <li className="font-medium text-xl text-neutral-500 hover:text-primary cursor-pointer w-full flex ">
          <Link to="/">NodeJS</Link>
        </li>
        <li className="font-medium text-xl text-neutral-500 hover:text-primary cursor-pointer w-full flex ">
          <Link to="/">Laravel</Link>
        </li>
      </ul>
      </div>

      <div className="grid gap-5 my-8">
        <h1 className="text-2xl font-semibold">Our Address</h1>
      <ul className="grid w-full gap-2">
        <li className="font-medium text-xl  text-neutral-500 w-full flex ">
          D/36, Block-E Lalmatiya,
        </li>
        <li className="font-medium text-xl text-neutral-500 w-full flex ">
         Dhaka 1207, Bangladesh
        </li>
      </ul>
      <div className="flex gap-5 items-center">
        <button className="p-4 cursor-pointer text-neutral-500 hover:text-white border transition-colors duration-300 border-neutral-300 hover:border-blue-600 rounded-full  hover:bg-blue-600">
          <FaFacebookF />
        </button>
        <button className="p-4 cursor-pointer text-neutral-500 hover:text-white border transition-colors duration-300 border-neutral-300 hover:border-blue-600 rounded-full  hover:bg-blue-600">
          <FaLinkedinIn />
        </button>
      </div>
      </div>

      <div className="grid gap-5 my-8">
        <h1 className="text-2xl font-semibold">Get In Touch</h1>
      <ul className="grid w-full gap-3">
        <input className='outline-none border-neutral-400 border p-2.5 rounded-lg text-xl w-full '
        type="email" name="email" id="email" placeholder='Enter your email..' />
        <button
          className=" w-full py-2 duration-300 rounded-xl text-xl font-semibold bg-primary border-2 border-white text-white cursor-pointer ">Subcribes</button>
      </ul>
      </div>
    </div>
   </div>
  )
}

export default Footer