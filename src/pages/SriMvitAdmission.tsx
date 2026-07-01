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

export default function SriMvitAdmission() {
  useSeo({
    title: "Sri Venkateshwara Institute of Technology (Sri MVIT) Guide - Fees & Admission",
    description: "Explore Sri Venkateshwara Institute of Technology (Sri MVIT), Bengaluru. Managed by Sri Krishnadevaraya Trust. Check fees, departments, eligibility, cutoffs & placements."
  });

  // Schema markup
  useJsonLd({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/sri-mvit-bangalore/#college",
        "name": "Sri Venkateshwara Institute of Technology (Sri MVIT)",
        "alternateName": "Sri MVIT Bengaluru",
        "url": "https://www.srimvit.edu.in",
        "description": "Sri Venkateshwara Institute of Technology (Sri MVIT), Bengaluru, is one of Karnataka's well-established private engineering institutions established in 1997 by Sri Krishnadevaraya Educational Trust.",
        "logo": "https://www.srimvit.edu.in/wp-content/uploads/2016/09/cropped-logo-1.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Kempegowda International Airport Road",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "562157",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ssadmission.in/sri-mvit-bangalore/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is Sri MVIT a good engineering college?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Sri MVIT is a well-established engineering institution established in 1997 with good academic standards, NAAC Grade A accreditation, NBA accredited programs, and strong placement support."
            }
          },
          {
            "@type": "Question",
            "name": "Is Sri MVIT affiliated with VTU?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The college is affiliated with Visvesvaraya Technological University (VTU) and approved by AICTE."
            }
          },
          {
            "@type": "Question",
            "name": "What is the average package at Sri MVIT?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The average package at Sri MVIT generally ranges between ₹5-7 LPA, with the highest package reaching up to ₹24 LPA in recent placement cycles."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ssadmission.in/sri-mvit-bangalore/#breadcrumb",
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
            "name": "Sri MVIT Bangalore",
            "item": "https://ssadmission.in/sri-mvit-bangalore"
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
    "departments": useRef<HTMLElement>(null),
    "courses": useRef<HTMLElement>(null),
    "fees": useRef<HTMLElement>(null),
    "eligibility": useRef<HTMLElement>(null),
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
      const nameInput = document.getElementById("mvit-lead-name");
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
    googleFormData.append("entry.85122333", `Sri MVIT Bangalore - Preferred Course: ${parsed.data.course}`);

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
    { id: "departments", label: "Departments" },
    { id: "courses", label: "Courses & Intake" },
    { id: "fees", label: "Fee Matrix" },
    { id: "eligibility", label: "Eligibility" },
    { id: "cutoffs", label: "Cutoff Trends" },
    { id: "placements", label: "Placements" },
    { id: "facilities", label: "Facilities" },
    { id: "faqs", label: "FAQs" },
  ] as const;

  const highlightsData = [
    { label: "Established Year", value: "1997", sub: "Nearly 3 Decades of Trust" },
    { label: "Accreditation", value: "NAAC Grade A", sub: "NBA Accredited Programs" },
    { label: "Affiliation", value: "VTU Affiliated", sub: "Approved by AICTE" },
    { label: "Sprawling Campus", value: "50+ Acres", sub: "Lush Green Environment" },
    { label: "Location Advantage", value: "Near Airport", sub: "Kempegowda Int'l Airport Road" },
    { label: "Intake capacity", value: "600+ Seats", sub: "Undergraduate Engineering" },
    { label: "Placement Rate", value: "82%+", sub: "Consistent Career Growth" },
    { label: "Highest Package", value: "₹24 LPA", sub: "Strong Recruiter Network" }
  ];

  const departmentsData = [
    { name: "Computer Science & Engineering", focus: "Programming, Software Development, AI & ML, Data Science, Cloud Computing", career: "Software Engineer, Data Analyst, AI Engineer, Full Stack Developer" },
    { name: "Information Science & Engineering", focus: "Information Systems, Database Management, Web Technologies, Software Engineering", career: "Software Developer, Systems Analyst, Technology Consultant" },
    { name: "Electronics & Communication Engineering", focus: "Embedded Systems, VLSI, Communication Technologies, IoT", career: "Electronics Engineer, VLSI Engineer, Embedded Systems Developer" },
    { name: "Artificial Intelligence & Machine Learning", focus: "Machine Learning, Deep Learning, Computer Vision, Generative AI, NLP", career: "AI Engineer, ML Engineer, Data Scientist" },
    { name: "Mechanical Engineering", focus: "Design Engineering, Manufacturing, Thermal Engineering, Automation", career: "Design Engineer, Production Engineer, Quality Engineer" },
    { name: "Civil Engineering", focus: "Structural Engineering, Construction Management, Environmental Engineering", career: "Site Engineer, Structural Consultant, Project Engineer" },
    { name: "Department of MBA", focus: "Finance, Marketing, Human Resources, Business Analytics, Operations", career: "Business Analyst, Marketing Manager, HR Professional" }
  ];

  const intakeData = [
    { branch: "Computer Science & Engineering", intake: "180" },
    { branch: "Artificial Intelligence & Machine Learning", intake: "120" },
    { branch: "Information Science & Engineering", intake: "120" },
    { branch: "Electronics & Communication Engineering", intake: "120" },
    { branch: "Mechanical Engineering", intake: "60" },
    { branch: "Civil Engineering", intake: "60" }
  ];

  const mqFeesData = [
    { branch: "Computer Science & Engineering (CSE)", range: "₹12.0 – ₹18.0 Lakhs" },
    { branch: "Artificial Intelligence & Machine Learning (AI & ML)", range: "₹12.0 – ₹18.0 Lakhs" },
    { branch: "Information Science & Engineering (ISE)", range: "₹10.0 – ₹16.0 Lakhs" },
    { branch: "Electronics & Communication Engineering (ECE)", range: "₹8.0 – ₹14.0 Lakhs" },
    { branch: "Mechanical Engineering (ME)", range: "₹6.0 – ₹10.0 Lakhs" },
    { branch: "Civil Engineering (CE)", range: "₹6.0 – ₹10.0 Lakhs" }
  ];

  const kcetCutoffs = [
    { branch: "Computer Science & Engineering", rank: "8,000 – 20,000" },
    { branch: "Artificial Intelligence & Machine Learning", rank: "10,000 – 25,000" },
    { branch: "Information Science & Engineering", rank: "12,000 – 28,000" },
    { branch: "Electronics & Communication Engineering", rank: "15,000 – 35,000" },
    { branch: "Mechanical Engineering", rank: "25,000 – 60,000" },
    { branch: "Civil Engineering", rank: "30,000 – 70,000" }
  ];

  const comedkCutoffs = [
    { branch: "Computer Science & Engineering (CSE)", rank: "15,000 – 30,000" },
    { branch: "Artificial Intelligence & Machine Learning (AI & ML)", rank: "18,000 – 35,000" },
    { branch: "Information Science & Engineering (ISE)", rank: "20,000 – 40,000" },
    { branch: "Electronics & Communication Engineering (ECE)", rank: "25,000 – 50,000" },
    { branch: "Mechanical Engineering (ME)", rank: "40,000 – 65,000" },
    { branch: "Civil Engineering (CE)", rank: "50,000+" }
  ];

  const placementOverview = [
    { year: "2023", rate: "75%+", highest: "₹18.0 LPA", average: "₹5.5 LPA" },
    { year: "2024", rate: "80%+", highest: "₹22.0 LPA", average: "₹6.2 LPA" },
    { year: "2025", rate: "82%+", highest: "₹24.0 LPA", average: "₹6.8 LPA" }
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

  const faqItems = [
    {
      q: "Is Sri MVIT a good engineering college?",
      a: "Yes. Sri MVIT is a well-established private engineering institution in Bengaluru. Established in 1997, it offers robust academic standards, NAAC Grade A accreditation, NBA accredited programs, and consistent placement track records."
    },
    {
      q: "Is Sri MVIT affiliated with VTU?",
      a: "Yes. Sri MVIT is affiliated with Visvesvaraya Technological University (VTU), Belagavi, and is approved by the All India Council for Technical Education (AICTE)."
    },
    {
      q: "Does Sri MVIT have hostel facilities?",
      a: "Yes. The college provides separate hostel blocks for boys and girls on campus, with dining services, Wi-Fi connectivity, recreation facilities, and 24/7 security."
    },
    {
      q: "Which engineering branch has the best placements?",
      a: "Computer Science & Engineering, Information Science & Engineering, and Artificial Intelligence & Machine Learning branches consistently secure the highest placement percentages and the most premium packages."
    },
    {
      q: "What is the average package at Sri MVIT?",
      a: "The average package at the campus ranges between ₹5.0 LPA and ₹7.0 LPA, while the highest packages reach up to ₹24.0 LPA depending on branches and cycles."
    },
    {
      q: "What are the modes of admission for Sri MVIT?",
      a: "Admissions to B.E. programs are based on KCET (Karnataka Examination Authority) for state candidates, COMEDK UGET for national aspirants, or direct entry under Management Quota seats."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      {/* Alert Banner */}
      <div className="bg-[#0c2340] py-3 text-center border-b border-[#c5a880]/20 relative z-30 pt-20 lg:pt-3">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
          <p className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.15em] leading-tight">
            NAAC Grade A Accredited • Established 1997 • Sprawling 50+ Acres Campus
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-[#050f1a] text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a203a]/95 to-[#040b14] z-0" />
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <nav className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#c5a880] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>/</span>
                <a href="/engineering" className="hover:text-white transition-colors">Colleges</a>
                <span>/</span>
                <span className="text-emerald-400">Sri MVIT</span>
              </nav>

              <div className="space-y-3">
                <span className="inline-block text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                  Managed by Sri Krishnadevaraya Educational Trust
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                  Sri Venkateshwara Institute of Technology (Sri MVIT), Bengaluru
                </h1>
              </div>

              <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed max-w-3xl">
                A premier destination for engineering excellence. Strategically located on airport road, Sri MVIT blends academic rigor, NAAC Grade A accreditation, and rich placement pipelines in Bengaluru's technology ecosystem.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {["AICTE Approved", "VTU Affiliated", "NBA Accredited Programs", "50+ Acres Green Campus"].map((badge, idx) => (
                  <span key={idx} className="text-[10px] font-black uppercase tracking-widest bg-white/10 border border-white/15 px-4 py-2 rounded-xl text-emerald-300">
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
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 ring-8 ring-emerald-50/50">
                      <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Counseling Request Saved</h3>
                    <p className="mt-4 text-slate-500 font-semibold leading-relaxed text-sm">
                      Thank you! An admissions counselor will connect with you shortly to guide you through cutoffs, fee matrices, and options.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-xl font-black text-slate-900 leading-tight mb-1 tracking-tight">Request Information</h3>
                    <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mb-5">Get official cutoff & fee guides</p>

                    <form onSubmit={handleFormSubmit} className="space-y-3.5">
                      <div>
                        <Label htmlFor="mvit-lead-name" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Full Name *</Label>
                        <Input
                          id="mvit-lead-name"
                          placeholder="Your full name"
                          className={`h-11 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all text-slate-800 text-xs ${errors.name ? "border-rose-500 bg-rose-50/10" : ""}`}
                          value={formData.name || ""}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                        />
                        {errors.name && <p className="text-[10px] font-semibold text-rose-500 mt-1 uppercase tracking-wide">{errors.name}</p>}
                      </div>

                      <div>
                        <Label htmlFor="mvit-lead-phone" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Mobile Number *</Label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <Input
                            id="mvit-lead-phone"
                            type="tel"
                            maxLength={10}
                            placeholder="10-Digit Phone"
                            className={`h-11 pl-10 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all text-slate-800 text-xs ${errors.phone ? "border-rose-500 bg-rose-50/10" : ""}`}
                            value={formData.phone || ""}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                          />
                        </div>
                        {errors.phone && <p className="text-[10px] font-semibold text-rose-500 mt-1 uppercase tracking-wide">{errors.phone}</p>}
                      </div>

                      <div>
                        <Label htmlFor="mvit-lead-email" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Email (Optional)</Label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <Input
                            id="mvit-lead-email"
                            type="email"
                            placeholder="name@example.com"
                            className="h-11 pl-10 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all text-slate-800 text-xs"
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
                              <SelectItem value="B.Tech Computer Science">B.E. CSE</SelectItem>
                              <SelectItem value="B.Tech AI & ML">B.E. AI & ML</SelectItem>
                              <SelectItem value="B.Tech Information Science">B.E. ISE</SelectItem>
                              <SelectItem value="B.Tech Electronics & Comm">B.E. ECE</SelectItem>
                              <SelectItem value="B.Tech Mechanical">B.E. Mech</SelectItem>
                              <SelectItem value="B.Tech Civil">B.E. Civil</SelectItem>
                              <SelectItem value="MBA Program">MBA / PG</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.course && <p className="text-[10px] font-semibold text-rose-500 mt-1 uppercase tracking-wide">{errors.course}</p>}
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
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
                      ? "bg-emerald-50 text-emerald-700 border-l-4 border-emerald-600 pl-3"
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
                className="py-3 bg-[#0c2340] hover:bg-[#071d36] text-white font-black rounded-xl text-[10px] uppercase tracking-widest transition-all block"
              >
                +91 99330 85333
              </a>
            </div>
          </aside>

          {/* Main sections */}
          <div className="space-y-20">
            {/* Overview */}
            <section ref={sectionsRef["overview"]} id="overview" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                About Sri Venkateshwara Institute of Technology (Sri MVIT)
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                Sri Venkateshwara Institute of Technology (Sri MVIT), Bengaluru, is one of Karnataka's well-established private engineering institutions known for its academic excellence, industry-oriented curriculum, research culture, and strong placement support. Established in 1997, the institution has built a reputation for producing skilled engineers and professionals who contribute to leading technology companies and industries across India and abroad.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                The college is managed by the Sri Krishnadevaraya Educational Trust and is located on a sprawling green campus near Kempegowda International Airport, offering students a peaceful learning environment while remaining connected to Bengaluru's thriving technology ecosystem.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                Over the years, Sri MVIT has evolved from a traditional engineering college into a modern technical institution that emphasizes innovation, entrepreneurship, practical learning, and industry engagement. The institute focuses on preparing students for future technologies through specialized programs, advanced laboratories, research initiatives, and industry collaborations.
              </p>
            </section>

            {/* History & Legacy */}
            <section ref={sectionsRef["legacy"]} id="legacy" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                History & Legacy
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Building Futures Since 1997
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                The foundation of Sri MVIT was laid with the vision of creating an institution capable of delivering quality technical education to students from diverse backgrounds.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                Since its establishment in 1997, the institute has continuously expanded its infrastructure, academic offerings, and industry partnerships. The college has successfully educated thousands of engineers who are now working in multinational corporations, startups, government organizations, research institutions, and higher education sectors.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                Over nearly three decades, Sri MVIT has developed strong academic processes, experienced faculty teams, and modern facilities that support student learning and professional development.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                <div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-2 text-[#0c2340]">Vision Statement</h4>
                  <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                    To become a center of excellence in technical education, research, innovation, and entrepreneurship by producing globally competent professionals capable of addressing real-world challenges.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-2 text-[#0c2340]">Mission Objectives</h4>
                  <ul className="text-slate-500 text-xs font-semibold space-y-2.5">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Deliver quality engineering and management education.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Promote innovation and research across all fields.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Foster collaborative industry-academia linkages.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Encourage ethical, social, and professional responsibility.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Key Highlights */}
            <section ref={sectionsRef["highlights"]} id="highlights" className="scroll-mt-32">
              <div className="mb-10 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-[#0c2340]">Academic Matrix</span>
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
              <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                Why Choose Sri MVIT
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Why Students Consider Sri MVIT
              </h2>
              <p className="text-slate-650 leading-relaxed font-medium">
                Choosing an engineering college is one of the most important decisions for students and parents. Sri MVIT continues to attract students because of several important factors:
              </p>

              <div className="grid sm:grid-cols-2 gap-6 text-xs font-bold text-slate-500">
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-950 font-extrabold text-sm flex items-center gap-2">
                    <Award className="h-4.5 w-4.5 text-emerald-600" />
                    <span>Strong Academic Foundation</span>
                  </h4>
                  <p className="text-slate-500">The institution follows outcome-based education and regularly updates teaching methodologies to align with industry requirements.</p>
                </div>

                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-950 font-extrabold text-sm flex items-center gap-2">
                    <MapPin className="h-4.5 w-4.5 text-emerald-600" />
                    <span>The Bengaluru Advantage</span>
                  </h4>
                  <p className="text-slate-500">Proximity to airport and strategic hubs allows students easy access to IT companies, startups, research centers, and internship pipelines.</p>
                </div>

                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-950 font-extrabold text-sm flex items-center gap-2">
                    <Zap className="h-4.5 w-4.5 text-emerald-600" />
                    <span>Industry-Oriented Learning</span>
                  </h4>
                  <p className="text-slate-500">Curriculum is enhanced through practical workshops, technical certification programs, industry-sponsored projects, and expert guest lectures.</p>
                </div>

                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-950 font-extrabold text-sm flex items-center gap-2">
                    <UserCheck className="h-4.5 w-4.5 text-emerald-600" />
                    <span>Experienced Faculty</span>
                  </h4>
                  <p className="text-slate-500">Highly qualified professors and industry mentors guide students in research, project development, paper presentations, and career mapping.</p>
                </div>

                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-950 font-extrabold text-sm flex items-center gap-2">
                    <Compass className="h-4.5 w-4.5 text-emerald-600" />
                    <span>Research & Innovation</span>
                  </h4>
                  <p className="text-slate-500">Active encouragement for student research projects, technical competitions, patent filing initiatives, and college-funded incubation hubs.</p>
                </div>

                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-950 font-extrabold text-sm flex items-center gap-2">
                    <Sparkles className="h-4.5 w-4.5 text-emerald-600" />
                    <span>Holistic Development</span>
                  </h4>
                  <p className="text-slate-500">A vibrant ecosystem containing coding cells, cultural events, sports facilities, and technical clubs to build leadership and communication skills.</p>
                </div>
              </div>
            </section>

            {/* Academic Departments */}
            <section ref={sectionsRef["departments"]} id="departments" className="scroll-mt-32">
              <div className="mb-10 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-[#0c2340]">Departments</span>
                <h2 className="text-3xl font-extrabold text-slate-950 mt-2">Academic Divisions & Departments</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {departmentsData.map((dept, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900 mb-3">{dept.name}</h3>
                      <div className="space-y-2 text-xs font-bold text-slate-500">
                        <p><span className="text-slate-950 font-black uppercase text-[9px] block">Focus Areas</span> {dept.focus}</p>
                        <p><span className="text-slate-950 font-black uppercase text-[9px] block">Career Opportunities</span> {dept.career}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Courses Offered & Intake */}
            <section ref={sectionsRef["courses"]} id="courses" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                Courses & Intake
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Programs & Seat Intake
              </h2>
              <p className="text-slate-650 leading-relaxed font-medium text-sm">
                Sri Venkateshwara Institute of Technology offers undergraduate (4 Years B.E.), postgraduate (2 Years MBA, M.Tech), and doctoral research programs designed to meet the requirements of modern technology domains.
              </p>

              <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white mt-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0c2340] text-white text-xs font-black uppercase tracking-wider border-b border-slate-800">
                      <th className="p-4">Engineering Branch (B.E.)</th>
                      <th className="p-4 text-center">Seat Intake</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
                    {intakeData.map((data, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-4 font-black text-slate-900">{data.branch}</td>
                        <td className="p-4 text-center text-emerald-600 font-extrabold">{data.intake}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-xs font-bold text-slate-500 space-y-2">
                <span className="text-slate-950 font-black uppercase text-[10px] block">Postgraduate & Research Intake</span>
                <p>Sri MVIT offers an MBA program with specializations in Finance, Marketing, Human Resources, Business Analytics, and Operations. Research programs (PhD) are offered across Artificial Intelligence, Data Science, Electronics, Mechanical Systems, and Civil Engineering.</p>
              </div>
            </section>

            {/* Fee Structure */}
            <section ref={sectionsRef["fees"]} id="fees" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                Fee Matrices
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Fee Structure Overview
              </h2>
              <p className="text-slate-650 leading-relaxed font-medium text-sm">
                Engineering admissions at Sri MVIT are conducted through three key pathways. Fees vary depending on quotas and entry channels:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 text-xs font-bold text-slate-500">
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
                  <h5 className="text-[#0c2340] font-extrabold mb-1">KCET Quota (KEA Counselling)</h5>
                  <p className="text-rose-600 font-black">Approx. ₹1.10 – ₹1.25 Lakhs / Year</p>
                  <p className="text-slate-400 text-[10px] mt-1">Total Est: ₹4.50 – ₹5.00 Lakhs (4 Years)</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
                  <h5 className="text-[#0c2340] font-extrabold mb-1">COMEDK Quota (National Candidates)</h5>
                  <p className="text-rose-600 font-black">Approx. ₹2.50 – ₹3.00 Lakhs / Year</p>
                  <p className="text-slate-400 text-[10px] mt-1">Total Est: ₹10.00 – ₹12.00 Lakhs (4 Years)</p>
                </div>
              </div>

              <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white mt-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0c2340] text-white text-xs font-black uppercase tracking-wider border-b border-slate-800">
                      <th className="p-4">B.E. Specialisation</th>
                      <th className="p-4">Estimated Management Quota Total Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
                    {mqFeesData.map((fee, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-4 font-black text-slate-900">{fee.branch}</td>
                        <td className="p-4 text-emerald-600 font-extrabold">{fee.range}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                Note: Hostel and dining charges average ₹80,000 – ₹1.40 Lakhs/year. MBA program costs range between ₹4.0 Lakhs – ₹7.0 Lakhs total depending on specializations.
              </p>
            </section>

            {/* Eligibility */}
            <section ref={sectionsRef["eligibility"]} id="eligibility" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#0c2340]">Admissions</span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Admission Eligibility Guidelines
              </h2>

              <div className="grid sm:grid-cols-3 gap-6 text-xs font-bold text-slate-500">
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-950 font-extrabold text-sm">B.E. Engineering</h4>
                  <p>Pass in Class 12 (10+2) with Physics and Mathematics as compulsory subjects. Optional subjects include Chemistry, Biotechnology, or Computer Science. Entrance exams: KCET, COMEDK UGET.</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-950 font-extrabold text-sm">MBA Programs</h4>
                  <p>Bachelor's degree with qualifying marks as prescribed. Accepted entrance tests: KMAT, Karnataka PGCET, MAT, or CAT.</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                  <h4 className="text-slate-950 font-extrabold text-sm">M.Tech Programs</h4>
                  <p>B.E./B.Tech degree in relevant engineering specialisation. Entrance exams: Karnataka PGCET, GATE.</p>
                </div>
              </div>
            </section>

            {/* Cutoffs */}
            <section ref={sectionsRef["cutoffs"]} id="cutoffs" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#0c2340]">Rank Compatibility</span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Entrance Exam Closing Cutoff Trends
              </h2>
              <p className="text-slate-650 leading-relaxed font-medium text-sm">
                Closing cutoff ranks fluctuate annually based on candidate count and seat metrics. Below are typical closing cutoff ranges:
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* KCET */}
                <div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4 text-[#0c2340] border-b border-slate-100 pb-2">Expected KCET Closing Ranks</h4>
                  <div className="space-y-3">
                    {kcetCutoffs.map((cutoff, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs font-bold py-1 border-b border-slate-50">
                        <span className="text-slate-600">{cutoff.branch}</span>
                        <span className="text-rose-600 font-extrabold pl-4">{cutoff.rank}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* COMEDK */}
                <div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4 text-[#0c2340] border-b border-slate-100 pb-2">Expected COMEDK Closing Ranks</h4>
                  <div className="space-y-3">
                    {comedkCutoffs.map((cutoff, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs font-bold py-1 border-b border-slate-50">
                        <span className="text-slate-600">{cutoff.branch}</span>
                        <span className="text-[#0c2340] font-black pl-4">{cutoff.rank}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Placements */}
            <section ref={sectionsRef["placements"]} id="placements" className="scroll-mt-32">
              <div className="bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-8">
                <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                  Training & Placement Cell
                </span>
                <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  Placements & Career Development
                </h2>
                <p className="text-slate-650 leading-relaxed font-medium text-sm">
                  Sri Venkateshwara Institute of Technology operates a dedicated Training & Placement Department to run structured preparation programs (Aptitude, Soft Skills, Competitive Coding, Mock Interviews). Being located in Bengaluru allows direct networking opportunities, corporate internships, and recruitment access.
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
                          <td className="p-4 text-emerald-600 font-extrabold">{row.rate}</td>
                          <td className="p-4 text-[#0c2340] font-black">{row.highest}</td>
                          <td className="p-4 text-slate-600 font-extrabold">{row.average}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 text-xs font-bold text-slate-500 pt-6">
                  <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
                    <h5 className="text-[#0c2340] font-extrabold mb-1">CSE & ISE</h5>
                    <p className="text-slate-400">80% – 90% Placement Rate</p>
                    <p className="text-slate-950 font-black mt-1">Average Package: ₹6.0 – ₹8.0 LPA</p>
                  </div>
                  <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
                    <h5 className="text-[#0c2340] font-extrabold mb-1">AI & ML</h5>
                    <p className="text-slate-400">75% – 85% Placement Rate</p>
                    <p className="text-slate-950 font-black mt-1">Average Package: ₹6.0 – ₹9.0 LPA</p>
                  </div>
                  <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
                    <h5 className="text-[#0c2340] font-extrabold mb-1">ECE Program</h5>
                    <p className="text-slate-400">70% – 80% Placement Rate</p>
                    <p className="text-slate-950 font-black mt-1">Average Package: ₹4.5 – ₹7.0 LPA</p>
                  </div>
                </div>

                {/* Recruiter Grid */}
                <div className="space-y-4 pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 text-center lg:text-left">Major Recruiting Partners</h4>
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
              <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                Campus Infrastructure
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Facilities & Campus Environment
              </h2>
              <p className="text-slate-650 leading-relaxed font-medium text-sm">
                Sri MVIT sits on a quiet 50+ acres campus close to the Kempegowda International Airport. Key features include:
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs font-bold text-slate-500">
                <div className="flex gap-3 items-start">
                  <Library className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-slate-900 font-extrabold mb-1">Library & Knowledge Centre</h5>
                    <p className="text-slate-500">Houses thousands of textbooks, reference guides, national/international journals, and online research database systems.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Building className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-slate-900 font-extrabold mb-1">Modern Laboratories</h5>
                    <p className="text-slate-500">Equipped with specialized equipment, computing setups, and machinery for practical workshops.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Trophy className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-slate-900 font-extrabold mb-1">Sports & Recreation</h5>
                    <p className="text-slate-500">Provisions for Cricket, Football, Basketball, Volleyball, Track events, and indoor gaming halls.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Building2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-slate-900 font-extrabold mb-1">Hostels & Security</h5>
                    <p className="text-slate-500">Separate secure hostels for boys and girls with on-campus dining rooms and medical support services.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Wifi className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-slate-900 font-extrabold mb-1">High-Speed Wi-Fi</h5>
                    <p className="text-slate-500">Enables smooth web resources access, online assignments coordination, and research databases browsing.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Globe className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-slate-900 font-extrabold mb-1">Transport Network</h5>
                    <p className="text-slate-500">Fleet of buses covering different neighborhoods and major junctions in Bengaluru city.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQs */}
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
                        <ChevronUp className="h-4 w-4 text-emerald-600 shrink-0 ml-4" />
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
