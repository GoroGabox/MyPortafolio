import React, { Suspense, useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import AuthContext from '../../context/AuthContext'

import CanvasLoader from "../Loader";

const Landing = ({ isMobile }) => {
  //Here is where the model is loaded
  const landing = useGLTF("./Landing/scene.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={landing.scene}
        scale={isMobile ? 1.2 : 1.5}
        position={isMobile ? [0, 0, 0] : [5, -1, 0]}
      />
    </mesh>
  );
};

const LandingCanvas = () => {
  let {isMobile} = useContext(AuthContext) || {}

  return (
    
      <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={8}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Landing isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
    
  );
};

export default LandingCanvas;
