import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_ROYAL } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "East Point Medical College Bangalore MBBS Admission 2026 - Fees & Cutoff",
  seoDescription: "Learn about MBBS Admissions at East Point College of Medical Sciences & Research Centre, Bangalore. Get verified details on KEA 2026 tuition fees, cutoffs, seat matrices, and counseling.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/east-point-college-of-medical-sciences-bangalore-admission-2026/#college",
        "name": "East Point College of Medical Sciences and Research Centre, Bangalore",
        "alternateName": "East Point Medical College Bangalore",
        "url": "http://epcms.ac.in",
        "description": "East Point College of Medical Sciences is a premier private medical institution in Bangalore, recognized by the National Medical Commission (NMC) and affiliated with RGUHS.",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No. 147, Bidarahalli",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "560049",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "EPCMS",
  fullName: "EAST POINT COLLEGE OF MEDICAL SCIENCES & RESEARCH CENTRE, BANGALORE",
  hindiName: "इस्ट पॉइंट कॉलेज ऑफ मेडिकल साइंसेज, बेंगलुरु",
  affiliation: "Affiliated with Rajiv Gandhi University of Health Sciences (RGUHS)",
  location: "Bidarahalli, Bangalore, Karnataka",
  heroTitle: "East Point Medical College MBBS Admission & KEA Guide",
  heroSubtitle: "Explore East Point College of Medical Sciences, Bangalore. Get verified KEA fee listings, seats intake matrix, and Karnataka counseling score matchers.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "KEA NEET UG counseling schedules for Karnataka state quota registrations are now active. | East Point Medical College MBBS choice filling codes are updated. | Submit registration details below for an eligibility review.",
  deanName: "Dr. D. Prem Kumar",
  deanDesignation: "Dean & Principal",
  deanQuote: "At East Point, we strive to build compassionate, highly skilled medical graduates. Our modern campus layout and attached 1,000+ bed clinical center offer a rich learning environment for undergraduate candidates.",
  contactEmail: "info@epcms.ac.in",
  notices: [
  {
    "text": "East Point Medical College MBBS seat matrix verification",
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
  initialScore: 495,
  predictorMidLabel: "KEA Cutoff (495+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 575) {
      return {
        status: "High Probability (KEA Govt Quota Seat)",
        text: "Your score is competitive. You stand an excellent chance of securing a Government Quota seat (~₹1.4L - ₹1.5L/yr) at East Point Medical College during KEA counseling.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Target KEA State counseling Round 1.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 495) {
      return {
        status: "Good Chance (KEA Private/Open merit Seat)",
        text: "You hold a strong competitive edge for KEA Private/Open Quota seats (~₹12.0L/yr) at East Point Medical College. Prioritize this option in your choice list.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Keep East Point as a prioritized option in early rounds.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 340) {
      return {
        status: "Management Quota Eligible",
        text: "You meet the standard cutoff scores for Management Quota / NRI Sponsored Seats (~₹33L - ₹36L/yr) at East Point Medical College. Early registration counseling is advised.",
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
  overviewTitle: "Overview of EAST POINT COLLEGE OF MEDICAL SCIENCES & RESEARCH CENTRE, BANGALORE",
  overviewParagraphs: [
  "Established in <strong>2016</strong>, the <strong>East Point College of Medical Sciences & Research Centre (EPCMS), Bangalore</strong> is a premier medical institution in East Bangalore. Affiliated with the <strong>Rajiv Gandhi University of Health Sciences (RGUHS)</strong>, Karnataka, and approved by the <strong>National Medical Commission (NMC)</strong>, the college offers extensive clinical training and modern campus layouts.",
  "The campus is located in Bidarahalli, Bangalore, featuring an attached 1,000+ bed tertiary teaching hospital. The hospital serves a large community base, providing student candidates with extensive clinical exposure during their rotations."
],
  highlights: [
    {
      title: "Established Year",
      value: "2016",
      desc: "A modern medical campus in East Bangalore",
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
      value: "1000+ Beds",
      desc: "Attached super-specialty teaching hospital",
      icon: HeartPulse,
    },
    {
      title: "Strategic Location",
      value: "Bangalore",
      desc: "Bidarahalli, Bangalore, Karnataka",
      icon: MapPin,
    },
  ],
  feeStructure: [
    { quota: "KEA Government Quota", annualFee: "₹1,41,000 - ₹1,55,000", remark: "Allotted via Karnataka state domicile merit ranking" },
    { quota: "KEA Private Open Seat", annualFee: "₹12,00,000", remark: "Merit-based seats open to both Karnataka and non-Karnataka applicants" },
    { quota: "KEA Management / NRI Quota", annualFee: "₹33,00,000 - ₹36,00,000", remark: "Allotted via KEA NRI registration and vacant seat rounds" },
  ],
  feeNotes: [
  "<strong>Security caution money:</strong> Submitted once at initial seat verification and joining procedures.",
  "<strong>Hostel Accommodation:</strong> Separate hostel slots cost between ₹1,40,000 and ₹3,00,050 annually.",
  "<strong>KEA Norms:</strong> Tuition matrices and fees remain subject to final KEA notifications."
],
  cutoffSectionTitle: "Estimated NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "KEA State Govt Quota", scoreRange: "575 - 610 Marks", percentile: "96.0%+" },
    { category: "KEA Private Open Merit", scoreRange: "495 - 550 Marks", percentile: "92.5%+" },
    { category: "Management / NRI sponsored", scoreRange: "160 - 360 Marks", percentile: "55.0%+" },
  ],
  processSectionTitle: "Admission Counseling Steps",
  admissionSteps: [
    { title: "Qualify NEET UG", desc: "Secure a valid NEET score exceeding the qualifying percentile declared by the NTA." },
    { title: "Register on KEA Portal", desc: "Complete online registration on the Karnataka Examinations Authority (KEA) website during active windows." },
    { title: "KEA Document Verification", desc: "Attend KEA document verification rounds to verify academic transcripts, domicile, and quota claims." },
    { title: "Lock Selection Option", desc: "Lock 'East Point College of Medical Sciences' as your preferred choice in option entry portal." },
    { title: "Allotment & Final Joining", desc: "Download allotment, remit tuition fee online to KEA, and report to EPCMS campus to finalize joining formalities." }
  ],
  facilities: [
    {
      title: "1000+ Bed Multi-Specialty Hospital",
      desc: "Attached super-specialty teaching hospital located in Bidarahalli with high clinical patient footfalls.",
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
      q: "Where is East Point Medical College located?",
      a: "The campus is located at No. 147, Bidarahalli, Bangalore, Karnataka - 560049, offering a lush on-campus environment."
    },
    {
      q: "Is East Point Medical College approved by the NMC?",
      a: "Yes, the MBBS and various postgraduate courses at EPCMS are fully recognized and approved by the National Medical Commission (NMC)."
    },
    {
      q: "What is the annual MBBS seat matrix at East Point?",
      a: "The college has an approved annual intake of 150 MBBS seats."
    },
    {
      q: "What is the fee structure for private open seats under KEA?",
      a: "The KEA Private Open seat tuition fee is approximately ₹12,00,000 per year. Security deposits and hostel fees are extra."
    },
    {
      q: "Who is the current Dean/Principal of East Point medical college?",
      a: "The current Dean/Principal of East Point College of Medical Sciences is Dr. D. Prem Kumar."
    }
  ],
  formId: "epcms",
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
  counselingNote: "Admissions to East Point Medical College are managed through KEA counseling systems. Fill in your data to track state counseling rounds, choice locking rules, and vacancy dates.",
  formDeskLabel: "KEA Registration Desk",
};

export default function EastPointMedicalAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_ROYAL} college={college} />;
}
