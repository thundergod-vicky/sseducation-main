import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_INDIGO } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "School of Medical Sciences Sharda University Greater Noida MBBS Admission 2026 - Fees, Cutoff & Eligibility",
  seoDescription: "Read about MBBS Admissions at School of Medical Sciences & Research (SMSR), Sharda University, Greater Noida. Access verified 2026 fees, UPDGME cutoffs, and counseling updates.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/school-of-medical-sciences-sharda-university-greater-noida-admission-2026/#college",
        "name": "School of Medical Sciences & Research (SMSR), Sharda University",
        "alternateName": "SMSR Sharda University",
        "url": "http://smsr.sharda.ac.in",
        "description": "School of Medical Sciences & Research (SMSR) at Sharda University is a premier private medical college in Greater Noida, Uttar Pradesh, recognized by NMC and offering state-of-the-art clinical education.",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot No. 32-34, Knowledge Park III",
          "addressLocality": "Greater Noida",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "201306",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "SMSR",
  fullName: "SCHOOL OF MEDICAL SCIENCES & RESEARCH, SHARDA UNIVERSITY",
  hindiName: "स्कूल ऑफ मेडिकल साइंसेज एंड रिसर्च, ग्रेटर नोएडा",
  affiliation: "Constituent of Sharda University | NMC Approved | 1200+ Bed Teaching Hospital",
  location: "Knowledge Park III, Greater Noida, Delhi NCR",
  heroTitle: "School of Medical Sciences & Research MBBS Guide",
  heroSubtitle: "Unlock admission guides for SMSR Sharda University, Greater Noida. Obtain verified UPDGME open seat fee structures, hostel rules, and NEET cutoffs.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "Sharda University MBBS counseling registrations are active on UPDGME portal. | Noida & NCR candidates must verify documents. | Submit details below for eligibility matcher.",
  deanName: "Dr. Nirupma Gupta",
  deanDesignation: "Dean",
  deanQuote: "SMSR Sharda University is dedicated to developing skilled medical leaders who can serve with empathy. Our 1200+ bed teaching hospital provides extensive clinical OPD flow for practical learning.",
  contactEmail: "dean.smsr@sharda.ac.in",
  notices: [],
  initialScore: 480,
  predictorMidLabel: "UP Open Seat (500+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 500) {
      return {
        status: "High Probability (UPDGME Open Private Seat)",
        text: "Your score is highly competitive for Sharda. You stand an excellent chance of securing a private quota seat (~₹12.69L tuition/year) at SMSR Sharda University via UPDGME counseling.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Lock Sharda University in UPDGME Round 1 choice entry.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 420) {
      return {
        status: "Good Chance (UPDGME Round 2 / Stray Quota)",
        text: "You stand a solid opportunity for Sharda private seats, especially in subsequent counseling rounds or stray vacancy allocations.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Target UPDGME open category choices during option entry.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 280) {
      return {
        status: "Eligible for Stray/Spot counseling rounds",
        text: "Direct open seat cutoff is high, but direct admissions under NRI quota or Stray vacancy rounds might be accessible depending on vacancies.",
        color: "text-amber-900 border-amber-200 bg-amber-50/40",
        quotaAdvice: "Verify document status for stray vacancy rounds.",
        btnStyle: "bg-amber-800 hover:bg-amber-900 text-white"
      };
    } else if (score >= 137) {
      return {
        status: "NEET Qualified (UPDGME Counselling Participant)",
        text: "You have qualified NEET UG. Admissions to Sharda require higher scores, but you can explore other private medical colleges in Uttar Pradesh via UPDGME.",
        color: "text-slate-800 border-slate-200 bg-slate-100/50",
        quotaAdvice: "Explore alternative private colleges in UP NEET options list.",
        btnStyle: "bg-slate-700 hover:bg-slate-800 text-white"
      };
    } else {
      return {
        status: "NEET Qualification Required",
        text: "Qualifying NEET UG is mandatory for participating in UPDGME counseling or registering for Sharda University medical admissions.",
        color: "text-red-950 border-red-200 bg-red-50/20",
        quotaAdvice: "Explore guidance on NEET score improvement or parallel tracks.",
        btnStyle: "bg-red-900 hover:bg-red-950 text-white"
      };
    }
  },
  overviewTitle: "Overview of SCHOOL OF MEDICAL SCIENCES & RESEARCH, SHARDA UNIVERSITY",
  overviewParagraphs: [
  "Established in <strong>2009</strong>, the <strong>School of Medical Sciences & Research (SMSR)</strong> is a constituent medical school of <strong>Sharda University</strong>, Greater Noida. Affiliated with Sharda University (a leading UGC-approved institution) and recognized by the <strong>National Medical Commission (NMC)</strong>, it represents one of the premier private medical setups in the Delhi NCR region.",
  "The modern medical campus features high-tech lab equipment, smart amphitheater halls, and extensive library systems. The associated 1,200+ bed teaching Sharda Hospital caters to a vast patient population from Noida, Greater Noida, and surrounding districts, ensuring exceptional hands-on clinical training."
],
  highlights: [
    {
      title: "Established Year",
      value: "2009",
      desc: "Highly reputed medical school within Sharda University",
      icon: Calendar,
    },
    {
      title: "University",
      value: "Sharda University",
      desc: "Private UGC-recognized university in Greater Noida",
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
      desc: "Annual seats allocated through UPDGME counseling",
      icon: Users,
    },
    {
      title: "Hospital Beds",
      value: "1200+ Beds",
      desc: "Sprawling multi-specialty Sharda Hospital",
      icon: HeartPulse,
    },
    {
      title: "Strategic Location",
      value: "Greater Noida",
      desc: "Knowledge Park III, Greater Noida, Delhi NCR",
      icon: MapPin,
    },
  ],
  feeStructure: [
    { quota: "Annual Tuition Fee", annualFee: "₹12,69,319", remark: "Regulated tuition fee per academic year." },
    { quota: "Hostel Fee (Mandatory)", annualFee: "₹1,50,000 / Year", remark: "Non-AC twin sharing. AC hostel charges higher." },
    { quota: "Miscellaneous Fees", annualFee: "₹85,600 / Year", remark: "Includes exam, library, and laboratory charges." },
    { quota: "One-Time Security Deposit", annualFee: "₹3,00,000", remark: "Refundable security deposit at the time of admission." },
  ],
  feeNotes: [
  "<strong>Security Fees:</strong> A one-time deposit of ₹3,00,000 is refundable upon course completion.",
  "<strong>Hostel Accommodation:</strong> Mandated for private candidates under UP state rules. Twin sharing standard is non-AC.",
  "<strong>Open State Counseling:</strong> All seats are allocated transparently through UP NEET counseling."
],
  cutoffSectionTitle: "Estimated NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "UPDGME General Round 1", scoreRange: "475 - 520 Marks", percentile: "93.0%+" },
    { category: "UPDGME General Round 2", scoreRange: "450 - 495 Marks", percentile: "90.0%+" },
    { category: "Reserved Categories (State)", scoreRange: "380 - 430 Marks", percentile: "85.0%+" },
  ],
  processSectionTitle: "Admission Counseling Steps",
  admissionSteps: [
    { title: "Qualify NEET UG Exam", desc: "Secure a score meeting or exceeding the general qualifying cutoff published by the NTA." },
    { title: "Register on UPDGME Portal", desc: "Complete online registration on the Uttar Pradesh NEET UG counseling site." },
    { title: "Document Verification", desc: "Complete document verification at nodal centers in UP (e.g. Noida/Greater Noida centers)." },
    { title: "Submit Choice List", desc: "Submit your choice entry list online, placing 'School of Medical Sciences, Sharda University' at the top." },
    { title: "Reporting & Joining", desc: "Download UPDGME allotment letter, submit the first-year fee online, and report to Sharda University to finalize admission." }
  ],
  facilities: [
    {
      title: "1200+ Bed Teaching Hospital",
      desc: "Tertiary teaching healthcare center featuring high OPD volumes and comprehensive medical and surgical specialties in Delhi NCR.",
      icon: HeartPulse,
    },
    {
      title: "Advanced Pathology & Skill Labs",
      desc: "Advanced simulation labs, diagnostic setups, and research infrastructure promoting deep learning.",
      icon: Activity,
    },
    {
      title: "Smart Amphitheater Classrooms",
      desc: "Spacious, fully air-conditioned academic lecture chambers equipped with modern projection and acoustic setups.",
      icon: BookOpen,
    },
    {
      title: "Academic Knowledge Center",
      desc: "Vast collection of national and international clinical research journals, textbooks, and electronic journals.",
      icon: FileText,
    },
    {
      title: "Secure Accommodation Options",
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
      q: "Where is School of Medical Sciences, Sharda University located?",
      a: "The college is located at Plot No. 32-34, Knowledge Park III, Greater Noida, Uttar Pradesh - 201306 (Delhi NCR)."
    },
    {
      q: "Is Sharda Medical College a government or private college?",
      a: "It is a highly respected private medical college, constituent of Sharda University, recognized by the NMC."
    },
    {
      q: "How many MBBS seats are available annually?",
      a: "Sharda Medical College has an annual intake capacity of 250 MBBS seats."
    },
    {
      q: "Are admissions open to non-UP candidates?",
      a: "Yes, Uttar Pradesh private medical colleges counseling is open to candidates from all states (Open State quota)."
    },
    {
      q: "What is the total course fee at Sharda?",
      a: "The annual tuition fee is approximately ₹12.69 Lakhs. The total course package, including hostel, mess, security deposit, and miscellaneous, is approximately ₹77.67 Lakhs."
    }
  ],
  formId: "sharda",
  quotaOptions: [
  {
    "value": "UPDGME Open Seat",
    "label": "UPDGME Open Private Seat"
  },
  {
    "value": "NRI sponsored / Stray",
    "label": "NRI Sponsored / Stray vacancy"
  }
],
  counselingNote: "Admissions to SMSR Sharda University are processed via UPDGME. Register to track counseling schedules, security deposit deadlines, and node document centers.",
  formDeskLabel: "UPDGME Registration Desk",
};

export default function ShardaMedicalGreaterNoidaAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_INDIGO} college={college} />;
}
