import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Home />
    </div>
  </Router>
);

export default App;
