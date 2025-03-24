/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
// import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import { debounce } from "lodash";
function SearchFilter() {
  const {
    setSelectedContinent,
    selectedContinent,
    searchQuery,
    setSearchQuery,
    onSub,
  } = useAppContext();
  // const handleSearchChange = debounce((query) => {
  //   setSearchQuery(query);
  // }, 300);
  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   onSearch(searchQuery);
  // };
  return (
    <section>
      <div className="container mx-auto ">
        <div className="mt-[30px] ">
          <form
            onSubmit={!onSub}
            className=" md:flex-row flex justify-between items-center flex-col gap-3"
          >
            <input
              type="text"
              placeholder="🔍 Search for a country..."
              className=" search outline-none rounded-md p-[10px] md:w-[350px] w-full mb-[10px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              className="select w-[150px] p-[10px] outline-none rounded-md"
              value={selectedContinent}
              onChange={(e) => setSelectedContinent(e.target.value)}
            >
              <option>All</option>
              <option>Africa</option>
              <option>Americas</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>Oceania</option>
            </select>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SearchFilter;
