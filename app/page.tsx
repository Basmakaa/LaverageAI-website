import { Anthropic } from "@/components/sections/Anthropic";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { Feedback } from "@/components/sections/Feedback";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Statement } from "@/components/sections/Statement";
import { Workshops } from "@/components/sections/Workshops";

export default function Home() {
  return (
    <>
      <Hero />
      <Anthropic />
      <Services />
      <Statement />
      <Process />
      <Workshops />
      <Feedback />
      <Contact />
      <FAQ />
    </>
  );
}
