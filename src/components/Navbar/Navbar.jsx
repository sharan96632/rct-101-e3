import React from "react";
import { Link } from "react-router-dom";

// use react-router Link or NavLink

const Navbar = () => {
  return (
     <div >
      <Link className="nav-home" to="/">
        Home
      </Link>
     
      <Link className="nav-home" to="/">
        Login
      </Link>
     
      <Link className="nav-home" to="/">
        logout
      </Link>
    </div>
  );
};

export default Navbar;
