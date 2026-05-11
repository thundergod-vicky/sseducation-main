import { MapPin, Trophy, IndianRupee, Briefcase, GraduationCap, Users2 } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: MapPin, label: "Location", value: "Bhubaneswar, Odisha" },
  { icon: Trophy, label: "NIRF 2026 Rank", value: "36 Engineering | 27 Overall" },
  { icon: IndianRupee, label: "Highest Package", value: "₹53 LPA" },
  { icon: Briefcase, label: "Average Package", value: "₹8.5 LPA" },
  { icon: GraduationCap, label: "Total Fees", value: "₹14 – ₹18.5 Lakhs" },
  { icon: Users2, label: "Total B.Tech Seats", value: "3,800+ across all branches" },
];

export function Stats() {
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
            KIIT University <span className="text-gradient">at a Glance</span>
          </h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl bg-card p-6 lg:p-7 border border-border hover:border-primary/40 hover:shadow-[var(--shadow-float)] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[image:var(--gradient-primary)] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
              <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-[var(--shadow-elegant)]">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{s.label}</div>
              <div className="mt-1 text-base lg:text-lg font-bold text-foreground leading-tight">{s.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
