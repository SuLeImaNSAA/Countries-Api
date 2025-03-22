import CountriesBoard from "../components/CountriesBoard";

import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import { Link } from "react-router-dom";
import { AppProvider } from "../contexts/AppContext";
function HomePage() {
  return (
    <AppProvider>
      <div>
        {" "}
        <div className="mx-auto bg-red">
          <Header />
          <Link to="/">
            <SearchFilter />
            <CountriesBoard />
          </Link>
        </div>
      </div>
    </AppProvider>
  );
}

export default HomePage;
