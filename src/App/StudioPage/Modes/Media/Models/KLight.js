import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useFrame } from "react-three-fiber";

const KLight = (props) => {
  const [lightPosition, setLightPosition] = useState([0, 0, 0]);
  const sphere = useRef();
  const pointLight = useRef();

  useEffect(() => {
    const dragObjs = [...props.dragObjects];

    sphere.current && props.setDrag([...dragObjs, sphere.current]);

    if (pointLight.current) {
      pointLight.current.shadow.camera.top = 100;
      pointLight.current.shadow.camera.right = 100;
      pointLight.current.shadow.camera.left = -100;
      pointLight.current.shadow.camera.bottom = -100;
    }
  }, []);

  useFrame(() => {
    sphere.current &&
      setLightPosition([
        sphere.current.position.x,
        sphere.current.position.y,
        sphere.current.position.z,
      ]);
  });
  return (
    <>
      <mesh
        ref={sphere}
        visible
        name="k-light"
        userData={{ object: "light-object" }}
        castShadow
        scale={[0.1, 0.1, 0.1]}
        onPointerOver={(e) => {
          props.toggleMediaLock();
          console.log(sphere.current);
        }}
        onPointerOut={(e) => props.toggleMediaLock()}
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
        intensity={0.1 * Math.PI}
        position={lightPosition}
        lookAt={[0, 0, 0]}
        penumbra={2}
        castShadow
      />
    </>
  );
};

KLight.propTypes = {
  toggleMediaLock: PropTypes.func.isRequired,
  dragObjects: PropTypes.array.isRequired,
};

export default KLight;
