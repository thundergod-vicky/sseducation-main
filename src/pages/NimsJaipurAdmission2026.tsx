import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_SAFFRON } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "NIMS Medical College Jaipur MBBS Admission 2026 - Fees & Cutoff",
  seoDescription: "Discover MBBS Admission at National Institute of Medical Sciences and Research (NIMS), Jaipur. Read about 2026 fees, seat matrix, NEET UG cutoffs, and counseling process.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/national-institute-of-medical-sciences-jaipur-admission-2026/#college",
        "name": "National Institute of Medical Sciences and Research, Jaipur",
        "alternateName": "NIMS Jaipur",
        "url": "https://nimsuniversity.org",
        "description": "National Institute of Medical Sciences and Research, Jaipur is a constituent college of NIMS University, recognized by the National Medical Commission (NMC).",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shobha Nagar, Jaipur-Delhi Highway (NH-11C)",
          "addressLocality": "Jaipur",
          "addressRegion": "Rajasthan",
          "postalCode": "303121",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "NIMS",
  fullName: "NATIONAL INSTITUTE OF MEDICAL SCIENCES & RESEARCH, JAIPUR",
  hindiName: "राष्ट्रीय आयुर्विज्ञान संस्थान एवं अनुसंधान, जयपुर",
  affiliation: "Constituent College of NIMS University, Jaipur",
  location: "NH-11C, Shobha Nagar, Jaipur-Delhi Highway",
  heroTitle: "NIMS Jaipur MBBS Admission & Seat Matrix Guide",
  heroSubtitle: "Explore the National Institute of Medical Sciences and Research, Jaipur. Access validated fee structures, seat matrix configurations, category eligibility parameters, and live Rajasthan NEET cutoff estimations.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "NEET UG 2026 Rajasthan state medical counseling registrations are now active. | NIMS Jaipur MBBS seat matrix mapping has been updated. | Register below for detailed eligibility checking.",
  deanName: "Dr. Mukesh Tiwari",
  deanDesignation: "Dean & Principal",
  deanQuote: "Welcome to the National Institute of Medical Sciences and Research. Our goal is to cultivate competent and humane medical graduates equipped to practice evidence-based medicine. The clinical resources within our 1400-bed hospital offer a rich learning ecosystem for our undergraduate students.",
  contactEmail: "medical.nims@nimsuniversity.org",
  notices: [
  {
    "text": "NIMS Medical College MBBS Seat Allocation Matrix Verification for State Quota Rounds",
    "date": "June 08, 2026",
    "tag": "SEAT MATRIX"
  },
  {
    "text": "Estimated Management Quota tuition fees and caution deposit structures",
    "date": "June 05, 2026",
    "tag": "FEE GUIDE"
  },
  {
    "text": "Rajasthan NEET UG State counseling choice-filling rules and option locking",
    "date": "June 01, 2026",
    "tag": "COUNSELING"
  },
  {
    "text": "Hostel room pre-booking instructions and configurations (Single/Double sharing)",
    "date": "May 26, 2026",
    "tag": "HOSTEL INFO"
  }
],
  initialScore: 450,
  predictorMidLabel: "State Cutoff (500+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 540) {
      return {
        status: "High Probability (State Quota)",
        text: "Your score is highly competitive. You stand an excellent chance of securing a seat under the Rajasthan State Quota at NIMS Jaipur. Ensure your option entry is prioritized correctly.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Target State counseling Round 1 & 2.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 420) {
      return {
        status: "Good Chance (State / Management Quota)",
        text: "You hold strong eligibility for State Quota counseling rounds and an absolute confirmation threshold for Management Quota allocations at NIMS Jaipur.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Keep options open for both State and Management seats.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 230) {
      return {
        status: "Management Quota Eligible",
        text: "You meet the typical cutoff scores for Management Quota seats at NIMS Jaipur. Strategic choice-filling during the Rajasthan state counseling rounds will be critical.",
        color: "text-amber-900 border-amber-200 bg-amber-50/40",
        quotaAdvice: "Prepare for Management Quota choice entry.",
        btnStyle: "bg-amber-800 hover:bg-amber-900 text-white"
      };
    } else if (score >= 130) {
      return {
        status: "NRI / Residual Seat Pathway",
        text: "You have qualified NEET UG. Admissions will depend heavily on NRI-sponsored quota seats or stray vacancy allocations. Counselling counseling is highly recommended.",
        color: "text-slate-800 border-slate-200 bg-slate-100/50",
        quotaAdvice: "Explore NRI-sponsored pathways and fee structures.",
        btnStyle: "bg-slate-700 hover:bg-slate-800 text-white"
      };
    } else {
      return {
        status: "NEET Qualification Required",
        text: "Your score falls below the estimated NEET qualifying cutoff. Qualifying NEET UG is mandatory for any medical seat registration or allocation in India.",
        color: "text-red-950 border-red-200 bg-red-50/20",
        quotaAdvice: "Consider guidance on NEET improvement or allied health sciences.",
        btnStyle: "bg-red-900 hover:bg-red-950 text-white"
      };
    }
  },
  overviewTitle: "Overview of NATIONAL INSTITUTE OF MEDICAL SCIENCES & RESEARCH, JAIPUR",
  overviewParagraphs: [
  "Established in <strong>2004</strong>, the <strong>National Institute of Medical Sciences and Research (NIMS), Jaipur</strong> is a premier constituent college of NIMS University. Recognized by the <strong>National Medical Commission (NMC)</strong>, the college has established itself as a hub of excellence in healthcare delivery and clinical training in North India.",
  "Situated in a modern, self-contained campus along the Jaipur-Delhi Highway, the college is attached to the 1400+ bedded NIMS Super Specialty Hospital. This heavy-capacity clinical facility ensures that medical undergraduates acquire extensive hands-on experience, bridging theoretical medical concepts with active tertiary patient care."
],
  highlights: [
    {
      title: "Established Year",
      value: "2004",
      desc: "Over two decades of medical training legacy",
      icon: Calendar,
    },
    {
      title: "Affiliated University",
      value: "NIMS University",
      desc: "A leading private university in Rajasthan",
      icon: Building,
    },
    {
      title: "NMC Approval",
      value: "Recognized",
      desc: "Approved by the National Medical Commission",
      icon: ShieldCheck,
    },
    {
      title: "MBBS Intake Matrix",
      value: "250 Seats",
      desc: "One of the largest approved seat intakes in the state",
      icon: Users,
    },
    {
      title: "Hospital Beds",
      value: "1400+ Beds",
      desc: "Advanced multi-specialty tertiary teaching hospital",
      icon: HeartPulse,
    },
    {
      title: "Strategic Location",
      value: "Jaipur",
      desc: "NH-11C, Shobha Nagar, Jaipur-Delhi Highway",
      icon: MapPin,
    },
  ],
  feeStructure: [
    { quota: "State Quota (Government Seats)", annualFee: "₹22,00,000", remark: "Allotted via State merit list for Rajasthan domicile" },
    { quota: "Management Quota (All India Open)", annualFee: "₹28,00,000", remark: "Open to merit candidates from all Indian states" },
    { quota: "NRI / NRI-Sponsored Seats", annualFee: "$48,000 (Approx ₹38.4L)", remark: "Allocated under standard NRI parameters" },
  ],
  feeNotes: [
  "<strong>Hostel Fees:</strong> Range from ₹1,50,000 to ₹3,50,000 per year depending on room occupancy and AC preferences.",
  "<strong>Caution Money:</strong> A one-time refundable caution deposit of ₹1,00,000 is required at joining.",
  "<strong>Bank Guarantee:</strong> Submission of standard college bond formats is required for subsequent years."
],
  cutoffSectionTitle: "Estimated NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "State Quota - General (UR)", scoreRange: "520 - 560 Marks", percentile: "95.5%+" },
    { category: "State Quota - OBC", scoreRange: "490 - 530 Marks", percentile: "93.0%+" },
    { category: "State Quota - SC / ST", scoreRange: "380 - 420 Marks", percentile: "82.0%+" },
    { category: "Management Quota (Open Merit)", scoreRange: "230 - 410 Marks", percentile: "70.0%+" },
  ],
  processSectionTitle: "Admission Counseling Steps",
  admissionSteps: [
    { title: "Qualify NEET UG Exam", desc: "Secure a score above the category-wise qualifying percentile declared by the NTA." },
    { title: "Centralized State Registration", desc: "Register online on the Rajasthan State Medical Counseling Board portal once notification is active." },
    { title: "Option Entry & Choice Filling", desc: "Lock 'National Institute of Medical Sciences & Research, Jaipur' as your preferred choice in choice entry rounds." },
    { title: "Allotment & Verification", desc: "Upon allotment, report to the nodal center for document verification and checking eligibility certificates." },
    { title: "Fee Remittance & Final Joining", desc: "Submit the academic tuition fee, caution money, and bank guarantee to complete enrollment." }
  ],
  facilities: [
    {
      title: "1400+ Bed Teaching Hospital",
      desc: "Attached super-specialty tertiary healthcare center with high daily OPD and specialized clinical departments.",
      icon: HeartPulse,
    },
    {
      title: "Advanced Diagnostics Centre",
      desc: "Equipped with state-of-the-art MRI, CT scanners, digital X-Rays, and fully automated pathology laboratories.",
      icon: Activity,
    },
    {
      title: "Hi-Tech Lecture Halls",
      desc: "Auditorium-style, fully air-conditioned smart classrooms with acoustic systems and interactive boards.",
      icon: BookOpen,
    },
    {
      title: "Centralized Digital Library",
      desc: "Vast repository of print books, national/international medical journals, and dedicated e-learning resource sections.",
      icon: FileText,
    },
    {
      title: "Modern Residential Blocks",
      desc: "Separate secure hostel wings for boys and girls with options for single, double, and triple sharing rooms.",
      icon: Building,
    },
    {
      title: "Recreational & Sports Hub",
      desc: "Large playgrounds, indoor sports complex, and a modern gym facility promoting a healthy campus lifestyle.",
      icon: Sparkles,
    },
  ],
  faqs: [
    {
      q: "Where is NIMS Medical College located?",
      a: "NIMS Medical College (National Institute of Medical Sciences and Research) is located at Shobha Nagar, on the Jaipur-Delhi Highway (NH-11C), Jaipur, Rajasthan - 303121."
    },
    {
      q: "Is NIMS Medical College approved by the NMC?",
      a: "Yes, the MBBS and various postgraduate courses at NIMS Jaipur are fully recognized and approved by the National Medical Commission (NMC), Government of India."
    },
    {
      q: "What is the annual MBBS intake at NIMS Jaipur?",
      a: "NIMS Medical College, Jaipur, has an approved annual intake capacity of 250 seats for the MBBS undergraduate program."
    },
    {
      q: "What is the fee structure for MBBS under the Management Quota?",
      a: "The annual tuition fee for Management Quota seats at NIMS Jaipur is approximately ₹28,00,000. Hostel fees, caution deposits, and examination fees are charged additionally."
    },
    {
      q: "What is the bed capacity of NIMS Hospital?",
      a: "The attached NIMS Super Specialty Hospital is a comprehensive tertiary teaching hospital with a capacity of 1,400+ beds, providing extensive clinical exposure to medical students."
    }
  ],
  formId: "nims",
  quotaOptions: [
  {
    "value": "Govt Quota",
    "label": "Government Quota Seat"
  },
  {
    "value": "Private Seat",
    "label": "Private Open Merit Seat"
  },
  {
    "value": "Management / NRI",
    "label": "Management / NRI Quota"
  }
],
  counselingNote: "Counseling guidelines are subject to official notifications.",
  formDeskLabel: "Registration Desk",
};

export default function NimsJaipurAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_SAFFRON} college={college} />;
}
