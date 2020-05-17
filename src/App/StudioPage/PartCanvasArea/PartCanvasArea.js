import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Paper } from "@material-ui/core";

import PartCanvas from "../Modes/Edit/PartCanvas/PartCanvas";

import materialLibrary from "../../../helpers/materialLibrary";

import "./PartCanvasArea.scss";

const PartCanvasArea = props => {
  const handleDrop = () => {
    props.selectedPart.material = materialLibrary()[props.selectedMaterial];
  };

  return (
    <div className="part-canvas-area">
      <Paper classes={{ root: "custom-paper" }} elevation={3}>
        <div
          onDragOver={e => e.preventDefault()}
          onDrop={handleDrop}
          className="canvas-container"
        >
          <PartCanvas />
        </div>
      </Paper>
    </div>
  );
};

PartCanvasArea.propTypes = {
  selectedPart: PropTypes.object,
  selectedMaterial: PropTypes.string
};

const mapStateToProps = state => ({
  selectedPart: state.currentModel.selectedPart,
  selectedMaterial: state.appearanceControls.selectedMaterial
});

export default connect(mapStateToProps, null)(PartCanvasArea);
