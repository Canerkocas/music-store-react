import React, { Component, createContext } from "react";
import { storeInstruments, detailInstruments } from "./data";

const ProductContext = createContext();

export default class ProductProvider extends Component {
  state = {
    storeInstruments: [],

    detailInstruments: detailInstruments,
    cart: [],
    modelOpen: false,
    modalProduct: detailInstruments,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempInstruments = [];
    storeInstruments.forEach((item) => {
      const singleItem = { ...item };
      tempInstruments = [...tempInstruments, singleItem];
    });
    this.setState(() => {
      return { storeInstruments: tempInstruments };
    });
  };

  getItem = (id) => {
    const instrument = this.state.storeInstruments.find(
      (item) => item.id === id
    );
    return instrument;
  };

  detailHandler = (id) => {
    const instrument = this.getItem(id);
    this.setState(() => {
      return { detailInstruments: instrument };
    });
  };

  addToCart = (id) => {
    let tempInstruments = [...this.state.storeInstruments];
    const index = tempInstruments.indexOf(this.getItem(id));
    const instrument = tempInstruments[index];
    instrument.inCart = true;
    instrument.count = 1;
    const price = instrument.price;
    instrument.total = price;
    this.setState(
      () => {
        return {
          storeInstruments: tempInstruments,
          cart: [...this.state.cart, instrument],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modelOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modelOpen: false };
    });
  };

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;

      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.storeInstruments];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          storeInstruments: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = (id) => {
    this.setState(
      () => {
        return {
          cart: [],
        };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.18;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = parseFloat(subTotal + tax).toFixed(2);
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          detailHandler: this.detailHandler,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };

