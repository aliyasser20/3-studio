import React, { useState } from "react";
import PropTypes from "prop-types";

import { Popover } from "@material-ui/core";

import { SketchPicker } from "react-color";

import "./ColorPickerPopover.scss";

const ColorPickerPopover = props => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColorPick = color => {
    props.setColor(color.hex.slice(1));
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const colorBoxClasses = props.visible ? "color-box active" : "color-box";

  return (
    <div className="color-picker-popover">
      <div
        style={{ backgroundColor: `#${props.color}` }}
        className={colorBoxClasses}
        onClick={handleClick}
      ></div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <div className="color-picker-popover-content">
          <SketchPicker
            color={`#${props.color}`}
            onChangeComplete={color => handleColorPick(color)}
          />
        </div>
      </Popover>
    </div>
  );
};

ColorPickerPopover.propTypes = {
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
};

export default ColorPickerPopover;
