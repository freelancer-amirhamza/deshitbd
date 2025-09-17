import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { clients, testimonials } from '../config'
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Clients = () => {
  return (
    <section className="w-full h-full items-center bg-[#f8cdc93d] py-15 justify-center">
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <h1 className="text-lg font-medium uppercase text-[#fa7b70]"> Testimonial</h1>
        <h1 className="text-5xl font-bold  text-neutral-700 "></h1>
        <div className="flex w-full max-w-4/5  mx-auto justify-center items-center h-full">
          <Swiper
            spaceBetween={0}
            slidesPerView={7}
            autoplay={{
              delay:0,
              disableOnInteraction: false,
            pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            loop={true}
             speed={5000}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
            className='flex w-full h-full justify-center client  items-center '
          >
            {clients.map((item, index) => (
              <SwiperSlide key={index}
             className=" p-5 flex max-w-40 bg-white/140 backdrop-blur-sm  max-h-20 transition-all duration-300 hover:bg-white/50 hover:scale-105  items-center  justify-center rounded-3xl w-full ">
            <img src={item} alt="" className="w-full flex mx-auto max-w-fit " />
          </SwiperSlide>
             ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Clients