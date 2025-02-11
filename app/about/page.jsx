"use client";

import { useState } from "react";

import about8 from "../../public/about8.jpg";
import Image from "next/image";
const About = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const tabs = [
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "certification", label: "Certifications" },
  ];
  const contents = {
    skills: (
      <div className="p-5 xl:px-10 xl:py-5">
        <h1 className="font-bold text-xl text-white">
          My acquired skills includes but not restricted to:
        </h1>
        <p className=" text-gray-400 text-sm xl:text-base  ">
          React.js (CSR), Next.js (SSR), Auth.js (Authentication) Supabase,
          (Postgress Database), Prisma Adapter, Sanity (CMS Studio), Groq QUERY,
          (sanity query language), Tanstack Query (React Query), Redux/Toolkit
          (State Management), React Hook form, Framer Motion.
        </p>
      </div>
    ),
    education: (
      <div className="px-10 py-5">
        <h1 className="font-bold text-xl mb-5 text-white">
          Certifications acquired after the studies incldes;
        </h1>
        <ul className="text-gray-300">
          <li>
            <span className="font-bold text-gray-400">UDEMY</span>: The Ultimate
            React Course 2024: React, Next.js, Redux & More,
          </li>
          <li>
            {" "}
            <span className="font-bold">UDEMY</span>: React- The Complete Guide
            2025 (incl. Next.js, Redux),
          </li>
          <li>FreeCodeCamp Responsive Web Design</li>
        </ul>
      </div>
    ),
    certification: (
      <div className="px-10 py-5">
        <h1 className="font-bold text-xl mb-5 text-white">
          Certifications acquired after the studies incldes;
        </h1>
        <ul className=" text-gray-300">
          <li>
            The Certified Ultimate React Course 2024: React, Next.js, Redux &
            More
          </li>
          <li>
            React - The Complete Guide 2025 (incl. Next.js, Redux)- Certified
          </li>
          <li>Certified FreeCodeCamp Responsive Web Design</li>
        </ul>
      </div>
    ),
  };
  return (
    <div className="bg-black-100 md:h-[100vh] xl:h-[100vh]   border-b border-t ">
      <div className="md:px-14 md:py-10 my-[7%] sm:px-2 sm:py-2">
        <h1>ABOUT ME</h1>
        {/* //////////////////////left */}

        {/* //////////////////////////////////////////////////////////// */}
        <div className="grid mx-auto lg:grid-cols-10 px-2 lg:px-14 lg:space-x-14">
          <div className="col-span-3 w-full lg:border-r-2">
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              Captivating
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r
            from-purple-400 to-pink-600"
              >
                Stories About Me
              </span>
            </h1>
            <p className="text-gray-400 lg:py-10 py-2 my-10 px-1 lg:px-10">
              I am a full stack web developer with a passion for creating
              interactive and responsive web applications. I have experience
              working with Next.js, React.js, Redux/Toolkit, Auth.js, Supabase,
              PostgreSQL, Prisma, HTML, CSS, Tailwind, Sanity CMS and Git. I am
              a quick learner and I am always looking to expand my knowledge and
              skill set. I am a team player and I am excited to work with others
              to create amazing applications.
            </p>
          </div>
          <div className="col-span-7 my-10">
            <div className="w-full xl:w-[100%] lg:w-[95%] space-y-2 lg:space-y-10 min-h-[50] items-center justify-between lg:space-x-2 xl:-space-x-40 mx-auto block md:grid md:grid-cols-12 ">
              <div className="lg:rounded-full w-full md:col-span-5  flex items-center justify-center px-5 md:w-[400px]  md:h-[400px] relative">
                <Image
                  src={about8}
                  alt="about image"
                  height={400}
                  width={300}
                  className=" h-[200px] md:h-[400px] w-[200px] md:w-[400px]  rounded-full left-0"
                />
              </div>
              {/* ////////////////////right */}
              <div className="w-full md:col-span-7 px-5 md:px-10 bg-slate-900 z-10 ">
                {/* ////////////////////////Tabs (button) */}
                <div className="flex justify-start my-1">
                  {tabs.map((tab) => (
                    <div key={tab.id}>
                      <button
                        className={` px-4 md:px-5 rounded-lg font-bold py-2 text-white ${
                          activeTab === tab.id
                            ? "bg-clip-text text-transparent bg-gradient-to-r:from-purple-400 to-pink-600  border-b-2 border-white"
                            : "text-purple-600"
                        } `}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        {tab.label}
                      </button>
                    </div>
                  ))}
                </div>
                {/* ////////////////////////////tab contents */}
                <div className="text-gray">{contents[activeTab]}</div>
              </div>
            </div>
          </div>
        </div>

        {/* ///////////////////////////////////////////////////////////// */}
      </div>
    </div>
  );
};

export default About;
