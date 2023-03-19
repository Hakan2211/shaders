import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import vertexShader from "./vertexShader.js";
import fragmentShader from "./fragmentShader.js";
import React from "react";
import { useFrame } from "@react-three/fiber";
import { Color } from "three";

export default function Experience() {
  const planeRef = React.useRef();

  const uniforms = React.useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_colorA: { value: new Color("#0c4670") },
      u_colorB: { value: new Color("#270771f9") },
    }),
    []
  );

  useFrame((state, delta) => {
    const { clock } = state;
    planeRef.current.material.uniforms.u_time.value = clock.getElapsedTime();
  });

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <mesh ref={planeRef} scale={1.5} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2, 2, 16, 16]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
}
