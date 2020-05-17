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

const PGround = (props) => {
  const [openPGround, setOpenPGround] = useState(false);
  const [rotations, setRotations] = useState(false);
  const handleClick = () => {
    setOpenPGround(!openPGround);
  };

  const handleRemovePGround = () => {
    const currentDragObjects = [...props.dragObjects];
    console.log(currentDragObjects);
    const removed = currentDragObjects.filter((obj) => obj.name !== "p-ground");
    props.onSetDragObjects(removed);
    props.onSetPGround(null);
    setOpenPGround(false);
  };

  const handleColorSet = (color) => {
    const PGroundArgs = { ...props.pGround, color };
    props.onSetPGround(PGroundArgs);
  };

  const handleScaleChange = (e, newValue) => {
    const currentScale = [newValue, newValue, newValue];
    const newScale = { ...props.pGround, scale: [...currentScale] };
    props.onSetPGround(newScale);
  };

  const handleXrotation = () => {
    const toggleRotateX = {
      ...props.pGround,
      rotate: { ...props.pGround.rotate, x: !props.pGround.rotate.x },
    };
    props.onSetPGround(toggleRotateX);
  };
  const handleYrotation = () => {
    const toggleRotateY = {
      ...props.pGround,
      rotate: { ...props.pGround.rotate, y: !props.pGround.rotate.y },
    };
    props.onSetPGround(toggleRotateY);
  };
  const handleZrotation = () => {
    const toggleRotateZ = {
      ...props.pGround,
      rotate: { ...props.pGround.rotate, z: !props.pGround.rotate.z },
    };
    props.onSetPGround(toggleRotateZ);
  };

  const handleDragLock = () => {
    props.onSetPGround({ ...props.pGround, lock: !props.pGround.lock });
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <HighlightOffIcon onClick={() => handleRemovePGround()} />
        </ListItemIcon>
        <ListItemText primary="P-Ground" />
        {openPGround ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openPGround} timeout="auto" unmountOnExit>
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
                      checked={props.pGround.rotate.x}
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
                      checked={props.pGround.rotate.y}
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
                      checked={props.pGround.rotate.z}
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
                    checked={props.pGround.lock}
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
                color={props.pGround.color}
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
              value={props.pGround.scale[0]}
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

PGround.propTypes = {
  onSetPGround: PropTypes.func.isRequired,
  pGround: PropTypes.object,
  dragObjects: PropTypes.array,
  onSetDragObjects: PropTypes.func,
};

export default PGround;
