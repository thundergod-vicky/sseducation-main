import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_SAFFRON } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "Geetanjali Medical College Udaipur MBBS Admission 2026 - Fees & Cutoff",
  seoDescription: "Discover MBBS Admission at Geetanjali Medical College & Hospital (GMCH), Udaipur. Explore fee matrix, NMC seats, cutoffs, and Rajasthan counseling support.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/geetanjali-medical-college-udaipur-admission-2026/#college",
        "name": "Geetanjali Medical College and Hospital, Udaipur",
        "alternateName": "GMCH Udaipur",
        "url": "https://www.geetanjaliuniversity.com",
        "description": "Geetanjali Medical College and Hospital is a premier private medical college in Udaipur, approved by the National Medical Commission (NMC).",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Hiranmagri Extension, Manwakhera, NH-8 Bypass",
          "addressLocality": "Udaipur",
          "addressRegion": "Rajasthan",
          "postalCode": "313002",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "GMCH",
  fullName: "GEETANJALI MEDICAL COLLEGE & HOSPITAL (GMCH), UDAIPUR",
  hindiName: "गीतांजलि मेडिकल कॉलेज एवं अस्पताल, उदयपुर",
  affiliation: "Constituent College of Geetanjali University, Udaipur",
  location: "Manwakhera Campus, Udaipur City Bypass",
  heroTitle: "Geetanjali Medical College MBBS Admission & Counselling Guide",
  heroSubtitle: "Explore Geetanjali Medical College & Hospital, Udaipur. Access verified annual tuition fee matrices, counseling quota structures, category cutoff estimations, and campus diagnostic setups.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "NEET UG 2026 Rajasthan state medical registrations are now active. | GMCH Udaipur seat matrix configurations mapping is live. | Submit details below for instant eligibility review.",
  deanName: "Dr. Sangita Gupta",
  deanDesignation: "Dean & Principal",
  deanQuote: "Welcome to Geetanjali Medical College & Hospital. Our mission is to integrate clinical science with absolute compassion to prepare future practitioners. With 1420+ beds in our attached hospital, our students gain exposure across a massive range of tertiary cases.",
  contactEmail: "admissions@college.edu.in",
  notices: [
  {
    "text": "GMCH Udaipur MBBS Seat Matrix locking and allocation criteria",
    "date": "June 09, 2026",
    "tag": "SEAT MATRIX"
  },
  {
    "text": "Estimated tuition fees structure revision and NRI criteria guidelines",
    "date": "June 06, 2026",
    "tag": "FEE STRUCTURE"
  },
  {
    "text": "Rajasthan NEET UG State choice entry process and list locking",
    "date": "June 01, 2026",
    "tag": "COUNSELING"
  },
  {
    "text": "Hostel room pre-booking details and configurations for new batch",
    "date": "May 25, 2026",
    "tag": "HOSTEL GUIDE"
  }
],
  initialScore: 460,
  predictorMidLabel: "State Cutoff (520+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 540) {
      return {
        status: "Excellent State Merit Score",
        text: "You have a superb score matrix to target State Quota rounds at Geetanjali Medical College, Udaipur. Recommended to keep GMCH Udaipur as a leading preference.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Target State counseling Round 1.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 430) {
      return {
        status: "Competitive (State / Management Quota)",
        text: "Highly competitive for State Quota counseling rounds and holds secure thresholds for Management Quota seat allocations at Geetanjali Medical College.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Submit options for both State and Management sheets.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 230) {
      return {
        status: "Management Quota Eligible",
        text: "You qualify perfectly for Open Management Quota seats at Geetanjali Medical College, Udaipur. Choice entry needs structural optimization.",
        color: "text-amber-900 border-amber-200 bg-amber-50/40",
        quotaAdvice: "Prepare choice details for Management Quota seats.",
        btnStyle: "bg-amber-800 hover:bg-amber-900 text-white"
      };
    } else if (score >= 130) {
      return {
        status: "NRI / Sponsored Pathway",
        text: "Qualified NEET UG. Seat options will rely primarily on NRI-sponsored streams or late vacancy counseling maps. Strategic counsel is recommended.",
        color: "text-slate-800 border-slate-200 bg-slate-100/50",
        quotaAdvice: "Seek detailed NRI fee structure guidelines.",
        btnStyle: "bg-slate-700 hover:bg-slate-800 text-white"
      };
    } else {
      return {
        status: "Qualifying Score Needed",
        text: "Your score is below the estimated qualifying NEET cutoff. A qualifying score is mandatory for any medical seat allocation processes in India.",
        color: "text-red-950 border-red-200 bg-red-50/20",
        quotaAdvice: "Seek guidance for NEET UG mock planning or alternative paths.",
        btnStyle: "bg-red-900 hover:bg-red-950 text-white"
      };
    }
  },
  overviewTitle: "Overview of GEETANJALI MEDICAL COLLEGE & HOSPITAL (GMCH), UDAIPUR",
  overviewParagraphs: [
  "Founded in <strong>2008</strong>, the <strong>Geetanjali Medical College and Hospital (GMCH), Udaipur</strong> is one of the premier private medical colleges in Rajasthan and North India. As a constituent unit of Geetanjali University, the college is fully approved by the <strong>National Medical Commission (NMC)</strong>.",
  "Spanning a vast modern campus in Udaipur's Hiranmagri Extension corridor, GMCH is attached to a 1420+ bedded super-specialty tertiary care teaching hospital, ensuring students gain extensive hands-on experience and diagnosis logic across various specialized departments."
],
  highlights: [
    {
      title: "Established Year",
      value: "2008",
      desc: "Long-standing legacy of medical pedagogy",
      icon: Calendar,
    },
    {
      title: "Affiliation",
      value: "Geetanjali University",
      desc: "Constituent college of a prominent private university",
      icon: Building,
    },
    {
      title: "NMC Status",
      value: "Approved",
      desc: "Fully approved by National Medical Commission",
      icon: ShieldCheck,
    },
    {
      title: "MBBS Intake Capacity",
      value: "250 Seats",
      desc: "Sanctioned undergraduate medical seats",
      icon: Users,
    },
    {
      title: "Clinical Base",
      value: "1420+ Beds",
      desc: "Attached super-specialty hospital with strong OPD volume",
      icon: HeartPulse,
    },
    {
      title: "Strategic Location",
      value: "Udaipur",
      desc: "Manwakhera Campus, Udaipur City Bypass",
      icon: MapPin,
    },
  ],
  feeStructure: [
    { quota: "State Quota (Government Seats)", annualFee: "₹22,00,000", remark: "For Rajasthan Domicile merit-listed candidates" },
    { quota: "Management Quota (All India Open)", annualFee: "₹29,00,000", remark: "Open to merit candidates nationwide" },
    { quota: "NRI / Sponsored Quota", annualFee: "$48,000 (Approx ₹38.4L)", remark: "Standard NRI parameters apply" },
  ],
  feeNotes: [
  "<strong>Security Caution Money:</strong> A one-time refundable security caution fee of ₹2,00,000 is due at admission.",
  "<strong>Hostel Charges:</strong> Double sharing AC configurations range from ₹2,50,000 to ₹3,50,000 per year.",
  "<strong>Bond Guarantees:</strong> Submission of bank guarantee format directives is standard for subsequent years."
],
  cutoffSectionTitle: "Estimated NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "State Quota - General (UR)", scoreRange: "520 - 565 Marks", percentile: "95.0%+" },
    { category: "State Quota - OBC", scoreRange: "490 - 530 Marks", percentile: "92.5%+" },
    { category: "State Quota - SC / ST", scoreRange: "390 - 420 Marks", percentile: "82.5%+" },
    { category: "Management Quota (Open Merit)", scoreRange: "230 - 390 Marks", percentile: "70.0%+" },
  ],
  processSectionTitle: "Admission Counseling Steps",
  admissionSteps: [
    { title: "Qualify NEET UG Exam", desc: "Secure a score above the category-wise qualifying percentile declared by NTA." },
    { title: "Centralized State Registrations", desc: "Register on the Rajasthan State Medical Counselling board portal as an active candidate." },
    { title: "Exercise Preference Choice", desc: "Lock 'Geetanjali Medical College, Udaipur' as your prioritized selection option." },
    { title: "Allotment Verification", desc: "Report to designated counseling verification units with original certificates and score sheets." },
    { title: "Fee Payment & Joining", desc: "Submit the annual tuition fee, security cautions, and final bank guarantees." }
  ],
  facilities: [
    {
      title: "1420+ Bed Teaching Hospital",
      desc: "State-of-the-art super-specialty departments and critical care units offering intense clinical exposure.",
      icon: HeartPulse,
    },
    {
      title: "Advanced Pathology & Research Labs",
      desc: "Fully automated laboratories supporting student clinical experiments and university research.",
      icon: Activity,
    },
    {
      title: "A/C Smart Classrooms",
      desc: "Smart lecture complex hubs featuring high-end digital audio-visual teaching aids.",
      icon: BookOpen,
    },
    {
      title: "Integrated Central Library",
      desc: "Spanning thousands of square feet, equipped with international journal indices, high-speed Wi-Fi, and cubicles.",
      icon: FileText,
    },
    {
      title: "Premium Residential Hostels",
      desc: "Separate, secure blocks for male and female students featuring dining complexes and recreational lounges.",
      icon: Building,
    },
    {
      title: "Elite Sports Complex",
      desc: "Large playfields, indoor games club, and fully-equipped fitness gymnasium.",
      icon: Sparkles,
    },
  ],
  faqs: [
    {
      q: "Where is Geetanjali Medical College located?",
      a: "GMCH Udaipur is located in Hiranmagri Extension, Manwakhera, NH-8 Bypass, Udaipur, Rajasthan - 313002."
    },
    {
      q: "Is NEET qualification mandatory for admission at GMCH Udaipur?",
      a: "Yes, NEET UG qualification is strictly mandatory for all medical admissions in India across all categories and quotas."
    },
    {
      q: "What is the annual MBBS intake capacity at GMCH Udaipur?",
      a: "The college has an approved annual intake capacity of 250 MBBS seats per academic session."
    },
    {
      q: "What university is Geetanjali Medical College affiliated with?",
      a: "It is a constituent college of Geetanjali University, Udaipur, which is a recognized private medical university."
    },
    {
      q: "Are hostel accommodations mandatory for MBBS students?",
      a: "Yes, because of the intensive curriculum and clinical schedules, students are generally required to reside in the secure in-campus hostels."
    }
  ],
  formId: "geetanjali",
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

export default function GeetanjaliUdaipurAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_SAFFRON} college={college} />;
}
