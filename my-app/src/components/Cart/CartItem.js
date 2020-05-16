import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="Sepetteki Ürün"
        />
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">ürün :</span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">fiyat :</span>
        {price}
      </div>

      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-cart mx-1" onClick={() => decrement(id)}>
              &minus;
            </span>

            <span className="btn btn-cart mx-1">{count}</span>

            <span className="btn btn-cart mx-1" onClick={() => increment(id)}>
              &#43;
            </span>
          </div>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon">
          <i class="fas fa-trash-alt" onClick={() => removeItem(id)}></i>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <strong> {total} TL</strong>
      </div>
    </div>
  );
}
