import React, { Component } from "react";
//import formatCurrency from "../../util";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import { removeFromCart } from "../../actions/cartActions";
import { createOrder, clearOrder } from "../../actions/orderActions";
import { BASE_URL } from "../../config"
import "./Cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

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
      total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0),
    };
    this.props.createOrder(order);
  };
  closeModal = () => {
    this.props.clearOrder();
  };
  render() {
    const { cartItems, order } = this.props;
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">
            Cart is empty</div>
        ) : (
          <div className="cart cart-header">
           You have {cartItems.length} in the cart{" "}
          </div>
        )}

        {order && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="order-details">
                <h3 className="success-message">Your order has been placed.</h3>
                <h2>Order {order.id}</h2>
                <ul>
                  <li>
                    <div>Name:</div>
                    <div>{order.name}</div>
                  </li>
                  <li>
                    <div>Email:</div>
                    <div>{order.email}</div>
                  </li>
                  
                  <li>
                    <div>Date:</div>
                    <div>{order.createdAt}</div>
                  </li>
                  <li>
                    <div>Total:</div>
                    <div>{order.total}</div>
                  </li>
                  <li>
                    <div>Cart Items:</div>
                    <div>
                      {order.cartItems.map((x) => (
                        <div>
                          {x.count} {" x "} {x.title}
                        </div>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </Zoom>
          </Modal>
        )}
        <div>
          <div className="cart">
            <Fade left cascade>
              <ul className="cart-items">
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <div >
                      <img src={BASE_URL+item.url} 
                      alt={item.title} 
                      className="cartImg">

                      </img>
                    
                    </div>
                      <div>
                        <div className="cart-items-text">
                          {item.title}
                          </div>
                      <div className="cart-items-text">
                        {item.price} x {item.count}{" "}
                        
                        &nbsp;&nbsp;
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
          {cartItems.length !== 0 && (
            <div>
              <div className="cart">
                <div className="total">
                  <div>
                    Total:{" "}
                    {
                      cartItems.reduce((a, c) => a + c.price * c.count, 0)
                    }
                  </div>
                   <span className="checkoutIcon" 
                      onClick={() => this.setState({ showCheckout: true })}>
                       <FontAwesomeIcon icon={faCreditCard} />
                    </span>
                </div>
              </div>
              {this.state.showCheckout && (
                <Fade right cascade>
                  
                    <form onSubmit={this.createOrder} >
                      <ul className="form-container">
                        <p className="cart cart-header">CHECK OUT </p>
                        <li>
                          <label className="cart-items-text">Email</label>
                          <input
                            name="email"
                            type="email"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <label className="cart-items-text">Name</label>
                          <input
                            name="name"
                            type="text"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        
                        <li>
                          <button className="chechoutButton cart-items-text" type="submit">
                            Checkout and Sign Up
                          </button>
                        </li>
                        <li>
                          <button className="chechoutButton cart-items-text" type="submit">
                            Checkout as Guest
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