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

const KLight = (props) => {
  const [openKLight, setOpenKLight] = useState(false);
  const [orbit, setOrbit] = useState(false);
  const handleClick = () => {
    setOpenKLight(!openKLight);
  };

  const handleRemoveKLight = () => {
    const currentDragObjects = [...props.dragObjects];
    console.log(currentDragObjects);
    const removed = currentDragObjects.filter((obj) => obj.name !== "k-light");
    props.onSetDragObjects(removed);
    props.onSetKLight(null);
    setOpenKLight(false);
  };

  const handleColorSet = (color) => {
    const kLightColor = { ...props.kLight, color };
    props.onSetKLight(kLightColor);
  };

  const handleScaleChange = (e, newValue) => {
    const currentScale = [newValue, newValue, newValue];
    const newScale = { ...props.kLight, scale: [...currentScale] };
    props.onSetKLight(newScale);
  };
  const handlePowerChange = (e, newValue) => {
    const power = newValue;
    const newSpread = { ...props.kLight, power };
    props.onSetKLight(newSpread);
  };
  const handleXmovment = () => {
    const toggleMovmentX = {
      ...props.kLight,
      orbit: { ...props.kLight.orbit, x: !props.kLight.orbit.x },
    };
    props.onSetKLight(toggleMovmentX);
  };
  const handleYmovment = () => {
    const toggleMovmentY = {
      ...props.kLight,
      orbit: { ...props.kLight.orbit, y: !props.kLight.orbit.y },
    };
    props.onSetKLight(toggleMovmentY);
  };
  const handleZmovment = () => {
    const toggleMovmentZ = {
      ...props.kLight,
      orbit: { ...props.kLight.orbit, z: !props.kLight.orbit.z },
    };
    props.onSetKLight(toggleMovmentZ);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <HighlightOffIcon onClick={handleRemoveKLight} />
        </ListItemIcon>
        <ListItemText primary="K-LIGHT" />
        {openKLight ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openKLight} timeout="auto" unmountOnExit>
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
                      checked={props.kLight.orbit.x}
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
                      checked={props.kLight.orbit.y}
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
                      checked={props.kLight.orbit.z}
                      onChange={handleZmovment}
                      name="Z-movement"
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
                color={props.kLight.color}
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
              value={props.kLight.scale[0]}
              valueLabelDisplay="auto"
              step={0.01}
              min={0}
              max={1}
              onChange={handleScaleChange}
            />
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem>
            <ListItemText primary="Power" />
            <Slider
              className="scale-slider"
              value={props.kLight.power}
              valueLabelDisplay="auto"
              step={0.01}
              min={0}
              max={3}
              onChange={handlePowerChange}
            />
          </ListItem>
        </List>
      </Collapse>
    </>
  );
};

KLight.propTypes = {
  onSetKLight: PropTypes.func.isRequired,
  kLight: PropTypes.object,
  dragObjects: PropTypes.array,
  onSetDragObjects: PropTypes.func,
};

export default KLight;
