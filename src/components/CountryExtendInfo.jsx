import { Link } from "react-router-dom";
import Header from "./Header";
import { useTheme } from "../contexts/ThemeContext";
// import { useParams } from "react-router-dom";
import { useCountry } from "../contexts/countryContext";
function CountryExtendInfo() {
  const { isDarkMode } = useTheme();
  const { selectedCountry } = useCountry(); // Destructure setSelectedCountry
  if (!selectedCountry) {
    return (
      <div>No country selected. Please select a country to see details.</div>
    );
  }
  return (
    <section className=" mx-auto ">
      <Header />
      <div className="container mx-auto md:h-[100vh] h-[100%]">
        <Link to="/">
          <div
            className={`mt-[50px] w-[100px]  h-[40px] text-center flex justify-center rounded-md hover:shadow-2xl transform duration-200 text-gray-500${
              isDarkMode ? "bg-[#1e1e1e] text-white " : "bg-white text-black"
            }`}
          >
            <button>Back</button>
          </div>
        </Link>
        <div className={`mx-auto ${isDarkMode ? "text-white" : "text-black"}`}>
          <div className="mt-[70px] mx-auto flex justify-center items-center gap-[10px] w-[100%] md:flex-row flex-col  ">
            {" "}
            <div className="md:mx-w-[60%] ">
              <img src={selectedCountry.flags.svg} className="md:w-[80%]" />
            </div>
            <div className="w-[40%]">
              <div className=" text-[25px] mb-[35px] font-bold">
                <p>{selectedCountry.name}</p>
              </div>
              <div className="flex">
                <p className="font-bold">Native Name: </p>
                {"  "}
                {selectedCountry.nativeName}
              </div>
              <div className="flex">
                <p className="font-bold">Region: </p>
                {selectedCountry.region}
              </div>
              <div className="flex">
                <p className="font-bold">Sub Region:</p>{" "}
                {selectedCountry.subregion}
              </div>
              <div className="flex">
                <p className="font-bold">Capital: </p>
                {selectedCountry.capital}
              </div>
            </div>
            <div>
              <p className="font-bold">
                Top Level Domain: {selectedCountry.demonym}
              </p>
              <p>
                {" "}
                {selectedCountry.currencies.map((currency, index) => (
                  <div className="flex" key={index}>
                    <p className=" font-bold">Currencies:</p> {currency.code}
                  </div>
                ))}
              </p>
              <p>
                {selectedCountry.languages.map((lang, index) => (
                  <div className="flex flex-wrap" key={index}>
                    <p className="flex">
                      <p className="font-bold ">Languages:</p> {lang.iso639_1},
                      {lang.nativeName}, {lang.name}
                    </p>
                  </div>
                ))}
              </p>
            </div>
          </div>
          <div className="flex md:justify-center md:items-end w-[100%] md:mx-auto mt-[30px] flex-wrap gap-2 mx-auto">
            <p className="flex justify-center items-center mb-[8px] ">
              Border Countries:
            </p>
            {selectedCountry.borders
              ? selectedCountry.borders.map((bord) => (
                  <div key={bord} className="flex md:flex-row sm:flex-col ">
                    <p className=" w-[100px] bg-white h-[40px] text-center flex justify-center items-center rounded-md hover:shadow-2xl transform duration-200 text-gray-500 ml-[5px]">
                      {" "}
                      {bord}
                    </p>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryExtendInfo;
