import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { ParticlesBg } from "./ParticlesBg";

const ROTATING = ["BUILDER", "CREATOR", "INNOVATOR", "TINKERER"];

const techIcons = [
  { label: "Linux", color: "from-blue-400 to-cyan-400" },
  { label: "Embedded C", color: "from-purple-400 to-pink-400" },
  { label: "Edge AI", color: "from-cyan-400 to-blue-500" },
  { label: "Python", color: "from-yellow-400 to-orange-400" },
  { label: "ROS", color: "from-blue-500 to-purple-500" },
  { label: "STM32", color: "from-pink-400 to-purple-500" },
  { label: "PyTorch", color: "from-orange-400 to-red-500" },
  { label: "ESP32", color: "from-cyan-400 to-teal-400" },
];

export const Hero = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROTATING.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      <ParticlesBg />
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[hsl(var(--grad-1)/0.2)] blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[hsl(var(--grad-2)/0.25)] blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight"
          >
            Hello, I'm <span className="text-gradient">Parth</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground/90"
          >
            Robotics &amp; AI Engineer{" "}
            <span className="block sm:inline mt-2 sm:mt-0">
              <span className="text-muted-foreground text-xl sm:text-2xl md:text-3xl">/ </span>
              <motion.span
                key={ROTATING[idx]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-gradient inline-block"
              >
                {ROTATING[idx]}
              </motion.span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Building intelligent systems at the intersection of{" "}
            <span className="text-foreground font-medium">Robotics</span>,{" "}
            <span className="text-foreground font-medium">IoT</span> and{" "}
            <span className="text-foreground font-medium">machine learning</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_hsl(var(--grad-2)/0.5)] hover:shadow-[0_0_45px_hsl(var(--grad-2)/0.7)] transition-all hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl glass-strong px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-white/10 transition-colors"
            >
              <Mail className="size-4" /> Contact Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-white/20 transition-colors"
            >
              <Download className="size-4" /> Resume
            </a>
          </motion.div>

          {/* Floating tech chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 relative h-20 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]"
          >
            <div className="flex gap-3 animate-scroll-x w-max">
              {[...techIcons, ...techIcons].map((t, i) => (
                <div
                  key={i}
                  className="glass rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap"
                >
                  <span className={`bg-gradient-to-r ${t.color} bg-clip-text text-transparent font-semibold`}>
                    {t.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
