import React from "react";
import Filter from "../Product/Filter";
import Products from "../Product/Products";
import Cart from "../Cart/Cart";

import "./Menu.css";
export default function Menu() {
  return (
    <div>
      <Filter />
      <div className="content">
        <div className="main">
          <Products />
        </div>
        <div className="sidebar">
          <Cart />
         
        </div>
      </div>
    </div>
  );
}
