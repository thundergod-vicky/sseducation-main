import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_CRIMSON } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "PSG Medical College Coimbatore MBBS Admission 2026 - Fees, Cutoff & Counseling",
  seoDescription: "Explore MBBS Admission at PSG Institute of Medical Sciences and Research, Coimbatore. Access verified 2026 fees (Govt/Management), seat matrix, NEET cutoffs, and counseling updates.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/psg-institute-of-medical-sciences-coimbatore-admission-2026/#college",
        "name": "PSG INSTITUTE OF MEDICAL SCIENCES AND RESEARCH",
        "alternateName": "PSG",
        "description": "PSGIMSR is synonymous with top-tier research and academic rigor. The 1350-bed PSG Hospitals has heavy patient flow, offering excellent bedside clinical training.",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Peelamedu, Coimbatore, Tamil Nadu",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "PSG",
  fullName: "PSG INSTITUTE OF MEDICAL SCIENCES AND RESEARCH",
  hindiName: "पीएसजी इंस्टीट्यूट ऑफ मेडिकल साइंसेज, कोयंबटूर",
  affiliation: "Highly Reputed Private Medical College in TN | Affiliated to WBUHS/MGR University",
  location: "Strategic campus setting",
  heroTitle: "PSG INSTITUTE OF MEDICAL SCIENCES AND RESEARCH MBBS Admission Matrix",
  heroSubtitle: "Unlock admission guides for PSG INSTITUTE OF MEDICAL SCIENCES AND RESEARCH. Obtain verified state & management quota fee structures, hostel charges, and NEET cutoffs.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "PSG MBBS admissions portal is open. | Verify Quotas and fee schedules. | Submit credentials below for eligibility checks.",
  deanName: "Dr. T. M. SubbaRao (Principal)",
  deanDesignation: "Administration",
  deanQuote: "PSGIMSR is synonymous with top-tier research and academic rigor. The 1350-bed PSG Hospitals has heavy patient flow, offering excellent bedside clinical training.",
  contactEmail: "principal@psgimsr.ac.in",
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
    if (score >= 580) {
      return {
        status: "High Probability (DME TN State Quota)",
        text: "Your score is competitive. You stand an excellent chance of securing a State Quota seat at PSG Coimbatore via DME state counseling.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Put PSG high in your choice entry lists.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 490) {
      return {
        status: "Good Chance (DME TN Management Quota)",
        text: "You have solid prospects for Management Quota seats. Lock PSG Coimbatore in your DME management choice entry.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Register options for PSG in Round 1 & 2.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 350) {
      return {
        status: "Qualified (Target Management Quota Rounds)",
        text: "Your score qualifies you. You should register for DME Tamil Nadu Management Quota seats.",
        color: "text-amber-900 border-amber-200 bg-amber-50/40",
        quotaAdvice: "Target subsequent rounds and keep documentation verified.",
        btnStyle: "bg-amber-800 hover:bg-amber-900 text-white"
      };
    } else if (score >= 137) {
      return {
        status: "NEET Qualified (Target NRI Quota or Stray)",
        text: "You have qualified NEET. Target NRI Quota registration or subsequent stray vacancy lists.",
        color: "text-slate-800 border-slate-200 bg-slate-100/50",
        quotaAdvice: "Verify eligibility for special quotas or stray rounds.",
        btnStyle: "bg-slate-700 hover:bg-slate-800 text-white"
      };
    } else {
      return {
        status: "NEET Qualification Required",
        text: "Qualifying NEET UG is mandatory to participate in DME Tamil Nadu counseling.",
        color: "text-red-950 border-red-200 bg-red-50/20",
        quotaAdvice: "Explore NEET score improvement guidelines.",
        btnStyle: "bg-red-900 hover:bg-red-950 text-white"
      };
    }
  },
  overviewTitle: "Overview of PSG INSTITUTE OF MEDICAL SCIENCES AND RESEARCH",
  overviewParagraphs: [
  "<strong>PSG INSTITUTE OF MEDICAL SCIENCES AND RESEARCH</strong> is a premier healthcare institution, established in <strong>1985</strong>. Renowned for academic excellence and clinical exposure, it is affiliated with <strong>The Tamil Nadu Dr. M.G.R. Medical University</strong> and recognized by the <strong>National Medical Commission (NMC)</strong>.",
  "The college campus features state-of-the-art infrastructure, advanced diagnostics, and research setups. The attached teaching hospital handles massive outpatient volumes daily, providing medical students with critical bedside clinical training and practical experience."
],
  highlights: [
    {
      title: "Established Year",
      value: "1985",
      desc: "Proven academic heritage",
      icon: Calendar,
    },
    {
      title: "Affiliated University",
      value: "The Tamil Nadu Dr. M.G.R. Medical University",
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
      value: "250 Seats",
      desc: "Annual sanctioned intake",
      icon: Users,
    },
    {
      title: "Hospital Beds",
      value: "1,350 Beds",
      desc: "Equipped teaching hospital capacity",
      icon: HeartPulse,
    },
    {
      title: "Location",
      value: "Peelamedu, Coimbatore, Tamil Nadu",
      desc: "Strategic campus setting",
      icon: MapPin,
    },
  ],
  feeStructure: [
      {
            "quota": "DME State Quota Fee",
            "annualFee": "₹4,50,000 / Year",
            "remark": "Government quota fee for private college seats. Regulated by state committee."
      },
      {
            "quota": "DME Management Quota Fee",
            "annualFee": "₹12,50,000 / Year",
            "remark": "Management quota tuition fee for open category candidates."
      },
      {
            "quota": "NRI Quota Fee",
            "annualFee": "₹24,50,000 / Year",
            "remark": "NRI quota tuition fee for NRI sponsored candidates."
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
            "category": "DME TN State Quota (UR)",
            "scoreRange": "580 - 625 Marks",
            "percentile": "96.8%+"
      },
      {
            "category": "DME TN Management Quota",
            "scoreRange": "490 - 575 Marks",
            "percentile": "90.0%+"
      },
      {
            "category": "Reserved State Quotas (BC/MBC)",
            "scoreRange": "480 - 560 Marks",
            "percentile": "88.0%+"
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
            "q": "Is PSG a recognized medical college?",
            "a": "PSG INSTITUTE OF MEDICAL SCIENCES AND RESEARCH is fully recognized by the National Medical Commission (NMC) and affiliated with The Tamil Nadu Dr. M.G.R. Medical University."
      },
      {
            "q": "How can I apply for MBBS counseling at PSG?",
            "a": "For Deemed quotas, register and lock choices on the MCC portal (mcc.nic.in). For state quotas, apply via DME Tamil Nadu counseling portals depending on domicile eligibility."
      },
      {
            "q": "Are hostel accommodations mandatory?",
            "a": "While separate hosteling is provided for boys and girls with full amenities, guidelines vary. Check with campus admins for the latest rules."
      },
      {
            "q": "What is the annual intake capacity?",
            "a": "PSG INSTITUTE OF MEDICAL SCIENCES AND RESEARCH has an annual intake capacity of 250 Seats for the MBBS program."
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

export default function PsgMedicalCoimbatoreAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_CRIMSON} college={college} />;
}
