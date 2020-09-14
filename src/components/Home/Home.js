import React, { Component } from "react";
const imgUrl = `url("${process.env.PUBLIC_URL}/img/header.jpeg")`;

export default class Home extends Component {
  render() {
    return (
      <div className="max-height" style={{ backgroundImage: imgUrl }} id="home">
        <div className="banner">
          <h1>
            welcome to <strong className="banner-title ">Sweetie</strong>
          </h1>
          <a href="/menu" className="btn banner-link text-uppercase my-2">
            ORDER NOW!
          </a>
        </div>
      </div>
    );
  }
}
