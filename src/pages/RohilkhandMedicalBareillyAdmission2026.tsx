import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_INDIGO } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "Rohilkhand Medical College Bareilly MBBS Admission 2026 - Fees & Cutoff",
  seoDescription: "Read about MBBS Admissions at Rohilkhand Medical College and Hospital (RMCH), Bareilly. Access verified 2026 fees, UPDGME cutoffs, and counseling instructions.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/rohilkhand-medical-college-bareilly-admission-2026/#college",
        "name": "Rohilkhand Medical College and Hospital, Bareilly",
        "alternateName": "RMCH Bareilly",
        "url": "https://rmcbareilly.com",
        "description": "Rohilkhand Medical College and Hospital (RMCH) is a premier private medical college in Bareilly, Uttar Pradesh, recognized by NMC and constituent of Bareilly International University.",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Pilibhit Bypass Road",
          "addressLocality": "Bareilly",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "243006",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "RMCH",
  fullName: "ROHILKHAND MEDICAL COLLEGE AND HOSPITAL, BAREILLY",
  hindiName: "रोहिलखंड मेडिकल कॉलेज और अस्पताल, बरेली",
  affiliation: "Constituent of Bareilly International University | Approved by NMC | 1200+ Bed Hospital",
  location: "Pilibhit Bypass Road, Bareilly, Uttar Pradesh",
  heroTitle: "Rohilkhand Medical College MBBS Admission Matrix",
  heroSubtitle: "Unlock admission guides for Rohilkhand Medical College and Hospital (RMCH), Bareilly. Obtain verified UPDGME open seat fee structures, hostel rules, and cutoffs.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "Rohilkhand Medical College Bareilly MBBS choice entry is active via UPDGME. | Mandatory 6-year hostel rules are verified. | Submit details below for eligibility checks.",
  deanName: "Dr. Rajnish Pathania",
  deanDesignation: "Principal & Dean",
  deanQuote: "Our teaching hospital associated with Bareilly International University offers a high-end 1200+ bed capacity. Students benefit from intensive clinical workflows, preparing them to serve with clinical proficiency.",
  contactEmail: "admission@rmcbareilly.com",
  notices: [],
  initialScore: 410,
  predictorMidLabel: "UP Open Seat (450+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 450) {
      return {
        status: "High Probability (UPDGME Open Private Seat)",
        text: "Your score is highly competitive. You stand an excellent chance of securing an open private seat (~₹18.72L tuition/year) at Rohilkhand Medical College via UP NEET counseling.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Lock Rohilkhand Medical College in UPDGME Round 1 option entry.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 360) {
      return {
        status: "Good Chance (UPDGME Open Private Seat)",
        text: "You have very strong prospects for open seats in Round 2 or Stray vacancy allocations at RMCH Bareilly.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Target State counseling Round 1 & 2 option entry.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 230) {
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
        text: "You have qualified NEET UG. Admissions to RMCH open seats require slightly higher marks, but you can choose alternative private medical colleges in UP.",
        color: "text-slate-800 border-slate-200 bg-slate-100/50",
        quotaAdvice: "Check alternative private colleges in UP option entry lists.",
        btnStyle: "bg-slate-700 hover:bg-slate-800 text-white"
      };
    } else {
      return {
        status: "NEET Qualification Required",
        text: "Qualifying NEET UG is mandatory for participating in UPDGME counseling or registering for Rohilkhand medical admissions.",
        color: "text-red-950 border-red-200 bg-red-50/20",
        quotaAdvice: "Explore guidance on NEET score improvement or parallel tracks.",
        btnStyle: "bg-red-900 hover:bg-red-950 text-white"
      };
    }
  },
  overviewTitle: "Overview of ROHILKHAND MEDICAL COLLEGE AND HOSPITAL, BAREILLY",
  overviewParagraphs: [
  "Established in <strong>2006</strong>, <strong>Rohilkhand Medical College and Hospital (RMCH), Bareilly</strong> is a leading private medical college situated on Pilibhit Bypass Road, Bareilly. Constituent of the <strong>Bareilly International University</strong> and recognized by the <strong>National Medical Commission (NMC)</strong>, it offers comprehensive medical training.",
  "The vast campus houses the associated 1,200+ bed tertiary RMCH hospital, featuring heavy outpatient flow. The college boasts high-end lecture rooms, sophisticated laboratory equipment, and state-of-the-art simulation labs to offer hands-on clinical training."
],
  highlights: [
    {
      title: "Established Year",
      value: "2006",
      desc: "Two decades of medical teaching and healthcare history",
      icon: Calendar,
    },
    {
      title: "University Affiliation",
      value: "Bareilly International University",
      desc: "Private UGC recognized university",
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
      value: "250 Seats",
      desc: "Annual seats allocated through UPDGME counseling",
      icon: Users,
    },
    {
      title: "Hospital Beds",
      value: "1200+ Beds",
      desc: "Advanced tertiary hospital featuring over 120 ICU beds",
      icon: HeartPulse,
    },
    {
      title: "Strategic Location",
      value: "Bareilly",
      desc: "Pilibhit Bypass Road, Bareilly, Uttar Pradesh",
      icon: MapPin,
    },
  ],
  feeStructure: [
    { quota: "Annual Tuition Fee", annualFee: "₹18,72,361", remark: "State regulated private tuition fee per year." },
    { quota: "Hostel Fee (Mandatory)", annualFee: "₹1,50,000 / Year", remark: "Lodging charges for mandatory 6-year stay." },
    { quota: "Refundable Security Fee", annualFee: "₹3,00,000", remark: "Refundable caution deposit paid at admission." },
  ],
  feeNotes: [
  "<strong>Security Fees:</strong> A one-time security deposit of ₹3,00,000 is refundable upon course completion.",
  "<strong>Hostel Accommodation:</strong> Mandated for private candidates under UP state rules. Twin sharing standard is non-AC.",
  "<strong>Open State Counseling:</strong> All seats are allocated transparently through UP NEET counseling."
],
  cutoffSectionTitle: "Estimated NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "UPDGME Open General Round 1", scoreRange: "440 - 480 Marks", percentile: "92.0%+" },
    { category: "UPDGME Open General Round 2", scoreRange: "410 - 455 Marks", percentile: "90.0%+" },
    { category: "Reserved / Stray Seats", scoreRange: "320 - 390 Marks", percentile: "80.0%+" },
  ],
  processSectionTitle: "Admission Counseling Steps",
  admissionSteps: [
    { title: "Qualify NEET UG Exam", desc: "Secure a score meeting or exceeding the general qualifying cutoff published by the NTA." },
    { title: "Register on UPDGME Portal", desc: "Complete online registration on the Uttar Pradesh NEET UG counseling site." },
    { title: "Document Verification", desc: "Complete document verification at designated nodal centers in UP (e.g. Bareilly/Noida centers)." },
    { title: "Submit Choice Entry", desc: "Submit your choice entry list online placing 'Rohilkhand Medical College' at your preferred position." },
    { title: "Reporting & Joining", desc: "Download UPDGME allotment letter, submit the first-year fee online, and report to Rohilkhand campus to complete joining." }
  ],
  facilities: [
    {
      title: "1200+ Bed Teaching Hospital",
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
      q: "Where is Rohilkhand Medical College located?",
      a: "The college is located at Pilibhit Bypass Road, Bareilly, Uttar Pradesh - 243006."
    },
    {
      q: "Is Rohilkhand Medical College a government or private college?",
      a: "It is a private medical college, constituent of Bareilly International University and recognized by the NMC."
    },
    {
      q: "How many MBBS seats are available annually?",
      a: "Rohilkhand Medical College has an annual intake capacity of 250 MBBS seats."
    },
    {
      q: "Are admissions open to non-UP candidates?",
      a: "Yes, UP private medical colleges counseling is open to candidates from all states (Open State quota)."
    },
    {
      q: "What is the fee structure for MBBS?",
      a: "The annual tuition fee is approximately ₹18.72 Lakhs. The total course package including hostel, mess, security deposit, and miscellaneous is regulated by UPDGME norms."
    }
  ],
  formId: "rmch",
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
  counselingNote: "Admissions to Rohilkhand Medical College are processed via UPDGME. Register to track counseling schedules, choice locking, and security deposit updates.",
  formDeskLabel: "UPDGME Registration Desk",
};

export default function RohilkhandMedicalBareillyAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_INDIGO} college={college} />;
}
