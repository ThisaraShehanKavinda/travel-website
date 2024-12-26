import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";

const Map = () => {
  const [ setPosition] = useState([51.505, -0.09]); // Default position

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
      });
    }
  }, );

  return (
    <div style={{ height: "100vh" }}>
      {/* React-Three-Fiber Canvas */}
      <Canvas>
        <OrbitControls />
        {/* Add 3D elements here */}
      </Canvas>
    </div>
  );
};

export default Map;
