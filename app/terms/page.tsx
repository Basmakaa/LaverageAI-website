import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal/LegalDocument";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms for using the ${site.name} website and requesting workshops or advisory work.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalDocument title="Terms of Use">
      <p>
        These terms govern your use of {site.url.replace("https://", "")}. {site.legalName} is an
        incorporated company. Workshops, training, and implementation are provided under a separate
        agreement once we confirm scope and fees.
      </p>

      <h2>The website</h2>
      <p>
        Content on this site is for information. It is not legal, financial, or technical advice,
        and it is not a promise that a particular AI tool is right for your business. We may update
        copy, examples, and availability without notice.
      </p>

      <h2>Enquiries and bookings</h2>
      <p>
        Sending a message or booking a discovery call does not create a contract. A paid engagement
        starts only when both sides agree the work, the fee, and how we will handle your data.
      </p>

      <h2>Client materials</h2>
      <p>
        If you share documents, workflows, or examples with us, you remain the owner. You confirm
        you have the right to share them. We use them only to prepare and deliver the work you
        asked for.
      </p>

      <h2>Responsible AI use</h2>
      <p>
        Training covers how to use tools such as Claude and ChatGPT without putting confidential
        information into systems that are not approved by your organisation. You stay responsible
        for your internal policies, your tool licences, and the decisions your team makes with AI
        output.
      </p>

      <h2>Acceptable use</h2>
      <p>
        Do not misuse the site: no scraping that harms the service, no sending malware, and no
        submitting false contact details to harass anyone.
      </p>

      <h2>Liability</h2>
      <p>
        The site is provided as is. To the extent the law allows, {site.legalName} is not liable
        for losses that come from using or being unable to use the website. Paid work is covered by
        the contract for that work.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalDocument>
  );
}
