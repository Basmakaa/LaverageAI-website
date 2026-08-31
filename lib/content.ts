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
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
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
    title: "The Founders Guide to AI",
    description:
      "Delivered as The Founders Guide to AI, this session was built around marketing and content: planning, drafting and repurposing work that founders actually need to ship.",
    topics: ["Marketing", "Content creation", "Brand voice", "Repurposing"],
    logo: "/logos/femme-in-business.png",
    logoAlt: "Femme in Business",
    logoLayout: "mark",
    logoBox: {
      padding: "8px",
      background: "#ffffff",
    },
  },
  {
    audience: "EINC",
    title: "Claude for Small Businesses",
    description:
      "Everyday Claude workflows for a small HR team: drafting, summarising, organising information and improving quality without technical complexity.",
    topics: ["Drafting", "Summarising", "Policy review", "Data handling"],
    logo: "/logos/einc.png",
    logoAlt: "EINC",
    logoLayout: "mark",
    logoBox: {
      padding: "8px",
      background: "#ffffff",
    },
  },
];

export const workshopPhotos: GalleryPhoto[] = [
  { src: "/gallery/workshop-01.jpg", alt: "Workshop Q and A with attendees and laptops in the room" },
  { src: "/gallery/workshop-02.jpg", alt: "Basma speaking to the room during a LaverageAI workshop" },
  { src: "/gallery/workshop-03.jpg", alt: "Attendees working through AI workflows on laptops" },
  { src: "/gallery/workshop-04.jpg", alt: "Participants reviewing work together on a laptop" },
  { src: "/gallery/workshop-05.jpg", alt: "The Founders Guide to AI session with Femme in Business" },
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
    question: "What can LaverageAI help our team achieve?",
    answer:
      "We help your team use AI to work more efficiently, reduce repetitive tasks, and improve everyday workflows. Before each session, we look for practical opportunities within your organization to save your team time and money—ensuring the training addresses real needs and delivers tangible value.",
  },
  {
    question: "Are your workshops customized to our business?",
    answer:
      "Yes. We tailor each workshop to your team, industry, challenges, and existing workflows. Whenever possible, we use real examples from your organization so employees leave with skills they can apply immediately.",
  },
  {
    question: "Does our team need prior AI experience?",
    answer:
      "Not at all. Our sessions are designed to make AI clear and approachable, even for complete beginners. We adapt the content to your team’s experience level and explain everything without unnecessary technical jargon.",
  },
  {
    question: "What does a typical engagement include?",
    answer:
      "It may include a discovery session, workflow assessment, customized training, hands-on exercises, practical resources, and clear recommendations for next steps. The format is adapted to your organization’s needs and goals.",
  },
  {
    question: "How do you handle privacy and responsible AI use?",
    answer:
      "Privacy and responsible adoption are built into our training. We help teams understand what information should never be entered into AI tools, how to evaluate outputs, and how to establish clear internal guidelines for safe and accountable use.",
  },
  {
    question: "Do you provide implementation support after the training?",
    answer:
      "Yes. Beyond workshops, we can help your team turn opportunities into practical workflows, automations, internal resources, or custom AI solutions. The level of implementation support depends on your needs and project scope.",
  },
];
