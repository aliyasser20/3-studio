import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import * as actions from "../../../../../store/actions/index";

import "./ObjectListItem.scss";
import { connect } from "react-redux";
import WSphere from "./Items/wSphere";
import KLight from "./Items/kLight";

const ObjectListItem = (props) => {
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className="object-list"
    >
      {props.wSphere && (
        <WSphere
          onSetMediaSphere={props.onSetMediaSphere}
          wSphere={props.wSphere}
          dragObjects={props.dragObjects}
          onSetDragObjects={props.onSetMediaDragObjects}
        />
      )}
      {props.lSphere && (
        <WSphere
          onSetMediaLSphere={props.onSetMediaLSphere}
          lSphere={props.lSphere}
          dragObjects={props.dragObjects}
          onSetDragObjects={props.onSetMediaDragObjects}
        />
      )}
      {props.kLight && (
        <KLight
          onSetKLight={props.onSetMediaKeyLight}
          kLight={props.kLight}
          dragObjects={props.dragObjects}
          onSetDragObjects={props.onSetMediaDragObjects}
        />
      )}
    </List>
  );
};

ObjectListItem.propTypes = {
  wSphere: PropTypes.object,
  lSphere: PropTypes.object,
  onSetMediaSphere: PropTypes.func.isRequired,
  dragObjects: PropTypes.array,
  onSetMediaDragObjects: PropTypes.func,
  kLight: PropTypes.object,
  onSetMediaKeyLight: PropTypes.func.isRequired,
  onSetMediaLSphere: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  wSphere: state.mediaControls.sphere,
  lSphere: state.mediaControls.lSphere,
  dragObjects: state.mediaState.dragObjects,
  kLight: state.mediaControls.keyLight,
});
const mapDispatchToState = (dispatch) => ({
  onSetMediaSphere: (arg) => dispatch(actions.setMediaSphere(arg)),
  onSetMediaLSphere: (arg) => dispatch(actions.setMediaLSphere(arg)),
  onSetMediaDragObjects: (dragObject) =>
    dispatch(actions.setMediaDragObjects(dragObject)),
  onSetMediaKeyLight: (kLight) => dispatch(actions.setMediaKeyLight(kLight)),
});

export default connect(mapStateToProps, mapDispatchToState)(ObjectListItem);
