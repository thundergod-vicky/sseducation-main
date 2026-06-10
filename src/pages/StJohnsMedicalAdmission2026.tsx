import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_ROYAL } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "St. John's Medical College Bangalore MBBS Admission 2026 - Fees & Cutoff",
  seoDescription: "Read about MBBS Admissions at St. John's Medical College, Bangalore. Access verified 2026 fees, KEA seat distribution, cutoffs, and counseling instructions.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "CollegeOrUniversity",
      "@id": "https://ssadmission.in/st-johns-medical-college-bangalore-admission-2026/#college",
      "name": "St. John's Medical College, Bangalore",
      "alternateName": "SJMC Bangalore",
      "url": "https://www.stjohns.in",
      "description": "St. John's Medical College is a highly respected, non-profit private medical college in Bangalore, recognized by NMC and affiliated with RGUHS.",
      "logo": "https://ssadmission.in/assets/main logo.png",
      "address": { "@type": "PostalAddress", "streetAddress": "Sarjapur Road, John Nagar", "addressLocality": "Bangalore", "addressRegion": "Karnataka", "postalCode": "560034", "addressCountry": "IN" }
    }]
  },
  abbreviation: "SJMC",
  fullName: "St. John's Medical College, Bangalore",
  hindiName: "सेंट जॉन्स मेडिकल कॉलेज, बेंगलुरु",
  affiliation: "Constituent Institution of St. John's National Academy of Health Sciences",
  location: "Sarjapur Road, John Nagar, Bangalore, Karnataka",
  heroTitle: "MBBS Admission & KEA Counseling Guide 2026",
  heroSubtitle: "Explore St. John's Medical College, one of India's most respected non-profit medical institutions. Access verified KEA fee details, seat matrix, and counseling score estimators.",
  heroBadgeText: "Admissions & Information Center 2026-27",
  tickerMessage: "📢 KEA NEET UG 2026 Karnataka state counseling active. | St. John's Medical College choice filling updated. | Catholic Minority quota documentation process open. | Submit profile below for eligibility review.",
  deanName: "Dr. Thomas Joseph",
  deanDesignation: "Dean & Principal",
  deanQuote: "St. John's Medical College has stood for six decades as an institution of conscience — combining academic rigour with compassionate service. Our graduates go on to serve communities across India and around the world.",
  contactEmail: "dean@stjohns.in",
  notices: [
    { text: "St. John's Medical College KEA seat matrix and Christian minority quota allocation", date: "June 08, 2026", tag: "SEAT MATRIX" },
    { text: "Verified first-year total fee structure for KEA 2026 allottees", date: "June 05, 2026", tag: "FEE GUIDE" },
    { text: "Catholic Minority document verification checklist released", date: "June 01, 2026", tag: "MINORITY QUOTA" },
    { text: "Rural service bond requirements and hostel allocation details", date: "May 26, 2026", tag: "HOSTEL INFO" },
  ],
  initialScore: 600,
  predictorMidLabel: "Merit Cutoff (580+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 625) return { status: "High Probability (KEA Open Merit Seat)", text: "Your score is highly competitive. You stand an excellent chance of securing an Open Merit seat (~₹8.1L first year) at St. John's Medical College, one of the most selective institutions in India.", quotaAdvice: "Lock St. John's Medical College in KEA Round 1." };
    if (score >= 580) return { status: "Good Chance (KEA Merit / Christian Quota Seats)", text: "You have a solid chance for KEA Open Merit seats, and an outstanding opportunity if you fall under Catholic Minority or Institutional reservation categories.", quotaAdvice: "Target KEA State counseling Round 1 & 2 option entry." };
    if (score >= 480) return { status: "Eligible for Christian Minority / Special Quotas", text: "You meet typical cutoffs for Catholic Religious Sisters, Roman Catholic Christian categories, or other minority groups inside KEA. Proper documentation will be crucial.", quotaAdvice: "Submit appropriate KEA minority verification certificates." };
    if (score >= 137) return { status: "NEET Qualified (Minority Quotas & Strays)", text: "You have qualified NEET UG. Admission will require specific institutional minority quotas or vacancy rounds. Professional counseling is highly recommended.", quotaAdvice: "Verify Catholic/Christian quota certificate rules." };
    return { status: "NEET Qualification Required", text: "Qualifying NEET UG is mandatory for participating in KEA counseling or registering for St. John's Medical College admissions.", quotaAdvice: "Explore guidance on NEET score improvement or alternative medical courses." };
  },
  overviewTitle: "Overview of St. John's Medical College, Bangalore",
  overviewParagraphs: [
    "Established in <strong>1963</strong> by the Catholic Bishops' Conference of India (CBCI), <strong>St. John's Medical College (SJMC), Bangalore</strong> is one of India's most prestigious and socially committed medical institutions. Affiliated with the <strong>Rajiv Gandhi University of Health Sciences (RGUHS)</strong> and fully recognized by the <strong>National Medical Commission (NMC)</strong>, SJMC stands apart as a non-profit institution.",
    "The college's attached <strong>1,350-bed St. John's Medical College Hospital</strong> is one of Bangalore's premier tertiary care referral centres. All MBBS admissions are processed through Karnataka Examinations Authority (KEA) counseling, with special allocations for Catholic Minority categories."
  ],
  highlights: [
    { title: "Established Year", value: "1963", desc: "Over six decades of non-profit medical care legacy", icon: Calendar },
    { title: "Affiliated University", value: "RGUHS, Karnataka", desc: "Rajiv Gandhi University of Health Sciences", icon: Building },
    { title: "NMC Approval", value: "Recognized", desc: "Approved under National Medical Commission", icon: ShieldCheck },
    { title: "MBBS Intake Matrix", value: "150 Seats", desc: "Annual seats allocated through KEA counseling", icon: Users },
    { title: "Hospital Beds", value: "1350 Beds", desc: "Advanced tertiary-care teaching hospital", icon: HeartPulse },
    { title: "Strategic Location", value: "Bangalore", desc: "Sarjapur Road, John Nagar, Bangalore", icon: MapPin },
  ],
  feeStructure: [
    { quota: "First Year Total Fee", annualFee: "₹8,10,535", remark: "Includes tuition, university fees, and refundable deposits" },
    { quota: "Subsequent Years (Tuition)", annualFee: "₹6,50,000 - ₹7,00,000", remark: "Excludes one-time initial registration/deposits" },
  ],
  feeNotes: [
    "<strong>Rural Service Bond:</strong> All MBBS graduates must complete a mandatory 2-year rural service bond as part of the college's non-profit social mission.",
    "<strong>Hostel Fees:</strong> Separate hostel accommodation available; fees are charged on actual occupancy basis.",
    "<strong>Note:</strong> Fees are subject to KEA and NMC regulatory revisions for each academic session.",
  ],
  cutoffSectionTitle: "KEA Karnataka NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "KEA Open General Merit", scoreRange: "610 - 650 Marks", percentile: "98.8%+" },
    { category: "Catholic Christian Quotas", scoreRange: "480 - 580 Marks", percentile: "93.0%+" },
    { category: "Reserved Categories (Govt)", scoreRange: "450 - 510 Marks", percentile: "90.0%+" },
  ],
  processSectionTitle: "KEA Counselling & Allocation Steps",
  admissionSteps: [
    { title: "Qualify NEET UG Exam", desc: "Secure a score meeting or exceeding the general qualifying cutoff published by the NTA." },
    { title: "Register on KEA Portal", desc: "Complete online registration on the Karnataka Examinations Authority (KEA) site during active portals." },
    { title: "Document Verification", desc: "Produce requisite category, minority (e.g. Christian Minority), or domicile certificates for KEA verification." },
    { title: "Lock Selection Choices", desc: "Submit your choice entry list placing 'St. John's Medical College, Bangalore' at the top of your list." },
    { title: "Reporting & Security Bond", desc: "Download KEA allotment, submit the first-year fee online, and report to St. John's to complete joining and sign service bonds." },
  ],
  facilities: [
    { title: "1350-Bed Super-Specialty Hospital", desc: "Tertiary teaching healthcare center featuring high OPD volumes and comprehensive medical and surgical specialties.", icon: HeartPulse },
    { title: "Advanced Pathology & Skill Labs", desc: "Advanced simulation labs, diagnostic setups, and research infrastructure promoting deep learning.", icon: Activity },
    { title: "Smart Amphitheater Classrooms", desc: "Spacious, fully air-conditioned academic lecture chambers with modern projection and acoustic setups.", icon: BookOpen },
    { title: "Academic Knowledge Center", desc: "Vast collection of national and international clinical research journals, textbooks, and electronic journals.", icon: FileText },
    { title: "Secure Accommodation Options", desc: "Separate, secure hostel quarters for male and female candidates with all basic utilities.", icon: Building },
    { title: "Sports Complex", desc: "Includes play courts, gym facilities, and lush lawns promoting physical wellness.", icon: Sparkles },
  ],
  faqs: [
    { q: "Where is St. John's Medical College located?", a: "The college is located on Sarjapur Road, John Nagar, Bangalore, Karnataka - 560034." },
    { q: "Is St. John's Medical College a government or private college?", a: "It is a highly respected, non-profit private medical college established by the CBCI, affiliated with RGUHS and recognized by the NMC." },
    { q: "How many MBBS seats are available annually?", a: "St. John's has an annual intake capacity of 150 MBBS seats." },
    { q: "Are admissions open to non-Karnataka candidates?", a: "Yes, non-Karnataka candidates can apply under the KEA Open Merit seats, though admissions are highly competitive due to the national reputation and affordable fee structure." },
    { q: "What is the service bond requirement at St. John's?", a: "All MBBS graduates are required to complete a mandatory 2-year rural service bond as part of the college's non-profit social mission." },
  ],
  formId: "sjmc",
  quotaOptions: [
    { value: "KEA Govt Quota", label: "KEA Government Quota Seat" },
    { value: "KEA Private Open Seat", label: "KEA Private Open Merit Seat" },
    { value: "Catholic Minority", label: "Catholic / Christian Minority Quota" },
    { value: "Management / NRI", label: "Management / NRI Quota" },
  ],
  counselingNote: "Admissions to St. John's Medical College are managed by the Karnataka Examinations Authority (KEA) with special allocations for Catholic Minority categories. Fill in your details to stay updated on counseling notifications and choice verification.",
  formDeskLabel: "KEA Registration Desk",
};

export default function StJohnsMedicalAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_ROYAL} college={college} />;
}
