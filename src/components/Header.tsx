"use client";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "../styles/Header.module.css";
import Image from 'next/image';

const Header = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleEsc = (e:any) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
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
    <>
      <header
        className={`${s.header} ${scrolled ? s.scrolled : ""}`}
        role="banner"
      >
        <div className={s.container}>
          {/* Gradient accent line */}
          <div  />

          {/* Logo/Brand */}
          <Link href="/" className={s.brand} aria-label="Home">
            <span className={s.brandLogoWrap}>
              <Image
                src="/Celestia White.svg"
                alt="Celestia Security"
                width={80}
                height={80}
                className={s.brandLogoImg}
                priority
              />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`${s.nav} d-none d-md-block`} aria-label="Primary">
            <ul className={s.menu}>
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${s.navLink} ${isActive(href) ? s.active : ""}`}
                  >
                    <span className={s.navLinkText}>{label}</span>
                    <span className={s.navLinkUnderline} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className={`${s.ctaWrapper} d-none d-md-flex`}>
            <Link href="/contact" className={"btn-celestial"}>
              <span className={s.ctaButtonText}>Contact Us</span>
              <span className={s.ctaButtonGlow} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`${s.menuToggle} d-md-none`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={`${s.hamburger} ${mobileOpen ? s.active : ""}`}>
              <span className={s.line} />
              <span className={s.line} />
              <span className={s.line} />
            </span>
          </button>
        </div>


      {/* Mobile Navigation Slide Panel */}
      <div
        ref={panelRef}
        className={`${s.mobilePanel} ${mobileOpen ? s.open : ""} d-md-none`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className={s.mobilePanelHeader}>
          <span className={s.mobilePanelTitle}>Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            className={s.closeButton}
            aria-label="Close menu"
          >
            <span className={s.closeLine} style={{ transform: "rotate(45deg)" }} />
            <span className={s.closeLine} style={{ transform: "rotate(-45deg)" }} />
          </button>
        </div>

        <nav className={s.mobilePanelNav} aria-label="Mobile">
          {navItems.map(({ href, label }, idx) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`${s.mobilePanelLink} ${isActive(href) ? s.active : ""}`}
              style={{
                animation: mobileOpen ? `${s.slideIn} 0.4s ease-out ${idx * 60}ms forwards` : "none",
              }}
            >
              <span className={s.mobileLinkBorder} />
              <span className={s.mobileLinkText}>{label}</span>
            </Link>
          ))}

          <div className={s.mobileCTAWrapper}>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className={s.mobileCTA}
            >
              <span className={s.mobileCTAText}>Contact Us</span>
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Scrim/Overlay */}
      {mobileOpen && (
        <div
          className={s.scrim}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
     </header>
    </>
  );
};

export default Header;