import React, {Component} from 'react'
import './About.css';
export default class About extends Component {

  render (){
  return (
    <div className="container">
      <section className="about" id="about">
        <div className="">
          <h1 className="about-title">
            about <strong className="banner-title">us</strong>
          </h1>
          <p className="about-desc">
          Our business is not only to sell delicious sweets but we like to say we're in the business of making lasting memories. We are honored to be a part of our customer's special moments and to thank them we strive to make everything as easy and smooth as possible. Our motto has always been to leave the world a little sweeter than we found it.
          </p>
        
        </div>
        <div className="align-self-center">
          <div className="about-img__container">
            <img
              src="img/aboutUs.jpeg"
              loading="lazy"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  )};
};
