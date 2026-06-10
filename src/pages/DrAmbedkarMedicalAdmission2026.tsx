import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_EMERALD } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "Dr. B. R. Ambedkar Medical College Bangalore MBBS Admission 2026 - Fees & Cutoff",
  seoDescription: "Learn about MBBS Admissions at Dr. B. R. Ambedkar Medical College (BRAMC), Bangalore. Get verified details on KEA 2026 tuition fees, cutoffs, seat matrices, and counseling.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/dr-br-ambedkar-medical-college-bangalore-admission-2026/#college",
        "name": "Dr. B. R. Ambedkar Medical College, Bangalore",
        "alternateName": "BRAMC Bangalore",
        "url": "https://bramc.edu.in",
        "description": "Dr. B. R. Ambedkar Medical College is a leading private medical institution in Bangalore, recognized by the National Medical Commission (NMC) and affiliated with RGUHS.",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Kadugondanahalli",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "560045",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "BRAMC",
  fullName: "DR. B. R. AMBEDKAR MEDICAL COLLEGE, BANGALORE",
  hindiName: "डॉ. बी. आर. अम्बेडकर मेडिकल कॉलेज, बेंगलुरु",
  affiliation: "Affiliated with Rajiv Gandhi University of Health Sciences (RGUHS)",
  location: "Kadugondanahalli, Bangalore, Karnataka",
  heroTitle: "Dr. Ambedkar Medical College MBBS Admission & KEA Guide",
  heroSubtitle: "Explore Dr. B. R. Ambedkar Medical College, Bangalore. Get verified KEA fee listings, seats intake matrix, and Karnataka counseling score matchers.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "KEA NEET UG counseling schedules for Karnataka state quota registrations are now active. | Dr. Ambedkar Medical College MBBS choice filling codes are updated. | Submit registration details below for an eligibility review.",
  deanName: "Dr. Siddarameshwar Harsoor S.",
  deanDesignation: "Administration",
  deanQuote: "At Dr. Ambedkar Medical College, we seek to cultivate empathetic, highly competent medical professionals. The academic legacies and attached 750-bed teaching hospital provide vital clinical settings for students.",
  contactEmail: "info@bramc.edu.in",
  notices: [
  {
    "text": "Dr. B. R. Ambedkar Medical College MBBS seat matrix allocation verification",
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
  initialScore: 500,
  predictorMidLabel: "KEA Cutoff (500+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 580) {
      return {
        status: "High Probability (KEA Govt Quota Seat)",
        text: "Your score is highly competitive. You stand an excellent chance of securing a Government Quota seat (~₹1.5L/yr) at Dr. B. R. Ambedkar Medical College during KEA counseling.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Target KEA State counseling Round 1.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 500) {
      return {
        status: "Good Chance (KEA Private/Open merit Seat)",
        text: "You hold a strong competitive edge for KEA Private/Open Quota seats (~₹10L - ₹12L/yr) at Dr. Ambedkar Medical College. PRIORITIZE option entries correctly.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Keep Dr. Ambedkar Medical College as a prioritized selection.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 350) {
      return {
        status: "Management Quota Eligible",
        text: "You meet the standard cutoff scores for Management Quota / NRI Sponsored Seats (~₹35L/yr) at Dr. Ambedkar Medical College. Early registration counseling is advised.",
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
  overviewTitle: "Overview of DR. B. R. AMBEDKAR MEDICAL COLLEGE, BANGALORE",
  overviewParagraphs: [
  "Established in <strong>1981</strong> by the Anand Social and Educational Trust, <strong>Dr. B. R. Ambedkar Medical College (BRAMC), Bangalore</strong> is an iconic private medical college. Affiliated with the <strong>Rajiv Gandhi University of Health Sciences (RGUHS)</strong> and approved by the <strong>National Medical Commission (NMC)</strong>, it holds a strong position in academic rankings.",
  "The college is located in Kadugondanahalli, Bangalore. The attached 750-780 bed teaching hospital provides extensive clinical training and diagnostics experience to medical students."
],
  highlights: [
    {
      title: "Established Year",
      value: "1981",
      desc: "Over four decades of teaching history",
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
      value: "750-780 Beds",
      desc: "Attached multi-specialty teaching hospital",
      icon: HeartPulse,
    },
    {
      title: "Strategic Location",
      value: "Bangalore",
      desc: "Kadugondanahalli, Bangalore, Karnataka",
      icon: MapPin,
    },
  ],
  feeStructure: [
    { quota: "KEA Government Quota", annualFee: "₹1,50,000", remark: "Allotted via Karnataka state domicile merit ranking" },
    { quota: "KEA Private Open Seat", annualFee: "₹10,00,000 - ₹12,00,000", remark: "Merit-based seats open to both Karnataka and non-Karnataka applicants" },
    { quota: "KEA Management / NRI Quota", annualFee: "₹35,00,000", remark: "Allotted via KEA NRI registration and vacant seat rounds" },
  ],
  feeNotes: [
  "<strong>Caution Money:</strong> A one-time deposit is submitted to BRAMC at final reporting.",
  "<strong>Hostel & Mess Costs:</strong> Range from ₹1,50,000 to ₹3,00,000 per year depending on occupancy styles.",
  "<strong>KEA Standards:</strong> Tuition fees are governed by the KEA state counseling authority guidelines."
],
  cutoffSectionTitle: "Estimated NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "KEA State Govt Quota", scoreRange: "580 - 615 Marks", percentile: "96.5%+" },
    { category: "KEA Private Open Merit", scoreRange: "500 - 565 Marks", percentile: "93.0%+" },
    { category: "Management / NRI sponsored", scoreRange: "160 - 380 Marks", percentile: "58.0%+" },
  ],
  processSectionTitle: "Admission Counseling Steps",
  admissionSteps: [
    { title: "Qualify NEET UG", desc: "Secure a valid NEET score exceeding the qualifying percentile declared by the NTA." },
    { title: "Register on KEA Portal", desc: "Complete online registration on the Karnataka Examinations Authority (KEA) website during active windows." },
    { title: "KEA Document Verification", desc: "Attend KEA document verification rounds to verify academic transcripts, domicile, and quota claims." },
    { title: "Lock Selection Option", desc: "Lock 'Dr. B. R. Ambedkar Medical College' as your preferred choice in option entry portal." },
    { title: "Allotment & Final Joining", desc: "Download allotment, remit tuition fee online to KEA, and report to BRAMC campus to finalize joining formalities." }
  ],
  facilities: [
    {
      title: "750-Bed Teaching Hospital",
      desc: "Attached super-specialty teaching hospital located in Kadugondanahalli with high OPD patient flows.",
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
      title: "Centralized Resource Library",
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
      q: "Where is Dr. B. R. Ambedkar Medical College located?",
      a: "The campus is located in Kadugondanahalli, Bangalore, Karnataka - 560045."
    },
    {
      q: "Is Dr. B. R. Ambedkar Medical College approved by the NMC?",
      a: "Yes, the MBBS and various postgraduate courses at BRAMC are fully recognized and approved by the National Medical Commission (NMC)."
    },
    {
      q: "What is the annual MBBS seat matrix at Dr. Ambedkar Medical College?",
      a: "The college has an approved annual intake of 150 MBBS seats."
    },
    {
      q: "What is the fee structure for private open seats under KEA?",
      a: "The KEA Private Open seat tuition fee is approximately ₹10,00,000 to ₹12,00,000 per year. Security deposits and hostel fees are extra."
    },
    {
      q: "Who is the current Principal of Dr. B. R. Ambedkar Medical College?",
      a: "The current Principal of Dr. B. R. Ambedkar Medical College is Dr. Siddarameshwar Harsoor S."
    }
  ],
  formId: "bramc",
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
  counselingNote: "Admissions to Dr. B. R. Ambedkar Medical College are managed through KEA counseling systems. Fill in your data to track state counseling rounds, choices locking rules, and vacancy dates.",
  formDeskLabel: "KEA Registration Desk",
};

export default function DrAmbedkarMedicalAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_EMERALD} college={college} />;
}
