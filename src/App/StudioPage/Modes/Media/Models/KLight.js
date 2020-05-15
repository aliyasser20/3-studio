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
        scale={[0.1, 0.1, 0.1]}
      >
        <sphereGeometry attach="geometry" args={[1, 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color="white"
          transparent
          roughness={1}
          metalness={0}
        />
      </mesh>
      {/* <ambientLight intensity={0.3} />
      <hemisphereLight intensity={1} />
      <directionalLight intensity={0.8 * Math.PI} position={[0., 0, 0.86]} /> */}
      <rectAreaLight
        scale={[0.5, 0.5, 0.5]}
        args={[1, 16, 16]}
        color="white"
        intensity={0.3}
        position={[0.1, 0.1, 0.1]}
        lookAt={[0, 0, 0]}
        penumbra={1}
        castShadow
      />
    </>
  );
};

KLight.propTypes = {};

export default KLight;
