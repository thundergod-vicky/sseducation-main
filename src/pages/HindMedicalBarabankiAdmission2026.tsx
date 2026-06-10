import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_INDIGO } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "Hind Institute of Medical Sciences Barabanki MBBS Admission 2026 - Fees & Cutoff",
  seoDescription: "Read about MBBS Admissions at Hind Institute of Medical Sciences (HIMS), Barabanki. Access verified 2026 fees, UPDGME cutoffs, and counseling instructions.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/hind-institute-of-medical-sciences-barabanki-admission-2026/#college",
        "name": "Hind Institute of Medical Sciences, Barabanki",
        "alternateName": "HIMS Barabanki",
        "url": "http://www.himsup.com",
        "description": "Hind Institute of Medical Sciences (HIMS) is a premier private medical college in Barabanki, Uttar Pradesh, recognized by NMC and affiliated with Dr. R.M.L. Awadh University.",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Safedabad, Barabanki Road, Near Safedabad Railway Station",
          "addressLocality": "Barabanki",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "225003",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "HIMS",
  fullName: "HIND INSTITUTE OF MEDICAL SCIENCES, BARABANKI",
  hindiName: "हिंद इंस्टीट्यूट ऑफ मेडिकल साइंसेज, बाराबंकी",
  affiliation: "Affiliated with Dr. R.M.L. Awadh University | Approved by NMC | 1200-Bed Super-Specialty Hospital",
  location: "Safedabad, Barabanki Road, Lucknow-NCR border",
  heroTitle: "Hind Medical College MBBS Admission Matrix",
  heroSubtitle: "Unlock admission guides for Hind Institute of Medical Sciences (HIMS), Barabanki. Obtain verified UPDGME open seat fee structures, hostel rules, and cutoffs.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "Hind Medical College Barabanki MBBS choice entry is active via UPDGME. | Mandatory hostel fees are verified. | Submit details below for eligibility checks.",
  deanName: "Dr. Deepak Malviya",
  deanDesignation: "Principal",
  deanQuote: "HIMS Barabanki is dedicated to training high-caliber healthcare practitioners. Our attached 1200-bed hospital ensures that students develop deep clinical competence and handle varied patient cases.",
  contactEmail: "hims.principal@gmail.com",
  notices: [],
  initialScore: 440,
  predictorMidLabel: "UP Open Seat (480+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 480) {
      return {
        status: "High Probability (UPDGME Open Private Seat)",
        text: "Your score is highly competitive. You stand an excellent chance of securing an open private seat (~₹16.86L tuition/year) at Hind Institute of Medical Sciences via UP NEET counseling.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Lock Hind Medical College in UPDGME Round 1 choice entry.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 400) {
      return {
        status: "Good Chance (UPDGME Open Private Seat)",
        text: "You have very strong prospects for open seats in Round 2 or Stray vacancy allocations at HIMS Barabanki.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Target State counseling Round 1 & 2 option entry.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 250) {
      return {
        status: "Eligible for Stray / Vacancy rounds",
        text: "Direct cutoffs are moderate, and stray rounds or NRI sponsored seats represent viable entry pathways. Professional guidance is advised.",
        color: "text-amber-900 border-amber-200 bg-amber-50/40",
        quotaAdvice: "Prepare academic documents and security deposits for stray rounds.",
        btnStyle: "bg-amber-800 hover:bg-amber-900 text-white"
      };
    } else if (score >= 137) {
      return {
        status: "NEET Qualified (UPDGME Participant)",
        text: "You have qualified NEET UG. Admissions to HIMS open seats require slightly higher marks, but you can choose alternative private medical colleges in UP.",
        color: "text-slate-800 border-slate-200 bg-slate-100/50",
        quotaAdvice: "Check alternative private colleges in UP option entry lists.",
        btnStyle: "bg-slate-700 hover:bg-slate-800 text-white"
      };
    } else {
      return {
        status: "NEET Qualification Required",
        text: "Qualifying NEET UG is mandatory for participating in UPDGME counseling or registering for Hind medical admissions.",
        color: "text-red-950 border-red-200 bg-red-50/20",
        quotaAdvice: "Explore guidance on NEET score improvement or parallel tracks.",
        btnStyle: "bg-red-900 hover:bg-red-950 text-white"
      };
    }
  },
  overviewTitle: "Overview of HIND INSTITUTE OF MEDICAL SCIENCES, BARABANKI",
  overviewParagraphs: [
  "Established in <strong>2009</strong>, <strong>Hind Institute of Medical Sciences (HIMS), Barabanki</strong> is a premier private medical college situated on Barabanki Road, Safedabad. Affiliated with <strong>Dr. R.M.L. Awadh University</strong> and recognized by the <strong>National Medical Commission (NMC)</strong>, it offers comprehensive medical training.",
  "HIMS has a sprawling campus with state-of-the-art laboratory and diagnostic infrastructure. The associated 1,200-bed tertiary teaching hospital caters to a heavy flow of outpatients and inpatients, providing extensive bedside clinical exposure to students during their training."
],
  highlights: [
    {
      title: "Established Year",
      value: "2009",
      desc: "Proven track record of medical pedagogy and clinical output",
      icon: Calendar,
    },
    {
      title: "University Affiliation",
      value: "Dr. R.M.L. Awadh University",
      desc: "Highly reputed state university in Ayodhya, UP",
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
      value: "100 Seats",
      desc: "Annual seats allocated through UPDGME counseling",
      icon: Users,
    },
    {
      title: "Hospital Beds",
      value: "1200 Beds",
      desc: "Sprawling teaching hospital with high patient volumes",
      icon: HeartPulse,
    },
    {
      title: "Strategic Location",
      value: "Barabanki",
      desc: "Safedabad, Barabanki Road, Lucknow-NCR border",
      icon: MapPin,
    },
  ],
  feeStructure: [
    { quota: "Annual Tuition Fee", annualFee: "₹16,85,681", remark: "Regulated state-mandated tuition fee." },
    { quota: "Hostel Fee (Non-AC)", annualFee: "₹1,73,250 / Year", remark: "Non-AC twin sharing. AC hostel is ₹2,02,125." },
    { quota: "One-Time Security Deposit", annualFee: "₹3,00,000", remark: "Refundable caution deposit paid at admission." },
    { quota: "Miscellaneous Fees", annualFee: "₹94,160 / Year", remark: "Includes exam, library, and development fees." },
  ],
  feeNotes: [
  "<strong>Security Fees:</strong> A one-time security deposit of ₹3,00,000 is refundable upon course completion.",
  "<strong>Hostel Accommodation:</strong> Mandated for private candidates under UP state rules. Non-AC twin sharing is ₹1,73,250/yr.",
  "<strong>Open State Counseling:</strong> All seats are allocated transparently through UP NEET counseling."
],
  cutoffSectionTitle: "Estimated NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "UPDGME Open General Round 1", scoreRange: "460 - 495 Marks", percentile: "92.5%+" },
    { category: "UPDGME Open General Round 2", scoreRange: "440 - 475 Marks", percentile: "90.0%+" },
    { category: "Reserved / Stray Seats", scoreRange: "310 - 380 Marks", percentile: "80.0%+" },
  ],
  processSectionTitle: "Admission Counseling Steps",
  admissionSteps: [
    { title: "Qualify NEET UG Exam", desc: "Secure a score meeting or exceeding the general qualifying cutoff published by the NTA." },
    { title: "Register on UPDGME Portal", desc: "Complete online registration on the Uttar Pradesh NEET UG counseling site." },
    { title: "Document Verification", desc: "Complete document verification at designated nodal centers in UP (e.g. Noida/Lucknow centers)." },
    { title: "Submit Choice Entry", desc: "Submit your choice entry list online placing 'Hind Institute of Medical Sciences' at your preferred position." },
    { title: "Reporting & Joining", desc: "Download UPDGME allotment letter, submit the first-year fee online, and report to HIMS campus to complete joining." }
  ],
  facilities: [
    {
      title: "1200-Bed Teaching Hospital",
      desc: "Tertiary teaching healthcare center featuring high OPD volumes and comprehensive medical and surgical specialties in Barabanki.",
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
      q: "Where is Hind Medical College located?",
      a: "The college is located at Safedabad, Barabanki Road, Near Safedabad Railway Station, Barabanki, Uttar Pradesh - 225003."
    },
    {
      q: "Is Hind Medical College a government or private college?",
      a: "It is a private medical college, affiliated with Dr. R.M.L. Awadh University and recognized by the NMC."
    },
    {
      q: "How many MBBS seats are available annually?",
      a: "Hind Medical College has an annual intake capacity of 100 MBBS seats."
    },
    {
      q: "Are admissions open to non-UP candidates?",
      a: "Yes, UP private medical colleges counseling is open to candidates from all states (Open State quota)."
    },
    {
      q: "What is the fee structure for MBBS?",
      a: "The annual tuition fee is approximately ₹16.86 Lakhs. The total course package including hostel, mess, security deposit, and miscellaneous is regulated by UPDGME norms."
    }
  ],
  formId: "hind",
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
  counselingNote: "Admissions to Hind Medical College are processed via UPDGME. Register to track counseling schedules, security deposit deadlines, and node verification updates.",
  formDeskLabel: "UPDGME Registration Desk",
};

export default function HindMedicalBarabankiAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_INDIGO} college={college} />;
}
