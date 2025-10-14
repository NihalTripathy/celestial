"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AnimatedPanel3D({
  src = "/cyber-network.png",
  height = 400,
}: { src?: string; height?: number }) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      35,
      mount.clientWidth / height,
      0.1,
      1000
    );
    camera.position.set(0, 0, 4.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(mount.clientWidth, height);
    mount.appendChild(renderer.domElement);

    // Base plane with your texture (flat, no curvature)
    const loader = new THREE.TextureLoader();
    const tex = loader.load(src);
    tex.anisotropy = renderer.capabilities.getMaxAnisotropy();

    const planeW = 3.8; // world units width
    const planeH = (planeW * height) / mount.clientWidth;
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(planeW, planeH, 1, 1),
      new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.6,
        metalness: 0.2,
      })
    );
    plane.position.z = 0;
    scene.add(plane);

    // Subtle lights to enhance texture contrast
    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const key = new THREE.PointLight(0x0d6efd, 0.9, 7);
    key.position.set(2.5, 1.5, 2.2);
    scene.add(key);

    // Cyber grid overlay: drifting points + lines (very light)
    const GRID_POINTS = 220;
    const bounds = { x: planeW * 0.9, y: planeH * 0.9 };

    const pts: number[] = [];
    const vels: number[] = []; // x,y velocities
    for (let i = 0; i < GRID_POINTS; i++) {
      pts.push(
        (Math.random() - 0.5) * bounds.x,
        (Math.random() - 0.5) * bounds.y,
        0.01
      );
      // slow drift
      vels.push((Math.random() - 0.5) * 0.003, (Math.random() - 0.5) * 0.003);
    }

    const pointsGeom = new THREE.BufferGeometry();
    pointsGeom.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(pts, 3)
    );
    const pointsMat = new THREE.PointsMaterial({
      color: 0x7fb6ff,
      size: 0.015,
      transparent: true,
      opacity: 0.9,
    });
    const pointCloud = new THREE.Points(pointsGeom, pointsMat);
    scene.add(pointCloud);

    // Connect near neighbors with dim lines
    // Build an index of pairs once; we’ll update positions each frame
    const maxDist = Math.min(bounds.x, bounds.y) * 0.16;
    const posAttr = pointsGeom.getAttribute("position") as THREE.BufferAttribute;
    const pairs: [number, number][] = [];
    for (let i = 0; i < GRID_POINTS; i++) {
      for (let j = i + 1; j < GRID_POINTS; j++) {
        const dx = posAttr.getX(i) - posAttr.getX(j);
        const dy = posAttr.getY(i) - posAttr.getY(j);
        if (dx * dx + dy * dy < maxDist * maxDist) {
          pairs.push([i, j]);
        }
      }
    }

    const linePositions = new Float32Array(pairs.length * 2 * 3);
    const lineGeom = new THREE.BufferGeometry();
    lineGeom.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x2a6cff,
      transparent: true,
      opacity: 0.18,
    });
    const lines = new THREE.LineSegments(lineGeom, lineMat);
    scene.add(lines);

    // Hover tilt + breathing motion
    let mouseX = 0, mouseY = 0, t = 0;
    const onMove = (e: MouseEvent | TouchEvent) => {
      const x = "clientX" in e ? e.clientX : e.touches[0].clientX;
      const y = "clientY" in e ? e.clientY : e.touches[0].clientY;
      const rect = mount.getBoundingClientRect();
      mouseX = ((x - rect.left) / rect.width - 0.5) * 0.3; // radians-ish
      mouseY = ((y - rect.top) / rect.height - 0.5) * 0.2;
    };
    mount.addEventListener("mousemove", onMove);
    mount.addEventListener("touchmove", onMove, { passive: true });

    // Animate
    let raf = 0;
    const animate = () => {
      t += 0.01;

      // Panel subtle breathing and parallax tilt
      plane.rotation.x += ((-mouseY) - plane.rotation.x) * 0.06;
      plane.rotation.y += (mouseX - plane.rotation.y) * 0.06;
      plane.position.y = Math.sin(t) * 0.05;

      // Drift points
      for (let i = 0; i < GRID_POINTS; i++) {
        let x = posAttr.getX(i) + vels[i * 2 + 0];
        let y = posAttr.getY(i) + vels[i * 2 + 1];
        // wrap inside bounds softly
        if (x > bounds.x * 0.5) x = -bounds.x * 0.5;
        if (x < -bounds.x * 0.5) x = bounds.x * 0.5;
        if (y > bounds.y * 0.5) y = -bounds.y * 0.5;
        if (y < -bounds.y * 0.5) y = bounds.y * 0.5;
        posAttr.setXYZ(i, x, y, 0.01);
      }
      posAttr.needsUpdate = true;

      // Update line segments to current point positions
      let k = 0;
      for (let p = 0; p < pairs.length; p++) {
        const [i, j] = pairs[p];
        linePositions[k++] = posAttr.getX(i);
        linePositions[k++] = posAttr.getY(i);
        linePositions[k++] = 0.01;

        linePositions[k++] = posAttr.getX(j);
        linePositions[k++] = posAttr.getY(j);
        linePositions[k++] = 0.01;
      }
      (lineGeom.getAttribute("position") as THREE.BufferAttribute).needsUpdate = true;

      // Soft pulse on line opacity
      lineMat.opacity = 0.14 + 0.06 * (0.5 + 0.5 * Math.sin(t * 0.8));

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      const w = mount.clientWidth;
      renderer.setSize(w, height);
      camera.aspect = w / height;
      camera.updateProjectionMatrix();
      // keep plane scaling consistent in world units (no change needed)
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      mount.removeEventListener("mousemove", onMove);
      mount.removeEventListener("touchmove", onMove as any);
      mount.removeChild(renderer.domElement);
      // dispose
      plane.geometry.dispose();
      (plane.material as THREE.Material).dispose();
      tex.dispose();
      pointsGeom.dispose();
      pointsMat.dispose();
      lineGeom.dispose();
      lineMat.dispose();
      renderer.dispose();
    };
  }, [height, src]);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height,
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 10px 40px rgba(13,110,253,.25)",
        background:
          "linear-gradient(135deg, rgba(6,9,16,.9), rgba(10,12,22,.9))",
      }}
    />
  );
}
