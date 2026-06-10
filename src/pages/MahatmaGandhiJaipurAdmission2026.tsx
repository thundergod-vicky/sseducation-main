import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_SAFFRON } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "Mahatma Gandhi Medical College (MGMCH) Jaipur MBBS Admission 2026",
  seoDescription: "Explore MBBS Admission at Mahatma Gandhi Medical College and Hospital (MGMCH), Jaipur. Get details on fees, seat intake, Rajasthan NEET cutoff, and counseling support.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/mahatma-gandhi-medical-college-jaipur-admission-2026/#college",
        "name": "Mahatma Gandhi Medical College and Hospital (MGMCH), Jaipur",
        "alternateName": "MGMCH Jaipur",
        "url": "https://www.mgumst.org",
        "description": "Mahatma Gandhi Medical College and Hospital, Jaipur is a leading private medical college in Rajasthan, constituent under Mahatma Gandhi University of Medical Sciences & Technology (MGUMST).",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "RIICO Institutional Area, Sitapura, Tonk Road",
          "addressLocality": "Jaipur",
          "addressRegion": "Rajasthan",
          "postalCode": "302022",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "MG",
  fullName: "MAHATMA GANDHI MEDICAL COLLEGE & HOSPITAL, JAIPUR",
  hindiName: "महात्मा गांधी चिकित्सा महाविद्यालय एवं अस्पताल, जयपुर",
  affiliation: "Constituent Unit of Mahatma Gandhi University of Medical Sciences & Technology (MGUMST)",
  location: "Sitapura Institutional Corridor, Tonk Road, Jaipur",
  heroTitle: "MBBS Admission Guide & Counseling Seat Matrix mapping",
  heroSubtitle: "Explore Mahatma Gandhi Medical College, Jaipur. Direct interface to check seat availabilities, actual annual fees, category eligibility matrices, and live NEET UG state-quota cutoffs.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "NEET UG 2026 Rajasthan state counseling registrations started. | MGMCH Jaipur seat matrix mapping is live. | Submit profile below for eligibility checks. | Hostel allotments scheduled.",
  deanName: "Dr. G.N. Saxena",
  deanDesignation: "Dean Academics",
  deanQuote: "",
  contactEmail: "info@mgumst.org",
  notices: [
  {
    "text": "Detailed Fee guidelines and concessions for Management Quota MBBS seats",
    "date": "June 04, 2026",
    "tag": "FEE NOTICE"
  },
  {
    "text": "NMC Seat Matrix verification for Mahatma Gandhi University Medical Programs",
    "date": "June 02, 2026",
    "tag": "SEAT MATRIX"
  },
  {
    "text": "Rajasthan NEET UG State counseling registration steps and option-entry guide",
    "date": "May 29, 2026",
    "tag": "COUNSELING"
  },
  {
    "text": "Hostel rooms allocation criteria (Single / Double sharing) for MBBS 1st Year",
    "date": "May 25, 2026",
    "tag": "HOSTEL"
  }
],
  initialScore: 480,
  predictorMidLabel: "State Cutoff (550+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 580) {
      return {
        status: "Excellent Merit Score",
        text: "You have an outstanding chance for State Quota counseling rounds at Mahatma Gandhi Medical College, Jaipur. Recommended to prioritize MGMCH as first preference.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Target State counseling Round 1.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 500) {
      return {
        status: "Competitive (State / Management)",
        text: "You are highly competitive for State Quota rounds and hold an absolute guarantee for Management Quota seat allocations at MGMCH Jaipur.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Fill choices for both State and Management seats.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 350) {
      return {
        status: "Management Quota Eligible",
        text: "You qualify perfectly for the open Management Quota seats at Mahatma Gandhi Medical College, Jaipur. Choice filling needs optimization.",
        color: "text-amber-900 border-amber-200 bg-amber-50/40",
        quotaAdvice: "Explore Management seats and secure counselling guidance.",
        btnStyle: "bg-amber-800 hover:bg-amber-900 text-white"
      };
    } else if (score >= 130) {
      return {
        status: "NRI / Sponsored Pathway",
        text: "You have qualified NEET UG. Admission pathways will rely heavily on NRI-sponsored quota, vacancy configurations, or deemed counseling.",
        color: "text-slate-800 border-slate-200 bg-slate-100/50",
        quotaAdvice: "Request NRI quota structure and fee balance check.",
        btnStyle: "bg-slate-700 hover:bg-slate-800 text-white"
      };
    } else {
      return {
        status: "Qualifying Score Required",
        text: "Your score is below the estimated qualifying cutoff. NEET qualification is mandatory for all medical seat matrix allocations in India.",
        color: "text-red-950 border-red-200 bg-red-50/20",
        quotaAdvice: "Connect for NEET coaching suggestions or alternative medical courses.",
        btnStyle: "bg-red-900 hover:bg-red-950 text-white"
      };
    }
  },
  overviewTitle: "Overview of MAHATMA GANDHI MEDICAL COLLEGE & HOSPITAL, JAIPUR",
  overviewParagraphs: [
  "Established in the year 2000, <strong>Mahatma Gandhi Medical College and Hospital (MGMCH), Jaipur</strong> is one of the premier private medical colleges in Rajasthan and North India. As a constituent unit of the Mahatma Gandhi University of Medical Sciences and Technology (MGUMST), the college is fully approved by the <strong>National Medical Commission (NMC)</strong>.",
  "MGMCH Jaipur has evolved into a premier center for advanced healthcare and high-quality medical pedagogy. Spanning an expansive urban campus in Jaipur's institutional Sitapura area, the college is attached to a 1000+ bed multi-specialty tertiary care hospital, ensuring students receive exceptional hands-on clinical exposure and practical diagnostics training."
],
  highlights: [
    {
      title: "Established Year",
      value: "2000",
      desc: "Two decades of academic legacy",
      icon: Calendar,
    },
    {
      title: "Affiliated Body",
      value: "MGUMST University",
      desc: "Constituent unit of a premium deemed university",
      icon: Building,
    },
    {
      title: "NMC Approval Status",
      value: "Approved",
      desc: "Recognized by National Medical Commission",
      icon: ShieldCheck,
    },
    {
      title: "MBBS Intake Capacity",
      value: "250 Seats",
      desc: "Largest approved seat matrix in Rajasthan",
      icon: Users,
    },
    {
      title: "Clinical Support",
      value: "1000+ Beds",
      desc: "Attached super-specialty hospital with heavy OPD flow",
      icon: HeartPulse,
    },
    {
      title: "Aesthetic Location",
      value: "Jaipur",
      desc: "Sitapura Institutional Corridor, Tonk Road, Jaipur",
      icon: MapPin,
    },
  ],
  feeStructure: [
    { quota: "State / Government Quota", annualFee: "₹19,50,000", remark: "Reserved for Rajasthan Domicile merit holders" },
    { quota: "Management Quota (All India)", annualFee: "₹26,75,000", remark: "Open to candidates from all Indian States" },
    { quota: "NRI / Sponsored Quota", annualFee: "$45,000 (Approx ₹31.5L)", remark: "NRI sponsored seats & global applicants" },
  ],
  feeNotes: [
  "<strong>Hostel Fees:</strong> Double sharing charges from ₹2.24 Lakhs to ₹3.92 Lakhs per year depending on AC preferences.",
  "<strong>Security Deposit:</strong> A one-time refundable security deposit of ₹2,00,000 is required at admission.",
  "<strong>Bank Guarantee:</strong> A bank guarantee for remaining course years is mandatory as per state directives."
],
  cutoffSectionTitle: "Estimated NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "State Quota - General (UR)", scoreRange: "560 - 590 Marks", percentile: "96.5%+" },
    { category: "State Quota - OBC", scoreRange: "540 - 570 Marks", percentile: "95.2%+" },
    { category: "State Quota - SC / ST", scoreRange: "410 - 450 Marks", percentile: "85.0%+" },
    { category: "Management Quota (All India Open)", scoreRange: "350 - 480 Marks", percentile: "80.0%+" },
  ],
  processSectionTitle: "Admission Counseling Steps",
  admissionSteps: [
    { title: "Appearing for NEET UG", desc: "Must qualify the NTA NEET-UG exam with the minimum required category-wise percentile." },
    { title: "State Counseling Registration", desc: "Register on the Rajasthan State Medical Counselling portal as a Domicile or All-India Management candidate." },
    { title: "Preference Choice-Filling", desc: "Select Mahatma Gandhi Medical College, Jaipur (MGMCH) as your high-priority choice during active rounds." },
    { title: "Seat Allotment & Document Verification", desc: "Report to the counseling board for verification of scorecards, domicile certificates, and physical fitness certificates." },
    { title: "Fee Remittance & Final Enrollment", desc: "Pay the first-year annual tuition fee and submit the bank guarantee to secure the MBBS seat." }
  ],
  facilities: [
    {
      title: "1000+ Bed Attached Hospital",
      desc: "State-of-the-art diagnostic suites, critical care units, and surgery wings handling heavy outpatient volume.",
      icon: HeartPulse,
    },
    {
      title: "High-Fidelity Simulation Unit",
      desc: "Interactive medical simulator mannequins, providing advanced virtual training environments for surgical procedures.",
      icon: Activity,
    },
    {
      title: "AC Smart Classrooms",
      desc: "Auditorium-style lecture theatres featuring electronic screens and digital acoustic systems.",
      icon: BookOpen,
    },
    {
      title: "24/7 Central Library",
      desc: "Spanning thousands of square feet, equipped with international journal indices, high-speed Wi-Fi, and cubicle spaces.",
      icon: FileText,
    },
    {
      title: "In-Campus Hostels",
      desc: "Hygienic living blocks with modern double sharing AC rooms, standard mess, recreation lounge, and round-the-clock wardens.",
      icon: Building,
    },
    {
      title: "Elite Sports Center",
      desc: "Lush outdoor playfields, indoor games club, and fitness gymnasium to promote physical well-being.",
      icon: Sparkles,
    },
  ],
  faqs: [
    {
      q: "Where is Mahatma Gandhi Medical College (MGMCH) located?",
      a: "MGMCH is located in Sitapura Institutional Area, Tonk Road, Jaipur, Rajasthan - 302022. It is highly accessible via the Jaipur International Airport and the railway junctions."
    },
    {
      q: "What is the annual MBBS intake capacity at MGMCH Jaipur?",
      a: "The college has an approved intake capacity of 250 MBBS seats per academic year, which are allocated through the Rajasthan NEET UG counseling process."
    },
    {
      q: "Is NEET qualification mandatory for admission at MGMCH Jaipur?",
      a: "Yes, NEET UG qualification is strictly mandatory for all categories of seats, including State Quota, Management Quota, and NRI Quota. No candidate can secure MBBS admission without qualifying NEET."
    },
    {
      q: "What are the hostel charges at Mahatma Gandhi Medical College, Jaipur?",
      a: "The hostel fees range between approximately ₹2.24 Lakhs to ₹3.92 Lakhs per year depending on the preference of single/double occupancy, AC/Non-AC, and attached bathroom configurations."
    },
    {
      q: "Which university is MGMCH affiliated with?",
      a: "MGMCH is a constituent college of Mahatma Gandhi University of Medical Sciences and Technology (MGUMST), Jaipur, which is a recognized private medical university."
    }
  ],
  formId: "mgmch",
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

export default function MahatmaGandhiJaipurAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_SAFFRON} college={college} />;
}
