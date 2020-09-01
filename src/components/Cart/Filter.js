import React, { Component } from "react";
import { connect } from "react-redux";
import "./Product.css";
import { filterProducts, sortProducts } from "../../actions/productActions";
//import Products from "./Products";

class Filter extends Component {
  render() {
    return !this.props.filteredProducts ? (
      <div>Loading...</div>
    ) : (
      <div className="filter">
         <h1 className="filter-header">
      our <strong className="banner-title ">menu</strong>
      </h1>
      <div className="filter-header ">
       
        
         <p className="filter-text"> Order By :{" "} 
          <select
            value={this.props.sort}
            className="btn btn-black filter-btn filter-value"
            onChange={(e) =>
              this.props.sortProducts(
                this.props.filteredProducts,
                e.target.value
              )
            }
          >
            <option value="latest">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
          
          &nbsp;&nbsp;

        
          Filter By :{" "}
          <select
            value={this.props.size}
            className="btn btn-black filter-btn filter-value"
            onChange={(e) =>
              this.props.filterProducts
              (this.props.products, e.target.value)
            }
          >
            <option value="">All</option>
            <option value="cupcake">Cupcakes</option>
            <option value="donut">Donuts</option>
            <option value="cookies">Cookies</option>
            <option value="rolls">Rolls</option>
            <option value="cakes">Cakes</option>
          </select>
          </p>
        </div>
      </div>
    );
  }
}
  
export default connect(
  (state) => ({
    category: state.products.category,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
  }),
  {
    filterProducts,
    sortProducts,
  }
)(Filter);