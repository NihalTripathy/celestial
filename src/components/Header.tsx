"use client";
import dynamic from "next/dynamic";
import LogoSmall from "@/components/LogoSmall";

export default function Header() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg border-bottom"
        style={{
          background: "linear-gradient(135deg, #0b0c10 0%, #141627 50%, #000000 100%)",
        }}
      >
        <div className="container d-flex align-items-center justify-content-between">
          {/* Left: Logo */}
          <a href="/" className="navbar-brand d-flex align-items-center gap-2 text-white">
            <LogoSmall />
            {/* <span style={{ fontWeight: 600, fontSize: "1.2rem" }}>Celestial Security</span> */}
          </a>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Menu */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white active" href="#">Home</a>
              </li>
              <li className="nav-item"><a className="nav-link text-white" href="#features">About</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#pricing">Service</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#resources">Resource</a></li>
              <li className="nav-item">
                <a className="btn btn-primary ms-lg-2" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Offcanvas */}
      <div
        className="offcanvas offcanvas-end text-bg-dark"
        tabIndex={-1}
        id="mainNav"
        aria-labelledby="mainNavLabel"
      >
        <div className="offcanvas-header">
          <h5 id="mainNavLabel" className="mb-0 text-white">Menu</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link text-white" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#features">About</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#pricing">Service</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#resources">Resource</a></li>
            <li className="nav-item mt-2">
              <a className="btn btn-primary w-100" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
