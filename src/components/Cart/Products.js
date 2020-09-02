import React, { Component } from "react";
import formatCurrency from "../../util";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import "./Product.css";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions/productActions";
import { addToCart } from "../../actions/cartActions";
import { BASE_URL } from "../../config"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }
  componentDidMount() {
    this.props.fetchProducts();
   
  }
  openModal = (product) => {
    this.setState({ product });
  };
  closeModal = () => {
    this.setState({ product: null });
  };
  render() {

    const { product } = this.state;
    return (
      
      <div className="store" id="store">
        
        <div className="productcontainer">
        <Fade bottom cascade>
          {!this.props.products ? (
            <div>Loading...</div>
          ) : (
            <ul className="store-items">
              {this.props.products.map((product) => (
                <li key={product.id}>
                 
                  <div className="img-container">
                  
                    <a
                      href={"#" + product.id}
                      onClick={() => this.openModal(product)}
                    >
                      <img src={BASE_URL+product.url} 
                      alt={product.title} 
                      className="store-img"></img>
                    </a>
                    <div className="item-text">
                    <p>{product.title}</p>
                     <p>
                       {formatCurrency(product.price)}</p>
                      <span className="store-item-icon" 
                      onClick={() => this.props.addToCart(product)}>
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </span>                 
                    </div>
                  </div>
                  
                </li>
              ))}
            </ul>
          )}
        </Fade>
      </div>


        {product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              
              <div className="product-details">
              <button className="btn close-modal" onClick={this.closeModal}>
                x
              </button>
                <img src={BASE_URL+product.url} alt={product.title}></img>

                <div className="product-details-description">
                  <p className="item-text">
                  TITLE : {product.title}
                  </p>
                  <p className="item-text">
                  DESCRIPTION : {product.description}
                  </p>
                   
                    <p className="item-text">
                     PRICE : {formatCurrency(product.price)}
                    </p>

                    <p className="store-item-icon pointCursor" 
                      onClick={() => this.props.addToCart(product)}>
                      ADD TO CART : <FontAwesomeIcon icon={faShoppingCart} />
                    </p>                 
                </div>
                <div className="product-details-description">
                 <p>REVIEW GOES HERE</p> 
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}
export default connect(
  (state) => ({ products: state.products.filteredItems }),
  {
    fetchProducts,
    addToCart,
  }
)(Products);