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

const LSphere = (props) => {
  const [openLSphere, setOpenLSphere] = useState(false);
  const [rotations, setRotations] = useState(false);
  const handleClick = () => {
    setOpenLSphere(!openLSphere);
  };

  const handleRemoveLSphere = () => {
    const currentDragObjects = [...props.dragObjects];
    console.log(currentDragObjects);
    const removed = currentDragObjects.filter((obj) => obj.name !== "l-sphere");
    props.onSetDragObjects(removed);
    props.onSetMediaLSphere(null);
    setOpenLSphere(false);
  };

  const handleColorSet = (color) => {
    const sphereArgs = { ...props.wSphere, color };
    props.onSetMediaLSphere(sphereArgs);
  };

  const handleScaleChange = (e, newValue) => {
    const currentScale = [newValue, newValue, newValue];
    const newScale = { ...props.lSphere, scale: [...currentScale] };
    props.onSetMediaLSphere(newScale);
  };

  const handleXrotation = () => {
    const toggleRotateX = { ...props.lSphere, rotateX: !props.lSphere.rotateX };
    props.onSetMediaLSphere(toggleRotateX);
  };
  const handleYrotation = () => {
    const toggleRotateY = { ...props.lSphere, rotateY: !props.lSphere.rotateY };
    props.onSetMediaLSphere(toggleRotateY);
  };
  const handleZrotation = () => {
    const toggleRotateZ = { ...props.lSphere, rotateZ: !props.lSphere.rotateZ };
    props.onSetMediaLSphere(toggleRotateZ);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <HighlightOffIcon onClick={() => handleRemoveLSphere()} />
        </ListItemIcon>
        <ListItemText primary="L-SPHERE" />
        {openLSphere ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openLSphere} timeout="auto" unmountOnExit>
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
                      checked={props.lSphere.rotateX}
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
                      checked={props.lSphere.rotateY}
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
                      checked={props.lSphere.rotateZ}
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
            <ListItemText primary="Scale" />
            <Slider
              className="scale-slider"
              value={props.lSphere.scale[0]}
              valueLabelDisplay="auto"
              step={0.1}
              min={0}
              max={10}
              onChange={handleScaleChange}
            />
          </ListItem>
        </List>
      </Collapse>
    </>
  );
};

LSphere.propTypes = {
  onSetMediaLSphere: PropTypes.func.isRequired,
  lSphere: PropTypes.object,
  dragObjects: PropTypes.array,
  onSetDragObjects: PropTypes.func,
};

export default LSphere;
