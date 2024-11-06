import { LOGO_LINK } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  console.log("header render");
  // useEffect(() => {
  //   console.log("useffect called");
  // }, [loginBtn]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_LINK} width="300" height="200" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
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
