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
};

export type FaqItem = {
  question: string;
  answer: string;
};
