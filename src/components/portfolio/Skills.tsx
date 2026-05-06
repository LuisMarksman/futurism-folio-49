import { motion } from "framer-motion";
import { Cpu, Brain, Radio, CircuitBoard, Hammer, Terminal } from "lucide-react";
import { SectionHeading } from "./ProjectsTimeline";

const groups = [
  {
    icon: Cpu,
    title: "Embedded Systems & Robotics",
    description: "Building real-world robotic and embedded solutions from firmware to hardware integration.",
    skills: ["Embedded C", "STM32", "ESP32", "Arduino", "ESP8266", "Motor Control", "Encoders", "Sensors", "PWM", "I2C", "SPI", "UART", "ROS2"],
  },
  {
    icon: Brain,
    title: "AI / Machine Learning",
    description: "Developing ML models, Edge AI systems, and practical AI tools for real applications.",
    skills: ["Python", "PyTorch", "Machine Learning", "Deep Learning", "Edge AI", "Local ML Models", "Cloud ML Models", "AI Agents", "OpenCV", "Model Deployment"],
  },
  {
    icon: Radio,
    title: "IoT & Connected Systems",
    description: "Connecting devices, sensors, and dashboards for real-time data flow and monitoring.",
    skills: ["MQTT", "Cloud Integration", "Sensor Logging", "Google Sheets Automation", "Telemetry", "Remote Monitoring", "IoT Systems"],
  },
  {
    icon: CircuitBoard,
    title: "Hardware & Electronics",
    description: "Designing, assembling, and debugging electronic systems and embedded prototypes.",
    skills: ["Electronics", "Soldering", "PCB Design", "Debugging", "Microcontrollers", "Microprocessor Boards", "Raspberry Pi", "Jetson Nano"],
  },
  {
    icon: Hammer,
    title: "CAD / Fabrication / Mechanical",
    description: "Designing and building physical systems with manufacturing and prototyping skills.",
    skills: ["Fusion 360", "SolidEdge", "3D Printing", "CNC Programming", "Lathe Operation", "Woodworking"],
  },
  {
    icon: Terminal,
    title: "Software & Development Tools",
    description: "Comfortable working across software, systems, and deployment workflows.",
    skills: ["Linux", "Git", "GitHub", "Deployment", "Vercel", "Render", "GitHub Pages", "GCP", "Cloudflare Tunnel"],
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
