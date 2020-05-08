import getDistanceOrtho from "./getDistanceOrtho";

const orthoViewsPositions = sizeBounding => ({
  front: [0.8 * getDistanceOrtho(sizeBounding, 30, "front"), 0, 0],
  back: [-0.8 * getDistanceOrtho(sizeBounding, 30, "front"), 0, 0],
  top: [0, 0.8 * getDistanceOrtho(sizeBounding, 30, "top"), 0],
  bottom: [0, -0.8 * getDistanceOrtho(sizeBounding, 30, "top"), 0],
  right: [0, 0, 0.8 * getDistanceOrtho(sizeBounding, 30, "right")],
  left: [0, 0, -0.8 * getDistanceOrtho(sizeBounding, 30, "right")]
});

export default orthoViewsPositions;
