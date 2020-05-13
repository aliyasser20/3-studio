import React from "react";
import PropTypes from "prop-types";
import * as actions from "../../../../store/actions/index";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { connect } from "react-redux";

// import "./MediaBackGroundControl.scss";

const MediaBackGroundControl = (props) => {
  return (
    <div className="environment-controls">
      <ExpansionPanel
        className="custom-panel"
        expanded={props.expanded.includes("ENVIRONMENT-CONTROLS")}
        onChange={() => props.handleChange("ENVIRONMENT-CONTROLS")}
      >
        <ExpansionPanelSummary
          className="summary-section"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="environment-controls-summary"
          id="environment-controls-summary"
        >
          <Typography>Background Control</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details-section">
          <h5 className="section-title">Background</h5>
          <FormControlLabel
            className="custom-label"
            control={
              <Checkbox
                className="custom-checkbox"
                checked={props.solidBackground}
                onChange={props.onToggleMediaSolidB}
                name="solidBackground"
              />
            }
            label="Solid Background"
          />
          <FormControlLabel
            className="custom-label"
            control={
              <Checkbox
                className="custom-checkbox"
                checked={props.envBackground}
                onChange={props.onToggleMediaEnvB}
                name="environmentBackground"
              />
            }
            label="Environment Background"
          />
          {/* <FormControlLabel
            className="custom-label"
            control={
              <Checkbox
                className="custom-checkbox"
                checked={props.noBackground}
                onChange={props.onToggleMediaNoB}
                name="noBackground"
              />
            }
            label="No Background"
          /> */}
          
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

MediaBackGroundControl.propTypes = {
  expanded: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  solidBackground: PropTypes.bool.isRequired,
  envBackground: PropTypes.bool.isRequired,
  // noBackground: PropTypes.bool.isRequired,
  onToggleMediaEnvB: PropTypes.func.isRequired,
  onToggleMediaSolidB: PropTypes.func.isRequired,
  // onToggleMediaNoB: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  envBackground: state.mediaControls.mediaEnvBackground,
  solidBackground: state.mediaControls.mediaSolidBackground,
  noBackground: state.mediaControls.mediaNoBackground,
});
const mapDispatchToProps = (dispatch) => ({
  onToggleMediaEnvB: () => dispatch(actions.toggleMediaEnvB()),
  onToggleMediaSolidB: () => dispatch(actions.toggleMediaSolidB()),
  onToggleMediaNoB: () => dispatch(actions.toggleMediaNoB()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaBackGroundControl);
