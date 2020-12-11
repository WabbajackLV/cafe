import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <div className="topnav">
      <Link to={"./App.jsx"}>Home</Link>
      <Link to={"./Menu.jsx"}>Menu</Link>
      <Link to={"./AboutUs.jsx"}>About Us</Link>
      <Link to={""}>Login</Link>
    </div>
  );
}

export default Header;
