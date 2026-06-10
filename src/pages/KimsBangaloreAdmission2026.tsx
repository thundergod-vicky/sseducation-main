import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_EMERALD } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "KIMS Bangalore MBBS Admission 2026 - Fees, Cutoff & Seats",
  seoDescription: "Find MBBS Admission details at Kempegowda Institute of Medical Sciences (KIMS), Bangalore. Get verified details on KEA 2026 tuition fees, cutoffs, seat matrices, and counseling.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "CollegeOrUniversity",
      "@id": "https://ssadmission.in/kempegowda-institute-of-medical-sciences-bangalore-admission-2026/#college",
      "name": "Kempegowda Institute of Medical Sciences, Bangalore",
      "alternateName": "KIMS Bangalore",
      "url": "https://www.kimsbangalore.edu.in",
      "description": "Kempegowda Institute of Medical Sciences is a leading private medical institution in Bangalore, recognized by NMC and affiliated with RGUHS.",
      "logo": "https://ssadmission.in/assets/main logo.png",
      "address": { "@type": "PostalAddress", "streetAddress": "Banashankari 2nd Stage", "addressLocality": "Bangalore", "addressRegion": "Karnataka", "postalCode": "560070", "addressCountry": "IN" }
    }]
  },
  abbreviation: "KIMS",
  fullName: "Kempegowda Institute of Medical Sciences, Bangalore",
  hindiName: "केम्पेगौड़ा इंस्टीट्यूट ऑफ मेडिकल साइंसेज, बेंगलुरु",
  affiliation: "Affiliated with Rajiv Gandhi University of Health Sciences (RGUHS)",
  location: "Banashankari 2nd Stage, Bangalore, Karnataka",
  heroTitle: "KIMS Bangalore MBBS Admission & KEA Guide 2026",
  heroSubtitle: "Explore Kempegowda Institute of Medical Sciences, Bangalore. Get validated KEA fee listings, seats intake matrix, and Karnataka counseling score matchers.",
  heroBadgeText: "Admissions & Information Center 2026-27",
  tickerMessage: "📢 KEA NEET UG counseling schedules for Karnataka state quota registrations are now active. | KIMS Bangalore MBBS choice filling codes are updated. | Submit registration details below for an eligibility review.",
  deanName: "Dr. H. B. Shivakumar",
  deanDesignation: "Dean & Principal",
  deanQuote: "At KIMS, we strive to build compassionate, skillful healthcare practitioners. Our modern educational layouts and attached 1100-bed clinical center offer rich learning environments for undergraduate medical candidates.",
  contactEmail: "principal@kims.edu.in",
  notices: [
    { text: "KIMS Bangalore MBBS intake matrix allocation verification for KEA counseling", date: "June 08, 2026", tag: "SEAT MATRIX" },
    { text: "Estimated KEA Govt and Private quota tuition fee structures for 2026", date: "June 05, 2026", tag: "FEE GUIDE" },
    { text: "Karnataka state medical counseling registration timelines published", date: "June 01, 2026", tag: "COUNSELING" },
    { text: "Hostel room booking configurations and mess details for 2026-27", date: "May 26, 2026", tag: "HOSTEL INFO" },
  ],
  initialScore: 530,
  predictorMidLabel: "KEA Cutoff (520+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 595) return { status: "High Probability (KEA Govt Quota Seat)", text: "Your score is highly competitive. You stand an excellent chance of securing a Government Quota seat (~₹1.54L/yr) at KIMS Bangalore during early counseling.", quotaAdvice: "Target KEA State counseling Round 1." };
    if (score >= 520) return { status: "Good Chance (KEA Private/Open merit Seat)", text: "You hold a strong competitive edge for KEA Private/Open Quota seats (~₹10.9L - ₹12L/yr) at KIMS Bangalore. Strategic choice locking is advised.", quotaAdvice: "Keep KIMS as a prioritized choice in option entry." };
    if (score >= 400) return { status: "Management Quota Eligible", text: "You meet the standard cutoff scores for Management Quota / NRI Sponsored Seats (~₹43L/yr) at KIMS Bangalore. Guided counseling registration is recommended.", quotaAdvice: "Prepare for Management/NRI choice verification." };
    if (score >= 137) return { status: "NRI / Stray Vacancy Pathway", text: "You have qualified NEET UG. Admission will depend heavily on NRI quota reservations or stray vacancy counseling. Counseling guidance is advised.", quotaAdvice: "Explore NRI-sponsored seats and documents requirements." };
    return { status: "NEET Qualification Required", text: "You must qualify the NEET UG exam to register for KEA counseling or secure medical admissions.", quotaAdvice: "Get professional advice on NEET coaching or allied sciences." };
  },
  overviewTitle: "Overview of KIMS Bangalore",
  overviewParagraphs: [
    "Established in <strong>1980</strong> by the Rajya Vokkaligara Sangha, <strong>Kempegowda Institute of Medical Sciences (KIMS), Bangalore</strong> is an iconic private medical college. Affiliated with the <strong>Rajiv Gandhi University of Health Sciences (RGUHS)</strong> and approved by the <strong>National Medical Commission (NMC)</strong>, it holds a strong position in academic rankings.",
    "KIMS has its pre-clinical campus in Banashankari 2nd Stage, Bangalore, and clinical blocks in V.V. Puram. The attached <strong>1,100-bed KIMS Hospital</strong> operates with comprehensive tertiary care specialties, ensuring medical students get extensive hands-on experience during clinical postings."
  ],
  highlights: [
    { title: "Established Year", value: "1980", desc: "Over four decades of medical training legacy", icon: Calendar },
    { title: "Affiliated University", value: "RGUHS, Karnataka", desc: "Rajiv Gandhi University of Health Sciences", icon: Building },
    { title: "NMC Approval", value: "Recognized", desc: "Approved under National Medical Commission", icon: ShieldCheck },
    { title: "MBBS Intake Matrix", value: "150 Seats", desc: "Sanctioned annual MBBS seats intake", icon: Users },
    { title: "Hospital Beds", value: "1100 Beds", desc: "Multi-specialty KIMS teaching hospital", icon: HeartPulse },
    { title: "Strategic Location", value: "Bangalore", desc: "Banashankari 2nd Stage, Bangalore", icon: MapPin },
  ],
  feeStructure: [
    { quota: "KEA Government Quota", annualFee: "₹1,54,000", remark: "Allotted via Karnataka state domicile merit ranking" },
    { quota: "KEA Private Open Seat", annualFee: "₹10,92,000 - ₹12,00,000", remark: "Merit-based seats open to Karnataka and non-Karnataka applicants" },
    { quota: "KEA Management / NRI Quota", annualFee: "₹43,00,000", remark: "Allotted via KEA NRI registration and vacant seat rounds" },
  ],
  feeNotes: [
    "<strong>Security Caution Money:</strong> A one-time deposit is submitted to KIMS at the time of final reporting.",
    "<strong>Hostel & Mess Costs:</strong> Range from ₹1,60,000 to ₹3,00,000 per year depending on room occupancy variables.",
    "<strong>Regulatory Standards:</strong> Seat matrices and fees remain subject to final KEA notifications.",
  ],
  cutoffSectionTitle: "KEA Karnataka NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "KEA State Govt Quota", scoreRange: "595 - 630 Marks", percentile: "97.5%+" },
    { category: "KEA Private Open Merit", scoreRange: "520 - 580 Marks", percentile: "94.0%+" },
    { category: "Management / NRI sponsored", scoreRange: "180 - 410 Marks", percentile: "65.0%+" },
  ],
  processSectionTitle: "KEA Counselling & Allocation Steps",
  admissionSteps: [
    { title: "Qualify NEET UG", desc: "Secure a valid NEET score exceeding the qualifying percentile declared by the NTA." },
    { title: "Register on KEA Portal", desc: "Complete online registration on the Karnataka Examinations Authority (KEA) website during active windows." },
    { title: "KEA Document Verification", desc: "Attend KEA documentation rounds to verify academic transcripts, domicile, and quota claims." },
    { title: "Lock Selection Option", desc: "Lock 'Kempegowda Institute of Medical Sciences, Bangalore' as your preferred choice in option entry portal." },
    { title: "Allotment & Final Joining", desc: "Download allotment, remit tuition fee online to KEA, and report to KIMS campus to finalize joining formalities." },
  ],
  facilities: [
    { title: "1100-Bed Multi-Specialty Hospital", desc: "Attached super-specialty teaching hospital located in V.V. Puram with heavy OPD patient flows.", icon: HeartPulse },
    { title: "Advanced Diagnostics & Labs", desc: "Equipped with state-of-the-art pathology labs, digital MRI/CT imaging, and modern skill labs.", icon: Activity },
    { title: "Modern Air-Conditioned Classrooms", desc: "Auditorium-style smart lecture theaters equipped with high-grade digital visual displays.", icon: BookOpen },
    { title: "Centralized Digital Library", desc: "Holds vast print volumes, national and international medical journals, and dedicated digital reading zones.", icon: FileText },
    { title: "Secure Accommodation", desc: "Separate, secure hostel quarters for boys and girls with AC/Non-AC layouts and full catering mess.", icon: Building },
    { title: "Recreation Hub", desc: "Lush lawns, playground setups, indoor games, and gym promoting student fitness.", icon: Sparkles },
  ],
  faqs: [
    { q: "Where is KIMS Medical College located?", a: "The pre-clinical academic campus is in Banashankari 2nd Stage, Bangalore, while the clinical teaching hospital is in V.V. Puram, Bangalore, Karnataka." },
    { q: "Is KIMS Bangalore approved by the NMC?", a: "Yes, the MBBS and various postgraduate courses at KIMS are fully recognized and approved by the National Medical Commission (NMC)." },
    { q: "What is the annual MBBS seat matrix at KIMS Bangalore?", a: "KIMS Bangalore has an approved annual intake of 150 MBBS seats." },
    { q: "What is the fee structure for private open seats under KEA?", a: "The KEA Private Open seat tuition fee is approximately ₹10,92,000 to ₹12,00,000 per year. Security deposits and hostel fees are extra." },
    { q: "Who is the current Principal of KIMS Bangalore?", a: "The current Principal of KIMS Bangalore is Dr. H. B. Shivakumar." },
  ],
  formId: "kims",
  quotaOptions: [
    { value: "KEA Govt Quota", label: "KEA Government Quota Seat" },
    { value: "KEA Private Open Seat", label: "KEA Private Open Merit Seat" },
    { value: "Management / NRI", label: "Management / NRI Quota" },
  ],
  counselingNote: "Admissions to KIMS Bangalore are managed by the Karnataka Examinations Authority (KEA). Fill in your details to stay updated on critical notification updates, choice verification, and seat matrices.",
  formDeskLabel: "KEA Registration Desk",
};

export default function KimsBangaloreAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_EMERALD} college={college} />;
}
