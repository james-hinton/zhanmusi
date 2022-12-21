import { Suspense, useEffect, useState, useRef } from "react";

// Three Components
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Perspective Camera
import { PerspectiveCamera } from "three";

import { Physics, RigidBody, Debug, CuboidCollider } from "@react-three/rapier";

// Three Hooks
import { useKeyboardControls } from "./hooks/useKeyboardControls.jsx";

import Model from "../../components/Three/Model/Model";
import Loader from "../../components/Three/Loader/Loader";
import Player from "./components/Player";

// Styles
import "./style.scss";

const defaultState = {
  camera: {
    position: [0.85, 2.49, 4.29],
    rotation: [-0.46, -0.005, -0.002],
  },
};

const Camera = ({ playerRigidBodyRef }) => {
  const cameraRef = useRef();

  useFrame((state) => {
    if (!playerRigidBodyRef.current) return;
    // Get the position of the player's rigid body
    const { x, y, z } = playerRigidBodyRef.current?.translation();
    if (!x || !y || !z) return;

    const lookAtVec = new THREE.Vector3(0, 0, 0);
    const cameraVector = new THREE.Vector3(0, 0, 0);

    lookAtVec.set(x, y, z);
    cameraVector.lerp(lookAtVec, 0.1);
    state.camera.lookAt(cameraVector);
    // Smoothly Bring the camera position so that it's looking down at the player
    state.camera.position.lerp(new THREE.Vector3(x, y + 2, z - 3), 0.1);

    state.camera.updateProjectionMatrix();
  });

  return (
    <perspectiveCamera position={[10, 4, 10]} makeDefault ref={cameraRef} />
  );
};

const MiddleEarth = () => {
  const { movement } = useKeyboardControls();
  const playerRigidBodyRef = useRef(null);

  return (
    <div className="middle-earth">
      <Canvas
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color("#000000"));
        }}
      >
        <Suspense fallback={<Loader />}>
          <Environment preset="sunset" />

          <Physics>
            <RigidBody
              name={"basemap"}
              position={[0, 0, 0]}
              colliders={"hull"}
              mass={0}
            >
              <Model
                path={"/middle_earth/models/basemap/scene.gltf"}
                scale={3}
              />
            </RigidBody>
            <RigidBody
              ref={playerRigidBodyRef}
              restitution={0.2}
              name={"player"}
              mass={1}
              colliders={"hull"}
            >
              <Player
                movement={movement}
                playerRigidBodyRef={playerRigidBodyRef}
              />
            </RigidBody>
          </Physics>
        </Suspense>
        <Camera playerRigidBodyRef={playerRigidBodyRef} />
      </Canvas>

      <div className="middle-earth__position">
        <div className="middle-earth__position__row">
          <div classname="middle-earth__position__row__label">X:</div>
          <div classname="middle-earth__position__row__value">
            {playerRigidBodyRef.current?.translation().x.toFixed(2)}
          </div>
        </div>

        <div className="middle-earth__position__row">
          <div classname="middle-earth__position__row__label">Y:</div>
          <div classname="middle-earth__position__row__value">
            {/* Round to 2 decimal places */}
            {playerRigidBodyRef.current?.translation().y.toFixed(2)}
          </div>
        </div>

        <div className="middle-earth__position__row">
          <div classname="middle-earth__position__row__label">Z:</div>
          <div classname="middle-earth__position__row__value">
            {playerRigidBodyRef.current?.translation().z.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleEarth;
