import { PRODUCTS_URL } from "../../config";
import React, { Component } from "react";
//import FilterResults from './showProducts'
import { BASE_URL } from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import formatCurrency from "../../util";

export default class FilterSortProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filter_value: "",
      sort_value: ""
    };
  }

  componentDidMount() {
    fetch(PRODUCTS_URL)
      .then((response) => response.json())
      .then((json) => this.setState({ data: json }));
  }

  handleFilter = (event) => {
   const { value } = event.target;
     this.setState({ filter_value: value});
  };

  handleSort = (event) => {
    const { value } = event.target;
    this.setState({ sort_value: value });
  };


  render() {
    const { data, filter_value, sort_value } = this.state;
    const products = data.filter((product) => product.category.indexOf(filter_value) >= 0);

    switch (sort_value) {
      case "highest":
        products.sort((a, b) => (a.price > b.price ? -1 : 1));
        break;
      case "lowest":
        products.sort((a, b) => (a.price > b.price ? 1 : -1));
        break;
      default:
        products.sort((a, b) => (a.id > b.id ? 1 : -1));
    }

    return (
     <div>
      <div className="filter headmenu-image">
      <h1 className="filter-header">
        our <strong className="banner-title ">menu</strong>
      </h1>
      
      <div className="filter-header ">
        <p className="filter-text">
          {" "}
          Order By :{" "}
          <select
            value={sort_value}
            className="btn btn-black filter-btn filter-value"
            onChange={this.handleSort}
          >
            <option value="latest">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
          &nbsp;&nbsp; Filter By :{" "}
          <select
            value={filter_value}
            className="btn btn-black filter-btn filter-value"
            onChange={this.handleFilter}
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

           <ul className="store-items">
                {products.map((product) => (
                  <li key={product.id}>
                    <div className="img-container tabColor">
                      <img
                        src={BASE_URL + product.url}
                        alt={product.title}
                        className="store-img"
                      ></img>

                      <div className="product-text ">
                        <p>{product.title}</p>
                        <p>{formatCurrency(product.price)}</p>
                        <span
                          className="store-item-icon"
                          onClick={() => this.props.dispatchAddToCart(product)}
                        >
                          <FontAwesomeIcon icon={faShoppingCart} />
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
        </div>
     
     
    );
  }
}


