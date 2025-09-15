import React from 'react'
import { products } from '../config'

const Projects = () => {
    return (
    <section className="w-full flex h-full">
      <div className="container w-full flex flex-col items-center justify-between mx-auto gap-12">
        <h1 className="text-5xl font-bold text-blue-950">Our Projects</h1>
        <div className="">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-10 mb-20">
            {products.map((product,index)=>(
              <li key={index} className=" relative flex flex-col  items-center w-full justify-center">
                <img src={product.image} className="w-full h-full object-scale-down" alt="" />
                <button className="absolute z-10 w-full max-w-11/12 rounded-2xl button-shadow -bottom-8 bg-white text-blue-700
                 p-5 text-xl font-bold">
                  <span className="">{product.title}</span>
                </button>
              </li>
            ))}
          </ul>
          <button className="bg-primary text-white font-semibold text-xl px-10 py-2.5 shadow-effect mb-10 cursor-pointer w-fit mx-auto flex items-center  rounded-4xl">More</button>
        </div>

      </div>
    </section>
  )
}

export default Projects