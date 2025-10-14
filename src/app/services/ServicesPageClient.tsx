"use client";

import type { FC } from "react";
import { useEffect } from "react";

const ServicesPageClient: FC = () => {
  useEffect(() => {
    // Reveal only inside services page
    const els = document.querySelectorAll<HTMLElement>(".services-page .sp-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const services = [
    {
      icon: "fa-solid fa-magnifying-glass",
      title: "Risk & Vulnerability Assessment",
      desc:
        "We analyze your infrastructure, networks, applications, and systems to pinpoint weaknesses—before attackers do. Our detailed reports guide you in strengthening every layer of defense.",
    },
    {
      icon: "fa-solid fa-satellite-dish",
      title: "Threat Intelligence & Monitoring",
      desc:
        "Stay ahead of emerging threats with real-time global intelligence and continuous 24/7 monitoring. We ensure you never get caught off guard.",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "Incident Response & Recovery",
      desc:
        "When incidents strike, our rapid-response specialists contain breaches, minimize losses, and restore operations—ensuring business continuity and minimal downtime.",
    },
    {
      icon: "fa-solid fa-cubes",
      title: "Security Architecture & Design",
      desc:
        "We build secure-by-design architectures across cloud, on-premises, and hybrid environments—ensuring security is integrated, not added later.",
    },
    {
      icon: "fa-solid fa-clipboard-check",
      title: "Compliance & Regulatory Support",
      desc:
        "Meet and maintain compliance with frameworks such as GDPR, HIPAA, and PCI DSS. We help simplify audits and reduce risk with structured, compliant processes.",
    },
    {
      icon: "fa-solid fa-chalkboard-user",
      title: "Training & Awareness",
      desc:
        "Human error is the biggest threat. We educate your team to recognize phishing, social engineering, and other human-based attack vectors—empowering them to become your first line of defense.",
    },
  ];

  return (
    <main className="services-page">
      {/* Header */}
      <section className="section section-dark text-center sp-hero">
        <div className="container">
          <h1 className="mb-3 sp-reveal sp-title-xl">Our Services</h1>
          <p className="lead mb-5 sp-reveal sp-lead">
            Intelligent, proactive, and human-centered cybersecurity solutions
            built to protect your digital universe.
          </p>

          <div className="row g-4">
            {services.map((s, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <article
                  className="sp-card sp-reveal h-100 p-4 d-flex flex-column"
                  aria-label={s.title}
                >
                  <div className="sp-icon mb-3">
                    <i className={s.icon} aria-hidden="true"></i>
                  </div>
                  <h3 className="sp-card-title">{s.title}</h3>
                  <p className="sp-card-desc mb-0 flex-grow-1">{s.desc}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-light text-center">
        <div className="container">
          <h2 className="mb-3 sp-reveal">Tailored Solutions for Every Industry</h2>
          <p className="mb-4 mx-auto sp-reveal" style={{ maxWidth: 820 }}>
            From startups to global enterprises, Celestia Security designs
            cybersecurity programs that align with your goals, industry
            regulations, and budget.
          </p>
          <a href="/contact" className="btn-celestial">
            Talk to an Expert
          </a>
        </div>
      </section>
    </main>
  );
};

export default ServicesPageClient;
