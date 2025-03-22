/* eslint-disable react/prop-types */
// AppContext.js
import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  // Fetch countries
  return (
    <AppContext.Provider
      value={{
        selectedContinent,
        setSelectedContinent,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
