"use client";

import Lottie from "lottie-react";
import animationData from "@/animations/Frame-16.json";
import CyberBackground from "./CyberBackground"; // <-- use new background

export default function LogoAnimation() {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-center"
      style={{
        position: "relative",
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0b0c10 0%, #141627 50%, #000000 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      {/* Cyber network background */}
      <CyberBackground />

      <div style={{ position: "relative", zIndex: 1 }}>
       <Lottie
          animationData={animationData}
          autoplay
          loop={false}       // slows the animation to half speed
          style={{ width: 650, height: 650 }}  // enlarges the logo display
        />
        <h1
          style={{
            color: "white",
            fontWeight: 600,
            fontSize: "2rem",
            marginTop: "1.2rem",
          }}
        >
          Celestial Security
        </h1>
        <p
          style={{
            color: "#b3b3b3",
            maxWidth: 420,
            margin: "0 auto",
            fontSize: "1rem",
          }}
        >
          Protecting your digital universe with next‑generation security solutions.
        </p>
      </div>
    </section>
  );
}
