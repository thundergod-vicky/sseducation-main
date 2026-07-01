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

export default function AmritaAdmission() {
  useSeo({
    title: "Amrita University Guide - Fees, AEEE Entrance & Placements",
    description: "Discover Amrita Vishwa Vidyapeetham. Learn about Mata Amritanandamayi Devi (Amma) legacy, AEEE/JEE admissions, Coimbatore flagship campus & placement packages."
  });

  // Schema markup
  useJsonLd({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/amrita-vishwa-vidyapeetham/#college",
        "name": "Amrita Vishwa Vidyapeetham",
        "alternateName": "Amrita University",
        "url": "https://amrita.edu",
        "description": "Amrita Vishwa Vidyapeetham is a top-ranked multi-disciplinary research private Deemed-to-be University established in 2003 by Sri Mata Amritanandamayi Devi (Amma).",
        "logo": "https://amrita.edu/wp-content/uploads/2021/04/amrita-logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Amritanagar Post, Ettimadai",
          "addressLocality": "Coimbatore",
          "addressRegion": "Tamil Nadu",
          "postalCode": "641112",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ssadmission.in/amrita-vishwa-vidyapeetham/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is Amrita University a good university?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Amrita is regularly ranked among India's top private universities by NIRF, holds the highest NAAC A++ Grade accreditation, and is highly regarded for its engineering, research, and value-based education."
            }
          },
          {
            "@type": "Question",
            "name": "What is AEEE?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AEEE stands for Amrita Engineering Entrance Examination. It is the primary entrance test conducted annually for admissions to the B.Tech programs across all Amrita engineering campuses."
            }
          },
          {
            "@type": "Question",
            "name": "Can I apply to Amrita via JEE Main?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Amrita reserves a percentage of seats for admissions based on JEE Main scores, providing candidates with multiple entry routes."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ssadmission.in/amrita-vishwa-vidyapeetham/#breadcrumb",
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
            "name": "Amrita University",
            "item": "https://ssadmission.in/amrita-vishwa-vidyapeetham"
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
    "campuses": useRef<HTMLElement>(null),
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
      const nameInput = document.getElementById("amrita-lead-name");
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
    googleFormData.append("entry.85122333", `Amrita University Showcase - Preferred Course: ${parsed.data.course}`);

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
    { id: "legacy", label: "Founder & Vision" },
    { id: "highlights", label: "Highlights" },
    { id: "campuses", label: "Campuses" },
    { id: "why-choose", label: "Why Choose" },
    { id: "schools", label: "Academic Schools" },
    { id: "courses", label: "B.Tech Programs" },
    { id: "fees", label: "Tuition & Hostels" },
    { id: "eligibility", label: "AEEE & Admission" },
    { id: "placements", label: "Placements" },
    { id: "facilities", label: "Facilities" },
    { id: "faqs", label: "FAQs" },
  ] as const;

  const highlightsData = [
    { label: "Established Year", value: "2003", sub: "Deemed-to-be University" },
    { label: "Founder", value: "Mata Amritanandamayi Devi", sub: "Spiritual Leader Amma" },
    { label: "NAAC Grade", value: "A++ Grade", sub: "Highest Level Accreditation" },
    { label: "Total Students", value: "25,000+", sub: "From Across India & Abroad" },
    { label: "Entrance Pathway", value: "AEEE / JEE Main", sub: "Merit-Based Assessment" },
    { label: "Global Network", value: "200+ Partners", sub: "Semester Abroad Exchange" },
    { label: "Highest Package", value: "₹60.0 LPA+", sub: "Consistent Placement Growth" },
    { label: "Average Package", value: "₹9.0 LPA+", sub: "Strong Return on Investment" }
  ];

  const campusesData = [
    { name: "Coimbatore Campus (Flagship)", desc: "The flagship engineering base known for Computer Science, ECE, Robotics, and robust research labs." },
    { name: "Bengaluru Campus", desc: "Focuses on engineering, computing, and business programs with strong industry connections due to its tech hub location." },
    { name: "Chennai & Amritapuri Campuses", desc: "Offer modern technology labs, humanities, and interdisciplinary scientific platforms." },
    { name: "Kochi Campus", desc: "Recognized primarily as the base for medical sciences, pharmaceutical education, and health research." }
  ];

  const placementOverview = [
    { year: "2023", rate: "85%+", highest: "₹52.0 LPA+", average: "₹7.5 LPA" },
    { year: "2024", rate: "88%+", highest: "₹56.0 LPA+", average: "₹8.5 LPA" },
    { year: "2025", rate: "90%+", highest: "₹60.0 LPA+", average: "₹9.0 LPA+" }
  ];

  const recruiters = [
    { name: "Amazon", logo: amazonLogo },
    { name: "TCS", logo: tcsLogo },
    { name: "Infosys", logo: infosysLogo },
    { name: "Wipro", logo: wiproLogo },
    { name: "Cognizant", logo: cognizantLogo },
    { name: "Capgemini", logo: capgeminiLogo },
    { name: "EY", logo: eyLogo },
    { name: "IBM", logo: ibmLogo },
    { name: "Oracle", logo: oracleLogo },
    { name: "Axis Bank", logo: axisBankLogo },
    { name: "Tech Mahindra", logo: techMahindraLogo },
    { name: "Reliance", logo: relianceLogo },
    { name: "Kotak Mahindra", logo: githubLogo },
    { name: "Dabur", logo: daburLogo }
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      {/* Alert Banner */}
      <div className="bg-[#6b0f1a] py-3 text-center border-b border-orange-500/20 relative z-30 pt-20 lg:pt-3">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <span className="h-2 w-2 rounded-full bg-orange-400 animate-ping shrink-0" />
          <p className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.15em] leading-tight">
            NAAC A++ Grade University • Value-Based Academic Culture • admissions through AEEE & JEE Main
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-[#3a060f] text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#530c17]/95 to-[#1c0206] z-0" />
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <nav className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#c5a880] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>/</span>
                <a href="/engineering" className="hover:text-white transition-colors">Colleges</a>
                <span>/</span>
                <span className="text-orange-400">Amrita University</span>
              </nav>

              <div className="space-y-3">
                <span className="inline-block text-xs font-black uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
                  Education for Life, Education for Living
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                  Amrita Vishwa Vidyapeetham
                </h1>
              </div>

              <p className="text-slate-350 text-base sm:text-lg font-medium leading-relaxed max-w-3xl">
                One of India's leading multidisciplinary research universities. Guided by the humanitarian vision of Mata Amritanandamayi Devi (Amma), Amrita combines high academic standards, A++ NAAC ratings, international collaborations, and strong placements.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {["NAAC A++", "AEEE Entrance", "Coimbatore Flagship", "200+ Global Partners"].map((badge, idx) => (
                  <span key={idx} className="text-[10px] font-black uppercase tracking-widest bg-white/10 border border-white/15 px-4 py-2 rounded-xl text-orange-355">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Compact Form */}
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
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-rose-50 ring-8 ring-rose-50/50">
                      <CheckCircle2 className="h-10 w-10 text-[#6b0f1a]" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Counseling Request Saved</h3>
                    <p className="mt-4 text-slate-500 font-semibold leading-relaxed text-sm">
                      Thank you! Our counseling advisor will contact you shortly to explain AEEE / JEE cutoffs, branch options, and admission steps.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-xl font-black text-slate-900 leading-tight mb-1 tracking-tight">Request Information</h3>
                    <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mb-5">Get official cutoff & fee guides</p>

                    <form onSubmit={handleFormSubmit} className="space-y-3.5">
                      <div>
                        <Label htmlFor="amrita-lead-name" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Full Name *</Label>
                        <Input
                          id="amrita-lead-name"
                          placeholder="Your full name"
                          className={`h-11 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white focus:ring-2 focus:ring-rose-550/20 focus:border-rose-600 transition-all text-slate-800 text-xs ${errors.name ? "border-rose-500 bg-rose-50/10" : ""}`}
                          value={formData.name || ""}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                        />
                        {errors.name && <p className="text-[10px] font-semibold text-rose-500 mt-1 uppercase tracking-wide">{errors.name}</p>}
                      </div>

                      <div>
                        <Label htmlFor="amrita-lead-phone" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Mobile Number *</Label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <Input
                            id="amrita-lead-phone"
                            type="tel"
                            maxLength={10}
                            placeholder="10-Digit Phone"
                            className={`h-11 pl-10 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white focus:ring-2 focus:ring-rose-550/20 focus:border-rose-600 transition-all text-slate-800 text-xs ${errors.phone ? "border-rose-500 bg-rose-50/10" : ""}`}
                            value={formData.phone || ""}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                          />
                        </div>
                        {errors.phone && <p className="text-[10px] font-semibold text-rose-500 mt-1 uppercase tracking-wide">{errors.phone}</p>}
                      </div>

                      <div>
                        <Label htmlFor="amrita-lead-email" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Email (Optional)</Label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <Input
                            id="amrita-lead-email"
                            type="email"
                            placeholder="name@example.com"
                            className="h-11 pl-10 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white focus:ring-2 focus:ring-rose-550/20 focus:border-rose-600 transition-all text-slate-800 text-xs"
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
                              <SelectItem value="B.Tech AI & Data Science">B.Tech AI & DS</SelectItem>
                              <SelectItem value="B.Tech Cyber Security">B.Tech Cyber Sec</SelectItem>
                              <SelectItem value="B.Tech Electronics">B.Tech ECE</SelectItem>
                              <SelectItem value="B.Tech Aerospace">B.Tech Aerospace</SelectItem>
                              <SelectItem value="B.Tech Mechanical">B.Tech Mech</SelectItem>
                              <SelectItem value="Other Streams / MBA">Others / MBA</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.course && <p className="text-[10px] font-semibold text-rose-500 mt-1 uppercase tracking-wide">{errors.course}</p>}
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 mt-4 bg-orange-500 hover:bg-orange-655 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                        disabled={submitting}
                      >
                        {submitting ? "Processing..." : (<>Submit Inquiry <ArrowRight className="h-4.5 w-4.5" /></>)}
                      </Button>

                      <p className="text-[9px] text-center text-slate-400 font-bold uppercase tracking-wider mt-3">
                        🔒 Official counseling channel • No spam guarantee
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
                      ? "bg-rose-50 text-rose-800 border-l-4 border-[#6b0f1a] pl-3"
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
                className="py-3 bg-[#6b0f1a] hover:bg-[#530c17] text-white font-black rounded-xl text-[10px] uppercase tracking-widest transition-all block"
              >
                +91 99330 85333
              </a>
            </div>
          </aside>

          {/* Core Content Area */}
          <div className="space-y-20">
            {/* 1. Overview */}
            <section ref={sectionsRef["overview"]} id="overview" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-rose-700 bg-rose-50 px-3 py-1 rounded-full">
                Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                About Amrita Vishwa Vidyapeetham
              </h2>
              <p className="text-slate-655 leading-relaxed font-medium">
                Amrita Vishwa Vidyapeetham is one of India's leading multidisciplinary research universities, known for its academic excellence, innovation, global collaborations, and strong value-based education system. Founded under the guidance of Sri Mata Amritanandamayi Devi (Amma), the university has grown into a nationally recognized institution with multiple campuses across India.
              </p>
              <p className="text-slate-655 leading-relaxed font-medium">
                The university combines modern education with ethical values, social responsibility, research, innovation, and industry engagement, helping students develop both professionally and personally. With thousands of students from across India and multiple countries, Amrita has built a reputation for producing highly skilled graduates who excel in academics, industry, entrepreneurship, and research.
              </p>
            </section>

            {/* 2. Legacy */}
            <section ref={sectionsRef["legacy"]} id="legacy" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-rose-700 bg-rose-50 px-3 py-1 rounded-full">
                Founder & History
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                History & Mata Amritanandamayi Devi (Amma)
              </h2>
              <p className="text-slate-655 leading-relaxed font-medium">
                The journey of Amrita began with the vision of creating an educational ecosystem that combines academic excellence with humanitarian values. The university was established in 2003 and quickly emerged as one of India's fastest-growing higher education institutions.
              </p>
              <p className="text-slate-655 leading-relaxed font-medium">
                Sri Mata Amritanandamayi Devi, popularly known as Amma, is a globally respected humanitarian leader, spiritual teacher, and philanthropist. Under her guidance, Amrita institutions have expanded significantly across healthcare, education, disaster relief, environmental sustainability, and social welfare. This philosophy continues to shape the culture of Amrita University.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100 text-xs font-bold text-slate-500">
                <div className="space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm uppercase">Vision Statement</h4>
                  <p className="font-medium text-slate-500">To provide education for life, emphasizing compassion, innovation, research, leadership, and service to society while maintaining the highest academic standards.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm uppercase">Mission Statement</h4>
                  <p className="font-medium text-slate-500">Deliver world-class education, promote cutting-edge research, foster entrepreneurship/innovation, encourage social responsibility, and develop ethical leaders.</p>
                </div>
              </div>
            </section>

            {/* 3. Highlights */}
            <section ref={sectionsRef["highlights"]} id="highlights" className="scroll-mt-32">
              <div className="mb-10 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-[#6b0f1a]">University Profile</span>
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

            {/* 4. Campuses */}
            <section ref={sectionsRef["campuses"]} id="campuses" className="scroll-mt-32">
              <div className="mb-10 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-[#6b0f1a]">Campus Network</span>
                <h2 className="text-3xl font-extrabold text-slate-950 mt-2">Campuses of Amrita University</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {campusesData.map((campus, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900 mb-3">{campus.name}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed font-semibold">{campus.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Why Choose */}
            <section ref={sectionsRef["why-choose"]} id="why-choose" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-rose-700 bg-rose-50 px-3 py-1 rounded-full">
                Value & Research Focus
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Why Students Choose Amrita University
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 text-xs font-bold text-slate-500">
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-950 font-extrabold text-sm flex items-center gap-2">
                    <Award className="h-4.5 w-4.5 text-[#6b0f1a]" />
                    <span>Strong Academic Reputation</span>
                  </h4>
                  <p className="text-slate-500 font-medium">Amrita consistently ranks among India's top universities. The institution is known for academic rigor, faculty quality, research output, and student outcomes.</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-950 font-extrabold text-sm flex items-center gap-2">
                    <Compass className="h-4.5 w-4.5 text-[#6b0f1a]" />
                    <span>Research & Global Exchanges</span>
                  </h4>
                  <p className="text-slate-500 font-medium">Undergraduates participate in active research projects and publications. Strong global collaborations support student exchanges and international internships.</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-950 font-extrabold text-sm flex items-center gap-2">
                    <Zap className="h-4.5 w-4.5 text-[#6b0f1a]" />
                    <span>Industry-Oriented Learning</span>
                  </h4>
                  <p className="text-slate-500 font-medium">Integrates real-world industry demands into curriculum design via certification courses, industrial workshops, and expert corporate guest lectures.</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-950 font-extrabold text-sm flex items-center gap-2">
                    <Sparkles className="h-4.5 w-4.5 text-[#6b0f1a]" />
                    <span>Value-Based Education</span>
                  </h4>
                  <p className="text-slate-500 font-medium">Unique focus on ethics and social responsibility. Students participate in community service and disaster relief works to cultivate compassion.</p>
                </div>
              </div>
            </section>

            {/* 6. Academic Schools */}
            <section ref={sectionsRef["schools"]} id="schools" className="scroll-mt-32">
              <div className="mb-10 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-[#6b0f1a]">Academic Schools</span>
                <h2 className="text-3xl font-extrabold text-slate-950 mt-2">Academic Divisions & Departments</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <h3 className="text-base font-extrabold text-slate-900 mb-3">School of Engineering & Computing</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-semibold">Provides programs across Computer Science, AI & ML, Cyber Security, Electronics, Mechanical, Civil, and Aerospace branches.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <h3 className="text-base font-extrabold text-slate-900 mb-3">School of Artificial Intelligence</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-semibold">Focused on Machine Learning models, Deep Learning platforms, Robotics systems, and Intelligent computation environments.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <h3 className="text-base font-extrabold text-slate-900 mb-3">School of Biotechnology</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-semibold">Focuses on biotechnology research, bioinformatics systems, and advanced molecular biology/healthcare studies.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <h3 className="text-base font-extrabold text-slate-900 mb-3">School of Business</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-semibold">Management programs specializing in Business Analytics, Finance, Marketing, Operations, and Entrepreneurship.</p>
                </div>
              </div>
            </section>

            {/* 7. B.Tech Programs */}
            <section ref={sectionsRef["courses"]} id="courses" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-rose-700 bg-rose-50 px-3 py-1 rounded-full">
                Engineering Specialisations
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Undergraduate B.Tech Programs (4 Years)
              </h2>
              <p className="text-slate-655 leading-relaxed font-medium text-sm">
                Amrita offers specialized engineering courses designed to match corporate pipelines. Major courses include:
              </p>

              <div className="grid sm:grid-cols-2 gap-6 text-xs font-bold text-slate-500">
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50 space-y-1.5">
                  <h5 className="text-[#6b0f1a] font-extrabold text-sm">Computer Science & Emerging Fields</h5>
                  <p>Includes CSE, CSE with Cyber Security, CSE with Artificial Intelligence & Data Science. Emphasizes programming, system design, data mining, and smart devices configurations.</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50 space-y-1.5">
                  <h5 className="text-[#6b0f1a] font-extrabold text-sm">Electronics & Communication (ECE)</h5>
                  <p>Covers VLSI architectures, microelectronics, communications networks, and embedded systems modeling.</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50 space-y-1.5">
                  <h5 className="text-[#6b0f1a] font-extrabold text-sm">Aerospace & Chemical Engineering</h5>
                  <p>Aerospace focus areas include aerodynamics, aerospace structures, and flight mechanics. Chemical paths cover petrochemicals and process design.</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50 space-y-1.5">
                  <h5 className="text-[#6b0f1a] font-extrabold text-sm">Mechanical & Civil Engineering</h5>
                  <p>Mechanical concentrations include robotics, automation, and manufacturing. Civil focus tracks include construction management and smart city engineering.</p>
                </div>
              </div>
            </section>

            {/* 8. Fee Matrix */}
            <section ref={sectionsRef["fees"]} id="fees" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-rose-700 bg-rose-50 px-3 py-1 rounded-full">
                Fee Matrix
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Tuition & Hostel Fee Overview
              </h2>
              <p className="text-slate-655 leading-relaxed font-medium text-sm">
                Engineering tuition fees vary based on campuses, branches, and merit categories. Estimated tuition and hostel fee brackets include:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 text-xs font-bold text-slate-500">
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm">Computer Science Programs</h4>
                  <p className="text-rose-600 font-black">Approx. ₹3.5 – ₹5.0 Lakhs / Year</p>
                  <p className="text-slate-400 text-[10px]">Estimated Total Cost: ₹14.0 – ₹20.0 Lakhs</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm">AI & Data Science Programs</h4>
                  <p className="text-rose-600 font-black">Approx. ₹4.0 – ₹5.0 Lakhs / Year</p>
                  <p className="text-slate-400 text-[10px]">Estimated Total Cost: ₹16.0 – ₹20.0 Lakhs</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm">Electronics Programs</h4>
                  <p className="text-rose-600 font-black">Approx. ₹3.0 – ₹4.5 Lakhs / Year</p>
                  <p className="text-slate-400 text-[10px]">Estimated Total Cost: ₹12.0 – ₹18.0 Lakhs</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm">Mechanical & Core Programs</h4>
                  <p className="text-rose-600 font-black">Approx. ₹2.5 – ₹4.0 Lakhs / Year</p>
                  <p className="text-slate-400 text-[10px]">Estimated Total Cost: ₹10.0 – ₹16.0 Lakhs</p>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-6 mt-6 space-y-3 text-xs">
                <h4 className="font-extrabold text-orange-400 uppercase tracking-wider text-sm">Hostel Configurations</h4>
                <p>Non-AC hostels: **₹70,000 – ₹1.2 Lakhs / Year**</p>
                <p>AC hostels: **₹1.20 – ₹2.0 Lakhs / Year**</p>
                <p className="text-slate-400 text-[10px]">Mess charges vary slightly by campuses.</p>
              </div>
            </section>

            {/* 9. Eligibility & AEEE */}
            <section ref={sectionsRef["eligibility"]} id="eligibility" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#6b0f1a]">Admissions</span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                AEEE Exam & Admissions Pathways
              </h2>
              <p className="text-slate-655 leading-relaxed font-medium text-sm">
                Admissions to B.Tech courses are primarily based on performance in the **Amrita Engineering Entrance Examination (AEEE)** or via **JEE Main** scores:
              </p>

              <div className="grid sm:grid-cols-2 gap-6 text-xs font-bold text-slate-500">
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50 space-y-1.5">
                  <h5 className="text-slate-950 font-extrabold">AEEE Entrance Path</h5>
                  <p>Covers Mathematics, Physics, Chemistry, English, and Aptitude. Conducted online annually across multiple centers.</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50 space-y-1.5">
                  <h5 className="text-slate-950 font-extrabold">JEE Main Pathway</h5>
                  <p>A percentage of seats is reserved for candidates who qualify and register using their national JEE Main scores.</p>
                </div>
              </div>
            </section>

            {/* 10. Placements */}
            <section ref={sectionsRef["placements"]} id="placements" className="scroll-mt-32">
              <div className="bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-8">
                <span className="text-xs font-black uppercase tracking-widest text-rose-700 bg-rose-50 px-3 py-1 rounded-full">
                  Career Readiness
                </span>
                <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  University Placements & CDC Support
                </h2>
                <p className="text-slate-655 leading-relaxed font-medium text-sm">
                  Amrita University runs structured preparation programs (Aptitude, Soft Skills, Competitive Coding, mock interviews) via its placement cell. Key placement highlights include:
                </p>

                {/* Placement metrics */}
                <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white mt-6">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#6b0f1a] text-white text-xs font-black uppercase tracking-wider border-b border-slate-800">
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
                          <td className="p-4 text-[#6b0f1a] font-black">{row.highest}</td>
                          <td className="p-4 text-slate-600 font-extrabold">{row.average}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Recruiter Grid */}
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

            {/* 11. Facilities */}
            <section ref={sectionsRef["facilities"]} id="facilities" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-rose-700 bg-rose-50 px-3 py-1 rounded-full">
                Infrastructure
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Facilities & Student Life
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs font-bold text-slate-500">
                <div className="flex gap-3 items-start">
                  <School className="h-5 w-5 text-[#6b0f1a] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-slate-900 font-extrabold mb-1">Smart Classrooms</h5>
                    <p className="text-slate-500 font-medium">Technology-enabled teaching rooms supporting interactive learning sessions.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Library className="h-5 w-5 text-[#6b0f1a] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-slate-900 font-extrabold mb-1">Central Library</h5>
                    <p className="text-slate-500 font-medium">Large collection of textbooks, research databases, journals, and digital books.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Building className="h-5 w-5 text-[#6b0f1a] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-slate-900 font-extrabold mb-1">Research Labs</h5>
                    <p className="text-slate-500 font-medium">Advanced labs for computing, cybersecurity, embedded designs, and sustainable technology.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 12. FAQs */}
            <section ref={sectionsRef["faqs"]} id="faqs" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#6b0f1a]">FAQs</span>
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
    q: "Is Amrita University a good university?",
    a: "Yes. Amrita is regularly ranked among India's top private universities by NIRF, holds the highest NAAC A++ Grade accreditation, and is highly regarded for its engineering, research, and value-based education."
  },
  {
    q: "What is AEEE?",
    a: "AEEE stands for Amrita Engineering Entrance Examination. It is the primary entrance test conducted annually for admissions to the B.Tech programs across all Amrita engineering campuses."
  },
  {
    q: "Can I apply to Amrita via JEE Main?",
    a: "Yes. Amrita reserves a percentage of seats for admissions based on JEE Main scores, providing candidates with multiple entry routes."
  },
  {
    q: "Does Amrita offer scholarships?",
    a: "Yes. Amrita provides merit scholarships based on AEEE entrance rank, JEE Main scores, and need-based financial concessions for eligible students."
  },
  {
    q: "Which branch has the best placements?",
    a: "Computer Science, AI & Data Science, and cybersecurity related branches generally secure the highest placement percentages and the most premium packages."
  }
];
