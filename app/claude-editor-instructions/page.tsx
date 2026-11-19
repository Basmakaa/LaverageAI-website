import type { Metadata } from "next";
import type { ReactNode } from "react";

import { CopyButton } from "@/components/guide/CopyButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { reelEditorPrompt } from "@/lib/reel-editor-prompt";
import { site } from "@/lib/site";

const pagePath = "/claude-editor-instructions";
const pageUrl = `${site.url}${pagePath}`;
const title = "Turn Claude into your reel editor";
const description =
  "A beginner guide to editing vertical reels with Claude Code and free local tools. Claude picks takes, cuts pauses, and adds your fonts. You approve every step.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pagePath },
  openGraph: {
    type: "article",
    url: pagePath,
    title: `${title} | ${site.name}`,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${site.name}`,
    description,
    images: ["/og.png"],
  },
};

const toc: { href: string; label: string; accent?: boolean }[] = [
  { href: "#what-you-need", label: "What you need" },
  { href: "#folder", label: "Set up your folder" },
  { href: "#steps", label: "Step by step" },
  { href: "#the-prompt", label: "The prompt", accent: true },
  { href: "#what-gets-installed", label: "What gets installed" },
  { href: "#install-yourself", label: "Install it yourself" },
  { href: "#example", label: "Example answers" },
  { href: "#afterwards", label: "What you can ask" },
  { href: "#tips", label: "Tips" },
];

const needs = [
  {
    title: "The Claude desktop app",
    body: "With a paid plan that includes Claude Code. You'll use its Code tab.",
  },
  {
    title: "A computer",
    body: "A Mac with Apple Silicon (M1 or newer) is fastest. Windows and older Macs work too, just slower.",
  },
  {
    title: "Your raw takes",
    body: "Straight from your phone or camera, in original quality. Don't send them through WhatsApp first, it shrinks them.",
  },
  {
    title: "Your brand",
    body: "Your font file (.ttf or .otf), your colours if you know them, and 1–3 reels whose style you like.",
  },
];

const folder = [
  { name: "takes/", note: "your raw videos for this reel" },
  { name: "brand/", note: "font files, logo (optional)" },
  { name: "examples/", note: "reels or screenshots whose style you like" },
  { name: "script.txt", note: "optional: the script you read" },
];

const steps: { title: string; text: string; body: ReactNode; accent?: boolean }[] = [
  {
    title: "Install the Claude desktop app",
    text: "Download it from claude.ai/download, install it like any app, and sign in. It's the only thing you install yourself. Claude installs everything else.",
    body: (
      <>
        Download it from{" "}
        <a
          href="https://claude.ai/download"
          className="guide-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          claude.ai/download
        </a>
        , install it like any app, and sign in. It&apos;s the only thing you install yourself. Claude
        installs everything else.
      </>
    ),
  },
  {
    title: "Open the Code tab",
    text: "Click Code at the top of the app, then choose your reel-editor folder as the project folder.",
    body: (
      <>
        Click Code at the top of the app, then choose your reel-editor folder as the project folder.
      </>
    ),
  },
  {
    title: "Paste the prompt",
    accent: true,
    text: "Copy the prompt below and send it. It turns Claude into your editor and tells it exactly how to work.",
    body: (
      <>
        Copy <a href="#the-prompt" className="guide-link text-claude">the prompt below</a> and send it. It turns
        Claude into your editor and tells it exactly how to work.
      </>
    ),
  },
  {
    title: "Answer Claude's questions",
    text: "Claude interviews you about your content, fonts, colours, style and the reels you like, a few questions at a time. It ends with a sample frame of your brand on your own footage, so you can check the look.",
    body: (
      <>
        Claude interviews you about your content, fonts, colours, style and the reels you like, a
        few questions at a time. It ends with a sample frame of your brand on your own footage, so
        you can check the look.
      </>
    ),
  },
  {
    title: "Let Claude install the tools",
    text: 'Claude lists what it will install and waits for you to say "go". Then it runs each install itself. When a permission box pops up asking to run a command, click Allow. No computer password needed, and everything stays inside your folder. It takes about 10–20 minutes the first time, mostly downloading. At the end, Claude transcribes 10 seconds of your video to prove everything works.',
    body: (
      <>
        Claude lists what it will install and waits for you to say &quot;go&quot;. Then it runs each
        install itself. When a permission box pops up asking to run a command, click Allow. No
        computer password needed, and everything stays inside your folder. It takes about 10–20
        minutes the first time, mostly downloading. At the end, Claude transcribes 10 seconds of
        your video to prove everything works.{" "}
        <a href="#what-gets-installed" className="guide-link">
          See what gets installed below
        </a>
        .
      </>
    ),
  },
  {
    title: "Review the edit plan",
    text: 'Claude transcribes your takes and shows a table: each line, which take it picked, and why. Ask for changes or say "approved".',
    body: (
      <>
        Claude transcribes your takes and shows a table: each line, which take it picked, and why.
        Ask for changes or say &quot;approved&quot;.
      </>
    ),
  },
  {
    title: "Check the render",
    text: 'Claude exports the reel and tells you where the file is. Watch it on your phone and ask for anything you\'d change: "tighter at the start", "different take for line 3", "bigger captions".',
    body: (
      <>
        Claude exports the reel and tells you where the file is. Watch it on your phone and ask for
        anything you&apos;d change: &quot;tighter at the start&quot;, &quot;different take for line
        3&quot;, &quot;bigger captions&quot;.
      </>
    ),
  },
  {
    title: "Next reels go faster",
    text: 'Claude saves your brand in a CLAUDE.md file, so it remembers next time. Put the new takes in takes/ and say "New reel, the takes are ready."',
    body: (
      <>
        Claude saves your brand in a CLAUDE.md file, so it remembers next time. Put the new takes in{" "}
        <code className="font-mono text-[0.92em] text-fg">takes/</code> and say &quot;New reel, the
        takes are ready.&quot;
      </>
    ),
  },
];

const tools = [
  {
    name: "Claude desktop app",
    does: "Where you talk to Claude. The only thing you install yourself.",
    size: "~500 MB",
  },
  {
    name: "uv",
    does: "Installs Python for you, no password needed",
    size: "~40 MB",
  },
  {
    name: "Python 3.12 (private copy)",
    does: "Runs the editing scripts Claude writes",
    size: "~50 MB",
  },
  {
    name: "FFmpeg",
    does: "The video engine: cuts, zooms, mixes audio, exports the final file",
    size: "~80 MB",
  },
  {
    name: "Whisper + large-v3-turbo model",
    does: "Writes down every word you say, with the exact time it starts and ends",
    size: "~2.5 GB",
  },
  {
    name: "OpenCV, NumPy, SciPy",
    does: "Image work frame by frame: graphics, glow, animations",
    size: "~150 MB",
  },
  {
    name: "Pillow, soundfile",
    does: "Draws text in your font and reads the audio",
    size: "~20 MB",
  },
  {
    name: "MediaPipe (optional)",
    does: "Cuts you out from the background, for text behind you",
    size: "~60 MB",
  },
];

const manualInstall = [
  { label: "go to your folder", command: "cd ~/Movies/reel-editor" },
  { label: "install uv", command: "curl -LsSf https://astral.sh/uv/install.sh | sh" },
  { label: "private Python", command: "~/.local/bin/uv venv --python 3.12 .venv" },
  {
    label: "video, image and audio tools",
    command:
      "~/.local/bin/uv pip install --python .venv imageio-ffmpeg opencv-contrib-python-headless numpy scipy pillow soundfile",
  },
  {
    label: "speech-to-text (Apple Silicon Mac)",
    command: "~/.local/bin/uv pip install --python .venv mlx-whisper",
  },
];

const examples = [
  {
    title: "Weeknight cooking",
    content: "Short recipe reels, filmed in the kitchen while talking to camera.",
    font: "Fraunces, sentence case",
    swatches: [
      { hex: "#F4EFE6", name: "Warm paper" },
      { hex: "#D97757", name: "Orange" },
    ],
    colourNote: "Warm paper text, one orange key word, near-black cards",
    style: "Warm, simple, homemade. Never neon.",
    extras: "The dish name big for the first 3 seconds, then one ingredient word at a time.",
    quality: "HEVC, CRF 16, one encode only",
  },
  {
    title: "Beginner running",
    content: "Couch-to-5k tips, filmed outside just after a run.",
    font: "Outfit Medium, all lowercase",
    swatches: [
      { hex: "#F7F4EF", name: "Soft white" },
      { hex: "#E08A3C", name: "Amber" },
    ],
    colourNote: "Soft white text, one amber key word, dark cards",
    style: "Friendly, direct, encouraging. Never shouty.",
    extras: "A big pace or distance in the first seconds. No background music.",
    quality: "HEVC, CRF 18, one encode only",
  },
];

const asks = [
  {
    want: "Captions",
    say: "Add one-word captions in my caption font, with the key word in my accent colour.",
  },
  {
    want: "A hook",
    say: "Put a big hook word behind me in the first 3 seconds.",
  },
  {
    want: "Graphic breaks",
    say: "Here are 3 illustrations in examples/. Make them draw themselves while my voice continues.",
  },
  {
    want: "Music",
    say: "Add this track under my voice, quiet, and fade it out at the end.",
  },
  {
    want: "Two versions",
    say: "Make a 30-second version too, keeping only the strongest lines.",
  },
];

const tips = [
  "Film in good light, phone at eye level, and leave a short pause before restarting a sentence. It makes clean cuts easier.",
  "Always ask for the plan and a few still frames before a full render. Renders can take a while.",
  'If you see an error, paste it to Claude and ask "what does this mean and what should I do?"',
  'If Claude ever asks for your computer password, or says it needs Homebrew or Xcode, remind it: "install everything with uv inside this folder, like the prompt says".',
  'A Mac popup saying "install command line developer tools"? Click Cancel and tell Claude. It isn\'t needed for this setup.',
  "Use only fonts and music you have the right to use. Google Fonts are free for any use.",
];

const guideSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: title, item: pageUrl },
      ],
    },
    {
      "@type": "Article",
      headline: title,
      description,
      url: pageUrl,
      mainEntityOfPage: pageUrl,
      datePublished: "2026-11-19",
      dateModified: "2026-11-19",
      inLanguage: "en-CA",
      author: { "@id": `${site.url}/#founder` },
      publisher: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "HowTo",
      name: title,
      description,
      step: steps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.title,
        text: step.text,
        url: `${pageUrl}#step-${index + 1}`,
      })),
    },
  ],
};

