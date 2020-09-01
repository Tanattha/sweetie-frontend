import React from "react";
import Filter from "../Cart/Filter";
import Products from "../Cart/Products";
import Cart from "../Cart/Cart";
import "./Menu.css";
export default function About() {
  
    return (
      <div> 
          <Filter />
          <Products />
          <Cart />
      </div>
    );
   
  };