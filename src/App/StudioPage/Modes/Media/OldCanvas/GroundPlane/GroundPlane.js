import React, { useRef, useEffect } from "react";
import materialLibrary from "../../../../../../helpers/materialLibrary";

const GroundPlane = () => {
  const mesh = useRef();
  useEffect(() => {
    // if (mesh.current) mesh.current.material = materialLibrary().leather;
  });

  return (
    <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]} ref={mesh}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" color="#FFF" />
    </mesh>
  );
};

export default GroundPlane;
