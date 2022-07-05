import React from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import "./list.css";
import SearchItem from '../../components/searchItem/SearchItem';

const List = () => {
  return (
    <div>
      <Navbar type="list" />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            Search
          </div>
          <div className="listResults">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List