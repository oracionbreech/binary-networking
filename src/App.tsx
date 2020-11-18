import React from "react";
import "./App.css";
import Main from "./modules/Main";
import "semantic-ui-css/semantic.min.css";
import reducer from "./reducers/index";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Main />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
