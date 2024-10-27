import React from "react";
import Navbar from "../../components/template/Navbar";
import WorkDetailedCard from "./components/WorkDetailedCard";

const works = [
  {
    name: "Deepak Chopra Ai ChatBot",
    url: "https://digitaldeepak.ai",
    description:
      "A Chatbot Website for Renowned Dr. Deepak Chopra that provides you chatting with him.",
    imgUrl: "/works/deepakai.png",
    githubUrl: "",
    techs: ["react", "tailwind", "openai"],
  },
  {
    name: "Pepaw Pet Shop",
    url: "https://pepaw.pet",
    description:
      "A Pet Shop Website for Pepaw Pet Shop that provides pet products and services.",
    imgUrl: "/works/pet.png",
    githubUrl: "",
    techs: ["react", "scss"],
  },
  {
    name: "Ielts Center",
    url: "https://ielts-iguro.netlify.app/",
    description:
      "A Website for Ielts Center that provides Ielts courses and other services.",
    imgUrl: "/works/ielts.png",
    githubUrl: "",
    techs: ["react", "scss"],
  },
  {
    name: "Edatech Coaching",
    url: "https://eduact-keshav.netlify.app/",
    description:
      "A Education institute website for coaching and school students learning subjects.",
    imgUrl: "/works/edatech.png",
    githubUrl: "",
    techs: ["react", "scss"],
  },
  {
    name: "Hotel Booking",
    url: "https://optimumholiday.com/",
    description:
      "A Hotel Booking Website for Optimum Holiday that provides hotel booking.",
    imgUrl: "/works/hotel.png",
    githubUrl: "",
    techs: ["react", "scss"],
  },
  {
    name: "Chemistry Coaching",
    url: "https://chemtime.in/",
    description:
      "A Chemistry Coaching Website for Chemtime that provides chemistry courses and other services.",
    imgUrl: "/works/chemtime.png",
    githubUrl: "",
    techs: ["react", "scss"],
  },
];

const categories = [
  { id: 1, name: "All" },
  { id: 2, name: "ReactJs" },
  { id: 3, name: "Nodejs" },
  { id: 4, name: "NextJs" },
];

const Works = () => {
  return (
    <>
      <Navbar />
      <div className=" md:px-10 lg:px-20 py-10">
        <p className="text-4xl font-semibold font-mono text-center">My Works</p>
        {/* <div className="w-full flex items-center justify-center gap-2">
          {categories.map((category) => {
            return (
              <span
                key={category.id}
                onClick={() => {}}
                className={"my-1 leading-5 underline"}
              >
                {category.name}
              </span>
            );
          })}
        </div> */}
        {/* Work Card */}
        <div className="flex flex-wrap justify-between md:gap-7 p-3 m-2 md:p-5">
          {works.map((work, index) => (
            <WorkDetailedCard
              key={index}
              className="animate__animated animate__zoomIn"
              work={work}
              // className={(index + 1) % 2 === 0 ? "md:mt-10" : "md:mt-0"}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Works;
