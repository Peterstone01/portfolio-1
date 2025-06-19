import { FaWhatsapp } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import about1 from "../public/about1.jpg";

import hero3 from "../public/hero3.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="px-2 lg:px-14 lg:py-5 border-b my-5     xl:min-h-[100vh] w-full ">
      <div className=" w-full  flex  justify-center items-center py-10  flex-col mx-auto bg-gray-100">
        {/* ////////////////////////////// */}
        <div className="grid grid-cols-12 space-x-4 items-center xl:-space-x-20">
          <div className="col-span-5">
            {" "}
            <div>
              <Image
                src={about1}
                width={200}
                height={200}
                alt="profile image"
                className="  rounded lg:rounded-3xl lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] object-contain"
              />
            </div>
          </div>
          <div className="col-span-7">
            {" "}
            <div className="my-5">
              <p className="   lg:font-bold text-xl  lg:text-2xl">
                Hi, I am Peter Ogechukwu,
              </p>
              <h1 className="  font-bold text-3xl my-1 lg:my-3 text-primary lg:font-extrabold lg:text-5xl">
                A Fullstack{" "}
              </h1>
              <h1 className="  font-bold    text-primary lg:font-extrabold lg:text-5xl">
                Web Developer
              </h1>
              <p className=" hidden lg:block my-3">
                I am Dynamic, responsive, user-friendly and well optimized Web
                Developer. my favorite frame-works includes: Next.js, React.js,
                Mongo Database, React QUERY, React-Hook-Form Tailwind CSS,
                Redux/Toolkit, Framer Motion, MERN Stack.
              </p>

              <h2 className="hidden lg:block font-bold text-lg lg:text-3xl  my-5">
                For Collaboration and about your next project?
              </h2>
              <div className="hidden lg:block my-10 space-x-5">
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
        <div>
          <p className=" lg:hidden my-3">
            I am Dynamic, responsive, user-friendly and well optimized Web
            Developer. my favorite frame-works includes: Next.js, Auth.js
            React.js, Supabase, Prisma, Sanity (CMS), React QUERY,
            React-Hook-Form Tailwind CSS, Redux/Toolkit, Framer Motion.
          </p>

          <h2 className="lg:hidden font-bold text-3xl  my-5">
            For Collaboration and about your next project?
          </h2>
          <div className="lg:hidden my-10 space-x-5">
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
        {/* ////////////////////////////// */}
        {/* ////////////////////image */}

        {/* ///////////////////////hero text */}
      </div>
    </div>
  );
};

export default Hero;
