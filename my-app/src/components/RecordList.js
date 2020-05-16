import { ProductConsumer } from "../Context";
import Record from "./Record";
import Title from "./Title";
import React, { Component } from "react";

export default class RecordList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Müzik" category="Plakları" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.storeInstruments
                    .slice(8, 16)
                    .map((instrument) => {
                      return (
                        <Record key={instrument.id} instrument={instrument} />
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
