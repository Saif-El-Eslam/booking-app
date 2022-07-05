import React from 'react';
import "./searchItem.css";

function SearchItem () {
    return (
        <div className="searchItem">
            <img 
                src="https://images1.apartments.com/i2/n84eU66ODQX3P-Wgn1B3M10Chx1ikhvt4bep8g4fANI/117/integra-crossings-sanford-fl-2br-2ba---1088-sq-feet.jpg"
                alt='siImage'
                className='siImg'
            />
            <div className='siDesc'>
                <h1 className='siTitle'>Faisal Appartments</h1>
                <span className="siDistance">100m from Raslan Resturant</span>
                <span className="siTaxiOp">Free airport van</span>
                <span className="siSubtitle">3 rooms with airconditioning</span>
                <span className="siFeatures">Big hall - 3 rooms - 1 bathroom - 5 beds - 140 m2</span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSuptitle">You can cancel later, so look in this great price today!</span>
            </div>
            <div className='siDetails'>
                <div className='siRating'>
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className='siPrice'>$150</span>
                    <span className='siTaxOp'>Includes taxes and fees.</span>
                    <button className='siCheckButton'>See availability</button>
                </div>
            </div>
        </div>
    );
};


export default SearchItem;