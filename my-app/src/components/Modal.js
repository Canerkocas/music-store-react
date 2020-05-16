import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class Modal extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductConsumer>
          {(value) => {
            const { modelOpen, closeModal } = value;
            const { img, title, price } = value.modalProduct;

            if (!modelOpen) {
              return null;
            } else {
              return (
                <ModalContainer onClick={() => closeModal()}>
                  <div classname="container">
                    <div className="row">
                      <div
                        id="modal"
                        className="col-8 mx-auto col-md-6 col-lg-8 text-center text-capitalize  border border-secondary "
                      >
                        <h5 id="detail-title" className="mt-1">
                          Ürün Sepete Eklendi!
                        </h5>
                        <img src={img} className="img-fluid" alt="Ürün" />
                        <h5>{title}</h5>
                        <h5 className="text-brand">Fiyat: {price} TL</h5>
                        <Link to="/">
                          <button
                            className="btn btn-outline-info mb-3 mr-2"
                            onClick={() => closeModal()}
                          >
                            Mağazaya Dön
                          </button>
                        </Link>

                        <Link to="/cart">
                          <button
                            className="btn btn-outline-info mb-3"
                            onClick={() => closeModal()}
                          >
                            Sepete Git
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ModalContainer>
              );
            }
          }}
        </ProductConsumer>
      </React.Fragment>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    background: #f3f3f3;
  }

  #detail-title {
    color: var(--mainRed);
  }
`;
