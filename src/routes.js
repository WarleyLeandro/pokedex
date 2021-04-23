import React from 'react';
import Home from "./App";
import Info from "./components/Info";
import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/info/:id" component={Info} />
    </Switch>
  );
};

export default Routes;
