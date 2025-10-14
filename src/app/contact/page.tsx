import type { FC } from "react";
import ContactPageClient from "./ContactPageClient";

export const metadata = {
  title: "Contact Us – Celestia Security",
  description:
    "Get in touch with the Celestia Security team to learn more about our cybersecurity services, pricing, and tailored solutions.",
};

const ContactPage: FC = () => {
  return <ContactPageClient />;
};

export default ContactPage;
