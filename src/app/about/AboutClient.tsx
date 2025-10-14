"use client";

import AnimatedImage3D from "@/components/AnimatedImage3D";
import { useEffect } from "react";
import type { FC } from "react";

const AboutClient: FC = () => {
  // reveal-on-scroll only inside about page
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".about-page .ap-reveal");
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

  return (
    <main className="about-page">
      {/* Hero */}
      <section className="section section-dark text-center ap-hero">
        <div className="container">
          <h1 className="mb-3 ap-reveal">About Celestia Security</h1>
          <p className="lead mb-0 ap-reveal" style={{ maxWidth: 880, margin: "0 auto" }}>
            We make next-generation cybersecurity clear, proactive, and built around you—so you can
            focus on growth while we safeguard what matters most.
          </p>
        </div>
      </section>

      {/* Mission + visual */}
      <section className="section section-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-6 mb-4 mb-md-0 ap-reveal">
              <h2 className="mb-3">Our Mission</h2>
              <p>
                At Celestia Security, we believe that cybersecurity should not be complex—it should
                be clear, proactive, and built around you. Founded with the vision of making
                next-generation security accessible to every business, we combine intelligent
                automation, advanced analytics, and human expertise to protect digital ecosystems
                from ever-evolving threats. Our mission is simple: to simplify cybersecurity, one
                byte at a time, by creating solutions that empower organizations to focus on growth
                while we safeguard what matters most.
              </p>
              <p>
                Our team of cybersecurity experts, ethical hackers, and data analysts works
                relentlessly to anticipate risks before they strike. We don’t just detect and
                respond—we predict, prevent, and evolve with every new challenge. Whether you’re a
                startup taking your first digital step or an enterprise navigating complex
                infrastructures, Celestia Security stands as your trusted partner in building
                resilience, trust, and peace of mind in an increasingly connected world.
              </p>
            </div>
            <div className="col-md-6 ap-reveal">
              <AnimatedImage3D />
            </div>
          </div>
        </div>
      </section>

      {/* Values (unchanged layout) */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="text-center mb-4 ap-reveal">Our Core Values</h2>
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="ap-card p-4 h-100 ap-reveal">
                <i className="fas fa-bullseye fa-2x mb-3 ap-accent"></i>
                <h5 className="mb-2">Integrity</h5>
                <p className="mb-0">
                  We uphold the highest ethical standards, ensuring transparency and trust in every
                  engagement.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ap-card p-4 h-100 ap-reveal">
                <i className="fas fa-lightbulb fa-2x mb-3 ap-accent"></i>
                <h5 className="mb-2">Innovation</h5>
                <p className="mb-0">
                  We continually develop cutting-edge solutions to stay ahead of the threat
                  landscape.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ap-card p-4 h-100 ap-reveal">
                <i className="fas fa-users fa-2x mb-3 ap-accent"></i>
                <h5 className="mb-2">Collaboration</h5>
                <p className="mb-0">
                  We partner with clients to build resilient systems and foster a culture of
                  security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story (kept for layout continuity; adjust later if you want) */}
      <section className="section section-light">
        <div className="container">
          <h2 className="text-center mb-4 ap-reveal">Our Story</h2>
          <p className="mx-auto ap-reveal" style={{ maxWidth: "900px" }}>
            Founded with a vision to bring clarity to cybersecurity, Celestia Security has grown
            from a focused consultancy into a global provider of proactive, analytics-driven
            protection. Today we serve startups and enterprises across sectors—finance, healthcare,
            technology, and government—helping them build resilient, trusted digital ecosystems.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutClient;
