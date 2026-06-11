import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_INDIGO } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "Era",
  seoDescription: "Read about MBBS Admissions at Era",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/eras-lucknow-medical-college-admission-2026/#college",
        "name": "Era's Lucknow Medical College and Hospital, Lucknow",
        "alternateName": "Eras Medical Lucknow",
        "url": "https://elmcindia.org",
        "description": "Era's Lucknow Medical College and Hospital (ELMCH) is a premier private minority medical college in Lucknow, Uttar Pradesh, recognized by NMC and affiliated with Era University.",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sarfarazganj, Hardoi Road",
          "addressLocality": "Lucknow",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "226003",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "ELMC",
  fullName: "ERA'S LUCKNOW MEDICAL COLLEGE, LUCKNOW",
  hindiName: "एराज़ लखनऊ मेडिकल कॉलेज, लखनऊ",
  affiliation: "Constituent of Era University | NMC Approved | Muslim Minority Academic Status",
  location: "Hardoi Road, Lucknow, Uttar Pradesh",
  heroTitle: "Era's Medical College MBBS Admission Matrix",
  heroSubtitle: "Unlock admission guides for Era's Lucknow Medical College and Hospital (ELMCH). Obtain verified UPDGME fee structures, Muslim minority quota details, and cutoffs.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "Era's Lucknow Medical College MBBS registrations are active on UPDGME. | Muslim Minority documentation verification is active. | Submit details below for eligibility checks.",
  deanName: "Dr. (Prof.) Jamal Masood",
  deanDesignation: "Principal & CMS",
  deanQuote: "Our teaching hospital associated with Era University offers a high-end 900+ bed capacity. Students benefit from intensive clinical workflows, preparing them to serve with clinical proficiency.",
  contactEmail: "info@elmcindia.org",
  notices: [],
  initialScore: 360,
  predictorMidLabel: "Minority Merit (280+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 400) {
      return {
        status: "High Probability (UPDGME Open / Minority Seat)",
        text: "Your score is highly competitive. You stand an excellent chance of securing an open seat or minority quota seat (~₹16.60L tuition/year) at Era's Medical College Lucknow via UP NEET counseling.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Lock Era's Medical College in UPDGME Round 1 choice entry.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 280) {
      return {
        status: "Good Chance (UPDGME Muslim Minority Quota)",
        text: "You have very strong prospects under the Muslim Minority reservation category. Open quota candidates have moderate chances in subsequent or stray rounds.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Target UPDGME minority allocation option entry.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 180) {
      return {
        status: "Eligible for Minority Stray / Spot rounds",
        text: "Direct cutoffs might be competitive, but minority seats vacancy rounds or stray vacancies are viable tracks. Counseling support is advised.",
        color: "text-amber-900 border-amber-200 bg-amber-50/40",
        quotaAdvice: "Verify Muslim minority certificate status for UPDGME.",
        btnStyle: "bg-amber-800 hover:bg-amber-900 text-white"
      };
    } else if (score >= 137) {
      return {
        status: "NEET Qualified (UPDGME Participant)",
        text: "You have qualified NEET UG. Admissions to Era's open quota require higher scores, but you can explore minority vacancies or alternative UP private medical colleges.",
        color: "text-slate-800 border-slate-200 bg-slate-100/50",
        quotaAdvice: "Explore alternative private colleges in UP option entry lists.",
        btnStyle: "bg-slate-700 hover:bg-slate-800 text-white"
      };
    } else {
      return {
        status: "NEET Qualification Required",
        text: "Qualifying NEET UG is mandatory for participating in UPDGME counseling or registering for Era's medical admissions.",
        color: "text-red-950 border-red-200 bg-red-50/20",
        quotaAdvice: "Explore guidance on NEET score improvement or parallel tracks.",
        btnStyle: "bg-red-900 hover:bg-red-950 text-white"
      };
    }
  },
  overviewTitle: "Overview of ERA'S LUCKNOW MEDICAL COLLEGE, LUCKNOW",
  overviewParagraphs: [
  "Established in <strong>2001</strong>, <strong>Era's Lucknow Medical College and Hospital, Lucknow</strong> is a premier private medical college situated in hardoi road, Lucknow. Affiliated with <strong>Era University</strong> and fully recognized by the <strong>National Medical Commission (NMC)</strong>, it possesses a highly advanced minority academic status.",
  "ELMCH has a sprawling campus with state-of-the-art laboratory and diagnostic infrastructure. The associated 900+ bed teaching hospital caters to a heavy flow of outpatients and inpatients, providing extensive bedside clinical exposure to students during their training."
],
  highlights: [
    {
      title: "Established Year",
      value: "2001",
      desc: "First private minority medical college in Lucknow",
      icon: Calendar,
    },
    {
      title: "University",
      value: "Era University",
      desc: "UGC recognized university in Lucknow",
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
      value: "900-1200 Beds",
      desc: "Highly equipped teaching hospital (ELMCH)",
      icon: HeartPulse,
    },
    {
      title: "Strategic Location",
      value: "Lucknow",
      desc: "Hardoi Road, Lucknow, Uttar Pradesh",
      icon: MapPin,
    },
  ],
  feeStructure: [
    { quota: "Annual Tuition Fee", annualFee: "₹16,60,000", remark: "Minority private tuition fee per year." },
    { quota: "Hostel Fee", annualFee: "₹1,50,000 / Year", remark: "Triple sharing non-AC lodging setup." },
    { quota: "Refundable Security Fee", annualFee: "₹1,00,000", remark: "One-time refundable deposit during admission." },
    { quota: "Miscellaneous Fees", annualFee: "₹94,000 / Year", remark: "Includes exam, library, and development fees." },
  ],
  feeNotes: [
  "<strong>Security Fees:</strong> A one-time refundable security deposit of ₹1,00,000 is logged during verification.",
  "<strong>Hostel & Messing:</strong> Roughly ₹1,50,000 to ₹2,00,000 per term depending on the sharing setup.",
  "<strong>Counseling Validity:</strong> Admissions are locked strictly through UPDGME State/Minority quotas."
],
  cutoffSectionTitle: "Estimated NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "UPDGME Open General (UR)", scoreRange: "380 - 450 Marks", percentile: "90.0%+" },
    { category: "Muslim Minority Quota", scoreRange: "270 - 360 Marks", percentile: "75.0%+" },
    { category: "Reserved Categories (State)", scoreRange: "320 - 380 Marks", percentile: "82.0%+" },
  ],
  processSectionTitle: "Admission Counseling Steps",
  admissionSteps: [
    { title: "Qualify NEET UG Exam", desc: "Secure a score meeting or exceeding the general qualifying cutoff published by the NTA." },
    { title: "Register on UPDGME Portal", desc: "Complete online registration on the Uttar Pradesh NEET UG counseling site." },
    { title: "Document Verification", desc: "Produce requisite category, minority (Muslim minority certificates), or domicile papers at nodal centers." },
    { title: "Submit Choice Entry", desc: "Submit your choice entry list online placing 'Era's Lucknow Medical College' at your preferred position." },
    { title: "Reporting & Joining", desc: "Download UPDGME allotment letter, submit the first-year fee online, and report to Era's campus to complete joining." }
  ],
  facilities: [
    {
      title: "900+ Bed Teaching Hospital",
      desc: "Tertiary teaching healthcare center featuring high OPD volumes and comprehensive medical and surgical specialties in Lucknow.",
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
      q: "Where is Era's Lucknow Medical College located?",
      a: "The college is located at Hardoi Road, Sarfarazganj, Hardoi Road, Lucknow, Uttar Pradesh - 226003."
    },
    {
      q: "Is Era's Medical College a government or private college?",
      a: "It is a private medical college with Muslim Minority status, established in 2001, constituent of Era University and recognized by the NMC."
    },
    {
      q: "How many MBBS seats are available annually?",
      a: "Era's Lucknow Medical College has an annual intake capacity of 150 MBBS seats."
    },
    {
      q: "Are admissions open to non-UP candidates?",
      a: "Yes, UP private medical colleges counseling is open to candidates from all states (Open State quota)."
    },
    {
      q: "What is the fee structure for MBBS at Era's?",
      a: "The annual tuition fee is approximately ₹16.60 Lakhs. The total course package, including hostel, mess, security deposit, and miscellaneous, is regulated by UPDGME norms."
    }
  ],
  formId: "eras",
  quotaOptions: [
  {
    "value": "UPDGME Open Seat",
    "label": "UPDGME Open Private Seat"
  },
  {
    "value": "Muslim Minority Quota",
    "label": "Muslim Minority Quota"
  },
  {
    "value": "NRI sponsored / Stray",
    "label": "NRI Sponsored / Stray vacancy"
  }
],
  counselingNote: "Admissions to Era's Medical College are processed via UPDGME. Register to track counseling schedules, Muslim minority criteria verification, and security deposit details.",
  formDeskLabel: "UPDGME Registration Desk",
};

export default function ErasMedicalAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_INDIGO} college={college} />;
}
