import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_EMERALD } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "BGS Global Medical College Bangalore MBBS Admission 2026 - Fees & Cutoff",
  seoDescription: "Learn about MBBS Admissions at BGS Global Institute of Medical Sciences, Bangalore. Get verified details on KEA 2026 tuition fees, cutoffs, seat matrices, and counseling.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/bgs-global-institute-of-medical-sciences-bangalore-admission-2026/#college",
        "name": "BGS Global Institute of Medical Sciences, Bangalore",
        "alternateName": "BGS Medical College Bangalore",
        "url": "http://www.bgsgims.edu.in",
        "description": "BGS Global Institute of Medical Sciences is a premier private medical institution in Bangalore, recognized by the National Medical Commission (NMC) and affiliated with RGUHS.",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Kengeri, Sarjapur-Uttarahalli Road",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "560060",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "BGS",
  fullName: "BGS GLOBAL INSTITUTE OF MEDICAL SCIENCES, BANGALORE",
  hindiName: "बीजीएस ग्लोबल इंस्टीट्यूट ऑफ मेडिकल साइंसेज, बेंगलुरु",
  affiliation: "Affiliated with Rajiv Gandhi University of Health Sciences (RGUHS)",
  location: "Kengeri, Bangalore, Karnataka",
  heroTitle: "BGS Global Medical College MBBS Admission & KEA Guide",
  heroSubtitle: "Explore BGS Global Institute of Medical Sciences, Bangalore. Get verified KEA fee listings, seat matrix details, and Karnataka counseling score matchers.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "KEA NEET UG counseling schedules for Karnataka state quota registrations are now active. | BGS Global Medical College MBBS choice filling codes are updated. | Submit registration details below for an eligibility review.",
  deanName: "Dr. M. E. Mohan",
  deanDesignation: "Dean & Principal",
  deanQuote: "At BGS Global, we strive to build compassionate, highly skilled medical graduates. Our modern campus layout and attached 750-bed clinical center offer a rich learning environment for undergraduate candidates.",
  contactEmail: "principal@bgsgims.edu.in",
  notices: [
  {
    "text": "BGSGIMS Bangalore MBBS seat matrix verification",
    "date": "June 08, 2026",
    "tag": "SEAT MATRIX"
  },
  {
    "text": "Estimated KEA Govt and Private quota tuition fees structures",
    "date": "June 05, 2026",
    "tag": "FEE GUIDE"
  },
  {
    "text": "Karnataka state medical counseling registration timelines",
    "date": "June 01, 2026",
    "tag": "COUNSELING"
  },
  {
    "text": "Hostel room booking configurations and mess details",
    "date": "May 26, 2026",
    "tag": "HOSTEL INFO"
  }
],
  initialScore: 510,
  predictorMidLabel: "KEA Cutoff (505+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 585) {
      return {
        status: "High Probability (KEA Govt Quota Seat)",
        text: "Your score is competitive. You stand an excellent chance of securing a Government Quota seat (~₹1.54L/yr) at BGS Global Medical College during KEA counseling.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Target KEA State counseling Round 1.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 505) {
      return {
        status: "Good Chance (KEA Private/Open merit Seat)",
        text: "You hold a strong competitive edge for KEA Private/Open Quota seats (~₹10.9L - ₹12.1L/yr) at BGS Global Medical College. Ensure proper choice entry order.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Keep BGS Global as a prioritized selection.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 360) {
      return {
        status: "Management Quota Eligible",
        text: "You meet the standard cutoff scores for Management Quota / NRI Sponsored Seats (~₹40L/yr) at BGS Global Medical College. Early registration counseling is advised.",
        color: "text-amber-900 border-amber-200 bg-amber-50/40",
        quotaAdvice: "Prepare documents for Management/NRI reservation verification.",
        btnStyle: "bg-amber-800 hover:bg-amber-900 text-white"
      };
    } else if (score >= 137) {
      return {
        status: "NRI / Stray Vacancy Pathway",
        text: "You have qualified NEET UG. Admission will depend heavily on NRI quota reservations or stray vacancy allocations. Counselling counseling is recommended.",
        color: "text-slate-800 border-slate-200 bg-slate-100/50",
        quotaAdvice: "Explore NRI-sponsored counseling options.",
        btnStyle: "bg-slate-700 hover:bg-slate-800 text-white"
      };
    } else {
      return {
        status: "NEET Qualification Required",
        text: "You must score above the NEET UG qualifying threshold to register for KEA counseling or secure medical admissions.",
        color: "text-red-950 border-red-200 bg-red-50/20",
        quotaAdvice: "Get professional advice on NEET coaching or allied sciences.",
        btnStyle: "bg-red-900 hover:bg-red-950 text-white"
      };
    }
  },
  overviewTitle: "Overview of BGS GLOBAL INSTITUTE OF MEDICAL SCIENCES, BANGALORE",
  overviewParagraphs: [
    "<strong>BGS Global Institute of Medical Sciences, Bangalore</strong> is a premier medical institution established in <strong>2013</strong>. Affiliated with the <strong>Rajiv Gandhi University of Health Sciences (RGUHS)</strong> and recognized by the <strong>National Medical Commission (NMC)</strong>, the college is highly sought-after for its clinical training and academic quality.",
    "The institution features a state-of-the-art campus in Kengeri, Bangalore, alongside an attached 750+ bed multi-specialty teaching hospital that handles a large volume of outpatients, offering excellent bedside clinical training and diagnostic exposure for undergraduate medical students."
  ],
  highlights: [
    {
      title: "Established Year",
      value: "2013",
      desc: "Built with modern clinical layouts",
      icon: Calendar,
    },
    {
      title: "Affiliated University",
      value: "RGUHS, Karnataka",
      desc: "Rajiv Gandhi University of Health Sciences",
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
      desc: "Sanctioned annual MBBS seats intake",
      icon: Users,
    },
    {
      title: "Hospital Beds",
      value: "750+ Beds",
      desc: "Attached super-specialty teaching hospital",
      icon: HeartPulse,
    },
    {
      title: "Strategic Location",
      value: "Bangalore",
      desc: "Kengeri, Bangalore, Karnataka",
      icon: MapPin,
    },
  ],
  feeStructure: [
    { quota: "KEA Government Quota", annualFee: "₹1,54,000", remark: "Allotted via Karnataka state domicile merit ranking" },
    { quota: "KEA Private Open Seat", annualFee: "₹10,93,000 - ₹12,12,000", remark: "Merit-based seats open to both Karnataka and non-Karnataka applicants" },
    { quota: "KEA Management / NRI Quota", annualFee: "₹40,12,000", remark: "Allotted via KEA NRI registration and vacant seat rounds" },
  ],
  feeNotes: [
    "<strong>Caution Money:</strong> A one-time security deposit submitted at the time of final reporting.",
    "<strong>Hostel & Mess Costs:</strong> Hostel room and boarding charges vary depending on AC or sharing occupancy styles.",
    "<strong>KEA Standards:</strong> All seat allocations and tuition fees are subject to final KEA counseling guidelines."
  ],
  cutoffSectionTitle: "Estimated NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "KEA State Govt Quota", scoreRange: "585 - 620 Marks", percentile: "97.0%+" },
    { category: "KEA Private Open Merit", scoreRange: "505 - 570 Marks", percentile: "93.0%+" },
    { category: "Management / NRI sponsored", scoreRange: "170 - 390 Marks", percentile: "60.0%+" },
  ],
  processSectionTitle: "Admission Counseling Steps",
  admissionSteps: [
    { title: "Qualify NEET UG", desc: "Secure a valid NEET score exceeding the qualifying percentile declared by the NTA." },
    { title: "Register on KEA Portal", desc: "Complete online registration on the Karnataka Examinations Authority (KEA) website during active windows." },
    { title: "KEA Document Verification", desc: "Attend KEA document verification rounds to verify academic transcripts, domicile, and quota claims." },
    { title: "Lock Selection Option", desc: "Lock 'BGS Global Institute of Medical Sciences' as your preferred choice in option entry portal." },
    { title: "Allotment & Final Joining", desc: "Download allotment, remit tuition fee online to KEA, and report to BGSGIMS campus to finalize joining formalities." }
  ],
  facilities: [
    {
      title: "750+ Bed Multi-Specialty Hospital",
      desc: "Attached super-specialty teaching hospital located in Kengeri with heavy patient flows.",
      icon: HeartPulse,
    },
    {
      title: "Advanced Diagnostics & Labs",
      desc: "Equipped with state-of-the-art pathology labs, digital MRI/CT imaging, and modern skill development blocks.",
      icon: Activity,
    },
    {
      title: "Modern Air-Conditioned Classrooms",
      desc: "Auditorium-style smart lecture theaters equipped with high-grade digital visual displays.",
      icon: BookOpen,
    },
    {
      title: "Central Resource Library",
      desc: "Holds vast print volumes, national and international medical journals, and dedicated digital reading zones.",
      icon: FileText,
    },
    {
      title: "Secure Accommodation",
      desc: "Separate, secure hostel quarters for boys and girls with AC/Non-AC layouts and full catering mess.",
      icon: Building,
    },
    {
      title: "Recreation Hub",
      desc: "Lush lawns, playground setups, indoor games, and gym promoting student fitness.",
      icon: Sparkles,
    },
  ],
  faqs: [
    {
      q: "Where is BGS Global Medical College located?",
      a: "The campus is located in Kengeri, Bangalore, Karnataka - 560060, well-connected by metro and road services."
    },
    {
      q: "Is BGS Global approved by the NMC?",
      a: "Yes, the MBBS and various postgraduate courses at BGSGIMS are fully recognized and approved by the National Medical Commission (NMC)."
    },
    {
      q: "What is the annual MBBS seat matrix at BGS Global?",
      a: "BGS Global Bangalore has an approved annual intake of 150 MBBS seats."
    },
    {
      q: "What is the fee structure for private open seats under KEA?",
      a: "The KEA Private Open seat tuition fee is approximately ₹10,93,000 to ₹12,12,000 per year. Security deposits and hostel fees are extra."
    },
    {
      q: "Who is the current Principal of BGS Global medical college?",
      a: "The current Principal of BGS Global Institute of Medical Sciences is Dr. M. E. Mohan."
    }
  ],
  formId: "bgs",
  quotaOptions: [
  {
    "value": "KEA Govt Quota",
    "label": "KEA Government Quota Seat"
  },
  {
    "value": "KEA Private Open Seat",
    "label": "KEA Private Open Merit Seat"
  },
  {
    "value": "Management / NRI",
    "label": "Management / NRI Quota"
  }
],
  counselingNote: "Admissions to BGS Global Medical College are managed through KEA counseling systems. Fill in your data to track state counseling rounds, choice locking rules, and vacancy dates.",
  formDeskLabel: "KEA Registration Desk",
};

export default function BgsGlobalMedicalAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_EMERALD} college={college} />;
}
