import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../../../store/actions/index";
import Edit from "./Edit/Edit";
import View from "./View/View";
import Media from "./Media/Media";

const Modes = (props) => (
  <>
    <button
      type="button"
      className="mode-selector view"
      onClick={(e) => props.onModeSelect("VIEW")}
    >
      view mode
    </button>
    <button
      type="button"
      className="mode-selector edit"
      onClick={(e) => props.onModeSelect("EDIT")}
    >
      edit mode
    </button>
    <button
      type="button"
      className="mode-selector media"
      onClick={(e) => props.onModeSelect("MEDIA")}
    >
      media mode
    </button>
    <div className="modes">
      {props.currentMode === "VIEW" && <View />}
      {props.currentMode === "EDIT" && <Edit />}
      {props.currentMode === "MEDIA" && <Media />}
    </div>
  </>
);

Modes.propTypes = {
  currentMode: PropTypes.string.isRequired,
  onModeSelect: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentMode: state.modeControl.currentMode,
});

const mapDispatchToProps = (dispatch) => ({
  onModeSelect: (mode) => dispatch(actions.modeSelect(mode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modes);
