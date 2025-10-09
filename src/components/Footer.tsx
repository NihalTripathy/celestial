export default function Footer() {
  return (
    <footer className="bg-body-tertiary border-top mt-auto">
      <div className="container py-4 d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
        <p className="mb-0 text-body-secondary">
          © {new Date().getFullYear()} Celestial Security. All rights reserved.
        </p>
        <ul className="nav">
          <li className="nav-item"><a className="nav-link px-2 text-body-secondary" href="#">Privacy</a></li>
          <li className="nav-item"><a className="nav-link px-2 text-body-secondary" href="#">Terms</a></li>
          <li className="nav-item"><a className="nav-link px-2 text-body-secondary" href="#contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}
