import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="left">
        <span>
          <Link to="/"> Estates</Link>
        </span>
        <span className="open">Rent</span>
        <span>Buy</span>
        <span>Sell</span>
        <span>Manage Property &#8964;</span>
        <span>Resources &#8964;</span>
      </div>
      <div className="right">
        <button className="login">Login</button>
        <button className="signup">Sign up</button>
      </div>
    </div>
  );
}

export default Header;
