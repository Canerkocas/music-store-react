import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";

export default class Record extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.instrument;

    return (
      <div className="container col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container p-5"
                onClick={() => value.detailHandler(id)}
              >
                <Link to="/details">
                  <img
                    src={img}
                    alt="Müzik Aletleri"
                    className="card-img-top"
                  ></img>
                </Link>

                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {" "}
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      {" "}
                      Sepette
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>

          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center text-brand product-title">
              {title}
            </p>
            <h4 className="text-price mb-0 mr-1">
              {price}
              <span className="mr-0">TL</span>
            </h4>
          </div>
        </div>

        <style jsx>{`
          .container {
          }
          .img-container {
            position: relative;
          }
          .img-container:hover {
            transform: scale(1.2);
            transition: all 0.2s;

            overflow: hidden;
          }

          .product-title {
            width: 8 rem;
            height: 2rem;
          }

          .cart-btn:hover {
            transform: scale(1);
          }

          .card:hover {
            transition: all 0.2s;
            border: 1px solid gray;
            transform: translateY(-10px);
            box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
          }
          .cart-img-top {
            transition: all 0.2s;
          }
          .cart-btn {
            position: absolute;
            bottom: 8%;
            right: 8%;
            font-size: 1.4rem;
            border: none;
            background-color: var(--mainRed);
            padding: 0.2rem 0.4rem;
            color: white;
          }
          .cart-btn:hover {
            color: #fff0b3;

            transform: translateY(-0.2rem);
          }
        `}</style>
      </div>
    );
  }
}
