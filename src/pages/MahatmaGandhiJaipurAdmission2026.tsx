import MbbsCollegeLayout from "@/components/college/MbbsCollegeLayout";
import { THEME_SAFFRON } from "@/components/college/MbbsThemes";
import type { CollegeData } from "@/components/college/MbbsCollegeLayout";
import { HeartPulse, Activity, FileText, ShieldCheck, Users, MapPin, BookOpen, Sparkles, Building, Calendar } from "lucide-react";

const college: CollegeData = {
  seoTitle: "Mahatma Gandhi Medical College (MGMCH) Jaipur MBBS Admission 2026",
  seoDescription: "Explore MBBS Admission at Mahatma Gandhi Medical College and Hospital (MGMCH), Jaipur. Get details on fees, seat intake, Rajasthan NEET cutoff, and counseling support.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://ssadmission.in/mahatma-gandhi-medical-college-jaipur-admission-2026/#college",
        "name": "Mahatma Gandhi Medical College and Hospital (MGMCH), Jaipur",
        "alternateName": "MGMCH Jaipur",
        "url": "https://www.mgumst.org",
        "description": "Mahatma Gandhi Medical College and Hospital, Jaipur is a leading private medical college in Rajasthan, constituent under Mahatma Gandhi University of Medical Sciences & Technology (MGUMST).",
        "logo": "https://ssadmission.in/assets/main logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "RIICO Institutional Area, Sitapura, Tonk Road",
          "addressLocality": "Jaipur",
          "addressRegion": "Rajasthan",
          "postalCode": "302022",
          "addressCountry": "IN"
        }
      }
    ]
  },
  abbreviation: "MG",
  fullName: "MAHATMA GANDHI MEDICAL COLLEGE & HOSPITAL, JAIPUR",
  hindiName: "महात्मा गांधी चिकित्सा महाविद्यालय एवं अस्पताल, जयपुर",
  affiliation: "Constituent Unit of Mahatma Gandhi University of Medical Sciences & Technology (MGUMST)",
  location: "Sitapura Institutional Corridor, Tonk Road, Jaipur",
  heroTitle: "MBBS Admission Guide & Counseling Seat Matrix mapping",
  heroSubtitle: "Explore Mahatma Gandhi Medical College, Jaipur. Direct interface to check seat availabilities, actual annual fees, category eligibility matrices, and live NEET UG state-quota cutoffs.",
  heroBadgeText: "ADMISSIONS & INFORMATION CENTER 2026-27",
  tickerMessage: "NEET UG 2026 Rajasthan state counseling registrations started. | MGMCH Jaipur seat matrix mapping is live. | Submit profile below for eligibility checks. | Hostel allotments scheduled.",
  deanName: "Dr. G.N. Saxena",
  deanDesignation: "Dean Academics",
  deanQuote: "",
  contactEmail: "info@mgumst.org",
  notices: [
  {
    "text": "Detailed Fee guidelines and concessions for Management Quota MBBS seats",
    "date": "June 04, 2026",
    "tag": "FEE NOTICE"
  },
  {
    "text": "NMC Seat Matrix verification for Mahatma Gandhi University Medical Programs",
    "date": "June 02, 2026",
    "tag": "SEAT MATRIX"
  },
  {
    "text": "Rajasthan NEET UG State counseling registration steps and option-entry guide",
    "date": "May 29, 2026",
    "tag": "COUNSELING"
  },
  {
    "text": "Hostel rooms allocation criteria (Single / Double sharing) for MBBS 1st Year",
    "date": "May 25, 2026",
    "tag": "HOSTEL"
  }
],
  initialScore: 480,
  predictorMidLabel: "State Cutoff (550+)",
  getEligibilityAnalysis: (score, _cat) => {
    if (score >= 580) {
      return {
        status: "Excellent Merit Score",
        text: "You have an outstanding chance for State Quota counseling rounds at Mahatma Gandhi Medical College, Jaipur. Recommended to prioritize MGMCH as first preference.",
        color: "text-blue-900 border-blue-200 bg-blue-50",
        quotaAdvice: "Target State counseling Round 1.",
        btnStyle: "bg-blue-800 hover:bg-blue-900 text-white"
      };
    } else if (score >= 500) {
      return {
        status: "Competitive (State / Management)",
        text: "You are highly competitive for State Quota rounds and hold an absolute guarantee for Management Quota seat allocations at MGMCH Jaipur.",
        color: "text-sky-900 border-sky-200 bg-sky-50",
        quotaAdvice: "Fill choices for both State and Management seats.",
        btnStyle: "bg-sky-700 hover:bg-sky-850 text-white"
      };
    } else if (score >= 350) {
      return {
        status: "Management Quota Eligible",
        text: "You qualify perfectly for the open Management Quota seats at Mahatma Gandhi Medical College, Jaipur. Choice filling needs optimization.",
        color: "text-amber-900 border-amber-200 bg-amber-50/40",
        quotaAdvice: "Explore Management seats and secure counselling guidance.",
        btnStyle: "bg-amber-800 hover:bg-amber-900 text-white"
      };
    } else if (score >= 130) {
      return {
        status: "NRI / Sponsored Pathway",
        text: "You have qualified NEET UG. Admission pathways will rely heavily on NRI-sponsored quota, vacancy configurations, or deemed counseling.",
        color: "text-slate-800 border-slate-200 bg-slate-100/50",
        quotaAdvice: "Request NRI quota structure and fee balance check.",
        btnStyle: "bg-slate-700 hover:bg-slate-800 text-white"
      };
    } else {
      return {
        status: "Qualifying Score Required",
        text: "Your score is below the estimated qualifying cutoff. NEET qualification is mandatory for all medical seat matrix allocations in India.",
        color: "text-red-950 border-red-200 bg-red-50/20",
        quotaAdvice: "Connect for NEET coaching suggestions or alternative medical courses.",
        btnStyle: "bg-red-900 hover:bg-red-950 text-white"
      };
    }
  },
  overviewTitle: "Overview of MAHATMA GANDHI MEDICAL COLLEGE & HOSPITAL, JAIPUR",
  overviewParagraphs: [
  "Established in the year 2000, <strong>Mahatma Gandhi Medical College and Hospital (MGMCH), Jaipur</strong> is one of the premier private medical colleges in Rajasthan and North India. As a constituent unit of the Mahatma Gandhi University of Medical Sciences and Technology (MGUMST), the college is fully approved by the <strong>National Medical Commission (NMC)</strong>.",
  "MGMCH Jaipur has evolved into a premier center for advanced healthcare and high-quality medical pedagogy. Spanning an expansive urban campus in Jaipur's institutional Sitapura area, the college is attached to a 1000+ bed multi-specialty tertiary care hospital, ensuring students receive exceptional hands-on clinical exposure and practical diagnostics training."
],
  highlights: [
    {
      title: "Established Year",
      value: "2000",
      desc: "Two decades of academic legacy",
      icon: Calendar,
    },
    {
      title: "Affiliated Body",
      value: "MGUMST University",
      desc: "Constituent unit of a premium deemed university",
      icon: Building,
    },
    {
      title: "NMC Approval Status",
      value: "Approved",
      desc: "Recognized by National Medical Commission",
      icon: ShieldCheck,
    },
    {
      title: "MBBS Intake Capacity",
      value: "250 Seats",
      desc: "Largest approved seat matrix in Rajasthan",
      icon: Users,
    },
    {
      title: "Clinical Support",
      value: "1000+ Beds",
      desc: "Attached super-specialty hospital with heavy OPD flow",
      icon: HeartPulse,
    },
    {
      title: "Aesthetic Location",
      value: "Jaipur",
      desc: "Sitapura Institutional Corridor, Tonk Road, Jaipur",
      icon: MapPin,
    },
  ],
  feeStructure: [
    { quota: "State / Government Quota", annualFee: "₹19,50,000", remark: "Reserved for Rajasthan Domicile merit holders" },
    { quota: "Management Quota (All India)", annualFee: "₹26,75,000", remark: "Open to candidates from all Indian States" },
    { quota: "NRI / Sponsored Quota", annualFee: "$45,000 (Approx ₹31.5L)", remark: "NRI sponsored seats & global applicants" },
  ],
  feeNotes: [
  "<strong>Hostel Fees:</strong> Double sharing charges from ₹2.24 Lakhs to ₹3.92 Lakhs per year depending on AC preferences.",
  "<strong>Security Deposit:</strong> A one-time refundable security deposit of ₹2,00,000 is required at admission.",
  "<strong>Bank Guarantee:</strong> A bank guarantee for remaining course years is mandatory as per state directives."
],
  cutoffSectionTitle: "Estimated NEET UG Cutoff Ranges",
  cutoffs: [
    { category: "State Quota - General (UR)", scoreRange: "560 - 590 Marks", percentile: "96.5%+" },
    { category: "State Quota - OBC", scoreRange: "540 - 570 Marks", percentile: "95.2%+" },
    { category: "State Quota - SC / ST", scoreRange: "410 - 450 Marks", percentile: "85.0%+" },
    { category: "Management Quota (All India Open)", scoreRange: "350 - 480 Marks", percentile: "80.0%+" },
  ],
  processSectionTitle: "Admission Counseling Steps",
  admissionSteps: [
    { title: "Appearing for NEET UG", desc: "Must qualify the NTA NEET-UG exam with the minimum required category-wise percentile." },
    { title: "State Counseling Registration", desc: "Register on the Rajasthan State Medical Counselling portal as a Domicile or All-India Management candidate." },
    { title: "Preference Choice-Filling", desc: "Select Mahatma Gandhi Medical College, Jaipur (MGMCH) as your high-priority choice during active rounds." },
    { title: "Seat Allotment & Document Verification", desc: "Report to the counseling board for verification of scorecards, domicile certificates, and physical fitness certificates." },
    { title: "Fee Remittance & Final Enrollment", desc: "Pay the first-year annual tuition fee and submit the bank guarantee to secure the MBBS seat." }
  ],
  facilities: [
    {
      title: "1000+ Bed Attached Hospital",
      desc: "State-of-the-art diagnostic suites, critical care units, and surgery wings handling heavy outpatient volume.",
      icon: HeartPulse,
    },
    {
      title: "High-Fidelity Simulation Unit",
      desc: "Interactive medical simulator mannequins, providing advanced virtual training environments for surgical procedures.",
      icon: Activity,
    },
    {
      title: "AC Smart Classrooms",
      desc: "Auditorium-style lecture theatres featuring electronic screens and digital acoustic systems.",
      icon: BookOpen,
    },
    {
      title: "24/7 Central Library",
      desc: "Spanning thousands of square feet, equipped with international journal indices, high-speed Wi-Fi, and cubicle spaces.",
      icon: FileText,
    },
    {
      title: "In-Campus Hostels",
      desc: "Hygienic living blocks with modern double sharing AC rooms, standard mess, recreation lounge, and round-the-clock wardens.",
      icon: Building,
    },
    {
      title: "Elite Sports Center",
      desc: "Lush outdoor playfields, indoor games club, and fitness gymnasium to promote physical well-being.",
      icon: Sparkles,
    },
  ],
  faqs: [
    {
      q: "Where is Mahatma Gandhi Medical College (MGMCH) located?",
      a: "MGMCH is located in Sitapura Institutional Area, Tonk Road, Jaipur, Rajasthan - 302022. It is highly accessible via the Jaipur International Airport and the railway junctions."
    },
    {
      q: "What is the annual MBBS intake capacity at MGMCH Jaipur?",
      a: "The college has an approved intake capacity of 250 MBBS seats per academic year, which are allocated through the Rajasthan NEET UG counseling process."
    },
    {
      q: "Is NEET qualification mandatory for admission at MGMCH Jaipur?",
      a: "Yes, NEET UG qualification is strictly mandatory for all categories of seats, including State Quota, Management Quota, and NRI Quota. No candidate can secure MBBS admission without qualifying NEET."
    },
    {
      q: "What are the hostel charges at Mahatma Gandhi Medical College, Jaipur?",
      a: "The hostel fees range between approximately ₹2.24 Lakhs to ₹3.92 Lakhs per year depending on the preference of single/double occupancy, AC/Non-AC, and attached bathroom configurations."
    },
    {
      q: "Which university is MGMCH affiliated with?",
      a: "MGMCH is a constituent college of Mahatma Gandhi University of Medical Sciences and Technology (MGUMST), Jaipur, which is a recognized private medical university."
    }
  ],
  formId: "mgmch",
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

