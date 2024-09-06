import { Link } from "react-router-dom";
import ThemeController from "../shared/ThemeController";

const Navbar = () => {
  return (
    <div className="flex justify-between px-20 py-5 shadow-custom">
      <div className="font-bold text-lg tracking-wider">Keshav Sandhu</div>
      <ul className="flex gap-14 items-center font-semibold nav-list">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link>Works</Link>
        </li>
        <li>
          <Link to={"/blogs"}>Blog</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
        <li>
          <ThemeController />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
