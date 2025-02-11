import React from "react";
import { CiHome } from "react-icons/ci";
import { FaUserTie } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarOfLife } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";

import hero3 from "../public/hero3.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="px-2 md:px-14 py-10  bg-black-100   h-[100vh] w-full relative">
      <div className=" px-2 md:px-14 md:grid items-center md:grid-cols-12 relative top-[10%] justify-center md:justify-between mx-auto ">
        {/* ///////////////////////////////////texts */}
        <div className="col-span-7   ">
          <h4 className="text-white font-bold">Hello, I'M</h4>
          <h1
            className="font-bold md:font-extrabold bg-clip-text text-transparent bg-gradient-to-r
            from-purple-400 to-pink-600 text-2xl md:text-4xl lg:text-5xl mb-2 mt-2 "
          >
            Peters
          </h1>
          {/* ///////////////////////typing animation */}
          <h1
            className="font-bold  md:font-extrabold bg-clip-text text-transparent bg-gradient-to-r
            from-purple-400 to-pink-600 text-2xl md:text-4xl lg:text-5xl mb-5 mt-2 "
          >
            OGECHUKWU
          </h1>
          ////////////////////////////End of typing animation
          <h3
            className="text-white mb-3 font-bold text-xl md:text-3xl  py-2 px-5 bg-gradient-to-r
            from-purple-600 to-pink-800 "
          >
            Fullstack Web developer;
          </h3>
          <p
            className="text-white my-2 bg-clip-text text-transparent bg-gradient-to-r
            from-purple-400 to-pink-600 line-clamp-1 md:line-clamp-none"
          >
            I am Dynamic, responsive, user-friendly and well optimized websites
          </p>
          <p className="text-gray-400 font-bold  ">
            my favorite frame-works includes: Next.js, Auth.js React.js,
            Supabase, Prisma, Sanity (CMS), React QUERY, React-Hook-Form
            Tailwind CSS, Redux/Toolkit, Framer Motion, ETC
          </p>
          {/* <div className="flex space-x-2 md:space-x-10">
            <button
              className="py-4 px-5 bg-gradient-to-b
            from-purple-600 to-pink-800 my-10 rounded-full font-bold  text-white"
            >
              See my Portfolio
            </button>
            <button className="md:py-4 md:px-5 py-1 px-2 border border-purple-600 my-10 rounded-full font-bold  text-white">
              Download CV
            </button>
          </div> */}
        </div>
        <div className="hidden  md:col-span-5 justify-center items-center md:flex md:justify-end  relative">
          <Image
            src={hero3}
            width={400}
            height={500}
            alt="hero-image"
            className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px]  lg:h-[400px] xl:h-[500px] xl:w-[500px]"
          />
        </div>
        {/* //////////////////navigations */}
        <div>
          <div className="flex mt-16 w-[20%] lg:hidden items-center justify-start space-x-10">
            <Link href="/">
              <CiHome className=" w-[30px] h-[30px] text-purple-600" />
            </Link>
            <Link href="/about">
              <FaUserTie className=" w-[30px] h-[30px] text-purple-600" />
            </Link>
            <Link href="/testimonials">
              <FaStar className=" w-[30px] h-[30px] text-purple-600" />
            </Link>
            <Link href="/projects">
              <FaStarOfLife className=" w-[30px] h-[30px] text-purple-600" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
