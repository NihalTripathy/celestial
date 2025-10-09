"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import type { FC } from 'react';

/*
  ThreeScrollAnimation renders a simple Three.js scene featuring a
  rotating torus knot. The animation provides a modern, high‑tech
  accent to the homepage. The component is client‑side only and
  dynamically handles resizing.
*/
const ThreeScrollAnimation: FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup with a subtle fog for depth
    const scene = new THREE.Scene();
    scene.background = null;
    scene.fog = new THREE.Fog(0x0b0c10, 10, 25);
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Starfield
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 800;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0x5dade2, size: 0.05 });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Rotating torus knot mesh (glowing blue)
    const knotGeometry = new THREE.TorusKnotGeometry(1.2, 0.4, 120, 20);
    const knotMaterial = new THREE.MeshStandardMaterial({
      color: 0x2196f3,
      emissive: 0x0a74da,
      roughness: 0.1,
      metalness: 0.6,
    });
    const torusKnot = new THREE.Mesh(knotGeometry, knotMaterial);
    scene.add(torusKnot);

    // Wireframe sphere for visual interest
    const sphereGeometry = new THREE.IcosahedronGeometry(2.2, 2);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    });
    const wireSphere = new THREE.Mesh(sphereGeometry, wireMaterial);
    scene.add(wireSphere);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x8ec5fc, 1.5);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // OrbitControls for interactivity. Loaded dynamically to avoid SSR issues.
    let controls: any;
    (async () => {
      const module = await import('three/examples/jsm/controls/OrbitControls');
      const OrbitControls = module.OrbitControls;
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.autoRotate = false;
      controls.enablePan = false;
    })();

    let frameId: number;
    const animate = () => {
      torusKnot.rotation.x += 0.01;
      torusKnot.rotation.y += 0.015;
      wireSphere.rotation.y -= 0.002;
      if (controls) {
        controls.update();
      }
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
      starGeometry.dispose();
      knotGeometry.dispose();
      sphereGeometry.dispose();
      starMaterial.dispose();
      knotMaterial.dispose();
      wireMaterial.dispose();
      if (controls) {
        controls.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '400px',
        background:
          'radial-gradient(circle at center, rgba(33,150,243,0.15) 0%, rgba(11,12,16,1) 80%)',
        overflow: 'hidden',
      }}
    />
  );
};

export default ThreeScrollAnimation;