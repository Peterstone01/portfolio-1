"use client";

import { useState } from "react";

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
        <h1 className="font-bold text-xl ">
          My acquired skills includes but not restricted to:
        </h1>
        <p className="text-sm xl:text-base  ">
          React.js (CSR), Next.js (SSR), Auth.js (Authentication) Supabase,
          MONGO db, (Postgress Database), Prisma Adapter, Sanity (CMS Studio),
          Groq QUERY, (sanity query language), Tanstack Query (React Query),
          Redux/Toolkit (State Management), React Hook form, Framer Motion.
        </p>
      </div>
    ),
    education: (
      <div className="px-10 py-5">
        <h1 className="font-bold text-xl mb-5 ">
          Certifications acquired after the studies incldes;
        </h1>
        <ul className="">
          <li>
            <span className="font-bold ">UDEMY</span>: The Ultimate React Course
            2024: React, Next.js, Redux & More,
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
        <h1 className="font-bold text-xl mb-5 ">
          Certifications acquired after the studies incldes;
        </h1>
        <ul className=" ">
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
    <div className=" lg:h-[40vh] xl:h-[80vh] border-b  my-5 ">
      <h1 className="text-center text-primary text-xl font-bold my-10 xl:text-3xl">
        ABOUT ME
      </h1>
      <div className="grid lg:grid-cols-12 gap-4 space-y-4 xl:w-[80%] w-full mx-auto">
        {/* //////////////////////////left side */}
        <div data-aos="fade-up" className="col-span-6 bg-gray-100 pb-5 px-3 ">
          {" "}
          <h1 className="text-3xl px-3 lg:text-4xl font-bold text-primary">
            Captivating stories about me
          </h1>
          <p
            data-aos="fade-up"
            className=" lg:py-5py-2 my-5 text-black
            lg:px-5"
          >
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with Next.js, React.js, Redux/Toolkit, Auth.js, Supabase,
            PostgreSQL, Prisma, HTML, CSS, Tailwind, Sanity CMS and Git. I am a
            quick learner and I am always looking to expand my knowledge and
            skill set. I am a team player and I am excited to work with others
            to create amazing applications.
          </p>
        </div>
        {/* //////////////////////////right side */}
        <div
          data-aos="fade-up"
          className="col-span-6 w-full py-10 bg-slate-200"
        >
          {/* ////////////////////////Tabs (button) */}
          <div className="flex justify-between w-full my-1">
            {tabs.map((tab) => (
              <div key={tab.id}>
                <button
                  className={` px-4 md:px-5 rounded-lg font-bold py-2${
                    activeTab === tab.id
                      ? "border-b-2 border-primary text-primary"
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
          <div className="text-black">{contents[activeTab]}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
