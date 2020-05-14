import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

const WSphere = (props) => {
  const wSphere = useRef();

  // useFrame(({ gl, scene, camera }) => {
  //   gl.render(scene, camera);
  //   loading.current.rotation.y += 0.02;
  //   capturer.capture(document.querySelector("canvas"));
  // });
  return (
    <group ref={wSphere}>
      <mesh
        visible
        userData={{ wSphere: "wireframe sphere" }}
        // position={[
        //   props.sphere.position.x,
        //   props.sphere.position.y,
        //   props.sphere.position.z,
        // ]}
        castShadow
        scale={[...props.sphere.scale]}
      >
        <sphereGeometry attach="geometry" args={[...props.sphere.args]} />
        <meshStandardMaterial
          attach="material"
          color={`#${props.sphere.color}`}
          transparent
          wireframe
          roughness={1}
          metalness={0}
        />
      </mesh>
    </group>
  );
};

export default WSphere;
