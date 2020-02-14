import React from "react";
import { createBrowserHistory as createHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Home from "../views/Home";
import PhotoEditor from "../views/PhotoEditor";
import Customize from "../views/Customize";
import Checkout from "../views/Checkout";

const history = createHistory();

function AppRouter() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/editor">
          <PhotoEditor />
        </Route>
        <Route path="/customize">
          <Customize />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
