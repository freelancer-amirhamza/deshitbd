import React from 'react'
import { products } from '../config'
import circle from "../assets/Ellipse 3.jpg"
const Services = () => {
  return (
    <section className="w-full relative flex z-10 h-full">
      <div className="container w-full flex flex-col items-center justify-between mx-auto gap-12">

        <div className=" z-40 flex flex-col gap-5 items-center max-w-2/4  justify-center mx-auto">
        <div className="text-5xl font-bold text-center ">
          <span className="text-primary "> Our</span>
          <span className="text-blue-950 "> Services</span>
        </div>
        <p className="text-lg text-neutral-400 text-center font-medium">
          Strategic online campaigns that lift visibility, attract the right traffic, and boost conversions.
        </p>
      </div>
        <div className="">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-10 mb-20">
            {products.map((product,index)=>(
              <li key={index} className="  flex flex-col  items-center w-full justify-center">
                <img src={product.image} className="w-full h-full object-scale-down" alt="" />
                <button className=" z-10 w-full rounded-b-md button-shadow -bottom-8 bg-white text-blue-700
                 p-5 text-xl font-bold">
                  <span className="">{product.title}</span>
                </button>
              </li>
            ))}
          </ul>
          <button className="bg-primary text-white font-semibold text-xl px-10 py-2.5 shadow-effect mb-10 cursor-pointer w-fit mx-auto flex items-center  rounded-4xl">More</button>
        </div>
      </div>
      <img src={circle} alt="" className="absolute w-[75vh] -z-10 top-60" />
    </section>
  )
}

export default Services;