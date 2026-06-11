import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_SAFFRON } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "JNU Medical College Jaipur MBBS Admission 2026 - Fees & Cutoff",
  seoDescription: "Explore MBBS Admission at Jaipur National University Institute for Medical Sciences and Research Centre (JNUIMSRC), Jaipur. Fees, cutoffs, and counseling process.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/jnu-medical-college-jaipur-admission-2026/#college",
        "name": "Jaipur National University Institute for Medical Sciences and Research Centre, Jaipur",
        "alternateName": "JNUIMSRC Jaipur",
        "url": "https://www.jnujaipur.ac.in",
        "description": "JNUIMSRC Jaipur is a premier private medical college in Rajasthan, constituent under Jaipur National University, approved by the National Medical Commission (NMC).",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jagatpura",
          "addressLocality": "Jaipur",
          "addressRegion": "Rajasthan",
          "postalCode": "302017",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "JNU",
  fullName: "JAIPUR NATIONAL UNIVERSITY INST. OF MEDICAL SCIENCES (JNUIMSRC)",
  hindiName: "जयपुर नेशनल यूनिवर्सिटी चिकित्सा विज्ञान संस्थान एवं अनुसंधान केन्द्र",
  affiliation: "Constituent College of Jaipur National University, Jaipur",
  location: "Jagatpura Institutional Corridor, Jaipur",
  heroTitle: "JNU Medical College MBBS Admission & Counselling Matrix",
  heroSubtitle: "Explore JNUIMSRC Medical College, Jaipur. Check verified annual fees structures, counseling quota guidelines, category eligibility markers, and live cutoff ranks analysis.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "NEET UG 2026 Rajasthan state medical registrations are online. | JNUIMSRC Jaipur seat matrix allocations mapping is active. | Submit profile details below for instant category checks.",
  deanName: "Maj. Gen. (Dr.) M.S. Tevatia",
  deanDesignation: "Principal & Controller",
  deanQuote: "Welcome to the JNU Institute for Medical Sciences and Research Centre. Our objective is to produce highly skilled clinical graduates who serve the global community with dedication. JNU Hospital provides an outstanding diagnostic landscape for training our MBBS students.",
  contactEmail: "admissions@college.edu.in",
  notices: [
  {
    "text": "JNUIMSRC Jaipur seat allocation guidelines and verification schedule",
    "date": "June 09, 2026",
    "tag": "COUNSELING"
  },
  {
    "text": "Detailed MBBS tuition fee structures and caution deposit outlines",
    "date": "June 06, 2026",
    "tag": "FEE MATRIX"
  },
  {
    "text": "Hostel room booking parameters and mess configurations for first-year batches",
    "date": "June 02, 2026",
    "tag": "HOSTEL GUIDE"
  },
  {
    "text": "NMC verified seat intake status updates for academic batch 2026",
    "date": "May 28, 2026",
    "tag": "SEAT STATUS"
  }
],
  initialScore: 440,
  predictorMidLabel: "State Cutoff (510+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 530) {
      return {
        status: "Strong Selection Score",
        text: "You have a solid chance for State Quota allotment rounds at JNU Medical College, Jaipur. Highly recommended to place JNUIMSRC high on your choice lists.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Target State counseling Round 1 & 2.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 410) {
      return {
        status: "Good Merit (State / Management Quota)",
        text: "You qualify well for State counseling cycles and represent a secure match for Management Quota MBBS seats at JNU Medical College, Jaipur.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Keep options locked for both State and Management matrix.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 210) {
      return {
        status: "Management Quota Eligible",
        text: "You meet the general score parameters to acquire a Management Quota seat at JNUIMSRC Jaipur. Strategic counseling advice will assist in rounding selection options.",
        color: "text-amber-900 border-amber-200 bg-amber-50/40",
        quotaAdvice: "Lock Management seats early and seek counseling support.",
        btnStyle: "bg-amber-800 hover:bg-amber-900 text-white"
      };
    } else if (score >= 130) {
      return {
        status: "NRI / residual options",
        text: "NEET UG qualified. Admissions will heavily leverage NRI quota streams or leftover stray round vacancies. Pre-planning is recommended.",
        color: "text-slate-800 border-slate-200 bg-slate-100/50",
        quotaAdvice: "Request NRI quota structure and seat availability updates.",
        btnStyle: "bg-slate-700 hover:bg-slate-800 text-white"
      };
    } else {
      return {
        status: "Qualification Score Needed",
        text: "Your score is below the estimated qualifying NEET threshold. NEET qualification is mandatory for all MBBS admissions in India.",
        color: "text-red-950 border-red-200 bg-red-50/20",
        quotaAdvice: "Speak to advisors for alternative career options or NEET revision.",
        btnStyle: "bg-red-900 hover:bg-red-950 text-white"
      };
    }
  },
  overviewTitle: "Overview of JAIPUR NATIONAL UNIVERSITY INST. OF MEDICAL SCIENCES (JNUIMSRC)",
  overviewParagraphs: [
  "Established in the year <strong>2015</strong>, the <strong>Jaipur National University Institute for Medical Sciences and Research Centre (JNUIMSRC), Jaipur</strong> is a leading private medical college in Rajasthan. It is a constituent wing of Jaipur National University and is fully recognized by the <strong>National Medical Commission (NMC)</strong>.",
  "Spanning a modern and vast campus at Jagatpura, JNU Medical College is attached to the 1000+ bedded JNU Hospital, a premier super-specialty tertiary care center in Jaipur. This advanced clinical core exposes medical students to a robust volume of diagnostics and patient flow daily."
],
  highlights: [
    {
      title: "Established Year",
      value: "2015",
      desc: "Premium academic standard under Jaipur National University",
      icon: Calendar,
    },
    {
      title: "Affiliated Body",
      value: "JNU University",
      desc: "Recognized Private University constituent college",
      icon: Building,
    },
    {
      title: "NMC Status",
      value: "Approved",
      desc: "Approved by National Medical Commission",
      icon: ShieldCheck,
    },
    {
      title: "MBBS Seat Matrix",
      value: "250 Seats",
      desc: "Expansive approved matrix for undergraduate studies",
      icon: Users,
    },
    {
      title: "Clinical Base",
      value: "1000+ Beds",
      desc: "Attached tertiary multi-specialty JNU Hospital",
      icon: HeartPulse,
    },
    {
      title: "Campus Location",
      value: "Jaipur",
      desc: "Jagatpura Institutional Corridor, Jaipur",
      icon: MapPin,
    },
  ],
  feeStructure: [
    { quota: "State Quota (Government Seats)", annualFee: "₹22,00,000", remark: "For Rajasthan Domicile merit-listed candidates" },
    { quota: "Management Quota (All India Open)", annualFee: "₹27,00,050", remark: "Open to candidates nationwide based on NEET merit" },
    { quota: "NRI / Sponsored Quota", annualFee: "$48,000 (Approx ₹38.4L)", remark: "Allocated standard global student parameters" },
  ],
  feeNotes: [
  "<strong>Caution Money:</strong> A one-time refundable caution deposit of ₹2,00,000 is required at admission.",
  "<strong>Hostel Fees:</strong> Twin sharing room configurations range from ₹3,18,000 to ₹4,04,000 per year depending on AC preferences.",
  "<strong>Bank Guarantee:</strong> A bank guarantee for subsequent academic years is mandatory as per state counseling directives."
],
  cutoffSectionTitle: "Estimated NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "State Quota - General (UR)", scoreRange: "510 - 550 Marks", percentile: "94.5%+" },
    { category: "State Quota - OBC", scoreRange: "480 - 520 Marks", percentile: "92.0%+" },
    { category: "State Quota - SC / ST", scoreRange: "390 - 420 Marks", percentile: "83.0%+" },
    { category: "Management Quota (Open Merit)", scoreRange: "210 - 380 Marks", percentile: "68.0%+" },
  ],
  processSectionTitle: "Admission Counseling Steps",
  admissionSteps: [
    { title: "Appear & Qualify NEET", desc: "Secure the minimum required category-wise qualifying percentile in NTA NEET-UG." },
    { title: "Register for State Counselling", desc: "Complete registrations on the Rajasthan NEET Counselling website as a Domicile or Management candidate." },
    { title: "Exercise Choices Online", desc: "Enter JNU Medical College, Jaipur (JNUIMSRC) as your highly prioritized preference." },
    { title: "Seat Allotment & Document Audit", desc: "Present original scorecards, domicile proofs, and fitness clearance certificates at nodal centers." },
    { title: "Fee Remittance & Final Security", desc: "Pay the first-year annual tuition fee, caution money, and file necessary guarantees." }
  ],
  facilities: [
    {
      title: "1000+ Bed Multi-Speciality Hospital",
      desc: "Heavy patient flow across general and superspeciality clinical wards, offering students solid diagnostic exposure.",
      icon: HeartPulse,
    },
    {
      title: "Diagnostics Centre",
      desc: "Equipped with advanced diagnostic laboratories, digital imaging, MRIs, and advanced clinical tech.",
      icon: Activity,
    },
    {
      title: "Smart Classroom auditoriums",
      desc: "Air-conditioned lecture complexes with state-of-the-art acoustics and interactive digital displays.",
      icon: BookOpen,
    },
    {
      title: "Centralized Library Desk",
      desc: "Access to international healthcare journals, digital subscriptions, print books, and silent reading sections.",
      icon: FileText,
    },
    {
      title: "Secure Modern Hostels",
      desc: "Double and triple sharing room accommodations featuring standardized mess blocks and active wardens.",
      icon: Building,
    },
    {
      title: "Sports Complex",
      desc: "Spacious sports grounds, gym setups, and indoor games to promote absolute physical health.",
      icon: Sparkles,
    },
  ],
  faqs: [
    {
      q: "Where is JNUIMSRC Medical College located?",
      a: "The college campus is located at Jagatpura, Jaipur, Rajasthan - 302017, linked closely to railway links and air hubs."
    },
    {
      q: "What is the annual MBBS intake capacity at JNU Medical College?",
      a: "The college has an NMC-approved intake capacity of 250 MBBS seats per academic year, which are allocated via standard counseling steps."
    },
    {
      q: "What university is the college affiliated with?",
      a: "JNUIMSRC is a constituent college of Jaipur National University, Jaipur, which is a recognized private university in Rajasthan."
    },
    {
      q: "Is there a caution deposit at the time of admission?",
      a: "Yes, a refundable caution money deposit of ₹2,00,000 is required at the time of admission to secure the seat."
    },
    {
      q: "What are the hostel charges for JNU medical students?",
      a: "The annual hostel fee ranges from ₹3,18,000 to ₹4,04,000 based on standard configurations and AC availability, with standard dining provisions."
    }
  ],
  formId: "jnu",
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

export default function JnujaipurAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_SAFFRON} college={college} />;
}
