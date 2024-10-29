import { Link } from "react-router-dom";
import ThemeController from "../shared/ThemeController";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const NavLinks = ({ className }) => (
  <ul
    className={
      "md:flex gap-14 items-center font-semibold nav-list " + className
    }
  >
    <li>
      <Link to={"/"}>Home</Link>
    </li>
    <li>
      <Link to={"/about"}>About</Link>
    </li>
    <li>
      <Link to={"/works"}>Works</Link>
    </li>
    <li>
      <Link to={"/blogs"}>Blog</Link>
    </li>
    {/* <li>
    <Link to={"/contact"}>Contact</Link>
  </li> */}
    <li>
      <ThemeController />
    </li>
  </ul>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
      <NavLinks className={"hidden"} />
    </div>
  );
};

export default Navbar;
