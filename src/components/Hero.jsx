import React from 'react'
import image from "../assets/Vector 1.jpg"
import circle from "../assets/circle-shape.png"
import Rectangle from "../assets/Rectangle 32.jpg"
import { Navigation, Pagination, } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import { hero_slides } from '../config'

const Hero = () => {
  return (
    <div className=' w-full flex h-full  relative '>
      <div className="absolute grid inset-0 w-full h-full">
        <img src={Rectangle} className='object-cover w-full h-full' alt="" />
        <img src={image} className=' inset-0 object-cover w-full h-full' alt="" />
      </div>
      <img src={circle} alt="" className='absolute z-10 -top-53 -left-44   ' />
      <div className="relative w-full h-full z-20 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className='flex w-full h-screen justify-center mySwiper  overflow-hidden items-center '
        >
          {hero_slides.map((slide, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <div className="flex w-full h-full items-center justify-center px-4">
                <div className="flex flex-col md:flex-row w-full max-w-6xl items-center">
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-7xl font-bold">{slide.heading}</h1>
                    <h2 className="text-6xl">{slide.title}</h2>
                    <p className="text-center text-2xl font-semibold md:text-left">{slide.text}</p>
                  </div>
                  <div className="flex-1 h-80">
                    <img src={slide.image} alt="" className='w-full h-full object-contain' />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>

    </div>
  )
}

export default Hero