import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import "animate.css";
import { Toaster } from "sonner";
import PageLoader from "./components/template/PageLoader";
import Layout from "./Layout";
import ReactLenis from "lenis/react";

const AllRoutes = () => {
  return (
    <ReactLenis root>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes?.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              Component={route.component}
            />
          ))}
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ReactLenis>
  );
};

const App = () => {
  const themeMode = localStorage.getItem("theme");
  return (
    <>
      <Toaster
        theme={themeMode === "light" ? "light" : "dark"}
        position="bottom-center"
      />
      <Suspense fallback={<PageLoader />}>
        <AllRoutes />
      </Suspense>
    </>
  );
};

export const routes = [
  {
    path: "/",
    name: "Home",
    component: lazy(() => import("./views/home/Home")),
  },
  {
    path: "/p",
    name: "Home",
    component: lazy(() => import("./components/shared/parallax")),
  },
  {
    path: "/about",
    name: "About",
    component: lazy(() => import("./views/about/About")),
  },
  {
    path: "/works",
    name: "Works",
    component: lazy(() => import("./views/works/Works")),
  },
  {
    path: "/blogs",
    name: "Blog",
    component: lazy(() => import("./views/blog/Blog")),
  },
  {
    path: "/contact",
    name: "Contact",
    component: lazy(() => import("./views/contact/Contact")),
  },
  {
    path: "/single",
    name: "Single",
    component: lazy(() => import("./views/singlePage/SinglePage")),
  },
  {
    path: "/blog/:id",
    name: "BlogDetail",
    component: lazy(() => import("./views/blog/components/BlogDetail")),
  },
];

export default App;
