import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_ROYAL } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "Ramaiah Medical College Bangalore MBBS Admission 2026 - Fees & Cutoff",
  seoDescription: "Know all about MBBS Admissions at Ramaiah Medical College, Bangalore. Access verified 2026 fees, KEA seat distribution, cutoffs, and counseling instructions.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "CollegeOrUniversity",
      "@id": "https://ssadmission.in/ramaiah-medical-college-bangalore-admission-2026/#college",
      "name": "Ramaiah Medical College, Bangalore",
      "alternateName": "RMC Bangalore",
      "url": "https://www.msrmc.ac.in",
      "description": "Ramaiah Medical College is a premier private medical institution in Bangalore, recognized by NMC and affiliated with RGUHS.",
      "logo": "https://ssadmission.in/assets/main logo.png",
      "address": { "@type": "PostalAddress", "streetAddress": "MSR Nagar, MSRIT Post", "addressLocality": "Bangalore", "addressRegion": "Karnataka", "postalCode": "560054", "addressCountry": "IN" }
    }]
  },
  abbreviation: "RMC",
  fullName: "Ramaiah Medical College, Bangalore",
  hindiName: "रामैया मेडिकल कॉलेज, बेंगलुरु",
  affiliation: "Affiliated with Rajiv Gandhi University of Health Sciences (RGUHS)",
  location: "MSR Nagar, Bangalore, Karnataka",
  heroTitle: "MBBS Admission Guide & Counseling Seat Matrix Mapping",
  heroSubtitle: "Explore Ramaiah Medical College, Bangalore. Get validated KEA fee listings, seats intake matrix, and Karnataka counseling score matchers.",
  heroBadgeText: "Admissions & Information Center 2026-27",
  tickerMessage: "📢 KEA NEET UG 2026 Karnataka state quota counseling is now active. | RMC Bangalore MBBS choice filling codes are updated. | Submit registration details below for an eligibility review.",
  deanName: "Dr. M. K. Sudarshan",
  deanDesignation: "Dean Academics",
  deanQuote: "At Ramaiah Medical College, we are committed to producing compassionate and clinically adept medical professionals. Our 1300-bed hospital provides students with rich hands-on learning from day one.",
  contactEmail: "principal@msrmc.ac.in",
  notices: [
    { text: "RMC Bangalore MBBS intake matrix allocation verification for KEA counseling", date: "June 08, 2026", tag: "SEAT MATRIX" },
    { text: "Estimated KEA Govt and Private quota tuition fee structures for 2026", date: "June 05, 2026", tag: "FEE GUIDE" },
    { text: "Karnataka state medical counseling registration timelines published", date: "June 01, 2026", tag: "COUNSELING" },
    { text: "Hostel room booking configurations and mess details for 2026-27", date: "May 26, 2026", tag: "HOSTEL INFO" },
  ],
  initialScore: 560,
  predictorMidLabel: "KEA Cutoff (540+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 610) return { status: "High Probability (KEA Govt Quota Seat)", text: "Your score is highly competitive. You have a very high chance of securing a Government Quota seat (~₹1.41L/yr) at Ramaiah Medical College, which is highly coveted in Karnataka.", quotaAdvice: "Target KEA State counseling Round 1." };
    if (score >= 540) return { status: "Excellent Chance (KEA Private/Open merit Seat)", text: "Your score is competitive for KEA Private Quota Seats (~₹10.92L/yr) at Ramaiah Medical College. Keep this as your top option during choice entry.", quotaAdvice: "Lock Ramaiah Medical College in early counseling options." };
    if (score >= 430) return { status: "Management Quota Pathways", text: "You meet the qualification scores for Management Quota / NRI Sponsored Seats (~₹26L - ₹45L/yr). Early counseling registration and proper documentation are required.", quotaAdvice: "Prepare documents for Management/NRI registration." };
    if (score >= 137) return { status: "NEET Qualified (Eligible for NRI/Vacancy seats)", text: "You have qualified NEET UG. Admission will depend heavily on NRI quota reservations or vacant seat rounds. Expert choice-locking advice is recommended.", quotaAdvice: "Explore KEA NRI-sponsored counseling options." };
    return { status: "NEET Qualification Required", text: "You must score above the NEET UG qualifying threshold to participate in KEA counseling or secure admission.", quotaAdvice: "Get counseling advice on NEET preparation or alternate options." };
  },
  overviewTitle: "Overview of Ramaiah Medical College, Bangalore",
  overviewParagraphs: [
    "Established in <strong>1979</strong> by the M.S. Ramaiah Memorial Hospital Trust, <strong>Ramaiah Medical College (RMC), Bangalore</strong> is a premier private medical college in Karnataka. Affiliated with the <strong>Rajiv Gandhi University of Health Sciences (RGUHS)</strong> and approved by the <strong>National Medical Commission (NMC)</strong>, it is highly sought-after for MBBS admissions.",
    "RMC's sprawling campus in MSR Nagar houses an attached 1,300-bed teaching hospital, ensuring excellent clinical exposure for medical students. Admissions are primarily through <strong>Karnataka Examinations Authority (KEA)</strong> counseling rounds for government and private open seats."
  ],
  highlights: [
    { title: "Established Year", value: "1979", desc: "Over four decades of teaching excellence", icon: Calendar },
    { title: "Affiliated University", value: "RGUHS, Karnataka", desc: "Rajiv Gandhi University of Health Sciences", icon: Building },
    { title: "NMC Approval", value: "Fully Recognized", desc: "Under National Medical Commission", icon: ShieldCheck },
    { title: "MBBS Intake Matrix", value: "150 Seats", desc: "NMC approved annual seats intake", icon: Users },
    { title: "Hospital Beds", value: "1300+ Beds", desc: "Ramaiah Medical College teaching hospital", icon: HeartPulse },
    { title: "Strategic Location", value: "Bangalore", desc: "MSR Nagar, Bangalore, Karnataka", icon: MapPin },
  ],
  feeStructure: [
    { quota: "KEA Government Quota", annualFee: "₹1,41,000", remark: "Allotted via Karnataka state domicile merit ranking" },
    { quota: "KEA Private Open Seat", annualFee: "₹10,92,000", remark: "Merit-based seats open to Karnataka and non-Karnataka applicants" },
    { quota: "KEA Management / NRI Quota", annualFee: "₹26,00,000 - ₹45,00,000", remark: "Allotted via KEA NRI registration and stray vacancies" },
  ],
  feeNotes: [
    "<strong>Security Caution Money:</strong> A one-time deposit submitted at the time of final reporting.",
    "<strong>Hostel & Mess Costs:</strong> Range from ₹1,60,000 to ₹3,00,000 per year depending on room occupancy.",
    "<strong>Regulatory Standards:</strong> Seat matrices and fees remain subject to final KEA notifications.",
  ],
  cutoffSectionTitle: "KEA Karnataka NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "KEA State Govt Quota", scoreRange: "610 - 645 Marks", percentile: "98.5%+" },
    { category: "KEA Private Open Merit", scoreRange: "540 - 590 Marks", percentile: "95.0%+" },
    { category: "KEA Management / NRI sponsored", scoreRange: "200 - 450 Marks", percentile: "68.0%+" },
  ],
  processSectionTitle: "KEA Counselling & Allocation Steps",
  admissionSteps: [
    { title: "Register for NEET UG", desc: "Register, sit for, and qualify the NEET UG exam with a competitive score." },
    { title: "KEA Registration", desc: "Complete registration on the Karnataka Examinations Authority (KEA) website once notification is out." },
    { title: "Document Verification", desc: "Attend KEA physical or online verification rounds to validate certificates, categories, and quotas." },
    { title: "Choice Entry (Option Entry)", desc: "Log in to the KEA portal and lock 'Ramaiah Medical College' as your priority choice." },
    { title: "Seat Allotment & Reporting", desc: "Upon allotment, download your allotment letter, pay the tuition fee to KEA, and report to RMC to finalize admission." },
  ],
  facilities: [
    { title: "1300+ Bed Teaching Hospital", desc: "Tertiary-care hospital featuring advanced specialized units, high patient footfall, and quality practical exposure.", icon: HeartPulse },
    { title: "Advanced Learning Labs", desc: "Equipped with diagnostic simulation modules, modern skill development laboratories, and practical equipment.", icon: Activity },
    { title: "State-of-the-Art Lecture Halls", desc: "Modern, amphitheater-style AC classrooms equipped with high-definition digital smart boards and sound systems.", icon: BookOpen },
    { title: "Centralized Resource Library", desc: "Holds vast print books, national and international publications, online journals, and spacious reading sections.", icon: FileText },
    { title: "On-Campus Accommodation", desc: "Well-furnished separate residential hostel quarters for boys and girls under high security.", icon: Building },
    { title: "Sports Infrastructure", desc: "Equipped with open playgrounds, indoor game rooms, and a modern gym for student recreation.", icon: Sparkles },
  ],
  faqs: [
    { q: "Where is Ramaiah Medical College located?", a: "Ramaiah Medical College is located in MSR Nagar, MSRIT Post, Bangalore, Karnataka - 560054." },
    { q: "Is Ramaiah Medical College affiliated with any university?", a: "Yes, RMC Bangalore is affiliated with the Rajiv Gandhi University of Health Sciences (RGUHS), Karnataka, and recognized by the NMC." },
    { q: "What is the annual MBBS intake capacity at Ramaiah?", a: "The annual sanctioned intake capacity is 150 MBBS seats." },
    { q: "What is the annual tuition fee for private open seats under KEA?", a: "For KEA Private Open seats, the annual tuition fee is approximately ₹10,92,000. Hostel charges and other deposits are additional." },
    { q: "What is the attached hospital bed count?", a: "The teaching hospital, Ramaiah Medical College Hospital, has over 1,300 beds offering extensive clinical training." },
  ],
  formId: "rmc",
  quotaOptions: [
    { value: "KEA Govt Quota", label: "KEA Government Quota Seat" },
    { value: "KEA Private Open Seat", label: "KEA Private Open Merit Seat" },
    { value: "Management / NRI", label: "Management / NRI Quota" },
  ],
  counselingNote: "Admissions to Ramaiah Medical College are managed by the Karnataka Examinations Authority (KEA). Fill in your details to stay updated on critical notification updates, choice verification, and seat matrices.",
  formDeskLabel: "KEA Registration Desk",
};

export default function RamaiahMedicalAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_ROYAL} college={college} />;
}
