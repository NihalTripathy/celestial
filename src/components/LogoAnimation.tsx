"use client";
import Lottie from "lottie-react";
import animationData from "@/animations/Frame-16.json";

export default function LogoAnimation() {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0b0c10 0%, #141627 50%, #000000 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <div>
        <Lottie
          animationData={animationData}
          autoplay
          loop={false}
          style={{ width: 500, height: 500 }}
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
          Protecting your digital universe with next-generation security solutions.
        </p>
      </div>
    </section>
  );
}
