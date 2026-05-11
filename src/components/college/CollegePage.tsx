import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Sparkles,
  MapPin,
  Trophy,
  IndianRupee,
  Briefcase,
  GraduationCap,
  Users2,
  Award,
  Building2,
  Code2,
  Users,
  CheckCircle2,
  HelpCircle,
  PhoneCall,
  ClipboardCheck,
  Send,
  BadgeCheck,
  Wallet,
  MessageCircle,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Toaster } from "@/components/ui/sonner";
import { CollegeLeadForm } from "./CollegeLeadForm";
import { Footer } from "@/components/landing/Footer";
import type { CollegeConfig } from "@/data/colleges";
import { Link } from "react-router-dom";

const ICONS: Record<string, LucideIcon> = {
  trophy: Trophy,
  map: MapPin,
  building: Building2,
  code: Code2,
  users: Users,
  award: Award,
  sparkles: Sparkles,
  check: CheckCircle2,
};

const PROCESS_ICONS: LucideIcon[] = [PhoneCall, ClipboardCheck, Send, BadgeCheck, Wallet];
const SNAPSHOT_ICONS: LucideIcon[] = [MapPin, Trophy, IndianRupee, Briefcase, GraduationCap, Users2];
const TRUST_ICONS: LucideIcon[] = [TrendingUp, Users2, Award, Trophy, MapPin];

export function CollegePage({ config }: { config: CollegeConfig }) {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Hero config={config} />
      <Snapshot config={config} />
      <About config={config} />
      <WhyChoose config={config} />
      <Process config={config} />
      <FAQ config={config} />
      <CTASection config={config} />
      <Footer />
      <Toaster richColors position="top-center" />
    </main>
  );
}

function TopBar() {
  return (
    <div className="absolute top-0 inset-x-0 z-30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-primary-foreground font-extrabold text-lg tracking-tight">
          SS <span className="text-accent-glow">Education</span>
        </Link>
        <a
          href="tel:+919933085333"
          className="hidden sm:inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-bold text-primary-foreground hover:bg-primary-foreground/15 transition"
        >
          <Phone className="h-3.5 w-3.5 text-accent-glow" /> +91 99330 85333
        </a>
      </div>
    </div>
  );
}

