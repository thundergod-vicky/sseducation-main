import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Can I get admission in KIIT without a JEE score?",
    a: "Yes. KIIT accepts KIITEE scores and management quota seats are available for students without JEE scores. Contact us to check your eligibility.",
  },
  {
    q: "What is the total B.Tech fee at KIIT?",
    a: "The total B.Tech fee ranges from ₹14 to ₹18.5 Lakhs depending on the branch. Scholarship options are also available.",
  },
  {
    q: "Is KIIT good for CSE students from Bihar/Jharkhand?",
    a: "Absolutely. KIIT has one of the strongest CSE placement records among private universities and is a top choice for Eastern India students.",
  },
  {
    q: "How can SS Education help with KIIT admission?",
    a: "We have direct counselling experience with KIIT admissions. We handle the entire process — eligibility check, application, seat booking, and fee guidance.",
  },
  {
    q: "How fast will I receive a callback after submitting the form?",
    a: "Our counsellor will call you within 30 minutes during working hours (9 AM – 9 PM, all days).",
  },
];

export function FAQ() {
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
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
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
