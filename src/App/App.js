import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";

import Model from "./Model/Model";
import UserControls from "./UserControls/UserControls";

import themeCreator from "../helpers/themeCreator";

const App = () => (
  <div className="App">
    <ThemeProvider theme={themeCreator()}>
      <Model url="/models/car.glb" />
      <UserControls />
    </ThemeProvider>
  </div>
);
export default App;
