import React, { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { testimonials } from '../config';
import bg from "../assets/Ellipse_3-1.png"
import 'swiper/css';
// import 'swiper/css/navigation';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="w-full items-center bg-[#ffe4e23d] z-0 py-15 justify-center relative">
      <div className="w-full flex flex-col items-center z-30 justify-center gap-10">
        <h1 className="text-lg font-medium uppercase z-30 text-[#fa7b70]">Testimonial</h1>
        <h1 className="text-5xl font-bold z-30 text-neutral-700">What our client say about us</h1>
        <div className="w-full max-w-4xl z-30 mx-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay:3000,
              disableOnInteraction:false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
             onInit={(swiper) => {
              // Override the default navigation elements after Swiper initialization
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            modules={[Navigation,Autoplay]}
            className="z-40" // Added class for specific styling
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className='transition-all duration-300 z-30 '>
                <div className="bg-white p-10 flex flex-col items-center justify-center rounded-3xl mx-auto w-full max-w-3xl"> {/* Added max-width and mx-auto */}
                  <img src={item.image} alt="" className="w-full mx-auto max-w-36" />
                  <p className="text-neutral-500 py-5 text-lg font-medium text-center">
                    {item.description}
                  </p>
                  <div className="grid gap-2 py-5 text-center w-full">
                    <p className="text-xl text-neutral-500 uppercase">{item.position}</p>
                    <p className="text-xl text-neutral-700 font-bold">{item.company}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <button ref={prevRef} className="text-2xl text-neutral-400 -mx-5 -mt-10 absolute top-1/2 z-50 cursor-pointer p-5  hover:text-primary  ">
                <FaArrowLeftLong />
              </button>
              <button ref={nextRef} className="text-2xl right-1.5 absolute top-1/2 text-neutral-400 -mx-5 -mt-10 z-50  cursor-pointer p-5  hover:text-primary  ">
                <FaArrowRightLong />
              </button>
          </Swiper>
        </div>
      </div>
      <img src={bg} alt="" className="absolute z-10 max-w-2xl w-full top-0 right-0 " />
    </section>
  );
};

export default Testimonials;