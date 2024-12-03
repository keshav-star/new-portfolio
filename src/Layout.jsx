import React, { Suspense } from "react";
import Navbar from "./components/template/Navbar";
import PageLoader from "./components/template/PageLoader";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Suspense>
      <div>
        <Navbar />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </Suspense>
  );
};

export default Layout;
