import type { LucideIcon } from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type WorkshopLogoBox = {
  /** Inner padding around the mark. Default is 12px. */
  padding?: string;
  /** Square background. Default is off-white for contrast. */
  background?: string;
};

export type Workshop = {
  audience: string;
  title: string;
  description: string;
  topics: string[];
  logo: string;
  logoAlt: string;
  logoBox?: WorkshopLogoBox;
  /** Full-width banner across the card, or a compact mark beside the title. */
  logoLayout?: "full" | "mark";
};

export type GalleryPhoto = {
  src: string;
  alt: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Testimonial = {
  name: string;
  title: string;
  quote: string;
};
