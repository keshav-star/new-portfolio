import React from "react";
import Navbar from "../../components/template/Navbar";
import { HiDownload } from "react-icons/hi";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen mx-20 xl:mx-80 ">
        <div className="border-l-8 mt-20 border-slate-500 px-4  my-10 h-fit  animate__animated animate__zoomIn">
          <h1 className="text-4xl">ABOUT ME</h1>
          <p className="text-xl mt-3 tracking-wide uppercase">
            I am Keshav, a passionate frontend developer designing breathtaking
            websites and applications.
          </p>
        </div>
        <div className="flex items-start gap-8">
          <img src="/me.jpg" className="w-44 border-4 border-gray-300 animate__animated animate__zoomIn" alt="" />
          <div
            initial="hidden"
            animate="visible"
            className=""
          >
            <p className="text-lg animate__zoomIn animate__animated">
              A passionate frontend developer, I specialize in creating dynamic
              and user-centric experiences powered by modern web technologies.
              With a keen eye for design and a strong foundation in event-driven
              architecture, I bring creativity and functionality together.
              {/* I thrive on solving complex challenges to deliver seamless, responsive interfaces. My work is all about transforming innovative ideas into engaging digital solutions. */}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              <div className="py-3">
                <p>RESIDENCE</p>
                <h4>Karnal, India</h4>
              </div>
              <div className="py-3">
                <p>EXP</p>
                <h4>2 Years</h4>
              </div>
              <div className="py-3">
                <p>EMAIL</p>
                <h4>keshavsandhu.me@gmail.com</h4>
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-3">
              <a
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1PnGxqWTwkdRhHOGOMJfk16Y5Fl48WM9-/view?usp=sharing"
                  )
                }
                className="btn btn-warning text-lg animate__animated animate__zoomIn"
              >
                <HiDownload className="text-xl" /> View Resume
              </a>
              <a
                href="/resume keshav.pdf"
                className="btn btn-warning text-lg animate__animated animate__zoomIn"
                download
              >
                <HiDownload className="text-xl" /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
