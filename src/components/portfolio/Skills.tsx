import { motion } from "framer-motion";
import { Code2, Cpu, Bot, Brain, CircuitBoard, Hammer, Factory, Terminal, Sparkles } from "lucide-react";
import { SectionHeading } from "./ProjectsTimeline";

const groups = [
  {
    icon: Code2,
    title: "Programming",
    description: "Writing performant code across embedded, application, and industrial domains.",
    skills: ["Embedded C", "Python", "Java", "FANUC CNC Programming"],
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    description: "Designing firmware and low-level systems on a wide range of microcontrollers.",
    skills: ["STM32", "ESP32", "Arduino", "Raspberry Pi", "ATtiny", "ESP8266"],
  },
  {
    icon: Bot,
    title: "Robotics",
    description: "Building intelligent robots — from motion control to full autonomous stacks.",
    skills: ["ROS 2", "Gazebo", "Inverse Kinematics", "PID Control", "Robot Arms", "Mobile Robotics"],
  },
  {
    icon: Brain,
    title: "Computer Vision & AI",
    description: "Deploying vision, edge AI, and LLM-powered agents for real-world tasks.",
    skills: ["OpenCV", "Edge AI", "AI Agents", "LLM Integration"],
  },
  {
    icon: CircuitBoard,
    title: "Electronics",
    description: "Prototyping and hand-assembling reliable hardware from schematic to solder.",
    skills: ["PCB Prototyping", "Soldering", "Sensor Integration", "Embedded Hardware Design"],
  },
  {
    icon: Hammer,
    title: "Mechanical",
    description: "Designing and fabricating mechanical parts and assemblies for robots and prototypes.",
    skills: ["CAD", "3D Printing", "Mechanical Assembly", "Woodworking"],
  },
  {
    icon: Factory,
    title: "Manufacturing & Fabrication",
    description: "Hands-on experience with traditional machining and metal casting workflows.",
    skills: ["Lathe Machine Operation", "Mold Making", "Furnace Operations"],
  },
  {
    icon: Terminal,
    title: "Development Tools",
    description: "Comfortable across the developer toolchain for embedded and systems work.",
    skills: ["Ubuntu / Linux", "Git", "PlatformIO", "STM32CubeIDE", "Arduino IDE"],
  },
  {
    icon: Sparkles,
    title: "Currently Learning",
    description: "Actively exploring the frontier of AI, agents, and on-device intelligence.",
    skills: ["Physical AI", "Local LLMs", "LLM Deployment & Optimization", "Agentic AI"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title={<>The <span className="text-gradient">stack</span> I build with</>}
          subtitle="From low-level firmware to neural networks — a curated toolkit for engineering and making."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative glass-strong rounded-3xl p-7 lg:p-8 hover:bg-white/[0.06] transition-colors flex flex-col"
            >
              <div className="absolute -inset-px rounded-3xl bg-gradient-brand opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10" />

              <div className="flex items-start gap-4 mb-3">
                <div className="size-12 shrink-0 rounded-2xl bg-gradient-brand-soft border border-white/10 grid place-items-center">
                  <g.icon className="size-5 text-foreground" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-semibold leading-tight">{g.title}</h3>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-prose">
                {g.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-medium rounded-full px-3 py-1.5 bg-white/5 border border-white/10 text-foreground/85 hover:border-[hsl(var(--grad-2)/0.5)] hover:bg-gradient-brand-soft hover:text-foreground transition-all cursor-default"
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
