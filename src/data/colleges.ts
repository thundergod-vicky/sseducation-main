import rvceCampus from "@/assets/rvce-campus.jpg";
import rvceBuilding from "@/assets/rvce-building.jpg";
import rvceLab from "@/assets/rvce-lab.jpg";
import ramaiahCampus from "@/assets/ramaiah-campus.jpg";
import ramaiahBuilding from "@/assets/ramaiah-building.jpg";
import ramaiahLab from "@/assets/ramaiah-lab.jpg";
import iemCampus from "@/assets/iem-campus.jpg";
import iemBuilding from "@/assets/iem-building.jpg";
import iemLab from "@/assets/iem-lab.jpg";
import celebrateImg from "@/assets/students-celebrate.jpg";

export type CollegeConfig = {
  slug: string;
  short: string;
  name: string;
  city: string;
  state: string;
  hero: {
    eyebrow: string;
    headline: string;
    headlineHighlight: string;
    subline: string;
    subhead: string;
  };
  trustStats: { value: string; label: string }[];
  carousel: { img: string; eyebrow: string; title: string; subtitle: string }[];
  snapshot: { label: string; value: string }[];
  about: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    body: string;
    image: string;
    imageAlt: string;
    floatStat: { value: string; label: string };
    floatStat2: { value: string; label: string };
  };
  why: {
    title: string;
    titleHighlight: string;
    image: string;
    imageAlt: string;
    imageOverlayTitle: string;
    imageOverlaySubtitle: string;
    points: { title: string; desc: string; iconKey: string }[];
  };
  process: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  cta: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subline: string;
    image: string;
  };
  seo: {
    title: string;
    description: string;
  };
};

