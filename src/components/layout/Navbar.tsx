import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, 
  X, 
  Phone, 
  MessageCircle, 
  ChevronDown, 
  Search, 
  GraduationCap, 
  Globe, 
  Stethoscope, 
  Briefcase, 
  BookOpen
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import mainLogo from "@/assets/main logo.png";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Colleges", href: "#", children: true },
  { label: "Compare Colleges", href: "/results" },
  { label: "Contact", href: "/contact" },
];

const COLLEGE_CATEGORIES = [
  {
    id: "btech-karnataka",
    title: "B.Tech Karnataka",
    icon: "GraduationCap",
    items: [
      { label: "RVCE Bangalore", href: "/rv-college-btech-admission-2026" },
      { label: "MSRIT Bangalore", href: "/ramaiah-institute-btech-admission-2026" },
      { label: "BMSCE Bangalore", href: "/bms-college-of-engineering-bangalore" },
      { label: "BMSIT Bangalore", href: "/bmsit-bangalore" },
      { label: "DSCE Bangalore", href: "/dayananda-sagar-college-of-engineering-bangalore" },
      { label: "Sri MVIT Bangalore", href: "/sri-mvit-bangalore" },
      { label: "NMIT Bangalore", href: "/nmit-bangalore" },
      { label: "RNSIT Bangalore", href: "/contact?college=rnsit" },
      { label: "CMRIT Bangalore", href: "/contact?college=cmrit" },
      { label: "NHCE Bangalore", href: "/contact?college=new-horizon" },
      { label: "PES University", href: "/contact?college=pes-university" },
      { label: "REVA University", href: "/contact?college=reva-university" }
    ]
  },
  {
    id: "btech-other-states",
    title: "B.Tech Other States",
    icon: "Globe",
    items: [
      { label: "VIT Vellore", href: "/vit-vellore" },
      { label: "MIT Manipal", href: "/mit-manipal" },
      { label: "Amrita University", href: "/amrita-vishwa-vidyapeetham" },
      { label: "BITS Pilani", href: "/bits-pilani" },
      { label: "KIIT Bhubaneswar", href: "/kiit-university-bhubaneswar-admission-2026" },
      { label: "SRM Chennai", href: "/srm-university-btech-admission-2026" },
      { label: "IEM Kolkata", href: "/iem-kolkata-admission-2026" },
      { label: "Heritage Kolkata", href: "/heritage-institute-of-technology-hitk-kolkata" },
      { label: "TMSL Kolkata", href: "/techno-main-salt-lake-tmsl-kolkata" },
      { label: "HIT Haldia", href: "/haldia-institute-of-technology-hit-haldia" }
    ]
  },
  {
    id: "mbbs-admission-india",
    title: "MBBS Admission India",
    icon: "Stethoscope",
    isNested: true,
    items: [
      {
        state: "Rajasthan",
        subItems: [
          { label: "MGMCH Jaipur", href: "/mahatma-gandhi-medical-college-jaipur-admission-2026" },
          { label: "NIMS Jaipur", href: "/national-institute-of-medical-sciences-jaipur-admission-2026" },
          { label: "JNU Jaipur", href: "/jnu-medical-college-jaipur-admission-2026" },
          { label: "Geetanjali Udaipur", href: "/geetanjali-medical-college-udaipur-admission-2026" },
          { label: "PMC Udaipur", href: "/pacific-medical-college-udaipur-admission-2026" },
          { label: "PIMS Udaipur", href: "/pacific-institute-of-medical-sciences-udaipur-admission-2026" },
          { label: "Ananta Rajsamand", href: "/ananta-medical-college-rajsamand-admission-2026" },
          { label: "AIIMS Udaipur", href: "/american-international-medical-college-udaipur-admission-2026" }
        ]
      },
      {
        state: "Karnataka",
        subItems: [
          { label: "Ramaiah Medical", href: "/ramaiah-medical-college-bangalore-admission-2026" },
          { label: "St. John's Medical", href: "/st-johns-medical-college-bangalore-admission-2026" },
          { label: "KIMS Bangalore", href: "/kempegowda-institute-of-medical-sciences-bangalore-admission-2026" },
          { label: "Vydehi Medical", href: "/vydehi-institute-of-medical-sciences-bangalore-admission-2026" },
          { label: "BGS Medical", href: "/bgs-global-institute-of-medical-sciences-bangalore-admission-2026" },
          { label: "Ambedkar Medical", href: "/dr-br-ambedkar-medical-college-bangalore-admission-2026" },
          { label: "East Point Medical", href: "/east-point-college-of-medical-sciences-bangalore-admission-2026" }
        ]
      },
      {
        state: "West Bengal",
        subItems: [
          { label: "KPC Medical", href: "/kpc-medical-college-kolkata-admission-2026" },
          { label: "JIMSH Kolkata", href: "/jagannath-gupta-institute-of-medical-sciences-kolkata-admission-2026" },
          { label: "IQ City Durgapur", href: "/iq-city-medical-college-durgapur-admission-2026" },
          { label: "ICARE Haldia", href: "/icare-institute-of-medical-sciences-haldia-admission-2026" },
          { label: "Gouri Devi Durgapur", href: "/gouri-devi-institute-of-medical-sciences-durgapur-admission-2026" }
        ]
      },
      {
        state: "Uttar Pradesh",
        subItems: [
          { label: "Sharda Noida", href: "/school-of-medical-sciences-sharda-university-greater-noida-admission-2026" },
          { label: "Subharti Meerut", href: "/subharti-medical-college-meerut-admission-2026" },
          { label: "Era Lucknow", href: "/eras-lucknow-medical-college-admission-2026" },
          { label: "SRMS Bareilly", href: "/sri-ram-murti-smarak-institute-of-medical-sciences-bareilly-admission-2026" },
          { label: "Rohilkhand Bareilly", href: "/rohilkhand-medical-college-bareilly-admission-2026" },
          { label: "Hind Barabanki", href: "/hind-institute-of-medical-sciences-barabanki-admission-2026" },
          { label: "Muzaffarnagar Medical", href: "/contact?college=muzaffarnagar-medical" }
        ]
      },
      {
        state: "Tamil Nadu",
        subItems: [
          { label: "SRM Chennai", href: "/srm-medical-college-hospital-chennai-admission-2026" },
          { label: "PSG Coimbatore", href: "/psg-institute-of-medical-sciences-coimbatore-admission-2026" },
          { label: "Chettinad Chennai", href: "/chettinad-hospital-and-research-institute-chennai-admission-2026" },
          { label: "Balaji Chennai", href: "/sree-balaji-medical-college-chennai-admission-2026" },
          { label: "CMC Vellore", href: "/christian-medical-college-vellore-admission-2026" },
          { label: "Saveetha Chennai", href: "/saveetha-medical-college-chennai-admission-2026" },
          { label: "Ramachandra Chennai", href: "/sri-ramachandra-medical-college-chennai-admission-2026" }
        ]
      },
      {
        state: "Odisha",
        subItems: [
          { label: "KIMS Bhubaneswar", href: "/kalinga-institute-of-medical-sciences-bhubaneswar-admission-2026" },
          { label: "IMS & SUM Bhubaneswar", href: "/institute-of-medical-sciences-sum-hospital-bhubaneswar-admission-2026" },
          { label: "Hi-Tech Bhubaneswar", href: "/hi-tech-medical-college-bhubaneswar-admission-2026" },
          { label: "Hi-Tech Rourkela", href: "/hi-tech-medical-college-rourkela-admission-2026" },
          { label: "DRIEMS Cuttack", href: "/driems-institute-of-health-sciences-cuttack-admission-2026" }
        ]
      }
    ]
  },
  {
    id: "management-other-courses",
    title: "Management & Others",
    icon: "Briefcase",
    items: [
      { label: "MBA / PGDM", href: "/courses#mba" },
      { label: "Law Admissions", href: "/courses" },
      { label: "BCA", href: "/courses" },
      { label: "MCA", href: "/courses" },
      { label: "BBA", href: "/courses" },
      { label: "Allied Health Sciences", href: "/courses" }
    ]
  }
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mobile accordion states
  const [mobileCollegesExpanded, setMobileCollegesExpanded] = useState(false);
  const [mobileCategoryExpanded, setMobileCategoryExpanded] = useState<string | null>(null);
  const [mobileStateExpanded, setMobileStateExpanded] = useState<string | null>(null);

  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setSearchQuery("");
  }, [location.pathname]);

  // Expand matching category & state automatically based on route
  useEffect(() => {
    let matched = false;
    COLLEGE_CATEGORIES.forEach(category => {
      if (category.isNested) {
        (category.items as any[]).forEach(stateGroup => {
          if (stateGroup.subItems.some((sub: any) => sub.href === location.pathname)) {
            setMobileCollegesExpanded(true);
            setMobileCategoryExpanded(category.id);
            setMobileStateExpanded(stateGroup.state);
            matched = true;
          }
        });
      } else {
        if ((category.items as any[]).some(item => item.href === location.pathname)) {
          setMobileCollegesExpanded(true);
          setMobileCategoryExpanded(category.id);
          matched = true;
        }
      }
    });
    if (!matched) {
      setMobileCollegesExpanded(false);
      setMobileCategoryExpanded(null);
      setMobileStateExpanded(null);
    }
  }, [location.pathname]);

  // Click outside and ESC keys listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const inTrigger = dropdownRef.current?.contains(event.target as Node);
      const inMenu = megaMenuRef.current?.contains(event.target as Node);
      if (!inTrigger && !inMenu) {
        setActiveDropdown(null);
      }
    };
    
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const isTransparentRoute = ["/", "/engineering", "/mbbs"].includes(location.pathname) || 
    (location.pathname.includes("-admission-2026") && 
     !["/mahatma-gandhi-medical-college-jaipur-admission-2026",
       "/national-institute-of-medical-sciences-jaipur-admission-2026",
       "/jnu-medical-college-jaipur-admission-2026",
       "/geetanjali-medical-college-udaipur-admission-2026",
       "/pacific-medical-college-udaipur-admission-2026",
       "/pacific-institute-of-medical-sciences-udaipur-admission-2026",
       "/ananta-medical-college-rajsamand-admission-2026",
       "/american-international-medical-college-udaipur-admission-2026",
       "/tantia-medical-college-sri-ganganagar-admission-2026",
       "/ramaiah-medical-college-bangalore-admission-2026",
       "/st-johns-medical-college-bangalore-admission-2026",
       "/kempegowda-institute-of-medical-sciences-bangalore-admission-2026",
       "/vydehi-institute-of-medical-sciences-bangalore-admission-2026",
       "/bgs-global-institute-of-medical-sciences-bangalore-admission-2026",
       "/dr-br-ambedkar-medical-college-bangalore-admission-2026",
       "/east-point-college-of-medical-sciences-bangalore-admission-2026",
       "/kpc-medical-college-kolkata-admission-2026",
       "/jagannath-gupta-institute-of-medical-sciences-kolkata-admission-2026",
       "/iq-city-medical-college-durgapur-admission-2026",
       "/icare-institute-of-medical-sciences-haldia-admission-2026",
       "/gouri-devi-institute-of-medical-sciences-durgapur-admission-2026",
       "/school-of-medical-sciences-sharda-university-greater-noida-admission-2026",
       "/subharti-medical-college-meerut-admission-2026",
       "/eras-lucknow-medical-college-admission-2026",
       "/sri-ram-murti-smarak-institute-of-medical-sciences-bareilly-admission-2026",
       "/rohilkhand-medical-college-bareilly-admission-2026",
       "/hind-institute-of-medical-sciences-barabanki-admission-2026",
       "/christian-medical-college-vellore-admission-2026",
       "/saveetha-medical-college-chennai-admission-2026",
       "/sri-ramachandra-medical-college-chennai-admission-2026",
       "/srm-medical-college-hospital-chennai-admission-2026",
       "/psg-institute-of-medical-sciences-coimbatore-admission-2026",
       "/chettinad-hospital-and-research-institute-chennai-admission-2026",
       "/sree-balaji-medical-college-chennai-admission-2026",
       "/kalinga-institute-of-medical-sciences-bhubaneswar-admission-2026",
       "/institute-of-medical-sciences-sum-hospital-bhubaneswar-admission-2026",
       "/hi-tech-medical-college-bhubaneswar-admission-2026",
       "/hi-tech-medical-college-rourkela-admission-2026",
       "/driems-institute-of-health-sciences-cuttack-admission-2026"
     ].includes(location.pathname)) || 
    location.pathname.startsWith("/college/") ||
    [
      "/dayananda-sagar-college-of-engineering-bangalore",
      "/rv-institute-of-technology-management-bangalore",
      "/heritage-institute-of-technology-hitk-kolkata",
      "/techno-main-salt-lake-tmsl-kolkata",
      "/haldia-institute-of-technology-hit-haldia",
      "/rv-university-bengaluru",
      "/sri-mvit-bangalore",
      "/vit-vellore",
      "/mit-manipal",
      "/amrita-vishwa-vidyapeetham",
      "/bits-pilani",
      "/nmit-bangalore",
      "/bms-college-of-engineering-bangalore",
      "/bmsit-bangalore"
    ].includes(location.pathname);
    
  const isNavVisible = scrolled || !isTransparentRoute;

  // Highlight check helpers
  const isCategoryActive = (category: typeof COLLEGE_CATEGORIES[0]) => {
    if (category.isNested) {
      return (category.items as any[]).some((stateGroup) =>
        stateGroup.subItems.some((sub: any) => location.pathname === sub.href)
      );
    }
    return (category.items as any[]).some((item) => location.pathname === item.href);
  };

  const isCollegesMenuLinkActive = () => {
    return COLLEGE_CATEGORIES.some(isCategoryActive);
  };

  // Filter Categories logic
  const filteredCategories = COLLEGE_CATEGORIES.map(category => {
    if (category.isNested) {
      const filteredStates = category.items.map(stateGroup => {
        const filteredSubItems = stateGroup.subItems.filter(item =>
          item.label.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return { ...stateGroup, subItems: filteredSubItems };
      }).filter(stateGroup => stateGroup.subItems.length > 0);
      return { ...category, items: filteredStates };
    } else {
      const filteredItems = category.items.filter(item =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...category, items: filteredItems };
    }
  }).filter(category => {
    if (category.isNested) {
      return category.items.length > 0;
    }
    return category.items.length > 0;
  });

  const renderCategoryIcon = (iconName: string, className = "h-4 w-4") => {
    switch (iconName) {
      case "GraduationCap": return <GraduationCap className={className} />;
      case "Globe": return <Globe className={className} />;
      case "Stethoscope": return <Stethoscope className={className} />;
      case "Briefcase": return <Briefcase className={className} />;
      default: return <BookOpen className={className} />;
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[999] transition-all duration-300 px-4 py-3",
        isNavVisible ? "bg-white/90 backdrop-blur-lg py-2" : "bg-transparent py-4",
        scrolled && "shadow-md"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="h-12 w-auto flex items-center"
          >
            <img 
              src={mainLogo} 
              alt="SS Education" 
              className="h-full w-auto object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
              style={{ filter: isNavVisible ? "none" : "brightness(0) invert(1)" }}
            />
          </motion.div>
          <div className={cn("flex flex-col leading-tight", isNavVisible ? "text-slate-900" : "text-white")}>
            <span className="font-black text-xl tracking-tight">SS EDUCATION</span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold opacity-70">Consultancy Services</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <div
              key={link.label}
              className={cn(link.label !== "Colleges" && "relative")}
              ref={link.label === "Colleges" ? dropdownRef : null}
            >
              {link.children ? (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveDropdown(activeDropdown === link.label ? null : link.label);
                  }}
                  className={cn(
                    "flex items-center gap-1.5 font-bold text-xs uppercase tracking-widest transition-all hover:text-primary outline-none",
                    isNavVisible ? "text-slate-700" : "text-white/90",
                    (activeDropdown === link.label || isCollegesMenuLinkActive()) && "text-primary"
                  )}
                >
                  {link.label}
                  <ChevronDown className={cn("h-3.5 w-3.5 opacity-50 transition-transform duration-300", activeDropdown === link.label && "rotate-180")} />
                </button>
              ) : (
                <Link
                  to={link.href}
                  className={cn(
                    "flex items-center gap-1.5 font-bold text-xs uppercase tracking-widest transition-all hover:text-primary",
                    isNavVisible ? "text-slate-700" : "text-white/90",
                    location.pathname === link.href && "text-primary"
                  )}
                >
                  {link.label}
                </Link>
              )}

              {/* Full-width Mega Menu via Portal */}
              {link.children && createPortal(
                <AnimatePresence>
                  {activeDropdown === link.label && (
                    <motion.div
                      ref={megaMenuRef}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        position: 'fixed',
                        top: isNavVisible ? 64 : 80,
                        left: 0,
                        right: 0,
                        zIndex: 9999,
                      }}
                      className="bg-white border-b border-slate-200 shadow-[0_16px_48px_-8px_rgba(15,23,42,0.14)]"
                    >
                      {/* Gradient top accent */}
                      <div className="h-[3px] bg-gradient-to-r from-primary via-blue-500 to-purple-400" />

                      {/* Inner container */}
                      <div className="max-w-[1480px] mx-auto px-10 py-5">

                        {/* Search Bar */}
                        <div className="flex items-center gap-4 mb-5 pb-4 border-b border-slate-100">
                          <div className="relative w-80 flex-shrink-0">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                            <input
                              type="text"
                              placeholder="Search colleges..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-primary/40 focus:bg-white rounded-lg text-[13px] text-slate-700 placeholder:text-slate-400 outline-none transition-all font-medium"
                            />
                          </div>
                          <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                            <span className="px-2 py-0.5 bg-slate-100 rounded text-[10px] font-bold text-slate-500">22</span> Engineering Colleges &nbsp;·&nbsp;
                            <span className="px-2 py-0.5 bg-rose-50 rounded text-[10px] font-bold text-rose-500">39</span> MBBS Colleges &nbsp;·&nbsp;
                            <span className="px-2 py-0.5 bg-amber-50 rounded text-[10px] font-bold text-amber-600">6</span> Other Courses
                          </div>
                        </div>

                        {/* Main Grid — 4 sections */}
                        <div className="grid gap-8" style={{ gridTemplateColumns: '170px 170px 1fr 155px' }}>

                          {/* ━━ B.TECH KARNATAKA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
                          {(() => {
                            const cat = filteredCategories.find(c => c.id === 'btech-karnataka');
                            if (!cat) return null;
                            const active = isCategoryActive(cat as any);
                            return (
                              <div>
                                <div className={cn("flex items-center gap-2 mb-3 pb-2 border-b-2", active ? "border-primary/30" : "border-slate-100")}>
                                  <span className={cn("w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 border", active ? "bg-primary/10 border-primary/20 text-primary" : "bg-blue-50 border-blue-100 text-blue-500")}>
                                    {renderCategoryIcon(cat.icon, "h-3.5 w-3.5")}
                                  </span>
                                  <span className={cn("text-[10px] font-extrabold uppercase tracking-[0.14em] leading-none", active ? "text-primary" : "text-slate-500")}>
                                    {cat.title}
                                  </span>
                                </div>
                                <div className="flex flex-col">
                                  {(cat.items as any[]).map((item) => (
                                    <Link
                                      key={item.label}
                                      to={item.href}
                                      onClick={() => { setActiveDropdown(null); setIsOpen(false); }}
                                      className={cn(
                                        "group flex items-center gap-2 px-2 py-[4px] rounded-md text-[11.5px] font-medium transition-all duration-150 truncate",
                                        location.pathname === item.href
                                          ? "bg-primary/10 text-primary font-semibold"
                                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                      )}
                                    >
                                      <span className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors", location.pathname === item.href ? "bg-primary" : "bg-slate-200 group-hover:bg-slate-400")} />
                                      {item.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            );
                          })()}

                          {/* ━━ B.TECH OTHER STATES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
                          {(() => {
                            const cat = filteredCategories.find(c => c.id === 'btech-other-states');
                            if (!cat) return null;
                            const active = isCategoryActive(cat as any);
                            return (
                              <div>
                                <div className={cn("flex items-center gap-2 mb-3 pb-2 border-b-2", active ? "border-primary/30" : "border-slate-100")}>
                                  <span className={cn("w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 border", active ? "bg-primary/10 border-primary/20 text-primary" : "bg-violet-50 border-violet-100 text-violet-500")}>
                                    {renderCategoryIcon(cat.icon, "h-3.5 w-3.5")}
                                  </span>
                                  <span className={cn("text-[10px] font-extrabold uppercase tracking-[0.14em] leading-none", active ? "text-primary" : "text-slate-500")}>
                                    {cat.title}
                                  </span>
                                </div>
                                <div className="flex flex-col">
                                  {(cat.items as any[]).map((item) => (
                                    <Link
                                      key={item.label}
                                      to={item.href}
                                      onClick={() => { setActiveDropdown(null); setIsOpen(false); }}
                                      className={cn(
                                        "group flex items-center gap-2 px-2 py-[4px] rounded-md text-[11.5px] font-medium transition-all duration-150 truncate",
                                        location.pathname === item.href
                                          ? "bg-primary/10 text-primary font-semibold"
                                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                      )}
                                    >
                                      <span className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors", location.pathname === item.href ? "bg-primary" : "bg-slate-200 group-hover:bg-slate-400")} />
                                      {item.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            );
                          })()}

                          {/* ━━ MBBS ADMISSION INDIA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
                          {(() => {
                            const cat = filteredCategories.find(c => c.isNested);
                            if (!cat) return null;
                            const states = cat.items as any[];
                            const active = isCategoryActive(cat as any);
                            // Split 6 states into 3 pairs
                            const colA = states.filter((_, i) => i < 2);  // Rajasthan, Karnataka
                            const colB = states.filter((_, i) => i >= 2 && i < 4); // WB, UP
                            const colC = states.filter((_, i) => i >= 4);  // TN, Odisha
                            const StateGroup = ({ groups }: { groups: any[] }) => (
                              <div className="flex flex-col gap-2.5">
                                {groups.map((sg: any) => (
                                  <div key={sg.state}>
                                    <div className="flex items-center gap-1.5 mb-1">
                                      <span className="h-px w-3 bg-rose-200 flex-shrink-0" />
                                      <span className="text-[9px] font-black text-rose-400 uppercase tracking-[0.13em] leading-none">{sg.state}</span>
                                    </div>
                                    {sg.subItems.map((item: any) => (
                                      <Link
                                        key={item.label}
                                        to={item.href}
                                        onClick={() => { setActiveDropdown(null); setIsOpen(false); }}
                                        className={cn(
                                          "block px-2 py-[3px] rounded-md text-[11px] font-medium transition-all duration-150 truncate",
                                          location.pathname === item.href
                                            ? "bg-rose-50 text-rose-600 font-semibold"
                                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                        )}
                                      >
                                        {item.label}
                                      </Link>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            );
                            return (
                              <div>
                                <div className={cn("flex items-center gap-2 mb-3 pb-2 border-b-2", active ? "border-rose-200" : "border-slate-100")}>
                                  <span className={cn("w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 border", active ? "bg-rose-50 border-rose-100 text-rose-500" : "bg-rose-50 border-rose-100 text-rose-400")}>
                                    {renderCategoryIcon(cat.icon, "h-3.5 w-3.5")}
                                  </span>
                                  <span className={cn("text-[10px] font-extrabold uppercase tracking-[0.14em] leading-none", active ? "text-rose-600" : "text-slate-500")}>
                                    {cat.title}
                                  </span>
                                  <span className="ml-auto text-[9px] font-bold text-rose-400 bg-rose-50 border border-rose-100 px-1.5 py-0.5 rounded-full flex-shrink-0">
                                    {states.length} States
                                  </span>
                                </div>
                                {/* 3-column state grid */}
                                <div className="grid grid-cols-3 gap-x-6">
                                  <StateGroup groups={colA} />
                                  <StateGroup groups={colB} />
                                  <StateGroup groups={colC} />
                                </div>
                              </div>
                            );
                          })()}

                          {/* ━━ MANAGEMENT & OTHERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
                          {(() => {
                            const cat = filteredCategories.find(c => c.id === 'management-other-courses');
                            if (!cat) return null;
                            const active = isCategoryActive(cat as any);
                            return (
                              <div>
                                <div className={cn("flex items-center gap-2 mb-3 pb-2 border-b-2", active ? "border-amber-200" : "border-slate-100")}>
                                  <span className={cn("w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 border", active ? "bg-amber-50 border-amber-200 text-amber-600" : "bg-amber-50 border-amber-100 text-amber-500")}>
                                    {renderCategoryIcon(cat.icon, "h-3.5 w-3.5")}
                                  </span>
                                  <span className={cn("text-[10px] font-extrabold uppercase tracking-[0.14em] leading-none", active ? "text-amber-600" : "text-slate-500")}>
                                    {cat.title}
                                  </span>
                                </div>
                                <div className="flex flex-col">
                                  {(cat.items as any[]).map((item) => (
                                    <Link
                                      key={item.label}
                                      to={item.href}
                                      onClick={() => { setActiveDropdown(null); setIsOpen(false); }}
                                      className={cn(
                                        "group flex items-center gap-2 px-2 py-[4px] rounded-md text-[11.5px] font-medium transition-all duration-150 truncate",
                                        location.pathname === item.href
                                          ? "bg-amber-50 text-amber-700 font-semibold"
                                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                      )}
                                    >
                                      <span className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors", location.pathname === item.href ? "bg-amber-500" : "bg-slate-200 group-hover:bg-slate-400")} />
                                      {item.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            );
                          })()}

                        </div>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>
              , document.body)}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919933085333"
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full border-2 font-bold text-sm transition-all",
              isNavVisible
                ? "border-primary/20 text-primary hover:bg-primary/5"
                : "border-white/70 text-white hover:bg-white/10"
            )}
          >
            <Phone className="h-4 w-4" />
            +91 99330 85333
          </a>
          <Link
            to="/contact"
            className="px-6 py-2 rounded-full bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-all"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "lg:hidden p-2 rounded-xl transition-colors",
            isNavVisible ? "text-slate-900" : "text-white"
          )}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto custom-scrollbar">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <div className="flex flex-col">
                      <button
                        onClick={() => setMobileCollegesExpanded(!mobileCollegesExpanded)}
                        className={cn(
                          "text-lg font-bold text-slate-900 flex justify-between items-center w-full py-1 text-left outline-none",
                          isCollegesMenuLinkActive() && "text-primary"
                        )}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={cn("h-5 w-5 transition-transform duration-300", mobileCollegesExpanded && "rotate-180")} />
                      </button>

                      {mobileCollegesExpanded && (
                        <div className="mt-2 ml-4 flex flex-col gap-3 pl-4 border-l-2 border-slate-100">
                          {/* Search bar inside mobile dropdown */}
                          <div className="relative w-full my-2">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                            <input
                              type="text"
                              placeholder="Search colleges..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-full focus:bg-white outline-none text-slate-700 font-semibold"
                            />
                          </div>

                          {filteredCategories.map((category) => {
                            const isCatExpanded = mobileCategoryExpanded === category.id;
                            const hasActiveChild = isCategoryActive(category as any);
                            return (
                              <div key={category.id} className="flex flex-col">
                                <button
                                  onClick={() => setMobileCategoryExpanded(isCatExpanded ? null : category.id)}
                                  className={cn(
                                    "flex justify-between items-center text-sm font-bold text-slate-700 py-1.5 text-left uppercase tracking-wider outline-none",
                                    hasActiveChild && "text-primary"
                                  )}
                                >
                                  <div className="flex items-center gap-2">
                                    {renderCategoryIcon(category.icon, "h-3.5 w-3.5")}
                                    <span>{category.title}</span>
                                  </div>
                                  <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", isCatExpanded && "rotate-180")} />
                                </button>

                                {isCatExpanded && (
                                  <div className="mt-1 ml-4 flex flex-col gap-2 pl-3 border-l border-slate-200">
                                    {category.isNested ? (
                                      // MBBS nested states in Mobile
                                      (category.items as any[]).map((stateGroup) => {
                                        const isStateExpanded = mobileStateExpanded === stateGroup.state;
                                        const hasActiveStateChild = stateGroup.subItems.some((sub: any) => location.pathname === sub.href);
                                        return (
                                          <div key={stateGroup.state} className="flex flex-col">
                                            <button
                                              onClick={() => setMobileStateExpanded(isStateExpanded ? null : stateGroup.state)}
                                              className={cn(
                                                "flex justify-between items-center text-xs font-bold text-slate-500 py-1 text-left uppercase tracking-wide outline-none",
                                                hasActiveStateChild && "text-primary"
                                              )}
                                            >
                                              <span>{stateGroup.state}</span>
                                              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", isStateExpanded && "rotate-180")} />
                                            </button>

                                            {isStateExpanded && (
                                              <div className="mt-1 ml-3 flex flex-col gap-1.5 pl-2 border-l border-slate-100">
                                                {stateGroup.subItems.map((col: any) => (
                                                  <Link
                                                    key={col.label}
                                                    to={col.href}
                                                    className={cn(
                                                      "block py-1 text-xs font-bold text-slate-600 uppercase tracking-wide rounded-md pl-2",
                                                      location.pathname === col.href
                                                        ? "text-primary font-extrabold"
                                                        : "hover:text-primary"
                                                    )}
                                                    onClick={() => setIsOpen(false)}
                                                  >
                                                    {col.label}
                                                  </Link>
                                                ))}
                                              </div>
                                            )}
                                          </div>
                                        );
                                      })
                                    ) : (
                                      // Regular Categories
                                      (category.items as any[]).map((col) => (
                                        <Link
                                          key={col.label}
                                          to={col.href}
                                          className={cn(
                                            "block py-1 text-xs font-bold text-slate-600 uppercase tracking-wide rounded-md pl-2",
                                            location.pathname === col.href
                                              ? "text-primary font-extrabold"
                                              : "hover:text-primary"
                                          )}
                                          onClick={() => setIsOpen(false)}
                                        >
                                          {col.label}
                                        </Link>
                                      ))
                                    )}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className={cn(
                        "text-lg font-bold text-slate-900 flex justify-between items-center",
                        location.pathname === link.href && "text-primary"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-4 pt-6 border-t border-slate-100 flex flex-col gap-3">
                <a
                  href="tel:+919933085333"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-50 font-bold text-primary"
                >
                  <Phone className="h-5 w-5" />
                  Call Support
                </a>
                <a
                  href="https://wa.me/919933085333"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-green-500 text-white font-bold"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
