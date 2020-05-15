import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const KLight = (props) => {
  const sphere = useRef();
  const pointLight = useRef();

  useEffect(() => {
    if (pointLight.current) {
      pointLight.current.shadow.camera.top = 100;
      pointLight.current.shadow.camera.right = 100;
      pointLight.current.shadow.camera.left = -100;
      pointLight.current.shadow.camera.bottom = -100;
    }
  }, []);

  console.log(sphere.current && sphere.current);
  return (
    <>
      <mesh
        ref={sphere}
        visible
        name="k-light"
        userData={{ object: "light-object" }}
        castShadow
        scale={[0.1, 0.1, 0.1]}
      >
        <sphereGeometry attach="geometry" args={[1, 16, 16]} />
        <meshBasicMaterial
          attach="material"
          color="white"
          opacity={0.3}
          // wireframe
          transparent
          roughness={1}
          metalness={0}
        />
      </mesh>

      <pointLight
        ref={pointLight}
        scale={[0.5, 0.5, 0.5]}
        args={[1, 16, 16]}
        color="#FCF8DC"
        intensity={0.5 * Math.PI}
        position={[0, 0, 0]}
        lookAt={[0, 0, 0]}
        penumbra={2}
        castShadow
      />
    </>
  );
};

KLight.propTypes = {};

export default KLight;
