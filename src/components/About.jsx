import React from 'react'
import { about_contents } from '../config'

const About = () => {
  return (
    <section className='flex h-full my-20 z-10 w-full '>
        {/* about details starts */}
        <div className="flex flex-col lg:flex-row gap-10 container  mx-auto h-full w-full ">
        {/* content text */}
        <div className="flex w-full flex-col h-full py-10 text-neutral-400  gap-5">
          <h1 className="text-2xl font-semibold">DeshIT-BD</h1>
          <p className="">
            started its journey with the determination of enabling organizations to leverage technology for betterment. Our priority is to deliver impactful solutions with superior user experience. we are highly designed focused and practice SCRUM to
             meet clients requirements and deliver solutions in time and within budget.
          </p>
        </div>
        {/* content boxes */}
        <div className="flex flex-col w-full gap-4  py-10 sm:flex-row">
            {about_contents.map((item,index)=>(
              <div
              initial={{
                                y: 0,
                                x: 20,
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
                              }}
              className="">
                <div key={index} className="flex flex-col mx-auto p-6 place-items-center sm:max-w-52 w-full  custom-shadow">
                    <img src={item.image} alt="" className="object-scale-down h-fit w-fit" />
                    <span className="text-2xl font-bold text-black">{item.count} </span>
                    <h1 className="text-xl w-full text-center font-semibold text-neutral-400">{item.title} </h1>
                </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default About