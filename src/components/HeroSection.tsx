"use client";

import Lottie from "lottie-react";
import animationData from "@/animations/Frame-16.json";
import CyberBackground from "./CyberBackground";
import type { FC } from "react";

const HeroSection: FC = () => {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-center"
      style={{
        position: "relative",
        height: "100vh",
        background: "linear-gradient(135deg, #0b0c10 0%, #141627 50%, #000000 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      <CyberBackground  />
      <div
        className="container h-100 d-flex flex-column justify-content-between align-items-center"
        style={{ position: "relative", zIndex: 2, maxWidth: "900px" }}
      >
        {/* Top: logo */}
        <div className="d-flex flex-column align-items-center mt-3">
          <Lottie
            animationData={animationData}
            autoplay
            loop={false}
            style={{ width: "min(380px, 80vw)", height: "min(380px, 80vw)" }}
          />
        </div>

        {/* Middle: tagline and alert */}
        <div className="text-center mt-2">
          <h2
            className="mb-3"
            style={{ color: "white", fontSize: "clamp(1.2rem, 4vw, 1.6rem)", fontWeight: 500 }}
          >
            Fortifying your tomorrow, one byte at a time
          </h2>
          <div
            className="d-inline-flex align-items-center justify-content-center px-4 py-2 mb-4"
            style={{
              background: "rgba(155, 28, 191, 0.3)",
              borderRadius: "8px",
              color: "#e46fd1",
              fontWeight: 500,
              fontSize: "clamp(0.75rem, 2.5vw, 0.85rem)",
            }}
          >
            <i className="fas fa-exclamation-triangle" />
            URGENT: Rising Threat Landscape
          </div>
        </div>

        {/* Bottom: statistic cards and buttons */}
        <div className="w-100">
          <div className="row g-3 justify-content-center">
            <div className="col-md-6 col-12">
              <div
                className="p-3 h-100"
                style={{
                  border: "1px solid #c229be",
                  borderRadius: "16px",
                  background: "rgba(25, 26, 35, 0.9)",
                  boxShadow: "0 0 12px rgba(194, 41, 190, 0.4)",
                }}
              >
                <div className="d-flex align-items-center mb-2" style={{ color: "#c229be" }}>
                  <i className="fas fa-dollar-sign fa-2x me-2" />
                  <h3 className="m-0" style={{ fontSize: "clamp(1.4rem, 5vw, 1.8rem)", color: "white", fontWeight: 600 }}>
                    $4.88M
                  </h3>
                </div>
                <p style={{ color: "#b3b3b3", marginBottom: 0, fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)" }}>
                  Average data breach cost (+10% YoY)
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div
                className="p-3 h-100"
                style={{
                  border: "1px solid #c229be",
                  borderRadius: "16px",
                  background: "rgba(25, 26, 35, 0.9)",
                  boxShadow: "0 0 12px rgba(194, 41, 190, 0.4)",
                }}
              >
                <div className="d-flex align-items-center mb-2" style={{ color: "#c229be" }}>
                  <i className="fas fa-chart-line fa-2x me-2" />
                  <h3 className="m-0" style={{ fontSize: "clamp(1.4rem, 5vw, 1.8rem)", color: "white", fontWeight: 600 }}>
                    $57B
                  </h3>
                </div>
                <p style={{ color: "#b3b3b3", marginBottom: 0, fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)" }}>
                  Projected ransomware losses in 2025
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 mb-5 d-flex justify-content-center gap-3 flex-wrap">
            <a
              href="/contact"
              className="btn-celestial"
              style={{ borderRadius: "30px" }}
            >
              Contact Us
            </a>
            <a
              href="/learn-more"
              className="btn-celestial-alt px-4"
              style={{ borderRadius: "30px", borderColor: "#4e6ffd"}}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;