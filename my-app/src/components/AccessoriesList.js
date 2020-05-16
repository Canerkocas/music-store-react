import Accessories from "./Accessories";

import { ProductConsumer } from "../Context";

import Title from "./Title";
import React, { Component } from "react";

export default class AccessoriesList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Müzik" category="Aksesuarları" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.storeInstruments
                    .slice(16, 24)
                    .map((instrument) => {
                      return (
                        <Accessories
                          key={instrument.id}
                          instrument={instrument}
                        />
                      );
                    });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
