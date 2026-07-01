import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_SLATE } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "ICARE Institute of Medical Sciences Haldia MBBS Admission 2026 - Fees & Cutoff",
  seoDescription: "Read about MBBS Admissions at ICARE Institute of Medical Sciences and Research, Haldia. Access verified 2026 fees (State/Management Quota), WBMCC seats, cutoffs, and counseling instructions.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/icare-institute-of-medical-sciences-haldia-admission-2026/#college",
        "name": "ICARE Institute of Medical Sciences and Research, Haldia",
        "alternateName": "ICARE Haldia",
        "url": "https://www.icaremedicalcollege.in",
        "description": "ICARE Institute of Medical Sciences and Research is a premier private medical college in Haldia, West Bengal, recognized by the National Medical Commission (NMC) and affiliated with WBUHS.",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Banbishnupur, Balughata",
          "addressLocality": "Haldia",
          "addressRegion": "West Bengal",
          "postalCode": "721645",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "ICARE",
  fullName: "ICARE INSTITUTE OF MEDICAL SCIENCES AND RESEARCH, HALDIA",
  hindiName: "आईसीएआरई इंस्टीट्यूट ऑफ मेडिकल साइंसेज, हल्दिया",
  affiliation: "NMC Approved | Affiliated with WBUHS | Attached to 500-Bed Dr. B.C. Roy Hospital",
  location: "Banbishnupur, Balughata, Haldia, West Bengal",
  heroTitle: "ICARE Medical College Haldia MBBS Admission Matrix",
  heroSubtitle: "Unlock admission guides for ICARE Institute of Medical Sciences, Haldia. Obtain verified State & Management quota fee structures, hostel setups, and WBMCC counseling guides.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "ICARE Haldia MBBS counseling guidelines are updated under WBMCC. | Check State & Management quota parameters. | Submit credentials below for eligibility checks.",
  deanName: "Prof. (Dr.) Shyamal Chandra Sarkar",
  deanDesignation: "Principal",
  deanQuote: "Our college focuses on blending rigorous academic discipline with rich hands-on clinical practice. Our attached 500-bed hospital provides strong clinical exposure for students to prepare them for medical challenges.",
  contactEmail: "icarehaldia@gmail.com",
  notices: [
  {
    "text": "ICARE Haldia MBBS seat allocation details and matrices",
    "date": "June 09, 2026",
    "tag": "SEAT MATRIX"
  },
  {
    "text": "Detailed fee updates for state merit and management categories",
    "date": "June 05, 2026",
    "tag": "FEE GUIDE"
  },
  {
    "text": "WBMCC counseling document checking timelines",
    "date": "June 01, 2026",
    "tag": "COUNSELING"
  },
  {
    "text": "Hostel configurations and mess charges updates",
    "date": "May 24, 2026",
    "tag": "HOSTEL RULE"
  }
],
  initialScore: 510,
  predictorMidLabel: "State Merit (545+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 580) {
      return {
        status: "High Probability (WBMCC State Quota seat)",
        text: "Your score is highly competitive. You stand an excellent chance of securing a West Bengal State Quota seat (~₹8.0L/year) at ICARE Haldia via WBMCC.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Lock ICARE Haldia in State Quota Round 1.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 510) {
      return {
        status: "Good Chance (WBMCC State Quota / Management Quota)",
        text: "You have strong prospects for State Quota seats, and an outstanding opportunity for Management Quota seats (~₹22L/year) at ICARE.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Target State counseling Round 1 & 2 option entry.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 300) {
      return {
        status: "High Probability (WBMCC Management Quota)",
        text: "You have a solid chance of securing a Management Quota seat (~₹22L/year) in ICARE Haldia.",
        color: "text-amber-900 border-amber-200 bg-amber-50/40",
        quotaAdvice: "Register on WBMCC portal under Management Quota category.",
        btnStyle: "bg-amber-800 hover:bg-amber-900 text-white"
      };
    } else if (score >= 137) {
      return {
        status: "NEET Qualified (Management / NRI / Stray Quotas)",
        text: "You have qualified NEET UG. Admission to ICARE Haldia will require targeting Management Quota or Stray vacancy rounds.",
        color: "text-slate-800 border-slate-200 bg-slate-100/50",
        quotaAdvice: "Verify document status and registration for Management seats.",
        btnStyle: "bg-slate-700 hover:bg-slate-800 text-white"
      };
    } else {
      return {
        status: "NEET Qualification Required",
        text: "Qualifying NEET UG is mandatory for participating in WBMCC counseling and getting admitted to ICARE Haldia.",
        color: "text-red-950 border-red-200 bg-red-50/20",
        quotaAdvice: "Explore guidance on NEET score improvement or parallel tracks.",
        btnStyle: "bg-red-900 hover:bg-red-950 text-white"
      };
    }
  },
  overviewTitle: "Overview of ICARE INSTITUTE OF MEDICAL SCIENCES AND RESEARCH, HALDIA",
  overviewParagraphs: [
  "Established in <strong>2011</strong>, <strong>ICARE Institute of Medical Sciences and Research, Haldia</strong> is a leading private medical college situated in the industrial port city of Haldia, West Bengal. Affiliated with the <strong>West Bengal University of Health Sciences (WBUHS)</strong> and fully recognized by the <strong>National Medical Commission (NMC)</strong>, it offers comprehensive medical training.",
  "The modern campus has the associated 500-bed Dr. B.C. Roy Teaching Hospital, featuring intensive clinical OPD flow. The college boasts high-end lecture rooms, sophisticated laboratory equipment, and state-of-the-art simulation labs to offer hands-on healthcare training."
],
  highlights: [
    {
      title: "Established Year",
      value: "2011",
      desc: "Highly reputed private medical college in port city Haldia",
      icon: Calendar,
    },
    {
      title: "Affiliated University",
      value: "WBUHS, Kolkata",
      desc: "West Bengal University of Health Sciences",
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
      desc: "Annual seats allocated through WBMCC counseling",
      icon: Users,
    },
    {
      title: "Hospital Beds",
      value: "500 Beds",
      desc: "Attached Dr. B.C. Roy Teaching Hospital",
      icon: HeartPulse,
    },
    {
      title: "Strategic Location",
      value: "Haldia",
      desc: "Banbishnupur, Balughata, Haldia, West Bengal",
      icon: MapPin,
    },
  ],
  feeStructure: [
    { quota: "State Quota Fee", annualFee: "₹8,00,000 / Year", remark: "Regulated state quota tuition fee. Excludes security deposit & hostel." },
    { quota: "Management Quota Fee", annualFee: "₹22,00,050 / Year", remark: "Management quota tuition fee. Subject to state counseling committee." },
  ],
  feeNotes: [
  "<strong>Security Fees:</strong> A one-time refundable caution deposit is logged during verification.",
  "<strong>Hostel & Mess:</strong> Generally hover around ₹1,40,000 to ₹1,90,000 per academic term.",
  "<strong>Counseling Validity:</strong> Admissions are locked strictly through WBMCC State/Management quotas."
],
  cutoffSectionTitle: "Estimated NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "WBMCC State Quota (UR)", scoreRange: "550 - 580 Marks", percentile: "95.0%+" },
    { category: "WBMCC Management Quota (UR)", scoreRange: "280 - 390 Marks", percentile: "70.0%+" },
    { category: "Reserved Categories (State)", scoreRange: "390 - 450 Marks", percentile: "78.0%+" },
  ],
  processSectionTitle: "Admission Counseling Steps",
  admissionSteps: [
    { title: "Qualify NEET UG Exam", desc: "Secure a score meeting or exceeding the general qualifying cutoff published by the NTA." },
    { title: "Register on WBMCC Portal", desc: "Complete online registration on the West Bengal Medical Counseling Committee (WBMCC) site." },
    { title: "Document Verification", desc: "Produce requisite category, domicile, or management/NRI certificates for WBMCC physical or online verification." },
    { title: "Lock Selection Choices", desc: "Submit your choice entry list placing 'ICARE Institute of Medical Sciences' at your preferred position." },
    { title: "Reporting & Joining", desc: "Download WBMCC allotment letter, submit the first-year fee online/via demand draft, and report to the Haldia campus to complete joining." }
  ],
  facilities: [
    {
      title: "500-Bed Teaching Hospital",
      desc: "Tertiary teaching healthcare center featuring high OPD volumes and comprehensive medical and surgical specialties in Purba Medinipur.",
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
      q: "Where is ICARE Medical College located?",
      a: "The college is located at Banbishnupur, Balughata, Haldia, West Bengal - 721645."
    },
    {
      q: "Is ICARE Medical College a government or private college?",
      a: "It is a private medical college, established in 2011, affiliated with WBUHS and recognized by the NMC."
    },
    {
      q: "How many MBBS seats are available annually?",
      a: "ICARE Haldia has an annual intake capacity of 150 MBBS seats."
    },
    {
      q: "Are admissions open to non-West Bengal candidates?",
      a: "Yes, non-West Bengal candidates can apply under the WBMCC Management Quota seats, which are open to all-India candidates based on NEET UG merit."
    },
    {
      q: "What is the fee structure for State Quota?",
      a: "The tuition fee for State Quota is approximately ₹8,00,000 per year."
    }
  ],
  formId: "icare",
  quotaOptions: [
  {
    "value": "WBMCC State Quota",
    "label": "WBMCC State Quota"
  },
  {
    "value": "WBMCC Management Quota",
    "label": "WBMCC Management Quota"
  },
  {
    "value": "NRI Quota / Stray",
    "label": "NRI Quota / Stray vacancy"
  }
],
  counselingNote: "Admissions to ICARE Medical College are processed via WBMCC. Register to track counseling windows, choice locking, and vacancy round updates.",
  formDeskLabel: "WBMCC Registration Desk",
};

export default function IcareMedicalHaldiaAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_SLATE} college={college} />;
}
