import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { Container } from "@material-ui/core";

import Modes from "./Modes/Modes";
import StudioTopBar from "./StudioTopBar/StudioTopBar";

import createModel from "../../helpers/createModel";
import * as actions from "../../store/actions/index";

const StudioPage = props => {
  // ? Load model with materials
  useEffect(() => {
    if (props.currentProject && props.currentProject.modelLink) {
      console.log("here");
      new GLTFLoader().load(props.currentProject.modelLink, gltf =>
        // Order of inputs is important
        createModel(
          gltf,
          props.onSetBox,
          props.onSetFar,
          props.onSetModel,
          props.onSetSizeBounding,
          props.onSetNear
        )
      );
    }
  }, [
    props.onSetModel,
    props.currentProject,
    props.onSetBox,
    props.onSetFar,
    props.onSetSizeBounding,
    props.onSetNear
  ]);

  const page =
    props.currentProject && props.currentProject.modelLink ? (
      <div className="studio-page">
        <Container maxWidth="xl" classes={{ root: "container-padding" }}>
          {/* <Modes /> */}
          <div className="custom-grid">
            <StudioTopBar />
          </div>
        </Container>
      </div>
    ) : (
      // <Redirect to="/dashboard" />
      <div>Loading</div>
    );

  return page;
};

StudioPage.propTypes = {
  currentProject: PropTypes.object,
  onSetModel: PropTypes.func.isRequired,
  onSetFar: PropTypes.func.isRequired,
  onSetNear: PropTypes.func.isRequired,
  onSetSizeBounding: PropTypes.func.isRequired,
  onSetBox: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentProject: state.projects.currentProject
});

const mapDispatchToProps = dispatch => ({
  onSetModel: model => dispatch(actions.setModel(model)),
  onSetFov: fov => dispatch(actions.setFov(fov)),
  onSetFar: far => dispatch(actions.setFar(far)),
  onSetNear: near => dispatch(actions.setNear(near)),
  onSetSizeBounding: sizeBounding =>
    dispatch(actions.setSizeBounding(sizeBounding)),
  onSetBox: box => dispatch(actions.setBox(box))
});

export default connect(mapStateToProps, mapDispatchToProps)(StudioPage);
