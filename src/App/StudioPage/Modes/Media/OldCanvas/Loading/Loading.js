import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { connect } from "react-redux";

const Loading = (props) => {
  const loading = useRef();

  // useFrame(({ gl, scene, camera }) => {
  //   gl.render(scene, camera);
  //   loading.current.rotation.y += 0.02;
  //   capturer.capture(document.querySelector("canvas"));
  // });
  return (
    <group ref={loading}>
      <mesh
        visible
        userData={{ test: "loading" }}
        // position={position}
        castShadow
      >
        <sphereGeometry attach="geometry" args={[...props.sphereArgs]} />
        <meshStandardMaterial
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
