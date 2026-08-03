import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { SectionHeading } from "./ProjectsTimeline";
import { featured, type FeaturedMedia, type FeaturedProject, type SubProject } from "@/data/featured";

export const FeaturedProjects = () => {
  return (
    <section id="featured" className="relative py-24 sm:py-32">
      {/* soft brand wash behind the section */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container">
        <SectionHeading
          eyebrow="Featured Work"
          title={
            <>
              Flagship <span className="text-gradient">Projects</span>
            </>
          }
          subtitle="The builds I'd point to first — explore them here, then dive into the full 2017 → 2026 timeline below."
        />

        <div className="mt-16 sm:mt-20 space-y-14 lg:space-y-24">
          {featured.map((p, i) => (
            <FeaturedCard key={p.id} project={p} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

function FeaturedCard({ project, flip }: { project: FeaturedProject; flip: boolean }) {
  const isCyan = project.accent === "cyan";
  const glow = isCyan ? "bg-[hsl(var(--grad-3)/0.16)]" : "bg-[hsl(var(--grad-2)/0.18)]";
  const hoverShadow = isCyan
    ? "hover:shadow-[0_0_60px_hsl(var(--grad-3)/0.2)]"
    : "hover:shadow-[0_0_60px_hsl(var(--grad-2)/0.22)]";

  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative glass-strong rounded-[1.75rem] border border-white/10 p-5 sm:p-8 lg:p-10 overflow-hidden transition-shadow duration-500 ${hoverShadow}`}
    >
      <div
        className={`pointer-events-none absolute -top-32 ${flip ? "-left-32" : "-right-32"} w-[28rem] h-[28rem] rounded-full blur-3xl ${glow}`}
      />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
          {project.subProjects ? (
            <SubProjectShowcase items={project.subProjects} />
          ) : project.gallery ? (
            <DiagramGallery media={project.gallery} />
          ) : null}
        </div>

        <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
          <ProjectContent project={project} />
        </div>
      </div>
    </motion.article>
  );
}

function ProjectContent({ project }: { project: FeaturedProject }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <span className="font-display text-sm font-bold text-gradient">{project.index}</span>
        <span className="h-px w-8 bg-gradient-brand" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Featured Project
        </span>
      </div>

      <h3 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
        <span className="text-gradient">{project.name}</span>
      </h3>
      {project.expansion && (
        <p className="mt-2 text-xs sm:text-sm font-medium uppercase tracking-wider text-muted-foreground">
          {project.expansion}
        </p>
      )}

      {project.statusLabel && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider rounded-full px-2.5 py-1 bg-gradient-brand-soft border border-[hsl(var(--grad-2)/0.4)] text-foreground">
          <span className="size-1.5 rounded-full bg-gradient-brand animate-glow-pulse" />
          {project.statusLabel}
        </span>
      )}

      <p className="mt-5 text-lg text-foreground/90 font-medium leading-snug">{project.tagline}</p>
      <p className="mt-3 text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
        {project.description}
      </p>

      <ul className="mt-6 space-y-2.5">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-3 text-sm text-foreground/85">
            <span className="mt-1.5 size-1.5 rounded-full bg-gradient-brand shrink-0" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-medium rounded-full px-3 py-1.5 bg-white/5 border border-white/10 text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_hsl(var(--grad-2)/0.4)] hover:shadow-[0_0_36px_hsl(var(--grad-2)/0.6)] transition-shadow"
          >
            <GithubIcon className="size-4" />
            View on GitHub
          </a>
        )}
        {project.timelineHref && (
          <a
            href={project.timelineHref}
            className="group/link inline-flex items-center gap-2 rounded-xl glass-strong px-5 py-3 text-sm font-semibold text-foreground hover:bg-white/10 transition-colors"
          >
            Full story in timeline
            <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
          </a>
        )}
      </div>
    </div>
  );
}

function SubProjectShowcase({ items }: { items: SubProject[] }) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <Sparkles className="size-3.5 text-gradient" />
        {items.length} sub-systems, one robot
      </div>
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {items.map((item, i) => (
          <SubTile key={item.title} item={item} large={i === 0} />
        ))}
      </div>
    </div>
  );
}

function SubTile({ item, large }: { item: SubProject; large: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group/tile relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-black/50 ${
        large ? "col-span-2 aspect-[16/10]" : "aspect-[4/5] sm:aspect-square"
      }`}
    >
      <MediaView media={item.media} className="absolute inset-0 w-full h-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
      {item.inProgress && (
        <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-wider rounded-full px-2 py-0.5 glass text-foreground/90">
          <span className="size-1 rounded-full bg-gradient-brand animate-glow-pulse" />
          WIP
        </span>
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-gradient">{item.tag}</div>
        <div className="font-display text-sm sm:text-base font-semibold text-foreground leading-tight">
          {item.title}
        </div>
        {large && <p className="mt-1 max-w-md text-xs text-muted-foreground">{item.desc}</p>}
      </div>
    </motion.div>
  );
}

function DiagramGallery({ media }: { media: FeaturedMedia[] }) {
  const [active, setActive] = useState(0);
  const current = media[active];
  return (
    <div>
      <motion.div
        key={active}
        initial={{ opacity: 0.35 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-[#0d1117]"
      >
        {current.type === "video" ? (
          <video
            src={current.src}
            className="w-full h-auto max-h-[440px] object-contain bg-black"
            autoPlay
            muted
            loop
            playsInline
            controls
            aria-label={current.label}
          />
        ) : current.type === "embed" ? (
          <iframe
            src={current.src}
            title={current.label ?? "Project demo"}
            allow="autoplay; fullscreen"
            allowFullScreen
            loading="lazy"
            className="w-full aspect-video"
          />
        ) : (
          <img
            src={current.src}
            alt={current.label ?? "Project diagram"}
            loading="lazy"
            className="w-full h-auto max-h-[440px] object-contain"
          />
        )}
      </motion.div>
      <div className="mt-3 flex flex-wrap gap-2">
        {media.map((m, i) => (
          <button
            key={m.src}
            onClick={() => setActive(i)}
            className={`text-xs font-medium rounded-lg px-3 py-2 border transition-colors ${
              i === active
                ? "bg-gradient-brand-soft border-[hsl(var(--grad-3)/0.5)] text-foreground"
                : "bg-white/5 border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/10"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function MediaView({ media, className }: { media: FeaturedMedia; className?: string }) {
  if (media.type === "video") {
    return (
      <video
        src={media.src}
        className={className}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={media.label}
      />
    );
  }
  if (media.type === "embed") {
    return (
      <iframe
        src={media.src}
        title={media.label ?? "Project demo"}
        allow="autoplay; fullscreen"
        allowFullScreen
        loading="lazy"
        className={className}
      />
    );
  }
  return <img src={media.src} alt={media.label ?? ""} loading="lazy" className={className} />;
}
