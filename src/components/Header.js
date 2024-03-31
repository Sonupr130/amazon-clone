import React from "react";
import "./Header.css";
import Search from "./../assets/search.svg";
import Cart from "./../assets/cart.png";

export default function Header() {
  return (
    <div className="header">
      <img
        className="header-logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <img src={Search} alt="Search" className="header-searchIcon" />;
      </div>

      <div className="header-nav">
      <div className="header-option">
        <span className="header-optionLineOne">Hello</span>
        <span className="header-optionLineTwo">Sign In</span>
      </div>
      <div className="header-option">
      <span className="header-optionLineOne">Return</span>
        <span className="header-optionLineTwo">Orders</span>
      </div>
      <div className="header-option">
      <span className="header-optionLineOne">Your</span>
        <span className="header-optionLineTwo">Prime</span>
      </div>
      </div>

      <div className="header-optionBasket">
      <img src={Cart} alt="Basket" className="header-cart" />
        <span className="header-optionLineTwo header-cartCount"> 0 </span>
      </div>
    </div>
  );
}
