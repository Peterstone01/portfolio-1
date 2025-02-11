"use client";

import { div } from "framer-motion/client";
import { projects } from "../../constants/projects";
import Image from "next/image";
const Projects = () => {
  return (
    <div className="bg-black-100 md:h-[100vh] xl:h-[100vh]  h-[100vh]  border-b border-t ">
      <div className="md:px-14 md:py-10 my-5 xl:mt-10  sm:px-2 sm:py-2">
        <div className="grid justify-center items-center px-2 lg:space-x-10 grid-cols-10 h-[30vh]">
          {/* //////////////////////left side */}
          <div className="lg:col-span-4 col-span-10 mb-10">
            <h1 className="mb-10 text-center px-3 text-4xl lg:text-5xl font-bold text-white">
              My Recent{" "}
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r
              from-purple-400 to-pink-600"
              >
                Projects
              </span>
            </h1>
            <p className="text-gray-400 ">
              {" "}
              All the projects in this portfolio are aimed at demonstrating the
              understanding of the important framework of a fullstack web
              developement. the major frameworks covered by these projects
              includdes: React.JS, NEXT.js, Postgress database(supabase),
              Authentication(supabase, Auth.js, Clerk, etc), Redux/Toolkits for
              state management and so on
            </p>
          </div>
          {/* //////////////////////Right side */}
          <div className="  lg:col-span-5 col-span-10">
            <div className="lg:grid lg:grid-cols-2 justify-between lg:space-x-5 space-y-3">
              {projects.map((project) => (
                <div key={project.title} className=" bg-slate-900 shadow-lg   ">
                  <div className="">
                    <Image
                      src={project.image}
                      width={500}
                      height={500}
                      priority
                      alt={project.title}
                      className="object-cover w-full h-[100px] lg:w-[400px] lg:h-[150px]"
                    />
                    <div className="text-gray-400 lg:px-3  ">
                      <h1
                        className="bg-clip-text text-transparent bg-gradient-to-r
            from-purple-400 to-pink-600 font-bold text-lg lg:text-2xl my-5 line"
                      >
                        {project.title}
                      </h1>
                      <p className="hidden xl:block">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
