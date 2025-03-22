/* eslint-disable react/prop-types */
// /* eslint-disable react-refresh/only-export-components */
// /* eslint-disable react/prop-types */

import { createContext, useContext, useState, useEffect } from "react";

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  // Initialize state with the value from localStorage, if it exists
  const [selectedCountry, setSelectedCountry] = useState(() => {
    const savedCountry = localStorage.getItem("selectedCountry");
    return savedCountry ? JSON.parse(savedCountry) : null;
  });

  // Update localStorage whenever selectedCountry changes
  useEffect(() => {
    if (selectedCountry) {
      localStorage.setItem("selectedCountry", JSON.stringify(selectedCountry));
    } else {
      localStorage.removeItem("selectedCountry");
    }
  }, [selectedCountry]);

  return (
    <CountryContext.Provider value={{ selectedCountry, setSelectedCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => useContext(CountryContext);
