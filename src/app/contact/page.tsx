import type { FC } from 'react';

export const metadata = {
  title: 'Contact Us – Celestial Security',
  description:
    'Get in touch with the Celestial Security team to learn more about our cyber security services.',
};

const ContactPage: FC = () => {
  return (
    <main>
      <section className="section section-dark">
        <div className="container">
          <h1 className="text-center mb-4">Contact Us</h1>
          <div className="row">
            <div className="col-md-6 mb-5">
              <h4 className="mb-3">Get in Touch</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="your@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Inquiry Subject"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows={5}
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
            <div className="col-md-6">
              <h4 className="mb-3">Contact Details</h4>
              <p className="mb-2">
                <i className="fas fa-map-marker-alt me-2"></i> 123 Cyber Way,
                Bhubaneswar, Odisha 751001, India
              </p>
              <p className="mb-2">
                <i className="fas fa-phone-alt me-2"></i> +91 98765 43210
              </p>
              <p className="mb-4">
                <i className="fas fa-envelope me-2"></i>{' '}
                support@celestialsecurity.com
              </p>
              <h4 className="mb-3">Business Hours</h4>
              <p className="mb-1">Monday – Friday: 9:00 AM – 6:00 PM IST</p>
              <p>Saturday &amp; Sunday: By Appointment Only</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;