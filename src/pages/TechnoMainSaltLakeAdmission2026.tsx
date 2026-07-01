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
  Gift,
  Network
} from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useJsonLd } from "@/hooks/useJsonLd";
import { useSeo } from "@/hooks/useSeo";

// College campus image for high-end aesthetic
import campusHero from "@/assets/techno-campus.jpg";
import labImage from "@/assets/cs-lab.jpg";

// Recruiter Logos from assets folder
import axisBankLogo from "@/assets/partner-logos/Axis Bank p11.png";
import capgeminiLogo from "@/assets/partner-logos/Capgemini p5.jpg";
import eyLogo from "@/assets/partner-logos/EY p10.png";
import ibmLogo from "@/assets/partner-logos/IBM p8.png";
import kotakMahindraLogo from "@/assets/partner-logos/Kotak Mahindra p14.png";
import oracleLogo from "@/assets/partner-logos/Oracle p9.png";
import pwcLogo from "@/assets/partner-logos/PwC p6.png";
import relianceLogo from "@/assets/partner-logos/Reliance p13.png";
import tcsLogo from "@/assets/partner-logos/TCS p2.jpg";
import techMahindraLogo from "@/assets/partner-logos/Tech Mahindra p12.png";
import wiproLogo from "@/assets/partner-logos/Wipro p4.png";
import amazonLogo from "@/assets/partner-logos/amazon p1.png";
import cognizantLogo from "@/assets/partner-logos/cognizant p7.png";
import infosysLogo from "@/assets/partner-logos/infosys p3.png";

// Form Validation Schema
const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  email: z.string().trim().email("Enter a valid email address").max(120).optional().or(z.literal("")),
  state: z.string().min(1, "Select your state"),
  course: z.string().min(1, "Select preferred course"),
});

type FormDataType = z.infer<typeof leadFormSchema>;

