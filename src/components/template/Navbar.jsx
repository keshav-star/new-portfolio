import { Link, useLocation } from "react-router-dom";
import ThemeController from "../shared/ThemeController";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/works",
    name: "Works",
  },
  {
    path: "/blogs",
    name: "Blog",
  },
  // {
  //   path: "/contact",
  //   name: "Contact",
  // },
];
const NavLinks = ({ className }) => {
  const location = useLocation().pathname.split("/").pop();
  return (
    <ul
      className={
        "md:flex gap-14 items-center font-semibold nav-list " + className
      }
    >
      {routes.map((route) => (
        <li key={route.path}>
          <Link
            className={route.path === "/" + location && " text-primary"}
            to={route.path}
          >
            {route.name}
          </Link>
        </li>
      ))}

      {/* <li>
    <Link to={"/contact"}>Contact</Link>
  </li> */}
      <li>
        <ThemeController />
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation().pathname.split("/").pop();

  return (
    <div className="flex justify-between items-center px-10 md:px-20 py-5 shadow-custom">
      <div className="font-bold text-lg tracking-wider animate__animated animate__lightSpeedInLeft">
        Keshav Sandhu
      </div>
      <div className="block md:hidden relative">
        <GiHamburgerMenu onClick={() => setOpen(!open)} />
        <div
          className={
            `absolute top-5 right-0 px-3 rounded-md bg-primary-content z-50 ` +
            (open ? "block" : "hidden")
          }
        >
          <NavLinks className={"flex-col flex gap-1"} />
        </div>
      </div>
      {location === "single" ? (
        <SingleNavLinks />
      ) : (
        <NavLinks className={"hidden"} />
      )}
    </div>
  );
};

export default Navbar;

const SingleNavLinks = ({ className }) => {
  const location = useLocation().pathname.split("/").pop();
  return (
    <ul
      className={
        "md:flex gap-14 items-center font-semibold nav-list " + className
      }
    >
      {routes.map((route) => (
        <li key={route.path}>
          <Link
            className={route.path === "/" + location && " text-primary"}
            to="/#about"
          >
            {route.name}
          </Link>
        </li>
      ))}
      <li>
        <ThemeController />
      </li>
    </ul>
  );
};
