"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles
import "swiper/css";
import { testimony } from "../../constants/testimony";
import Image from "next/image";
const Testimonials = () => {
  return (
    <div className="bg-black-100 md:h-[100vh] xl:h-[100vh]   border-b border-t ">
      <div className="md:px-14 md:py-10 mt-[30%] xl:mt-[7%]  sm:px-2 sm:py-2">
        <div className="">
          <div className="col-span-3 w-full lg:border-r-2">
            <h1 className="mb-[10%] text-center px-3 text-4xl lg:text-5xl font-bold text-white">
              What People{" "}
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r
            from-purple-400 to-pink-600"
              >
                Say About Me
              </span>
            </h1>
          </div>
        </div>
        {/* ///////////////////////////////right */}
        <div>
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            /////////////////////////
            spaceBetween={30}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="xl:h-72 h-[100vh] w-full"
          >
            {testimony.map((remark) => (
              <SwiperSlide key={remark.name}>
                {/* /////////////////////general container for each testimonial */}
                <div className="px-1 md:px-10 w-full  xl:w-[60%] mx-auto  ">
                  <div className="xl:grid  block grid-cols-10 justify-center items-center">
                    <div className="xl:col-span-3  justify-end items-end">
                      {/* /////////////////testimonial image */}
                      <div>
                        <Image
                          src={remark.image}
                          height={100}
                          width={100}
                          alt={remark.title}
                          className="w-[100px] h-[100px] rounded-full object-cover mx-auto"
                        />
                        <div className="text-center">
                          <h1 className="font-bold text-xl text-white">
                            {remark.name}
                          </h1>
                          <h3
                            className="bg-clip-text text-transparent bg-gradient-to-r
            from-purple-400 to-pink-600"
                          >
                            {remark.job}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="xl:col-span-7 px-3 md:px-10">
                      {/* /////////////////testimonial texts */}
                      <div>
                        <h1
                          className="font-bold text-4xl text-center bg-clip-text text-transparent bg-gradient-to-r
            from-purple-400 to-pink-600 py-5"
                        >
                          {remark.title}
                        </h1>
                        <p className="text-gray-300">{remark.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
