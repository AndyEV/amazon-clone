import React from "react";

import "./Home.css";

import Product from "./../product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._C8428684220_.jpg"
          // src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt="amazon_background"
        />

        <div className="home__row">
          <Product
            id="2343234"
            title="Marvel's Avengers for PlayStation 4"
            price={59.99}
            image="https://m.media-amazon.com/images/I/81DugevkxJL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="11234322"
            title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="2343234"
            title="Marvel's Avengers for PlayStation 4"
            price={59.99}
            image="https://m.media-amazon.com/images/I/61lnzTv2a0L._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="11234322"
            title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81pCpKFjBZL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="578986"
            title="Tony Hawk's Pro Skater 1 + 2 - PlayStation 4"
            price={39.99}
            image="https://m.media-amazon.com/images/I/81eG9bUk8rL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="2343234"
            title="DualShock 4 Wireless Controller for PlayStation 4 - Jet Black"
            price={64.99}
            image="https://m.media-amazon.com/images/I/61IG46p-yHL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
