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
      strings: ["Front-end Developer", "Freelancer"],
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
            <div className="text-[2vw] font-sans font-semibold text-primary my-4">
              I'm a <span ref={el} />
            </div>
          </h1>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-5 text-xl ">
              <BsLinkedin
                onClick={() =>
                  window.open("https://www.linkedin.com/in/keshavsandhu/")
                }
                className="hover:scale-125 transition-all cursor-pointer animate__animated animate__zoomIn"
              />
              <BsGithub
                onClick={() => window.open("https://github.com/keshav-star")}
                className="hover:scale-125 transition-all cursor-pointer animate__animated animate__zoomIn"
              />
              <SiGmail
                onClick={() => window.open("mailto:keshavsandhu.me@gmail.com")}
                className="hover:scale-125 transition-all cursor-pointer animate__animated animate__zoomIn"
              />
            </div>
            {/* <button className="btn shadow-secondary btn-sm">Contact Now</button> */}
            <Link to="mailto:keshavsandhu.me@gmail.com">
              <button className="button-57 animate__animated animate__zoomIn" role="button">
                <span className="text">Connect With Me</span>
                <span>Contact Now</span>
              </button>
            </Link>
          </div>
        </div>
        <img
          className="select-none w-2/5 bg-blue-900 rounded-bl-badge"
          // src="/hero.svg"
          alt=""
        />
      </div>
      <div className="text-center">
        {/* <h1 className=" text-xl my-5">
          Read More{" "}
          <Link to="/about" className="text-blue-500 hover:text-blue-300">
            About Me
          </Link>{" "}
          or{" "} <Link to="/contact" className="text-blue-500 hover:text-blue-300">Schedule a Call Now</Link>{" "}
        </h1> */}
        <p>© 2024 Keshav Sandhu</p>
      </div>
    </>
  );
};

export default Home;

// Consolas, 'Courier New', monospace
