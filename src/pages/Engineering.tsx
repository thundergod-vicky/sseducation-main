import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { About } from "@/components/landing/About";
import { WhyChoose } from "@/components/landing/WhyChoose";
import { Process } from "@/components/landing/Process";
import { FAQ } from "@/components/landing/FAQ";
import { CTASection } from "@/components/landing/CTASection";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Info, ChevronDown } from "lucide-react";

// Recruiter Logos from assets folder
import axisBankLogo from "@/assets/partner-logos/Axis Bank p11.png";
import capgeminiLogo from "@/assets/partner-logos/Capgemini p5.jpg";
import eyLogo from "@/assets/partner-logos/EY p10.png";
import ibmLogo from "@/assets/partner-logos/IBM p8.png";
import kotakMahindraLogo from "@/assets/partner-logos/Kotak Mahindra p14.png";
import oracleLogo from "@/assets/partner-logos/Oracle p9.png";
import relianceLogo from "@/assets/partner-logos/Reliance p13.png";
import tcsLogo from "@/assets/partner-logos/TCS p2.jpg";
import techMahindraLogo from "@/assets/partner-logos/Tech Mahindra p12.png";
import wiproLogo from "@/assets/partner-logos/Wipro p4.png";
import amazonLogo from "@/assets/partner-logos/amazon p1.png";
import cognizantLogo from "@/assets/partner-logos/cognizant p7.png";
import infosysLogo from "@/assets/partner-logos/infosys p3.png";
import daburLogo from "@/assets/partner-logos/Dabur p15.png";

const recruiters = [
  { name: "Amazon", logo: amazonLogo },
  { name: "TCS", logo: tcsLogo },
  { name: "Infosys", logo: infosysLogo },
  { name: "Wipro", logo: wiproLogo },
  { name: "Cognizant", logo: cognizantLogo },
  { name: "Capgemini", logo: capgeminiLogo },
  { name: "IBM", logo: ibmLogo },
  { name: "Oracle", logo: oracleLogo },
  { name: "EY", logo: eyLogo },
  { name: "Axis Bank", logo: axisBankLogo },
  { name: "Tech Mahindra", logo: techMahindraLogo },
  { name: "Reliance", logo: relianceLogo },
  { name: "Kotak Mahindra", logo: kotakMahindraLogo },
  { name: "Dabur", logo: daburLogo }
];

const courses = [
  { name: "Computer Science & Engineering (CSE)", fee: "₹1,75,000 / Semester", duration: "4 Years" },
  { name: "CSE with AI & Machine Learning", fee: "₹1,75,000 / Semester", duration: "4 Years" },
  { name: "Information Technology (IT)", fee: "₹1,75,000 / Semester", duration: "4 Years" },
  { name: "Electronics & Communication Engg (ECE)", fee: "₹1,75,000 / Semester", duration: "4 Years" },
  { name: "Computer Science & System Engg", fee: "₹1,75,000 / Semester", duration: "4 Years" },
  { name: "Mechanical Engineering", fee: "₹1,75,000 / Semester", duration: "4 Years" },
  { name: "Civil Engineering", fee: "₹1,75,000 / Semester", duration: "4 Years" },
  { name: "Electrical / EEE Engineering", fee: "₹1,75,000 / Semester", duration: "4 Years" },
];

const testimonials = [
  { name: "Aditya Verma", branch: "B.Tech CSE (KIIT Batch 2022-26)", placed: "Amazon (₹32 LPA)", text: "I was extremely confused about my branch allocation during KIITEE. SS Education guided me on the direct counselling path, and today I am placed in Amazon. Outstanding guidance!" },
  { name: "Riya Patnaik", branch: "B.Tech ECE (KIIT Batch 2021-25)", placed: "Capgemini (₹12 LPA)", text: "The counselling process through SS Education was completely transparent. No donation fees, correct documentation support, and continuous coordination until my hostel room allocation." },
];

