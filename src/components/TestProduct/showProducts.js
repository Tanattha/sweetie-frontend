import FilterResults from "react-filter-search";
import { BASE_URL } from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import formatCurrency from "../../util";
import React from "react";

export default class showProducts extends React.Component {
    render () {
        const { value, data } = this.props;
        return (
            <>
            <FilterResults
            value={value}
            data={data}
            renderResults={(data) => (
              <ul className="store-items">
                {data.map((product) => (
                  <li key={product.id}>
                    <div className="img-container tabColor">
                      <img
                        src={BASE_URL + product.url}
                        alt={product.title}
                        className="store-img"
                      ></img>

                      <div className="product-text ">
                        <p>{product.title}</p>
                        <p>{formatCurrency(product.price)}</p>
                        <span
                          className="store-item-icon"
                          onClick={() => this.props.dispatchAddToCart(product)}
                        >
                          <FontAwesomeIcon icon={faShoppingCart} />
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          />
          </>
        )
    }
}
