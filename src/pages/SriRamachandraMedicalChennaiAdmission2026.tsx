import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_CRIMSON } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "Sri Ramachandra Medical College Chennai MBBS Admission 2026 - Fees, Cutoff & Counseling",
  seoDescription: "Explore MBBS Admission at Sri Ramachandra Medical College and Research Institute, Chennai. Access verified 2026 fees, seat allocation matrix, NEET cutoffs, and counseling updates.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/sri-ramachandra-medical-college-chennai-admission-2026/#college",
        "name": "SRI RAMACHANDRA MEDICAL COLLEGE AND RESEARCH INSTITUTE",
        "alternateName": "SRMC",
        "description": "SRMC has stood as a hallmark of clinical and academic excellence for over three decades. Our 1,800-bed super-specialty hospital provides extensive patient interaction.",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Porur, Chennai, Tamil Nadu",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "SRMC",
  fullName: "SRI RAMACHANDRA MEDICAL COLLEGE AND RESEARCH INSTITUTE",
  hindiName: "श्री रामचंद्र मेडिकल कॉलेज, चेन्नई",
  affiliation: "Premier Medical Institute & Deemed University | Affiliated with SRHER",
  location: "Strategic campus setting",
  heroTitle: "SRI RAMACHANDRA MEDICAL COLLEGE AND RESEARCH INSTITUTE MBBS Admission Matrix",
  heroSubtitle: "Unlock admission guides for SRI RAMACHANDRA MEDICAL COLLEGE AND RESEARCH INSTITUTE. Obtain verified state & management quota fee structures, hostel charges, and NEET cutoffs.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "SRMC MBBS admissions portal is open. | Verify Quotas and fee schedules. | Submit credentials below for eligibility checks.",
  deanName: "Dr. K. Balaji Singh",
  deanDesignation: "Administration",
  deanQuote: "SRMC has stood as a hallmark of clinical and academic excellence for over three decades. Our 1,800-bed super-specialty hospital provides extensive patient interaction.",
  contactEmail: "dean.medical@sriramachandra.edu.in",
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
    if (score >= 480) {
      return {
        status: "High Probability (MCC Deemed Round 1)",
        text: "Your score is competitive for securing a seat at Sri Ramachandra in Round 1 of Deemed counseling.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Put SRMC high in your choice entry lists.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 400) {
      return {
        status: "Good Chance (MCC Deemed Round 2/3)",
        text: "You stand a solid chance of matching for Sri Ramachandra in Round 2. Put it high on your MCC choice preference list.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Register options for SRMC in Round 1 & 2.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 280) {
      return {
        status: "Fair Chance (Target Mop-up / Stray rounds)",
        text: "You have a chance in subsequent rounds or stray vacancies. Keep an eye on seat vacancy matrices.",
        color: "text-amber-900 border-amber-200 bg-amber-50/40",
        quotaAdvice: "Target subsequent rounds and keep documentation verified.",
        btnStyle: "bg-amber-800 hover:bg-amber-900 text-white"
      };
    } else if (score >= 137) {
      return {
        status: "NEET Qualified (Target NRI Quota or Stray)",
        text: "You have qualified NEET. Admission is possible via Stray vacancy rounds or NRI sponsored quotas.",
        color: "text-slate-800 border-slate-200 bg-slate-100/50",
        quotaAdvice: "Verify eligibility for special quotas or stray rounds.",
        btnStyle: "bg-slate-700 hover:bg-slate-800 text-white"
      };
    } else {
      return {
        status: "NEET Qualification Required",
        text: "Qualifying NEET UG is mandatory to participate in MCC Deemed University counseling.",
        color: "text-red-950 border-red-200 bg-red-50/20",
        quotaAdvice: "Explore NEET score improvement guidelines.",
        btnStyle: "bg-red-900 hover:bg-red-950 text-white"
      };
    }
  },
  overviewTitle: "Overview of SRI RAMACHANDRA MEDICAL COLLEGE AND RESEARCH INSTITUTE",
  overviewParagraphs: [
  "<strong>SRI RAMACHANDRA MEDICAL COLLEGE AND RESEARCH INSTITUTE</strong> is a premier healthcare institution, established in <strong>1985</strong>. Renowned for academic excellence and clinical exposure, it is affiliated with <strong>SRIHER (Deemed University)</strong> and recognized by the <strong>National Medical Commission (NMC)</strong>.",
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
      value: "SRIHER (Deemed University)",
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
      value: "1,800 Beds",
      desc: "Equipped teaching hospital capacity",
      icon: HeartPulse,
    },
    {
      title: "Location",
      value: "Porur, Chennai, Tamil Nadu",
      desc: "Strategic campus setting",
      icon: MapPin,
    },
  ],
  feeStructure: [
      {
            "quota": "Deemed / Management Quota",
            "annualFee": "₹30,00,000 / Year",
            "remark": "Annual tuition fee for the MBBS program under deemed quota."
      },
      {
            "quota": "NRI Quota Fee",
            "annualFee": "$260,000 Total",
            "remark": "Total course tuition fee package for NRI category candidates."
      },
      {
            "quota": "Hostel & Utility Charges",
            "annualFee": "₹2,00,000 - ₹3,00,000 / Year",
            "remark": "Hostel charges with amenities including power backup, AC, and mess services."
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
            "category": "Deemed Management Quota (R1)",
            "scoreRange": "460 - 540 Marks",
            "percentile": "83.5%+"
      },
      {
            "category": "Deemed Management Quota (R2)",
            "scoreRange": "400 - 455 Marks",
            "percentile": "79.0%+"
      },
      {
            "category": "NRI Quota Seats",
            "scoreRange": "137 - 300 Marks",
            "percentile": "50.0%+"
      }
],
  processSectionTitle: "Admission Counseling Steps",
  admissionSteps: [
      {
            "title": "Register on MCC Portal",
            "desc": "Register on mcc.nic.in and select the Deemed Universities counseling option."
      },
      {
            "title": "Submit Fees & Security Deposit",
            "desc": "Pay the registration fee (₹5,000) and the mandatory security deposit (₹2,00,000) refundable upon matching completion."
      },
      {
            "title": "Choice Preference Entry",
            "desc": "Rank choices on the online portal placing the target Deemed Medical College high in priority."
      },
      {
            "title": "Lock Choices & Review Allotment",
            "desc": "Review seat allotment allocations across Rounds 1, 2, 3, and stray vacancies."
      },
      {
            "title": "Report to Allotted Campus",
            "desc": "Download allotment letter, report physically with original documents, and clear the tuition fee installment."
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
            "q": "Is SRMC a recognized medical college?",
            "a": "SRI RAMACHANDRA MEDICAL COLLEGE AND RESEARCH INSTITUTE is fully recognized by the National Medical Commission (NMC) and affiliated with SRIHER (Deemed University)."
      },
      {
            "q": "How can I apply for MBBS counseling at SRMC?",
            "a": "For Deemed quotas, register and lock choices on the MCC portal (mcc.nic.in). For state quotas, apply via MCC Deemed counseling portals depending on domicile eligibility."
      },
      {
            "q": "Are hostel accommodations mandatory?",
            "a": "While separate hosteling is provided for boys and girls with full amenities, guidelines vary. Check with campus admins for the latest rules."
      },
      {
            "q": "What is the annual intake capacity?",
            "a": "SRI RAMACHANDRA MEDICAL COLLEGE AND RESEARCH INSTITUTE has an annual intake capacity of 250 Seats for the MBBS program."
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

export default function SriRamachandraMedicalChennaiAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_CRIMSON} college={college} />;
}
