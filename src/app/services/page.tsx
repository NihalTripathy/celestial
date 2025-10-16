import ServicesPageClient from "./ServicesPageClient";

export const metadata = {
  title: "Our Services – Celestia Security",
  description:
    "Explore Celestia Security’s full range of cybersecurity services—risk assessment, incident response, compliance, and team training.",
  openGraph: {
    title: "Our Services – Celestia Security",
    description:
      "Intelligent, proactive, and human-centered cybersecurity solutions built to protect your digital universe.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services – Celestia Security",
    description:
      "Intelligent, proactive, and human-centered cybersecurity solutions built to protect your digital universe.",
  },
  alternates: {
    canonical: "/services",
  },
};

// ✅ Render the client part (animations, interactivity)
export default function ServicesPage() {
  return <ServicesPageClient />;
}
