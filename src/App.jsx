import React from "react";
import Home from "./views/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./views/blog/Blog";
import About from "./views/about/About";
import BlogDetail from "./views/blog/components/BlogDetail";
import CreateBlog from "./views/blog/CreateBlog";

const App = () => {
  return (
    <div className={"min-h-screen "}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blog />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/blogs/create-blog" element={<CreateBlog />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
