import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize">Ürünler</p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize">Model</p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize">Fiyat</p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize">Adet</p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize">Kaldır</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize">Toplam</p>
        </div>
      </div>
    </div>
  );
}
