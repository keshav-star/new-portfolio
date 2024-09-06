import React, { useEffect, useState } from "react";

const ThemeController = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );

  useEffect(() => {
    const bodyElement = document.querySelector("body");
    if (!localStorage.getItem("theme")) return;
    if (
      localStorage.getItem("theme") !== "true" &&
      localStorage.getItem("theme") !== "false"
    )
      return;
    if (darkMode || JSON.parse(localStorage.getItem("theme"))) {
      bodyElement.classList.remove("light");
      bodyElement.classList.add("dark");
    } else {
      bodyElement.classList.remove("dark");
      bodyElement.classList.add("light");
    }
  }, [darkMode]);

  const toggleDarkMode = (theme) => {
    if (theme === "dark") {
      setDarkMode(true);
      localStorage.setItem("theme", JSON.stringify(true));
    } else {
      setDarkMode(false);
      localStorage.setItem("theme", JSON.stringify(false));
    }
  };
  return (
    <input
      type="checkbox"
      className="toggle border-blue-500 bg-blue-500 [--tglbg:yellow] hover:bg-blue-700"
      defaultChecked
      onChange={(e) => toggleDarkMode(!e.target.checked ? "dark" : "light")}
    />
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
