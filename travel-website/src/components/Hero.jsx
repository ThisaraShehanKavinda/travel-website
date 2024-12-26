import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} />
        <OrbitControls enableZoom={false} />
        <mesh>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial color="#3182CE" />
        </mesh>
      </Canvas>
      <div className="hero-text">
        <h1>Explore the World</h1>
        <p>Discover amazing places to visit and unforgettable adventures.</p>
        <button className="btn-primary">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
