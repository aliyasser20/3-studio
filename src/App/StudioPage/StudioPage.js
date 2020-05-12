import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { connect } from "react-redux";

import { Container } from "@material-ui/core";

import StudioTopBar from "./StudioTopBar/StudioTopBar";
import SideBar from "./SideBar/SideBar";
import GroupsBar from "./GroupsBar/GroupsBar";
import AppearancesBar from "./AppearancesBar/AppearancesBar";
import EditCanvas from "./Modes/Edit/EditCanvas/EditCanvas";
import MediaCanvas from "./Modes/Media/MediaCanvas/MediaCanvas";

import createModel from "../../helpers/createModel";
import * as actions from "../../store/actions/index";
import LoaderModel from "./LoaderModal/LoaderModel";

import "./StudioPage.scss";

const StudioPage = props => {
  // ? Load model with materials
  useEffect(() => {
    if (props.currentProject && props.currentProject.modelLink) {
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
          <div className="custom-grid">
            <StudioTopBar />
            <div className="working-area">
              <SideBar />
              <div className="sub-working-area">
                <div className="canvas-and-controls-area">
                  {props.currentMode === "EDIT" && <EditCanvas />}
                  {props.currentMode === "MEDIA" && <MediaCanvas />}
                </div>
                {props.currentMode === "EDIT" && <GroupsBar />}
                {props.currentMode === "EDIT" && <AppearancesBar />}
              </div>
            </div>
          </div>
        </Container>
      </div>
    ) : (
      <LoaderModel />
    );

  return page;
};

StudioPage.propTypes = {
  currentProject: PropTypes.object,
  onSetModel: PropTypes.func.isRequired,
  onSetFar: PropTypes.func.isRequired,
  onSetNear: PropTypes.func.isRequired,
  onSetSizeBounding: PropTypes.func.isRequired,
  onSetBox: PropTypes.func.isRequired,
  currentMode: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  currentProject: state.projects.currentProject,
  currentMode: state.modeControl.currentMode
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
