import React, { Component } from "react";
import formatCurrency from "../../util";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import { removeFromCart } from "../../actions/cartActions";
import { createOrder, clearOrder } from "../../actions/orderActions";
import { BASE_URL } from "../../config";
import "./Cart.css";
import "../Product/Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      showCheckout: false,
    };
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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

  closeModal = () => {
    this.props.clearOrder();
    window.location.reload();
    
  };

  render() {
    const { cartItems, order } = this.props;
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {cartItems.length} in the cart{" "}
          </div>
        )}
{/* ORDER POP UP*/}
        {order && (
          <Modal isOpen={true} onRequestClose={this.closeModal} className="zoom-product">
            <Zoom className="zoom-product">
              }
              <div className="order-details">
                <button className="btn close-modal" onClick={this.closeModal}>
                  x
                </button>
                <h3 className="cart cart-header">
                  Your order has been placed.
                </h3>

                <ul>
                  <li className="order-text">
                    Order ID : <sapn className="orderColor">{order.id}</sapn>
                  </li>
                  <li className="order-text">
                    Name : <sapn className="orderColor">{order.name}</sapn>
                  </li>
                  <li className="order-text">
                    Email : <sapn className="orderColor">{order.email}</sapn>
                  </li>
                  <li className="order-text">
                    Total:{" "}
                    <sapn className="orderColor">
                      {formatCurrency(
                        this.props.cartItems.reduce(
                          (a, b) => a + b.price * b.count,
                          0
                        )
                      )}
                    </sapn>
                  </li>
                  <li className="order-text">
                    Cart Items:{" "}
                    {cartItems.map((product) => (
                      <sapn className="orderColor">
                        {product.count} {" x "} {product.title}
                      </sapn>
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
                  <div>
                    Total:{" "}
                    {formatCurrency(
                      cartItems.reduce((a, b) => a + b.price * b.count, 0)
                    )}
                  </div>
                  <span
                    className="checkoutIcon"
                    onClick={() => this.setState({ showCheckout: true })}
                  >
                    <FontAwesomeIcon icon={faCreditCard} />
                  </span>
                </div>
              </div>
              {this.state.showCheckout && (
                <Fade right cascade>
                  <form onSubmit={this.createOrder}>
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

export default connect(
  (state) => ({
    order: state.order.order,
    cartItems: state.cart.cartItems,
  }),
  { removeFromCart, createOrder, clearOrder }
)(Cart);
