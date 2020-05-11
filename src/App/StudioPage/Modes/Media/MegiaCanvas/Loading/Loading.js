import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

const Loading = ({ capturer,position }) => {
  const loading = useRef();
  useFrame(({ gl, scene, camera }) => {
    gl.render(scene, camera);
    // loading.current.rotation.y += 0.02;
    capturer.capture(document.querySelector("canvas"));
  });
  return (
    <group ref={loading}>
      <mesh
        visible
        userData={{ test: "loading" }}
        position={position}
        castShadow
      >
        <sphereGeometry attach="geometry" args={[1, 16, 16]} />
        <meshBasicMaterial
          attach="material"
          color="hsl(170,100%,40%)"
          transparent
          wireframe
          roughness={1}
          metalness={0}
        />
      </mesh>
    </group>
  );
};

export default Loading;
