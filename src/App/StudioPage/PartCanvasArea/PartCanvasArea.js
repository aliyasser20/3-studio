import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Paper } from "@material-ui/core";

import PartCanvas from "../Modes/Edit/PartCanvas/PartCanvas";

import materialLibrary from "../../../helpers/materialLibrary";
import * as actions from "../../../store/actions/index";

import "./PartCanvasArea.scss";

const PartCanvasArea = props => {
  const handleDrop = () => {
    props.selectedPart.material = materialLibrary()[props.selectedMaterial];

    // Set unsaved
    props.onSetConfigurationUnsaved();
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
  selectedMaterial: PropTypes.string,
  onSetConfigurationUnsaved: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  selectedPart: state.currentModel.selectedPart,
  selectedMaterial: state.appearanceControls.selectedMaterial
});

const mapDispatchToProps = dispatch => ({
  onSetConfigurationUnsaved: () => dispatch(actions.setConfigurationUnsaved())
});

export default connect(mapStateToProps, mapDispatchToProps)(PartCanvasArea);
