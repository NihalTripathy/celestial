import type { FC } from 'react';

// Metadata for the services page
export const metadata = {
  title: 'Our Services – Celestial Security',
  description:
    'Learn about the cyber security services offered by Celestial Security, including threat detection, network security, incident response and more.',
};

const ServicesPage: FC = () => {
  return (
    <main>
      <section className="section section-dark text-center">
        <div className="container">
          <h1 className="mb-4">Our Services</h1>
          <p className="lead mb-5">
            Comprehensive cyber security solutions tailored to protect your
            digital universe.
          </p>
          <div className="row g-5">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 bg-dark border-0 shadow">
                <div className="card-body text-start">
                  <i className="fas fa-bolt fa-2x mb-3 accent"></i>
                  <h4 className="card-title">Threat Intelligence &amp; Hunting</h4>
                  <p className="card-text">
                    Our proactive threat intelligence services identify and
                    neutralize attacks before they strike. We leverage
                    cutting‑edge analytics and global data feeds to hunt down
                    emerging threats.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 bg-dark border-0 shadow">
                <div className="card-body text-start">
                  <i className="fas fa-server fa-2x mb-3 accent"></i>
                  <h4 className="card-title">Managed Network Security</h4>
                  <p className="card-text">
                    Secure your infrastructure with next‑gen firewalls,
                    intrusion prevention, and zero‑trust architectures
                    administered by our seasoned engineers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 bg-dark border-0 shadow">
                <div className="card-body text-start">
                  <i className="fas fa-user-lock fa-2x mb-3 accent"></i>
                  <h4 className="card-title">Identity &amp; Access Management</h4>
                  <p className="card-text">
                    Implement robust multi‑factor authentication, single
                    sign‑on and role‑based access controls to ensure that
                    only authorized users access your resources.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 bg-dark border-0 shadow">
                <div className="card-body text-start">
                  <i className="fas fa-bug fa-2x mb-3 accent"></i>
                  <h4 className="card-title">Vulnerability Assessment</h4>
                  <p className="card-text">
                    We perform comprehensive penetration testing and
                    security audits to identify weaknesses in your systems
                    and offer remediation guidance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 bg-dark border-0 shadow">
                <div className="card-body text-start">
                  <i className="fas fa-sync-alt fa-2x mb-3 accent"></i>
                  <h4 className="card-title">Incident Response &amp; Recovery</h4>
                  <p className="card-text">
                    Should an incident occur, our rapid response team
                    will contain the breach, remediate the damage, and
                    restore operations with minimal downtime.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 bg-dark border-0 shadow">
                <div className="card-body text-start">
                  <i className="fas fa-file-contract fa-2x mb-3 accent"></i>
                  <h4 className="card-title">Compliance &amp; Risk Management</h4>
                  <p className="card-text">
                    We help you navigate complex regulatory landscapes like
                    GDPR, HIPAA, and PCI DSS, ensuring your organization stays
                    compliant and secure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-light text-center">
        <div className="container">
          <h2 className="mb-3">Tailored Solutions for Every Industry</h2>
          <p className="mb-4">
            Whether you’re a small business or a global enterprise, we design
            security programs that align with your unique requirements and
            budget.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg">
            Talk to an Expert
          </a>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;