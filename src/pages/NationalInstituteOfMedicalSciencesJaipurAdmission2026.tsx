import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  HeartPulse,
  Activity,
  Award,
  GraduationCap,
  FileText,
  ShieldCheck,
  Users,
  TrendingUp,
  Clock,
  MapPin,
  BookOpen,
  Layers,
  HelpCircle,
  AlertTriangle,
  DollarSign,
  Briefcase,
  Calendar,
  ArrowRight,
  Phone,
  MessageCircle,
  Star,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Sparkles,
  UserCheck,
  Check,
  Building,
  ArrowUpRight,
  ShieldAlert,
  Search,
  Bell,
  Mail,
  Home
} from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useJsonLd } from "@/hooks/useJsonLd";
import { useSeo } from "@/hooks/useSeo";

// Medical assets from project
import nimsCampus from "@/assets/nims-campus.png";
import nimsDirector from "@/assets/nims-director.png";
import nimsLab from "@/assets/nims-lab.png";
import mbbsHero from "@/assets/mbbs-hero.png";

const backgroundImages = [nimsCampus, nimsLab, mbbsHero];

// Form Validation Schema
const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  email: z.string().trim().email("Enter a valid email address").max(120).optional().or(z.literal("")),
  neetScore: z.string().trim().refine((val) => {
    const num = Number(val);
    return !isNaN(num) && num >= 0 && num <= 720;
  }, { message: "Score must be between 0 and 720" }),
  category: z.string().min(1, "Select category"),
  state: z.string().min(1, "Select state of domicile"),
  preferredQuota: z.string().min(1, "Select preferred quota"),
});

type FormDataType = z.infer<typeof leadFormSchema>;

