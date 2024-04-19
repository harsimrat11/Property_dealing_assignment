import React from "react";

import Search from "../components/Search";

const Banner = () => {
  return (
    <>
    <h1 className="heading">Properties available to purchase </h1>
    <button className="searh_btn">Search  </button>
      <Search />
    </>
  );
};

export default Banner;
