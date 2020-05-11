import React from "react";

const BackWall = () => {
  return (
    <mesh receiveShadow position={[0, -1, -5]}>
      <planeBufferGeometry attach="material" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="#171717" />
    </mesh>
  );
};

export default BackWall;
