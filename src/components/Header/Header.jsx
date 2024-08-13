import { useState, useContext } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);
  const { loggedInUser } = data;
  console.log("🚀 ~ Header ~ data:", data);

  //Subscribing to the store using selector

  const cartItems = useSelector((store) => store.cart.items);
  console.log("🚀 ~ Header ~ cartItems:", cartItems);

  return (
    <div className="header">
      <div className="flex justify-between bg-green-100 shadow-xl mb-2">
        <div className="logo-container">
          <img
            className="w-16"
            src={require("../../assets/logo.png")}
            alt="logo"
          />
        </div>
        <div className="flex items-center">
          <ul className="m-0 flex items-center">
            <li className="px-4 text-black">
              Online Status: {onlineStatus ? "🟢" : "🔴"}
            </li>
            <li className="px-4">
              <NavLink to="/" className="no-underline text-black">
                Home
              </NavLink>
            </li>
            <li className="px-4">
              <NavLink to="/about" className="no-underline text-black">
                About Us
              </NavLink>
            </li>
            <li className="px-4">
              <NavLink to="/grocery" className="no-underline text-black">
                Grocery
              </NavLink>
            </li>
            <li className="px-4">
              <NavLink to="/contact" className="no-underline text-black">
                Contact Us
              </NavLink>
            </li>
            <li className="px-4 font-bold text-xl">
              <NavLink to="/cart" className="no-underline text-black">
                Cart <sup>({cartItems.length})</sup>
              </NavLink>
            </li>

            <button
              className="text-white bg-black p-2 rounded-lg font-bold"
              onClick={() =>
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
              }
            >
              {btnName}
            </button>
            <li className="px-4 ">
              <NavLink
                to="/login"
                className="no-underline text-black font-bold"
              >
                {loggedInUser}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
