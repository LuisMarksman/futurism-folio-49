import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "./ProjectsTimeline";

type Contribution = string | { text: string; link?: { url: string; label: string } };

const experiences: {
  company: string;
  role: string;
  duration: string;
  contributions: Contribution[];
  tech: string[];
}[] = [
  {
    company: "Embedded Systems Developer",
    role: "Embedded Systems Developer (Startup)",
    duration: "October 2025",
    contributions: [
      "Developed a portable Network Attached Storage (NAS) device using Raspberry Pi",
      "Implemented wireless file sharing and storage functionality",
      "Worked on hardware integration, Linux configuration, and networking",
    ],
    tech: ["Raspberry Pi", "Linux", "Networking", "Python"],
  },
  {
    company: "Arogya AI Smartwatch",
    role: "Product Prototyping",
    duration: "July 2025",
    contributions: [
      "Prototyped the Arogya AI Smartwatch, a wearable concept focused on healthcare",
      "Contributed to product design, hardware planning, and AI feature ideation",
      {
        text: "Participated in pitching the concept to Eli Lilly",
        link: {
          url: "https://www.linkedin.com/posts/lilly-india_wearelilly-activity-7350773663308079105-SyS0?utm_source=share&utm_medium=member_android&rcm=ACoAAD556mIBPRUoDJXJdc3MbSBXaVolyNHiRNs",
          label: "(view event)",
        },
      },
    ],
    tech: ["Wearables", "Healthcare AI", "Product Design", "Prototyping"],
  },
  {
    company: "Python Instructor",
    role: "Python Instructor",
    duration: "February 2025",
    contributions: [
      "Taught Python programming to beginners",
      "Created lesson plans and explained programming fundamentals",
      "Mentored students through coding exercises and projects",
    ],
    tech: ["Python", "Teaching", "Mentorship"],
  },
  {
    company: "AI News Verification System",
    role: "AI/ML Developer",
    duration: "December 2024",
    contributions: [
      "Developed an AI-powered news classification and verification system",
      "Integrated machine learning with external APIs for news validation",
      "Built an interactive interface for news analysis and fact checking",
    ],
    tech: ["Python", "Machine Learning", "APIs", "NLP"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="container relative">
        <SectionHeading
          eyebrow="Experience"
          title={<>Where I've <span className="text-gradient">shipped</span></>}
          subtitle="A track record of taking ideas from breadboard to production."
        />

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[hsl(var(--grad-1)/0.6)] via-[hsl(var(--grad-2)/0.6)] to-[hsl(var(--grad-3)/0.6)]" />

            <div className="space-y-8">
              {experiences.map((e, i) => (
                <motion.div
                  key={e.company}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative pl-14 md:pl-20"
                >
                  <div className="absolute left-0 md:left-2 top-2">
                    <div className="relative size-9 md:size-9 rounded-xl bg-gradient-brand grid place-items-center shadow-[0_0_24px_hsl(var(--grad-2)/0.5)]">
                      <Briefcase className="size-4 text-primary-foreground" />
                    </div>
                  </div>

                  <div className="glass-strong rounded-2xl p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h3 className="font-display text-xl font-semibold">{e.role}</h3>
                      <span className="text-xs font-medium text-muted-foreground bg-white/5 border border-white/10 rounded-full px-3 py-1">
                        {e.duration}
                      </span>
                    </div>
                    <p className="text-gradient font-semibold mb-4">{e.company}</p>
                    <ul className="space-y-1.5 mb-4">
                      {e.contributions.map((c, ci) => {
                        const isObj = typeof c !== "string";
                        const text = isObj ? c.text : c;
                        const link = isObj ? c.link : undefined;
                        return (
                          <li key={ci} className="flex gap-2 text-sm text-foreground/85">
                            <span className="mt-1.5 size-1 rounded-full bg-gradient-brand shrink-0" />
                            <span>
                              {text}
                              {link && (
                                <>
                                  {" "}
                                  <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gradient font-medium hover:underline"
                                  >
                                    {link.label}
                                  </a>
                                </>
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {e.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-medium rounded-full px-2.5 py-1 bg-white/5 border border-white/10 text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
