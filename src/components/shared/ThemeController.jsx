import React, { useEffect, useState } from "react";
import { HiOutlineMoon, HiSun } from "react-icons/hi";

const ThemeController = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", localTheme);
  }, [theme]);
  return (
    // <input
    //   type="checkbox"
    //   className="toggle border-blue-500 bg-blue-500 [--tglbg:yellow] hover:bg-blue-700"
    //   onChange={handleToggle}
    //   checked={theme === "light" ? false : true}
    // />
    <div className="flex-none">
    {/* Toggle button here */}
    {/* <button className="btn btn-square btn-ghost"> */}
      <label className="swap swap-rotate w-8 h-8 hover:bg-secondary-content">
        <input
          type="checkbox"
          onChange={handleToggle}
          // show toggle image based on localstorage theme
          checked={theme === "light" ? false : true}
        />
        {/* light theme sun image */}
        <HiSun className="w-5 h-5 swap-on" />
        {/* dark theme moon image */}
        <HiOutlineMoon className="w-5 h-5 swap-off" />
      </label>
    {/* </button> */}
  </div>
    // <div className="dropdown">
    //   <div tabIndex={0} role="button" className="btn btn-sm bg-background">
    //     {!darkMode ? "Light Mode" : "Dark Mode"}
    //     <svg
    //       width="12px"
    //       height="12px"
    //       className="inline-block h-2 w-2 fill-current opacity-60"
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 2048 2048"
    //     >
    //       <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
    //     </svg>
    //   </div>
    //   <ul
    //     tabIndex={0}
    //     className="dropdown-content bg-background text-text rounded-box z-[1] w-52 p-2 shadow-2xl"
    //   >
    //     <li onClick={() => toggleDarkMode("light")}>
    //       <input
    //         type="radio"
    //         name="theme-dropdown"
    //         className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
    //         aria-label="Light"
    //         value="Light"
    //       />
    //     </li>
    //     <li onClick={() => toggleDarkMode("dark")}>
    //       <input
    //         type="radio"
    //         name="theme-dropdown"
    //         className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
    //         aria-label="Dark"
    //         value="Dark"
    //       />
    //     </li>
    //     <li>
    //       <input
    //         type="radio"
    //         name="theme-dropdown"
    //         className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
    //         aria-label="Cyberpunk"
    //         value="cyberpunk"
    //       />
    //     </li>
    //     <li>
    //       <input
    //         type="radio"
    //         name="theme-dropdown"
    //         className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
    //         aria-label="Valentine"
    //         value="valentine"
    //       />
    //     </li>
    //     <li>
    //       <input
    //         type="radio"
    //         name="theme-dropdown"
    //         className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
    //         aria-label="Aqua"
    //         value="aqua"
    //       />
    //     </li>
    //   </ul>
    // </div>
  );
};

export default ThemeController;
