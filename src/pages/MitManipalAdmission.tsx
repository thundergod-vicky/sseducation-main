import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Building2,
  Sparkles,
  MapPin,
  TrendingUp,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Phone,
  MessageCircle,
  Star,
  ShieldCheck,
  Clock,
  ChevronDown,
  ChevronUp,
  DollarSign,
  Award,
  BookOpen,
  HelpCircle,
  FileText,
  UserCheck,
  Building,
  Check,
  Compass,
  Briefcase,
  Library,
  Wifi,
  Trophy,
  HeartPulse,
  Mail,
  Zap,
  Play,
  ArrowUpRight,
  School,
  Globe
} from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useJsonLd } from "@/hooks/useJsonLd";
import { useSeo } from "@/hooks/useSeo";

// Recruiter Logos from assets folder
import axisBankLogo from "@/assets/partner-logos/Axis Bank p11.png";
import capgeminiLogo from "@/assets/partner-logos/Capgemini p5.jpg";
import eyLogo from "@/assets/partner-logos/EY p10.png";
import ibmLogo from "@/assets/partner-logos/IBM p8.png";
import githubLogo from "@/assets/partner-logos/Kotak Mahindra p14.png";
import oracleLogo from "@/assets/partner-logos/Oracle p9.png";
import relianceLogo from "@/assets/partner-logos/Reliance p13.png";
import tcsLogo from "@/assets/partner-logos/TCS p2.jpg";
import techMahindraLogo from "@/assets/partner-logos/Tech Mahindra p12.png";
import wiproLogo from "@/assets/partner-logos/Wipro p4.png";
import amazonLogo from "@/assets/partner-logos/amazon p1.png";
import cognizantLogo from "@/assets/partner-logos/cognizant p7.png";
import infosysLogo from "@/assets/partner-logos/infosys p3.png";
import daburLogo from "@/assets/partner-logos/Dabur p15.png";

// Form Validation Schema
const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  email: z.string().trim().email("Enter a valid email address").max(120).optional().or(z.literal("")),
  state: z.string().min(1, "Select your state"),
  course: z.string().min(1, "Select preferred course"),
});

type FormDataType = z.infer<typeof leadFormSchema>;

