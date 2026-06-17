import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_SLATE } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";
import iqCityCampus from "@/assets/iq-city-campus.webp";

const college: CollegeData = {
  seoTitle: "IQ City Medical College Durgapur MBBS Admission 2026 - Fees & Cutoff",
  seoDescription: "Read about MBBS Admissions at IQ City Medical College, Durgapur. Access verified 2026 fees (State/Management Quota), WBMCC seats, cutoffs, and counseling instructions.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/iq-city-medical-college-durgapur-admission-2026/#college",
        "name": "IQ City Medical College, Durgapur",
        "alternateName": "IQ City Durgapur",
        "url": "https://iqcitymedicalcollege.in",
        "description": "IQ City Medical College and Hospital is a premier private medical college in Durgapur, West Bengal, recognized by the National Medical Commission (NMC) and affiliated with WBUHS.",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "IQ City Road, Sovapur, Jemua",
          "addressLocality": "Durgapur",
          "addressRegion": "West Bengal",
          "postalCode": "713206",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "IQ City",
  fullName: "IQ CITY MEDICAL COLLEGE, DURGAPUR",
  hindiName: "आईक्यू सिटी मेडिकल कॉलेज, दुर्गापुर",
  affiliation: "NMC Approved | Affiliated with WBUHS | Sprawling Multi-Specialty Health Campus",
  location: "Sovapur, Jemua, Durgapur, West Bengal",
  heroTitle: "IQ City Medical College MBBS Admission Matrix",
  heroSubtitle: "Unlock admission guides for IQ City Medical College, Durgapur. Obtain verified State & Management quota fee structures, hostel setups, and WBMCC counseling guides.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "IQ City Medical College MBBS counseling instructions are active under WBMCC. | Check State & Management quota parameters. | Submit credentials below for eligibility checks.",
  deanName: "Prof. (Dr.) Neerja Shastri",
  deanDesignation: "Principal",
  deanQuote: "IQ City Medical College has carved a niche in providing clinical excellence. Our attached 1200-bed hospital provides extensive hands-on practice, helping students groom into compassionate medical leaders.",
  contactEmail: "info@iqcitymedicalcollege.in",
  notices: [
  {
    "text": "IQ City Medical College MBBS seat matrix allocation matrices",
    "date": "June 09, 2026",
    "tag": "SEAT MATRIX"
  },
  {
    "text": "Detailed Fee Breakdown for state and management quotas",
    "date": "June 05, 2026",
    "tag": "FEE GUIDE"
  },
  {
    "text": "WBMCC registration document lists and offline validation slots",
    "date": "June 01, 2026",
    "tag": "COUNSELING"
  },
  {
    "text": "Hostel configurations and registration procedures",
    "date": "May 24, 2026",
    "tag": "HOSTEL RULE"
  }
],
  initialScore: 520,
  predictorMidLabel: "State Merit (550+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 585) {
      return {
        status: "High Probability (WBMCC State Quota seat)",
        text: "Your score is highly competitive. You stand an excellent chance of securing a West Bengal State Quota seat (~₹6.0L/year) at IQ City Medical College via WBMCC.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Lock IQ City Medical College in State Quota Round 1.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 520) {
      return {
        status: "Good Chance (WBMCC State Quota / Management Quota)",
        text: "You have strong prospects for State Quota seats, and an outstanding opportunity for Management Quota seats (~₹22L-₹24L/year) at IQ City.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Target State counseling Round 1 & 2 option entry.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 320) {
      return {
        status: "High Probability (WBMCC Management Quota)",
        text: "You have a solid chance of securing a Management Quota seat (~₹22L-₹24L/year) in IQ City Medical College Durgapur.",
        color: "text-amber-900 border-amber-200 bg-amber-50/40",
        quotaAdvice: "Register on WBMCC portal under Management Quota category.",
        btnStyle: "bg-amber-800 hover:bg-amber-900 text-white"
      };
    } else if (score >= 137) {
      return {
        status: "NEET Qualified (Management / NRI / Stray Quotas)",
        text: "You have qualified NEET UG. Admission to IQ City Durgapur will require targeting Management Quota or Stray vacancy rounds.",
        color: "text-slate-800 border-slate-200 bg-slate-100/50",
        quotaAdvice: "Verify document status and registration for Management seats.",
        btnStyle: "bg-slate-700 hover:bg-slate-800 text-white"
      };
    } else {
      return {
        status: "NEET Qualification Required",
        text: "Qualifying NEET UG is mandatory for participating in WBMCC counseling and getting admitted to IQ City Medical College Jadavpur.",
        color: "text-red-950 border-red-200 bg-red-50/20",
        quotaAdvice: "Explore guidance on NEET score improvement or parallel tracks.",
        btnStyle: "bg-red-900 hover:bg-red-950 text-white"
      };
    }
  },
  overviewTitle: "Overview of IQ CITY MEDICAL COLLEGE, DURGAPUR",
  overviewParagraphs: [
  "Established in <strong>2013</strong>, <strong>IQ City Medical College, Durgapur</strong> is a leading private medical college in Burdwan district, West Bengal. Affiliated with the <strong>West Bengal University of Health Sciences (WBUHS)</strong> and fully recognized by the <strong>National Medical Commission (NMC)</strong>, it has established a reputation for top-tier academic systems.",
  "The modern campus has the associated 1,200-bed IQ City Teaching Hospital, featuring intensive clinical OPD flow. The college boasts high-end lecture rooms, sophisticated laboratory equipment, and state-of-the-art simulation labs to offer hands-on healthcare training."
],
  highlights: [
    {
      title: "Established Year",
      value: "2013",
      desc: "Top private medical college in Durgapur industrial hub",
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
      value: "1200 Beds",
      desc: "Advanced tertiary-care teaching hospital in Durgapur",
      icon: HeartPulse,
    },
    {
      title: "Strategic Location",
      value: "Durgapur",
      desc: "Sovapur, Jemua, Durgapur, West Bengal",
      icon: MapPin,
    },
  ],
  feeStructure: [
    { quota: "State Quota Fee", annualFee: "₹6,00,000 / Year", remark: "Regulated state quota tuition fee. Excludes security deposit & hostel." },
    { quota: "Management Quota Fee", annualFee: "₹22,00,000 - ₹24,00,000 / Year", remark: "Management quota tuition fee. Subject to state counseling committee." },
  ],
  feeNotes: [
  "<strong>Security Fees:</strong> A one-time refundable caution deposit is logged during verification.",
  "<strong>Hostel & Mess:</strong> Generally hover around ₹1,40,000 to ₹1,90,000 per academic term.",
  "<strong>Counseling Validity:</strong> Admissions are locked strictly through WBMCC State/Management quotas."
],
  cutoffSectionTitle: "Estimated NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "WBMCC State Quota (UR)", scoreRange: "555 - 588 Marks", percentile: "95.5%+" },
    { category: "WBMCC Management Quota (UR)", scoreRange: "300 - 420 Marks", percentile: "72.0%+" },
    { category: "Reserved Categories (State)", scoreRange: "400 - 460 Marks", percentile: "80.0%+" },
  ],
  processSectionTitle: "Admission Counseling Steps",
  admissionSteps: [
    { title: "Qualify NEET UG Exam", desc: "Secure a score meeting or exceeding the general qualifying cutoff published by the NTA." },
    { title: "Register on WBMCC Portal", desc: "Complete online registration on the West Bengal Medical Counseling Committee (WBMCC) site." },
    { title: "Document Verification", desc: "Produce requisite category, domicile, or management/NRI certificates for WBMCC physical or online verification." },
    { title: "Lock Selection Choices", desc: "Submit your choice entry list placing 'IQ City Medical College' at your preferred position." },
    { title: "Reporting & Joining", desc: "Download WBMCC allotment letter, submit the first-year fee online/via demand draft, and report to the Durgapur campus to complete joining." }
  ],
  facilities: [
    {
      title: "1200-Bed Teaching Hospital",
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
      q: "Where is IQ City Medical College located?",
      a: "The college is located at IQ City Road, Sovapur, Jemua, Durgapur, West Bengal - 713206."
    },
    {
      q: "Is IQ City Medical College a government or private college?",
      a: "It is a private medical college, established in 2013, affiliated with WBUHS and recognized by the NMC."
    },
    {
      q: "How many MBBS seats are available annually?",
      a: "IQ City Medical College has an annual intake capacity of 250 MBBS seats."
    },
    {
      q: "Are admissions open to non-West Bengal candidates?",
      a: "Yes, non-West Bengal candidates can apply under the WBMCC Management Quota seats, which are open to all-India candidates based on NEET UG merit."
    },
    {
      q: "What is the fee structure for State Quota?",
      a: "The tuition fee for State Quota is approximately ₹6,00,000 per year."
    }
  ],
  formId: "iq",
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
  counselingNote: "Admissions to IQ City Medical College are processed via WBMCC. Register to track counseling windows, choice locking, and vacancy round updates.",
  formDeskLabel: "WBMCC Registration Desk",
  heroBgImage: iqCityCampus,
};

export default function IqCityMedicalDurgapurAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_SLATE} college={college} />;
}
