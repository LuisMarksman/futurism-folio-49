import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { projects } from "@/data/projects";

export const ProjectsTimeline = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [visible, setVisible] = useState(4);

  const shown = projects.slice(0, visible);
  const hasMore = visible < projects.length;

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Project Timeline"
          title={<>A journey from <span className="text-gradient">2017 → 2026</span></>}
          subtitle="Tap any node to explore the full story behind each build."
        />

        <div className="relative mt-20">
          {/* Center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-[hsl(var(--grad-2)/0.6)] to-transparent" />
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-[3px] bg-gradient-to-b from-transparent via-[hsl(var(--grad-1)/0.3)] to-transparent blur-sm" />

          <div className="space-y-12 md:space-y-20">
            {shown.map((p, i) => {
              const isLeft = i % 2 === 0;
              const isOpen = openId === p.id;
              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="relative"
                >
                  {/* Node */}
                  <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 z-10">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-brand blur-md opacity-80 animate-glow-pulse" />
                      <div className="relative size-5 rounded-full bg-gradient-brand ring-4 ring-background" />
                    </div>
                  </div>

                  <div
                    className={`pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ${
                      isLeft ? "" : "md:[&>*:first-child]:order-2"
                    }`}
                  >
                    <div className={`${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <ProjectCard
                        project={p}
                        isOpen={isOpen}
                        onToggle={() => setOpenId(isOpen ? null : p.id)}
                        align={isLeft ? "right" : "left"}
                      />
                    </div>
                    <div className="hidden md:block" />
                  </div>

                  {/* Expanded panel — full width, below row */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden mt-6 pl-16 md:pl-0"
                      >
                        <ExpandedDetail project={p} onClose={() => setOpenId(null)} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {hasMore && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setVisible((v) => Math.min(v + 4, projects.length))}
              className="group inline-flex items-center gap-2 rounded-xl glass-strong px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-white/10 transition-colors"
            >
              <Sparkles className="size-4 text-gradient" />
              Load More Projects
              <span className="text-muted-foreground">({projects.length - visible} more)</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

function ProjectCard({
  project,
  isOpen,
  onToggle,
  align,
}: {
  project: typeof projects[number];
  isOpen: boolean;
  onToggle: () => void;
  align: "left" | "right";
}) {
  return (
    <button
      onClick={onToggle}
      className={`group relative w-full text-left glass-strong rounded-2xl p-6 transition-all hover:bg-white/[0.07] ${
        isOpen ? "ring-1 ring-[hsl(var(--grad-2)/0.5)] shadow-[0_0_40px_hsl(var(--grad-2)/0.25)]" : ""
      }`}
    >
      <div className={`flex items-baseline gap-3 mb-3 ${align === "right" ? "md:justify-end" : ""}`}>
        <span className="font-display text-3xl font-bold text-gradient">{project.year}</span>
        {project.month && (
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {project.month}
          </span>
        )}
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
      <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
        {project.title}
        {project.inProgress && (
          <span className="ml-2 align-middle inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider rounded-full px-2 py-0.5 bg-gradient-brand-soft border border-[hsl(var(--grad-2)/0.4)] text-foreground">
            <span className="size-1.5 rounded-full bg-gradient-brand animate-glow-pulse" />
            In Progress
          </span>
        )}
      </h3>
      {project.partOf && (
        <p className={`mt-1 text-xs text-gradient font-semibold ${align === "right" ? "md:text-right" : ""}`}>
          Part of: {project.partOf}
        </p>
      )}
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{project.shortDesc}</p>
      <div className={`mt-4 flex flex-wrap gap-2 ${align === "right" ? "md:justify-end" : ""}`}>
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="text-xs font-medium rounded-full px-2.5 py-1 bg-white/5 border border-white/10 text-muted-foreground"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="text-xs font-medium rounded-full px-2.5 py-1 bg-white/5 border border-white/10 text-muted-foreground">
            +{project.tech.length - 4}
          </span>
        )}
      </div>
      <div className={`mt-5 inline-flex items-center gap-1.5 text-xs font-medium ${align === "right" ? "md:float-right" : ""}`}>
        <span className="text-gradient">{isOpen ? "Hide details" : "View details"}</span>
        <span className={`transition-transform ${isOpen ? "rotate-90" : ""}`}>→</span>
      </div>
    </button>
  );
}

function ExpandedDetail({
  project,
  onClose,
}: {
  project: typeof projects[number];
  onClose: () => void;
}) {
  return (
    <div className="relative glass-strong rounded-3xl p-6 sm:p-8 border border-[hsl(var(--grad-2)/0.3)]">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Close"
      >
        <X className="size-4" />
      </button>

      <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
        <div className="lg:col-span-2 space-y-4">
          {(project.embeds ?? []).map((src, idx) => {
            const openUrl = src.replace("/preview", "/view");
            return (
              <div key={"embed-" + src + idx} className="space-y-2">
                <div className="relative aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_0_50px_hsl(var(--grad-2)/0.25)] bg-black/40">
                  <iframe
                    src={src}
                    title={`${project.title} demo ${idx + 1}`}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <a
                  href={openUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-gradient hover:opacity-80 transition-opacity"
                >
                  ▶ Open video in new tab (full controls)
                </a>
              </div>
            );
          })}
          {(project.videos ?? []).map((src, idx) => (
            <div
              key={"vid-" + src + idx}
              className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_0_50px_hsl(var(--grad-2)/0.25)] bg-black/40"
            >
              <video
                src={src}
                controls
                playsInline
                loop
                muted
                className="w-full h-auto max-h-[420px] object-contain"
              />
            </div>
          ))}
          {(project.images && project.images.length > 0
            ? project.images
            : (project.videos && project.videos.length > 0) ||
              (project.embeds && project.embeds.length > 0)
            ? []
            : [project.image]
          ).map((src, idx) => (
            <div
              key={src + idx}
              className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_0_50px_hsl(var(--grad-2)/0.25)] bg-black/40"
            >
              <img
                src={src}
                alt={`${project.title} ${idx + 1}`}
                loading="lazy"
                className="w-full h-auto max-h-[420px] object-contain"
              />
            </div>
          ))}
        </div>

        <div className="lg:col-span-3 space-y-5">
          <div>
            <span className="font-display text-sm text-gradient font-semibold">
              {project.month ? `${project.month} ${project.year}` : project.year}
            </span>
            <h4 className="font-display text-2xl sm:text-3xl font-bold mt-1">{project.title}</h4>
          </div>

          <p className="text-muted-foreground leading-relaxed">{project.description}</p>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              The Problem
            </h5>
            <p className="text-sm text-foreground/85">{project.problem}</p>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Key Features
            </h5>
            <ul className="grid sm:grid-cols-2 gap-2">
              {project.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-foreground/85">
                  <span className="mt-1.5 size-1.5 rounded-full bg-gradient-brand shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Tech Stack
            </h5>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium rounded-full px-3 py-1.5 bg-gradient-brand-soft border border-white/10 text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {project.github && (
            <div className="pt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_hsl(var(--grad-2)/0.4)] hover:shadow-[0_0_36px_hsl(var(--grad-2)/0.6)] transition-shadow"
              >
                <GithubIcon className="size-4" />
                View GitHub Repo
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto"
    >
      <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gradient mb-4">
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base sm:text-lg text-muted-foreground">{subtitle}</p>
      )}
    </motion.div>
  );
}
