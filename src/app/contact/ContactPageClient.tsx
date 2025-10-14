"use client";

import type { FC, FormEvent } from "react";
import { useEffect, useState } from "react";

const ContactPageClient: FC = () => {
  // simple UX feedback (no backend wiring here)
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".contact-page .cp-reveal");
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // replace with your API call; we just show a toast-like feedback
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <main className="contact-page">
      {/* HERO with subtle animated beams */}
      <section className="section section-dark cp-hero text-center">
        <div className="container">
          <h1 className="mb-2 cp-reveal cp-title-xl">Contact Us</h1>
          <p className="lead mb-0 cp-reveal cp-lead">
            Let’s secure your digital universe—tell us what you need and we’ll craft a plan.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section section-light">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            {/* FORM CARD */}
            <div className="col-md-7">
              <article className="cp-card p-4 h-100 cp-reveal">
                <h2 className="h4 mb-3">Get in touch</h2>

                {/* Toast */}
                {sent && (
                  <div className="cp-toast" role="status" aria-live="polite">
                    <i className="fa-solid fa-circle-check me-2" /> Message queued—our team will reach out shortly.
                  </div>
                )}

                <form onSubmit={onSubmit} className="cp-form">
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="cp-field">
                        <input id="name" name="name" required />
                        <label htmlFor="name">Name</label>
                        <span className="cp-focus" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="cp-field">
                        <input id="email" name="email" type="email" required />
                        <label htmlFor="email">Email</label>
                        <span className="cp-focus" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="cp-field">
                        <input id="subject" name="subject" required />
                        <label htmlFor="subject">Subject</label>
                        <span className="cp-focus" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="cp-field">
                        <textarea id="message" name="message" rows={5} required />
                        <label htmlFor="message">Message</label>
                        <span className="cp-focus" />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-3 mt-3">
                    <button type="submit" className="btn btn-primary btn-lg px-4 cp-btn-primary">
                      Send Message
                    </button>
                    <a href="mailto:support@celestiasecurity.com" className="btn btn-outline-light btn-lg px-4 cp-btn-ghost">
                      Email Us Directly
                    </a>
                  </div>
                </form>
              </article>
            </div>

            {/* INFO / SIDEBAR CARD */}
            <div className="col-md-5">
              <aside className="cp-card p-4 h-100 cp-reveal">
                <h2 className="h4 mb-3">Contact Details</h2>

                <ul className="cp-list">
                  <li>
                    <i className="fa-solid fa-location-dot" />
                    <span>USA, USA</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-phone" />
                    <span>+91 00000 00010</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope" />
                    <span>support@celestiasecurity.com</span>
                  </li>
                </ul>


                {/* Decorative pulse grid that matches your theme */}
                <div className="cp-grid mt-4" aria-hidden="true">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <span key={i} style={{ animationDelay: `${(i % 6) * 0.2}s` }} />
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPageClient;
