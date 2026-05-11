import campusImg from "@/assets/ktbi-building.jpg";
import { motion } from "framer-motion";
import { Globe2, Users, BookOpen, Award } from "lucide-react";

const badges = [
  { icon: Award, label: "NAAC A++" },
  { icon: BookOpen, label: "Deemed University" },
  { icon: Users, label: "40,000+ Students" },
  { icon: Globe2, label: "65+ Countries" },
];

export function About() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-float)] aspect-[4/3]">
              <img
                src={campusImg}
                alt="KIIT University academic building with palm trees"
                width={1280}
                height={960}
                loading="lazy"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-card rounded-2xl p-5 shadow-[var(--shadow-float)] border border-border max-w-[200px]"
            >
              <div className="text-3xl font-extrabold text-gradient">36</div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-1">NIRF 2026 Engineering</div>
            </motion.div>
            <div className="absolute -top-6 -left-4 lg:-left-8 hidden md:block bg-[image:var(--gradient-primary)] rounded-2xl p-5 shadow-[var(--shadow-elegant)] text-primary-foreground">
              <div className="text-3xl font-extrabold">700+</div>
              <div className="text-xs font-semibold uppercase tracking-wider mt-1 opacity-90">Recruiters</div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-accent">About the College</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
              One of India's Top <span className="text-gradient">Private Engineering</span> Universities
            </h2>
            <p className="mt-6 text-base lg:text-lg text-foreground/75 leading-relaxed">
              <strong className="text-foreground">KIIT University, Bhubaneswar</strong> is one of India's
              top private engineering universities with a <strong className="text-primary">NIRF 2026 Engineering rank of 36</strong>.
              With over 40,000 students from 65+ countries and 700+ recruiting companies, KIIT offers
              B.Tech aspirants from Eastern India an unmatched combination of academic quality, placement
              support, and a safe campus environment.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {badges.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 rounded-xl bg-secondary/60 px-4 py-3 border border-border hover:border-primary/40 hover:bg-secondary transition-all"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground">
                    <b.icon className="h-4 w-4" />
                  </div>
                  <span className="font-semibold text-sm text-foreground">{b.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
