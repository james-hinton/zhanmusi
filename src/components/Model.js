import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three'

import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'

//import gladiador from process.env.PUBLIC_URL+'/models/gladiator/source/gladiador.glb'

const Model = ({path, scale, position, rotation }) => {

  const { scene, gl, size, camera } = useThree();



  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL+path
  );
  return (
    <>
      <primitive 
        object={gltf.scene} 
        scale={scale ? scale : 1} 
        position={position ? new THREE.Vector3(...position) : (0,0,0)}
        
        />
    </>
  );
};

export default Model