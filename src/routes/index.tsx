import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Menu,
  X,
  Sparkles,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Calendar,
  Briefcase,
  Database,
  BarChart3,
  Palette,
  FileSpreadsheet,
  Layers,
  Target,
  Users,
  TrendingUp,
  BookOpen,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import heroImgAsset from "@/assets/imr-01.jpg.asset.json";
import aboutImgAsset from "@/assets/img-02.jpg.asset.json";
const heroImg = heroImgAsset.url;
const aboutImg = aboutImgAsset.url;
import { projects, skillCategories, type Project } from "@/lib/portfolio-data";
import { toast, Toaster } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nitikal Sosud — Business Analyst Portfolio" },
      {
        name: "description",
        content:
          "Aspiring Business Analyst turning complex problems into data-driven business solutions. Portfolio of analytics, UI/UX and business system projects.",
      },
      { property: "og:title", content: "Nitikal Sosud — Business Analyst Portfolio" },
      {
        property: "og:description",
        content:
          "Aspiring Business Analyst turning complex problems into data-driven business solutions. Portfolio of analytics, UI/UX and business system projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nitikal Sosud — Business Analyst Portfolio" },
      {
        name: "twitter:description",
        content:
          "Aspiring Business Analyst turning complex problems into data-driven business solutions. Portfolio of analytics, UI/UX and business system projects.",
      },
    ],
  }),
  component: Portfolio,
});

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#activities", label: "Activities" },
  { href: "#contact", label: "Contact" },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Ambient neon orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[oklch(0.5_0.28_330/0.25)] blur-3xl float-slow" />
        <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-[oklch(0.5_0.28_280/0.22)] blur-3xl float-slower" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-[oklch(0.55_0.2_200/0.18)] blur-3xl float-slow" />
      </div>

      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Activities />
      <Contact />
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}

/* ----------------------------- Navigation ----------------------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-3 max-w-7xl px-4">
        <div className="glass-strong flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
          <a href="#home" className="font-mono text-lg sm:text-xl font-bold neon-text tracking-tight">
            &lt;Nitikal.Bow&gt;
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex btn-neon btn-neon-hover items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl glass"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="glass-strong md:hidden mt-2 rounded-2xl p-3 fade-up">
            <div className="flex flex-col">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 btn-neon btn-neon-hover inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold"
              >
                Get in Touch <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* ------------------------------- Hero -------------------------------- */
const floatingBadges = [
  { label: "Data-Driven", pos: "top-2 -left-4 sm:-left-8", delay: "0s" },
  { label: "SQL", pos: "top-16 -right-4 sm:-right-10", delay: "1s" },
  { label: "Power BI", pos: "bottom-24 -left-6 sm:-left-14", delay: "2s" },
  { label: "Requirements Gathering", pos: "bottom-6 right-2 sm:-right-6", delay: "1.5s" },
  { label: "Figma", pos: "top-1/2 -right-2 sm:-right-14", delay: "0.5s" },
];

