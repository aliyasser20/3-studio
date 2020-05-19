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

const DLight = (props) => {
  const [openDLight, setOpenDLight] = useState(false);
  const [orbit, setOrbit] = useState(false);
  const [rotations, setRotations] = useState(false);

  const handleClick = () => {
    setOpenDLight(!openDLight);
  };

  const handleRemoveDLight = () => {
    const currentDragObjects = [...props.dragObjects];
    console.log(currentDragObjects);
    const removed = currentDragObjects.filter((obj) => obj.name !== "d-light");
    props.onSetDragObjects(removed);
    props.onSetDLight(null);
    setOpenDLight(false);
  };

  const handleColorSet = (color) => {
    const dLightColor = { ...props.dLight, color };
    props.onSetDLight(dLightColor);
  };

  const handleScaleChange = (e, newValue) => {
    const currentScale = [newValue, newValue, newValue];
    const newScale = { ...props.dLight, scale: [...currentScale] };
    props.onSetDLight(newScale);
  };
  const handlePowerChange = (e, newValue) => {
    const power = newValue;
    const newSpread = { ...props.dLight, power };
    props.onSetDLight(newSpread);
  };
  const handleXmovement = () => {
    const togglemovementX = {
      ...props.dLight,
      orbit: { ...props.dLight.orbit, x: !props.dLight.orbit.x },
    };
    props.onSetDLight(togglemovementX);
  };
  const handleYmovement = () => {
    const togglemovementY = {
      ...props.dLight,
      orbit: { ...props.dLight.orbit, y: !props.dLight.orbit.y },
    };
    props.onSetDLight(togglemovementY);
  };
  const handleZmovement = () => {
    const togglemovementZ = {
      ...props.dLight,
      orbit: { ...props.dLight.orbit, z: !props.dLight.orbit.z },
    };
    props.onSetDLight(togglemovementZ);
  };

  const handleXrotation = () => {
    const toggleRotateX = {
      ...props.dLight,
      rotate: { ...props.dLight.rotate, x: !props.dLight.rotate.x },
    };
    props.onSetDLight(toggleRotateX);
  };
  const handleYrotation = () => {
    const toggleRotateY = {
      ...props.dLight,
      rotate: { ...props.dLight.rotate, y: !props.dLight.rotate.y },
    };
    props.onSetDLight(toggleRotateY);
  };
  const handleZrotation = () => {
    const toggleRotateZ = {
      ...props.dLight,
      rotate: { ...props.dLight.rotate, z: !props.dLight.rotate.z },
    };
    props.onSetDLight(toggleRotateZ);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <HighlightOffIcon onClick={handleRemoveDLight} />
        </ListItemIcon>
        <ListItemText primary="D-LIGHT" />
        {openDLight ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openDLight} timeout="auto" unmountOnExit>
        <ListItem button onClick={() => setOrbit(!orbit)}>
          <ListItemText primary="Movement Options" />
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
                      checked={props.dLight.orbit.x}
                      onChange={handleXmovement}
                      name="x-movement"
                    />
                  }
                />
              </ListItemIcon>
              <ListItemText primary="X-movement" />
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
                      checked={props.dLight.orbit.y}
                      onChange={handleYmovement}
                      name="Y-movement"
                    />
                  }
                />
              </ListItemIcon>
              <ListItemText primary="Y-movement" />
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
                      checked={props.dLight.orbit.z}
                      onChange={handleZmovement}
                      name="Z-movement"
                    />
                  }
                />
              </ListItemIcon>
              <ListItemText primary="Z-movement" />
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
                      checked={props.dLight.rotate.x}
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
                      checked={props.dLight.rotate.y}
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
                      checked={props.dLight.rotate.z}
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
                color={props.dLight.color}
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
              value={props.dLight.scale[0]}
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
              value={props.dLight.power}
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

DLight.propTypes = {
  onSetDLight: PropTypes.func.isRequired,
  dLight: PropTypes.object,
  dragObjects: PropTypes.array,
  onSetDragObjects: PropTypes.func,
};

export default DLight;
