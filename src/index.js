import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import CssBaseline from "@material-ui/core/CssBaseline";
import config from "./auth_config.json";
import history from "./utils/history";
import { Auth0Provider } from "./react-auth0-spa";

import App from "./App/App";

import environmentControls from "./store/reducers/environmentControls";
import projects from "./store/reducers/projects";

import * as serviceWorker from "./serviceWorker";

import "./index.css";

// Set default url for axios in production mode from environment vars
if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
} else {
  axios.defaults.baseURL = "http://localhost:8001";
}

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  environmentControls,
  projects
});

const store = createStore(rootReducer, composeEnhancers());

// A function that routes the user to the right place after login
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <CssBaseline />
      <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