function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="fade-up">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm">
            <Sparkles className="h-4 w-4 text-[color:var(--neon-pink)]" />
            <span className="text-muted-foreground">Aspiring Business Analyst & Data Enthusiast</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Hi, I am <span className="neon-text-pink">Nitikal Sosud</span>
          </h1>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-muted-foreground">
            Turning Complex Problems into Data-Driven Business Solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="btn-neon btn-neon-hover inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
            >
              View My Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-foreground hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-md fade-up">
          <div className="relative aspect-[4/5] w-full">
            {/* Glow */}
            <div className="absolute inset-0 rounded-[2rem] bg-[var(--gradient-neon)] opacity-40 blur-2xl pulse-glow" />
            <div className="glass-strong relative h-full w-full overflow-hidden rounded-[2rem] neon-border-glow">
              <img
                src={heroImg}
                alt="Nitikal Sosud"
                width={768}
                height={1024}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
            </div>
            {/* Floating badges */}
            {floatingBadges.map((b) => (
              <div
                key={b.label}
                style={{ animationDelay: b.delay }}
                className={`absolute ${b.pos} float-slow glass-strong rounded-full px-3 py-1.5 text-xs font-medium text-foreground shadow-lg`}
              >
                <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--neon-pink)] pulse-glow" />
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ About -------------------------------- */
const highlights = [
  { icon: BarChart3, label: "Data-Driven Approach" },
  { icon: Users, label: "Stakeholder Collaboration" },
  { icon: TrendingUp, label: "Process Optimization" },
  { icon: BookOpen, label: "Continuous Learning" },
];

function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="About" title="Who I Am" subtitle="Connecting Business & Tech" />
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-0 rounded-[2rem] bg-[var(--gradient-pink-purple)] opacity-40 blur-2xl" />
            <div className="glass-strong relative aspect-square overflow-hidden rounded-[2rem] neon-border-glow">
              <img
                src={aboutImg}
                alt="Nitikal Sosud portrait"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              Final-Year Student, Bachelor of Business Administration Digital Business and Information
              Systems with a strong passion for bridging the gap between business needs, data, and
              digital technology. Skilled in analytical problem-solving, process optimization, and
              stakeholder collaboration. Driven by a user-centric mindset and continuous learning, I
              excel at transforming complex challenges into actionable, data-informed solutions that
              deliver measurable business value across diverse product, data, and technology roles.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="glass group flex items-center gap-3 rounded-2xl p-4 transition hover:bg-white/10 hover:-translate-y-0.5"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--gradient-pink-purple)] text-white shadow-[var(--shadow-neon-pink)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Skills ------------------------------- */
const skillCategoryMeta: Record<string, { icon: any; color: string }> = {
  "Business Analysis": { icon: Briefcase, color: "var(--neon-pink)" },
  "Data Analytics": { icon: BarChart3, color: "var(--neon-purple)" },
  Database: { icon: Database, color: "var(--neon-cyan)" },
  "UI/UX": { icon: Palette, color: "var(--neon-pink)" },
  Productivity: { icon: FileSpreadsheet, color: "var(--neon-cyan)" },
};

function Skills() {
  const tabs = ["All", ...Object.keys(skillCategories)] as const;
  const [active, setActive] = useState<(typeof tabs)[number]>("All");

  const shown = useMemo(() => {
    if (active === "All") {
      return Object.entries(skillCategories).flatMap(([cat, list]) =>
        list.map((s) => ({ category: cat, name: s })),
      );
    }
    const list = (skillCategories as Record<string, readonly string[]>)[active];
    return list.map((s) => ({ category: active, name: s }));
  }, [active]);

  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Toolkit" title="Skills & Expertise" subtitle="What I work with day to day" />
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => {
            const isActive = t === active;
            return (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "btn-neon shadow-[var(--shadow-neon-pink)]"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {shown.map((s) => {
            const meta = skillCategoryMeta[s.category];
            const Icon = meta?.icon ?? Layers;
            return (
              <div
                key={s.category + s.name}
                className="glass group relative overflow-hidden rounded-2xl p-4 sm:p-5 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <div
                  className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition"
                  style={{
                    background: `linear-gradient(135deg, ${meta?.color ?? "var(--neon-pink)"}, transparent 60%)`,
                    WebkitMask:
                      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "xor",
                    padding: "1px",
                  }}
                />
                <div className="flex items-center gap-3">
                  <div
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                    style={{
                      background: `color-mix(in oklab, ${meta?.color ?? "var(--neon-pink)"} 20%, transparent)`,
                      color: meta?.color ?? "var(--neon-pink)",
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold truncate">{s.name}</div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground truncate">
                      {s.category}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Projects ------------------------------ */
function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="Real-world analytical, system design, and data projects"
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.id}
              className="glass group relative flex flex-col overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:neon-border-glow"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--neon-pink)] to-transparent opacity-60" />
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium text-muted-foreground">
                  {p.category}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {p.duration}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-5">
                <button
                  onClick={() => setSelected(p)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-semibold text-foreground transition hover:bg-white/10 group-hover:btn-neon"
                >
                  View Details & Links <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null;
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 fade-up"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-strong neon-border-glow relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-6 sm:p-8"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/5 hover:bg-white/10"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[var(--gradient-pink-purple)] px-3 py-1 text-[11px] font-semibold text-white">
            {project.category}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            {project.duration}
          </span>
        </div>
        <h3 className="mt-4 text-2xl font-bold leading-tight">{project.title}</h3>
        <p className="mt-3 text-sm sm:text-base text-muted-foreground">{project.description}</p>

        <div className="mt-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--neon-cyan)]">
            Tech Stack
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--neon-pink)]">
            Role & Contribution
          </div>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{project.role}</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon btn-neon-hover inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold"
            >
              {l.label} <ExternalLink className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------- Activities ----------------------------- */
function Activities() {
  return (
    <section id="activities" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="Beyond Projects"
          title="Activities & Extracurriculars"
          subtitle="A showcase of workshops, events, and academic activities I've participated in."
        />
        <div className="glass-strong group mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-3xl p-8 sm:p-10 transition hover:-translate-y-1 hover:neon-border-glow">
          <div className="flex items-start gap-5">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[var(--gradient-neon)] text-white shadow-[var(--shadow-neon-purple)]">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--neon-cyan)]">
                Archive
              </div>
              <h3 className="mt-1 text-xl sm:text-2xl font-bold">Explore Activities Archive</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-xl">
                Workshops, seminars, competitions and academic events — the full journey documented in
                one place.
              </p>
            </div>
          </div>
          <a
            href="https://canva.link/trkfodh16qpdoc8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon btn-neon-hover inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
          >
            Open Archive <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Contact ------------------------------ */
function Contact() {
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in name, email and message.");
      return;
    }
    setState("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setState("idle"), 2500);
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect & Collaborate"
          subtitle="Open to internships, collaborations, and interesting problems."
        />
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Details */}
          <div className="glass-strong rounded-3xl p-8">
            <h3 className="text-xl font-bold">Reach out directly</h3>
            <div className="mt-6 space-y-4">
              <ContactRow
                icon={Mail}
                label="Email"
                value="nitikalsosudd@gmail.com"
                href="mailto:nitikalsosudd@gmail.com"
              />
              <ContactRow icon={Phone} label="Phone" value="+66-90-283-6657" href="tel:+66902836657" />
              <ContactRow
                icon={MapPin}
                label="Address"
                value="70 Moo 4, Thang Khwang, Waeng Noi, Khon Kaen 40230, Thailand"
              />
            </div>
            <div className="mt-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--neon-cyan)]">
                Socials
              </div>
              <div className="mt-3 flex gap-3">
                <a
                  href="https://github.com/nitikal-msu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass grid h-12 w-12 place-items-center rounded-2xl transition hover:-translate-y-1 hover:text-[color:var(--neon-pink)]"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/นิติกาล-โสสุด-02b36b424"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass grid h-12 w-12 place-items-center rounded-2xl transition hover:-translate-y-1 hover:text-[color:var(--neon-cyan)]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="glass-strong rounded-3xl p-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field
                label="Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="Your name"
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                placeholder="you@example.com"
              />
            </div>
            <Field
              label="Subject"
              value={form.subject}
              onChange={(v) => setForm({ ...form, subject: v })}
              placeholder="What is this about?"
            />
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                maxLength={1000}
                placeholder="Tell me about your project or idea..."
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-[color:var(--neon-pink)] focus:ring-2 focus:ring-[color:var(--neon-pink)]/30 transition"
              />
            </div>
            <button
              type="submit"
              disabled={state !== "idle"}
              className="btn-neon btn-neon-hover inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold disabled:opacity-70"
            >
              {state === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
              {state === "success" && <CheckCircle2 className="h-4 w-4" />}
              {state === "idle" && <Send className="h-4 w-4" />}
              {state === "loading" ? "Sending..." : state === "success" ? "Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={type === "email" ? 255 : 100}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-[color:var(--neon-pink)] focus:ring-2 focus:ring-[color:var(--neon-pink)]/30 transition"
      />
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: any;
  label: string;
  value: string;
  href?: string;
}) {
  const Body = (
    <div className="flex items-start gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--gradient-pink-purple)] text-white shadow-[var(--shadow-neon-pink)]">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm font-medium break-words">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block rounded-xl transition hover:-translate-y-0.5">
      {Body}
    </a>
  ) : (
    <div>{Body}</div>
  );
}

/* ----------------------------- Footer ------------------------------- */
function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-4 px-4">
        <div className="font-mono text-sm neon-text">&lt;Nitikal.BA/&gt;</div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Nitikal Sosud. Crafted with data & neon.
        </div>
      </div>
    </footer>
  );
}

/* ------------------------- Section Heading -------------------------- */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">
      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--neon-cyan)]">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
        <span className="neon-text-pink">{title}</span>
      </h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
