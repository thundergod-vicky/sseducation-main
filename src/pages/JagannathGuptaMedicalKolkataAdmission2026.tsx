import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_SLATE } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "Jagannath Gupta Institute of Medical Sciences Kolkata MBBS Admission 2026 - Fees & Cutoff",
  seoDescription: "Read about MBBS Admissions at Jagannath Gupta Institute of Medical Sciences and Hospital (JIMSH), Kolkata. Access verified 2026 fees, WBMCC seats, cutoffs, and counseling instructions.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/jagannath-gupta-institute-of-medical-sciences-kolkata-admission-2026/#college",
        "name": "Jagannath Gupta Institute of Medical Sciences and Hospital, Kolkata",
        "alternateName": "JIMSH Kolkata",
        "url": "https://jimsh.org",
        "description": "Jagannath Gupta Institute of Medical Sciences and Hospital (JIMSH) is a premier private medical institute in Budge Budge, Kolkata, West Bengal, recognized by NMC and affiliated with WBUHS.",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "K.P. Mondal Road, Buita, Budge Budge",
          "addressLocality": "Kolkata",
          "addressRegion": "West Bengal",
          "postalCode": "700137",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "JIMSH",
  fullName: "JAGANNATH GUPTA INSTITUTE OF MEDICAL SCIENCES, KOLKATA",
  hindiName: "जगन्नाथ गुप्ता इंस्टीट्यूट ऑफ मेडिकल साइंसेज, कोलकाता",
  affiliation: "Approved by NMC | Affiliated with WBUHS | 1000+ Bed Teaching Hospital",
  location: "Budge Budge, Kolkata, West Bengal",
  heroTitle: "Jagannath Gupta Medical College MBBS Admission Matrix",
  heroSubtitle: "Unlock admission guides for Jagannath Gupta Institute of Medical Sciences and Hospital (JIMSH), Kolkata. Obtain verified State & Management quota fee configurations, hostel structures, and WBMCC cutoffs.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "JIMSH Kolkata MBBS registration guidelines are active under WBMCC. | Check State & Management quota schedules. | Submit credentials below for eligibility audits.",
  deanName: "Prof. (Dr.) Pit Baran Bhattacharyya",
  deanDesignation: "Principal",
  deanQuote: "Our institute focuses heavily on training modern healthcare professionals. The attached 1000+ bed teaching hospital provides extensive clinical work to prepare students for impactful medical service.",
  contactEmail: "admission@jimsh.org",
  notices: [
  {
    "text": "JIMSH Kolkata MBBS seat matrix updates and quota structures",
    "date": "June 09, 2026",
    "tag": "SEAT MATRIX"
  },
  {
    "text": "Tuition fees details and security deposits guidelines",
    "date": "June 05, 2026",
    "tag": "FEE GUIDE"
  },
  {
    "text": "WBMCC counseling document registration and verification rounds",
    "date": "June 01, 2026",
    "tag": "COUNSELING"
  },
  {
    "text": "Hostel configurations and mess charges updates",
    "date": "May 25, 2026",
    "tag": "HOSTEL RULE"
  }
],
  initialScore: 530,
  predictorMidLabel: "State Merit (560+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 590) {
      return {
        status: "High Probability (WBMCC State Quota seat)",
        text: "Your score is highly competitive. You stand an excellent chance of securing a West Bengal State Quota seat (~₹5.48L/year) at JIMSH Kolkata via WBMCC.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Lock JIMSH Kolkata in State Quota Round 1.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 530) {
      return {
        status: "Good Chance (WBMCC State Quota / Management Quota)",
        text: "You have strong prospects for State Quota seats, and an outstanding opportunity for Management Quota seats (~₹21.88L/year) at JIMSH.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Target State counseling Round 1 & 2 option entry.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 350) {
      return {
        status: "High Probability (WBMCC Management Quota)",
        text: "You have a solid chance of securing a Management Quota seat (~₹21.88L/year) in JIMSH Kolkata.",
        color: "text-amber-900 border-amber-200 bg-amber-50/40",
        quotaAdvice: "Register on WBMCC portal under Management Quota category.",
        btnStyle: "bg-amber-800 hover:bg-amber-900 text-white"
      };
    } else if (score >= 137) {
      return {
        status: "NEET Qualified (Management / NRI / Stray Quotas)",
        text: "You have qualified NEET UG. Admission to JIMSH Kolkata will require targeting Management Quota or Stray vacancy rounds.",
        color: "text-slate-800 border-slate-200 bg-slate-100/50",
        quotaAdvice: "Verify document status and registration for Management seats.",
        btnStyle: "bg-slate-700 hover:bg-slate-800 text-white"
      };
    } else {
      return {
        status: "NEET Qualification Required",
        text: "Qualifying NEET UG is mandatory for participating in WBMCC counseling and getting admitted to JIMSH Kolkata.",
        color: "text-red-950 border-red-200 bg-red-50/20",
        quotaAdvice: "Explore guidance on NEET score improvement or parallel tracks.",
        btnStyle: "bg-red-900 hover:bg-red-950 text-white"
      };
    }
  },
  overviewTitle: "Overview of JAGANNATH GUPTA INSTITUTE OF MEDICAL SCIENCES, KOLKATA",
  overviewParagraphs: [
  "Established in <strong>2018</strong>, <strong>Jagannath Gupta Institute of Medical Sciences and Hospital (JIMSH), Kolkata</strong> is a premier private medical college situated in Budge Budge, Kolkata. Affiliated with the <strong>West Bengal University of Health Sciences (WBUHS)</strong> and fully recognized by the <strong>National Medical Commission (NMC)</strong>, it offers comprehensive medical training.",
  "JIMSH has a sprawling campus with state-of-the-art laboratory and diagnostic infrastructure. The associated 1,000+ bed tertiary teaching hospital caters to a heavy flow of outpatients and inpatients, providing extensive bedside clinical exposure to students during their training."
],
  highlights: [
    {
      title: "Established Year",
      value: "2018",
      desc: "Rapidly growing private medical college in Kolkata",
      icon: Calendar,
    },
    {
      title: "Affiliated University",
      value: "WBUHS, Kolkata",
      desc: "West Bengal University of Health Sciences",
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
      value: "250 Seats",
      desc: "Annual seats allocated through WBMCC counseling",
      icon: Users,
    },
    {
      title: "Hospital Beds",
      value: "1000+ Beds",
      desc: "Advanced tertiary-care teaching hospital in Budge Budge",
      icon: HeartPulse,
    },
    {
      title: "Strategic Location",
      value: "Kolkata",
      desc: "Budge Budge, Kolkata, West Bengal",
      icon: MapPin,
    },
  ],
  feeStructure: [
    { quota: "State Quota Fee", annualFee: "₹5,48,000 / Year", remark: "Regulated state quota tuition fee. Excludes registration & hostel fees." },
    { quota: "Management Quota Fee", annualFee: "₹21,88,000 / Year", remark: "Management quota tuition fee. Subject to state norms." },
  ],
  feeNotes: [
  "<strong>Caution Money Deposit:</strong> Refundable security fees submitted once during verification.",
  "<strong>Hostel & Dining Charges:</strong> Range between ₹1,50,000 and ₹2,00,000 per academic year.",
  "<strong>Counseling Validity:</strong> Admissions are locked strictly through WBMCC State/Management quotas."
],
  cutoffSectionTitle: "Estimated NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "WBMCC State Quota (UR)", scoreRange: "560 - 595 Marks", percentile: "96.0%+" },
    { category: "WBMCC Management Quota (UR)", scoreRange: "320 - 450 Marks", percentile: "75.0%+" },
    { category: "Reserved Categories (State)", scoreRange: "410 - 470 Marks", percentile: "82.0%+" },
  ],
  processSectionTitle: "Admission Counseling Steps",
  admissionSteps: [
    { title: "Qualify NEET UG Exam", desc: "Secure a score meeting or exceeding the general qualifying cutoff published by the NTA." },
    { title: "Register on WBMCC Portal", desc: "Complete online registration on the West Bengal Medical Counseling Committee (WBMCC) site." },
    { title: "Document Verification", desc: "Produce requisite category, domicile, or management/NRI certificates for WBMCC physical or online verification." },
    { title: "Lock Selection Choices", desc: "Submit your choice entry list placing 'Jagannath Gupta Institute of Medical Sciences' at your preferred position." },
    { title: "Reporting & Joining", desc: "Download WBMCC allotment letter, submit the first-year fee online/via demand draft, and report to the Budge Budge campus to complete joining." }
  ],
  facilities: [
    {
      title: "1000+ Bed Teaching Hospital",
      desc: "Tertiary teaching healthcare center featuring high OPD volumes and comprehensive medical and surgical specialties in South 24 Parganas.",
      icon: HeartPulse,
    },
    {
      title: "Advanced Pathology & Skill Labs",
      desc: "Advanced simulation labs, diagnostic setups, and research infrastructure promoting deep learning.",
      icon: Activity,
    },
    {
      title: "Smart Lecture Amphitheaters",
      desc: "Spacious, fully air-conditioned academic lecture chambers equipped with modern projection and acoustic setups.",
      icon: BookOpen,
    },
    {
      title: "Central Library",
      desc: "Vast collection of national and international clinical research journals, textbooks, and electronic journals.",
      icon: FileText,
    },
    {
      title: "Secure Accommodation",
      desc: "Separate, secure hostel quarters for male and female candidates with all basic utilities.",
      icon: Building,
    },
    {
      title: "Sports Complex",
      desc: "Includes play courts, gym facilities, and lush lawns promoting physical wellness.",
      icon: Sparkles,
    },
  ],
  faqs: [
    {
      q: "Where is Jagannath Gupta Institute of Medical Sciences located?",
      a: "The college is located at K.P. Mondal Road, Buita, Budge Budge, Kolkata, West Bengal - 700137."
    },
    {
      q: "Is Jagannath Gupta Institute of Medical Sciences a government or private college?",
      a: "It is a private medical college, established in 2018, affiliated with WBUHS and recognized by the NMC."
    },
    {
      q: "How many MBBS seats are available annually?",
      a: "JIMSH has an annual intake capacity of 250 MBBS seats."
    },
    {
      q: "Are admissions open to non-West Bengal candidates?",
      a: "Yes, non-West Bengal candidates can apply under the WBMCC Management Quota seats, which are open to all-India candidates based on NEET UG merit."
    },
    {
      q: "What is the fee structure for State Quota?",
      a: "The tuition fee for State Quota is approximately ₹5,48,000 per year."
    }
  ],
  formId: "jimsh",
  quotaOptions: [
  {
    "value": "WBMCC State Quota",
    "label": "WBMCC State Quota"
  },
  {
    "value": "WBMCC Management Quota",
    "label": "WBMCC Management Quota"
  },
  {
    "value": "NRI Quota / Stray",
    "label": "NRI Quota / Stray vacancy"
  }
],
  counselingNote: "Admissions to Jagannath Gupta Medical College are processed via WBMCC. Register to track counseling windows, choice locking, and vacancy round updates.",
  formDeskLabel: "WBMCC Registration Desk",
};

export default function JagannathGuptaMedicalKolkataAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_SLATE} college={college} />;
}
