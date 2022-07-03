import React from "react";
import "./propertyList.css";
const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pItem">
        <img
          className="pListImage"
          src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768"
          alt=""
        />
        <div className="pTitles">
          <h1>Hotels</h1>
          <h2>12355 hotels</h2>
        </div>
      </div>

      <div className="pItem">
        <img
          className="pListImage"
          src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/68/11/6811894_v3.jpeg"
          alt=""
        />
        <div className="pTitles">
          <h1>Apartments</h1>
          <h2>12355 apartments</h2>
        </div>
      </div>

      <div className="pItem">
        <img
          className="pListImage"
          src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/68/11/6811894_v3.jpeg"
          alt=""
        />
        <div className="pTitles">
          <h1>Resorts</h1>
          <h2>12355 resorts</h2>
        </div>
      </div>

      <div className="pItem">
        <img
          className="pListImage"
          src="https://images.prismic.io/villaplus/b94890cc-53d4-4003-880b-e511a1bcacb7_tiareII-1121_5143_villa1_3600.jpg"
          alt=""
        />
        <div className="pTitles">
          <h1>Villas</h1>
          <h2>12355 villas</h2>
        </div>
      </div>

      <div className="pItem">
        <img
          className="pListImage"
          src="https://l.icdbcdn.com/oh/1590372f-bf7b-4379-b7e5-4b333cff911a.jpg"
          alt=""
        />
        <div className="pTitles">
          <h1>Cabins</h1>
          <h2>12355 cabins</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
