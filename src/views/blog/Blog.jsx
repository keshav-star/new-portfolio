import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/template/Navbar";
import { HiArrowRight } from "react-icons/hi";
import blogData from "./blog.json";

const Blog = () => {
  const navigate = useNavigate();

  const randomBlog = blogData.blogs[Math.floor(Math.random() * blogData.total)];
  return (
    <>
      <Navbar />
      <div className="px-20 py-5">
        <div className=" flex items-center justify-between">
          <h1 className="text-xl my-5 font-bold">Top Blog Posts</h1>
          <button className="btn btn-primary btn-sm">
            <Link to={"/blogs/create-blog"}>Create Blog</Link>
          </button>
        </div>
        <div
          className="grid grid-cols-5 gap-6 items-start"
          onClick={() => navigate("/blog/1")}
        >
          {/* left */}
          <div className="card bg-secondary-content col-span-3 rounded-none">
            <figure>
              <img src={randomBlog.imgUrl} alt="react vite" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{randomBlog.title}</h2>
              <p>{randomBlog.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm">
                  Explore <HiArrowRight className="text-lg" />
                </button>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="grid grid-cols-1 gap-6 col-span-2">
            {blogData.blogs.map((data) => (
              <SmallCard key={data.id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

const SmallCard = ({ data = [] }) => {
  const options = {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return (
    <div className="card lg:card-side rounded-md bg-secondary-content cursor-pointer drawer-card flex">
      <img src={data.imgUrl} alt="Album" width={220} className="" />
      <div className="card-body py-1 my-auto col-span-2 px-2">
        <small className="">
          {new Date(data.date).toLocaleDateString("en-US", options)}
        </small>
        <p className="text-sm font-semibold">{data.title}</p>
        <p className="text-xs line-clamp-2">{data.description}</p>
        <div className="text-xs my-1">
          <span className="text-accent border-[1px] border-accent px-2 rounded-full">
            reactjs
          </span>
        </div>
      </div>
    </div>
  );
};
