import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "../landing/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import ChatbotWidget from "../chatbot/ChatbotWidget";

interface MainLayoutProps {
  children: ReactNode;
  showNav?: boolean;
  showFooter?: boolean;
}

export const MainLayout = ({ children, showNav = true, showFooter = true }: MainLayoutProps) => {
  const location = useLocation();
  const hideChatbot = [
    "/mahatma-gandhi-medical-college-jaipur-admission-2026",
    "/national-institute-of-medical-sciences-jaipur-admission-2026",
    "/jnu-medical-college-jaipur-admission-2026"
  ].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {showNav && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {showFooter && <Footer />}
      <Toaster />
      <Sonner />
      {!hideChatbot && <ChatbotWidget />}
    </div>
  );
};
