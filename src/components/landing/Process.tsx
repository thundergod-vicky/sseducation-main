import { motion } from "framer-motion";
import { PhoneCall, ClipboardCheck, Send, BadgeCheck, Wallet } from "lucide-react";

const steps = [
  { n: "01", icon: PhoneCall, title: "Contact SS Education", desc: "Tell us your JEE/KIITEE score and preferred branch." },
  { n: "02", icon: ClipboardCheck, title: "Eligibility Assessment", desc: "We assess your profile and identify the best seat option." },
  { n: "03", icon: Send, title: "Application Submission", desc: "We submit your application and coordinate with KIIT." },
  { n: "04", icon: BadgeCheck, title: "Seat Confirmation", desc: "Your seat is confirmed and you receive your admission letter." },
  { n: "05", icon: Wallet, title: "Fee & Document Support", desc: "We guide you through fee payment and document verification." },
];

export function Process() {
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
            Get Your KIIT Seat in <span className="text-gradient">5 Simple Steps</span>
          </h2>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-5"
          >
            {steps.map((s) => (
              <motion.div
                key={s.n}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl bg-card p-6 border border-border hover:border-primary/40 hover:shadow-[var(--shadow-float)] transition-all duration-300"
              >
                {/* Icon circle */}
                <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-elegant)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <s.icon className="h-6 w-6" />
                  <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-extrabold border-2 border-card">
                    {s.n}
                  </span>
                </div>
                <h3 className="font-bold text-foreground text-center leading-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground text-center leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
