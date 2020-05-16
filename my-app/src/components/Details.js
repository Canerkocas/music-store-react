import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            title,
            img,
            price,
            inCart,
            star,
            company,
            info,
          } = value.detailInstruments;

          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-brand my-5">
                  <h1>{title}</h1>
                </div>
              </div>

              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} className="img-fluid" alt="Müzik Aleti" />
                </div>

                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h4>
                    <span className="text-detail "> ürün : </span>
                    {title}
                  </h4>

                  <h4 className=" text-capitalize mt-2 mb-2 ">
                    <span className="text-detail"> Firma : </span>
                    {company}
                  </h4>
                  <h4>
                    <span className="text-detail"> Fiyat : </span>
                    {price}TL{" "}
                    <span className="ml-3 star">
                      {" "}
                      <i class="far fa-star"></i>
                      {star}
                    </span>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Ürün Açıklaması:
                  </p>
                  <p className="text-muted lead">{info}</p>

                  <div>
                    <Link to="/">
                      <button className="detail-button">Mağazaya Dön</button>
                    </Link>

                    <Link to="/details">
                      <button
                        className="detail-button"
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {" "}
                        {inCart ? "Sepete Eklendi" : "Sepete Ekle"}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
