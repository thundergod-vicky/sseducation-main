import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_INDIGO } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "Subharti Medical College Meerut MBBS Admission 2026 - Fees, Cutoff & Seat Matrix",
  seoDescription: "Read about MBBS Admissions at Netaji Subhash Chandra Bose Subharti Medical College, Meerut. Access verified 2026 fees, UPDGME cutoffs, and counseling instructions.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/subharti-medical-college-meerut-admission-2026/#college",
        "name": "Subharti Medical College, Meerut",
        "alternateName": "Subharti Medical Meerut",
        "url": "https://medical.subharti.org",
        "description": "Netaji Subhash Chandra Bose Subharti Medical College is a premier private medical college in Meerut, Uttar Pradesh, recognized by the National Medical Commission (NMC) and affiliated with Swami Vivekanand Subharti University.",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Subhartipuram, NH-58, Delhi-Haridwar Bypass Road",
          "addressLocality": "Meerut",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "250005",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "NSCB",
  fullName: "SUBHARTI MEDICAL COLLEGE, MEERUT",
  hindiName: "सुभारती मेडिकल कॉलेज, मेरठ",
  affiliation: "Netaji Subhash Chandra Bose Subharti Medical College | 1250-Bed Super-Specialty Hospital",
  location: "Delhi-Haridwar Bypass Road, Meerut, West UP",
  heroTitle: "Subharti Medical College MBBS Admission Matrix",
  heroSubtitle: "Unlock admission guides for Netaji Subhash Chandra Bose Subharti Medical College, Meerut. Obtain verified UPDGME fee configurations, hostel structures, and NEET cutoffs.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "Subharti Medical College Meerut MBBS counseling notifications are active. | Security deposit details are logged on UPDGME portal. | Submit credentials below for eligibility matcher.",
  deanName: "Dr. A. K. Srivastava",
  deanDesignation: "Principal & Dean",
  deanQuote: "Our medical college remains focused on training clinical graduates who can serve the community with professional excellence. The attached 1250-bed teaching hospital provides heavy patient flow and clinical exposure.",
  contactEmail: "subhartiadmission@gmail.com",
  notices: [],
  initialScore: 380,
  predictorMidLabel: "UP Open Seat (420+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 420) {
      return {
        status: "High Probability (UPDGME Open Private Seat)",
        text: "Your score is highly competitive. You stand an excellent chance of securing an open private seat (~₹11.85L tuition/year) at Subharti Medical College, Meerut via UP NEET counseling.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Lock Subharti Medical College in UPDGME Round 1 option entry.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 320) {
      return {
        status: "Good Chance (UPDGME Open Private Seat)",
        text: "You have a solid chance of securing a seat in Round 2 or Stray rounds at Subharti, which has a very good patient flow.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Target State counseling Round 1 & 2 option entry.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 220) {
      return {
        status: "Eligible for Special Stray vacancy rounds",
        text: "Direct cutoffs might be competitive, but stray round seats or NRI vacancy routes could be explored with expert guidance.",
        color: "text-amber-900 border-amber-200 bg-amber-50/40",
        quotaAdvice: "Verify document verification at designated UP nodal centers.",
        btnStyle: "bg-amber-800 hover:bg-amber-900 text-white"
      };
    } else if (score >= 137) {
      return {
        status: "NEET Qualified (UPDGME Participant)",
        text: "You have qualified NEET UG. Admissions to Subharti open merit will require higher scores, but you are eligible to choose other UP private colleges.",
        color: "text-slate-800 border-slate-200 bg-slate-100/50",
        quotaAdvice: "Check alternative private colleges in UP option entry lists.",
        btnStyle: "bg-slate-700 hover:bg-slate-800 text-white"
      };
    } else {
      return {
        status: "NEET Qualification Required",
        text: "Qualifying NEET UG is mandatory for participating in UPDGME counseling or registering for Subharti medical admissions.",
        color: "text-red-950 border-red-200 bg-red-50/20",
        quotaAdvice: "Explore guidance on NEET score improvement or parallel tracks.",
        btnStyle: "bg-red-900 hover:bg-red-950 text-white"
      };
    }
  },
  overviewTitle: "Overview of SUBHARTI MEDICAL COLLEGE, MEERUT",
  overviewParagraphs: [
  "Established in <strong>1996</strong>, <strong>Netaji Subhash Chandra Bose Subharti Medical College, Meerut</strong> is a leading private medical college situated in Meerut, Uttar Pradesh. Affiliated with the <strong>Swami Vivekanand Subharti University</strong> and fully recognized by the <strong>National Medical Commission (NMC)</strong>, it boasts a decades-long academic legacy.",
  "The vast campus features the attached 1,250-bed Chhatrapati Shivaji Subharti Hospital, which serves thousands of patients from Meerut and surrounding districts daily. The college focuses on rigorous training, heavy bedside clinical flow, and modern medical infrastructure."
],
  highlights: [
    {
      title: "Established Year",
      value: "1996",
      desc: "Three decades of clinical and educational medical history",
      icon: Calendar,
    },
    {
      title: "University Affiliation",
      value: "Swami Vivekanand Subharti University",
      desc: "Private UGC recognized university in UP",
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
      value: "200 Seats",
      desc: "Annual seats allocated through UPDGME counseling",
      icon: Users,
    },
    {
      title: "Hospital Beds",
      value: "1250 Beds",
      desc: "Chhatrapati Shivaji Subharti Hospital (High patient load)",
      icon: HeartPulse,
    },
    {
      title: "Strategic Location",
      value: "Meerut",
      desc: "Delhi-Haridwar Bypass Road, Meerut, West UP",
      icon: MapPin,
    },
  ],
  feeStructure: [
    { quota: "Annual Tuition Fee", annualFee: "₹11,85,113", remark: "Regulated state-mandated tuition fee." },
    { quota: "Hostel Fee (Mandatory)", annualFee: "₹1,50,000 / Year", remark: "Twin sharing hostel lodging setup (Non-AC)." },
    { quota: "One-Time Security Deposit", annualFee: "₹3,00,000", remark: "Refundable security deposit at the time of admission." },
    { quota: "Miscellaneous Fees", annualFee: "₹85,600 / Year", remark: "Includes exam, laboratory, and library fees." },
  ],
  feeNotes: [
  "<strong>Security Fees:</strong> A one-time security deposit of ₹3,00,000 is refundable upon course completion.",
  "<strong>Hostel Accommodation:</strong> Mandated for private candidates under UP state rules. Twin sharing standard is non-AC.",
  "<strong>Open State Counseling:</strong> All seats are allocated transparently through UP NEET counseling."
],
  cutoffSectionTitle: "Estimated NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "UPDGME Open General Round 1", scoreRange: "400 - 450 Marks", percentile: "90.0%+" },
    { category: "UPDGME Open General Round 2", scoreRange: "380 - 425 Marks", percentile: "88.0%+" },
    { category: "Reserved/Stray Seats", scoreRange: "310 - 370 Marks", percentile: "80.0%+" },
  ],
  processSectionTitle: "Admission Counseling Steps",
  admissionSteps: [
    { title: "Qualify NEET UG Exam", desc: "Secure a score meeting or exceeding the general qualifying cutoff published by the NTA." },
    { title: "Register on UPDGME Portal", desc: "Complete online registration on the Uttar Pradesh NEET UG counseling site." },
    { title: "Document Verification", desc: "Complete document verification at designated nodal centers in UP (e.g. Meerut/Noida nodal centers)." },
    { title: "Submit Choice Entry", desc: "Submit your choice entry list online placing 'Subharti Medical College, Meerut' at your preferred position." },
    { title: "Reporting & Security Bond", desc: "Download UPDGME allotment letter, submit the first-year fee online, and report to Subharti to finalize admission." }
  ],
  facilities: [
    {
      title: "1250-Bed Teaching Hospital",
      desc: "Chhatrapati Shivaji teaching healthcare center featuring high OPD volumes and comprehensive medical and surgical specialties in Meerut.",
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
      q: "Where is Subharti Medical College located?",
      a: "The college is located at Subhartipuram, NH-58, Delhi-Haridwar Bypass Road, Meerut, Uttar Pradesh - 250005."
    },
    {
      q: "Is Subharti Medical College a government or private college?",
      a: "It is a highly respected private medical college, constituent of Swami Vivekanand Subharti University, recognized by the NMC."
    },
    {
      q: "How many MBBS seats are available annually?",
      a: "Subharti Medical College has an annual intake capacity of 200 MBBS seats."
    },
    {
      q: "Are admissions open to non-UP candidates?",
      a: "Yes, UP private medical colleges counseling is open to candidates from all states (Open State quota)."
    },
    {
      q: "What is the fee structure for MBBS?",
      a: "The annual tuition fee is approximately ₹11.85 Lakhs. The total course package including hostel, mess, security deposit, and miscellaneous is regulated by UPDGME norms."
    }
  ],
  formId: "subharti",
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
  counselingNote: "Admissions to Subharti Medical College are processed via UPDGME. Register to track counseling schedules, security deposit deadlines, and node document centers.",
  formDeskLabel: "UPDGME Registration Desk",
};

export default function SubhartiMedicalMeerutAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_INDIGO} college={college} />;
}
