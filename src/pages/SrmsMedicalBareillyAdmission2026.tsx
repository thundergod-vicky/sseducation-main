import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_INDIGO } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "SRMS Medical College Bareilly MBBS Admission 2026 - Fees & Cutoff",
  seoDescription: "Read about MBBS Admissions at Shri Ram Murti Smarak Institute of Medical Sciences (SRMS IMS), Bareilly. Access verified 2026 fees, UPDGME cutoffs, and counseling instructions.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/sri-ram-murti-smarak-institute-of-medical-sciences-bareilly-admission-2026/#college",
        "name": "Shri Ram Murti Smarak Institute of Medical Sciences, Bareilly",
        "alternateName": "SRMS IMS Bareilly",
        "url": "https://www.srms.ac.in/ims",
        "description": "Shri Ram Murti Smarak Institute of Medical Sciences (SRMS IMS) is a premier private medical college in Bareilly, Uttar Pradesh, recognized by the National Medical Commission (NMC) and affiliated with MJP Rohilkhand University.",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "13 KM, Bareilly-Nainital Road",
          "addressLocality": "Bareilly",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "243202",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "SRMS",
  fullName: "SHRI RAM MURTI SMARAK INSTITUTE OF MEDICAL SCIENCES, BAREILLY",
  hindiName: "श्री राम मूर्ति स्मारक इंस्टीट्यूट ऑफ मेडिकल साइंसेज, बरेली",
  affiliation: "Affiliated with MJP Rohilkhand University | Approved by NMC | 950-Bed Teaching Hospital",
  location: "Bareilly-Nainital Road, Bareilly, Uttar Pradesh",
  heroTitle: "SRMS Medical College MBBS Admission Matrix",
  heroSubtitle: "Unlock admission guides for Shri Ram Murti Smarak Institute of Medical Sciences (SRMS IMS), Bareilly. Obtain verified UPDGME open seat fee structures, hostel rules, and cutoffs.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "SRMS Bareilly MBBS open seat options entry is active via UPDGME. | Mandatory security deposits guidelines are logged. | Submit details below for eligibility checks.",
  deanName: "Dr. S. B. Gupta",
  deanDesignation: "Principal & Dean",
  deanQuote: "SRMS Bareilly focuses on training medical graduates who can serve the community with professional excellence. The attached 950-bed teaching hospital provides heavy patient flow and clinical exposure.",
  contactEmail: "ims@srms.ac.in",
  notices: [],
  initialScore: 470,
  predictorMidLabel: "UP Open Seat (490+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 490) {
      return {
        status: "High Probability (UPDGME Open Private Seat)",
        text: "Your score is highly competitive. You stand an excellent chance of securing an open seat (~₹19.78L tuition/year) at SRMS IMS, Bareilly, recognized for outstanding clinical exposure.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Lock SRMS IMS Bareilly in UPDGME Round 1 option entry.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 410) {
      return {
        status: "Good Chance (UPDGME Open Private Seat)",
        text: "You have a solid chance of securing an open seat in Round 2 or Stray vacancy rounds at SRMS, which features a heavy teaching hospital flow.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Target State counseling Round 1 & 2 option entry.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 260) {
      return {
        status: "Eligible for Stray / Special rounds",
        text: "Direct cutoffs might be competitive, but stray vacancy rounds or NRI sponsored seats are possible targets. Counseling support is highly recommended.",
        color: "text-amber-900 border-amber-200 bg-amber-50/40",
        quotaAdvice: "Verify document status for stray/spot rounds in UP.",
        btnStyle: "bg-amber-800 hover:bg-amber-900 text-white"
      };
    } else if (score >= 137) {
      return {
        status: "NEET Qualified (UPDGME Participant)",
        text: "You have qualified NEET UG. Admissions to SRMS Bareilly require higher scores, but you are eligible to choose alternative UP private medical colleges.",
        color: "text-slate-800 border-slate-200 bg-slate-100/50",
        quotaAdvice: "Check alternative private colleges in UP option entry lists.",
        btnStyle: "bg-slate-700 hover:bg-slate-800 text-white"
      };
    } else {
      return {
        status: "NEET Qualification Required",
        text: "Qualifying NEET UG is mandatory for participating in UPDGME counseling or registering for SRMS medical admissions.",
        color: "text-red-950 border-red-200 bg-red-50/20",
        quotaAdvice: "Explore guidance on NEET score improvement or parallel tracks.",
        btnStyle: "bg-red-900 hover:bg-red-950 text-white"
      };
    }
  },
  overviewTitle: "Overview of SHRI RAM MURTI SMARAK INSTITUTE OF MEDICAL SCIENCES, BAREILLY",
  overviewParagraphs: [
  "Established in <strong>2002</strong>, <strong>Shri Ram Murti Smarak Institute of Medical Sciences (SRMS IMS), Bareilly</strong> is a premier private medical college situated on Bareilly-Nainital Road, Bareilly. Affiliated with <strong>MJP Rohilkhand University</strong> and recognized by the <strong>National Medical Commission (NMC)</strong>, it represents one of the top private medical colleges in Uttar Pradesh.",
  "SRMS IMS Bareilly is renowned for its state-of-the-art infrastructure. The attached 950-bed super-specialty teaching hospital (which has 600 beds dedicated specifically for teaching flow) serves thousands of patients from Bareilly, Uttarakhand, and Western UP, offering highly intensive clinical work to prepare students for impactful medical service."
],
  highlights: [
    {
      title: "Established Year",
      value: "2002",
      desc: "Two decades of highly intensive medical education legacy",
      icon: Calendar,
    },
    {
      title: "University Affiliation",
      value: "MJP Rohilkhand University",
      desc: "State university in Bareilly, UP",
      icon: Building,
    },
    {
      title: "NMC Approval",
      value: "Recognized",
      desc: "Approved under National Medical Commission",
      icon: ShieldCheck,
    },
    {
      title: "MBBS Intake Matrix",
      value: "150 Seats",
      desc: "Annual seats allocated through UPDGME counseling",
      icon: Users,
    },
    {
      title: "Hospital Beds",
      value: "950 Beds",
      desc: "Advanced teaching hospital (600 dedicated teaching beds)",
      icon: HeartPulse,
    },
    {
      title: "Strategic Location",
      value: "Bareilly",
      desc: "Bareilly-Nainital Road, Bareilly, Uttar Pradesh",
      icon: MapPin,
    },
  ],
  feeStructure: [
    { quota: "Annual Tuition Fee", annualFee: "₹19,78,214", remark: "Regulated private tuition fee per year." },
    { quota: "Hostel Fee", annualFee: "₹1,30,000 - ₹1,80,000 / Year", remark: "Depends on room type (AC/non-AC twin sharing)." },
    { quota: "One-Time Refundable Deposit", annualFee: "₹3,00,000", remark: "Refundable caution deposit paid at admission." },
  ],
  feeNotes: [
  "<strong>Security Fees:</strong> A one-time security deposit of ₹3,00,000 is refundable upon course completion.",
  "<strong>Hostel Accommodation:</strong> Mandated for private candidates under UP state rules. Twin sharing standard is non-AC.",
  "<strong>Open State Counseling:</strong> All seats are allocated transparently through UP NEET counseling."
],
  cutoffSectionTitle: "Estimated NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "UPDGME Open General Round 1", scoreRange: "480 - 520 Marks", percentile: "93.0%+" },
    { category: "UPDGME Open General Round 2", scoreRange: "460 - 500 Marks", percentile: "91.0%+" },
    { category: "Reserved / Stray Seats", scoreRange: "350 - 410 Marks", percentile: "80.0%+" },
  ],
  processSectionTitle: "Admission Counseling Steps",
  admissionSteps: [
    { title: "Qualify NEET UG Exam", desc: "Secure a score meeting or exceeding the general qualifying cutoff published by the NTA." },
    { title: "Register on UPDGME Portal", desc: "Complete online registration on the Uttar Pradesh NEET UG counseling site." },
    { title: "Document Verification", desc: "Complete document verification at designated nodal centers in UP (e.g. Bareilly/Noida centers)." },
    { title: "Submit Choice Entry", desc: "Submit your choice entry list online placing 'Shri Ram Murti Smarak Institute' at your preferred position." },
    { title: "Reporting & Joining", desc: "Download UPDGME allotment letter, submit the first-year fee online, and report to SRMS to complete joining." }
  ],
  facilities: [
    {
      title: "950-Bed Teaching Hospital",
      desc: "Tertiary teaching healthcare center featuring high OPD volumes and comprehensive medical and surgical specialties in Bareilly.",
      icon: HeartPulse,
    },
    {
      title: "Advanced Pathology & Skill Labs",
      desc: "Advanced simulation labs, diagnostic setups, and research infrastructure promoting deep learning.",
      icon: Activity,
    },
    {
      title: "Smart Lecture Amphitheaters",
      desc: "Spacious, fully air-conditioned academic lecture chambers equipped with modern projection and acoustic setups.",
      icon: BookOpen,
    },
    {
      title: "Central Library",
      desc: "Vast collection of national and international clinical research journals, textbooks, and electronic journals.",
      icon: FileText,
    },
    {
      title: "Secure Accommodation",
      desc: "Separate, secure hostel quarters for male and female candidates with all basic utilities.",
      icon: Building,
    },
    {
      title: "Sports Complex",
      desc: "Includes play courts, gym facilities, and lush lawns promoting physical wellness.",
      icon: Sparkles,
    },
  ],
  faqs: [
    {
      q: "Where is SRMS Medical College located?",
      a: "The college is located at 13 KM, Bareilly-Nainital Road, Bareilly, Uttar Pradesh - 243202."
    },
    {
      q: "Is SRMS Medical College a government or private college?",
      a: "It is a highly respected private medical college, constituent of MJP Rohilkhand University and recognized by the NMC."
    },
    {
      q: "How many MBBS seats are available annually?",
      a: "SRMS Bareilly has an annual intake capacity of 150 MBBS seats."
    },
    {
      q: "Are admissions open to non-UP candidates?",
      a: "Yes, UP private medical colleges counseling is open to candidates from all states (Open State quota)."
    },
    {
      q: "What is the fee structure for MBBS?",
      a: "The annual tuition fee is approximately ₹19.78 Lakhs. The total course package including hostel, mess, security deposit, and miscellaneous is regulated by UPDGME norms."
    }
  ],
  formId: "srms",
  quotaOptions: [
  {
    "value": "UPDGME Open Private Seat",
    "label": "UPDGME Open Private Seat"
  },
  {
    "value": "NRI sponsored / Stray",
    "label": "NRI Sponsored / Stray vacancy"
  }
],
  counselingNote: "Admissions to SRMS Bareilly are processed via UPDGME. Register to track counseling schedules, security deposit deadlines, and nodal registration center rules.",
  formDeskLabel: "UPDGME Registration Desk",
};

export default function SrmsMedicalBareillyAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_INDIGO} college={college} />;
}
