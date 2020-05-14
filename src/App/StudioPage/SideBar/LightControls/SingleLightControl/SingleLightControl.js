import React from "react";
import PropTypes from "prop-types";

import { FormControlLabel, Checkbox, Slider } from "@material-ui/core";

import ColorPickPopover from "../../ColorPickerPopover/ColorPickerPopover";

import "./SingleLightControl.scss";

const SingleLightControl = props => (
  <div className="single-light-control">
    <FormControlLabel
      className="custom-label"
      control={
        <Checkbox
          className="custom-checkbox"
          checked={props.checked}
          onChange={() => props.changeChecked}
          name={props.name}
        />
      }
      label={props.label}
    />
    <Slider
      defaultValue={props.value}
      valueLabelDisplay="auto"
      step={props.step}
      marks
      min={props.min}
      max={props.max}
      onChange={props.onChange}
    />
    <ColorPickPopover />
  </div>
);

SingleLightControl.propTypes = {
  checked: PropTypes.bool.isRequired,
  changeChecked: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default SingleLightControl;
