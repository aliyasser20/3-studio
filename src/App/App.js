import React from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import Car from "./Models/Car/Car";
import Rocket from "./Models/Rocket/Rocket";
import Duck from "./Models/Duck/Duck";
import Mustard from "./Models/Mustard/Mustard";
import TestCenter from "./Models/TestCenter/TestCenter";

const App = () => (
  <div className="App">
    {/* <Duck /> */}
    {/* <Mustard /> */}
    {/* <Car /> */}
    {/* <Rocket /> */}
    <TestCenter url="/models/mustard/mustard.glb" />
  </div>
);
export default App;