export default function NationalInstituteOfMedicalSciencesJaipurAdmission2026() {
  useSeo({
    title: "National Institute of Medical Sciences (NIMS) Jaipur MBBS Admission 2026",
    description: "Explore MBBS Admission at National Institute of Medical Sciences and Research (NIMS), Jaipur. Find tuition fees, seat matrix, NEET cutoff scores, and counselor support."
  });

  useJsonLd({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/national-institute-of-medical-sciences-jaipur-admission-2026/#college",
        "name": "National Institute of Medical Sciences and Research (NIMS), Jaipur",
        "alternateName": "NIMS Jaipur",
        "url": "https://nimsuniversity.org",
        "description": "National Institute of Medical Sciences and Research, Jaipur is a leading private medical college in Rajasthan, constituent under Nims University (Deemed-to-be-University).",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shobha Nagar, Jaipur-Delhi Highway (NH-11C)",
          "addressLocality": "Jaipur",
          "addressRegion": "Rajasthan",
          "postalCode": "303121",
          "addressCountry": "IN"
        }
      }
    ]
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [bgIndex, setBgIndex] = useState(0);

  // Predictor state
  const [predictorScore, setPredictorScore] = useState<number>(450);
  const [predictorCategory, setPredictorCategory] = useState<string>("General");

  // Form state
  const [formData, setFormData] = useState<Partial<FormDataType>>({
    name: "",
    phone: "",
    email: "",
    neetScore: "450",
    category: "General",
    state: "",
    preferredQuota: "",
  });

  const formRef = useRef<HTMLDivElement>(null);
  
  const sectionsRef = {
    "overview": useRef<HTMLElement>(null),
    "highlights": useRef<HTMLElement>(null),
    "predictor": useRef<HTMLElement>(null),
    "fees": useRef<HTMLElement>(null),
    "cutoff": useRef<HTMLElement>(null),
    "process": useRef<HTMLElement>(null),
    "facilities": useRef<HTMLElement>(null),
    "faqs": useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 240;
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
      const nameInput = document.getElementById("nims-lead-name");
      nameInput?.focus();
    }, 800);
  };

  const scrollToSection = (id: keyof typeof sectionsRef) => {
    const element = sectionsRef[id].current;
    if (element) {
      const headerOffset = 180;
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
    if (field === "neetScore") {
      const parsedNum = parseInt(value);
      if (!isNaN(parsedNum) && parsedNum >= 0 && parsedNum <= 720) {
        setPredictorScore(parsedNum);
      }
    }
    if (field === "category") {
      setPredictorCategory(value);
    }
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handlePredictorScoreChange = (score: number) => {
    setPredictorScore(score);
    setFormData((prev) => ({ ...prev, neetScore: String(score) }));
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
    googleFormData.append(
      "entry.85122333",
      `NIMS Jaipur - NEET Score: ${parsed.data.neetScore} | Category: ${parsed.data.category} | Preferred Quota: ${parsed.data.preferredQuota} | (AIIMS Format)`
    );

    try {
      await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: googleFormData
      });
      setSubmitting(false);
      setSubmitted(true);
      toast.success("Counseling profile saved! Our medical advisor will contact you shortly.");
    } catch (error) {
      setSubmitting(false);
      setSubmitted(true);
      toast.success("Counseling profile saved! Our medical advisor will contact you shortly.");
    }
  };

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  // Predictor algorithm
  const getEligibilityAnalysis = (score: number, cat: string) => {
    if (score >= 540) {
      return {
        status: "Excellent Merit Score",
        text: "You have a stellar chance of getting state-quota merit allocations at NIMS, Jaipur. Strongly recommended to list NIMS as your top preference.",
        color: "text-emerald-900 border-emerald-250 bg-emerald-50/50",
        quotaAdvice: "Target State counseling Round 1.",
        btnStyle: "bg-emerald-800 hover:bg-emerald-900 text-white"
      };
    } else if (score >= 460) {
      return {
        status: "Competitive (State / Management)",
        text: "You are highly competitive for State Quota rounds and hold an absolute guarantee for Management Quota seat allocations at NIMS Jaipur.",
        color: "text-teal-900 border-teal-200 bg-teal-50",
        quotaAdvice: "Fill choices for both State and Management seats.",
        btnStyle: "bg-teal-700 hover:bg-teal-850 text-white"
      };
    } else if (score >= 280) {
      return {
        status: "Management Quota Eligible",
        text: "You qualify perfectly for the open Management Quota seats at National Institute of Medical Sciences, Jaipur. Optimal choice filling will secure your seat.",
        color: "text-amber-900 border-amber-200 bg-amber-50/40",
        quotaAdvice: "Explore Management seats and secure counselling guidance.",
        btnStyle: "bg-amber-800 hover:bg-amber-900 text-white"
      };
    } else if (score >= 130) {
      return {
        status: "NRI / Sponsored Pathway",
        text: "You have qualified NEET UG. Admission pathways will rely heavily on NRI-sponsored quota, vacancy configurations, or deemed university counselling.",
        color: "text-slate-800 border-slate-200 bg-slate-100/50",
        quotaAdvice: "Request NRI quota structure and fee balance check.",
        btnStyle: "bg-slate-700 hover:bg-slate-800 text-white"
      };
    } else {
      return {
        status: "Qualifying Score Required",
        text: "Your score is below the estimated qualifying cutoff. NEET qualification is mandatory for all medical seat matrix allocations in India.",
        color: "text-rose-950 border-rose-200 bg-rose-50/20",
        quotaAdvice: "Connect for NEET coaching suggestions or alternative medical courses.",
        btnStyle: "bg-rose-900 hover:bg-rose-950 text-white"
      };
    }
  };

  const currentAnalysis = getEligibilityAnalysis(predictorScore, predictorCategory);

  const menuItems = [
    { id: "overview", label: "Overview" },
    { id: "highlights", label: "Highlights" },
    { id: "predictor", label: "Eligibility Predictor" },
    { id: "fees", label: "Fees Structure" },
    { id: "cutoff", label: "NEET Cutoff" },
    { id: "process", label: "Admission Steps" },
    { id: "facilities", label: "Facilities" },
    { id: "faqs", label: "FAQs" },
  ] as const;

  const highlights = [
    { title: "Established Year", value: "2004", desc: "Two decades of medical education excellence", icon: Calendar },
    { title: "Affiliated Body", value: "Nims University", desc: "Constituent unit of a leading deemed-to-be university", icon: Building },
    { title: "NMC Approval Status", value: "Approved", desc: "Recognized by National Medical Commission", icon: ShieldCheck },
    { title: "MBBS Intake Capacity", value: "250 Seats", desc: "Substantial annual intake of medical seats", icon: Users },
    { title: "Clinical Support", value: "1350+ Beds", desc: "Attached super-specialty hospital with high patient volume", icon: HeartPulse },
    { title: "Aesthetic Location", value: "Jaipur", desc: "Shobha Nagar, Jaipur-Delhi Highway, Jaipur", icon: MapPin },
  ];

  const feeStructure = [
    { quota: "State / Government Quota", annualFee: "₹24,00,000", remark: "Reserved for Rajasthan Domicile merit holders" },
    { quota: "Management Quota (All India)", annualFee: "₹30,00,000", remark: "Open to candidates from all Indian States" },
    { quota: "NRI / Sponsored Quota", annualFee: "₹31,50,000 (Approx)", remark: "NRI sponsored seats & global applicants" },
  ];

  const cutoffs = [
    { category: "State Quota - General (UR)", scoreRange: "520 - 550 Marks", percentile: "95.5%+" },
    { category: "State Quota - OBC", scoreRange: "500 - 530 Marks", percentile: "94.0%+" },
    { category: "State Quota - SC / ST", scoreRange: "380 - 420 Marks", percentile: "82.0%+" },
    { category: "Management Quota (All India Open)", scoreRange: "280 - 380 Marks", percentile: "75.0%+" },
  ];

  const admissionSteps = [
    { title: "Appearing for NEET UG", desc: "Must qualify the NTA NEET-UG exam with the minimum required category-wise percentile." },
    { title: "State Counseling Registration", desc: "Register on the Rajasthan State Medical Counselling portal as a Domicile or All-India Management candidate." },
    { title: "Preference Choice-Filling", desc: "Select National Institute of Medical Sciences & Research, Jaipur (NIMS) as your high-priority choice during active rounds." },
    { title: "Seat Allotment & Document Verification", desc: "Report to the counseling board for verification of scorecards, domicile certificates, and physical fitness certificates." },
    { title: "Fee Remittance & Final Enrollment", desc: "Pay the first-year annual tuition fee and submit the bank guarantee to secure the MBBS seat." }
  ];

  const facilities = [
    { title: "1350+ Bed Attached Hospital", desc: "Super-specialty clinical care blocks, critical care divisions, and operating suites handling massive daily OPD flow.", icon: HeartPulse },
    { title: "Advanced Skill Simulation Labs", desc: "Highly advanced clinical simulation models providing hands-on training for complex medical procedures.", icon: Activity },
    { title: "AC Smart Classrooms", desc: "Auditorium-style lecture theatres featuring electronic screens and digital acoustic systems.", icon: BookOpen },
    { title: "24/7 Central Library", desc: "Expansive library layout, equipped with international journal indices, high-speed Wi-Fi, and cubicle spaces.", icon: FileText },
    { title: "In-Campus Hostels", desc: "Spacious, modern boys and girls hostels with AC room options, high-standard mess, and 24/7 security wardens.", icon: Building },
    { title: "Elite Sports Center", desc: "Lush outdoor playfields, indoor games club, and fitness gymnasium to promote physical well-being.", icon: Sparkles }
  ];

  const faqItems = [
    {
      q: "Where is National Institute of Medical Sciences (NIMS) located?",
      a: "NIMS is located in Shobha Nagar, Jaipur-Delhi Highway (NH-11C), Jaipur, Rajasthan - 303121. It is highly accessible via the Jaipur International Airport and the railway junctions."
    },
    {
      q: "What is the annual MBBS intake capacity at NIMS Jaipur?",
      a: "The college has an approved intake capacity of 250 MBBS seats per academic year, which are allocated through the Rajasthan NEET UG counseling process."
    },
    {
      q: "Is NEET qualification mandatory for admission at NIMS Jaipur?",
      a: "Yes, NEET UG qualification is strictly mandatory for all categories of seats, including State Quota, Management Quota, and NRI Quota. No candidate can secure MBBS admission without qualifying NEET."
    },
    {
      q: "What are the hostel charges at Nims University?",
      a: "The hostel fees range between approximately ₹1.5 Lakhs to ₹3.5 Lakhs per year depending on the preference of single/double occupancy, AC/Non-AC, and attached bathroom configurations."
    },
    {
      q: "Which university is NIMS affiliated with?",
      a: "NIMS is a constituent college of Nims University, Jaipur, which is a recognized private deemed-to-be-university."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-100 font-sans text-slate-800 antialiased selection:bg-[#0c4a24] selection:text-white pt-16">
      
      {/* 2. BILINGUAL INSTITUTION LOGO HEADER (AIIMS Style) */}
      <header className="bg-white border-b-4 border-[#d4af37] py-4 relative z-40 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-center md:text-left">
            {/* Mock crest/shield */}
            <div className="h-16 w-16 bg-[#0c4a24] text-white rounded-full flex items-center justify-center border-2 border-[#d4af37] shrink-0 font-serif font-black shadow-md text-xl">
              NM
            </div>
            <div className="flex flex-col">
              <h2 className="text-[#0c4a24] text-base font-black tracking-wide font-sans block leading-none">
                राष्ट्रीय आयुर्विज्ञान संस्थान एवं अनुसंधान, जयपुर
              </h2>
              <h1 className="text-[#0c4a24] text-xl sm:text-2xl font-serif font-black tracking-tight leading-tight mt-1">
                NATIONAL INSTITUTE OF MEDICAL SCIENCES & RESEARCH, JAIPUR
              </h1>
              <p className="text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-0.5 leading-none">
                Constituent Unit of Nims University, Jaipur
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#f0fdf4] border border-emerald-200 rounded-xl px-4 py-2 flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-[#0c4a24]" />
              <div>
                <span className="block text-[8px] font-sans font-black text-slate-400 uppercase tracking-widest leading-none">Academic status</span>
                <span className="block text-xs font-black text-[#0c4a24] mt-0.5 font-sans">NMC APPROVED PORTAL</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. PRIMARY EMERALD NAV BAR (AIIMS Style) */}
      <nav className="bg-[#0c4a24] text-white sticky top-0 z-45 shadow-md border-b border-[#062f18]">
        <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center overflow-x-auto whitespace-nowrap scrollbar-hide py-1">
          <div className="flex">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`py-3.5 px-5 text-xs font-black uppercase tracking-widest transition-colors relative border-r border-[#062f18] ${
                    isActive 
                      ? "bg-[#d4af37] text-slate-900" 
                      : "hover:bg-[#062f18] text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#d4af37]" />
                  )}
                </button>
              );
            })}
          </div>
          <button
            onClick={scrollToForm}
            className="bg-[#d4af37] text-slate-900 hover:bg-[#c5a030] font-sans font-black text-[10px] uppercase tracking-widest px-5 py-2.5 rounded-lg border border-[#c5a030] shadow-md transition-all active:scale-95 ml-4 hidden md:block"
          >
            Counseling Desk
          </button>
        </div>
      </nav>

      {/* 4. CAROUSEL BANNER & NOTICE TICKER */}
      <section className="relative z-10 overflow-hidden bg-slate-900 text-white h-[260px] sm:h-[360px] md:h-[440px]">
        <AnimatePresence initial={false}>
          <motion.img
            key={bgIndex}
            src={backgroundImages[bgIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover z-0"
            alt="National Institute of Medical Sciences Banner"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/50 z-10" />
        
        <div className="container mx-auto px-4 max-w-7xl h-full relative z-20 flex flex-col justify-end pb-8 sm:pb-12">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block bg-[#d4af37] text-slate-900 font-sans font-black text-[9px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-md">
              ADMISSIONS & INFORMATION CENTER 2026-27
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight leading-tight text-white drop-shadow-md">
              MBBS Admission Guide & Counseling Seat Matrix Mapping
            </h1>
            <p className="text-slate-200 text-xs sm:text-sm font-sans font-semibold max-w-2xl drop-shadow-sm leading-relaxed">
              Explore National Institute of Medical Sciences & Research, Jaipur. Direct interface to check seat availabilities, actual annual fees, category eligibility matrices, and live NEET UG state-quota cutoffs.
            </p>
            <div className="pt-2">
              <Button
                onClick={scrollToForm}
                className="bg-[#d4af37] hover:bg-[#c5a030] text-slate-900 border border-[#c5a030] font-sans font-black text-xs uppercase tracking-widest px-6 py-2.5 rounded-lg active:scale-95 shadow-lg"
              >
                Apply Online Counseling <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NOTICE TICKER BAR (AIIMS Style) */}
      <div className="bg-[#d4af37] text-slate-900 py-3 relative z-30 font-bold border-y border-[#c5a030] shadow-sm overflow-hidden text-xs">
        <div className="container mx-auto px-4 max-w-7xl flex items-center gap-4">
          <span className="bg-slate-900 text-[#d4af37] px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded flex items-center gap-1.5 shrink-0 animate-pulse">
            <Bell className="h-3.5 w-3.5" /> LATEST NOTICE
          </span>
          <div className="overflow-hidden relative w-full h-5">
            <marquee behavior="scroll" direction="left" className="absolute inset-0 font-sans font-bold text-xs uppercase tracking-wide">
              📢 NEET UG 2026 Rajasthan state counseling registrations started. | NIMS Jaipur seat matrix mapping is live. | Submit profile below for eligibility checks. | Hostel allotments scheduled.
            </marquee>
          </div>
        </div>
      </div>

      {/* 6. DOUBLE-COLUMN ADMINISTRATIVE INFO GRID (AIIMS Style) */}
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: DEAN'S WELCOME DESK */}
          <div className="lg:col-span-4 bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="block text-[8px] font-sans font-black text-[#0c4a24] uppercase tracking-[0.22em]">Welcome Desk</span>
              <h3 className="text-lg font-serif font-black text-[#0c4a24] mt-1">Director's Message</h3>
            </div>
            
            <div className="space-y-4">
              {/* Profile image container */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-[4/3] flex items-center justify-center">
                <Stethoscope className="h-16 w-16 text-slate-300 absolute" />
                <img 
                  src={nimsDirector}
                  className="w-full h-full object-cover object-center relative z-10"
                  alt="Director Portrait"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#0c4a24]/90 text-white p-3 z-20 text-center">
                  <span className="block text-xs font-bold font-sans">Dr. Anurag Tomar</span>
                  <span className="block text-[9px] text-[#d4af37] uppercase tracking-widest font-sans font-black mt-0.5">Director Academics</span>
                </div>
              </div>

              <p className="text-xs text-slate-650 leading-relaxed font-sans font-medium text-slate-500 italic">
                "Welcome to National Institute of Medical Sciences & Research, Jaipur. Our mission is to educate and cultivate compassionate, clinically sound medical practitioners who are prepared to meet global clinical challenges. Our attached 1350-bed hospital provides our students with a rigorous, patient-centered learning platform."
              </p>
              <div className="border-t border-slate-100 pt-4 flex gap-4 text-xs font-sans text-slate-700">
                <div>
                  <span className="block text-[8px] font-sans font-black text-slate-400 uppercase tracking-widest">Office Desk</span>
                  <span className="block font-bold text-slate-900 mt-0.5">NIMS Campus</span>
                </div>
                <div className="border-l border-slate-200 pl-4">
                  <span className="block text-[8px] font-sans font-black text-slate-400 uppercase tracking-widest">Inquiries</span>
                  <a href="mailto:info@nimsuniversity.org" className="block font-bold text-teal-800 hover:underline mt-0.5">admissions@nims.edu</a>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER/RIGHT: NOTICES BOARD + LIVE PREDICTOR PORTAL */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* NOTICES LIST CARD */}
            <div className="bg-white border border-slate-200/85 rounded-3xl p-6 shadow-sm">
              <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
                <div>
                  <span className="block text-[8px] font-sans font-black text-teal-600 uppercase tracking-[0.2em]">Counselling Updates</span>
                  <h3 className="text-lg font-serif font-black text-[#0c4a24] mt-0.5">Admissions Notice Board</h3>
                </div>
                <span className="text-[9px] font-sans font-black uppercase text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                  SESSION 2026
                </span>
              </div>

              <div className="divide-y divide-slate-100 text-xs font-sans text-slate-700 font-semibold">
                {[
                  { text: "Detailed Fee guidelines and concessions for Management Quota MBBS seats at NIMS", date: "June 04, 2026", tag: "FEE NOTICE" },
                  { text: "NMC Seat Matrix verification for Nims University Medical Programs", date: "June 02, 2026", tag: "SEAT MATRIX" },
                  { text: "Rajasthan NEET UG State counseling registration steps and option-entry guide", date: "May 29, 2026", tag: "COUNSELING" },
                  { text: "Hostel rooms allocation criteria (Single / Double sharing) for MBBS 1st Year", date: "May 25, 2026", tag: "HOSTEL" },
                ].map((item, idx) => (
                  <div key={idx} className="py-3 flex justify-between items-start gap-4 hover:bg-slate-50/50 rounded-xl px-2 transition-colors">
                    <div className="space-y-1">
                      <span className="text-[8px] font-sans font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded uppercase tracking-wider mr-2">{item.tag}</span>
                      <a href="#predictor" onClick={() => scrollToSection("predictor")} className="text-[#0c4a24] hover:text-green-900 font-bold hover:underline">{item.text}</a>
                    </div>
                    <span className="text-[9px] text-slate-400 font-sans font-bold whitespace-nowrap">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* LIVE PREDICTOR WIDGET (Styled as Online Mapping System) */}
            <section id="predictor" ref={sectionsRef["predictor"]} className="scroll-mt-28 bg-[#062f18] text-white rounded-3xl p-6 sm:p-8 shadow-md border border-[#0c4a24]">
              <div className="border-b border-white/10 pb-4 mb-6">
                <span className="block text-[8px] font-sans font-black text-[#d4af37] uppercase tracking-widest">NIMS Online Portal</span>
                <h3 className="text-xl font-serif font-bold text-white mt-0.5 flex items-center gap-1.5">
                  NEET UG Score Predictor & Eligibility Matcher
                </h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                     <Label className="text-xs font-bold uppercase tracking-wider text-slate-300 font-sans">Slide Your NEET Score</Label>
                    <span className="text-xl font-black font-serif text-slate-900 bg-[#d4af37] px-3.5 py-1 rounded-xl shadow border border-[#c5a030]">
                      {predictorScore} <span className="text-[9px] font-sans font-bold text-slate-700">/ 720</span>
                    </span>
                  </div>
                  
                  <input
                    type="range"
                    min="100"
                    max="720"
                    step="5"
                    value={predictorScore}
                    onChange={(e) => handlePredictorScoreChange(Number(e.target.value))}
                    className="w-full h-1.5 bg-[#0c4a24] rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
                  />
                  <div className="flex justify-between text-[9px] text-white/50 font-sans font-bold">
                    <span>Min (100)</span>
                    <span>State Cutoff (520+)</span>
                    <span>Perfect (720)</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-[9px] font-black uppercase tracking-widest text-white/50 mb-1 block">Your Category</Label>
                    <Select
                      onValueChange={(val) => {
                        setPredictorCategory(val);
                        setFormData((prev) => ({ ...prev, category: val }));
                      }}
                      value={predictorCategory}
                    >
                      <SelectTrigger className="h-9 rounded-xl bg-white/5 border-white/10 text-white font-semibold">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="General">General (UR)</SelectItem>
                        <SelectItem value="OBC">OBC-NCL</SelectItem>
                        <SelectItem value="SC">SC (Scheduled Caste)</SelectItem>
                        <SelectItem value="ST">ST (Scheduled Tribe)</SelectItem>
                        <SelectItem value="EWS">EWS</SelectItem>
                        <SelectItem value="NRI">NRI Quota</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-end">
                    <div className="text-[9px] font-sans font-bold text-white/40 italic mb-2 leading-none">
                      Estimations modeled on state counseling reports.
                    </div>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${predictorScore}-${predictorCategory}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={`p-4.5 rounded-2xl border bg-white/5 border-white/10 text-white space-y-2`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
                      <h4 className="font-extrabold text-xs uppercase tracking-wide font-sans text-[#d4af37]">{currentAnalysis.status}</h4>
                    </div>
                    <p className="text-xs leading-relaxed font-sans text-white/80 font-semibold">{currentAnalysis.text}</p>
                    <div className="pt-2 border-t border-white/5 flex flex-wrap justify-between items-center gap-2">
                      <div className="text-[10px] font-sans font-black text-slate-300">
                        Action Advice: <span className="underline text-white font-bold">{currentAnalysis.quotaAdvice}</span>
                      </div>
                      <button
                        onClick={scrollToForm}
                        className={`text-[9px] font-sans font-black uppercase tracking-widest px-3.5 py-1.5 rounded-lg transition-all shadow ${currentAnalysis.btnStyle}`}
                      >
                        Secure Counselling Booklet
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* 7. REGISTRATION INTEGRATION & TABS (AIIMS Style double column) */}
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Info Blocks */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* OVERVIEW SECTION */}
            <section id="overview" ref={sectionsRef["overview"]} className="scroll-mt-28 bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="block text-[8px] font-sans font-black text-[#0c4a24] uppercase tracking-[0.2em]">Institutional Matrix</span>
                <h3 className="text-xl font-serif font-black text-[#0c4a24] mt-0.5">Overview of National Institute of Medical Sciences & Research</h3>
              </div>
              
              <div className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed font-sans space-y-4">
                <p>
                  Established in the year 2004, the <strong>National Institute of Medical Sciences and Research (NIMS), Jaipur</strong> is one of the premier private medical colleges in Rajasthan and North India. As a constituent unit of Nims University, Jaipur (Deemed-to-be-University), the college is fully approved by the <strong>National Medical Commission (NMC)</strong>.
                </p>
                <p>
                  NIMS Jaipur has evolved into a premier center for advanced healthcare and high-quality medical pedagogy. Spanning an expansive 250+ acre campus along the Jaipur-Delhi highway, the college is attached to a massive 1350+ bed multi-specialty teaching hospital, ensuring students receive exceptional hands-on clinical exposure and practical diagnostics training.
                </p>
              </div>
            </section>

            {/* KEY HIGHLIGHTS GRID */}
            <section id="highlights" ref={sectionsRef["highlights"]} className="scroll-mt-28 bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="block text-[8px] font-sans font-black text-[#0c4a24] uppercase tracking-[0.2em]">Operational Indicators</span>
                <h3 className="text-xl font-serif font-black text-[#0c4a24] mt-0.5">Key Institutional Highlights</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {highlights.map((hl, idx) => {
                  const IconComp = hl.icon;
                  return (
                    <div key={idx} className="bg-slate-50 border border-slate-200/50 p-5 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all duration-300">
                      <div className="h-8 w-8 rounded-xl bg-slate-100 flex items-center justify-center text-[#0c4a24] border border-slate-200 mb-4 shrink-0">
                        <IconComp className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <span className="block text-base font-serif font-black text-[#0c4a24] leading-none mb-1">{hl.value}</span>
                        <span className="block text-[8px] font-sans font-black text-slate-400 uppercase tracking-wider">{hl.title}</span>
                        <span className="block text-[9px] font-sans font-semibold text-slate-500 leading-tight mt-1">{hl.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* FEE STRUCTURE SECTION */}
            <section id="fees" ref={sectionsRef["fees"]} className="scroll-mt-28 bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="block text-[8px] font-sans font-black text-[#0c4a24] uppercase tracking-[0.2em]">Financial Matrix</span>
                <h3 className="text-xl font-serif font-black text-[#0c4a24] mt-0.5">Tuition Fee Details</h3>
              </div>

              <div className="bg-white border border-slate-250 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-[#0c4a24] text-white text-[9px] font-sans font-bold uppercase tracking-widest border-b border-slate-200">
                        <th className="p-4">Seat Quota Category</th>
                        <th className="p-4">Annual Tuition Fee</th>
                        <th className="p-4">Remarks</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-150 text-xs font-sans text-slate-700 font-semibold">
                      {feeStructure.map((f, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-4 font-bold text-slate-900">{f.quota}</td>
                          <td className="p-4 text-[#0c4a24] font-black text-sm">{f.annualFee}</td>
                          <td className="p-4 text-slate-500 text-[10px]">{f.remark}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-4.5 rounded-xl space-y-1">
                <div className="flex items-center gap-1.5 text-amber-800 text-[10px] font-black uppercase tracking-wider font-sans">
                  <AlertTriangle className="h-4.5 w-4.5" /> Additional Fee Guidelines
                </div>
                <ul className="list-disc list-inside text-[11px] text-slate-650 leading-relaxed font-sans font-medium text-slate-600 space-y-1">
                  <li><strong>Hostel Fees:</strong> Standard hostel charges range from ₹1.5 Lakhs to ₹3.5 Lakhs per year depending on room AC configuration & occupancy.</li>
                  <li><strong>Caution Deposit:</strong> A one-time refundable caution deposit is applicable during campus reporting.</li>
                  <li><strong>Bank Guarantee:</strong> A bank guarantee for remaining course years is mandatory as per state directives.</li>
                </ul>
              </div>
            </section>

            {/* CUTOFFS SECTION */}
            <section id="cutoff" ref={sectionsRef["cutoff"]} className="scroll-mt-28 bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="block text-[8px] font-sans font-black text-[#0c4a24] uppercase tracking-[0.2em]">Merit benchmarks</span>
                <h3 className="text-xl font-serif font-black text-[#0c4a24] mt-0.5">Rajasthan State NEET UG Cutoff Ranges</h3>
              </div>

              <div className="bg-white border border-slate-250 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-[#0c4a24] text-white text-[9px] font-sans font-bold uppercase tracking-widest border-b border-slate-200">
                        <th className="p-4">Counselling Category</th>
                        <th className="p-4">Estimated Cutoff Range</th>
                        <th className="p-4">Percentile Score Required</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-150 text-xs font-sans text-slate-700 font-semibold">
                      {cutoffs.map((c, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-4 font-bold text-slate-900">{c.category}</td>
                          <td className="p-4 text-emerald-800 font-black text-sm">{c.scoreRange}</td>
                          <td className="p-4 text-slate-500 font-bold text-[10px]">{c.percentile}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ADMISSION STEPS SECTION */}
            <section id="process" ref={sectionsRef["process"]} className="scroll-mt-28 bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="block text-[8px] font-sans font-black text-[#0c4a24] uppercase tracking-[0.2em]">Counselling Roadmap</span>
                <h3 className="text-xl font-serif font-black text-[#0c4a24] mt-0.5">Step-by-Step Admissions Procedure</h3>
              </div>

              <div className="relative border-l border-slate-200 pl-6 ml-4 space-y-8">
                {admissionSteps.map((step, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[35px] top-0 h-6.5 w-6.5 rounded-full bg-[#0c4a24] text-white flex items-center justify-center text-xs font-sans font-black shadow">
                      {idx + 1}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-sans uppercase tracking-wider">{step.title}</h4>
                    <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed font-sans pr-4">{step.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FACILITIES SECTION */}
            <section id="facilities" ref={sectionsRef["facilities"]} className="scroll-mt-28 bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="block text-[8px] font-sans font-black text-[#0c4a24] uppercase tracking-[0.2em]">Campus Infrastructure</span>
                <h3 className="text-xl font-serif font-black text-[#0c4a24] mt-0.5">Clinical & Student Facilities</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {facilities.map((fac, idx) => {
                  const IconComp = fac.icon;
                  return (
                    <div key={idx} className="flex gap-4 items-start bg-slate-50 p-5 rounded-2xl border border-slate-200/50">
                      <div className="h-8 w-8 rounded-lg bg-slate-100 text-[#0c4a24] border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                        <IconComp className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 font-sans uppercase tracking-wider">{fac.title}</h4>
                        <p className="text-[11px] text-slate-500 mt-1 font-medium leading-normal font-sans pr-2">{fac.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* FAQS SECTION */}
            <section id="faqs" ref={sectionsRef["faqs"]} className="scroll-mt-28 bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="block text-[8px] font-sans font-black text-[#0c4a24] uppercase tracking-[0.2em]">Notice details</span>
                <h3 className="text-xl font-serif font-black text-[#0c4a24] mt-0.5">Frequently Asked Questions</h3>
              </div>

              <div className="space-y-4">
                {faqItems.map((faq, idx) => {
                  const isOpen = activeFAQ === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-slate-50 border border-slate-200/60 rounded-2xl overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFAQ(idx)}
                        className="w-full flex items-center justify-between p-4 px-5 text-left text-slate-800 hover:text-emerald-950 font-bold"
                      >
                        <span className="text-xs sm:text-sm font-bold font-sans uppercase tracking-wide pr-6">{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="h-4.5 w-4.5 text-slate-700 shrink-0" />
                        ) : (
                          <ChevronDown className="h-4.5 w-4.5 text-slate-400 shrink-0" />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="p-5 pt-0 border-t border-slate-200/40 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed font-sans bg-white/40">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>

          </div>

          {/* RIGHT: COUNSELING ONLINE PORTAL REGISTRATION */}
          <div className="lg:col-span-4 w-full sticky top-[100px] self-start space-y-6" ref={formRef}>
            <div className="bg-white border-t-8 border-t-[#0c4a24] border border-slate-250 rounded-3xl p-6 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="block text-[8px] font-sans font-black text-amber-600 uppercase tracking-widest">Registration Form</span>
                <h3 className="text-lg font-serif font-black text-[#0c4a24] mt-0.5">Online Counseling Portal</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Submit eligibility check mapping for MBBS allocations.</p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 ring-4 ring-emerald-50/50">
                    <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Application Complete!</h4>
                  <p className="mt-2 text-slate-500 font-medium leading-relaxed text-[11px] font-sans">
                    Your profile has been saved. A counseling representative will contact you shortly to review cutoff margins.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="nims-lead-name" className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1 block">Student Full Name *</Label>
                    <Input
                      id="nims-lead-name"
                      placeholder="Enter Student Name"
                      className="h-10 rounded-xl bg-slate-50 border-slate-200 font-medium focus:bg-white text-slate-800"
                      value={formData.name || ""}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                    />
                    {errors.name && <p className="text-[10px] font-semibold text-rose-500 mt-0.5 uppercase tracking-wide">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="nims-lead-phone" className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1 block">WhatsApp Phone *</Label>
                      <Input
                        id="nims-lead-phone"
                        type="tel"
                        maxLength={10}
                        placeholder="10-Digit Mobile"
                        className="h-10 rounded-xl bg-slate-50 border-slate-200 font-medium focus:bg-white text-slate-800"
                        value={formData.phone || ""}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                      {errors.phone && <p className="text-[10px] font-semibold text-rose-500 mt-0.5 uppercase tracking-wide">{errors.phone}</p>}
                    </div>

                    <div>
                      <Label htmlFor="nims-lead-score" className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1 block">NEET UG Score *</Label>
                      <Input
                        id="nims-lead-score"
                        type="text"
                        maxLength={3}
                        placeholder="0 to 720"
                        className="h-10 rounded-xl bg-slate-50 border-slate-200 font-medium focus:bg-white text-slate-800"
                        value={formData.neetScore || ""}
                        onChange={(e) => handleInputChange("neetScore", e.target.value)}
                      />
                      {errors.neetScore && <p className="text-[10px] font-semibold text-rose-500 mt-0.5 uppercase tracking-wide">{errors.neetScore}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1 block">Category *</Label>
                      <Select
                        onValueChange={(val) => handleInputChange("category", val)}
                        value={formData.category || ""}
                      >
                        <SelectTrigger className="h-10 rounded-xl bg-slate-50 border-slate-200 text-slate-800">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                          <SelectItem value="General">General (UR)</SelectItem>
                          <SelectItem value="OBC">OBC-NCL</SelectItem>
                          <SelectItem value="SC">SC (Scheduled Caste)</SelectItem>
                          <SelectItem value="ST">ST (Scheduled Tribe)</SelectItem>
                          <SelectItem value="EWS">EWS Quota</SelectItem>
                          <SelectItem value="NRI">NRI Quota</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.category && <p className="text-[10px] font-semibold text-rose-500 mt-0.5 uppercase tracking-wide">{errors.category}</p>}
                    </div>

                    <div>
                      <Label className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1 block">Domicile State *</Label>
                      <Select
                        onValueChange={(val) => handleInputChange("state", val)}
                        value={formData.state || ""}
                      >
                        <SelectTrigger className="h-10 rounded-xl bg-slate-50 border-slate-200 text-slate-800">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                          <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                          <SelectItem value="Bihar">Bihar</SelectItem>
                          <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                          <SelectItem value="Delhi">Delhi</SelectItem>
                          <SelectItem value="West Bengal">West Bengal</SelectItem>
                          <SelectItem value="Madhya Pradesh">Madhya Pradesh</SelectItem>
                          <SelectItem value="Haryana">Haryana</SelectItem>
                          <SelectItem value="Other">Other State</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.state && <p className="text-[10px] font-semibold text-rose-500 mt-0.5 uppercase tracking-wide">{errors.state}</p>}
                    </div>
                  </div>

                  <div>
                    <Label className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1 block">Preferred Quota *</Label>
                    <Select
                      onValueChange={(val) => handleInputChange("preferredQuota", val)}
                      value={formData.preferredQuota || ""}
                    >
                      <SelectTrigger className="h-10 rounded-xl bg-slate-50 border-slate-200 text-slate-800">
                        <SelectValue placeholder="Select Preference" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="Government">State Quota Seat (Merit Based)</SelectItem>
                        <SelectItem value="Management">Management Quota Seat</SelectItem>
                        <SelectItem value="NRI">NRI Quota Seat</SelectItem>
                        <SelectItem value="Any">Explore Any Available Quota</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.preferredQuota && <p className="text-[10px] font-semibold text-rose-500 mt-0.5 uppercase tracking-wide">{errors.preferredQuota}</p>}
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-11 bg-[#0c4a24] hover:bg-[#062f18] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                    disabled={submitting}
                  >
                    {submitting ? "Processing..." : (<>Register Counseling Profile <ArrowRight className="h-4 w-4" /></>)}
                  </Button>

                  <p className="text-[8px] text-center text-slate-400 font-bold uppercase tracking-wider mt-2.5">
                    * SS Admissions Counseling Network is private and secure.
                  </p>
                </form>
              )}
            </div>
            
            <div className="bg-[#FAF9F6] border border-slate-250 p-5 rounded-3xl text-[10px] text-slate-500 font-semibold font-sans leading-relaxed shadow-sm">
              <span className="block text-[8px] font-sans font-black text-slate-400 uppercase tracking-widest mb-1 leading-none">Counselling disclaimer</span>
              * SS Admissions is an independent advising consultancy service. This portal serves to provide counseling analysis for National Institute of Medical Sciences, Jaipur. It is not affiliated with the government RUHS or MCC Rajasthan board.
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}
