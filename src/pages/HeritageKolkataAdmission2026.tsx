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
import { useJsonLd } from "@/hooks/useJsonLd";
import { useSeo } from "@/hooks/useSeo";

// College campus image for high-end aesthetic
import campusHero from "@/assets/heritage-campus.webp";
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

export default function HeritageKolkataAdmission2026() {
  useSeo({
    title: "Heritage Institute of Technology (HITK) Kolkata B.Tech Admission 2026",
    description: "Get B.Tech Admission guidance for Heritage Institute of Technology (HITK), Kolkata. Review placement packages, fees, and WBJEE cutoff marks."
  });

  // Dynamic College, FAQ, and Breadcrumb Schema Markup
  useJsonLd({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/heritage-institute-of-technology-hitk-kolkata/#college",
        "name": "Heritage Institute of Technology (HITK), Kolkata",
        "alternateName": "Heritage Kolkata",
        "url": "https://www.heritageit.edu",
        "description": "Heritage Institute of Technology (HITK) is a highly-ranked private autonomous engineering college in Anandapur, Kolkata, West Bengal, affiliated with MAKAUT.",
        "logo": "https://www.heritageit.edu/images/logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "994, Madurdaha, Chowbaga Road, Anandapur",
          "addressLocality": "Kolkata",
          "addressRegion": "West Bengal",
          "postalCode": "700107",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ssadmission.in/heritage-institute-of-technology-hitk-kolkata/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is Heritage Institute of Technology autonomous?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Heritage Institute of Technology, Kolkata (HITK) is an autonomous engineering college affiliated with Maulana Abul Kalam Azad University of Technology (MAKAUT), West Bengal."
            }
          },
          {
            "@type": "Question",
            "name": "What is the fee structure for B.Tech at Heritage Institute of Technology?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The B.Tech tuition fee at Heritage Kolkata is approximately ₹1,10,000 per year (or ₹55,000 per semester), bringing the total 4-year tuition fee to ~₹4.40 Lakhs. Other fees such as security deposits, registration, and examinations are separate."
            }
          },
          {
            "@type": "Question",
            "name": "What is the placement record at Heritage Institute of Technology?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Heritage Kolkata has a strong placement track record, placing around 85-90% of students annually. The B.Tech average package is ₹5.50 LPA, and the highest package offered has reached ₹44 LPA in recent recruitment drives. Key recruiters include TCS, Cognizant, Wipro, Infosys, and Capgemini."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ssadmission.in/heritage-institute-of-technology-hitk-kolkata/#breadcrumb",
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
            "name": "Heritage Kolkata B.Tech Admission 2026",
            "item": "https://ssadmission.in/heritage-institute-of-technology-hitk-kolkata"
          }
        ]
      }
    ]
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("about-hitk");
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
    "about-hitk": useRef<HTMLElement>(null),
    "key-highlights": useRef<HTMLElement>(null),
    "rankings-accreditation": useRef<HTMLElement>(null),
    "courses-offered": useRef<HTMLElement>(null),
    "btech-branches": useRef<HTMLElement>(null),
    "admission-eligibility": useRef<HTMLElement>(null),
    "placements": useRef<HTMLElement>(null),
    "facilities": useRef<HTMLElement>(null),
    "collaborations": useRef<HTMLElement>(null),
    "scholarships": useRef<HTMLElement>(null),
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
      const nameInput = document.getElementById("hitk-lead-name");
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
    googleFormData.append("entry.85122333", `Heritage Kolkata Showcase - Preferred Course: ${parsed.data.course}`);

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
    { id: "about-hitk", label: "Overview" },
    { id: "key-highlights", label: "Highlights" },
    { id: "rankings-accreditation", label: "Rankings" },
    { id: "courses-offered", label: "Courses" },
    { id: "btech-branches", label: "Branches & Fees" },
    { id: "admission-eligibility", label: "Eligibility" },
    { id: "placements", label: "Placements" },
    { id: "facilities", label: "Facilities" },
    { id: "collaborations", label: "Collaborations" },
    { id: "scholarships", label: "Scholarships" },
    { id: "faqs", label: "FAQs" },
  ] as const;

  const statBadges = [
    { title: "Established", value: "2001", desc: "Kalyan Bharti Trust initiative", icon: Calendar },
    { title: "Type", value: "Private Autonomous", desc: "Granted Autonomous status by UGC 2017", icon: Building2 },
    { title: "Accreditation", value: "NAAC Grade A", desc: "CGPA of 3.13", icon: Award },
    { title: "NIRF 2025", value: "Rank #201–250", desc: "Under Engineering stream", icon: Trophy },
    { title: "Placements", value: "80–90%", desc: "Consistent annual success rate", icon: TrendingUp },
  ];

  const highlights = [
    { title: "Established Year", value: "2001", desc: "Over two decades of academic excellence", icon: Calendar },
    { title: "Institute Type", value: "Private Autonomous", desc: "Affiliated to MAKAUT & approved by AICTE", icon: Building2 },
    { title: "Campus Size", value: "8–10 Acres", desc: "Green, calm urban ecosystem in Kolkata", icon: MapPin },
    { title: "Total Students", value: "~2,396", desc: "Active vibrant learning community", icon: UserCheck },
    { title: "Affiliated Board", value: "MAKAUT", desc: "Approved by AICTE and UGC recognized", icon: Library },
    { title: "NAAC Accreditation", value: "Grade A", desc: "Highly rated score of 3.13 CGPA", icon: ShieldCheck },
  ];

  const rankingList = [
    { agency: "NIRF 2025", category: "Engineering Category", rank: "#201–250" },
    { agency: "NIRF 2022", category: "Engineering Category", rank: "#201–250" },
    { agency: "NIRF 2020", category: "Engineering Category", rank: "#154" },
    { agency: "NIRF 2019", category: "Engineering Category", rank: "#150" },
    { agency: "NIRF 2018", category: "Engineering Category", rank: "#100" },
    { agency: "India Today 2025", category: "B.Tech Category", rank: "#130 (National) / #2 in Kolkata" },
    { agency: "Outlook 2025", category: "Engineering (Private)", rank: "#67" },
    { agency: "Outlook-ICARE 2024", category: "MCA Category", rank: "#54" },
    { agency: "IIRF 2025", category: "Engineering Category", rank: "#108" },
    { agency: "Collegedunia 2025", category: "B.Tech Category", rank: "#231" },
  ];

  const btechBranches = [
    { name: "Computer Science & Engineering (CSE)", duration: "4 Years", fees: "₹5.89 Lakhs" },
    { name: "CSE with AI & ML", duration: "4 Years", fees: "₹5.89 Lakhs" },
    { name: "Information Technology (IT)", duration: "4 Years", fees: "₹5.89 Lakhs" },
    { name: "Electronics & Communication Engineering (ECE)", duration: "4 Years", fees: "₹5.89 Lakhs" },
    { name: "Electrical Engineering (EE)", duration: "4 Years", fees: "₹5.89 Lakhs" },
    { name: "Mechanical Engineering (ME)", duration: "4 Years", fees: "₹5.89 Lakhs" },
    { name: "Civil Engineering (CE)", duration: "4 Years", fees: "₹5.89 Lakhs" },
    { name: "Chemical Engineering (CHE)", duration: "4 Years", fees: "₹5.89 Lakhs" },
    { name: "Biotechnology (BT)", duration: "4 Years", fees: "₹5.89 Lakhs" },
  ];

  const placementStats2024 = [
    { label: "Highest Package", value: "₹1.13 Crore", desc: "Top global tech company placement" },
    { label: "B.Tech Median Package", value: "₹4.78 LPA", desc: "Verified via recent NIRF 2025 report" },
    { label: "PG Median Package", value: "₹5.22 LPA", desc: "Consistent growth in PG placements" },
    { label: "Students Placed", value: "855 Total", desc: "792 Undergraduate + 63 Postgraduates" },
    { label: "Placement Rate", value: "80–90%", desc: "High density hiring outcomes" },
    { label: "Hiring Partners", value: "100+ annually", desc: "Regular recruiter campus tie-ups" },
  ];

  const placementHistoryTable = [
    { year: "2022", placed: "~620", ugMedian: "₹4.00 LPA", pgMedian: "—", highest: "₹42 LPA" },
    { year: "2023", placed: "~767", ugMedian: "₹4.50 LPA", pgMedian: "₹4.25 LPA", highest: "₹30 LPA" },
    { year: "2024", placed: "855 (792 UG + 63 PG)", ugMedian: "₹4.78 LPA", pgMedian: "₹5.22 LPA", highest: "₹1.13 Crore" },
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
    { title: "Central Library", desc: "Extensive collections of books, national journals, & e-resources. Textbooks easily accessible without external purchases.", icon: Library },
    { title: "Boys' & Girls' Hostels", desc: "500+ student capacity with secure rooms, hygienic mess services, AC & Non-AC choices (~₹70,000/year).", icon: Building },
    { title: "Medical / Health Centre", desc: "On-campus basic checkups and specialized emergency tie-ups with leading hospitals nearby.", icon: HeartPulse },
    { title: "Multi-Cuisine Cafeteria", desc: "Spacious seating of over 200+ students, serving fresh, multi-cuisine meals at subsidized values.", icon: Check },
    { title: "Gymnasium & Sports Complex", desc: "Well-equipped fitness machines, fields and courts for cricket, football, volleyball, and basketball.", icon: Dribbble },
    { title: "Compute & Research Labs", desc: "Central high-performance computing centers and advanced specialized laboratories for research projects.", icon: Zap },
    { title: "Two-way Transportation", desc: "Dedicated bus routing networks starting from major pick-up points across Kolkata and suburbs.", icon: Compass },
    { title: "Wi-Fi Enabled Campus", desc: "Broadband network coverage across all lecture halls, academic departments, labs, and student zones.", icon: Wifi },
    { title: "Startup Incubation Centre", desc: "Vibrant ecosystem to foster student entrepreneurship, mentoring sessions, and seed investments.", icon: Globe },
    { title: "Air-Conditioned Auditorium", desc: "Equipped with state-of-the-art acoustics and screens for organizing conferences, fests, and expert panels.", icon: BookOpen }
  ];

  const prePlacementTraining = [
    "Soft skills & personality development modules right from Semester 1",
    "Comprehensive aptitude, numeric, and reasoning preparation drills",
    "Advanced programming bootcamps and structural coding workshops",
    "Realistic mock interviews and focused Group Discussion (GD) preparation",
    "Specialized life skills, corporate styling, and professional communication workshops"
  ];

  const internationalMoUs = [
    "University of Massachusetts Lowell (USA)",
    "New Jersey Institute of Technology (USA)",
    "University of Alabama (USA)",
    "Sun Oil Company Pvt. Ltd.",
    "Mindspace Venture",
    "Star Cement Ltd., Century Plyboards, Artchala + 12 more prestigious establishments"
  ];

  const scholarships = [
    "West Bengal Freeship Scheme (WBFSS) for financial concessions",
    "Swami Vivekananda Merit-cum-Means (SVMCM) Government Scholarship",
    "Pragati Scholarship scheme exclusively for deserving girl students",
    "Tuition Fee Waiver (TFW) Scheme on merit-cum-income quotas",
    "Calcutta Club Ltd. Grants and private sponsor awards"
  ];

  const faqItems = [
    {
      q: "Is Heritage Institute of Technology Kolkata (HITK) autonomous?",
      a: "Yes, Heritage Institute of Technology (HITK) was granted Autonomous status by the University Grants Commission (UGC) in 2017. While it is affiliated with Maulana Abul Kalam Azad University of Technology (MAKAUT), it has the autonomy to design its own industry-oriented curriculum, conduct semester-end examinations, and continuously update syllabus parameters to meet modern technical needs."
    },
    {
      q: "What is the highest package at HITK?",
      a: "As verified in recent reports, the highest package at HITK has reached an outstanding ₹1.13 Crore per annum. The B.Tech median package stands at ₹4.78 LPA, while postgraduate courses maintain a median package of ₹5.22 LPA. Top recruiters include Amazon, Microsoft, Adobe, and TCS."
    },
    {
      q: "How are seats allocated for B.Tech admission at Heritage?",
      a: "For B.Tech courses, 80% of the total seats are allocated through the West Bengal Joint Entrance Examination (WBJEE) counseling. 10% of seats are allocated based on JEE Main ranks, and the remaining 10% are filled through the Management Quota based on academic merit and qualifications."
    },
    {
      q: "What are the B.Tech branches available and their fees?",
      a: "HITK offers 9 major specialisations: Computer Science & Engineering (CSE), CSE with AI & ML, Information Technology (IT), Electronics & Communication (ECE), Electrical Engineering (EE), Mechanical Engineering (ME), Civil Engineering (CE), Chemical Engineering (CHE), and Biotechnology (BT). The total academic fee for B.Tech streams is ₹5.89 Lakhs. Annual fees are ₹1,72,000, payable semester-wise."
    },
    {
      q: "Are hostel facilities available on-campus?",
      a: "Yes, HITK provides excellent separate hostel facilities for both boys and girls with a total capacity exceeding 500+ students. Rooms are available in AC and Non-AC variants. Mess charges and accommodation total approximately ₹70,000 per year."
    },
    {
      q: "What scholarships are supported at HITK?",
      a: "HITK supports a wide range of scholarships, including the West Bengal Freeship Scheme (WBFSS), the popular Swami Vivekananda Merit-cum-Means (SVMCM) Scholarship, the Pragati Scholarship for girl students, the state-sponsored Tuition Fee Waiver (TFW) scheme, and special grants like the Calcutta Club Ltd. Grants."
    }
  ];

  const relatedGuides = [
    { title: "Top Private Engineering Colleges in Kolkata", desc: "A curated comparative review of top-ranking private engineering colleges in West Bengal based on packages, placements, and fees.", link: "#" },
    { title: "WBJEE Choice Filling & Counselling Guide 2026", desc: "Maximize your chances of locking premium branches at HITK and other premier institutions during WBJEE counseling rounds.", link: "#" },
    { title: "B.Tech CSE vs CSE with AI & ML", desc: "Deep dive into which computer science specialization has stronger career paths, higher average packages, and future-proof domains.", link: "#" },
    { title: "How to Secure Autonomous College Admission", desc: "A guide detailing the benefits of autonomous engineering degrees under MAKAUT, focusing on flexible syllabi and better placements.", link: "#" }
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-amber-100 selection:text-amber-900">
      
      {/* Sticky Bottom Counselling Banner for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0c2340] border-t border-white/10 p-3 md:hidden flex justify-between items-center shadow-2xl">
        <div className="text-left">
          <span className="block text-[8px] font-sans font-black text-[#c5a880] uppercase tracking-wider">HITK Admission 2026</span>
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
            Heritage Institute of Technology (HITK), Kolkata — 2026 Academic Showcase
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
            alt="Heritage Institute of Technology Kolkata Campus Backdrop"
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
              <span className="text-amber-400">Heritage Institute of Technology (HITK), Kolkata</span>
            </nav>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.1] text-white">
                Heritage Institute of Technology (HITK), Kolkata
              </h1>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/10 border border-amber-400/30 rounded-lg">
                <Sparkles className="h-4 w-4 text-amber-400 shrink-0" />
                <span className="text-amber-300 font-serif font-bold italic text-xs sm:text-sm">
                  "Be Your Own Light — Atmo Deepo Bhavo"
                </span>
              </div>

              <p className="text-slate-300 text-sm sm:text-lg font-sans font-medium leading-relaxed max-w-3xl">
                Comprehensive informational guide to Heritage Institute of Technology (HITK), Kolkata. Learn about accredited B.Tech branches, actual course fees, ranks, 2026 eligibility checklist, verified 1.13 Cr packages, and easy counselling enrollment.
              </p>
            </div>

            {/* Quick Stat Badges */}
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="text-[9px] font-sans font-bold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
                NAAC A Grade
              </span>
              <span className="text-[9px] font-sans font-bold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
                NBA Accredited
              </span>
              <span className="text-[9px] font-sans font-bold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
                NIRF #201–250
              </span>
              <span className="text-[9px] font-sans font-bold uppercase tracking-wider bg-[#b8860b]/20 border border-[#b8860b]/40 text-amber-300 px-3.5 py-1.5 rounded-full">
                80–90% Placements
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
                <span className="block text-[10px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest leading-none mb-2">Accreditation</span>
                <span className="block text-2xl md:text-3xl font-serif font-bold text-white leading-none">NAAC A</span>
              </div>
              <div>
                <span className="block text-[10px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest leading-none mb-2">Status</span>
                <span className="block text-2xl md:text-3xl font-serif font-bold text-white leading-none">Autonomous</span>
              </div>
              <div>
                <span className="block text-[10px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest leading-none mb-2">Peak Package</span>
                <span className="block text-2xl md:text-3xl font-serif font-bold text-white leading-none">₹1.13 Cr</span>
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

            {/* SECTION 1: ABOUT HITK */}
            <section id="about-hitk" ref={sectionsRef["about-hitk"]} className="scroll-mt-28 bg-white py-4">
              <div className="grid md:grid-cols-12 gap-8 items-start border-b border-slate-100 pb-12">
                <div className="md:col-span-4">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c2340] border-l-4 border-[#c5a880] pl-4 tracking-tight leading-tight">
                    About Heritage Kolkata
                  </h2>
                </div>

                <div className="md:col-span-8 space-y-6 text-slate-650 text-sm md:text-base leading-relaxed font-sans font-medium text-slate-600">
                  <p>
                    Heritage Institute of Technology (HITK), Kolkata, was established in 2001 under the Kalyan Bharti Trust, which was founded by an elite group of 22 forward-thinking industrialists from the IT, electronics, and related corporate sectors of Kolkata.
                  </p>
                  <p>
                    Spanning a calm, green, urban campus of 8–10 acres located at East Kolkata Township near Ruby Hospital on EM Bypass, HITK offers a peaceful yet technologically integrated academic ecosystem.
                  </p>
                  <p>
                    The institute is affiliated with Maulana Abul Kalam Azad University of Technology (MAKAUT), approved by AICTE and UGC, and was granted prestigious Autonomous status by the UGC in 2017. HITK holds NAAC Grade 'A' accreditation (CGPA 3.13) and NBA credentials for multiple departments. The college maintains strong global academic ties, having signed MoUs with international universities including University of Massachusetts Lowell, New Jersey Institute of Technology, and University of Alabama.
                  </p>

                  {/* Campus Address Card */}
                  <div className="bg-[#FAF9F6] border border-slate-200/60 rounded-2xl p-5 space-y-3 shadow-sm text-xs font-sans text-slate-700 font-semibold mt-4">
                    <div>
                      <span className="block text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">Campus Address</span>
                      <p className="mt-1 flex gap-2 items-start text-slate-900 leading-relaxed font-sans">
                        <MapPin className="h-4.5 w-4.5 text-[#0c2340] shrink-0 mt-0.5" />
                        <span>994, Chowbaga Road, Anandapur, P.O. East Kolkata Township, Near Ruby Hospital, EM Bypass, Kolkata – 700107</span>
                      </p>
                    </div>
                    <div className="border-t border-slate-200/50 pt-2 flex justify-between items-center">
                      <div>
                        <span className="block text-[8px] font-sans font-extrabold text-slate-400 uppercase tracking-widest">Official Website</span>
                        <a href="https://www.heritageit.edu" target="_blank" rel="noreferrer" className="text-[#0c2340] hover:underline font-bold text-xs mt-0.5 block flex items-center gap-1">
                          www.heritageit.edu <ArrowUpRight className="h-3 w-3" />
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
                    Heritage Institute of Technology has been consistently ranked among the top private B.Tech and technical engineering institutions in West Bengal by premier regulatory and ranking bodies.
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
                            <th className="p-4">Rank</th>
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

                  {/* Accreditation badges block */}
                  <div className="bg-[#FAF9F6] border border-slate-200/50 rounded-2xl p-6 space-y-4">
                    <span className="block text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">Regulatory Status & Approvals</span>
                    <div className="flex flex-wrap gap-2.5">
                      {["NAAC A Grade (CGPA 3.13)", "NBA Accredited Programs", "AICTE Approved", "UGC Recognized", "MAKAUT Affiliation", "Autonomous Status (2017)"].map((badge, idx) => (
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
                      { id: "ug", title: "Undergraduate (UG) Programs", desc: "B.Tech, B.Des & BCA Streams" },
                      { id: "pg", title: "Postgraduate (PG) Programs", desc: "M.Tech & MCA Programs" },
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
                            High-quality academic engineering degree offering 9 specialized technological branches with a total intake of 1,020 seats annually. Focused extensively on hands-on practical research.
                          </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-3 pt-2">
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50 shadow-sm flex flex-col justify-between">
                            <span className="text-xs font-serif font-bold text-[#0c2340] leading-snug">B.Tech Lateral Entry — 3 Years</span>
                            <span className="text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-wider mt-1.5">For Diploma Holders</span>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50 shadow-sm flex flex-col justify-between">
                            <span className="text-xs font-serif font-bold text-[#0c2340] leading-snug">B.Des (Bachelor of Design)</span>
                            <span className="text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-wider mt-1.5">Creative Careers</span>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50 shadow-sm flex flex-col justify-between sm:col-span-2">
                            <span className="text-xs font-serif font-bold text-[#0c2340] leading-snug">BCA (Bachelor of Computer Applications)</span>
                            <span className="text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-wider mt-1.5">Core Software Engineering Foundations</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <h4 className="text-base font-serif font-bold text-[#0c2340]">M.Tech (Master of Technology) — 2 Years</h4>
                            <p className="text-slate-500 text-xs font-semibold leading-relaxed font-sans">
                              Offered across 7 structural specialisations. Involves specialized laboratory research projects, dissertation compiling, and publications.
                            </p>
                          </div>
                          
                          <div className="border-t border-slate-200/50 pt-4 space-y-2">
                            <h4 className="text-base font-serif font-bold text-[#0c2340]">MCA (Master of Computer Applications) — 2 Years</h4>
                            <p className="text-slate-500 text-xs font-semibold leading-relaxed font-sans">
                              Advanced training in database architectures, enterprise software, structural algorithms, AI paradigms, and network management.
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
                    Detailed index of B.Tech branches available at Heritage Institute of Technology with uniform academic fee parameters.
                  </p>
                  
                  <div className="bg-[#FAF9F6] border border-slate-200/50 rounded-2xl p-5 text-xs font-sans text-slate-700 font-semibold space-y-3">
                    <div>
                      <span className="block text-[8px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">Annual B.Tech Fee</span>
                      <span className="text-lg font-serif font-black text-[#0c2340] mt-0.5 block">₹1,72,000 / Year</span>
                    </div>
                    <div className="border-t border-slate-200/50 pt-2">
                      <span className="block text-[8px] font-sans font-extrabold text-slate-400 uppercase tracking-widest">Payment Cycle</span>
                      <p className="text-slate-650 mt-0.5 font-bold">Semester-wise installments</p>
                    </div>
                    <div className="border-t border-slate-200/50 pt-2">
                      <span className="block text-[8px] font-sans font-extrabold text-slate-400 uppercase tracking-widest">Extra Charges</span>
                      <p className="text-slate-650 mt-0.5 font-bold">Hostel: ~₹70,000/year (AC / Non-AC)</p>
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

                  {/* PG Fees info Box */}
                  <div className="bg-[#FAF9F6] border border-slate-200/50 rounded-2xl p-6 space-y-4">
                    <span className="block text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest font-sans">Postgraduate (PG) Total Fees</span>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-white border border-slate-200/40 p-4 rounded-xl">
                        <span className="text-[9px] font-sans font-extrabold text-slate-400 uppercase tracking-widest block">M.Tech (All Specialisations)</span>
                        <span className="text-base font-serif font-black text-[#0c2340] mt-1.5 block">₹2,31,000 – ₹3,11,000</span>
                        <span className="text-[9px] text-slate-500 font-semibold mt-1 block">Accumulated course value</span>
                      </div>
                      <div className="bg-white border border-slate-200/40 p-4 rounded-xl">
                        <span className="text-[9px] font-sans font-extrabold text-slate-400 uppercase tracking-widest block">MCA Program</span>
                        <span className="text-base font-serif font-black text-[#0c2340] mt-1.5 block">₹2,00,000 – ₹3,67,000</span>
                        <span className="text-[9px] text-slate-500 font-semibold mt-1 block">Accumulated course value</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 6: ELIGIBILITY */}
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
                    <h3 className="text-base font-serif font-bold text-[#0c2340]">B.Tech Eligibility Checklist</h3>
                    <ul className="space-y-3.5 text-xs sm:text-sm font-sans font-semibold text-slate-650 leading-relaxed">
                      <li className="flex gap-3">
                        <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>**Qualifying Exam**: Completed 10+2 with Physics, Chemistry, and Mathematics (PCM) from a recognized Central/State board.</span>
                      </li>
                      <li className="flex gap-3">
                        <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>**Entrance Ranks**: Valid matching rank in West Bengal Joint Entrance Exam (**WBJEE**) or JEE Main index.</span>
                      </li>
                      <li className="flex gap-3">
                        <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>**Seat Quota Allocation**: 80% seats filled via WBJEE Counselling | 10% via JEE Main | 10% via Management Quota.</span>
                      </li>
                      <li className="flex gap-3">
                        <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>**Minimum Aggregate Marks**: Minimum **45%+ aggregate** inside PCM subjects (40% for Reserved Categories).</span>
                      </li>
                    </ul>
                  </div>

                  {/* Grid for Lateral, MTech, MCA */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-[#FAF9F6] p-4 rounded-xl border border-slate-200/50">
                      <span className="block text-[8px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">B.Tech Lateral Entry</span>
                      <p className="text-xs text-slate-650 leading-normal mt-2 font-semibold">Diploma in matching Engineering branch (min. 45% marks) + qualify WBJEE Board **JELET** counselling rank.</p>
                    </div>
                    <div className="bg-[#FAF9F6] p-4 rounded-xl border border-slate-200/50">
                      <span className="block text-[8px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">M.Tech Admission</span>
                      <p className="text-xs text-slate-650 leading-normal mt-2 font-semibold">B.Tech/BE in matching engineering branch. Must qualify **GATE** or **PGET** written exams & interview procedures.</p>
                    </div>
                    <div className="bg-[#FAF9F6] p-4 rounded-xl border border-slate-200/50">
                      <span className="block text-[8px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest">MCA Admission</span>
                      <p className="text-xs text-slate-650 leading-normal mt-2 font-semibold">Bachelor's Degree in computer applications or matching discipline with Mathematics compulsory + qualify **WB JECA** counselling.</p>
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
                    HITK Placements & Career Growth
                  </h2>
                  <p className="text-slate-300 text-xs md:text-sm font-sans leading-relaxed font-semibold">
                    Heritage Institute of Technology Kolkata is renowned for its excellent tech and core B.Tech packages inside the private sector of West Bengal.
                  </p>
                  
                  {/* Warning callout for one job policy */}
                  <div className="bg-red-500/10 border-l-4 border-red-500 p-4.5 rounded-xl space-y-1.5 mt-6">
                    <span className="block text-[8px] font-sans font-black text-red-400 uppercase tracking-widest">PLACEMENT CODE</span>
                    <p className="text-[11px] font-sans text-slate-250 leading-relaxed font-semibold">
                      "HITK strictly follows a <strong>one-job-per-student</strong> policy. Once a student is successfully placed in any company, they are ineligible to appear for subsequent corporate recruitment drives."
                    </p>
                  </div>
                </div>

                <div className="md:col-span-8 space-y-8">
                  {/* Highlight Cards Grid of 6 */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {placementStats2024.map((hl, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col justify-between">
                        <span className="block text-[8px] font-sans font-extrabold text-slate-400 uppercase tracking-widest">{hl.label}</span>
                        <div>
                          <span className={`block text-2xl font-serif font-bold mt-2 ${hl.value.includes("Crore") ? "text-amber-400" : "text-white"}`}>{hl.value}</span>
                          <span className="block text-slate-400 text-[10px] font-semibold mt-1 leading-snug">{hl.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 3-Year Placement Progress Table */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="text-[10px] font-sans font-bold text-slate-300 uppercase tracking-widest">3-Year NIRF Placement History</h4>
                      <span className="text-[9px] font-sans font-black text-amber-400 uppercase bg-amber-400/10 border border-amber-400/25 px-2 py-0.5 rounded">Source: NIRF 2025</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-md">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[500px]">
                          <thead>
                            <tr className="bg-white/10 text-white text-[9px] font-sans font-bold uppercase tracking-widest border-b border-white/10">
                              <th className="p-4">Academic Year</th>
                              <th className="p-4">Students Placed</th>
                              <th className="p-4">B.Tech UG Median</th>
                              <th className="p-4">PG Median Package</th>
                              <th className="p-4">Highest Annual Package</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 text-xs font-sans text-slate-300 font-semibold">
                            {placementHistoryTable.map((hist, idx) => (
                              <tr key={idx} className="hover:bg-white/5 transition-colors">
                                <td className="p-4 font-bold text-white">{hist.year}</td>
                                <td className="p-4">{hist.placed}</td>
                                <td className="p-4">{hist.ugMedian}</td>
                                <td className="p-4">{hist.pgMedian}</td>
                                <td className="p-4 text-amber-400 font-bold">{hist.highest}</td>
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
                      <h4 className="text-[10px] font-sans font-bold text-slate-300 uppercase tracking-widest">Top Recruiter Networks</h4>
                      <p className="text-[10px] text-slate-400 font-sans font-semibold mt-1">
                        100+ global brands and core corporations recruit B.Tech graduates annually.
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
                      TCS, Infosys, Wipro, IBM, Cognizant, ITC Infotech, Amazon, Accenture, Capgemini, Samsung R&D, Tech Mahindra, Persistent Systems, Google, Microsoft, Adobe, Oracle, DXCorr, Extramarks
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 8: TRAINING & FACILITIES */}
            <section id="facilities" ref={sectionsRef["facilities"]} className="scroll-mt-28 bg-white py-4 border-b border-slate-100 pb-12">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4 space-y-6">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c2340] border-l-4 border-[#c5a880] pl-4 tracking-tight leading-tight">
                    Training & Campus Facilities
                  </h2>
                  <p className="text-slate-500 text-xs font-semibold leading-relaxed font-sans pr-4">
                    HITK allocates heavy priority to student soft-skills development and campus infrastructure, supporting holistic research.
                  </p>

                  {/* Pre placement training checklist */}
                  <div className="bg-[#FAF9F6] border border-slate-200/50 rounded-2xl p-5 space-y-4">
                    <span className="block text-[9px] font-sans font-extrabold text-[#c5a880] uppercase tracking-widest font-sans">Pre-Placement Framework</span>
                    <ul className="space-y-3.5 text-xs text-slate-650 leading-relaxed font-sans font-semibold">
                      {prePlacementTraining.map((train, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start">
                          <CheckCircle2 className="h-4.5 w-4.5 text-amber-500 shrink-0 mt-0.5" />
                          <span>{train}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="md:col-span-8">
                  {/* Facilities Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-5">
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

            {/* SECTION 9: INTERNATIONAL COLLABORATIONS */}
            <section id="collaborations" ref={sectionsRef["collaborations"]} className="scroll-mt-28 bg-white py-4 border-b border-slate-100 pb-12">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c2340] border-l-4 border-[#c5a880] pl-4 tracking-tight leading-tight">
                    International Collaborations
                  </h2>
                </div>

                <div className="md:col-span-8 space-y-6">
                  <p className="text-slate-650 text-sm leading-relaxed font-sans font-medium">
                    HITK maintains active global networks, research programs, exchange directories, and MoUs with major global Universities and core industries to offer premium industrial research.
                  </p>
                  
                  {/* MoU Checklist */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {internationalMoUs.map((mou, idx) => (
                      <div key={idx} className="bg-[#FAF9F6] border border-slate-200/50 p-4.5 rounded-xl flex gap-3 items-start shadow-sm hover:border-[#c5a880]/30 transition-all">
                        <School className="h-5 w-5 text-[#0c2340] shrink-0 mt-0.5" />
                        <span className="text-xs font-sans font-bold text-slate-700 leading-snug">{mou}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 10: SCHOLARSHIPS */}
            <section id="scholarships" ref={sectionsRef["scholarships"]} className="scroll-mt-28 bg-white py-4 border-b border-slate-100 pb-12">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c2340] border-l-4 border-[#c5a880] pl-4 tracking-tight leading-tight">
                    Scholarships Available
                  </h2>
                </div>

                <div className="md:col-span-8 space-y-6">
                  <p className="text-slate-650 text-sm leading-relaxed font-sans font-medium text-slate-600">
                    Various government-sponsored merit scholarships, concessions, and institutional freeships are actively supported at Heritage Institute of Technology to help students from all economic brackets.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {scholarships.map((sch, idx) => (
                      <div key={idx} className="bg-[#FAF9F6] border border-slate-200/50 p-4.5 rounded-xl flex gap-3 items-start hover:shadow-sm transition-all duration-300">
                        <Gift className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                        <span className="text-xs font-sans font-bold text-slate-700 leading-relaxed">{sch}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 11: FAQs */}
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

            {/* SECTION 12: CONTACT & INQUIRY */}
            <section id="contact" ref={formRef} className="scroll-mt-28 bg-[#FAF9F6] py-12 border border-slate-150 rounded-3xl">
              <div className="max-w-4xl mx-auto space-y-12 px-6">
                
                {/* Yellow counseling card */}
                <div className="bg-amber-400/80 rounded-3xl p-8 border border-amber-500 shadow-md flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="space-y-2 text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-serif font-black text-[#0c2340]">Want Admission Guidance for HITK?</h3>
                    <p className="text-xs text-slate-800 font-sans font-semibold leading-relaxed max-w-xl">
                      Our senior counselors at Antigravity SS Edu will help you with WBJEE cutoffs, seat availability, documentation, and your complete admission process — for free.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <a
                      href="tel:+919933085333"
                      className="flex h-11 bg-[#0c2340] hover:bg-[#0c2340]/90 text-white font-sans font-bold text-xs uppercase tracking-widest px-6 rounded-xl transition-all shadow-md items-center justify-center gap-2"
                    >
                      <Phone className="h-4 w-4" /> Call Counselor
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
                      <h3 className="text-base font-serif font-bold text-slate-900">Counseling Request Submitted!</h3>
                      <p className="mt-2 text-slate-500 font-sans text-xs font-semibold leading-relaxed">
                        Thank you for your response. A senior engineering counselor from Antigravity SS Edu will contact you within 24 hours to assist with your Heritage Kolkata admission procedure.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="pb-3 border-b border-slate-100">
                        <h3 className="text-sm font-sans font-black uppercase tracking-widest text-[#0c2340]">Advisor Request Profile</h3>
                        <p className="text-[10px] font-sans font-bold text-slate-400 uppercase tracking-widest mt-0.5">Heritage Kolkata Counselling Panel</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="hitk-lead-name" className="text-[10px] font-sans font-bold uppercase tracking-widest text-slate-400 mb-1.5 block">Full Name *</Label>
                          <Input
                            id="hitk-lead-name"
                            placeholder="E.g. Akash Roy"
                            className="h-11 rounded-xl bg-slate-50 border-slate-200/50 font-medium focus:bg-white text-xs text-slate-800 transition-all font-sans"
                            value={formData.name || ""}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                          />
                          {errors.name && <p className="text-[9px] font-sans font-bold text-rose-500 mt-1">{errors.name}</p>}
                        </div>

                        <div>
                          <Label htmlFor="hitk-lead-phone" className="text-[10px] font-sans font-bold uppercase tracking-widest text-slate-400 mb-1.5 block">Phone Number *</Label>
                          <Input
                            id="hitk-lead-phone"
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
                          <Label htmlFor="hitk-lead-email" className="text-[10px] font-sans font-bold uppercase tracking-widest text-slate-400 mb-1.5 block">Email (Optional)</Label>
                          <Input
                            id="hitk-lead-email"
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
                              <SelectItem value="BTech IT/ECE/EE">B.Tech - IT/ECE/EE</SelectItem>
                              <SelectItem value="BTech Core (ME/CE/CHE/BT)">B.Tech - ME/CE/CHE/BT</SelectItem>
                              <SelectItem value="B.Des">B.Des (Design)</SelectItem>
                              <SelectItem value="BCA">BCA</SelectItem>
                              <SelectItem value="MCA">MCA</SelectItem>
                              <SelectItem value="M.Tech">M.Tech</SelectItem>
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
            <p>Data Sources: NIRF 2025 Report | Official HITK Website (heritageit.edu) | NAAC | Collegedunia | Careers360</p>
            <p>Disclaimer: "Information is sourced from official and verified public data. For the latest updates, visit heritageit.edu."</p>
            <p>Last updated: June 2026</p>
          </div>
        </div>
      </section>

    </main>
  );
}
