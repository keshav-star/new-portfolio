import React from "react";
import Home from "./views/home/Home";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Blog from "./views/blog/Blog";
import About from "./views/about/About";
import BlogDetail from "./views/blog/components/BlogDetail";
import CreateBlog from "./views/blog/CreateBlog";
import Works from "./views/works/Works";
import Contact from "./views/contact/Contact";
import "animate.css";
import { AnimatePresence } from "framer-motion";
import Layout from "./Layout";
import { routes } from "./routes";
import StairsTransition from "./components/shared/StairsTransition";

const App = () => {
  return (
    <div className={"min-h-screen "}>
      <BrowserRouter>
      <StairsTransition/>
      <Layout>
          <RoutesWithAnimations />
      </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;

const RoutesWithAnimations = () => {
  return (
    <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/works" element={<Works />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/blogs/create-blog" element={<CreateBlog />} />
      <Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
