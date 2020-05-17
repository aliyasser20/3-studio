import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Paper } from "@material-ui/core";

import PartCanvas from "../Modes/Edit/PartCanvas/PartCanvas";

import materialLibrary from "../../../helpers/materialLibrary";
import * as actions from "../../../store/actions/index";

import "./PartCanvasArea.scss";

const PartCanvasArea = props => {
  const handleDrop = e => {
    e.preventDefault();

    if (props.selectedMaterial) {
      // Order is important
      props.onUpdateMaterial(props.selectedPart.name, {
        name: props.selectedMaterial
      });

      props.selectedPart.material = materialLibrary(props.selectedMaterial)[
        props.selectedMaterial
      ];

      props.onSetSelectedMaterial("");
      // Set unsaved
      props.onSetConfigurationUnsaved();
    }
  };

  return (
    <div className="part-canvas-area">
      <Paper classes={{ root: "custom-paper" }} elevation={3}>
        <div
          onDragOver={e => e.preventDefault()}
          onDrop={e => handleDrop(e)}
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
  onSetConfigurationUnsaved: PropTypes.func.isRequired,
  onSetSelectedMaterial: PropTypes.func.isRequired,
  onUpdateMaterial: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  selectedPart: state.currentModel.selectedPart,
  selectedMaterial: state.appearanceControls.selectedMaterial
});

const mapDispatchToProps = dispatch => ({
  onSetConfigurationUnsaved: () => dispatch(actions.setConfigurationUnsaved()),
  onSetSelectedMaterial: material =>
    dispatch(actions.setSelectedMaterial(material)),
  onUpdateMaterial: (partName, material) =>
    dispatch(actions.updateMaterials(partName, material))
});

export default connect(mapStateToProps, mapDispatchToProps)(PartCanvasArea);
