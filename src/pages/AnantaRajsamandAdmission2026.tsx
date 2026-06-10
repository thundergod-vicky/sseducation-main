import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_SAFFRON } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "Ananta Medical College Rajsamand MBBS Admission 2026 - Fees & Cutoff",
  seoDescription: "Explore MBBS Admission at Ananta Institute of Medical Sciences (AIMS), Rajsamand. Fees structure, seat matrix, cutoff, and counseling registry.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/ananta-medical-college-rajsamand-admission-2026/#college",
        "name": "Ananta Institute of Medical Sciences and Research Centre, Rajsamand",
        "alternateName": "AIMS Rajsamand",
        "url": "https://www.anantamedicity.com",
        "description": "Ananta Institute of Medical Sciences and Research Centre is a premier private medical college in Rajsamand, approved by the National Medical Commission (NMC).",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Kaliwas, NH-8",
          "addressLocality": "Rajsamand",
          "addressRegion": "Rajasthan",
          "postalCode": "313301",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "AIMS",
  fullName: "ANANTA INSTITUTE OF MEDICAL SCIENCES (AIMS), RAJSAMAND",
  hindiName: "अनंत चिकित्सा विज्ञान संस्थान एवं अनुसंधान केन्द्र, राजसमंद",
  affiliation: "Affiliated with Rajasthan University of Health Sciences (RUHS)",
  location: "Kaliwas, NH-8 Corridor, Rajsamand",
  heroTitle: "Ananta Medical College MBBS Admission & Seat Matrix Guide",
  heroSubtitle: "Explore the Ananta Institute of Medical Sciences & Research Centre, Rajsamand. Access validated fee structures, seat matrix configurations, category eligibility parameters, and live Rajasthan NEET cutoff estimations.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "NEET UG 2026 Rajasthan state medical registrations are active. | Ananta Medical College seat matrix allocations mapping is live. | Submit details below for instant eligibility review.",
  deanName: "Dr. Sanjay Kumar Gupta",
  deanDesignation: "Principal & Controller",
  deanQuote: "Welcome to Ananta Medical College. Our objective is to produce highly skilled clinical graduates who serve the global community with dedication. Ananta Hospital provides an outstanding diagnostic landscape for training our MBBS students.",
  contactEmail: "admissions@college.edu.in",
  notices: [
  {
    "text": "Ananta Medical College MBBS Seat Matrix allocations and choices locking",
    "date": "June 09, 2026",
    "tag": "SEAT MATRIX"
  },
  {
    "text": "Management quota fees configuration updates and caution deposit guidelines",
    "date": "June 06, 2026",
    "tag": "FEE STRUCTURE"
  },
  {
    "text": "Rajasthan state medical counselling choice filling dates locked",
    "date": "June 02, 2026",
    "tag": "COUNSELING"
  },
  {
    "text": "Hostel room allocation options and dining guidelines for new batch",
    "date": "May 25, 2026",
    "tag": "HOSTEL GUIDE"
  }
],
  initialScore: 440,
  predictorMidLabel: "State Cutoff (490+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 510) {
      return {
        status: "Excellent State Merit Score",
        text: "You have a solid chance of securing a State Quota seat at Ananta Medical College, Rajsamand. Placing AIMS high on preference locking is suggested.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Target State counseling Round 1 & 2.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 420) {
      return {
        status: "Competitive (State / Management Quota)",
        text: "Highly competitive for State Quota counseling rounds and holds secure thresholds for Management Quota seat allocations at Ananta Medical College.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Keep options locked for both State and Management quota.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 210) {
      return {
        status: "Management Quota Eligible",
        text: "You qualify perfectly for Open Management Quota seats at Ananta Medical College, Rajsamand. Choice locking optimization will be required.",
        color: "text-amber-900 border-amber-200 bg-amber-50/40",
        quotaAdvice: "Prepare choice details for Management Quota seats.",
        btnStyle: "bg-amber-800 hover:bg-amber-900 text-white"
      };
    } else if (score >= 130) {
      return {
        status: "NRI / Residual Seat Pathway",
        text: "Qualified NEET UG. Seat allocations will rely primarily on NRI-sponsored streams or subsequent vacant allocations in stray counseling rounds.",
        color: "text-slate-800 border-slate-200 bg-slate-100/50",
        quotaAdvice: "Consult for NRI quota requirements and fee status.",
        btnStyle: "bg-slate-700 hover:bg-slate-800 text-white"
      };
    } else {
      return {
        status: "Qualifying Score Required",
        text: "Your score is below the estimated qualifying NEET cutoff. Qualifying NEET UG is mandatory for any medical seat registration or allocation in India.",
        color: "text-red-950 border-red-200 bg-red-50/20",
        quotaAdvice: "Connect for NEET improvement recommendations.",
        btnStyle: "bg-red-900 hover:bg-red-950 text-white"
      };
    }
  },
  overviewTitle: "Overview of ANANTA INSTITUTE OF MEDICAL SCIENCES (AIMS), RAJSAMAND",
  overviewParagraphs: [
  "Established in <strong>2015</strong>, the <strong>Ananta Institute of Medical Sciences and Research Centre (AIMS&RC), Rajsamand</strong> is a leading private medical college in Rajasthan. Affiliated with the <strong>Rajasthan University of Health Sciences (RUHS), Jaipur</strong>, the college is fully approved by the <strong>National Medical Commission (NMC)</strong>.",
  "Spanning a modern and vast campus at Kaliwas, along the NH-8 corridor, Ananta Medical College is attached to a 730+ bedded teaching hospital. This advanced clinical core exposes medical students to a robust volume of diagnostics and patient flow daily."
],
  highlights: [
    {
      title: "Established Year",
      value: "2015",
      desc: "Decades of academic clinical history in Rajsamand",
      icon: Calendar,
    },
    {
      title: "Affiliated Body",
      value: "RUHS, Jaipur",
      desc: "Affiliated with Rajasthan University of Health Sciences",
      icon: Building,
    },
    {
      title: "NMC Approval",
      value: "Approved",
      desc: "Recognized by National Medical Commission",
      icon: ShieldCheck,
    },
    {
      title: "MBBS Seat Matrix",
      value: "150 Seats",
      desc: "Undergraduate MBBS seat matrix allocation",
      icon: Users,
    },
    {
      title: "Clinical Support",
      value: "730+ Beds",
      desc: "Attached tertiary multi-specialty teaching hospital",
      icon: HeartPulse,
    },
    {
      title: "Strategic Location",
      value: "Rajsamand",
      desc: "Kaliwas, NH-8 Corridor, Rajsamand",
      icon: MapPin,
    },
  ],
  feeStructure: [
    { quota: "State Quota (Government Seats)", annualFee: "₹18,90,000", remark: "For Rajasthan Domicile merit-listed candidates" },
    { quota: "Management Quota (All India Open)", annualFee: "₹28,00,000", remark: "Open to merit candidates nationwide" },
  ],
  feeNotes: [
  "<strong>Caution Money:</strong> A one-time refundable caution deposit of ₹1,00,000 is required at admission.",
  "<strong>Hostel Fees:</strong> Range from ₹1,20,000 to ₹2,50,000 per year depending on room choices and AC.",
  "<strong>Bank Guarantee:</strong> A bank guarantee for subsequent course years is required as per state regulations."
],
  cutoffSectionTitle: "Estimated NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "State Quota - General (UR)", scoreRange: "490 - 530 Marks", percentile: "93.5%+" },
    { category: "State Quota - OBC", scoreRange: "460 - 500 Marks", percentile: "91.5%+" },
    { category: "State Quota - SC / ST", scoreRange: "360 - 390 Marks", percentile: "80.0%+" },
    { category: "Management Quota (Open Merit)", scoreRange: "210 - 360 Marks", percentile: "68.0%+" },
  ],
  processSectionTitle: "Admission Counseling Steps",
  admissionSteps: [
    { title: "Appear & Qualify NEET", desc: "Secure the category-wise qualifying percentile in the NTA NEET-UG exam." },
    { title: "State Counselling Registry", desc: "Complete registrations on the Rajasthan State Medical Counselling board portal." },
    { title: "Lock Selection Preferences", desc: "Select 'Ananta Institute of Medical Sciences, Rajsamand' as your prioritized choice." },
    { title: "Allotment Verification", desc: "Report to designated units with scorecards, domicile certificates, and physical fitness proof." },
    { title: "Fee Remittance & Enrolment", desc: "Pay the annual tuition fee, security cautions, and final bank guarantees." }
  ],
  facilities: [
    {
      title: "730+ Bed Teaching Hospital",
      desc: "Excellent clinical flow with modern multi-speciality diagnostics and patient units.",
      icon: HeartPulse,
    },
    {
      title: "State-of-the-Art Labs",
      desc: "Anatomy, Physiology, and Pathology laboratory rooms with modern machinery.",
      icon: Activity,
    },
    {
      title: "Auditorium Lecture Halls",
      desc: "Smart A/C class configurations with multimedia capabilities and interactive displays.",
      icon: BookOpen,
    },
    {
      title: "Centralized Library",
      desc: "A vast repository of reference manuals, medical journals, e-learning units, and study desks.",
      icon: FileText,
    },
    {
      title: "In-Campus Hostels",
      desc: "Separate secure blocks for boys and girls with AC/Non-AC layouts and standard mess.",
      icon: Building,
    },
    {
      title: "Recreation & Gymnasium",
      desc: "Playgrounds, fitness setups, and indoor sports clubs promoting physical wellness.",
      icon: Sparkles,
    },
  ],
  faqs: [
    {
      q: "Where is Ananta Institute of Medical Sciences located?",
      a: "The college is located at Kaliwas, NH-8, Rajsamand, Rajasthan - 313301, located closely to Udaipur highway networks."
    },
    {
      q: "Which university is Ananta Medical College affiliated with?",
      a: "It is affiliated with the Rajasthan University of Health Sciences (RUHS), Jaipur."
    },
    {
      q: "What is the annual MBBS intake at Ananta Medical College?",
      a: "The approved annual intake capacity is 150 MBBS seats."
    },
    {
      q: "What is the fee structure for MBBS under the Management Quota?",
      a: "The annual tuition fee for Management Quota seats at Ananta is approximately ₹28,00,000. Hostel fees and security deposits are charged additionally."
    },
    {
      q: "Is there a caution deposit at the time of admission?",
      a: "Yes, a refundable caution deposit of ₹1,00,000 is required at admission."
    }
  ],
  formId: "ananta",
  quotaOptions: [
  {
    "value": "Govt Quota",
    "label": "Government Quota Seat"
  },
  {
    "value": "Private Seat",
    "label": "Private Open Merit Seat"
  },
  {
    "value": "Management / NRI",
    "label": "Management / NRI Quota"
  }
],
  counselingNote: "Counseling guidelines are subject to official notifications.",
  formDeskLabel: "Registration Desk",
};

export default function AnantaRajsamandAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_SAFFRON} college={college} />;
}
