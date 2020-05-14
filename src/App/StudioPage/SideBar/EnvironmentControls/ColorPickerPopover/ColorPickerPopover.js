import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Popover } from "@material-ui/core";

import { SketchPicker } from "react-color";
import * as actions from "../../../../../store/actions/index";

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
    props.onSetBackgroundColor(color.hex.slice(1));
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const colorBoxClasses = props.bgSolid ? "color-box active" : "color-box";

  return (
    <div className="color-picker-popover">
      <div
        style={{ backgroundColor: `#${props.bgColor}` }}
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
            color={`#${props.bgColor}`}
            onChangeComplete={color => handleColorPick(color)}
          />
        </div>
      </Popover>
    </div>
  );
};

ColorPickerPopover.propTypes = {
  bgColor: PropTypes.string.isRequired,
  onSetBackgroundColor: PropTypes.func.isRequired,
  bgSolid: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  bgColor: state.environmentControls.bgColor,
  bgSolid: state.environmentControls.bgSolid
});

const mapDispatchToProps = dispatch => ({
  onSetBackgroundColor: color => dispatch(actions.setBackgroundColor(color))
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorPickerPopover);
