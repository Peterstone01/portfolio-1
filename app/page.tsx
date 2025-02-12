import React from "react";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Services from "../components/Services";
import About from "../components/About";
import Projects from "../components/Projects";
// import Footer from "../components/Footer";
// import Testimonials from "../components/Testimonials";
const page = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <About />
      {/* <Testimonials /> */}
      <Services />

      <Projects />

      {/* <Footer /> */}
    </div>
  );
};

export default page;
