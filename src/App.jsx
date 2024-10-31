import React from "react";
import Home from "./views/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./views/blog/Blog";
import About from "./views/about/About";
import BlogDetail from "./views/blog/components/BlogDetail";
import CreateBlog from "./views/blog/CreateBlog";
import Works from "./views/works/Works";
import Contact from "./views/contact/Contact";
import 'animate.css';

const App = () => {
  return (
    <div className={"min-h-screen "}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/blogs/create-blog" element={<CreateBlog />} />
          <Route>
            <Route path="*" element={<Navigate to='/' replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
