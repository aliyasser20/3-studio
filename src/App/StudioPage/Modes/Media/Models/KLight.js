import React, { useRef } from "react";
import PropTypes from "prop-types";

const KLight = (props) => {
  const sphere = useRef();

  console.log(sphere.current && sphere.current);
  return (
    <>
      <mesh
        ref={sphere}
        visible
        userData={{ sphere: "light sphere" }}
        castShadow
        scale={[0.5, 0.5, 0.5]}
      >
        <sphereGeometry attach="geometry" args={[1, 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color="white"
          transparent
          wireframe
          roughness={1}
          metalness={0}
        />
      </mesh>
      <rectAreaLight
        width={5}
        height={5}
        color="white"
        intensity={100}
        position={[0, 0, 0]}
        lookAt={[0, 0, 0]}
        penumbra={1}
        castShadow
      />
    </>
  );
};

KLight.propTypes = {};

export default KLight;
