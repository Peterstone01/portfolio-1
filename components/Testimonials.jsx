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
import { testimony } from "../constants/testimony";
import Image from "next/image";
const Testimonials = () => {
  return (
    <div className="px-14 py-10 bg-gray-200 my-10">
      <h1 className=" text-center text-primary font-bold text-3xl py-10">
        What People say about us
      </h1>
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
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-96 w-full"
      >
        {testimony.map((remark) => (
          <SwiperSlide key={remark.name}>
            {/* /////////////////////general container for each testimonial */}
            <div className="w-[60%] lg:grid grid-cols-9  mx-auto">
              <div className="col-span-2 border-r-2">
                <Image
                  src={remark.image}
                  height={100}
                  width={100}
                  alt={remark.title}
                  className="w-[100px] h-[100px] rounded-full object-cover"
                />
              </div>
              {/* /////////////////testimonial texts */}
              <div className="col-span-7 px-10">
                <h1 className="font-bold text-2xl text-primary mb-3-5">
                  {remark.title}
                </h1>
                <p className="font-bold  mb-5 text-primary">{remark.name}</p>
                <p className="">{remark.description}</p>
              </div>
              {/* /////////////////testimonial image */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      ;
    </div>
  );
};

export default Testimonials;
