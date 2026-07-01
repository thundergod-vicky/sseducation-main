import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "../landing/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import ChatbotWidget from "../chatbot/ChatbotWidget";
import { motion } from "framer-motion";

interface MainLayoutProps {
  children: ReactNode;
  showNav?: boolean;
  showFooter?: boolean;
}

export const MainLayout = ({ children, showNav = true, showFooter = true }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      {showNav && <Navbar />}
      <motion.main 
        className="flex-grow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.main>
      {showFooter && <Footer />}
      <Toaster />
      <Sonner />
      <ChatbotWidget />
    </div>
  );
};
