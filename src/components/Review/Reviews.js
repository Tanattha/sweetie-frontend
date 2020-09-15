import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchReviews } from "../../actions/reviewActions";
import "./Review.css";

class Reviews extends Component {
  componentDidMount() {
    this.props.dispatchFetchReviews();
  }
  render() {
    const { reviews } = this.props;

    return !reviews ? (
      <div>Loading...</div>
    ) : (
      <div>
        <main>
          <section className="review-container">
            <div>
              {reviews.map((review) => (
                <div key={review.id} >
                  <article className="review">
                    <img
                      className="review-logo"
                      src="../img/review-logo.png"
                      alt="review"
                    />
                    <p className="review-header ">{review.body}</p>
                    <p className="review-text">from : {review.name}</p>
                  </article>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    );
  }
}

const mSTP = (state) => {
  return {
    reviews: state.review.reviews,
  };
};

const mDTP = (dispatch) => {
  return {
    dispatchFetchReviews: () => dispatch(fetchReviews()),
  };
};

export default connect(mSTP, mDTP)(Reviews);
