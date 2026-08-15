import {
  Bot,
  BookOpen,
  Compass,
  Gauge,
  GraduationCap,
  LineChart,
  Rocket,
  Workflow,
} from "lucide-react";

import type { FaqItem, NavLink, ProcessStep, Service, Workshop } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Workshops", href: "#workshops" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const services: Service[] = [
  {
    icon: Gauge,
    title: "AI Readiness Assessment",
    description:
      "We map how your team works today and show where AI will save the most time, with the least disruption.",
  },
  {
    icon: GraduationCap,
    title: "AI Workshops",
    description:
      "Hands on sessions built around your team's real tasks, not generic prompting theory or tool demos.",
  },
  {
    icon: BookOpen,
    title: "Claude & ChatGPT Training",
    description:
      "Role specific training that takes people from occasional use to confident, everyday practice.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "We connect AI to the tools you already use, so repetitive work runs reliably in the background.",
  },
  {
    icon: Bot,
    title: "Custom AI Assistants",
    description:
      "Internal assistants configured around your business context, documents and ways of working.",
  },
  {
    icon: Compass,
    title: "AI Strategy",
    description:
      "A clear, prioritised plan for where AI fits your business over the next quarter and the next year.",
  },
  {
    icon: Rocket,
    title: "Implementation",
    description:
      "We build and deploy the workflows with your team, so adoption starts during the engagement.",
  },
  {
    icon: LineChart,
    title: "Ongoing Advisory",
    description:
      "Office hours, workflow reviews and practical guidance as your team's AI maturity grows.",
  },
];

export const industries: string[] = [
  "Marketing",
  "HR",
  "Operations",
  "Leadership",
  "Sales",
  "Customer Support",
  "Finance",
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "We start with the business, not the tools. We learn how your team actually works and where time is being lost.",
  },
  {
    step: "02",
    title: "Identify",
    description:
      "We rank AI opportunities by impact, effort and risk, so you know exactly what is worth doing first.",
  },
  {
    step: "03",
    title: "Implement",
    description:
      "We deploy practical AI workflows around real tasks, using the tools and systems your business already runs on.",
  },
  {
    step: "04",
    title: "Enable",
    description:
      "We train the team until AI becomes part of everyday work, not a tool people forget after the workshop.",
  },
];

export const workshops: Workshop[] = [
  {
    audience: "Women in Business",
    title: "AI for Marketing & Content Creation",
    description:
      "A practical session on using AI to plan, draft and repurpose marketing content, built for a community of business owners without a technical background.",
    topics: ["Content ideation", "Repurposing", "Brand voice", "Responsible use"],
  },
  {
    audience: "HR Team",
    title: "Claude for Small Businesses",
    description:
      "Everyday Claude workflows for a small HR team: drafting, summarising, organising information and improving quality without technical complexity.",
    topics: ["Drafting", "Summarising", "Policy review", "Data handling"],
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Do you teach beginners?",
    answer:
      "Yes. Beginners are who we are built for. Most of the teams we work with have never used AI beyond a few experiments. We start from where your team actually is and focus on the work they already do, so nothing feels abstract or technical.",
  },
  {
    question: "Do we need ChatGPT Plus?",
    answer:
      "Not to get started. We can run sessions on free tiers, and we will tell you honestly when a paid plan is worth it for your use case. Where a paid tool is genuinely needed, we explain what it unlocks so you can make the call before spending anything.",
  },
  {
    question: "Can you train our whole company?",
    answer:
      "Yes. We run everything from single team workshops to company wide enablement programmes delivered department by department. Larger rollouts usually combine a shared foundation session with role specific training for marketing, HR, operations and leadership.",
  },
  {
    question: "Do you build custom AI tools?",
    answer:
      "Yes. When training alone is not enough, we implement automations, internal assistants and reusable prompt systems around the tools your business already uses. The aim is always something your team can run without us.",
  },
  {
    question: "Do you work remotely?",
    answer:
      "Yes. Workshops and implementation work are delivered remotely by default, and we can run sessions on site where that works better for your team. Timezone coverage is agreed before we start.",
  },
  {
    question: "How do you handle privacy and responsible AI use?",
    answer:
      "Every engagement includes practical guidance on data handling, tool selection and verification. We help you set clear internal rules so your team adopts AI confidently without putting sensitive information where it should not go.",
  },
];