export default function ClaudeEditorInstructionsPage() {
  return (
    <article className="shell pt-32 pb-section-sm sm:pt-40 sm:pb-section">
      <JsonLd data={guideSchema} />

      <header className="max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.16em] text-faint uppercase">
          Beginner guide · free tools
        </p>
        <h1 className="mt-5 text-4xl leading-[1.02] font-semibold tracking-[-0.045em] text-balance sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          You film your takes. Claude picks the best version of each line, cuts out the pauses and
          &quot;um&quot;s, adds your fonts and colours, and exports a sharp vertical video.{" "}
          <span className="text-claude">You approve every step before anything is rendered.</span>
        </p>
      </header>

      <nav aria-label="On this page" className="mt-10 lg:hidden">
        <ul className="flex w-full min-w-0 gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {toc.map((item) => (
            <li key={item.href} className="shrink-0">
              <a
                href={item.href}
                className={`inline-flex border px-3 py-1.5 text-xs hover:border-line-strong hover:text-fg ${
                  item.accent ? "border-claude/50 text-claude" : "border-line text-muted"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-14 grid gap-16 lg:mt-20 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-20">
        <nav aria-label="On this page" className="hidden lg:block">
          <div className="sticky top-28">
            <p className="text-xs font-semibold tracking-[0.16em] text-faint uppercase">
              On this page
            </p>
            <ul className="mt-4 grid gap-2.5">
              {toc.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`text-sm hover:text-fg ${item.accent ? "text-claude" : "text-muted"}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="min-w-0 space-y-20">
          <GuideSection id="what-you-need" title="What you need">
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {needs.map((item, index) => (
                <li key={item.title} className="border border-line bg-card px-5 py-5">
                  <p className="text-xs tabular-nums text-faint">0{index + 1}</p>
                  <h3 className="mt-3 text-base font-medium tracking-[-0.02em]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">
              No font yet? That&apos;s fine. Claude will suggest free fonts from Google Fonts that
              fit your style.
            </p>
          </GuideSection>

          <GuideSection
            id="folder"
            title="Set up your folder"
            intro="Make one folder on your computer and put your files in it like this. The names matter, because the prompt tells Claude where to look."
          >
            <div className="mt-8 border border-line bg-surface">
              <p className="border-b border-line px-5 py-3 font-mono text-sm">reel-editor/</p>
              <ul>
                {folder.map((item, index) => (
                  <li
                    key={item.name}
                    className="grid gap-1 border-b border-line px-5 py-3 last:border-b-0 sm:grid-cols-[11rem_1fr] sm:items-baseline"
                  >
                    <span className="font-mono text-sm">
                      <span className="text-faint">{index === folder.length - 1 ? "└──" : "├──"}</span>{" "}
                      {item.name}
                    </span>
                    <span className="text-sm text-faint">{item.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </GuideSection>

          <GuideSection id="steps" title="Step by step">
            <ol className="mt-10">
              {steps.map((step, index) => (
                <li key={step.title} id={`step-${index + 1}`} className="flex scroll-mt-28 gap-5">
                  <div className="flex w-8 shrink-0 flex-col items-center">
                    <span
                      className={`grid size-8 shrink-0 place-items-center border text-xs tabular-nums ${
                        step.accent ? "border-claude text-claude" : "border-line-strong"
                      }`}
                    >
                      {index + 1}
                    </span>
                    {index < steps.length - 1 ? <span className="mt-2 w-px flex-1 bg-line" /> : null}
                  </div>
                  <div className={index < steps.length - 1 ? "pb-10" : ""}>
                    <h3
                      className={`text-base font-medium tracking-[-0.02em] ${
                        step.accent ? "text-claude" : ""
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </GuideSection>

          <GuideSection
            id="the-prompt"
            title="The prompt"
            intro="Copy all of it. You don't need to fill anything in, Claude asks you."
          >
            <div className="mt-8 border border-claude/70 bg-[#070707]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-claude/30 px-4 py-3 sm:px-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-claude uppercase">
                  paste into Claude Code
                </p>
                <CopyButton text={reelEditorPrompt} label="Copy prompt" accent />
              </div>
              <pre className="max-h-[32rem] overflow-auto px-4 py-5 font-mono text-[12.5px] leading-relaxed whitespace-pre-wrap text-muted sm:px-5">
                {reelEditorPrompt}
              </pre>
            </div>
          </GuideSection>

          <GuideSection
            id="what-gets-installed"
            title="What gets installed"
            intro="All free. Everything except uv lives inside your reel-editor folder, so deleting the folder removes it. Sizes are approximate, about 3 GB in total."
          >
            <div className="mt-8 min-w-0 overflow-x-auto border border-line">
              <table className="w-full min-w-[36rem] text-left text-sm">
                <caption className="sr-only">Free tools used by this setup, and approximate download size</caption>
                <thead className="border-b border-line text-xs font-medium tracking-[0.14em] text-faint uppercase">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-medium sm:px-5">
                      Tool
                    </th>
                    <th scope="col" className="px-4 py-3 font-medium sm:px-5">
                      What it does
                    </th>
                    <th scope="col" className="px-4 py-3 text-right font-medium sm:px-5">
                      Size
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tools.map((tool) => (
                    <tr key={tool.name} className="border-b border-line last:border-b-0">
                      <th scope="row" className="px-4 py-3.5 text-left font-medium sm:px-5">
                        {tool.name}
                      </th>
                      <td className="px-4 py-3.5 text-muted sm:px-5">{tool.does}</td>
                      <td className="px-4 py-3.5 text-right whitespace-nowrap text-faint tabular-nums sm:px-5">
                        {tool.size}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GuideSection>

          <GuideSection
            id="install-yourself"
            title="Prefer to install it yourself?"
            intro={'You don\'t have to, Claude does it. But if you want to: open Terminal (press ⌘ + Space, type "Terminal", press Enter) and run these one at a time. Each one can take a few minutes.'}
          >
            <ol className="mt-8 grid gap-3">
              {manualInstall.map((item, index) => (
                <li key={item.command} className="min-w-0 border border-line bg-surface">
                  <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
                    <p className="text-sm">
                      <span className="text-faint tabular-nums">{index + 1} · </span>
                      {item.label}
                    </p>
                    <CopyButton text={item.command} />
                  </div>
                  <pre className="min-w-0 overflow-x-auto border-t border-line px-4 py-3 font-mono text-[13px] leading-relaxed text-fg sm:px-5">
                    {item.command}
                  </pre>
                </li>
              ))}
            </ol>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">
              Put your folder somewhere else? Change the path in step 1. Then go back to Claude and
              say &quot;I installed the tools myself, check that they work.&quot; Claude downloads
              the speech model and runs the test.
            </p>
          </GuideSection>

          <GuideSection
            id="example"
            title="Example answers"
            intro="Two sample setups, so you can see the kind of answers Claude needs. Yours will be your own font, colours, and style."
          >
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {examples.map((example) => (
                <article key={example.title} className="border border-line">
                  <h3 className="border-b border-line px-5 py-4 text-base font-medium tracking-[-0.02em]">
                    {example.title}
                  </h3>
                  <ExampleRow label="Content">{example.content}</ExampleRow>
                  <ExampleRow label="Font">{example.font}</ExampleRow>
                  <div className="grid gap-3 border-b border-line px-5 py-4">
                    <p className="text-xs font-semibold tracking-[0.14em] text-faint uppercase">Colours</p>
                    <div className="flex flex-wrap gap-x-5 gap-y-3">
                      {example.swatches.map((swatch) => (
                        <Swatch key={swatch.hex} hex={swatch.hex} name={swatch.name} />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-muted">{example.colourNote}</p>
                  </div>
                  <ExampleRow label="Style">{example.style}</ExampleRow>
                  <ExampleRow label="Extras">{example.extras}</ExampleRow>
                  <ExampleRow label="Quality" last>
                    {example.quality}
                  </ExampleRow>
                </article>
              ))}
            </div>
          </GuideSection>

          <GuideSection id="afterwards" title="Things you can ask for afterwards">
            <div className="mt-8 min-w-0 overflow-x-auto border border-line">
              <table className="w-full min-w-[36rem] text-left text-sm">
                <caption className="sr-only">Example requests you can send after the first reel</caption>
                <thead className="border-b border-line text-xs font-medium tracking-[0.14em] text-faint uppercase">
                  <tr>
                    <th scope="col" className="w-40 px-4 py-3 font-medium sm:px-5">
                      You want
                    </th>
                    <th scope="col" className="px-4 py-3 font-medium sm:px-5">
                      Say something like
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {asks.map((item) => (
                    <tr key={item.want} className="border-b border-line last:border-b-0">
                      <th scope="row" className="px-4 py-3.5 text-left align-top font-medium sm:px-5">
                        {item.want}
                      </th>
                      <td className="px-4 py-3.5 text-muted sm:px-5">&quot;{item.say}&quot;</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GuideSection>

          <GuideSection id="tips" title="Tips">
            <ul className="mt-8 max-w-2xl">
              {tips.map((tip) => (
                <li
                  key={tip}
                  className="border-t border-line py-4 text-sm leading-relaxed text-muted first:border-t-0 first:pt-0"
                >
                  {tip}
                </li>
              ))}
            </ul>
          </GuideSection>

          <p className="border-t border-line pt-8 text-sm text-faint">
            Made by Basma with Claude Code. Free, local tools: FFmpeg, Whisper, OpenCV, Pillow.
          </p>
        </div>
      </div>
    </article>
  );
}

function GuideSection({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">{title}</h2>
      {intro ? <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{intro}</p> : null}
      {children}
    </section>
  );
}

function ExampleRow({
  label,
  children,
  last = false,
}: {
  label: string;
  children: ReactNode;
  last?: boolean;
}) {
  return (
    <div className={`grid gap-2 px-5 py-4 ${last ? "" : "border-b border-line"}`}>
      <p className="text-xs font-semibold tracking-[0.14em] text-faint uppercase">{label}</p>
      <p className="text-sm leading-relaxed">{children}</p>
    </div>
  );
}

function Swatch({ hex, name }: { hex: string; name: string }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className="size-4 border border-white/20"
        style={{ backgroundColor: hex }}
        aria-hidden="true"
      />
      <span className="font-mono text-sm">{hex}</span>
      <span className="text-sm text-muted">{name}</span>
    </span>
  );
}