export default function MitManipalAdmission() {
  useSeo({
    title: "Manipal University (MAHE) B.Tech Guide - Fees, MET & Placements",
    description: "Explore Manipal Academy of Higher Education (MAHE) / MIT Manipal. Learn about MET admission processes, B.Tech specialities, hosteling fees & placements."
  });

  // Schema markup
  useJsonLd({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/mit-manipal/#college",
        "name": "Manipal Institute of Technology (MIT) Manipal",
        "alternateName": "MIT Manipal",
        "url": "https://manipal.edu/mit.html",
        "description": "Manipal Institute of Technology (MIT), Manipal, is the flagship engineering institution under Manipal Academy of Higher Education (MAHE), established in 1957.",
        "logo": "https://manipal.edu/content/dam/manipal/mu/images/logo/mahe_logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Tiger Circle, Madhav Nagar",
          "addressLocality": "Manipal",
          "addressRegion": "Karnataka",
          "postalCode": "576104",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ssadmission.in/mit-manipal/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is MIT Manipal a good engineering college?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. MIT Manipal is widely considered one of India's leading private engineering institutions with a legacy since 1957, excellent global exposures, and strong placements pipelines."
            }
          },
          {
            "@type": "Question",
            "name": "What is the average package at MIT Manipal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The average package at MIT Manipal reaches up to ₹10.0 LPA+ in recent cycles, with Computer Science related branches securing average packages between ₹10.0 and ₹14.0 LPA."
            }
          },
          {
            "@type": "Question",
            "name": "Does MIT Manipal support startups?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. MAHE hosts a robust entrepreneurship ecosystem featuring startup cells, business mentoring workshops, incubation spaces, and access to funding networks."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ssadmission.in/mit-manipal/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ssadmission.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Colleges",
            "item": "https://ssadmission.in/engineering"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "MIT Manipal",
            "item": "https://ssadmission.in/mit-manipal"
          }
        ]
      }
    ]
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("overview");

  const [formData, setFormData] = useState<Partial<FormDataType>>({
    name: "",
    phone: "",
    email: "",
    state: "",
    course: "",
  });

  const formRef = useRef<HTMLDivElement>(null);
  const sectionsRef = {
    "overview": useRef<HTMLElement>(null),
    "legacy": useRef<HTMLElement>(null),
    "highlights": useRef<HTMLElement>(null),
    "why-choose": useRef<HTMLElement>(null),
    "schools": useRef<HTMLElement>(null),
    "courses": useRef<HTMLElement>(null),
    "fees": useRef<HTMLElement>(null),
    "eligibility": useRef<HTMLElement>(null),
    "placements": useRef<HTMLElement>(null),
    "facilities": useRef<HTMLElement>(null),
    "faqs": useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (const [key, ref] of Object.entries(sectionsRef)) {
        if (ref.current) {
          const offsetTop = ref.current.offsetTop;
          const offsetHeight = ref.current.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(key);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      const nameInput = document.getElementById("manipal-lead-name");
      nameInput?.focus();
    }, 800);
  };

  const scrollToSection = (id: keyof typeof sectionsRef) => {
    const element = sectionsRef[id].current;
    if (element) {
      const headerOffset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  const handleInputChange = (field: keyof FormDataType, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = leadFormSchema.safeParse(formData);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[String(i.path[0])] = i.message;
      });
      setErrors(fieldErrors);
      toast.error("Please fill in all required fields correctly.");
      return;
    }

    setErrors({});
    setSubmitting(true);

    const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdLoigxaiQ05jssy6oUcVgENjCRBFjE1yFBmmCmB1EnPVZghw/formResponse";

    const googleFormData = new FormData();
    googleFormData.append("entry.1502716309", parsed.data.name);
    googleFormData.append("entry.1202722742", parsed.data.phone);
    googleFormData.append("entry.267493369", parsed.data.email || "No Email Provided");
    googleFormData.append("entry.921865976", parsed.data.state);
    googleFormData.append("entry.85122333", `MIT Manipal - Preferred Course: ${parsed.data.course}`);

    try {
      await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: googleFormData
      });
      setSubmitting(false);
      setSubmitted(true);
      toast.success("Counseling profile saved! Our advisor will contact you shortly.");
    } catch (error) {
      setSubmitting(false);
      setSubmitted(true);
      toast.success("Counseling profile saved! Our advisor will contact you shortly.");
    }
  };

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const menuItems = [
    { id: "overview", label: "Overview" },
    { id: "legacy", label: "History & Legacy" },
    { id: "highlights", label: "Highlights" },
    { id: "why-choose", label: "Why Choose" },
    { id: "schools", label: "MAHE Institutions" },
    { id: "courses", label: "B.Tech Programs" },
    { id: "fees", label: "Fee Matrix" },
    { id: "eligibility", label: "Admission & MET" },
    { id: "placements", label: "Placements" },
    { id: "facilities", label: "Facilities" },
    { id: "faqs", label: "FAQs" },
  ] as const;

  const highlightsData = [
    { label: "Established Year", value: "1953", sub: "University Legacy Since 1953" },
    { label: "Flagship Engineering", value: "MIT Manipal", sub: "Established in 1957" },
    { label: "NAAC Grade", value: "A++ Grade", sub: "Highest Level Accreditation" },
    { label: "Campuses", value: "5 Locations", sub: "Manipal, Bengaluru, Dubai, etc." },
    { label: "Global Presence", value: "60+ Countries", sub: "Vibrant Student Mix" },
    { label: "Alumni Network", value: "150,000+", sub: "Spread Across Global Tech" },
    { label: "Highest Package", value: "₹57.0 LPA+", sub: "Consistent Career Success" },
    { label: "Average Package", value: "₹10.0 LPA+", sub: "Top Class Return on Investment" }
  ];

  const schoolsData = [
    { name: "Manipal Institute of Technology (MIT)", desc: "The flagship engineering school offering B.Tech, M.Tech, and doctoral research programs." },
    { name: "Kasturba Medical College (KMC)", desc: "KMC was established in 1953 as India's first private medical college and remains a premier institute." },
    { name: "Manipal College of Pharmaceutical Sciences", desc: "A top-ranked national institution dedicated to pharmacy studies and pharmaceutical research." },
    { name: "Manipal Institute of Management", desc: "Offers premium postgraduate management education, including specialized MBA tracks." }
  ];

  const placementOverview = [
    { year: "2023", rate: "80%+", highest: "₹44.0 LPA+", average: "₹8.5 LPA" },
    { year: "2024", rate: "85%+", highest: "₹51.0 LPA+", average: "₹9.2 LPA" },
    { year: "2025", rate: "88%+", highest: "₹57.0 LPA+", average: "₹10.0 LPA+" }
  ];

  const branchPlacements = [
    { branch: "Computer Science & Engineering (CSE)", rate: "85–95%", avg: "₹10–14 LPA", max: "₹50 LPA+" },
    { branch: "Artificial Intelligence & ML", rate: "—", avg: "₹10–15 LPA", max: "—" },
    { branch: "Information Technology (IT)", rate: "85–90%", avg: "₹9–13 LPA", max: "—" },
    { branch: "Data Science & Engineering", rate: "—", avg: "₹10–14 LPA", max: "—" },
    { branch: "Electronics & Communication (ECE)", rate: "—", avg: "₹7–10 LPA", max: "—" },
    { branch: "Mechanical Engineering", rate: "—", avg: "₹6–8 LPA", max: "—" },
    { branch: "Mechatronics Engineering", rate: "—", avg: "₹7–10 LPA", max: "—" },
    { branch: "Civil Engineering", rate: "—", avg: "₹5–7 LPA", max: "—" }
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      {/* Alert Banner */}
      <div className="bg-[#003366] py-3 text-center border-b border-orange-500/20 relative z-30 pt-20 lg:pt-3">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <span className="h-2 w-2 rounded-full bg-orange-500 animate-ping shrink-0" />
          <p className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.15em] leading-tight">
            NAAC A++ Accredited Deemed University • Flagship MIT Campus Est. 1957 • Admissions through MET
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-[#03152d] text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#042145]/95 to-[#010814] z-0" />
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <nav className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#c5a880] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>/</span>
                <a href="/engineering" className="hover:text-white transition-colors">Colleges</a>
                <span>/</span>
                <span className="text-orange-400">MIT Manipal</span>
              </nav>

              <div className="space-y-3">
                <span className="inline-block text-xs font-black uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
                  7 Decades of Educational Leadership
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                  Manipal Academy of Higher Education (MAHE)
                </h1>
              </div>

              <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed max-w-3xl">
                A globally recognized educational ecosystem. Backed by the legacy of founder Dr. T.M.A. Pai, MIT Manipal combines state-of-the-art residential campus facilities, Fully Flexible Credit Systems (FFCS), international transfer opportunities, and excellent placement packages.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {["NAAC A++", "MET Entrance", "Fully Residential", "150,000+ Alumni Network"].map((badge, idx) => (
                  <span key={idx} className="text-[10px] font-black uppercase tracking-widest bg-white/10 border border-white/15 px-4 py-2 rounded-xl text-orange-300">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Compact inquiry Form */}
            <div className="lg:col-span-4" ref={formRef}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white text-slate-800 rounded-3xl p-6 shadow-2xl border border-slate-100 relative overflow-hidden"
              >
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 ring-8 ring-orange-50/50">
                      <CheckCircle2 className="h-10 w-10 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Counseling Request Saved</h3>
                    <p className="mt-4 text-slate-500 font-semibold leading-relaxed text-sm">
                      Thank you! Our counseling advisor will contact you shortly to explain MET cutoffs, branch options, and admission steps.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-xl font-black text-slate-900 leading-tight mb-1 tracking-tight">Request Information</h3>
                    <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mb-5">Get official cutoff & fee guides</p>

                    <form onSubmit={handleFormSubmit} className="space-y-3.5">
                      <div>
                        <Label htmlFor="manipal-lead-name" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Full Name *</Label>
                        <Input
                          id="manipal-lead-name"
                          placeholder="Your full name"
                          className={`h-11 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-slate-800 text-xs ${errors.name ? "border-rose-500 bg-rose-50/10" : ""}`}
                          value={formData.name || ""}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                        />
                        {errors.name && <p className="text-[10px] font-semibold text-rose-500 mt-1 uppercase tracking-wide">{errors.name}</p>}
                      </div>

                      <div>
                        <Label htmlFor="manipal-lead-phone" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Mobile Number *</Label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <Input
                            id="manipal-lead-phone"
                            type="tel"
                            maxLength={10}
                            placeholder="10-Digit Phone"
                            className={`h-11 pl-10 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-slate-800 text-xs ${errors.phone ? "border-rose-500 bg-rose-50/10" : ""}`}
                            value={formData.phone || ""}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                          />
                        </div>
                        {errors.phone && <p className="text-[10px] font-semibold text-rose-500 mt-1 uppercase tracking-wide">{errors.phone}</p>}
                      </div>

                      <div>
                        <Label htmlFor="manipal-lead-email" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Email (Optional)</Label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <Input
                            id="manipal-lead-email"
                            type="email"
                            placeholder="name@example.com"
                            className="h-11 pl-10 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-slate-800 text-xs"
                            value={formData.email || ""}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3.5">
                        <div>
                          <Label className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Your State *</Label>
                          <Select
                            onValueChange={(val) => handleInputChange("state", val)}
                            value={formData.state || ""}
                          >
                            <SelectTrigger className={`h-11 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white text-slate-800 text-left text-xs ${errors.state ? "border-rose-500" : ""}`}>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl border-slate-100">
                              {["Karnataka", "Bihar", "Uttar Pradesh", "West Bengal", "Jharkhand", "Delhi", "Maharashtra", "Tamil Nadu", "Kerala", "Other State"].map((st) => (
                                <SelectItem key={st} value={st}>{st}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.state && <p className="text-[10px] font-semibold text-rose-500 mt-1 uppercase tracking-wide">{errors.state}</p>}
                        </div>

                        <div>
                          <Label className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Course *</Label>
                          <Select
                            onValueChange={(val) => handleInputChange("course", val)}
                            value={formData.course || ""}
                          >
                            <SelectTrigger className={`h-11 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white text-slate-800 text-left text-xs ${errors.course ? "border-rose-500" : ""}`}>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl border-slate-100">
                              <SelectItem value="B.Tech Computer Science">B.Tech CSE</SelectItem>
                              <SelectItem value="B.Tech AI & ML">B.Tech AI & ML</SelectItem>
                              <SelectItem value="B.Tech Data Science">B.Tech Data Sci</SelectItem>
                              <SelectItem value="B.Tech Information Science">B.Tech IT</SelectItem>
                              <SelectItem value="B.Tech Electronics">B.Tech ECE</SelectItem>
                              <SelectItem value="B.Tech Aeronautical">B.Tech Aero</SelectItem>
                              <SelectItem value="B.Tech Mechanical">B.Tech Mech</SelectItem>
                              <SelectItem value="Other Streams / MBA">Others / MBA</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.course && <p className="text-[10px] font-semibold text-rose-500 mt-1 uppercase tracking-wide">{errors.course}</p>}
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 mt-4 bg-orange-500 hover:bg-orange-600 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                        disabled={submitting}
                      >
                        {submitting ? "Processing..." : (<>Submit Inquiry <ArrowRight className="h-4.5 w-4.5" /></>)}
                      </Button>

                      <p className="text-[9px] text-center text-slate-400 font-bold uppercase tracking-wider mt-3">
                        🔒 Official inquiry channel • No spam guarantee
                      </p>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <div className="container mx-auto px-4 max-w-7xl py-12 relative">
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
          {/* Desktop Table of Contents */}
          <aside className="sticky top-28 hidden lg:block bg-white p-6 rounded-[2rem] border border-slate-200/80 shadow-sm">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 pl-2">
              Page Navigator
            </h4>
            <nav className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-all uppercase tracking-wider ${
                    activeSection === item.id
                      ? "bg-orange-50 text-orange-700 border-l-4 border-orange-500 pl-3"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-4 text-center">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                Need Guidance?
              </p>
              <a
                href="tel:+919933085333"
                className="py-3 bg-[#03152d] hover:bg-[#042145] text-white font-black rounded-xl text-[10px] uppercase tracking-widest transition-all block"
              >
                +91 99330 85333
              </a>
            </div>
          </aside>

          {/* Core Content Area */}
          <div className="space-y-20">
            {/* 1. Overview */}
            <section ref={sectionsRef["overview"]} id="overview" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-orange-655 bg-orange-50 px-3 py-1 rounded-full">
                Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                About Manipal Academy of Higher Education (MAHE)
              </h2>
              <p className="text-slate-655 leading-relaxed font-medium">
                Manipal Academy of Higher Education (MAHE), formerly known as Manipal University, is one of India's most prestigious private universities and among the country's most recognized names in higher education. Established in 1953, MAHE has built a global reputation for excellence in engineering, medicine, management, pharmacy, allied health sciences, architecture, humanities, and research.
              </p>
              <p className="text-slate-655 leading-relaxed font-medium">
                The university is headquartered in Manipal, Karnataka, a vibrant educational town that attracts students from across India and more than 60 countries worldwide. Over the decades, MAHE has transformed into a multidisciplinary institution known for academic excellence, innovation, research, entrepreneurship, and global collaborations.
              </p>
              <p className="text-slate-655 leading-relaxed font-medium">
                For engineering aspirants, the flagship institution under MAHE is the Manipal Institute of Technology (MIT Manipal), which remains one of India's most sought-after private engineering colleges.
              </p>
            </section>

            {/* 2. Legacy */}
            <section ref={sectionsRef["legacy"]} id="legacy" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-orange-655 bg-orange-50 px-3 py-1 rounded-full">
                Founder & History
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                History & The Dr. T.M.A. Pai Legacy
              </h2>
              <p className="text-slate-655 leading-relaxed font-medium">
                The history of Manipal University began with the establishment of India's first private medical college. In 1953, Dr. T.M.A. Pai founded Kasturba Medical College (KMC), which became a landmark achievement in Indian higher education. In 1957, Manipal Institute of Technology (MIT) was established to provide high-quality engineering education.
              </p>
              <p className="text-slate-655 leading-relaxed font-medium">
                Dr. Tonse Madhava Ananth Pai was a visionary educationist, philanthropist, and entrepreneur. His vision was to create educational institutions capable of producing world-class professionals while making quality education accessible to students across India. Today, Dr. T.M.A. Pai is widely regarded as one of India's most influential education pioneers.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100 text-xs font-bold text-slate-500">
                <div className="space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm uppercase">Vision of MAHE</h4>
                  <p className="font-medium text-slate-500">To become a globally recognized university that nurtures innovation, excellence, leadership, and societal impact through education, research, and collaboration.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm uppercase">Mission Goals</h4>
                  <p className="font-medium text-slate-500">Deliver high-quality education, promote interdisciplinary learning, encourage innovation/entrepreneurship, advance research, foster ethical leadership, and contribute to national and global development.</p>
                </div>
              </div>
            </section>

            {/* 3. Highlights */}
            <section ref={sectionsRef["highlights"]} id="highlights" className="scroll-mt-32">
              <div className="mb-10 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-[#003366]">University Profile</span>
                <h2 className="text-3xl font-extrabold text-slate-950 mt-2">Key Highlights at a Glance</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {highlightsData.map((stat, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                      <span className="text-2xl font-black text-slate-900 tracking-tight">{stat.value}</span>
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider mt-2">{stat.label}</h4>
                    </div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Why Choose */}
            <section ref={sectionsRef["why-choose"]} id="why-choose" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-orange-655 bg-orange-50 px-3 py-1 rounded-full">
                Student Advantages
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Why Students Choose Manipal University
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 text-xs font-bold text-slate-500">
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm flex items-center gap-2">
                    <Award className="h-4.5 w-4.5 text-orange-500" />
                    <span>Strong National Reputation</span>
                  </h4>
                  <p className="text-slate-500 font-medium">Manipal is one of India's most respected private educational brands. Employers, researchers, and academic institutions recognize the value of a Manipal degree.</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm flex items-center gap-2">
                    <Globe className="h-4.5 w-4.5 text-orange-500" />
                    <span>Global Exposure</span>
                  </h4>
                  <p className="text-slate-500 font-medium">MAHE partners with top international universities for semester exchange options, joint research initiatives, and global internship exchanges.</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm flex items-center gap-2">
                    <Compass className="h-4.5 w-4.5 text-orange-500" />
                    <span>Research & Incubation</span>
                  </h4>
                  <p className="text-slate-500 font-medium">Heavy investment in research centers, advanced computation laboratories, and the MUTBI startup incubator support student innovations.</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm flex items-center gap-2">
                    <Building className="h-4.5 w-4.5 text-orange-500" />
                    <span>Vibrant Campus Life</span>
                  </h4>
                  <p className="text-slate-500 font-medium">Manipal is widely considered one of India's best student towns, offering high-quality residential facilities, indoor/outdoor sports grids, fests, and clubs.</p>
                </div>
              </div>
            </section>

            {/* 5. Schools */}
            <section ref={sectionsRef["schools"]} id="schools" className="scroll-mt-32">
              <div className="mb-10 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-[#003366]">MAHE Institutions</span>
                <h2 className="text-3xl font-extrabold text-slate-950 mt-2">Schools & Institutions Under MAHE</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {schoolsData.map((school, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900 mb-3">{school.name}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed font-semibold">{school.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. B.Tech Programs */}
            <section ref={sectionsRef["courses"]} id="courses" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-orange-655 bg-orange-50 px-3 py-1 rounded-full">
                Engineering Specialisations
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                B.Tech Branches at MIT Manipal
              </h2>
              <p className="text-slate-655 leading-relaxed font-medium text-sm">
                Manipal Institute of Technology (MIT) offers a comprehensive range of B.Tech programs designed to prepare students for core industries and emerging technologies.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 text-xs font-bold text-slate-500">
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50 space-y-1.5">
                  <h5 className="text-[#003366] font-extrabold text-sm">Computer Science related Programs</h5>
                  <p>Includes CSE, Computer Science & Financial Technology (FinTech), AI & ML, Data Science & Engineering, and Information Technology (IT). Emphasizes data structures, software systems, and AI models.</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50 space-y-1.5">
                  <h5 className="text-[#003366] font-extrabold text-sm">Electronics & Electrical Programs</h5>
                  <p>Focuses on Electronics & Communication (ECE), VLSI, Embedded computing, Cyber Physical Systems, and Electrical & Electronics Engineering (EEE).</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50 space-y-1.5">
                  <h5 className="text-[#003366] font-extrabold text-sm">Mechanical, Aero, & Automotive</h5>
                  <p>Includes Mechanical Engineering, Mechatronics, Aeronautical Engineering, and Automobile/EV Engineering programs.</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50 space-y-1.5">
                  <h5 className="text-[#003366] font-extrabold text-sm">Civil, Biotech & Chemical</h5>
                  <p>Provides specializations in Civil structural designs, Biotechnology sciences, and Chemical process engineering.</p>
                </div>
              </div>
            </section>

            {/* 7. Fee Matrix */}
            <section ref={sectionsRef["fees"]} id="fees" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-orange-655 bg-orange-50 px-3 py-1 rounded-full">
                Fee Matrices
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Academic Program Fees Matrix
              </h2>
              <p className="text-slate-655 leading-relaxed font-medium text-sm">
                Engineering tuition fees at MIT vary according to branches. Below is the estimated range of fees:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 text-xs font-bold text-slate-500">
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm">Computer Science Streams</h4>
                  <p className="text-rose-600 font-black">Approx. ₹4.5 – ₹5.5 Lakhs / Year</p>
                  <p className="text-slate-400 text-[10px]">Estimated Total Cost: ₹18.0 – ₹22.0 Lakhs</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm">Electronics Programs</h4>
                  <p className="text-rose-600 font-black">Approx. ₹4.0 – ₹5.0 Lakhs / Year</p>
                  <p className="text-slate-400 text-[10px]">Estimated Total Cost: ₹16.0 – ₹20.0 Lakhs</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm">Mechanical & Core Programs</h4>
                  <p className="text-rose-600 font-black">Approx. ₹3.5 – ₹4.5 Lakhs / Year</p>
                  <p className="text-slate-400 text-[10px]">Estimated Total Cost: ₹14.0 – ₹18.0 Lakhs</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm">Biotech & Chemical Programs</h4>
                  <p className="text-rose-600 font-black">Approx. ₹3.5 – ₹4.5 Lakhs / Year</p>
                  <p className="text-slate-400 text-[10px]">Estimated Total Cost: ₹14.0 – ₹18.0 Lakhs</p>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-6 mt-6 space-y-3 text-xs">
                <h4 className="font-extrabold text-orange-400 uppercase tracking-wider text-sm">Hostel Configurations</h4>
                <p>Non-AC hostels: **₹90,000 – ₹1.5 Lakhs / Year**</p>
                <p>AC hostels: **₹1.5 – ₹2.5 Lakhs / Year**</p>
                <p className="text-slate-400 text-[10px]">Mess charges vary by chosen plans.</p>
              </div>
            </section>

            {/* 8. Eligibility & MET */}
            <section ref={sectionsRef["eligibility"]} id="eligibility" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#003366]">Admissions</span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                MET Entrance & Eligibility Rules
              </h2>
              <p className="text-slate-655 leading-relaxed font-medium text-sm">
                Admission to B.Tech programs is primarily based on performance in the **Manipal Entrance Test (MET)** and Class 12 academic credentials.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 text-xs font-bold text-slate-500">
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50 space-y-1.5">
                  <h5 className="text-slate-900 font-extrabold">B.Tech Entry Requirements</h5>
                  <p>Requires successful completion of Class 12 with Physics, Mathematics, and English, along with one optional subject (Chemistry, Biotech, Biology, or Technical Vocational subjects).</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50 space-y-1.5">
                  <h5 className="text-slate-900 font-extrabold">Selection Flow</h5>
                  <p>Register for MET exam, receive MET Rank, choose preferences during counseling, seat allocation, fee deposit, and admission confirmation.</p>
                </div>
              </div>
            </section>

            {/* 9. Placements */}
            <section ref={sectionsRef["placements"]} id="placements" className="scroll-mt-32">
              <div className="bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-8">
                <span className="text-xs font-black uppercase tracking-widest text-orange-655 bg-orange-50 px-3 py-1 rounded-full">
                  Career Readiness
                </span>
                <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  MIT Placements & Recruiters
                </h2>
                <p className="text-slate-655 leading-relaxed font-medium text-sm">
                  MIT Manipal consistently records outstanding placements through corporate partnerships and its Practice School model, which allows students to gain corporate internship experience (PS-1 and PS-2) before graduation.
                </p>

                {/* Placements Matrix */}
                <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white mt-6">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#003366] text-white text-xs font-black uppercase tracking-wider border-b border-slate-800">
                        <th className="p-4">Academic Year</th>
                        <th className="p-4">Placement Rate</th>
                        <th className="p-4">Highest Package</th>
                        <th className="p-4">Average Package</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
                      {placementOverview.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-4 font-black text-slate-900">{row.year}</td>
                          <td className="p-4 text-orange-600 font-extrabold">{row.rate}</td>
                          <td className="p-4 text-[#003366] font-black">{row.highest}</td>
                          <td className="p-4 text-slate-500 font-extrabold">{row.average}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Branch-wise table */}
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2">Branch-Wise Placement insights</h4>
                <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#003366] text-white text-xs font-black uppercase tracking-wider border-b border-slate-800">
                        <th className="p-4">Engineering Branch</th>
                        <th className="p-4">Average Package</th>
                        <th className="p-4 text-center">Highest Package</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
                      {branchPlacements.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-4 font-black text-slate-900">{row.branch}</td>
                          <td className="p-4 text-orange-600 font-extrabold">{row.avg}</td>
                          <td className="p-4 text-center text-[#003366] font-black">{row.max !== "—" ? row.max : "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Recruiters logos */}
                <div className="space-y-4 pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 text-center lg:text-left">Major Recruiters</h4>
                  <div className="grid grid-cols-3 sm:grid-cols-7 gap-6 items-center">
                    {recruiters.map((rec, idx) => (
                      <div key={idx} className="h-10 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                        <img src={rec.logo} alt={rec.name} className="max-h-full max-w-full object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 10. Facilities */}
            <section ref={sectionsRef["facilities"]} id="facilities" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-orange-655 bg-orange-50 px-3 py-1 rounded-full">
                Infrastructure
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Facilities & Student town Experience
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs font-bold text-slate-500">
                <div className="flex gap-3 items-start">
                  <Library className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-slate-900 font-extrabold mb-1">Central Libraries</h5>
                    <p className="text-slate-500">Extensive collections of reference books, online databases, study halls, and research journals.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Building className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-slate-900 font-extrabold mb-1">Research Laboratories</h5>
                    <p className="text-slate-500">Modern computing clusters, VLSI layout spaces, and mechanical workshops for practice-based works.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Trophy className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-slate-900 font-extrabold mb-1">Sports Infrastructure</h5>
                    <p className="text-slate-500">Includes multi-court gymnasiums, swimming pools, athletic tracks, cricket pitches, and football fields.</p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-xs font-bold text-slate-500 space-y-2">
                <span className="text-slate-950 font-black uppercase text-[10px] block">Student Festivals</span>
                <p>Host to **Revels**, one of India's largest cultural festivals, and **TechTatva**, the annual flagship technical festival comprising national level coding competitions, hackathons, and guest lectures.</p>
              </div>
            </section>

            {/* 11. FAQs */}
            <section ref={sectionsRef["faqs"]} id="faqs" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#003366]">FAQs</span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Frequently Asked Questions
              </h2>

              <div className="divide-y divide-slate-100 mt-6">
                {faqItems.map((faq, idx) => (
                  <div key={idx} className="py-4.5 first:pt-0 last:pb-0">
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full flex items-center justify-between text-left focus:outline-none"
                    >
                      <h4 className="text-sm font-extrabold text-slate-900 leading-snug">{faq.q}</h4>
                      {activeFAQ === idx ? (
                        <ChevronUp className="h-4 w-4 text-orange-500 shrink-0 ml-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-slate-400 shrink-0 ml-4" />
                      )}
                    </button>
                    <AnimatePresence>
                      {activeFAQ === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 text-slate-655 text-xs font-bold leading-relaxed">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

const faqItems = [
  {
    q: "Is MIT Manipal a good engineering college?",
    a: "Yes. MIT Manipal is widely considered one of India's leading private engineering institutions with a legacy since 1957, excellent global exposures, and strong placements pipelines."
  },
  {
    q: "Is Manipal better than many private universities?",
    a: "Manipal is often ranked among the top private universities due to its academics, placements, infrastructure, and global recognition."
  },
  {
    q: "Does MIT Manipal provide hostel facilities?",
    a: "Yes. Extensive hostel facilities are available for both boys and girls."
  },
  {
    q: "Which branch has the best placements?",
    a: "Computer Science, AI & ML, Information Technology, and Data Science generally achieve the highest placement outcomes."
  },
  {
    q: "Does MIT Manipal support startups?",
    a: "Yes. Students have access to startup incubation and entrepreneurship programs."
  },
  {
    q: "Are international opportunities available?",
    a: "Yes. Students can participate in exchange programs, international internships, and collaborative research initiatives."
  }
];
