const calculateDistanceOrtho = (first, second, third, fov) => {
  const tan = Math.tan((Math.PI * fov) / 2 / 360);

  const firstHalf = first / 2;
  const secondHalf = second / 2;
  const thirdHalf = third / 2;

  return Math.sqrt((firstHalf / tan) ** 2 - secondHalf ** 2) + thirdHalf;
};

const getDistanceOrtho = (box, fov, face) => {
  if (face === "top") {
    return calculateDistanceOrtho(box.z, box.x, box.y, fov);
  }
  if (face === "front") {
    return calculateDistanceOrtho(box.y, box.z, box.x, fov);
  }
  if (face === "right") {
    return calculateDistanceOrtho(box.y, box.x, box.z, fov);
  }
};

export default getDistanceOrtho;
