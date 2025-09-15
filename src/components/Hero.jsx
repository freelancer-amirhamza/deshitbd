import React from 'react'
import image from "../assets/Vector 1.jpg"
import circle from "../assets/circle-shape.png"
import Rectangle from "../assets/Rectangle 32.jpg"
import { Navigation, Pagination, } from 'swiper/modules'
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import { hero_slides } from '../config'

const Hero = () => {
  return (
    <section className=' w-full flex items-center justify-center h-full '>
      {/* hero bg images */}
      <div className=" grid inset-0 bg-white  w-full min-h-screen ">
        <img src={Rectangle} className='object-cover flex inset-0 w-full h-full max-md:min-h-80 ' alt="" />
        <img src={image} className=' inset-0 object-cover w-full h-full min-h-100' alt="" />
      </div>
      <img src={circle} alt="" className='absolute z-10 -top-53 -left-44   ' />


      {/* slides starts */}
      <div className="container absolute  flex ">
      <div className="  h-full flex items-center justify-center w-full  z-20 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[ Navigation]}
          className='flex w-full h-full justify-center  items-center '
        >
          {hero_slides.map((slide, index) => (
            <SwiperSlide key={index} className="w-full items-center justify-center h-full">
              <div className="flex w-full h-full  items-center md:pt-0 pt-36  justify-center sm:px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center  sm:px-10 gap-5 text-white">
                   {/* slide content starts */}
                  <div className="flex flex-col sm:gap-3">
                    <h1 className="sm:text-6xl text-5xl md:font-bold font-semibold">{slide.heading}</h1>
                    <h2 className="text-4xl ">{slide.title}</h2>
                    <p className="text-center max-w-fit text-xl font-medium ">{slide.text}</p>
                  </div>
                  {/* slide image */}
                  <div className=" w-full h-full  max-h-130">
                    <img src={slide.image} alt="" className='w-full h-full object-scale-down' />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
      {/* slides ends */}
    </section>
  )
}

export default Hero