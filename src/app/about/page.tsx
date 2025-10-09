import Image from 'next/image';
import type { FC } from 'react';

export const metadata = {
  title: 'About Us – Celestial Security',
  description:
    'Learn more about Celestial Security, our mission, our values and our commitment to protecting your digital universe.',
};

const AboutPage: FC = () => {
  return (
    <main>
      <section className="section section-dark text-center">
        <div className="container">
          <h1 className="mb-4">About Celestial Security</h1>
          <p className="lead mb-4">
            We are a team of passionate cyber security professionals committed
            to safeguarding the digital universe.
          </p>
        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="mb-3">Our Mission</h2>
              <p>
                Celestial Security was founded on the belief that everyone
                deserves to operate in a safe digital environment. Our mission
                is to empower organizations with the tools and expertise
                needed to prevent, detect and respond to cyber threats.
              </p>
              <p>
                We work tirelessly to create innovative security solutions
                backed by actionable intelligence and decades of experience.
              </p>
            </div>
            <div className="col-md-6">
              <Image
                src="/cyber-network.png"
                alt="Mission graphic"
                width={600}
                height={400}
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container">
          <h2 className="text-center mb-4">Our Core Values</h2>
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="p-4 bg-dark border-0 shadow h-100">
                <i className="fas fa-bullseye fa-2x mb-3 accent"></i>
                <h5 className="mb-2">Integrity</h5>
                <p>
                  We uphold the highest ethical standards, ensuring
                  transparency and trust in every engagement.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-dark border-0 shadow h-100">
                <i className="fas fa-lightbulb fa-2x mb-3 accent"></i>
                <h5 className="mb-2">Innovation</h5>
                <p>
                  Our teams are continually researching and developing
                  cutting‑edge solutions to stay ahead of the threat
                  landscape.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-dark border-0 shadow h-100">
                <i className="fas fa-users fa-2x mb-3 accent"></i>
                <h5 className="mb-2">Collaboration</h5>
                <p>
                  We believe in working together with our clients to
                  build resilient systems and foster a culture of
                  security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <h2 className="text-center mb-4">Our Story</h2>
          <p className="mx-auto" style={{ maxWidth: '900px' }}>
            Founded in Bhubaneswar by a group of security enthusiasts,
            Celestial Security has grown from a small consultancy into a
            global provider of cyber security solutions. Our founders
            recognized early that the ever‑expanding digital universe
            needed guardians to protect sensitive data and critical
            infrastructure. Over the years, we have assembled a diverse
            team of experts who share a passion for innovation and a
            commitment to excellence. Today we serve clients across
            finance, healthcare, technology and government sectors,
            delivering bespoke security programs that stand up to the
            most advanced threats.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;