import React, { useState, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import Model from "../../../../components/Three/Model/Model";
import { RigidBody } from "@react-three/rapier";

import * as THREE from "three";

const Player = ({ movement, playerRigidBodyRef }) => {
  const moveSpeed = 70;
  const angleSpeed = 60;
  const linearDamping = 200;
  const angularDamping = 50;

  useFrame(() => {

    playerRigidBodyRef.current.setLinearDamping(linearDamping);
  playerRigidBodyRef.current.setAngularDamping(angularDamping);

    if (movement.moveForward) {
      // Apply a force in the forward direction to the car's center of mass
      console.log("Move Forward");
      playerRigidBodyRef.current.addForceAtPoint(
        new THREE.Vector3(moveSpeed, 0, 0),
        new THREE.Vector3(0, 0, 0)
      );
    }

    if (movement.moveBackward) {
      // Apply a force in the backward direction to the car's center of mass
      console.log("Move Backward");
      playerRigidBodyRef.current.addForceAtPoint(
        new THREE.Vector3(-moveSpeed, 0),
        new THREE.Vector3(0, 0, 0)
      );
    }


    if (movement.moveRight) {
      console.log("Move Right", playerRigidBodyRef);

      // As it's moving right, we just want to angle the car to the right
      playerRigidBodyRef.current.addTorque(new THREE.Vector3(0, angleSpeed, 0));
    }

    if (movement.moveLeft) {
      // Apply a force in the backward direction to the player's rigid body
      console.log("Move Left");
      console.log('Player Rgid body', playerRigidBodyRef)
      playerRigidBodyRef.current.addTorque(
        new THREE.Vector3(0, -angleSpeed, 0)
      );
    }
  });

  return (
    <>
      <RigidBody
        colliders={"hull"}
        restitution={0.2}
        ref={playerRigidBodyRef}
        mass={15}
        // Linear damping
        linearDamping={5}
        // Angular damping
        angularDamping={5}
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
