import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import ColorPickerPopover from "../../../ColorPickerPopover/ColorPickerPopover";
import { FormControlLabel, Checkbox, Slider } from "@material-ui/core";

const BLight = (props) => {
  const [openBLight, setOpenBLight] = useState(false);
  const [orbit, setOrbit] = useState(false);
  const [rotations, setRotations] = useState(false);

  const handleClick = () => {
    setOpenBLight(!openBLight);
  };

  const handleRemoveBLight = () => {
    const currentDragObjects = [...props.dragObjects];
    console.log(currentDragObjects);
    const removed = currentDragObjects.filter((obj) => obj.name !== "b-light");
    props.onSetDragObjects(removed);
    props.onSetBLight(null);
    setOpenBLight(false);
  };

  const handleColorSet = (color) => {
    const dLightColor = { ...props.dLight, color };
    props.onSetBLight(dLightColor);
  };

  const handleScaleChange = (e, newValue) => {
    const currentScale = [newValue, newValue, newValue];
    const newScale = { ...props.bLight, scale: [...currentScale] };
    props.onSetBLight(newScale);
  };
  const handlePowerChange = (e, newValue) => {
    const power = newValue;
    const newSpread = { ...props.bLight, power };
    props.onSetBLight(newSpread);
  };
  const handleXmovment = () => {
    const toggleMovmentX = {
      ...props.bLight,
      orbit: { ...props.bLight.orbit, x: !props.bLight.orbit.x },
    };
    props.onSetBLight(toggleMovmentX);
  };
  const handleYmovment = () => {
    const toggleMovmentY = {
      ...props.bLight,
      orbit: { ...props.bLight.orbit, y: !props.bLight.orbit.y },
    };
    props.onSetBLight(toggleMovmentY);
  };
  const handleZmovment = () => {
    const toggleMovmentZ = {
      ...props.bLight,
      orbit: { ...props.bLight.orbit, z: !props.bLight.orbit.z },
    };
    props.onSetBLight(toggleMovmentZ);
  };

  const handleXrotation = () => {
    const toggleRotateX = {
      ...props.bLight,
      rotate: { ...props.bLight.rotate, x: !props.bLight.rotate.x },
    };
    props.onSetBLight(toggleRotateX);
  };
  const handleYrotation = () => {
    const toggleRotateY = {
      ...props.bLight,
      rotate: { ...props.bLight.rotate, y: !props.bLight.rotate.y },
    };
    props.onSetBLight(toggleRotateY);
  };
  const handleZrotation = () => {
    const toggleRotateZ = {
      ...props.bLight,
      rotate: { ...props.bLight.rotate, z: !props.bLight.rotate.z },
    };
    props.onSetBLight(toggleRotateZ);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <HighlightOffIcon onClick={handleRemoveBLight} />
        </ListItemIcon>
        <ListItemText primary="B-LIGHT" />
        {openBLight ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openBLight} timeout="auto" unmountOnExit>
        <ListItem button onClick={() => setOrbit(!orbit)}>
          <ListItemText primary="Movment Options" />
          {orbit ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={orbit} timeaout="auto" unmountOnExit>
          <List component="div" className="details-section" disablePadding>
            <ListItem>
              <ListItemIcon>
                <FormControlLabel
                  className="custom-label"
                  control={
                    <Checkbox
                      className="custom-checkbox"
                      checked={props.bLight.orbit.x}
                      onChange={handleXmovment}
                      name="x-movment"
                    />
                  }
                />
              </ListItemIcon>
              <ListItemText primary="X-movment" />
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
                      checked={props.bLight.orbit.y}
                      onChange={handleYmovment}
                      name="Y-movment"
                    />
                  }
                />
              </ListItemIcon>
              <ListItemText primary="Y-movment" />
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
                      checked={props.bLight.orbit.z}
                      onChange={handleZmovment}
                      name="Z-movement"
                    />
                  }
                />
              </ListItemIcon>
              <ListItemText primary="Z-movment" />
            </ListItem>
          </List>
        </Collapse>
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
                      checked={props.bLight.rotate.x}
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
                      checked={props.bLight.rotate.y}
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
                      checked={props.bLight.rotate.z}
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
        <List component="div" disablePadding>
          <ListItem>
            <ListItemIcon>
              <ColorPickerPopover
                visible
                color={props.bLight.color}
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
              value={props.bLight.scale[0]}
              valueLabelDisplay="auto"
              step={0.01}
              min={0}
              max={3}
              onChange={handleScaleChange}
            />
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem>
            <ListItemText primary="Power" />
            <Slider
              className="scale-slider"
              value={props.bLight.power}
              valueLabelDisplay="auto"
              step={0.01}
              min={0}
              max={10}
              onChange={handlePowerChange}
            />
          </ListItem>
        </List>
      </Collapse>
    </>
  );
};

BLight.propTypes = {
  onSetBLight: PropTypes.func.isRequired,
  bLight: PropTypes.object,
  dragObjects: PropTypes.array,
  onSetDragObjects: PropTypes.func,
};

export default BLight;
