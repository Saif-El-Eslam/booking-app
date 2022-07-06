import React, { useState } from 'react'
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import "./hotel.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Hotel = () => {
  const photos = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_Nmd2rB6XJzE-5YLoas9TYBYEYj3E9CzwA&usqp=CAU"
    },
    {
      src: "https://www.delphinhotel.com/main_pics/pages/medium/839.jpg"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZoU1F5H8FSPCn42ODceBpg8Uog_M6d26VtA&usqp=CAU"
    },
    {
      src: "https://media-cdn.tripadvisor.com/media/photo-s/1c/e4/a5/e7/best-view-pyramids-hotel.jpg"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/279007538.jpg?k=fde7087ca82e834d2f279e874dc1dfc9441e594780eba0f4a7124380bc4c140d&o=&hp=1"
    },
    {
      src: "https://conceptvirtualdesign.com/wp-content/uploads/2018/07/cd1.jpg"
    }
  ]; 

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  function handleClick(i){
    setSlideNumber(i);
    setOpen(true);
  }

  function handleMove(direction) {
    let newSlideNumber;
    if (direction === 'l') {
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
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")}/>
          <div className="sliderWrapper">
            <img className='sliderImg' src={photos[slideNumber].src} alt="Hotel_Image" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
          <button className='bookNow'>Reserve or Book Now!</button>
          <h1 className="hotelTitle">The Great pyramids hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>1 Haram st. Giza, Egypt</span>
          </div>
          <span className="hotelDistance">Excellent Location - 100m from the great pyramids & 500m from center</span>
          <span className="hotelPriceHighlight">Book a stay over $100 at this property and get a free airport Van</span>
          <div className="hotelImages">
            {photos.map((photo, index) => <div className='hotelImageWrapper'>
              <img key={index} onClick={() => handleClick(index)} className='hotelImg' src={photo.src} alt="Hotel_Image" />
              </div>
            )}
          </div>
        </div>
      </div>
      <MailList />
      <Footer className="footer"/>
    </div>
  )
}

export default Hotel