import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useFrame } from "react-three-fiber";

const DLight = (props) => {
  const [lightPosition, setLightPosition] = useState([0, 0, 0]);
  const diamond = useRef();
  const pointLight = useRef();

  useEffect(() => {
    const dragObjs = [...props.dragObjects];

    diamond.current && props.setDrag([...dragObjs, diamond.current]);

    if (pointLight.current) {
      pointLight.current.shadow.camera.top = 100;
      pointLight.current.shadow.camera.right = 100;
      pointLight.current.shadow.camera.left = -100;
      pointLight.current.shadow.camera.bottom = -100;
    }
  }, []);

  useFrame(() => {
    console.log(diamond.current.position.x);
    const time = Date.now() * 0.001;
    if (diamond.current) {
      if (props.dLight.orbit.x)
        diamond.current.position.x +=
          props.dLight.radius * 0.07 * Math.sin(time * 0.7);
      if (props.dLight.orbit.y)
        diamond.current.position.y +=
          props.dLight.radius * 0.07 * Math.cos(time * 0.7);
      if (props.dLight.orbit.z)
        diamond.current.position.z +=
          props.dLight.radius * 0.07 * Math.cos(time * 0.7);

      if (props.dLight.rotate.x) diamond.current.rotation.x += 0.009;
      if (props.dLight.rotate.y) diamond.current.rotation.y += 0.009;
      if (props.dLight.rotate.z) diamond.current.rotation.z += 0.009;
      setLightPosition([
        diamond.current.position.x,
        diamond.current.position.y,
        diamond.current.position.z,
      ]);
    }
  });

  return (
    <>
      <mesh
        ref={diamond}
        visible
        name="d-light"
        userData={{ object: "light-object" }}
        castShadow
        scale={props.dLight.scale}
        position={[-props.dLight.initPosition, 0, 0]}
        lookAt={[0, 0, 0]}
        onPointerOver={(e) => {
          props.toggleMediaLock();
          console.log(pointLight.current);
        }}
        onPointerOut={(e) => props.toggleMediaLock()}
      >
        <polyhedronGeometry attach="geometry" args={props.dLight.args} />
        <meshBasicMaterial
          attach="material"
          color={`#${props.dLight.color}`}
          opacity={0.3}
          // wireframe
          transparent
          roughness={1}
          metalness={0}
        />
      </mesh>

      <pointLight
        ref={pointLight}
        color={`#${props.dLight.color}`}
        intensity={props.dLight.brightness * Math.PI}
        position={lightPosition}
        lookAt={[0, 0, 0]}
        power={props.dLight.power * 4 * Math.PI}
        penumbra={1}
        castShadow
      />
    </>
  );
};

DLight.propTypes = {
  toggleMediaLock: PropTypes.func.isRequired,
  dragObjects: PropTypes.array.isRequired,
  dLight: PropTypes.object,
};

export default DLight;
