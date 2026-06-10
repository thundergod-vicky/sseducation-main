import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_ROYAL } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "CMC Vellore MBBS Admission 2026 - Fees, Cutoff & Counseling",
  seoDescription: "Explore MBBS Admission at Christian Medical College (CMC), Vellore. Access verified 2026 fees, admission guidelines, seat allocation matrix, NEET cutoffs, and counseling updates.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/christian-medical-college-vellore-admission-2026/#college",
        "name": "CHRISTIAN MEDICAL COLLEGE, VELLORE",
        "alternateName": "CMC",
        "description": "CMC Vellore is committed to raising medical professionals with a spirit of service. Our network of hospitals handles millions of patients yearly, offering unrivaled clinical learning.",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Vellore, Tamil Nadu",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "CMC",
  fullName: "CHRISTIAN MEDICAL COLLEGE, VELLORE",
  hindiName: "क्रिश्चियन मेडिकल कॉलेज, वेल्लोर",
  affiliation: "One of India's Most Prestigious Medical Colleges | Affiliated to TN Dr. M.G.R. Medical University",
  location: "Strategic campus setting",
  heroTitle: "CHRISTIAN MEDICAL COLLEGE, VELLORE MBBS Admission Matrix",
  heroSubtitle: "Unlock admission guides for CHRISTIAN MEDICAL COLLEGE, VELLORE. Obtain verified state & management quota fee structures, hostel charges, and NEET cutoffs.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "CMC MBBS admissions portal is open. | Verify Quotas and fee schedules. | Submit credentials below for eligibility checks.",
  deanName: "Dr. Solomon Sathishkumar",
  deanDesignation: "Administration",
  deanQuote: "CMC Vellore is committed to raising medical professionals with a spirit of service. Our network of hospitals handles millions of patients yearly, offering unrivaled clinical learning.",
  contactEmail: "principal@cmcvellore.ac.in",
  notices: [
  {
    "text": "MBBS Seat Allocation Matrix details and counseling guidelines",
    "date": "June 09, 2026",
    "tag": "SEAT MATRIX"
  },
  {
    "text": "Detailed Tuition Fee Breakdown and additional annual charges",
    "date": "June 06, 2026",
    "tag": "FEE GUIDE"
  },
  {
    "text": "Official counseling registration schedule and eligibility updates",
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
  predictorMidLabel: "Merit Quota (500+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 660) {
      return {
        status: "High Probability (DME TN Open Quota)",
        text: "Your score is extremely competitive. You stand a great chance for open merit seats at CMC Vellore.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Put CMC high in your choice entry lists.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 610) {
      return {
        status: "Good Chance (Network / Minority / Institutional Quota)",
        text: "You stand a solid chance under the Minority Network or Staff sponsorship quotas. Ensure your sponsorships are registered properly.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Register options for CMC in Round 1 & 2.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 500) {
      return {
        status: "Qualified (Target stray rounds / sponsorships)",
        text: "You have a chance under specific institutional network seats. Keep detailed check on allotment lists.",
        color: "text-amber-900 border-amber-200 bg-amber-50/40",
        quotaAdvice: "Target subsequent rounds and keep documentation verified.",
        btnStyle: "bg-amber-800 hover:bg-amber-900 text-white"
      };
    } else if (score >= 137) {
      return {
        status: "Qualified (Service Obligation Seats)",
        text: "You have qualified NEET UG. Admissions to CMC Vellore will be highly competitive, requiring network registration and service agreement.",
        color: "text-slate-800 border-slate-200 bg-slate-100/50",
        quotaAdvice: "Verify eligibility for special quotas or stray rounds.",
        btnStyle: "bg-slate-700 hover:bg-slate-800 text-white"
      };
    } else {
      return {
        status: "NEET Qualification Required",
        text: "Qualifying NEET UG is mandatory for participating in DME Tamil Nadu counseling and CMC Vellore admission.",
        color: "text-red-950 border-red-200 bg-red-50/20",
        quotaAdvice: "Explore NEET score improvement guidelines.",
        btnStyle: "bg-red-900 hover:bg-red-950 text-white"
      };
    }
  },
  overviewTitle: "Overview of CHRISTIAN MEDICAL COLLEGE, VELLORE",
  overviewParagraphs: [
  "<strong>CHRISTIAN MEDICAL COLLEGE, VELLORE</strong> is a premier healthcare institution, established in <strong>1918</strong>. Renowned for academic excellence and clinical exposure, it is affiliated with <strong>TN Dr. M.G.R. Medical University</strong> and recognized by the <strong>National Medical Commission (NMC)</strong>.",
  "The college campus features state-of-the-art infrastructure, advanced diagnostics, and research setups. The attached teaching hospital handles massive outpatient volumes daily, providing medical students with critical bedside clinical training and practical experience."
],
  highlights: [
    {
      title: "Established Year",
      value: "1918",
      desc: "Proven academic heritage",
      icon: Calendar,
    },
    {
      title: "Affiliated University",
      value: "TN Dr. M.G.R. Medical University",
      desc: "Recognized affiliation",
      icon: Building,
    },
    {
      title: "NMC Approval",
      value: "Recognized by NMC",
      desc: "Approved under National Medical Commission",
      icon: ShieldCheck,
    },
    {
      title: "MBBS Intake Matrix",
      value: "100 Seats",
      desc: "Annual sanctioned intake",
      icon: Users,
    },
    {
      title: "Hospital Beds",
      value: "3,800 Beds",
      desc: "Equipped teaching hospital capacity",
      icon: HeartPulse,
    },
    {
      title: "Location",
      value: "Vellore, Tamil Nadu",
      desc: "Strategic campus setting",
      icon: MapPin,
    },
  ],
  feeStructure: [
      {
            "quota": "Tuition Fee",
            "annualFee": "₹3,000 / Year",
            "remark": "Highly subsidized tuition fee structure."
      },
      {
            "quota": "First Year Total College Fee",
            "annualFee": "₹52,830 Total",
            "remark": "Includes one-time admission fees, university fees, and deposits."
      },
      {
            "quota": "Hostel & Mess Fee",
            "annualFee": "~₹35,000 / Year",
            "remark": "Nominal room rent and shared messing system charges."
      }
],
  feeNotes: [
  "<strong>Security Deposit:</strong> Minor security caution deposits apply at admission (refundable).",
  "<strong>Hostel & Boarding:</strong> Accommodations charges apply depending on AC or sharing preferences.",
  "<strong>Counselling Rule:</strong> All payments must go through official counseling bank drafts or portals."
],
  cutoffSectionTitle: "Estimated NEET UG Cutoff Ranges",
  cutoffs: [
      {
            "category": "DME TN Merit Seats (Open)",
            "scoreRange": "670 - 705 Marks",
            "percentile": "99.8%+"
      },
      {
            "category": "Minority / Network Quotas",
            "scoreRange": "610 - 665 Marks",
            "percentile": "97.5%+"
      },
      {
            "category": "SC / ST Category Quota",
            "scoreRange": "560 - 605 Marks",
            "percentile": "94.0%+"
      }
],
  processSectionTitle: "Admission Counseling Steps",
  admissionSteps: [
      {
            "title": "Qualify NEET UG Exam",
            "desc": "Secure a score meeting or exceeding the qualifying NEET cutoff marks published by the NTA."
      },
      {
            "title": "Register on TN Selection Portal",
            "desc": "Complete registration on tnmedicalselection.net for State Quota and/or Management Quota."
      },
      {
            "title": "Submit Document Verification",
            "desc": "Provide verified copies of categories, domicile, and academic marksheets to the selection committee."
      },
      {
            "title": "Choice Entry and Locking",
            "desc": "Lock options placing the preferred Tamil Nadu medical college high in your rank selection list."
      },
      {
            "title": "Physical Reporting",
            "desc": "Pay first-year fees online/draft and report physically to the medical college campus to finalize joining."
      }
],
  facilities: [
    {
      title: "Super-Specialty Teaching Hospital",
      desc: "Large tertiary care center with massive patient volumes and specialty medical chambers for clinical bedside experience.",
      icon: HeartPulse,
    },
    {
      title: "Simulation & Skill Laboratories",
      desc: "Equipped simulation spaces, dissection labs, and pathology setups promoting practical excellence.",
      icon: Activity,
    },
    {
      title: "Air-Conditioned Lecture Theaters",
      desc: "Acoustically tuned amphitheatres equipped with screen projection and smart learning systems.",
      icon: BookOpen,
    },
    {
      title: "Rich Central Library",
      desc: "Extensive shelves of medical journals, clinical manuals, text reserves, and electronic databases.",
      icon: FileText,
    },
    {
      title: "Secure Student Housing",
      desc: "Separate, guarded residential quarters for male and female students with basic amenities.",
      icon: Building,
    },
    {
      title: "Recreational & Gym Complex",
      desc: "Outdoor play courts, indoor sports arenas, and fitness centers promoting student health.",
      icon: Sparkles,
    },
  ],
  faqs: [
      {
            "q": "Is CMC a recognized medical college?",
            "a": "CHRISTIAN MEDICAL COLLEGE, VELLORE is fully recognized by the National Medical Commission (NMC) and affiliated with TN Dr. M.G.R. Medical University."
      },
      {
            "q": "How can I apply for MBBS counseling at CMC?",
            "a": "For Deemed quotas, register and lock choices on the MCC portal (mcc.nic.in). For state quotas, apply via DME Tamil Nadu counseling portals depending on domicile eligibility."
      },
      {
            "q": "Are hostel accommodations mandatory?",
            "a": "While separate hosteling is provided for boys and girls with full amenities, guidelines vary. Check with campus admins for the latest rules."
      },
      {
            "q": "What is the annual intake capacity?",
            "a": "CHRISTIAN MEDICAL COLLEGE, VELLORE has an annual intake capacity of 100 Seats for the MBBS program."
      }
],
  formId: "lead",
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

export default function CmcVelloreAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_ROYAL} college={college} />;
}
