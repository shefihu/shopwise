import React from "react";
import Cookies from "js-cookie";
const SearchResults = () => {
  const results = JSON.parse(Cookies.get("search"));
  console.log(results);
  return <div>SearchResults</div>;
};

export default SearchResults;
