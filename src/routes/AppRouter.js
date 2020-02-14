import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../views/Home";
import PhotoEditor from "../views/PhotoEditor";
import Customize from "../views/Customize";
import Checkout from "../views/Checkout";

function AppRouter() {
  return (
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
  );
}

export default AppRouter;
