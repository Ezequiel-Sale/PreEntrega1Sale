import React from "react";
import "./navbar.css";
import CartWidget from "../cartWidget/CartWidget";

function NavBar() {
  return (
    <>
      <header className="container">
        <nav className="navbar">
          <span>Sower</span>
          <div className="links">
            <a href="#">link</a>
            <a href="#">link</a>
            <a href="#">link</a>
            <CartWidget />
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
