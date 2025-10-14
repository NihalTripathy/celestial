"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import type { FC } from "react";

/*
  CyberBackground renders a dynamic 3D scene consisting of a large wireframe
  globe with glowing nodes and connecting arcs. A starfield and pulsing scan
  rings create additional depth and motion. The globe responds to pointer
  movement by tilting slightly, and scan rings continuously emanate from
  the equator. The sphere radius has been increased from the original
  implementation to provide a more imposing visual behind the hero content.

  This component positions its canvas absolutely so it fills the entire
  hero section. Pointer events are disabled so it never interferes with
  interaction on overlaid elements. Opacity can be adjusted to fine‑tune
  brightness relative to foreground content.
*/
const CyberBackground: FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    // Further enlarge the radius so the globe fills more of the hero section.
    // Increasing to 5 provides a more immersive backdrop without hiding
    // the foreground content.
    const globeRadius = 5.5;
    // Widen the field of view so the enlarged globe fits entirely within
    // the viewport. A FOV around 70–75 degrees ensures a sphere with
    // radius 5 is fully visible at z=8. Without this change the top
    // and bottom of the globe are clipped by the camera frustum.
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 9.5;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    /*** 1. Globe wireframe ***/
    const globeGeom = new THREE.SphereGeometry(globeRadius, 40, 40);
    const globeWire = new THREE.WireframeGeometry(globeGeom);
    const globeMat = new THREE.LineBasicMaterial({
      color: 0x0d6efd,
      transparent: true,
      opacity: 0.15,
    });
    const globeMesh = new THREE.LineSegments(globeWire, globeMat);
    scene.add(globeMesh);

    /*** 2. Nodes on the globe ***/
    const allVerts = globeGeom.getAttribute("position");
    const nodePositions: number[] = [];
    for (let i = 0; i < allVerts.count; i += 20) {
      nodePositions.push(
        allVerts.getX(i),
        allVerts.getY(i),
        allVerts.getZ(i)
      );
    }
    const nodesGeom = new THREE.BufferGeometry();
    nodesGeom.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(nodePositions, 3)
    );
    const nodesMat = new THREE.PointsMaterial({
      color: 0x0d6efd,
      size: 0.04,
      transparent: true,
      opacity: 0.5,
    });
    const nodes = new THREE.Points(nodesGeom, nodesMat);
    scene.add(nodes);

    /*** 3. Network arcs ***/
    const arcGroup = new THREE.Group();
    const arcCount = 14;
    for (let i = 0; i < arcCount; i++) {
      const vStart = new THREE.Vector3().setFromSphericalCoords(
        globeRadius,
        Math.acos(2 * Math.random() - 1),
        Math.random() * Math.PI * 2
      );
      const vEnd = new THREE.Vector3().setFromSphericalCoords(
        globeRadius,
        Math.acos(2 * Math.random() - 1),
        Math.random() * Math.PI * 2
      );
      const mid = vStart.clone().add(vEnd).multiplyScalar(0.5);
      const control = mid.clone().setLength(mid.length() * 1.4);
      const curve = new THREE.QuadraticBezierCurve3(vStart, control, vEnd);
      const points = curve.getPoints(50);
      const arcGeom = new THREE.BufferGeometry().setFromPoints(points);
      const arcMat = new THREE.LineBasicMaterial({
        color: 0x0d6efd,
        transparent: true,
        opacity: 0.35,
      });
      const arc = new THREE.Line(arcGeom, arcMat);
      arcGroup.add(arc);
    }
    scene.add(arcGroup);

    /*** 4. Ambient stars ***/
    const starsCount = 2000;
    const starPositions: number[] = [];
    for (let i = 0; i < starsCount; i++) {
      const radius = 10 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      starPositions.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
    }
    const starsGeom = new THREE.BufferGeometry();
    starsGeom.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starPositions, 3)
    );
    const starsMat = new THREE.PointsMaterial({
      color: 0x0d6efd,
      size: 0.02,
      transparent: true,
      opacity: 0.1,
    });
    const stars = new THREE.Points(starsGeom, starsMat);
    scene.add(stars);

    /*** 5. Animated Scan Rings ***/
    interface ScanRing {
      mesh: THREE.Mesh;
      maxScale: number;
      speed: number;
    }
    const scanRings: ScanRing[] = [];
    const ringCount = 3;
    for (let i = 0; i < ringCount; i++) {
      const innerR = globeRadius + 0.05;
      const outerR = innerR + 0.03;
      const ringGeom = new THREE.RingGeometry(innerR, outerR, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x0d6efd,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide,
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.rotation.x = Math.PI / 2;
      // Stagger initial scales so pulses cascade
      const initScale = 1 + i * 0.4;
      ringMesh.scale.setScalar(initScale);
      scene.add(ringMesh);
      scanRings.push({ mesh: ringMesh, maxScale: 6, speed: 0.015 + 0.005 * i });
    }

    // Offset all major objects downward so the globe is fully visible below the header.
    // Without this offset the top and bottom of the sphere may be clipped by the
    // hero container. Adjust yOffset as needed to fine tune placement. With a
    // wider FOV we can reduce the offset slightly.
    const yOffset = -0.5;
    globeMesh.position.y = yOffset;
    nodes.position.y = yOffset;
    arcGroup.position.y = yOffset;
    stars.position.y = yOffset;
    scanRings.forEach(({ mesh }) => {
      mesh.position.y = yOffset;
    });

    /*** 6. Pointer interaction: tilt the globe with mouse or touch ***/
    let mouseX = 0;
    let mouseY = 0;
    const onPointerMove = (event: MouseEvent | TouchEvent) => {
      const x = "clientX" in event ? event.clientX : event.touches[0].clientX;
      const y = "clientY" in event ? event.clientY : event.touches[0].clientY;
      const rect = container.getBoundingClientRect();
      mouseX = (x - rect.left) / rect.width - 0.5;
      mouseY = (y - rect.top) / rect.height - 0.5;
    };
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("touchmove", onPointerMove);

    /*** 7. Animation loop ***/
    let frameId: number;
    const animate = () => {
      // Rotate the globe and associated elements slowly around the y‑axis
      const rotationSpeed = 0.0018;
      globeMesh.rotation.y += rotationSpeed;
      nodes.rotation.y += rotationSpeed;
      arcGroup.rotation.y += rotationSpeed;
      // Apply tilt based on pointer position
      globeMesh.rotation.x = mouseY * 0.4;
      nodes.rotation.x = globeMesh.rotation.x;
      arcGroup.rotation.x = globeMesh.rotation.x;
      // Rotate stars for depth
      stars.rotation.y += 0.0003;
      // Pulse the scan rings outward and fade
      scanRings.forEach((ring) => {
        const { mesh, maxScale, speed } = ring;
        mesh.scale.x += speed;
        mesh.scale.y += speed;
        const ringMat = mesh.material as THREE.MeshBasicMaterial;
        ringMat.opacity = 0.3 * (1 - (mesh.scale.x - 1) / (maxScale - 1));
        if (mesh.scale.x > maxScale) {
          mesh.scale.setScalar(1);
          ringMat.opacity = 0.3;
        }
      });
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    /*** 8. Resize and cleanup ***/
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
      // Dispose resources
      globeGeom.dispose();
      globeWire.dispose();
      globeMat.dispose();
      nodesGeom.dispose();
      nodesMat.dispose();
      arcGroup.children.forEach((child) => {
        (child as THREE.Line).geometry.dispose();
        const mat = (child as THREE.Line).material;
        Array.isArray(mat) ? mat.forEach((m) => m.dispose()) : mat.dispose();
      });
      starsGeom.dispose();
      starsMat.dispose();
      scanRings.forEach(({ mesh }) => {
        mesh.geometry.dispose();
        (mesh.material as THREE.MeshBasicMaterial).dispose();
      });
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
        opacity: 0.8,
        zIndex: 0
      }}
    />
  );
};

export default CyberBackground;