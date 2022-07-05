import React from "react";
import "./navbar.css";

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">HBooking</span>
        {props.type !== "list" && <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>}
      </div>
    </div>
  );
}

export default Navbar;
