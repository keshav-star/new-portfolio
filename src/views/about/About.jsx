import React from "react";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className=" mx-5 md:mx-20 xl:mx-40 " id="about">
        <div className="md:border-l-8  border-slate-500 md:px-4  my-10 h-fit  animate__animated animate__zoomIn">
          <h1 className="text-2xl md:text-4xl">ABOUT ME</h1>
          <p className="md:text-xl mt-3 tracking-wide uppercase">
            I am Keshav, a passionate frontend developer designing breathtaking
            websites and applications.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src="/profilepic.jpeg"
            className="w-44 animate__animated animate__zoomIn"
            alt=""
          />
          <div initial="hidden" animate="visible" className="">
            <p className="md:text-lg animate__zoomIn animate__animated">
              I specialize in creating dynamic and user-centric experiences
              powered by modern web technologies. With a keen eye for design and
              a strong foundation in event-driven architecture, I bring
              creativity and functionality together.
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
                className="btn btn-warning animate__animated animate__zoomIn"
              >
                <HiDownload className="text-xl" /> View Resume
              </a>
              <a
                href="/resume keshav.pdf"
                className="btn btn-warning animate__animated animate__zoomIn"
                download
              >
                <HiDownload className="text-xl" /> Download Resume
              </a>
            </div>
          </div>
        </div>
        <Skills />
      </div>
    </>
  );
};

export default About;

const skillsUrls = [
  "https://raw.githubusercontent.com/keshav-star/keshavsandhu/refs/heads/main/assets/img/skills/reactjs.png",
  "https://raw.githubusercontent.com/keshav-star/keshavsandhu/refs/heads/main/assets/img/skills/twind.png",
  "https://raw.githubusercontent.com/keshav-star/keshavsandhu/refs/heads/main/assets/img/skills/adobexd.png",
  "https://raw.githubusercontent.com/keshav-star/keshavsandhu/refs/heads/main/assets/img/skills/c++.png",
  "https://raw.githubusercontent.com/keshav-star/keshavsandhu/refs/heads/main/assets/img/skills/css.png",
  "https://raw.githubusercontent.com/keshav-star/keshavsandhu/refs/heads/main/assets/img/skills/figma.png",
  "https://raw.githubusercontent.com/keshav-star/keshavsandhu/refs/heads/main/assets/img/skills/firebase.png",
  "https://raw.githubusercontent.com/keshav-star/keshavsandhu/refs/heads/main/assets/img/skills/html.png",
  "https://raw.githubusercontent.com/keshav-star/keshavsandhu/refs/heads/main/assets/img/skills/js.png",
  "https://raw.githubusercontent.com/keshav-star/keshavsandhu/refs/heads/main/assets/img/skills/mongo.png",
  "https://raw.githubusercontent.com/keshav-star/keshavsandhu/refs/heads/main/assets/img/skills/mysql.png",
  "https://raw.githubusercontent.com/keshav-star/keshavsandhu/refs/heads/main/assets/img/skills/nodejs.png",
  "https://raw.githubusercontent.com/keshav-star/keshavsandhu/refs/heads/main/assets/img/skills/postgre.png",
];

const Skills = () => {
  return (
    <div className="container p-5 my-10"> 
    <h2 className="text-center mb-4">Skills</h2>
     <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-base-100 before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:from-base-100 after:to-transparent after:content-['']">
        <motion.div
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          initial={{ translateX: 0 }}
          animate={{ translateX: "-50%" }}
          className="flex flex-none gap-16 pr-16"
        >
          {[...new Array(2)].fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {skillsUrls.map((src) => (
                <img key={src} src={src} className="h-20 w-auto flex-none" />
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
