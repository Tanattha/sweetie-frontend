import React, { Component } from "react";
import { connect } from "react-redux";
import "./Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { addReview } from "../../actions/reviewActions";

class Review extends Component {
constructor(props) {
    super(props);
    this.state = {
      name: "",
      body: "",
      showReview: false,
  
    };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  
  addReview = (e) => {
    e.preventDefault();
    const review = {
      name: this.state.name,
      body: this.state.body,
    };
    this.props.addReview(review);
    window.location.reload();
  };

  render() {
    const { review } = this.props;
    return !review ? (
      <div>
        Loading...</div>
    ) : (
      <div className="header-review">
      
            <div className="addreview-container">
            <div className="reviewform-container">
            <form onSubmit={this.addReview}>

            <ul>
                  
                <p className="cart cart-header">Create a review </p>
               
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
                  <label className="cart-items-text">Review : </label>
                  <input
                    name="body"
                    type="body"
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
                    Submit <FontAwesomeIcon icon={faCheckCircle} />
                  </button>
                </li>
                </ul>
             
            </form>
            </div>
            </div>
          
      </div>
    )
  }}

const mSTP = (state) => {
  return {
     review: state.review
  };
};

export default connect(mSTP, {addReview})(Review);

