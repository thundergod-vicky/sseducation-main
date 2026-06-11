import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_SLATE } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "Gouri Devi Institute of Medical Sciences Durgapur MBBS Admission 2026 - Fees & Cutoff",
  seoDescription: "Read about MBBS Admissions at Gouri Devi Institute of Medical Sciences and Hospital (GIMSH), Durgapur. Access verified 2026 fees (State/Management Quota), WBMCC seats, cutoffs, and counseling instructions.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/gouri-devi-institute-of-medical-sciences-durgapur-admission-2026/#college",
        "name": "Gouri Devi Institute of Medical Sciences and Hospital, Durgapur",
        "alternateName": "GIMSH Durgapur",
        "url": "https://gimsh.in",
        "description": "Gouri Devi Institute of Medical Sciences and Hospital (GIMSH) is a premier private medical college in Rajbandh, Durgapur, West Bengal, recognized by the National Medical Commission (NMC) and affiliated with WBUHS.",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "G.T. Road, Rajbandh",
          "addressLocality": "Durgapur",
          "addressRegion": "West Bengal",
          "postalCode": "713212",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "GIMSH",
  fullName: "GOURI DEVI INSTITUTE OF MEDICAL SCIENCES AND HOSPITAL, DURGAPUR",
  hindiName: "गौरी देवी इंस्टीट्यूट ऑफ मेडिकल साइंसेज, दुर्गापुर",
  affiliation: "NMC Approved | Affiliated with WBUHS | Sprawling 1000+ Bed Teaching Hospital",
  location: "G.T. Road, Rajbandh, Durgapur, West Bengal",
  heroTitle: "Gouri Devi Medical College MBBS Admission Matrix",
  heroSubtitle: "Unlock admission guides for Gouri Devi Institute of Medical Sciences and Hospital (GIMSH), Durgapur. Obtain verified State & Management quota fee structures, hostel setups, and WBMCC counseling guides.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "Gouri Devi Medical College Jadavpur MBBS admissions portal is open via WBMCC. | Check State & Management quota parameters. | Submit credentials below for eligibility checks.",
  deanName: "Prof. (Dr.) Subodh Kumar Bhattacharya",
  deanDesignation: "Principal",
  deanQuote: "Our institute focuses on training medical professionals of international caliber. The attached 1000+ bed tertiary hospital provides extensive clinical work to prepare students for impactful medical service.",
  contactEmail: "info@gimsh.in",
  notices: [
  {
    "text": "GIMSH Durgapur MBBS seat matrix updates and quota structures",
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
  initialScore: 510,
  predictorMidLabel: "State Merit (540+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 575) {
      return {
        status: "High Probability (WBMCC State Quota seat)",
        text: "Your score is highly competitive. You stand an excellent chance of securing a West Bengal State Quota seat (~₹5.48L/year) at Gouri Devi Medical College via WBMCC.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Lock Gouri Devi Medical College in State Quota Round 1.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 510) {
      return {
        status: "Good Chance (WBMCC State Quota / Management Quota)",
        text: "You have strong prospects for State Quota seats, and an outstanding opportunity for Management Quota seats (~₹21.88L/year) at GIMSH.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Target State counseling Round 1 & 2 option entry.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 310) {
      return {
        status: "High Probability (WBMCC Management Quota)",
        text: "You have a solid chance of securing a Management Quota seat (~₹21.88L/year) in Gouri Devi Medical College Durgapur.",
        color: "text-amber-900 border-amber-200 bg-amber-50/40",
        quotaAdvice: "Register on WBMCC portal under Management Quota category.",
        btnStyle: "bg-amber-800 hover:bg-amber-900 text-white"
      };
    } else if (score >= 137) {
      return {
        status: "NEET Qualified (Management / NRI / Stray Quotas)",
        text: "You have qualified NEET UG. Admission to GIMSH Durgapur will require targeting Management Quota or Stray vacancy rounds.",
        color: "text-slate-800 border-slate-200 bg-slate-100/50",
        quotaAdvice: "Verify document status and registration for Management seats.",
        btnStyle: "bg-slate-700 hover:bg-slate-800 text-white"
      };
    } else {
      return {
        status: "NEET Qualification Required",
        text: "Qualifying NEET UG is mandatory for participating in WBMCC counseling and getting admitted to GIMSH Durgapur.",
        color: "text-red-950 border-red-200 bg-red-50/20",
        quotaAdvice: "Explore guidance on NEET score improvement or parallel tracks.",
        btnStyle: "bg-red-900 hover:bg-red-950 text-white"
      };
    }
  },
  overviewTitle: "Overview of GOURI DEVI INSTITUTE OF MEDICAL SCIENCES AND HOSPITAL, DURGAPUR",
  overviewParagraphs: [
  "Established in <strong>2016</strong>, <strong>Gouri Devi Institute of Medical Sciences and Hospital (GIMSH), Durgapur</strong> is a premier private medical college situated on G.T. Road, Rajbandh, Durgapur. Affiliated with the <strong>West Bengal University of Health Sciences (WBUHS)</strong> and fully recognized by the <strong>National Medical Commission (NMC)</strong>, it offers comprehensive medical training.",
  "GIMSH has a sprawling campus with state-of-the-art laboratory and diagnostic infrastructure. The associated 1,000+ bed tertiary teaching hospital caters to a heavy flow of outpatients and inpatients, providing extensive bedside clinical exposure to students during their training."
],
  highlights: [
    {
      title: "Established Year",
      value: "2016",
      desc: "Well-established private medical college in Durgapur",
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
      value: "200 Seats",
      desc: "Annual seats allocated through WBMCC counseling",
      icon: Users,
    },
    {
      title: "Hospital Beds",
      value: "1000+ Beds",
      desc: "Advanced tertiary-care teaching hospital in Durgapur",
      icon: HeartPulse,
    },
    {
      title: "Strategic Location",
      value: "Durgapur",
      desc: "G.T. Road, Rajbandh, Durgapur, West Bengal",
      icon: MapPin,
    },
  ],
  feeStructure: [
    { quota: "State Quota Fee", annualFee: "₹5,48,000 / Year", remark: "Regulated state quota tuition fee. Excludes security deposit & hostel." },
    { quota: "Management Quota Fee", annualFee: "₹21,88,000 / Year", remark: "Management quota tuition fee. Subject to state counseling committee." },
  ],
  feeNotes: [
  "<strong>Caution Money Deposit:</strong> Refundable security fees submitted once during verification.",
  "<strong>Hostel & Dining Charges:</strong> Range between ₹1,20,000 and ₹1,80,000 per academic year.",
  "<strong>Counseling Validity:</strong> Admissions are locked strictly through WBMCC State/Management quotas."
],
  cutoffSectionTitle: "Estimated NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "WBMCC State Quota (UR)", scoreRange: "545 - 578 Marks", percentile: "94.8%+" },
    { category: "WBMCC Management Quota (UR)", scoreRange: "290 - 410 Marks", percentile: "70.0%+" },
    { category: "Reserved Categories (State)", scoreRange: "385 - 445 Marks", percentile: "77.0%+" },
  ],
  processSectionTitle: "Admission Counseling Steps",
  admissionSteps: [
    { title: "Qualify NEET UG Exam", desc: "Secure a score meeting or exceeding the general qualifying cutoff published by the NTA." },
    { title: "Register on WBMCC Portal", desc: "Complete online registration on the West Bengal Medical Counseling Committee (WBMCC) site." },
    { title: "Document Verification", desc: "Produce requisite category, domicile, or management/NRI certificates for WBMCC physical or online verification." },
    { title: "Lock Selection Choices", desc: "Submit your choice entry list placing 'Gouri Devi Institute of Medical Sciences' at your preferred position." },
    { title: "Reporting & Joining", desc: "Download WBMCC allotment letter, submit the first-year fee online/via demand draft, and report to the Durgapur campus to complete joining." }
  ],
  facilities: [
    {
      title: "1000+ Bed Teaching Hospital",
      desc: "Tertiary teaching healthcare center featuring high OPD volumes and comprehensive medical and surgical specialties in Burdwan district.",
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
      q: "Where is Gouri Devi Medical College located?",
      a: "The college is located at G.T. Road, Rajbandh, Durgapur, West Bengal - 713212."
    },
    {
      q: "Is Gouri Devi Medical College a government or private college?",
      a: "It is a private medical college, established in 2016, affiliated with WBUHS and recognized by the NMC."
    },
    {
      q: "How many MBBS seats are available annually?",
      a: "GIMSH Durgapur has an annual intake capacity of 200 MBBS seats."
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
  formId: "gimsh",
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
  counselingNote: "Admissions to Gouri Devi Medical College are processed via WBMCC. Register to track counseling windows, choice locking, and vacancy round updates.",
  formDeskLabel: "WBMCC Registration Desk",
};

export default function GouriDeviMedicalDurgapurAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_SLATE} college={college} />;
}
