import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

const Loading = () => {
  const loading = useRef();
  useFrame(({ gl, scene, camera }) => {
    gl.render(scene, camera);
    loading.current.rotation.y += 0.004;
  });
  return (
    <group ref={loading}>
      <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <sphereGeometry attach="geometry" args={[1, 16, 16]} />
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
