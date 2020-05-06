import React from "react";

import Model from "./Model/Model";
import UserControls from "./UserControls/UserControls";

const App = () => (
  <div className="App">
    <Model url="/models/car.glb" />
    <UserControls />
  </div>
);
export default App;
