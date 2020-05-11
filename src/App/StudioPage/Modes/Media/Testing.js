import React from "react";
import { Canvas } from "react-three-fiber";

// Geometry
function GroundPlane() {
  return (
    <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}
function BackDrop() {
  return (
    <mesh receiveShadow position={[0, -1, -5]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}

function Light({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 0, 5]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
  );
}

function Sphere() {
  return (
    <mesh
      visible
      userData={{ test: "loading" }}
      position={[0, 0, 0]}
      castShadow
    >
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="hsl(170,100%,40%)"
        transparent
        wireframe
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}

const Testing = () => {
  return (
    <Canvas>
      <Light brightness={10} color={"white"} />
      <Sphere />
      <BackDrop />
      <GroundPlane />
    </Canvas>
  );
};

export default Testing;
