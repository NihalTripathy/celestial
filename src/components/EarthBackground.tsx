"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import type { FC } from 'react';

const EarthBackground: FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Earth globe with a texture map
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('/earth-texture.png');
    console.log('Earth texture loaded:', earthTexture);
    const earthGeometry = new THREE.SphereGeometry(1, 64, 64);
    const earthMaterial = new THREE.MeshPhongMaterial({ map: earthTexture });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earthMesh);

    // Lighting
    const ambient = new THREE.AmbientLight(0x404040, 1.5);
    scene.add(ambient);
    const directional = new THREE.DirectionalLight(0xffffff, 1);
    directional.position.set(5, 3, 5);
    scene.add(directional);

    let frameId: number;
    const animate = () => {
      earthMesh.rotation.y += 0.0015; // slow rotation
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      earthGeometry.dispose();
      earthMaterial.dispose();
      earthTexture.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        opacity: 0.4, // makes the Earth subtle
      }}
    />
  );
};

export default EarthBackground;
