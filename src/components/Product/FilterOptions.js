import React, { Component } from "react";
import { connect } from "react-redux";
import "./Product.css";
import { filterProducts, sortProducts } from "../../actions/productActions";

class FilterOptions extends Component {

  sortedProducts = (e) => {
    this.props.dispatchSortProducts(
      this.props.filteredProducts,
      e.target.value)
  }

  filteredProducts = (e) => {
    this.props.dispatchFilterProducts(this.props.products, e.target.value)
  }

  render() {
    return !this.props.filteredProducts ? (
      <div>Loading...</div>
    ) : (
      <div className="filter headmenu-image">
        <h1 className="filter-header">
          our <strong className="banner-title ">menu</strong>
        </h1>
        
        <div className="filter-header ">
          <p className="filter-text">
            {" "}
            Order By :{" "}
            <select
              value={this.props.sort}
              className="btn btn-black filter-btn filter-value"
              onChange={this.sortedProducts}
            >
              <option value="latest">Latest</option>
              <option value="lowest">Lowest</option>
              <option value="highest">Highest</option>
            </select>
            &nbsp;&nbsp; Filter By :{" "}
            <select
              value={this.props.category}
              className="btn btn-black filter-btn filter-value"
              onChange={this.filteredProducts}
            >
              <option value="">All</option>
              <option value="cupcake">Cupcakes</option>
              <option value="donut">Donuts</option>
              <option value="cookie">Cookies</option>
              <option value="roll">Rolls</option>
              <option value="brownie">Brownies</option>
            </select>
          </p>
        </div>
      </div>
    );
  }
}

const mSTP = (state) => {
  return {
    category: state.products.category,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
  };
};

const mDTP = (dispatch) => {
  return {
    dispatchFilterProducts: (products, category) => dispatch(filterProducts(products, category)),
    dispatchSortProducts: (filteredProducts, sort) => dispatch(sortProducts(filteredProducts, sort)),

  };
};

export default connect(mSTP, mDTP)(FilterOptions);