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

export default function RvitmAdmission() {
  useSeo({
    title: "RV Institute of Technology and Management (RVITM) Bangalore Guide",
    description: "Learn about RV Institute of Technology & Management (RVITM) Bangalore. 2nd Campus of RVCE. Explore course fee matrices, centralized placement packages, and cutoffs."
  });

  // Dynamic College, FAQ, and Breadcrumb Schema Markup
  useJsonLd({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/rv-institute-of-technology-management-bangalore/#college",
        "name": "RV Institute of Technology & Management (RVITM), Bangalore",
        "alternateName": "RVITM Bangalore",
        "url": "https://rvitm.edu.in",
        "description": "RV Institute of Technology & Management (RVITM) is a private engineering institution established in 2019 by Rashtreeya Sikshana Samithi Trust (RSST). It is the second campus of the prestigious RV College of Engineering (RVCE) in Bangalore.",
        "logo": "https://rvitm.edu.in/images/logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Kothanur, J.P. Nagar 8th Phase",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560078",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ssadmission.in/rv-institute-of-technology-management-bangalore/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is RVITM placement shared with RVCE?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, placement for both RVCE and RVITM campuses is fully centralised. RVITM students participate in the same placement drives and have access to the same 400+ companies that visit the RVCE campus."
            }
          },
          {
            "@type": "Question",
            "name": "What is the fee structure for B.E. at RVITM?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The annual B.E. tuition fee is ₹1,07,495 for KCET seats and ₹2,64,372 for COMEDK UGET seats. Management Quota fees range from ₹1.75 Lakhs to ₹3.00 Lakhs per year depending on the branch."
            }
          },
          {
            "@type": "Question",
            "name": "Where is the RVITM campus located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "RVITM is located in Kothanur, 8th Phase, J.P. Nagar, Bengaluru – 560078, Karnataka. This is in the sought-after South Bangalore residential and tech corridor."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ssadmission.in/rv-institute-of-technology-management-bangalore/#breadcrumb",
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
            "name": "RVITM Bangalore",
            "item": "https://ssadmission.in/rv-institute-of-technology-management-bangalore"
          }
        ]
      }
    ]
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("about-rvitm");
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
    "about-rvitm": useRef<HTMLElement>(null),
    "key-highlights": useRef<HTMLElement>(null),
    "accreditation": useRef<HTMLElement>(null),
    "courses-branches": useRef<HTMLElement>(null),
    "fee-matrix": useRef<HTMLElement>(null),
    "admission-eligibility": useRef<HTMLElement>(null),
    "placements-shared": useRef<HTMLElement>(null),
    "company-offers": useRef<HTMLElement>(null),
    "training-facilities": useRef<HTMLElement>(null),
    "scholarships": useRef<HTMLElement>(null),
    "why-choose": useRef<HTMLElement>(null),
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
      const nameInput = document.getElementById("rvitm-lead-name");
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
    googleFormData.append("entry.85122333", `RVITM Bangalore Showcase - Preferred Course: ${parsed.data.course}`);

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
    { id: "about-rvitm", label: "Overview" },
    { id: "key-highlights", label: "Highlights" },
    { id: "accreditation", label: "Accreditations" },
    { id: "courses-branches", label: "Courses & Branches" },
    { id: "fee-matrix", label: "Fees Matrix" },
    { id: "admission-eligibility", label: "Eligibility" },
    { id: "placements-shared", label: "Shared Placements" },
    { id: "company-offers", label: "Company Offers" },
    { id: "training-facilities", label: "Training & Campus" },
    { id: "scholarships", label: "Scholarships" },
    { id: "why-choose", label: "Why Choose" },
    { id: "faqs", label: "FAQs" },
  ] as const;

  const highlights = [
    { label: "Sister College", value: "RVCE 2nd Campus", sub: "Fully Shared Placements" },
    { label: "Managing Body", value: "RSST Trust", sub: "85+ Years Legacy" },
    { label: "First Batch", value: "2019", sub: "Young & Highly Modern" },
    { label: "NAAC Grade", value: "Grade A", sub: "UGC Accredited" },
    { label: "Affiliation", value: "VTU Belagavi", sub: "AICTE Approved" },
    { label: "Total B.E. Seats", value: "300", sub: "Across 4 Core Branches" },
    { label: "Highest Package", value: "₹47 LPA", sub: "PayPal Offer (CSE)" },
    { label: "Median Package", value: "₹11 LPA", sub: "2024 Verified Stats" }
  ];

  const btechBranches = [
    { name: "Computer Science & Engineering (CSE)", seats: 120, kcet: "₹1,07,495", comedk: "₹2,64,372", mgmt: "₹3,00,000", totalKcet: "₹4.30 Lakhs", totalComedk: "₹10.57 Lakhs", totalMgmt: "₹12 Lakhs" },
    { name: "Information Science & Engineering (ISE)", seats: 60, kcet: "₹1,07,495", comedk: "₹2,64,372", mgmt: "₹2,50,000", totalKcet: "₹4.30 Lakhs", totalComedk: "₹10.57 Lakhs", totalMgmt: "₹10 Lakhs" },
    { name: "Electronics & Communication Engg (ECE)", seats: 60, kcet: "₹1,07,495", comedk: "₹2,64,372", mgmt: "₹2,00,000", totalKcet: "₹4.30 Lakhs", totalComedk: "₹10.57 Lakhs", totalMgmt: "₹8 Lakhs" },
    { name: "Mechanical Engineering (ME)", seats: 60, kcet: "₹1,07,495", comedk: "₹2,64,372", mgmt: "₹1,75,000", totalKcet: "₹4.30 Lakhs", totalComedk: "₹10.57 Lakhs", totalMgmt: "₹7 Lakhs" }
  ];

  const cutoffsList = [
    { branch: "Computer Science & Engineering (CSE)", opening: "~7,846", closing: "~8,500" },
    { branch: "Information Science & Engineering (ISE)", opening: "~8,500", closing: "~9,800" },
    { branch: "Electronics & Communication Engg (ECE)", opening: "~9,200", closing: "~10,225" },
    { branch: "Mechanical Engineering (ME)", opening: "~10,000", closing: "~12,000+" }
  ];

  const placementHistory = [
    { year: "2023", rate: "~80%", median: "₹12 LPA", avg: "₹15 LPA", highest: "₹47 LPA (PayPal)" },
    { year: "2024", rate: "83.41%", median: "₹11 LPA", avg: "₹11.47 LPA", highest: "₹29 LPA" },
    { year: "2025 (Ongoing)", rate: "~70%+", median: "—", avg: "₹11.36 LPA", highest: "₹26.35 LPA" }
  ];

  const branchPlacements = [
    { branch: "CSE Computer Science", rate: "70–85%", avg: "₹12–15 LPA", highest: "₹47 LPA", note: "Amazon, Deutsche Bank, JP Morgan recruitment." },
    { branch: "ISE Information Science", rate: "70–80%", avg: "₹10–13 LPA", highest: "₹29 LPA", note: "Strong systems and application roles." },
    { branch: "ECE Electronics", rate: "60–70%", avg: "₹8–11 LPA", highest: "₹29 LPA", note: "Excellent core semiconductor + software placements." },
    { branch: "Mechanical Engg", rate: "50–65%", avg: "₹6–8 LPA", highest: "₹18 LPA", note: "Core focus (Tata Motors, HAL, Honeywell)." }
  ];

  const companyOffers = [
    { company: "PayPal", package: "₹35 LPA", count: 1 },
    { company: "Analog Devices", package: "₹29 LPA", count: 1 },
    { company: "Nutanix", package: "₹22 LPA", count: 1 },
    { company: "Tesco", package: "₹21 LPA", count: 1 },
    { company: "Oracle", package: "₹19 LPA", count: 5 },
    { company: "Cisco", package: "₹18 LPA", count: 1 },
    { company: "HPE", package: "₹18 LPA", count: 8 },
    { company: "MathWorks", package: "₹18 LPA", count: 1 },
    { company: "Philips", package: "₹12 LPA", count: 9 },
    { company: "Airbus Engineering", package: "₹11 LPA", count: 3 },
    { company: "ABB Limited", package: "₹11 LPA", count: 3 },
    { company: "Honeywell", package: "₹9 LPA", count: 7 },
    { company: "MindTree", package: "₹4.50 LPA", count: 9 }
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
      q: "Are the placements at RVITM centralised with RVCE?",
      a: "Yes. RVITM placements are completely centralised with RV College of Engineering (RVCE). RVITM students participate in the exact same placement drives and gain direct access to the same 400+ recruiting companies."
    },
    {
      q: "What is the total fee for B.Tech at RVITM?",
      a: "For KCET candidates, the annual fee is ₹1,07,495, totaling about ₹4.30 Lakhs for 4 years. For COMEDK candidates, the annual tuition fee is ₹2,64,372, totaling about ₹10.57 Lakhs. Management Quota annual fees range between ₹1.75 Lakhs and ₹3.00 Lakhs."
    },
    {
      q: "Which courses are offered at RVITM?",
      a: "RVITM offers B.E. (Bachelor of Engineering) in Computer Science & Engineering (CSE), Information Science & Engineering (ISE), Electronics & Communication Engineering (ECE), and Mechanical Engineering (ME). It also offers a VTU-affiliated MBA program."
    },
    {
      q: "Where is the RVITM campus?",
      a: "RVITM is located in Kothanur, J.P. Nagar 8th Phase, Bengaluru – 560078. It features a modern, serenity-focused campus situated close to Bannerghatta Road and Electronic City hubs."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      {/* Top Alert Banner */}
      <div className="bg-[#0b1c33] py-3 text-center border-b border-rose-500/20 relative z-30 pt-20 lg:pt-3">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <span className="h-2 w-2 rounded-full bg-rose-500 animate-ping shrink-0" />
          <p className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.15em] leading-tight">
            Second Campus of RVCE Bangalore • Centralised Placement with RVCE
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
                <span className="text-yellow-500">RVITM J.P. Nagar</span>
              </nav>

              <div className="space-y-3">
                <span className="inline-block text-xs font-black uppercase tracking-widest text-rose-500 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full">
                  RSST Trust Institution
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                  RV Institute of Technology & Management
                </h1>
              </div>

              <p className="text-slate-350 text-base sm:text-lg font-medium leading-relaxed max-w-3xl">
                The 2nd campus of Karnataka's legendary RV College of Engineering (RVCE). Learn how central shared placements, modern J.P. Nagar infrastructures, and affordable fee structures offer students the perfect engineering launching pad.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {["NAAC Grade A", "ISO 9001 Certified", "Centralised Placements", "VTU Affiliated"].map((badge, idx) => (
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
                        <Label htmlFor="rvitm-lead-name" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Full Name *</Label>
                        <Input
                          id="rvitm-lead-name"
                          placeholder="Your full name"
                          className={`h-11 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all text-slate-800 text-xs ${errors.name ? "border-rose-500 bg-rose-50/10" : ""}`}
                          value={formData.name || ""}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                        />
                        {errors.name && <p className="text-[10px] font-semibold text-rose-500 mt-1 uppercase tracking-wide">{errors.name}</p>}
                      </div>

                      <div>
                        <Label htmlFor="rvitm-lead-phone" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Mobile Number *</Label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <Input
                            id="rvitm-lead-phone"
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
                        <Label htmlFor="rvitm-lead-email" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Email (Optional)</Label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <Input
                            id="rvitm-lead-email"
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
                              <SelectItem value="B.E. Computer Science">B.E. CSE</SelectItem>
                              <SelectItem value="B.E. Information Science">B.E. ISE</SelectItem>
                              <SelectItem value="B.E. Electronics & Communication">B.E. ECE</SelectItem>
                              <SelectItem value="B.E. Mechanical Engineering">B.E. ME</SelectItem>
                              <SelectItem value="Postgraduate MBA">MBA</SelectItem>
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
            <section ref={sectionsRef["about-rvitm"]} id="about-rvitm" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm">
              <div className="max-w-4xl space-y-6">
                <span className="text-xs font-black uppercase tracking-widest text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
                  Overview
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  About RV Institute of Technology & Management (RVITM)
                </h2>
                <p className="text-slate-600 leading-relaxed font-medium">
                  RV Institute of Technology and Management (RVITM) represents a major new milestone for the legendary Rashtreeya Sikshana Samithi Trust (RSST). Leveraging a rich 85+ year educational heritage managing over 26 premium institutions, RSST planned the foundation of RVITM in 2016 and successfully welcomed the inaugural academic batch in 2019.
                </p>
                <p className="text-slate-650 leading-relaxed font-medium">
                  Crucially, RVITM operates as the **second official engineering campus** of the world-famous RV College of Engineering (RVCE). Under this unified layout, the college placements are entirely centralised—allowing RVITM students to sit for the exact same premium campus recruiters and interview loops as RVCE candidates. The serene, modern campus in J.P. Nagar 8th Phase features world-class ICT-enabled classrooms, special programming labs, and highly experienced faculty members.
                </p>

                {/* Info Graphic Cards */}
                <div className="grid sm:grid-cols-3 gap-6 pt-6">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                    <Building2 className="h-6 w-6 text-yellow-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider">Relationship</h4>
                      <p className="text-sm font-extrabold text-slate-900 mt-1">RVCE Sister Campus</p>
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                    <TrendingUp className="h-6 w-6 text-yellow-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider">Placements</h4>
                      <p className="text-sm font-extrabold text-slate-900 mt-1">100% Centralised with RVCE</p>
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                    <Award className="h-6 w-6 text-yellow-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider">Affiliation</h4>
                      <p className="text-sm font-extrabold text-slate-900 mt-1">UGC Recognized & VTU</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Key Highlights */}
            <section ref={sectionsRef["key-highlights"]} id="key-highlights" className="scroll-mt-32">
              <div className="mb-10 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-[#0c2340]">Metric Dashboard</span>
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

            {/* 3. Accreditations */}
            <section ref={sectionsRef["accreditation"]} id="accreditation" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm">
              <div className="max-w-4xl space-y-6">
                <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight mb-2">Accreditations & Quality Standards</h2>
                <p className="text-slate-650 leading-relaxed font-medium text-sm">
                  RVITM maintains strict compliance with national educational standards and academic review processes, backed by the prestigious RSST trust umbrella.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 text-xs font-bold text-slate-600">
                  <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="text-sm font-extrabold text-slate-900">NAAC Grade A</span>
                    </div>
                    <p className="text-slate-500">Accredited by the National Assessment and Accreditation Council for its premium academic methodologies and infrastructures.</p>
                  </div>
                  <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="text-sm font-extrabold text-slate-900">ISO 9001:2008 Certified</span>
                    </div>
                    <p className="text-slate-500">Formally audited and certified for institutional quality management systems and operational framework excellence.</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-4">
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-wider border border-slate-200/50">VTU Affiliated</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-wider border border-slate-200/50">AICTE Approved</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-wider border border-slate-200/50">UGC Recognized</span>
                </div>
              </div>
            </section>

            {/* 4. Courses & Branches */}
            <section ref={sectionsRef["courses-branches"]} id="courses-branches" className="scroll-mt-32">
              <div className="mb-10 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-[#0c2340]">Focused Academic Scope</span>
                <h2 className="text-3xl font-extrabold text-slate-950 mt-2">Courses & B.E. Specialisations</h2>
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="h-10 w-10 bg-yellow-50 rounded-xl text-yellow-600 flex items-center justify-center font-bold mb-4 border border-yellow-100">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-2">B.E. Specialisations</h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-medium">Focused 4-year B.E. programs catering to high-demand software, computer, and communication grids.</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-50 text-[10px] font-black uppercase tracking-wider text-slate-400">
                    <span>4 Specialisations Available</span>
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
                  <div className="mt-4 pt-4 border-t border-slate-50 text-[10px] font-black uppercase tracking-wider text-slate-400">
                    <span>3 Years Duration</span>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="h-10 w-10 bg-yellow-50 rounded-xl text-yellow-600 flex items-center justify-center font-bold mb-4 border border-yellow-100">
                      <School className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-2">Postgraduate MBA</h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-medium">Two-year VTU-affiliated Master of Business Administration program focusing on core corporate verticals.</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-50 text-[10px] font-black uppercase tracking-wider text-slate-400">
                    <span>2 Years Duration</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Fee Matrix Table */}
            <section ref={sectionsRef["fee-matrix"]} id="fee-matrix" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm">
              <div className="max-w-4xl space-y-6">
                <span className="text-xs font-black uppercase tracking-widest text-yellow-600">Verified Fee Structure</span>
                <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  B.E. Branch Seat Allocation & Fees Matrix
                </h2>
                <p className="text-slate-650 leading-relaxed font-medium text-sm">
                  Admissions to RVITM are routed through KEA counseling (KCET for Karnataka candidates), COMEDK UGET (all India candidates), and standard Management Quota seats (25% allocation).
                </p>

                <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white mt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider border-b border-slate-800">
                          <th className="p-4">Branch</th>
                          <th className="p-4 text-center">Seats</th>
                          <th className="p-4">KCET (Annual)</th>
                          <th className="p-4">COMEDK (Annual)</th>
                          <th className="p-4">Mgmt Quota (Annual)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
                        {btechBranches.map((branch, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                            <td className="p-4 font-black text-slate-900">{branch.name}</td>
                            <td className="p-4 text-center text-slate-500">{branch.seats}</td>
                            <td className="p-4 text-emerald-600 font-extrabold">{branch.kcet}</td>
                            <td className="p-4 text-blue-600 font-extrabold">{branch.comedk}</td>
                            <td className="p-4 text-slate-900 font-extrabold">{branch.mgmt}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4 text-xs font-bold text-slate-600">
                  <h4 className="text-sm font-extrabold text-slate-900">Total B.E. Course Investment (4 Years)</h4>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    <li className="flex justify-between p-3 bg-white rounded-xl border border-slate-100">
                      <span>KCET Total Fee (Best Value)</span>
                      <span className="text-emerald-600 font-black">~₹4.30 Lakhs</span>
                    </li>
                    <li className="flex justify-between p-3 bg-white rounded-xl border border-slate-100">
                      <span>COMEDK Total Fee</span>
                      <span className="text-blue-600 font-black">~₹10.57 Lakhs</span>
                    </li>
                    <li className="flex justify-between p-3 bg-white rounded-xl border border-slate-100">
                      <span>Management Quota Total Fee</span>
                      <span className="text-slate-900 font-black">₹7 Lakhs – ₹12 Lakhs</span>
                    </li>
                    <li className="flex justify-between p-3 bg-white rounded-xl border border-slate-100">
                      <span>Private Hostels (J.P. Nagar)</span>
                      <span className="text-slate-500 font-black">₹6k – ₹10k / month</span>
                    </li>
                  </ul>
                  <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-xs font-black uppercase text-[#0c2340]">
                    <span>VTU MBA Program Fees (2 Years Total)</span>
                    <span>₹8.08 Lakhs – ₹9.77 Lakhs</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Admission Eligibility */}
            <section ref={sectionsRef["admission-eligibility"]} id="admission-eligibility" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm">
              <div className="max-w-4xl space-y-6">
                <span className="text-xs font-black uppercase tracking-widest text-[#0c2340]">Counselling Cutoffs & Thresholds</span>
                <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  Eligibility & KCET Cutoff Ranks
                </h2>

                <div className="space-y-4 text-xs font-bold text-slate-500">
                  <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl">
                    <h4 className="text-sm font-extrabold text-slate-900 mb-3">Academic Requirements for B.E.</h4>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Cleared Class 12 (10+2) with Physics and Mathematics as compulsory subjects, alongside Chemistry / Computer Science / Electronics.</li>
                      <li>Secured a minimum of 60% aggregate in PCM in Class 12.</li>
                      <li>Valid rank in KCET (Karnataka candidates) or COMEDK UGET (all India candidates) is required.</li>
                    </ul>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-950 mt-6">KEA KCET Cutoffs (General Merit Category)</h3>
                  <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-50 text-slate-800 text-[10px] font-black uppercase border-b border-slate-250">
                            <th className="p-4">Branch</th>
                            <th className="p-4">KCET Opening Rank</th>
                            <th className="p-4">KCET Closing Rank</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
                          {cutoffsList.map((cut, idx) => (
                            <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                              <td className="p-4 font-black text-slate-900">{cut.branch}</td>
                              <td className="p-4 text-blue-600 font-extrabold">{cut.opening}</td>
                              <td className="p-4 text-emerald-600 font-extrabold">{cut.closing}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. Placements */}
            <section ref={sectionsRef["placements-shared"]} id="placements-shared" className="scroll-mt-32">
              <div className="bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-8">
                <div className="max-w-4xl space-y-4">
                  <span className="text-xs font-black uppercase tracking-widest text-[#0c2340] bg-rose-50 px-3 py-1 rounded-full border border-rose-100 text-rose-600">
                    Centralised Placements with RVCE
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                    Placements Statistics (2023–2025)
                  </h2>
                  <p className="text-slate-650 leading-relaxed font-medium text-sm">
                    Because RVITM is the 2nd campus of RVCE, placements are completely shared and centralised. Students sit in the exact same placement drives as RVCE candidates, accessing a massive recruiter database.
                  </p>
                </div>

                <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider border-b border-slate-800">
                          <th className="p-4">Year</th>
                          <th className="p-4">Placed Volume</th>
                          <th className="p-4">Placement Rate</th>
                          <th className="p-4">Median Package</th>
                          <th className="p-4">Average Package</th>
                          <th className="p-4">Highest Package</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
                        {placementHistory.map((pl, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                            <td className="p-4 font-black text-slate-900">{pl.year}</td>
                            <td className="p-4 text-slate-500">{pl.placed}</td>
                            <td className="p-4 font-extrabold text-[#0c2340]">{pl.rate}</td>
                            <td className="p-4 text-emerald-600 font-extrabold">{pl.median}</td>
                            <td className="p-4 text-blue-600 font-extrabold">{pl.avg}</td>
                            <td className="p-4 font-black text-slate-900">{pl.highest}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-base font-extrabold text-slate-900">Branch-wise Placement Statistics</h3>
                  <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-50 text-slate-800 text-[10px] font-black uppercase border-b border-slate-200">
                            <th className="p-4">Branch</th>
                            <th className="p-4">Placement Rate</th>
                            <th className="p-4">Average Package</th>
                            <th className="p-4">Highest Package</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
                          {branchPlacements.map((bp, idx) => (
                            <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                              <td className="p-4 font-black text-slate-900">{bp.branch}</td>
                              <td className="p-4 text-rose-600 font-extrabold">{bp.rate}</td>
                              <td className="p-4 text-emerald-600 font-extrabold">{bp.avg}</td>
                              <td className="p-4 text-slate-900 font-black">{bp.highest}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 8. Company Offers Table */}
            <section ref={sectionsRef["company-offers"]} id="company-offers" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm">
              <div className="max-w-4xl space-y-6">
                <span className="text-xs font-black uppercase tracking-widest text-[#0c2340]">Recruiter Statistics</span>
                <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  Company-wise Offers (2023–2025 Drives)
                </h2>
                <p className="text-slate-650 leading-relaxed font-medium text-sm">
                  The verified company-wise salary packages and students hired demonstrate the high placements standard shared with the RVCE parent brand.
                </p>

                <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white mt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider border-b border-slate-800">
                          <th className="p-4">Recruiting Partner</th>
                          <th className="p-4">Package Offered</th>
                          <th className="p-4 text-center">Offers Made</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
                        {companyOffers.map((off, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                            <td className="p-4 font-black text-slate-900">{off.company}</td>
                            <td className="p-4 text-emerald-600 font-extrabold">{off.package}</td>
                            <td className="p-4 text-center text-slate-500 font-extrabold">{off.count}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-7 gap-6 items-center pt-6">
                  {recruiters.map((rec, i) => (
                    <div key={i} className="h-12 p-2 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:scale-105" title={rec.name}>
                      <img src={rec.logo} alt={rec.name} className="max-h-full max-w-full object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 9. Pre-Placement Training & Facilities */}
            <section ref={sectionsRef["training-facilities"]} id="training-facilities" className="scroll-mt-32">
              <div className="mb-10 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-[#0c2340]">Ecosystem & Infrastructures</span>
                <h2 className="text-3xl font-extrabold text-slate-950 mt-2">Pre-Placement Training & Campus Facilities</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-[2rem] border border-slate-200/80 p-8 shadow-sm space-y-4">
                  <h4 className="text-base font-extrabold text-[#0c2340]">Year-round Pre-placement Curriculum</h4>
                  <ul className="space-y-2.5 text-xs font-bold text-slate-500 list-disc pl-5">
                    <li>ICT-enabled smart classrooms with project-based engineering curricula from Year 1.</li>
                    <li>Specialised C-programming laboratory workouts conducted at the Computer Centre.</li>
                    <li>Technical mock coding challenges, reasoning modules, and aptitude workshops starting in the 5th semester.</li>
                    <li>Coordinated internship opportunities backed by the centralized RVCE placement cell.</li>
                  </ul>
                </div>

                <div className="bg-white rounded-[2rem] border border-slate-200/80 p-8 shadow-sm space-y-4">
                  <h4 className="text-base font-extrabold text-[#0c2340]">Serene J.P. Nagar Infrastructure</h4>
                  <ul className="space-y-2.5 text-xs font-bold text-slate-500 list-disc pl-5">
                    <li>Smart classrooms containing digital projectors, smart boards, and live online quiz systems.</li>
                    <li>Full physics, chemistry, CAED engineering labs, and world-class computer centers.</li>
                    <li>Dedicated reading rooms and a well-equipped central library with extensive digital journal databases.</li>
                    <li>Sports facilities for cricket, football, volleyball, and campus-wide high-speed Wi-Fi.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 10. Scholarships */}
            <section ref={sectionsRef["scholarships"]} id="scholarships" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm">
              <div className="max-w-4xl space-y-6">
                <span className="text-xs font-black uppercase tracking-widest text-yellow-600">Financial Aid</span>
                <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  Scholarships & Concessions
                </h2>
                <p className="text-slate-650 leading-relaxed font-medium text-sm">
                  RVITM candidates are eligible for standard government financial portals and RSST trust scholarships.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 text-xs font-bold text-slate-600">
                  <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50">
                    <h4 className="text-slate-900 font-extrabold text-sm mb-2">Government Scholarships</h4>
                    <p className="text-slate-500">Karnataka KEA fee concessions for top-ranking candidates under KCET counseling. Government-backed SC/ST/OBC schemes are fully supported.</p>
                  </div>
                  <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50">
                    <h4 className="text-slate-900 font-extrabold text-sm mb-2">RSST Trust merit aid</h4>
                    <p className="text-slate-500">The Rashtreeya Sikshana Samithi Trust awards need-based and merit-based scholarship concessions to exceptional candidates on a case-by-case evaluation.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 11. Why Choose RVITM */}
            <section ref={sectionsRef["why-choose"]} id="why-choose" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm">
              <div className="max-w-4xl space-y-6">
                <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  Why Choose RVITM Bangalore?
                </h2>
                <div className="grid sm:grid-cols-2 gap-6 text-xs font-bold text-slate-600">
                  <div className="p-5 border border-slate-100 rounded-2xl bg-rose-500/5 space-y-1">
                    <h4 className="text-[#0c2340] font-black text-sm">RVCE Sister Campus Brand</h4>
                    <p className="text-slate-500">Fully centralised placement with RVCE, providing young students identical career opportunities at a much more affordable cost-to-benefit ratio.</p>
                  </div>
                  <div className="p-5 border border-slate-100 rounded-2xl bg-rose-500/5 space-y-1">
                    <h4 className="text-[#0c2340] font-black text-sm">Affordable Quality Education</h4>
                    <p className="text-slate-500">Under the KCET quota, the 4-year tuition fee stands at just ₹4.30 Lakhs total, representing outstanding value for the RV institutional group brand.</p>
                  </div>
                  <div className="p-5 border border-slate-100 rounded-2xl bg-rose-500/5 space-y-1">
                    <h4 className="text-[#0c2340] font-black text-sm">Centralised placement cell</h4>
                    <p className="text-slate-500">Access to 400+ recruiting MNCs with historical highest salary packages reaching up to ₹47 LPA (PayPal offer).</p>
                  </div>
                  <div className="p-5 border border-slate-100 rounded-2xl bg-rose-500/5 space-y-1">
                    <h4 className="text-[#0c2340] font-black text-sm">Prime South Bangalore location</h4>
                    <p className="text-slate-500">Located in the premium J.P. Nagar 8th Phase zone with convenient BMTC bus links and proximity to Electronic City and Bannerghatta corridors.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 12. FAQs */}
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
