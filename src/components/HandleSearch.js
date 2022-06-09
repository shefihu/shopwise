import React, { useEffect, useState } from "react";
import { product } from "../data/Products";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const HandleSearch = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const [searchInput, setSearchInput] = useState(true);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // router.push({
    //   pathname: "/search-result",
    //   query: { search },
    // });
    navigate("/searched");
    // setResult(false);
  };
  useEffect(() => {
    const filter = product.filter((x) => {
      return x.name.toLowerCase().includes(search.toLowerCase());
      // x.cartegory.toLowerCase().includes(search.toLowerCase())
    });

    if (search === "") {
      setResult([]);
    } else {
      setResult(filter);
    }
    Cookies.set("search", JSON.stringify(filter));
  }, [search]);
  return (
    <div>
      <form action="">
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => setSearchInput(!searchInput)}
            aria-label="search items"
            type="button"
            className="text-gray-800 dark:hover:text-gray-300 dark:text-white "
          >
            <svg
              className="fill-stroke"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 11C5 15.4183 8.58172 19 13 19C17.4183 19 21 15.4183 21 11C21 6.58172 17.4183 3 13 3C8.58172 3 5 6.58172 5 11Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.99961 20.9999L7.34961 16.6499"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <input
            id="searchInput"
            type="text"
            placeholder="search"
            onChange={handleChange}
            className={` ${
              searchInput ? "hidden" : ""
            } text-sm dark:bg-gray-900 dark:placeholder-gray-300 text-gray-600 rounded ml-1 border border-transparent focus:outline-none focus:border-gray-400 px-1`}
          />
        </div>
      </form>
      <div className="w-full lg:w-1/2 top-[105%] bg-white absolute z-20">
        {result.map((item, idx) => {
          return (
            <div key={idx} className={"p-3"} onClick={handleSubmit}>
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HandleSearch;
