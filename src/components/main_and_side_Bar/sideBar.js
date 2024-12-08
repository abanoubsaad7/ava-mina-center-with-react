import React from "react";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <nav className="sideBar col-lg-2">
        <h1>Manage</h1>
        <ul className="navbar-nav me-auto  mb-lg-0">
          <li className="nav-item">
            <NavLink to="/manage-categories" className="nav-link page">
              <span >categories</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/manage-products" className="nav-link page">
              <span >products</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/manage-contactUs" className="nav-link page">
              <span >Accounts content</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/manage-AboutUs" className="nav-link page">
              <span >About us content </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SideBar;
