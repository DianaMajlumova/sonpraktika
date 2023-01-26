import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_list">
        <div className="navbar_logo">
          <NavLink to={"/"}><h1>Aroma</h1></NavLink>
        </div>
        <div className="navbar_ul">
          <NavLink to={"/"}><h3>Home</h3></NavLink>
          <NavLink to={"/add"}><h3>Add</h3></NavLink>
          <NavLink to={"/detail"}><h3>Detail</h3></NavLink>
          <li><h3>Shop</h3></li>
          <li><h3>Contact</h3></li>
          <li><h3>Blog</h3></li>
          <li><h3>Pages</h3></li>
        </div>
        <div className="navbar_icon">
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-cart-plus"></i>
        <div className="navbar_btn"><button>Buy Now</button></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
