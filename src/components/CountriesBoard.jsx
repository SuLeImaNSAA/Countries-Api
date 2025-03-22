/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import data from "../assets/data.json";
import CountryItem from "./CountryItem";
import { Link } from "react-router-dom";
import { useCountry } from "../contexts/countryContext";
import { useAppContext } from "../contexts/AppContext";
// import useLocalStorage from "./useLocalStorage";
import "../style.css";
function CountriesBoard() {
  const [country, setCountry] = useState([]);
  const { selectedContinent, searchQuery, onSub } = useAppContext();
  useEffect(() => {
    setCountry(data);
  }, []);
  const { name } = data;
  console.log("this si the name:" + name);
  const { setSelectedCountry } = useCountry(); // Destructure setSelectedCountry
  const filteredCountries = country.filter((country) => {
    const matchesContinent =
      selectedContinent === "All" || country.region === selectedContinent;
    const countryName = country.name || "";
    const matchesSearch = countryName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesContinent && matchesSearch;
  });

  return (
    <section>
      <div
        className={` h-[100vh] container mx-auto grid md:grid-cols-4 gap-[80px] mt-[20px] grid-cols-1 `}
      >
        {filteredCountries.map((country, index) => {
          return (
            <Link
              key={index}
              to="/info"
              onClick={() => setSelectedCountry(country)}
            >
              <CountryItem
                key={index}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
                img={country.flags.svg}
                nativeN={country.nativeName}
                subRegion={country.subregion}
                tobLevelDomain={country.demonym}
                currencies={country.currencies}
                languages={country.languages}
                borderCountries={country.borders}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default CountriesBoard;
