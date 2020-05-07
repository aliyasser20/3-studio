import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import purple from "@material-ui/core/colors/purple";

import Studio from "./Studio/Studio";

import themeCreator from "../helpers/themeCreator";

const App = () => (
  <div className="App">
    <ThemeProvider theme={themeCreator(red[600], purple[800])}>
      <Studio />
    </ThemeProvider>
  </div>
);
export default App;
