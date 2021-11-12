import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function Box(props: JSX.IntrinsicElements["mesh"]) {
  const mesh = useRef<THREE.Mesh>(null!);
  const { camera, gl } = useThree();
  //   useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
  useFrame((state) => {
    const { camera } = state;

    // camera.lookAt(mesh.current.position);
    camera.rotation.y += 0.01;
    // mesh.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={mesh} position={[0, 0, 0]} scale={2}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
}

const Camera = () => {
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 1;
    controls.maxDistance = 10;

    return () => controls.dispose();
  }, [camera, gl]);
  return null;
};
export default function Home() {
  return (
    <div>
      poggers
      <Canvas>
        {/* <Camera /> */}
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box />
      </Canvas>
    </div>
  );
}
