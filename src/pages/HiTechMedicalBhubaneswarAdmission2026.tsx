import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_INDIGO } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "Hi-Tech Medical College Bhubaneswar MBBS Admission 2026 - Fees, Cutoff & Counseling",
  seoDescription: "Explore MBBS Admission at Hi-Tech Medical College & Hospital, Bhubaneswar. Access verified 2026 fees (State/Management), seat matrix, NEET cutoffs, and counseling updates.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/hi-tech-medical-college-bhubaneswar-admission-2026/#college",
        "name": "HI-TECH MEDICAL COLLEGE AND HOSPITAL, BHUBANESWAR",
        "alternateName": "HMCHB",
        "description": "Hi-Tech Medical College & Hospital Bhubaneswar has played a key role in Odisha's private healthcare education. The 650-bed hospital supports massive outpatient clinics.",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Pandara, Bhubaneswar, Odisha",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "HMCHB",
  fullName: "HI-TECH MEDICAL COLLEGE AND HOSPITAL, BHUBANESWAR",
  hindiName: "हाई-टेक मेडिकल कॉलेज, भुवनेश्वर",
  affiliation: "Leading Private Medical Institution in Odisha | Affiliated to OUHS/Utkal University",
  location: "Strategic campus setting",
  heroTitle: "HI-TECH MEDICAL COLLEGE AND HOSPITAL, BHUBANESWAR MBBS Admission Matrix",
  heroSubtitle: "Unlock admission guides for HI-TECH MEDICAL COLLEGE AND HOSPITAL, BHUBANESWAR. Obtain verified state & management quota fee structures, hostel charges, and NEET cutoffs.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "HMCHB MBBS admissions portal is open. | Verify Quotas and fee schedules. | Submit credentials below for eligibility checks.",
  deanName: "Prof. (Dr.) Devanand Mohapatra (Principal)",
  deanDesignation: "Administration",
  deanQuote: "Hi-Tech Medical College & Hospital Bhubaneswar has played a key role in Odisha's private healthcare education. The 650-bed hospital supports massive outpatient clinics.",
  contactEmail: "info@hi-techmedical.org",
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
    if (score >= 530) {
      return {
        status: "High Probability (OJEE State Quota seat)",
        text: "Your score is highly competitive. You stand an excellent chance of securing a State Quota seat at Hi-Tech Bhubaneswar via OJEE state counseling.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Put HMCHB high in your choice entry lists.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 460) {
      return {
        status: "Good Chance (OJEE State / Management Quota)",
        text: "You have decent prospects for State Quota seats, and an outstanding opportunity for Management Quota seats.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Register options for HMCHB in Round 1 & 2.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 300) {
      return {
        status: "High Probability (OJEE Management Quota)",
        text: "You have a solid chance of securing a Management Quota seat in Hi-Tech Medical College Bhubaneswar.",
        color: "text-amber-900 border-amber-200 bg-amber-50/40",
        quotaAdvice: "Target subsequent rounds and keep documentation verified.",
        btnStyle: "bg-amber-800 hover:bg-amber-900 text-white"
      };
    } else if (score >= 137) {
      return {
        status: "NEET Qualified (Target Management / Stray Quotas)",
        text: "You have qualified NEET UG. Admission will require targeting Management Quota or Stray vacancy rounds via OJEE.",
        color: "text-slate-800 border-slate-200 bg-slate-100/50",
        quotaAdvice: "Verify eligibility for special quotas or stray rounds.",
        btnStyle: "bg-slate-700 hover:bg-slate-800 text-white"
      };
    } else {
      return {
        status: "NEET Qualification Required",
        text: "Qualifying NEET UG is mandatory for participating in OJEE counseling and getting admitted.",
        color: "text-red-950 border-red-200 bg-red-50/20",
        quotaAdvice: "Explore NEET score improvement guidelines.",
        btnStyle: "bg-red-900 hover:bg-red-950 text-white"
      };
    }
  },
  overviewTitle: "Overview of HI-TECH MEDICAL COLLEGE AND HOSPITAL, BHUBANESWAR",
  overviewParagraphs: [
  "<strong>HI-TECH MEDICAL COLLEGE AND HOSPITAL, BHUBANESWAR</strong> is a premier healthcare institution, established in <strong>2005</strong>. Renowned for academic excellence and clinical exposure, it is affiliated with <strong>Utkal University / OUHS</strong> and recognized by the <strong>National Medical Commission (NMC)</strong>.",
  "The college campus features state-of-the-art infrastructure, advanced diagnostics, and research setups. The attached teaching hospital handles massive outpatient volumes daily, providing medical students with critical bedside clinical training and practical experience."
],
  highlights: [
    {
      title: "Established Year",
      value: "2005",
      desc: "Proven academic heritage",
      icon: Calendar,
    },
    {
      title: "Affiliated University",
      value: "Utkal University / OUHS",
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
      value: "150 Seats",
      desc: "Annual sanctioned intake",
      icon: Users,
    },
    {
      title: "Hospital Beds",
      value: "650 Beds",
      desc: "Equipped teaching hospital capacity",
      icon: HeartPulse,
    },
    {
      title: "Location",
      value: "Pandara, Bhubaneswar, Odisha",
      desc: "Strategic campus setting",
      icon: MapPin,
    },
  ],
  feeStructure: [
      {
            "quota": "State Quota Fee",
            "annualFee": "₹6,50,000 / Year",
            "remark": "State quota seats fee set by state committee for domicile candidates."
      },
      {
            "quota": "Management Quota Fee",
            "annualFee": "₹11,56,000 / Year",
            "remark": "Management quota fee applicable to candidates via OJEE counseling."
      },
      {
            "quota": "Hostel & Utility Charges",
            "annualFee": "₹1,20,000 / Year",
            "remark": "Basic hostel facility including dining room charges."
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
            "category": "OJEE State Quota (UR)",
            "scoreRange": "530 - 575 Marks",
            "percentile": "92.0%+"
      },
      {
            "category": "OJEE Management Quota",
            "scoreRange": "460 - 525 Marks",
            "percentile": "85.0%+"
      },
      {
            "category": "Reserved State Categories (SC/ST)",
            "scoreRange": "380 - 450 Marks",
            "percentile": "76.0%+"
      }
],
  processSectionTitle: "Admission Counseling Steps",
  admissionSteps: [
      {
            "title": "Qualify NEET UG Exam",
            "desc": "Verify you have qualified NEET UG based on qualifying cutoff marks."
      },
      {
            "title": "Register on OJEE/DMET Portal",
            "desc": "Complete online application registration on ojee.nic.in / dmetodisha.gov.in."
      },
      {
            "title": "Document Verification at Nodal Center",
            "desc": "Complete verification of native domicile, category, and academic certificates physically or online."
      },
      {
            "title": "Choice Preference Locking",
            "desc": "Perform option entry and lock the preferred Odisha private medical college high in priority."
      },
      {
            "title": "College Joining & Fees Clearance",
            "desc": "Report to the allotted campus with your allotment letter, submit fees, and join classes."
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
            "q": "Is HMCHB a recognized medical college?",
            "a": "HI-TECH MEDICAL COLLEGE AND HOSPITAL, BHUBANESWAR is fully recognized by the National Medical Commission (NMC) and affiliated with Utkal University / OUHS."
      },
      {
            "q": "How can I apply for MBBS counseling at HMCHB?",
            "a": "For Deemed quotas, register and lock choices on the MCC portal (mcc.nic.in). For state quotas, apply via OJEE Odisha counseling portals depending on domicile eligibility."
      },
      {
            "q": "Are hostel accommodations mandatory?",
            "a": "While separate hosteling is provided for boys and girls with full amenities, guidelines vary. Check with campus admins for the latest rules."
      },
      {
            "q": "What is the annual intake capacity?",
            "a": "HI-TECH MEDICAL COLLEGE AND HOSPITAL, BHUBANESWAR has an annual intake capacity of 150 Seats for the MBBS program."
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

export default function HiTechMedicalBhubaneswarAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_INDIGO} college={college} />;
}
