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

import type { FaqItem, GalleryPhoto, NavLink, ProcessStep, Service, Testimonial, Workshop } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Workshops", href: "#workshops" },
  { label: "Feedback", href: "#feedback" },
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
    audience: "Femme in Business",
    title: "Founders Guide to AI",
    description:
      "Delivered as Founders Guide to AI, this session was built around marketing and content: planning, drafting and repurposing work that founders actually need to ship.",
    topics: ["Marketing", "Content creation", "Brand voice", "Repurposing"],
    logo: "/logos/femme-in-business.png",
    logoAlt: "Femme in Business",
  },
  {
    audience: "EINC",
    title: "Claude for Small Businesses",
    description:
      "Everyday Claude workflows for a small HR team: drafting, summarising, organising information and improving quality without technical complexity.",
    topics: ["Drafting", "Summarising", "Policy review", "Data handling"],
    logo: "/logos/einc.png",
    logoAlt: "EINC",
  },
];

export const workshopPhotos: GalleryPhoto[] = [
  { src: "/gallery/workshop-01.jpg", alt: "Workshop Q and A with attendees and laptops in the room" },
  { src: "/gallery/workshop-02.jpg", alt: "Basma speaking to the room during a LaverageAI workshop" },
  { src: "/gallery/workshop-03.jpg", alt: "Attendees working through AI workflows on laptops" },
  { src: "/gallery/workshop-04.jpg", alt: "Participants reviewing work together on a laptop" },
  { src: "/gallery/workshop-05.jpg", alt: "Founders Guide to AI session with Femme in Business" },
  { src: "/gallery/workshop-06.jpg", alt: "Hands on guidance during a workshop exercise" },
  { src: "/gallery/workshop-07.jpg", alt: "Attendees following along on laptops and tablets" },
  { src: "/gallery/workshop-08.jpg", alt: "Basma coaching a participant during a live session" },
  {
    src: "/gallery/workshop-09.jpg",
    alt: "Attendees clapping and smiling during a LaverageAI workshop",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Naimah Venezia",
    title: "3x Founder and PM at CoinWa",
    quote:
      "I worked closely with Basma while creating the teaching materials for the AI workshop, and one of the most valuable parts of that experience was having her guidance throughout the process. As an experienced Software Engineer, she has a strong understanding of how AI works from a technical perspective, while also staying very up to date with new developments like AI agents and emerging tools. AI is evolving incredibly quickly, with new tools and capabilities coming out almost every day, so having someone who actively keeps up with these changes was extremely valuable. She was able to bring that knowledge into the workshop in a way that was practical and easy to understand. I would definitely recommend Basma to other teams and businesses, especially those looking for guidance from someone who understands both the technical side of AI and how the latest developments can actually be applied in the workplace.",
  },
  {
    name: "Prisha Dev",
    title: "Journalist and Co-founder FemmeInBusiness",
    quote:
      "Basma did a phenomenal job at co hosting an AI for content creation workshop with us. The topics were engaging, insightful and informative. Her approach in guiding the workshop was clear and concise. The attendees genuinely enjoyed the session and took away lots of new info. I would 100% recommend to other teams and businesses.",
  },
  {
    name: "Jamie Harris",
    title: "VP People & Culture at E Inc",
    quote:
      "Everyone loved the AI session! I’ll definitely be connecting over the next few weeks to explore several initiatives, including a Policy Q&A chatbot, recruitment process automation, and talent management solutions.",
  },
  {
    name: "Natalia Kuzma",
    title: "Talent Acquisition Partner at E INC",
    quote:
      "Thank you Basma, that was amazing!! Thank you so much for your time and for explaining everything so clearly and simply 🩷🙏 Everyone is so excited!!",
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
