import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

const Loading = ({ capturer }) => {
  const loading = useRef();
  useFrame(({ gl, scene, camera }) => {
    gl.render(scene, camera);
    loading.current.rotation.y += 0.02;
    capturer.capture(document.querySelector("canvas"));
  });
  return (
    <group ref={loading}>
      <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <sphereGeometry attach="geometry" args={[2, 32, 32]} />
        <meshBasicMaterial
          attach="material"
          color="#f56942"
          transparent
          wireframe
          opacity={0.6}
          roughness={1}
          metalness={0}
        />
      </mesh>
    </group>
  );
};

export default Loading;
