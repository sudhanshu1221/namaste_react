import { LOGO_LINK } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_LINK} width="300" height="200" />
      </div>
      <div className="nav-items">
        <ul>
          <li> Home </li>
          <li> About us</li>
          <li> Contact us</li>
          <li> Cart</li>
          <btn
            className="login-btn"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {" "}
            {loginBtn}
          </btn>
        </ul>
      </div>
    </div>
  );
};
export default Header;
