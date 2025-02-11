// "use client";
// import React from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// // import Swiper core and required modules
// import {
//   Autoplay,
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
// } from "swiper/modules";
// // Import Swiper styles
// import "swiper/css";
// // import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// // Import Swiper styles
// import "swiper/css";
// import { testimony } from "../constants/testimony";
// import Image from "next/image";
// const Testimonials = () => {
//   return (
//     <div className="px-14 py-10">
//       <h1>What People say about us</h1>
//       <Swiper
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         navigation={true}
//         loop={true}
//         modules={[Autoplay, Navigation, Pagination]}
//         pagination={{ clickable: true }}
//         scrollbar={{ draggable: true }}
//         /////////////////////////
//         spaceBetween={30}
//         slidesPerView={2}
//         onSlideChange={() => console.log("slide change")}
//         onSwiper={(swiper) => console.log(swiper)}
//         className="h-96 w-full"
//       >
//         {testimony.map((remark) => (
//           <SwiperSlide key={remark.name}>
//             {/* /////////////////////general container for each testimonial */}
//             <div className="">
//               {/* /////////////////testimonial texts */}
//               <div>
//                 <h1>{remark.title}</h1>
//                 <p>{remark.description}</p>
//               </div>
//               {/* /////////////////testimonial image */}
//               <div>
//                 <Image
//                   src={remark.image}
//                   height={100}
//                   width={100}
//                   alt={remark.title}
//                   className="w-[100px] h-[100px] rounded-full object-cover"
//                 />
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       ;
//     </div>
//   );
// };

// export default Testimonials;
