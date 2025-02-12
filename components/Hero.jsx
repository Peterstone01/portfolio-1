import { FaWhatsapp } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import about8 from "../public/about8.png";

import hero3 from "../public/hero3.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="px-2 lg:px-14 lg:py-5     xl:h-[80vh] w-full ">
      <div className=" w-full lg:w-[50%] flex  justify-center items-center mt-[3%] flex-col mx-auto">
        {/* ////////////////////image */}
        <div>
          <Image
            src={about8}
            width={200}
            height={200}
            alt="profile image"
            className=" rounded-full w-[150px] h-[150px]"
          />
        </div>
        {/* ///////////////////////hero text */}
        <div className="my-5">
          <p className="   lg:font-bold text-xl text-center lg:text-2xl">
            Hi, I am Peter Ogechukwu,
          </p>
          <h1 className="  font-bold text-3xl text-center my-3 text-primary lg:font-extrabold lg:text-5xl">
            A Fullstack{" "}
          </h1>
          <h1 className="  font-bold text-3xl text-center  text-primary lg:font-extrabold lg:text-5xl">
            Web Developer
          </h1>
          <p className="text-center my-3">
            I am Dynamic, responsive, user-friendly and well optimized Web
            Developer. my favorite frame-works includes: Next.js, Auth.js
            React.js, Supabase, Prisma, Sanity (CMS), React QUERY,
            React-Hook-Form Tailwind CSS, Redux/Toolkit, Framer Motion.
          </p>

          <h2 className=" font-bold text-3xl text-center my-5">
            For Collaboration and about your next project?
          </h2>
          <div className="text-center my-10 space-x-5">
            {/* <button className="bg-primary py-2 px-5 rounded text-white  gap-2">
              Email
            </button> */}
            <Link
              href="https://wa.me/+2348138979218"
              className="bg-primary py-2 px-5 rounded font-bold text-lg text-white"
            >
              Whatsap
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
