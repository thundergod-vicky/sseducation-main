import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_SAFFRON } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "Tantia Medical College Sri Ganganagar MBBS Admission 2026 - Fees & Cutoff",
  seoDescription: "Explore MBBS Admission at Dr. S. S. Tantia Medical College, Hospital and Research Centre, Sri Ganganagar. Fees, seats, cutoffs, and counseling process.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/tantia-medical-college-sri-ganganagar-admission-2026/#college",
        "name": "Dr. S. S. Tantia Medical College, Sri Ganganagar",
        "alternateName": "Tantia Medical College Sri Ganganagar",
        "url": "http://www.drsstantiamch.org",
        "description": "Dr. S. S. Tantia Medical College is a premier private medical college in Sri Ganganagar, constituent under Tantia University, approved by the National Medical Commission (NMC).",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Hanumangarh Road",
          "addressLocality": "Sri Ganganagar",
          "addressRegion": "Rajasthan",
          "postalCode": "335002",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "SSMC",
  fullName: "DR. S. S. TANTIA MEDICAL COLLEGE, Sri Ganganagar",
  hindiName: "डॉ. एस. एस. तांतिया मेडिकल कॉलेज, श्रीगंगानगर",
  affiliation: "Constituent College of Tantia University, Sri Ganganagar",
  location: "Hanumangarh Road, Sri Ganganagar",
  heroTitle: "Tantia Medical College MBBS Admission & Cutoff Guidelines",
  heroSubtitle: "Explore Dr. S. S. Tantia Medical College, Sri Ganganagar. Access validated fee structures, seat matrix configurations, category eligibility parameters, and live Rajasthan NEET cutoff estimations.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "NEET UG 2026 Rajasthan state medical registrations are active. | Tantia Medical College seat matrix allocations mapping is live. | Submit details below for instant eligibility review.",
  deanName: "Dr. Vijay Kumar",
  deanDesignation: "Principal & controller",
  deanQuote: "Welcome to Tantia Medical College. Our mission is to integrate clinical training with deep medical expertise to prepare future practitioners. Our attached 600+ bed hospital provides our students with a rigorous, patient-centered learning platform.",
  contactEmail: "admissions@college.edu.in",
  notices: [
  {
    "text": "Tantia Medical College MBBS Seat Matrix allocation and choice locked preferences",
    "date": "June 09, 2026",
    "tag": "SEAT MATRIX"
  },
  {
    "text": "Management quota fees parameters and bank bond instructions",
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
  predictorMidLabel: "State Cutoff (500+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 520) {
      return {
        status: "Excellent State Merit Score",
        text: "You have a solid chance of securing a State Quota seat at Tantia Medical College, Sri Ganganagar. Placing it high on choice selection lists is suggested.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Target State counseling Round 1 & 2.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 430) {
      return {
        status: "Competitive (State / Management Quota)",
        text: "Highly competitive for State Quota counseling rounds and holds secure thresholds for Management Quota seat allocations at Tantia Medical College.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Keep options locked for both State and Management quota.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 210) {
      return {
        status: "Management Quota Eligible",
        text: "You qualify perfectly for Open Management Quota seats at Tantia Medical College, Sri Ganganagar. Choice locking optimization will be required.",
        color: "text-amber-900 border-amber-200 bg-amber-50/40",
        quotaAdvice: "Prepare choice details for Management Quota seats.",
        btnStyle: "bg-amber-800 hover:bg-amber-900 text-white"
      };
    } else if (score >= 130) {
      return {
        status: "NRI / Residual Seat Pathway",
        text: "Qualified NEET UG. Seat allocations will rely primarily on NRI-sponsored streams or subsequent vacant allocations in stray counseling rounds.",
        color: "text-slate-800 border-slate-200 bg-slate-100/50",
        quotaAdvice: "Consult for NRI quota requirements and fee status.",
        btnStyle: "bg-slate-700 hover:bg-slate-800 text-white"
      };
    } else {
      return {
        status: "Qualifying Score Required",
        text: "Your score is below the estimated qualifying NEET cutoff. Qualifying NEET UG is mandatory for any medical seat registration or allocation in India.",
        color: "text-red-950 border-red-200 bg-red-50/20",
        quotaAdvice: "Connect for NEET improvement recommendations.",
        btnStyle: "bg-red-900 hover:bg-red-950 text-white"
      };
    }
  },
  overviewTitle: "Overview of DR. S. S. TANTIA MEDICAL COLLEGE, Sri Ganganagar",
  overviewParagraphs: [
  "Established in <strong>2021</strong>, the <strong>Dr. S. S. Tantia Medical College, Hospital & Research Centre, Sri Ganganagar</strong> is a constituent unit of Tantia University. Approved by the <strong>National Medical Commission (NMC)</strong>, it is a premier private medical college in North Rajasthan.",
  "Spanning a modern and vast campus at Hanumangarh Road, Sri Ganganagar, the college is attached to the 600+ bedded teaching hospital (Jan Sewa Hospital / Tantia General Hospital). This advanced clinical core exposes medical students to a robust volume of diagnostics and patient flow daily."
],
  highlights: [
    {
      title: "Established Year",
      value: "2021",
      desc: "Modern medical training facility in Sri Ganganagar",
      icon: Calendar,
    },
    {
      title: "Affiliated Body",
      value: "Tantia University",
      desc: "Constituent college under Tantia University",
      icon: Building,
    },
    {
      title: "NMC Approval",
      value: "Recognized",
      desc: "Approved by National Medical Commission",
      icon: ShieldCheck,
    },
    {
      title: "MBBS Seat Matrix",
      value: "150 Seats",
      desc: "Undergraduate MBBS seat matrix allocation",
      icon: Users,
    },
    {
      title: "Clinical Support",
      value: "600+ Beds",
      desc: "Attached high-capacity hospital (Jan Sewa Hospital)",
      icon: HeartPulse,
    },
    {
      title: "Strategic Location",
      value: "Sri Ganganagar",
      desc: "Hanumangarh Road, Sri Ganganagar",
      icon: MapPin,
    },
  ],
  feeStructure: [
    { quota: "State Quota (Government Seats)", annualFee: "₹22,25,000", remark: "For Rajasthan Domicile merit-listed candidates" },
    { quota: "Management Quota (All India Open)", annualFee: "₹29,25,000", remark: "Open to merit candidates nationwide" },
    { quota: "NRI / Sponsored Quota", annualFee: "₹31,50,000", remark: "Standard NRI parameters apply" },
  ],
  feeNotes: [
  "<strong>Caution Money:</strong> A one-time refundable caution deposit of ₹1,00,000 is required at admission.",
  "<strong>Hostel Fees:</strong> Range from ₹1,50,000 to ₹3,00,000 per year based on room occupancy.",
  "<strong>Bonds:</strong> Submission of standard college bond formats is required for subsequent years."
],
  cutoffSectionTitle: "Estimated NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "State Quota - General (UR)", scoreRange: "500 - 540 Marks", percentile: "93.5%+" },
    { category: "State Quota - OBC", scoreRange: "470 - 510 Marks", percentile: "91.5%+" },
    { category: "State Quota - SC / ST", scoreRange: "370 - 400 Marks", percentile: "81.0%+" },
    { category: "Management Quota (Open Merit)", scoreRange: "210 - 370 Marks", percentile: "68.0%+" },
  ],
  processSectionTitle: "Admission Counseling Steps",
  admissionSteps: [
    { title: "Appear & Qualify NEET", desc: "Secure the category-wise qualifying percentile in the NTA NEET-UG exam." },
    { title: "State Counselling Registry", desc: "Complete registrations on the Rajasthan State Medical Counselling board portal." },
    { title: "Lock Selection Preferences", desc: "Select 'Dr. S. S. Tantia Medical College' as your prioritized choice." },
    { title: "Allotment Verification", desc: "Report to designated units with scorecards, domicile certificates, and physical fitness proof." },
    { title: "Fee Remittance & Enrolment", desc: "Pay the annual tuition fee, security cautions, and final bank guarantees." }
  ],
  facilities: [
    {
      title: "600+ Bed Teaching Hospital",
      desc: "Attached modern teaching hospital (Jan Sewa Hospital) with heavy OPD flow and specialized clinical wards.",
      icon: HeartPulse,
    },
    {
      title: "Diagnostics Centre",
      desc: "Modern diagnostic labs, MRI/CT scanners, and digital imaging machinery.",
      icon: Activity,
    },
    {
      title: "Hi-Tech Smart Classrooms",
      desc: "A/C lecture auditoriums featuring acoustic sound setups and interactive screens.",
      icon: BookOpen,
    },
    {
      title: "Centralized Digital Library",
      desc: "Vast collections of reference books, international journals, and e-learning zones.",
      icon: FileText,
    },
    {
      title: "In-Campus Hostels",
      desc: "Separate secure blocks for boys and girls with AC/Non-AC layouts and standard mess.",
      icon: Building,
    },
    {
      title: "Sports Complex & Gym",
      desc: "Playgrounds, fitness setups, and indoor sports clubs promoting physical health.",
      icon: Sparkles,
    },
  ],
  faqs: [
    {
      q: "Where is Tantia Medical College located?",
      a: "The college campus is located at Hanumangarh Road, Sri Ganganagar, Rajasthan - 335002."
    },
    {
      q: "Which university is Tantia Medical College affiliated with?",
      a: "Tantia Medical College is a constituent college of Tantia University, Sri Ganganagar."
    },
    {
      q: "What is the annual MBBS intake at Tantia Medical College?",
      a: "The approved annual intake capacity is 150 MBBS seats."
    },
    {
      q: "What is the tuition fee structure for MBBS under the Management Quota?",
      a: "The annual tuition fee for Management Quota seats is approximately ₹29,25,000. Hostel fees and caution deposits are charged additionally."
    },
    {
      q: "Is there a caution deposit at the time of admission?",
      a: "Yes, a refundable caution deposit of ₹1,00,000 is required at admission."
    }
  ],
  formId: "tantia",
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

export default function TantiaSriGanganagarAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_SAFFRON} college={college} />;
}
