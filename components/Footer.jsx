import Link from "next/link";
import React from "react";
import { CiHome } from "react-icons/ci";
import { FaUserTie } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarOfLife } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="h-[200px] border-t w-full bg-gray-300 bottom-0 ">
      <div className="px-14 py-5 grid grid-cols-8 ">
        <div className="col-span-2">
          <div className="">
            <Link href="/" className=" font-bold text-black text-5xl">
              STONE
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r
            from-purple-400 to-pink-600"
              >
                web
              </span>
            </Link>
            <p className=" font-bold text-black ">
              my favorite frame-works includes: Next.js, Auth.js React.js,
              Supabase, Prisma, Sanity (CMS), React QUERY, React-Hook-Form
              Tailwind CSS, Redux/Toolkit, Framer Motion, ETC
            </p>
          </div>
        </div>
        <div className="col-span-2 space-y-10">
          {/* //////////////////navigations */}
          <div>
            <h1>Navigations</h1>
            <div className="gap-y-10  text-white ">
              <Link href="/">
                <CiHome className=" w-[20px] h-[20px] text-purple-600" /> Home
              </Link>
              <Link href="/about">
                <FaUserTie className=" w-[20px] h-[20px] text-purple-600" />
              </Link>
              <Link href="/testimonials">
                <FaStar className=" w-[20px] h-[22px] text-purple-600" />
              </Link>
              <Link href="/projects">
                <FaStarOfLife className=" w-[20px] h-[30px] text-purple-600" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-4"></div>
      </div>
    </footer>
  );
};

export default Footer;
