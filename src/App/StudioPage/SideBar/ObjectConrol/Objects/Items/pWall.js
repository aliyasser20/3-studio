import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import ColorPickerPopover from "../../../ColorPickerPopover/ColorPickerPopover";
import { FormControlLabel, Checkbox, Slider } from "@material-ui/core";

const PWall = (props) => {
  const [openPWall, setOpenPWall] = useState(false);
  const [rotations, setRotations] = useState(false);
  const handleClick = () => {
    setOpenPWall(!openPWall);
  };

  const handleRemovePWall = () => {
    const currentDragObjects = [...props.dragObjects];
    console.log(currentDragObjects);
    const removed = currentDragObjects.filter((obj) => obj.name !== "p-ground");
    props.onSetDragObjects(removed);
    props.onSetPWall(null);
    setOpenPWall(false);
  };

  const handleColorSet = (color) => {
    const PWallArgs = { ...props.pWall, color };
    props.onSetPWall(PWallArgs);
  };

  const handleScaleChange = (e, newValue) => {
    const currentScale = [newValue, newValue, newValue];
    const newScale = { ...props.pWall, scale: [...currentScale] };
    props.onSetPWall(newScale);
  };

  const handleXrotation = () => {
    const toggleRotateX = {
      ...props.pWall,
      rotate: { ...props.pWall.rotate, x: !props.pWall.rotate.x },
    };
    props.onSetPWall(toggleRotateX);
  };
  const handleYrotation = () => {
    const toggleRotateY = {
      ...props.pWall,
      rotate: { ...props.pWall.rotate, y: !props.pWall.rotate.y },
    };
    props.onSetPWall(toggleRotateY);
  };
  const handleZrotation = () => {
    const toggleRotateZ = {
      ...props.pWall,
      rotate: { ...props.pWall.rotate, z: !props.pWall.rotate.z },
    };
    props.onSetPWall(toggleRotateZ);
  };

  const handleDragLock = () => {
    props.onSetPWall({ ...props.pWall, lock: !props.pWall.lock });
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <HighlightOffIcon onClick={() => handleRemovePWall()} />
        </ListItemIcon>
        <ListItemText primary="P-Ground" />
        {openPWall ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openPWall} timeout="auto" unmountOnExit>
        <ListItem button onClick={() => setRotations(!rotations)}>
          <ListItemText primary="Rotation Options" />
          {rotations ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={rotations} timeaout="auto" unmountOnExit>
          <List component="div" className="details-section" disablePadding>
            <ListItem>
              <ListItemIcon>
                <FormControlLabel
                  className="custom-label"
                  control={
                    <Checkbox
                      className="custom-checkbox"
                      checked={props.pWall.rotate.x}
                      onChange={handleXrotation}
                      name="x-rotation"
                    />
                  }
                />
              </ListItemIcon>
              <ListItemText primary="X-rotation" />
            </ListItem>
          </List>
          <List component="div" className="details-section" disablePadding>
            <ListItem>
              <ListItemIcon>
                <FormControlLabel
                  className="custom-label"
                  control={
                    <Checkbox
                      className="custom-checkbox"
                      checked={props.pWall.rotate.y}
                      onChange={handleYrotation}
                      name="y-rotation"
                    />
                  }
                />
              </ListItemIcon>
              <ListItemText primary="Y-rotation" />
            </ListItem>
          </List>
          <List component="div" className="details-section" disablePadding>
            <ListItem>
              <ListItemIcon>
                <FormControlLabel
                  className="custom-label"
                  control={
                    <Checkbox
                      className="custom-checkbox"
                      checked={props.pWall.rotate.z}
                      onChange={handleZrotation}
                      name="z-rotation"
                    />
                  }
                />
              </ListItemIcon>
              <ListItemText primary="Z-rotation" />
            </ListItem>
          </List>
        </Collapse>
        <List component="div" className="details-section" disablePadding>
          <ListItem>
            <ListItemIcon>
              <FormControlLabel
                className="custom-label"
                control={
                  <Checkbox
                    className="custom-checkbox"
                    checked={props.pWall.lock}
                    onChange={handleDragLock}
                    name="drag"
                  />
                }
              />
            </ListItemIcon>
            <ListItemText primary="Drag" />
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem>
            <ListItemIcon>
              <ColorPickerPopover
                visible
                color={props.pWall.color}
                setColor={handleColorSet}
              />
            </ListItemIcon>
            <ListItemText primary="Color" />
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem>
            <ListItemText primary="Scale" />
            <Slider
              className="scale-slider"
              value={props.pWall.scale[0]}
              valueLabelDisplay="auto"
              step={0.01}
              min={0}
              max={1}
              onChange={handleScaleChange}
            />
          </ListItem>
        </List>
      </Collapse>
    </>
  );
};

PWall.propTypes = {
  onSetPWall: PropTypes.func.isRequired,
  pWall: PropTypes.object,
  dragObjects: PropTypes.array,
  onSetDragObjects: PropTypes.func,
};

export default PWall;
