import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import Main from "./modules/Main";
import "semantic-ui-css/semantic.min.css";
import reducer from "./reducers/index";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Helmet>
          <title>Hello</title>
        </Helmet>
        <Main />
      </div>
    </Provider>
  );
}

export default App;
