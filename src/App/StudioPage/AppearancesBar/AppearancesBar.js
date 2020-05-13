import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Paper, ThemeProvider } from "@material-ui/core";

import themeCreator from "../../../helpers/themeCreator";
import * as actions from "../../../store/actions/index";

import "./AppearancesBar.scss";

const AppearancesBar = props => {
  const theme = themeCreator("#ffffff", "#212121");

  return (
    <ThemeProvider theme={theme}>
      <div className="appearances-bar">
        <Paper classes={{ root: "custom-paper" }} elevation={3}>
          <div
            draggable
            onDragStart={e => {
              e.dataTransfer.dropEffect = "link";
              props.onSetSelectedMaterial("cherryPolished");
            }}
            className="material red"
          >
            Polished Cherry
          </div>
          <div
            draggable
            onDragStart={e => props.onSetSelectedMaterial("goldPolished")}
            onDragEnd={e => console.log(e.screenX, e.screenY)}
            // onDrag
            className="material gold"
          >
            Polished Gold
          </div>
          <div
            draggable
            onDragStart={e => props.onSetSelectedMaterial("purplePolished")}
            className="material purple"
          >
            Polished Purple
          </div>
        </Paper>
      </div>
    </ThemeProvider>
  );
};

AppearancesBar.propTypes = {
  onSetSelectedMaterial: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  onSetSelectedMaterial: material =>
    dispatch(actions.setSelectedMaterial(material))
});

export default connect(null, mapDispatchToProps)(AppearancesBar);
