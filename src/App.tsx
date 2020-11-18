import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import Main from "./modules/Main";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Hello</title>
      </Helmet>
      <Main />
    </div>
  );
}

export default App;
