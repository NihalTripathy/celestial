import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LogoAnimation from "@/components/LogoAnimation";

export default function Home() {
  return (
    <>
      <Header />

      {/* Main content */}
      <div className="container py-5">
        <div className="row text-center">
          <div className="">
            <LogoAnimation />
            <h1 className="display-4 mb-3">Celestial Security</h1>
            <p className="lead">
              Protecting your digital universe with next-generation security solutions.
            </p>
            <p>
              We deliver enterprise-grade protection, monitoring, and threat
              intelligence to keep your organization safe from evolving cyber threats.
            </p>
            <a href="/learn-more" className="btn btn-primary mt-3">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
