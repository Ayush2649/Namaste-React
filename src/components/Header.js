import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";

const Header = () => {
  const [loginStatus, setLoginStatus] = useState(false);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart </li>
          <li className="nav-login">
            <button
              className="login-btn"
              onClick={() => setLoginStatus(!loginStatus)}
            >
              {loginStatus ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