export const COLLEGES: Record<string, CollegeConfig> = {
  rvce: {
    slug: "rv-college-btech-admission-2026",
    short: "RVCE",
    name: "R.V. College of Engineering",
    city: "Bangalore",
    state: "Karnataka",
    hero: {
      eyebrow: "Top 50 Engineering Colleges in India",
      headline: "Get B.Tech Admission in",
      headlineHighlight: "RVCE Bangalore 2026",
      subline: "Direct Seat Available — Bihar, Jharkhand & WB Students Welcome",
      subhead:
        "One of Bangalore's most prestigious engineering colleges. Highest package ₹1.15 Crore. SS Education has helped students from Bihar & Jharkhand secure seats here.",
    },
    trustStats: [
      { value: "₹1.15 Cr", label: "Highest Pkg" },
      { value: "₹15.24 LPA", label: "Average" },
      { value: "Bangalore", label: "Tech Capital" },
    ],
    carousel: [
      { img: rvceCampus, eyebrow: "Top 50 in India", title: "Premier Bangalore Campus", subtitle: "Decades of engineering excellence" },
      { img: rvceBuilding, eyebrow: "Modern Infrastructure", title: "World-Class Facilities", subtitle: "State-of-the-art labs & classrooms" },
      { img: rvceLab, eyebrow: "₹1.15 Crore Highest", title: "Google • Amazon • Microsoft", subtitle: "Top global recruiters on campus" },
    ],
    snapshot: [
      { label: "Location", value: "Bangalore, Karnataka" },
      { label: "Rank", value: "Top 50 Engineering India" },
      { label: "Highest Package", value: "₹1.15 Crore" },
      { label: "Average Package", value: "₹15.24 LPA" },
      { label: "Total Fees", value: "₹6 – ₹8 Lakhs" },
      { label: "Seats", value: "Limited — highly sought after" },
    ],
    about: {
      eyebrow: "About the College",
      title: "Bangalore's Most",
      titleHighlight: "Prestigious Engineering College",
      body: "R.V. College of Engineering (RVCE), Bangalore is one of Karnataka's most prestigious and competitive private engineering institutions. With a highest placement package of ₹1.15 Crore and an average of ₹15.24 LPA, RVCE is a dream destination for B.Tech aspirants who want Bangalore-level placements. SS Education specialises in helping students from Bihar, Jharkhand, and West Bengal navigate the RVCE admission process.",
      image: rvceBuilding,
      imageAlt: "RVCE Bangalore main campus building",
      floatStat: { value: "₹1.15 Cr", label: "Highest Package 2026" },
      floatStat2: { value: "Top 50", label: "Engineering India" },
    },
    why: {
      title: "Why Students Choose",
      titleHighlight: "RVCE Bangalore",
      image: rvceLab,
      imageAlt: "RVCE engineering students in lab",
      imageOverlayTitle: "India's No.1 IT Job Market",
      imageOverlaySubtitle: "Located in Bangalore — Silicon Valley of India",
      points: [
        { title: "Highest Package ₹1.15 Crore", desc: "Average ₹15.24 LPA — among the best in India.", iconKey: "trophy" },
        { title: "Bangalore — India's Tech Capital", desc: "Number one IT job market in the country.", iconKey: "map" },
        { title: "Google, Microsoft, Amazon Recruiters", desc: "Plus Bosch, Intel and 200+ top companies.", iconKey: "building" },
        { title: "Top CSE, ISE, ECE Branches", desc: "Excellent reputation for tech-focused departments.", iconKey: "code" },
        { title: "Strong Global Alumni Network", desc: "Across top MNCs and startups worldwide.", iconKey: "users" },
        { title: "NAAC Accredited Excellence", desc: "Decades of consistent academic distinction.", iconKey: "award" },
        { title: "Management Quota Available", desc: "NRI seats too — eligible students welcome.", iconKey: "sparkles" },
        { title: "End-to-End SS Education Support", desc: "From eligibility to seat confirmation.", iconKey: "check" },
      ],
    },
    process: [
      { title: "Call SS Education", desc: "Share your 12th marks and JEE/CET score with us." },
      { title: "Eligibility Evaluation", desc: "We evaluate management quota & other seat options." },
      { title: "Application Submission", desc: "Documentation and application support provided." },
      { title: "Counselling Coordination", desc: "We coordinate directly with RVCE admission office." },
      { title: "Seat Confirmation", desc: "Fee structure guidance and hostel support included." },
    ],
    faqs: [
      { q: "Is it possible to get RVCE admission from Bihar without KCET rank?", a: "Yes, through management quota seats which do not require KCET. Contact SS Education to understand the eligibility and process for out-of-state students." },
      { q: "What is the total fee at RVCE?", a: "The total B.Tech fee at RVCE is approximately ₹6–8 Lakhs depending on the branch and seat type. Management quota fees may differ." },
      { q: "Which branch is best at RVCE?", a: "CSE and ISE are the strongest branches with highest placement records. ECE and Mechanical also have strong industry connections." },
      { q: "How early should I apply for RVCE admission?", a: "RVCE seats fill up very fast. Ideally apply in April–May. Contact SS Education immediately for the current seat availability status." },
    ],
    cta: {
      eyebrow: "Limited RVCE Seats — 2026 Closing Soon",
      title: "Secure Your Seat at",
      titleHighlight: "RVCE Bangalore 2026",
      subline: "Talk to our RVCE expert counsellor for free and lock in your B.Tech seat today.",
      image: celebrateImg,
    },
    seo: {
      title: "RVCE Bangalore B.Tech Admission 2026 — Direct Seat | SS Education",
      description: "Get direct B.Tech admission in RV College of Engineering Bangalore 2026. ₹1.15 Cr highest package. Management quota for Bihar, Jharkhand students. Call +91 99456 67977.",
    },
  },

  ramaiah: {
    slug: "ramaiah-institute-btech-admission-2026",
    short: "RIT",
    name: "Ramaiah Institute of Technology",
    city: "Bangalore",
    state: "Karnataka",
    hero: {
      eyebrow: "60+ Years of Engineering Legacy",
      headline: "Get B.Tech Admission in",
      headlineHighlight: "Ramaiah Bangalore 2026",
      subline: "Direct Seat Available — Bihar, WB & Odisha Students Welcome",
      subhead:
        "60+ years of engineering excellence in Bangalore. Highest package ₹50 LPA. SS Education guides students from Bihar, WB & Odisha to secure seats here.",
    },
    trustStats: [
      { value: "₹50 LPA", label: "Highest Pkg" },
      { value: "60+ Yrs", label: "Legacy" },
      { value: "Bangalore", label: "IT Hub" },
    ],
    carousel: [
      { img: ramaiahCampus, eyebrow: "Since 1962", title: "Heritage Engineering Campus", subtitle: "60+ years of academic excellence" },
      { img: ramaiahBuilding, eyebrow: "Top Karnataka Private", title: "Modern Bangalore Campus", subtitle: "Strong industry connections" },
      { img: ramaiahLab, eyebrow: "Industry-Ready Labs", title: "CSE • ECE • Mechanical", subtitle: "Hands-on learning excellence" },
    ],
    snapshot: [
      { label: "Location", value: "Bangalore, Karnataka" },
      { label: "Rank", value: "Top Private Karnataka" },
      { label: "Highest Package", value: "₹50 LPA" },
      { label: "Average Package", value: "₹7.66 LPA" },
      { label: "Total Fees", value: "₹7 – ₹10 Lakhs" },
      { label: "Seats", value: "Limited management quota" },
    ],
    about: {
      eyebrow: "About the College",
      title: "60+ Years of",
      titleHighlight: "Engineering Legacy in Bangalore",
      body: "M.S. Ramaiah Institute of Technology (RIT) is one of Bangalore's most established and respected private engineering colleges with over 60 years of legacy. With a highest package of ₹50 LPA and strong industry connections across Bangalore's IT and manufacturing sectors, RIT offers B.Tech students from Eastern India an excellent gateway to a Bangalore career. SS Education has a proven track record of helping students from Bihar, Jharkhand, and West Bengal secure admission here.",
      image: ramaiahBuilding,
      imageAlt: "Ramaiah Institute of Technology Bangalore campus",
      floatStat: { value: "60+", label: "Years of Legacy" },
      floatStat2: { value: "₹50 LPA", label: "Highest Package" },
    },
    why: {
      title: "Why Students Choose",
      titleHighlight: "Ramaiah Bangalore",
      image: ramaiahLab,
      imageAlt: "Ramaiah engineering students in lab",
      imageOverlayTitle: "Established Industry Partners",
      imageOverlaySubtitle: "Infosys, Wipro, TCS, Bosch, Samsung & more",
      points: [
        { title: "60+ Years of Bangalore Legacy", desc: "Engineering education tradition since 1962.", iconKey: "award" },
        { title: "₹50 LPA Highest | ₹7.66 LPA Avg", desc: "Strong placement records year on year.", iconKey: "trophy" },
        { title: "Top Recruiters On Campus", desc: "Infosys, Wipro, TCS, Bosch, Samsung & more.", iconKey: "building" },
        { title: "Strong CSE, ECE, Mechanical", desc: "Excellent departments with industry ties.", iconKey: "code" },
        { title: "Bangalore Location Advantage", desc: "Direct access to India's IT job market.", iconKey: "map" },
        { title: "Management Quota for Outside Karnataka", desc: "Open to Bihar, Jharkhand, WB students.", iconKey: "sparkles" },
        { title: "Established Alumni Network", desc: "In top IT companies across India and abroad.", iconKey: "users" },
        { title: "End-to-End SS Education Support", desc: "From eligibility to fee guidance.", iconKey: "check" },
      ],
    },
    process: [
      { title: "Share Your Profile", desc: "12th marks, JEE score, and preferred branch with SS Education." },
      { title: "Eligibility Verification", desc: "We verify management quota or NRI category eligibility." },
      { title: "Application Submission", desc: "Application + all required documents prepared by us." },
      { title: "Counselling Support", desc: "Coordination with RIT admission office." },
      { title: "Seat Booking", desc: "Fee payment guidance and hostel arrangement support." },
    ],
    faqs: [
      { q: "Can students from Bihar get admission in Ramaiah without KCET?", a: "Yes. Management quota seats at RIT are open to students from all states without KCET. Contact SS Education to check current seat availability." },
      { q: "What is the total B.Tech fee at Ramaiah Institute?", a: "The total fee ranges from ₹7 to ₹10 Lakhs depending on the branch and seat category. We provide a complete fee breakdown before you decide." },
      { q: "Is Ramaiah good for CSE placements?", a: "Yes, RIT has a strong CSE placement record with top companies like Infosys, Wipro, and Bosch actively recruiting. The Bangalore location adds significant advantage." },
      { q: "How does SS Education help with RIT admission?", a: "We handle the full process — eligibility, application, documentation, counselling coordination, and fee guidance. You focus on preparation, we handle the admission." },
    ],
    cta: {
      eyebrow: "Limited Ramaiah Seats — 2026 Closing Soon",
      title: "Don't Miss Your Seat at",
      titleHighlight: "Ramaiah Institute 2026",
      subline: "Talk to our RIT expert counsellor for free and lock in your B.Tech seat today.",
      image: celebrateImg,
    },
    seo: {
      title: "Ramaiah Institute B.Tech Admission 2026 — Direct Seat | SS Education",
      description: "Get direct B.Tech admission in M.S. Ramaiah Institute of Technology Bangalore 2026. ₹50 LPA highest package. Management quota for Bihar, Jharkhand students. Call +91 99456 67977.",
    },
  },

  iem: {
    slug: "iem-kolkata-btech-admission-2026",
    short: "IEM",
    name: "Institute of Engineering & Management",
    city: "Kolkata",
    state: "West Bengal",
    hero: {
      eyebrow: "Top Private College in West Bengal",
      headline: "Get B.Tech Admission in",
      headlineHighlight: "IEM Kolkata 2026",
      subline: "Direct Seat Available — Closest Top College for Bihar & Jharkhand",
      subhead:
        "Closest top-ranked private engineering college for students from Bihar, Jharkhand, and Odisha. Affordable fees, strong placements. Call SS Education now.",
    },
    trustStats: [
      { value: "₹42 LPA", label: "Highest Pkg" },
      { value: "₹5-7 L", label: "Total Fees" },
      { value: "Kolkata", label: "Near Bihar" },
    ],
    carousel: [
      { img: iemCampus, eyebrow: "West Bengal's No.1 Private", title: "Premier Kolkata Campus", subtitle: "Top engineering institution in WB" },
      { img: iemBuilding, eyebrow: "Affordable Excellence", title: "Total Fees ₹5–7 Lakhs", subtitle: "Best value among top private colleges" },
      { img: iemLab, eyebrow: "₹42 LPA Highest Package", title: "TCS • Infosys • Cognizant • Wipro", subtitle: "Strong CSE & IT placements" },
    ],
    snapshot: [
      { label: "Location", value: "Kolkata, West Bengal" },
      { label: "Rank", value: "Top Private College WB" },
      { label: "Highest Package", value: "₹42 LPA" },
      { label: "Average Package", value: "₹6.5 LPA" },
      { label: "Total Fees", value: "₹5 – ₹7 Lakhs" },
      { label: "Seats", value: "Multiple branches available" },
    ],
    about: {
      eyebrow: "About the College",
      title: "West Bengal's Premier",
      titleHighlight: "Private Engineering Institution",
      body: "Institute of Engineering & Management (IEM), Kolkata is West Bengal's premier private engineering institution and one of the most sought-after colleges for students from Bihar, Jharkhand, and Eastern India. With affordable fees starting from ₹5 Lakhs, strong CSE and IT placements, and proximity to Eastern India, IEM is the smart choice for students who want quality without relocating far from home. SS Education, based in Durgapur, has deep expertise in IEM admissions and can fast-track your seat booking.",
      image: iemBuilding,
      imageAlt: "IEM Kolkata main campus building",
      floatStat: { value: "₹5 L+", label: "Affordable Total Fees" },
      floatStat2: { value: "2 hrs", label: "From Durgapur" },
    },
    why: {
      title: "Why Students Choose",
      titleHighlight: "IEM Kolkata",
      image: iemLab,
      imageAlt: "IEM Kolkata IT lab with students coding",
      imageOverlayTitle: "Strong IT Placement Record",
      imageOverlaySubtitle: "TCS, Infosys, Cognizant, Wipro & more",
      points: [
        { title: "Top Private Engineering — WB", desc: "Consistently ranked best in West Bengal.", iconKey: "trophy" },
        { title: "₹42 LPA Highest | ₹6.5 LPA Avg", desc: "Strong placement record year after year.", iconKey: "award" },
        { title: "Most Affordable Top Private", desc: "Total fees just ₹5–7 Lakhs.", iconKey: "sparkles" },
        { title: "Closest Premium College for Bihar", desc: "Just hours from Bihar & Jharkhand.", iconKey: "map" },
        { title: "Strong IT Placements", desc: "TCS, Infosys, Cognizant, Wipro and more.", iconKey: "building" },
        { title: "Multiple Branches Available", desc: "Good seat availability across departments.", iconKey: "code" },
        { title: "SS Education in Durgapur", desc: "We know IEM admissions inside out.", iconKey: "users" },
        { title: "Same-Day Counselling Response", desc: "Quick turnaround for your queries.", iconKey: "check" },
      ],
    },
    process: [
      { title: "Call SS Education", desc: "Share your 12th marks and WBJEE/JEE score." },
      { title: "Seat & Branch Check", desc: "We check availability and best-fit branch for your profile." },
      { title: "Application Submission", desc: "We submit application and prepare all documents." },
      { title: "Counselling Support", desc: "Seat allotment support — we attend with you if needed." },
      { title: "Admission Confirmation", desc: "Fee payment and hostel guidance included." },
    ],
    faqs: [
      { q: "Can students from Bihar or Jharkhand get admission in IEM Kolkata?", a: "Yes, absolutely. IEM accepts students from all states. Management quota seats are available without WBJEE. Contact SS Education for immediate availability." },
      { q: "What is the total B.Tech fee at IEM Kolkata?", a: "Total fees range from ₹5 to ₹7 Lakhs depending on the branch — making it one of the most affordable top private colleges for Eastern India students." },
      { q: "Is IEM Kolkata good for CSE and IT?", a: "Yes. IEM has a strong CSE and IT placement record with companies like TCS, Infosys, Cognizant, and Wipro consistently recruiting from campus." },
      { q: "Why choose SS Education for IEM admission?", a: "Our office is in Durgapur — just 2 hours from Kolkata. We have direct contacts and years of experience placing students in IEM. Call us for same-day response." },
    ],
    cta: {
      eyebrow: "Limited IEM Seats — 2026 Closing Soon",
      title: "Secure Your Seat at",
      titleHighlight: "IEM Kolkata 2026",
      subline: "Talk to our IEM expert counsellor for free and lock in your B.Tech seat today.",
      image: celebrateImg,
    },
    seo: {
      title: "IEM Kolkata B.Tech Admission 2026 — Direct Seat | SS Education",
      description: "Get direct B.Tech admission in IEM Kolkata 2026. West Bengal's top private engineering college. Affordable ₹5-7L fees. Closest premium college for Bihar & Jharkhand. Call +91 99456 67977.",
    },
  },
};