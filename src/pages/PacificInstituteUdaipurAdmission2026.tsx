import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_SAFFRON } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "Pacific Institute of Medical Sciences Udaipur MBBS Admission 2026 - Fees & Cutoff",
  seoDescription: "Explore MBBS Admission at Pacific Institute of Medical Sciences (PIMS), Udaipur. Detailed overview of fee structure, cutoffs, and counseling process.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/pacific-institute-of-medical-sciences-udaipur-admission-2026/#college",
        "name": "Pacific Institute of Medical Sciences, Udaipur",
        "alternateName": "PIMS Udaipur",
        "url": "https://www.pacificmedicalsciences.ac.in",
        "description": "Pacific Institute of Medical Sciences (PIMS) is a premier private medical college in Udaipur, approved by the National Medical Commission (NMC).",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Umarda",
          "addressLocality": "Udaipur",
          "addressRegion": "Rajasthan",
          "postalCode": "313015",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "PIMS",
  fullName: "PACIFIC INSTITUTE OF MEDICAL SCIENCES (PIMS), UDAIPUR",
  hindiName: "प्रशांत आयुर्विज्ञान संस्थान, उदयपुर",
  affiliation: "Constituent College of Sai Tirupati University, Udaipur",
  location: "Umarda, Udaipur Corridor, Rajasthan",
  heroTitle: "PIMS Udaipur MBBS Admission & Seat Matrix Guide",
  heroSubtitle: "Explore the Pacific Institute of Medical Sciences (PIMS), Udaipur. Access validated fee structures, seat matrix configurations, category eligibility parameters, and live Rajasthan NEET cutoff estimations.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "NEET UG 2026 Rajasthan state medical registrations are active. | PIMS Udaipur seat matrix allocations mapping is live. | Submit details below for instant eligibility review.",
  deanName: "Dr. Suresh Chandra Goyal",
  deanDesignation: "Principal & Controller",
  deanQuote: "Welcome to PIMS. Our mission is to integrate clinical training with deep medical expertise to prepare future practitioners. Our attached 1560-bed hospital provides our students with a rigorous, patient-centered learning platform.",
  contactEmail: "admissions@college.edu.in",
  notices: [
  {
    "text": "PIMS Udaipur MBBS Seat Matrix allocation and choice locked preferences",
    "date": "June 09, 2026",
    "tag": "SEAT MATRIX"
  },
  {
    "text": "Management quota revised fees parameters and bank bond instructions",
    "date": "June 06, 2026",
    "tag": "FEE MATRIX"
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
  initialScore: 450,
  predictorMidLabel: "State Cutoff (480+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 500) {
      return {
        status: "Excellent State Merit Score",
        text: "You have a solid chance of securing a seat under the State Quota at PIMS Udaipur. Priority locking is highly recommended.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Target State counseling Round 1 & 2.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 415) {
      return {
        status: "Good Chance (State / Management Quota)",
        text: "You are highly competitive for State Quota counseling cycles and represent an absolute guarantee for Management Quota seats at PIMS Udaipur.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Fill options for both State and Management quota.",
        btnStyle: "bg-sky-700 hover:bg-sky-855 text-white"
      };
    } else if (score >= 220) {
      return {
        status: "Management Quota Eligible",
        text: "You meet the standard score margins for Management Quota seats at PIMS Udaipur. Choice lock optimization will be required.",
        color: "text-amber-900 border-amber-200 bg-amber-50/40",
        quotaAdvice: "Explore Management seats and secure counselling guidance.",
        btnStyle: "bg-amber-800 hover:bg-amber-900 text-white"
      };
    } else if (score >= 130) {
      return {
        status: "NRI / Residual Seat Pathway",
        text: "Qualified NEET UG. Seat allocations will rely on NRI-sponsored quota seats or residual vacant allocations in subsequent stray rounds.",
        color: "text-slate-800 border-slate-200 bg-slate-100/50",
        quotaAdvice: "Consult for NRI quota requirements and fee status.",
        btnStyle: "bg-slate-700 hover:bg-slate-800 text-white"
      };
    } else {
      return {
        status: "Qualifying Score Required",
        text: "Your score is below the estimated qualifying NEET cutoff. Qualifying NEET UG is mandatory for any MBBS program registration in India.",
        color: "text-red-950 border-red-200 bg-red-50/20",
        quotaAdvice: "Connect for NEET improvement recommendations.",
        btnStyle: "bg-red-900 hover:bg-red-950 text-white"
      };
    }
  },
  overviewTitle: "Overview of PACIFIC INSTITUTE OF MEDICAL SCIENCES (PIMS), UDAIPUR",
  overviewParagraphs: [
  "Established in <strong>2015</strong>, the <strong>Pacific Institute of Medical Sciences (PIMS), Udaipur</strong> is a premier private medical college in Rajasthan. Affiliated with <strong>Sai Tirupati University</strong>, the college is fully approved by the <strong>National Medical Commission (NMC)</strong>.",
  "Situated in a modern, self-contained campus in Udaipur's Umarda area, PIMS is attached to a 1560+ bedded teaching hospital. This heavy-capacity clinical core provides undergraduate medical students with intensive diagnostic exposure and patient care training."
],
  highlights: [
    {
      title: "Established Year",
      value: "2015",
      desc: "Solid history of academic clinical training",
      icon: Calendar,
    },
    {
      title: "Affiliated Body",
      value: "Sai Tirupati Univ.",
      desc: "Constituent college of Sai Tirupati University",
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
      desc: "Undergraduate MBBS seat allocation capacity",
      icon: Users,
    },
    {
      title: "Clinical Base",
      value: "1560+ Beds",
      desc: "Attached high-capacity tertiary care hospital",
      icon: HeartPulse,
    },
    {
      title: "Campus Location",
      value: "Udaipur",
      desc: "Umarda, Udaipur Corridor, Rajasthan",
      icon: MapPin,
    },
  ],
  feeStructure: [
    { quota: "State Quota (Government Seats)", annualFee: "₹25,00,000", remark: "For Rajasthan Domicile merit-listed candidates" },
    { quota: "Management Quota (All India Open)", annualFee: "₹34,00,000", remark: "Open to candidates from all Indian states" },
  ],
  feeNotes: [
  "<strong>Caution Money:</strong> A one-time refundable caution deposit of ₹5,00,000 is required at joining.",
  "<strong>Hostel Fees:</strong> Range from approximately ₹1,50,000 to ₹3,00,000 per year based on room occupancy.",
  "<strong>Bonds:</strong> Submission of standard college bond formats is required for subsequent years."
],
  cutoffSectionTitle: "Estimated NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "State Quota - General (UR)", scoreRange: "480 - 520 Marks", percentile: "93.0%+" },
    { category: "State Quota - OBC", scoreRange: "455 - 490 Marks", percentile: "91.0%+" },
    { category: "State Quota - SC / ST", scoreRange: "360 - 390 Marks", percentile: "80.0%+" },
    { category: "Management Quota (Open Merit)", scoreRange: "220 - 350 Marks", percentile: "68.0%+" },
  ],
  processSectionTitle: "Admission Counseling Steps",
  admissionSteps: [
    { title: "Appear & Qualify NEET", desc: "Secure the category-wise qualifying percentile in the NTA NEET-UG exam." },
    { title: "State Counselling Registry", desc: "Complete registrations on the Rajasthan State Medical Counselling board portal." },
    { title: "Lock Selection Preferences", desc: "Select 'Pacific Institute of Medical Sciences, Udaipur' as your prioritized selection choice." },
    { title: "Allotment Verification", desc: "Report to designated units with scorecards, domicile certificates, and physical fitness proof." },
    { title: "Fee Remittance & Enrolment", desc: "Pay the annual tuition fee, security cautions, and final bank guarantees." }
  ],
  facilities: [
    {
      title: "1560+ Bed Teaching Hospital",
      desc: "Massive bedded multi-speciality tertiary care center handling solid patient flow daily.",
      icon: HeartPulse,
    },
    {
      title: "Diagnostics Centre",
      desc: "Modern diagnostic labs, MRI/CT scanners, and digital imaging machines.",
      icon: Activity,
    },
    {
      title: "Hi-Tech Smart Classrooms",
      desc: "A/C lecture auditoriums featuring acoustic sound setups and interactive screens.",
      icon: BookOpen,
    },
    {
      title: "Centralized Digital Library",
      desc: "Vast collections of reference books, international journals, and e-learning zones.",
      icon: FileText,
    },
    {
      title: "In-Campus Hostels",
      desc: "Separate secure blocks for boys and girls with AC/Non-AC layouts and standard mess.",
      icon: Building,
    },
    {
      title: "Sports Complex & Gym",
      desc: "Playgrounds, gym equipment, and indoor sports clubs promoting physical health.",
      icon: Sparkles,
    },
  ],
  faqs: [
    {
      q: "Where is PIMS Medical College located?",
      a: "PIMS Udaipur (Pacific Institute of Medical Sciences) is located at Umarda, Udaipur, Rajasthan - 313015."
    },
    {
      q: "Which university is PIMS affiliated with?",
      a: "PIMS Udaipur is affiliated with Sai Tirupati University, Udaipur, which is a recognized private university in the state."
    },
    {
      q: "What is the annual MBBS intake at PIMS Udaipur?",
      a: "The approved annual intake capacity is 150 MBBS seats."
    },
    {
      q: "What is the tuition fee structure for MBBS under the Management Quota?",
      a: "The annual tuition fee for Management Quota seats at PIMS Udaipur is approximately ₹34,00,000. Admission cautions and hostel charges are charged additionally."
    },
    {
      q: "Is there a caution deposit at the time of admission?",
      a: "Yes, a refundable caution deposit of ₹5,00,000 is required at admission."
    }
  ],
  formId: "pims",
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

export default function PacificInstituteUdaipurAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_SAFFRON} college={college} />;
}
