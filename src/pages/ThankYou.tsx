import { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  GraduationCap, 
  Users, 
  Zap, 
  PhoneCall, 
  Mail, 
  ArrowLeft, 
  Sparkles,
  Clock,
  ShieldCheck,
  MessageCircle,
  ChevronRight
} from "lucide-react";

// Extend global window interface for dataLayer
declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

const SUCCESS_FEATURES = [
  {
    title: "Form Submitted Successfully",
    description: "Your academic profile has been securely recorded and sent to our counselling team.",
    icon: CheckCircle2,
    color: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    title: "Admission Guidance Available",
    description: "Access premium B.Tech, MBBS, and MBA cutoffs, fee structures, and placement reports.",
    icon: GraduationCap,
    color: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    title: "Expert Counselling Support",
    description: "Get personalized matching with senior advisors based on your rank, budget, and preference.",
    icon: Users,
    color: "text-violet-600 bg-violet-50 border-violet-100",
  },
  {
    title: "Quick Response Guarantee",
    description: "We respect your time. An admission coordinator is assigned to reach back in 15-30 minutes.",
    icon: Zap,
    color: "text-amber-600 bg-amber-50 border-amber-100",
  },
];

const TIMELINE_STEPS = [
  {
    number: "01",
    title: "Enquiry Received",
    description: "System verified",
    completed: true,
  },
  {
    number: "02",
    title: "Profile Review",
    description: "Matching eligibility",
    completed: false,
    active: true,
  },
  {
    number: "03",
    title: "Expert Call back",
    description: "Within 15-30 mins",
    completed: false,
  }
];

const TRUST_BADGES = [
  { label: "15+ Years Excellence", icon: ShieldCheck },
  { label: "10k+ Placements Completed", icon: GraduationCap },
  { label: "100% Transparency", icon: Sparkles }
];