export default function TechnoMainSaltLakeAdmission2026() {
  useSeo({
    title: "Techno Main Salt Lake (TMSL) B.Tech Admission 2026",
    description: "Get B.Tech Admission guidance for Techno Main Salt Lake (TMSL) Kolkata. Review placement records, fees, eligibility, and WBJEE cutoffs."
  });

  // Dynamic College, FAQ, and Breadcrumb Schema Markup
  useJsonLd({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/techno-main-salt-lake-tmsl-kolkata/#college",
        "name": "Techno Main Salt Lake (TMSL), Kolkata",
        "alternateName": "Techno Main Salt Lake",
        "url": "https://www.technomainsaltlake.ticollege.ac.in",
        "description": "Techno Main Salt Lake (TMSL) is a premier private engineering institute under the Techno India Group, located in the Sector V IT hub in Kolkata, West Bengal.",
        "logo": "https://www.ticollege.ac.in/images/logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "EM-4/1, Sector V, Salt Lake Electronics Complex",
          "addressLocality": "Kolkata",
          "addressRegion": "West Bengal",
          "postalCode": "700091",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ssadmission.in/techno-main-salt-lake-tmsl-kolkata/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Where is Techno Main Salt Lake (TMSL) located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "TMSL is located at EM-4/1, Sector V, Salt Lake Electronics Complex, Kolkata – 700091. Its premier location in Sector V is directly opposite the Wipro office, in the absolute heart of Kolkata's largest IT and tech hub."
            }
          },
          {
            "@type": "Question",
            "name": "What is the highest and average package at TMSL?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For the recent 2024 placement batch, the highest package reached an international offer exceeding ₹60 LPA (secured by a B.Tech CSE AI & ML student). The average B.Tech package for CSE and IT departments is consistently in the range of ₹6–7 LPA."
            }
          },
          {
            "@type": "Question",
            "name": "Is Techno Main Salt Lake affiliated to MAKAUT?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Techno Main Salt Lake is fully affiliated with Maulana Abul Kalam Azad University of Technology (MAKAUT), West Bengal. It is also approved by the All India Council for Technical Education (AICTE), UGC, and features multiple NBA accredited departments."
            }
          },
          {
            "@type": "Question",
            "name": "What is the fee structure for B.Tech CSE at TMSL?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The total fee for B.Tech CSE is ₹4.84 Lakhs over 4 years. The B.Tech CSE with AI & ML fee is ₹6.05 Lakhs. Semester fees are ₹97,500 for the 1st semester, ₹95,000 for the 2nd semester, and ₹87,500 per semester from the 3rd semester onwards."
            }
          },
          {
            "@type": "Question",
            "name": "What scholarships are available at TMSL?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Up to 100% tuition fee scholarships are available based on outstanding academic marks and extracurricular records. Top rankers in WBJEE or JEE Main can secure specialized merit concessions. Additionally, government scholarships like the Swami Vivekananda Merit-cum-Means (SVMCM) scholarship are fully supported."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ssadmission.in/techno-main-salt-lake-tmsl-kolkata/#breadcrumb",
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
            "name": "Techno Main Salt Lake B.Tech Admission 2026",
            "item": "https://ssadmission.in/techno-main-salt-lake-tmsl-kolkata"
          }
        ]
      }
    ]
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("about-tmsl");
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
    "about-tmsl": useRef<HTMLElement>(null),
    "key-highlights": useRef<HTMLElement>(null),
    "rankings-accreditation": useRef<HTMLElement>(null),
    "courses-offered": useRef<HTMLElement>(null),
    "btech-branches": useRef<HTMLElement>(null),
    "admission-eligibility": useRef<HTMLElement>(null),
    "placements": useRef<HTMLElement>(null),
    "facilities": useRef<HTMLElement>(null),
    "location-advantage": useRef<HTMLElement>(null),
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
      const nameInput = document.getElementById("tmsl-lead-name");
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
    googleFormData.append("entry.85122333", `Techno Main Salt Lake Showcase - Preferred Course: ${parsed.data.course}`);

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
    { id: "about-tmsl", label: "Overview" },
    { id: "key-highlights", label: "Highlights" },
    { id: "rankings-accreditation", label: "Rankings" },
    { id: "courses-offered", label: "Courses" },
    { id: "btech-branches", label: "Branches & Fees" },
    { id: "admission-eligibility", label: "Eligibility" },
    { id: "placements", label: "Placements" },
    { id: "facilities", label: "Facilities" },
    { id: "location-advantage", label: "IT Hub Advantage" },
    { id: "faqs", label: "FAQs" },
  ] as const;

  const highlights = [
    { title: "Established Year", value: "2001", desc: "Two decades of technical education excellence", icon: Calendar },
    { title: "Educational Umbrella", value: "Techno India Group", desc: "Largest education group in Eastern India", icon: Building2 },
    { title: "Affiliated Board", value: "MAKAUT", desc: "Approved by AICTE and UGC recognized", icon: Library },
    { title: "Campus Location", value: "Sector V", desc: "Located in the prime IT Hub of Kolkata", icon: MapPin },
    { title: "Placement Rate", value: "~98%", desc: "Outstanding placement rate (2024 batch)", icon: TrendingUp },
    { title: "Rankings", value: "#45 Times", desc: "Ranked among top business courses 2025", icon: Trophy },
  ];

  const rankingList = [
    { agency: "Times Ranking 2025", category: "Management Stream", rank: "#45 in India" },
    { agency: "India Today 2025", category: "BCA Stream", rank: "#119 in India" },
    { agency: "India Today 2024", category: "Computer Applications", rank: "#103 in India" },
    { agency: "Collegedunia 2025", category: "B.Tech Stream", rank: "#284 out of 500" },
    { agency: "WBJEE Cutoff 2025", category: "CSE General Opening Rank", rank: "~5,018" },
  ];

  const btechBranches = [
    { name: "Computer Science & Engineering (CSE)", duration: "4 Years", fees: "₹4.84 Lakhs" },
    { name: "CSE with AI & Machine Learning", duration: "4 Years", fees: "₹6.05 Lakhs" },
    { name: "Information Technology (IT)", duration: "4 Years", fees: "₹4.84 Lakhs" },
    { name: "Electronics & Communication Engineering (ECE)", duration: "4 Years", fees: "₹4.84 Lakhs" },
    { name: "Electrical Engineering (EE)", duration: "4 Years", fees: "₹4.02 Lakhs" },
    { name: "Civil Engineering (CE)", duration: "4 Years", fees: "₹4.02 Lakhs" },
    { name: "Mechanical Engineering (ME)", duration: "4 Years", fees: "₹4.02 Lakhs" },
  ];

  const placementStats2024 = [
    { label: "Highest Package", value: "₹60 LPA+", desc: "International offer for CSE AI & ML" },
    { label: "CSE/IT Average Package", value: "₹6–7 LPA", desc: "Consistent departmental placement values" },
    { label: "Total Students Placed", value: "878 Placed", desc: "Out of 895 registered candidates" },
    { label: "Placement Rate", value: "~98%", desc: "High density success outcomes" },
    { label: "Recruiter Proximity", value: "53+ MNCs", desc: "Annual formal campus recruiters" },
  ];

  const placementHistoryTable = [
    { year: "2022", registered: "~750", placed: "~620", rate: "~83%", avgPackage: "₹4.0 LPA", highest: "₹16 LPA" },
    { year: "2023", registered: "948", placed: "657", rate: "69.30%", avgPackage: "₹4–5 LPA", highest: "₹21 LPA" },
    { year: "2024", registered: "895", placed: "878", rate: "~98%", avgPackage: "₹6–7 LPA", highest: "₹60 LPA+" },
  ];

  const branchPlacements = [
    { branch: "Computer Science & Engineering (CSE)", rate: "90–98%", remarks: "Best placed branch; top packages from Amazon, Google, Microsoft" },
    { branch: "Information Technology (IT)", rate: "90–95%", remarks: "Strong placement; mass recruiters TCS, Cognizant, Wipro" },
    { branch: "CSE (AI & ML)", rate: "93%+", remarks: "International offers up to ₹60 LPA" },
    { branch: "Electronics & Comm. (ECE)", rate: "80–85%", remarks: "Good for IT + core roles" },
    { branch: "EE / ME / CE (Core)", rate: "65–75%", remarks: "Moderate; stronger placements in core manufacturing" },
  ];

  const recruiters = [
    { name: "Amazon", logo: amazonLogo },
    { name: "TCS", logo: tcsLogo },
    { name: "Infosys", logo: infosysLogo },
    { name: "Wipro", logo: wiproLogo },
    { name: "Cognizant", logo: cognizantLogo },
    { name: "Capgemini", logo: capgeminiLogo },
    { name: "PwC", logo: pwcLogo },
    { name: "IBM", logo: ibmLogo },
    { name: "Oracle", logo: oracleLogo },
    { name: "EY", logo: eyLogo },
    { name: "Axis Bank", logo: axisBankLogo },
    { name: "Tech Mahindra", logo: techMahindraLogo },
    { name: "Reliance", logo: relianceLogo },
    { name: "Kotak Mahindra", logo: kotakMahindraLogo }
  ];

  const facilities = [
    { title: "Smart Classrooms", desc: "Smart boards and technology-enabled spaces to foster structural teaching-learning formats.", icon: Library },
    { title: "Modern AC Computer Labs", desc: "Equipped with high-performance machines and software matrices, fully air-conditioned.", icon: Wifi },
    { title: "Central Digital Library", desc: "Equipped with digital book banks, international research journals, and reprographic facilities.", icon: BookOpen },
    { title: "Sports Complex", desc: "Two full-sized grounds alongside indoor sport options for physical fitness.", icon: Dribbble },
    { title: "Cafeteria & Canteen", desc: "Multi-cuisine, pocket-friendly food counters including a highly popular dedicated biryani counter!", icon: Check },
    { title: "Incubation & Innovation Cell", desc: "Active startup development grids operated under the institutional Innovation Council.", icon: Globe },
    { title: "Auditorium", desc: "Equipped with state-of-the-art acoustics and screen controls for conferences and fests.", icon: Building },
    { title: "Prime Sector V Location", desc: "Situated opposite Wipro in the middle of Kolkata's IT Hub. Close to Sector V metro.", icon: MapPin }
  ];

  const placementEligibility = [
    "Students become eligible from their 6th semester onwards.",
    "Major campus recruitment drives happen during the 7th and 8th semesters.",
    "Minimum CGPA requirements range from 7.0 to 8.0, depending on the recruiting company.",
    "Candidates must clear any active academic backlogs.",
    "Selection Process workflow: Written Aptitude test ➔ Technical Coding test ➔ Technical Interview rounds ➔ Final HR panel evaluations."
  ];

  const faqItems = [
    {
      q: "Where is Techno Main Salt Lake (TMSL) located?",
      a: "TMSL is located at EM-4/1, Sector V, Salt Lake Electronics Complex, Kolkata – 700091. Its premier location in Sector V is directly opposite the Wipro office, in the absolute heart of Kolkata's largest IT and tech hub."
    },
    {
      q: "What is the highest and average package at TMSL?",
      a: "For the recent 2024 placement batch, the highest package reached an international offer exceeding ₹60 LPA (secured by a B.Tech CSE AI & ML student). The average B.Tech package for CSE and IT departments is consistently in the range of ₹6–7 LPA."
    },
    {
      q: "Is Techno Main Salt Lake affiliated to MAKAUT?",
      a: "Yes, Techno Main Salt Lake is fully affiliated with Maulana Abul Kalam Azad University of Technology (MAKAUT), West Bengal. It is also approved by the All India Council for Technical Education (AICTE), UGC, and features multiple NBA accredited departments."
    },
    {
      q: "What is the fee structure for B.Tech CSE at TMSL?",
      a: "The total fee for B.Tech CSE is ₹4.84 Lakhs over 4 years. The B.Tech CSE with AI & ML fee is ₹6.05 Lakhs. Semester fees are ₹97,500 for the 1st semester, ₹95,000 for the 2nd semester, and ₹87,500 per semester from the 3rd semester onwards."
    },
    {
      q: "What scholarships are available at TMSL?",
      a: "Up to 100% tuition fee scholarships are available based on outstanding academic marks and extracurricular records. Top rankers in WBJEE or JEE Main can secure specialized merit concessions. Additionally, government scholarships like the Swami Vivekananda Merit-cum-Means (SVMCM) scholarship are fully supported."
    },
    {
      q: "Are student Wi-Fi connections provided on campus?",
      a: "Campus Wi-Fi connectivity is currently fully active for faculty members; student access is limited. Students rely on mobile data packs or internet networks available at nearby PG housing blocks and apartments surrounding Sector V."
    }
  ];

  const relatedGuides = [
    { title: "Top Private Engineering Colleges in Salt Lake", desc: "A comparative structural review of Sector V engineering options including TMSL, IEM, and UEM based on ROI and locations.", link: "#" },
    { title: "How to Secure Off-Campus Placement in Sector V", desc: "Walk-in placement guides, resume keywords, and strategies to secure interviews at tech giants surrounding the TMSL campus.", link: "#" },
    { title: "MAKAUT Academic Syllabus & Branch Guides", desc: "Detailed breakdown of CSE with AI & ML vs traditional CSE branches under Maulana Abul Kalam Azad University.", link: "#" },
    { title: "WBJEE Choice Filling Checklist for Top Rankers", desc: "Ensure your option entry is perfectly structured to secure highly sought-after branches during counseling rounds.", link: "#" }
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-amber-100 selection:text-amber-900">
      
      {/* Sticky Bottom Counselling Banner for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0c2340] border-t border-white/10 p-3 md:hidden flex justify-between items-center shadow-2xl">
        <div className="text-left">
          <span className="block text-[8px] font-sans font-black text-[#c5a880] uppercase tracking-wider">TMSL Admission 2026</span>
          <span className="block text-xs font-serif font-bold text-white">Free Counselling Open</span>
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
            Techno Main Salt Lake (TMSL), Kolkata — 2026 Academic Showcase
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
            alt="Techno Main Salt Lake Campus Backdrop"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c2340] via-[#0c2340]/80 to-[#091b33]/60 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 relative z-20 max-w-7xl">
          <div className="max-w-4xl space-y-6">
            {/* Breadcrumb Navigation in Hero */}
            <nav className="inline-flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.2em] text-slate-350 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="text-amber-500 font-bold">/</span>
              <a href="/engineering" className="hover:text-white transition-colors">Colleges</a>
              <span className="text-amber-500 font-bold">/</span>
              <span className="text-amber-400">Techno Main Salt Lake (TMSL), Kolkata</span>
            </nav>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.1] text-white">
                Techno Main Salt Lake (TMSL), Kolkata
              </h1>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/10 border border-amber-400/30 rounded-lg">
                <Sparkles className="h-4 w-4 text-amber-400 shrink-0" />
                <span className="text-amber-300 font-serif font-bold italic text-xs sm:text-sm">
                  "Excellence in Engineering & Innovation"
                </span>
              </div>

              <p className="text-slate-300 text-sm sm:text-lg font-sans font-medium leading-relaxed max-w-3xl">
                Comprehensive informational guide to Techno Main Salt Lake (TMSL), Kolkata. Explore accredited B.Tech branches, actual course fee structures, admission cutoffs, verified ₹60 LPA packages, and free counseling assistance.
              </p>
            </div>

            {/* Quick Stat Badges */}
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="text-[9px] font-sans font-bold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
                AICTE & UGC Approved
              </span>
              <span className="text-[9px] font-sans font-bold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
                MAKAUT Affiliated
              </span>
              <span className="text-[9px] font-sans font-bold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
                NAAC | NBA Accredited
              </span>
              <span className="text-[9px] font-sans font-bold uppercase tracking-wider bg-[#b8860b]/20 border border-[#b8860b]/40 text-amber-300 px-3.5 py-1.5 rounded-full">
                ~98% Placements
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
                <span className="block text-2xl md:text-3xl font-serif font-bold text-white leading-none">2001</span>
              </div>
              <div>
                <span className="block text-[10px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest leading-none mb-2">Placement Rate</span>
                <span className="block text-2xl md:text-3xl font-serif font-bold text-white leading-none">~98%</span>
              </div>
              <div>
                <span className="block text-[10px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest leading-none mb-2">IT Hub Presence</span>
                <span className="block text-2xl md:text-3xl font-serif font-bold text-white leading-none">Sector V</span>
              </div>
              <div>
                <span className="block text-[10px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest leading-none mb-2">Peak Package</span>
                <span className="block text-2xl md:text-3xl font-serif font-bold text-white leading-none">₹60 LPA+</span>
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

            {/* SECTION 1: ABOUT TMSL */}
            <section id="about-tmsl" ref={sectionsRef["about-tmsl"]} className="scroll-mt-28 bg-white py-4">
              <div className="grid md:grid-cols-12 gap-8 items-start border-b border-slate-100 pb-12">
                <div className="md:col-span-4">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c2340] border-l-4 border-[#c5a880] pl-4 tracking-tight leading-tight">
                    About Techno Main
                  </h2>
                </div>

                <div className="md:col-span-8 space-y-6 text-slate-650 text-sm md:text-base leading-relaxed font-sans font-medium text-slate-600">
                  <p>
                    Techno Main Salt Lake (TMSL) is one of the premier private engineering institutions in Kolkata, West Bengal, globally recognized for its rigorous academic curriculum, modern research framework, and high corporate recruitment indices. Established in 2001, the college operates under the prestigious Techno India Group, the largest educational conglomerate in Eastern India.
                  </p>
                  <p>
                    Situated in the prime IT epicenter of Kolkata — Sector V, Salt Lake, directly opposite Wipro — the urban 3-acre campus attracts top technical minds. TMSL offers state-of-the-art virtual laboratories, flipped collaborative classrooms, and experienced faculties to prepare candidates for competitive worldwide tech careers.
                  </p>
                  <p>
                    The institute is fully affiliated to Maulana Abul Kalam Azad University of Technology (MAKAUT), approved by AICTE, and UGC recognized. Additionally, the college has established an active Innovation Council to nurture student start-up incubation, creative research, and entrepreneurial ventures to solve real-world industry problems.
                  </p>

                  {/* Campus Address Card */}
                  <div className="bg-[#FAF9F6] border border-slate-200/60 rounded-2xl p-5 space-y-3 shadow-sm text-xs font-sans text-slate-700 font-semibold mt-4">
                    <div>
                      <span className="block text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">Campus Address</span>
                      <p className="mt-1 flex gap-2 items-start text-slate-900 leading-relaxed font-sans">
                        <MapPin className="h-4.5 w-4.5 text-[#0c2340] shrink-0 mt-0.5" />
                        <span>EM-4/1, Sector V, Salt Lake Electronics Complex, Kolkata – 700091, West Bengal</span>
                      </p>
                    </div>
                    <div className="border-t border-slate-200/50 pt-2 flex justify-between items-center">
                      <div>
                        <span className="block text-[8px] font-sans font-extrabold text-slate-400 uppercase tracking-widest">Official Website</span>
                        <a href="https://www.technomainsaltlake.ticollege.ac.in" target="_blank" rel="noreferrer" className="text-[#0c2340] hover:underline font-bold text-xs mt-0.5 block flex items-center gap-1">
                          www.technomainsaltlake.ticollege.ac.in <ArrowUpRight className="h-3 w-3" />
                        </a>
                      </div>
                      <div className="border-l border-slate-200 pl-4">
                        <span className="block text-[8px] font-sans font-extrabold text-slate-400 uppercase tracking-widest">Group website</span>
                        <a href="https://www.ticollege.ac.in" target="_blank" rel="noreferrer" className="text-[#0c2340] hover:underline font-bold text-xs mt-0.5 block flex items-center gap-1">
                          www.ticollege.ac.in <ArrowUpRight className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 2: STAT CARDS GRID */}
            <section id="key-highlights" ref={sectionsRef["key-highlights"]} className="scroll-mt-28 bg-white py-4 border-b border-slate-100 pb-12">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c2340] border-l-4 border-[#c5a880] pl-4 tracking-tight leading-tight">
                    Key Highlights
                  </h2>
                </div>

                <div className="md:col-span-8">
                  {/* Highlights Grid of 6 */}
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
                    Techno Main Salt Lake holds highly competitive rankings for technical, computing, and management domains in West Bengal.
                  </p>
                </div>

                <div className="md:col-span-8 space-y-8">
                  {/* Rankings Table */}
                  <div className="bg-white border border-slate-250 rounded-2xl overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse min-w-[500px]">
                        <thead>
                          <tr className="bg-[#0c2340] text-white text-[10px] font-sans font-bold uppercase tracking-widest border-b border-slate-200">
                            <th className="p-4">Ranking Body</th>
                            <th className="p-4">Category</th>
                            <th className="p-4">Rank / Cutoff</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-xs font-sans text-slate-700 font-semibold">
                          {rankingList.map((rankItem, idx) => (
                            <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                              <td className="p-4 font-bold text-slate-900">{rankItem.agency}</td>
                              <td className="p-4">{rankItem.category}</td>
                              <td className="p-4 text-[#0c2340] font-bold">{rankItem.rank}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Standalone NIRF Disclaimer */}
                  <div className="bg-slate-50 border border-slate-200/50 p-4.5 rounded-xl space-y-1">
                    <span className="block text-[8px] font-sans font-black text-slate-400 uppercase tracking-widest">RANKING CONTEXT</span>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-sans font-semibold">
                      * Note: TMSL does not appear in the NIRF Engineering ranked list as a standalone entry. It operates under the parent **Techno India Group** umbrella. For national ranking, the Times 2025 and India Today 2024–25 data above represent the most current standalone indicators.
                    </p>
                  </div>

                  {/* Accreditations badges */}
                  <div className="bg-[#FAF9F6] border border-slate-200/50 rounded-2xl p-6 space-y-4">
                    <span className="block text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest font-sans">Accreditation status</span>
                    <div className="flex flex-wrap gap-2.5">
                      {["AICTE Approved", "NBA Accredited Departments", "MAKAUT Affiliated", "UGC Recognized", "NAAC Accredited"].map((badge, idx) => (
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
                  {/* Category Selection Tabs */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { id: "ug", title: "Undergraduate (UG) Programs", desc: "B.Tech, BBA, BCA, BHM & B.Sc" },
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
                        <p className={`text-[10px] font-semibold leading-relaxed ${activeCourseCategory === cat.id ? "text-slate-300" : "text-slate-500"}`}>{cat.desc}</p>
                      </button>
                    ))}
                  </div>

                  {/* Course Details Panel */}
                  <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-slate-100 space-y-6">
                    {activeCourseCategory === "ug" ? (
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <h4 className="text-base font-serif font-bold text-[#0c2340]">B.Tech (Bachelor of Technology) — 4 Years</h4>
                          <p className="text-slate-500 text-xs font-semibold leading-relaxed font-sans">
                            Flagship technical engineering programs featuring AC computer centers, modern labs, and excellent off-campus walk-in proximity inside Sector V IT hub. Specialisations available in multiple streams.
                          </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-3 pt-2">
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50 shadow-sm flex flex-col justify-between">
                            <span className="text-xs font-serif font-bold text-[#0c2340] leading-snug">B.Tech Lateral Entry — 3 Years</span>
                            <span className="text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-wider mt-1.5">For Diploma Holders</span>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50 shadow-sm flex flex-col justify-between">
                            <span className="text-xs font-serif font-bold text-[#0c2340] leading-snug">BCA (Bachelor of Computer Applications)</span>
                            <span className="text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-wider mt-1.5">India Today Ranked</span>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50 shadow-sm flex flex-col justify-between">
                            <span className="text-xs font-serif font-bold text-[#0c2340] leading-snug">BBA (Bachelor of Business Admin)</span>
                            <span className="text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-wider mt-1.5">Management core</span>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50 shadow-sm flex flex-col justify-between">
                            <span className="text-xs font-serif font-bold text-[#0c2340] leading-snug">BHM (Bachelor of Hotel Management)</span>
                            <span className="text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-wider mt-1.5">Hospitality training</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <h4 className="text-base font-serif font-bold text-[#0c2340]">M.Tech (Master of Technology) — 2 Years</h4>
                            <p className="text-slate-500 text-xs font-semibold leading-relaxed font-sans">
                              Offered across major streams: Computer Science & Engineering (CSE), Electronics & Communication (ECE), VLSI Design, and Structural Engineering.
                            </p>
                          </div>
                          
                          <div className="border-t border-slate-200/50 pt-4 space-y-2">
                            <h4 className="text-base font-serif font-bold text-[#0c2340]">MBA (Master of Business Administration) — 2 Years</h4>
                            <p className="text-slate-500 text-xs font-semibold leading-relaxed font-sans">
                              Highly accredited dual-specialization business management programs. Ranked #45 nationally in Times 2025.
                            </p>
                          </div>

                          <div className="border-t border-slate-200/50 pt-4 space-y-2">
                            <h4 className="text-base font-serif font-bold text-[#0c2340]">MCA (Master of Computer Applications) — 2 Years</h4>
                            <p className="text-slate-500 text-xs font-semibold leading-relaxed font-sans">
                              Advanced training in cloud paradigms, software construction, enterprise networking, and artificial intelligence databases.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 5: B.TECH BRANCHES & FEES */}
            <section id="btech-branches" ref={sectionsRef["btech-branches"]} className="scroll-mt-28 bg-white py-4 border-b border-slate-100 pb-12">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c2340] border-l-4 border-[#c5a880] pl-4 tracking-tight leading-tight">
                    B.Tech Branches & Fees
                  </h2>
                  <p className="text-slate-500 text-xs font-semibold leading-relaxed font-sans pr-4">
                    Detailed index of B.Tech branches available at Techno Main Salt Lake with actual course fees and semester payment breakdowns.
                  </p>
                  
                  <div className="bg-[#FAF9F6] border border-slate-200/50 rounded-2xl p-5 text-xs font-sans text-slate-700 font-semibold space-y-3">
                    <div>
                      <span className="block text-[8px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">Semester Installments</span>
                      <span className="text-xs text-slate-900 mt-1 block leading-relaxed">
                        • 1st Semester: <strong>₹97,500</strong> <br />
                        • 2nd Semester: <strong>₹95,000</strong> <br />
                        • 3rd Sem onwards: <strong>₹87,500 / sem</strong>
                      </span>
                    </div>
                    <div className="border-t border-slate-200/50 pt-2">
                      <span className="block text-[8px] font-sans font-extrabold text-slate-400 uppercase tracking-widest">Scholarships Concessions</span>
                      <p className="text-slate-650 mt-0.5 font-bold">₹30,000 – ₹40,000 concessions applicable annually based on eligibility.</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-8 space-y-8">
                  {/* B.Tech Branches List */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {btechBranches.map((branch, idx) => (
                      <div key={idx} className="bg-white border border-slate-200/60 p-5 rounded-2xl shadow-sm hover:border-[#c5a880]/30 transition-all flex flex-col justify-between">
                        <div className="space-y-1">
                          <h4 className="text-xs font-serif font-black text-[#0c2340] leading-snug">{branch.name}</h4>
                          <span className="block text-[9px] font-sans font-bold text-slate-400 uppercase tracking-wider">Duration: {branch.duration}</span>
                        </div>
                        <div className="border-t border-slate-100 pt-3 mt-4 flex justify-between items-center">
                          <span className="text-[9px] font-sans font-extrabold text-slate-400 uppercase tracking-widest">TOTAL ACADEMIC FEE</span>
                          <span className="text-sm font-serif font-black text-[#0c2340]">{branch.fees}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* PG & Other Fees Box */}
                  <div className="bg-[#FAF9F6] border border-slate-200/50 rounded-2xl p-6 space-y-4">
                    <span className="block text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest font-sans">Other Programs Total Fees</span>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="bg-white border border-slate-200/40 p-4 rounded-xl">
                        <span className="text-[9px] font-sans font-extrabold text-slate-400 uppercase tracking-widest block">MBA Course</span>
                        <span className="text-sm font-serif font-black text-[#0c2340] mt-1.5 block">~₹2.52 Lakhs</span>
                        <span className="text-[9px] text-slate-500 font-semibold mt-1 block">Total tuition</span>
                      </div>
                      <div className="bg-white border border-slate-200/40 p-4 rounded-xl">
                        <span className="text-[9px] font-sans font-extrabold text-slate-400 uppercase tracking-widest block">MCA Course</span>
                        <span className="text-sm font-serif font-black text-[#0c2340] mt-1.5 block">~₹2.52 Lakhs</span>
                        <span className="text-[9px] text-slate-500 font-semibold mt-1 block">Total tuition</span>
                      </div>
                      <div className="bg-white border border-slate-200/40 p-4 rounded-xl">
                        <span className="text-[9px] font-sans font-extrabold text-slate-400 uppercase tracking-widest block">M.Tech Course</span>
                        <span className="text-sm font-serif font-black text-[#0c2340] mt-1.5 block">~₹2.31 Lakhs</span>
                        <span className="text-[9px] text-slate-500 font-semibold mt-1 block">Total tuition</span>
                      </div>
                    </div>
                  </div>

                  {/* Scholarships box */}
                  <div className="bg-[#FAF9F6] border border-slate-200/50 rounded-2xl p-6 space-y-3">
                    <span className="block text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest font-sans">Scholarships & Fee Concessions</span>
                    <p className="text-xs font-sans text-slate-650 leading-relaxed font-semibold">
                      🎓 **Merit Scholarships**: Up to 100% tuition scholarships are available based on high academic excellence or outstanding athletic records. Merit concessions are tailored directly for WBJEE / JEE Main top rankers. West Bengal Swami Vivekananda Merit-cum-Means (SVMCM) scholarship concessions are fully applicable.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 6: ADMISSION ELIGIBILITY */}
            <section id="admission-eligibility" ref={sectionsRef["admission-eligibility"]} className="scroll-mt-28 bg-white py-4 border-b border-slate-100 pb-12">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c2340] border-l-4 border-[#c5a880] pl-4 tracking-tight leading-tight">
                    Admission Eligibility
                  </h2>
                </div>

                <div className="md:col-span-8 space-y-6">
                  {/* B.Tech */}
                  <div className="bg-[#FAF9F6] border border-slate-200/50 rounded-2xl p-6 space-y-4 shadow-sm">
                    <h3 className="text-base font-serif font-bold text-[#0c2340]">B.Tech Eligibility Prerequisites</h3>
                    <ul className="space-y-3.5 text-xs sm:text-sm font-sans font-semibold text-slate-650 leading-relaxed">
                      <li className="flex gap-3">
                        <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>**Qualifying Exam**: Passed Class 12 (10+2) with Physics, Chemistry, and Mathematics from a recognized board.</span>
                      </li>
                      <li className="flex gap-3">
                        <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>**Minimum PCM Marks**: Minimum **45% aggregate in PCM** (40% for reserved categories).</span>
                      </li>
                      <li className="flex gap-3">
                        <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>**English Requirement**: Minimum **30% marks** inside English.</span>
                      </li>
                      <li className="flex gap-3">
                        <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>**Age Restriction**: Minimum **17 years of age** at the time of admission.</span>
                      </li>
                      <li className="flex gap-3">
                        <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>**Entrance Ranks**: WBJEE Ranks (primary seat counseling) | JEE Main Ranks (10% of total state seats).</span>
                      </li>
                    </ul>
                  </div>

                  {/* Grid for Lateral, MTech, MBA, MCA */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-[#FAF9F6] p-4.5 rounded-xl border border-slate-200/50">
                      <span className="block text-[8px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">B.Tech Lateral Entry</span>
                      <p className="text-xs text-slate-650 leading-normal mt-2 font-semibold">3-year Diploma in relevant engineering field + qualify WBJEE Board **JELET** counselling rank.</p>
                    </div>
                    <div className="bg-[#FAF9F6] p-4.5 rounded-xl border border-slate-200/50">
                      <span className="block text-[8px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">M.Tech Admission</span>
                      <p className="text-xs text-slate-650 leading-normal mt-2 font-semibold">B.Tech / BE in matching engineering discipline + qualify **GATE** or **WBUT PGET** ranks.</p>
                    </div>
                    <div className="bg-[#FAF9F6] p-4.5 rounded-xl border border-slate-200/50">
                      <span className="block text-[8px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">MBA Admission</span>
                      <p className="text-xs text-slate-650 leading-normal mt-2 font-semibold">Graduation in any discipline with minimum 50% marks aggregate. Accepted entrance scores: **MAT**, **JEMAT**, or **TNJEE**.</p>
                    </div>
                    <div className="bg-[#FAF9F6] p-4.5 rounded-xl border border-slate-200/50">
                      <span className="block text-[8px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">MCA Admission</span>
                      <p className="text-xs text-slate-650 leading-normal mt-2 font-semibold">Bachelor's Degree with Mathematics as compulsory domain + qualify **WB JECA** counselling rank.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 7: PLACEMENTS (MOST IMPORTANT) */}
            <section id="placements" ref={sectionsRef["placements"]} className="scroll-mt-28 bg-[#091b33] text-white rounded-[2rem] p-8 md:p-12 border border-white/5 shadow-xl space-y-10">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4 space-y-4">
                  <span className="text-[10px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest block">SUCCESS RECORD</span>
                  <h2 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                    TMSL Placement Record
                  </h2>
                  <p className="text-slate-350 text-xs md:text-sm font-sans leading-relaxed font-semibold">
                    Situated directly in Sector V, TMSL boasts stellar industrial connect, helping over 98% of B.Tech candidates secure premium placements.
                  </p>

                  {/* Eligibility for drives */}
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-3 mt-6">
                    <span className="block text-[8px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">CAMPUS PLACEMENT ELIGIBILITY</span>
                    <ul className="space-y-2 text-[11px] text-slate-300 leading-relaxed font-semibold">
                      {placementEligibility.map((el, i) => (
                        <li key={i} className="flex gap-2.5 items-start">
                          <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                          <span>{el}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="md:col-span-8 space-y-8">
                  {/* Highlights Grid of 6 */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {placementStats2024.map((hl, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col justify-between">
                        <span className="block text-[8px] font-sans font-extrabold text-slate-400 uppercase tracking-widest">{hl.label}</span>
                        <div>
                          <span className={`block text-2xl font-serif font-bold mt-2 ${hl.value.includes("LPA+") ? "text-amber-400" : "text-white"}`}>{hl.value}</span>
                          <span className="block text-slate-400 text-[10px] font-semibold mt-1 leading-snug">{hl.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 2024 CSE Special Offer Note */}
                  <div className="bg-emerald-500/10 border-l-4 border-emerald-500 p-4.5 rounded-xl">
                    <span className="block text-[8px] font-sans font-black text-emerald-400 uppercase tracking-widest">2024 PLACEMENT HIGHLIGHT</span>
                    <p className="text-[11px] font-sans text-slate-250 leading-relaxed font-semibold mt-1">
                      🏆 **International Offer**: A student from the B.Tech CSE (AI & ML) stream secured a premier international placement offer exceeding **₹60 LPA**, verifying high global industry demand for contemporary specialized domains.
                    </p>
                  </div>

                  {/* 3-Year Placement Progress Table */}
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-sans font-bold text-slate-300 uppercase tracking-widest">3-Year Placement History</h4>
                    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-md">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[500px]">
                          <thead>
                            <tr className="bg-white/10 text-white text-[9px] font-sans font-bold uppercase tracking-widest border-b border-white/10">
                              <th className="p-4">Academic Year</th>
                              <th className="p-4">Registered Candidates</th>
                              <th className="p-4">Students Placed</th>
                              <th className="p-4">Placement Rate</th>
                              <th className="p-4">Average Package</th>
                              <th className="p-4">Highest Annual Package</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 text-xs font-sans text-slate-300 font-semibold">
                            {placementHistoryTable.map((hist, idx) => (
                              <tr key={idx} className="hover:bg-white/5 transition-colors">
                                <td className="p-4 font-bold text-white">{hist.year}</td>
                                <td className="p-4">{hist.registered}</td>
                                <td className="p-4">{hist.placed}</td>
                                <td className="p-4">{hist.rate}</td>
                                <td className="p-4">{hist.avgPackage}</td>
                                <td className="p-4 text-amber-400 font-bold">{hist.highest}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <span className="block text-[8px] font-sans font-extrabold text-slate-400 uppercase tracking-wider">
                      * Source: Shiksha, Eduscope, Collegedunia, TMSL official data (2025–26). Standalone NIRF tables are compiled under the Techno India Group parent umbrella.
                    </span>
                  </div>

                  {/* Branch-wise Placements highlights */}
                  <div className="space-y-4 border-t border-white/10 pt-8">
                    <h4 className="text-[10px] font-sans font-bold text-slate-300 uppercase tracking-widest">Branch-wise Placement Metrics</h4>
                    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-md">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[500px]">
                          <thead>
                            <tr className="bg-white/10 text-white text-[9px] font-sans font-bold uppercase tracking-widest border-b border-white/10">
                              <th className="p-4">B.Tech Engineering Branch</th>
                              <th className="p-4">Estimated Placement Rate</th>
                              <th className="p-4">Hiring Remarks</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 text-xs font-sans text-slate-300 font-semibold">
                            {branchPlacements.map((br, idx) => (
                              <tr key={idx} className="hover:bg-white/5 transition-colors">
                                <td className="p-4 font-bold text-white">{br.branch}</td>
                                <td className="p-4 text-amber-400">{br.rate}</td>
                                <td className="p-4 text-slate-300">{br.remarks}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* Top Recruiting Companies logos grid */}
                  <div className="space-y-4 border-t border-white/10 pt-8">
                    <div className="text-center">
                      <h4 className="text-[10px] font-sans font-bold text-slate-300 uppercase tracking-widest">Top Recruiter Alliances</h4>
                      <p className="text-[10px] text-slate-400 font-sans font-semibold mt-1">
                        Microsoft, Amazon, Deloitte, Google, Bosch, TCS, IBM, Wipro, Capgemini, Accenture, L&T, etc.
                      </p>
                    </div>
                    <div className="grid grid-cols-4 md:grid-cols-7 gap-3 justify-items-center">
                      {recruiters.map((rec, idx) => (
                        <div
                          key={idx}
                          className="w-full h-11 bg-white rounded-xl flex items-center justify-center p-2 shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
                          title={rec.name}
                        >
                          <img
                            src={rec.logo}
                            alt={`${rec.name} Logo`}
                            className="h-6 max-w-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                    <p className="text-center text-[10px] text-slate-400 font-sans font-semibold mt-2">
                      Cognizant, LTI Mindtree, HCL Technologies, Tech Mahindra, Infosys, DXC Technology, and 53+ MNCs and startups.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 8: FACILITIES */}
            <section id="facilities" ref={sectionsRef["facilities"]} className="scroll-mt-28 bg-white py-4 border-b border-slate-100 pb-12">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4 space-y-6">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c2340] border-l-4 border-[#c5a880] pl-4 tracking-tight leading-tight">
                    Campus Facilities
                  </h2>
                  <p className="text-slate-500 text-xs font-semibold leading-relaxed font-sans pr-4">
                    TMSL allocates high priority to providing students with modern digital infrastructure and well-equipped computation environments.
                  </p>

                  {/* Student Wi-Fi Note */}
                  <div className="bg-amber-400/10 border-l-4 border-amber-500 p-4.5 rounded-xl">
                    <span className="block text-[8px] font-sans font-black text-amber-600 uppercase tracking-widest">WI-FI AVAILABILITY NOTE</span>
                    <p className="text-[11px] text-slate-650 leading-relaxed font-sans font-semibold mt-1">
                      📶 **Connectivity**: High-speed Wi-Fi is fully active for faculty members. Student Wi-Fi connectivity on campus is currently limited. Most students use personal mobile data or adjacent PG network portals.
                    </p>
                  </div>
                </div>

                <div className="md:col-span-8">
                  {/* Facilities Grid */}
                  <div className="grid grid-cols-2 gap-5">
                    {facilities.map((fac, idx) => {
                      const IconComp = fac.icon;
                      return (
                        <div key={idx} className="bg-[#FAF9F6] border border-slate-200/50 p-5 rounded-2xl hover:shadow-md transition-all duration-300 space-y-3 group">
                          <div className="h-10 w-10 rounded-full bg-[#0c2340]/5 flex items-center justify-center shrink-0 text-[#0c2340] group-hover:bg-[#0c2340] group-hover:text-white transition-colors duration-300">
                            <IconComp className="h-5 w-5" />
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-xs font-serif font-bold text-[#0c2340] leading-snug">{fac.title}</h4>
                            <p className="text-slate-500 text-[10px] font-semibold leading-relaxed font-sans">{fac.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 9: LOCATION ADVANTAGE */}
            <section id="location-advantage" ref={sectionsRef["location-advantage"]} className="scroll-mt-28 bg-white py-4 border-b border-slate-100 pb-12">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c2340] border-l-4 border-[#c5a880] pl-4 tracking-tight leading-tight">
                    IT Hub Proximity
                  </h2>
                </div>

                <div className="md:col-span-8 space-y-6">
                  <p className="text-slate-650 text-sm leading-relaxed font-sans font-medium text-slate-600">
                    Techno Main Salt Lake's strategic presence in **Sector V, Salt Lake** — Kolkata's largest IT Electronics Complex — serves as its biggest structural advantage. Surrounded directly by corporate campuses of Wipro, TCS, Infosys, and IBM, students enjoy:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-[#FAF9F6] border border-slate-200/50 p-5 rounded-2xl flex gap-3.5 items-start hover:border-[#c5a880]/30 transition-all">
                      <Network className="h-6 w-6 text-[#0c2340] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-serif font-bold text-[#0c2340]">Walk-in Proximity</h4>
                        <p className="text-slate-500 text-[10px] font-semibold leading-relaxed font-sans mt-1">Direct access to walk-in placement selection rounds at neighbouring IT MNCs located within walking distance.</p>
                      </div>
                    </div>

                    <div className="bg-[#FAF9F6] border border-slate-200/50 p-5 rounded-2xl flex gap-3.5 items-start hover:border-[#c5a880]/30 transition-all">
                      <Building2 className="h-6 w-6 text-[#0c2340] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-serif font-bold text-[#0c2340]">Off-Campus Access</h4>
                        <p className="text-slate-500 text-[10px] font-semibold leading-relaxed font-sans mt-1">Exceptional accessibility to off-campus recruitment setups and internship drives outside standard campus channels.</p>
                      </div>
                    </div>

                    <div className="bg-[#FAF9F6] border border-slate-200/50 p-5 rounded-2xl flex gap-3.5 items-start hover:border-[#c5a880]/30 transition-all sm:col-span-2">
                      <Compass className="h-6 w-6 text-[#0c2340] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-serif font-bold text-[#0c2340]">Seamless Commuting</h4>
                        <p className="text-slate-500 text-[10px] font-semibold leading-relaxed font-sans mt-1">Located steps away from the Salt Lake Sector V Metro Station, ensuring seamless, quick commuting for candidates.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 10: FAQs */}
            <section id="faqs" ref={sectionsRef["faqs"]} className="scroll-mt-28 bg-white py-4 border-b border-slate-100 pb-12">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c2340] border-l-4 border-[#c5a880] pl-4 tracking-tight leading-tight">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="md:col-span-8">
                  <div className="space-y-3">
                    {faqItems.map((faq, idx) => {
                      const isOpen = activeFAQ === idx;
                      return (
                        <div
                          key={idx}
                          className="bg-[#FAF9F6] rounded-xl border border-slate-100 overflow-hidden transition-all shadow-sm"
                        >
                          <button
                            onClick={() => toggleFAQ(idx)}
                            className="w-full text-left p-4.5 flex justify-between items-center gap-4 text-xs font-serif font-bold text-[#0c2340] hover:bg-slate-100/50 transition-colors"
                          >
                            <span>{faq.q}</span>
                            {isOpen ? <ChevronUp className="h-4.5 w-4.5 text-[#c5a880] shrink-0" /> : <ChevronDown className="h-4.5 w-4.5 text-slate-400 shrink-0" />}
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden border-t border-slate-100 bg-white"
                              >
                                <p className="p-4.5 text-xs text-slate-650 leading-relaxed font-sans font-semibold text-[#0c2340]">
                                  {faq.a}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 11: CONTACT & INQUIRY */}
            <section id="contact" ref={formRef} className="scroll-mt-28 bg-[#FAF9F6] py-12 border border-slate-150 rounded-3xl">
              <div className="max-w-4xl mx-auto space-y-12 px-6">
                
                {/* Yellow counseling card */}
                <div className="bg-amber-400/80 rounded-3xl p-8 border border-amber-500 shadow-md flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="space-y-2 text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-serif font-black text-[#0c2340]">Need Help with TMSL Admission Guidance?</h3>
                    <p className="text-xs text-slate-800 font-sans font-semibold leading-relaxed max-w-xl">
                      SS Education advisors will guide you through actual WBJEE cutoffs, choosing branches, documenting state scholarships, and final seat booking — for free.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <a
                      href="tel:+919933085333"
                      className="flex h-11 bg-[#0c2340] hover:bg-[#0c2340]/90 text-white font-sans font-bold text-xs uppercase tracking-widest px-6 rounded-xl transition-all shadow-md items-center justify-center gap-2"
                    >
                      <Phone className="h-4 w-4" /> Call Advisor
                    </a>
                    <a
                      href="https://wa.me/919933085333"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-11 bg-white hover:bg-slate-50 text-slate-900 font-sans font-bold text-xs uppercase tracking-widest px-6 rounded-xl transition-all shadow-md items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4 text-emerald-600" /> WhatsApp
                    </a>
                  </div>
                </div>

                {/* Lead Form */}
                <div className="bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 ring-6 ring-emerald-50/50">
                        <Check className="h-6 w-6 text-emerald-600" />
                      </div>
                      <h3 className="text-base font-serif font-bold text-slate-900">Request Profile Submitted!</h3>
                      <p className="mt-2 text-slate-500 font-sans text-xs font-semibold leading-relaxed">
                        Thank you for your response. Our senior Techno India Group advisor from SS Education will call you within 24 hours to assist with your Techno Main Salt Lake admission query.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="pb-3 border-b border-slate-100">
                        <h3 className="text-sm font-sans font-black uppercase tracking-widest text-[#0c2340]">Advisor Request Profile</h3>
                        <p className="text-[10px] font-sans font-bold text-slate-400 uppercase tracking-widest mt-0.5">Techno Main Salt Lake Counselling</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="tmsl-lead-name" className="text-[10px] font-sans font-bold uppercase tracking-widest text-slate-400 mb-1.5 block">Full Name *</Label>
                          <Input
                            id="tmsl-lead-name"
                            placeholder="E.g. Akash Roy"
                            className="h-11 rounded-xl bg-slate-50 border-slate-200/50 font-medium focus:bg-white text-xs text-slate-800 transition-all font-sans"
                            value={formData.name || ""}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                          />
                          {errors.name && <p className="text-[9px] font-sans font-bold text-rose-500 mt-1">{errors.name}</p>}
                        </div>

                        <div>
                          <Label htmlFor="tmsl-lead-phone" className="text-[10px] font-sans font-bold uppercase tracking-widest text-slate-400 mb-1.5 block">Phone Number *</Label>
                          <Input
                            id="tmsl-lead-phone"
                            type="tel"
                            maxLength={10}
                            placeholder="10-digit number"
                            className="h-11 rounded-xl bg-slate-50 border-slate-200/50 font-medium focus:bg-white text-xs text-slate-800 transition-all font-sans"
                            value={formData.phone || ""}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                          />
                          {errors.phone && <p className="text-[9px] font-sans font-bold text-rose-500 mt-1">{errors.phone}</p>}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <Label htmlFor="tmsl-lead-email" className="text-[10px] font-sans font-bold uppercase tracking-widest text-slate-400 mb-1.5 block">Email (Optional)</Label>
                          <Input
                            id="tmsl-lead-email"
                            type="email"
                            placeholder="name@example.com"
                            className="h-11 rounded-xl bg-slate-50 border-slate-200/50 font-medium focus:bg-white text-xs text-slate-800 transition-all font-sans"
                            value={formData.email || ""}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                          />
                        </div>

                        <div>
                          <Label className="text-[10px] font-sans font-bold uppercase tracking-widest text-slate-400 mb-1.5 block">Domicile State *</Label>
                          <Select
                            onValueChange={(val) => handleInputChange("state", val)}
                            value={formData.state || ""}
                          >
                            <SelectTrigger className="h-11 rounded-xl bg-slate-50 border-slate-200/50 text-xs text-slate-800 font-sans">
                              <SelectValue placeholder="Select State" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl font-sans">
                              <SelectItem value="West Bengal">West Bengal</SelectItem>
                              <SelectItem value="Bihar">Bihar</SelectItem>
                              <SelectItem value="Jharkhand">Jharkhand</SelectItem>
                              <SelectItem value="Odisha">Odisha</SelectItem>
                              <SelectItem value="Tripura">Tripura</SelectItem>
                              <SelectItem value="Assam">Assam</SelectItem>
                              <SelectItem value="Other">Other State</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.state && <p className="text-[9px] font-sans font-bold text-rose-500 mt-1">{errors.state}</p>}
                        </div>

                        <div>
                          <Label className="text-[10px] font-sans font-bold uppercase tracking-widest text-slate-400 mb-1.5 block">Preferred Course *</Label>
                          <Select
                            onValueChange={(val) => handleInputChange("course", val)}
                            value={formData.course || ""}
                          >
                            <SelectTrigger className="h-11 rounded-xl bg-slate-50 border-slate-200/50 text-xs text-slate-800 font-sans">
                              <SelectValue placeholder="Select Course" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl font-sans">
                              <SelectItem value="BTech CSE">B.Tech - CSE</SelectItem>
                              <SelectItem value="BTech CSE Specialisations">B.Tech - CSE AI/ML</SelectItem>
                              <SelectItem value="BTech IT/ECE">B.Tech - IT/ECE</SelectItem>
                              <SelectItem value="BTech Core (EE/ME/CE)">B.Tech - EE/ME/CE</SelectItem>
                              <SelectItem value="BCA">BCA</SelectItem>
                              <SelectItem value="BBA">BBA</SelectItem>
                              <SelectItem value="MCA">MCA</SelectItem>
                              <SelectItem value="MBA">MBA</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.course && <p className="text-[9px] font-sans font-bold text-rose-500 mt-1">{errors.course}</p>}
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 bg-[#0c2340] hover:bg-[#0c2340]/90 text-white font-sans font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow shadow-[#0c2340]/10 flex items-center justify-center gap-1.5 active:scale-95"
                        disabled={submitting}
                      >
                        {submitting ? "Processing..." : "Submit Inquiry to SS Education"}
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </section>

          </div>

        </div>
      </div>

      {/* RELATED ARTICLES CAROUSEL SECTION */}
      <section className="bg-[#FAF9F6] py-20 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl space-y-10">
          <div className="space-y-1.5">
            <span className="text-[#0c2340] font-sans font-black uppercase tracking-widest text-[10px] block">Related Guides</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
              Related Articles & Admission Guides
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {relatedGuides.map((art, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-slate-150 hover:border-amber-500/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h4 className="text-sm font-serif font-bold text-slate-950 leading-snug">{art.title}</h4>
                  <p className="text-[11px] text-slate-500 font-sans font-semibold leading-relaxed">{art.desc}</p>
                </div>
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-1 text-[9px] font-sans font-extrabold text-[#0c2340] uppercase tracking-wider hover:underline text-left mt-6"
                >
                  Explore Guide ➔
                </button>
              </div>
            ))}
          </div>

          {/* Verification Disclaimer */}
          <div className="border-t border-slate-200/50 pt-8 text-center text-[10px] text-slate-400 font-sans font-semibold uppercase tracking-wider space-y-1">
            <p>Data Sources: Shiksha, Eduscope, Collegedunia, TMSL official data (2025–26)</p>
            <p>Disclaimer: "Information is sourced from official and verified public data. For the latest updates, visit technomainsaltlake.ticollege.ac.in."</p>
            <p>Last updated: June 2026</p>
          </div>
        </div>
      </section>

    </main>
  );
}
