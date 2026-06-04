import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import { MainLayout } from "./components/layout/MainLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
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
          
          {/* Catch-all */}
          <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
