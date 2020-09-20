import React, { Component } from "react";
import { connect } from "react-redux";
import "./Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { addReview } from "../../actions/reviewActions";

const initialState = {
  name: "",
  body: "",
  showReview: false,
};

class Review extends Component {

  state = { initialState };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnSubmit = () => {
    const review = {
      name: this.state.name,
      body: this.state.body,
    };
    this.props.dispatchAddReview(review);  
    this.handleReview();
  };
  
  handleReview = () => {
    this.setState(initialState);
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

            <form >
            <ul>
              <br></br><br></br>
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
                    onClick={this.handleOnSubmit}
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

const mDTP = (dispatch) => {
  return {
    dispatchAddReview: (review) => dispatch(addReview(review)),
  };
};

export default connect(mSTP, mDTP)(Review);

