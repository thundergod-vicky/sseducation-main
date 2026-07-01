import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_SLATE } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "KPC Medical College Kolkata MBBS Admission 2026 - Fees, Cutoff & Counseling",
  seoDescription: "Explore MBBS Admission at KPC Medical College & Hospital, Kolkata. Access verified 2026 fees (State/Management Quota), WBMCC seat matrix, NEET cutoffs, and counseling updates.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/kpc-medical-college-kolkata-admission-2026/#college",
        "name": "KPC Medical College and Hospital, Kolkata",
        "alternateName": "KPCMC Kolkata",
        "url": "https://kpcmedicalcollege.in",
        "description": "KPC Medical College and Hospital is a premier private medical college in Kolkata, West Bengal, recognized by the National Medical Commission (NMC) and affiliated with WBUHS.",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1F, Raja Subodh Chandra Mullick Road, Jadavpur",
          "addressLocality": "Kolkata",
          "addressRegion": "West Bengal",
          "postalCode": "700032",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "KPC",
  fullName: "KPC MEDICAL COLLEGE AND HOSPITAL, KOLKATA",
  hindiName: "केपीसी मेडिकल कॉलेज और अस्पताल, कोलकाता",
  affiliation: "First Private Medical College in West Bengal | Affiliated to WBUHS",
  location: "Jadavpur, South Kolkata, West Bengal",
  heroTitle: "KPC Medical College MBBS Admission Matrix",
  heroSubtitle: "Unlock admission guides for KPC Medical College & Hospital, Kolkata. Obtain verified WBMCC state & management quota fee structures, hostel charges, and NEET cutoffs.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "KPC Medical College Jadavpur MBBS admissions portal is open via WBMCC. | Verify State Quota and Management Quota schedules. | Submit credentials below for eligibility checks.",
  deanName: "Prof. (Dr.) Kunal Kanti Majumdar",
  deanDesignation: "Principal",
  deanQuote: "KPC Medical College remains committed to promoting top-tier healthcare education. Our 830-bed teaching hospital in South Kolkata offers heavy patient flow and extensive clinical exposure for students.",
  contactEmail: "admission@kpcmedicalcollege.in",
  notices: [
  {
    "text": "KPC Medical College MBBS Seat Allocation Matrix Round 1 details",
    "date": "June 09, 2026",
    "tag": "SEAT MATRIX"
  },
  {
    "text": "Detailed Fee Breakdown for West Bengal State and Management quotas",
    "date": "June 06, 2026",
    "tag": "FEE GUIDE"
  },
  {
    "text": "WBMCC counseling document verification schedule at Jadavpur campus",
    "date": "June 02, 2026",
    "tag": "COUNSELING"
  },
  {
    "text": "Hostel accommodation booking and registration policies",
    "date": "May 28, 2026",
    "tag": "HOSTEL RULE"
  }
],
  initialScore: 550,
  predictorMidLabel: "State Merit (570+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 600) {
      return {
        status: "High Probability (WBMCC State Quota seat)",
        text: "Your score is highly competitive. You stand an excellent chance of securing a State Quota seat (~₹4L/year) at KPC Medical College via West Bengal state counseling.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Lock KPC Medical College Jadavpur in State Quota Round 1.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 540) {
      return {
        status: "Good Chance (WBMCC State Quota / Management Quota)",
        text: "You have decent prospects for State Quota seats, and an outstanding opportunity for Management Quota seats (~₹16L/year) at KPC Medical College.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Target State counseling Round 1 & 2 option entry.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 420) {
      return {
        status: "High Probability (WBMCC Management Quota)",
        text: "You have a solid chance of securing a Management Quota seat (~₹16L/year) in KPC Medical College Jadavpur.",
        color: "text-amber-900 border-amber-200 bg-amber-50/40",
        quotaAdvice: "Register on WBMCC portal under Management Quota category.",
        btnStyle: "bg-amber-800 hover:bg-amber-900 text-white"
      };
    } else if (score >= 137) {
      return {
        status: "NEET Qualified (Management / NRI / Stray Quotas)",
        text: "You have qualified NEET UG. Admission to KPC Medical College Jadavpur will require targeting Management Quota or Stray vacancy rounds.",
        color: "text-slate-800 border-slate-200 bg-slate-100/50",
        quotaAdvice: "Verify document status and registration for Management/NRI seats.",
        btnStyle: "bg-slate-700 hover:bg-slate-800 text-white"
      };
    } else {
      return {
        status: "NEET Qualification Required",
        text: "Qualifying NEET UG is mandatory for participating in WBMCC counseling and getting admitted to KPC Medical College Jadavpur.",
        color: "text-red-950 border-red-200 bg-red-50/20",
        quotaAdvice: "Explore guidance on NEET score improvement or parallel tracks.",
        btnStyle: "bg-red-900 hover:bg-red-950 text-white"
      };
    }
  },
  overviewTitle: "Overview of KPC MEDICAL COLLEGE AND HOSPITAL, KOLKATA",
  overviewParagraphs: [
  "Established in <strong>2006</strong>, <strong>KPC Medical College and Hospital, Kolkata</strong> is the first private medical college in West Bengal. Situated in the institutional hub of Jadavpur, South Kolkata, it is affiliated with the <strong>West Bengal University of Health Sciences (WBUHS)</strong> and fully recognized by the <strong>National Medical Commission (NMC)</strong>.",
  "KPC Medical College is renowned for its state-of-the-art infrastructure and rich academic ecosystem. The attached 830-bed teaching hospital caters to a large patient demographic daily, providing medical students with exceptional bedside clinical training and clinical exposure."
],
  highlights: [
    {
      title: "Established Year",
      value: "2006",
      desc: "First private medical college in West Bengal",
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
      value: "200 Seats",
      desc: "Annual seats allocated through WBMCC counseling",
      icon: Users,
    },
    {
      title: "Hospital Beds",
      value: "830 Beds",
      desc: "Advanced tertiary-care teaching hospital in Jadavpur",
      icon: HeartPulse,
    },
    {
      title: "Strategic Location",
      value: "Kolkata",
      desc: "Jadavpur, South Kolkata, West Bengal",
      icon: MapPin,
    },
  ],
  feeStructure: [
    { quota: "State Quota Fee", annualFee: "₹4,00,000 / Year", remark: "Regulated state quota tuition fee. Approx ₹18,00,000 total course fee." },
    { quota: "Management Quota Fee", annualFee: "₹16,00,000 / Year", remark: "Management quota tuition fee. Approx ₹72,00,000 total course fee." },
    { quota: "NRI Quota Fee", annualFee: "₹1,50,00,000 Total", remark: "Total course fee package for NRI category applicants." },
  ],
  feeNotes: [
  "<strong>Verification Caution Deposit:</strong> One-time security deposit submitted during admission.",
  "<strong>Hostel & Messing:</strong> Roughly ₹1,20,000 to ₹1,80,000 per term depending on the sharing setup.",
  "<strong>Counseling Strictness:</strong> All transactions must proceed officially via WBMCC. Avoid third-party deals."
],
  cutoffSectionTitle: "Estimated NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "WBMCC State Quota (UR)", scoreRange: "570 - 610 Marks", percentile: "96.5%+" },
    { category: "WBMCC Management Quota (UR)", scoreRange: "380 - 520 Marks", percentile: "80.0%+" },
    { category: "Reserved Categories (State)", scoreRange: "430 - 490 Marks", percentile: "85.0%+" },
  ],
  processSectionTitle: "Admission Counseling Steps",
  admissionSteps: [
    { title: "Qualify NEET UG Exam", desc: "Secure a score meeting or exceeding the general qualifying cutoff published by the NTA." },
    { title: "Register on WBMCC Portal", desc: "Complete online registration on the West Bengal Medical Counseling Committee (WBMCC) site." },
    { title: "Document Verification", desc: "Produce requisite category, domicile, or management/NRI certificates for WBMCC physical or online verification." },
    { title: "Lock Selection Choices", desc: "Submit your choice entry list placing 'KPC Medical College and Hospital, Jadavpur' at your preferred position." },
    { title: "Reporting & Joining", desc: "Download WBMCC allotment letter, submit the first-year fee online/via demand draft, and report to KPC Jadavpur to complete verification." }
  ],
  facilities: [
    {
      title: "830-Bed Super-Specialty Hospital",
      desc: "Tertiary teaching healthcare center featuring high OPD volumes and comprehensive medical and surgical specialties in South Kolkata.",
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
      q: "Where is KPC Medical College located?",
      a: "The college is located at 1F, Raja Subodh Chandra Mullick Road, Jadavpur, Kolkata, West Bengal - 700032."
    },
    {
      q: "Is KPC Medical College a government or private college?",
      a: "It is West Bengal's first private medical college, established in 2006, affiliated with WBUHS and recognized by the NMC."
    },
    {
      q: "How many MBBS seats are available annually?",
      a: "KPC Medical College has an annual intake capacity of 200 MBBS seats."
    },
    {
      q: "Are admissions open to non-West Bengal candidates?",
      a: "Yes, non-West Bengal candidates can apply under the WBMCC Management Quota seats, which are open to all-India candidates based on NEET UG merit."
    },
    {
      q: "What is the fee structure for Management Quota?",
      a: "The tuition fee for Management Quota is approximately ₹16,00,000 per year, leading to a total course tuition fee of approximately ₹72,00,000."
    }
  ],
  formId: "kpc",
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
  counselingNote: "Admissions to KPC Medical College Jadavpur are processed via WBMCC. Register to track counseling windows, choice locking, and vacancy round updates.",
  formDeskLabel: "WBMCC Registration Desk",
};

export default function KpcMedicalKolkataAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_SLATE} college={college} />;
}
