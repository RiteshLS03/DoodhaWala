import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink>
        <>Home</>
        <Link to={"/about"}>About Us</Link>
        <ul>Login</ul>
        <h1>Header</h1>
      </NavLink>
    </header>
  );
};

export default Header;
