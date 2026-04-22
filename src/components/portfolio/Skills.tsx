import { motion } from "framer-motion";
import { Code2, Cpu, Wrench, Palette } from "lucide-react";
import { SectionHeading } from "./ProjectsTimeline";

const groups = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["Python", "Embedded C", "C++", "Assembly", "TypeScript", "MATLAB"],
  },
  {
    icon: Cpu,
    title: "Hardware & Embedded",
    skills: ["STM32", "ESP32", "Jetson Nano", "Raspberry Pi", "Arduino", "PCB Design"],
  },
  {
    icon: Wrench,
    title: "Tools & Tech",
    skills: ["ROS2", "PyTorch", "TensorFlow", "OpenCV", "MQTT", "Docker", "Linux", "Git"],
  },
  {
    icon: Palette,
    title: "Design",
    skills: ["KiCad", "Fusion 360", "SolidWorks", "Figma", "Altium"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title={<>The <span className="text-gradient">stack</span> I build with</>}
          subtitle="From low-level firmware to neural networks — a full-stack robotics toolkit."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative glass-strong rounded-3xl p-7 hover:bg-white/[0.06] transition-colors"
            >
              <div className="absolute -inset-px rounded-3xl bg-gradient-brand opacity-0 group-hover:opacity-30 blur-xl transition-opacity -z-10" />
              <div className="flex items-center gap-3 mb-5">
                <div className="size-11 rounded-xl bg-gradient-brand-soft border border-white/10 grid place-items-center">
                  <g.icon className="size-5 text-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="text-sm font-medium rounded-full px-3.5 py-1.5 bg-white/5 border border-white/10 text-foreground/90 hover:border-[hsl(var(--grad-2)/0.5)] hover:bg-gradient-brand-soft transition-all cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
