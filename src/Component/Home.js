import React from 'react'
import "./Home.css"
import Product from './Product'
import Sliderbootstrap from "./Sliderbootstrap"
function Home() {
return (
  <div className="home">
    <div className="home__container">
      {/* <img
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
        /> */}
      <Sliderbootstrap />
      <div className="home__row">
        <Product
          id="12321341"
          title="New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)"
          price={1669}
          rating={5}
          image="https://m.media-amazon.com/images/I/71KR2i6-WaL._AC_UY218_.jpg"
        />
        <Product
          id="49538094"
          title="Epic Racing Professional Gaming Chair with Adjustable Height, Full Recline and Headrest/Lumbar Support"
          price={159.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71t8UBllIgL._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="4903850"
          title="New Apple Watch Series 6 (GPS, 40mm) - Space Gray Aluminum Case with Black Sport Band"
          price={499.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71yOGVLGWpL._AC_SX679_.jpg"
        />
        <Product
          id="99903850"
          title="4K 60FPS Video Camera Camcorder Ultra HD 48MP YouTube Camera Vlogging WiFi Digital Camera Recorder IPS Touch Screen"
          price={139.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/81eUw7H78UL._AC_UY218_.jpg"
        />
        <Product
          id="90829332"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={1094.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="903850"
          title="2021 1080P Streaming Business Webcam with Microphone & Privacy Cover, AutoFocus, NexiGo N930P HD USB Web Camera, for Zoom Meeting YouTube Skype FaceTime"
          price={69.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61KFXbnW13L._AC_UY218_.jpg"
        />
      </div>
    </div>
  </div>
);
}

export default Home
