import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "aos/dist/aos.css";

import Footer from "./components/pages/Footer/Footer";
import Home from "./components/pages/HomePage/Home";
import Navbar from "./components/pages/Navbar";
import Services from "./components/pages/Services/Services";
import Products from "./components/pages/Products/Products";
import SignUp from "./components/pages/Signup/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Home} />
        <Route path="/products" component={Home} />
        <Route path="/sign-up" component={Footer} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
