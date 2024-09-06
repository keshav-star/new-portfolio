import React from "react";
import Navbar from "../../../components/template/Navbar";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaReddit,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const BlogDetail = () => {
  const blog = {
    title: "What is System Design ?",
    time: 1,
    data: [
      {
        heading: "",
        description:
          "Before we start this course, let's talk about what even is system design.<br/><br/>System design is the process of defining the architecture, interfaces, and data for a system that satisfies specific requirements. System design meets the needs of your business or organization through coherent and efficient systems. It requires a systematic approach to building and engineering systems. A good system design requires us to think about everything, from infrastructure all the way down to the data and how it's stored.",
      },
      {
        heading: "Why is system design so important?",
        description:
          "System design helps us define a solution that meets the business requirements. It is one of the earliest decisions we can make when building a system. Often it is essential to think from a high level as these decisions are very difficult to correct later. It also makes it easier to reason about and manage architectural changes as the system evolves.",
      },
    ],
  };
  const icons = [<FaReddit />, <FaLinkedin />, <FaInstagram />, <FaYoutube />];
  return (
    <>
      <Navbar />
      <div className="p-14">
        <div className="text-center flex flex-col gap-3 ">
          <h1 className="text-5xl text-custom-light">{blog.title}</h1>
          <p>{blog.time} minutes read</p>
          <div className="flex items-center gap-3 text-2xl justify-center">
            {icons.map((icon, index) => {
              return (
                <div key={index} className="">
                  {icon}
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-7 gap-10 p-5 px-32">
          <div className="px-10 py-14 flex flex-col gap-10 col-span-2">
            {/* profile */}
            <div className=" flex gap-5">
              <img
                src="https://i.pravatar.cc"
                className="w-10 h-10 rounded-full"
                alt=""
              />
              <div className="">
                <p>Keshav Sandhu</p>
                <p className="text-accent">@Keshav_Sandhu</p>
              </div>
            </div>
            <div className="text-sm">
              <p>PREVIOUS ARTICLE</p>
              <Link to={"/blog/1"} className="text-accent">
                how to code
              </Link>
            </div>
            <div className="text-sm">
              <p>NEXT ARTICLE</p>
              <Link to={"/blog/1"} className="text-accent">
                how to code
              </Link>
            </div>
            <Link to={"/blogs"} className="text-accent flex items-center gap-4">
              <BiArrowBack /> <span> Back To Blog Page</span>
            </Link>
          </div>
          <div className="col-span-5 text-lg">
            <div className="w-[800px] h-[400px]">
            <img src="https://picsum.photos/800/400" loading="lazy" alt="" />
            </div>
            <div className="collapse collapse-arrow bg-base-200 my-10">
              <input type="checkbox" />
              <div className="collapse-title font-medium">Table of Content</div>
              <ul className="collapse-content text-accent list-disc mx-10 px-4">
                {blog.data.slice(1).map((content) => {
                  return <li key={content.heading}>{content.heading}</li>;
                })}
              </ul>
            </div>
            <div className="">
              {blog.data.map((content, index) => {
                return (
                  <div key={index}>
                    <p className="text-2xl font-bold text-custom-light">
                      {content.heading}
                    </p>
                    <p
                      className="py-4"
                      dangerouslySetInnerHTML={{
                        __html: content.description,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
