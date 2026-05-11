import { LeadForm } from "./LeadForm";
import { HeroCarousel } from "./HeroCarousel";
import { Phone, Award, Users, TrendingUp, Sparkles, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Rotating hero image carousel with KIIT visuals */}
      <HeroCarousel />

      {/* Floating accent orbs */}
      <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-primary-glow/20 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-primary-foreground"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-glow"
            >
              <Sparkles className="h-3.5 w-3.5 animate-pulse" /> NIRF Rank 36 — Engineering 2026
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight"
            >
              Get B.Tech Admission in{" "}
              <span className="text-gradient inline-block">KIIT University 2026</span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 text-primary-foreground/95">— Direct Seat Available</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="mt-6 text-lg sm:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed"
            >
              Trusted by <strong className="text-accent-glow">500+ students</strong> from Bihar,
              Jharkhand, West Bengal &amp; Odisha. Call SS Education now for guaranteed counselling support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="tel:+919933085333"
                className="group inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-accent)] px-7 py-4 text-base font-bold text-accent-foreground shadow-[var(--shadow-glow)] hover:scale-[1.04] hover:-translate-y-0.5 transition-all duration-300 animate-glow-pulse"
              >
                <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                Call Now: +91 99330 85333
              </a>
              <a
                href="https://wa.me/919933085333"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl px-7 py-4 text-base font-semibold text-white hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 shadow-[var(--shadow-elegant)]"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                WhatsApp Us
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.15, delayChildren: 0.8 } },
              }}
              className="mt-12 grid grid-cols-3 gap-4 max-w-xl"
            >
              {[
                { icon: TrendingUp, value: "₹53 LPA", label: "Highest Pkg" },
                { icon: Users, value: "700+", label: "Recruiters" },
                { icon: Award, value: "3,800+", label: "B.Tech Seats" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="flex items-center gap-3"
                >
                  <div className="rounded-lg glass p-2.5 group-hover:scale-110 transition-transform">
                    <item.icon className="h-5 w-5 text-accent-glow" />
                  </div>
                  <div>
                    <div className="text-xl font-bold">{item.value}</div>
                    <div className="text-xs text-primary-foreground/70">{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Lead form */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            id="counselling"
            className="lg:justify-self-end w-full max-w-md mx-auto"
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="h-10 w-6 rounded-full border-2 border-primary-foreground/40 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-accent-glow"
          />
        </div>
      </motion.div>
    </section>
  );
}
