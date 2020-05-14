import React, { useState } from "react";
import PropTypes from "prop-types";

import { Popover, IconButton } from "@material-ui/core";

import { SketchPicker } from "react-color";

import "./ColorPickerPopover.scss";

const ColorPickerPopover = props => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [color, setColor] = useState("#000");

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColorPick = hex => {
    setColor(hex.hex);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="color-picker-popover">
      <div
        style={{ backgroundColor: color }}
        className="color-box"
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
            color={color}
            onChangeComplete={hex => handleColorPick(hex)}
          />
        </div>
      </Popover>
    </div>
  );
};

ColorPickerPopover.propTypes = {};

export default ColorPickerPopover;
