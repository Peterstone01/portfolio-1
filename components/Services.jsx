import React from "react";
import { services } from "../constants/services";
import { div } from "framer-motion/client";
const Services = () => {
  return (
    <div className=" px-2 lg:px-14 lg:py-5 xl:w-[70%] mx-auto mt-[5%] space-x-2 xl:space-x-5  mb-10 rounded xl:h-[60vh]  w-full ">
      <h1 className="font-bold text-3xl text-center my-10 underline text-primary">
        Services
      </h1>
      <div className="grid lg:grid-cols-8 justify-between items-center space-y-4 space-x-3">
        {services.map((item, i) => (
          <div
            data-aos="fade-up"
            key={i}
            className="col-span-8 lg:col-span-2 px-5   bg-gray-200 p-10 "
          >
            {/* /////////////////////icons and title */}
            <div>
              <div className="mx-auto ">
                <item.Icon className="size-10 text-primary  font-bold" />
                <h1 className="font-bold text-xl my-4">{item.name}</h1>
              </div>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
