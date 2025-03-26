import Link from "next/link";
import React from "react";
import { CiHome } from "react-icons/ci";
import { FaUserTie } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarOfLife } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="h-[300px] mt-10 border-t w-full bg-gray-900 bottom-0 ">
      <div className="px-14 py-5 ">
        <div className="text-center">
          <h1 className="text-white font-bold text-2xl lg:text-4xl ">
            STONEweb
          </h1>
          <hr className="mt-3" />
          <h5 className=" text-lg text-gray-300 pt-3 pb-5">
            Fullstack web developer
          </h5>

          <p></p>
          <div className="mb-0 text-gray-400">
            <p>All Right Reserved @peterstone</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
