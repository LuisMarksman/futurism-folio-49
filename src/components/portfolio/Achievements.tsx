import { motion } from "framer-motion";
import { Trophy, Medal, Star, Award, Rocket, Users } from "lucide-react";
import { SectionHeading } from "./ProjectsTimeline";

const stats = [
  { value: "20+", label: "Projects Shipped" },
  { value: "5", label: "Hackathons Won" },
  { value: "8+", label: "Happy Clients" },
  { value: "3", label: "Patents Filed" },
];

const achievements = [
  {
    icon: Trophy,
    title: "Smart India Hackathon — Winner",
    desc: "Built an autonomous disaster-response drone system; won national finals among 1,200+ teams.",
    year: "2024",
  },
  {
    icon: Medal,
    title: "IEEE Robotics Symposium — Top 10",
    desc: "Selected among top 10 papers for work on edge-deployed swarm coordination algorithms.",
    year: "2023",
  },
  {
    icon: Award,
    title: "Best Embedded Project",
    desc: "Awarded best embedded systems project for industrial predictive maintenance platform.",
    year: "2023",
  },
  {
    icon: Rocket,
    title: "TechCrunch Disrupt Finalist",
    desc: "Voice-controlled robotic arm featured in startup battlefield as a finalist.",
    year: "2024",
  },
  {
    icon: Star,
    title: "Open Source Contributor",
    desc: "Active contributor to ROS2 ecosystem with 4 merged packages and 1.2k+ stars combined.",
    year: "2022",
  },
  {
    icon: Users,
    title: "Speaker — RoboConf India",
    desc: "Delivered keynote on TinyML for low-power robotics to an audience of 800+ engineers.",
    year: "2025",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Achievements"
          title={<>Recognition &amp; <span className="text-gradient">milestones</span></>}
          subtitle="Moments that pushed the work — and the craft — forward."
        />

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass rounded-2xl p-5 text-center"
            >
              <div className="font-display text-3xl sm:text-4xl font-bold text-gradient">
                {s.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement cards */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
