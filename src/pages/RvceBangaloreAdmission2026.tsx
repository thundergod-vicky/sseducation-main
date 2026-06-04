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

// Custom Assets
import rvceCampus from "@/assets/rvce-campus.jpg";
import rvceBuilding from "@/assets/rvce-building.jpg";
import rvceLab from "@/assets/rvce-lab.jpg";

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

// Form Validation Schema
const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  email: z.string().trim().email("Enter a valid email address").max(120).optional().or(z.literal("")),
  state: z.string().min(1, "Select your state"),
  course: z.string().min(1, "Select preferred course"),
});

type FormDataType = z.infer<typeof leadFormSchema>;

export default function RvceBangaloreAdmission2026() {
  useSeo({
    title: "RV College of Engineering (RVCE) Bangalore B.Tech Admission Guide",
    description: "Get comprehensive information on RV College of Engineering (RVCE) Bangalore. Explore B.Tech branches, fee structures, eligibility guidelines, placements, and campus facilities."
  });

  // Dynamic College, FAQ, and Breadcrumb Schema Markup
  useJsonLd({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/rv-college-btech-admission-2026/#college",
        "name": "RV College of Engineering (RVCE), Bangalore",
        "alternateName": "RVCE Bangalore",
        "url": "https://www.rvce.edu.in",
        "description": "RV College of Engineering (RVCE) is a premier private autonomous engineering institution established in 1963 and affiliated with Visvesvaraya Technological University (VTU) in Bangalore.",
        "logo": "https://www.rvce.edu.in/images/logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mysore Road, RV Vidyaniketan Post",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560059",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ssadmission.in/rv-college-btech-admission-2026/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is RV College of Engineering autonomous?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, RV College of Engineering (RVCE) is an autonomous self-financing institution affiliated with Visvesvaraya Technological University (VTU). It was granted autonomous status for UG courses in 2007 and for PG courses in 2016."
            }
          },
          {
            "@type": "Question",
            "name": "What is the fee structure for B.E. at RVCE through COMEDK?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For candidates admitting through COMEDK UGET, the annual tuition fee is approximately ₹2.80 Lakhs to ₹2.90 Lakhs, with additional charges of around ₹65,000 per year for other fees."
            }
          },
          {
            "@type": "Question",
            "name": "What are the eligibility criteria for B.E. admission at RVCE?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Candidates must have passed Class 12 (10+2) with Physics and Mathematics as compulsory subjects, with a minimum score of 70% in Science and Maths in Class 10 (separately), 65% in Physics and Maths in Class 11 (separately), and 60% in Physics and Maths in Class 12 (separately). A valid rank in KCET, COMEDK UGET, or JEE Main is mandatory."
            }
          },
          {
            "@type": "Question",
            "name": "Does RVCE have a metro station?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, RV College of Engineering has its own dedicated RVCE Metro Station on the Mysore Road corridor of the Bangalore Metro, ensuring convenient transport links for students."
            }
          },
          {
            "@type": "Question",
            "name": "What is the placement record at RVCE?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "RVCE maintains a remarkable placement record. The highest package in 2025 reached ₹1.15 Crore internationally, and domestic packages went up to ₹67 LPA (domestic highest) and ₹92 LPA in 2024. The average salary package for B.E. in 2025 was ₹15.24 LPA, increasing to ₹16.86 LPA in the ongoing 2026 drive."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ssadmission.in/rv-college-btech-admission-2026/#breadcrumb",
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
            "name": "RV College of Engineering Bangalore",
            "item": "https://ssadmission.in/rv-college-btech-admission-2026"
          }
        ]
      }
    ]
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("about-rvce");
  const [activeCourseCategory, setActiveCourseCategory] = useState<"ug" | "pg">("ug");
  const [mobileTOCOpen, setMobileTOCOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState<Partial<FormDataType>>({
    name: "",
    phone: "",
    email: "",
    state: "",
    course: "",
  });

  const formRef = useRef<HTMLDivElement>(null);
  const sectionsRef = {
    "about-rvce": useRef<HTMLElement>(null),
    "key-highlights": useRef<HTMLElement>(null),
    "rankings-accreditation": useRef<HTMLElement>(null),
    "courses-offered": useRef<HTMLElement>(null),
    "btech-branches": useRef<HTMLElement>(null),
    "admission-eligibility": useRef<HTMLElement>(null),
    "placements": useRef<HTMLElement>(null),
    "facilities": useRef<HTMLElement>(null),
    "advantages": useRef<HTMLElement>(null),
    "faqs": useRef<HTMLElement>(null),
    "contact": useRef<HTMLElement>(null),
  };

  // Scroll spy to highlight active section in table of contents
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
      const nameInput = document.getElementById("rvce-lead-name");
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
    googleFormData.append("entry.85122333", `RVCE Bangalore Showcase - Preferred Course: ${parsed.data.course}`);

    try {
      await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: googleFormData
      });
      setSubmitting(false);
      setSubmitted(true);
      toast.success("Profile saved! Our senior admissions advisor will get in touch shortly.");
    } catch (error) {
      setSubmitting(false);
      setSubmitted(true);
      toast.success("Profile saved! Our senior admissions advisor will contact you shortly.");
    }
  };

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const menuItems = [
    { id: "about-rvce", label: "About RVCE" },
    { id: "key-highlights", label: "Highlights" },
    { id: "rankings-accreditation", label: "Rankings" },
    { id: "courses-offered", label: "Courses" },
    { id: "btech-branches", label: "Fee Matrix" },
    { id: "admission-eligibility", label: "Eligibility" },
    { id: "placements", label: "Placements" },
    { id: "facilities", label: "Campus Facilities" },
    { id: "advantages", label: "Unique Pillars" },
    { id: "faqs", label: "FAQ Portal" },
    { id: "contact", label: "Get Guidance" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      {/* Dynamic Header Alert */}
      <div className="bg-[#0b1329] py-3 text-center border-b border-yellow-500/20 relative z-30 pt-20 lg:pt-3">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <span className="h-2 w-2 rounded-full bg-yellow-500 animate-ping" />
          <p className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.15em]">
            Autonomous engineering college affiliated to VTU • Flagship institution of Rashtreeya Sikshana Samithi Trust (RSST)
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-[#090F1E] text-white pt-24 pb-32 overflow-hidden">
        {/* Background Image Slider with overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={rvceCampus}
            className="absolute inset-0 w-full h-full object-cover"
            alt="RVCE Campus View"
          />
          <div className="absolute inset-0 bg-[#070b14]/75 backdrop-blur-[1px] z-10" />
        </div>

        {/* Abstract Tech Patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-10%,rgba(234,179,8,0.12),rgba(255,255,255,0))] z-15 pointer-events-none" />
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] z-15 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-slate-50 to-transparent z-15 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Hero Copy */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-6"
              >
                <Sparkles className="h-4 w-4 animate-pulse" /> Karnataka's #1 Private Engineering College
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6"
              >
                RV College of Engineering <br />
                <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  (RVCE), Bangalore
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mb-8 mx-auto lg:mx-0"
              >
                Explore comprehensive information on courses, branches, fee structure matrices, and eligibility benchmarks. Review placement records at this prestigious autonomous VTU institution.
              </motion.p>

              {/* Sub-Hero Quick Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto lg:mx-0 mb-10 text-left"
              >
                {[
                  "Established 1963",
                  "NAAC A+ (CGPA 3.9)",
                  "Autonomous UG/PG",
                  "IIRF #1 Private BE"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4.5 w-4.5 text-yellow-500 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">{item}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  onClick={scrollToForm}
                  className="px-8 h-14 bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-black text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-yellow-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  Request Information Profile <ArrowRight className="h-4.5 w-4.5" />
                </Button>
                <a
                  href="tel:+919933085333"
                  className="px-8 h-14 bg-[#ffffff]/10 hover:bg-[#ffffff]/20 border border-white/20 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="h-4 w-4" /> Speak to Advisor
                </a>
              </motion.div>
            </div>

            {/* Right Hero Lead Capture Form */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto" ref={formRef}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white text-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-yellow-500 text-slate-950 font-black text-[9px] uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl">
                  INFO QUERY
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-50 ring-8 ring-yellow-50/50">
                      <CheckCircle2 className="h-10 w-10 text-yellow-600" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">Request Received</h3>
                    <p className="mt-4 text-slate-500 font-medium leading-relaxed text-sm">
                      Thank you! Our senior admissions advisor has received your details and will get in touch shortly to assist you.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-2xl font-black text-slate-900 leading-tight mb-2 tracking-tight">Request College Information</h3>
                    <p className="text-xs text-slate-500 mb-6 font-medium">Get structured details on cutoffs, seats, hostel options, and fees structure.</p>

                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="rvce-lead-name" className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Full Name *</Label>
                        <Input
                          id="rvce-lead-name"
                          placeholder="E.g. Rohan Sen"
                          className="h-12 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white focus:ring-4 focus:ring-yellow-500/5 focus:border-yellow-500 transition-all text-slate-800"
                          value={formData.name || ""}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                        />
                        {errors.name && <p className="text-[10px] font-semibold text-red-500 mt-1 uppercase tracking-wide">{errors.name}</p>}
                      </div>

                      <div>
                        <Label htmlFor="rvce-lead-phone" className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Mobile Number *</Label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <Input
                            id="rvce-lead-phone"
                            type="tel"
                            maxLength={10}
                            placeholder="10-Digit Phone"
                            className="h-12 pl-10 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white focus:ring-4 focus:ring-yellow-500/5 focus:border-yellow-500 transition-all text-slate-800"
                            value={formData.phone || ""}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                          />
                        </div>
                        {errors.phone && <p className="text-[10px] font-semibold text-red-500 mt-1 uppercase tracking-wide">{errors.phone}</p>}
                      </div>

                      <div>
                        <Label htmlFor="rvce-lead-email" className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Email (Optional)</Label>
                        <Input
                          id="rvce-lead-email"
                          type="email"
                          placeholder="name@example.com"
                          className="h-12 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white focus:ring-4 focus:ring-yellow-500/5 focus:border-yellow-500 transition-all text-slate-800"
                          value={formData.email || ""}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Your State *</Label>
                          <Select
                            onValueChange={(val) => handleInputChange("state", val)}
                            value={formData.state || ""}
                          >
                            <SelectTrigger className="h-12 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white text-slate-800 text-left">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl border-slate-100">
                              <SelectItem value="Karnataka">Karnataka</SelectItem>
                              <SelectItem value="Bihar">Bihar</SelectItem>
                              <SelectItem value="Jharkhand">Jharkhand</SelectItem>
                              <SelectItem value="West Bengal">West Bengal</SelectItem>
                              <SelectItem value="Odisha">Odisha</SelectItem>
                              <SelectItem value="Other">Other State</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.state && <p className="text-[10px] font-semibold text-red-500 mt-1 uppercase tracking-wide">{errors.state}</p>}
                        </div>

                        <div>
                          <Label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Preferred Stream *</Label>
                          <Select
                            onValueChange={(val) => handleInputChange("course", val)}
                            value={formData.course || ""}
                          >
                            <SelectTrigger className="h-12 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white text-slate-800 text-left">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl border-slate-100">
                              <SelectItem value="CSE">CSE (Computer Science)</SelectItem>
                              <SelectItem value="AI-ML">CSE with AI & ML</SelectItem>
                              <SelectItem value="ISE">Information Science (ISE)</SelectItem>
                              <SelectItem value="ECE">Electronics (ECE)</SelectItem>
                              <SelectItem value="Other-BE">Other B.E. Branches</SelectItem>
                              <SelectItem value="M-Tech">M.Tech / PG Programs</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.course && <p className="text-[10px] font-semibold text-red-500 mt-1 uppercase tracking-wide">{errors.course}</p>}
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-14 mt-4 bg-[#090F1E] hover:bg-[#090F1E]/95 text-white font-black text-sm uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                        disabled={submitting}
                      >
                        {submitting ? "Processing..." : (<>Submit Inquiry <ArrowRight className="h-4.5 w-4.5" /></>)}
                      </Button>

                      <p className="text-[9px] text-center text-slate-400 font-bold uppercase tracking-wider mt-3">
                        🔒 Official info channel • No spam guarantee
                      </p>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Layout with sticky sidebar Table of Contents */}
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
                  onClick={() => scrollToSection(item.id as any)}
                  className={`text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-all uppercase tracking-wider ${
                    activeSection === item.id
                      ? "bg-yellow-500/10 text-yellow-700 border-l-4 border-yellow-500 pl-3"
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
                className="py-3 bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-black rounded-xl text-[10px] uppercase tracking-widest transition-all block"
              >
                +91 99330 85333
              </a>
            </div>
          </aside>

          {/* Core Content Area */}
          <div className="space-y-20">
            {/* 1. About Section */}
            <section ref={sectionsRef["about-rvce"]} id="about-rvce" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm">
              <div className="max-w-4xl space-y-6">
                <span className="text-xs font-black uppercase tracking-widest text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
                  Flagship Institute
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  About RV College of Engineering (RVCE), Bangalore
                </h2>
                <p className="text-slate-600 leading-relaxed font-medium">
                  RV College of Engineering, commonly referred to as RVCE Bangalore, is a private autonomous engineering institution established in 1963. It is affiliated with Visvesvaraya Technological University (VTU) and is managed by the Rashtreeya Sikshana Samithi Trust (RSST). Regarded as one of Karnataka's premier private engineering colleges, it admits students via state counseling and merit quota systems.
                </p>
                <p className="text-slate-650 leading-relaxed font-medium">
                  The campus stands out for its high-end industrial lab partnerships with corporations like Bosch, Texas Instruments, and Qualcomm, providing access to industry-grade equipment. It has its own dedicated RVCE Metro Station on the Mysore Road corridor of the Bangalore Metro, making commutes convenient for students.
                </p>

                {/* Info Graphic Cards */}
                <div className="grid sm:grid-cols-3 gap-6 pt-6">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                    <Library className="h-6 w-6 text-yellow-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider">Infrastructure</h4>
                      <p className="text-sm font-extrabold text-slate-900 mt-1">₹500+ Crore Campus</p>
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                    <Compass className="h-6 w-6 text-yellow-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider">Academics</h4>
                      <p className="text-sm font-extrabold text-slate-900 mt-1">Autonomous Status</p>
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                    <Trophy className="h-6 w-6 text-yellow-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider">Rankings</h4>
                      <p className="text-sm font-extrabold text-slate-900 mt-1">IIRF #1 National Rank</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Key Highlights */}
            <section ref={sectionsRef["key-highlights"]} id="key-highlights" className="scroll-mt-32">
              <div className="mb-10 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-yellow-600">Metric Dashboard</span>
                <h2 className="text-3xl font-extrabold text-slate-950 mt-2">Key Highlights at a Glance</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Established Year", value: "1963", sub: "62+ Years Excellence" },
                  { label: "Institution Type", value: "Private", sub: "Autonomous under VTU" },
                  { label: "NAAC Grade Score", value: "A+", sub: "CGPA 3.9 (Among Highest)" },
                  { label: "Active Students", value: "~5,700", sub: "Diverse Cohorts" },
                  { label: "Expert Faculty", value: "~370", sub: "~360 Research Scholars" },
                  { label: "Global Alliances", value: "60+", sub: "International Exchange" },
                  { label: "Dedicated Transport", value: "Metro", sub: "Own RVCE Metro Station" },
                  { label: "National Ranking", value: "#1", sub: "IIRF Private Engineering" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                      <span className="text-3xl font-black text-slate-900 tracking-tight">{stat.value}</span>
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider mt-2">{stat.label}</h4>
                    </div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Rankings Table */}
            <section ref={sectionsRef["rankings-accreditation"]} id="rankings-accreditation" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm">
              <div className="max-w-4xl space-y-6">
                <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight mb-2">Rankings & Accreditations</h2>
                <p className="text-slate-650 leading-relaxed font-medium text-sm">
                  RVCE is recognized among India's elite engineering institutions, consistently securing high standings across academic bodies and ranking panels.
                </p>

                <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white mt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider border-b border-slate-800">
                          <th className="p-5">Ranking Body</th>
                          <th className="p-5">Category</th>
                          <th className="p-5">Latest Standing</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-5 font-black text-slate-900">IIRF 2025</td>
                          <td className="p-5">Private Engineering Colleges</td>
                          <td className="p-5 text-yellow-600 font-extrabold">#1 in India</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-5 font-black text-slate-900">NIRF 2025</td>
                          <td className="p-5">Engineering</td>
                          <td className="p-5">#101–150 Band</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-5 font-black text-slate-900">NIRF 2024</td>
                          <td className="p-5">Engineering</td>
                          <td className="p-5">#99 in India</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-5 font-black text-slate-900">NIRF 2023</td>
                          <td className="p-5">Engineering</td>
                          <td className="p-5">#96 in India</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-5 font-black text-slate-900">EducationWorld 2025</td>
                          <td className="p-5">Private Engineering</td>
                          <td className="p-5">#5 India / #1 Karnataka</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-5 font-black text-slate-900">India Today 2024</td>
                          <td className="p-5">B.Tech Program</td>
                          <td className="p-5">#28 (National)</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-5 font-black text-slate-900">Outlook 2025</td>
                          <td className="p-5">Engineering</td>
                          <td className="p-5">#7 out of 200</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-5 font-black text-slate-900">The Week 2025</td>
                          <td className="p-5">B.Tech</td>
                          <td className="p-5">#33 out of 286</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-4">
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-wider border border-slate-200/50">NAAC A+ Accredited</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-wider border border-slate-200/50">NBA Accredited Programs</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-wider border border-slate-200/50">UGC & AICTE Approved</span>
                </div>
              </div>
            </section>

            {/* 4. Courses Offered */}
            <section ref={sectionsRef["courses-offered"]} id="courses-offered" className="scroll-mt-32">
              <div className="mb-10 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-yellow-600">68+ Active Programs</span>
                <h2 className="text-3xl font-extrabold text-slate-950 mt-2">Courses Offered at RVCE</h2>
              </div>

              <div className="bg-slate-100 p-2 rounded-2xl max-w-sm mb-8 flex border border-slate-200">
                <button
                  onClick={() => setActiveCourseCategory("ug")}
                  className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                    activeCourseCategory === "ug" ? "bg-slate-900 text-white" : "text-slate-500"
                  }`}
                >
                  Undergraduate (BE/BArch)
                </button>
                <button
                  onClick={() => setActiveCourseCategory("pg")}
                  className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                    activeCourseCategory === "pg" ? "bg-slate-900 text-white" : "text-slate-500"
                  }`}
                >
                  Postgraduate & Doctoral
                </button>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                {activeCourseCategory === "ug" ? (
                  <>
                    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="h-10 w-10 bg-yellow-50 rounded-xl text-yellow-600 flex items-center justify-center font-bold mb-4 border border-yellow-100">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <h3 className="text-base font-extrabold text-slate-900 mb-2">Bachelor of Engineering (B.E.)</h3>
                        <p className="text-slate-500 text-xs leading-relaxed font-medium">Standard 4-year undergraduate programs featuring 12+ technological specialisations.</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="h-10 w-10 bg-yellow-50 rounded-xl text-yellow-600 flex items-center justify-center font-bold mb-4 border border-yellow-100">
                          <ArrowRight className="h-5 w-5" />
                        </div>
                        <h3 className="text-base font-extrabold text-slate-900 mb-2">B.E. Lateral Entry</h3>
                        <p className="text-slate-500 text-xs leading-relaxed font-medium">Direct admissions into second-year engineering courses for eligible diploma holders via DCET.</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="h-10 w-10 bg-yellow-50 rounded-xl text-yellow-600 flex items-center justify-center font-bold mb-4 border border-yellow-100">
                          <School className="h-5 w-5" />
                        </div>
                        <h3 className="text-base font-extrabold text-slate-900 mb-2">B.Arch Architecture</h3>
                        <p className="text-slate-500 text-xs leading-relaxed font-medium">Offered via the associated RV College of Architecture (RVCA), focusing on design and planning.</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="h-10 w-10 bg-yellow-50 rounded-xl text-yellow-600 flex items-center justify-center font-bold mb-4 border border-yellow-100">
                          <BookOpen className="h-5 w-5" />
                        </div>
                        <h3 className="text-base font-extrabold text-slate-900 mb-2">Master of Technology (M.Tech)</h3>
                        <p className="text-slate-500 text-xs leading-relaxed font-medium">Advanced 2-year postgraduate degrees across 8 specialized technological streams.</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="h-10 w-10 bg-yellow-50 rounded-xl text-yellow-600 flex items-center justify-center font-bold mb-4 border border-yellow-100">
                          <Building className="h-5 w-5" />
                        </div>
                        <h3 className="text-base font-extrabold text-slate-900 mb-2">Master of Computer Apps (MCA)</h3>
                        <p className="text-slate-500 text-xs leading-relaxed font-medium">2-year professional PG program catering to software engineering and database administration.</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="h-10 w-10 bg-yellow-50 rounded-xl text-yellow-600 flex items-center justify-center font-bold mb-4 border border-yellow-100">
                          <Award className="h-5 w-5" />
                        </div>
                        <h3 className="text-base font-extrabold text-slate-900 mb-2">Ph.D. & M.Sc (Engineering)</h3>
                        <p className="text-slate-500 text-xs leading-relaxed font-medium">Research-oriented doctoral and master programs run under Visvesvaraya Technological University.</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </section>

            {/* 5. Fees Structure Section */}
            <section ref={sectionsRef["btech-branches"]} id="btech-branches" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm">
              <div className="max-w-4xl space-y-6">
                <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight mb-2">B.E. Branches & Fee Structure Matrix</h2>
                <p className="text-slate-650 leading-relaxed font-medium text-sm">
                  Find the detailed branch list along with comparative fees across government, state counselling (COMEDK), and institutional quotas.
                </p>

                <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white mt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-wider border-b border-slate-800">
                          <th className="p-5">Branch Name</th>
                          <th className="p-5">KCET Quota (Annual)</th>
                          <th className="p-5">COMEDK (Annual)</th>
                          <th className="p-5">Management Quota (Annual)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-5 font-black text-slate-900">Computer Science & Engineering (CSE)</td>
                          <td className="p-5">~₹98,000</td>
                          <td className="p-5">~₹2.80 Lakhs</td>
                          <td className="p-5 text-yellow-600 font-extrabold">₹12–15 Lakhs</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-5 font-black text-slate-900">CSE with AI & ML</td>
                          <td className="p-5">~₹98,000</td>
                          <td className="p-5">~₹2.80 Lakhs</td>
                          <td className="p-5 text-yellow-600 font-extrabold">₹12–15 Lakhs</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-5 font-black text-slate-900">Information Science & Engineering (ISE)</td>
                          <td className="p-5">~₹98,000</td>
                          <td className="p-5">~₹2.80 Lakhs</td>
                          <td className="p-5">₹10–12 Lakhs</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-5 font-black text-slate-900">Electronics & Communication (ECE)</td>
                          <td className="p-5">~₹98,000</td>
                          <td className="p-5">~₹2.80 Lakhs</td>
                          <td className="p-5">₹8–10 Lakhs</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-5 font-black text-slate-900">Electrical & Electronics (EEE)</td>
                          <td className="p-5">~₹98,000</td>
                          <td className="p-5">~₹2.80 Lakhs</td>
                          <td className="p-5">₹6–8 Lakhs</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-5 font-black text-slate-900">Mechanical Engineering (ME)</td>
                          <td className="p-5">~₹98,000</td>
                          <td className="p-5">~₹2.80 Lakhs</td>
                          <td className="p-5">₹6–8 Lakhs</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-5 font-black text-slate-900">Aerospace Engineering</td>
                          <td className="p-5">~₹98,000</td>
                          <td className="p-5">~₹2.80 Lakhs</td>
                          <td className="p-5">₹6–8 Lakhs</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-5 font-black text-slate-900">Civil Engineering (CE)</td>
                          <td className="p-5">~₹98,000</td>
                          <td className="p-5">~₹2.80 Lakhs</td>
                          <td className="p-5">₹4–6 Lakhs</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-5 font-black text-slate-900">Chemical Engineering (CHE)</td>
                          <td className="p-5">~₹98,000</td>
                          <td className="p-5">~₹2.80 Lakhs</td>
                          <td className="p-5 text-emerald-600">₹4.5 Lakhs</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-5 font-black text-slate-900">Biotechnology</td>
                          <td className="p-5">~₹98,000</td>
                          <td className="p-5">~₹2.80 Lakhs</td>
                          <td className="p-5">₹5–6 Lakhs</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-5 font-black text-slate-900">Electronics & Instrumentation (EI)</td>
                          <td className="p-5">~₹98,000</td>
                          <td className="p-5">~₹2.80 Lakhs</td>
                          <td className="p-5">₹5–6 Lakhs</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-5 font-black text-slate-900">Industrial Engineering & Management</td>
                          <td className="p-5">~₹98,000</td>
                          <td className="p-5">~₹2.80 Lakhs</td>
                          <td className="p-5">₹5–6 Lakhs</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 text-[11px] text-slate-500 font-semibold leading-relaxed">
                  <p className="uppercase font-black text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <DollarSign className="h-4.5 w-4.5 text-yellow-600" /> Quota Matrix Structure
                  </p>
                  Additional charges stand at ~₹65,000 per year (for non-tuition other fees). Hostels and transportation charges are separate. Seat quotas are distributed as: 45% KCET (Karnataka domicile), 35% COMEDK (All India), 15% Management Quota (RSST Trust), and 5% SNQ.
                </div>
              </div>
            </section>

            {/* 6. Admission Eligibility */}
            <section ref={sectionsRef["admission-eligibility"]} id="admission-eligibility" className="scroll-mt-32">
              <div className="mb-10 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-yellow-600">Academics Benchmarks</span>
                <h2 className="text-3xl font-extrabold text-slate-950 mt-2">Admission Eligibility & Cutoffs</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="bg-white rounded-3xl border border-slate-200/80 p-6 md:p-8 shadow-sm space-y-6">
                  <h3 className="text-lg font-extrabold text-slate-950 flex items-center gap-2">
                    <UserCheck className="h-5 w-5 text-yellow-600" /> B.E. Course Requirements
                  </h3>
                  <ul className="space-y-4 text-xs font-bold text-slate-700">
                    <li className="flex gap-2">
                      <Check className="h-4.5 w-4.5 text-yellow-600 shrink-0 mt-0.5" />
                      <span>Passed Class 12 (10+2) with Physics and Mathematics as compulsory subjects.</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-4.5 w-4.5 text-yellow-600 shrink-0 mt-0.5" />
                      <span>Minimum 70% in Science and Maths in Class 10 (separately).</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-4.5 w-4.5 text-yellow-600 shrink-0 mt-0.5" />
                      <span>Minimum 65% in Physics and Maths in Class 11 (separately).</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-4.5 w-4.5 text-yellow-600 shrink-0 mt-0.5" />
                      <span>Minimum 60% in Physics and Maths in Class 12 (separately).</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-4.5 w-4.5 text-yellow-600 shrink-0 mt-0.5" />
                      <span>Valid rank in KCET (Karnataka domicile), COMEDK UGET (All India), or JEE Main.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-3xl border border-slate-200/80 p-6 md:p-8 shadow-sm space-y-6">
                  <h3 className="text-lg font-extrabold text-slate-950 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-yellow-600" /> Historic Cutoff Ranks
                  </h3>
                  <div className="space-y-4 text-xs font-medium text-slate-650 leading-relaxed">
                    <div>
                      <h4 className="font-extrabold text-slate-900 mb-1">KCET Cutoffs (CSE, Round 1)</h4>
                      <p>Opening rank ~514 | Closing rank ~2,013</p>
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 mb-1">COMEDK Cutoffs (CSE, Round 1)</h4>
                      <p>Closing rank generally settles around ~Rank 875</p>
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 mb-1">Expected Cutoff CSE</h4>
                      <p className="text-yellow-600 font-extrabold">~1,200–2,000 range (highly competitive)</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. Placements */}
            <section ref={sectionsRef["placements"]} id="placements" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm">
              <div className="max-w-4xl space-y-6">
                <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight mb-2">Placement Record</h2>
                <p className="text-slate-650 leading-relaxed font-medium text-sm">
                  RVCE’s placement cells have maintained high recruitment matrices for UG and PG batches over the years.
                </p>

                {/* Stat Badges */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-4">
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Highest Package</span>
                    <span className="text-xl font-black text-yellow-600">₹1.15 Crore</span>
                    <span className="text-[9px] text-slate-400 block mt-0.5">International (2025)</span>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">B.E. Average Salary</span>
                    <span className="text-xl font-black text-slate-900">₹16.86 LPA</span>
                    <span className="text-[9px] text-slate-400 block mt-0.5">Ongoing Drive</span>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Placements Rate</span>
                    <span className="text-xl font-black text-slate-900">~84%</span>
                    <span className="text-[9px] text-slate-400 block mt-0.5">Overall Placement Ratio</span>
                  </div>
                </div>

                <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white mt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-wider border-b border-slate-800">
                          <th className="p-5">Year</th>
                          <th className="p-5">Companies Visited</th>
                          <th className="p-5">Total Offers</th>
                          <th className="p-5">Students Placed</th>
                          <th className="p-5">Avg Package (B.E.)</th>
                          <th className="p-5">Highest Package</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-5 font-black text-slate-900">Ongoing Drive</td>
                          <td className="p-5">—</td>
                          <td className="p-5">851 Offers</td>
                          <td className="p-5">—</td>
                          <td className="p-5 text-yellow-600">₹16.86 LPA</td>
                          <td className="p-5">₹67.00 LPA</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-5 font-black text-slate-900">Previous Year</td>
                          <td className="p-5">262</td>
                          <td className="p-5">826</td>
                          <td className="p-5">735</td>
                          <td className="p-5">₹15.24 LPA</td>
                          <td className="p-5">₹1.15 Crore (Int.) / ₹67.00 LPA (Dom.)</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-5 font-black text-slate-900">Year Before</td>
                          <td className="p-5">249</td>
                          <td className="p-5">917 Offers</td>
                          <td className="p-5">812</td>
                          <td className="p-5">₹25.45 LPA</td>
                          <td className="p-5">₹92.00 LPA</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-5 font-black text-slate-900">Prior Year</td>
                          <td className="p-5">200+</td>
                          <td className="p-5">—</td>
                          <td className="p-5">—</td>
                          <td className="p-5">~₹12 LPA</td>
                          <td className="p-5">~₹67 LPA</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-xs font-semibold text-slate-600 leading-relaxed space-y-2">
                  <p className="font-extrabold text-slate-800">Branch-wise Highlights:</p>
                  <p>Computer Science & Engineering (CSE) and Information Science & Engineering (ISE) graduates recorded average packages ranging from ₹19 LPA to ₹22 LPA, with placement ratios exceeding 91%.</p>
                  <p>Electronics & Communication (ECE) students recorded placements at tech firms including Qualcomm, Texas Instruments, and Intel.</p>
                </div>

                {/* Recruiter Logo Grid */}
                <div className="pt-6">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center mb-6">
                    Top Recruiting Partners
                  </h4>
                  <div className="grid grid-cols-3 sm:grid-cols-7 gap-5 items-center justify-items-center opacity-60">
                    {[
                      amazonLogo,
                      capgeminiLogo,
                      cognizantLogo,
                      eyLogo,
                      ibmLogo,
                      infosysLogo,
                      tcsLogo,
                      wiproLogo,
                      relianceLogo,
                      techMahindraLogo,
                      axisBankLogo,
                      kotakMahindraLogo,
                      oracleLogo,
                      daburLogo
                    ].map((logo, idx) => (
                      <img key={idx} src={logo} className="h-8 w-auto object-contain max-w-[80px]" alt="Recruiter Logo" />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 8. Campus Facilities */}
            <section ref={sectionsRef["facilities"]} id="facilities" className="scroll-mt-32">
              <div className="mb-10 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-yellow-600">On-Campus Ecosystem</span>
                <h2 className="text-3xl font-extrabold text-slate-950 mt-2">Campus Facilities</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Dedicated Metro stop",
                    desc: "Features its own RVCE Metro Station on the Mysore Road corridor of the Bangalore Metro, ensuring hassle-free travel links.",
                    icon: Building2
                  },
                  {
                    title: "Central Library",
                    desc: "Maintains a collection of 1+ lakh volumes, print/electronic journals, digital databases, and a 24/7 reading room.",
                    icon: Library
                  },
                  {
                    title: "Separate Hostels",
                    desc: "Separate residential canteens and hostels are provided for boys and girls, with priority given to outstation and female students.",
                    icon: Building
                  },
                  {
                    title: "Department Labs",
                    desc: "50+ NBA-accredited labs alongside industry lab partnerships with Qualcomm, Texas Instruments, and Bosch.",
                    icon: Wifi
                  },
                  {
                    title: "Sports Complex",
                    desc: "Includes facilities for cricket, football, basketball, volleyball, badminton, and a fully equipped gymnasium.",
                    icon: HeartPulse
                  },
                  {
                    title: "Research Centres",
                    desc: "Hosts dedicated Research and Development centers producing over 200 publications and 50+ patents annually.",
                    icon: Award
                  }
                ].map((facility, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:translate-y-[-4px] transition-all group">
                    <div>
                      <div className="h-10 w-10 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center font-bold mb-4 border border-yellow-100">
                        <facility.icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-sm font-extrabold text-slate-900 mb-1.5">{facility.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed font-medium">{facility.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 9. Why RVCE Stands Out */}
            <section ref={sectionsRef["advantages"]} id="advantages" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm">
              <div className="max-w-4xl space-y-6">
                <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight mb-2">Why RVCE Stands Out</h2>
                <p className="text-slate-650 leading-relaxed font-medium text-sm">
                  Review the core pillars that define the academic standing and industrial reputation of RV College of Engineering.
                </p>

                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 bg-yellow-50 border border-yellow-100 rounded-2xl flex items-center justify-center shrink-0 text-yellow-600">
                      <Trophy className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-slate-900 mb-1">State & National Rankings</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">Ranked as the #1 Private Engineering College in Karnataka (IIRF) and consistently placing in the top ranks nationally.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 w-10 bg-yellow-50 border border-yellow-100 rounded-2xl flex items-center justify-center shrink-0 text-yellow-600">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-slate-900 mb-1">Unique Industry Labs</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">Partnerships with Qualcomm, Bosch, and Texas Instruments provide students access to industry-grade equipment.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 w-10 bg-yellow-50 border border-yellow-100 rounded-2xl flex items-center justify-center shrink-0 text-yellow-600">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-slate-900 mb-1">Infrastructure Access</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">Features a dedicated RVCE Metro Station on the Mysore Road corridor, bringing zero-commute hassle to the campus.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 w-10 bg-yellow-50 border border-yellow-100 rounded-2xl flex items-center justify-center shrink-0 text-yellow-600">
                      <Star className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-slate-900 mb-1">62+ Years of Legacy</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">Features an active global network of over 35,000+ alumni working in leadership roles across technical fields.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 10. FAQs */}
            <section ref={sectionsRef["faqs"]} id="faqs" className="scroll-mt-32">
              <div className="mb-10 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-yellow-600">Answers to Your Queries</span>
                <h2 className="text-3xl font-extrabold text-slate-950 mt-2">Frequently Asked Questions</h2>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200/80 px-6 py-2 shadow-sm divide-y divide-slate-100">
                {[
                  {
                    q: "Is RV College of Engineering autonomous?",
                    a: "Yes, RV College of Engineering (RVCE) is an autonomous self-financing institution affiliated with Visvesvaraya Technological University (VTU) and managed by the RSST. Academic autonomy was granted for UG streams in 2007 and for PG courses in 2016."
                  },
                  {
                    q: "What is the fee structure for B.E. at RVCE through COMEDK?",
                    a: "For candidates admitting through COMEDK UGET, the annual tuition fee is approximately ₹2.80 Lakhs to ₹2.90 Lakhs, with additional charges of around ₹65,000 per year for other fees."
                  },
                  {
                    q: "What are the eligibility criteria for B.E. admission at RVCE?",
                    a: "Candidates must have passed Class 12 (10+2) with Physics and Mathematics as compulsory subjects, with a minimum score of 70% in Science and Maths in Class 10 (separately), 65% in Physics and Maths in Class 11 (separately), and 60% in Physics and Maths in Class 12 (separately). A valid rank in KCET, COMEDK UGET, or JEE Main is mandatory."
                  },
                  {
                    q: "Does RVCE have a metro station?",
                    a: "Yes, RV College of Engineering has its own dedicated RVCE Metro Station on the Mysore Road corridor of the Bangalore Metro, ensuring convenient transport links for students."
                  },
                  {
                    q: "What is the placement record at RVCE?",
                    a: "RVCE maintains a remarkable placement record. The highest package in 2025 reached ₹1.15 Crore internationally, and domestic packages went up to ₹67 LPA (domestic highest) and ₹92 LPA in 2024. The average salary package for B.E. in 2025 was ₹15.24 LPA, increasing to ₹16.86 LPA in the ongoing 2026 drive."
                  }
                ].map((faq, idx) => {
                  const isOpen = activeFAQ === idx;
                  return (
                    <div key={idx} className="py-5">
                      <button
                        onClick={() => toggleFAQ(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between text-left font-bold text-slate-900 text-sm md:text-base hover:text-yellow-600 transition-colors"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? <ChevronUp className="h-5 w-5 text-yellow-600" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden mt-3 text-xs leading-relaxed font-semibold text-slate-500"
                          >
                            {faq.a}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 11. Contact & Admissions Info */}
            <section ref={sectionsRef["contact"]} id="contact" className="scroll-mt-32 bg-[#090F1E] rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <span className="text-yellow-400 font-extrabold uppercase tracking-widest text-xs">Official Contact info</span>
                  <h2 className="text-2xl md:text-4xl font-black tracking-tight leading-tight">RV College of Engineering (RVCE)</h2>
                  <div className="space-y-4 text-sm font-semibold text-slate-300">
                    <p className="flex items-start gap-2.5">
                      <MapPin className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                      <span>Mysore Road, RV Vidyaniketan Post, Bengaluru – 560059, Karnataka</span>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Globe className="h-5 w-5 text-yellow-500 shrink-0" />
                      <a href="https://www.rvce.edu.in" target="_blank" rel="noreferrer" className="hover:underline">www.rvce.edu.in</a>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Award className="h-5 w-5 text-yellow-500 shrink-0" />
                      <span>Managed by: Rashtreeya Sikshana Samithi Trust (RSST)</span>
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/10 text-xs text-slate-400">
                    ⚠️ Note: RVCE does not entertain admission through agents — all registrations are handled directly through the RSST office.
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 space-y-6 text-center">
                  <h4 className="text-lg font-bold text-white">Need Counselling Support?</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-semibold">Speak directly with our senior educational advisors to clear your questions regarding Karnataka counselling channels.</p>
                  <div className="flex flex-col gap-3">
                    <a
                      href="tel:+919933085333"
                      className="py-4 bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-black rounded-xl text-xs uppercase tracking-widest transition-all block flex items-center justify-center gap-2"
                    >
                      <Phone className="h-4 w-4" /> Call Now: +91 99330 85333
                    </a>
                    <a
                      href="https://wa.me/919933085333"
                      target="_blank"
                      rel="noreferrer"
                      className="py-4 bg-green-500 hover:bg-green-600 text-white font-black rounded-xl text-xs uppercase tracking-widest transition-all block flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4" /> WhatsApp Advisor
                    </a>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
