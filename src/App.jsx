import CountryExtendInfo from "./components/CountryExtendInfo";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import "./style.css";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={` h-[100%] ${isDarkMode ? " bg-[#2c2c2c]" : " bg-[#e7e7e7] "}`}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<CountryExtendInfo />} />
      </Routes>
    </div>
  );
}

export default App;
