import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import purple from "@material-ui/core/colors/purple";

import Studio from "./Studio/Studio";
import Layout from "./HOC/Layout/Layout";

import themeCreator from "../helpers/themeCreator";

import "./App.scss";

const App = () => (
  <Layout>
    <div className="App">
      <ThemeProvider theme={themeCreator(red[600], purple[800])}>
        <Studio />
      </ThemeProvider>
    </div>
  </Layout>
);
export default App;
