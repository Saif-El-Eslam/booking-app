import React from "react";
import "./featured.css";
const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          className="featuredImage"
          alt=""
          src="https://zamzam.com/blog/wp-content/uploads/2021/08/shutterstock_1745937893.jpg"
        />
        <div className="featuredTitles">
          <h1>Palestine</h1>
          <h1>The Holy Land</h1>
        </div>
      </div>

      <div className="featuredItem">
        <img
          className="featuredImage"
          alt=""
          src="https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/08/142845.jpg"
        />
        <div className="featuredTitles">
          <h1>Emirates</h1>
          <h1>The richcest</h1>
        </div>
      </div>

      <div className="featuredItem">
        <img
          className="featuredImage"
          alt=""
          src="https://www.investinegypt.gov.eg/PublishingImages/Homepage%20Banner/invest-901630488.jpg"
        />
        <div className="featuredTitles">
          <h1>Egypt</h1>
          <h1>The mother land</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
