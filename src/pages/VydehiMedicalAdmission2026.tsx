import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_EMERALD } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "Vydehi Institute of Medical Sciences Bangalore MBBS Admission 2026 - Fees & Cutoff",
  seoDescription: "Learn about MBBS Admissions at Vydehi Institute of Medical Sciences & Research Centre (VIMS), Bangalore. Get verified details on KEA 2026 tuition fees, cutoffs, seat matrices, and counseling.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "CollegeOrUniversity",
      "@id": "https://ssadmission.in/vydehi-institute-of-medical-sciences-bangalore-admission-2026/#college",
      "name": "Vydehi Institute of Medical Sciences and Research Centre, Bangalore",
      "alternateName": "Vydehi Medical College Bangalore",
      "url": "https://www.vims.ac.in",
      "description": "Vydehi Institute of Medical Sciences is a premier private medical institution in Bangalore, recognized by NMC and affiliated with RGUHS.",
      "logo": "https://ssadmission.in/assets/main logo.png",
      "address": { "@type": "PostalAddress", "streetAddress": "82, EPIP Area, Whitefield", "addressLocality": "Bangalore", "addressRegion": "Karnataka", "postalCode": "560066", "addressCountry": "IN" }
    }]
  },
  abbreviation: "VIMS",
  fullName: "Vydehi Institute of Medical Sciences & Research Centre, Bangalore",
  hindiName: "वैदेही इंस्टीट्यूट ऑफ मेडिकल साइंसेज, बेंगलुरु",
  affiliation: "Affiliated with Rajiv Gandhi University of Health Sciences (RGUHS)",
  location: "82, EPIP Area, Whitefield, Bangalore, Karnataka",
  heroTitle: "Vydehi Medical College MBBS Admission & KEA Guide 2026",
  heroSubtitle: "Explore Vydehi Institute of Medical Sciences, Bangalore. Get verified KEA fee listings, seats intake matrix, and Karnataka counseling score matchers.",
  heroBadgeText: "Admissions & Information Center 2026-27",
  tickerMessage: "📢 KEA NEET UG counseling schedules for Karnataka state quota registrations are now active. | Vydehi Medical College MBBS choice filling codes are updated. | Submit registration details for eligibility review.",
  deanName: "Dr. Shreedhar Venkatesh",
  deanDesignation: "Dean & Principal",
  deanQuote: "At Vydehi, we strive to build compassionate, highly skillful medical graduates. Our advanced infrastructure and 1600-bed attached clinical center offer an unmatched learning environment for undergraduate candidates.",
  contactEmail: "info@vims.ac.in",
  notices: [
    { text: "Vydehi Medical College MBBS intake matrix allocation verification for 2026", date: "June 08, 2026", tag: "SEAT MATRIX" },
    { text: "Estimated KEA Govt and Private quota tuition fee structures for 2026", date: "June 05, 2026", tag: "FEE GUIDE" },
    { text: "Karnataka state medical counseling registration timelines published", date: "June 01, 2026", tag: "COUNSELING" },
    { text: "Hostel room booking configurations and mess details for 2026-27", date: "May 26, 2026", tag: "HOSTEL INFO" },
  ],
  initialScore: 520,
  predictorMidLabel: "KEA Cutoff (510+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 590) return { status: "High Probability (KEA Govt Quota Seat)", text: "Your score is highly competitive. You stand an excellent chance of securing a Government Quota seat (~₹1.53L/yr) at Vydehi Medical College during early counseling.", quotaAdvice: "Target KEA State counseling Round 1." };
    if (score >= 510) return { status: "Good Chance (KEA Private/Open merit Seat)", text: "You hold a strong competitive edge for KEA Private/Open Quota seats (~₹12.0L/yr) at Vydehi Medical College. Prioritize this in your option entry sheet.", quotaAdvice: "Keep Vydehi as a prioritized option in early rounds." };
    if (score >= 380) return { status: "Management Quota Eligible", text: "You meet the standard cutoff scores for Management Quota / NRI Sponsored Seats (~₹44L/yr) at Vydehi Medical College. Guided counseling registration is recommended.", quotaAdvice: "Prepare for Management/NRI choice verification." };
    if (score >= 137) return { status: "NRI / Stray Vacancy Pathway", text: "You have qualified NEET UG. Admission will depend heavily on NRI quota reservations or stray vacancy counseling. Counseling guidance is advised.", quotaAdvice: "Explore NRI-sponsored seats and documentation requirements." };
    return { status: "NEET Qualification Required", text: "You must qualify the NEET UG exam to register for KEA counseling or secure medical admissions.", quotaAdvice: "Get professional advice on NEET coaching or allied sciences." };
  },
  overviewTitle: "Overview of Vydehi Medical College, Bangalore",
  overviewParagraphs: [
    "Established in <strong>2002</strong>, <strong>Vydehi Institute of Medical Sciences & Research Centre (VIMS), Bangalore</strong> is a premier destination for healthcare training in Karnataka. Affiliated with the <strong>Rajiv Gandhi University of Health Sciences (RGUHS)</strong> and approved by the <strong>National Medical Commission (NMC)</strong>, the college offers extensive clinical training.",
    "Located in the IT corridor of Whitefield, Bangalore, the college houses an attached <strong>1,600-bed multi-specialty teaching hospital</strong>. This heavy patient care footprint ensures medical undergraduates acquire comprehensive practical insights under top clinical guidance."
  ],
  highlights: [
    { title: "Established Year", value: "2002", desc: "Over two decades of medical training legacy", icon: Calendar },
    { title: "Affiliated University", value: "RGUHS, Karnataka", desc: "Rajiv Gandhi University of Health Sciences", icon: Building },
    { title: "NMC Approval", value: "Recognized", desc: "Approved under National Medical Commission", icon: ShieldCheck },
    { title: "MBBS Intake Matrix", value: "250 Seats", desc: "Sanctioned annual MBBS seats intake", icon: Users },
    { title: "Hospital Beds", value: "1600 Beds", desc: "Multi-specialty VIMS teaching hospital", icon: HeartPulse },
    { title: "Strategic Location", value: "Bangalore", desc: "Whitefield, Bangalore, Karnataka", icon: MapPin },
  ],
  feeStructure: [
    { quota: "KEA Government Quota", annualFee: "₹1,53,571", remark: "Allotted via Karnataka state domicile merit ranking" },
    { quota: "KEA Private Open Seat", annualFee: "₹12,00,117", remark: "Merit-based seats open to Karnataka and non-Karnataka applicants" },
    { quota: "KEA Management / NRI Quota", annualFee: "₹44,00,000", remark: "Allotted via KEA NRI registration and vacant seat rounds" },
  ],
  feeNotes: [
    "<strong>Security Caution Deposit:</strong> Paid once during initial verification procedures.",
    "<strong>Hostel & Mess Costs:</strong> Range from ₹1,70,000 to ₹3,30,000 per academic year.",
    "<strong>Regulatory Adjustments:</strong> Seat allocation and final costs are governed by KEA and standard state notices.",
  ],
  cutoffSectionTitle: "KEA Karnataka NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "KEA State Govt Quota", scoreRange: "590 - 625 Marks", percentile: "97.0%+" },
    { category: "KEA Private Open Merit", scoreRange: "510 - 575 Marks", percentile: "93.5%+" },
    { category: "Management / NRI sponsored", scoreRange: "170 - 390 Marks", percentile: "62.0%+" },
  ],
  processSectionTitle: "KEA Counselling & Allocation Steps",
  admissionSteps: [
    { title: "Qualify NEET UG", desc: "Secure a valid NEET score exceeding the qualifying percentile declared by the NTA." },
    { title: "Register on KEA Portal", desc: "Complete online registration on the Karnataka Examinations Authority (KEA) website during active windows." },
    { title: "KEA Document Verification", desc: "Attend KEA documentation verification rounds to verify academic transcripts, domicile, and quota claims." },
    { title: "Lock Selection Option", desc: "Lock 'Vydehi Institute of Medical Sciences' as your preferred choice in option entry portal." },
    { title: "Allotment & Final Joining", desc: "Download allotment, remit tuition fee online to KEA, and report to VIMS campus to finalize joining formalities." },
  ],
  facilities: [
    { title: "1600-Bed Multi-Specialty Hospital", desc: "Attached super-specialty teaching hospital in Whitefield with heavy OPD patient flows and emergency response units.", icon: HeartPulse },
    { title: "Advanced Diagnostics & Labs", desc: "Equipped with state-of-the-art pathology labs, digital MRI/CT imaging, and modern skill development blocks.", icon: Activity },
    { title: "Modern Air-Conditioned Classrooms", desc: "Auditorium-style smart lecture theaters equipped with high-grade digital visual displays.", icon: BookOpen },
    { title: "Centralized Resource Library", desc: "Holds vast print volumes, national and international medical journals, and dedicated digital reading zones.", icon: FileText },
    { title: "Secure Accommodation", desc: "Separate, secure hostel quarters for boys and girls with AC/Non-AC layouts and full catering mess.", icon: Building },
    { title: "Recreation Hub", desc: "Lush lawns, playground setups, indoor games, and gym promoting student fitness.", icon: Sparkles },
  ],
  faqs: [
    { q: "Where is Vydehi Medical College located?", a: "The campus is located at #82, EPIP Area, Nallurahalli, Whitefield, Bangalore, Karnataka - 560066." },
    { q: "Is Vydehi Medical College approved by the NMC?", a: "Yes, the MBBS and various postgraduate courses at VIMS are fully recognized and approved by the National Medical Commission (NMC)." },
    { q: "What is the annual MBBS seat matrix at Vydehi Bangalore?", a: "Vydehi Bangalore has an approved annual intake of 250 MBBS seats." },
    { q: "What is the fee structure for private open seats under KEA?", a: "The KEA Private Open seat tuition fee is approximately ₹12,00,117 per year. Security deposits and hostel fees are extra." },
    { q: "Who is the current Principal of Vydehi Medical College?", a: "The current Principal of Vydehi Medical College is Dr. Shreedhar Venkatesh." },
  ],
  formId: "vims",
  quotaOptions: [
    { value: "KEA Govt Quota", label: "KEA Government Quota Seat" },
    { value: "KEA Private Open Seat", label: "KEA Private Open Merit Seat" },
    { value: "Management / NRI", label: "Management / NRI Quota" },
  ],
  counselingNote: "Admissions to Vydehi Medical College are managed by the Karnataka Examinations Authority (KEA). Fill in your details to stay updated on counseling notifications, choice verification, and seat matrices.",
  formDeskLabel: "KEA Registration Desk",
};

export default function VydehiMedicalAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_EMERALD} college={college} />;
}
