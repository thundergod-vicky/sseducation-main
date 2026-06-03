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
  Layers,
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
  Activity,
  HeartPulse,
  Mail,
  Zap,
  Dribbble,
  Play,
  ArrowUpRight,
  School,
  Globe,
  Gift
} from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Custom Assets
const campusHero = "https://lh3.googleusercontent.com/gps-cs-s/APNQkAECrPD2UStPt_JeHFiYbKGKGw4IQ_pNq1Hi_7nsaEczL65IKa57PxSF_fAzlc2yqGGdGiBbJyzJPAGZKsgUFAAgZx_3Cav9zyzQuhOt_dQNn81qat2GqQFsLl8-NAa0ibasYMmt=s1360-w1360-h1020-rw";
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

export default function HaldiaAdmission2026() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("about-hit");
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
    "about-hit": useRef<HTMLElement>(null),
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
      const nameInput = document.getElementById("hit-lead-name");
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
    googleFormData.append("entry.85122333", `HIT Haldia Showcase - Preferred Course: ${parsed.data.course}`);

    try {
      await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: googleFormData
      });
      setSubmitting(false);
      setSubmitted(true);
      toast.success("Profile saved! Our senior advisor will get in touch with you shortly.");
    } catch (error) {
      setSubmitting(false);
      setSubmitted(true);
      toast.success("Profile saved! Our senior advisor will contact you shortly.");
    }
  };

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const menuItems = [
    { id: "about-hit", label: "Overview" },
    { id: "key-highlights", label: "Highlights" },
    { id: "rankings-accreditation", label: "Rankings" },
    { id: "courses-offered", label: "Courses" },
    { id: "btech-branches", label: "Branches & Fees" },
    { id: "admission-eligibility", label: "Eligibility" },
    { id: "placements", label: "Placements" },
    { id: "facilities", label: "Facilities" },
    { id: "advantages", label: "Special Advantages" },
    { id: "faqs", label: "FAQs" },
  ] as const;

  const highlights = [
    { title: "Established Year", value: "1996", desc: "Oldest self-financed engineering college in WB", icon: Calendar },
    { title: "Founder Organization", value: "ICARE", desc: "Indian Centre for Advancement of Research & Education", icon: School },
    { title: "Campus Footprint", value: "37 Acres", desc: "Fully residential private autonomous campus", icon: MapPin },
    { title: "Affiliated Board", value: "MAKAUT", desc: "Autonomous state university status since 2021", icon: Library },
    { title: "NAAC Rating", value: "Grade A", desc: "CGPA 3.31 / 4.00 (Latest 2025 Cycle)", icon: ShieldCheck },
    { title: "NBA Accreditation", value: "10 Departments", desc: "CSE, ECE, EE, ME, CE, IT, CHE, BT, FT, AEIE", icon: Award },
    { title: "Collaborations", value: "300+ Industry", desc: "Proximity to Haldia's heavy industrial belt", icon: Globe },
    { title: "Residential Hostels", value: "14 Blocks", desc: "9 blocks (5 Boys + 4 Girls), capacity 1200+", icon: Building },
    { title: "Total Experience", value: "30 Years", desc: "Legacy of excellence (1996–2026)", icon: Trophy },
  ];

  const rankingList = [
    { body: "NIRF 2025", category: "Engineering Stream", rank: "#201–300" },
    { body: "NIRF 2024", category: "Engineering Stream", rank: "#201–300" },
    { body: "NIRF 2019", category: "Engineering Stream", rank: "#174 in India" },
    { body: "Outlook 2025", category: "Engineering Category", rank: "#100 in India" },
    { body: "IIRF 2025", category: "Engineering Stream", rank: "#275 in India" },
    { body: "IIRF 2025", category: "B.Tech Category", rank: "#112 in India" },
  ];

  const btechBranches = [
    { name: "Computer Science & Engineering (CSE)", duration: "4 Years", annualFee: "₹1,40,000", totalFee: "₹5.82 Lakhs" },
    { name: "CSE with AI & Machine Learning", duration: "4 Years", annualFee: "₹1,40,000", totalFee: "₹5.82 Lakhs" },
    { name: "CSE with Cyber Security", duration: "4 Years", annualFee: "₹1,40,000", totalFee: "₹5.82 Lakhs" },
    { name: "CSE with Data Science", duration: "4 Years", annualFee: "₹1,40,000", totalFee: "₹5.82 Lakhs" },
    { name: "Information Technology (IT)", duration: "4 Years", annualFee: "₹1,40,000", totalFee: "₹5.82 Lakhs" },
    { name: "Electronics & Communication Engg (ECE)", duration: "4 Years", annualFee: "₹1,40,000", totalFee: "₹7.52 Lakhs" },
    { name: "Applied Electronics & Instrumentation (AEIE)", duration: "4 Years", annualFee: "₹1,40,000", totalFee: "₹5.82 Lakhs" },
    { name: "Electrical Engineering (EE)", duration: "4 Years", annualFee: "₹1,40,000", totalFee: "₹5.82 Lakhs" },
    { name: "Mechanical Engineering (ME)", duration: "4 Years", annualFee: "₹1,40,000", totalFee: "₹5.82 Lakhs" },
    { name: "Civil Engineering (CE)", duration: "4 Years", annualFee: "₹1,40,000", totalFee: "₹5.82 Lakhs" },
    { name: "Chemical Engineering (CHE)", duration: "4 Years", annualFee: "₹1,40,000", totalFee: "₹5.82 Lakhs" },
    { name: "Biotechnology (BT)", duration: "4 Years", annualFee: "₹1,40,000", totalFee: "₹5.82 Lakhs" },
    { name: "Food Technology (FT)", duration: "4 Years", annualFee: "₹1,40,000", totalFee: "₹5.82 Lakhs" },
    { name: "Agricultural Engineering", duration: "4 Years", annualFee: "₹1,20,000", totalFee: "₹4.84 Lakhs" },
  ];

  const placementStats2024 = [
    { label: "Highest Package", value: "₹33.00 LPA", desc: "Top global software recruiter placement" },
    { label: "Median Annual Package", value: "₹5.00 LPA", desc: "Consistent median salaries in West Bengal" },
    { label: "B.Tech Students Placed", value: "1,105 Placed", desc: "Latest verified NIRF 2026 placements (2025 batch)" },
    { label: "Placement Rate (2024)", value: "89.48%", desc: "1,242 out of 1,378 eligible students placed" },
    { label: "Industry Partners", value: "300+ Active", desc: "Unmatched heavy engineering belt collaborations" },
    { label: "Active Internships", value: "95% Rate", desc: "1,423 out of 1,495 students secured internships" },
  ];

  const placementHistoryTable = [
    { year: "2021–22", placed: "~781", rate: "92%", median: "₹4.0 LPA", highest: "~₹20 LPA" },
    { year: "2022–23", placed: "1,114", rate: "91%", median: "₹5.0 LPA", highest: "₹26 LPA" },
    { year: "2023–24", placed: "1,084", rate: "89.48%", median: "₹5.0 LPA", highest: "₹33 LPA" },
    { year: "2024–25", placed: "1,105", rate: "~80%", median: "₹5.0 LPA", highest: "—" },
  ];

  const branchPlacementDetailed = [
    { name: "Mechanical Engineering (ME)", placed: "95%" },
    { name: "Civil Engineering (CE)", placed: "95%" },
    { name: "Food Technology (FT)", placed: "95%" },
    { name: "Computer Science & Engineering (CSE)", placed: "91%" },
    { name: "Electronics & Communication Engg (ECE)", placed: "91%" },
    { name: "Chemical Engineering (CHE)", placed: "89%" },
    { name: "Electrical Engineering (EE)", placed: "89%" },
    { name: "Information Technology (IT)", placed: "80%" },
    { name: "CSE (AI & ML)", placed: "87%" },
    { name: "CSE (Cyber Security)", placed: "89%" },
    { name: "CSE (Data Science)", placed: "89%" },
    { name: "Applied Electronics & Instrumentation (AEIE)", placed: "92%" },
    { name: "Biotechnology (BT)", placed: "86%" },
    { name: "MCA", placed: "72%" }
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
    { title: "Residential Hostels", desc: "14 secure separate hostels (5 Boys + 4 Girls in recent count) with 1,200+ capacity, AC/Non-AC options, and mess networks.", icon: Building },
    { title: "Aryabhatta Central Library", desc: "Massive library containing 50,000+ volumes, international research journals, digital catalogs, and reading zones.", icon: Library },
    { title: "Specialized Laboratories", desc: "50+ NBA-accredited high-end labs including VLSI, Robotics, Chemical Process, Biotech, and Food Technology.", icon: Zap },
    { title: "Solar Power Systems", desc: "Installed 2025 across all major blocks for a green, clean energy self-sustaining campus.", icon: Globe },
    { title: "Transportation Fleet", desc: "50+ buses covering 100+ routes, including a dedicated daily Kolkata shuttle for commutes.", icon: Compass },
    { title: "Sports Complex & Gym", desc: "Fully equipped fields and courts for cricket, football, basketball, and a modern workout gymnasium.", icon: Dribbble },
    { title: "24/7 Medical Centre", desc: "On-campus basic checkups and specialized emergency tie-ups with leading regional hospitals.", icon: HeartPulse },
    { title: "Campus-Wide Wi-Fi", desc: "Upgraded high-speed wireless connectivity covering all academic blocks, hostels, and libraries.", icon: Wifi }
  ];

  const specialAdvantages = [
    { title: "30 Years of Academic Trust", desc: "Oldest self-financed degree engineering college in West Bengal with a rich legacy from 1996 to 2026." },
    { title: "NAAC Grade 'A' Pioneers", desc: "First private engineering college in West Bengal to receive the prestigious NAAC Grade 'A' accreditation." },
    { title: "Highest NBA Accreditation Density", desc: "10 NBA-accredited programs, representing one of the highest accredited counts in any private college in WB." },
    { title: "Haldia Heavy Industrial Exposure", desc: "Located in Haldia Petrochemical & heavy industrial belt, giving core branches (Mechanical, Chemical, Civil) an unmatched internship advantage." },
    { title: "95% Verified Internship Rate", desc: "One of the highest placement preparation internship ratios (1,423 out of 1,495 students placed in pre-final years)." },
    { title: "Most Affordable Top Private College", desc: "Four-year B.Tech fee at ~₹5.82 Lakhs represents an incredibly high ROI compared to comparable accredited institutions." },
    { title: "State-of-the-Art 2026 Curriculum", desc: "Python programming has been fully integrated into the syllabus across all 16 engineering branches starting 2026 admissions." }
  ];

  const faqItems = [
    {
      q: "Is Haldia Institute of Technology autonomous?",
      a: "Yes, Haldia Institute of Technology (HIT), Haldia, has been granted autonomous status by the University Grants Commission (UGC) under Maulana Abul Kalam Azad University of Technology (MAKAUT) since 2021. This enables the college to maintain a highly contemporary, industry-aligned syllabus (such as integrating Python across all engineering branches for 2026)."
    },
    {
      q: "What is the highest package at HIT Haldia?",
      a: "The highest package secured at HIT Haldia has reached ₹33 LPA in recent placements. The median package offered stands steadily at ₹5 LPA. During the latest 2025 placement season, 1,105 B.Tech students out of 1,380 were successfully placed."
    },
    {
      q: "What are the B.Tech fee structures at HIT?",
      a: "For flagship branches (CSE, IT, ECE, EE, ME, Civil, CHE, Biotech), the annual fee is ~₹1,40,000, bringing the 4-year tuition total to ~₹5.82 Lakhs. The semester-wise breakdown is ₹1,91,700 for the first year (inclusive of hostels) and ₹1,64,000 for each subsequent year. For Agricultural Engineering, the total B.Tech fee is ~₹4.84 Lakhs."
    },
    {
      q: "Are separate hostel facilities available for out-of-state students?",
      a: "Yes. HIT Haldia is West Bengal's first fully residential private engineering college, featuring 14 distinct hostels (5 Boys + 4 Girls) with 1,200+ capacity. Standard hostel charges are ₹24,000/year, and AC hostels are available at ₹30,000/year. Mess charges are ₹3,000/month serving both veg and non-veg options."
    },
    {
      q: "Which entrance exams are accepted for B.Tech admission?",
      a: "80% of total seats are allocated through West Bengal Joint Entrance Examination (WBJEE) counseling, 10% through JEE Main ranks, and 10% are reserved under Management Quota for eligible board candidates. WBJEE CSE Round 2 closing cutoff ranks generally close around ~15,815, and IT closes around ~47,114."
    },
    {
      q: "What scholarships can I apply for at HIT?",
      a: "Students can apply for the state-sponsored Swami Vivekananda Merit-cum-Means (SVMCM) Scholarship, Tuition Fee Waiver (TFW) merit seats, and governmental minority/SC/ST scholarships."
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-amber-100 selection:text-amber-900">
      
      {/* Sticky Bottom Counselling Banner for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0c2340] border-t border-white/10 p-3 md:hidden flex justify-between items-center shadow-2xl">
        <div className="text-left">
          <span className="block text-[8px] font-sans font-black text-[#c5a880] uppercase tracking-wider">HIT Admission 2026</span>
          <span className="block text-xs font-serif font-bold text-white">Admissions Counseling Open</span>
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
            Haldia Institute of Technology (HIT), Haldia — 2026 Academic Showcase
          </p>
        </div>
      </div>

      {/* Cinematic Showcase Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0c2340] via-[#091b33] to-[#050f1e] text-white pt-24 pb-28 md:pt-32 md:pb-36 overflow-hidden">
        {/* Backdrop Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={campusHero}
            className="absolute inset-0 w-full h-full object-cover scale-105 transform transition-transform duration-1000 opacity-40"
            alt="Haldia Institute of Technology Campus Backdrop"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c2340] via-[#0c2340]/80 to-[#091b33]/60 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 relative z-20 max-w-7xl">
          <div className="max-w-4xl space-y-6">
            {/* Breadcrumb Navigation in Hero */}
            <nav className="inline-flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.2em] text-slate-300 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="text-amber-500 font-bold">/</span>
              <a href="/engineering" className="hover:text-white transition-colors">Colleges</a>
              <span className="text-amber-500 font-bold">/</span>
              <span className="text-amber-400">Haldia Institute of Technology (HIT)</span>
            </nav>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.1] text-white">
                Haldia Institute of Technology (HIT), Haldia
              </h1>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/10 border border-amber-400/30 rounded-lg">
                <Sparkles className="h-4 w-4 text-amber-400 shrink-0" />
                <span className="text-amber-300 font-serif font-bold italic text-xs sm:text-sm">
                  "Nurturing Technical Competence, Innovation & Ethical Values"
                </span>
              </div>

              <p className="text-slate-300 text-sm sm:text-lg font-sans font-medium leading-relaxed max-w-3xl">
                Comprehensive guide to B.Tech & PG admission at HIT Haldia. Check approved seat structures, fee breakdown, 33 LPA placement tables, NAAC 'A' rankings, and 2026 eligibility checklists.
              </p>
            </div>

            {/* Quick Stat Badges */}
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="text-[9px] font-sans font-bold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
                NAAC Grade A
              </span>
              <span className="text-[9px] font-sans font-bold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
                10 NBA Programs
              </span>
              <span className="text-[9px] font-sans font-bold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
                NIRF #201-300
              </span>
              <span className="text-[9px] font-sans font-bold uppercase tracking-wider bg-[#b8860b]/20 border border-[#b8860b]/40 text-amber-300 px-3.5 py-1.5 rounded-full">
                95% Internships
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
                <span className="block text-2xl md:text-3xl font-serif font-bold text-white leading-none">1996</span>
              </div>
              <div>
                <span className="block text-[10px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest leading-none mb-2">Accreditation</span>
                <span className="block text-2xl md:text-3xl font-serif font-bold text-white leading-none">NAAC A</span>
              </div>
              <div>
                <span className="block text-[10px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest leading-none mb-2">Campus Size</span>
                <span className="block text-2xl md:text-3xl font-serif font-bold text-white leading-none">37 Acres</span>
              </div>
              <div>
                <span className="block text-[10px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest leading-none mb-2">Peak Package</span>
                <span className="block text-2xl md:text-3xl font-serif font-bold text-white leading-none">₹33 LPA</span>
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

            {/* SECTION 1: ABOUT HIT HALDIA */}
            <section id="about-hit" ref={sectionsRef["about-hit"]} className="scroll-mt-28 bg-white py-4">
              <div className="grid md:grid-cols-12 gap-8 items-start border-b border-slate-100 pb-12">
                <div className="md:col-span-4">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c2340] border-l-4 border-[#c5a880] pl-4 tracking-tight leading-tight">
                    About HIT Haldia
                  </h2>
                </div>

                <div className="md:col-span-8 space-y-6 text-slate-600 text-sm md:text-base leading-relaxed font-sans font-medium">
                  <p>
                    Haldia Institute of Technology (HIT), Haldia, is West Bengal's oldest self-financed degree engineering college. Established in 1996 under the Indian Centre for Advancement of Research and Education (ICARE), it is recognized as a premier institution in Eastern India.
                  </p>
                  <p>
                    Spanning a massive fully residential campus of 37 acres, HIT is dedicated to providing cutting-edge technical education. The institute strategically benefits from its proximity to Haldia's major petrochemical and industrial hub, hosting over 300 active collaborations for student internships, placements, and research work.
                  </p>
                  <p>
                    Approved by the AICTE, accredited by NAAC (A Grade) and the NBA, and granted autonomous status under Maulana Abul Kalam Azad University of Technology (MAKAUT) since 2021, HIT Haldia is a benchmark of robust academic governance and consistent industry outputs.
                  </p>

                  {/* Campus Address Card */}
                  <div className="bg-[#FAF9F6] border border-slate-200/60 rounded-2xl p-5 space-y-3 shadow-sm text-xs font-sans text-slate-700 font-semibold mt-4">
                    <div>
                      <span className="block text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">Campus & Corporate Offices</span>
                      <p className="mt-1 flex gap-2 items-start text-slate-900 leading-relaxed font-sans">
                        <MapPin className="h-4.5 w-4.5 text-[#0c2340] shrink-0 mt-0.5" />
                        <span><strong>Campus Address:</strong> ICARE Complex, Hatiberia, Haldia, West Bengal – 721657</span>
                      </p>
                      <p className="mt-2 flex gap-2 items-start text-slate-900 leading-relaxed font-sans">
                        <Building2 className="h-4.5 w-4.5 text-[#0c2340] shrink-0 mt-0.5" />
                        <span><strong>Corporate Office:</strong> 54, Harish Mukherjee Road, Kolkata – 700025</span>
                      </p>
                    </div>
                    <div className="border-t border-slate-200/50 pt-2 flex justify-between items-center">
                      <div>
                        <span className="block text-[8px] font-sans font-extrabold text-slate-400 uppercase tracking-widest">Official Website</span>
                        <a href="https://www.hithaldia.ac.in" target="_blank" rel="noreferrer" className="text-[#0c2340] hover:underline font-bold text-xs mt-0.5 block flex items-center gap-1">
                          www.hithaldia.ac.in <ArrowUpRight className="h-3 w-3" />
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
                    As West Bengal's oldest private autonomous institution, HIT Haldia regularly scores top rankings across regional and national academic evaluations.
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
                    <span className="block text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">Official Regulatory Approvals</span>
                    <div className="flex flex-wrap gap-2.5">
                      {["NAAC Grade A (CGPA 3.31)", "10 NBA Accredited Branches", "AICTE Approved", "UGC Recognized", "MAKAUT Affiliation", "Autonomous Status"].map((badge, idx) => (
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
                      { id: "ug", title: "Undergraduate (UG) Programs", desc: "B.Tech, B.Tech Lateral & Him Streams" },
                      { id: "pg", title: "Postgraduate (PG) Programs", desc: "M.Tech, MBA & MCA Programs" },
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
                        <p className={`text-[10px] font-semibold leading-relaxed ${activeCourseCategory === cat.id ? "text-slate-350 text-slate-350" : "text-slate-500"}`}>{cat.desc}</p>
                      </button>
                    ))}
                  </div>

                  <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-slate-100 space-y-6">
                    {activeCourseCategory === "ug" ? (
                      <div className="space-y-4">
                        <h4 className="text-base font-serif font-bold text-[#0c2340]">Flagship B.Tech Streams — 4 Years</h4>
                        <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                          Offering 16 specialized engineering pathways including Computer Science specializations, IT, ECE, Biotechnology, Food Tech, and Agricultural Engg.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3 pt-2">
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50 shadow-sm flex flex-col justify-between">
                            <span className="text-xs font-serif font-bold text-[#0c2340] leading-snug">B.Tech Lateral Entry — 3 Years</span>
                            <span className="text-[9px] font-sans font-bold text-amber-600 uppercase tracking-wider mt-1.5">For Diploma Holders</span>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50 shadow-sm flex flex-col justify-between">
                            <span className="text-xs font-serif font-bold text-[#0c2340] leading-snug">Haldia Institute of Management (HIM)</span>
                            <span className="text-[9px] font-sans font-bold text-amber-600 uppercase tracking-wider mt-1.5">BHM / BOPT / BMS / BBM</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="text-base font-serif font-bold text-[#0c2340]">M.Tech (Master of Technology) — 2 Years</h4>
                          <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                            Offered across 7 structural specialisations. Highly focused on lab-based research dissertation projects.
                          </p>
                        </div>
                        <div className="border-t border-slate-200/50 pt-4 space-y-2">
                          <h4 className="text-base font-serif font-bold text-[#0c2340]">MBA (Master of Business Administration) — 2 Years</h4>
                          <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                            A highly reputed management degree with 4 specialisations, aligning students directly with core corporations and MNCs.
                          </p>
                        </div>
                        <div className="border-t border-slate-200/50 pt-4 space-y-2">
                          <h4 className="text-base font-serif font-bold text-[#0c2340]">MCA (Master of Computer Applications) — 2 Years</h4>
                          <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                            Advanced programming, database architectures, and next-gen software application pathways.
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
                    HIT Haldia offers 16 B.Tech branches at highly affordable tuition fees, delivering maximum ROI inside West Bengal's engineering domain.
                  </p>
                  
                  {/* Detailed fee breakdown cards */}
                  <div className="bg-[#FAF9F6] p-4 rounded-xl border border-slate-200 text-slate-700 text-xs font-sans font-semibold space-y-2.5">
                    <span className="block text-[8px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">Semester Fee Breakdown</span>
                    <p className="flex justify-between"><span>1st Year (With Hostel):</span> <strong className="text-slate-900">₹1,91,700</strong></p>
                    <p className="flex justify-between"><span>2nd/3rd/4th Year (With Hostel):</span> <strong className="text-slate-900">₹1,64,000 / yr</strong></p>
                    <div className="border-t border-slate-200/50 pt-2 text-slate-900">
                      <p className="flex justify-between font-bold"><span>Total (With Hostel):</span> <span>₹6,83,700</span></p>
                      <p className="flex justify-between font-bold"><span>Total (Without Hostel):</span> <span>₹5,82,700</span></p>
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
                            <th className="p-4">Annual Tuition</th>
                            <th className="p-4">4-Year Total</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-xs font-sans text-slate-700 font-semibold">
                          {btechBranches.map((branch, idx) => (
                            <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                              <td className="p-4 font-bold text-slate-900">{branch.name}</td>
                              <td className="p-4">{branch.duration}</td>
                              <td className="p-4">{branch.annualFee}</td>
                              <td className="p-4 text-[#0c2340] font-bold">{branch.totalFee}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* PG & Hostels Breakdown Card */}
                  <div className="bg-[#FAF9F6] border border-slate-200/50 rounded-2xl p-6 grid sm:grid-cols-2 gap-6">
                    <div>
                      <span className="block text-[8px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest mb-2.5">PG Course Fees (Total)</span>
                      <ul className="space-y-1.5 text-xs text-slate-700 font-semibold font-sans">
                        <li className="flex justify-between"><span>M.Tech Program:</span> <strong className="text-slate-900">₹1.76L – ₹2.24L</strong></li>
                        <li className="flex justify-between"><span>MBA Program:</span> <strong className="text-slate-900">₹3.10 Lakhs</strong></li>
                        <li className="flex justify-between"><span>MCA Program:</span> <strong className="text-slate-900">₹1.20L – ₹4.84L</strong></li>
                      </ul>
                    </div>
                    <div>
                      <span className="block text-[8px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest mb-2.5">Hostel & Mess Concessions</span>
                      <ul className="space-y-1.5 text-xs text-slate-700 font-semibold font-sans">
                        <li className="flex justify-between"><span>Standard Hostel:</span> <strong className="text-slate-900">₹24,000 / yr</strong></li>
                        <li className="flex justify-between"><span>Premium AC Hostel:</span> <strong className="text-slate-900">₹30,000 / yr</strong></li>
                        <li className="flex justify-between"><span>Hygienic Mess Rate:</span> <strong className="text-slate-900">₹3,000 / month</strong></li>
                      </ul>
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
                    <span className="block text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">B.Tech Admissions Checklist</span>
                    <ul className="space-y-2.5 text-xs font-semibold text-slate-700">
                      <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Passed Class 12 (10+2) with Physics, Chemistry, and Mathematics (PCM).</li>
                      <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Minimum 45% aggregate score in PCM (40% for SC/ST/OBC).</li>
                      <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Must be at least 17 years of age at the time of admission.</li>
                      <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Accepted Marks: WBJEE (80% seats) | JEE Main (10% seats) | 10% Management Quota.</li>
                    </ul>
                  </div>

                  {/* Cutoffs & Ranks Card */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-2xl border border-slate-200 flex flex-col justify-between hover:shadow-md transition-all">
                      <div>
                        <span className="block text-[8px] font-sans font-black text-slate-400 uppercase tracking-widest mb-1.5">WBJEE CSE Closing Rank (2025 R2)</span>
                        <span className="block text-2xl font-serif font-bold text-[#0c2340]">~15,815</span>
                      </div>
                      <span className="text-[10px] font-semibold text-slate-500 mt-2 block">High demand computer science branch</span>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-slate-200 flex flex-col justify-between hover:shadow-md transition-all">
                      <div>
                        <span className="block text-[8px] font-sans font-black text-slate-400 uppercase tracking-widest mb-1.5">WBJEE IT Closing Rank (2025 R2)</span>
                        <span className="block text-2xl font-serif font-bold text-[#0c2340]">~47,114</span>
                      </div>
                      <span className="text-[10px] font-semibold text-slate-500 mt-2 block">Strong IT program cutoff parameters</span>
                    </div>
                  </div>

                  {/* Lateral & PG credentials */}
                  <div className="bg-[#FAF9F6] border border-slate-200/50 rounded-2xl p-5 space-y-3 font-semibold text-xs text-slate-700">
                    <span className="block text-[8px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">Other Admissions Criteria</span>
                    <p className="flex justify-between"><span>B.Tech Lateral Entry:</span> <span className="text-slate-900 text-right">Engineering Diploma + JELET Rank</span></p>
                    <p className="border-t border-slate-200/50 pt-2 flex justify-between"><span>M.Tech Admissions:</span> <span className="text-slate-900 text-right">B.Tech/BE degree + GATE or WB PGET Rank</span></p>
                    <p className="border-t border-slate-200/50 pt-2 flex justify-between"><span>MBA Admissions:</span> <span className="text-slate-900 text-right">Graduation + JEMAT / MAT Rank</span></p>
                    <p className="border-t border-slate-200/50 pt-2 flex justify-between"><span>MCA Admissions:</span> <span className="text-slate-900 text-right">Bachelor's Degree with Maths + WB JECA Rank</span></p>
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
                    HIT Haldia's strategic position adjacent to Eastern India's heaviest petrochemical and oil refining industrial corridor translates to outstanding, consistent placements.
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
                    <h4 className="p-4 bg-slate-50 text-[#0c2340] font-serif font-bold text-xs uppercase border-b border-slate-200 tracking-wider">3-Year Placement Summary</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse min-w-[500px]">
                        <thead>
                          <tr className="bg-[#0c2340] text-white text-[9px] font-sans font-bold uppercase tracking-widest border-b border-slate-200">
                            <th className="p-4">Placement Year</th>
                            <th className="p-4">Students Placed</th>
                            <th className="p-4">Placement Rate</th>
                            <th className="p-4">Median Package</th>
                            <th className="p-4">Highest Package</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-xs font-sans text-slate-700 font-semibold">
                          {placementHistoryTable.map((hist, idx) => (
                            <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                              <td className="p-4 font-bold text-slate-900">{hist.year}</td>
                              <td className="p-4">{hist.placed}</td>
                              <td className="p-4 text-emerald-600 font-bold">{hist.rate}</td>
                              <td className="p-4">{hist.median}</td>
                              <td className="p-4 text-[#0c2340] font-bold">{hist.highest}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Branch-wise detailed placements */}
                  <div className="bg-[#FAF9F6] border border-slate-200/50 rounded-2xl p-6">
                    <span className="block text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest mb-4">Branch-Wise Placement Record (2024 Passout Batch)</span>
                    <div className="grid sm:grid-cols-2 gap-3.5 text-xs font-sans font-semibold text-slate-750">
                      {branchPlacementDetailed.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-white border border-slate-200 px-4 py-2.5 rounded-xl shadow-sm">
                          <span className="truncate max-w-[200px]">{item.name}</span>
                          <strong className="text-[#0c2340] shrink-0">{item.placed} Placed</strong>
                        </div>
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-550 block mt-4 font-sans font-medium text-slate-500">
                      *Note: Core engineering streams (Mechanical, Civil, Food Tech) achieved a peak placement rate of 95% due to direct alignments with Haldia Heavy Industrial Corridor.
                    </span>
                  </div>

                  {/* Recruiter Logos */}
                  <div className="space-y-4 pt-4">
                    <span className="block text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">Major Technical & Corporate Hiring Alliances</span>
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

            {/* SECTION 9: SPECIAL ADVANTAGES */}
            <section id="advantages" ref={sectionsRef["advantages"]} className="scroll-mt-28 bg-white py-4 border-b border-slate-100 pb-12">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c2340] border-l-4 border-[#c5a880] pl-4 tracking-tight leading-tight">
                    Special Advantages
                  </h2>
                </div>

                <div className="md:col-span-8 space-y-4">
                  {specialAdvantages.map((adv, idx) => (
                    <div key={idx} className="bg-white border border-slate-200/60 p-5 rounded-2xl flex gap-4 items-start shadow-sm hover:border-[#0c2340]/25 transition-all">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0c2340] text-white font-serif font-extrabold text-[10px] shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h4 className="text-sm font-serif font-bold text-[#0c2340] mb-1">{adv.title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed font-sans">{adv.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 10: FAQs */}
            <section id="faqs" ref={sectionsRef["faqs"]} className="scroll-mt-28 bg-white py-4 border-b border-slate-100 pb-12">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c2340] border-l-4 border-[#c5a880] pl-4 tracking-tight leading-tight">
                    Admission FAQs
                  </h2>
                  <p className="text-slate-500 text-xs font-semibold leading-relaxed font-sans pr-4">
                    Get answers to common queries regarding admissions checklists, actual fees, residential hostel availability, and counselling support at HIT Haldia.
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
                              <div className="p-4 border-t border-slate-200/60 text-xs sm:text-sm text-slate-550 leading-relaxed font-medium text-slate-500">
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
                          <Label htmlFor="hit-lead-name" className="text-[10px] font-black uppercase tracking-wider text-slate-400">Full Name *</Label>
                          <Input
                            id="hit-lead-name"
                            value={formData.name || ""}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="E.g. Shreyas Patel"
                            className="bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-amber-400 rounded-xl"
                          />
                          {errors.name && <span className="text-[10px] font-bold text-red-400 block mt-1">{errors.name}</span>}
                        </div>

                        {/* Phone Input */}
                        <div className="space-y-1">
                          <Label htmlFor="hit-lead-phone" className="text-[10px] font-black uppercase tracking-wider text-slate-400">Phone Number *</Label>
                          <Input
                            id="hit-lead-phone"
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
                          <Label htmlFor="hit-lead-email" className="text-[10px] font-black uppercase tracking-wider text-slate-400">Email Address (Optional)</Label>
                          <Input
                            id="hit-lead-email"
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
                            <Label htmlFor="hit-lead-state" className="text-[10px] font-black uppercase tracking-wider text-slate-400">State *</Label>
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
                            <Label htmlFor="hit-lead-course" className="text-[10px] font-black uppercase tracking-wider text-slate-400">Preferred Course *</Label>
                            <Select onValueChange={(val) => handleInputChange("course", val)}>
                              <SelectTrigger className="bg-slate-800 border-white/10 text-white placeholder:text-slate-600 rounded-xl text-xs font-semibold">
                                <SelectValue placeholder="Select Course" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-900 border-white/10 text-white text-xs font-semibold">
                                {["B.Tech CSE", "B.Tech CSE AI/ML", "B.Tech CSE Cyber/Data", "B.Tech IT / ECE", "B.Tech Core (ME/EE/CE)", "B.Tech CHE / BT / FT", "B.Tech Lateral Entry", "MCA / PG Program"].map((cs) => (
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
