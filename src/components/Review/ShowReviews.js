import React from "react";
import Reviews from "../../components/Review/Reviews";
import Review from "../../components/Review/Review";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Review.css";

export default function ShowReviews() {
  return (
    <div className="review-content">
      <div className="review-title">
        <h1 className="review-head">reviews</h1>
        <div className="underline"></div>

        <a href="#scroll" className="reviewIcon">
          Add a new review <FontAwesomeIcon icon={faPlus} />
        </a>
      </div>

      <div className="main">
        <Reviews />
      </div>
      <div id="scroll" className="main">
        <Review />
      </div>
    </div>
  );
}
