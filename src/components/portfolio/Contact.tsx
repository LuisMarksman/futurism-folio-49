import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from "./BrandIcons";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { SectionHeading } from "./ProjectsTimeline";

const socials = [
  { icon: GithubIcon, label: "GitHub", href: "https://github.com" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: TwitterIcon, label: "Twitter / X", href: "https://twitter.com" },
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com" },
];

export const Contact = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! I'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's <span className="text-gradient">build</span> something</>}
          subtitle="Have a robot that needs a brain? An IoT idea? A research collaboration? Drop a line."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-strong rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-10 rounded-xl bg-gradient-brand-soft border border-white/10 grid place-items-center">
                  <Mail className="size-4" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Email
                </div>
              </div>
              <a href="mailto:parth@example.com" className="font-display text-lg hover:text-gradient transition">
                parth@example.com
              </a>
            </div>

            <div className="glass-strong rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-10 rounded-xl bg-gradient-brand-soft border border-white/10 grid place-items-center">
                  <MapPin className="size-4" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Based in
                </div>
              </div>
              <div className="font-display text-lg">Bengaluru, India</div>
            </div>

            <div className="glass-strong rounded-2xl p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Find me online
              </div>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="group size-11 grid place-items-center rounded-xl bg-white/5 border border-white/10 hover:bg-gradient-brand hover:border-transparent hover:shadow-[0_0_20px_hsl(var(--grad-2)/0.5)] transition-all"
                  >
                    <s.icon className="size-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={onSubmit}
            className="lg:col-span-3 glass-strong rounded-3xl p-7 sm:p-9 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name">
                <input
                  required
                  name="name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[hsl(var(--grad-2)/0.6)] focus:ring-2 focus:ring-[hsl(var(--grad-2)/0.2)] transition"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Email">
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[hsl(var(--grad-2)/0.6)] focus:ring-2 focus:ring-[hsl(var(--grad-2)/0.2)] transition"
                  placeholder="you@domain.com"
                />
              </Field>
            </div>
            <Field label="Message">
              <textarea
                required
                name="message"
                rows={6}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[hsl(var(--grad-2)/0.6)] focus:ring-2 focus:ring-[hsl(var(--grad-2)/0.2)] transition resize-none"
                placeholder="Tell me about your project, idea, or question…"
              />
            </Field>
            <button
              type="submit"
              disabled={sending}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_hsl(var(--grad-2)/0.5)] hover:shadow-[0_0_45px_hsl(var(--grad-2)/0.7)] transition-all hover:-translate-y-0.5 disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send Message"}
              <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.form>
        </div>
      </div>

      <footer className="container mt-24 pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Parth. Built with curiosity and caffeine.
      </footer>
    </section>
  );
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}
