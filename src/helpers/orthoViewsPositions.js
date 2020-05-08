import getDistanceOrtho from "./getDistanceOrtho";

const orthoViewsPositions = sizeBounding => ({
  front: [getDistanceOrtho(sizeBounding, 30, "front"), 0, 0],
  back: [-getDistanceOrtho(sizeBounding, 30, "font"), 0, 0],
  top: [0, getDistanceOrtho(sizeBounding, 30, "top"), 0],
  bottom: [0, -getDistanceOrtho(sizeBounding, 30, "top"), 0],
  right: [0, 0, getDistanceOrtho(sizeBounding, 30, "right")],
  left: [0, 0, -getDistanceOrtho(sizeBounding, 30, "right")]
});

export default orthoViewsPositions;
