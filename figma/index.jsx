import React from "react";
import { FiBrStar } from "./FiBrStar";
import { FiRrPhoneCall } from "./FiRrPhoneCall";
import { FiRrShoppingBag } from "./FiRrShoppingBag";
import { FiSrStar } from "./FiSrStar";
import { IconComponentNode } from "./IconComponentNode";
import "./style.css";

export const ResturentWebsite = () => {
  return (
    <div className="resturent-website">
      <div className="overlap">
        <FiRrShoppingBag className="fi-rr-shopping-bag" color="#272727" />
        <div className="group">
          <div className="overlap-group">
            <div className="text-wrapper">8</div>
          </div>
        </div>
      </div>
      <div className="div">
        <div className="rectangle" />
        <img className="intersect" alt="Intersect" src="intersect.png" />
        <div className="rectangle-2" />
        <div className="text-wrapper-2">Vegetarian salad</div>
        <p className="element">
          <span className="span">$</span>
          <span className="text-wrapper-3">23.00</span>
        </p>
        <p className="p">
          <span className="span">$</span>
          <span className="text-wrapper-3">23.00</span>
        </p>
        <div className="group-2">
          <FiSrStar className="fi-sr-star" color="#FFE605" />
          <FiSrStar className="fi-sr-star-instance" color="#FFE605" />
          <FiSrStar className="icon-instance-node" color="#FFE605" />
          <FiSrStar className="fi-sr-star-2" color="#FFE605" />
          <FiBrStar className="fi-br-star" />
        </div>
        <div className="group-3">
          <FiSrStar className="fi-sr-star" color="#FFE605" />
          <FiSrStar className="fi-sr-star-instance" color="#FFE605" />
          <FiSrStar className="icon-instance-node" color="#FFE605" />
          <IconComponentNode className="fi-br-star" color="#B0B4B7" />
        </div>
        <p className="element">
          <span className="span">$</span>
          <span className="text-wrapper-3">23.00</span>
        </p>
        <FiSrStar className="fi-sr-star-3" color="#FFE605" />
        <FiSrStar className="fi-sr-star-4" color="#FFE605" />
        <FiSrStar className="fi-sr-star-5" color="#FFE605" />
        <FiSrStar className="fi-sr-star-6" color="#FFE605" />
        <FiBrStar className="fi-br-star-instance" />
        <div className="overlap-wrapper">
          <div className="div-wrapper">
            <div className="text-wrapper-4">Hot spicy Food 🌶</div>
          </div>
        </div>
        <div className="rectangle-3" />
        <div className="rectangle-4" />
        <div className="group-4">
          <div className="text-wrapper-5">Spicy noodles</div>
          <p className="element-2">
            <span className="span">$</span>
            <span className="text-wrapper-3">18.00</span>
          </p>
          <div className="group-5">
            <FiSrStar className="fi-sr-star" color="#FFE605" />
            <FiSrStar className="fi-sr-star-instance" color="#FFE605" />
            <FiSrStar className="icon-instance-node" color="#FFE605" />
            <IconComponentNode className="fi-br-star-2" color="#B0B4B7" />
            <IconComponentNode className="fi-br-star" color="#B0B4B7" />
          </div>
        </div>
        <img className="mask-group" alt="Mask group" src="mask-group.png" />
        <img className="img" alt="Mask group" src="image.png" />
      </div>
      <div className="overlap-2">
        <div className="text-wrapper-6">Order Now</div>
      </div>
      <div className="text-wrapper-7">Home</div>
      <div className="text-wrapper-8">Offers</div>
      <div className="text-wrapper-9">Watch Video</div>
      <div className="group-wrapper">
        <div className="group-6">
          <div className="text-wrapper-10">Services</div>
          <img className="group-7" alt="Group" src="group-1.png" />
        </div>
      </div>
      <div className="group-8">
        <div className="text-wrapper-10">Menu</div>
        <img className="group-9" alt="Group" src="group-2.png" />
      </div>
      <div className="overlap-3">
        <div className="text-wrapper-11">Contact</div>
        <FiRrPhoneCall className="fi-rr-phone-call" color="white" />
      </div>
      <p className="dive-into-delights">
        <span className="text-wrapper-12">Dive into Delights Of Delectable </span>
        <span className="text-wrapper-13">Food</span>
      </p>
      <p className="text-wrapper-14">
        Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
      </p>
      <div className="polygon-wrapper">
        <img className="polygon" alt="Polygon" src="polygon-1.svg" />
      </div>
      <img className="icon-search" alt="Icon search" src="icon-search.png" />
      <div className="overlap-4">
        <div className="rectangle-5" />
        <img className="f" alt="F" src="f.svg" />
        <img className="oodi" alt="Oodi" src="oodi.svg" />
      </div>
    </div>
  );
};
