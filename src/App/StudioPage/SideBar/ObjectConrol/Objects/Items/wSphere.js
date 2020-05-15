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

const WSphere = (props) => {
  const [openWSphere, setOpenWSphere] = useState(false);
  const [rotations, setRotations] = useState(false);
  const handleClick = () => {
    setOpenWSphere(!openWSphere);
  };

  const handleRemoveSphere = () => {
    
    props.onSetMediaSphere(null);
    setOpenWSphere(false);
  };

  const handleColorSet = (color) => {
    const sphereArgs = { ...props.wSphere, color };
    props.onSetMediaSphere(sphereArgs);
  };

  const handleScaleChange = (e, newValue) => {
    const currentScale = [newValue, newValue, newValue];
    const newScale = { ...props.wSphere, scale: [...currentScale] };
    props.onSetMediaSphere(newScale);
  };

  const handleXrotation = () => {
    const toggleRotateX = { ...props.wSphere, rotateX: !props.wSphere.rotateX };
    props.onSetMediaSphere(toggleRotateX);
  };
  const handleYrotation = () => {
    const toggleRotateY = { ...props.wSphere, rotateY: !props.wSphere.rotateY };
    props.onSetMediaSphere(toggleRotateY);
  };
  const handleZrotation = () => {
    const toggleRotateZ = { ...props.wSphere, rotateZ: !props.wSphere.rotateZ };
    props.onSetMediaSphere(toggleRotateZ);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <HighlightOffIcon onClick={() => handleRemoveSphere()} />
        </ListItemIcon>
        <ListItemText primary="W-SPHERE" />
        {openWSphere ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openWSphere} timeout="auto" unmountOnExit>
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
                      checked={props.wSphere.rotateX}
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
                      checked={props.wSphere.rotateY}
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
                      checked={props.wSphere.rotateZ}
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
                color={props.wSphere.color}
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
              value={props.wSphere.scale[0]}
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

WSphere.propTypes = {
  onSetMediaSphere: PropTypes.func.isRequired,
  wSphere: PropTypes.object,
  dragObjects: PropTypes.array,
  onSetDragObjects: PropTypes.func
};

export default WSphere;
