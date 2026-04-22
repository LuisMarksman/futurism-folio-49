import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "./ProjectsTimeline";

const experiences = [
  {
    company: "Quantum Robotics Labs",
    role: "Robotics & AI Engineer",
    duration: "2024 — Present",
    contributions: [
      "Lead engineer for autonomous swarm coordination platform",
      "Deployed edge-AI inference pipelines on Jetson Orin clusters",
      "Mentored 3 junior engineers across firmware & ML",
    ],
    tech: ["ROS2", "PyTorch", "Jetson", "Python", "C++"],
  },
  {
    company: "EdgeSense IoT",
    role: "Embedded Systems Engineer",
    duration: "2022 — 2024",
    contributions: [
      "Designed low-power LoRa mesh nodes deployed across 12 sites",
      "Built MQTT → InfluxDB telemetry stack handling 5M points/day",
      "Reduced node BOM cost by 38% through PCB redesign",
    ],
    tech: ["ESP32", "Embedded C", "LoRa", "MQTT", "KiCad"],
  },
  {
    company: "RoboCore Automation",
    role: "Robotics Intern → Engineer",
    duration: "2020 — 2022",
    contributions: [
      "Developed inverse kinematics solver for 6-DOF arm",
      "Integrated computer vision pipeline for pick-and-place",
      "Authored internal ROS package adopted across 4 teams",
    ],
    tech: ["ROS", "Python", "OpenCV", "STM32"],
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
                      {e.contributions.map((c) => (
                        <li key={c} className="flex gap-2 text-sm text-foreground/85">
                          <span className="mt-1.5 size-1 rounded-full bg-gradient-brand shrink-0" />
                          {c}
                        </li>
                      ))}
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
