import React from "react";
import PropTypes from "prop-types";

import { ButtonGroup, Button, ThemeProvider } from "@material-ui/core/";

import PerspectiveIcon from "../../UI/SVGIcons/PerspectiveIcon";
import TopIcon from "../../UI/SVGIcons/TopIcon";
import FrontIcon from "../../UI/SVGIcons/FrontIcon";
import BackIcon from "../../UI/SVGIcons/BackIcon";
import RightIcon from "../../UI/SVGIcons/RightIcon";
import LeftIcon from "../../UI/SVGIcons/LeftIcon";
import BottomIcon from "../../UI/SVGIcons/BottomIcon";

import themeCreator from "../../../helpers/themeCreator";

import "./ViewControls.scss";

const ViewControls = props => {
  const theme = themeCreator("#ffffff", "#212121");

  return (
    <ThemeProvider theme={theme}>
      <div className="view-controls">
        <ButtonGroup
          classes={{ root: "button-group-custom" }}
          orientation="vertical"
          color="primary"
          aria-label="view controls"
        >
          <Button
            classes={{ root: props.viewMode === "PERSPECTIVE" && "selected" }}
          >
            <PerspectiveIcon />
            Perspec
          </Button>
          <Button classes={{ root: props.viewMode === "TOP" && "selected" }}>
            <TopIcon />
            Top
          </Button>
          <Button classes={{ root: props.viewMode === "FRONT" && "selected" }}>
            <FrontIcon />
            Front
          </Button>
          <Button classes={{ root: props.viewMode === "RIGHT" && "selected" }}>
            <RightIcon />
            Right
          </Button>
          <Button classes={{ root: props.viewMode === "BOTTOM" && "selected" }}>
            <BottomIcon />
            Bottom
          </Button>
          <Button classes={{ root: props.viewMode === "BACK" && "selected" }}>
            <BackIcon />
            Back
          </Button>
          <Button classes={{ root: props.viewMode === "LEFT" && "selected" }}>
            <LeftIcon />
            Left
          </Button>
        </ButtonGroup>
      </div>
    </ThemeProvider>
  );
};

ViewControls.propTypes = {};

export default ViewControls;
