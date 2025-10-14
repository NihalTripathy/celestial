"use client";

import LogoAnimation from './LogoAnimation';
import Image from 'next/image';
import ThreeScrollAnimation from '../components/ThreeScrollAnimation';
import { useScrollReveal } from '../components/useScrollReveal';
import HeroSection from '../components/HeroSection';
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
      <HeroSection />
      {/* Services overview */}
      <section ref={servicesRef} className="section section-dark">
        <div className="container">
          <h2 className="text-center mb-4">Overview</h2>
          <p className="lead text-center mx-auto" style={{ maxWidth: "900px" }}>
            Celestia Security is a forward-looking cybersecurity startup dedicated to
            making advanced digital protection accessible, efficient, and reliable.
            Security shouldn’t be complex — it should be smart, intuitive, and built
            for the way businesses operate in the modern world.
          </p>
          <p className="text-center mx-auto" style={{ maxWidth: "900px" }}>
            From tailored risk assessments to proactive defence measures, Celestia
            Security bridges the gap between sophisticated technology and practical
            protection. We help you identify vulnerabilities before they become
            breaches — putting you ahead of threats, not reacting to them.
          </p>
        </div>
      </section>

      <section ref={threeRef} className="section section-light">
        <div className="container">
          <h2 className="text-center mb-5 text-light">Values &amp; Goals</h2>
          <div className="row g-4 text-center">
            {[
              {
                icon: "fa-scale-balanced",
                title: "Integrity",
                text:
                  "We uphold honesty and transparency with clients about risks, capabilities, and outcomes.",
              },
              {
                icon: "fa-lightbulb",
                title: "Innovation",
                text:
                  "Always exploring and adopting newer, better ways to secure systems and data.",
              },
              {
                icon: "fa-compress-alt",
                title: "Simplicity",
                text:
                  "Making complicated cybersecurity concepts accessible and manageable — without unnecessary complexity.",
              },
              {
                icon: "fa-handshake",
                title: "Collaboration",
                text:
                  "Working together with clients, partners, and within our teams to build strong, collective security.",
              },
              {
                icon: "fa-bullhorn",
                title: "Proactivity",
                text:
                  "Staying ahead of threats via continuous monitoring, threat intelligence, and forward-thinking strategies.",
              },
              {
                icon: "fa-user-shield",
                title: "Customer-centricity",
                text:
                  "Placing user experience, trust, and peace of mind at the centre of every decision.",
              },
            ].map((v, i) => (
              <div key={i} className="col-md-4">
                <div
                  className="p-4 h-100"
                  style={{
                    border: "1px solid #c229be",
                    borderRadius: "16px",
                    background: "rgba(25, 26, 35, 0.9)",
                    boxShadow: "0 0 12px rgba(194, 41, 190, 0.4)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(194, 41, 190, 0.7)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 0 12px rgba(194, 41, 190, 0.4)")
                  }
                >
                  <i
                    className={`fas ${v.icon} fa-2x mb-3`}
                    style={{ color: "#c229be" }}
                  />
                  <h5 className="mb-2 text-light fw-semibold">{v.title}</h5>
                  <p className="mb-0 text-secondary" style={{ fontSize: "0.9rem" }}>
                    {v.text}
                  </p>
                </div>
              </div>
            ))}
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
        {/* Text content */}
        <div className="col-md-6 mb-4 mb-md-0">
          <div
            className="neon-panel"
            onMouseMove={(e) => {
              // spotlight follows mouse
              const el = e.currentTarget as HTMLElement;
              const rect = el.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width) * 100;
              const y = ((e.clientY - rect.top) / rect.height) * 100;
              el.style.setProperty("--mx", `${x}%`);
              el.style.setProperty("--my", `${y}%`);
            }}
          >
            <div className="neon-panel__header">
              <span className="neon-chip">Who Is This For?</span>
              <h3 className="neon-title mb-2">Built for teams that need certainty</h3>
              <p className="neon-sub mb-0">
                Celestia Security empowers organizations of all sizes with scalable,
                enterprise-grade cybersecurity. Whether you’re a growing startup or a
                global enterprise, our solutions adapt to your needs.
              </p>
            </div>

            <ul className="neon-list mt-4">
              <li className="neon-item">
                <i className="fas fa-circle-check"></i>
                <span>
                  Small- and medium-sized businesses needing enterprise-grade protection
                  without large in-house teams.
                </span>
              </li>
              <li className="neon-item">
                <i className="fas fa-circle-check"></i>
                <span>
                  Enterprises modernizing their cybersecurity posture without overwhelming
                  complexity.
                </span>
              </li>
              <li className="neon-item">
                <i className="fas fa-circle-check"></i>
                <span>
                  Tech-savvy startups &amp; SaaS providers focused on compliance, customer
                  trust and data protection.
                </span>
              </li>
              <li className="neon-item">
                <i className="fas fa-circle-check"></i>
                <span>
                  Regulated industries (finance, healthcare, e-commerce) requiring
                  audit-ready compliance.
                </span>
              </li>
              <li className="neon-item">
                <i className="fas fa-circle-check"></i>
                <span>
                  Any organization seeking strong, understandable, business-aligned
                  cybersecurity.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Image */}
        <div className="col-md-6">
          <Image
            src="/cyber-network.png"
            alt="Who Celestia Security is for"
            width={600}
            height={400}
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </div>
        </div>
      </section>

      {/* Call to action */}
     <section ref={ctaRef} className="section section-light">
      <div className="container">
        <h2 className="text-center mb-4 text-light">What We Do</h2>
        <div className="row g-4">
          {[
            {
              icon: "fa-search",
              title: "Risk & Vulnerability Assessment",
              text:
                "Analyse your infrastructure, networks, applications, and systems to find weak points.",
            },
            {
              icon: "fa-radar",
              title: "Threat Intelligence & Monitoring",
              text:
                "Track emerging threats and provide continuous oversight so you’re never caught off guard.",
            },
            {
              icon: "fa-shield-virus",
              title: "Incident Response & Recovery",
              text:
                "Rapid response planning and execution to contain breaches, minimize damage and downtime.",
            },
            {
              icon: "fa-cubes",
              title: "Security Architecture & Design",
              text:
                "Build secure-by-design architectures across cloud, on-prem, and hybrid environments.",
            },
            {
              icon: "fa-file-shield",
              title: "Compliance & Regulatory Support",
              text:
                "Meet standards like GDPR, HIPAA, PCI DSS — operate confidently with audit-ready controls.",
            },
            {
              icon: "fa-chalkboard-teacher",
              title: "Training & Awareness",
              text:
                "Empower your team with best practices to avoid social engineering, phishing, and human error.",
            },
          ].map((s, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <div
                className="p-4 h-100"
                style={{
                  border: "1px solid #c229be",
                  borderRadius: "16px",
                  background: "rgba(25, 26, 35, 0.9)",
                  boxShadow: "0 0 12px rgba(194, 41, 190, 0.4)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(194, 41, 190, 0.7)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 12px rgba(194, 41, 190, 0.4)")
                }
              >
                <i
                  className={`fas ${s.icon} fa-2x mb-3`}
                  style={{ color: "#c229be" }}
                />
                <h5 className="mb-2 text-light fw-semibold">{s.title}</h5>
                <p className="mb-0 text-secondary" style={{ fontSize: "0.9rem" }}>
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-5">
          <h3 className="mb-3 text-light fw-semibold">
            Ready to secure your digital universe?
          </h3>
          <p className="mb-4 text-secondary">
            Talk to our experts and discover how Celestia Security can safeguard your organization.
          </p>
          <a
            href="/contact"
            className="btn-celestial"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>

    </main>
  );
};

export default HomeClient;