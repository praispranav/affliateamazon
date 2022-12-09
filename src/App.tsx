import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import Redirects from "./Redirect";

const App = () => {
  return (
    <BrowserRouter>
      <Redirects />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
