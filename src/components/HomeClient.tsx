"use client";

import LogoAnimation from '../components/LogoAnimation';
import Image from 'next/image';
import ThreeScrollAnimation from '../components/ThreeScrollAnimation';
import { useScrollReveal } from '../components/useScrollReveal';
import type { FC } from 'react';

/**
 * Client component containing the interactive parts of the home page.
 * It uses client‑side hooks such as useScrollReveal and renders
 * animations that depend on browser APIs. This component is imported
 * by the server component in app/page.tsx.
 */
const HomeClient: FC = () => {
  const servicesRef = useScrollReveal<HTMLElement>();
  const threeRef = useScrollReveal<HTMLElement>();
  const whyRef = useScrollReveal<HTMLElement>();
  const ctaRef = useScrollReveal<HTMLElement>();
  return (
    <main>
      {/* Hero section with animation */}
      <LogoAnimation />
      {/* Services overview */}
      <section ref={servicesRef} className="section section-dark text-center">
        <div className="container">
          <h2 className="mb-5">Our Services</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 bg-dark border-0 shadow-lg">
                <div className="card-body">
                  <i className="fas fa-shield-alt fa-3x mb-3 accent"></i>
                  <h5 className="card-title mb-3">Threat Detection</h5>
                  <p className="card-text">
                    Continuous monitoring and real‑time alerts help you stay one
                    step ahead of malicious actors.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 bg-dark border-0 shadow-lg">
                <div className="card-body">
                  <i className="fas fa-network-wired fa-3x mb-3 accent"></i>
                  <h5 className="card-title mb-3">Network Security</h5>
                  <p className="card-text">
                    Robust firewalling, intrusion prevention and secure
                    architecture ensure your network is impenetrable.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 bg-dark border-0 shadow-lg">
                <div className="card-body">
                  <i className="fas fa-user-secret fa-3x mb-3 accent"></i>
                  <h5 className="card-title mb-3">Identity Protection</h5>
                  <p className="card-text">
                    Ensure your users and data are secure with
                    multi‑factor authentication and access control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3D animation section */}
      <section ref={threeRef} className="section section-dark">
        <div className="container">
          <h2 className="text-center mb-4">Experience Our Technology</h2>
          <p className="text-center mb-5">
          </p>
          <ThreeScrollAnimation />
        </div>
      </section>
      {/* Why choose us */}
      <section ref={whyRef} className="section section-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="mb-4">Why Choose Celestial Security?</h2>
              <p className="lead">
                We combine cutting‑edge technology with seasoned expertise to
                deliver comprehensive protection for your organization.
              </p>
              <ul className="list-unstyled mt-4">
                <li className="mb-3 d-flex align-items-start">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <span>24/7 Monitoring &amp; Incident Response</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <span>Customizable solutions tailored to your industry</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <span>Global threat intelligence and proactive defense</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <span>Trusted by enterprises and governments worldwide</span>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              {/* Decorative image illustrating cyber security. Imported via
                  Next.js Image component for optimization. */}
              <Image
                src="/cyber-network.png"
                alt="Futuristic cyber security network"
                width={600}
                height={400}
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Call to action */}
      <section ref={ctaRef} className="section section-dark text-center">
        <div className="container">
          <h2 className="mb-4">Ready to secure your digital universe?</h2>
          <p className="mb-4">
            Contact our experts today and discover how Celestial Security can
            safeguard your organization.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg">
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
};

export default HomeClient;