import { useState } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo-container">
          <img
            className="logo"
            src={require("../../assets/logo.png")}
            alt="logo"
          />
        </div>
        <div className="nav-items">
          <ul className="m-0">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <button
              className="btn"
              onClick={() =>
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
              }
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
