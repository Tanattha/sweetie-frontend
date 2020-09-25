import React from "react";
import { BASE_URL } from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import formatCurrency from "../../util";

export default class Product extends React.Component {
  state = { count: 0 };

  handleClick = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };
  render() {
    const product = this.props.product;

    return (
      <li key={product.id}>
        <div className="img-container tabColor">
          <a href={"#" + product.id} onClick={() => this.openModal(product)}>
            <img
              src={BASE_URL + product.url}
              alt={product.title}
              className="store-img"
            ></img>
          </a>
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
          <ul>
            <li className="list-group-item" key={product.id}>
              <p> {this.state.count} </p>
              <button onClick={this.handleClick}>Let's count</button>
            </li>
          </ul>
        </div>
      </li>
    );
  }
}
