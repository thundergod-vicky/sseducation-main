import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "./pages/Home.tsx";
import Engineering from "./pages/Engineering.tsx";
import About from "./pages/About.tsx";
import Courses from "./pages/Courses.tsx";
import Results from "./pages/Results.tsx";
import Contact from "./pages/Contact.tsx";
import FAQ from "./pages/FAQ.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import AdminDashboard from "./pages/AdminDashboard.tsx";
import AdLandingPage from "./pages/AdLandingPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import CollegeRoute from "./pages/CollegeRoute.tsx";
import BTechAdmissionBengaluru2026 from "./pages/BTechAdmissionBengaluru2026.tsx";
import MbbsAdmissionGuideIndia from "./pages/MbbsAdmissionGuideIndia.tsx";
import IemKolkataAdmission2026 from "./pages/IemKolkataAdmission2026.tsx";
import HeritageKolkataAdmission2026 from "./pages/HeritageKolkataAdmission2026.tsx";
import TechnoMainSaltLakeAdmission2026 from "./pages/TechnoMainSaltLakeAdmission2026.tsx";
import HaldiaAdmission2026 from "./pages/HaldiaAdmission2026.tsx";
import KiitBhubaneswarAdmission2026 from "./pages/KiitBhubaneswarAdmission2026.tsx";
import SoaBhubaneswarAdmission2026 from "./pages/SoaBhubaneswarAdmission2026.tsx";
import MsRamaiahBangaloreAdmission2026 from "./pages/MsRamaiahBangaloreAdmission2026.tsx";
import RvceBangaloreAdmission2026 from "./pages/RvceBangaloreAdmission2026.tsx";
import MahatmaGandhiJaipurAdmission2026 from "./pages/MahatmaGandhiJaipurAdmission2026.tsx";
import NimsJaipurAdmission2026 from "./pages/NimsJaipurAdmission2026.tsx";
import JnujaipurAdmission2026 from "./pages/JnujaipurAdmission2026.tsx";
import GeetanjaliUdaipurAdmission2026 from "./pages/GeetanjaliUdaipurAdmission2026.tsx";
import PacificMedicalUdaipurAdmission2026 from "./pages/PacificMedicalUdaipurAdmission2026.tsx";
import PacificInstituteUdaipurAdmission2026 from "./pages/PacificInstituteUdaipurAdmission2026.tsx";
import AnantaRajsamandAdmission2026 from "./pages/AnantaRajsamandAdmission2026.tsx";
import AmericanInternationalUdaipurAdmission2026 from "./pages/AmericanInternationalUdaipurAdmission2026.tsx";
import TantiaSriGanganagarAdmission2026 from "./pages/TantiaSriGanganagarAdmission2026.tsx";
import RamaiahMedicalAdmission2026 from "./pages/RamaiahMedicalAdmission2026.tsx";
import StJohnsMedicalAdmission2026 from "./pages/StJohnsMedicalAdmission2026.tsx";
import KimsBangaloreAdmission2026 from "./pages/KimsBangaloreAdmission2026.tsx";
import VydehiMedicalAdmission2026 from "./pages/VydehiMedicalAdmission2026.tsx";
import BgsGlobalMedicalAdmission2026 from "./pages/BgsGlobalMedicalAdmission2026.tsx";
import DrAmbedkarMedicalAdmission2026 from "./pages/DrAmbedkarMedicalAdmission2026.tsx";
import EastPointMedicalAdmission2026 from "./pages/EastPointMedicalAdmission2026.tsx";
import ThankYou from "./pages/ThankYou.tsx";
import DayanandaSagarAdmission from "./pages/DayanandaSagarAdmission.tsx";
import RvitmAdmission from "./pages/RvitmAdmission.tsx";
import RvUniversityAdmission from "./pages/RvUniversityAdmission.tsx";
import SriMvitAdmission from "./pages/SriMvitAdmission.tsx";
import VitVelloreAdmission from "./pages/VitVelloreAdmission.tsx";
import MitManipalAdmission from "./pages/MitManipalAdmission.tsx";
import AmritaAdmission from "./pages/AmritaAdmission.tsx";
import BitsPilaniAdmission from "./pages/BitsPilaniAdmission.tsx";
import NmitAdmission from "./pages/NmitAdmission.tsx";
import BmsceAdmission from "./pages/BmsceAdmission.tsx";
import BmsitAdmission from "./pages/BmsitAdmission.tsx";

