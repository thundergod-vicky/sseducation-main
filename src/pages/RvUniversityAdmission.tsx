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

export default function RvUniversityAdmission() {
  useSeo({
    title: "RV University (RVU) Bengaluru Guide - Courses, Fees & Admission",
    description: "Explore RV University (RVU) Bengaluru. Backed by RSST legacy, offering B.Tech, BBA, Law, & Design programs. Check fees, eligibility, and centralized placements."
  });

  // Dynamic College, FAQ, and Breadcrumb Schema Markup
  useJsonLd({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/rv-university-bengaluru/#college",
        "name": "RV University (RVU), Bengaluru",
        "alternateName": "RVU Bengaluru",
        "url": "https://rvu.edu.in",
        "description": "RV University (RVU) is a premier private multidisciplinary state university established in 2021 by the Rashtreeya Sikshana Samithi Trust (RSST) in Bengaluru, Karnataka.",
        "logo": "https://rvu.edu.in/images/logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mysore Road",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560059",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ssadmission.in/rv-university-bengaluru/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is RV University recognized by UGC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, RV University (RVU) is fully recognized by the University Grants Commission (UGC) as a private state university established under the Government of Karnataka Act."
            }
          },
          {
            "@type": "Question",
            "name": "Is RV University part of RV College of Engineering?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. RV University is a separate multidisciplinary university, but both belong to the same Rashtreeya Sikshana Samithi Trust (RSST) educational ecosystem."
            }
          },
          {
            "@type": "Question",
            "name": "What courses are offered at RV University?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "RV University offers undergraduate, postgraduate, and research programs across several schools, including Computer Science & Engineering (B.Tech Hons), Business (BBA, MBA), Law, Design, Liberal Arts, and Media."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ssadmission.in/rv-university-bengaluru/#breadcrumb",
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
            "name": "RV University Bengaluru",
            "item": "https://ssadmission.in/rv-university-bengaluru"
          }
        ]
      }
    ]
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("about-rvu");
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
    "about-rvu": useRef<HTMLElement>(null),
    "legacy": useRef<HTMLElement>(null),
    "key-highlights": useRef<HTMLElement>(null),
    "why-choose": useRef<HTMLElement>(null),
    "schools": useRef<HTMLElement>(null),
    "fees": useRef<HTMLElement>(null),
    "eligibility": useRef<HTMLElement>(null),
    "placements": useRef<HTMLElement>(null),
    "facilities": useRef<HTMLElement>(null),
    "faqs": useRef<HTMLElement>(null),
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
      const nameInput = document.getElementById("rvu-lead-name");
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
    googleFormData.append("entry.85122333", `RVU Bangalore Showcase - Preferred Course: ${parsed.data.course}`);

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
    { id: "about-rvu", label: "Overview" },
    { id: "legacy", label: "RSST Legacy" },
    { id: "key-highlights", label: "Highlights" },
    { id: "why-choose", label: "Why Choose" },
    { id: "schools", label: "Academic Schools" },
    { id: "fees", label: "Fee Matrix" },
    { id: "eligibility", label: "Eligibility" },
    { id: "placements", label: "Placements" },
    { id: "facilities", label: "Facilities" },
    { id: "faqs", label: "FAQs" },
  ] as const;

  const highlights = [
    { label: "Founded Year", value: "2021", sub: "Modern State Private Univ" },
    { label: "Managing Body", value: "RSST Trust", sub: "85+ Years Legacy" },
    { label: "Recognition", value: "UGC Approved", sub: "Empowered to Award Degrees" },
    { label: "Learning Model", value: "Interdisciplinary", sub: "Flexible Pathways" },
    { label: "Campus Type", value: "Urban", sub: "Located on Mysore Road" },
    { label: "Global Network", value: "Multiple partners", sub: "International Engagement" },
    { label: "Active Schools", value: "7 Schools", sub: "Multidisciplinary Scope" },
    { label: "Career Focus", value: "Active CDC", sub: "Structured Placements" }
  ];

  const schoolsInfo = [
    { name: "School of Computer Science & Engineering", focus: "Artificial Intelligence, Machine Learning, Data Science, Cyber Security, Cloud Computing, Software Engineering", tag: "Emerging Tech" },
    { name: "School of Business", focus: "Entrepreneurship, Finance, Marketing, Analytics, Strategy, Leadership (BBA, MBA)", tag: "Management" },
    { name: "School of Economics & Public Policy", focus: "Development Economics, Public Policy, Economic Analytics, International Economics", tag: "Policy & Econ" },
    { name: "School of Liberal Arts & Sciences", focus: "Critical Thinking, Psychology, Sociology, Philosophy, Environmental Science", tag: "Liberal Arts" },
    { name: "School of Law", focus: "Constitutional Law, Corporate Law, Criminal Law, Intellectual Property, Technology Law (BA LLB Hons)", tag: "Legal studies" },
    { name: "School of Design & Innovation", focus: "Design Thinking, User Experience (UX/UI), Product Design, Visual Communication", tag: "Design" },
    { name: "School of Film, Media & Creative Arts", focus: "Journalism, Film Production, Digital Communication, Creative Writing", tag: "Media & Film" }
  ];

  const indicFees = [
    { course: "B.Tech (Computer Science & Engineering Specialisations)", annual: "₹3.5 Lakhs – ₹5.5 Lakhs", totalEst: "₹14 Lakhs – ₹22 Lakhs" },
    { course: "BBA Programs", annual: "₹2.0 Lakhs – ₹4.0 Lakhs", totalEst: "₹8 Lakhs – ₹16 Lakhs" },
    { course: "Economics & Liberal Arts (BA/B.Sc Hons)", annual: "₹2.0 Lakhs – ₹4.0 Lakhs", totalEst: "₹6 Lakhs – ₹12 Lakhs" },
    { course: "Law Programs (BA LLB Hons - 5 Years)", annual: "₹3.0 Lakhs – ₹5.5 Lakhs", totalEst: "₹15 Lakhs – ₹27.5 Lakhs" },
    { course: "MBA Programs (2 Years Total)", annual: "—", totalEst: "₹8.0 Lakhs – ₹15.0 Lakhs" }
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
      q: "Is RV University recognized by UGC?",
      a: "Yes. RV University is fully recognized by the University Grants Commission (UGC) under Section 2(f) of the UGC Act, which empowers it to award undergraduate, postgraduate, and doctoral degrees."
    },
    {
      q: "Is RV University the same as RV College of Engineering (RVCE)?",
      a: "No. RV University (RVU) is a separate private state university established in 2021. However, both RVU and RVCE belong to the same Rashtreeya Sikshana Samithi Trust (RSST) educational ecosystem and share institutional heritage."
    },
    {
      q: "What is the fee structure for B.Tech at RV University?",
      a: "The annual tuition fee for B.Tech programs ranges approximately from ₹3.5 Lakhs to ₹5.5 Lakhs per year depending on the chosen specialisation (such as AI & ML, Cyber Security, or Data Science)."
    },
    {
      q: "Does RV University provide hostel facilities?",
      a: "Yes. RV University provides accommodation support with separate secure hostel blocks for boys and girls, complete with Wi-Fi, dining facilities, and security."
    },
    {
      q: "Does the university offer scholarships?",
      a: "Yes. RV University provides multiple scholarship options including Merit-based scholarships (for high academic and entrance scorers), Need-based support, Sports achievements scholarships, and Special accomplishments concessions."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      {/* Top Alert Banner */}
      <div className="bg-[#0b1c33] py-3 text-center border-b border-rose-500/20 relative z-30 pt-20 lg:pt-3">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <span className="h-2 w-2 rounded-full bg-yellow-500 animate-ping shrink-0" />
          <p className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.15em] leading-tight">
            UGC Recognized Multidisciplinary Private State University • Powered by RSST Trust
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-[#081220] text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c2340]/95 to-[#071324] z-0" />
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <nav className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#c5a880] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>/</span>
                <a href="/engineering" className="hover:text-white transition-colors">Colleges</a>
                <span>/</span>
                <span className="text-yellow-500">RV University</span>
              </nav>

              <div className="space-y-3">
                <span className="inline-block text-xs font-black uppercase tracking-widest text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-3 py-1 rounded-full">
                  Transformative Multidisciplinary Learning
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                  RV University (RVU), Bengaluru
                </h1>
              </div>

              <p className="text-slate-350 text-base sm:text-lg font-medium leading-relaxed max-w-3xl">
                Redefining higher education in India. Backed by the legendary 85+ year academic heritage of RSST, RVU combines interdisciplinary learning pathways, strong Bengaluru corporate ecosystems, and research-driven pedagogy.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {["UGC Recognized", "Multidisciplinary", "Global Partnerships", "Active Innovation Hub"].map((badge, idx) => (
                  <span key={idx} className="text-[10px] font-black uppercase tracking-widest bg-white/10 border border-white/15 px-4 py-2 rounded-xl text-yellow-400">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Inquiry CTA Form Panel */}
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
                      <CheckCircle2 className="h-10 w-10 text-[#0c2340]" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Request Received</h3>
                    <p className="mt-4 text-slate-500 font-semibold leading-relaxed text-sm">
                      Thank you! Our senior admissions advisor has received your details and will get in touch shortly to assist you.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-xl font-black text-slate-900 leading-tight mb-1 tracking-tight">Request Information</h3>
                    <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mb-5">Get official cutoff & fee guides</p>

                    <form onSubmit={handleFormSubmit} className="space-y-3.5">
                      <div>
                        <Label htmlFor="rvu-lead-name" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Full Name *</Label>
                        <Input
                          id="rvu-lead-name"
                          placeholder="Your full name"
                          className={`h-11 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all text-slate-800 text-xs ${errors.name ? "border-rose-500 bg-rose-50/10" : ""}`}
                          value={formData.name || ""}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                        />
                        {errors.name && <p className="text-[10px] font-semibold text-rose-500 mt-1 uppercase tracking-wide">{errors.name}</p>}
                      </div>

                      <div>
                        <Label htmlFor="rvu-lead-phone" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Mobile Number *</Label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <Input
                            id="rvu-lead-phone"
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
                        <Label htmlFor="rvu-lead-email" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Email (Optional)</Label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <Input
                            id="rvu-lead-email"
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
                              <SelectItem value="BBA Management">BBA Business</SelectItem>
                              <SelectItem value="BA Hons Economics">BA Hons Econ</SelectItem>
                              <SelectItem value="Law BA LLB Hons">BA LLB Hons</SelectItem>
                              <SelectItem value="Design B.Des">B.Des / Design</SelectItem>
                              <SelectItem value="MBA / PG programs">MBA / M.Tech</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.course && <p className="text-[10px] font-semibold text-rose-500 mt-1 uppercase tracking-wide">{errors.course}</p>}
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 mt-4 bg-yellow-500 hover:bg-yellow-600 text-[#0c2340] font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
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
                  onClick={() => scrollToSection(item.id)}
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
                className="py-3 bg-[#0c2340] hover:bg-[#071324] text-white font-black rounded-xl text-[10px] uppercase tracking-widest transition-all block"
              >
                +91 99330 85333
              </a>
            </div>
          </aside>

          {/* Core Content Area */}
          <div className="space-y-20">
            {/* 1. About Section */}
            <section ref={sectionsRef["about-rvu"]} id="about-rvu" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm">
              <div className="max-w-4xl space-y-6">
                <span className="text-xs font-black uppercase tracking-widest text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
                  Overview
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  About RV University (RVU), Bengaluru
                </h2>
                <p className="text-slate-600 leading-relaxed font-medium font-sans">
                  RV University (RVU), Bengaluru is one of India's premier multidisciplinary state private universities, established by the highly respected Rashtreeya Sikshana Samithi Trust (RSST). Situated on a modern urban campus on Mysore Road, the university was founded with a strategic vision to transform higher education through interdisciplinary learning, intense corporate collaboration, startup incubation, and global institutional partnerships.
                </p>
                <p className="text-slate-650 leading-relaxed font-medium">
                  Unlike traditional universities that operate in rigid academic silos, RV University promotes a highly flexible and open academic philosophy. Students are encouraged to combine diverse disciplines (such as Computer Science with Economics, or Design with technology) to align with evolving professional environments.
                </p>
              </div>
            </section>

            {/* 2. RSST Legacy */}
            <section ref={sectionsRef["legacy"]} id="legacy" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm">
              <div className="max-w-4xl space-y-6">
                <span className="text-xs font-black uppercase tracking-widest text-yellow-600">Unified Trust Ecosystem</span>
                <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  The RSST Trust Legacy
                </h2>
                <p className="text-slate-600 leading-relaxed font-medium">
                  Every prestigious university stands on a solid foundation. For RV University, that bedrock is the Rashtreeya Sikshana Samithi Trust (RSST). Founded in 1940 by the visionary educator Sri M.C. Sivananda Sarma, RSST has been shaping educational outcomes in Karnataka for over eight decades.
                </p>
                <p className="text-slate-650 leading-relaxed font-medium">
                  Today, the trust successfully manages 27 institutions across school levels, technical institutes, teacher training, and research divisions. RV University students gain direct access to this massive ecosystem's resources:
                </p>
                <ul className="grid sm:grid-cols-2 gap-3 text-xs font-bold text-slate-500 list-disc pl-5">
                  <li>Strong academic culture cultivated over 80+ years</li>
                  <li>Deeply established corporate recruiter relationships</li>
                  <li>Vast global alumni networks</li>
                  <li>Centralized placement cells and incubation access</li>
                  <li>Academic synergies with sister institutes like RVCE and RVITM</li>
                </ul>
              </div>
            </section>

            {/* 3. Key Highlights */}
            <section ref={sectionsRef["key-highlights"]} id="key-highlights" className="scroll-mt-32">
              <div className="mb-10 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-[#0c2340]">Academic Matrix</span>
                <h2 className="text-3xl font-extrabold text-slate-950 mt-2">Key Highlights at a Glance</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {highlights.map((stat, i) => (
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
            <section ref={sectionsRef["why-choose"]} id="why-choose" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm">
              <div className="max-w-4xl space-y-6">
                <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  Why Students Choose RV University
                </h2>
                <p className="text-slate-600 leading-relaxed font-medium">
                  RVU represents a new generation of higher education, combining traditional trust values with contemporary interdisciplinary academic methods:
                </p>
                <div className="grid sm:grid-cols-2 gap-6 text-xs font-bold text-slate-500">
                  <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                    <h4 className="text-slate-900 font-extrabold text-sm">1. Multidisciplinary Scope</h4>
                    <p className="text-slate-500">Break boundaries between technical, design, and legal streams. Major-minor options allow unique combinations like B.Tech with Business Analytics or design.</p>
                  </div>
                  <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                    <h4 className="text-slate-900 font-extrabold text-sm">2. The Bengaluru Advantage</h4>
                    <p className="text-slate-500">Proximity to IT parks, incubators, think tanks, and venture networks provides students access to internship pipelines and industrial collaborations.</p>
                  </div>
                  <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                    <h4 className="text-slate-900 font-extrabold text-sm">3. Research & Incubation Focus</h4>
                    <p className="text-slate-500">Get support to launch your startup via innovation cells, incubation grids, and research sponsorships from day one.</p>
                  </div>
                  <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                    <h4 className="text-slate-900 font-extrabold text-sm">4. Global Institutional Networks</h4>
                    <p className="text-slate-500">Leverage university MoUs with global institutes in the US, Europe, and Asia for semester exchanges and collaborative research projects.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Academic Schools */}
            <section ref={sectionsRef["schools"]} id="schools" className="scroll-mt-32">
              <div className="mb-10 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-[#0c2340]">Interdisciplinary Divisions</span>
                <h2 className="text-3xl font-extrabold text-slate-950 mt-2">Specialised Academic Schools at RVU</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {schoolsInfo.map((sch, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-full border border-yellow-100">
                        {sch.tag}
                      </span>
                      <h3 className="text-base font-extrabold text-slate-900 mt-3 mb-2">{sch.name}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed font-medium">{sch.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Indicative Fees Table */}
            <section ref={sectionsRef["fees"]} id="fees" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm">
              <div className="max-w-4xl space-y-6">
                <span className="text-xs font-black uppercase tracking-widest text-yellow-600">Education Investment Guide</span>
                <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  Indicative Program Fee Matrices
                </h2>
                <p className="text-slate-650 leading-relaxed font-medium text-sm">
                  The indicative annual tuition fees vary according to the chosen school and stream specialisation. (Note: Hostel fees, mess, and exam charges are extra).
                </p>

                <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white mt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider border-b border-slate-800">
                          <th className="p-4">Program / Course</th>
                          <th className="p-4">Indicative Annual Tuition</th>
                          <th className="p-4 font-center">Total Estimated Tuition</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
                        {indicFees.map((fee, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                            <td className="p-4 font-black text-slate-900">{fee.course}</td>
                            <td className="p-4 text-rose-600 font-extrabold">{fee.annual}</td>
                            <td className="p-4 text-[#0c2340] font-black">{fee.totalEst}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-xs font-bold text-slate-500">
                  <span className="text-slate-950 font-extrabold uppercase text-[10px] block mb-2">Hostel & Accommodation support</span>
                  RV University manages separate hostel wings for male and female students with high-speed Wi-Fi, study lounges, security guards, and sports/dining provisions on campus.
                </div>
              </div>
            </section>

            {/* 7. Admission Eligibility */}
            <section ref={sectionsRef["eligibility"]} id="eligibility" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm">
              <div className="max-w-4xl space-y-6">
                <span className="text-xs font-black uppercase tracking-widest text-[#0c2340]">Entry Criteria & Process</span>
                <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  Admission Eligibility Guidelines
                </h2>
                <div className="grid sm:grid-cols-2 gap-6 text-xs font-bold text-slate-500">
                  <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                    <h4 className="text-slate-900 font-extrabold text-sm">B.Tech (Hons.) Eligibility</h4>
                    <p>Requires successful completion of Class 12 with Physics, Chemistry, and Mathematics. Selection is based on JEE Main scores, state-level entrance exam performances, or the official RVU selection process.</p>
                  </div>
                  <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                    <h4 className="text-slate-900 font-extrabold text-sm">BBA & BA Programs Eligibility</h4>
                    <p>Requires successful completion of Class 12 from a recognized board. Selection criteria take into account previous academic records, entrance assessments, and personal interviews.</p>
                  </div>
                </div>

                <div className="bg-slate-900 text-white rounded-2xl p-6 mt-6 space-y-4">
                  <h4 className="text-sm font-extrabold text-yellow-500 uppercase tracking-widest">Step-by-Step Admission Process</h4>
                  <ol className="grid sm:grid-cols-3 gap-4 text-[10px] uppercase font-black tracking-wider text-slate-350">
                    <li className="p-3 bg-white/5 rounded-xl border border-white/10">1. Online Registration & Application Form</li>
                    <li className="p-3 bg-white/5 rounded-xl border border-white/10">2. Document verification & Selection round</li>
                    <li className="p-3 bg-white/5 rounded-xl border border-white/10">3. Admission offer & tuition fee deposit</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* 8. Placements */}
            <section ref={sectionsRef["placements"]} id="placements" className="scroll-mt-32">
              <div className="bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-8">
                <div className="max-w-4xl space-y-4">
                  <span className="text-xs font-black uppercase tracking-widest text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100">
                    Career Development Center (CDC)
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                    Placements & Career Development
                  </h2>
                  <p className="text-slate-650 leading-relaxed font-medium text-sm font-sans">
                    RV University coordinates career opportunities through its central Career Development Center (CDC). Backed by the reputation and deep network of the RSST trust, students gain direct access to top tech corporations, financial consulting groups, and design firms in Bengaluru.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 text-xs font-bold text-slate-500">
                  <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                    <h4 className="text-slate-900 font-extrabold text-sm">Placement Prep Modules</h4>
                    <p className="text-slate-500">Year-round training in logical reasoning, coding skills, mock interviews, and group discussions to improve corporate readiness.</p>
                  </div>
                  <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                    <h4 className="text-slate-900 font-extrabold text-sm">Structured Internships</h4>
                    <p className="text-slate-500">Experiential learning is integrated into the curriculum, requiring students to complete industry projects and corporate internships.</p>
                  </div>
                </div>

                <div className="space-y-6 pt-6 border-t border-slate-100">
                  <h3 className="text-base font-black uppercase tracking-widest text-slate-400 text-center lg:text-left">Recruiting Partners</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-7 gap-6 items-center">
                    {recruiters.map((rec, i) => (
                      <div key={i} className="h-12 p-2 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:scale-105" title={rec.name}>
                        <img src={rec.logo} alt={rec.name} className="max-h-full max-w-full object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 9. Facilities */}
            <section ref={sectionsRef["facilities"]} id="facilities" className="scroll-mt-32">
              <div className="mb-10 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-[#0c2340]">Infrastructure index</span>
                <h2 className="text-3xl font-extrabold text-slate-950 mt-2">Campus Facilities & Ecosystem</h2>
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { title: "Smart Classrooms", desc: "Digital learning systems, hybrid lectures, and interactive projectors in all class blocks.", icon: School },
                  { title: "Knowledge Library", desc: "Housing research journal databases, physical libraries, and online learning archives.", icon: BookOpen },
                  { title: "Advanced Computing Labs", desc: "High-end software setups to support AI projects, machine learning, and data science research.", icon: Wifi },
                  { title: "Innovation Studios", desc: "Dedicated spaces for design thinking, prototype construction, and group presentations.", icon: Sparkles },
                  { title: "Hostels & Recreation", desc: "Residential rooms with high security, dining halls, and indoor sports amenities.", icon: Building },
                  { title: "Innovation Hub", desc: "Active startup incubation cells supporting new student entrepreneurship ideas.", icon: Trophy }
                ].map((fac, idx) => {
                  const Icon = fac.icon;
                  return (
                    <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                      <div>
                        <div className="h-10 w-10 bg-yellow-50 rounded-xl text-yellow-600 flex items-center justify-center font-bold mb-4 border border-yellow-100">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-base font-extrabold text-slate-900 mb-2">{fac.title}</h3>
                        <p className="text-slate-500 text-xs leading-relaxed font-medium">{fac.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 10. FAQs */}
            <section ref={sectionsRef["faqs"]} id="faqs" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm">
              <div className="max-w-4xl space-y-6">
                <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight mb-2">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqItems.map((faq, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden transition-all shadow-sm">
                      <button
                        onClick={() => toggleFAQ(idx)}
                        className="w-full flex items-center justify-between p-5 text-left font-black text-slate-900 text-sm"
                      >
                        <span>{faq.q}</span>
                        {activeFAQ === idx ? <ChevronUp className="h-5 w-5 text-yellow-600" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
                      </button>
                      <AnimatePresence>
                        {activeFAQ === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden border-t border-slate-100 bg-white"
                          >
                            <p className="p-5 text-xs text-slate-500 leading-relaxed font-semibold">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
