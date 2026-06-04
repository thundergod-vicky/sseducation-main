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

export default function NmitAdmission() {
  useSeo({
    title: "NMIT Bangalore Guide - Fees, KCET & COMEDK Cutoffs, Placements",
    description: "Discover Nitte Meenakshi Institute of Technology (NMIT) Bangalore. Explore Yelahanka campus, autonomous courses, fee structures, cutoffs, and placements."
  });

  // Schema markup
  useJsonLd({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/nmit-bangalore/#college",
        "name": "Nitte Meenakshi Institute of Technology (NMIT)",
        "alternateName": "NMIT Bangalore",
        "url": "https://nmit.ac.in",
        "description": "Nitte Meenakshi Institute of Technology (NMIT), Bengaluru, is an autonomous engineering institution established in 2001, affiliated to VTU, and recognized for academic excellence, innovation, and placement preparation.",
        "logo": "https://nmit.ac.in/images/logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Govindapura, Gollahalli, Yelahanka",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560064",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ssadmission.in/nmit-bangalore/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is NMIT Bangalore autonomous?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, NMIT is an autonomous engineering college affiliated with Visvesvaraya Technological University (VTU) and approved by the AICTE, enabling flexible, industry-relevant curriculum designing."
            }
          },
          {
            "@type": "Question",
            "name": "How is NMIT Bangalore for placements?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "NMIT offers strong placements with an average package of around ₹7.5 LPA. The highest package reached ₹36 LPA+ in recent recruitment drives. Top companies like IBM, TCS, Infosys, and Qualcomm participate regularly."
            }
          },
          {
            "@type": "Question",
            "name": "What are the pathways to get admission to NMIT?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Admissions are conducted through KCET (Karnataka candidates), COMEDK UGET (national level candidates), and direct Management Quota allocations based on eligibility criteria."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ssadmission.in/nmit-bangalore/#breadcrumb",
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
            "name": "NMIT Bangalore",
            "item": "https://ssadmission.in/nmit-bangalore"
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
    "seats": useRef<HTMLElement>(null),
    "fees": useRef<HTMLElement>(null),
    "cutoffs": useRef<HTMLElement>(null),
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
      const nameInput = document.getElementById("nmit-lead-name");
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
    googleFormData.append("entry.85122333", `NMIT Bangalore Showcase - Preferred Course: ${parsed.data.course}`);

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
    { id: "legacy", label: "History & Trust" },
    { id: "highlights", label: "Highlights" },
    { id: "why-choose", label: "Why Choose NMIT" },
    { id: "seats", label: "B.Tech Programs" },
    { id: "fees", label: "Tuition & Hostels" },
    { id: "cutoffs", label: "Cutoffs" },
    { id: "placements", label: "Placements" },
    { id: "facilities", label: "Facilities" },
    { id: "faqs", label: "FAQs" },
  ] as const;

  const highlightsData = [
    { label: "Established Year", value: "2001", sub: "2+ Decades Excellence" },
    { label: "Academic Model", value: "Autonomous", sub: "Flexible Industry Syllabus" },
    { label: "Affiliation", value: "VTU Approved", sub: "Accredited by NBA & NAAC" },
    { label: "Student Strength", value: "5,000+", sub: "Highly Engaged Campus" },
    { label: "Campus Area", value: "23 Acres", sub: "Lush Campus in Yelahanka" },
    { label: "Quota Routes", value: "KCET / COMEDK / MQ", sub: "Multiple Entry Gateways" },
    { label: "Highest Package", value: "₹36.0 LPA+", sub: "Strong Tech Recruiters" },
    { label: "Average Package", value: "₹7.5 LPA", sub: "Consistent Career Growth" }
  ];

  const seatsData = [
    { branch: "Computer Science & Engineering (CSE)", seats: 240, desc: "Focuses on programming, algorithms, networks, and advanced cloud technologies." },
    { branch: "Information Science & Engineering (ISE)", seats: 180, desc: "Centered on data structures, software systems, and database analytics." },
    { branch: "Artificial Intelligence & Machine Learning (AI&ML)", seats: 180, desc: "Emphasizes machine learning models, neural networks, and computer vision." },
    { branch: "Electronics & Communication Engineering (ECE)", seats: 180, desc: "Covers VLSI architectures, microcontrollers, IoT, and cellular systems." },
    { branch: "Electrical & Electronics Engineering (EEE)", seats: 60, desc: "Focuses on power grids, renewable energy, and electrical designs." },
    { branch: "Mechanical Engineering", seats: 60, desc: "Offers pathways in robotics, automobile designs, and smart manufacturing." },
    { branch: "Civil Engineering", seats: 60, desc: "Emphasizes structural engineering, transport structures, and environmental designs." }
  ];

  const placementOverview = [
    { year: "2023", rate: "82%+", highest: "₹30.0 LPA+", average: "₹6.8 LPA" },
    { year: "2024", rate: "84%+", highest: "₹32.0 LPA+", average: "₹7.2 LPA" },
    { year: "2025", rate: "85%+", highest: "₹36.0 LPA+", average: "₹7.5 LPA" }
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

  const cutoffsData = [
    { branch: "Computer Science (CSE)", kcet: "5,000 - 8,000", comedk: "6,000 - 9,000" },
    { branch: "Information Science (ISE)", kcet: "8,000 - 11,000", comedk: "9,000 - 12,000" },
    { branch: "Artificial Intelligence (AI&ML)", kcet: "7,000 - 10,000", comedk: "8,000 - 11,000" },
    { branch: "Electronics & Communication (ECE)", kcet: "12,000 - 16,000", comedk: "13,000 - 18,000" },
    { branch: "Electrical & Electronics (EEE)", kcet: "18,000 - 24,000", comedk: "20,000 - 26,000" },
    { branch: "Mechanical Engineering", kcet: "32,000+", comedk: "25,000+" },
    { branch: "Civil Engineering", kcet: "35,000+", comedk: "28,000+" }
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      {/* Alert Banner */}
      <div className="bg-[#003366] py-3 text-center border-b border-orange-500/20 relative z-30 pt-20 lg:pt-3">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <span className="h-2 w-2 rounded-full bg-orange-500 animate-ping shrink-0" />
          <p className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.15em] leading-tight">
            Autonomous Engineering College • Affiliated with VTU & NBA Accredited • admissions through KCET, COMEDK & MQ
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-[#021730] text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#062c59]/95 to-[#000d1e] z-0" />
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <nav className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#e8701a] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>/</span>
                <a href="/engineering" className="hover:text-white transition-colors">Colleges</a>
                <span>/</span>
                <span className="text-orange-400">NMIT Bangalore</span>
              </nav>

              <div className="space-y-3">
                <span className="inline-block text-xs font-black uppercase tracking-widest text-orange-455 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
                  Autonomous Technical Excellence & Industry Integration
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                  Nitte Meenakshi Institute of Technology
                </h1>
              </div>

              <p className="text-slate-350 text-base sm:text-lg font-medium leading-relaxed max-w-3xl">
                One of Bengaluru's premier autonomous technical colleges. Located in the Yelahanka educational zone, NMIT offers specialized engineering streams, highly flexible curriculums under VTU guidelines, and outstanding career readiness training.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {["Autonomous Status", "VTU Affiliated", "Yelahanka Campus", "KCET & COMEDK"].map((badge, idx) => (
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
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 ring-8 ring-orange-100">
                      <CheckCircle2 className="h-10 w-10 text-orange-655" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Counseling Request Saved</h3>
                    <p className="mt-4 text-slate-500 font-semibold leading-relaxed text-sm">
                      Thank you! Our counseling advisor will contact you shortly to explain KCET / COMEDK cutoffs, fee configurations, and admission steps.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-xl font-black text-slate-900 leading-tight mb-1 tracking-tight">Request Information</h3>
                    <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mb-5">Get official cutoff & fee guides</p>

                    <form onSubmit={handleFormSubmit} className="space-y-3.5">
                      <div>
                        <Label htmlFor="nmit-lead-name" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Full Name *</Label>
                        <Input
                          id="nmit-lead-name"
                          placeholder="Your full name"
                          className={`h-11 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white focus:ring-2 focus:ring-orange-550/20 focus:border-orange-600 transition-all text-slate-800 text-xs ${errors.name ? "border-rose-500 bg-rose-50/10" : ""}`}
                          value={formData.name || ""}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                        />
                        {errors.name && <p className="text-[10px] font-semibold text-rose-500 mt-1 uppercase tracking-wide">{errors.name}</p>}
                      </div>

                      <div>
                        <Label htmlFor="nmit-lead-phone" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Mobile Number *</Label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <Input
                            id="nmit-lead-phone"
                            type="tel"
                            maxLength={10}
                            placeholder="10-Digit Phone"
                            className={`h-11 pl-10 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white focus:ring-2 focus:ring-orange-550/20 focus:border-orange-600 transition-all text-slate-800 text-xs ${errors.phone ? "border-rose-500 bg-rose-50/10" : ""}`}
                            value={formData.phone || ""}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                          />
                        </div>
                        {errors.phone && <p className="text-[10px] font-semibold text-rose-500 mt-1 uppercase tracking-wide">{errors.phone}</p>}
                      </div>

                      <div>
                        <Label htmlFor="nmit-lead-email" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Email (Optional)</Label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <Input
                            id="nmit-lead-email"
                            type="email"
                            placeholder="name@example.com"
                            className="h-11 pl-10 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white focus:ring-2 focus:ring-orange-550/20 focus:border-orange-600 transition-all text-slate-800 text-xs"
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
                              <SelectItem value="B.E. Computer Science">B.E. CSE</SelectItem>
                              <SelectItem value="B.E. AI & ML">B.E. AI&ML</SelectItem>
                              <SelectItem value="B.E. Information Science">B.E. ISE</SelectItem>
                              <SelectItem value="B.E. Electronics (ECE)">B.E. ECE</SelectItem>
                              <SelectItem value="B.E. Electrical (EEE)">B.E. EEE</SelectItem>
                              <SelectItem value="B.E. Mechanical">B.E. Mech</SelectItem>
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
                className="py-3 bg-[#021730] hover:bg-[#062c59] text-white font-black rounded-xl text-[10px] uppercase tracking-widest transition-all block"
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
                About NMIT Bangalore
              </h2>
              <p className="text-slate-655 leading-relaxed font-medium">
                Nitte Meenakshi Institute of Technology (NMIT), Bengaluru, is one of Karnataka's leading autonomous engineering institutions known for academic excellence, innovation, industry-oriented curriculum, and strong placement opportunities. Established in 2001, the institute has earned a reputation as one of the preferred destinations for engineering aspirants seeking quality technical education in Bengaluru.
              </p>
              <p className="text-slate-655 leading-relaxed font-medium">
                Located in Yelahanka, North Bengaluru, NMIT offers a modern campus environment with advanced laboratories, research centers, innovation facilities, and industry collaborations that prepare students for successful careers in engineering, technology, management, and research.
              </p>
              <p className="text-slate-655 leading-relaxed font-medium">
                Over the years, NMIT has produced thousands of graduates who are working in multinational corporations, startups, government organizations, research institutions, and higher education sectors across India and abroad.
              </p>
            </section>

            {/* 2. Legacy */}
            <section ref={sectionsRef["legacy"]} id="legacy" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-orange-655 bg-orange-50 px-3 py-1 rounded-full">
                History & Trust
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                History & Nitte Education Trust
              </h2>
              <p className="text-slate-655 leading-relaxed font-medium">
                NMIT was established under the prestigious Nitte Education Trust with the objective of providing high-quality technical education and developing future-ready professionals. Since its inception in 2001, the institution has grown significantly in terms of academic programs, infrastructure, research activities, and industry partnerships.
              </p>
              <p className="text-slate-655 leading-relaxed font-medium">
                The Nitte Education Trust operates over 40 institutions in medicine, engineering, dentistry, pharmacy, nursing, management, and allied health sciences. The trust has built a strong national reputation for ethical governance and academic excellence, making NMIT a reliable destination for professional careers.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100 text-xs font-bold text-slate-500">
                <div className="space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm uppercase">Vision Statement</h4>
                  <p className="font-medium text-slate-500">To build a world-class engineering institute that promotes technical innovation, value-based learning, and global standards of scientific competence.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm uppercase">Mission Statement</h4>
                  <p className="font-medium text-slate-500">Deliver quality curriculum using modern teaching aids, foster industrial collaborative projects, support startup incubation, and train professionals to serve society with high ethics.</p>
                </div>
              </div>
            </section>

            {/* 3. Highlights */}
            <section ref={sectionsRef["highlights"]} id="highlights" className="scroll-mt-32">
              <div className="mb-10 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-[#003366]">Campus Profile</span>
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

            {/* 4. Why Choose NMIT */}
            <section ref={sectionsRef["why-choose"]} id="why-choose" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-orange-655 bg-orange-50 px-3 py-1 rounded-full">
                Value proposition
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Why Students Choose NMIT Bangalore
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 text-xs font-bold text-slate-500">
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm flex items-center gap-2">
                    <Award className="h-4.5 w-4.5 text-orange-500" />
                    <span>Autonomous Flexibility</span>
                  </h4>
                  <p className="text-slate-500 font-medium">As an autonomous institute, NMIT designs its own curriculum to match current industrial requirements. Electives, multi-disciplinary fields, and value-added certification courses are updated regularly.</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm flex items-center gap-2">
                    <MapPin className="h-4.5 w-4.5 text-orange-500" />
                    <span>Yelahanka Location Advantage</span>
                  </h4>
                  <p className="text-slate-500 font-medium">Situated in North Bengaluru's rapid growth sector, NMIT is highly accessible from the International Airport and major aerospace/IT development corridors, driving direct company linkages.</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm flex items-center gap-2">
                    <Compass className="h-4.5 w-4.5 text-orange-500" />
                    <span>Active Research Focus</span>
                  </h4>
                  <p className="text-slate-500 font-medium">NMIT is one of the few colleges to get funding from national scientific councils (DST, AICTE, ISRO) for collaborative satellite development and aerospace projects.</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm flex items-center gap-2">
                    <Sparkles className="h-4.5 w-4.5 text-orange-500" />
                    <span>Structured Placement Cell</span>
                  </h4>
                  <p className="text-slate-500 font-medium">Runs targeted training in software skills, mock technical assessments, and language labs beginning from the second year to maximize final placement ratios.</p>
                </div>
              </div>
            </section>

            {/* 5. Seats */}
            <section ref={sectionsRef["seats"]} id="seats" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-orange-655 bg-orange-50 px-3 py-1 rounded-full">
                Academics
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                B.Tech Programs & Seat Distribution
              </h2>
              <p className="text-slate-655 leading-relaxed font-medium text-sm">
                NMIT offers undergraduate B.E. (Bachelor of Engineering) courses affiliated with VTU. The seat intake structure includes:
              </p>

              <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white mt-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#003366] text-white text-xs font-black uppercase tracking-wider border-b border-slate-800">
                      <th className="p-4">Engineering Stream</th>
                      <th className="p-4">Annual Intake (Seats)</th>
                      <th className="p-4">Specialisation Focus</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
                    {seatsData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-4 font-black text-slate-900">{row.branch}</td>
                        <td className="p-4 text-orange-600 font-extrabold">{row.seats}</td>
                        <td className="p-4 text-slate-500 font-medium">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 6. Fees */}
            <section ref={sectionsRef["fees"]} id="fees" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-orange-655 bg-orange-50 px-3 py-1 rounded-full">
                Fee Matrix
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Tuition Fees across Quotas & Hostel Fees
              </h2>
              <p className="text-slate-655 leading-relaxed font-medium text-sm">
                Fees at NMIT Bangalore are divided by admission routes: KCET (Government Quota), COMEDK UGET, or direct Management Quota allocations.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 text-xs font-bold text-slate-500">
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm">KCET Quota</h4>
                  <p className="text-orange-600 font-black">Approx. ₹1.10L – ₹1.30L / Year</p>
                  <p className="text-slate-400 text-[10px]">Restricted to Karnataka state domicile candidates.</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm">COMEDK Quota</h4>
                  <p className="text-orange-600 font-black">Approx. ₹2.5L – ₹3.0 Lakhs / Year</p>
                  <p className="text-slate-400 text-[10px]">For national open merit pool admissions.</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm">Management Quota</h4>
                  <p className="text-orange-600 font-black">₹14.0L – ₹22.0L (Total CSE Range)</p>
                  <p className="text-slate-400 text-[10px]">Varies by branches and slot bookings.</p>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-6 mt-6 space-y-3 text-xs">
                <h4 className="font-extrabold text-orange-400 uppercase tracking-wider text-sm">Hostel Facilities</h4>
                <p>NMIT offers high quality residential hostels: **₹90,000 – ₹1.50 Lakhs / Year** (includes food and room rent).</p>
                <p className="text-slate-400 text-[10px]">Different hostel layouts (Single, double sharing, AC/Non-AC) are available on first-come basis.</p>
              </div>
            </section>

            {/* 7. Cutoffs */}
            <section ref={sectionsRef["cutoffs"]} id="cutoffs" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#003366]">Cutoffs</span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Estimated Closing Cutoffs Trends
              </h2>
              <p className="text-slate-655 leading-relaxed font-medium text-sm">
                Rank closing metrics in recent counseling phases provide a helpful benchmark:
              </p>

              <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white mt-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#003366] text-white text-xs font-black uppercase tracking-wider border-b border-slate-800">
                      <th className="p-4">B.E. Branch</th>
                      <th className="p-4">Estimated KCET Rank</th>
                      <th className="p-4">Estimated COMEDK Rank</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
                    {cutoffsData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-4 font-black text-slate-900">{row.branch}</td>
                        <td className="p-4 text-orange-600 font-extrabold">{row.kcet}</td>
                        <td className="p-4 text-slate-500 font-bold">{row.comedk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 8. Placements */}
            <section ref={sectionsRef["placements"]} id="placements" className="scroll-mt-32">
              <div className="bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-8">
                <span className="text-xs font-black uppercase tracking-widest text-orange-655 bg-orange-50 px-3 py-1 rounded-full">
                  Career Readiness
                </span>
                <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  University Placements & CDC Support
                </h2>
                <p className="text-slate-655 leading-relaxed font-medium text-sm">
                  NMIT runs structured preparation programs (Aptitude, Soft Skills, Competitive Coding, mock interviews) via its placement cell. Key placement highlights include:
                </p>

                {/* Placement metrics */}
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

            {/* 9. Facilities */}
            <section ref={sectionsRef["facilities"]} id="facilities" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-orange-655 bg-orange-50 px-3 py-1 rounded-full">
                Infrastructure
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Facilities & Student Life
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs font-bold text-slate-500">
                <div className="flex gap-3 items-start">
                  <School className="h-5 w-5 text-[#003366] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-slate-900 font-extrabold mb-1">Smart Classrooms</h5>
                    <p className="text-slate-500 font-medium">Technology-enabled teaching rooms supporting interactive learning sessions.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Library className="h-5 w-5 text-[#003366] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-slate-900 font-extrabold mb-1">Central Library</h5>
                    <p className="text-slate-500 font-medium">Large collection of textbooks, research databases, journals, and digital books.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Building className="h-5 w-5 text-[#003366] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-slate-900 font-extrabold mb-1">Research Labs</h5>
                    <p className="text-slate-500 font-medium">Advanced labs for computing, cybersecurity, embedded designs, and sustainable technology.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 10. FAQs */}
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
    q: "Is NMIT Bangalore autonomous?",
    a: "Yes, NMIT is an autonomous engineering college affiliated with Visvesvaraya Technological University (VTU) and approved by the AICTE, enabling flexible, industry-relevant curriculum designing."
  },
  {
    q: "How can I get admission to NMIT?",
    a: "Admission is through KCET (for Karnataka candidates), COMEDK UGET (for national candidates), and Management Quota."
  },
  {
    q: "What is the location of NMIT?",
    a: "NMIT is located in Yelahanka, North Bengaluru, close to the Kempegowda International Airport and major tech parks."
  },
  {
    q: "Does NMIT provide hostel facilities?",
    a: "Yes, NMIT offers fully-equipped separate hostel facilities for boys and girls with modern amenities, sports complexes, and mess facilities."
  },
  {
    q: "What are the top recruiters at NMIT?",
    a: "Top recruiters include Infosys, TCS, Wipro, Bosch, Qualcomm, Oracle, Capgemini, and IBM."
  }
];
