import React from 'react'
import image from "../assets/ESBO-logo.jpg"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { testimonials } from '../config'
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Clients = () => {
  return (
    <section className="w-full h-full items-center bg-[#f8cdc93d] py-15 justify-center">
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <h1 className="text-lg font-medium uppercase text-[#fa7b70]"> Testimonial</h1>
        <h1 className="text-5xl font-bold  text-neutral-700 "> What our client say about us</h1>
        <div className="flex w-full max-w-3/5 mx-auto justify-center items-center h-full">
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
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
          </SwiperSlide>
             ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Clients