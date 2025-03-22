import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CountryProvider } from "./contexts/countryContext";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <CountryProvider>
          <App />
        </CountryProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
