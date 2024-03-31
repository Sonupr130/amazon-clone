import React from "react";
import "./Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-img"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />

        <div className="home-row">
          <Product
            id="432"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={110}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg
"
          />

          <Product
            id="433"
            title="
Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={1300}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg
"
          />

          <Product
            id="434"
            title="Local Ultra ProMax SmartWatch "
            price={5000}
            rating={5}
            image="  https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg
"
          />

          <Product
            id="435"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={1400}
            rating={5}
            image=" https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$
"
          />
        </div>

        <div className="home-row">
          <Product
            id="500"
            title="IndoPrimo Men's Regular Fit Checks Cotton Casual Shirt for Men Full Sleeves - Suzuki"
            price={494}
            rating={5}
            image="https://m.media-amazon.com/images/I/71xZY5-a1oL._SY550_.jpg
"
          />

          <Product
            id="501"
            title="Lenovo IdeaPad Slim 3 Intel Core i7 12th Gen 15.6 inch (39.62cm) FHD Thin & Light Laptop (16GB/512GB SSD/Windows 11/Office 2021/3months Game Pass/Arctic Grey/1.63Kg), 82RK011EIN"
            price={`62,450`}
            rating={5}
            image="https://m.media-amazon.com/images/I/51D0u37wUuL._SX450_.jpg
"
          />

          <Product
            id="502"
            title="Samsung 183 L, 4 Star, Digital Inverter, Direct-Cool Single Door Refrigerator (RR20C1824CR/HL, Red, Camellia Purple, Base Stand Drawer, 2024 Model)"
            price={`16,390`}
            rating={5}
            image="https://m.media-amazon.com/images/I/61RJPjzX0UL._AC_UL480_FMwebp_QL65_.jpg
"
          />

          <Product
            id="503"
            title="realme narzo 60 5G (Mars Orange,8GB+128GB) 90Hz Super AMOLED Display | Ultra Premium Vegan Leather Design | with 33W SUPERVOOC Charger"
            price={`14,999`}
            rating={4}
            image=" https://m.media-amazon.com/images/I/8195A49fZbL._SX569_.jpg
"
          />
        </div>
      </div>
    </div>
  );
}
