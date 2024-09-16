import React from "react";
import Navbar from "../../components/template/Navbar";
import { HiDownload } from "react-icons/hi";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen mx-80">
        <div className="border-l-8 mt-20 border-slate-500 px-4  my-10 h-fit">
          <h1 className="text-4xl">ABOUT ME</h1>
          <p className="text-xl mt-3 tracking-wide uppercase">
            I am Keshav, a designing breathtaking websites and applications.
          </p>
        </div>
        <div className="flex items-start gap-8">
          <img
            src="/pic.png"
            className="size-60 border-4 border-gray-300"
            alt=""
          />
          <div className="">
            <p className="text-lg">
              A passionate frontend developer, I specialize in creating dynamic
              and user-centric experiences powered by modern web technologies.
              With a keen eye for design and a strong foundation in event-driven
              architecture, I bring creativity and functionality together.
              {/* I thrive on solving complex challenges to deliver seamless, responsive interfaces. My work is all about transforming innovative ideas into engaging digital solutions. */}
            </p>
            <div className="grid grid-cols-3">
              <div className="py-3">
                <h4>BIRTHPLACE</h4>
                <p>Karnal, India</p>
              </div>
              <div className="py-3">
                <h4>BIRTHPLACE</h4>
                <p>Karnal, India</p>
              </div>
              <div className="py-3">
                <h4>BIRTHPLACE</h4>
                <p>Karnal, India</p>
              </div>
            </div>
            <button className="btn btn-warning">
              <HiDownload className="text-xl"/> Download Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
