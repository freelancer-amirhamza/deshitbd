import React from 'react'
import { products, services } from '../config'
import { motion } from 'framer-motion'
import circle from "../assets/Ellipse 3.jpg"
const Services = () => {
  const parentVariants = {
    initial: {},
    hover: {}
  };

  const childVariants = {
    initial: { width: 0 },
    hover: { width: "100%", transition: { duration: 0.3 } }
  };
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
            {services.map((service, index) => (
              <motion.div
                initial={{
                  y: 40,
                  x: 0,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "tween",
                    duration: 1,
                    delay: 0.3 * index,
                    ease: [0.25, 0.25, 0.25, 0.75]
                  }
                }} className=" ">
                <li key={index} className="  flex flex-col  items-center w-full justify-center">
                  <img src={service.image} className="w-full h-full object-scale-down scale-100 hover:scale-110 transition-all duration-700 ease-in-out cursor-pointer" alt="" />
                  <button className="  bg-blue-950 group -mt-4 z-40 w-full rounded-b-md button-shadow -bottom-8 text-white
                  text-xl font-bold">
                    <motion.span
                      className="w-fit mx-auto p-5 gap-2 flex flex-col"
                      variants={parentVariants}
                      initial="initial"
                      whileHover="hover"
                      style={{ cursor: "pointer" }}
                    >
                      <div>{service.title}</div>
                      <motion.div
                        variants={childVariants}
                        className="h-0.5 bg-white"
                        style={{ width: 0 }}  // starting width 0
                      />
                    </motion.span>
                  </button>
                </li>
              </motion.div>
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