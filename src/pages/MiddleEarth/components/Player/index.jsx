import React, { useState, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import Model from "../../../../components/Three/Model/Model";
import { RigidBody } from "@react-three/rapier";

import * as THREE from "three";

const Player = ({ movement, playerRigidBodyRef }) => {
  const moveSpeed = 5;

  useFrame(() => {
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
  });

  return (
    <>
      <RigidBody
        colliders={"hull"}
        restitution={0.2}
        ref={playerRigidBodyRef}
        mass={1}

      >
        <Model
          path="/middle_earth/models/car/scene.gltf"
          scale={[0.1, 0.1, 0.1]}
          name="player"
        />
      </RigidBody>
    </>
  );
};

export default Player;
