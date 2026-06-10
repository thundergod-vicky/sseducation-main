import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_SAFFRON } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "Pacific Medical College Udaipur MBBS Admission 2026 - Fees & Cutoff",
  seoDescription: "Explore MBBS Admission at Pacific Medical College and Hospital (PMCH), Udaipur. Read details on fees, seat intake, cutoffs, and counseling support.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/pacific-medical-college-udaipur-admission-2026/#college",
        "name": "Pacific Medical College and Hospital, Udaipur",
        "alternateName": "PMCH Udaipur",
        "url": "http://www.pacificmedical.ac.in",
        "description": "Pacific Medical College and Hospital is a premier private medical college in Udaipur, approved by the National Medical Commission (NMC).",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bhilon ka Bedla, NH-27",
          "addressLocality": "Udaipur",
          "addressRegion": "Rajasthan",
          "postalCode": "313001",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "PMCH",
  fullName: "PACIFIC MEDICAL COLLEGE & HOSPITAL (PMCH), UDAIPUR",
  hindiName: "प्रशांत चिकित्सा महाविद्यालय एवं अस्पताल, उदयपुर",
  affiliation: "Affiliated with Rajasthan University of Health Sciences (RUHS)",
  location: "Bhilon ka Bedla, NH-27, Udaipur",
  heroTitle: "Pacific Medical College MBBS Admission & Cutoffs Guide",
  heroSubtitle: "Explore Pacific Medical College & Hospital (PMCH), Udaipur. Check verified annual tuition fee matrices, counseling quota structures, category cutoff estimations, and campus diagnostic setups.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "NEET UG 2026 Rajasthan state medical registrations are now active. | PMCH Udaipur seat matrix configurations mapping is live. | Submit details below for instant eligibility review.",
  deanName: "Dr. Ummed Singh Parihar",
  deanDesignation: "Principal & Dean",
  deanQuote: "Welcome to PMCH. We are committed to fostering excellence in medical research and clinical care. Our attached 900+ bed hospital serves as a vital clinical resource, helping students build practical proficiency.",
  contactEmail: "admissions@college.edu.in",
  notices: [
  {
    "text": "PMCH Udaipur MBBS Seat Matrix allocation and choices checklist",
    "date": "June 09, 2026",
    "tag": "SEAT MATRIX"
  },
  {
    "text": "Management quota revised fees parameters and bank bond instructions",
    "date": "June 06, 2026",
    "tag": "FEE MATRIX"
  },
  {
    "text": "Rajasthan state medical counselling choice filling dates locked",
    "date": "June 02, 2026",
    "tag": "COUNSELING"
  },
  {
    "text": "Hostel room allocation options and dining guidelines for new batch",
    "date": "May 25, 2026",
    "tag": "HOSTEL GUIDE"
  }
],
  initialScore: 450,
  predictorMidLabel: "State Cutoff (480+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 500) {
      return {
        status: "High Selection Probability",
        text: "You have a solid score to prioritize State Quota counseling rounds at PMCH Udaipur. Recommended to place PMCH in choice locked preferences.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Target State counseling Round 1 & 2.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 410) {
      return {
        status: "State Quota / Management Quota Eligible",
        text: "You are highly competitive for State Quota allocations and represent an absolute guarantee for Management Quota seats at PMCH Udaipur.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Lock options for both State and Management sheets.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 220) {
      return {
        status: "Management Quota Eligible",
        text: "You qualify perfectly for the open Management Quota seats at Pacific Medical College & Hospital. Strategic choice-filling support is advised.",
        color: "text-amber-900 border-amber-200 bg-amber-50/40",
        quotaAdvice: "Explore Management seats and secure counselling guidance.",
        btnStyle: "bg-amber-800 hover:bg-amber-900 text-white"
      };
    } else if (score >= 130) {
      return {
        status: "NRI / Residual Seat Pathway",
        text: "You have qualified NEET UG. Admission pathways will rely on NRI-sponsored options or stray vacancy round allocations.",
        color: "text-slate-800 border-slate-200 bg-slate-100/50",
        quotaAdvice: "Request NRI quota structure and fee details.",
        btnStyle: "bg-slate-700 hover:bg-slate-800 text-white"
      };
    } else {
      return {
        status: "Qualifying Score Required",
        text: "Your score is below the estimated qualifying NEET threshold. A qualifying NEET score is mandatory for all medical seat allocations in India.",
        color: "text-red-950 border-red-200 bg-red-50/20",
        quotaAdvice: "Consult our advisors for alternative medical choices.",
        btnStyle: "bg-red-900 hover:bg-red-950 text-white"
      };
    }
  },
  overviewTitle: "Overview of PACIFIC MEDICAL COLLEGE & HOSPITAL (PMCH), UDAIPUR",
  overviewParagraphs: [
  "Established in <strong>2014</strong>, the <strong>Pacific Medical College and Hospital (PMCH), Udaipur</strong> is a premier private medical college in Rajasthan. Affiliated with the <strong>Rajasthan University of Health Sciences (RUHS), Jaipur</strong>, the college is fully approved by the <strong>National Medical Commission (NMC)</strong>.",
  "Spanning an expansive urban campus in Udaipur's Bhilon ka Bedla area along the NH-27, PMCH is attached to a 900+ bedded multi-specialty teaching hospital, providing students with substantial diagnostic exposure and hands-on clinical training."
],
  highlights: [
    {
      title: "Established Year",
      value: "2014",
      desc: "Over a decade of academic clinical legacy",
      icon: Calendar,
    },
    {
      title: "Affiliated Body",
      value: "RUHS, Jaipur",
      desc: "Affiliated with Rajasthan University of Health Sciences",
      icon: Building,
    },
    {
      title: "NMC Status",
      value: "Approved",
      desc: "Recognized by National Medical Commission",
      icon: ShieldCheck,
    },
    {
      title: "MBBS Seat Matrix",
      value: "150 Seats",
      desc: "Undergraduate medical seat matrix allocation",
      icon: Users,
    },
    {
      title: "Clinical Support",
      value: "900+ Beds",
      desc: "Attached tertiary multi-specialty teaching hospital",
      icon: HeartPulse,
    },
    {
      title: "Strategic Location",
      value: "Udaipur",
      desc: "Bhilon ka Bedla, NH-27, Udaipur",
      icon: MapPin,
    },
  ],
  feeStructure: [
    { quota: "State Quota (Government Seats)", annualFee: "₹25,00,000", remark: "For Rajasthan Domicile merit-listed candidates" },
    { quota: "Management Quota (All India Open)", annualFee: "₹34,00,000", remark: "Open to merit candidates nationwide" },
  ],
  feeNotes: [
  "<strong>Caution Money:</strong> A one-time refundable caution deposit of ₹3,00,000 is required at admission.",
  "<strong>Hostel Fees:</strong> Range from approximately ₹1,50,000 to ₹3,00,000 per year based on room occupancy.",
  "<strong>Guarantees:</strong> Submission of bank guarantee formats is mandatory as per state directives."
],
  cutoffSectionTitle: "Estimated NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "State Quota - General (UR)", scoreRange: "480 - 520 Marks", percentile: "93.0%+" },
    { category: "State Quota - OBC", scoreRange: "450 - 490 Marks", percentile: "91.0%+" },
    { category: "State Quota - SC / ST", scoreRange: "360 - 390 Marks", percentile: "80.0%+" },
    { category: "Management Quota (Open Merit)", scoreRange: "220 - 350 Marks", percentile: "68.0%+" },
  ],
  processSectionTitle: "Admission Counseling Steps",
  admissionSteps: [
    { title: "Qualify NEET UG Exam", desc: "Ensure you qualify the NEET-UG exam with minimum category percentiles." },
    { title: "State Counselling Registry", desc: "Complete online registrations on the Rajasthan State Medical Counselling board portal." },
    { title: "Lock Selection Choices", desc: "Enter 'Pacific Medical College and Hospital, Udaipur' as a prioritized preference." },
    { title: "Seat Allotment & Audit", desc: "Report for physical verification of original certificates, scorecard, and medical fitness." },
    { title: "Fee Remittance", desc: "Pay the first-year tuition fee, caution money, and file bonds to lock admission." }
  ],
  facilities: [
    {
      title: "900+ Bed Teaching Hospital",
      desc: "Equipped with specialized trauma units, advanced ICUs, and active OPD units for medical student learning.",
      icon: HeartPulse,
    },
    {
      title: "State-of-the-Art Labs",
      desc: "Physiology, Biochemistry, and Pathology laboratory rooms with professional testing machinery.",
      icon: Activity,
    },
    {
      title: "Auditorium Lecture Halls",
      desc: "Smart A/C class configurations with multimedia capabilities and interactive displays.",
      icon: BookOpen,
    },
    {
      title: "Centralized Library",
      desc: "A vast repository of reference manuals, medical journals, e-learning units, and study desks.",
      icon: FileText,
    },
    {
      title: "In-Campus Hostels",
      desc: "Separate secure blocks for boys and girls with options for AC double sharing rooms and standard mess.",
      icon: Building,
    },
    {
      title: "Recreation & Gymnasium",
      desc: "Playgrounds, fitness setups, and indoor sports clubs promoting physical wellness.",
      icon: Sparkles,
    },
  ],
  faqs: [
    {
      q: "Where is Pacific Medical College (PMCH) located?",
      a: "PMCH is located at Bhilon ka Bedla, NH-27, Udaipur, Rajasthan - 313001, highly accessible from Udaipur city."
    },
    {
      q: "Which university is PMCH affiliated with?",
      a: "PMCH is affiliated with the Rajasthan University of Health Sciences (RUHS), Jaipur, which is the main medical university in the state."
    },
    {
      q: "What is the annual MBBS intake at PMCH Udaipur?",
      a: "The college has an approved annual intake capacity of 150 MBBS seats."
    },
    {
      q: "What are the tuition fees for Management Quota seats?",
      a: "The annual tuition fee for Management Quota seats at PMCH Udaipur is approximately ₹34,00,000. Admission cautions and hostel charges are charged additionally."
    },
    {
      q: "What is the bed capacity of the attached hospital?",
      a: "PMCH is attached to a 900+ bedded multi-specialty tertiary care teaching hospital that handles substantial daily clinical flow."
    }
  ],
  formId: "pmch",
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

export default function PacificMedicalUdaipurAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_SAFFRON} college={college} />;
}
