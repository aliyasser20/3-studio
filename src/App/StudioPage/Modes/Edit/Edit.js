import React from "react";

import Model from "./Model/Model";
import UserControls from "./UserControls/UserControls";

const Edit = () => (
  <div className="edit">
    <Model url="https://res.cloudinary.com/aajfinal/raw/upload/v1589051277/models/mustard_mhxcwm.glb" />
    <UserControls />
  </div>
);
export default Edit;
