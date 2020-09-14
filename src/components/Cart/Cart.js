import React, { Component } from "react";
import formatCurrency from "../../util";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import { removeFromCart, clearCart } from "../../actions/cartActions";
import { createOrder } from "../../actions/orderActions";
import { BASE_URL } from "../../config";
import "./Cart.css";
import "../Product/Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

class Cart extends Component {
 /* constructor(props) {
    super(props);

    
  }
  */
  state = {
    name: "",
    email: "",
    showCheckout: false,
    showPlaceorder: false,
  };

  createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      cartItems: this.props.cartItems,
    };
    this.props.createOrder(order);

  };

  readytoCheckout = () => {
    this.setState({ showCheckout: true });
  };

  readytoPlaceorder = () => {
    this.setState({ showPlaceorder: true });
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const ordered = {
      name: "",
      email: "",
      showCheckout: false,
      showPlaceorder: false,
    };
    this.props.clearCart();
   this.setState(ordered);
  };

  render() {
    const { cartItems, order } = this.props;

    const sumPrice = formatCurrency(
      cartItems.reduce((a, b) => a + b.price * b.count, 0)
    );

    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {cartItems.length} in the cart{" "}
          </div>
        )}

        {/* ORDER POP UP */}

        {order && (
          <Modal
            isOpen={this.state.showPlaceorder}
            onRequestClose={this.allDone}
            className="zoom-product"
            ariaHideApp={false}
          >
            <Zoom className="zoom-product">
              <div className="order-details">
                <button className="btn close-modal" onClick={this.handleOnSubmit}>
                  x
                </button>
                <h3 className="cart cart-header">
                  Your order has been placed.
                </h3>

                <ul>
                  <li className="order-text">
                    Order ID : <span className="orderColor">{order.id}</span>
                  </li>
                  <li className="order-text">
                    Name : <span className="orderColor">{order.name}</span>
                  </li>
                  <li className="order-text">
                    Email : <span className="orderColor">{order.email}</span>
                  </li>
                  <li className="order-text">
                    Total: <span className="orderColor">{sumPrice}</span>
                  </li>

                  <li className="order-text">
                    Cart Items:{" "}
                    {cartItems.map((product) => (
                      <span className="orderColor" key={product.id}>
                        {product.count} {" x "} {product.title} &nbsp; &nbsp;
                      </span>
                    ))}
                  </li>
                </ul>
              </div>
            </Zoom>
          </Modal>
        )}

        <div>
          {/* CART */}
          <div className="cart">
            <Fade left cascade>
              <ul className="cart-items">
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <div>
                      <img
                        src={BASE_URL + item.url}
                        alt={item.title}
                        className="cartImg"
                      ></img>
                    </div>
                    <div>
                      <div className="cart-items-text">{item.title}</div>
                      <div className="cart-items-text">
                        {formatCurrency(item.price)} x {item.count} &nbsp;&nbsp;
                        <button
                          className="removeItemButton"
                          onClick={() => this.props.removeFromCart(item)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Fade>
          </div>

          {/* CHECKOUT */}
          {cartItems.length !== 0 && (
            <div>
              <div className="cart">
                <div className="total">
                  <div>Total:{sumPrice}</div>
                  <span className="checkoutIcon" onClick={this.readytoCheckout}>
                    <FontAwesomeIcon icon={faCreditCard} />
                  </span>
                </div>
              </div>
              {this.state.showCheckout && (
                <Fade right cascade>
                  <form name="checkout-form" onSubmit={this.createOrder}>
                    <ul className="form-container">
                      <p className="cart cart-header">CHECK OUT </p>

                      <li>
                        <label className="cart-items-text">Name : </label>
                        <input
                          name="name"
                          type="text"
                          required
                          className="form-input"
                          onChange={this.handleInput}
                        ></input>
                      </li>
                      <li>
                        <label className="cart-items-text">Email : </label>
                        <input
                          name="email"
                          type="email"
                          required
                          className="form-input"
                          onChange={this.handleInput}
                        ></input>
                      </li>

                      <li>
                        <button
                          className="cartBtn checkoutIcon cart-items-text"
                          type="submit"
                          onClick={this.readytoPlaceorder}
                        >
                          Place an order{" "}
                          <FontAwesomeIcon icon={faCheckCircle} />
                        </button>
                      </li>
                    </ul>
                  </form>
                </Fade>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mSTP = (state) => {
  return {
    order: state.order.order,
    cartItems: state.cart.cartItems,
  };
};

const mDTP = { removeFromCart, createOrder, clearCart };

export default connect(mSTP, mDTP)(Cart);
