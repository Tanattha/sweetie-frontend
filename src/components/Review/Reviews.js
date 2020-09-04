import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchReviews } from "../../actions/reviewActions";
import "./Review.css";


class Reviews extends Component {

componentDidMount() {
  this.props.fetchReviews();
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
                <p key={review.id}>
                  <article className="review">
                    <img
                      className="review-logo"
                      src="../img/review-logo.png"
                      alt="review"
                    />

                    <p className="review-header ">{review.body}</p>
                    <p className="review-text">from : {review.name}</p>
                 
                  </article>

                </p>
               
              ))}
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    reviews: state.review.reviews,
  }),
  {
    fetchReviews
  }
)(Reviews);
