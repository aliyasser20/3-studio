import React from "react";
import PropTypes from "prop-types";

import { FormControlLabel, Checkbox, Slider } from "@material-ui/core";

import ColorPickPopover from "../../ColorPickerPopover/ColorPickerPopover";

import "./SingleLightControl.scss";

const SingleLightControl = props => {
  const handleSliderChange = (event, newValue) => {
    props.onChange(newValue);
  };

  return (
    <div className="single-light-control">
      <FormControlLabel
        className="custom-label"
        control={
          <Checkbox
            className="custom-checkbox"
            checked={props.checked}
            onChange={props.changeChecked}
            name={props.name}
          />
        }
        label={props.label}
      />
      <Slider
        className={props.visible ? "" : "hidden-slider"}
        value={props.value.toFixed(1)}
        valueLabelDisplay="auto"
        step={props.step}
        // marks
        min={props.min}
        max={props.max}
        onChange={handleSliderChange}
      />
      <ColorPickPopover
        color={props.color}
        setColor={props.setColor}
        visible={props.visible}
      />
    </div>
  );
};

SingleLightControl.propTypes = {
  checked: PropTypes.bool.isRequired,
  changeChecked: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
};

export default SingleLightControl;
