import React, { useState } from "react";
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

const ObjectListItem = (props) => {
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className="object-list"
    >
      {/* <ListItem button>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem> */}
      {props.wSphere && <WSphere onSetMediaSphere={props.onSetMediaSphere} />}
    </List>
  );
};

ObjectListItem.propTypes = {
  wSphere: PropTypes.object,
  onSetMediaSphere: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  wSphere: state.mediaControls.sphere,
});
const mapDispatchToState = (dispatch) => ({
  onSetMediaSphere: (arg) => dispatch(actions.setMediaSphere(arg)),
});

export default connect(mapStateToProps, mapDispatchToState)(ObjectListItem);
