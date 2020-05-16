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
    const time = Date.now() * 0.0005;
    if (sphere.current) {
      sphere.current.position.x = 50 * Math.sin(time * 0.7) * 30;
      // sphere.current.position.y = 10 * Math.cos(time * 0.5) * 40;
      sphere.current.position.z = 50 * Math.cos(time * 0.3) * 30;
      setLightPosition([
        sphere.current.position.x,
        sphere.current.position.y,
        sphere.current.position.z,
      ]);
    }
  });
  return (
    <>
      <mesh
        ref={sphere}
        visible
        name="k-light"
        userData={{ object: "light-object" }}
        castShadow
        scale={props.kLight.scale}
        position={[-props.kLight.initPosition, 0, 0]}
        lookAt={[0, 0, 0]}
        onPointerOver={(e) => {
          props.toggleMediaLock();
          console.log(pointLight.current);
        }}
        onPointerOut={(e) => props.toggleMediaLock()}
      >
        <sphereGeometry attach="geometry" args={props.kLight.args} />
        <meshBasicMaterial
          attach="material"
          color={`#${props.kLight.color}`}
          opacity={0.3}
          // wireframe
          transparent
          roughness={1}
          metalness={0}
        />
      </mesh>

      <pointLight
        ref={pointLight}
        color={`#${props.kLight.color}`}
        intensity={props.kLight.brightness * Math.PI}
        position={lightPosition}
        lookAt={[0, 0, 0]}
        power={props.kLight.power * 4 * Math.PI}
        penumbra={1}
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
