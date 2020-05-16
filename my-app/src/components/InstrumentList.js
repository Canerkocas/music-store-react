import { ProductConsumer } from "../Context";
import Instrument from "./Instrument";
import Title from "./Title";
import React, { Component } from "react";

export default class InstrumentList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Müzik" category="Aletleri" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.storeInstruments
                    .slice(0, 8)
                    .map((instrument) => {
                      return (
                        <Instrument
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
