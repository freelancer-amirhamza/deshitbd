import React from 'react'
import image from "../assets/ESBO-logo.jpg"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { testimonials } from '../config'
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
  return (
    <section className="w-full h-full items-center bg-[#f8cdc93d] py-15 justify-center">
      <div className="w-full flex flex-col items-center justify-center gap-10">
        <h1 className="text-lg font-medium uppercase text-[#fa7b70]"> Testimonial</h1>
        <h1 className="text-5xl font-bold  text-neutral-700 "> What our client say about us</h1>
        <div className="flex w-full max-w-3/5 mx-auto justify-center items-center h-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            // className='flex w-full h-full justify-center mySwiper  items-center '
          >
            {testimonials.map((item, index) => (
                <SwiperSlide
             className="bg-white p-10 flex flex-col w-full  items-center  justify-center rounded-3xl max-w-3/4 ">
            <img src={image} alt="" className="w-full flex mx-auto max-w-40 " />
            <p className="text-neutral-500 py-5 text-2xl font-medium text-center">
              "DeshIT-BD exceeded our expectations with their expertise and professionalism
              in delivering a high-quality app within the agreed timeline and budget.
              Highly recommended for their exceptional post-launch support. "
            </p>
            <div className="grid gap-2 py-5 text-center w-full">
              <p className="text-xl text-neutral-500 uppercase">ceo</p>
              <p className="text-xl text-neutral-700 font-bold">ESBO IT LD</p>
            </div>
          </SwiperSlide>
             ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Testimonials