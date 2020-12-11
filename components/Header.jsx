// import React from "react";
// import { Link } from "react-router";

// export const Header = (props) => {
//   return (
//     <div className="topnav">
//       <Link to={"/App.jsx"}>Home</Link>
//       <Link to={"/Menu.jsx"}>Menu</Link>
//       <Link to={"/AboutUs.jsx"}>About Us</Link>
//       <Link to={""}>Login</Link>
//     </div>
//   );
// };
import React from "react";

function Header() {
  return (
    <div className="topnav">
      <a>Home</a>
      <a>Menu</a>
      <a>About Us</a>
      <a>Login</a>
    </div>
  );
}

export default Header;
