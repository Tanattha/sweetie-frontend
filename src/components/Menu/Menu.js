import React from "react";
import FilterOptions from "../Product/FilterOptions";
import Products from "../Product/Products";
//import FilterSortProducts from '../TestProduct/FilterSortProducts'

import Cart from "../Cart/Cart";

import "./Menu.css";
export default function Menu() {
  return (
    <div>
    
      <div className="content">
        <div className="main">
          <FilterOptions/>
          <Products />
        </div>
        <div className="sidebar">
       <br></br> <br></br><br></br><br></br>
          <Cart />
         
        </div>
      </div>
    </div>
  );
}