const ThankYou = () => {
  useEffect(() => {
    // 1. Dynamically append 'noindex, nofollow' to document head for SEO safety
    const metaRobots = document.createElement("meta");
    metaRobots.name = "robots";
    metaRobots.content = "noindex, nofollow";
    document.head.appendChild(metaRobots);

    // 2. Set beautiful document title
    const originalTitle = document.title;
    document.title = "Thank You | SS Educational Services";

    // 3. Trigger Conversion Tracking (GA4 & Google Ads compatible via GTM dataLayer)
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "conversion_lead_submit",
      page_path: "/thank-you",
      page_title: "Thank You | SS Education",
      conversion_type: "Lead Form Submission",
      timestamp: new Date().toISOString(),
    });

    // Cleanup tags when user navigates away
    return () => {
      document.head.removeChild(metaRobots);
      document.title = originalTitle;
    };
  }, []);

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
  };

  return (
    <main className="pt-24 pb-24 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
      
      {/* Premium subtle background glow patterns matching brand aesthetics */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-amber-50/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Grid line overlay to give an educational/structured engineering vibe */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.25] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Main Content Area */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          
          {/* Multi-layered Success Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative inline-flex items-center justify-center mb-8"
          >
            {/* Soft Ripple Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-emerald-500/10 animate-ping opacity-75 scale-150" />
            <div className="absolute inset-0 rounded-full bg-emerald-500/20 scale-125 animate-pulse" />
            
            {/* The Badge Core */}
            <div className="relative p-5 bg-gradient-to-br from-emerald-400 to-emerald-500 text-white rounded-full shadow-lg shadow-emerald-500/30 border border-emerald-300">
              <CheckCircle2 className="h-12 w-12 stroke-[2.5]" />
            </div>
          </motion.div>

          {/* Headline & Subheadline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight"
          >
            Thank You for Contacting <br className="sm:hidden" />
            <span className="text-primary inline-block relative px-1">
              SS Education
              <span className="absolute bottom-1 left-0 w-full h-[6px] bg-accent/20 -z-10 rounded-full" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Your enquiry has been successfully submitted. Our admission experts will review your academic eligibility and contact you shortly.
          </motion.p>


        </div>

        {/* Dynamic Timeline / Progress Path (Visualizes callback expectation) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 max-w-4xl mx-auto mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
          <h2 className="text-lg font-bold text-slate-900 mb-6 text-left border-l-4 border-primary pl-3">
            Admissions Callback Process
          </h2>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {TIMELINE_STEPS.map((step, idx) => (
              <div key={idx} className="flex gap-4 items-start relative">
                {/* Visual Step Number / Circle */}
                <div className={`flex items-center justify-center w-12 h-12 rounded-2xl shrink-0 font-extrabold text-sm border-2 ${
                  step.completed 
                    ? "bg-emerald-500 border-emerald-500 text-white shadow-md shadow-emerald-500/20"
                    : step.active
                      ? "bg-primary border-primary text-white shadow-md shadow-primary/20 animate-pulse"
                      : "bg-slate-50 border-slate-200 text-slate-400"
                }`}>
                  {step.completed ? <CheckCircle2 className="h-5 w-5 stroke-[2.5]" /> : step.number}
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 text-base flex items-center gap-2">
                    {step.title}
                    {step.active && (
                      <span className="text-[10px] uppercase font-extrabold tracking-widest text-primary bg-primary/10 px-1.5 py-0.5 rounded-md animate-pulse">
                        Active
                      </span>
                    )}
                  </h3>
                  <p className="text-slate-500 text-xs mt-1">{step.description}</p>
                </div>

                {/* Arrow spacer between timeline columns */}
                {idx < 2 && (
                  <div className="hidden md:block absolute -right-2 top-4 text-slate-300">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Feature Grid & Action Area */}
        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Success Features Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 space-y-4"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-accent" />
              Why SS Education Guidance is Valued
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {SUCCESS_FEATURES.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -3 }}
                    className="bg-white p-5 rounded-2xl border border-slate-100 shadow-md flex flex-col gap-3 transition-all hover:border-primary/15 hover:shadow-lg"
                  >
                    <div className={`p-2.5 w-fit rounded-xl border ${feature.color} shrink-0`}>
                      <Icon className="h-5 w-5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm mb-1 leading-snug">{feature.title}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Interactive Direct Helpdesk Cards & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.35 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Immediate Response Helpline Card */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl pointer-events-none" />
              
              <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Immediate Assistance
              </h2>
              <p className="text-slate-500 text-xs mb-6 leading-relaxed">
                Applying for active college deadlines? Speak directly with an advisor or drop a WhatsApp ping.
              </p>

              {/* Direct Actions */}
              <div className="space-y-3.5">
                
                {/* WhatsApp Chat Card (Premium conversion action) */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/919933085333?text=Hi%2C%20I%20just%20submitted%20my%20enquiry%20on%20SS%20Education%20and%20want%20immediate%20admission%20guidance."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-100 hover:border-emerald-300 hover:bg-emerald-100/30 transition-all group shadow-sm shadow-emerald-100"
                >
                  <div className="p-3 bg-emerald-500 text-white rounded-xl shadow-md shrink-0">
                    <MessageCircle className="h-5 w-5 fill-white stroke-none" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">Connect on WhatsApp</span>
                    <span className="text-sm font-extrabold text-slate-800 group-hover:text-emerald-700 transition-colors">Start Instant Chat</span>
                  </div>
                </motion.a>

                {/* Call Helpline Card */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:+919933085333"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50 border border-blue-100 hover:border-blue-300 hover:bg-blue-100/30 transition-all group shadow-sm shadow-blue-100"
                >
                  <div className="p-3 bg-primary text-white rounded-xl shadow-md shrink-0">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider block">Direct Admission Hotline</span>
                    <span className="text-sm font-extrabold text-slate-800 group-hover:text-primary transition-colors">+91 99330 85333</span>
                  </div>
                </motion.a>

                {/* Email Card */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="mailto:info@sseducationalservices.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:bg-slate-100 transition-all group"
                >
                  <div className="p-3 bg-slate-600 text-white rounded-xl shadow-md shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="text-left overflow-hidden">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Email Support Desk</span>
                    <span className="text-sm font-extrabold text-slate-800 group-hover:text-slate-900 transition-colors truncate">info@sseducationalservices.com</span>
                  </div>
                </motion.a>

              </div>
            </div>

            {/* Premium Home Button Action */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <a
                href="/"
                className="w-full py-4.5 rounded-2xl bg-primary text-white font-extrabold text-base flex items-center justify-center gap-2 hover:bg-primary-glow active:scale-[0.98] transition-all shadow-xl shadow-primary/20"
              >
                <ArrowLeft className="h-4.5 w-4.5" />
                Return to Homepage
              </a>
            </motion.div>
          </motion.div>

        </div>

        {/* Accreditations / Trust Badges Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-slate-200/60 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
            SS Educational Services Trust Standards
          </span>
          <div className="flex flex-wrap justify-center gap-6">
            {TRUST_BADGES.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div key={idx} className="flex items-center gap-2 text-slate-600 text-xs font-bold bg-white border border-slate-100 py-1.5 px-3 rounded-full shadow-sm">
                  <Icon className="h-4 w-4 text-primary shrink-0" />
                  <span>{badge.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </main>
  );
};

export default ThankYou;
