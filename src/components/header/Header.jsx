import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faBridge,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import {DateRange} from "react-date-range";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import {format} from "date-fns";

function Header() {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
      adults: 1,
      children: 0,
      rooms: 1
  });


function handleOptions(name, op){
  setOptions((prev) => {
    return {
    ...prev,
    [name]: op === "i" ? options[name]+1 : options[name]-1
  }});

}

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
          Get rewarded for your travel. Unlock instant savings of 10% or more
          with a free HBooking account.
        </p>
        <button className="headerBtn">Sign in /Register</button>

        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input type="text" className="headerSearchInput" placeholder="Where are you going?" />
          </div>

          <div className="headerSearchItem" onClick={() => setOpenDate(!openDate)}>
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />}
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adults} adults . ${options.children} children . ${options.rooms} rooms`}</span>
            
            {openOptions && <div className="options">
            <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button disabled={options.adults <= 1} className="optionCounterButton" onClick={() => handleOptions("adults", "d")}>-</button>
                  <span className="optionCounterNumber">{options.adults}</span>
                  <button className="optionCounterButton" onClick={() => handleOptions("adults", "i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button disabled={options.children <= 0} className="optionCounterButton" onClick={() => handleOptions("children", "d")}>-</button>
                  <span className="optionCounterNumber">{options.children}</span>
                  <button className="optionCounterButton" onClick={() => handleOptions("children", "i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Rooms</span>
                <div className="optionCounter">
                  <button disabled={options.rooms <= 1} className="optionCounterButton" onClick={() => handleOptions("rooms", "d")}>-</button>
                  <span className="optionCounterNumber">{options.rooms}</span>
                  <button className="optionCounterButton" onClick={() => handleOptions("rooms", "i")}>+</button>
                </div>
              </div>
            </div>}
          </div>

          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Header;
