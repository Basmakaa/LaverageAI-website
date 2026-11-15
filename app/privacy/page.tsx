import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal/LegalDocument";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects information you share with us.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalDocument title="Privacy Policy">
      <p>
        {site.legalName} (“we”, “us”) is an incorporated company. This policy explains what we
        collect when you use {site.url.replace("https://", "")}, why we collect it, and how to
        reach us.
      </p>

      <h2>Who we are</h2>
      <p>
        LaverageAI provides AI workshops, training, implementation, and advisory for businesses.
        The founder is {site.founder}. For privacy questions, email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>Information we collect</h2>
      <p>We collect only what we need to respond to you and run an engagement:</p>
      <ul>
        <li>Name, email, company, and message when you use the contact form</li>
        <li>Name, email, and booking details when you schedule a discovery call</li>
        <li>Technical logs that our host may store, such as IP address and browser type</li>
      </ul>
      <p>We do not create user accounts, and we do not sell personal information.</p>

      <h2>How we use it</h2>
      <ul>
        <li>To reply to enquiries and prepare a discovery call or workshop</li>
        <li>To deliver contracted work if we work together</li>
        <li>To keep the website secure and working</li>
      </ul>

      <h2>Who we share it with</h2>
      <p>
        Messages sent through the site are delivered to {site.email} using FormSubmit. Discovery
        calls are booked through Calendly. The website is hosted on Vercel. Those providers process
        data on our behalf under their own terms. We do not share your information for advertising.
      </p>

      <h2>Cookies</h2>
      <p>
        This marketing site does not run an advertising pixel or a third-party analytics suite.
        Calendly may set cookies when you open the booking calendar. You can refuse non-essential
        cookies in your browser. See Calendly’s privacy policy for details of that widget.
      </p>

      <h2>How long we keep it</h2>
      <p>
        Enquiry emails and booking records are kept only as long as we need them to respond, run
        the work, or meet a legal obligation. You can ask us to delete your information, unless we
        still need it for a contract, invoice, or the law.
      </p>

      <h2>Your choices</h2>
      <p>
        Email {site.email} to access, correct, or delete information we hold about you, or to ask
        how it is used. If you are in a region with additional privacy rights, we will honour a
        valid request.
      </p>

      <h2>Children</h2>
      <p>This site is for businesses and is not directed at children under 16.</p>

      <h2>Changes</h2>
      <p>
        If this policy changes in a material way, we will update the date at the top of this page.
      </p>
    </LegalDocument>
  );
}
