export const createDiamond = () => {
  // create just one triangle
  const front = Math.tan(Math.PI / 6);
  const back = Math.cos(Math.PI / 6);
  const vertices = [
    0,
    1,
    0, // 0: top
    1,
    0,
    front, // 1: right
    -1,
    0,
    front, // 2: left
    0,
    0,
    -back, // 3: back middle
    0,
    -1,
    0, // 4: bottom
  ];
  const faces = [
    2,
    1,
    0, // left, right, top
    1,
    3,
    0, // right, back, top
    3,
    2,
    0, // back, left, top
    2,
    4,
    1, // left, bottom, right
    1,
    4,
    3, // right, bottom, back
    3,
    4,
    2, // back, bottom, left
  ];

  return [vertices, faces];
};
