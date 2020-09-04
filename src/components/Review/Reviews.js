import React, { Component } from "react";
import {connect} from 'react-redux';
import { fetchReviews } from '../../actions/reviewActions'

class Reviews extends Component {
  componentDidMount() {
    this.props.fetchReviews();
  }
   


  render() {
    const { reviews } = this.props;
    return !reviews ? (
      <div>
        Loading...
      </div>
    ) : (
    
      <div className="App">
         <h2>our reviews</h2>
       
      <main>
      {reviews.map((review) => (

        <section className="container">
          <div className="title">
            
            <div className="underline"></div>
          </div>

          <article className="review">
           
            <h4 >{review.name}</h4>
            <p>{review.body}</p>
            
            <div className="button-container">
              <button
                className="prev-btn"
               
                title="left"
              >
                &#x2039;
              </button>
              <button className="next-btn" title="right">
                &#x203A;
              </button>
            </div>
           
          </article>


        </section>
          ))}
      </main>
     
    </div>
   
      /*<div className="orders">
        <h2>Orders</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>        
              <th>NAME</th>
              <th>COMMENT</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr>
                <td>{review.id}</td>
                <td>{review.created_at}</td>
                <td>{review.name}</td>
                <td>{review.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>*/
    );
  }
}
export default connect(
  (state) => ({
    reviews: state.review.reviews,
  }),
  {
    fetchReviews,
  }
)(Reviews);
