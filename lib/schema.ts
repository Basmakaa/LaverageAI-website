import { faqs } from "@/lib/content";
import { site } from "@/lib/site";

const orgId = `${site.url}/#organization`;
const personId = `${site.url}/#founder`;
const websiteId = `${site.url}/#website`;

export const organizationGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": orgId,
      name: site.legalName,
      legalName: site.legalName,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/icon-512.png`,
        width: 512,
        height: 512,
      },
      image: `${site.url}/og.png`,
      description: site.description,
      slogan: site.tagline,
      email: site.email,
      founder: { "@id": personId },
      employee: { "@id": personId },
      contactPoint: {
        "@type": "ContactPoint",
        email: site.email,
        contactType: "customer service",
        availableLanguage: "English",
      },
      areaServed: [
        { "@type": "City", name: "Toronto" },
        { "@type": "Country", name: "Canada" },
        "Worldwide",
      ],
      knowsAbout: [
        "Artificial intelligence adoption",
        "AI workshops and training",
        "Claude training",
        "ChatGPT training",
        "Workflow automation",
        "AI strategy",
      ],
      serviceType: [
        "AI workshops",
        "AI training",
        "AI implementation",
        "AI strategy",
      ],
    },
    {
      "@type": "Person",
      "@id": personId,
      name: site.founder,
      jobTitle: "Founder",
      description:
        "Founder of LaverageAI and an approved Anthropic SMB trainer. Delivers hands-on AI workshops and implementation for small and medium businesses.",
      worksFor: { "@id": orgId },
      url: site.url,
      email: site.email,
      sameAs: ["https://www.linkedin.com/in/basma-kaanane-09520b197"],
      knowsAbout: ["AI workshops", "Claude", "ChatGPT", "AI implementation for SMBs"],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: site.name,
      url: site.url,
      description: site.description,
      inLanguage: "en-CA",
      publisher: { "@id": orgId },
    },
  ],
};

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};
