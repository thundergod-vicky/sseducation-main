import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Star,
  ShieldCheck,
  Clock,
  CheckCircle2,
  ChevronDown,
  Calendar,
  MapPin,
  HelpCircle,
  Building,
  Award,
  BookOpen,
  Briefcase,
  Users,
  Percent,
  Check,
  TrendingUp,
  Sliders,
  Calculator,
  Compass,
  ArrowRight,
  GraduationCap,
  Sparkles,
  Download,
  AlertTriangle,
  RefreshCw,
  Info,
  DollarSign
} from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useJsonLd } from "@/hooks/useJsonLd";
import { useSeo } from "@/hooks/useSeo";
import { useNavigate } from "react-router-dom";

// Assets
import logo from "@/assets/main logo.png";
const campusHero = "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGJRxtb8nqh6Sypyt-mx1p_ZAfM67q_DIUHaniE11zBhZEvnOnfOxZkYuDZac2Q2ZPZ-jwTokddDjN36_l__qVirbELzAhT2U8LF-RvAkak5PkBENDmwwEK1sK3Z9Kc5KIRYSy5=s1360-w1360-h1020-rw";

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
  score: z.string().trim().optional(),
});

type FormDataType = z.infer<typeof leadFormSchema>;

export default function KiitAdmissionLanding() {
  const navigate = useNavigate();
  useSeo({
    title: "KIIT University Admission 2026 – Fees, Eligibility, Cutoff & Counselling",
    description: "Apply for KIIT Admission 2026. Get direct seats and expert counselling guidance. Review branch-wise fees, eligibility checker, placements, and campus hostels."
  });

  // FAQs (25 Questions for SEO and AI Engine Optimization)
  const faqItems = [
    {
      q: "Is KIIT good for B.Tech?",
      a: "Yes, KIIT is excellent for B.Tech. It is ranked #36 in engineering by NIRF, holds premium NAAC A++ accreditation, and offers global technical validation through ABET (USA) and IET (UK). With high-performing placements, a 25-square-km smart campus, and state-of-the-art labs, it stands as a premier technical destination in India."
    },
    {
      q: "What is the KIIT fees for CSE?",
      a: "The tuition fee for B.Tech Computer Science & Engineering (CSE) and its specializations is ₹1,75,000 per semester (₹3,50,000 per year). Additionally, there is a one-time registration and laptop bundle fee of ₹75,050 due at the time of admission, plus minor exam fees."
    },
    {
      q: "What is the placement percentage at KIIT?",
      a: "KIIT has a consistent placement record of over 92.50% for its eligible graduates. The engineering average package is ₹8.50 LPA, with the highest package hitting ₹63 LPA. Placements for 2026 are active with over 3,500+ offers already secured."
    },
    {
      q: "What are the KIIT hostel fees?",
      a: "Hostel fees range from ₹28,000 per semester for basic double-occupancy non-AC rooms to ₹60,000 per semester for premium AC suites. Mess charges average ₹22,500 per semester. Total annual residential expenses range between ₹1.2 Lakhs to ₹1.8 Lakhs."
    },
    {
      q: "How does the KIIT admission process work?",
      a: "Admission is primarily based on the KIITEE (Kalinga Institute of Industrial Technology Entrance Examination), which is free to apply. Candidates are evaluated on merit, followed by online/offline counselling. Candidates can also check eligibility for direct counselling under vacant seats and specific quotas."
    },
    {
      q: "What scholarships are available at KIIT?",
      a: "KIIT offers various scholarships: KIITEE Merit Scholarships (free tuition for top 1000 ranks), Pradyumna Bal Memorial Scholarships (free education for needy, meritorious students), sports scholarships for state/national players, and teaching assistantships for PG courses."
    },
    {
      q: "KIIT vs VIT: Which is better for B.Tech?",
      a: "Both are premier private universities. VIT Vellore has slightly higher NIRF rankings, but KIIT Bhubaneswar stands out for its highly modern, unified campus infrastructure, 25 specialized academic wings, lower competition due to smaller batch size, and comprehensive campus placements with average salary reaching ₹8.50 LPA."
    },
    {
      q: "What is the NIRF ranking of KIIT?",
      a: "In the 2025 NIRF evaluations, KIIT is ranked #17 among all Universities in India, #36 in the Engineering category, #24 in Medical, and #27 in the Overall category."
    },
    {
      q: "What is the KIIT average package for B.Tech?",
      a: "The average placement package for B.Tech graduates at KIIT is ₹8.50 LPA, with the median package standing at ₹7.40 LPA. The highest package in recent years peaked at ₹63 LPA."
    },
    {
      q: "What is the eligibility criteria for B.Tech at KIIT?",
      a: "Candidates must have completed Class 12 (10+2) with Physics, Chemistry, and Mathematics (PCM) scoring at least 60% aggregate. Candidates must also have been born on or after July 1, 2005, and pass/qualify the KIITEE entrance exam."
    },
    {
      q: "Are application fees charged for KIITEE?",
      a: "No, the KIITEE application form is 100% free of charge. KIIT does not collect application fees, exam fees, or registration charges for the entrance test."
    },
    {
      q: "Can I get direct admission in KIIT for B.Tech?",
      a: "Yes, a certain percentage of seats are available under management quotas and direct counseling for candidates with strong JEE Main scores or high Class 12 percentages when vacancies occur. SS Education provides complete guidance for these seats."
    },
    {
      q: "Is KIIT approved by the AICTE?",
      a: "Yes, all technical and engineering courses offered by KIIT University are approved by the All India Council for Technical Education (AICTE) and accredited by NBA."
    },
    {
      q: "What is the fee structure for MBA at KIIT?",
      a: "The tuition fee for the MBA program at the School of Management (KSOM) is approximately ₹5,15,000 per year, totaling around ₹10,30,000 for the two-year course, inclusive of study materials and laptop."
    },
    {
      q: "What are the MBBS eligibility and fee details at KIIT KIMS?",
      a: "MBBS admissions require qualifying NEET-UG followed by state/central counselling. Kalinga Institute of Medical Sciences (KIMS) tuition fee is ₹18,50,000 per year, with excellent clinical exposure in their 750-bed hospital."
    },
    {
      q: "Is there a lateral entry option for B.Tech diploma holders?",
      a: "Yes, candidates who hold a 3-year diploma in engineering with a minimum of 60% marks can apply for B.Tech lateral entry (3-year duration) directly into the second year."
    },
    {
      q: "Does KIIT offer education loan assistance?",
      a: "Yes, KIIT has tie-ups with leading banks like SBI, HDFC, ICICI, and Axis Bank to facilitate easy educational loans for admitted students. Documentation support is provided by the admissions office."
    },
    {
      q: "How many campuses does KIIT have in Bhubaneswar?",
      a: "KIIT is spread across 25 world-class, fully residential, interconnected campuses in Patia, Bhubaneswar, covering over 25 square kilometers of highly modern infrastructure."
    },
    {
      q: "Who are the top recruiters at KIIT?",
      a: "Top recruiters include global majors like Amazon, Microsoft, Intel, Oracle, Deloitte, Ernst & Young, Cognizant, Infosys, Wipro, TCS, Capgemini, and Accenture."
    },
    {
      q: "What is the classroom and laboratory setup at KIIT?",
      a: "KIIT has fully air-conditioned smart classrooms, multimedia project rooms, and over 100 specialized laboratories, including research labs funded by DST, DBT, and global companies like Intel and NI."
    },
    {
      q: "Is there separate accommodation for girls at KIIT?",
      a: "Yes, KIIT provides highly secure, separate multi-block hostels for boys and girls. Security is managed 24/7 with CCTV surveillance and electronic access systems."
    },
    {
      q: "Is the hostel accommodation mandatory?",
      a: "While hostel accommodation is highly recommended for B.Tech and MBBS students due to intensive course requirements, students can seek permission to reside outside campus with parent/guardian approval."
    },
    {
      q: "What is the ranking of KIIT School of Management (KSOM)?",
      a: "KSOM is ranked among the top 35 business schools in India by various national agencies, and holds a consistent 100% placement record for its MBA students."
    },
    {
      q: "Does KIIT host international students?",
      a: "Yes, KIIT has a diverse global community with students from more than 50 countries, including South Asia, East Asia, Africa, and South America."
    },
    {
      q: "How can I contact SS Education for KIIT admission guidance?",
      a: "You can call our admissions helpline directly at +91 99456 67977, send a message on WhatsApp at the same number, or fill out the eligibility checker/registration form on this page to receive a callback within 15 minutes."
    }
  ];

  // Dynamic Schemas
  useJsonLd({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/apply/kiit/#college",
        "name": "Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar",
        "alternateName": "KIIT University",
        "url": "https://www.kiit.ac.in",
        "logo": "https://www.kiit.ac.in/wp-content/themes/kiit/images/logo.png",
        "telephone": "+91-99456-67977",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Campus-1 to Campus-25, KIIT Road, Patia",
          "addressLocality": "Bhubaneswar",
          "addressRegion": "Odisha",
          "postalCode": "751024",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ssadmission.in/apply/kiit/#faq",
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ssadmission.in/apply/kiit/#breadcrumb",
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
            "name": "KIIT Admission 2026",
            "item": "https://ssadmission.in/apply/kiit"
          }
        ]
      }
    ]
  });

  // State Management
  const [formData, setFormData] = useState<Partial<FormDataType>>({
    name: "",
    phone: "",
    email: "",
    state: "",
    course: "",
    score: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({ days: 12, hours: 8, minutes: 45, seconds: 30 });

  // Eligibility Checker State
  const [eligibilityData, setEligibilityData] = useState({ pcm: "", score: "", category: "General" });
  const [eligibilityResult, setEligibilityResult] = useState<string | null>(null);

  // Fee Calculator State
  const [calcCourse, setCalcCourse] = useState("btech");
  const [calcHostel, setCalcHostel] = useState("nonac-2");
  const [calcMess, setCalcMess] = useState("veg");
  const [calculatedFees, setCalculatedFees] = useState({ tuition: 175000, hostel: 28000, mess: 22500, other: 75000, total: 300500 });

  // College Predictor State
  const [predScore, setPredScore] = useState("");
  const [predType, setPredType] = useState("jee");
  const [predResult, setPredResult] = useState<{ branch: string; probability: string; alternatives: string[] } | null>(null);

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(800000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(5);
  const [monthlyEmi, setMonthlyEmi] = useState(16413);

  // FAQs Accordion State
  const [searchFaq, setSearchFaq] = useState("");
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  // Exit intent popup state
  const [showExitPopup, setShowExitPopup] = useState(false);

  const heroFormRef = useRef<HTMLDivElement>(null);

  // Countdown calculations
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        clearInterval(timer);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Exit Intent Detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 50 && !localStorage.getItem("exitPopupShown")) {
        setShowExitPopup(true);
        localStorage.setItem("exitPopupShown", "true");
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  // Fee calculation update
  useEffect(() => {
    let tFee = 175000; // sem tuition
    let hFee = 28000;
    let mFee = 22500;
    let oFee = 75000; // registration bundle

    if (calcCourse === "mba") { tFee = 257500; oFee = 50000; }
    else if (calcCourse === "bba") { tFee = 140000; oFee = 30000; }
    else if (calcCourse === "law") { tFee = 170000; oFee = 40000; }
    else if (calcCourse === "mbbs") { tFee = 925000; oFee = 100000; mFee = 30000; }

    if (calcHostel === "ac-2") hFee = 50000;
    else if (calcHostel === "ac-3") hFee = 40000;
    else if (calcHostel === "premium-ac") hFee = 60000;

    if (calcMess === "nonveg") mFee += 5000;
    else if (calcMess === "premium") mFee += 10000;

    setCalculatedFees({
      tuition: tFee,
      hostel: hFee,
      mess: mFee,
      other: oFee,
      total: tFee + hFee + mFee + oFee
    });
  }, [calcCourse, calcHostel, calcMess]);

  // EMI calculator update
  useEffect(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setMonthlyEmi(isNaN(emi) ? 0 : Math.round(emi));
  }, [loanAmount, interestRate, tenure]);

  const handleInputChange = (field: keyof FormDataType, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
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
      parsed.error.issues.forEach(i => {
        if (i.path[0]) fieldErrors[String(i.path[0])] = i.message;
      });
      setErrors(fieldErrors);
      toast.error("Please correct the validation errors.");
      return;
    }

    setSubmitting(true);
    const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdLoigxaiQ05jssy6oUcVgENjCRBFjE1yFBmmCmB1EnPVZghw/formResponse";
    const googleFormData = new FormData();
    googleFormData.append("entry.1502716309", parsed.data.name);
    googleFormData.append("entry.1202722742", parsed.data.phone);
    googleFormData.append("entry.267493369", parsed.data.email || "No Email Provided");
    googleFormData.append("entry.921865976", parsed.data.state);
    
    let enrichedCourseText = parsed.data.course;
    if (parsed.data.score) {
      enrichedCourseText += ` (Score: ${parsed.data.score})`;
    }
    googleFormData.append("entry.85122333", `KIIT Google Ads Landing Page - ${enrichedCourseText}`);

    try {
      await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: googleFormData
      });
      setSubmitting(false);
      toast.success("Details successfully registered!");
      navigate("/thank-you");
    } catch (err) {
      setSubmitting(false);
      toast.success("Details successfully registered!");
      navigate("/thank-you");
    }
  };

  const handleCheckEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    const mark = parseFloat(eligibilityData.pcm);
    const jScore = parseFloat(eligibilityData.score);
    if (isNaN(mark) || mark < 0 || mark > 100) {
      toast.error("Please enter a valid Class 12 percentage.");
      return;
    }
    let res = "";
    if (mark >= 75 || jScore >= 85) {
      res = "High probability of CSE / IT seat. Recommended for direct seat blocking under early counseling seats.";
    } else if (mark >= 60 || jScore >= 60) {
      res = "Eligible for B.Tech admissions (ECE, EEE, Mechanical, Biotech). Fill out our priority admission form.";
    } else {
      res = "Class 12 PCM is below 60%. Eligible for specialized lateral routes, BCA, or custom counseling path. Talk to our coordinator.";
    }
    setEligibilityResult(res);
  };

  const handlePredictCollege = (e: React.FormEvent) => {
    e.preventDefault();
    const score = parseFloat(predScore);
    if (isNaN(score) || score < 0) {
      toast.error("Please enter a valid rank/percentile.");
      return;
    }

    if (predType === "jee") {
      if (score >= 90) {
        setPredResult({
          branch: "B.Tech CSE / CSE Specializations",
          probability: "95% (Excellent Chance)",
          alternatives: ["VIT Vellore B.Tech", "SRM Chennai CSE", "Manipal Institute CSE"]
        });
      } else if (score >= 80) {
        setPredResult({
          branch: "Information Technology (IT) / ECE",
          probability: "80% (Very Strong)",
          alternatives: ["IEM Kolkata CSE", "Heritage Kolkata CSE", "Amrita Bengaluru ECE"]
        });
      } else {
        setPredResult({
          branch: "EEE / Mechanical / Civil Engineering",
          probability: "70% (Good Chance)",
          alternatives: ["RV University B.Tech", "BMSIT Bangalore", "NMIT Bangalore"]
        });
      }
    } else { // kiitee rank
      if (score <= 5000) {
        setPredResult({
          branch: "B.Tech CSE (Computer Science)",
          probability: "98% (Guaranteed)",
          alternatives: ["SRM Chennai Main CSE", "MIT Manipal CSE"]
        });
      } else if (score <= 15000) {
        setPredResult({
          branch: "Information Technology / Electronics (ECE)",
          probability: "85% (Strong)",
          alternatives: ["IEM Kolkata", "BMSCE Bangalore ECE"]
        });
      } else {
        setPredResult({
          branch: "Civil / Mechanical / core branches",
          probability: "75% (Highly Likely)",
          alternatives: ["Dayananda Sagar College", "Sri MVIT Bangalore"]
        });
      }
    }
  };

  const scrollToHeroForm = () => {
    heroFormRef.current?.scrollIntoView({ behavior: "smooth" });
    const input = document.getElementById("hero-name");
    input?.focus();
  };

  const filteredFaqs = faqItems.filter(item =>
    item.q.toLowerCase().includes(searchFaq.toLowerCase()) ||
    item.a.toLowerCase().includes(searchFaq.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 1. STICKY HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200/80 py-3 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img src={logo} alt="SS Education Logo" className="h-10 w-auto bg-slate-50 p-1.5 rounded-xl border border-slate-200 group-hover:scale-105 transition-transform" />
            <div>
              <span className="block text-[#0b162c] font-black text-sm tracking-wide group-hover:text-[#1FC166] transition-colors">SS EDUCATION</span>
              <span className="block text-[8px] text-slate-500 font-black uppercase tracking-[0.15em]">Admission & Career Counsel</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+919945667977" className="text-slate-700 hover:text-[#1FC166] flex items-center gap-2 font-bold text-sm transition-colors group">
              <Phone className="h-4 w-4 text-[#1FC166] group-hover:animate-bounce" /> +91 99456 67977
            </a>
            <a href="https://wa.me/919945667977" className="text-[#1FC166] hover:text-[#169d51] flex items-center gap-2 font-bold text-sm transition-colors">
              <MessageCircle className="h-4 w-4 text-[#1FC166]" /> WhatsApp
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollToHeroForm}
              className="bg-[#1FC166] hover:bg-[#169d51] text-white font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all shadow-md active:scale-95"
            >
              Apply Now
            </button>
            <button
              onClick={scrollToHeroForm}
              className="hidden lg:inline-block bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all"
            >
              Free Counselling
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative bg-[#002f18] text-white pt-16 pb-28 lg:py-32 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 z-0">
          <img src={campusHero} className="w-full h-full object-cover opacity-65" alt="KIIT Campus background" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00170b]/95 via-[#00170b]/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00170b]/60 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Copy, Badges & Call to Action */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1FC166]/10 border border-[#1FC166]/20 text-[#1FC166] text-xs font-black uppercase tracking-wider">
                <Sparkles className="h-4 w-4 text-[#1FC166]" />
                Official Admission Guidelines 2026-27
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                KIIT University Admission 2026 – <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-[#1FC166] bg-clip-text text-transparent">Fees, Eligibility, Cutoff & Expert Counselling</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-medium">
                Get complete guidance for KIIT Admission 2026. Explore fees, courses, placements, scholarships, hostel facilities, and admission process. Speak with our expert counsellors today.
              </p>

              {/* Countdown Timer */}
              <div className="bg-emerald-950/45 border border-emerald-500/20 rounded-3xl p-5 inline-block w-full max-w-md backdrop-blur-md shadow-2xl">
                <p className="text-xs text-[#1FC166] font-black uppercase tracking-widest text-center mb-3">
                  ⏳ Phase 2 Registration Closing Soon
                </p>
                <div className="grid grid-cols-4 gap-3 text-center">
                  <div className="bg-slate-950/80 p-3 rounded-2xl border border-white/5 shadow-inner">
                    <span className="block text-2xl lg:text-3xl font-black text-[#1FC166]">{timeLeft.days}</span>
                    <span className="block text-[9px] text-slate-500 uppercase font-black tracking-widest mt-0.5">Days</span>
                  </div>
                  <div className="bg-slate-950/80 p-3 rounded-2xl border border-white/5 shadow-inner">
                    <span className="block text-2xl lg:text-3xl font-black text-[#1FC166]">{timeLeft.hours}</span>
                    <span className="block text-[9px] text-slate-500 uppercase font-black tracking-widest mt-0.5">Hours</span>
                  </div>
                  <div className="bg-slate-950/80 p-3 rounded-2xl border border-white/5 shadow-inner">
                    <span className="block text-2xl lg:text-3xl font-black text-[#1FC166]">{timeLeft.minutes}</span>
                    <span className="block text-[9px] text-slate-500 uppercase font-black tracking-widest mt-0.5">Mins</span>
                  </div>
                  <div className="bg-slate-950/80 p-3 rounded-2xl border border-white/5 shadow-inner">
                    <span className="block text-2xl lg:text-3xl font-black text-[#1FC166]">{timeLeft.seconds}</span>
                    <span className="block text-[9px] text-slate-500 uppercase font-black tracking-widest mt-0.5">Secs</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a href="tel:+919945667977" className="h-14 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-950 rounded-2xl font-black text-sm uppercase tracking-widest px-8 flex items-center justify-center gap-3 shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/35 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 group">
                  <Phone className="h-5 w-5 text-slate-950 group-hover:animate-bounce" /> Call: +91 99456 67977
                </a>
                <a href="https://wa.me/919945667977" className="h-14 bg-gradient-to-r from-[#1FC166] to-[#0f9f50] hover:from-[#169d51] hover:to-[#0a7e40] text-white rounded-2xl font-black text-sm uppercase tracking-widest px-8 flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/35 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 group">
                  <MessageCircle className="h-5 w-5 text-white group-hover:scale-110 transition-transform" /> WhatsApp Us
                </a>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-[#1FC166]" />
                  <span className="text-[10px] font-black text-slate-350 uppercase tracking-wider">Official Guidelines</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-[#1FC166] animate-pulse" />
                  <span className="text-[10px] font-black text-slate-350 uppercase tracking-wider">15-Min Callback</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-[#1FC166] fill-[#1FC166]" />
                  <span className="text-[10px] font-black text-slate-355 uppercase tracking-wider">4.9 Student Rating</span>
                </div>
              </div>
            </div>

            {/* Right Side: Registration Form */}
            <div ref={heroFormRef} className="lg:col-span-5 w-full max-w-md mx-auto relative">
              <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 text-slate-800 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-[#1FC166]" />
                
                <h3 className="text-2xl font-black text-[#0b162c] tracking-tight">Apply for Counselling</h3>
                <p className="text-slate-500 text-xs mt-1 mb-6 font-bold">Enter details below to secure a direct callback from our advisor.</p>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10 space-y-4">
                    <div className="h-16 w-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-555 ring-8 ring-emerald-50/50">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">Registration Successful!</h4>
                    <p className="text-slate-550 text-sm leading-relaxed font-medium">Our KIIT counseling expert will reach out to you within 15 minutes.</p>
                    <button onClick={() => setSubmitted(false)} className="text-xs text-[#1FC166] font-extrabold hover:underline">Submit another request</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4.5">
                    <div>
                      <Label htmlFor="hero-name" className="text-[10px] font-black uppercase text-slate-455 tracking-wider">Full Name *</Label>
                      <Input
                        id="hero-name"
                        value={formData.name || ""}
                        onChange={e => handleInputChange("name", e.target.value)}
                        placeholder="E.g. Sneha Roy"
                        className="h-12 rounded-xl bg-slate-50 border-slate-200 mt-1 font-semibold text-sm focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-[#1FC166] transition-all"
                      />
                      {errors.name && <p className="text-[10px] text-red-500 font-bold mt-1 uppercase tracking-wide">{errors.name}</p>}
                    </div>

                    <div>
                      <Label htmlFor="hero-phone" className="text-[10px] font-black uppercase text-slate-455 tracking-wider">Mobile Number *</Label>
                      <Input
                        id="hero-phone"
                        type="tel"
                        maxLength={10}
                        value={formData.phone || ""}
                        onChange={e => handleInputChange("phone", e.target.value)}
                        placeholder="10-digit number"
                        className="h-12 rounded-xl bg-slate-50 border-slate-200 mt-1 font-semibold text-sm focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-[#1FC166] transition-all"
                      />
                      {errors.phone && <p className="text-[10px] text-red-500 font-bold mt-1 uppercase tracking-wide">{errors.phone}</p>}
                    </div>

                    <div>
                      <Label htmlFor="hero-email" className="text-[10px] font-black uppercase text-slate-455 tracking-wider">Email ID (Optional)</Label>
                      <Input
                        id="hero-email"
                        type="email"
                        value={formData.email || ""}
                        onChange={e => handleInputChange("email", e.target.value)}
                        placeholder="example@mail.com"
                        className="h-12 rounded-xl bg-slate-50 border-slate-200 mt-1 font-semibold text-sm focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-[#1FC166] transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="hero-state" className="text-[10px] font-black uppercase text-slate-455 tracking-wider">State *</Label>
                        <Select onValueChange={val => handleInputChange("state", val)}>
                          <SelectTrigger id="hero-state" className="h-12 rounded-xl bg-slate-50 border-slate-200 mt-1 text-xs font-bold focus:ring-2 focus:ring-emerald-500/20">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent className="rounded-xl">
                            <SelectItem value="Odisha">Odisha</SelectItem>
                            <SelectItem value="Bihar">Bihar</SelectItem>
                            <SelectItem value="Jharkhand">Jharkhand</SelectItem>
                            <SelectItem value="West Bengal">West Bengal</SelectItem>
                            <SelectItem value="Other">Other State</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.state && <p className="text-[10px] text-red-500 font-bold mt-1 uppercase tracking-wide">{errors.state}</p>}
                      </div>

                      <div>
                        <Label htmlFor="hero-course" className="text-[10px] font-black uppercase text-slate-455 tracking-wider">Course *</Label>
                        <Select onValueChange={val => handleInputChange("course", val)}>
                          <SelectTrigger id="hero-course" className="h-12 rounded-xl bg-slate-50 border-slate-200 mt-1 text-xs font-bold focus:ring-2 focus:ring-emerald-500/20">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent className="rounded-xl">
                            <SelectItem value="B.Tech CSE">B.Tech CSE</SelectItem>
                            <SelectItem value="B.Tech Core">B.Tech (Other)</SelectItem>
                            <SelectItem value="MBA">MBA (KSOM)</SelectItem>
                            <SelectItem value="BBA">BBA</SelectItem>
                            <SelectItem value="MBBS / BDS">MBBS / KIMS</SelectItem>
                            <SelectItem value="Law">Law (BA LLB)</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.course && <p className="text-[10px] text-red-500 font-bold mt-1 uppercase tracking-wide">{errors.course}</p>}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="hero-score" className="text-[10px] font-black uppercase text-slate-455 tracking-wider">NEET / JEE / 12% Score (Optional)</Label>
                      <Input
                        id="hero-score"
                        value={formData.score || ""}
                        onChange={e => handleInputChange("score", e.target.value)}
                        placeholder="E.g. 92% PCM or 88 JEE"
                        className="h-12 rounded-xl bg-slate-50 border-slate-200 mt-1 font-semibold text-sm focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-[#1FC166] transition-all"
                      />
                    </div>

                    <Button type="submit" disabled={submitting} className="w-full h-13 rounded-xl bg-gradient-to-r from-emerald-500 to-[#1FC166] hover:from-emerald-600 hover:to-[#169d51] text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-emerald-500/20 active:scale-95 transition-all mt-2">
                      {submitting ? "Submitting..." : "Apply & Speak with Counselor"}
                    </Button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FLOATING TRUST BAR */}
      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4">
        <div className="bg-[#0b1b11] text-white py-8 rounded-3xl border border-[#1FC166]/20 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/5">
            <div className="p-2">
              <span className="block text-2xl lg:text-3xl font-black text-[#1FC166]">4.9 ★</span>
              <span className="block text-[9px] uppercase font-black text-slate-450 tracking-widest mt-1">Student Rating</span>
            </div>
            <div className="p-2 pt-6 md:pt-2">
              <span className="block text-2xl lg:text-3xl font-black text-white">12,000+</span>
              <span className="block text-[9px] uppercase font-black text-slate-450 tracking-widest mt-1">Students Guided</span>
            </div>
            <div className="p-2 pt-6 md:pt-2">
              <span className="block text-2xl lg:text-3xl font-black text-white">500+</span>
              <span className="block text-[9px] uppercase font-black text-slate-450 tracking-widest mt-1">Admissions/Year</span>
            </div>
            <div className="p-2 pt-6 md:pt-2">
              <span className="block text-2xl lg:text-3xl font-black text-white">10+ Years</span>
              <span className="block text-[9px] uppercase font-black text-slate-455 tracking-widest mt-1">Counsel Experience</span>
            </div>
            <div className="p-2 pt-6 md:pt-2">
              <span className="block text-2xl lg:text-3xl font-black text-white">100+</span>
              <span className="block text-[9px] uppercase font-black text-slate-455 tracking-widest mt-1">Partner Colleges</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUICK FACTS CARDS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-black text-emerald-700 uppercase tracking-[0.2em] bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-emerald-250/20">
              Overview
            </span>
            <h2 className="text-3xl font-black text-[#0b162c] tracking-tight">KIIT Quick Facts at a Glance</h2>
            <div className="h-1.5 w-16 bg-[#1FC166] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Established", val: "1992", desc: "Deemed status in 1997", icon: Calendar },
              { label: "Location", val: "Bhubaneswar", desc: "Odisha, capital city", icon: MapPin },
              { label: "NAAC Rating", val: "Grade A++", desc: "Highest possible grade", icon: ShieldCheck },
              { label: "NIRF Ranking", val: "#17 University", desc: "Top engineering & medical", icon: Star },
              { label: "Campus Size", val: "25+ Sq. Km", desc: "25 interconnected wings", icon: Building },
              { label: "Total Students", val: "40,000+", desc: "Diverse global community", icon: Users },
              { label: "Hostel Facilities", val: "Available", desc: "Separate boys & girls blocks", icon: ShieldCheck },
              { label: "Placements", val: "Excellent", desc: "₹63 LPA highest package", icon: TrendingUp }
            ].map((fact, idx) => {
              const IconComp = fact.icon;
              return (
                <div key={idx} className="bg-slate-50 border-t-4 border-t-[#1FC166] border-x border-b border-slate-200/60 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group">
                  <div className="h-10 w-10 bg-emerald-50 rounded-xl flex items-center justify-center text-[#1FC166] mb-4 group-hover:bg-[#1FC166] group-hover:text-white transition-colors">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h4 className="text-2xl font-black text-[#0b162c]">{fact.val}</h4>
                  <p className="text-xs font-bold text-slate-500 uppercase mt-0.5">{fact.label}</p>
                  <p className="text-[10px] text-slate-450 font-semibold leading-relaxed mt-1">{fact.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE KIIT */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/65">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-black text-emerald-700 uppercase tracking-[0.2em] bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-emerald-250/20">
              Excellence
            </span>
            <h2 className="text-3xl font-black text-[#0b162c] tracking-tight">Why Choose KIIT University?</h2>
            <div className="h-1.5 w-16 bg-[#1FC166] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Top Ranked University", desc: "NIRF ranked #17 University in India and ranked #1 for Innovation by ARIIA, MHRD.", icon: Award },
              { title: "Global Recognition", desc: "A++ rated by NAAC, globally accredited by ABET (USA) and IET (UK) with Washington Accord status.", icon: ShieldCheck },
              { title: "Modern Smart Campus", desc: "25 state-of-the-art tech-enabled campuses containing modern classrooms, digital libraries, and sports facilities.", icon: Building },
              { title: "International Exposure", desc: "Host to international students from 50+ countries. Collaborations with 100+ global universities.", icon: Users },
              { title: "Strong Placements", desc: "Consistently securing 92.5%+ placements with ₹8.50 LPA average packages and global recruiters visiting.", icon: TrendingUp },
              { title: "Research Labs", desc: "Highly advanced research laboratories powered by global corporations like Intel, National Instruments, and DST.", icon: BookOpen },
              { title: "Hostel Options", desc: "Fully residential campuses with secure AC/Non-AC double rooms and quality healthy mess configurations.", icon: ShieldCheck },
              { title: "Generous Scholarships", desc: "KIITEE rank-holders get 100% full tuition fee waivers, alongside merit-cum-means fellowships.", icon: Star }
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-white border border-slate-200/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="h-10 w-10 bg-emerald-50 rounded-xl flex items-center justify-center text-[#1FC166] mb-4">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#0b162c]">{item.title}</h4>
                  <p className="text-xs text-slate-550 leading-relaxed font-semibold mt-2.5">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. ADMISSION PROCESS TIMELINE */}
      <section className="py-24 bg-white border-t border-slate-200/65">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-black text-emerald-700 uppercase tracking-[0.2em] bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-emerald-250/20">
              Roadmap
            </span>
            <h2 className="text-3xl font-black text-[#0b162c] tracking-tight">KIIT Admission Process Timeline 2026</h2>
            <div className="h-1.5 w-16 bg-[#1FC166] mx-auto mt-4 rounded-full" />
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Vertical Line */}
            <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-0.5 bg-emerald-600/20 transform -translate-x-1/2 hidden sm:block" />

            <div className="space-y-8">
              {[
                { step: "Step 1", title: "Apply Online / Registration", desc: "Submit your basic credentials and program preference via our priority counselor portal." },
                { step: "Step 2", title: "Document Verification", desc: "Our counselor reviews Class 10/12 marksheets, scores, and updates you on eligibility status." },
                { step: "Step 3", title: "Counselling Session", desc: "Participate in a one-on-one expert counseling call to finalize branch options and quota details." },
                { step: "Step 4", title: "Seat Confirmation", desc: "Lock and confirm the allotted branch seat based on your scores or counselor recommendations." },
                { step: "Step 5", title: "Fee Payment", desc: "Submit semester tuition fees and secure the official university admission provisional letter." },
                { step: "Step 6", title: "Admission Complete", desc: "Submit final documents on campus, complete hostel allotment, and start your academic session!" }
              ].map((step, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className={`relative flex flex-col sm:flex-row items-start sm:items-center ${isEven ? "sm:flex-row-reverse" : ""}`}>
                    {/* Circle Pin */}
                    <div className="absolute left-4 sm:left-1/2 h-5 w-5 bg-[#1FC166] border-4 border-white rounded-full shadow-md transform -translate-x-1/2 z-10" />

                    <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${isEven ? "sm:pl-8" : "sm:pr-8"}`}>
                      <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                        <span className="inline-block bg-[#002f18] text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-2.5">
                          {step.step}
                        </span>
                        <h4 className="text-base font-bold text-[#0b162c]">{step.title}</h4>
                        <p className="text-xs text-slate-550 font-semibold leading-relaxed mt-1.5">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. COURSES SECTION */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/65">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-black text-emerald-700 uppercase tracking-[0.2em] bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-emerald-250/20">
              Academic Programs
            </span>
            <h2 className="text-3xl font-black text-[#0b162c] tracking-tight">Courses Offered, Fees & Eligibility</h2>
            <div className="h-1.5 w-16 bg-[#1FC166] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "B.Tech Engineering", duration: "4 Years", fee: "₹1,75,000 / sem", eligibility: "Class 12 PCM with min 60% aggregate. Valid KIITEE or JEE score." },
              { name: "MBA (KSOM)", duration: "2 Years", fee: "₹5,15,000 / year", eligibility: "Graduation with min 50% aggregate + CAT/XAT/MAT/CMAT qualified." },
              { name: "BBA Graduation", duration: "3 Years", fee: "₹1,40,000 / sem", eligibility: "Class 12 in any stream with min 50% aggregate score." },
              { name: "MBBS (KIMS)", duration: "5.5 Years", fee: "₹18,50,000 / year", eligibility: "Class 12 PCB with min 50% aggregate + qualified NEET-UG score." },
              { name: "Law (BA LLB / BBA LLB)", duration: "5 Years", fee: "₹1,70,000 / sem", eligibility: "Class 12 with min 45% aggregate + CLAT or KIITEE score." },
              { name: "M.Tech PG", duration: "2 Years", fee: "₹1,17,000 / sem", eligibility: "B.E. or B.Tech degree with min 60% aggregate + valid GATE score." }
            ].map((c, idx) => (
              <div key={idx} className="bg-white border border-slate-200/60 p-6 rounded-2xl flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <h4 className="text-lg font-bold text-[#0b162c]">{c.name}</h4>
                  <div className="flex gap-4 mt-2.5 mb-4 border-b border-slate-100 pb-3">
                    <div>
                      <span className="block text-[8px] uppercase text-slate-400 font-bold">Duration</span>
                      <span className="block text-xs font-bold text-slate-700">{c.duration}</span>
                    </div>
                    <div>
                      <span className="block text-[8px] uppercase text-slate-400 font-bold">Tuition Fees</span>
                      <span className="block text-xs font-bold text-emerald-600">{c.fee}</span>
                    </div>
                  </div>
                  <div>
                    <span className="block text-[8px] uppercase text-slate-400 font-bold mb-1">Eligibility Criteria</span>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed">{c.eligibility}</p>
                  </div>
                </div>
                <div className="pt-6">
                  <button onClick={scrollToHeroForm} className="w-full py-2.5 bg-emerald-50 hover:bg-[#1FC166] hover:text-white border border-[#1FC166]/20 text-[#1FC166] rounded-xl font-bold text-xs uppercase tracking-wider transition-all">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BRANCH WISE FEES */}
      <section className="py-24 bg-white border-t border-slate-200/65">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-black text-emerald-700 uppercase tracking-[0.2em] bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-emerald-250/20">
              Cost Sheet
            </span>
            <h2 className="text-3xl font-black text-[#0b162c] tracking-tight">B.Tech Branch-Wise Fees Breakdowns</h2>
            <div className="h-1.5 w-16 bg-[#1FC166] mx-auto mt-4 rounded-full" />
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl max-w-4xl mx-auto shadow-md">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#002f18] text-white text-[10px] font-bold uppercase tracking-widest border-b border-emerald-800">
                  <th className="p-4">Academic Year</th>
                  <th className="p-4">Tuition Fee</th>
                  <th className="p-4">Hostel Fee (2-Bed Non-AC)</th>
                  <th className="p-4">Mess Charges (Veg)</th>
                  <th className="p-4">Laptop & Registration</th>
                  <th className="p-4 text-right">Total Est. Expenses</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 text-xs font-sans text-slate-700 font-semibold bg-slate-50/20">
                {[
                  { year: "1st Year (Sem 1 & 2)", tuition: "₹3,50,000", hostel: "₹56,000", mess: "₹45,000", oneTime: "₹75,000", total: "₹5,26,000" },
                  { year: "2nd Year (Sem 3 & 4)", tuition: "₹3,50,000", hostel: "₹56,000", mess: "₹45,000", oneTime: "—", total: "₹4,51,000" },
                  { year: "3rd Year (Sem 5 & 6)", tuition: "₹3,50,000", hostel: "₹56,000", mess: "₹45,000", oneTime: "—", total: "₹4,51,000" },
                  { year: "4th Year (Sem 7 & 8)", tuition: "₹3,50,000", hostel: "₹56,000", mess: "₹45,000", oneTime: "—", total: "₹4,51,000" }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">{row.year}</td>
                    <td className="p-4">{row.tuition}</td>
                    <td className="p-4">{row.hostel}</td>
                    <td className="p-4">{row.mess}</td>
                    <td className="p-4">{row.oneTime}</td>
                    <td className="p-4 text-right text-slate-950 font-black">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-6">
            <p className="text-xs text-slate-400 font-bold">
              * Note: Hostel and Mess charges can vary based on AC/Non-AC types and catering configurations.
            </p>
          </div>
        </div>
      </section>

      {/* 9. ELIGIBILITY ACCORDION */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/65">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <span className="text-[11px] font-black text-emerald-700 uppercase tracking-[0.2em] bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-emerald-250/20">
              Qualifications
            </span>
            <h2 className="text-3xl font-black text-[#0b162c] tracking-tight">Course-Wise Detailed Eligibility</h2>
            <div className="h-1.5 w-16 bg-[#1FC166] mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-4">
            {[
              { course: "B.Tech CSE & Core Programs", criteria: "Must score 60% or higher aggregate in Physics, Chemistry, and Mathematics (PCM) in Class 12. Must have been born on or after July 1, 2005. Performance in KIITEE or JEE Main is evaluated for counseling." },
              { course: "B.Tech Lateral Entry (3 Years)", criteria: "Must hold a 3-year diploma in engineering from a recognized technical board with a minimum score of 60% aggregate." },
              { course: "MBA (KSOM)", criteria: "Bachelor's degree in any discipline from a recognized university with at least 50% marks. Must possess a valid score in CAT, XAT, MAT, GMAT, or CMAT." },
              { course: "BBA (School of Management)", criteria: "Minimum of 50% aggregate score in Class 12 (10+2) board examinations in any stream (Science, Commerce, or Arts) with English as a compulsory subject." },
              { course: "MBBS & BDS (KIMS)", criteria: "Must have completed Class 12 with Physics, Chemistry, Biology (PCB) scoring min 50% aggregate marks. Candidate must have qualified NEET-UG 2026." },
              { course: "BA LLB & BBA LLB Law", criteria: "Class 12 with min 45% aggregate. Age should be under 21 years as of July 1, 2026. A valid score in CLAT or KIITEE is required." }
            ].map((elig, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <details className="group">
                  <summary className="flex items-center justify-between p-5 font-bold text-slate-800 cursor-pointer list-none select-none">
                    <span className="text-sm">{elig.course}</span>
                    <ChevronDown className="h-4 w-4 text-slate-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="p-5 border-t border-slate-100 text-xs text-slate-550 font-semibold leading-relaxed bg-slate-50/50">
                    {elig.criteria}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. KIIT PLACEMENTS */}
      <section className="py-24 bg-[#00170b] text-white border-t border-emerald-950">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-black text-[#1FC166] uppercase tracking-[0.2em] bg-white/5 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-white/10">
              Career Hub
            </span>
            <h2 className="text-3xl font-black text-white tracking-tight">KIIT Placement Statistics & Recruiter Network</h2>
            <div className="h-1.5 w-16 bg-[#1FC166] mx-auto mt-4 rounded-full" />
          </div>

          {/* Placements Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center mb-16">
            <div className="bg-slate-900/60 border border-white/5 p-6 rounded-2xl">
              <span className="block text-3xl font-black text-[#1FC166]">₹63 LPA</span>
              <span className="block text-[9px] uppercase font-bold text-slate-400 tracking-widest mt-1.5">Highest Package</span>
            </div>
            <div className="bg-slate-900/60 border border-white/5 p-6 rounded-2xl">
              <span className="block text-3xl font-black text-white">₹8.50 LPA</span>
              <span className="block text-[9px] uppercase font-bold text-slate-400 tracking-widest mt-1.5">B.Tech Average Package</span>
            </div>
            <div className="bg-slate-900/60 border border-white/5 p-6 rounded-2xl">
              <span className="block text-3xl font-black text-white">750+</span>
              <span className="block text-[9px] uppercase font-bold text-slate-400 tracking-widest mt-1.5">Recruiting Companies</span>
            </div>
            <div className="bg-slate-900/60 border border-white/5 p-6 rounded-2xl">
              <span className="block text-3xl font-black text-white">92.50%</span>
              <span className="block text-[9px] uppercase font-bold text-slate-400 tracking-widest mt-1.5">Placement Percentage</span>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <p className="text-[10px] text-[#1FC166] font-extrabold uppercase tracking-widest mb-6">
              🤝 Top Recruiting Partners
            </p>
            {/* Recruiter Logos grid */}
            <div className="grid grid-cols-3 sm:grid-cols-7 gap-4 items-center bg-white p-8 rounded-3xl shadow-2xl">
              {[
                { name: "Amazon", img: amazonLogo },
                { name: "TCS", img: tcsLogo },
                { name: "Infosys", img: infosysLogo },
                { name: "Wipro", img: wiproLogo },
                { name: "Cognizant", img: cognizantLogo },
                { name: "Capgemini", img: capgeminiLogo },
                { name: "EY", img: eyLogo },
                { name: "Axis Bank", img: axisBankLogo },
                { name: "Oracle", img: oracleLogo },
                { name: "IBM", img: ibmLogo },
                { name: "Tech Mahindra", img: techMahindraLogo },
                { name: "Reliance", img: relianceLogo },
                { name: "Kotak", img: kotakMahindraLogo },
                { name: "Dabur", img: daburLogo }
              ].map((rec, idx) => (
                <div key={idx} className="h-12 flex items-center justify-center p-2 border border-slate-100 rounded-xl hover:shadow-md transition-shadow">
                  <img src={rec.img} alt={rec.name} className="max-h-full max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. CAMPUS GALLERY & 12. HOSTEL SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Gallery */}
            <div className="space-y-6">
              <span className="text-[11px] font-black text-emerald-700 uppercase tracking-[0.2em] bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-emerald-250/20">
                Virtual Tour
              </span>
              <h2 className="text-3xl font-black text-[#0b162c]">World-Class Campus Infrastructure</h2>
              <p className="text-xs text-slate-550 leading-relaxed font-semibold">
                KIIT University features 25 sprawling green campuses spanning over 25 sq km. Campuses house digital libraries, high-performance computing centers, research wings, and sports multiplexes.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFYQ181haV8zbB1s42OFlWPkSBpADKLBpTTuXq3zu-m7L-XKBLTqz73LpQGpVT01W5TCIXeQ2tT1Ub3at4woWTP5Zz_YIyU7opJL-8z1IoZqraUNFzD52Gmg4lewgAyCHy_IcYe=s1360-w1360-h1020-rw" alt="KIIT Campus View" className="rounded-2xl h-36 w-full object-cover shadow-md hover:scale-102 transition-transform duration-300" />
                <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFvJRGv0BX0sj2ukeK6SY04bwGrE11nNEvvFBk0SY76sAdicST3C-qhQpdzLPpAQ3vu3ojxlC8ZMK4oxth6DbEZFnCXKf5kDoaEoNdNNMSDDve3NYsFR_cbbDS_DI-YIqNnSDbR=s1360-w1360-h1020-rw" alt="KIIT Academic Building" className="rounded-2xl h-36 w-full object-cover shadow-md hover:scale-102 transition-transform duration-300" />
                <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAHPDwJxiK51V3c5_DArFATdD9EEkQ7hi7h_YWHJNj8mmYLsiSk5CZQosnalR__s3NR9UgSGoR5BV5c1xLUhOljGOG6MY3_Fe-qQ0bURJybkg0l7m1d0RzKLkhzAg3yCd0SvfUZ-=s1360-w1360-h1020-rw" alt="KIIT Smart Auditorium" className="rounded-2xl h-36 w-full object-cover shadow-md hover:scale-102 transition-transform duration-300" />
                <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFc2tX3eFzBrXUydV3mrdzl0gEeh2heok2dr5CFsdH_w0AIIG4CEGsFndOy8BEaO5fOJ6vsctRZmknYRxkE6jB-QXzF8U1w8qvWLuCAtPN7vwh3EGWNst1x6CKMY4TbBzDGTyiSYg=s1360-w1360-h1020-rw" alt="KIIT Residential Quarters" className="rounded-2xl h-36 w-full object-cover shadow-md hover:scale-102 transition-transform duration-300" />
              </div>
            </div>

            {/* Hostel Info */}
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-[2rem] space-y-6 shadow-sm">
              <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest block">Student Accommodation</span>
              <h3 className="text-xl font-bold text-[#0b162c]">Residential Hostel Life</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                Separate residential blocks for boys and girls. Secure accommodation options cater to individual student needs.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm">
                  <span className="block text-xs font-bold text-slate-900">Standard Rooms</span>
                  <span className="block text-[10px] text-slate-400 font-bold mt-1">2/3 Bed Non-AC</span>
                  <span className="block text-sm font-black text-emerald-600 mt-2">₹28,000 / sem</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm">
                  <span className="block text-xs font-bold text-slate-900">Premium Suites</span>
                  <span className="block text-[10px] text-slate-400 font-bold mt-1">AC 2-Bed / Suite</span>
                  <span className="block text-sm font-black text-emerald-600 mt-2">₹60,000 / sem</span>
                </div>
              </div>

              <div className="space-y-3.5 text-xs font-semibold text-slate-650 pt-2 border-t border-slate-200/50">
                <p className="flex gap-2 items-center"><Check className="h-4 w-4 text-[#1FC166]" /> Fully air-conditioned common halls & study zones.</p>
                <p className="flex gap-2 items-center"><Check className="h-4 w-4 text-[#1FC166]" /> Clean and nutritious catering (Veg & Non-Veg options).</p>
                <p className="flex gap-2 items-center"><Check className="h-4 w-4 text-[#1FC166]" /> 24/7 security, wardens, and medical care clinics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. SCHOLARSHIP SECTION */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/65">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-black text-emerald-700 uppercase tracking-[0.2em] bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-emerald-250/20">
              Financial Aid
            </span>
            <h2 className="text-3xl font-black text-[#0b162c] tracking-tight">KIIT Scholarships & Concessions</h2>
            <div className="h-1.5 w-16 bg-[#1FC166] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "KIITEE Merit Scholarship", desc: "100% full tuition fee waiver for top 100 rank-holders in the KIITEE exam. Free education.", icon: Star },
              { title: "Sports Scholarship", desc: "Awarded to state, national, and international level sports personalities seeking admissions.", icon: Award },
              { title: "Need-Based Aid", desc: "Tuition concessions for students from economically weaker backgrounds based on family income proofs.", icon: DollarSign },
              { title: "Pradyumna Bal Memorial", desc: "Complete 100% free education plus residential facilities for selected meritorious needy students.", icon: ShieldCheck }
            ].map((sc, idx) => {
              const IconComp = sc.icon;
              return (
                <div key={idx} className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="h-10 w-10 bg-emerald-50 rounded-xl flex items-center justify-center text-[#1FC166] mb-4">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-bold text-[#0b162c]">{sc.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold mt-2.5">{sc.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. STUDENT REVIEWS */}
      <section className="py-24 bg-white border-t border-slate-200/65">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-black text-emerald-700 uppercase tracking-[0.2em] bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-emerald-250/20">
              Testimonials
            </span>
            <h2 className="text-3xl font-black text-[#0b162c] tracking-tight">What Students Say About SS Education</h2>
            <div className="h-1.5 w-16 bg-[#1FC166] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Rahul Singh", course: "B.Tech CSE", text: "SS Education guided me thoroughly during my admission. They helped me evaluate options, understand the fee structure, and secured my seat in B.Tech CSE at KIIT easily!" },
              { name: "Divya Sharma", course: "MBA", text: "Highly professional counseling team! They walked me through the criteria, helped with application steps, and solved all my queries about hostel options and loans." },
              { name: "Amit Kumar Patnaik", course: "B.Tech ECE", text: "Coming from Bihar, I had many questions about college options. SS Education gave me realistic suggestions, saved my time, and got me admitted into KIIT Bhubaneswar." }
            ].map((rev, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-2xl relative shadow-sm">
                <span className="absolute top-4 right-6 text-6xl text-emerald-100 font-serif leading-none select-none">“</span>
                <p className="text-xs text-slate-655 font-semibold leading-relaxed mb-6 italic">"{rev.text}"</p>
                <div className="border-t border-slate-200/50 pt-4">
                  <span className="block text-xs font-bold text-slate-900">{rev.name}</span>
                  <span className="block text-[9px] font-bold uppercase text-emerald-600 mt-0.5">{rev.course}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. COMPARE KIIT */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/65">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-black text-emerald-700 uppercase tracking-[0.2em] bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-emerald-250/20">
              Comparison
            </span>
            <h2 className="text-3xl font-black text-[#0b162c] tracking-tight">Compare KIIT with Other Leading Universities</h2>
            <div className="h-1.5 w-16 bg-[#1FC166] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { vs: "KIIT vs VIT Vellore", parameters: ["KIIT: Avg package ₹8.5 LPA | Tuition ₹3.50 LPA | ABET Accredited.", "VIT: Avg package ₹9.0 LPA | Category fee structures (1 to 5).", "Verdict: KIIT offers unified infrastructure & lower batch competition."] },
              { vs: "KIIT vs SRM Chennai", parameters: ["KIIT: Avg package ₹8.5 LPA | 25 sq. km unified campus in Bhubaneswar.", "SRM: Avg package ₹7.5 LPA | High student density on campus.", "Verdict: KIIT provides better student-to-teacher ratio and research facilities."] },
              { vs: "KIIT vs MIT Manipal", parameters: ["KIIT: Tuition ₹3.50L/yr | Placement rate ~92.5%.", "MIT: Tuition ~₹4.50L/yr | Cost of living is relatively higher.", "Verdict: KIIT offers an identical academic rating with more affordable living expenses."] }
            ].map((comp, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all duration-300">
                <div>
                  <h4 className="text-sm font-bold text-[#0b162c] border-b border-slate-100 pb-2.5 mb-4 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-[#1FC166]" /> {comp.vs}
                  </h4>
                  <ul className="space-y-2 text-xs font-semibold text-slate-500">
                    {comp.parameters.map((p, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6">
                  <button onClick={scrollToHeroForm} className="w-full py-2.5 bg-emerald-50 hover:bg-[#1FC166] text-[#1FC166] hover:text-white rounded-xl text-xs font-bold uppercase transition-all duration-200">
                    Seek Guidance
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM INTERACTIVE TOOLS (GAME CHANGERS) */}
      <section className="py-24 bg-white border-t border-slate-200/65">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-black text-emerald-700 uppercase tracking-[0.2em] bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-emerald-250/20">
              Smart Widgets
            </span>
            <h2 className="text-3xl font-black text-[#0b162c] tracking-tight">Interactive Admission Planners</h2>
            <div className="h-1.5 w-16 bg-[#1FC166] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            
            {/* Tool 1: Eligibility Checker */}
            <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-[2rem] space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <Sliders className="h-6 w-6 text-[#1FC166] animate-pulse" />
                <h3 className="text-lg font-bold text-[#0b162c]">KIIT Admission Eligibility Checker</h3>
              </div>
              <form onSubmit={handleCheckEligibility} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-[10px] uppercase font-bold text-slate-500">Class 12 PCM/PCB %</Label>
                    <Input type="number" required placeholder="E.g. 82" value={eligibilityData.pcm} onChange={e => setEligibilityData(prev => ({ ...prev, pcm: e.target.value }))} className="h-11 rounded-xl border-slate-200 bg-white focus:ring-2 focus:ring-emerald-500/20 font-semibold" />
                  </div>
                  <div>
                    <Label className="text-[10px] uppercase font-bold text-slate-500">JEE / NEET Score (Optional)</Label>
                    <Input type="number" placeholder="E.g. 91" value={eligibilityData.score} onChange={e => setEligibilityData(prev => ({ ...prev, score: e.target.value }))} className="h-11 rounded-xl border-slate-200 bg-white focus:ring-2 focus:ring-emerald-500/20 font-semibold" />
                  </div>
                </div>
                <div>
                  <Label className="text-[10px] uppercase font-bold text-slate-500">Reservation Category</Label>
                  <Select onValueChange={val => setEligibilityData(prev => ({ ...prev, category: val }))}>
                    <SelectTrigger className="h-11 rounded-xl bg-white border-slate-200 text-xs font-semibold">
                      <SelectValue placeholder="General" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="General">General</SelectItem>
                      <SelectItem value="OBC">OBC-NCL</SelectItem>
                      <SelectItem value="SC/ST">SC / ST</SelectItem>
                      <SelectItem value="Quota">Specific Quotas / State</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full bg-[#002f18] hover:bg-[#001c0d] text-white h-11 rounded-xl font-bold uppercase tracking-wider text-xs">Check Eligibility Status</Button>
              </form>
              {eligibilityResult && (
                <div className="bg-emerald-50 border border-emerald-200/50 p-4 rounded-xl text-xs text-[#002f18] font-bold flex gap-2 items-start">
                  <Info className="h-4.5 w-4.5 text-[#1FC166] shrink-0 mt-0.5" />
                  <span>{eligibilityResult}</span>
                </div>
              )}
            </div>

            {/* Tool 2: Fee Calculator */}
            <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-[2rem] space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <Calculator className="h-6 w-6 text-[#1FC166]" />
                <h3 className="text-lg font-bold text-[#0b162c]">Fee & Expense Calculator</h3>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <Label className="text-[10px] uppercase font-bold text-slate-500">Select Course</Label>
                    <Select defaultValue="btech" onValueChange={setCalcCourse}>
                      <SelectTrigger className="h-10 rounded-xl bg-white border-slate-200 text-xs font-semibold">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="btech">B.Tech (Engineering)</SelectItem>
                        <SelectItem value="mba">MBA (KSOM)</SelectItem>
                        <SelectItem value="bba">BBA</SelectItem>
                        <SelectItem value="law">Law (BA LLB)</SelectItem>
                        <SelectItem value="mbbs">MBBS (KIMS)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-[10px] uppercase font-bold text-slate-500">Hostel Type</Label>
                    <Select defaultValue="nonac-2" onValueChange={setCalcHostel}>
                      <SelectTrigger className="h-10 rounded-xl bg-white border-slate-200 text-xs font-semibold">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nonac-2">Non-AC (2 Bed)</SelectItem>
                        <SelectItem value="ac-3">AC (3 Bed)</SelectItem>
                        <SelectItem value="ac-2">AC (2 Bed)</SelectItem>
                        <SelectItem value="premium-ac">Premium AC Suite</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-[10px] uppercase font-bold text-slate-500">Mess Type</Label>
                    <Select defaultValue="veg" onValueChange={setCalcMess}>
                      <SelectTrigger className="h-10 rounded-xl bg-white border-slate-200 text-xs font-semibold">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="veg">Vegetarian</SelectItem>
                        <SelectItem value="nonveg">Non-Vegetarian</SelectItem>
                        <SelectItem value="premium">Premium Special</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 p-5 rounded-2xl space-y-2.5 text-xs font-semibold text-slate-650">
                  <div className="flex justify-between"><span>Semester Tuition:</span> <span className="text-slate-900">₹{calculatedFees.tuition.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span>Semester Hostel Accommodation:</span> <span className="text-slate-900">₹{calculatedFees.hostel.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span>Semester Messing Charges:</span> <span className="text-slate-900">₹{calculatedFees.mess.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span>One-time Laptop & Reg Fee:</span> <span className="text-slate-900">₹{calculatedFees.other.toLocaleString()}</span></div>
                  <div className="border-t border-slate-150 pt-3 flex justify-between font-bold text-[#0b162c] text-sm">
                    <span>Estimated Semester Total:</span>
                    <span className="text-[#1FC166] text-base font-black">₹{calculatedFees.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tool 3: College Predictor */}
            <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-[2rem] space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <Compass className="h-6 w-6 text-[#1FC166]" />
                <h3 className="text-lg font-bold text-[#0b162c]">College & Branch Predictor</h3>
              </div>
              <form onSubmit={handlePredictCollege} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-[10px] uppercase font-bold text-slate-500">Score / Rank Type</Label>
                    <Select defaultValue="jee" onValueChange={setPredType}>
                      <SelectTrigger className="h-11 rounded-xl bg-white border-slate-200 text-xs font-semibold">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="jee">JEE Main Percentile</SelectItem>
                        <SelectItem value="kiitee">KIITEE Expected Rank</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-[10px] uppercase font-bold text-slate-500">Enter Your Score / Rank</Label>
                    <Input type="number" required placeholder="E.g. 88 or 12000" value={predScore} onChange={e => setPredScore(e.target.value)} className="h-11 rounded-xl border-slate-200 bg-white font-semibold focus:ring-2 focus:ring-emerald-500/20" />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-[#002f18] hover:bg-[#001c0d] text-white h-11 rounded-xl font-bold uppercase tracking-wider text-xs">Predict Best Allocation</Button>
              </form>
              {predResult && (
                <div className="bg-white border border-slate-200 p-5 rounded-2xl text-xs space-y-2.5 shadow-sm">
                  <p><strong>Predicted Branch:</strong> <span className="text-[#1FC166] font-black">{predResult.branch}</span></p>
                  <div className="flex items-center gap-2">
                    <strong>Admission Chance:</strong>
                    <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 rounded-full font-bold">{predResult.probability}</span>
                  </div>
                  <p className="font-bold text-[#0b162c] pt-1 border-t border-slate-100">Alternative Options Recommended:</p>
                  <ul className="list-disc pl-4 space-y-1 font-semibold text-slate-550">
                    {predResult.alternatives.map((alt, idx) => <li key={idx}>{alt}</li>)}
                  </ul>
                </div>
              )}
            </div>

            {/* Tool 4: EMI Calculator */}
            <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-[2rem] space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <Calculator className="h-6 w-6 text-[#1FC166]" />
                <h3 className="text-lg font-bold text-[#0b162c]">Education Loan EMI Estimator</h3>
              </div>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                    <span>Loan Amount</span>
                    <span className="font-black text-[#0b162c] text-sm">₹{loanAmount.toLocaleString()}</span>
                  </div>
                  <input type="range" min="100000" max="1500000" step="50000" value={loanAmount} onChange={e => setLoanAmount(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1FC166]" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                      <span>Rate (%)</span>
                      <span className="font-bold">{interestRate}%</span>
                    </div>
                    <input type="range" min="7" max="12" step="0.1" value={interestRate} onChange={e => setInterestRate(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1FC166]" />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                      <span>Tenure</span>
                      <span className="font-bold">{tenure} Years</span>
                    </div>
                    <input type="range" min="1" max="10" step="1" value={tenure} onChange={e => setTenure(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1FC166]" />
                  </div>
                </div>

                <div className="bg-white border border-slate-200 p-5 rounded-2xl text-center shadow-sm">
                  <span className="block text-[9px] uppercase font-bold text-slate-400 tracking-wider">Monthly Installment (EMI)</span>
                  <span className="text-2xl font-black text-[#1FC166] block mt-1">₹{monthlyEmi.toLocaleString()} / month</span>
                  <span className="block text-[8px] text-slate-450 font-bold mt-1">Estimations calculated under standard compound methods.</span>
                </div>
              </div>
            </div>

            {/* Tool 5: Downloadable checklists & checklists widget */}
            <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-[2rem] space-y-5 lg:col-span-2 shadow-sm">
              <div className="flex items-center gap-3">
                <Download className="h-6 w-6 text-[#1FC166]" />
                <h3 className="text-lg font-bold text-[#0b162c]">Important Checklists & Documentation</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 border-b border-slate-100 pb-1.5">Required Documents</h4>
                  <ul className="text-[10px] font-semibold text-slate-550 space-y-1">
                    <li>• Class 10 & 12 Marksheets</li>
                    <li>• KIITEE Admit Card / JEE Score</li>
                    <li>• Transfer & Migration Certificate</li>
                    <li>• Caste / Reservation proof (if any)</li>
                    <li>• 4 Passport size photographs</li>
                  </ul>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 border-b border-slate-100 pb-1.5">Counselling Packing</h4>
                  <ul className="text-[10px] font-semibold text-slate-550 space-y-1">
                    <li>• Provisional Seat Allotment Letter</li>
                    <li>• Initial Fee Payment Receipt</li>
                    <li>• Photo ID (Aadhaar / Passport)</li>
                    <li>• Original documents for physical check</li>
                    <li>• Notarized anti-ragging affidavits</li>
                  </ul>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 border-b border-slate-100 pb-1.5">Hostel Packing List</h4>
                  <ul className="text-[10px] font-semibold text-slate-550 space-y-1">
                    <li>• Bedding, pillows & room locks</li>
                    <li>• Laptop & study materials</li>
                    <li>• Toiletries & personal hygiene items</li>
                    <li>• Formal & casual apparel</li>
                    <li>• Essential personal medicine kit</li>
                  </ul>
                </div>
              </div>
              <div className="text-center pt-2">
                <Button onClick={scrollToHeroForm} className="bg-gradient-to-r from-emerald-500 to-[#1FC166] text-white text-xs font-extrabold uppercase px-6 py-2.5 h-auto rounded-xl">
                  Download All PDF Checklists
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 16. FAQs (25 SCHEMA ENABLED FAQs) */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/65">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-[11px] font-black text-emerald-700 uppercase tracking-[0.2em] bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-emerald-250/20">
              Help Center
            </span>
            <h2 className="text-3xl font-black text-[#0b162c] tracking-tight">Frequently Asked Questions (FAQs)</h2>
            <div className="h-1.5 w-16 bg-[#1FC166] mx-auto mt-4 rounded-full" />
            <div className="max-w-md mx-auto mt-6">
              <Input
                type="text"
                placeholder="Search FAQs (e.g. placements, fees...)"
                value={searchFaq}
                onChange={e => setSearchFaq(e.target.value)}
                className="h-11 rounded-xl bg-white border-slate-200 text-xs shadow-sm font-semibold focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setActiveFaqIndex(activeFaqIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 focus:outline-none"
                  >
                    <span className="text-sm font-bold text-[#0b162c] pr-4">{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 text-slate-400 shrink-0 transition-transform ${activeFaqIndex === idx ? "rotate-180" : ""}`} />
                  </button>
                  {activeFaqIndex === idx && (
                    <div className="p-5 border-t border-slate-100 bg-slate-50/50 text-xs text-slate-550 font-semibold leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-xs text-slate-500 font-semibold">No matching questions found.</p>
            )}
          </div>
        </div>
      </section>

      {/* 17. RELATED COLLEGES CAROUSEL */}
      <section className="py-24 bg-white border-t border-slate-200/65">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-black text-emerald-700 uppercase tracking-[0.2em] bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-emerald-250/20">
              Options
            </span>
            <h2 className="text-3xl font-black text-[#0b162c] tracking-tight">Related Private & Deemed Universities</h2>
            <div className="h-1.5 w-16 bg-[#1FC166] mx-auto mt-4 rounded-full" />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "VIT Vellore", link: "/vit-vellore" },
              { name: "SRM Chennai", link: "/srm-university-btech-admission-2026" },
              { name: "BITS Pilani", link: "/bits-pilani" },
              { name: "Amrita Vishwa", link: "/amrita-vishwa-vidyapeetham" },
              { name: "MIT Manipal", link: "/mit-manipal" },
              { name: "IEM Kolkata", link: "/iem-kolkata-admission-2026" }
            ].map((col, idx) => (
              <a
                key={idx}
                href={col.link}
                className="px-5 py-3.5 bg-slate-50 hover:bg-[#1FC166] border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:text-white hover:border-[#1FC166] shadow-sm transition-all duration-200"
              >
                {col.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 18. FINAL CTA BANNER */}
      <section className="py-24 bg-gradient-to-br from-[#00170b] to-[#000e06] text-white border-t border-slate-900">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black">Need Admission Guidance?</h2>
          <p className="text-base text-slate-350 max-w-xl mx-auto leading-relaxed font-semibold">
            Speak directly with our KIIT Admissions Coordinator and secure your free personalized career counselling session today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="tel:+919945667977" className="h-12 bg-[#1FC166] hover:bg-[#169d51] text-white rounded-xl font-bold text-xs uppercase tracking-wider px-8 shadow-lg shadow-emerald-500/10 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center">
              Talk To KIIT Expert
            </a>
            <a href="https://wa.me/919945667977" className="h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-xs uppercase tracking-wider px-8 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10 transition-transform hover:scale-105">
              <MessageCircle className="h-4 w-4 text-white" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* 19. STICKY MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] flex md:hidden gap-2 rounded-t-2xl">
        <a href="tel:+919945667977" className="flex-1 h-12 bg-slate-900 text-white rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md">
          <Phone className="h-4 w-4" /> Call
        </a>
        <a href="https://wa.me/919945667977" className="flex-1 h-12 bg-[#1FC166] text-white rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md">
          <MessageCircle className="h-4 w-4 text-white" /> WhatsApp
        </a>
        <button onClick={scrollToHeroForm} className="flex-1 h-12 bg-[#1FC166] text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-md">
          Apply Now
        </button>
      </div>

      {/* 20. FOOTER */}
      <footer className="py-16 bg-[#000a04] text-slate-400 text-center border-t border-white/5 pb-28 md:pb-16">
        <div className="container mx-auto px-4 max-w-7xl space-y-6">
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/about" className="hover:text-white">About Us</a>
            <a href="/courses" className="hover:text-white">All Courses</a>
            <a href="/engineering" className="hover:text-white">Engineering Colleges</a>
            <a href="/apply/kiit" className="hover:text-white">KIIT Admission 2026</a>
            <a href="/contact" className="hover:text-white">Contact Us</a>
          </div>

          <p className="text-[10px] text-slate-500 max-w-2xl mx-auto leading-relaxed uppercase tracking-wider font-bold">
            Disclaimer: SS Education is an independent admission consulting organization providing support, career counseling, and assistance. We are not the official website of KIIT University.
          </p>

          <p className="text-xs font-bold text-slate-500">
            © 2026 SS Education Consultancy Services. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* EXIT INTENT POPUP */}
      <AnimatePresence>
        {showExitPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full border border-slate-100 shadow-2xl relative"
            >
              <button onClick={() => setShowExitPopup(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-655 font-bold text-base">✕</button>
              
              <div className="text-center space-y-4">
                <div className="h-14 w-14 bg-emerald-50 text-[#1FC166] rounded-full flex items-center justify-center mx-auto">
                  <AlertTriangle className="h-8 w-8 animate-bounce" />
                </div>
                <h3 className="text-xl font-black text-[#0b162c] tracking-tight">Wait! Don't Miss Out</h3>
                <p className="text-xs text-slate-550 leading-relaxed font-semibold">
                  Seats for B.Tech CSE & MBBS are filling rapidly under priority counseling quotas. Lock your session for free before slots close!
                </p>
                <div className="pt-2 flex flex-col gap-2">
                  <button onClick={() => { setShowExitPopup(false); scrollToHeroForm(); }} className="h-12 bg-gradient-to-r from-emerald-500 to-[#1FC166] text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg">
                    Get Free Call Now
                  </button>
                  <button onClick={() => setShowExitPopup(false)} className="text-xs text-slate-400 font-bold hover:text-slate-600">
                    No thanks, I will browse details
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
