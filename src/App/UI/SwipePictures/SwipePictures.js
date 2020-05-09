import React, { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import { useTheme } from "@material-ui/core";

import Stepper from "./Stepper/Stepper";

import "./SwipePictures.scss";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const SwipePictures = props => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => {
      if (prevActiveStep === props.pictures.length - 1) {
        return 0;
      }
      return prevActiveStep + 1;
    });
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => {
      if (prevActiveStep === 0) {
        return props.pictures.length - 1;
      }
      return prevActiveStep - 1;
    });
  };

  return (
    <div className="swipe-pictures">
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
      >
        {props.pictures.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img src={step.path} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {props.pictures.length > 1 && (
        <Stepper next={handleNext} previous={handleBack} />
      )}
    </div>
  );
};

SwipePictures.propTypes = {
  pictures: PropTypes.array
};

export default SwipePictures;
