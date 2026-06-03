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
const campusHero = "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHhw7wuopyfjQ9v3oRr7au7ojx4D_0py5G4hqdJnsNHa6By4ZvX_xwd18Hz2iHY-slvTgudMzAsAZNWSPdATKUQG-W7Rbo2EqD219rCbIJbUBH-Ueng4SX8hdRNGaNDs0b28FBU3w=s1360-w1360-h1020-rw";
import labImage from "@/assets/ramaiah-lab.jpg";

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

export default function MsRamaiahBangaloreAdmission2026() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("about-rit");
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
    "about-rit": useRef<HTMLElement>(null),
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
      const nameInput = document.getElementById("msrit-lead-name");
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
    googleFormData.append("entry.85122333", `MSRIT Bangalore Showcase - Preferred Course: ${parsed.data.course}`);

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
    { id: "about-rit", label: "Overview" },
    { id: "key-highlights", label: "Highlights" },
    { id: "rankings-accreditation", label: "Rankings" },
    { id: "courses-offered", label: "Courses" },
    { id: "btech-branches", label: "Branches & Fees" },
    { id: "admission-eligibility", label: "Eligibility" },
    { id: "placements", label: "Placements" },
    { id: "facilities", label: "Facilities" },
    { id: "advantages", label: "Why RIT" },
    { id: "faqs", label: "FAQs" },
  ] as const;

  const highlights = [
    { title: "Established Year", value: "1962", desc: "63+ Years of Technical Excellence", icon: Calendar },
    { title: "Governance status", value: "Autonomous", desc: "Granted full academic autonomy since 2007", icon: School },
    { title: "Campus Footprint", value: "221.41 Acres", desc: "Located at Yeshwantpur, heart of Bengaluru", icon: MapPin },
    { title: "Affiliated Board", value: "VTU", desc: "Affiliated to Visvesvaraya Technological University", icon: Library },
    { title: "NAAC Rating", value: "Grade A+", desc: "CGPA 3.28 credentials", icon: ShieldCheck },
    { title: "Admissions Options", value: "KCET / COMEDK", desc: "Plus dedicated Management Quotas", icon: FileText },
    { title: "Hiring base", value: "358 Companies", desc: "Goldman Sachs, Microsoft, Amazon & more", icon: Globe },
    { title: "Alumni Network", value: "35,000+", desc: "Global leaders holding MNC designations", icon: UserCheck },
    { title: "Highest Package", value: "₹58 LPA", desc: "Average package of ₹8.25 LPA (2025)", icon: Trophy },
  ];

  const rankingList = [
    { body: "NIRF 2025 (Engineering)", category: "Engineering Stream in India", rank: "#75" },
    { body: "NIRF 2025 (Architecture)", category: "Architecture Category", rank: "#31" },
    { body: "NIRF 2025 (Overall)", category: "Overall university band", rank: "#101–150" },
    { body: "NIRF 2024 (Engineering)", category: "Engineering Stream", rank: "#75" },
    { body: "NIRF 2023 (Engineering)", category: "Engineering Stream", rank: "#78" },
    { body: "Outlook-ICARE 2025", category: "Private Engineering Colleges", rank: "#8 in India" },
    { body: "India Today 2025", category: "Private Engineering stream", rank: "#24 in India" },
    { body: "Collegedunia 2026", category: "B.Tech rankings", rank: "#86 (India) / #5 (Bangalore)" },
  ];

  const btechBranches = [
    { name: "Computer Science & Engineering (CSE)", duration: "4 Years", kcetFee: "~₹1.30 Lakhs", comedkFee: "~₹3.30 Lakhs" },
    { name: "CSE with AI & Machine Learning", duration: "4 Years", kcetFee: "~₹1.30 Lakhs", comedkFee: "~₹3.30 Lakhs" },
    { name: "Information Science & Engineering (ISE)", duration: "4 Years", kcetFee: "~₹1.30 Lakhs", comedkFee: "~₹3.30 Lakhs" },
    { name: "Electronics & Communication (ECE)", duration: "4 Years", kcetFee: "~₹1.30 Lakhs", comedkFee: "~₹3.30 Lakhs" },
    { name: "Electrical & Electronics Engg (EEE)", duration: "4 Years", kcetFee: "~₹1.30 Lakhs", comedkFee: "~₹3.30 Lakhs" },
    { name: "Mechanical Engineering (ME)", duration: "4 Years", kcetFee: "~₹1.30 Lakhs", comedkFee: "~₹3.30 Lakhs" },
    { name: "Civil Engineering (CE)", duration: "4 Years", kcetFee: "~₹1.30 Lakhs", comedkFee: "~₹3.30 Lakhs" },
    { name: "Chemical Engineering (CHE)", duration: "4 Years", kcetFee: "~₹1.30 Lakhs", comedkFee: "~₹3.30 Lakhs" },
    { name: "Biotechnology (BT)", duration: "4 Years", kcetFee: "~₹1.30 Lakhs", comedkFee: "~₹3.30 Lakhs" },
    { name: "Industrial Engineering & Management", duration: "4 Years", kcetFee: "~₹1.30 Lakhs", comedkFee: "~₹3.30 Lakhs" },
    { name: "Medical Electronics", duration: "4 Years", kcetFee: "~₹1.30 Lakhs", comedkFee: "~₹3.30 Lakhs" },
    { name: "B.Arch", duration: "5 Years", kcetFee: "~₹1.30 Lakhs", comedkFee: "~₹3.30 Lakhs" },
  ];

  const placementStats2024 = [
    { label: "Highest Package (2025)", value: "₹58.00 LPA", desc: "Consistent top tier recruitment drives" },
    { label: "B.Tech Avg Package (2025)", value: "₹8.25 LPA", desc: "Among highest averages in South India" },
    { label: "B.Tech Median Package", value: "₹7.50 LPA", desc: "Verified via recent NIRF 2025 report" },
    { label: "Offers Made (2025)", value: "1,170 Offers", desc: "180 corporations visited on campus" },
    { label: "Placement Rate (2025)", value: "94–95%", desc: "B.Tech CSE/ISE and allied circuit peaks" },
    { label: "PG Median Package (NIRF)", value: "₹6.10 LPA", desc: "Consistent MBA/MCA/M.Tech outputs" },
  ];

  const placementHistoryTable = [
    { year: "2023", companies: "300+", offers: "1,700+", rate: "~92%", average: "₹7.00 LPA", highest: "₹64 LPA" },
    { year: "2024", companies: "300+", offers: "1,700+", rate: "95%", average: "₹7.66 LPA", highest: "₹50 LPA" },
    { year: "2025", companies: "180", offers: "1,170", rate: "94–95%", average: "₹8.25 LPA", highest: "₹58 LPA" },
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
    { title: "Yeshwantpur Campus", desc: "Beautiful 221-acre integrated academic blocks, smart lecture rooms, and highly advanced compute grids.", icon: Building },
    { title: "Central Library", desc: "Extensive collections of reference textbooks, national publications, and digital resources catalogs.", icon: Library },
    { title: "9 Hostels Blocks", desc: "7 separate secure hostels for boys and 2 for girls with premium mess networks (~₹1.2 Lakhs annually).", icon: School },
    { title: "Sports Complex", desc: "Fully equipped fields and courts for soccer, cricket, basketball, and a fit-out training gymnasium.", icon: Dribbble },
    { title: "Research & Innovation Wings", desc: "Research centers across 23 departments fostering patented technical startup projects.", icon: Globe },
    { title: "2 Canteens", desc: "Multi-purpose block canteens offering fresh, multi-cuisine meals at subsidized values.", icon: UserCheck },
    { title: "Campus-Wide Wi-Fi", desc: "Broadband network coverage across all academic blocks, lecture halls, and student lawns.", icon: Wifi },
    { title: "Central Transport", desc: "Located directly adjacent to Yeshwantpur BMTC networks (2 minutes walk to the gate).", icon: Compass }
  ];

  const specialAdvantages = [
    { title: "63+ Years of Engineering Legacy", desc: "One of South India's oldest and most prestigious private engineering colleges, established in 1962 by MS Ramaiah." },
    { title: "Consistently Top-Ranked NIRF #75", desc: "Consistently ranked among India's top 75 engineering institutions and ranked #2 private college in Bangalore." },
    { title: "Autonomous VTU Affiliation", desc: "Granted full academic autonomy since 2007, enabling RIT to continuously align its B.Tech curriculum with modern tech requirements." },
    { title: "Bangalore Location Advantage", desc: "Located at Yeshwantpur in the heart of Bangalore's IT hub, surrounded by tech centers (Wipro, Intel, ISRO)." },
    { title: "Outstanding Placement Records", desc: "Consistent 94-95% placements with ₹8.25 LPA average package and highest package hitting ₹58 LPA in 2025." },
    { title: "Huge Recruiter Portfolio Base", desc: "Over 358 recruiting corporations conducting active recruitment drives on campus (Goldman Sachs, JP Morgan, Microsoft)." },
    { title: "Robust 35,000+ Global Alumni Network", desc: "Over 35,000 engineering graduates now occupying executive leadership positions globally, providing active referrals." }
  ];

  const faqItems = [
    {
      q: "Is M.S. Ramaiah Institute of Technology autonomous?",
      a: "Yes. Ramaiah Institute of Technology (RIT), formerly MSRIT, was granted academic autonomy under Visvesvaraya Technological University (VTU) in 2007. This allows RIT to compile its own contemporary syllabus and conduct examinations."
    },
    {
      q: "What is the fee structure at Ramaiah for out-of-state students?",
      a: "For out-of-state students admitting via COMEDK UGET, the annual tuition fee is ~₹3.30 Lakhs, bringing the tuition total to ~₹13.20 Lakhs. Under the Management Quota, B.E. tuition fees are ₹4,75,975 per year plus a one-time development fee depending on branch demand."
    },
    {
      q: "What are the B.Tech admission eligibility criteria?",
      a: "Candidates must have passed Class 12 (10+2) with Physics and Mathematics as compulsory subjects + Chemistry/Computer Science, scoring a minimum of 45% in PCM aggregate (40% for reserved categories). Ranks are determined by KCET, COMEDK UGET, or JEE Main."
    },
    {
      q: "What are the COMEDK Cutoff ranks for CSE at MSRIT?",
      a: "For Computer Science & Engineering (CSE) at RIT Bangalore, the COMEDK Round 1 closing cutoff generally closes around ~Rank 875, while the KCET general Round 1 cutoff rank closes around ~Rank 1,100."
    },
    {
      q: "What is the placement record at RIT?",
      a: "RIT maintains a consistent 94–95% placement rate. The B.Tech average package is ₹8.25 LPA, with the highest package reaching ₹58 LPA in 2025. B.Tech median salary package is ₹7.50 LPA as verified by recent NIRF reports. Top recruiters include Goldman Sachs, JP Morgan, Microsoft, and Amazon."
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-amber-100 selection:text-amber-900">
      
      {/* Sticky Bottom Counselling Banner for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0c2340] border-t border-white/10 p-3 md:hidden flex justify-between items-center shadow-2xl">
        <div className="text-left">
          <span className="block text-[8px] font-sans font-black text-[#c5a880] uppercase tracking-wider">RIT Admission 2026</span>
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
            M.S. Ramaiah Institute of Technology (MSRIT), Bangalore — 2026 Academic Showcase
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
            alt="MSRIT University Bangalore Campus Backdrop"
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
              <span className="text-amber-400">RIT Bangalore</span>
            </nav>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.1] text-white">
                M.S. Ramaiah Institute of Technology (MSRIT)
              </h1>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/10 border border-amber-400/30 rounded-lg">
                <Sparkles className="h-4 w-4 text-amber-400 shrink-0" />
                <span className="text-amber-300 font-serif font-bold italic text-xs sm:text-sm">
                  "63+ Years of Engineering Legacy"
                </span>
              </div>

              <p className="text-slate-300 text-sm sm:text-lg font-sans font-medium leading-relaxed max-w-3xl">
                One of South India's oldest and most prestigious private autonomous engineering colleges. Explore KCET/COMEDK cutoffs, detailed fees matrices, 58 LPA placements history, and direct admissions support pathways.
              </p>
            </div>

            {/* Quick Stat Badges */}
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="text-[9px] font-sans font-bold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
                NAAC Grade A+
              </span>
              <span className="text-[9px] font-sans font-bold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
                Autonomous status
              </span>
              <span className="text-[9px] font-sans font-bold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
                NIRF Eng #75
              </span>
              <span className="text-[9px] font-sans font-bold uppercase tracking-wider bg-[#b8860b]/20 border border-[#b8860b]/40 text-amber-300 px-3.5 py-1.5 rounded-full">
                ₹8.25 LPA B.Tech Avg
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
                <span className="block text-2xl md:text-3xl font-serif font-bold text-white leading-none">1962</span>
              </div>
              <div>
                <span className="block text-[10px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest leading-none mb-2">Accreditation</span>
                <span className="block text-2xl md:text-3xl font-serif font-bold text-white leading-none">NAAC A+</span>
              </div>
              <div>
                <span className="block text-[10px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest leading-none mb-2">Total Graduates</span>
                <span className="block text-2xl md:text-3xl font-serif font-bold text-white leading-none">35,000+</span>
              </div>
              <div>
                <span className="block text-[10px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest leading-none mb-2">Peak Package</span>
                <span className="block text-2xl md:text-3xl font-serif font-bold text-white leading-none">₹58 LPA</span>
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

            {/* SECTION 1: ABOUT RIT BANGALORE */}
            <section id="about-rit" ref={sectionsRef["about-rit"]} className="scroll-mt-28 bg-white py-4">
              <div className="grid md:grid-cols-12 gap-8 items-start border-b border-slate-100 pb-12">
                <div className="md:col-span-4">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c2340] border-l-4 border-[#c5a880] pl-4 tracking-tight leading-tight">
                    About RIT Bangalore
                  </h2>
                </div>

                <div className="md:col-span-8 space-y-6 text-slate-650 text-sm md:text-base leading-relaxed font-sans font-medium text-slate-600">
                  <p>
                    Ramaiah Institute of Technology (RIT), formerly named M.S. Ramaiah Institute of Technology (MSRIT), is a highly prestigious private autonomous institution established in 1962 by late Dr. M.S. Ramaiah. Part of the Gokula Education Foundation (GEF), it spans a massive integrated campus of 221.41 acres in Yeshwantpur, Bengaluru.
                  </p>
                  <p>
                    Affiliated with Visvesvaraya Technological University (VTU) and granted full academic autonomy since 2007, RIT has been consistently ranked among the top private engineering colleges in the tech capital of India. Holding NAAC Grade A+ (CGPA 3.28) and NBA approvals, RIT consists of 23 departments offering 17 UG and 15 PG courses.
                  </p>
                  <p>
                    Over 63 years of technical excellence has produced 35,000+ engineering graduates occupying leading positions globally. Direct industry connections and proximity to major IT corridors make RIT Bangalore a premier gateway for B.Tech aspirants.
                  </p>

                  {/* Campus Address Card */}
                  <div className="bg-[#FAF9F6] border border-slate-200/60 rounded-2xl p-5 space-y-3 shadow-sm text-xs font-sans text-slate-700 font-semibold mt-4">
                    <div>
                      <span className="block text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">Campus Coordinates</span>
                      <p className="mt-1 flex gap-2 items-start text-slate-900 leading-relaxed font-sans">
                        <MapPin className="h-4.5 w-4.5 text-[#0c2340] shrink-0 mt-0.5" />
                        <span>MSR Nagar, Yeshwantpur, Bengaluru – 560054, Karnataka</span>
                      </p>
                    </div>
                    <div className="border-t border-slate-200/50 pt-2 flex justify-between items-center">
                      <div>
                        <span className="block text-[8px] font-sans font-extrabold text-slate-400 uppercase tracking-widest">Official Website</span>
                        <a href="https://www.msrit.edu" target="_blank" rel="noreferrer" className="text-[#0c2340] hover:underline font-bold text-xs mt-0.5 block flex items-center gap-1">
                          www.msrit.edu <ArrowUpRight className="h-3 w-3" />
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
                    Ramaiah Institute of Technology ranks strongly among top engineering and architectural stream benchmarks in India.
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
                      {["NAAC Grade A+ (CGPA 3.28)", "VTU Affiliated & Autonomous", "AICTE Approved", "UGC Recognized", "Multiple NBA Accreditations", "DSIR Approved"].map((badge, idx) => (
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
                      { id: "ug", title: "Undergraduate (UG)", desc: "B.E. (12 branches) & B.Arch" },
                      { id: "pg", title: "Postgraduate (PG)", desc: "M.Tech, MBA & MCA Programs" },
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
                        <h4 className="text-base font-serif font-bold text-[#0c2340]">B.E. programs — 4 Years</h4>
                        <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                          Offering 12 specialized autonomous engineering branches under Visvesvaraya Technological University (VTU) guidelines.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3 pt-2">
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50 shadow-sm flex flex-col justify-between">
                            <span className="text-xs font-serif font-bold text-[#0c2340] leading-snug">B.E. Lateral Entry — 3 Years</span>
                            <span className="text-[9px] font-sans font-bold text-amber-600 uppercase tracking-wider mt-1.5">For Diploma Holders via DCET</span>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50 shadow-sm flex flex-col justify-between">
                            <span className="text-xs font-serif font-bold text-[#0c2340] leading-snug">B.Arch — 5 Years</span>
                            <span className="text-[9px] font-sans font-bold text-amber-600 uppercase tracking-wider mt-1.5">Top-ranked architectural stream (#31 NIRF)</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="text-base font-serif font-bold text-[#0c2340]">MBA & MCA Programs — 2 Years</h4>
                          <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                            Consistent post-graduate placements featuring median packages of ₹6.10 LPA.
                          </p>
                        </div>
                        <div className="border-t border-slate-200/50 pt-4 space-y-2">
                          <h4 className="text-base font-serif font-bold text-[#0c2340]">M.Tech & PG Technical Courses</h4>
                          <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                            Offering 8 technical specialisations with deep corporate incubation modules.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 5: B.E. BRANCHES & FEE STRUCTURE */}
            <section id="btech-branches" ref={sectionsRef["btech-branches"]} className="scroll-mt-28 bg-white py-4 border-b border-slate-100 pb-12">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c2340] border-l-4 border-[#c5a880] pl-4 tracking-tight leading-tight">
                    B.E. Fee Structure
                  </h2>
                  <p className="text-slate-500 text-xs font-semibold leading-relaxed font-sans pr-4">
                    Tuition fees differ based on the entry pathway (KCET vs COMEDK vs Management Quotas).
                  </p>
                  
                  {/* Detailed fee breakdown cards */}
                  <div className="bg-[#FAF9F6] p-4 rounded-xl border border-slate-200 text-slate-700 text-xs font-sans font-semibold space-y-2.5">
                    <span className="block text-[8px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">Fees Parameters Checklist</span>
                    <p className="flex justify-between"><span>KCET Tuition (Annual):</span> <strong className="text-slate-900">~₹1.30 Lakhs</strong></p>
                    <p className="flex justify-between"><span>COMEDK Tuition (Annual):</span> <strong className="text-slate-900">~₹3.30 Lakhs</strong></p>
                    <p className="flex justify-between"><span>Hostel & Mess (Annual):</span> <strong className="text-slate-900">~₹1.20 Lakhs</strong></p>
                    <div className="border-t border-slate-200/50 pt-2 text-[#0c2340] font-bold">
                      <p className="flex justify-between"><span>Total (KCET route):</span> <span>~₹5.20 Lakhs</span></p>
                      <p className="flex justify-between"><span>Total (COMEDK route):</span> <span>~₹13.20 Lakhs</span></p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-8 space-y-6">
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse min-w-[500px]">
                        <thead>
                          <tr className="bg-[#0c2340] text-white text-[10px] font-sans font-bold uppercase tracking-widest border-b border-slate-200">
                            <th className="p-4">B.E. Engineering Branch</th>
                            <th className="p-4">KCET Annual Tuition</th>
                            <th className="p-4">COMEDK Annual Tuition</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-xs font-sans text-slate-700 font-semibold">
                          {btechBranches.map((branch, idx) => (
                            <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                              <td className="p-4 font-bold text-slate-900">{branch.name}</td>
                              <td className="p-4">{branch.kcetFee}</td>
                              <td className="p-4 text-[#0c2340] font-bold">{branch.comedkFee}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Management Quota Fee Card */}
                  <div className="bg-[#FAF9F6] border border-slate-200/50 rounded-2xl p-6">
                    <span className="block text-[8px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest mb-2.5">Management Quota Fee Matrix</span>
                    <ul className="space-y-2 text-xs text-slate-700 font-semibold font-sans">
                      <li className="flex justify-between"><span>Karnataka Candidates:</span> <strong className="text-slate-900">₹4,74,475 / yr</strong></li>
                      <li className="flex justify-between"><span>Non-Karnataka Candidates:</span> <strong className="text-slate-900">₹4,75,975 / yr</strong></li>
                      <li className="border-t border-slate-200/50 pt-2 text-[10px] text-slate-500 font-medium leading-relaxed">
                        *Note: Development fees vary based on branch demand. Contact SS Education for current details.
                      </li>
                    </ul>
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
                    <span className="block text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">B.E. Admissions Parameters</span>
                    <ul className="space-y-2.5 text-xs font-semibold text-slate-700">
                      <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Passed Class 12 (10+2) with Physics and Mathematics + Chemistry/Computer Science.</li>
                      <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Minimum 45% aggregate score in PCM (40% for reserved categories).</li>
                      <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Primary Entrance Pathways: KCET (Karnataka) | COMEDK UGET (All India).</li>
                    </ul>
                  </div>

                  {/* Cutoffs & Ranks Card */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-2xl border border-slate-200 hover:shadow-md transition-all flex flex-col justify-between">
                      <div>
                        <span className="block text-[8px] font-sans font-black text-slate-400 uppercase tracking-widest mb-1.5">COMEDK Round 1 Cutoff Rank (CSE)</span>
                        <span className="block text-2xl font-serif font-bold text-[#0c2340]">~875</span>
                      </div>
                      <span className="text-[10px] font-semibold text-slate-500 mt-2 block">Extremely competitive All India cutoffs</span>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-slate-200 hover:shadow-md transition-all flex flex-col justify-between">
                      <div>
                        <span className="block text-[8px] font-sans font-black text-slate-400 uppercase tracking-widest mb-1.5">KCET Round 1 Cutoff Rank (CSE)</span>
                        <span className="block text-2xl font-serif font-bold text-[#0c2340]">~1,100</span>
                      </div>
                      <span className="text-[10px] font-semibold text-slate-500 mt-2 block">For Karnataka domiciled candidates</span>
                    </div>
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
                    RIT's corporate placement ecosystem in Bangalore's Yeshwantpur tech hub is consistently strong, notably across Computer Science and allied fields.
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
                            <th className="p-4">Total Offers</th>
                            <th className="p-4">Placement Rate</th>
                            <th className="p-4">Avg Package</th>
                            <th className="p-4">Highest Package</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-xs font-sans text-slate-700 font-semibold">
                          {placementHistoryTable.map((hist, idx) => (
                            <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                              <td className="p-4 font-bold text-slate-900">{hist.year}</td>
                              <td className="p-4">{hist.companies}</td>
                              <td className="p-4">{hist.offers}</td>
                              <td className="p-4 text-emerald-600 font-bold">{hist.rate}</td>
                              <td className="p-4">{hist.average}</td>
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
                    Get quick answers to common queries regarding COMEDK cutoffs, management quotas, canteens, and hostels.
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
                          <Label htmlFor="msrit-lead-name" className="text-[10px] font-black uppercase tracking-wider text-slate-400">Full Name *</Label>
                          <Input
                            id="msrit-lead-name"
                            value={formData.name || ""}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="E.g. Shreyas Patel"
                            className="bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-amber-400 rounded-xl"
                          />
                          {errors.name && <span className="text-[10px] font-bold text-red-400 block mt-1">{errors.name}</span>}
                        </div>

                        {/* Phone Input */}
                        <div className="space-y-1">
                          <Label htmlFor="msrit-lead-phone" className="text-[10px] font-black uppercase tracking-wider text-slate-400">Phone Number *</Label>
                          <Input
                            id="msrit-lead-phone"
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
                          <Label htmlFor="msrit-lead-email" className="text-[10px] font-black uppercase tracking-wider text-slate-400">Email Address (Optional)</Label>
                          <Input
                            id="msrit-lead-email"
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
                            <Label htmlFor="msrit-lead-state" className="text-[10px] font-black uppercase tracking-wider text-slate-400">State *</Label>
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
                            <Label htmlFor="msrit-lead-course" className="text-[10px] font-black uppercase tracking-wider text-slate-400">Preferred Course *</Label>
                            <Select onValueChange={(val) => handleInputChange("course", val)}>
                              <SelectTrigger className="bg-slate-800 border-white/10 text-white placeholder:text-slate-600 rounded-xl text-xs font-semibold">
                                <SelectValue placeholder="Select Course" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-900 border-white/10 text-white text-xs font-semibold">
                                {["B.Tech CSE", "B.Tech CSE AI/ML", "B.Tech IT / ISE", "B.Tech Core (ME/EE/CE)", "B.Arch Program", "MBA / MCA Program"].map((cs) => (
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
