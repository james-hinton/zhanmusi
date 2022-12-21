import React, { useState, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

import * as THREE from "three";

const Player = ({ movement, playerRigidBodyRef }) => {
  const sphereGeom = [0.02, 64, 64];

  const playerRef = useRef(
    new THREE.Mesh(
      new THREE.SphereBufferGeometry(
        sphereGeom[0],
        sphereGeom[1],
        sphereGeom[2]
      ),
      new THREE.MeshStandardMaterial({ color: "green" })
    )
  );

  const moveSpeed = 0.4;

  useEffect(() => {
    if (movement.moveForward) {
      // Apply a force in the forward direction to the player's rigid body
      console.log("Move Forward");
      playerRigidBodyRef.current.applyImpulseAtPoint(
        new THREE.Vector3(0, 0, -moveSpeed),
        new THREE.Vector3(0, 0, 0)
      );
    }

    if (movement.moveBackward) {
      // Apply a force in the backward direction to the player's rigid body
      console.log("Move Backward");
      playerRigidBodyRef.current.applyImpulseAtPoint(
        new THREE.Vector3(0, 0, moveSpeed),
        new THREE.Vector3(0, 0, 0)
      );
    }

    if (movement.moveLeft) {
      // Apply a force in the left direction to the player's rigid body
      console.log("Move Left");
      playerRigidBodyRef.current.applyImpulseAtPoint(
        new THREE.Vector3(-moveSpeed, 0, 0),
        new THREE.Vector3(0, 0, 0)
      );
    }
    if (movement.moveRight) {
      // Apply a force in the right direction to the player's rigid body
      console.log("Move Right");
      playerRigidBodyRef.current.applyImpulseAtPoint(
        new THREE.Vector3(moveSpeed, 0, 0),
        new THREE.Vector3(0, 0, 0)
      );
    }

    if (movement.moveUp) {
      // Apply a force in the up direction to the player's rigid body
      console.log("Move Up");
      playerRigidBodyRef.current.applyImpulseAtPoint(
        new THREE.Vector3(0, moveSpeed, 0),
        new THREE.Vector3(0, 0, 0)
      );
    }

    if (movement.moveDown) {
      // Apply a force in the down direction to the player's rigid body
      console.log("Move Down");
      playerRigidBodyRef.current.applyImpulseAtPoint(
        new THREE.Vector3(0, -moveSpeed, 0),
        new THREE.Vector3(0, 0, 0)
      );
    }
  }, [movement]);

  return (
    <>
      <mesh castShadow name="player" ref={playerRef}>
        <sphereBufferGeometry args={sphereGeom} />
        <meshStandardMaterial color="green" />
      </mesh>
    </>
  );
};

export default Player;
