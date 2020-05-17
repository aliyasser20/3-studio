import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useFrame } from "react-three-fiber";

const BLight = (props) => {
  const [lightPosition, setLightPosition] = useState([0, 0, 0]);
  const box = useRef();
  const pointLight = useRef();

  useEffect(() => {
    const dragObjs = [...props.dragObjects];

    box.current && props.setDrag([...dragObjs, box.current]);

    if (pointLight.current) {
      pointLight.current.shadow.camera.top = 100;
      pointLight.current.shadow.camera.right = 100;
      pointLight.current.shadow.camera.left = -100;
      pointLight.current.shadow.camera.bottom = -100;
    }
  }, []);

  useFrame(() => {
    console.log(box.current.position.x);
    const time = Date.now() * 0.001;
    if (box.current) {
      if (props.bLight.orbit.x)
        box.current.position.x +=
          props.bLight.radius * 0.07 * Math.sin(time * 0.7);
      if (props.bLight.orbit.y)
        box.current.position.y +=
          props.bLight.radius * 0.07 * Math.cos(time * 0.7);
      if (props.bLight.orbit.z)
        box.current.position.z +=
          props.bLight.radius * 0.07 * Math.cos(time * 0.7);

      if (props.bLight.rotate.x) box.current.rotation.x += 0.009;
      if (props.bLight.rotate.y) box.current.rotation.y += 0.009;
      if (props.bLight.rotate.z) box.current.rotation.z += 0.009;
      setLightPosition([
        box.current.position.x,
        box.current.position.y,
        box.current.position.z,
      ]);
    }
  });

  return (
    <>
      <mesh
        ref={box}
        visible
        name="d-light"
        userData={{ object: "light-object" }}
        castShadow
        scale={props.bLight.scale}
        position={[-props.bLight.initPosition, 0, 0]}
        lookAt={[0, 0, 0]}
        onPointerOver={(e) => {
          props.toggleMediaLock();
        }}
        onPointerOut={(e) => props.toggleMediaLock()}
      >
        <dodecahedronBufferGeometry attach="geometry" args={props.bLight.args}/>
        <meshBasicMaterial
          attach="material"
          color={`#${props.bLight.color}`}
          opacity={0.3}
          wireframe
          transparent
          roughness={1}
          metalness={0}
        />
      </mesh>

      <pointLight
        ref={pointLight}
        color={`#${props.bLight.color}`}
        intensity={props.bLight.brightness * Math.PI}
        position={lightPosition}
        lookAt={[0, 0, 0]}
        power={props.bLight.power * 4 * Math.PI}
        penumbra={1}
        castShadow
      />
    </>
  );
};

BLight.propTypes = {
  toggleMediaLock: PropTypes.func.isRequired,
  dragObjects: PropTypes.array.isRequired,
  bLight: PropTypes.object,
};

export default BLight;
