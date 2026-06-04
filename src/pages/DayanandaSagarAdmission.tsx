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
  Globe,
  Dribbble
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
import githubLogo from "@/assets/partner-logos/Kotak Mahindra p14.png"; // Fallback to Kotak Mahindra for aesthetic grid if needed
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

export default function DayanandaSagarAdmission() {
  useSeo({
    title: "Dayananda Sagar College of Engineering (DSCE) Bangalore B.Tech Guide",
    description: "Discover Dayananda Sagar College of Engineering (DSCE) Bangalore. Explore B.Tech fee structure, KCET/COMEDK cutoffs, high placements, and premium campus facilities."
  });

  // Dynamic College, FAQ, and Breadcrumb Schema Markup
  useJsonLd({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/dayananda-sagar-college-of-engineering-bangalore/#college",
        "name": "Dayananda Sagar College of Engineering (DSCE), Bangalore",
        "alternateName": "DSCE Bangalore",
        "url": "https://www.dsce.edu.in",
        "description": "Dayananda Sagar College of Engineering (DSCE) is a premier private autonomous engineering institution established in 1979 in Bengaluru, Karnataka, affiliated with Visvesvaraya Technological University (VTU).",
        "logo": "https://www.dsce.edu.in/images/logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shavige Malleshwara Hills, Kumaraswamy Layout",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560078",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ssadmission.in/dayananda-sagar-college-of-engineering-bangalore/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is Dayananda Sagar College of Engineering autonomous?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Dayananda Sagar College of Engineering (DSCE) is a private autonomous engineering college affiliated to Visvesvaraya Technological University (VTU) and approved by UGC."
            }
          },
          {
            "@type": "Question",
            "name": "What is the highest package at DSCE Bangalore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The highest salary package offered at DSCE Bangalore is ₹56 LPA for the 2025 placement drive, with the 2024 highest package standing at ₹51 LPA."
            }
          },
          {
            "@type": "Question",
            "name": "What are the B.E. admission paths for DSCE?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Students can secure B.E. admission at DSCE through KCET (for Karnataka candidates), COMEDK UGET (for all India candidates), or the Management Quota system."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ssadmission.in/dayananda-sagar-college-of-engineering-bangalore/#breadcrumb",
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
            "name": "Dayananda Sagar College of Engineering Bangalore",
            "item": "https://ssadmission.in/dayananda-sagar-college-of-engineering-bangalore"
          }
        ]
      }
    ]
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("about-dsce");
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
    "about-dsce": useRef<HTMLElement>(null),
    "key-highlights": useRef<HTMLElement>(null),
    "rankings-accreditation": useRef<HTMLElement>(null),
    "courses-offered": useRef<HTMLElement>(null),
    "btech-branches": useRef<HTMLElement>(null),
    "admission-eligibility": useRef<HTMLElement>(null),
    "placements": useRef<HTMLElement>(null),
    "facilities": useRef<HTMLElement>(null),
    "scholarships": useRef<HTMLElement>(null),
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
      const nameInput = document.getElementById("dsce-lead-name");
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
    googleFormData.append("entry.85122333", `DSCE Bangalore Showcase - Preferred Course: ${parsed.data.course}`);

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
    { id: "about-dsce", label: "Overview" },
    { id: "key-highlights", label: "Highlights" },
    { id: "rankings-accreditation", label: "Rankings" },
    { id: "courses-offered", label: "Courses" },
    { id: "btech-branches", label: "Branches & Fees" },
    { id: "admission-eligibility", label: "Eligibility" },
    { id: "placements", label: "Placements" },
    { id: "facilities", label: "Facilities" },
    { id: "scholarships", label: "Scholarships" },
    { id: "faqs", label: "FAQs" },
  ] as const;

  const highlights = [
    { label: "Established Year", value: "1979", sub: "46+ Years Excellence" },
    { label: "Institution Type", value: "Private", sub: "UGC Autonomous VTU" },
    { label: "NAAC Grade", value: "A", sub: "CGPA 3.20 (Till 2027)" },
    { label: "Campus Size", value: "30.8 Acres", sub: "Green, Lush Urban Campus" },
    { label: "Expert Faculty", value: "468", sub: "116 Hold PhD Degrees" },
    { label: "Placements Ratio", value: "90%", sub: "For the 2025 Batch" },
    { label: "Startups Incubated", value: "50+", sub: "Via DSCE Innovation Hub" },
    { label: "Highest Package", value: "₹56 LPA", sub: "Outstanding Placement Max" },
  ];

  const coursesUG = [
    { title: "B.E. Specialisations", desc: "4-year professional B.E. programs with 14+ specific technical specialisations.", duration: "4 Years", icon: GraduationCap },
    { title: "B.E. Lateral Entry", desc: "Direct third-semester admission for engineering diploma holders.", duration: "3 Years", icon: ArrowRight },
  ];

  const coursesPG = [
    { title: "M.Tech Engineering", desc: "Specialised postgraduate research and project programs in 1 stream sectors.", duration: "2 Years", icon: School },
    { title: "MBA Business", desc: "A premium business postgraduate program focusing on 8 strategic streams.", duration: "2 Years", icon: Trophy },
    { title: "MCA Computer Application", desc: "Postgraduate computer systems design program.", duration: "2 Years", icon: Library },
  ];

  const btechBranches = [
    { name: "Computer Science & Engineering (CSE)", seats: 180, kcet: "₹1,27,000", comedk: "₹3,13,000", mgmt: "₹5,50,000", totalKcet: "₹6 Lakhs", totalMgmt: "₹22 Lakhs" },
    { name: "CSE with AI & ML", seats: 60, kcet: "₹1,27,000", comedk: "₹3,13,000", mgmt: "₹5,50,000", totalKcet: "₹6 Lakhs", totalMgmt: "₹22 Lakhs" },
    { name: "CSE with Data Science", seats: 60, kcet: "₹1,27,000", comedk: "₹3,13,000", mgmt: "₹5,50,000", totalKcet: "₹6 Lakhs", totalMgmt: "₹22 Lakhs" },
    { name: "Information Science & Engineering (ISE)", seats: 180, kcet: "₹1,27,000", comedk: "₹3,13,000", mgmt: "₹5,00,000", totalKcet: "₹6 Lakhs", totalMgmt: "₹20 Lakhs" },
    { name: "Electronics & Communication Engg (ECE)", seats: 120, kcet: "₹1,27,000", comedk: "₹3,13,000", mgmt: "₹4,25,000", totalKcet: "₹6 Lakhs", totalMgmt: "₹17 Lakhs" },
    { name: "Electrical & Electronics Engineering (EEE)", seats: 60, kcet: "₹1,27,000", comedk: "₹3,13,000", mgmt: "₹3,50,000", totalKcet: "₹6 Lakhs", totalMgmt: "₹14 Lakhs" },
    { name: "Mechanical Engineering (ME)", seats: 120, kcet: "₹1,27,000", comedk: "₹3,13,000", mgmt: "₹3,00,000", totalKcet: "₹6 Lakhs", totalMgmt: "₹12 Lakhs" },
    { name: "Civil Engineering (CE)", seats: 60, kcet: "₹1,27,000", comedk: "₹3,13,000", mgmt: "₹2,75,000", totalKcet: "₹6 Lakhs", totalMgmt: "₹11 Lakhs" },
    { name: "Aeronautical Engineering", seats: 60, kcet: "₹1,27,000", comedk: "₹3,13,000", mgmt: "₹3,50,000", totalKcet: "₹6 Lakhs", totalMgmt: "₹14 Lakhs" },
    { name: "Aerospace Engineering", seats: 60, kcet: "₹1,27,000", comedk: "₹3,13,000", mgmt: "₹3,50,000", totalKcet: "₹6 Lakhs", totalMgmt: "₹14 Lakhs" },
    { name: "Chemical Engineering", seats: 60, kcet: "₹1,27,000", comedk: "₹3,13,000", mgmt: "₹2,75,000", totalKcet: "₹6 Lakhs", totalMgmt: "₹11 Lakhs" },
    { name: "Biotechnology", seats: 60, kcet: "₹1,27,000", comedk: "₹3,13,000", mgmt: "₹2,75,000", totalKcet: "₹6 Lakhs", totalMgmt: "₹11 Lakhs" }
  ];

  const placementStats = [
    { year: "2022", placed: "1,333 placed", rate: "~85%", highest: "₹30 LPA", median: "₹4.5 LPA" },
    { year: "2023", placed: "1,104 placed", rate: "~80%", highest: "₹40 LPA", median: "₹5.0 LPA" },
    { year: "2024", placed: "1,155 placed", rate: "~74%", highest: "₹51 LPA", median: "₹5.0 LPA" },
    { year: "2025", placed: "1,181 placed", rate: "90%", highest: "₹56 LPA", median: "₹5.50 LPA" },
    { year: "2026 (Ongoing)", placed: "1,096 placed", rate: "Ongoing", highest: "—", median: "—" }
  ];

  const branchPlacements = [
    { branch: "Computer Science & Engineering (CSE)", placed: "183 students", avgPackage: "₹7–10 LPA", highest: "₹56 LPA", remarks: "Highest volume placement; key software companies recruit from here." },
    { branch: "Information Science & Engineering (ISE)", placed: "—", avgPackage: "₹10 LPA", highest: "₹45 LPA", remarks: "Top-tier profiles with strong median packages." },
    { branch: "CSE (AI & ML)", placed: "—", avgPackage: "₹8–10 LPA", highest: "₹40+ LPA", remarks: "Rapidly expanding placements with cloud and web infrastructure focuses." },
    { branch: "Electronics & Comm (ECE)", placed: "—", avgPackage: "₹6–8 LPA", highest: "₹25 LPA", remarks: "Good combination of core systems design and software recruiting." },
    { branch: "Mechanical Engineering (ME)", placed: "—", avgPackage: "₹4–5 LPA", highest: "₹15 LPA", remarks: "Automotive recruiters focus on these departments." },
    { branch: "Civil / Aeronautical", placed: "—", avgPackage: "₹3–4.5 LPA", highest: "₹10 LPA", remarks: "Often transitions into analytical and IT systems management roles." }
  ];

  const recruiters = [
    { name: "Amazon", logo: amazonLogo },
    { name: "TCS", logo: tcsLogo },
    { name: "Infosys", logo: infosysLogo },
    { name: "Wipro", logo: wiproLogo },
    { name: "Cognizant", logo: cognizantLogo },
    { name: "Capgemini", logo: capgeminiLogo },
    { name: "PwC", logo: eyLogo },
    { name: "IBM", logo: ibmLogo },
    { name: "Oracle", logo: oracleLogo },
    { name: "Axis Bank", logo: axisBankLogo },
    { name: "Tech Mahindra", logo: techMahindraLogo },
    { name: "Reliance", logo: relianceLogo },
    { name: "Kotak Mahindra", logo: githubLogo },
    { name: "Dabur", logo: daburLogo }
  ];

  const facilities = [
    { title: "Green Lush Campus", desc: "Beautiful 30.8 acres campus in Kumaraswamy Layout equipped with high-speed internet networks.", icon: Globe },
    { title: "Central Digital Library", desc: "Stocked with e-books, physical libraries, research journals, and online databases.", icon: BookOpen },
    { title: "Research Centres", desc: "18 dedicated research facilities approved by national organizations (DST, DRDO, ISRO).", icon: Briefcase },
    { title: "Premium Gym & Sports", desc: "Outfitted sports complex with complete athletic layouts, playing fields, and modern yoga/meditation zones.", icon: Dribbble },
    { title: "Hostels", desc: "Two residential halls for boys and one girls' hostel with full security and dining amenities.", icon: Building },
    { title: "Innovation Hub", desc: "DSCE Innovation Hub and IEDC nurturing over 50+ campus-born startups.", icon: Sparkles }
  ];

  const faqItems = [
    {
      q: "Where is Dayananda Sagar College of Engineering located?",
      a: "DSCE is located at Shavige Malleshwara Hills, Kumaraswamy Layout, Bengaluru – 560078, Karnataka. It has a beautiful 30.8-acre green campus located in south Bengaluru."
    },
    {
      q: "What is the fee structure for B.E. at DSCE Bangalore?",
      a: "The annual B.E. tuition fee is approximately ₹1,27,000 for KCET quota students, and ₹3,13,000 for COMEDK UGET quota students. For Management Quota, the annual tuition fees range from ₹2,75,000 to ₹5,50,000 depending on the specific engineering branch."
    },
    {
      q: "What are the eligibility requirements for admission?",
      a: "Candidates must have cleared 10+2/Class 12 with Physics, Mathematics, and Chemistry/Computer Science/Electronics, securing a minimum of 45% aggregate in these subjects (40% for SC/ST/OBC category candidates). A valid rank card from KCET, COMEDK, or JEE Main is mandatory."
    },
    {
      q: "What was the highest package offered during DSCE placements?",
      a: "The highest package reached ₹56 LPA during the 2025 placement drive, with the 2024 highest package standing at ₹51 LPA. Over 350 companies visit the campus annually."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      {/* Top Banner */}
      <div className="bg-[#0c2340] py-3 text-center border-b border-yellow-500/20 relative z-30 pt-20 lg:pt-3">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <span className="h-2 w-2 rounded-full bg-yellow-500 animate-ping shrink-0" />
          <p className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.15em] leading-tight">
            Autonomous engineering college affiliated to VTU • NAAC Grade A Accredited
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-[#090F1E] text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c2340]/90 to-[#071324] z-0" />
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <nav className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#c5a880] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>/</span>
                <a href="/engineering" className="hover:text-white transition-colors">Colleges</a>
                <span>/</span>
                <span className="text-yellow-500">DSCE Bangalore</span>
              </nav>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                Dayananda Sagar College of Engineering
              </h1>

              <p className="text-slate-350 text-base sm:text-lg font-medium leading-relaxed max-w-3xl">
                "Dare to Excel — Education for Life". Explore verified details on admission cutoffs, fee structures for government & management quotas, placement stats, and campus infrastructures of Bengaluru's premier autonomous college.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {["NAAC Grade A", "NBA Accredited", "AICTE & UGC Approved", "VTU Affiliated"].map((badge, idx) => (
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
                        <Label htmlFor="dsce-lead-name" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Full Name *</Label>
                        <Input
                          id="dsce-lead-name"
                          placeholder="Your full name"
                          className={`h-11 rounded-xl bg-slate-50 border-slate-150 font-medium focus:bg-white focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all text-slate-800 text-xs ${errors.name ? "border-rose-500 bg-rose-50/10" : ""}`}
                          value={formData.name || ""}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                        />
                        {errors.name && <p className="text-[10px] font-semibold text-rose-500 mt-1 uppercase tracking-wide">{errors.name}</p>}
                      </div>

                      <div>
                        <Label htmlFor="dsce-lead-phone" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Mobile Number *</Label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <Input
                            id="dsce-lead-phone"
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
                        <Label htmlFor="dsce-lead-email" className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1 block">Email (Optional)</Label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <Input
                            id="dsce-lead-email"
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
                              <SelectItem value="B.E. CSE AI & ML">B.E. AI & ML</SelectItem>
                              <SelectItem value="B.E. Information Science">B.E. ISE</SelectItem>
                              <SelectItem value="B.E. Electronics & Communication">B.E. ECE</SelectItem>
                              <SelectItem value="B.E. Other Engineering">Other B.E.</SelectItem>
                              <SelectItem value="M.Tech / MBA / MCA">PG Courses</SelectItem>
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
            <section ref={sectionsRef["about-dsce"]} id="about-dsce" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm">
              <div className="max-w-4xl space-y-6">
                <span className="text-xs font-black uppercase tracking-widest text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
                  Overview
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  About Dayananda Sagar College of Engineering (DSCE)
                </h2>
                <p className="text-slate-600 leading-relaxed font-medium">
                  Dayananda Sagar College of Engineering (DSCE) is a premier private autonomous engineering college located in Bengaluru, Karnataka. Established in 1979 by philanthropist Late Sri R. Dayananda Sagar, the college has fostered a tradition of academic excellence and technical research over the last 46 years.
                </p>
                <p className="text-slate-650 leading-relaxed font-medium">
                  DSCE is managed under the महात्मा गांधी विद्या पीठ (MGVP) Trust. It is fully affiliated with Visvesvaraya Technological University (VTU), approved by the AICTE, and UGC-recognized. Spanning a lush 30.8-acre green urban campus in Kumaraswamy Layout, DSCE features 18 dedicated research centres supporting PhD scholars, MoUs with universities in the USA, Germany, UK, and Japan, and an active Innovation Hub backing over 50+ startup companies.
                </p>

                {/* Info Graphic Cards */}
                <div className="grid sm:grid-cols-3 gap-6 pt-6">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                    <Library className="h-6 w-6 text-yellow-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider">Infrastructure</h4>
                      <p className="text-sm font-extrabold text-slate-900 mt-1">30.8 Acre Green Campus</p>
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                    <Compass className="h-6 w-6 text-yellow-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider">Academics</h4>
                      <p className="text-sm font-extrabold text-slate-900 mt-1">UGC Autonomous</p>
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                    <Trophy className="h-6 w-6 text-yellow-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider">Accreditation</h4>
                      <p className="text-sm font-extrabold text-slate-900 mt-1">NAAC Grade A (3.20)</p>
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
                  DSCE ranks consistently among the top tier of private engineering institutions in Karnataka and India, as reflected in various national review panels.
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
                        {[
                          { agency: "NIRF 2025", category: "Engineering Stream", rank: "#201–300 National Band" },
                          { agency: "NIRF 2024", category: "Engineering Stream", rank: "#201–300 National Band" },
                          { agency: "NIRF 2022", category: "Engineering Stream", rank: "#201–300 National Band" },
                          { agency: "India Today 2022", category: "B.Tech Ranking", rank: "#78 in India" },
                          { agency: "Times 2022", category: "Engineering Placement", rank: "#96 in India" },
                          { agency: "IIRF 2024", category: "B.Tech Program", rank: "#14 in Bengaluru" },
                          { agency: "Collegedunia 2025", category: "B.Tech Program", rank: "#202 India / #9 Bengaluru" }
                        ].map((rk, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                            <td className="p-5 font-black text-slate-900">{rk.agency}</td>
                            <td className="p-5">{rk.category}</td>
                            <td className="p-5 text-yellow-600 font-extrabold">{rk.rank}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-4">
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-wider border border-slate-200/50">NAAC A (CGPA 3.20)</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-wider border border-slate-200/50">NBA Accredited Programs</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-wider border border-slate-200/50">UGC & AICTE Approved</span>
                </div>
              </div>
            </section>

            {/* 4. Courses Offered */}
            <section ref={sectionsRef["courses-offered"]} id="courses-offered" className="scroll-mt-32">
              <div className="mb-10 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-[#0c2340]">33+ Active Programs</span>
                <h2 className="text-3xl font-extrabold text-slate-950 mt-2">Courses Offered</h2>
              </div>

              <div className="bg-slate-100 p-2 rounded-2xl max-w-sm mb-8 flex border border-slate-200">
                <button
                  onClick={() => setActiveCourseCategory("ug")}
                  className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                    activeCourseCategory === "ug" ? "bg-slate-900 text-white" : "text-slate-500"
                  }`}
                >
                  Undergraduate (B.E.)
                </button>
                <button
                  onClick={() => setActiveCourseCategory("pg")}
                  className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                    activeCourseCategory === "pg" ? "bg-slate-900 text-white" : "text-slate-500"
                  }`}
                >
                  Postgraduate (M.Tech/MBA/MCA)
                </button>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                {activeCourseCategory === "ug" ? (
                  coursesUG.map((c, idx) => {
                    const Icon = c.icon;
                    return (
                      <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                        <div>
                          <div className="h-10 w-10 bg-yellow-50 rounded-xl text-yellow-600 flex items-center justify-center font-bold mb-4 border border-yellow-100">
                            <Icon className="h-5 w-5" />
                          </div>
                          <h3 className="text-base font-extrabold text-slate-900 mb-2">{c.title}</h3>
                          <p className="text-slate-500 text-xs leading-relaxed font-medium">{c.desc}</p>
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center text-[10px] font-black uppercase tracking-wider text-slate-400">
                          <span>Duration</span>
                          <span className="text-slate-900">{c.duration}</span>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  coursesPG.map((c, idx) => {
                    const Icon = c.icon;
                    return (
                      <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                        <div>
                          <div className="h-10 w-10 bg-yellow-50 rounded-xl text-yellow-600 flex items-center justify-center font-bold mb-4 border border-yellow-100">
                            <Icon className="h-5 w-5" />
                          </div>
                          <h3 className="text-base font-extrabold text-slate-900 mb-2">{c.title}</h3>
                          <p className="text-slate-500 text-xs leading-relaxed font-medium">{c.desc}</p>
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center text-[10px] font-black uppercase tracking-wider text-slate-400">
                          <span>Duration</span>
                          <span className="text-slate-900">{c.duration}</span>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </section>

            {/* 5. Branches Matrix & Fee Table */}
            <section ref={sectionsRef["btech-branches"]} id="btech-branches" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm">
              <div className="max-w-4xl space-y-6">
                <span className="text-xs font-black uppercase tracking-widest text-yellow-600">Complete seat matrix & annual fee ledger</span>
                <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  B.E. Branches Seat Distribution & Annual Fees
                </h2>
                <p className="text-slate-650 leading-relaxed font-medium text-sm">
                  Dayananda Sagar College of Engineering offers a broad selection of engineering specialisations. Admissions are routed through KCET counseling (75% seats combined with COMEDK) and private merit Management quotas (25%).
                </p>

                <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white mt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider border-b border-slate-800">
                          <th className="p-4">Branch</th>
                          <th className="p-4 text-center">Seats</th>
                          <th className="p-4">KCET Fee (Yr)</th>
                          <th className="p-4">COMEDK Fee (Yr)</th>
                          <th className="p-4">Mgmt Quota (Yr)</th>
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
                  <h4 className="text-sm font-extrabold text-slate-900">Total Educational Investment Summary</h4>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    <li className="flex justify-between p-3 bg-white rounded-xl border border-slate-100">
                      <span>KCET Route (4 Years Tuition)</span>
                      <span className="text-emerald-600 font-black">~₹6 Lakhs</span>
                    </li>
                    <li className="flex justify-between p-3 bg-white rounded-xl border border-slate-100">
                      <span>COMEDK Route (4 Years Tuition)</span>
                      <span className="text-blue-600 font-black">~₹12.04 Lakhs</span>
                    </li>
                    <li className="flex justify-between p-3 bg-white rounded-xl border border-slate-100">
                      <span>Management Quota (4 Years Range)</span>
                      <span className="text-slate-900 font-black">₹11 Lakhs – ₹22 Lakhs</span>
                    </li>
                    <li className="flex justify-between p-3 bg-white rounded-xl border border-slate-100">
                      <span>Hostel Boarding Fees (Annual)</span>
                      <span className="text-slate-500 font-black">₹1,62,000 (Indian)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 6. Admission Eligibility */}
            <section ref={sectionsRef["admission-eligibility"]} id="admission-eligibility" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm">
              <div className="max-w-4xl space-y-6">
                <span className="text-xs font-black uppercase tracking-widest text-[#0c2340]">Counselling thresholds & Cutoffs</span>
                <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  Admission Entry Criteria & Cutoffs
                </h2>
                <div className="space-y-4 text-sm text-slate-600 font-semibold leading-relaxed">
                  <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl">
                    <h4 className="text-base font-extrabold text-slate-900 mb-3">Undergraduate B.E. Eligibility</h4>
                    <ul className="space-y-2 list-disc pl-5 text-xs font-bold text-slate-500">
                      <li>Must have passed Class 12 (10+2) with Physics, Chemistry, and Mathematics.</li>
                      <li>Secured a minimum of 45% aggregate in PCM (40% aggregate for reserved categories).</li>
                      <li>A valid rank card in KCET (Karnataka candidates) or COMEDK UGET (all India candidates) is compulsory.</li>
                      <li>Management Quota requires a minimum of 45-60% aggregate in PCM in Class 12 along with entry exam rankings.</li>
                    </ul>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-5 border border-slate-100 rounded-2xl">
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2">KCET Expected Cutoffs</h4>
                      <p className="text-sm font-extrabold text-slate-900">Opening: 4,080 | Closing: 94,757</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-2">CSE remains highly competitive, closing under 5,000 for general categories.</p>
                    </div>
                    <div className="p-5 border border-slate-100 rounded-2xl">
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2">COMEDK Expected Cutoffs</h4>
                      <p className="text-sm font-extrabold text-slate-900">Range: 3,609 – 68,618</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-2">Varies heavily depending on computer and electronic streams.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. Placements */}
            <section ref={sectionsRef["placements"]} id="placements" className="scroll-mt-32">
              <div className="bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-8">
                <div className="max-w-4xl space-y-4">
                  <span className="text-xs font-black uppercase tracking-widest text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">NIRF 2025 Verified Placements</span>
                  <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                    Placements Statistics (2022–2026)
                  </h2>
                  <p className="text-slate-650 leading-relaxed font-medium text-sm">
                    Dayananda Sagar College of Engineering operates a dedicated training cell. Placements for the 2026 batch are currently active and ongoing. Over 350 companies visit campus annually.
                  </p>
                </div>

                <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider border-b border-slate-800">
                          <th className="p-4">Year</th>
                          <th className="p-4">Students Placed</th>
                          <th className="p-4">Placement Rate</th>
                          <th className="p-4">Median Package</th>
                          <th className="p-4">Highest Package</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
                        {placementStats.map((st, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                            <td className="p-4 font-black text-slate-900">{st.year}</td>
                            <td className="p-4">{st.placed}</td>
                            <td className="p-4 font-extrabold text-[#0c2340]">{st.rate}</td>
                            <td className="p-4 font-extrabold text-emerald-600">{st.median}</td>
                            <td className="p-4 font-black text-slate-900">{st.highest}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-950">Branch-wise Placement Highs</h3>
                  <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-50 text-slate-800 text-xs font-black uppercase tracking-wider border-b border-slate-200">
                            <th className="p-4">Branch</th>
                            <th className="p-4">Placed Volume</th>
                            <th className="p-4">Average Package</th>
                            <th className="p-4">Highest Package</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
                          {branchPlacements.map((bp, idx) => (
                            <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                              <td className="p-4 font-black text-slate-900">{bp.branch}</td>
                              <td className="p-4 text-slate-500">{bp.placed}</td>
                              <td className="p-4 text-emerald-600 font-extrabold">{bp.avgPackage}</td>
                              <td className="p-4 text-slate-900 font-black">{bp.highest}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Recruiter Showcase */}
                <div className="space-y-6 pt-6 border-t border-slate-100">
                  <h3 className="text-base font-black uppercase tracking-widest text-slate-400 text-center lg:text-left">Recruitment Partners</h3>
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

            {/* 8. Campus Facilities */}
            <section ref={sectionsRef["facilities"]} id="facilities" className="scroll-mt-32">
              <div className="mb-10 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-[#0c2340]">Infrastructure index</span>
                <h2 className="text-3xl font-extrabold text-slate-950 mt-2">Campus Facilities & Ecosystem</h2>
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                {facilities.map((fac, idx) => {
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

            {/* 9. Scholarships */}
            <section ref={sectionsRef["scholarships"]} id="scholarships" className="scroll-mt-32 bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm">
              <div className="max-w-4xl space-y-6">
                <span className="text-xs font-black uppercase tracking-widest text-yellow-600">Financial Concessions</span>
                <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  Scholarships & Educational Loans
                </h2>
                <p className="text-slate-650 leading-relaxed font-medium text-sm">
                  Dayananda Sagar College of Engineering fully supports government scholarship portals, enabling academic access across categories.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 text-xs font-bold text-slate-600">
                  <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50">
                    <h4 className="text-slate-900 font-extrabold text-sm mb-2">Government of Karnataka Support</h4>
                    <p className="text-slate-500">Merit-based fee concessions for top-ranking candidates under KCET counseling. SC/ST/OBC scholarship schemes are fully supported.</p>
                  </div>
                  <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50">
                    <h4 className="text-slate-900 font-extrabold text-sm mb-2">Academic merit & Sports</h4>
                    <p className="text-slate-500">Partial tuition waivers are awarded to top KCET/COMEDK rank holders. Sports scholarships are available to state/national level athletes.</p>
                  </div>
                </div>
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