// New West Bengal Medical College Pages
import KpcMedicalKolkataAdmission2026 from "./pages/KpcMedicalKolkataAdmission2026.tsx";
import JagannathGuptaMedicalKolkataAdmission2026 from "./pages/JagannathGuptaMedicalKolkataAdmission2026.tsx";
import IqCityMedicalDurgapurAdmission2026 from "./pages/IqCityMedicalDurgapurAdmission2026.tsx";
import IcareMedicalHaldiaAdmission2026 from "./pages/IcareMedicalHaldiaAdmission2026.tsx";
import GouriDeviMedicalDurgapurAdmission2026 from "./pages/GouriDeviMedicalDurgapurAdmission2026.tsx";

// New Uttar Pradesh Medical College Pages
import ShardaMedicalGreaterNoidaAdmission2026 from "./pages/ShardaMedicalGreaterNoidaAdmission2026.tsx";
import SubhartiMedicalMeerutAdmission2026 from "./pages/SubhartiMedicalMeerutAdmission2026.tsx";
import ErasMedicalAdmission2026 from "./pages/ErasMedicalAdmission2026.tsx";
import SrmsMedicalBareillyAdmission2026 from "./pages/SrmsMedicalBareillyAdmission2026.tsx";
import RohilkhandMedicalBareillyAdmission2026 from "./pages/RohilkhandMedicalBareillyAdmission2026.tsx";
import HindMedicalBarabankiAdmission2026 from "./pages/HindMedicalBarabankiAdmission2026.tsx";

// New Tamil Nadu Private & Deemed Medical College Pages
import CmcVelloreAdmission2026 from "./pages/CmcVelloreAdmission2026.tsx";
import SaveethaMedicalChennaiAdmission2026 from "./pages/SaveethaMedicalChennaiAdmission2026.tsx";
import SriRamachandraMedicalChennaiAdmission2026 from "./pages/SriRamachandraMedicalChennaiAdmission2026.tsx";
import SrmMedicalChennaiAdmission2026 from "./pages/SrmMedicalChennaiAdmission2026.tsx";
import PsgMedicalCoimbatoreAdmission2026 from "./pages/PsgMedicalCoimbatoreAdmission2026.tsx";
import ChettinadMedicalChennaiAdmission2026 from "./pages/ChettinadMedicalChennaiAdmission2026.tsx";
import SreeBalajiMedicalChennaiAdmission2026 from "./pages/SreeBalajiMedicalChennaiAdmission2026.tsx";

// New Odisha Private & Deemed Medical College Pages
import KimsMedicalBhubaneswarAdmission2026 from "./pages/KimsMedicalBhubaneswarAdmission2026.tsx";
import ImsSumMedicalBhubaneswarAdmission2026 from "./pages/ImsSumMedicalBhubaneswarAdmission2026.tsx";
import HiTechMedicalBhubaneswarAdmission2026 from "./pages/HiTechMedicalBhubaneswarAdmission2026.tsx";
import HiTechMedicalRourkelaAdmission2026 from "./pages/HiTechMedicalRourkelaAdmission2026.tsx";
import DriemsMedicalCuttackAdmission2026 from "./pages/DriemsMedicalCuttackAdmission2026.tsx";

import { MainLayout } from "./components/layout/MainLayout";

const queryClient = new QueryClient();

const AnimatedAppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Main Website Pages */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/courses" element={<MainLayout><Courses /></MainLayout>} />
        <Route path="/engineering" element={<MainLayout><Engineering /></MainLayout>} /> {/* Current landing page */}
        <Route path="/results" element={<MainLayout><Results /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/thank-you" element={<MainLayout><ThankYou /></MainLayout>} />
        <Route path="/faq" element={<MainLayout><FAQ /></MainLayout>} />
        <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
        <Route path="/blog/:slug" element={<MainLayout><BlogPost /></MainLayout>} />
        
        {/* College Pages */}
        <Route path="/college/kiit" element={<MainLayout><KiitBhubaneswarAdmission2026 /></MainLayout>} />
        <Route path="/rv-college-btech-admission-2026" element={<MainLayout><RvceBangaloreAdmission2026 /></MainLayout>} />
        <Route path="/ramaiah-institute-btech-admission-2026" element={<MainLayout><MsRamaiahBangaloreAdmission2026 /></MainLayout>} />
        <Route path="/iem-kolkata-btech-admission-2026" element={<MainLayout><CollegeRoute configKey="iem" /></MainLayout>} />
        <Route path="/srm-university-btech-admission-2026" element={<MainLayout><CollegeRoute configKey="srm" /></MainLayout>} />
        <Route path="/mbbs" element={<MainLayout><CollegeRoute configKey="mbbs" /></MainLayout>} />
        
        {/* Ad Landing Pages (No Nav/Footer) */}
        <Route path="/apply/:college" element={<AdLandingPage />} />
        
        {/* Specific Ad Landing Aliases */}
        <Route path="/apply/kiit" element={<AdLandingPage />} />
        <Route path="/apply/rvce" element={<AdLandingPage />} />
        <Route path="/apply/ramaiah" element={<AdLandingPage />} />
        <Route path="/apply/iem" element={<AdLandingPage />} />
        <Route path="/apply/srm" element={<AdLandingPage />} />
        <Route path="/apply/mbbs" element={<AdLandingPage />} />
        
        {/* Admin Panel */}
        <Route path="/admin" element={<AdminDashboard />} />
        
        {/* Standing Landing Page for BTech Bengaluru 2026 */}
        <Route path="/btech-admission-bengaluru-2026" element={<MainLayout><BTechAdmissionBengaluru2026 /></MainLayout>} />
        
         {/* Standing Landing Page for MBBS Admission Guide India 2026 */}
        <Route path="/mbbs-admission-guide-india" element={<MainLayout><MbbsAdmissionGuideIndia /></MainLayout>} />
        
        {/* Standing Landing Page for IEM Kolkata Admission 2026 */}
        <Route path="/iem-kolkata-admission-2026" element={<MainLayout><IemKolkataAdmission2026 /></MainLayout>} />
        
        {/* Standing Landing Page for Heritage Kolkata Admission 2026 */}
        <Route path="/heritage-institute-of-technology-hitk-kolkata" element={<MainLayout><HeritageKolkataAdmission2026 /></MainLayout>} />
        
        {/* Standing Landing Page for Techno Main Salt Lake 2026 */}
        <Route path="/techno-main-salt-lake-tmsl-kolkata" element={<MainLayout><TechnoMainSaltLakeAdmission2026 /></MainLayout>} />
        
        {/* Standing Landing Page for Haldia Institute of Technology 2026 */}
        <Route path="/haldia-institute-of-technology-hit-haldia" element={<MainLayout><HaldiaAdmission2026 /></MainLayout>} />
        
        {/* Standing Landing Page for KIIT Bhubaneswar 2026 */}
        <Route path="/kiit-university-bhubaneswar-admission-2026" element={<MainLayout><KiitBhubaneswarAdmission2026 /></MainLayout>} />
        
        {/* Standing Landing Page for SOA University Bhubaneswar 2026 */}
        <Route path="/soa-university-bhubaneswar-admission-2026" element={<MainLayout><SoaBhubaneswarAdmission2026 /></MainLayout>} />
        
        {/* Standing Landing Page for Dayananda Sagar College of Engineering (DSCE) */}
        <Route path="/dayananda-sagar-college-of-engineering-bangalore" element={<MainLayout><DayanandaSagarAdmission /></MainLayout>} />
        
        {/* Standing Landing Page for RV Institute of Technology & Management (RVITM) */}
        <Route path="/rv-institute-of-technology-management-bangalore" element={<MainLayout><RvitmAdmission /></MainLayout>} />
        
        {/* Standing Landing Page for RV University (RVU) */}
        <Route path="/rv-university-bengaluru" element={<MainLayout><RvUniversityAdmission /></MainLayout>} />
        
        {/* Standing Landing Page for Sri Venkateshwara Institute of Technology (Sri MVIT) */}
        <Route path="/sri-mvit-bangalore" element={<MainLayout><SriMvitAdmission /></MainLayout>} />
        
        {/* Standing Landing Page for Vellore Institute of Technology (VIT) Vellore */}
        <Route path="/vit-vellore" element={<MainLayout><VitVelloreAdmission /></MainLayout>} />

        {/* Standing Landing Page for MIT Manipal */}
        <Route path="/mit-manipal" element={<MainLayout><MitManipalAdmission /></MainLayout>} />

        {/* Standing Landing Page for Amrita Vishwa Vidyapeetham */}
        <Route path="/amrita-vishwa-vidyapeetham" element={<MainLayout><AmritaAdmission /></MainLayout>} />

        {/* Standing Landing Page for BITS Pilani */}
        <Route path="/bits-pilani" element={<MainLayout><BitsPilaniAdmission /></MainLayout>} />

        {/* Standing Landing Page for NMIT Bangalore */}
        <Route path="/nmit-bangalore" element={<MainLayout><NmitAdmission /></MainLayout>} />

        {/* Standing Landing Page for BMS College of Engineering (BMSCE) */}
        <Route path="/bms-college-of-engineering-bangalore" element={<MainLayout><BmsceAdmission /></MainLayout>} />

        {/* Standing Landing Page for BMS Institute of Technology & Management (BMSIT&M) */}
        <Route path="/bmsit-bangalore" element={<MainLayout><BmsitAdmission /></MainLayout>} />
        {/* Standing Landing Page for Mahatma Gandhi Medical College, Jaipur 2026 */}
        <Route path="/mahatma-gandhi-medical-college-jaipur-admission-2026" element={<MainLayout><MahatmaGandhiJaipurAdmission2026 /></MainLayout>} />
        {/* Standing Landing Page for NIMS Medical College, Jaipur 2026 */}
        <Route path="/national-institute-of-medical-sciences-jaipur-admission-2026" element={<MainLayout><NimsJaipurAdmission2026 /></MainLayout>} />
        {/* Standing Landing Page for JNU Medical College, Jaipur 2026 */}
        <Route path="/jnu-medical-college-jaipur-admission-2026" element={<MainLayout><JnujaipurAdmission2026 /></MainLayout>} />
        {/* Standing Landing Page for Geetanjali Medical College, Udaipur 2026 */}
        <Route path="/geetanjali-medical-college-udaipur-admission-2026" element={<MainLayout><GeetanjaliUdaipurAdmission2026 /></MainLayout>} />
        {/* Standing Landing Page for Pacific Medical College, Udaipur 2026 */}
        <Route path="/pacific-medical-college-udaipur-admission-2026" element={<MainLayout><PacificMedicalUdaipurAdmission2026 /></MainLayout>} />
        {/* Standing Landing Page for Pacific Institute of Medical Sciences, Udaipur 2026 */}
        <Route path="/pacific-institute-of-medical-sciences-udaipur-admission-2026" element={<MainLayout><PacificInstituteUdaipurAdmission2026 /></MainLayout>} />
        {/* Standing Landing Page for Ananta Institute of Medical Sciences, Rajsamand 2026 */}
        <Route path="/ananta-medical-college-rajsamand-admission-2026" element={<MainLayout><AnantaRajsamandAdmission2026 /></MainLayout>} />
        {/* Standing Landing Page for American International Institute of Medical Sciences, Udaipur 2026 */}
        <Route path="/american-international-medical-college-udaipur-admission-2026" element={<MainLayout><AmericanInternationalUdaipurAdmission2026 /></MainLayout>} />
        {/* Standing Landing Page for Tantia Medical College, Sri Ganganagar 2026 */}
        <Route path="/tantia-medical-college-sri-ganganagar-admission-2026" element={<MainLayout><TantiaSriGanganagarAdmission2026 /></MainLayout>} />
        
        {/* Standing Landing Page for Ramaiah Medical College, Bangalore 2026 */}
        <Route path="/ramaiah-medical-college-bangalore-admission-2026" element={<MainLayout><RamaiahMedicalAdmission2026 /></MainLayout>} />
        {/* Standing Landing Page for St. John's Medical College, Bangalore 2026 */}
        <Route path="/st-johns-medical-college-bangalore-admission-2026" element={<MainLayout><StJohnsMedicalAdmission2026 /></MainLayout>} />
        {/* Standing Landing Page for KIMS Medical College, Bangalore 2026 */}
        <Route path="/kempegowda-institute-of-medical-sciences-bangalore-admission-2026" element={<MainLayout><KimsBangaloreAdmission2026 /></MainLayout>} />
        {/* Standing Landing Page for Vydehi Medical College, Bangalore 2026 */}
        <Route path="/vydehi-institute-of-medical-sciences-bangalore-admission-2026" element={<MainLayout><VydehiMedicalAdmission2026 /></MainLayout>} />
        {/* Standing Landing Page for BGS Global Medical College, Bangalore 2026 */}
        <Route path="/bgs-global-institute-of-medical-sciences-bangalore-admission-2026" element={<MainLayout><BgsGlobalMedicalAdmission2026 /></MainLayout>} />
        {/* Standing Landing Page for Dr. Ambedkar Medical College, Bangalore 2026 */}
        <Route path="/dr-br-ambedkar-medical-college-bangalore-admission-2026" element={<MainLayout><DrAmbedkarMedicalAdmission2026 /></MainLayout>} />
        {/* Standing Landing Page for East Point Medical College, Bangalore 2026 */}
        <Route path="/east-point-college-of-medical-sciences-bangalore-admission-2026" element={<MainLayout><EastPointMedicalAdmission2026 /></MainLayout>} />
        
        {/* West Bengal Private Medical Colleges 2026 */}
        <Route path="/kpc-medical-college-kolkata-admission-2026" element={<MainLayout><KpcMedicalKolkataAdmission2026 /></MainLayout>} />
        <Route path="/jagannath-gupta-institute-of-medical-sciences-kolkata-admission-2026" element={<MainLayout><JagannathGuptaMedicalKolkataAdmission2026 /></MainLayout>} />
        <Route path="/iq-city-medical-college-durgapur-admission-2026" element={<MainLayout><IqCityMedicalDurgapurAdmission2026 /></MainLayout>} />
        <Route path="/icare-institute-of-medical-sciences-haldia-admission-2026" element={<MainLayout><IcareMedicalHaldiaAdmission2026 /></MainLayout>} />
        <Route path="/gouri-devi-institute-of-medical-sciences-durgapur-admission-2026" element={<MainLayout><GouriDeviMedicalDurgapurAdmission2026 /></MainLayout>} />
        
        {/* Uttar Pradesh Private Medical Colleges 2026 */}
        <Route path="/school-of-medical-sciences-sharda-university-greater-noida-admission-2026" element={<MainLayout><ShardaMedicalGreaterNoidaAdmission2026 /></MainLayout>} />
        <Route path="/subharti-medical-college-meerut-admission-2026" element={<MainLayout><SubhartiMedicalMeerutAdmission2026 /></MainLayout>} />
        <Route path="/eras-lucknow-medical-college-admission-2026" element={<MainLayout><ErasMedicalAdmission2026 /></MainLayout>} />
        <Route path="/sri-ram-murti-smarak-institute-of-medical-sciences-bareilly-admission-2026" element={<MainLayout><SrmsMedicalBareillyAdmission2026 /></MainLayout>} />
        <Route path="/rohilkhand-medical-college-bareilly-admission-2026" element={<MainLayout><RohilkhandMedicalBareillyAdmission2026 /></MainLayout>} />
        <Route path="/hind-institute-of-medical-sciences-barabanki-admission-2026" element={<MainLayout><HindMedicalBarabankiAdmission2026 /></MainLayout>} />

        {/* Tamil Nadu Private & Deemed Medical Colleges 2026 */}
        <Route path="/christian-medical-college-vellore-admission-2026" element={<MainLayout><CmcVelloreAdmission2026 /></MainLayout>} />
        <Route path="/saveetha-medical-college-chennai-admission-2026" element={<MainLayout><SaveethaMedicalChennaiAdmission2026 /></MainLayout>} />
        <Route path="/sri-ramachandra-medical-college-chennai-admission-2026" element={<MainLayout><SriRamachandraMedicalChennaiAdmission2026 /></MainLayout>} />
        <Route path="/srm-medical-college-hospital-chennai-admission-2026" element={<MainLayout><SrmMedicalChennaiAdmission2026 /></MainLayout>} />
        <Route path="/psg-institute-of-medical-sciences-coimbatore-admission-2026" element={<MainLayout><PsgMedicalCoimbatoreAdmission2026 /></MainLayout>} />
        <Route path="/chettinad-hospital-and-research-institute-chennai-admission-2026" element={<MainLayout><ChettinadMedicalChennaiAdmission2026 /></MainLayout>} />
        <Route path="/sree-balaji-medical-college-chennai-admission-2026" element={<MainLayout><SreeBalajiMedicalChennaiAdmission2026 /></MainLayout>} />

        {/* Odisha Private & Deemed Medical Colleges 2026 */}
        <Route path="/kalinga-institute-of-medical-sciences-bhubaneswar-admission-2026" element={<MainLayout><KimsMedicalBhubaneswarAdmission2026 /></MainLayout>} />
        <Route path="/institute-of-medical-sciences-sum-hospital-bhubaneswar-admission-2026" element={<MainLayout><ImsSumMedicalBhubaneswarAdmission2026 /></MainLayout>} />
        <Route path="/hi-tech-medical-college-bhubaneswar-admission-2026" element={<MainLayout><HiTechMedicalBhubaneswarAdmission2026 /></MainLayout>} />
        <Route path="/hi-tech-medical-college-rourkela-admission-2026" element={<MainLayout><HiTechMedicalRourkelaAdmission2026 /></MainLayout>} />
        <Route path="/driems-institute-of-health-sciences-cuttack-admission-2026" element={<MainLayout><DriemsMedicalCuttackAdmission2026 /></MainLayout>} />

        {/* Catch-all */}
        <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
      </Routes>
    </AnimatePresence>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedAppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
