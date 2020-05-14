import React from "react";

const DControls = () => {
  const dragRef = useRef();
  const { camera, gl } = useThree();

  return (
    <dragControls args={[dragObjects, camera, gl.domElement]} ref={dragRef} />
  );
};

export default DControls;
