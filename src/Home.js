import React from "react";
import "./Home.css";
import Product from "./Product";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
        >
          <div>
            <img
              className="home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-YmQ1NDM5ZDgt-w1500._CB412095397_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Y2UwYWM0MDQt/Y2UwYWM0MDQt-OTZkN2NjYTIt-w3000._CB668789270_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NzkzZDYxNTkt/NzkzZDYxNTkt-OWQwMzQwNDUt-w3000._CB663569411_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/OTC/Homepage/OTC_GW-desktop_Phase-1_2x-3000x1200._CB669937678_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              src="https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/5/AmazonStores/ATVPDKIKX0DER/81c555729b963618ac8a06ce630f8da1.w8446.h1689._SL5000_CR0%2C0%2C4999%2C999_SX1280_.jpg"
              alt=""
            />
          </div>
        </Carousel>

        {/* <div className="home__row">
          <Product
            id="4903850"
            title="Fitbit Charge 3 Fitness Activity Tracker"
            price={214.95}
            rating={4}
            image="https://m.media-amazon.com/images/I/719DSpWp3LL._AC_UL480_QL65_.jpg"
          />
          <Product
            id="49538094"
            title="Apple AirPods Pro"
            price={197.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="
            BEAUTURAL Steamer for Clothes with Pump Steam Technology, Portable Handheld Garment Fabric Wrinkles Remover, 30-Second Fast Heat-up, Auto-Off, Large Detachable Water Tank"
            price={26.32}
            rating={5}
            image="https://m.media-amazon.com/images/I/610IRZ+nppS._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="23445930"
            title="QI-EU Wireless Charger, 4 in 1 Fast Wireless Charging Station Compatible with Apple Watch Airpods Pro iPhone 12/12 Pro/11/11 Pro/8/X, Wireless Charging Stand Compatible with Samsung"
            price={25.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61W96rEtHkL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="23445930"
            title="Echo Dot (4th Gen) | Smart speaker with clock and Alexa | Twilight Blue"
            price={59.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71b9icxgIgL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="49538094"
            title="Roll over image to zoom in 2 VIDEOS
            Ninja 10-Cup Specialty Coffee Maker, with 50 Oz Glass Carafe, Stainless Steel"
            price={169.53}
            rating={4}
            image="https://m.media-amazon.com/images/I/81Qe6lgkYVL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="12321341"
            title="Where the Crawdads Sing Paperback – March 30, 2021"
            price={9.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/81255VTWssL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="HP Pavilion 22cwa 21.5-Inch Full HD 1080p IPS LED Monitor, Tilt, VGA and HDMI (T4Q59AA) - Black"
            price={149.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/81HX5N0RPWL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="ThermoPro TP50 Digital Hygrometer Thermometer and Humidity Gauge with Temperature Humidity Monitor"
            price={10.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61sk3L14n9L._AC_UL200_SR200,200_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row"> */}
        {/* <Product
            id="49538094"
            title="Sony X85J 43 Inch TV: 4K Ultra HD LED Smart Google TV with Native 120HZ Refresh Rate, Dolby Vision HDR, and Alexa Compatibility KD43X85J- 2021 Model"
            price={748.01}
            rating={5}
            image="https://m.media-amazon.com/images/I/81gvQXs0CML._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div> */}
      </div>
    </div>
  );
}

export default Home;
