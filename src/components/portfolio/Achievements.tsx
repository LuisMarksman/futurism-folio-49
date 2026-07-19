import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Medal, Award, FlaskConical, X } from "lucide-react";
import { SectionHeading } from "./ProjectsTimeline";

type Achievement = {
  icon: typeof Trophy;
  title: string;
  desc: string;
  year: string;
  link?: string;
  images?: string[];
};

const achievements: Achievement[] = [
  {
    icon: Trophy,
    title: "Top 10 Finalist — Hackaday National Hackathon",
    desc: "Selected as a Top 10 Finalist at the national-level hackathon organized by Hackaday in Pondicherry.",
    year: "2025",
    link: "https://www.linkedin.com/posts/parth-gupta-082048253_hackday-hackdaypondy-innovation-ugcPost-7370452567857782784-zxIT/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD556mIBPRUoDJXJdc3MbSBXaVolyNHiRNs",
  },
  {
    icon: Medal,
    title: "Winner — StarPitch 2.0, SMVIT College",
    desc: "Won StarPitch 2.0 at SMVIT College for presenting an innovative technology solution.",
    year: "2025",
    link: "https://www.linkedin.com/posts/parth-gupta-082048253_innovation-entrepreneurship-engineeringlife-ugcPost-7365448317293551616-Wdxu/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD556mIBPRUoDJXJdc3MbSBXaVolyNHiRNs",
  },
  {
    icon: FlaskConical,
    title: "District Science Project Competition — Winner",
    desc: "Won the district-level competition for the Automatic Vacuum Cleaner Robot — an innovative science & engineering project.",
    year: "2019",
    images: ["/images/vacuum-cleaner-2019.jpg", "/images/vacuum-cleaner-2019-2.jpg"],
  },
  {
    icon: Award,
    title: "District Science Project Competition — Winner",
    desc: "Won the district-level competition for the Ultrasonic Radar System — an innovative science & engineering project.",
    year: "2018",
    images: ["/images/radar-2018.jpg", "/images/radar-2018-2.jpg"],
  },
];

export const Achievements = () => {
  const [gallery, setGallery] = useState<{ title: string; images: string[] } | null>(null);

  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Achievements"
          title={<>Recognition &amp; <span className="text-gradient">milestones</span></>}
          subtitle="Moments that pushed the work — and the craft — forward."
        />

        <div className="mt-14 grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title + a.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative glass-strong rounded-2xl p-6 transition-all hover:scale-[1.02] hover:bg-white/[0.07]"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-brand opacity-0 group-hover:opacity-40 blur-lg transition-opacity -z-10" />
              <div className="flex items-start justify-between mb-4">
                <div className="size-12 rounded-xl bg-gradient-brand grid place-items-center shadow-[0_0_24px_hsl(var(--grad-2)/0.4)]">
                  <a.icon className="size-5 text-primary-foreground" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground bg-white/5 border border-white/10 rounded-full px-2.5 py-1">
                  {a.year}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              {a.link && (
                <a
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm text-gradient font-medium hover:underline"
                >
                  View event →
                </a>
              )}
              {a.images && (
                <button
                  onClick={() => setGallery({ title: `${a.title} (${a.year})`, images: a.images! })}
                  className="mt-4 inline-block text-sm text-gradient font-medium hover:underline"
                >
                  View event →
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {gallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md grid place-items-center p-4"
            onClick={() => setGallery(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative glass-strong rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setGallery(null)}
                aria-label="Close"
                className="absolute top-4 right-4 size-9 rounded-full bg-white/5 border border-white/10 grid place-items-center hover:bg-white/10 transition"
              >
                <X className="size-4" />
              </button>
              <h3 className="font-display text-xl font-semibold mb-5 pr-10">{gallery.title}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {gallery.images.map((src) => (
                  <div key={src} className="rounded-xl overflow-hidden bg-black/40 border border-white/10">
                    <img src={src} alt={gallery.title} className="w-full h-auto object-contain" />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
