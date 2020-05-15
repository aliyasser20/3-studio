import React, { useRef, useEffect } from "react";
import { useFrame } from "react-three-fiber";

const WSphere = (props) => {
  const wSphere = useRef();
  useEffect(() => {
    wSphere.current &&
      !props.dragObjects.includes(wSphere.current) &&
      props.setDrag(wSphere.current);
  }, []);
  useFrame(({ gl, scene, camera }) => {
    gl.render(scene, camera);
    if (props.sphere.rotateX) wSphere.current.rotation.x += 0.009;
    if (props.sphere.rotateY) wSphere.current.rotation.y += 0.009;
    if (props.sphere.rotateZ) wSphere.current.rotation.z += 0.009;
  });
  return (
    <mesh
      ref={wSphere}
      visible
      userData={{ wSphere: "wireframe sphere" }}
      onPointerOver={(e) => props.toggleMediaLock()}
      onPointerOut={(e) => props.toggleMediaLock()}
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
  );
};

export default WSphere;
