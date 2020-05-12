import React, { useRef, useEffect } from "react";
import materialLibrary from "../../../../../../helpers/materialLibrary";

const GroundPlane = () => {
  const mesh = useRef();
  useEffect(() => {
    console.log(mesh.current);
    if (mesh.current) {
      mesh.current.material = materialLibrary().goldPolished;
    }
  });

  return (
    <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]} ref={mesh}>
      <planeBufferGeometry attach="geometry" args={[5, 5]} />
      {/* <meshPhysicalMaterial attach="material" /> */}
    </mesh>
  );
};

export default GroundPlane;
