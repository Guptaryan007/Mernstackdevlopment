import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-center">
        <h3>Makeup Store</h3>
        <div className="flex gap-3">
          <Link to={"/"} className="">Home</Link>
          <Link to={"/about"} className="">About</Link>
          <Link to={"/product"} className="">Product</Link>
          <Link to={"/contact"} className="">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Header;