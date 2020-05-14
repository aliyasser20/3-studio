import React, { useRef, useEffect } from "react";
import { useFrame } from "react-three-fiber";

const WSphere = (props) => {
  const wSphere = useRef();
  useEffect(() => {
    wSphere.current &&
      !props.dragObjects.includes(wSphere.current) &&
      props.setDrag(wSphere.current);
  }, []);
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
    </group>
  );
};

export default WSphere;
