// app/about/page.tsx
import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Us – Celestia Security",
  description:
    "Learn more about Celestia Security—our mission, values and commitment to protecting your digital universe.",
  openGraph: {
    title: "About Us – Celestia Security",
    description:
      "Learn more about Celestia Security—our mission, values and commitment to protecting your digital universe.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us – Celestia Security",
    description:
      "Learn more about Celestia Security—our mission, values and commitment to protecting your digital universe.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  // Server component renders the animated client shell
  return <AboutClient />;
}
