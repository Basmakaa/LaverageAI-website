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

export type Workshop = {
  audience: string;
  title: string;
  description: string;
  topics: string[];
  logo: string;
  logoAlt: string;
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
  rating: number;
  quote: string;
};
