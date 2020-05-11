import React from "react";

const BottomGround = () => {
  return (
    <mesh receiveShadow rotation={[5, 0, 0]} position={[0 - 1, 0]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="#171717" />
    </mesh>
  );
};

export default BottomGround;
