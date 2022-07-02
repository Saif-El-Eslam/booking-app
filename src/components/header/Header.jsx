import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faBridge,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBridge} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Airport Taxis</span>
          </div>
        </div>
        <h1 className="HeaderTitle">A life time of discounts? It is genius</h1>
        <p className="HeaderDesc">
          Get rewarded fro your travel. Unlock instant savings of 10% or more
          with a free Lamabooking account.
        </p>
        <button className="headerBtn">Sign in /Register</button>
      </div>
    </div>
  );
}

export default Header;
