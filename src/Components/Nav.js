import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";
function Nav() {
  return (
    <header className="main-logo-container">
      <h1 className="main-logo"> 999</h1>
      <nav className="nav-container">
        <ul className="link-container">
          <li className="active-hover">
            <Link to="/">Home</Link>
          </li>
          <li className="active-hover">
            <Link to="/products">Products</Link>
          </li>
          <li className="active-hover">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
