import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_SAFFRON } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "American International Medical College Udaipur MBBS Admission 2026 - Fees & Cutoff",
  seoDescription: "Discover MBBS Admission at American International Institute of Medical Sciences (AIIMS), Udaipur. Learn about 2026 fees, seats, cutoffs, and counseling process.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/american-international-medical-college-udaipur-admission-2026/#college",
        "name": "American International Institute of Medical Sciences, Udaipur",
        "alternateName": "American International Medical College Udaipur",
        "url": "http://www.aiimsudr.ac.in",
        "description": "American International Institute of Medical Sciences is a premier private medical college in Udaipur, approved by the National Medical Commission (NMC).",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Transport Nagar, Bedwas",
          "addressLocality": "Udaipur",
          "addressRegion": "Rajasthan",
          "postalCode": "313001",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "AIIMS",
  fullName: "AMERICAN INTERNATIONAL INSTITUTE OF MEDICAL SCIENCES, UDAIPUR",
  hindiName: "अमेरिकन इंटरनेशनल इंस्टीट्यूट ऑफ मेडिकल साइंसेज, उदयपुर",
  affiliation: "Affiliated with Rajasthan University of Health Sciences (RUHS)",
  location: "Transport Nagar, Bedwas, Udaipur",
  heroTitle: "American International Medical College MBBS Admissions",
  heroSubtitle: "Explore American International Institute of Medical Sciences, Udaipur. Access verified annual fee structures, counseling quota guidelines, category eligibility parameters, and live Rajasthan NEET cutoff updates.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "NEET UG 2026 Rajasthan state medical registrations are active. | American International Medical College seat matrix allocations mapping is live. | Submit details below for instant eligibility review.",
  deanName: "Dr. Vinay Joshi",
  deanDesignation: "Principal & Dean",
  deanQuote: "Welcome to American International Institute of Medical Sciences. Our objective is to produce highly skilled clinical graduates who serve the global community with dedication. GBH General Hospital provides an outstanding diagnostic landscape for training our MBBS students.",
  contactEmail: "admissions@college.edu.in",
  notices: [
  {
    "text": "American International Medical College MBBS Seat Matrix allocations and choices locking",
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
        text: "You have a solid chance of securing a State Quota seat at American International Medical College, Udaipur. Placing it high on preference locking is suggested.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Target State counseling Round 1 & 2.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 420) {
      return {
        status: "Competitive (State / Management Quota)",
        text: "Highly competitive for State Quota counseling rounds and holds secure thresholds for Management Quota seat allocations at American International Medical College.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Keep options locked for both State and Management quota.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 210) {
      return {
        status: "Management Quota Eligible",
        text: "You qualify perfectly for Open Management Quota seats at American International Medical College, Udaipur. Choice locking optimization will be required.",
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
  overviewTitle: "Overview of AMERICAN INTERNATIONAL INSTITUTE OF MEDICAL SCIENCES, UDAIPUR",
  overviewParagraphs: [
  "Established in <strong>2016</strong>, the <strong>American International Institute of Medical Sciences (AIIMS), Udaipur</strong> is a premier private medical college in Rajasthan. Affiliated with the <strong>Rajasthan University of Health Sciences (RUHS), Jaipur</strong>, the college is fully approved by the <strong>National Medical Commission (NMC)</strong>.",
  "Spanning a modern and vast campus at Transport Nagar, Bedwas, American International Medical College is attached to a 700+ bedded teaching hospital (GBH General Hospital). This advanced clinical core exposes medical students to a robust volume of diagnostics and patient flow daily."
],
  highlights: [
    {
      title: "Established Year",
      value: "2016",
      desc: "Solid clinical legacy in Udaipur",
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
      value: "Recognized",
      desc: "Approved by National Medical Commission",
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
      value: "700+ Beds",
      desc: "Attached tertiary care hospital (GBH General Hospital)",
      icon: HeartPulse,
    },
    {
      title: "Campus Location",
      value: "Udaipur",
      desc: "Transport Nagar, Bedwas, Udaipur",
      icon: MapPin,
    },
  ],
  feeStructure: [
    { quota: "State Quota (Government Seats)", annualFee: "₹18,90,000", remark: "For Rajasthan Domicile merit-listed candidates" },
    { quota: "Management Quota (All India Open)", annualFee: "₹32,00,000", remark: "Open to merit candidates nationwide" },
  ],
  feeNotes: [
  "<strong>Caution Money:</strong> A one-time refundable caution deposit of ₹3,50,000 is required at admission.",
  "<strong>Hostel Fees:</strong> Range from ₹2,10,000 to ₹3,50,000 per year based on room occupancy.",
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
    { title: "Lock Selection Preferences", desc: "Select 'American International Institute of Medical Sciences, Udaipur' as your prioritized choice." },
    { title: "Allotment Verification", desc: "Report to designated units with scorecards, domicile certificates, and physical fitness proof." },
    { title: "Fee Remittance & Enrolment", desc: "Pay the annual tuition fee, security cautions, and final bank guarantees." }
  ],
  facilities: [
    {
      title: "700+ Bed Teaching Hospital",
      desc: "Excellent clinical flow with modern multi-speciality diagnostics and patient units (GBH General Hospital).",
      icon: HeartPulse,
    },
    {
      title: "Diagnostics Centre & Imaging",
      desc: "Modern diagnostic labs, MRI/CT scanners, and digital imaging machines.",
      icon: Activity,
    },
    {
      title: "Smart Classroom Halls",
      desc: "Smart A/C class configurations with multimedia capabilities and interactive displays.",
      icon: BookOpen,
    },
    {
      title: "Integrated Central Library",
      desc: "A vast repository of reference manuals, medical journals, e-learning units, and study desks.",
      icon: FileText,
    },
    {
      title: "In-Campus Residential blocks",
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
      q: "Where is American International Institute of Medical Sciences located?",
      a: "The college is located at Transport Nagar, Bedwas, Udaipur, Rajasthan - 313001."
    },
    {
      q: "Which university is American International Medical College affiliated with?",
      a: "It is affiliated with the Rajasthan University of Health Sciences (RUHS), Jaipur."
    },
    {
      q: "What is the annual MBBS seat matrix capacity at American International?",
      a: "The approved annual intake capacity is 150 MBBS seats."
    },
    {
      q: "What is the tuition fee structure for MBBS under the Management Quota?",
      a: "The annual tuition fee for Management Quota seats is approximately ₹32,00,000. Hostel fees and caution deposits are charged additionally."
    },
    {
      q: "Is there a caution deposit at the time of admission?",
      a: "Yes, a refundable caution deposit of ₹3,50,005 is required at admission."
    }
  ],
  formId: "aiimsudr",
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

export default function AmericanInternationalUdaipurAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_SAFFRON} college={college} />;
}
