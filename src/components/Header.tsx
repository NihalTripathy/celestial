"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image';

const Header = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setNavbarOpen(false);
  }, [pathname]);

  const isActive = useCallback(
    (href: string) => pathname === href,
    [pathname]
  );

  const navItems = useMemo(() => [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
  ], []);

  if (!mounted) return null;

  return (
    <nav
      className={`navbar navbar-expand-md navbar-dark sticky-top ${scrolled ? 'scrolled' : ''}`}
      id="main-navbar"
      role="banner"
    >
      <div className="container">
        {/* Logo/Brand */}
        <Link href="/" className="navbar-brand" aria-label="Home">
          <Image
            src="/Celestia White.svg"
            alt="Celestia Security"
            width={80}
            height={80}
            className="brand-logo"
            priority
          />
        </Link>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navigation */}
        <div className={`navbar-collapse collapse ${navbarOpen ? 'show' : ''}`} id="navbarNav">
          {/* Desktop Navigation */}
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            {navItems.map(({ href, label }) => (
              <li key={href} className="nav-item">
                <Link
                  href={href}
                  className={`nav-link ${isActive(href) ? 'active' : ''}`}
                  onClick={() => setNavbarOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="navbar-nav ms-md-3 mb-2 mb-md-0">
            <Link href="/contact" className="nav-link btn-celestial">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;