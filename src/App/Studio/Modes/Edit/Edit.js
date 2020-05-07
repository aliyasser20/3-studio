import React from "react";

import Model from "./Model/Model";
import UserControls from "./UserControls/UserControls";

const Edit = () => (
  <div className="edit">
    <Model url="/models/sphere.glb" />
    <UserControls />
  </div>
);

export default Edit;
