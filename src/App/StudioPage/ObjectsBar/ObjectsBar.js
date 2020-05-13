import React, { useState } from "react";
import PropTypes from "prop-types";

import { Paper, ThemeProvider } from "@material-ui/core";

import themeCreator from "../../../helpers/themeCreator";

import "./ObjectsBar.scss";

const ObjectsBar = (props) => {
  const theme = themeCreator("#ffffff", "#212121");
  const [object, setObject] = useState({ name: "", params: {} });

  const handleWsphereGrab = () => {};
  return (
    <ThemeProvider theme={theme}>
      <div className="objects-bar">
        <Paper classes={{ root: "custom-paper" }} elevation={3}>
          <div
            draggable
            onDragStart={(e) => {
              e.dataTransfer.dropEffect = "link";
              handleWsphereGrab();
            }}
            className="material sphere"
          >
            W-SPHERE
          </div>
        </Paper>
      </div>
    </ThemeProvider>
  );
};

ObjectsBar.propTypes = {};

export default ObjectsBar;
