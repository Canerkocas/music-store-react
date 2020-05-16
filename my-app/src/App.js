import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import InstrumentList from "./components/InstrumentList";
import RecordList from "./components/RecordList";
import AccessoriesList from "./components/AccessoriesList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Error from "./components/Error";
import Modal from './components/Modal';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact component={InstrumentList} />
        <Route path="/records" component={RecordList} />
        <Route path="/accessories" component={AccessoriesList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Error} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
