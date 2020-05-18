import React, { useRef, useEffect } from "react";
import materialLibrary from "../../../../../helpers/materialLibrary";
import { useFrame } from "react-three-fiber";
const PWall = (props) => {
  const mesh = useRef();
  const addDrag = (obj) => {
    const dragObjs = [...props.dragObjects];

    obj && props.setDrag([...dragObjs, mesh.current]);
  };

  const removeDrag = (obj) => {
    const currentDragObjects = [...props.dragObjects];
    const removed = currentDragObjects.filter((obj) => obj.name !== "p-wall");
    props.setDrag(removed);
  };
  useEffect(() => {
    // if (mesh.current) mesh.current.material = materialLibrary("leather").leather;
    if (mesh.current)
      props.pWall.lock ? addDrag(mesh.current) : removeDrag(mesh.current);
  }, [props.pWall.lock]);

  useFrame(({ gl, scene, camera }) => {
    gl.render(scene, camera);
    if (props.pWall.rotate.x) mesh.current.rotation.x += 0.009;
    if (props.pWall.rotate.y) mesh.current.rotation.y += 0.009;
    if (props.pWall.rotate.z) mesh.current.rotation.z += 0.009;
  });

  return (
    <mesh
      receiveShadow
      position={[0, -1, -5]}
      ref={mesh}
      name="p-wall"
      visible
      userData={{ name: "p-wall" }}
      // onClick={(e) => props.toggleMediaLock()}
      onPointerOver={(e) => props.pWall.lock && props.toggleMediaLock()}
      onPointerOut={(e) => props.pWall.lock && props.toggleMediaLock()}
      scale={props.pWall.scale}
    >
      <planeBufferGeometry attach="geometry" args={props.pWall.args} />
      <meshStandardMaterial attach="material" color={`#${props.pWall.color}`} />
    </mesh>
  );
};

export default PWall;
