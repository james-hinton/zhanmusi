import { Suspense, useEffect, useState, useRef } from "react";

// Three Components
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";

// Styles
import "./style.scss";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import Loader from "../../components/Three/Loader/Loader";
import Model from "../../components/Three/Model/Model";
import { Physics, RigidBody, Debug } from "@react-three/rapier";
import { Environment, OrbitControls } from "@react-three/drei";
// Three Hooks
import { useKeyboardControls } from "./hooks/useKeyboardControls.jsx";
import * as THREE from "three";
import Player from "./components/Player";

const RocketLeague = () => {
  const { movement } = useKeyboardControls();
  const playerRigidBodyRef = useRef(null);

  return (
    <group>
      {/* Floor */}
      <RigidBody
        type="Static"
        position={[0, -1, 0]}
        shape={{
          type: "Cuboid",
          halfExtents: [100, 1, 100],
        }}
        mass={0}
      >
        <mesh>
          <boxBufferGeometry args={[100, 1, 100]} />
          <meshStandardMaterial color="green" />
        </mesh>
      </RigidBody>

      <group>
        {/* Use Model */}
        <Player movement={movement} playerRigidBodyRef={playerRigidBodyRef} />
      </group>
    </group>
  );
};

const MiddleEarth = () => {
  const playerRigidBodyRef = useRef(null);

  return (
    <div className="middle-earth">
      <Canvas
        camera={{ position: [0, 0, 10] }}
        style={{ background: "black" }}
      >
        <Suspense fallback={<Loader />}>
          {/* Sunset */}
          <Environment preset="sunset" />

          <Physics>
            <RocketLeague />
            <Debug />
          </Physics>
        </Suspense>
        <OrbitControls />
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
