import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar(props) {
  const navigate = useNavigate();

  function handleClick(){
    navigate("/");
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={handleClick}>HBooking</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
