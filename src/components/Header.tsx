"use client";

import Link from "next/link";
import LogoSmall from "./LogoSmall";
import { useEffect, useState } from "react";
import type { FC } from "react";

const Header: FC = () => {
   const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = [
    "navbar",
    "navbar-expand-lg",
    "navbar-dark",
    "py-2",           // reduced vertical padding
    "custom-navbar",
    mounted ? "navbar-visible" : "navbar-hidden",
    scrolled ? "navbar-scrolled" : "",
  ].join(" ");

  return (
    <nav className={navbarClasses}>
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <LogoSmall size={80} playOnHover={true} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