// return (
//   <main className="min-h-screen bg-slate-100 font-sans text-slate-800 antialiased selection:bg-[#002d62] selection:text-white pt-20">
//     
//     {/* 2. BILINGUAL INSTITUTION LOGO HEADER (AIIMS Style) */}
//     <header className="bg-white border-b-4 border-[#d4af37] py-4 relative z-40 shadow-sm">
//       <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
//         <div className="flex items-center gap-4 text-center md:text-left">
//           {/* Mock crest/shield */}
//           <div className="h-16 w-16 bg-[#002d62] text-white rounded-full flex items-center justify-center border-2 border-[#d4af37] shrink-0 font-serif font-black shadow-md text-xl">
//             MG
//           </div>
//           <div className="flex flex-col">
//             <h2 className="text-[#002d62] text-base font-black tracking-wide font-sans block leading-none">
//               महात्मा गांधी चिकित्सा महाविद्यालय एवं अस्पताल, जयपुर
//             </h2>
//             <h1 className="text-[#002d62] text-xl sm:text-2xl font-serif font-black tracking-tight leading-tight mt-1">
//               MAHATMA GANDHI MEDICAL COLLEGE & HOSPITAL, JAIPUR
//             </h1>
//             <p className="text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-0.5 leading-none">
//               Constituent Unit of Mahatma Gandhi University of Medical Sciences & Technology (MGUMST)
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center gap-3">
//           <div className="bg-[#f0f4fa] border border-[#d2dbe5] rounded-xl px-4 py-2 flex items-center gap-3">
//             <ShieldCheck className="h-8 w-8 text-[#002d62]" />
//             <div>
//               <span className="block text-[8px] font-sans font-black text-slate-400 uppercase tracking-widest leading-none">Academic status</span>
//               <span className="block text-xs font-black text-[#002d62] mt-0.5 font-sans">NMC APPROVED PORTAL</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
// 
//     {/* 3. PRIMARY BLUE NAV BAR (AIIMS Style) */}
//     <nav className="bg-[#002d62] text-white sticky top-[64px] z-45 shadow-md border-b border-[#00214d]">
//       <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center py-1">
//         <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide flex-grow mr-4">
//           {menuItems.map((item) => {
//             const isActive = activeSection === item.id;
//             return (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`py-3.5 px-5 text-xs font-black uppercase tracking-widest transition-colors relative border-r border-[#001f4d] ${
//                   isActive 
//                     ? "bg-[#d4af37] text-slate-900" 
//                     : "hover:bg-[#001f4d] text-white/90 hover:text-white"
//                 }`}
//               >
//                 {item.label}
//                 {isActive && (
//                   <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400" />
//                 )}
//               </button>
//             );
//           })}
//         </div>
//         <button
//           onClick={scrollToForm}
//           className="bg-amber-400 text-slate-900 hover:bg-amber-500 font-sans font-black text-[10px] uppercase tracking-widest px-5 py-2.5 rounded-lg border border-amber-500 shadow-md transition-all active:scale-95 ml-4 shrink-0 hidden md:block"
//         >
//           Counseling Desk
//         </button>
//       </div>
//     </nav>
// 
//     {/* 4. CAROUSEL BANNER & NOTICE TICKER */}
//     <section className="relative z-10 overflow-hidden bg-slate-900 text-white h-[260px] sm:h-[360px] md:h-[440px]">
//       <AnimatePresence initial={false}>
//         <motion.img
//           key={bgIndex}
//           src={backgroundImages[bgIndex]}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.5 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.5 }}
//           className="absolute inset-0 w-full h-full object-cover z-0"
//           alt="Mahatma Gandhi Medical College Banner"
//         />
//       </AnimatePresence>
//       <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/50 z-10" />
//       
//       <div className="container mx-auto px-4 max-w-7xl h-full relative z-20 flex flex-col justify-end pb-8 sm:pb-12">
//         <div className="max-w-3xl space-y-4">
//           <span className="inline-block bg-amber-400 text-slate-900 font-sans font-black text-[9px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-md">
//             ADMISSIONS & INFORMATION CENTER 2026-27
//           </span>
//           <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight leading-tight text-white drop-shadow-md">
//             MBBS Admission Guide & Counseling Seat Matrix mapping
//           </h1>
//           <p className="text-slate-200 text-xs sm:text-sm font-sans font-semibold max-w-2xl drop-shadow-sm leading-relaxed">
//             Explore Mahatma Gandhi Medical College, Jaipur. Direct interface to check seat availabilities, actual annual fees, category eligibility matrices, and live NEET UG state-quota cutoffs.
//           </p>
//           <div className="pt-2">
//             <Button
//               onClick={scrollToForm}
//               className="bg-amber-400 hover:bg-amber-500 text-slate-900 border border-amber-500 font-sans font-black text-xs uppercase tracking-widest px-6 py-2.5 rounded-lg active:scale-95 shadow-lg"
//             >
//               Apply Online Counseling <ArrowRight className="h-4 w-4 ml-1" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
// 
//     {/* 5. NOTICE TICKER BAR (AIIMS Style) */}
//     <div className="bg-amber-400 text-slate-900 py-3 relative z-30 font-bold border-y border-amber-500 shadow-sm overflow-hidden text-xs">
//       <div className="container mx-auto px-4 max-w-7xl flex items-center gap-4">
//         <span className="bg-slate-900 text-amber-400 px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded flex items-center gap-1.5 shrink-0 animate-pulse">
//           <Bell className="h-3.5 w-3.5" /> LATEST NOTICE
//         </span>
//         <div className="overflow-hidden relative w-full h-5">
//           <marquee behavior="scroll" direction="left" className="absolute inset-0 font-sans font-bold text-xs uppercase tracking-wide">
//             📢 NEET UG 2026 Rajasthan state counseling registrations started. | MGMCH Jaipur seat matrix mapping is live. | Submit profile below for eligibility checks. | Hostel allotments scheduled.
//           </marquee>
//         </div>
//       </div>
//     </div>
// 
//     {/* 6. DOUBLE-COLUMN ADMINISTRATIVE INFO GRID (AIIMS Style) */}
//     <div className="container mx-auto px-4 max-w-7xl py-12">
//       <div className="grid lg:grid-cols-12 gap-8 items-start">
//         
//         {/* LEFT: DEAN'S WELCOME DESK */}
//         <div className="lg:col-span-4 bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm space-y-6">
//           <div className="border-b border-slate-100 pb-4">
//             <span className="block text-[8px] font-sans font-black text-[#002d62] uppercase tracking-[0.22em]">Welcome Desk</span>
//             <h3 className="text-lg font-serif font-black text-[#002d62] mt-1">Dean's Message</h3>
//           </div>
//           
//           <div className="space-y-4">
//             {/* Profile image container */}
//             <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-[4/3] flex items-center justify-center">
//               <Stethoscope className="h-16 w-16 text-slate-350 text-slate-300 absolute" />
//               <img 
//                 src={mbbs3}
//                 className="w-full h-full object-cover object-center opacity-70 relative z-10"
//                 alt="Dean Portrait"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-[#002d62]/90 text-white p-3 z-20 text-center">
//                 <span className="block text-xs font-bold font-sans">Dr. G.N. Saxena</span>
//                 <span className="block text-[9px] text-amber-300 uppercase tracking-widest font-sans font-black mt-0.5">Dean Academics</span>
//               </div>
//             </div>
// 
//             <p className="text-xs text-slate-650 leading-relaxed font-sans font-medium text-slate-500 italic">
//               "Welcome to Mahatma Gandhi Medical College, Jaipur. Our mission is to educate and cultivate compassionate, clinically sound medical practitioners who are prepared to meet global clinical challenges. Our attached 1000-bed hospital provides our students with a rigorous, patient-centered learning platform."
//             </p>
//             <div className="border-t border-slate-100 pt-4 flex gap-4 text-xs font-sans text-slate-700">
//               <div>
//                 <span className="block text-[8px] font-sans font-black text-slate-400 uppercase tracking-widest">Office Desk</span>
//                 <span className="block font-bold text-slate-900 mt-0.5">MGUMST Campus</span>
//               </div>
//               <div className="border-l border-slate-200 pl-4">
//                 <span className="block text-[8px] font-sans font-black text-slate-400 uppercase tracking-widest">Inquiries</span>
//                 <a href="mailto:info@mgumst.org" className="block font-bold text-teal-800 hover:underline mt-0.5">dean@mgumst.org</a>
//               </div>
//             </div>
//           </div>
//         </div>
// 
//         {/* CENTER/RIGHT: NOTICES BOARD + LIVE PREDICTOR PORTAL */}
//         <div className="lg:col-span-8 space-y-8">
//           
//           {/* NOTICES LIST CARD */}
//           <div className="bg-white border border-slate-250 rounded-3xl p-6 shadow-sm">
//             <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
//               <div>
//                 <span className="block text-[8px] font-sans font-black text-teal-600 uppercase tracking-[0.2em]">Counselling Updates</span>
//                 <h3 className="text-lg font-serif font-black text-[#002d62] mt-0.5">Admissions Notice Board</h3>
//               </div>
//               <span className="text-[9px] font-sans font-black uppercase text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
//                 SESSION 2026
//               </span>
//             </div>
// 
//             <div className="divide-y divide-slate-100 text-xs font-sans text-slate-700 font-semibold">
//               {[
//                 { text: "Detailed Fee guidelines and concessions for Management Quota MBBS seats", date: "June 04, 2026", tag: "FEE NOTICE" },
//                 { text: "NMC Seat Matrix verification for Mahatma Gandhi University Medical Programs", date: "June 02, 2026", tag: "SEAT MATRIX" },
//                 { text: "Rajasthan NEET UG State counseling registration steps and option-entry guide", date: "May 29, 2026", tag: "COUNSELING" },
//                 { text: "Hostel rooms allocation criteria (Single / Double sharing) for MBBS 1st Year", date: "May 25, 2026", tag: "HOSTEL" },
//               ].map((item, idx) => (
//                 <div key={idx} className="py-3 flex justify-between items-start gap-4 hover:bg-slate-50/50 rounded-xl px-2 transition-colors">
//                   <div className="space-y-1">
//                     <span className="text-[8px] font-sans font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded uppercase tracking-wider mr-2">{item.tag}</span>
//                     <a href="#predictor" onClick={() => scrollToSection("predictor")} className="text-[#002d62] hover:text-blue-900 font-bold hover:underline">{item.text}</a>
//                   </div>
//                   <span className="text-[9px] text-slate-400 font-sans font-bold whitespace-nowrap">{item.date}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
// 
//           {/* LIVE PREDICTOR WIDGET (Styled as Online Mapping System) */}
//           <section id="predictor" ref={sectionsRef["predictor"]} className="scroll-mt-28 bg-[#001f4d] text-white rounded-3xl p-6 sm:p-8 shadow-md border border-[#002d62]">
//             <div className="border-b border-white/10 pb-4 mb-6">
//               <span className="block text-[8px] font-sans font-black text-amber-400 uppercase tracking-widest">MGMCH Online Portal</span>
//               <h3 className="text-xl font-serif font-bold text-white mt-0.5 flex items-center gap-1.5">
//                 NEET UG Score Predictor & Eligibility Matcher
//               </h3>
//             </div>
// 
//             <div className="space-y-6">
//               <div className="space-y-2">
//                 <div className="flex justify-between items-center">
//                   <Label className="text-xs font-bold uppercase tracking-wider text-slate-300 font-sans">Slide Your NEET Score</Label>
//                   <span className="text-xl font-black font-serif text-slate-900 bg-amber-400 px-3.5 py-1 rounded-xl shadow border border-amber-500">
//                     {predictorScore} <span className="text-[9px] font-sans font-bold text-slate-700">/ 720</span>
//                   </span>
//                 </div>
//                 
//                 <input
//                   type="range"
//                   min="100"
//                   max="720"
//                   step="5"
//                   value={predictorScore}
//                   onChange={(e) => handlePredictorScoreChange(Number(e.target.value))}
//                   className="w-full h-1.5 bg-[#002d62] rounded-lg appearance-none cursor-pointer accent-amber-400"
//                 />
//                 <div className="flex justify-between text-[9px] text-white/50 font-sans font-bold">
//                   <span>Min (100)</span>
//                   <span>State Cutoff (550+)</span>
//                   <span>Perfect (720)</span>
//                 </div>
//               </div>
// 
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <Label className="text-[9px] font-black uppercase tracking-widest text-white/50 mb-1 block">Your Category</Label>
//                   <Select
//                     onValueChange={(val) => {
//                       setPredictorCategory(val);
//                       setFormData((prev) => ({ ...prev, category: val }));
//                     }}
//                     value={predictorCategory}
//                   >
//                     <SelectTrigger className="h-9 rounded-xl bg-white/5 border-white/10 text-white font-semibold">
//                       <SelectValue placeholder="Select Category" />
//                     </SelectTrigger>
//                     <SelectContent className="rounded-xl">
//                       <SelectItem value="General">General (UR)</SelectItem>
//                       <SelectItem value="OBC">OBC-NCL</SelectItem>
//                       <SelectItem value="SC">SC (Scheduled Caste)</SelectItem>
//                       <SelectItem value="ST">ST (Scheduled Tribe)</SelectItem>
//                       <SelectItem value="EWS">EWS</SelectItem>
//                       <SelectItem value="NRI">NRI Quota</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div className="flex items-end">
//                   <div className="text-[9px] font-sans font-bold text-white/40 italic mb-2 leading-none">
//                     Estimations modeled on state counseling reports.
//                   </div>
//                 </div>
//               </div>
// 
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`${predictorScore}-${predictorCategory}`}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.2 }}
//                   className={`p-4.5 rounded-2xl border bg-white/5 border-white/10 text-white space-y-2`}
//                 >
//                   <div className="flex items-center gap-2">
//                     <span className="h-2 w-2 rounded-full bg-amber-400" />
//                     <h4 className="font-extrabold text-xs uppercase tracking-wide font-sans text-amber-400">{currentAnalysis.status}</h4>
//                   </div>
//                   <p className="text-xs leading-relaxed font-sans text-white/80 font-semibold">{currentAnalysis.text}</p>
//                   <div className="pt-2 border-t border-white/5 flex flex-wrap justify-between items-center gap-2">
//                     <div className="text-[10px] font-sans font-black text-slate-300">
//                       Action Advice: <span className="underline text-white font-bold">{currentAnalysis.quotaAdvice}</span>
//                     </div>
//                     <button
//                       onClick={scrollToForm}
//                       className={`text-[9px] font-sans font-black uppercase tracking-widest px-3.5 py-1.5 rounded-lg transition-all shadow ${currentAnalysis.btnStyle}`}
//                     >
//                       Secure Counselling Booklet
//                     </button>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </section>
// 
//         </div>
//       </div>
//     </div>
//   );

export default function MahatmaGandhiJaipurAdmission2026() {
  return <MbbsCollegeLayout theme={THEME_SAFFRON} college={college} />;
}
