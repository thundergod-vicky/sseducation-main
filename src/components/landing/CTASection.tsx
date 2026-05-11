import { Phone, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import celebrateImg from "@/assets/students-celebrate.jpg";

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={celebrateImg}
          alt="Happy KIIT graduates celebrating"
          width={1280}
          height={960}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[image:var(--gradient-overlay)]" />
      <div className="absolute inset-0 bg-[image:var(--gradient-radial)] mix-blend-overlay" />

      {/* Floating orbs */}
      <div className="absolute top-1/3 left-10 h-64 w-64 rounded-full bg-accent/30 blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-10 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative container mx-auto px-4 text-center text-primary-foreground"
      >
        <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-glow">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          Limited Seats — 2026 Admissions Closing Soon
        </span>
        <h2 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] max-w-3xl mx-auto">
          Don't Miss Your Seat at{" "}
          <span className="text-gradient inline-block">KIIT University 2026</span>
        </h2>
        <p className="mt-5 text-lg lg:text-xl text-primary-foreground/85 max-w-2xl mx-auto">
          Talk to our expert counsellor for free and lock in your B.Tech seat today.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="tel:+919933085333"
            className="group inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-accent)] px-8 py-4 text-base font-bold text-accent-foreground shadow-[var(--shadow-glow)] hover:scale-[1.05] hover:-translate-y-1 transition-all animate-glow-pulse"
          >
            <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            Call +91 99330 85333
          </a>
          <a
            href="https://wa.me/919933085333"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-success text-success-foreground px-8 py-4 text-base font-bold hover:scale-[1.05] hover:-translate-y-1 transition-all shadow-[var(--shadow-elegant)]"
          >
            <MessageCircle className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            WhatsApp Us
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/80"
        >
          <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-accent-glow" /> 500+ Happy Students</span>
          <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-accent-glow" /> 100% Free Counselling</span>
          <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-accent-glow" /> Direct KIIT Coordination</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
