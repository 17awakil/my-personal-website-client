import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Music from "./pages/Music";
import { Provider } from "react-redux";
import store from "./store";
export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/music" component={Music}>
            <Music></Music>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
