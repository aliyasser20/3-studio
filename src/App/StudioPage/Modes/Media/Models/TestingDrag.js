import React, { useRef, useState } from "react";
import { useThree, useFrame } from "react-three-fiber";
import { useDrag } from "react-use-gesture";

export default function TestingDrag() {
  const colors = ["hotpink", "red", "blue", "green", "yellow"];
  const ref = useRef();
  const [colorIdx, setColorIdx] = useState(0);
  const [position, setPosition] = useState([0, 0, 0]);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  useFrame(() => {
    ref.current.rotation.z += 0.01;
    ref.current.rotation.x += 0.01;
  });
  const bind = useDrag(
    ({ offset: [x, y] }) => {
      const [, , z] = position;
      setPosition([x / aspect, -y / aspect, z]);
    },
    { pointerEvents: true }
  );

  return (
    <mesh
      position={position}
      {...bind()}
      ref={ref}
      onPointerOver={e => console.log("hover")}
      onPointerOut={e => console.log("unhover")}
    >
      <dodecahedronBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color={colors[colorIdx]} />
    </mesh>
  );
}