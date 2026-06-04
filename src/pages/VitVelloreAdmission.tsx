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

export default function VitVelloreAdmission() {
  useSeo({
    title: "VIT Vellore Guide - B.Tech Courses, Fees, FFCS & Placements",
    description: "Explore Vellore Institute of Technology (VIT), Vellore. Check fee categories 1-5, B.Tech specialties, eligibility, VITEEE guides & placement packages."
  });

  // Schema markup
  useJsonLd({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/vit-vellore/#college",
        "name": "Vellore Institute of Technology (VIT) Vellore",
        "alternateName": "VIT Vellore",
        "url": "https://vit.ac.in",
        "description": "Vellore Institute of Technology (VIT), Vellore is one of India's most prestigious Deemed-to-be private universities established in 1984 by Dr. G. Viswanathan.",
        "logo": "https://vit.ac.in/sites/default/files/logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Katpadi Road",
          "addressLocality": "Vellore",
          "addressRegion": "Tamil Nadu",
          "postalCode": "632014",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ssadmission.in/vit-vellore/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is VIT Vellore a good university?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. VIT is considered one of India's leading private Deemed-to-be universities for engineering, technology, management, and research, consistently holding high NAAC A++ Grade accreditation and top NIRF rankings."
            }
          },
          {
            "@type": "Question",
            "name": "What is FFCS in VIT?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "FFCS stands for Fully Flexible Credit System. It is a student-centric learning framework that allows students to choose their own faculty, select class schedules, and design their personalized learning paths."
            }
          },
          {
            "@type": "Question",
            "name": "What are the B.Tech fee categories in VIT?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "VIT admissions follow a 5-category fee structure based on VITEEE ranks. Category 1 has the lowest tuition fees (approx. ₹2.0 Lakhs/year), increasing progressively up to Category 5 (approx. ₹5.0 Lakhs/year)."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ssadmission.in/vit-vellore/#breadcrumb",
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
            "name": "VIT Vellore",
            "item": "https://ssadmission.in/vit-vellore"
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
    "viteee": useRef<HTMLElement>(null),
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
      const nameInput = document.getElementById("vit-lead-name");
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
    googleFormData.append("entry.85122333", `VIT Vellore - Preferred Course: ${parsed.data.course}`);

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
    { id: "legacy", label: "Founder & Legacy" },
    { id: "highlights", label: "Highlights" },
    { id: "why-choose", label: "Why Choose" },
    { id: "schools", label: "Schools" },
    { id: "courses", label: "B.Tech Programs" },
    { id: "viteee", label: "VITEEE & Category System" },
    { id: "fees", label: "Tuition & Hostels" },
    { id: "eligibility", label: "Eligibility" },
    { id: "placements", label: "Placements" },
    { id: "facilities", label: "Campus Facilities" },
    { id: "faqs", label: "FAQs" },
  ] as const;

  const highlightsData = [
    { label: "Established Year", value: "1984", sub: "Flagship Deemed University" },
    { label: "Founder", value: "Dr. G. Viswanathan", sub: "Visionary Leadership" },
    { label: "NAAC Grade", value: "A++ Grade", sub: "Highest Level Accreditation" },
    { label: "Campus Area", value: "350+ Acres", sub: "Fully Residential, Vellore" },
    { label: "Student Strength", value: "35,000+", sub: "From 50+ Countries" },
    { label: "Global Network", value: "300+ Partners", sub: "Semester Abroad Pathways" },
    { label: "Faculty Members", value: "2,000+", sub: "Advanced Research Culture" },
    { label: "Academic System", value: "FFCS Model", sub: "Fully Flexible Credit System" }
  ];

  const schoolsData = [
    { name: "School of Computer Science & Engineering (SCSE)", specialties: "B.Tech CSE, AI & ML, Data Science, Cyber Security, IoT, Software Engineering" },
    { name: "School of Electronics Engineering (SENSE)", specialties: "B.Tech Electronics & Communication, VLSI Design, Embedded Systems" },
    { name: "School of Mechanical Engineering (SMEC)", specialties: "B.Tech Mechanical Engineering, Robotics, Automation, Automotive Engineering" },
    { name: "School of Civil Engineering (SCE)", specialties: "B.Tech Civil Engineering, Structural Systems, Smart Cities, Construction Tech" },
    { name: "School of Chemical Engineering (SCHEME)", specialties: "Process Design, Petrochemicals, Industrial applications" },
    { name: "School of Business (VITBS)", specialties: "Management education, Business Analytics, Finance, Marketing, Operations" },
    { name: "School of Law, Design, & Social Sciences", specialties: "Integrated Law programs, Product Design, User Experience, Humanities" }
  ];

  const cseFees = [
    { cat: "Category 1", fee: "₹2.0 Lakhs" },
    { cat: "Category 2", fee: "₹3.0 Lakhs" },
    { cat: "Category 3", fee: "₹4.0 Lakhs" },
    { cat: "Category 4", fee: "₹4.5 Lakhs" },
    { cat: "Category 5", fee: "₹5.0 Lakhs" }
  ];

  const eceFees = [
    { cat: "Category 1", fee: "₹2.0 Lakhs" },
    { cat: "Category 2", fee: "₹3.0 Lakhs" },
    { cat: "Category 3", fee: "₹3.8 Lakhs" },
    { cat: "Category 4", fee: "₹4.3 Lakhs" },
    { cat: "Category 5", fee: "₹4.8 Lakhs" }
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
      <div className="bg-[#002f6c] py-3 text-center border-b border-[#c5a880]/20 relative z-30 pt-20 lg:pt-3">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <span className="h-2 w-2 rounded-full bg-yellow-500 animate-ping shrink-0" />
          <p className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.15em] leading-tight">
            NAAC A++ Grade Deemed University • NIRF Top Ranked • FFCS Academic System
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-[#04122c] text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#051e44]/95 to-[#020914] z-0" />
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <nav className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#c5a880] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>/</span>
                <a href="/engineering" className="hover:text-white transition-colors">Colleges</a>
                <span>/</span>
                <span className="text-yellow-400">VIT Vellore</span>
              </nav>

              <div className="space-y-3">
                <span className="inline-block text-xs font-black uppercase tracking-widest text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-3 py-1 rounded-full">
                  Globally Recognized Flagship Institution
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                  Vellore Institute of Technology (VIT), Vellore
                </h1>
              </div>

              <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed max-w-3xl">
                India's top-ranked private Deemed-to-be University. Attracting students from all Indian states and 50+ countries, VIT Vellore features a flexible credit system, state-of-the-art research laboratories, and one of the largest corporate placement networks.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {["NAAC A++ Grade", "VITEEE Entrance", "Fully Flexible Credit System (FFCS)", "350+ Acres Campus"].map((badge, idx) => (
                  <span key={idx} className="text-[10px] font-black uppercase tracking-widest bg-white/10 border border-white/15 px-4 py-2 rounded-xl text-yellow-400">
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
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-50 ring-8 ring-yellow-50/50">
                      <CheckCircle2 className="h-10 w-10 text-[#002f6c]" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Counseling Request Saved</h3>
                    <p className="mt-4 text-slate-500 font-semibold leading-relaxed text-sm">
                      Thank you! Our senior admissions advisor has received your preferences and will connect shortly to explain cutoffs, fee categories, and procedures.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-xl font-black text-slate-900 leading-tight mb-1 tracking-tight">Request Information</h3>
                    <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mb-5">Get official cutoff & fee guides</p>

                    <form onSubmit={handleFormSubmit} className="space-y-3.5">
                      <div>
                        <Label htmlFor="vit-lead-name" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Full Name *</Label>
                        <Input
                          id="vit-lead-name"
                          placeholder="Your full name"
                          className={`h-11 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all text-slate-800 text-xs ${errors.name ? "border-rose-500 bg-rose-50/10" : ""}`}
                          value={formData.name || ""}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                        />
                        {errors.name && <p className="text-[10px] font-semibold text-rose-500 mt-1 uppercase tracking-wide">{errors.name}</p>}
                      </div>

                      <div>
                        <Label htmlFor="vit-lead-phone" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Mobile Number *</Label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <Input
                            id="vit-lead-phone"
                            type="tel"
                            maxLength={10}
                            placeholder="10-Digit Phone"
                            className={`h-11 pl-10 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all text-slate-800 text-xs ${errors.phone ? "border-rose-500 bg-rose-50/10" : ""}`}
                            value={formData.phone || ""}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                          />
                        </div>
                        {errors.phone && <p className="text-[10px] font-semibold text-rose-500 mt-1 uppercase tracking-wide">{errors.phone}</p>}
                      </div>

                      <div>
                        <Label htmlFor="vit-lead-email" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Email (Optional)</Label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <Input
                            id="vit-lead-email"
                            type="email"
                            placeholder="name@example.com"
                            className="h-11 pl-10 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all text-slate-800 text-xs"
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
                              <SelectItem value="B.Tech CSE AI/ML">B.Tech CSE (AI & ML)</SelectItem>
                              <SelectItem value="B.Tech CSE Data Science">B.Tech CSE (Data Sci)</SelectItem>
                              <SelectItem value="B.Tech Electronics">B.Tech ECE</SelectItem>
                              <SelectItem value="B.Tech Mechanical">B.Tech Mech</SelectItem>
                              <SelectItem value="B.Tech Civil">B.Tech Civil</SelectItem>
                              <SelectItem value="Integrated Programs / PG">Integrated / PG</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.course && <p className="text-[10px] font-semibold text-rose-500 mt-1 uppercase tracking-wide">{errors.course}</p>}
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 mt-4 bg-yellow-500 hover:bg-yellow-600 text-[#04122c] font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
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

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 max-w-7xl py-12 relative">
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
          {/* Desktop Sticky Sidebar */}
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
                      ? "bg-yellow-500/10 text-yellow-750 border-l-4 border-yellow-500 pl-3"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-4 text-center">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                Need Admissions Help?
              </p>
              <a
                href="tel:+919933085333"
                className="py-3 bg-[#002f6c] hover:bg-[#02214d] text-white font-black rounded-xl text-[10px] uppercase tracking-widest transition-all block"
              >
                +91 99330 85333
              </a>
            </div>
          </aside>

          {/* Main Sections */}
          <div className="space-y-20">
            {/* Overview */}
            <section ref={sectionsRef["overview"]} id="overview" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
                Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                About Vellore Institute of Technology (VIT), Vellore
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                Vellore Institute of Technology (VIT), Vellore is one of India's most prestigious private universities, recognized for its academic excellence, research output, innovation ecosystem, global collaborations, and outstanding placement record. Established in 1984 by Dr. G. Viswanathan, VIT has grown from a small engineering college into a globally recognized multidisciplinary institution attracting students from every state in India and over 50 countries worldwide.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                Located in Vellore, Tamil Nadu, the university is spread across a modern campus equipped with world-class infrastructure, advanced research facilities, smart classrooms, innovation centers, international hostels, and industry-sponsored laboratories.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                VIT is known for its student-centric approach, flexible academic system (FFCS), strong industry engagement, and one of the largest placement networks among private universities in India.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                Today, VIT consistently ranks among India's top engineering institutions and is widely regarded as one of the best private universities for engineering, technology, management, research, and innovation.
              </p>
            </section>

            {/* History & Legacy */}
            <section ref={sectionsRef["legacy"]} id="legacy" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
                Founder & Legacy
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                The Legacy of Excellence
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                The journey of VIT began in 1984 when Dr. G. Viswanathan established Vellore Engineering College with the vision of providing quality technical education that meets global standards. Over the decades, the institution expanded significantly in terms of academic programs, infrastructure, research capabilities, international collaborations, and industry partnerships.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                In 2001, the Government of India conferred Deemed-to-be University status upon the institution, leading to the formation of VIT University. Today, the VIT Group includes campuses in Vellore, Chennai, Bhopal, and AP. Among these campuses, VIT Vellore remains the flagship institution and the most sought-after destination for engineering aspirants.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                <div className="space-y-2">
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest text-[#002f6c]">Dr. G. Viswanathan • Founder</h4>
                  <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                    A renowned educationist, former parliamentarian, and visionary leader who transformed VIT into one of India's leading educational institutions. His vision centered on global quality education, research excellence, industry readiness, international collaborations, and startup mentorship.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest text-[#002f6c]">Vision & Mission</h4>
                  <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                    <strong>Vision:</strong> To transform education through excellence in teaching, research, innovation, and entrepreneurship while contributing meaningfully to society and global development.
                  </p>
                  <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                    <strong>Mission:</strong> Deliver world-class education, promote research and innovation, foster entrepreneurship, encourage global engagement, and develop ethical leaders.
                  </p>
                </div>
              </div>
            </section>

            {/* Highlights */}
            <section ref={sectionsRef["highlights"]} id="highlights" className="scroll-mt-32">
              <div className="mb-10 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-[#002f6c]">VIT Vellore</span>
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

            {/* Why Choose */}
            <section ref={sectionsRef["why-choose"]} id="why-choose" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
                Why Choose VIT
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Why Students Choose VIT Vellore
              </h2>
              <p className="text-slate-650 leading-relaxed font-medium">
                VIT Vellore remains one of the most preferred destinations for engineering education in India due to several unique advantages:
              </p>

              <div className="grid sm:grid-cols-2 gap-6 text-xs font-bold text-slate-500">
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-950 font-extrabold text-sm flex items-center gap-2">
                    <Award className="h-4.5 w-4.5 text-yellow-600" />
                    <span>Strong National Reputation</span>
                  </h4>
                  <p className="text-slate-500">VIT is highly recognized for academic quality, outstanding placement histories, research infrastructure, and innovation culture.</p>
                </div>

                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-950 font-extrabold text-sm flex items-center gap-2">
                    <Zap className="h-4.5 w-4.5 text-yellow-600" />
                    <span>Flexible Credit System (FFCS)</span>
                  </h4>
                  <p className="text-slate-500">Allows students to choose faculty members, select class timings, and customize their semesters to build personalized learning pathways.</p>
                </div>

                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-950 font-extrabold text-sm flex items-center gap-2">
                    <Globe className="h-4.5 w-4.5 text-yellow-600" />
                    <span>Global Exposure</span>
                  </h4>
                  <p className="text-slate-500">Collaborations with 300+ international universities for student exchange programs, Semester Abroad (SAP) options, and global internships.</p>
                </div>

                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-950 font-extrabold text-sm flex items-center gap-2">
                    <Compass className="h-4.5 w-4.5 text-yellow-600" />
                    <span>Research & Incubation</span>
                  </h4>
                  <p className="text-slate-500">Access to 50+ research centers and innovation labs, providing institutional support for patent filing, research projects, and startup creation.</p>
                </div>
              </div>
            </section>

            {/* Schools */}
            <section ref={sectionsRef["schools"]} id="schools" className="scroll-mt-32">
              <div className="mb-10 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-[#002f6c]">Academic Structure</span>
                <h2 className="text-3xl font-extrabold text-slate-950 mt-2">Schools at VIT Vellore</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {schoolsData.map((school, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900 mb-3">{school.name}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed font-semibold">{school.specialties}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Courses Offered */}
            <section ref={sectionsRef["courses"]} id="courses" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
                B.Tech Programs
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Specialisations & Career Focus
              </h2>
              <p className="text-slate-650 leading-relaxed font-medium text-sm">
                VIT Vellore offers a massive selection of engineering streams. Key specialized programs include:
              </p>

              <div className="grid sm:grid-cols-2 gap-6 text-xs font-bold text-slate-500">
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50 space-y-1.5">
                  <h5 className="text-[#002f6c] font-extrabold text-sm">B.Tech Computer Science & Engineering</h5>
                  <p>Core specialties include Artificial Intelligence & Machine Learning, Data Science, Cyber Security, and Internet of Things (IoT). Prepares graduates for careers as Software Engineers, AI developers, Data Scientists, or Cloud Developers.</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50 space-y-1.5">
                  <h5 className="text-[#002f6c] font-extrabold text-sm">B.Tech Electronics & Communication</h5>
                  <p>Focuses on VLSI design, Embedded Systems, Communication networks, and Signal Processing. Prepares students for careers in microelectronics, IoT, or telecommunications.</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50 space-y-1.5">
                  <h5 className="text-[#002f6c] font-extrabold text-sm">B.Tech Electrical & Electronics</h5>
                  <p>Concentrations in Power Systems, Electric Vehicles (EV), Smart Grids, and Renewable Energy systems.</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50 space-y-1.5">
                  <h5 className="text-[#002f6c] font-extrabold text-sm">B.Tech Mechanical / Civil</h5>
                  <p>Mechanical focus areas include Robotics, automation, automotive design, and CAD/CAM. Civil tracks emphasize structural systems, green construction, and smart cities planning.</p>
                </div>
              </div>
            </section>

            {/* VITEEE & Category System */}
            <section ref={sectionsRef["viteee"]} id="viteee" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#002f6c]">Admission Pathways</span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                VITEEE & The 5-Category System
              </h2>
              <p className="text-slate-660 leading-relaxed font-medium">
                Admissions to B.Tech courses are primarily based on performance in the **VIT Engineering Entrance Examination (VITEEE)**, one of India's largest private entrance exams testing Physics, Chemistry, Math/Bio, Aptitude, and English.
              </p>
              <p className="text-slate-660 leading-relaxed font-medium">
                VIT utilizes a unique **Category System** where tuition fees vary according to the rank scored in VITEEE. High rankers secure seats in lower-cost categories, while progressive slots fill into higher brackets:
              </p>

              <div className="grid sm:grid-cols-3 gap-4 text-xs font-bold text-slate-500">
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
                  <h5 className="text-emerald-700 font-extrabold mb-1">Category 1</h5>
                  <p>Tuition fees are at their lowest. Awarded to top-tier VITEEE rankers.</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
                  <h5 className="text-yellow-600 font-extrabold mb-1">Category 2 & 3</h5>
                  <p>Mid-range tuition structure. Highly competitive allocation.</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
                  <h5 className="text-rose-600 font-extrabold mb-1">Category 4 & 5</h5>
                  <p>Higher tuition brackets. Assigned to high-demand streams as slots fill.</p>
                </div>
              </div>
            </section>

            {/* Fees Table */}
            <section ref={sectionsRef["fees"]} id="fees" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
                Fee Matrix
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Approximate Annual Tuition & Hostels
              </h2>
              <p className="text-slate-650 leading-relaxed font-medium text-sm">
                Tuition fees differ based on branch and category allocation. Non-CSE streams generally close at lower categories.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-sm font-black text-slate-950 uppercase tracking-widest mb-3 text-[#002f6c] border-b border-slate-100 pb-2">B.Tech CSE Tuition Fee</h4>
                  <div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm bg-white">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-[#002f6c] text-white font-black uppercase">
                          <th className="p-3">Category</th>
                          <th className="p-3">Annual Tuition</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-bold text-slate-700">
                        {cseFees.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50">
                            <td className="p-3 font-black text-slate-950">{row.cat}</td>
                            <td className="p-3 text-rose-600 font-extrabold">{row.fee}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-black text-slate-950 uppercase tracking-widest mb-3 text-[#002f6c] border-b border-slate-100 pb-2">B.Tech ECE Tuition Fee</h4>
                  <div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm bg-white">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-[#002f6c] text-white font-black uppercase">
                          <th className="p-3">Category</th>
                          <th className="p-3">Annual Tuition</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-bold text-slate-700">
                        {eceFees.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50">
                            <td className="p-3 font-black text-slate-950">{row.cat}</td>
                            <td className="p-3 text-rose-600 font-extrabold">{row.fee}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-xs font-bold text-slate-500 pt-6">
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-950 font-extrabold text-sm">Hostel Configurations</h4>
                  <p>Non-AC room packages range from **₹90,000 to ₹1.5 Lakhs / year**. Air Conditioned (AC) rooms range from **₹1.5 Lakhs to ₹2.5 Lakhs / year**. Mess charges vary by dining selections.</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-950 font-extrabold text-sm">Scholarships & GVSDP</h4>
                  <p>The GV School Development Programme (GVSDP) offers tuition waivers or fee concessions based on VITEEE entrance ranks. Sports and merit-based concessions are also available.</p>
                </div>
              </div>
            </section>

            {/* Eligibility */}
            <section ref={sectionsRef["eligibility"]} id="eligibility" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#002f6c]">Requirements</span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Admission Eligibility Guidelines
              </h2>
              <div className="text-xs font-bold text-slate-500 space-y-3">
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="h-4.5 w-4.5 text-yellow-600 shrink-0 mt-0.5" />
                  <span>Candidates must pass Class 12 (10+2) with Physics, Chemistry, and Mathematics/Biology.</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="h-4.5 w-4.5 text-yellow-600 shrink-0 mt-0.5" />
                  <span>Qualifying thresholds and age criteria apply as prescribed in the official VITEEE guidelines.</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="h-4.5 w-4.5 text-yellow-600 shrink-0 mt-0.5" />
                  <span>Selection is strictly based on the rank obtained in VITEEE and academic eligibility verification.</span>
                </p>
              </div>
            </section>

            {/* Placements */}
            <section ref={sectionsRef["placements"]} id="placements" className="scroll-mt-32">
              <div className="bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-8">
                <span className="text-xs font-black uppercase tracking-widest text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
                  Career Development Centre (CDC)
                </span>
                <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  Placements & Career Opportunities
                </h2>
                <p className="text-slate-650 leading-relaxed font-medium text-sm">
                  VIT Vellore maintains a strong placement network, supported by its Career Development Centre. Preparation programs include aptitude drills, coding modules (Algorithms & Data Structures), and technical mock rounds:
                </p>

                <div className="grid sm:grid-cols-3 gap-6 text-xs font-bold text-slate-500">
                  <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
                    <h5 className="text-[#002f6c] font-extrabold mb-1">Regular Offers</h5>
                    <p>Entry-level hiring across major IT consulting and core services sectors.</p>
                  </div>
                  <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
                    <h5 className="text-[#002f6c] font-extrabold mb-1">Dream Offers</h5>
                    <p>Premium placements offering packages **exceeding ₹10.0 LPA**.</p>
                  </div>
                  <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
                    <h5 className="text-[#002f6c] font-extrabold mb-1">Super Dream Offers</h5>
                    <p>High-end roles with top product firms, tech giants, or startups, **exceeding ₹20.0 LPA**.</p>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 text-center lg:text-left">Top Campus Recruiters</h4>
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

            {/* Facilities */}
            <section ref={sectionsRef["facilities"]} id="facilities" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
                University Infrastructure
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Facilities & Campus Life
              </h2>
              <p className="text-slate-650 leading-relaxed font-medium text-sm">
                VIT's modern 350+ Acres residential campus provides premium facilities for students:
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs font-bold text-slate-500">
                <div className="flex gap-3 items-start">
                  <School className="h-5 w-5 text-yellow-650 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-slate-900 font-extrabold mb-1">Smart Classrooms</h5>
                    <p className="text-slate-500">Technically-enabled modern spaces facilitating interactive learning sessions.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Library className="h-5 w-5 text-yellow-650 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-slate-900 font-extrabold mb-1">Central Libraries</h5>
                    <p className="text-slate-500">Vast collection of reference volumes, digital resources portals, and scientific journals.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Building className="h-5 w-5 text-yellow-650 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-slate-900 font-extrabold mb-1">Research Laboratories</h5>
                    <p className="text-slate-500">Advanced research facilities supporting engineering, sciences, and innovation projects.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Trophy className="h-5 w-5 text-yellow-650 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-slate-900 font-extrabold mb-1">Sports Infrastructures</h5>
                    <p className="text-slate-500">Fields for Cricket, Football, Basketball, Tennis courts, and indoor gymnasiums.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Building2 className="h-5 w-5 text-yellow-650 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-slate-900 font-extrabold mb-1">International Hostels</h5>
                    <p className="text-slate-500">Massive residential complexes for Indian and international students with dining options.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <HeartPulse className="h-5 w-5 text-yellow-650 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-slate-900 font-extrabold mb-1">Medical Care</h5>
                    <p className="text-slate-500">On-campus health clinics providing emergency medical care and pharmacy support.</p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-xs font-bold text-slate-500 space-y-2">
                <span className="text-slate-950 font-black uppercase text-[10px] block">Student Festivals</span>
                <p>The campus holds two major annual festivals: **Riviera**, one of India's largest cultural fests, and **Gravitas**, an international technical symposium hosting hackathons, engineering workshops, and research presentations.</p>
              </div>
            </section>

            {/* FAQs */}
            <section ref={sectionsRef["faqs"]} id="faqs" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#002f6c]">FAQs</span>
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
                        <ChevronUp className="h-4 w-4 text-yellow-600 shrink-0 ml-4" />
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
                          <p className="mt-3 text-slate-650 text-xs font-bold leading-relaxed">{faq.a}</p>
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
