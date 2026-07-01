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

export default function BitsPilaniAdmission() {
  useSeo({
    title: "BITS Pilani B.E. & M.Sc Guide - Fees, BITSAT Exam & Placements",
    description: "Discover BITS Pilani. Learn about BITSAT admissions, Pilani/Goa/Hyderabad campuses, M.Sc Dual Degree system, Practice School, hosteling & placements."
  });

  // Schema markup
  useJsonLd({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/bits-pilani/#college",
        "name": "Birla Institute of Technology and Science (BITS) Pilani",
        "alternateName": "BITS Pilani",
        "url": "https://bits-pilani.ac.in",
        "description": "Birla Institute of Technology and Science (BITS), Pilani is a premier private Deemed-to-be University established in 1964, recognized as an Institution of Eminence in India.",
        "logo": "https://www.bits-pilani.ac.in/wp-content/uploads/BITS_Pilani-Logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Vidya Vihar",
          "addressLocality": "Pilani",
          "addressRegion": "Rajasthan",
          "postalCode": "333031",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ssadmission.in/bits-pilani/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the Practice School (PS) system at BITS Pilani?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Practice School (PS) system is a structured internship program that integrates academic studies with industrial experience. It consists of PS-1 (two months in summer after year 2) and PS-2 (five and a half months in year 4), providing guaranteed corporate exposure."
            }
          },
          {
            "@type": "Question",
            "name": "How does the M.Sc Dual Degree system work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Students admitted to M.Sc programs can apply for a dual degree in one of the B.E. engineering branches at the end of their first year, based on their CGPA score in the first year. This results in getting both B.E. and M.Sc degrees in 5 years."
            }
          },
          {
            "@type": "Question",
            "name": "Does BITS Pilani have reservation policy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. BITS Pilani has no reservation policy of any kind. Admissions are strictly based on merit obtained in the BITSAT entrance examination or direct admission for board toppers."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ssadmission.in/bits-pilani/#breadcrumb",
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
            "name": "BITS Pilani",
            "item": "https://ssadmission.in/bits-pilani"
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
      const nameInput = document.getElementById("bits-lead-name");
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
    googleFormData.append("entry.85122333", `BITS Pilani Showcase - Preferred Course: ${parsed.data.course}`);

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
    { id: "campuses", label: "Campuses" },
    { id: "why-choose", label: "Why Choose BITS" },
    { id: "courses", label: "Programs" },
    { id: "fees", label: "Tuition & Hostels" },
    { id: "eligibility", label: "BITSAT Details" },
    { id: "placements", label: "Placements" },
    { id: "facilities", label: "Facilities" },
    { id: "faqs", label: "FAQs" },
  ] as const;

  const highlightsData = [
    { label: "Established Year", value: "1964", sub: "Deemed University" },
    { label: "Accreditation", value: "Institution of Eminence", sub: "Top Tier National Tag" },
    { label: "Selection Route", value: "BITSAT Entrance", sub: "100% Merit-Based Process" },
    { label: "Reservation Policy", value: "No Reservations", sub: "Purely Academic Merits" },
    { label: "Internship System", value: "Practice School", sub: "PS-1 & PS-2 Guaranteed" },
    { label: "Campuses", value: "4 Campuses", sub: "Pilani, Goa, Hyd, Dubai" },
    { label: "Highest Package", value: "₹70.0 LPA+", sub: "Excellent Tech Opportunities" },
    { label: "Average Package", value: "₹22.0 LPA+", sub: "Highest ROI in Private Sector" }
  ];

  const campusesData = [
    { name: "Pilani Campus (Flagship)", desc: "The legendary parent campus in Rajasthan, famous for academic legacy, research foundations, and startup culture." },
    { name: "K.K. Birla Goa Campus", desc: "Located in Zuarinagar, Goa. Known for excellent computer science culture, tech fests, and marine-proximate campus atmosphere." },
    { name: "Hyderabad Campus", desc: "Established in 2008, featuring state-of-the-art research hubs, clean tech labs, and strong links with Hyderabad's IT landscape." },
    { name: "Dubai Campus", desc: "The international branch offering global technology exposure and industrial interfaces in the Middle East." }
  ];

  const placementOverview = [
    { year: "2023", rate: "95%+", highest: "₹60.7 LPA+", average: "₹20.5 LPA" },
    { year: "2024", rate: "94%+", highest: "₹65.0 LPA+", average: "₹21.8 LPA" },
    { year: "2025", rate: "93%+", highest: "₹70.0 LPA+", average: "₹22.0 LPA+" }
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
      <div className="bg-[#0b1a30] py-3 text-center border-b border-orange-500/20 relative z-30 pt-20 lg:pt-3">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <span className="h-2 w-2 rounded-full bg-yellow-500 animate-ping shrink-0" />
          <p className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.15em] leading-tight">
            Institution of Eminence • Pure Merit Admission via BITSAT • PS-1 & PS-2 Industry Internships
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-[#07111e] text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c2340]/95 to-[#020508] z-0" />
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <nav className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#d4af37] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>/</span>
                <a href="/engineering" className="hover:text-white transition-colors">Colleges</a>
                <span>/</span>
                <span className="text-orange-400">BITS Pilani</span>
              </nav>

              <div className="space-y-3">
                <span className="inline-block text-xs font-black uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
                  Nurturing Innovation, Leadership, & Academic Excellence
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                  Birla Institute of Technology and Science, Pilani
                </h1>
              </div>

              <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed max-w-3xl">
                Widely regarded as India's finest private university for engineering and science. Established in 1964 in collaboration with MIT (USA), BITS Pilani runs a zero-reservation merit policy, customizable academic selections, and the renowned Practice School internship model.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {["Institution of Eminence", "BITSAT Merit", "M.Sc Dual Degree", "Zero Reservation"].map((badge, idx) => (
                  <span key={idx} className="text-[10px] font-black uppercase tracking-widest bg-white/10 border border-white/15 px-4 py-2 rounded-xl text-yellow-500">
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
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 ring-8 ring-slate-100">
                      <CheckCircle2 className="h-10 w-10 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Counseling Request Saved</h3>
                    <p className="mt-4 text-slate-500 font-semibold leading-relaxed text-sm">
                      Thank you! Our counseling advisor will contact you shortly to explain BITSAT cutoffs, M.Sc Dual Degree selection, and fees structures.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-xl font-black text-slate-900 leading-tight mb-1 tracking-tight">Request Information</h3>
                    <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mb-5">Get official cutoff & fee guides</p>

                    <form onSubmit={handleFormSubmit} className="space-y-3.5">
                      <div>
                        <Label htmlFor="bits-lead-name" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Full Name *</Label>
                        <Input
                          id="bits-lead-name"
                          placeholder="Your full name"
                          className={`h-11 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-600 transition-all text-slate-800 text-xs ${errors.name ? "border-rose-500 bg-rose-50/10" : ""}`}
                          value={formData.name || ""}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                        />
                        {errors.name && <p className="text-[10px] font-semibold text-rose-500 mt-1 uppercase tracking-wide">{errors.name}</p>}
                      </div>

                      <div>
                        <Label htmlFor="bits-lead-phone" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Mobile Number *</Label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <Input
                            id="bits-lead-phone"
                            type="tel"
                            maxLength={10}
                            placeholder="10-Digit Phone"
                            className={`h-11 pl-10 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-600 transition-all text-slate-800 text-xs ${errors.phone ? "border-rose-500 bg-rose-50/10" : ""}`}
                            value={formData.phone || ""}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                          />
                        </div>
                        {errors.phone && <p className="text-[10px] font-semibold text-rose-500 mt-1 uppercase tracking-wide">{errors.phone}</p>}
                      </div>

                      <div>
                        <Label htmlFor="bits-lead-email" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Email (Optional)</Label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <Input
                            id="bits-lead-email"
                            type="email"
                            placeholder="name@example.com"
                            className="h-11 pl-10 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-600 transition-all text-slate-800 text-xs"
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
                              <SelectItem value="B.E. Electronics (ECE)">B.E. ECE</SelectItem>
                              <SelectItem value="B.E. Electrical & Electronics">B.E. EEE</SelectItem>
                              <SelectItem value="B.E. Mechanical">B.E. Mech</SelectItem>
                              <SelectItem value="B.E. Chemical">B.E. Chemical</SelectItem>
                              <SelectItem value="M.Sc Dual Degree Program">M.Sc Dual Degree</SelectItem>
                              <SelectItem value="Other Streams / ME">Others / M.E.</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.course && <p className="text-[10px] font-semibold text-rose-500 mt-1 uppercase tracking-wide">{errors.course}</p>}
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 mt-4 bg-yellow-600 hover:bg-yellow-750 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
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
                      ? "bg-slate-100 text-yellow-750 border-l-4 border-yellow-600 pl-3"
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
                className="py-3 bg-[#0c2340] hover:bg-[#07111e] text-white font-black rounded-xl text-[10px] uppercase tracking-widest transition-all block"
              >
                +91 99330 85333
              </a>
            </div>
          </aside>

          {/* Core Content Area */}
          <div className="space-y-20">
            {/* 1. Overview */}
            <section ref={sectionsRef["overview"]} id="overview" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-yellow-750 bg-slate-50 px-3 py-1 rounded-full">
                Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                About BITS Pilani
              </h2>
              <p className="text-slate-655 leading-relaxed font-medium">
                Birla Institute of Technology and Science (BITS), Pilani is one of India's most prestigious higher education institutions and is widely regarded as one of the best engineering colleges in the country after the IITs. Known for its academic excellence, innovation-driven culture, flexible academic system, exceptional placements, and entrepreneurial ecosystem, BITS Pilani has established itself as a dream destination for engineering and science aspirants.
              </p>
              <p className="text-slate-655 leading-relaxed font-medium">
                Founded by the Birla family, BITS Pilani combines world-class education with a strong emphasis on research, innovation, leadership, and industry engagement. The institute has produced thousands of successful engineers, entrepreneurs, researchers, business leaders, and innovators working across the globe.
              </p>
              <p className="text-slate-655 leading-relaxed font-medium">
                Today, BITS Pilani operates multiple campuses and continues to attract some of the brightest students from India and abroad through the highly competitive BITSAT entrance examination.
              </p>
            </section>

            {/* 2. Legacy */}
            <section ref={sectionsRef["legacy"]} id="legacy" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-yellow-750 bg-slate-50 px-3 py-1 rounded-full">
                Founder & History
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                History & The G.D. Birla Legacy
              </h2>
              <p className="text-slate-655 leading-relaxed font-medium">
                The roots of BITS Pilani trace back to the educational vision of the Birla family. The institution began as a small school in Pilani, Rajasthan, and gradually evolved into a center of excellence in science, engineering, and technology.
              </p>
              <p className="text-slate-655 leading-relaxed font-medium">
                In 1964, BITS Pilani was formally established through collaboration with leading international institutions, including the Massachusetts Institute of Technology (MIT), USA. This collaboration helped introduce the semester system, continuous evaluation, flexible curriculum, and practice-oriented learning, which were revolutionary in Indian higher education.
              </p>
              <p className="text-slate-655 leading-relaxed font-medium">
                Ghanshyam Das Birla (G.D. Birla), a legendary industrialist and builder of modern India, envisioned a university that would bridge the gap between academic theory and practical industry needs. Today, his vision lives on through BITS Pilani's status as an Institution of Eminence.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100 text-xs font-bold text-slate-500">
                <div className="space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm uppercase">Vision Statement</h4>
                  <p className="font-medium text-slate-500">To cultivate professional competence and develop future leaders equipped with technical expertise, humanitarian values, and an entrepreneurial mindset.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm uppercase">Mission Statement</h4>
                  <p className="font-medium text-slate-500">Provide top-tier educational facilities, promote interdisciplinary research, maintain zero reservations to reward merit, and align curriculum with current global technology demands.</p>
                </div>
              </div>
            </section>

            {/* 3. Highlights */}
            <section ref={sectionsRef["highlights"]} id="highlights" className="scroll-mt-32">
              <div className="mb-10 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-[#0c2340]">University Profile</span>
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
                <span className="text-xs font-black uppercase tracking-widest text-[#0c2340]">Campus Network</span>
                <h2 className="text-3xl font-extrabold text-slate-950 mt-2">Campuses of BITS Pilani</h2>
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

            {/* 5. Why Choose BITS */}
            <section ref={sectionsRef["why-choose"]} id="why-choose" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-yellow-750 bg-slate-50 px-3 py-1 rounded-full">
                Value proposition
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Why Students Choose BITS Pilani
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 text-xs font-bold text-slate-500">
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-950 font-extrabold text-sm flex items-center gap-2">
                    <Award className="h-4.5 w-4.5 text-yellow-600" />
                    <span>Pure Merit & Zero Reservation</span>
                  </h4>
                  <p className="text-slate-500 font-medium">Unlike most Indian institutions, BITS Pilani has absolutely zero reservation quotas. Admission is strictly determined by BITSAT merit rankings or board exam toppers.</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-950 font-extrabold text-sm flex items-center gap-2">
                    <Compass className="h-4.5 w-4.5 text-yellow-600" />
                    <span>Academic Flexibility</span>
                  </h4>
                  <p className="text-slate-500 font-medium">Features a unique curriculum system where students can choose their own classes, timetables, and professors. It also supports zero-attendance policies in most courses.</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-950 font-extrabold text-sm flex items-center gap-2">
                    <Briefcase className="h-4.5 w-4.5 text-yellow-600" />
                    <span>Practice School System</span>
                  </h4>
                  <p className="text-slate-500 font-medium">Guarantees 7.5 months of industrial internship across leading tech giants, manufacturing firms, and consulting houses through PS-1 and PS-2 phases.</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-950 font-extrabold text-sm flex items-center gap-2">
                    <Sparkles className="h-4.5 w-4.5 text-yellow-600" />
                    <span>Top-Tier Startup Ecosystem</span>
                  </h4>
                  <p className="text-slate-500 font-medium">BITS Pilani has produced many of India's prominent startup founders. The university features incubation setups, seed capital channels, and a supportive global alumni network.</p>
                </div>
              </div>
            </section>

            {/* 6. Programs */}
            <section ref={sectionsRef["courses"]} id="courses" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-yellow-750 bg-slate-50 px-3 py-1 rounded-full">
                Academics
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Academic Programs & Dual Degree System
              </h2>
              <p className="text-slate-655 leading-relaxed font-medium text-sm">
                BITS Pilani offers B.E. (Bachelor of Engineering) and specialized M.Sc (Master of Science) programs. It is highly regarded for its dual-degree system.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 text-xs font-bold text-slate-500">
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50 space-y-1.5">
                  <h5 className="text-[#0c2340] font-extrabold text-sm">B.E. Specialisations</h5>
                  <p>Includes Computer Science, Electronics & Communication (ECE), Electrical & Electronics (EEE), Electronics & Instrumentation (EIE), Mechanical, Chemical, and Civil engineering branches.</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50 space-y-1.5">
                  <h5 className="text-[#0c2340] font-extrabold text-sm">M.Sc Dual Degree Program</h5>
                  <p>Students admitted into M.Sc (Physics, Chemistry, Mathematics, Economics, or Biological Sciences) can apply for a B.E. engineering branch at the end of their first year based on CGPA scores. Both degrees are completed in 5 years.</p>
                </div>
              </div>
            </section>

            {/* 7. Fee Structure */}
            <section ref={sectionsRef["fees"]} id="fees" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-yellow-750 bg-slate-50 px-3 py-1 rounded-full">
                Fee Matrix
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Tuition Fees & Hostel Charges
              </h2>
              <p className="text-slate-655 leading-relaxed font-medium text-sm">
                Being a non-subsidized private institution, BITS Pilani tuition fees reflect its premium resources and facilities:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 text-xs font-bold text-slate-500">
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm">B.E. Programs (4 Years)</h4>
                  <p className="text-yellow-700 font-black">Approx. ₹5.0 – ₹6.0 Lakhs / Year</p>
                  <p className="text-slate-400 text-[10px]">Estimated total tuition cost: ₹20.0 – ₹24.0 Lakhs</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-sm">Dual Degree Programs (5 Years)</h4>
                  <p className="text-yellow-700 font-black">Approx. ₹5.0 – ₹6.5 Lakhs / Year</p>
                  <p className="text-slate-400 text-[10px]">Estimated total tuition cost: ₹25.0 – ₹30.0 Lakhs</p>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-6 mt-6 space-y-3 text-xs">
                <h4 className="font-extrabold text-orange-400 uppercase tracking-wider text-sm">Fully Residential Hostels</h4>
                <p>Room Rent (Single/Double sharing): **₹60,000 – ₹1.2 Lakhs / Year**</p>
                <p>Mess Charges: **₹40,000 – ₹70,000 / Year**</p>
                <p className="text-slate-400 text-[10px]">All students are required to stay in hostels unless permitted otherwise.</p>
              </div>
            </section>

            {/* 8. Eligibility & BITSAT */}
            <section ref={sectionsRef["eligibility"]} id="eligibility" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#0c2340]">Admissions</span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                BITSAT Entrance Examination & Process
              </h2>
              <p className="text-slate-655 leading-relaxed font-medium text-sm">
                Admission is based strictly on performance in **BITSAT**, which is a computer-based national entrance exam:
              </p>

              <div className="grid sm:grid-cols-2 gap-6 text-xs font-bold text-slate-500">
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50 space-y-1.5">
                  <h5 className="text-[#0c2340] font-extrabold text-sm">BITSAT Exam Pattern</h5>
                  <p>Consists of questions in Physics, Chemistry, Mathematics (or Biology for B.Pharm), English Proficiency, and Logical Reasoning. Duration is 3 hours.</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50 space-y-1.5">
                  <h5 className="text-[#0c2340] font-extrabold text-sm">Direct Admission for Toppers</h5>
                  <p>First rank holders of all Central and State boards in India are offered direct admission to the program of their choice, bypassing BITSAT.</p>
                </div>
              </div>
            </section>

            {/* 9. Placements */}
            <section ref={sectionsRef["placements"]} id="placements" className="scroll-mt-32">
              <div className="bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-8">
                <span className="text-xs font-black uppercase tracking-widest text-yellow-750 bg-slate-50 px-3 py-1 rounded-full">
                  Career Readiness
                </span>
                <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  BITS Placements & Recruiter Network
                </h2>
                <p className="text-slate-655 leading-relaxed font-medium text-sm">
                  BITS Pilani consistently ranks among the top engineering schools in India for recruitment, with average starting salaries exceeding ₹22 LPA.
                </p>

                {/* Placement metrics */}
                <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white mt-6">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#0c2340] text-white text-xs font-black uppercase tracking-wider border-b border-slate-800">
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
                          <td className="p-4 text-yellow-750 font-black">{row.highest}</td>
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

            {/* 10. Facilities */}
            <section ref={sectionsRef["facilities"]} id="facilities" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-yellow-750 bg-slate-50 px-3 py-1 rounded-full">
                Infrastructure
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Campus Infrastructure & Student Life
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs font-bold text-slate-500">
                <div className="flex gap-3 items-start">
                  <School className="h-5 w-5 text-[#0c2340] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-slate-900 font-extrabold mb-1">Modern Academic Blocks</h5>
                    <p className="text-slate-500 font-medium">State-of-the-art classrooms, lecture theaters, and advanced audio-visual set-ups.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Library className="h-5 w-5 text-[#0c2340] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-slate-900 font-extrabold mb-1">Massive Libraries</h5>
                    <p className="text-slate-500 font-medium">Vast collection of print books, academic e-journals, e-databases, and group study centers.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Building className="h-5 w-5 text-[#0c2340] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-slate-900 font-extrabold mb-1">R&D Facilities</h5>
                    <p className="text-slate-500 font-medium">Includes advanced labs in nanotechnology, robotics, cybersecurity, and clean energy systems.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 11. FAQs */}
            <section ref={sectionsRef["faqs"]} id="faqs" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#0c2340]">FAQs</span>
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
    q: "What is BITSAT?",
    a: "BITSAT is the computer-based online entrance exam conducted by BITS Pilani for admission to its integrated first-degree programs at Pilani, Goa, and Hyderabad campuses."
  },
  {
    q: "Does BITS Pilani have reservation policy?",
    a: "No. BITS Pilani is one of the few premier institutions in India that operates purely on merit with no reservation of seats for any category."
  },
  {
    q: "What is the Practice School (PS) system?",
    a: "The Practice School system is a structured internship program that integrates academic studies with industrial experience. It consists of PS-1 (two months after year 2) and PS-2 (five and a half months in year 4)."
  },
  {
    q: "What is the M.Sc Dual Degree program?",
    a: "Students admitted to M.Sc programs can apply for a dual degree in one of the B.E. branches at the end of their first year, based on their CGPA."
  },
  {
    q: "What are the campuses of BITS Pilani?",
    a: "BITS Pilani has three campuses in India (Pilani in Rajasthan, Goa, and Hyderabad) and one international campus in Dubai."
  }
];
