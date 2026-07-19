import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "./ProjectsTimeline";

const testimonials = [
  {
    name: "Ananya Kapoor",
    role: "CTO, EdgeSense IoT",
    avatar: "https://i.pravatar.cc/120?img=47",
    text: "Parth has a rare blend of firmware depth and ML intuition. He shipped our predictive maintenance platform faster than any vendor we'd worked with — and it's still running flawlessly two years on.",
  },
  {
    name: "Archit Nigam",
    role: "Founder & Head of Product Development, Aeon Crafts",
    avatar: "/images/archit-nigam.png",
    text: "Parth worked with us as a Hardware/Firmware Engineer for six months, taking a consumer tech device from prototype to MVP — a wireless storage solution built on deep MCU/SoC, BLE/WLAN and firmware expertise. He's reliable, detail-oriented and forever hungry to learn. I'm confident he'll add value to any team or project he joins.",
  },
  {
    name: "Sara Lin",
    role: "Founder, AgriPulse",
    avatar: "https://i.pravatar.cc/120?img=32",
    text: "He took a vague idea about smart farming and turned it into a production-grade LoRa network running on solar nodes. End-to-end ownership — hardware, firmware, app.",
  },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % testimonials.length);
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[i];

  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              What people <span className="text-gradient">say</span>
            </>
          }
        />

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative glass-strong rounded-3xl p-8 sm:p-12 overflow-hidden">
            <Quote className="absolute top-6 right-6 size-16 text-foreground/[0.04]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="font-display text-lg sm:text-2xl text-foreground/90 leading-relaxed">"{t.text}"</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-brand blur-md opacity-60" />
                    <img
                      src={t.avatar}
                      alt={t.name}
                      loading="lazy"
                      width={56}
                      height={56}
                      className="relative size-14 rounded-full object-cover ring-2 ring-background"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="size-11 grid place-items-center rounded-full glass-strong hover:bg-white/10 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="size-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-gradient-brand" : "w-1.5 bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="size-11 grid place-items-center rounded-full glass-strong hover:bg-white/10 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
