import React, { useRef, useState, useEffect } from "react";
import { useThree, useFrame, extend } from "react-three-fiber";
import { useDrag } from "react-use-gesture";
import { DragControls } from "three/examples/jsm/controls/DragControls";
const dragObjects = [];

extend({ DragControls });

const DControls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  return <dragControls args={[dragObjects, camera, gl.domElement]} />;
};

export default function TestingDrag() {
  const colors = ["hotpink", "red", "blue", "green", "yellow"];
  const ref = useRef();
  const [colorIdx, setColorIdx] = useState(0);
  const [position, setPosition] = useState([0, 0, 0]);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  useEffect(() => {
    ref.current && dragObjects.push(ref.current);
    console.log(dragObjects);
  }, []);

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
    <>
      <DControls />
      <mesh
        position={position}
        scale={[50, 50, 50]}
        {...bind()}
        ref={ref}
        onPointerOver={(e) => console.log("hover")}
        onPointerOut={(e) => console.log("unhover")}
      >
        <dodecahedronBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color={colors[colorIdx]} />
      </mesh>
    </>
  );
}
