import type { FC } from 'react';

/*
  Footer component provides site‑wide navigation and contact details.
  It leverages Bootstrap’s grid system to lay out three columns:
  quick links, contact information, and social media icons. The
  component is wrapped in a dark background to blend with the rest
  of the site. FontAwesome icons are loaded globally in layout.tsx.
*/
const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-decoration-none">Home</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-decoration-none">Services</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-decoration-none">About</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-decoration-none">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">Contact Us</h5>
            <p className="mb-1">
              <i className="fas fa-map-marker-alt me-2"></i> USA,
              USA
            </p>
            <p className="mb-1">
              <i className="fas fa-phone-alt me-2"></i> +91 0000 43210
            </p>
            <p className="mb-1">
              <i className="fas fa-envelope me-2"></i> info@celestialsecurity.com
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-light fs-4">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-light fs-4">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-light fs-4">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-secondary" />
        <p className="text-center small mb-0">
          &copy; {currentYear} Celestial Security. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;