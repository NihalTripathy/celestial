"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import type { FC } from "react";

const CyberBackground: FC = () => {
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
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Main geodesic sphere & wireframe
    const baseGeom = new THREE.IcosahedronGeometry(1.5, 3);
    const wireGeom = new THREE.WireframeGeometry(baseGeom);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x0d6efd,
      transparent: true,
      opacity: 0.2,
    });
    const wireMesh = new THREE.LineSegments(wireGeom, wireMat);
    scene.add(wireMesh);

    // Vertex highlights
    const verts = baseGeom.getAttribute("position");
    const vertGeom = new THREE.BufferGeometry();
    vertGeom.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(verts.array, 3)
    );
    const vertMat = new THREE.PointsMaterial({
      color: 0x0d6efd,
      size: 0.03,
      transparent: true,
      opacity: 0.4,
    });
    const vertCloud = new THREE.Points(vertGeom, vertMat);
    scene.add(vertCloud);

    // Enhanced “snow” particle cloud: more particles, slightly larger, higher opacity
    const particleCount = 4000; // increased from 2500
    const positions: number[] = [];
    for (let i = 0; i < particleCount; i++) {
      const radius = 2.5 + Math.random(); // shell radii 2.5–3.5
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
    }
    const swirlGeom = new THREE.BufferGeometry();
    swirlGeom.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    const swirlMat = new THREE.PointsMaterial({
      color: 0x0d6efd,
      size: 0.02,    // slightly larger points
      transparent: true,
      opacity: 0.25, // more visible
    });
    const swirlParticles = new THREE.Points(swirlGeom, swirlMat);
    scene.add(swirlParticles);

    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambient);

    // Variables for interactive rotation
    let mouseX = 0;
    let mouseY = 0;
    let interactionFactor = 0; // 0 when idle, up to 1 when pointer moves
const onPointerMove = (event: MouseEvent | TouchEvent) => {
  const x = "clientX" in event ? event.clientX : event.touches[0].clientX;
  const y = "clientY" in event ? event.clientY : event.touches[0].clientY;
  const rect = container.getBoundingClientRect();
  mouseX = (x - rect.left) / rect.width - 0.5;
  mouseY = (y - rect.top) / rect.height - 0.5;
  interactionFactor = 1.5; // start with a higher boost on each move
};
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("touchmove", onPointerMove);

    let frameId: number;
    const animate = () => {
  // Increase the influence of the pointer on the sphere rotation
    const targetRotX = mouseY * 0.4; // was 0.2
    const targetRotY = mouseX * 0.4; // was 0.2
    wireMesh.rotation.x += (targetRotX - wireMesh.rotation.x) * 0.05;
    wireMesh.rotation.y += (targetRotY - wireMesh.rotation.y) * 0.05;
    vertCloud.rotation.copy(wireMesh.rotation);

    // Increase the boost amount for particle cloud rotation
    const baseSpeed = 0.0006;
    const interactiveBoost = 0.003 * interactionFactor; // was 0.001
    swirlParticles.rotation.y += baseSpeed + interactiveBoost;
    swirlParticles.rotation.x += (baseSpeed + interactiveBoost) * 0.5;

    // Slow down the decay to sustain the boost a bit longer
    interactionFactor *= 0.92; // was 0.96

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
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
      // Cleanup
      baseGeom.dispose();
      wireGeom.dispose();
      wireMat.dispose();
      vertGeom.dispose();
      vertMat.dispose();
      swirlGeom.dispose();
      swirlMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity: 0.65,
      }}
    />
  );
};

export default CyberBackground;
