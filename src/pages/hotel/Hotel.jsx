import React, { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import "./hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const photos = [
    {
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_Nmd2rB6XJzE-5YLoas9TYBYEYj3E9CzwA&usqp=CAU",
    },
    {
      src: "https://www.delphinhotel.com/main_pics/pages/medium/839.jpg",
    },
    {
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZoU1F5H8FSPCn42ODceBpg8Uog_M6d26VtA&usqp=CAU",
    },
    {
      src:
        "https://media-cdn.tripadvisor.com/media/photo-s/1c/e4/a5/e7/best-view-pyramids-hotel.jpg",
    },
    {
      src:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/279007538.jpg?k=fde7087ca82e834d2f279e874dc1dfc9441e594780eba0f4a7124380bc4c140d&o=&hp=1",
    },
    {
      src:
        "https://conceptvirtualdesign.com/wp-content/uploads/2018/07/cd1.jpg",
    },
  ];

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  function handleClick(i) {
    setSlideNumber(i);
    setOpen(true);
  }

  function handleMove(direction) {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img
                className="sliderImg"
                src={photos[slideNumber].src}
                alt="Hotel_Image"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">The Great pyramids hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>1 Haram st. Giza, Egypt</span>
          </div>
          <span className="hotelDistance">
            Excellent Location - 100m from the great pyramids & 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $100 at this property and get a free airport Van
          </span>
          <div className="hotelImages">
            {photos.map((photo, index) => (
              <div className="hotelImageWrapper" key={index}>
                <img
                  onClick={() => handleClick(index)}
                  className="hotelImg"
                  src={photo.src}
                  alt="Hotel_Image"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Porto Matrouh-original</h1>
              <p className="hotelDesc">
                You're eligible for a Genius discount at Porto Matrouh-original!
                To save at this property, all you have to do is sign in.
                Boasting a garden, Porto Matrouh-original offers accommodation
                in Marsa Matruh, 2.2 km from Cleopatra Beach and 6 km from
                Agieba Marsah Matruh beach. Featuring a restaurant, the property
                also has a terrace. The property provides a 24-hour front desk.
                Guest rooms in the resort are equipped with a flat-screen TV.
                Wonderful view on Mediterranean Sea is 16 km from Porto
                Matrouh-original.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for 9-day stay!</h1>
              <span>
                Located in the heart of north Coast, a breathtaking place with
                all the facilities avail!
              </span>
              <h2>
                <b>$945</b> ( 9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer className="footer" />
    </div>
  );
};

export default Hotel;