/* ----------------------------- HERO ----------------------------- */
function Hero({ config }: { config: CollegeConfig }) {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <HeroCarousel slides={config.carousel} />

      <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-primary-glow/20 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-center">
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
              <Sparkles className="h-3.5 w-3.5 animate-pulse" /> {config.hero.eyebrow}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight"
            >
              {config.hero.headline}{" "}
              <span className="text-gradient inline-block">{config.hero.headlineHighlight}</span>
              <span className="block text-xl sm:text-2xl lg:text-3xl mt-3 font-semibold text-primary-foreground/95">{config.hero.subline}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="mt-6 text-lg sm:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed"
            >
              {config.hero.subhead}
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
                href="#counselling"
                className="inline-flex items-center gap-2 rounded-xl glass px-7 py-4 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/15 hover:scale-[1.02] transition-all duration-300"
              >
                Free Counselling →
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.8 } } }}
              className="mt-12 grid grid-cols-3 gap-4 max-w-xl"
            >
              {config.trustStats.map((item, idx) => {
                const Icon = TRUST_ICONS[idx % TRUST_ICONS.length];
                return (
                <motion.div
                  key={item.label}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="flex items-center gap-3"
                >
                  <div className="rounded-lg glass p-2.5">
                    <Icon className="h-5 w-5 text-accent-glow" />
                  </div>
                  <div>
                    <div className="text-xl font-bold leading-tight">{item.value}</div>
                    <div className="text-xs text-primary-foreground/70">{item.label}</div>
                  </div>
                </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            id="counselling"
            className="lg:justify-self-end w-full max-w-md mx-auto"
          >
            <CollegeLeadForm collegeShort={config.short} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroCarousel({ slides }: { slides: CollegeConfig["carousel"] }) {
  const autoplay = useRef(Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true }));
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <div className="absolute inset-0">
      <Carousel setApi={setApi} plugins={[autoplay.current]} opts={{ loop: true }} className="h-full w-full">
        <CarouselContent className="ml-0 h-full">
          {slides.map((slide, i) => (
            <CarouselItem key={i} className="pl-0 relative h-screen min-h-screen">
              <motion.img
                key={`img-${i}-${current === i}`}
                initial={{ scale: 1.15 }}
                animate={current === i ? { scale: 1 } : { scale: 1.15 }}
                transition={{ duration: 6, ease: "easeOut" }}
                src={slide.img}
                alt={slide.title}
                width={1920}
                height={1280}
                loading={i === 0 ? "eager" : "lazy"}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[image:var(--gradient-overlay)]" />
              <div className="absolute inset-0 bg-[image:var(--gradient-radial)] mix-blend-overlay opacity-70" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="pointer-events-none absolute inset-0 z-10 hidden lg:flex items-end">
        <div className="container mx-auto px-4 pb-32">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14">
            <div />
            <div className="lg:justify-self-end w-full max-w-md mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="glass rounded-2xl p-4 backdrop-blur-md"
                >
                  <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-accent-glow">
                    {slides[current].eyebrow}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-primary-foreground leading-snug">
                    {slides[current].title}
                  </h3>
                  <p className="text-xs text-primary-foreground/80 mt-0.5">
                    {slides[current].subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group h-1.5 rounded-full bg-primary-foreground/30 overflow-hidden transition-all duration-500"
            style={{ width: current === i ? 32 : 12 }}
          >
            {current === i && (
              <motion.div
                key={`bar-${current}`}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4.5, ease: "linear" }}
                className="h-full bg-accent-glow"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

/* --------------------------- SNAPSHOT --------------------------- */
function Snapshot({ config }: { config: CollegeConfig }) {
  return (
    <section className="relative py-20 lg:py-24 bg-secondary/40 overflow-hidden">
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_50%_0%,oklch(0.55_0.18_280_/_0.15),transparent_70%)]" />
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary">College Snapshot</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            {config.short} <span className="text-gradient">at a Glance</span>
          </h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {config.snapshot.map((s, i) => {
            const Icon = SNAPSHOT_ICONS[i % SNAPSHOT_ICONS.length];
            return (
              <motion.div
                key={s.label}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl bg-card p-6 lg:p-7 border border-border hover:border-primary/40 hover:shadow-[var(--shadow-float)] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[image:var(--gradient-primary)] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-[var(--shadow-elegant)]">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{s.label}</div>
                <div className="mt-1 text-base lg:text-lg font-bold text-foreground leading-tight">{s.value}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------------------- ABOUT ----------------------------- */
function About({ config }: { config: CollegeConfig }) {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-float)] aspect-[4/3]">
              <img
                src={config.about.image}
                alt={config.about.imageAlt}
                width={1280}
                height={960}
                loading="lazy"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-card rounded-2xl p-5 shadow-[var(--shadow-float)] border border-border max-w-[220px]"
            >
              <div className="text-3xl font-extrabold text-gradient">{config.about.floatStat.value}</div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-1">{config.about.floatStat.label}</div>
            </motion.div>
            <div className="absolute -top-6 -left-4 lg:-left-8 hidden md:block bg-[image:var(--gradient-primary)] rounded-2xl p-5 shadow-[var(--shadow-elegant)] text-primary-foreground">
              <div className="text-3xl font-extrabold">{config.about.floatStat2.value}</div>
              <div className="text-xs font-semibold uppercase tracking-wider mt-1 opacity-90">{config.about.floatStat2.label}</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-accent">{config.about.eyebrow}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
              {config.about.title} <span className="text-gradient">{config.about.titleHighlight}</span>
            </h2>
            <p className="mt-6 text-base lg:text-lg text-foreground/75 leading-relaxed">
              {config.about.body}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- WHY CHOOSE --------------------------- */
function WhyChoose({ config }: { config: CollegeConfig }) {
  return (
    <section className="relative py-20 lg:py-28 bg-secondary/40 overflow-hidden">
      <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_80%_20%,oklch(0.78_0.18_60_/_0.15),transparent_60%)]" />

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Why {config.short}</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            {config.why.title} <span className="text-gradient">{config.why.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-8 relative rounded-3xl overflow-hidden shadow-[var(--shadow-float)] aspect-[4/5]"
          >
            <img
              src={config.why.image}
              alt={config.why.imageAlt}
              width={1280}
              height={960}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
              <div className="text-2xl lg:text-3xl font-bold">{config.why.imageOverlayTitle}</div>
              <p className="mt-2 text-primary-foreground/85 text-sm">{config.why.imageOverlaySubtitle}</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {config.why.points.map((p) => {
              const Icon = ICONS[p.iconKey] ?? CheckCircle2;
              return (
                <motion.div
                  key={p.title}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl bg-card p-5 border border-border hover:border-primary/40 hover:shadow-[var(--shadow-card)] transition-all duration-300"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-foreground leading-tight text-[15px]">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- PROCESS ----------------------------- */
function Process({ config }: { config: CollegeConfig }) {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_50%_50%,oklch(0.55_0.18_280_/_0.1),transparent_70%)]" />
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Admission Process</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Get Your {config.short} Seat in <span className="text-gradient">5 Simple Steps</span>
          </h2>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-5"
          >
            {config.process.map((s, i) => {
              const Icon = PROCESS_ICONS[i] ?? PhoneCall;
              return (
                <motion.div
                  key={s.title}
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                  whileHover={{ y: -8 }}
                  className="group relative rounded-2xl bg-card p-6 border border-border hover:border-primary/40 hover:shadow-[var(--shadow-float)] transition-all duration-300"
                >
                  <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-elegant)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="h-6 w-6" />
                    <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-extrabold border-2 border-card">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground text-center leading-tight">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground text-center leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- FAQ ------------------------------- */
function FAQ({ config }: { config: CollegeConfig }) {
  return (
    <section className="py-20 lg:py-28 bg-secondary/40">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-elegant)] mb-4">
            <HelpCircle className="h-7 w-7" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-accent">FAQ</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            {config.short} Admission <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {config.faqs.map((f, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
              >
                <AccordionItem
                  value={`item-${i}`}
                  className="rounded-2xl bg-card border border-border px-5 data-[state=open]:shadow-[var(--shadow-card)] data-[state=open]:border-primary/40 transition-all hover:border-primary/30"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5 text-base">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------------------- CTA ----------------------------- */
function CTASection({ config }: { config: CollegeConfig }) {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={config.cta.image}
          alt="Happy graduates celebrating"
          width={1280}
          height={960}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[image:var(--gradient-overlay)]" />
      <div className="absolute inset-0 bg-[image:var(--gradient-radial)] mix-blend-overlay" />

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
          {config.cta.eyebrow}
        </span>
        <h2 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] max-w-3xl mx-auto">
          {config.cta.title}{" "}
          <span className="text-gradient inline-block">{config.cta.titleHighlight}</span>
        </h2>
        <p className="mt-5 text-lg lg:text-xl text-primary-foreground/85 max-w-2xl mx-auto">
          {config.cta.subline}
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/80"
        >
          <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-accent-glow" /> 500+ Happy Students</span>
          <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-accent-glow" /> 100% Free Counselling</span>
          <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-accent-glow" /> Direct {config.short} Coordination</span>
        </motion.div>
      </motion.div>
    </section>
  );
}