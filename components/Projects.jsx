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
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles
import "swiper/css";

import Image from "next/image";
import React from "react";
import { projects } from "../constants/projects";
import Link from "next/link";
const Projects = () => {
  return (
    <div className="px-2 lg:px-14 lg:py-5  bg-background border-t   xl:h-[80vh] w-full">
      <div className="text-center my-3 lg:my-10">
        <h1 className="font-bold text-xl mb-5 text-primary ">
          MY RECENT PROJECTS
        </h1>
        <p>
          All the projects in this portfolio are aimed at demonstrating the
          understanding of the important framework of a fullstack web
          developement. the major frameworks covered by these projects
          includdes: React.JS, NEXT.js, Postgress database(supabase),
          Authentication(supabase, Auth.js, Clerk, etc), Redux/Toolkits for
          state management and so on
        </p>
      </div>
      <div className="w-full lg:w-[80%] lg:mx-auto lg:grid lg:grid-cols-10 lg:justify-center p-10 lg:space-x-10 block  ">
        {/* //////////////////left side */}
        <div className="w-full lg:col-span-2 px-5 py-10 mb-5 h-[450px] bg-gray-200 hidden lg:block">
          <h1 className="font-bold text-xl text-primary  mb-10">PROJECTS</h1>
          <p className="">
            Explore my wide range of fullstack projects, aimed at demonstrating
            my ability to work with the most recent and worldwide accepted
            frameworks
          </p>
        </div>
        {/* //////////////////right side */}
        <div className="col-span-8 space-x-0">
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
            slidesPerView={2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="xl:h-[450px] after: h-[100px] w-full"
          >
            {projects.map((item, i) => (
              <SwiperSlide key={i} className="space-x-0">
                <Link href={item.href} className="">
                  <Image
                    src={item.image}
                    alt="trusted brands"
                    width={100}
                    height={100}
                    property=""
                    className=" h-[300px] w-[600px]  object-cover"
                  />
                </Link>
                <h1 className=" font-bold text-primary my-2">{item.title}</h1>
                <p className="line-clamp-3">{item.description}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Projects;