const Index = () => {
  useEffect(() => {
    document.title = "KIIT B.Tech Admission 2026 — Direct Seat | SS Education";
    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Get direct B.Tech admission in KIIT University 2026. NIRF Rank 36. ₹53 LPA highest package. Free counselling for students from Bihar, Jharkhand, Odisha. Call +91 99330 85333.",
    );
    setMeta("og:title", "KIIT B.Tech Admission 2026 — Direct Seat | SS Education", "property");
    setMeta(
      "og:description",
      "Trusted by 500+ students. Management quota & KIITEE seats available. Free counselling — call SS Education today.",
      "property",
    );
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Stats />

      {/* Recruiter Logos Marquee */}
      <section className="py-8 bg-slate-100/50 overflow-hidden border-b border-t border-border/60">
        <div className="container mx-auto px-4 mb-4">
          <p className="text-center text-[10px] font-black text-muted-foreground uppercase tracking-[0.25em]">
            Top Corporations Recruiting from KIIT Campus
          </p>
        </div>
        <div className="relative w-full flex items-center">
          <div className="flex w-[200%] gap-12 animate-marquee shrink-0">
            {recruiters.concat(recruiters).map((rec, i) => (
              <div key={i} className="flex items-center justify-center h-12 w-32 shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                <img src={rec.logo} alt={rec.name} className="h-full w-full object-contain mix-blend-multiply" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <About />

      {/* B.Tech Specializations & Fee Structure Table */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/5 px-3.5 py-1.5 rounded-full">Stream Matrix</span>
            <h2 className="text-3xl font-extrabold text-foreground mt-4 leading-tight">
              KIIT B.Tech Branches & Fee Structure
            </h2>
            <p className="mt-3 text-muted-foreground">
              Official semester tuition layout. Check seats availability for 2026 with our counsellors.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/40 border-b border-border">
                    <th className="p-4 pl-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">Engineering Branch</th>
                    <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Duration</th>
                    <th className="p-4 pr-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">Tuition Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 font-semibold text-foreground/80">
                  {courses.map((c, i) => (
                    <tr key={i} className="hover:bg-muted/20 transition-colors">
                      <td className="p-4 pl-6 font-bold text-foreground">{c.name}</td>
                      <td className="p-4 text-sm text-muted-foreground">{c.duration}</td>
                      <td className="p-4 pr-6 font-bold text-primary">{c.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between p-5 bg-amber-500/5 border border-amber-500/20 rounded-2xl gap-4">
            <div className="flex gap-3">
              <Info className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed font-semibold">
                Note: A one-time registration and laptop bundle charge of ₹75,000 is applicable at the time of admission. Toppers of KIITEE enjoy 100% tuition fee waiver scholarships.
              </p>
            </div>
            <a 
              href="#counselling"
              className="whitespace-nowrap h-10 px-5 rounded-lg bg-primary hover:bg-primary-glow text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center"
            >
              Check Eligibility
            </a>
          </div>
        </div>
      </section>

      <WhyChoose />
      <Process />

      {/* Student Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/5 px-3.5 py-1.5 rounded-full">Success Stories</span>
            <h2 className="text-3xl font-extrabold text-foreground mt-4 leading-tight">
              Feedback from Guided Students
            </h2>
            <p className="mt-3 text-muted-foreground">
              Hear from candidates who successfully locked their seats via SS Education counseling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card p-8 rounded-3xl border border-border hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-foreground/80 italic font-medium leading-relaxed">
                    "{t.text}"
                  </p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border/60 flex items-center justify-between">
                  <div>
                    <h4 className="font-extrabold text-foreground">{t.name}</h4>
                    <p className="text-xs text-muted-foreground font-semibold">{t.branch}</p>
                  </div>
                  <span className="text-xs font-black text-emerald-600 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                    Placed: {t.placed}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <CTASection />

      {/* Google Ads Compliance & Institutional Disclaimer Section */}
      <section className="py-10 bg-amber-500/5 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl flex gap-4 items-start text-amber-800 dark:text-amber-300">
          <Info className="h-6 w-6 shrink-0 text-amber-500 mt-1" />
          <div className="text-sm font-medium leading-relaxed">
            <p className="font-extrabold text-amber-900 dark:text-amber-200 mb-1">Google Ads Policy & Institutional Disclaimer</p>
            <p>
              <strong>SS Education</strong> is an independent educational consulting advisory offering admissions counselling, score analysis, and seat feasibility check. We are <strong>NOT</strong> affiliated directly with Kalinga Institute of Industrial Technology (KIIT) University, nor do we represent ourselves as their official website. The official and direct admission website of the university is <a href="https://www.kiit.ac.in" target="_blank" rel="noreferrer" className="underline font-bold hover:text-amber-900 dark:hover:text-amber-100">kiit.ac.in</a>. All trademark, logo, and brand rights belong solely to KIIT University.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
