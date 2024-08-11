import { useState } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="flex justify-between bg-pink-100 shadow-xl mb-2">
        <div className="logo-container">
          <img
            className="w-16"
            src={require("../../assets/logo.png")}
            alt="logo"
          />
        </div>
        <div className="flex items-center">
          <ul className="m-0 flex">
            <li className="px-4">
              Online Status: {onlineStatus ? "🟢" : "🔴"}
            </li>
            <li className="px-4">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="px-4">
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li className="px-4">
              <NavLink to="/grocery">Grocery</NavLink>
            </li>
            <li className="px-4">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li className="px-4">
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
