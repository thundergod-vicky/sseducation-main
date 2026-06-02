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
  Dribbble,
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

// Custom Assets
const campusHero = "https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/350636934_956727338907772_546172555446015561_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=V9XkqnBS-uMQ7kNvwHr9FlO&_nc_oc=Ado8yBgbaExiQBJhOnmQWltdhflzRmI6ScI9RhwaiaGYJjwEOFV2-JzbgSxMTEhnONM&_nc_zt=23&_nc_ht=scontent.fccu4-3.fna&_nc_gid=N4bewpGUIDA6oj-7kZcAEg&_nc_ss=7b2a8&oh=00_Af8RJiv58F2iNlhoy0mw7UHypycGPCso8m8buE1bqULakw&oe=6A2493E1";
import labImage from "@/assets/cs-lab.jpg";

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

export default function SoaBhubaneswarAdmission2026() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("about-soa");
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
    "about-soa": useRef<HTMLElement>(null),
    "key-highlights": useRef<HTMLElement>(null),
    "rankings-accreditation": useRef<HTMLElement>(null),
    "courses-offered": useRef<HTMLElement>(null),
    "btech-branches": useRef<HTMLElement>(null),
    "admission-eligibility": useRef<HTMLElement>(null),
    "placements": useRef<HTMLElement>(null),
    "facilities": useRef<HTMLElement>(null),
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
      const nameInput = document.getElementById("soa-lead-name");
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
    googleFormData.append("entry.85122333", `SOA Bhubaneswar Showcase - Preferred Course: ${parsed.data.course}`);

    try {
      await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: googleFormData
      });
      setSubmitting(false);
      setSubmitted(true);
      toast.success("Profile saved! Our senior admissions advisor will get in touch with you shortly.");
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
    { id: "about-soa", label: "Overview" },
    { id: "key-highlights", label: "Highlights" },
    { id: "rankings-accreditation", label: "Rankings" },
    { id: "courses-offered", label: "Courses" },
    { id: "btech-branches", label: "Branches & Fees" },
    { id: "admission-eligibility", label: "Eligibility" },
    { id: "placements", label: "Placements" },
    { id: "facilities", label: "Facilities" },
    { id: "faqs", label: "FAQs" },
  ] as const;

  const highlights = [
    { title: "Established Year", value: "2007", desc: "ITER founded earlier as legacy engineering wing", icon: Calendar },
    { title: "University Type", value: "Private Deemed", desc: "Recognised as SIRO by DSIR and UGC", icon: School },
    { title: "NAAC Rating", value: "Grade A++", desc: "Highest possible national grading tier", icon: ShieldCheck },
    { title: "US Accreditation", value: "ABET (USA)", desc: "For core engineering programs at ITER", icon: Award },
    { title: "Approvals", value: "AICTE & UGC", desc: "Accredited by NBA, NABL, and ICAR", icon: Library },
    { title: "Academic Scope", value: "40+ Programs", desc: "Covering Tech, Medicine, Agri & Law", icon: Globe },
    { title: "Placement Avg", value: "₹5.75 LPA", desc: "Robust placement record in B.Tech", icon: TrendingUp },
    { title: "Peak Package", value: "₹46 LPA", desc: "Consistent corporate placements annually", icon: Trophy },
    { title: "Campus", value: "Bhubaneswar", desc: "Located at Khandagiri Square, Odisha", icon: MapPin },
  ];

  const rankingList = [
    { body: "NIRF 2025 (University)", category: "Top Universities in India", rank: "#15" },
    { body: "NIRF 2025 (Medical)", category: "Medical Category", rank: "#15" },
    { body: "NIRF 2025 (Engineering)", category: "ITER Engineering Rank", rank: "#22" },
    { body: "NIRF 2025 (Dental)", category: "Dental stream", rank: "#9" },
    { body: "NIRF 2023 (Overall)", category: "Overall stream", rank: "#26" },
    { body: "QS World Rankings 2025", category: "Global Rankings", rank: "1201–1400" },
    { body: "QS Asia (South Asia) 2026", category: "South Asia Region", rank: "#332" },
  ];

  const btechBranches = [
    { name: "Computer Science & Engineering (CSE)", duration: "4 Years", feePerSemester: "₹1,57,500", totalFee: "~₹12.20 Lakhs" },
    { name: "CSE with AI & Machine Learning", duration: "4 Years", feePerSemester: "₹1,57,500", totalFee: "~₹12.20 Lakhs" },
    { name: "Information Technology (IT)", duration: "4 Years", feePerSemester: "₹1,17,500", totalFee: "~₹5.10 Lakhs" },
    { name: "Electronics & Communication Engg (ECE)", duration: "4 Years", feePerSemester: "₹1,17,500", totalFee: "~₹5.10 Lakhs" },
    { name: "Electrical Engineering (EE)", duration: "4 Years", feePerSemester: "₹1,17,500", totalFee: "~₹5.10 Lakhs" },
    { name: "Mechanical Engineering (ME)", duration: "4 Years", feePerSemester: "₹1,17,500", totalFee: "~₹5.10 Lakhs" },
    { name: "Civil Engineering (CE)", duration: "4 Years", feePerSemester: "₹1,17,500", totalFee: "~₹5.10 Lakhs" },
    { name: "Chemical Engineering (CHE)", duration: "4 Years", feePerSemester: "₹1,17,500", totalFee: "~₹5.10 Lakhs" },
  ];

  const placementStats2024 = [
    { label: "Highest Package (2025)", value: "₹46.00 LPA", desc: "Top global software company placement" },
    { label: "B.Tech Avg Package (2025)", value: "₹5.75 LPA", desc: "Strong ROI among top private universities" },
    { label: "B.Tech Median Package", value: "₹6.00 LPA", desc: "Verified via recent NIRF 2025 report" },
    { label: "Students Placed (2025)", value: "1,836 Placed", desc: "256 recruiters visited on campus" },
    { label: "M.Tech Median Package", value: "₹4.80 LPA", desc: "Excellent post-graduate outcomes" },
    { label: "Hiring Partners (2025)", value: "256 Active", desc: "Consistent annual placement success" },
  ];

  const placementHistoryTable = [
    { year: "2019–20", highest: "₹21 LPA", companies: "147" },
    { year: "2020–21", highest: "₹31 LPA", companies: "157" },
    { year: "2021–22", highest: "₹42 LPA", companies: "164" },
    { year: "2022–23", highest: "₹46 LPA", companies: "235" },
    { year: "2023–24", highest: "₹43 LPA", companies: "210" },
    { year: "2024–25", highest: "₹46 LPA", companies: "256" },
  ];

  const recruiters = [
    { name: "Amazon", logo: amazonLogo },
    { name: "TCS", logo: tcsLogo },
    { name: "Infosys", logo: infosysLogo },
    { name: "Wipro", logo: wiproLogo },
    { name: "Cognizant", logo: cognizantLogo },
    { name: "Capgemini", logo: capgeminiLogo },
    { name: "IBM", logo: ibmLogo },
    { name: "Oracle", logo: oracleLogo },
    { name: "EY", logo: eyLogo },
    { name: "Axis Bank", logo: axisBankLogo },
    { name: "Tech Mahindra", logo: techMahindraLogo },
    { name: "Reliance", logo: relianceLogo },
    { name: "Kotak Mahindra", logo: kotakMahindraLogo },
    { name: "Dabur", logo: daburLogo }
  ];

  const facilities = [
    { title: "ITER Technical Campus", desc: "State-of-the-art academic buildings, modern multimedia classrooms, and hi-speed computer grids.", icon: Building },
    { title: "Deemed Central Library", desc: "Spacious library hosting international textbook publications, research databases, and catalog pings.", icon: Library },
    { title: "SUM Hospital Network", desc: "Access to SOA's own SUM hospital for medical learning, student checkups, and 24/7 care.", icon: HeartPulse },
    { title: "Sports Complex", desc: "Physical fitness training centers, gymnasium, and fields for football, cricket, and courts for badminton.", icon: Dribbble },
    { title: "Specialized Hardware Labs", desc: "Advanced engineering laboratories fully accredited by ABET (USA) for hands-on learning.", icon: Zap },
    { title: "Hostel Accommodations", desc: "Clean separate residential hostels for boys and girls with fully functional mess networks.", icon: School },
    { title: "Campus-Wide Wi-Fi", desc: "Broadband network coverage across all classrooms, laboratories, and student lawns.", icon: Wifi },
    { title: "Transportation Fleet", desc: "Dedicated student buses providing convenient daily routes across Bhubaneswar.", icon: Compass }
  ];

  const faqItems = [
    {
      q: "What is ITER in SOA University?",
      a: "ITER (Institute of Technical Education and Research) is the flagship engineering wing of Siksha 'O' Anusandhan (SOA) Deemed University, renowned as one of India's best engineering schools (ranked #22 in NIRF 25)."
    },
    {
      q: "What is the fee structure for B.Tech CSE at ITER?",
      a: "For B.Tech CSE and CSE AI/ML, the tuition fee is ₹1,57,500 per semester, which brings the 4-year total to ~₹12.20 Lakhs. For other branches (IT, ECE, EE, ME, Civil, CHE), the semester fee is ₹1,17,500, bringing the total to ~₹5.10 Lakhs."
    },
    {
      q: "What entrance exams are accepted for ITER admissions?",
      a: "Primary entrance is SAAT (SOA's own admissions test), which is conducted in multiple phases. JEE Main and CUET scores are also accepted for engineering quotas."
    },
    {
      q: "What is the placement record at SOA?",
      a: "During the 2025 placements, 1,836 students were successfully placed with an average package of ₹5.75 LPA. The highest package reached ₹46 LPA. B.Tech median package stands strongly at ₹6 LPA as verified by NIRF."
    },
    {
      q: "Are SUM Hospital facilities available on-campus?",
      a: "Yes. SOA has its own SUM Medical Hospital on campus, providing student healthcare, emergency checkups, and advanced clinical learning modules."
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-amber-100 selection:text-amber-900">
      
      {/* Sticky Bottom Counselling Banner for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0c2340] border-t border-white/10 p-3 md:hidden flex justify-between items-center shadow-2xl">
        <div className="text-left">
          <span className="block text-[8px] font-sans font-black text-[#c5a880] uppercase tracking-wider">SOA Admission 2026</span>
          <span className="block text-xs font-serif font-bold text-white">Admissions Counselling Open</span>
        </div>
        <button
          onClick={scrollToForm}
          className="bg-amber-400 hover:bg-amber-500 text-[#0c2340] font-sans font-extrabold text-[10px] uppercase tracking-widest px-4 py-2 rounded-xl transition-all shadow-md active:scale-95"
        >
          Apply Now
        </button>
      </div>

      {/* Dynamic SEO Academic Banner */}
      <div className="bg-[#0b172a] py-3 text-center border-b border-white/5 relative z-40">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0 animate-pulse" />
          <p className="text-white text-[10px] font-black uppercase tracking-[0.2em] leading-none font-sans">
            Siksha 'O' Anusandhan Deemed University (SOA / ITER) — 2026 Academic Showcase
          </p>
        </div>
      </div>

      {/* Cinematic Showcase Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0c2340] via-[#091b33] to-[#050f1e] text-white pt-24 pb-28 md:pt-32 md:pb-36 overflow-hidden">
        {/* Backdrop Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={campusHero}
            className="absolute inset-0 w-full h-full object-cover scale-105 transform transition-transform duration-1000 opacity-30"
            alt="SOA University Bhubaneswar Campus Backdrop"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c2340] via-[#0c2340]/80 to-[#091b33]/65 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 relative z-20 max-w-7xl">
          <div className="max-w-4xl space-y-6">
            {/* Breadcrumb Navigation in Hero */}
            <nav className="inline-flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.2em] text-slate-300 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="text-amber-500 font-bold">/</span>
              <a href="/engineering" className="hover:text-white transition-colors">Colleges</a>
              <span className="text-amber-500 font-bold">/</span>
              <span className="text-amber-400">SOA University Bhubaneswar</span>
            </nav>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.1] text-white">
                Siksha 'O' Anusandhan University (SOA / ITER)
              </h1>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/10 border border-amber-400/30 rounded-lg">
                <Sparkles className="h-4 w-4 text-amber-400 shrink-0" />
                <span className="text-amber-300 font-serif font-bold italic text-xs sm:text-sm">
                  "Pursuit of Knowledge Through Education"
                </span>
              </div>

              <p className="text-slate-300 text-sm sm:text-lg font-sans font-medium leading-relaxed max-w-3xl">
                Top 15 ranked national deemed university. Explore ABET accredited ITER engineering modules, branch-wise fee schedules, 46 LPA placements history, and SAAT 2026 admissions guidelines.
              </p>
            </div>

            {/* Quick Stat Badges */}
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="text-[9px] font-sans font-bold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
                NAAC Grade A++
              </span>
              <span className="text-[9px] font-sans font-bold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
                ABET accredited ITER
              </span>
              <span className="text-[9px] font-sans font-bold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
                NIRF Eng #22
              </span>
              <span className="text-[9px] font-sans font-bold uppercase tracking-wider bg-[#b8860b]/20 border border-[#b8860b]/40 text-amber-300 px-3.5 py-1.5 rounded-full">
                ₹6.0 LPA B.Tech Median
              </span>
            </div>

            <div className="pt-6">
              <button
                onClick={scrollToForm}
                className="inline-flex h-12 bg-amber-400 hover:bg-amber-500 text-[#0c2340] font-sans font-extrabold text-xs uppercase tracking-widest px-8 rounded-xl transition-all shadow-lg items-center gap-2 active:scale-95"
              >
                Get Free Counselling <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Core Statistics row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10 mt-8 max-w-3xl">
              <div>
                <span className="block text-[10px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest leading-none mb-2">Established</span>
                <span className="block text-2xl md:text-3xl font-serif font-bold text-white leading-none">2007</span>
              </div>
              <div>
                <span className="block text-[10px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest leading-none mb-2">Accreditation</span>
                <span className="block text-2xl md:text-3xl font-serif font-bold text-white leading-none">NAAC A++</span>
              </div>
              <div>
                <span className="block text-[10px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest leading-none mb-2">NIRF Univ Rank</span>
                <span className="block text-2xl md:text-3xl font-serif font-bold text-white leading-none">#15</span>
              </div>
              <div>
                <span className="block text-[10px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest leading-none mb-2">Peak Package</span>
                <span className="block text-2xl md:text-3xl font-serif font-bold text-white leading-none">₹46 LPA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Double-Column Layout */}
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Mobile Table of Contents Navigator */}
          <div className="block lg:hidden mb-8 relative z-30">
            <div className="bg-slate-50/90 backdrop-blur-sm border border-slate-200/80 border-l-4 border-l-[#0c2340] rounded-2xl shadow-sm overflow-hidden">
              <button
                onClick={() => setMobileTOCOpen(!mobileTOCOpen)}
                className="w-full flex items-center justify-between p-4 px-5 text-left text-[#0c2340]"
              >
                <div className="flex flex-col">
                  <span className="text-[9px] font-sans font-black uppercase tracking-[0.2em] text-[#c5a880]">Guide Navigator</span>
                  <span className="text-sm font-serif font-black flex items-center gap-2 mt-0.5">
                    Jump to Section
                    <span className="text-[10px] font-sans font-black uppercase tracking-wider text-slate-500 bg-slate-200/50 px-2 py-0.5 rounded-full">
                      {menuItems.find(item => item.id === activeSection)?.label || "Overview"}
                    </span>
                  </span>
                </div>
                <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${mobileTOCOpen ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {mobileTOCOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden border-t border-slate-200/60 bg-white"
                  >
                    <div className="p-3 grid grid-cols-2 gap-2">
                      {menuItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                          <button
                            key={item.id}
                            onClick={() => {
                              scrollToSection(item.id);
                              setMobileTOCOpen(false);
                            }}
                            className={`flex items-center text-left py-2.5 px-3 rounded-xl transition-all text-[10px] font-sans font-black uppercase tracking-widest ${
                              isActive 
                                ? "bg-[#0c2340]/5 text-[#0c2340]" 
                                : "text-slate-500 hover:bg-slate-50"
                            }`}
                          >
                            <span className={isActive ? "text-[#0c2340]" : ""}>
                              {item.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Left Sticky Navigator (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-3 sticky top-[120px] self-start w-full max-w-[280px]">
            <div className="bg-slate-50/50 backdrop-blur-sm border border-slate-200/60 border-l-4 border-l-[#0c2340] rounded-2xl p-6 shadow-sm space-y-6">
              <div>
                <span className="text-[10px] font-sans font-black uppercase tracking-[0.2em] text-[#c5a880] block">Guide Navigator</span>
                <h3 className="text-base font-serif font-black text-[#0c2340] mt-1">Table of Contents</h3>
              </div>
              <div className="h-[1px] bg-slate-200/60 w-full" />
              <ul className="space-y-1.5 text-xs font-sans font-bold">
                {menuItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full flex items-center text-left py-2 px-3.5 rounded-xl transition-all duration-300 relative group ${
                          isActive 
                            ? "bg-[#0c2340]/5 text-[#0c2340]" 
                            : "text-slate-500 hover:text-[#0c2340] hover:bg-slate-100/40"
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-[#0c2340] rounded-r-lg"
                            transition={{ type: "spring", stiffness: 350, damping: 25 }}
                          />
                        )}
                        <span className={`transition-all duration-300 uppercase tracking-widest text-[10px] font-black ${isActive ? "pl-3 text-[#0c2340]" : "pl-1 hover:pl-2"}`}>
                          {item.label}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Right Column: Main Content Sections */}
          <div className="lg:col-span-9 space-y-24">

            {/* SECTION 1: ABOUT SOA UNIVERSITY */}
            <section id="about-soa" ref={sectionsRef["about-soa"]} className="scroll-mt-28 bg-white py-4">
              <div className="grid md:grid-cols-12 gap-8 items-start border-b border-slate-100 pb-12">
                <div className="md:col-span-4">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c2340] border-l-4 border-[#c5a880] pl-4 tracking-tight leading-tight">
                    About SOA University
                  </h2>
                </div>

                <div className="md:col-span-8 space-y-6 text-slate-650 text-sm md:text-base leading-relaxed font-sans font-medium text-slate-600">
                  <p>
                    Siksha 'O' Anusandhan (SOA), Bhubaneswar, is a highly prestigious Deemed-to-be University established in 2007. It is accredited by the NAAC with the highest A++ grade and is recognised as SIRO by DSIR and the UGC.
                  </p>
                  <p>
                    The engineering faculty of SOA is the Institute of Technical Education and Research (ITER) — the flagship school for B.Tech and engineering modules. ITER is ABET (USA) accredited, NBA accredited, and consistently scores among the top 25 engineering institutions across India.
                  </p>
                  <p>
                    SOA has a highly integrated curriculum spanning Technical programs, Medicine, Agriculture, and Law. Outperforming major standalone engineering institutions, SOA is dedicated to academic excellence and robust placement outputs.
                  </p>

                  {/* Campus Address Card */}
                  <div className="bg-[#FAF9F6] border border-slate-200/60 rounded-2xl p-5 space-y-3 shadow-sm text-xs font-sans text-slate-700 font-semibold mt-4">
                    <div>
                      <span className="block text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">Campus Coordinates</span>
                      <p className="mt-1 flex gap-2 items-start text-slate-900 leading-relaxed font-sans">
                        <MapPin className="h-4.5 w-4.5 text-[#0c2340] shrink-0 mt-0.5" />
                        <span>Khandagiri Square, Jagamara, Bhubaneswar, Odisha – 751030</span>
                      </p>
                    </div>
                    <div className="border-t border-slate-200/50 pt-2 flex justify-between items-center">
                      <div>
                        <span className="block text-[8px] font-sans font-extrabold text-slate-400 uppercase tracking-widest">Official Website</span>
                        <a href="https://www.soa.ac.in" target="_blank" rel="noreferrer" className="text-[#0c2340] hover:underline font-bold text-xs mt-0.5 block flex items-center gap-1">
                          www.soa.ac.in <ArrowUpRight className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 2: KEY HIGHLIGHTS */}
            <section id="key-highlights" ref={sectionsRef["key-highlights"]} className="scroll-mt-28 bg-white py-4 border-b border-slate-100 pb-12">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c2340] border-l-4 border-[#c5a880] pl-4 tracking-tight leading-tight">
                    Key Highlights
                  </h2>
                </div>

                <div className="md:col-span-8">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-2">
                    {highlights.map((hl, idx) => {
                      const IconComp = hl.icon;
                      return (
                        <div key={idx} className="bg-[#FAF9F6] border border-slate-200/50 p-5 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all duration-300">
                          <div className="h-9 w-9 rounded-xl bg-[#0c2340]/5 flex items-center justify-center text-[#0c2340] mb-4">
                            <IconComp className="h-4.5 w-4.5" />
                          </div>
                          <div>
                            <span className="block text-xl font-serif font-bold text-[#0c2340] leading-none mb-1">{hl.value}</span>
                            <span className="block text-[10px] font-sans font-extrabold text-[#c5a880] uppercase tracking-wider">{hl.title}</span>
                            <span className="block text-[9px] font-sans font-semibold text-slate-500 leading-tight mt-1">{hl.desc}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: RANKINGS */}
            <section id="rankings-accreditation" ref={sectionsRef["rankings-accreditation"]} className="scroll-mt-28 bg-white py-4 border-b border-slate-100 pb-12">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c2340] border-l-4 border-[#c5a880] pl-4 tracking-tight leading-tight">
                    Rankings & Accreditations
                  </h2>
                  <p className="text-slate-500 text-xs font-semibold leading-relaxed font-sans pr-4">
                    ITER engineering faculty has been continuously ranked in the top tier private engineering institutions in India.
                  </p>
                </div>

                <div className="md:col-span-8 space-y-8">
                  {/* Rankings Table */}
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse min-w-[500px]">
                        <thead>
                          <tr className="bg-[#0c2340] text-white text-[10px] font-sans font-bold uppercase tracking-widest border-b border-slate-200">
                            <th className="p-4">Ranking Agency</th>
                            <th className="p-4">Category</th>
                            <th className="p-4">Rank History</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-xs font-sans text-slate-700 font-semibold">
                          {rankingList.map((rankItem, idx) => (
                            <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                              <td className="p-4 font-bold text-slate-900">{rankItem.body}</td>
                              <td className="p-4">{rankItem.category}</td>
                              <td className="p-4 text-[#0c2340] font-bold">{rankItem.rank}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Accreditations Cards */}
                  <div className="bg-[#FAF9F6] border border-slate-200/50 rounded-2xl p-6 space-y-4">
                    <span className="block text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">Regulatory Status & Global Approvals</span>
                    <div className="flex flex-wrap gap-2.5">
                      {["NAAC Grade A++ (Highest)", "UGC & AICTE Approved", "ABET (USA) International", "NBA Accredited ITER", "SIRO (DSIR) Recognized", "NABH & NABL Accredited"].map((badge, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 bg-white border border-slate-200 px-3.5 py-2 rounded-xl text-slate-700 text-xs font-bold font-sans shadow-sm">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                          <span>{badge}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 4: COURSES */}
            <section id="courses-offered" ref={sectionsRef["courses-offered"]} className="scroll-mt-28 bg-white py-4 border-b border-slate-100 pb-12">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c2340] border-l-4 border-[#c5a880] pl-4 tracking-tight leading-tight">
                    Courses Offered
                  </h2>
                </div>

                <div className="md:col-span-8 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { id: "ug", title: "Undergraduate (UG)", desc: "B.Tech (ITER), MBBS, BDS & BCA" },
                      { id: "pg", title: "Postgraduate (PG)", desc: "M.Tech, MBA, MCA & MDS" },
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCourseCategory(cat.id as any)}
                        className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                          activeCourseCategory === cat.id
                            ? "bg-[#0c2340] text-white border-[#0c2340] shadow-md"
                            : "bg-[#FAF9F6] text-slate-800 border-slate-200/60 hover:bg-slate-100/60"
                        }`}
                      >
                        <h4 className="text-sm font-serif font-bold uppercase tracking-wider leading-none mb-2">{cat.title}</h4>
                        <p className={`text-[10px] font-semibold leading-relaxed ${activeCourseCategory === cat.id ? "text-slate-300" : "text-slate-500"}`}>{cat.desc}</p>
                      </button>
                    ))}
                  </div>

                  <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-slate-100 space-y-6">
                    {activeCourseCategory === "ug" ? (
                      <div className="space-y-4">
                        <h4 className="text-base font-serif font-bold text-[#0c2340]">B.Tech programs (ITER) — 4 Years</h4>
                        <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                          Offering 12+ specialized engineering pathways fully accredited by ABET (USA) and NBA.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3 pt-2">
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50 shadow-sm flex flex-col justify-between">
                            <span className="text-xs font-serif font-bold text-[#0c2340] leading-snug">Medical & Health Sciences</span>
                            <span className="text-[9px] font-sans font-bold text-amber-600 uppercase tracking-wider mt-1.5">MBBS, BDS, B.V.Sc, B.Pharm, B.Sc Nursing</span>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50 shadow-sm flex flex-col justify-between">
                            <span className="text-xs font-serif font-bold text-[#0c2340] leading-snug">Integrated Law Programs</span>
                            <span className="text-[9px] font-sans font-bold text-amber-600 uppercase tracking-wider mt-1.5">BA LLB, BBA LLB, BCA, BHMCT</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="text-base font-serif font-bold text-[#0c2340]">MBA & MCA Programs — 2 Years</h4>
                          <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                            Excellent post-graduate outcomes featuring average B.Tech packages of ₹5.75 LPA and highest package hitting ₹46 LPA.
                          </p>
                        </div>
                        <div className="border-t border-slate-200/50 pt-4 space-y-2">
                          <h4 className="text-base font-serif font-bold text-[#0c2340]">M.Tech & PG Technical Courses</h4>
                          <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                            Accredited technical post-graduate extensions with deep lab structures and specialized dissertation modules.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 5: B.TECH BRANCHES & FEE STRUCTURE */}
            <section id="btech-branches" ref={sectionsRef["btech-branches"]} className="scroll-mt-28 bg-white py-4 border-b border-slate-100 pb-12">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c2340] border-l-4 border-[#c5a880] pl-4 tracking-tight leading-tight">
                    B.Tech Fee Structure
                  </h2>
                  <p className="text-slate-500 text-xs font-semibold leading-relaxed font-sans pr-4">
                    Tuition fees are structured semester-wise depending on the branch demand and specialization.
                  </p>
                  
                  {/* Detailed fee breakdown cards */}
                  <div className="bg-[#FAF9F6] p-4 rounded-xl border border-slate-200 text-slate-700 text-xs font-sans font-semibold space-y-2.5">
                    <span className="block text-[8px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">Fees Parameters Checklist</span>
                    <p className="flex justify-between"><span>CSE Tuition (per sem):</span> <strong className="text-slate-900">₹1,57,500</strong></p>
                    <p className="flex justify-between"><span>Other branches (per sem):</span> <strong className="text-slate-900">₹1,17,500</strong></p>
                    <div className="border-t border-slate-200/50 pt-2 text-slate-900">
                      <p className="flex justify-between font-bold"><span>CSE Total (4 Yrs):</span> <span>~₹12.20 Lakhs</span></p>
                      <p className="flex justify-between font-bold"><span>Other total (4 Yrs):</span> <span>~₹5.10 Lakhs</span></p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-8 space-y-6">
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse min-w-[500px]">
                        <thead>
                          <tr className="bg-[#0c2340] text-white text-[10px] font-sans font-bold uppercase tracking-widest border-b border-slate-200">
                            <th className="p-4">B.Tech Engineering Branch</th>
                            <th className="p-4">Duration</th>
                            <th className="p-4">Semester Tuition</th>
                            <th className="p-4">Total Tuition Fee (4 Yrs)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-xs font-sans text-slate-700 font-semibold">
                          {btechBranches.map((branch, idx) => (
                            <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                              <td className="p-4 font-bold text-slate-900">{branch.name}</td>
                              <td className="p-4">{branch.duration}</td>
                              <td className="p-4">{branch.feePerSemester}</td>
                              <td className="p-4 text-[#0c2340] font-bold">{branch.totalFee}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 6: ELIGIBILITY CHECKLIST */}
            <section id="admission-eligibility" ref={sectionsRef["admission-eligibility"]} className="scroll-mt-28 bg-white py-4 border-b border-slate-100 pb-12">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c2340] border-l-4 border-[#c5a880] pl-4 tracking-tight leading-tight">
                    Eligibility & Cutoffs
                  </h2>
                </div>

                <div className="md:col-span-8 space-y-6 text-slate-650 text-sm leading-relaxed font-sans font-medium text-slate-600">
                  <div className="bg-[#FAF9F6] border border-slate-200 p-6 rounded-2xl space-y-4">
                    <span className="block text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">B.Tech Admissions Parameters</span>
                    <ul className="space-y-2.5 text-xs font-semibold text-slate-700">
                      <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Passed Class 12 (10+2) with Physics, Chemistry, and Mathematics (PCM).</li>
                      <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Minimum 50% aggregate score in PCM.</li>
                      <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Primary Entrance: SAAT (SOA's own admissions test).</li>
                      <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> JEE Main and CUET scores are also accepted for specific quotas.</li>
                    </ul>
                  </div>

                  {/* Entrance Card */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 hover:shadow-md transition-all flex justify-between items-center">
                    <div>
                      <span className="block text-[8px] font-sans font-black text-slate-400 uppercase tracking-widest mb-1.5">SAAT Registration Status 2026</span>
                      <span className="block text-lg sm:text-xl font-serif font-bold text-[#0c2340]">SAAT Phase 1 closed April 30</span>
                    </div>
                    <button onClick={scrollToForm} className="bg-amber-400 text-slate-900 text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-xl">Apply Counseling</button>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 7: PLACEMENTS */}
            <section id="placements" ref={sectionsRef["placements"]} className="scroll-mt-28 bg-white py-4 border-b border-slate-100 pb-12">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c2340] border-l-4 border-[#c5a880] pl-4 tracking-tight leading-tight">
                    Placements
                  </h2>
                  <p className="text-slate-500 text-xs font-semibold leading-relaxed font-sans pr-4">
                    ITER engineering placements are highly competitive. Median B.Tech packages are documented strongly in NIRF reports.
                  </p>
                </div>

                <div className="md:col-span-8 space-y-8">
                  {/* Stats Cards Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {placementStats2024.map((stat, idx) => (
                      <div key={idx} className="bg-[#FAF9F6] border border-slate-200/50 p-5 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all">
                        <span className="block text-2xl font-serif font-bold text-[#0c2340] leading-none mb-1">{stat.value}</span>
                        <div>
                          <span className="block text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-wider">{stat.label}</span>
                          <span className="block text-[8px] font-sans font-semibold text-slate-500 leading-tight mt-1">{stat.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 3-Year placement history */}
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                    <h4 className="p-4 bg-slate-50 text-[#0c2340] font-serif font-bold text-xs uppercase border-b border-slate-200 tracking-wider">Placement Summary Trends</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse min-w-[500px]">
                        <thead>
                          <tr className="bg-[#0c2340] text-white text-[9px] font-sans font-bold uppercase tracking-widest border-b border-slate-200">
                            <th className="p-4">Placement Year</th>
                            <th className="p-4">Companies Visited</th>
                            <th className="p-4">Highest Package</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-xs font-sans text-slate-700 font-semibold">
                          {placementHistoryTable.map((hist, idx) => (
                            <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                              <td className="p-4 font-bold text-slate-900">{hist.year}</td>
                              <td className="p-4">{hist.companies}</td>
                              <td className="p-4 text-[#0c2340] font-bold">{hist.highest}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Recruiter Logos */}
                  <div className="space-y-4 pt-4">
                    <span className="block text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">Major Technical & Global Hiring Alliances</span>
                    <div className="grid grid-cols-4 sm:grid-cols-7 gap-4 items-center">
                      {recruiters.map((rec, idx) => (
                        <div key={idx} className="h-10 bg-white border border-slate-200/60 p-1.5 rounded-xl flex items-center justify-center hover:shadow-sm hover:border-slate-300 transition-all">
                          <img src={rec.logo} alt={rec.name} className="max-h-full max-w-full object-contain" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 8: FACILITIES */}
            <section id="facilities" ref={sectionsRef["facilities"]} className="scroll-mt-28 bg-white py-4 border-b border-slate-100 pb-12">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c2340] border-l-4 border-[#c5a880] pl-4 tracking-tight leading-tight">
                    Campus Facilities
                  </h2>
                </div>

                <div className="md:col-span-8">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {facilities.map((fac, idx) => {
                      const IconComp = fac.icon;
                      return (
                        <div key={idx} className="bg-[#FAF9F6] border border-slate-200/50 p-5 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all">
                          <div className="h-9 w-9 rounded-xl bg-[#0c2340]/5 flex items-center justify-center text-[#0c2340] mb-4">
                            <IconComp className="h-4.5 w-4.5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-serif font-bold text-[#0c2340] mb-1">{fac.title}</h4>
                            <p className="text-slate-500 text-xs leading-relaxed font-sans">{fac.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 9: FAQs */}
            <section id="faqs" ref={sectionsRef["faqs"]} className="scroll-mt-28 bg-white py-4 border-b border-slate-100 pb-12">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c2340] border-l-4 border-[#c5a880] pl-4 tracking-tight leading-tight">
                    Admission FAQs
                  </h2>
                  <p className="text-slate-500 text-xs font-semibold leading-relaxed font-sans pr-4">
                    Get quick answers to common queries regarding SAAT entrance exams, SUM hospital, and B.Tech CSE fee schedules.
                  </p>
                </div>

                <div className="md:col-span-8 space-y-3 font-sans">
                  {faqItems.map((item, idx) => {
                    const isOpen = activeFAQ === idx;
                    return (
                      <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden hover:border-[#0c2340]/25 transition-all">
                        <button
                          onClick={() => toggleFAQ(idx)}
                          className="w-full flex justify-between items-center p-4 text-left font-serif font-bold text-xs sm:text-sm text-[#0c2340] bg-slate-50/50 hover:bg-slate-50"
                        >
                          <span>{item.q}</span>
                          {isOpen ? <ChevronUp className="h-4 w-4 shrink-0 text-slate-500" /> : <ChevronDown className="h-4 w-4 shrink-0 text-slate-500" />}
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden bg-white"
                            >
                              <div className="p-4 border-t border-slate-200/60 text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                                {item.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Lead capture form & contact cards */}
            <section id="contact" ref={formRef} className="scroll-mt-28 py-4">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                
                {/* Contact Card details */}
                <div className="md:col-span-5 space-y-6">
                  <div className="bg-[#FAF9F6] border border-slate-200 rounded-3xl p-6 shadow-sm">
                    <span className="block text-[8px] font-sans font-black text-slate-400 uppercase tracking-widest mb-1.5">Direct Helpdesk</span>
                    <h3 className="text-lg font-serif font-black text-[#0c2340] mb-4">Urgent Admission Support?</h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-sans mb-6">
                      Our admissions experts are ready 24/7 to guide you through cutoffs, seats, and course structures.
                    </p>

                    <div className="space-y-4 text-xs font-sans font-semibold">
                      <a href="tel:+919933085333" className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#0c2340]/25 transition-all">
                        <Phone className="h-4 w-4 text-[#0c2340]" />
                        <div>
                          <span className="block text-[8px] font-sans font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Helpline Phone</span>
                          <span className="text-slate-900 font-bold">+91 99330 85333</span>
                        </div>
                      </a>
                      <a href="https://wa.me/919933085333" className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-emerald-500/25 transition-all">
                        <MessageCircle className="h-4.5 w-4.5 text-emerald-600" />
                        <div>
                          <span className="block text-[8px] font-sans font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Helpline WhatsApp</span>
                          <span className="text-emerald-700 font-bold">Start Chat Support</span>
                        </div>
                      </a>
                      <a href="mailto:info@sseducationalservices.com" className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-slate-350 transition-all">
                        <Mail className="h-4 w-4 text-[#0c2340]" />
                        <div className="overflow-hidden">
                          <span className="block text-[8px] font-sans font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Support Email</span>
                          <span className="text-slate-900 font-bold truncate block">info@sseducationalservices.com</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Validate Form Block */}
                <div className="md:col-span-7 bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-glow/20 rounded-full blur-3xl pointer-events-none" />
                  
                  {submitted ? (
                    <div className="text-center py-10 space-y-4">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <CheckCircle2 className="h-8 w-8 stroke-[2.5]" />
                      </div>
                      <h3 className="text-xl font-serif font-black text-white">Application Logged!</h3>
                      <p className="text-slate-400 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                        Thank you for applying. A senior admissions coordinator is matched to eligibility and will call you back shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-5 relative z-10 font-sans">
                      <div>
                        <span className="text-[9px] font-sans font-black uppercase tracking-[0.2em] text-[#c5a880]">Academic Registration 2026</span>
                        <h3 className="text-xl font-serif font-black text-white mt-1">Get Free Admission Support</h3>
                        <p className="text-slate-400 text-xs leading-relaxed mt-1">
                          Share your credentials to verify cutoff eligibility and secure seat counseling.
                        </p>
                      </div>

                      <div className="space-y-3 pt-2">
                        {/* Name Input */}
                        <div className="space-y-1">
                          <Label htmlFor="soa-lead-name" className="text-[10px] font-black uppercase tracking-wider text-slate-400">Full Name *</Label>
                          <Input
                            id="soa-lead-name"
                            value={formData.name || ""}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="E.g. Shreyas Patel"
                            className="bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-amber-400 rounded-xl"
                          />
                          {errors.name && <span className="text-[10px] font-bold text-red-400 block mt-1">{errors.name}</span>}
                        </div>

                        {/* Phone Input */}
                        <div className="space-y-1">
                          <Label htmlFor="soa-lead-phone" className="text-[10px] font-black uppercase tracking-wider text-slate-400">Phone Number *</Label>
                          <Input
                            id="soa-lead-phone"
                            type="tel"
                            value={formData.phone || ""}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="E.g. 9876543210"
                            className="bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-amber-400 rounded-xl"
                          />
                          {errors.phone && <span className="text-[10px] font-bold text-red-400 block mt-1">{errors.phone}</span>}
                        </div>

                        {/* Email Input */}
                        <div className="space-y-1">
                          <Label htmlFor="soa-lead-email" className="text-[10px] font-black uppercase tracking-wider text-slate-400">Email Address (Optional)</Label>
                          <Input
                            id="soa-lead-email"
                            type="email"
                            value={formData.email || ""}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="name@gmail.com"
                            className="bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-amber-400 rounded-xl"
                          />
                          {errors.email && <span className="text-[10px] font-bold text-red-400 block mt-1">{errors.email}</span>}
                        </div>

                        {/* State & Course Dropdowns */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <Label htmlFor="soa-lead-state" className="text-[10px] font-black uppercase tracking-wider text-slate-400">State *</Label>
                            <Select onValueChange={(val) => handleInputChange("state", val)}>
                              <SelectTrigger className="bg-slate-800 border-white/10 text-white placeholder:text-slate-600 rounded-xl text-xs font-semibold">
                                <SelectValue placeholder="Select State" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-900 border-white/10 text-white text-xs font-semibold">
                                {["West Bengal", "Bihar", "Jharkhand", "Odisha", "Assam", "Tripura", "Delhi / NCR", "Other State"].map((st) => (
                                  <SelectItem key={st} value={st} className="hover:bg-slate-800 focus:bg-slate-800">{st}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {errors.state && <span className="text-[10px] font-bold text-red-400 block mt-1">{errors.state}</span>}
                          </div>

                          <div className="space-y-1">
                            <Label htmlFor="soa-lead-course" className="text-[10px] font-black uppercase tracking-wider text-slate-400">Preferred Course *</Label>
                            <Select onValueChange={(val) => handleInputChange("course", val)}>
                              <SelectTrigger className="bg-slate-800 border-white/10 text-white placeholder:text-slate-600 rounded-xl text-xs font-semibold">
                                <SelectValue placeholder="Select Course" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-900 border-white/10 text-white text-xs font-semibold">
                                {["B.Tech CSE (ITER)", "B.Tech CSE AI/ML", "B.Tech IT / ECE", "B.Tech Core (ME/EE/CE)", "MBBS / BDS Program", "MBA / MCA Program"].map((cs) => (
                                  <SelectItem key={cs} value={cs} className="hover:bg-slate-800 focus:bg-slate-800">{cs}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {errors.course && <span className="text-[10px] font-bold text-red-400 block mt-1">{errors.course}</span>}
                          </div>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-4.5 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-900 font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all mt-4 disabled:opacity-50"
                      >
                        {submitting ? "Submitting Inquiry..." : "Submit Inquiry"} <ArrowRight className="h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </div>

              </div>
            </section>

          </div>

        </div>
      </div>

    </main>
  );
}
