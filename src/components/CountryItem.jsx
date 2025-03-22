/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
/* eslint-disable react/prop-types */
function CountryItem({ name, population, region, capital, img }) {
  const { isDarkMode } = useTheme();
  return (
    <section className="">
      <div
        className={` mx-h-[400px]   rounded-lg   hover:shadow-2xl${
          isDarkMode
            ? "bg-[#1e1e1e] text-white shadow-lg hover:shadow-2xl transition-all duration-500 "
            : "bg-[#abb4bc] text-black shadow-lg hover:shadow-2xl transition-all duration-500 "
        }  `}
      >
        <div className=" rounded-lg">
          <img src={img} className=" rounded-lg" />
        </div>
        <div className=" mt-3 p-5">
          {" "}
          <h1 className=" text-[20px] font-bold mb-[18px]">{name}</h1>
          <div>Population: {population}</div>
          <div>Region: {region}</div>
          <div>Capital: {capital}</div>
        </div>
      </div>
    </section>
  );
}

export default CountryItem;
