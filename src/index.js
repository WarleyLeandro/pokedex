import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import PokemonsProvider from "./context/ContextData";

ReactDOM.render(
  <BrowserRouter>
    <PokemonsProvider>
      <Routes />
    </PokemonsProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
