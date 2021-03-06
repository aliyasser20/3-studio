import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";

import CssBaseline from "@material-ui/core/CssBaseline";
import config from "./auth_config.json";
import history from "./utils/history";
import { Auth0Provider } from "./react-auth0-spa";

import App from "./App/App";

import environmentControls from "./store/reducers/environmentControls";
import projects from "./store/reducers/projects";
import themes from "./store/reducers/themes";
import modeControl from "./store/reducers/modeControl";
import currentModel from "./store/reducers/currentModel";
import cameraControls from "./store/reducers/cameraControls";
import extraControls from "./store/reducers/extraControls";
import appearanceControls from "./store/reducers/appearanceControls";
import mediaState from "./store/reducers/mediaState";
import mediaControls from "./store/reducers/mediaControls";
import lightControls from "./store/reducers/lightControls";
import configurations from "./store/reducers/configurations";
import users from "./store/reducers/users";
import partModel from "./store/reducers/partModel";

import * as serviceWorker from "./serviceWorker";

import "./index.css";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  environmentControls,
  projects,
  themes,
  modeControl,
  currentModel,
  cameraControls,
  extraControls,
  appearanceControls,
  mediaState,
  mediaControls,
  lightControls,
  configurations,
  users,
  partModel
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// A function that routes the user to the right place after login
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const redirectUri =
  process.env.NODE_ENV === "development"
    ? window.location.origin
    : "https://3-studio.netlify.app/callback";

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={redirectUri}
        onRedirectCallback={onRedirectCallback}
      >
        <CssBaseline />
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
