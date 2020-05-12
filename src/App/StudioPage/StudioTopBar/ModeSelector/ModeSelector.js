import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Button, ButtonGroup } from "@material-ui/core";

import * as actions from "../../../../store/actions/index";

const ModeSelector = props => {
  let modes;
  return (
    <div className="modes-selector">
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>View</Button>
        <Button>Edit</Button>
        <Button>Media</Button>
      </ButtonGroup>
    </div>
  );
};

ModeSelector.propTypes = {
  currentMode: PropTypes.string.isRequired,
  onModeSelect: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentMode: state.modeControl.currentMode
});

const mapDispatchToProps = dispatch => ({
  onModeSelect: mode => dispatch(actions.modeSelect(mode))
});

export default connect(mapStateToProps, mapDispatchToProps)(ModeSelector);
