import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Types for chat messages
interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  isFallback?: boolean;
  actions?: Array<{
    label: string;
    href: string;
    iconClass: string; // Bootstrap Icon class name, e.g. "bi-telephone-fill"
    style: string;
  }>;
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [aiStatus, setAiStatus] = useState("Thinking...");
  const [showPreviewBubble, setShowPreviewBubble] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Helper to determine time-of-day greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning! ☀️";
    if (hour < 17) return "Good afternoon! 🌤️";
    return "Good evening! 🌙";
  };

  const initialWelcomeText = `${getGreeting()} I'm **SS EduBot**, your AI Admissions Assistant at **SS Education**.\n\nI possess real-time information about top Engineering (B.Tech), Medical (MBBS), and MBA colleges in India.\n\nI can help you review placements, fee structures, admission processes, and details about COMEDK/WBJEE/Management Quota seats.\n\nWhat would you like to explore today?`;

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: initialWelcomeText
    }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreviewBubble(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  // Auto scroll to bottom when messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  // Quick reply suggestion options
  const SUGGESTION_CHIPS = [
    { label: "🏫 RVCE Bangalore Info", query: "Tell me about RVCE" },
    { label: "💰 IEM Kolkata Fees", query: "What are the fees at IEM Kolkata?" },
    { label: "🩺 MBBS NEET Criteria", query: "What is the criteria for MBBS?" },
    { label: "🚀 How do I apply?", query: "What is the admission process?" },
    { label: "📞 Contact Details", query: "Give me contact details and phone number" },
    { label: "📍 Office Locations", query: "Where are your offices located?" }
  ];

  // Knowledge Base routing logic
  const getResponse = (rawQuery: string): { text: string; isFallback?: boolean } => {
    const query = rawQuery.toLowerCase().trim();

    // Check for greeting intents (making bot feel like actual AI)
    const isGreeting =
      /^(hi|hello|hey|greetings|good\s*morning|good\s*afternoon|good\s*evening|yo|hola|hello\s*bot)/.test(query);
    if (isGreeting) {
      return {
        text: `Hello! 👋 How can I help you today? I am fully prepared to answer questions about:\n\n- **Colleges:** RVCE, MS Ramaiah, IEM Kolkata, SRM University, KIIT, and MBBS guides.\n- **Admissions:** Fee structures, highest & average packages, eligibility criteria, and step-by-step processes.\n- **Support:** Direct/Management quota seat availability.\n\nLet me know what is on your mind!`
      };
    }

    // Check for appreciation / thanks
    const isThanks = /^(thanks|thank\s*you|thankyou|awesome|cool|great|perfect|nice)/.test(query);
    if (isThanks) {
      return {
        text: "You are very welcome! 😊 Shaping a bright future starts with the right guidance. Let me know if you have any other questions, or if you're ready to speak directly with our expert counsellors!"
      };
    }

    // Check for exit / goodbye
    const isExit = /^(bye|goodbye|cya|see\s*you|quit|exit|talk\s*later)/.test(query);
    if (isExit) {
      return {
        text: "Goodbye! 👋 Wishing you all the absolute best in your college admissions journey. Remember, our admissions team is here to support you at **+91 99330 85333** whenever you need!"
      };
    }

    // Direct Contact Info Fallback Trigger Check
    const needsContactDetails =
      query.includes("phone") ||
      query.includes("number") ||
      query.includes("mobile") ||
      query.includes("contact") ||
      query.includes("call") ||
      query.includes("whatsapp") ||
      query.includes("email") ||
      query.includes("support");

    // Locations / Branches
    const needsLocations =
      query.includes("office") ||
      query.includes("location") ||
      query.includes("address") ||
      query.includes("branch") ||
      query.includes("where are you") ||
      query.includes("durgapur") ||
      query.includes("patna") ||
      query.includes("kolkata");

    // Process
    const needsProcess =
      query.includes("apply") ||
      query.includes("process") ||
      query.includes("admission") ||
      query.includes("procedure") ||
      query.includes("steps") ||
      query.includes("how to");

    // General / About SS Education
    const needsGeneralInfo =
      query.includes("ss education") ||
      query.includes("who are you") ||
      query.includes("counseling") ||
      query.includes("consultancy") ||
      query.includes("what do you do") ||
      query.includes("about the site") ||
      query.includes("free");

    // Colleges combinations
    const isRVCE = query.includes("rvce") || query.includes("rv college") || query.includes("r.v.");
    const isRamaiah = query.includes("ramaiah") || query.includes("rit") || query.includes("msrit") || query.includes("m.s. ramaiah");
    const isIEM = query.includes("iem") || query.includes("institute of engineering");
    const isSRM = query.includes("srm") || query.includes("srmist") || query.includes("chennai");
    const isMBBS = query.includes("mbbs") || query.includes("medical") || query.includes("neet") || query.includes("doctor");

    // Topic indicators
    const isFee = query.includes("fee") || query.includes("cost") || query.includes("expensive") || query.includes("price") || query.includes("charge");
    const isPlacement = query.includes("placement") || query.includes("package") || query.includes("highest") || query.includes("average") || query.includes("salary") || query.includes("job") || query.includes("recruit");
    const isEligibility = query.includes("eligibility") || query.includes("criteria") || query.includes("marks") || query.includes("qualified") || query.includes("cut off") || query.includes("age");

    // --- Specific College Combination Routes ---
    
    // RVCE
    if (isRVCE) {
      if (isFee) {
        return {
          text: "**R.V. College of Engineering (RVCE) Fees:**\n- The total B.Tech fee at RVCE ranges approximately between **₹6 Lakhs to ₹8 Lakhs** depending on the engineering branch and entry quota.\n- Management quota or NRI seat fees may differ. Connect with our expert advisors for a detailed fee breakdown based on your preferred branch!"
        };
      }
      if (isPlacement) {
        return {
          text: "**RVCE Bangalore Placements (2026 Batch):**\n- **Highest Placement Package:** ₹1.15 Crore per annum.\n- **Average Package:** ₹15.24 LPA.\n- **Top Recruiters:** Google, Microsoft, Amazon, Intel, Bosch, and 200+ global tech leaders. RVCE boasts one of the best placement track records in India."
        };
      }
      return {
        text: "**R.V. College of Engineering (RVCE), Bangalore:**\n- Located in India's Tech Capital (Bangalore, Karnataka).\n- Ranked among the **Top 50 Engineering Institutions** in India.\n- **Admissions Guidance:** SS Education specializes in helping out-of-state students (from Bihar, Jharkhand, and West Bengal) secure seats under direct/management quota seats. KCET is not mandatory for these seats.\n- **Call us at +91 99330 85333** to check current seat availability!"
      };
    }

    // Ramaiah (RIT)
    if (isRamaiah) {
      if (isFee) {
        return {
          text: "**Ramaiah Institute of Technology (RIT) Fees:**\n- The total B.Tech fee at Ramaiah ranges from **₹7 Lakhs to ₹10 Lakhs** depending on the category and branch.\n- Direct management quota fee details can be shared on a personalized call. Call us at +91 99330 85333 for immediate details."
        };
      }
      if (isPlacement) {
        return {
          text: "**Ramaiah Bangalore Placements:**\n- **Highest Package:** ₹50 LPA.\n- **Average Package:** ₹7.66 LPA.\n- **Top Recruiters:** Infosys, Wipro, TCS, Bosch, Samsung, and other leading companies in Bangalore's tech market."
        };
      }
      return {
        text: "**Ramaiah Institute of Technology (RIT), Bangalore:**\n- **Legacy:** Over 60+ Years of Academic Excellence (est. 1962).\n- Highly respected private engineering college with modern labs.\n- **Out-of-State Admissions:** Open to students from Bihar, Jharkhand, Odisha, and West Bengal. Management quota seats allow direct entry.\n- We handle the full process: eligibility, documentation, and coordination."
      };
    }

    // IEM Kolkata
    if (isIEM) {
      if (isFee) {
        return {
          text: "**IEM Kolkata Fees:**\n- Extremely affordable top-tier option. Total fees range from **₹5 Lakhs to ₹7 Lakhs** for the entire 4-year B.Tech program.\n- Excellent ROI relative to package ratios."
        };
      }
      if (isPlacement) {
        return {
          text: "**IEM Kolkata Placements:**\n- **Highest Package:** ₹42 LPA.\n- **Average Package:** ₹6.5 LPA.\n- **Top Recruiters:** TCS, Infosys, Cognizant, Wipro, and major IT service/consulting companies."
        };
      }
      return {
        text: "**Institute of Engineering & Management (IEM), Kolkata:**\n- West Bengal's No.1 Private Engineering College.\n- Located in Salt Lake Sector V (Kolkata's IT Hub).\n- **Bihar & Jharkhand Priority:** Proximity to Eastern India makes it a highly preferred choice. Management quota seats are available without WBJEE.\n- **SS Education office is in Durgapur**, just 2 hours from Kolkata, ensuring direct local support and quick response."
      };
    }

    // SRM University
    if (isSRM) {
      if (isFee) {
        return {
          text: "**SRM University B.Tech Fees:**\n- Flagship KTR Campus (Chennai) fees range from **₹2.5 Lakhs to ₹4.5 Lakhs per year** depending on the specific branch of specialization."
        };
      }
      if (isPlacement) {
        return {
          text: "**SRM University Placements:**\n- **Highest Package:** ₹1.10 Crore per annum.\n- **Average Package:** ₹8.5 LPA.\n- **Top Recruiters:** Over 800+ companies recruit on campus, including Google, Microsoft, Amazon, Siemens."
        };
      }
      if (isEligibility) {
        return {
          text: "**SRM University Admissions Eligibility Criteria:**\n- **PCM Aggregate:** Minimum **60% marks** in Physics, Chemistry, and Mathematics (PCM) in 10+2.\n- **Age Criteria:** Candidate must have attained the age of **16 years and 6 months** as of July 31, 2026."
        };
      }
      return {
        text: "**SRM Institute of Science and Technology (SRMIST), Chennai:**\n- NIRF Rank: Top 30 Engineering Institutions in India.\n- Massive 250+ acre flagship Kattankulathur (KTR) campus near Chennai.\n- **Admission Routes:** Guided choices for SRMJEEE, board toppers direct pathway, or management quota seats."
      };
    }

    // MBBS Admissions
    if (isMBBS) {
      if (isEligibility) {
        return {
          text: "**MBBS Admission Eligibility Criteria:**\n- **NEET UG Qualified:** Passing NEET UG in the current year is strictly **mandatory** for MBBS admission in India (both private and deemed medical universities)."
        };
      }
      return {
        text: "**MBBS Admissions in India:**\n- Focus on **NMC (National Medical Commission)** and WHO approved medical colleges for high clinical exposure and valid degrees.\n- **Guidance:** Detailed support for NEET counselling rounds (All India & State levels), deemed universities, and management/NRI quota seats in medical hubs like Karnataka, Maharashtra, etc.\n- Call our medical expert directly: **+91 99330 85333** for customized shortlisting."
      };
    }

    // --- General Topic Routes ---

    // Contact details
    if (needsContactDetails) {
      return {
        text: "**SS Education Contact Information:**\n- 📞 **Helpline Call Support:** +91 99330 85333\n- 💬 **WhatsApp Chat:** +91 99330 85333\n- ✉️ **Email Support:** info@sseducation.co.in\n- Our expert counsellors are available **24/7** to resolve your college admission doubts!"
      };
    }

    // Office locations
    if (needsLocations) {
      return {
        text: "**SS Education Office Addresses:**\n\n1. **Head Office (Durgapur):**\n   City Centre, Durgapur, West Bengal - 713216\n   📧 info@sseducation.co.in\n\n2. **Patna Branch Office:**\n   Boring Road, Patna, Bihar - 800001\n   📧 patna@sseducation.co.in\n\n3. **Kolkata Branch Office:**\n   Salt Lake, Sector V, Kolkata, WB - 700091\n   📧 kolkata@sseducation.co.in\n\nOffice Timings: 10:00 AM - 07:00 PM (Monday to Saturday)."
      };
    }

    // Admission Process
    if (needsProcess) {
      return {
        text: "**Step-by-Step B.Tech / MBBS Admission Process:**\n\n1. **Profile Assessment:** Share your 10+2 marks & JEE/NEET/CET details with SS Education.\n2. **College Shortlisting:** Our experts match your profile, budget, and career goals with top colleges.\n3. **Eligibility Verification:** We verify seat options (COMEDK, WBJEE, state rounds, or management quota).\n4. **Application Submission:** End-to-end documentation assistance and error-free submissions.\n5. **Counselling Coordination:** Real-time guidance during online allocation phases.\n6. **Seat Confirmation:** Assistance with fee schedules and hostel arrangements.\n\nLet's get started! Reach out to us for a free counseling session."
      };
    }

    // About/General Info
    if (needsGeneralInfo) {
      return {
        text: "**About SS Education:**\n- We are a registered and highly trusted **educational consultancy** with **15+ years** of expert guidance experience.\n- **Free Counselling:** We offer complete, transparent career counselling to identify the right courses and colleges.\n- **Specialization:** Helping students, specifically from Bihar, Jharkhand, Odisha, and West Bengal, secure direct admissions under COMEDK, WBJEE, or management quota in top institutions across India.\n- **Transparency Guarantee:** No false promises, full breakdown of fees, and verified admission paths."
      };
    }

    // List of fees if asked generally
    if (isFee) {
      return {
        text: "**B.Tech & Course Fees Overview (Estimated Total Fees):**\n- **IEM Kolkata:** ₹5 – ₹7 Lakhs (Highly affordable)\n- **RVCE Bangalore:** ₹6 – ₹8 Lakhs (Branch/quota dependent)\n- **Ramaiah Bangalore:** ₹7 – ₹10 Lakhs\n- **SRM Chennai:** ₹2.5 – ₹4.5 Lakhs per year\n- **MBBS/Medical:** Depends on deemed university structures.\n\nFor exact management quota fees, please contact us at **+91 99330 85333**."
      };
    }

    // List of placements if asked generally
    if (isPlacement) {
      return {
        text: "**Placement Records at a Glance:**\n- **RVCE Bangalore:** Highest ₹1.15 Cr | Avg ₹15.24 LPA\n- **SRM Chennai:** Highest ₹1.10 Cr | Avg ₹8.5 LPA\n- **KIIT Bhubaneswar:** Highest ₹53 LPA | Avg ₹8.2 LPA\n- **Ramaiah Bangalore:** Highest ₹50 LPA | Avg ₹7.66 LPA\n- **IEM Kolkata:** Highest ₹42 LPA | Avg ₹6.5 LPA\n\nAll colleges host top-tier corporate recruitment drives (Google, Microsoft, TCS, Infosys, Amazon)."
      };
    }

    // Standard Fallback when nothing is matched
    return {
      text: "I couldn't find a direct answer to your question in our website database. However, our expert human counsellors are available 24/7 and can answer all your admission, fee, and quota queries instantly!\n\nPlease feel free to call or WhatsApp us for direct info:",
      isFallback: true
    };
  };

  // Handle message submission
  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: `msg-${Date.now()}-user`,
      sender: "user",
      text: textToSend
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // AI-like dynamic status stages
    const stages = [
      "Analyzing query...",
      "Searching admissions directory...",
      "Matching eligibility rules...",
      "Formulating response..."
    ];
    
    let currentStage = 0;
    setAiStatus(stages[0]);

    // Change status text dynamically to mimic real AI operations
    const interval = setInterval(() => {
      currentStage++;
      if (currentStage < stages.length) {
        setAiStatus(stages[currentStage]);
      }
    }, 300);

    // Answer delay
    setTimeout(() => {
      clearInterval(interval);
      const responseObj = getResponse(textToSend);
      
      const botMessage: Message = {
        id: `msg-${Date.now()}-bot`,
        sender: "bot",
        text: responseObj.text,
        isFallback: responseObj.isFallback,
        actions: responseObj.isFallback
          ? [
              {
                label: "Call +91 99330 85333",
                href: "tel:+919933085333",
                iconClass: "bi-telephone-fill",
                style: "bg-primary hover:bg-primary-glow text-white shadow-lg shadow-primary/20"
              },
              {
                label: "Chat on WhatsApp",
                href: "https://wa.me/919933085333",
                iconClass: "bi-whatsapp",
                style: "bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-600/20"
              }
            ]
          : undefined
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1100);
  };

  // Helper function to format bot text (bold markdown support)
  const formatMessageText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-extrabold text-slate-900 dark:text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      // Handle simple newlines
      const subparts = part.split("\n");
      return subparts.map((sub, sidx) => (
        <React.Fragment key={`${index}-${sidx}`}>
          {sub}
          {sidx < subparts.length - 1 && <br />}
        </React.Fragment>
      ));
    });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* 1. Collapsed State FAB Trigger (Bottom Right) */}
      <div className="fixed bottom-6 right-6 max-sm:bottom-20 z-50 flex flex-col items-end gap-3">
        {/* Floating preview banner that slides in on mount and then vanishes */}
        <AnimatePresence>
          {showPreviewBubble && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              className="relative mr-2 bg-slate-900 text-white text-xs font-medium py-3 px-4 rounded-2xl shadow-xl border border-white/10 max-w-[240px] flex items-center justify-between gap-3 animate-none"
            >
              <div className="flex gap-2 items-center">
                <i className="bi bi-stars text-amber-400 text-sm shrink-0"></i>
                <span>Have admission questions? Ask SS EduBot!</span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPreviewBubble(false);
                }}
                className="text-white/40 hover:text-white transition-colors"
              >
                <i className="bi bi-x-lg text-xs"></i>
              </button>
              {/* Caret pointing to the button */}
              <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-slate-900 border-r border-b border-white/10 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        <button
          id="chatbot-trigger"
          onClick={toggleChat}
          className={`h-14 w-14 rounded-full flex items-center justify-center transition-all duration-200 relative shadow-lg ${
            isOpen
              ? "bg-slate-800 text-white hover:scale-105"
              : "bg-slate-900 text-white hover:scale-105"
          }`}
          aria-label="Toggle admissions bot"
        >
          {isOpen ? (
            <i className="bi bi-x-lg text-xl"></i>
          ) : (
            <i className="bi bi-chat-left-dots-fill text-xl"></i>
          )}
        </button>
      </div>

      {/* 2. Expanded Chat Box Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-[380px] h-[550px] max-h-[80vh] fixed bottom-24 right-6 z-50 flex flex-col bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden max-sm:w-[calc(100vw-2rem)] max-sm:bottom-36 max-sm:left-4 max-sm:right-4"
          >
            {/* Lite Professional Header */}
            <div className="bg-slate-50 dark:bg-slate-900 py-3.5 px-5 text-slate-850 dark:text-slate-100 flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800 shrink-0">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200/50 dark:border-slate-700">
                  <i className="bi bi-robot text-primary text-lg"></i>
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                    SS EduBot <i className="bi bi-stars text-amber-500 text-xs"></i>
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 inline-block" />
                    AI Admissions Advisor
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => {
                    setMessages([
                      {
                        id: "welcome",
                        sender: "bot",
                        text: initialWelcomeText
                      }
                    ]);
                  }}
                  title="Reset conversation"
                  className="p-1.5 hover:bg-slate-200/60 dark:hover:bg-slate-800 rounded-lg text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors"
                >
                  <i className="bi bi-arrow-clockwise text-sm"></i>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-slate-200/60 dark:hover:bg-slate-800 rounded-lg text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors"
                >
                  <i className="bi bi-chevron-down text-sm"></i>
                </button>
              </div>
            </div>

            {/* Chat Body & Suggestions */}
            <div className="flex-grow overflow-y-auto p-4 bg-slate-50/30 dark:bg-slate-900/10 flex flex-col gap-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 max-w-[85%] ${
                    msg.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                  }`}
                >
                  {/* Sender Avatar */}
                  <div
                    className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 border ${
                      msg.sender === "user"
                        ? "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                        : "bg-slate-100 dark:bg-slate-800 border-slate-200/50 dark:border-slate-700"
                    }`}
                  >
                    {msg.sender === "user" ? (
                      <i className="bi bi-person-fill text-slate-500 dark:text-slate-400 text-xs"></i>
                    ) : (
                      <i className="bi bi-cpu text-slate-600 dark:text-slate-300 text-xs"></i>
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div className="flex flex-col gap-2">
                    <div
                      className={`p-3.5 rounded-2xl text-sm leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-[#2563eb] text-white rounded-tr-none shadow-sm"
                          : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-800/80 rounded-tl-none shadow-sm"
                      }`}
                    >
                      {formatMessageText(msg.text)}
                    </div>

                    {/* Fallback Action Buttons */}
                    {msg.sender === "bot" && msg.actions && (
                      <div className="flex flex-col gap-2 mt-1">
                        {msg.actions.map((act, idx) => (
                          <a
                            key={idx}
                            href={act.href}
                            target={act.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className={`w-full py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 font-bold text-xs transition-transform hover:scale-[1.01] active:scale-[0.99] ${act.style}`}
                          >
                            <i className={`bi ${act.iconClass} text-sm`}></i>
                            {act.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Bot Dynamic Typing Indicator (Actual AI Status Text) */}
              {isTyping && (
                <div className="flex gap-3 max-w-[80%] mr-auto items-center">
                  <div className="h-7 w-7 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/50 flex items-center justify-center shrink-0">
                    <i className="bi bi-cpu text-slate-600 dark:text-slate-300 text-xs"></i>
                  </div>
                  <div className="bg-white dark:bg-slate-900 px-4 py-3 rounded-2xl rounded-tl-none border border-slate-200/60 dark:border-slate-800/80 shadow-sm flex flex-col gap-1.5">
                    <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest animate-none">
                      <i className="bi bi-database-fill-gear animate-spin text-[11px] text-primary"></i>
                      <span>{aiStatus}</span>
                    </div>
                    <div className="flex items-center gap-1 ml-0.5">
                      <span className="h-1.5 w-1.5 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="h-1.5 w-1.5 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="h-1.5 w-1.5 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce" />
                    </div>
                  </div>
                </div>
              )}

              {/* Suggestions chips section (only visible at the bottom of standard welcome chat flow) */}
              {!isTyping && messages.length === 1 && (
                <div className="mt-2 shrink-0">
                  <p className="text-[11px] font-bold text-slate-450 dark:text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <i className="bi bi-question-circle-fill text-[11px] text-slate-400"></i> Suggested Questions
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {SUGGESTION_CHIPS.map((chip, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(chip.query)}
                        className="py-1.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-300 dark:hover:text-white border border-slate-200/60 dark:border-slate-800 text-[11px] font-medium transition-all text-left flex items-center gap-1"
                      >
                        {chip.label}
                        <i className="bi bi-arrow-right-short text-xs opacity-65 ml-0.5"></i>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputValue);
              }}
              className="p-3 border-t border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-950 flex gap-2 items-center shrink-0"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about colleges, fees, criteria..."
                className="flex-grow py-2.5 px-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-sm focus:outline-none focus:border-primary/40 text-slate-900 dark:text-white"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="h-9 w-9 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white flex items-center justify-center hover:scale-102 active:scale-98 disabled:opacity-40 disabled:hover:scale-100 transition-all shrink-0 shadow-sm"
              >
                <i className="bi bi-send-fill text-xs"></i>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
