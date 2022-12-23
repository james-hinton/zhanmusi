// Three
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";
import { useLoader, useThree } from "@react-three/fiber";

const Model = ({ path, scale, position, rotation }) => {
  const { scene, gl, size, camera } = useThree();

const Model = ({
  path,
  scale,
  position,
  onCustomClick,
  ...props
}) => {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + path);
  return (
    <>
      <primitive
        object={gltf.scene}
        scale={scale ? scale : 1}
        position={position ? new THREE.Vector3(...position) : (0, 0, 0)}
        onClick={onCustomClick}
        {...props}
      />
    </>
  );
};

export default Model;
