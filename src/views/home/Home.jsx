import React from "react";
import Navbar from "../../components/template/Navbar";
import { BsGithub, BsLinkedin, BsMailbox } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Typed from "typed.js";
import { Link } from "react-router-dom";

const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Software Engineer", "Freelancer"],
      typeSpeed: 100,
      loop: true,
      backSpeed: 60,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex items-center ms-40  px-20 py-5 justify-between font-mono ">
        <div className="flex flex-col items-start justify-center gap-9 my-40">
          <h1 className="text-[3vw] font-bold tracking-wide">
            Hi, I'm Keshav <br />
            <div className="text-[2vw] font-sans font-semibold text-gray-300">
              I'm a <span ref={el} />
            </div>
          </h1>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-5 text-xl ">
              <BsLinkedin className="hover:scale-125 transition-all cursor-pointer" />
              <BsGithub
                onClick={() => window.open("https://github.com/keshav-star")}
                className="hover:scale-125 transition-all cursor-pointer"
              />
              <SiGmail className="hover:scale-125 transition-all cursor-pointer" />
            </div>
            {/* <button className="btn shadow-secondary btn-sm">Contact Now</button> */}
            <button className="button-57" role="button">
              <span className="text">Connect With Me</span>
              <span><Link to="/contact">Contact Now</Link></span>
            </button>
          </div>
        </div>
        <img
          className="select-none w-2/5 bg-blue-900 rounded-bl-badge"
          // src="/hero.svg"
          alt=""
        />
      </div>
      <div className="text-center">
        <h1 className=" text-xl my-5">
          Read More{" "}
          <a href="" className="text-blue-500 hover:text-blue-300">
            About Me
          </a>{" "}
          or{" "}
          <a href="" className="text-blue-500 hover:text-blue-300">
            Schedule a Call Now
          </a>{" "}
        </h1>
        <p>© 2024 Keshav Sandhu</p>
      </div>
    </>
  );
};

export default Home;
