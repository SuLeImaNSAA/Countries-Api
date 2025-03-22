/* eslint-disable no-unused-vars */

import { useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";

    document.querySelector(".header").className = `header p-[20px]  ${theme}`;
    const search = document.querySelector(".search");
    if (search) {
      search.className = `search ${theme} p-[10px] rounded-md w-[200px] `;
    }

    const select = document.querySelector(".select");
    if (select) {
      select.className = `select p-[10px] rounded-md ${theme}`;
    }
    document.querySelectorAll(".card").forEach((card) => {
      card.className = `card  ${theme}`;
    });
  }, [isDarkMode, toggleTheme]);
  return (
    <section
      // data-theme={theme}
      className="header  block w-[100%] shadow-lg bg-white  p-[20px]  mx-auto transition-all duration-200"
    >
      <div className=" mx-auto container flex justify-between items-center ">
        <h1 className=" font-bold text-xl">Where in the world?</h1>
        <button
          className="flex justify-center items-center text-center cursor-pointer text-[15px]"
          onClick={toggleTheme}
        >
          {" "}
          <img
            src="/src/assets/110827_moon_icon.svg"
            className="w-[35px] object-contain"
          />{" "}
          {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
    </section>
  );
}

export default Header;
