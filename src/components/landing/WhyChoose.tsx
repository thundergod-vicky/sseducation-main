import { CheckCircle2, Trophy, Briefcase, Building2, MapPin, GraduationCap, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import labImg from "@/assets/cs-lab.jpg";

const points = [
  { icon: Trophy, title: "NIRF 2026 Rank 36 in Engineering", desc: "One of the top private universities in India." },
  { icon: Briefcase, title: "₹53 LPA Highest | ₹8.5 LPA Average", desc: "Industry-leading placement records year after year." },
  { icon: Building2, title: "700+ Recruiting Companies", desc: "Amazon, Deloitte, Cognizant, TCS, Infosys & many more." },
  { icon: MapPin, title: "Priority for Bihar, Jharkhand & Odisha", desc: "Dedicated counselling for Eastern India students." },
  { icon: Sparkles, title: "Management Quota Seats Available", desc: "JEE score not mandatory — direct admission possible." },
  { icon: GraduationCap, title: "400+ Acre World-Class Campus", desc: "Modern hostels, advanced labs, top sports facilities." },
  { icon: Award, title: "NAAC A++ | Deemed University since 2004", desc: "Recognised academic excellence and credibility." },
  { icon: CheckCircle2, title: "End-to-End Admission Support", desc: "From eligibility check to fee guidance — we handle all." },
];

export function WhyChoose() {
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
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Why KIIT</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Why Students Choose <span className="text-gradient">KIIT University</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Sticky image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-8 relative rounded-3xl overflow-hidden shadow-[var(--shadow-float)] aspect-[4/5]"
          >
            <img
              src={labImg}
              alt="KIIT computer science lab with students"
              width={1280}
              height={960}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
              <div className="text-2xl lg:text-3xl font-bold">World-Class Infrastructure</div>
              <p className="mt-2 text-primary-foreground/85 text-sm">
                Cutting-edge labs, smart classrooms & a vibrant campus life
              </p>
            </div>
          </motion.div>

          {/* Points */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {points.map((p) => (
              <motion.div
                key={p.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl bg-card p-5 border border-border hover:border-primary/40 hover:shadow-[var(--shadow-card)] transition-all duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-foreground leading-tight text-[15px]">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
