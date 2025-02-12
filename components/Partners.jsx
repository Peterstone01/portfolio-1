"use client";
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
// import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles
import "swiper/css";

import Image from "next/image";
import { partners } from "../constants/partners";
const Partners = () => {
  return (
    <div className="px-2 lg:px-14 lg:py-5 bg-gray-200  mb-10 rounded h-[20vh] w-full ">
      {" "}
      <div>
        <h1 className="font-bold text-2xl mt-2 mb-10 text-center underline  lg:text-3xl text-primary">
          Our Trusted Partners
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
          spaceBetween={30}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="xl:h-20 h-[100vh] w-full"
        >
          {partners.map((item, i) => (
            <SwiperSlide key={i}>
              <Image
                src={item.image}
                alt="trusted brands"
                width={100}
                height={100}
                property=""
                className=" h-[30px] "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;
