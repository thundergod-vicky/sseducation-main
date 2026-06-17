import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope, HeartPulse, Activity, FileText, ShieldCheck,
  Users, MapPin, BookOpen, AlertTriangle, Calendar, ArrowRight,
  ChevronDown, ChevronUp, Sparkles, Building, Bell, CheckCircle2, Star,
  GraduationCap, Award, Home
} from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useJsonLd } from "@/hooks/useJsonLd";
import { useSeo } from "@/hooks/useSeo";
import type { CollegeTheme } from "./MbbsThemes";

import medicalBuilding from "@/assets/medical-building.png";
import mbbsHero from "@/assets/mbbs-hero.png";
import mbbs2 from "@/assets/mbbs2.webp";
import mbbs3 from "@/assets/mbbs3.webp";

const BG_IMAGES = [mbbsHero, medicalBuilding, mbbs2];

// ─── Form Schema ───────────────────────────────────────────────────────────────
const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  email: z.string().trim().email("Enter a valid email address").max(120).optional().or(z.literal("")),
  neetScore: z.string().trim().refine((val) => {
    const num = Number(val);
    return !isNaN(num) && num >= 0 && num <= 720;
  }, { message: "Score must be between 0 and 720" }),
  category: z.string().min(1, "Select category"),
  state: z.string().min(1, "Select state of domicile"),
  preferredQuota: z.string().min(1, "Select preferred quota"),
});
type FormDataType = z.infer<typeof leadFormSchema>;

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdLoigxaiQ05jssy6oUcVgENjCRBFjE1yFBmmCmB1EnPVZghw/formResponse";

// ─── Data Types ────────────────────────────────────────────────────────────────
export interface CollegeHighlight {
  title: string;
  value: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}
export interface FeeRow { quota: string; annualFee: string; remark: string; }
export interface CutoffRow { category: string; scoreRange: string; percentile: string; }
export interface AdmissionStep { title: string; desc: string; }
export interface FacilityItem { title: string; desc: string; icon: React.ComponentType<{ className?: string }>; }
export interface FaqItem { q: string; a: string; }
export interface NoticeItem { text: string; date: string; tag: string; }
export interface QuotaOption { value: string; label: string; }
export interface EligibilityResult { status: string; text: string; quotaAdvice: string; }

export interface CollegeData {
  // SEO & Structured Data
  seoTitle: string;
  seoDescription: string;
  jsonLd: object;
  // Identity
  abbreviation: string;
  fullName: string;
  hindiName?: string;
  affiliation: string;
  location: string;
  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroBadgeText?: string;
  // Ticker
  tickerMessage: string;
  // Dean section
  deanName: string;
  deanDesignation: string;
  deanQuote: string;
  contactEmail: string;
  // Notice board
  notices: NoticeItem[];
  // Predictor
  initialScore: number;
  predictorMidLabel: string;
  getEligibilityAnalysis: (score: number, category: string) => EligibilityResult;
  // Content sections
  overviewTitle: string;
  overviewParagraphs: string[];
  highlights: CollegeHighlight[];
  feeStructure: FeeRow[];
  feeNotes: string[];
  cutoffSectionTitle: string;
  cutoffs: CutoffRow[];
  processSectionTitle: string;
  admissionSteps: AdmissionStep[];
  facilities: FacilityItem[];
  faqs: FaqItem[];
  // Form config
  formId: string;
  quotaOptions: QuotaOption[];
  counselingNote: string;
  formDeskLabel: string;
  heroBgImage?: string;
  heroBgImages?: string[];
}

interface Props {
  theme: CollegeTheme;
  college: CollegeData;
}

// ─── Section Menu ──────────────────────────────────────────────────────────────
const MENU_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "highlights", label: "Highlights" },
  { id: "predictor", label: "Eligibility" },
  { id: "fees", label: "Fees" },
  { id: "cutoff", label: "Cutoff" },
  { id: "process", label: "Steps" },
  { id: "facilities", label: "Facilities" },
  { id: "faqs", label: "FAQs" },
] as const;
type SectionId = typeof MENU_ITEMS[number]['id'];

// ═══════════════════════════════════════════════════════════════════════════════
// HERO VARIANTS
// ═══════════════════════════════════════════════════════════════════════════════

interface HeroProps {
  college: CollegeData;
  theme: CollegeTheme;
  bgIndex: number;
  scrollToForm: () => void;
  heroImages: string[];
  dynamicH1: React.ReactNode;
  keyFacts: { label: string; value: string; icon: React.ComponentType<{ className?: string }> }[];
}

/** Hero A — Split Panel: Text left | Image right */
const HeroSplit = ({ college, theme, bgIndex, scrollToForm, heroImages, dynamicH1, keyFacts }: HeroProps) => (
  <section className="relative z-10 overflow-hidden" style={{ minHeight: 420 }}>
    <div className="grid md:grid-cols-2" style={{ minHeight: 420 }}>
      {/* Left: Text panel */}
      <div
        className="flex flex-col justify-center px-8 md:px-12 py-12 relative"
        style={{ background: `linear-gradient(135deg, ${theme.primaryDark}, ${theme.primary})` }}
      >
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative z-10 max-w-md space-y-4">
          {college.heroBadgeText && (
            <span className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-md"
              style={{ background: theme.accent, color: theme.accentOnAccent }}>
              <Star className="h-3 w-3" /> {college.heroBadgeText}
            </span>
          )}
          {dynamicH1}
          <p className="text-sm leading-relaxed font-semibold opacity-90" style={{ color: 'rgba(255,255,255,0.8)' }}>
            {college.heroSubtitle}
          </p>
          {/* Key Facts Row */}
          <div className="flex flex-wrap gap-2 pt-1 pb-2">
            {keyFacts.map((fact, idx) => {
              const Icon = fact.icon;
              return (
                <div key={idx} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold backdrop-blur-md border border-white/10 bg-white/5 text-white/90 animate-fade-in">
                  <Icon className="h-3 w-3 opacity-75 shrink-0" />
                  <span>{fact.label}: <strong className="font-extrabold text-white">{fact.value}</strong></span>
                </div>
              );
            })}
          </div>
          <div className="pt-2">
            <Button onClick={scrollToForm}
              className="font-black text-xs uppercase tracking-widest px-6 py-2.5 rounded-lg shadow-lg border transition-all active:scale-95"
              style={{ background: theme.accent, color: theme.accentOnAccent, borderColor: theme.accentDark }}>
              Apply for Counseling <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
        {/* Corner accent */}
        <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10"
          style={{ background: theme.accent, clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} />
      </div>
      {/* Right: Image */}
      <div className="relative overflow-hidden hidden md:block">
        <AnimatePresence initial={false}>
          <motion.img key={bgIndex} src={heroImages[bgIndex % heroImages.length]}
            initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }} transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover" alt={`${college.fullName} campus`} />
        </AnimatePresence>
        <div className="absolute inset-0" style={{ background: `${theme.primary}55` }} />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="rounded-xl p-3 backdrop-blur-sm border"
            style={{ background: 'rgba(0,0,0,0.45)', borderColor: 'rgba(255,255,255,0.1)' }}>
            <p className="text-white text-[10px] font-bold uppercase tracking-widest opacity-80">{college.location}</p>
            <p className="text-white text-xs font-black mt-0.5">{college.fullName}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/** Hero B — Diagonal Split: Image behind a diagonal color panel */
const HeroDiagonal = ({ college, theme, bgIndex, scrollToForm, heroImages, dynamicH1, keyFacts }: HeroProps) => (
  <section className="relative z-10 overflow-hidden" style={{ height: 460 }}>
    <AnimatePresence initial={false}>
      <motion.img key={bgIndex} src={heroImages[bgIndex % heroImages.length]}
        initial={{ opacity: 0 }} animate={{ opacity: 0.45 }} exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full object-cover z-0" alt={college.fullName} />
    </AnimatePresence>
    {/* Diagonal overlay */}
    <div className="absolute inset-0 z-10"
      style={{ background: `linear-gradient(115deg, ${theme.primaryDark}f0 55%, transparent 55%)` }} />
    <div className="absolute inset-0 z-5"
      style={{ background: `linear-gradient(to top, ${theme.primaryDark}80, transparent)` }} />
    <div className="container mx-auto px-6 max-w-7xl h-full relative z-20 flex items-center">
      <div className="max-w-xl space-y-4">
        {college.heroBadgeText && (
          <span className="inline-block text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded"
            style={{ background: theme.accent, color: theme.accentOnAccent }}>
            {college.heroBadgeText}
          </span>
        )}
        {dynamicH1}
        <p className="text-sm font-semibold leading-relaxed opacity-90" style={{ color: 'rgba(255,255,255,0.8)' }}>
          {college.heroSubtitle}
        </p>
        {/* Key Facts Row */}
        <div className="flex flex-wrap gap-2 pt-1 pb-2">
          {keyFacts.map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <div key={idx} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold backdrop-blur-md border border-white/10 bg-white/5 text-white/90">
                <Icon className="h-3 w-3 opacity-75 shrink-0" />
                <span>{fact.label}: <strong className="font-extrabold text-white">{fact.value}</strong></span>
              </div>
            );
          })}
        </div>
        <Button onClick={scrollToForm}
          className="font-black text-xs uppercase tracking-widest px-6 py-2.5 rounded-lg shadow-lg border active:scale-95"
          style={{ background: theme.accent, color: theme.accentOnAccent, borderColor: theme.accentDark }}>
          Free Counseling Session <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  </section>
);

/** Hero C — Full-Bleed Centred: Central text overlay on full-height image */
const HeroFullBleed = ({ college, theme, bgIndex, scrollToForm, heroImages, dynamicH1, keyFacts }: HeroProps) => (
  <section className="relative z-10 overflow-hidden" style={{ height: 480 }}>
    <AnimatePresence initial={false}>
      <motion.img key={bgIndex} src={heroImages[bgIndex % heroImages.length]}
        initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full object-cover z-0" alt={college.fullName} />
    </AnimatePresence>
    <div className="absolute inset-0 z-10"
      style={{ background: `linear-gradient(to top, ${theme.primaryDark}f5 40%, ${theme.primary}88 80%, ${theme.primary}60 100%)` }} />
    <div className="container mx-auto px-6 max-w-7xl h-full relative z-20 flex flex-col items-center justify-center text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="max-w-3xl space-y-4">
        {college.heroBadgeText && (
          <span className="inline-block text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full"
            style={{ background: theme.accent, color: theme.accentOnAccent }}>
            {college.heroBadgeText}
          </span>
        )}
        {dynamicH1}
        <p className="text-sm font-semibold leading-relaxed max-w-xl mx-auto opacity-90" style={{ color: 'rgba(255,255,255,0.85)' }}>
          {college.heroSubtitle}
        </p>
        {/* Key Facts Row */}
        <div className="flex flex-wrap gap-2 pt-1 pb-2 justify-center">
          {keyFacts.map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <div key={idx} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold backdrop-blur-md border border-white/10 bg-white/5 text-white/90">
                <Icon className="h-3 w-3 opacity-75 shrink-0" />
                <span>{fact.label}: <strong className="font-extrabold text-white">{fact.value}</strong></span>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center gap-3 pt-2">
          <Button onClick={scrollToForm}
            className="font-black text-xs uppercase tracking-widest px-8 py-3 rounded-full shadow-xl border active:scale-95"
            style={{ background: theme.accent, color: theme.accentOnAccent, borderColor: theme.accentDark }}>
            Apply for MBBS Counseling <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

/** Hero D — Geometric: Dark panel with geometric shapes, image fade-in on right */
const HeroGeometric = ({ college, theme, bgIndex, scrollToForm, heroImages, dynamicH1, keyFacts }: HeroProps) => (
  <section className="relative z-10 overflow-hidden" style={{ height: 440, background: theme.primary }}>
    {/* Geometric circles */}
    <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full opacity-10"
      style={{ background: theme.accent }} />
    <div className="absolute right-32 bottom-0 w-64 h-64 rounded-full opacity-5"
      style={{ background: theme.accent }} />
    <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 overflow-hidden hidden md:block">
      <AnimatePresence initial={false}>
        <motion.img key={bgIndex} src={heroImages[bgIndex % heroImages.length]}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full object-cover" alt={college.fullName} />
      </AnimatePresence>
      <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${theme.primary}, transparent)` }} />
    </div>
    <div className="absolute inset-0 opacity-5"
      style={{ backgroundImage: `linear-gradient(${theme.accent} 1px, transparent 1px), linear-gradient(90deg, ${theme.accent} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
    <div className="container mx-auto px-6 max-w-7xl h-full relative z-10 flex items-center">
      <div className="max-w-xl space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-0.5" style={{ background: theme.accent }} />
          <span className="text-[9px] font-black uppercase tracking-[0.25em]" style={{ color: theme.accent }}>
            {college.heroBadgeText || 'MBBS Admissions 2026'}
          </span>
        </div>
        {dynamicH1}
        <p className="text-sm font-semibold leading-relaxed opacity-90" style={{ color: 'rgba(255,255,255,0.75)' }}>
          {college.heroSubtitle}
        </p>
        {/* Key Facts Row */}
        <div className="flex flex-wrap gap-2 pt-1 pb-2">
          {keyFacts.map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <div key={idx} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold backdrop-blur-md border border-white/10 bg-white/5 text-white/90">
                <Icon className="h-3 w-3 opacity-75 shrink-0" />
                <span>{fact.label}: <strong className="font-extrabold text-white">{fact.value}</strong></span>
              </div>
            );
          })}
        </div>
        <Button onClick={scrollToForm}
          className="font-black text-xs uppercase tracking-widest px-6 py-2.5 rounded-lg border active:scale-95 shadow-lg"
          style={{ background: theme.accent, color: theme.accentOnAccent, borderColor: theme.accentDark }}>
          Get Counseling Guide <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  </section>
);

/** Hero E — Warm: Side gradient over landscape image with warm tones */
const HeroWarm = ({ college, theme, bgIndex, scrollToForm, heroImages, dynamicH1, keyFacts }: HeroProps) => (
  <section className="relative z-10 overflow-hidden" style={{ height: 460 }}>
    <AnimatePresence initial={false}>
      <motion.img key={bgIndex} src={heroImages[bgIndex % heroImages.length]}
        initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full object-cover z-0" alt={college.fullName} />
    </AnimatePresence>
    {/* Warm side gradient */}
    <div className="absolute inset-0 z-10"
      style={{ background: `linear-gradient(to right, ${theme.primaryDark}f5 45%, ${theme.primary}99 70%, transparent 100%)` }} />
    {/* Bottom fade to page bg */}
    <div className="absolute bottom-0 left-0 right-0 h-16 z-20"
      style={{ background: `linear-gradient(to bottom, transparent, ${theme.pageBg})` }} />
    {/* Ornamental top border */}
    <div className="absolute top-0 left-0 right-0 h-1 z-30"
      style={{ background: `linear-gradient(to right, ${theme.accent}, ${theme.accentDark}, ${theme.accent})` }} />
    <div className="container mx-auto px-6 max-w-7xl h-full relative z-20 flex items-center">
      <div className="max-w-xl space-y-4">
        {college.heroBadgeText && (
          <span className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded"
            style={{ background: theme.accent, color: theme.accentOnAccent }}>
            ✦ {college.heroBadgeText}
          </span>
        )}
        {dynamicH1}
        <p className="text-sm font-semibold leading-relaxed opacity-90" style={{ color: 'rgba(255,255,255,0.82)' }}>
          {college.heroSubtitle}
        </p>
        {/* Key Facts Row */}
        <div className="flex flex-wrap gap-2 pt-1 pb-2">
          {keyFacts.map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <div key={idx} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold backdrop-blur-md border border-white/10 bg-white/5 text-white/90">
                <Icon className="h-3 w-3 opacity-75 shrink-0" />
                <span>{fact.label}: <strong className="font-extrabold text-white">{fact.value}</strong></span>
              </div>
            );
          })}
        </div>
        <Button onClick={scrollToForm}
          className="font-black text-xs uppercase tracking-widest px-6 py-2.5 rounded-xl shadow-lg border active:scale-95"
          style={{ background: theme.accent, color: theme.accentOnAccent, borderColor: theme.accentDark }}>
          Apply Online <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  </section>
);

/** Hero F — Sky Gradient: Indigo-to-purple gradient with dot grid and image */
const HeroSkyGrad = ({ college, theme, bgIndex, scrollToForm, heroImages, dynamicH1, keyFacts }: HeroProps) => (
  <section className="relative z-10 overflow-hidden" style={{ height: 440,
    background: `linear-gradient(135deg, ${theme.primaryDark} 0%, ${theme.primary} 50%, ${theme.accent}88 100%)` }}>
    {/* Dot grid overlay */}
    <div className="absolute inset-0 opacity-[0.07]"
      style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }} />
    {/* Right-side image */}
    <div className="absolute right-0 top-0 bottom-0 w-5/12 opacity-20 hidden md:block overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.img key={bgIndex} src={heroImages[bgIndex % heroImages.length]}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full object-cover" alt={college.fullName} />
      </AnimatePresence>
    </div>
    {/* Arc decoration */}
    <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full opacity-10 border-4"
      style={{ borderColor: theme.accent }} />
    <div className="container mx-auto px-6 max-w-7xl h-full relative z-10 flex items-center">
      <div className="max-w-xl space-y-5">
        {college.heroBadgeText && (
          <span className="inline-block text-[9px] font-black uppercase tracking-[0.25em] px-3 py-1.5 rounded-lg border"
            style={{ background: `${theme.accent}22`, color: theme.accent, borderColor: `${theme.accent}44` }}>
            {college.heroBadgeText}
          </span>
        )}
        {dynamicH1}
        <p className="text-sm font-semibold leading-relaxed opacity-90" style={{ color: 'rgba(255,255,255,0.8)' }}>
          {college.heroSubtitle}
        </p>
        {/* Key Facts Row */}
        <div className="flex flex-wrap gap-2 pt-1 pb-2">
          {keyFacts.map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <div key={idx} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold backdrop-blur-md border border-white/10 bg-white/5 text-white/90">
                <Icon className="h-3 w-3 opacity-75 shrink-0" />
                <span>{fact.label}: <strong className="font-extrabold text-white">{fact.value}</strong></span>
              </div>
            );
          })}
        </div>
        <div className="flex gap-3">
          <Button onClick={scrollToForm}
            className="font-black text-xs uppercase tracking-widest px-6 py-2.5 rounded-xl border active:scale-95 shadow-lg"
            style={{ background: theme.accent, color: theme.accentOnAccent, borderColor: theme.accentDark }}>
            Start Counseling <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  </section>
);

// ═══════════════════════════════════════════════════════════════════════════════
// HEADER VARIANTS
// ═══════════════════════════════════════════════════════════════════════════════

interface HeaderProps { college: CollegeData; theme: CollegeTheme; }

/** Header A — Crest: Circular badge with initials, double-line name (current style but themed) */
const HeaderCrest = ({ college, theme }: HeaderProps) => (
  <header className="bg-white py-4 relative z-40 shadow-sm border-b-4"
    style={{ borderBottomColor: theme.accent }}>
    <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-4 text-center md:text-left">
        <div className="h-16 w-16 rounded-full flex items-center justify-center border-2 shrink-0 font-serif font-black shadow-md text-xl text-white"
          style={{ background: theme.primary, borderColor: theme.accent }}>
          {college.abbreviation}
        </div>
        <div className="flex flex-col">
          {college.hindiName && (
            <span className="text-sm font-black tracking-wide font-sans block leading-none" style={{ color: theme.primary }}>
              {college.hindiName}
            </span>
          )}
          <div className="text-xl sm:text-2xl font-serif font-black tracking-tight leading-tight mt-1" style={{ color: theme.primary }}>
            {college.fullName.toUpperCase()}
          </div>
          <p className="text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-0.5 leading-none">
            {college.affiliation}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="rounded-xl px-4 py-2 flex items-center gap-3 border"
          style={{ background: theme.primaryLight, borderColor: `${theme.primary}22` }}>
          <ShieldCheck className="h-8 w-8" style={{ color: theme.primary }} />
          <div>
            <span className="block text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Status</span>
            <span className="block text-xs font-black mt-0.5 font-sans" style={{ color: theme.primary }}>NMC RECOGNIZED</span>
          </div>
        </div>
      </div>
    </div>
  </header>
);

/** Header B — Horizontal: Wide gradient strip with left-border accent */
const HeaderHorizontal = ({ college, theme }: HeaderProps) => (
  <header className="bg-white py-0 relative z-40 shadow-sm overflow-hidden">
    <div className="h-1.5" style={{ background: `linear-gradient(to right, ${theme.primary}, ${theme.accent}, ${theme.primary})` }} />
    <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4 py-4">
      <div className="flex items-center gap-4 text-center md:text-left">
        <div className="h-14 px-4 rounded-lg flex items-center justify-center font-serif font-black text-lg text-white shrink-0 shadow"
          style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryDark})` }}>
          {college.abbreviation}
        </div>
        <div className="flex flex-col border-l-4 pl-4" style={{ borderColor: theme.accent }}>
          {college.hindiName && (
            <span className="text-xs font-bold tracking-wide font-sans leading-none" style={{ color: theme.primary }}>
              {college.hindiName}
            </span>
          )}
          <div className="text-lg sm:text-xl font-serif font-black tracking-tight leading-tight" style={{ color: theme.primary }}>
            {college.fullName.toUpperCase()}
          </div>
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mt-0.5">
            {college.affiliation}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg"
          style={{ background: theme.accent, color: theme.accentOnAccent }}>
          NMC Approved ✓
        </span>
      </div>
    </div>
  </header>
);

/** Header C — Typographic: Large bold serif name, decorative rule */
const HeaderTypographic = ({ college, theme }: HeaderProps) => (
  <header className="bg-white py-4 relative z-40 shadow-sm">
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
        <div className="flex-1 text-center md:text-left">
          {college.hindiName && (
            <p className="text-[11px] font-bold mb-1" style={{ color: theme.accent }}>{college.hindiName}</p>
          )}
          <div className="text-xl sm:text-2xl md:text-3xl font-serif font-black tracking-tight leading-none"
            style={{ color: theme.primary }}>
            {college.fullName.toUpperCase()}
          </div>
          <div className="flex items-center gap-3 mt-2">
            <div className="h-0.5 w-12" style={{ background: theme.accent }} />
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{college.affiliation}</p>
          </div>
        </div>
        <div className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl border"
          style={{ background: theme.primaryLight, borderColor: `${theme.primary}20` }}>
          <ShieldCheck className="h-5 w-5" style={{ color: theme.primary }} />
          <div>
            <span className="block text-[7px] font-black text-slate-400 uppercase tracking-widest">Recognition</span>
            <span className="block text-[10px] font-black" style={{ color: theme.primary }}>NMC APPROVED</span>
          </div>
        </div>
      </div>
    </div>
  </header>
);

/** Header D — Minimal: Clean horizontal line, monochrome badge */
const HeaderMinimal = ({ college, theme }: HeaderProps) => (
  <header className="bg-white py-3.5 relative z-40 border-b border-slate-200">
    <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-1 h-10 rounded-full" style={{ background: theme.accent }} />
        <div>
          {college.hindiName && (
            <p className="text-[9px] font-bold leading-none mb-0.5" style={{ color: theme.accent }}>{college.hindiName}</p>
          )}
          <div className="text-base sm:text-lg font-sans font-black tracking-tight leading-none" style={{ color: theme.primary }}>
            {college.fullName.toUpperCase()}
          </div>
          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">{college.affiliation}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded border"
          style={{ borderColor: theme.primary, color: theme.primary }}>
          <ShieldCheck className="h-3.5 w-3.5" />
          <span className="text-[9px] font-black uppercase tracking-widest">NMC Recognized</span>
        </div>
      </div>
    </div>
    <div className="h-0.5 mt-3.5" style={{ background: `linear-gradient(to right, ${theme.accent}, ${theme.primary}33)` }} />
  </header>
);

/** Header E — Ornate: Decorative banner with arch motif */
const HeaderOrnate = ({ college, theme }: HeaderProps) => (
  <header className="relative z-40 shadow-sm overflow-hidden"
    style={{ background: `linear-gradient(to right, ${theme.primary}, ${theme.primaryDark})` }}>
    {/* Ornamental bottom border */}
    <div className="absolute bottom-0 left-0 right-0 h-1"
      style={{ background: `linear-gradient(to right, ${theme.accent}, ${theme.accentDark}, ${theme.accent})` }} />
    {/* Decorative circles */}
    <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10" style={{ background: theme.accent }} />
    <div className="absolute right-40 top-2 w-8 h-8 rounded-full opacity-10" style={{ background: theme.accent }} />
    <div className="container mx-auto px-4 max-w-7xl py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4 text-center md:text-left">
        <div className="h-14 w-14 rounded-full border-2 flex items-center justify-center text-lg font-serif font-black shrink-0 shadow"
          style={{ borderColor: theme.accent, color: theme.accent, background: `${theme.accent}15` }}>
          {college.abbreviation}
        </div>
        <div>
          {college.hindiName && (
            <span className="block text-xs font-bold text-white/70 leading-none">{college.hindiName}</span>
          )}
          <div className="text-lg sm:text-xl font-serif font-black tracking-tight text-white leading-tight">
            {college.fullName.toUpperCase()}
          </div>
          <p className="text-white/60 text-[9px] font-bold uppercase tracking-wider mt-0.5">{college.affiliation}</p>
        </div>
      </div>
      <div className="flex items-center">
        <span className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg"
          style={{ background: theme.accent, color: theme.accentOnAccent }}>
          <ShieldCheck className="h-3.5 w-3.5" /> NMC Approved
        </span>
      </div>
    </div>
  </header>
);

/** Header F — Modern: Gradient card-style with glow effect */
const HeaderModern = ({ college, theme }: HeaderProps) => (
  <header className="bg-white py-4 relative z-40 shadow-sm border-b border-slate-100">
    <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="h-14 w-14 rounded-2xl flex items-center justify-center font-black text-lg text-white shadow-lg"
            style={{ background: `linear-gradient(135deg, ${theme.accent}, ${theme.primary})` }}>
            {college.abbreviation}
          </div>
          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl blur-md opacity-40"
            style={{ background: theme.accent }} />
        </div>
        <div>
          {college.hindiName && (
            <p className="text-[9px] font-bold leading-none mb-1" style={{ color: theme.accent }}>{college.hindiName}</p>
          )}
          <div className="text-base sm:text-xl font-sans font-black tracking-tight leading-tight" style={{ color: theme.primary }}>
            {college.fullName.toUpperCase()}
          </div>
          <p className="text-slate-400 text-[9px] font-bold uppercase tracking-wider mt-0.5">{college.affiliation}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl border"
          style={{ background: theme.primaryLight, borderColor: `${theme.accent}30` }}>
          <ShieldCheck className="h-5 w-5" style={{ color: theme.primary }} />
          <div>
            <span className="block text-[7px] font-black text-slate-400 uppercase tracking-widest leading-none">Recognition</span>
            <span className="block text-[11px] font-black mt-0.5" style={{ color: theme.primary }}>NMC RECOGNIZED</span>
          </div>
        </div>
      </div>
    </div>
  </header>
);

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN LAYOUT COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export default function MbbsCollegeLayout({ theme, college }: Props) {
  useSeo({ title: college.seoTitle, description: college.seoDescription });
  useJsonLd(college.jsonLd);

  // State
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [bgIndex, setBgIndex] = useState(0);
  const [predictorScore, setPredictorScore] = useState<number>(college.initialScore);
  const [predictorCategory, setPredictorCategory] = useState<string>("General");
  const [formData, setFormData] = useState<Partial<FormDataType>>({
    name: "", phone: "", email: "",
    neetScore: String(college.initialScore), category: "General", state: "", preferredQuota: "",
  });

  const formRef = useRef<HTMLDivElement>(null);
  const sectionsRef: Record<SectionId, React.RefObject<HTMLElement>> = {
    overview: useRef<HTMLElement>(null),
    highlights: useRef<HTMLElement>(null),
    predictor: useRef<HTMLElement>(null),
    fees: useRef<HTMLElement>(null),
    cutoff: useRef<HTMLElement>(null),
    process: useRef<HTMLElement>(null),
    facilities: useRef<HTMLElement>(null),
    faqs: useRef<HTMLElement>(null),
  };

  const heroImages = college.heroBgImages || (college.heroBgImage ? [college.heroBgImage] : BG_IMAGES);

  // Dynamically build the semantic H1 element with visual styling to make the college name the focal point
  const locationParts = college.location.split(',').map(p => p.trim());
  const city = locationParts[locationParts.length - 2] || locationParts[0] || '';
  
  // Format official name to Title Case if it's currently all-caps
  const formattedName = college.fullName.toUpperCase() === college.fullName
    ? college.fullName.toLowerCase().replace(/\b\w/g, c => c.toUpperCase())
    : college.fullName;

  const shortForm = college.abbreviation ? `(${college.abbreviation})` : '';

  const dynamicH1 = (
    <h1 className="font-serif tracking-tight leading-tight text-white drop-shadow-md">
      <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1.5 uppercase leading-tight">
        {formattedName}
      </span>
      {shortForm && (
        <span className="inline-block text-base sm:text-lg md:text-xl font-bold bg-white/10 backdrop-blur-sm px-2.5 py-0.5 rounded-md border border-white/10 mr-2 uppercase">
          {college.abbreviation}
        </span>
      )}
      <span className="inline-block text-base sm:text-lg md:text-xl font-semibold opacity-90 font-sans tracking-wide">
        {city} – MBBS Admission 2026
      </span>
    </h1>
  );

  // Dynamic Key Facts Badges
  const getEstablishedYear = () => {
    const found = college.highlights.find(h => 
      h.title.toLowerCase().includes('establish') || 
      h.title.toLowerCase().includes('year')
    );
    return found ? found.value : '2013';
  };

  const getMbbsSeats = () => {
    const found = college.highlights.find(h => 
      h.title.toLowerCase().includes('intake') || 
      h.title.toLowerCase().includes('seat')
    );
    return found ? found.value : '250 Seats';
  };

  const getNmcApproval = () => {
    const found = college.highlights.find(h => 
      h.title.toLowerCase().includes('nmc') || 
      h.title.toLowerCase().includes('approval') ||
      h.title.toLowerCase().includes('status')
    );
    return found ? found.value : 'Approved';
  };

  const getAffiliatedUniv = () => {
    const found = college.highlights.find(h => 
      h.title.toLowerCase().includes('university') ||
      h.title.toLowerCase().includes('affiliat')
    );
    if (found) return found.value.replace(/University/gi, 'Univ.');
    if (college.affiliation) {
      const parts = college.affiliation.split('|').map(p => p.trim());
      const univPart = parts.find(p => p.toLowerCase().includes('affiliated') || p.toLowerCase().includes('wbuhs') || p.toLowerCase().includes('rguhs') || p.toLowerCase().includes('health'));
      return (univPart || parts[0]).replace(/University/gi, 'Univ.');
    }
    return 'Affiliated';
  };

  const keyFacts = [
    { label: "Location", value: city, icon: MapPin },
    { label: "Established", value: getEstablishedYear(), icon: Calendar },
    { label: "Seats", value: getMbbsSeats(), icon: Users },
    { label: "NMC Status", value: getNmcApproval(), icon: ShieldCheck },
    { label: "Affiliation", value: getAffiliatedUniv(), icon: Building }
  ];

  // Image slideshow
  useEffect(() => {
    if (heroImages.length <= 1) return;
    const interval = setInterval(() => setBgIndex(p => (p + 1) % heroImages.length), 6000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 240;
      for (const [key, ref] of Object.entries(sectionsRef)) {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(key); break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => document.getElementById(`${college.formId}-lead-name`)?.focus(), 800);
  };

  const scrollToSection = (id: SectionId) => {
    const el = sectionsRef[id].current;
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 180, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const handleInputChange = (field: keyof FormDataType, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === "neetScore") {
      const n = parseInt(value);
      if (!isNaN(n) && n >= 0 && n <= 720) setPredictorScore(n);
    }
    if (field === "category") setPredictorCategory(value);
    if (errors[field]) setErrors(prev => { const c = { ...prev }; delete c[field]; return c; });
  };

  const handlePredictorScoreChange = (score: number) => {
    setPredictorScore(score);
    setFormData(prev => ({ ...prev, neetScore: String(score) }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = leadFormSchema.safeParse(formData);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach(i => { if (i.path[0]) fieldErrors[String(i.path[0])] = i.message; });
      setErrors(fieldErrors);
      toast.error("Please fill in all required fields correctly.");
      return;
    }
    setErrors({}); setSubmitting(true);
    const fd = new FormData();
    fd.append("entry.1502716309", parsed.data.name);
    fd.append("entry.1202722742", parsed.data.phone);
    fd.append("entry.267493369", parsed.data.email || "No Email Provided");
    fd.append("entry.921865976", parsed.data.state);
    fd.append("entry.85122333",
      `${college.fullName} - NEET Score: ${parsed.data.neetScore} | Category: ${parsed.data.category} | Quota: ${parsed.data.preferredQuota}`
    );
    try {
      await fetch(GOOGLE_FORM_URL, { method: "POST", mode: "no-cors", body: fd });
    } catch { /* no-cors always throws */ }
    setSubmitting(false);
    setSubmitted(true);
    toast.success("Counseling profile saved! Our advisor will contact you shortly.");
  };

  const currentAnalysis = college.getEligibilityAnalysis(predictorScore, predictorCategory);

  // Helper to extract clean content for Why Choose cards
  const getClinicalExposure = () => {
    const overviewClinical = college.overviewParagraphs.find(p => 
      p.toLowerCase().includes('opd') || 
      p.toLowerCase().includes('patient') || 
      p.toLowerCase().includes('clinical') ||
      p.toLowerCase().includes('hands-on')
    );
    if (overviewClinical) {
      const text = overviewClinical.replace(/<[^>]*>/g, '').trim();
      return text.length > 140 ? text.slice(0, 137) + '...' : text;
    }
    const found = college.facilities.find(f => 
      f.desc.toLowerCase().includes('opd') || 
      f.desc.toLowerCase().includes('patient') || 
      f.desc.toLowerCase().includes('clinical')
    );
    if (found) return found.desc;
    return `Hands-on training through intensive clinical rotations in critical care, OPD, and super-specialty departments.`;
  };

  const getHospitalStrength = () => {
    const bedHighlight = college.highlights.find(h => 
      h.title.toLowerCase().includes('bed') || 
      h.title.toLowerCase().includes('hospital')
    );
    const bedFacility = college.facilities.find(f => 
      f.title.toLowerCase().includes('bed') || 
      f.title.toLowerCase().includes('hospital')
    );
    if (bedHighlight) {
      return `${bedHighlight.value} tertiary-care hospital: ${bedHighlight.desc}`;
    }
    if (bedFacility) {
      return `${bedFacility.title}: ${bedFacility.desc}`;
    }
    return `Fully functional tertiary teaching hospital providing extensive primary-to-tertiary healthcare services.`;
  };

  const getInfrastructure = () => {
    const found = college.facilities.find(f => 
      f.title.toLowerCase().includes('lab') || 
      f.title.toLowerCase().includes('classroom') || 
      f.title.toLowerCase().includes('lecture') || 
      f.title.toLowerCase().includes('library') || 
      f.title.toLowerCase().includes('infrastructure')
    );
    if (found) return `${found.title}: ${found.desc}`;
    return `Equipped with state-of-the-art smart lecture theaters, advanced labs, skill libraries, and fully-stocked digital databases.`;
  };

  const getHostel = () => {
    const found = college.facilities.find(f => 
      f.title.toLowerCase().includes('hostel') || 
      f.title.toLowerCase().includes('accommodation') || 
      f.title.toLowerCase().includes('secure accommodation')
    );
    if (found) return found.desc;
    return `Safe and secure on-campus residential housing for students with modern amenities, study rooms, and hygienic dining mess.`;
  };

  const getAcademics = () => {
    return `${college.affiliation}. Rigorous medical program following National Medical Commission guidelines.`;
  };

  const getCareers = () => {
    return `Graduates are registered under the NMC/State councils and eligible for PG residency pathways and placements across India and globally.`;
  };

  // Render heroes
  const heroProps: HeroProps = { college, theme, bgIndex, scrollToForm, heroImages, dynamicH1, keyFacts };
  const HeroComponent = {
    split: HeroSplit, diagonal: HeroDiagonal, fullbleed: HeroFullBleed,
    geometric: HeroGeometric, warm: HeroWarm, skygrad: HeroSkyGrad,
  }[theme.heroVariant];

  // Render headers
  const headerProps: HeaderProps = { college, theme };
  const HeaderComponent = {
    crest: HeaderCrest, horizontal: HeaderHorizontal, typographic: HeaderTypographic,
    minimal: HeaderMinimal, ornate: HeaderOrnate, modern: HeaderModern,
  }[theme.headerVariant];

  return (
    <main className="min-h-screen font-sans text-slate-800 antialiased pt-20"
      style={{ backgroundColor: theme.pageBg, ['--sel-bg' as string]: theme.selectionBg }}>

      {/* ── STICKY NAV BAR ──────────────────────────────────────── */}
      <nav className="text-white sticky top-0 z-[45] shadow-md"
        style={{ background: theme.primary, borderBottom: `1px solid ${theme.primaryDark}` }}>
        <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center overflow-x-auto whitespace-nowrap py-1 scrollbar-hide">
          <div className="flex">
            {MENU_ITEMS.map(item => {
              const isActive = activeSection === item.id;
              return (
                <button key={item.id} onClick={() => scrollToSection(item.id)}
                  className="py-3 px-4 text-[11px] font-black uppercase tracking-widest transition-colors relative border-r"
                  style={{
                    background: isActive ? theme.accent : 'transparent',
                    color: isActive ? theme.accentOnAccent : 'rgba(255,255,255,0.85)',
                    borderColor: `${theme.primaryDark}99`,
                  }}>
                  {item.label}
                  {isActive && <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: theme.accent }} />}
                </button>
              );
            })}
          </div>
          <button onClick={scrollToForm}
            className="font-black text-[10px] uppercase tracking-widest px-4 py-2 rounded-lg border shadow transition-all active:scale-95 ml-3 hidden md:block"
            style={{ background: theme.accent, color: theme.accentOnAccent, borderColor: theme.accentDark }}>
            Counseling Desk
          </button>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <HeroComponent {...heroProps} />

      {/* ── TICKER BAR ──────────────────────────────────────────── */}
      <div className="py-3 relative z-30 overflow-hidden border-y"
        style={{ background: theme.tickerBg, color: theme.tickerTextColor, borderColor: theme.accentDark }}>
        <div className="container mx-auto px-4 max-w-7xl flex items-center gap-4">
          <span className="px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded flex items-center gap-1.5 shrink-0 animate-pulse"
            style={{ background: theme.tickerBadgeBg, color: theme.tickerBadgeText }}>
            <Bell className="h-3.5 w-3.5" /> LATEST
          </span>
          <div className="overflow-hidden relative w-full h-5">
            <marquee behavior="scroll" direction="left" className="absolute inset-0 font-bold text-xs uppercase tracking-wide">
              {college.tickerMessage}
            </marquee>
          </div>
        </div>
      </div>

      {/* ── MAIN INFO GRID (Dean + Notices + Predictor) ──────────── */}
      <div className="container mx-auto px-4 max-w-7xl py-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Why Students Choose [College Name] */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
              <div>
                <span className="block text-[8px] font-black uppercase tracking-[0.22em]" style={{ color: theme.accent }}>
                  Student Decision
                </span>
                <h3 className="text-lg font-serif font-black mt-1" style={{ color: theme.primary }}>
                  Why Choose {college.abbreviation}
                </h3>
              </div>
              <Sparkles className="h-5 w-5 animate-pulse" style={{ color: theme.accent }} />
            </div>
            
            <div className="space-y-3">
              {[
                { 
                  title: "Clinical Exposure", 
                  desc: getClinicalExposure(), 
                  icon: Stethoscope 
                },
                { 
                  title: "Hospital Strength", 
                  desc: getHospitalStrength(), 
                  icon: HeartPulse 
                },
                { 
                  title: "Infrastructure", 
                  desc: getInfrastructure(), 
                  icon: Building 
                },
                { 
                  title: "Hostel Facilities", 
                  desc: getHostel(), 
                  icon: Home 
                },
                { 
                  title: "Academic Quality", 
                  desc: getAcademics(), 
                  icon: GraduationCap 
                },
                { 
                  title: "Career Pathways", 
                  desc: getCareers(), 
                  icon: Award 
                }
              ].map((feature, idx) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.01, y: -1 }}
                    className="p-3 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all shadow-sm flex items-start gap-3 bg-slate-50/20 hover:bg-slate-50/60"
                  >
                    <div 
                      className="p-2 rounded-xl shrink-0 border mt-0.5"
                      style={{ 
                        background: `${theme.primary}10`, 
                        borderColor: `${theme.primary}20`,
                        color: theme.primary 
                      }}
                    >
                      <IconComponent className="h-3.5 w-3.5" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-wide">
                        {feature.title}
                      </h4>
                      <p className="text-[10.5px] text-slate-500 font-semibold leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="border-t border-slate-100 pt-4 flex gap-4 text-xs">
              <div>
                <span className="block text-[8px] font-black text-slate-400 uppercase tracking-widest">Campus</span>
                <span className="block font-bold text-slate-900 mt-0.5">{college.location.split(',')[0]}</span>
              </div>
              <div className="border-l border-slate-200 pl-4">
                <span className="block text-[8px] font-black text-slate-400 uppercase tracking-widest">Official Email</span>
                <a href={`mailto:${college.contactEmail}`} className="block font-bold hover:underline mt-0.5"
                  style={{ color: theme.primary }}>{college.contactEmail}</a>
              </div>
            </div>
          </div>

          {/* Notices + Predictor */}
          <div className="lg:col-span-8 space-y-6">
            {/* Notice Board */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
                <div>
                  <span className="block text-[8px] font-black uppercase tracking-[0.2em]" style={{ color: theme.accent }}>
                    Counselling Updates
                  </span>
                  <h3 className="text-lg font-serif font-black mt-0.5" style={{ color: theme.primary }}>Admissions Notice Board</h3>
                </div>
                <span className="text-[9px] font-black uppercase px-2.5 py-1 rounded-full border"
                  style={{ color: theme.accentDark, background: theme.accentLight, borderColor: `${theme.accent}44` }}>
                  SESSION 2026
                </span>
              </div>
              <div className="divide-y divide-slate-100">
                {college.notices.map((item, idx) => (
                  <div key={idx} className="py-3 flex justify-between items-start gap-4 hover:bg-slate-50/50 rounded-xl px-2 transition-colors">
                    <div className="space-y-1">
                      <span className="text-[8px] font-black bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded uppercase tracking-wider mr-2 text-emerald-700">
                        {item.tag}
                      </span>
                      <button onClick={() => scrollToSection("predictor")}
                        className="text-xs font-bold hover:underline text-left block" style={{ color: theme.primary }}>
                        {item.text}
                      </button>
                    </div>
                    <span className="text-[9px] text-slate-400 font-bold whitespace-nowrap">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* NEET Predictor */}
            <section id="predictor" ref={sectionsRef.predictor} className="scroll-mt-28 text-white rounded-3xl p-6 sm:p-8 shadow-md"
              style={{ background: `linear-gradient(135deg, ${theme.primaryDark}, ${theme.primary})`, border: `1px solid ${theme.primaryDark}` }}>
              <div className="border-b border-white/10 pb-4 mb-6">
                <span className="block text-[8px] font-black uppercase tracking-widest" style={{ color: theme.accent }}>
                  Online Portal
                </span>
                <h3 className="text-xl font-serif font-bold text-white mt-0.5">
                  NEET UG Score Predictor & Eligibility Matcher
                </h3>
              </div>
              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label className="text-xs font-bold uppercase tracking-wider text-white/70">Slide Your NEET Score</Label>
                    <span className="text-xl font-black font-serif px-3.5 py-1 rounded-xl shadow border"
                      style={{ background: theme.accent, color: theme.accentOnAccent, borderColor: theme.accentDark }}>
                      {predictorScore} <span className="text-[9px] font-sans font-bold opacity-70">/ 720</span>
                    </span>
                  </div>
                  <input type="range" min="100" max="720" step="5" value={predictorScore}
                    onChange={e => handlePredictorScoreChange(Number(e.target.value))}
                    className="w-full h-1.5 rounded-lg appearance-none cursor-pointer"
                    style={{ background: `${theme.primaryDark}99`, accentColor: theme.accent } as React.CSSProperties} />
                  <div className="flex justify-between text-[9px] font-bold text-white/40">
                    <span>Min (100)</span>
                    <span>{college.predictorMidLabel}</span>
                    <span>Perfect (720)</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-[9px] font-black uppercase tracking-widest text-white/50 mb-1 block">Your Category</Label>
                    <Select onValueChange={val => { setPredictorCategory(val); setFormData(p => ({ ...p, category: val })); }} value={predictorCategory}>
                      <SelectTrigger className="h-9 rounded-xl bg-white/5 border-white/10 text-white font-semibold">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="General">General (UR)</SelectItem>
                        <SelectItem value="OBC">OBC-NCL</SelectItem>
                        <SelectItem value="SC">SC (Scheduled Caste)</SelectItem>
                        <SelectItem value="ST">ST (Scheduled Tribe)</SelectItem>
                        <SelectItem value="EWS">EWS</SelectItem>
                        <SelectItem value="NRI">NRI Quota</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-end">
                    <p className="text-[9px] font-bold text-white/40 italic mb-2">Based on historical counseling data.</p>
                  </div>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div key={`${predictorScore}-${predictorCategory}`}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
                    className="p-4 rounded-2xl border bg-white/5 border-white/10 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full" style={{ background: theme.accent }} />
                      <h4 className="font-extrabold text-xs uppercase tracking-wide" style={{ color: theme.accent }}>
                        {currentAnalysis.status}
                      </h4>
                    </div>
                    <p className="text-xs leading-relaxed text-white/80 font-semibold">{currentAnalysis.text}</p>
                    <div className="pt-2 border-t border-white/5 flex flex-wrap justify-between items-center gap-2">
                      <div className="text-[10px] font-black text-slate-300">
                        Advice: <span className="underline text-white">{currentAnalysis.quotaAdvice}</span>
                      </div>
                      <button onClick={scrollToForm}
                        className="text-[9px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-lg shadow transition-all"
                        style={{ background: theme.accent, color: theme.accentOnAccent }}>
                        Get Counseling
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* ── CONTENT SECTIONS + FORM ──────────────────────────────── */}
      <div className="container mx-auto px-4 max-w-7xl py-8 pb-16">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left: Content sections */}
          <div className="lg:col-span-8 space-y-10">

            {/* Overview */}
            <section id="overview" ref={sectionsRef.overview} className="scroll-mt-28 bg-white border border-slate-200 p-8 rounded-3xl shadow-sm space-y-5">
              <div className="border-b border-slate-100 pb-4">
                <span className="block text-[8px] font-black uppercase tracking-[0.2em]" style={{ color: theme.primary }}>
                  Institutional Matrix
                </span>
                <h2 className="text-xl font-serif font-black mt-0.5" style={{ color: theme.primary }}>{college.overviewTitle}</h2>
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed space-y-4">
                {college.overviewParagraphs.map((para, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
              </div>
            </section>

            {/* Highlights */}
            <section id="highlights" ref={sectionsRef.highlights} className="scroll-mt-28 bg-white border border-slate-200 p-8 rounded-3xl shadow-sm space-y-5">
              <div className="border-b border-slate-100 pb-4">
                <span className="block text-[8px] font-black uppercase tracking-[0.2em]" style={{ color: theme.primary }}>
                  Operational Indicators
                </span>
                <h2 className="text-xl font-serif font-black mt-0.5" style={{ color: theme.primary }}>Key Institutional Highlights</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {college.highlights.map((hl, idx) => {
                  const IconComp = hl.icon;
                  return (
                    <div key={idx} className="p-5 rounded-2xl border flex flex-col justify-between hover:shadow-md transition-all duration-300"
                      style={{ background: theme.primaryLight, borderColor: `${theme.primary}15` }}>
                      <div className="h-8 w-8 rounded-xl flex items-center justify-center mb-4 shrink-0 border"
                        style={{ background: 'white', color: theme.primary, borderColor: `${theme.primary}20` }}>
                        <IconComp className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="block text-base font-serif font-black leading-none mb-1" style={{ color: theme.primary }}>{hl.value}</span>
                        <span className="block text-[8px] font-black text-slate-400 uppercase tracking-wider">{hl.title}</span>
                        <span className="block text-[9px] font-semibold text-slate-500 leading-tight mt-1">{hl.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Fee Structure */}
            <section id="fees" ref={sectionsRef.fees} className="scroll-mt-28 bg-white border border-slate-200 p-8 rounded-3xl shadow-sm space-y-5">
              <div className="border-b border-slate-100 pb-4">
                <span className="block text-[8px] font-black uppercase tracking-[0.2em]" style={{ color: theme.primary }}>Financial Matrix</span>
                <h2 className="text-xl font-serif font-black mt-0.5" style={{ color: theme.primary }}>Tuition Fee Details</h2>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[480px]">
                    <thead>
                      <tr className="text-white text-[9px] font-black uppercase tracking-widest"
                        style={{ background: theme.primary }}>
                        <th className="p-4">Seat Quota</th>
                        <th className="p-4">Annual Fee</th>
                        <th className="p-4">Remarks</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-700">
                      {college.feeStructure.map((f, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-4 font-bold text-slate-900">{f.quota}</td>
                          <td className="p-4 font-black text-sm" style={{ color: theme.primary }}>{f.annualFee}</td>
                          <td className="p-4 text-slate-500 text-[10px]">{f.remark}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {college.feeNotes.length > 0 && (
                <div className="p-4 rounded-xl space-y-1 border"
                  style={{ background: theme.accentLight, borderColor: `${theme.accent}44` }}>
                  <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider"
                    style={{ color: theme.accentDark }}>
                    <AlertTriangle className="h-4 w-4" /> Additional Fee Guidelines
                  </div>
                  <ul className="list-disc list-inside text-[11px] text-slate-600 leading-relaxed font-medium space-y-1">
                    {college.feeNotes.map((note, i) => <li key={i} dangerouslySetInnerHTML={{ __html: note }} />)}
                  </ul>
                </div>
              )}
            </section>

            {/* Cutoffs */}
            <section id="cutoff" ref={sectionsRef.cutoff} className="scroll-mt-28 bg-white border border-slate-200 p-8 rounded-3xl shadow-sm space-y-5">
              <div className="border-b border-slate-100 pb-4">
                <span className="block text-[8px] font-black uppercase tracking-[0.2em]" style={{ color: theme.primary }}>Merit Benchmarks</span>
                <h2 className="text-xl font-serif font-black mt-0.5" style={{ color: theme.primary }}>{college.cutoffSectionTitle}</h2>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[480px]">
                    <thead>
                      <tr className="text-white text-[9px] font-black uppercase tracking-widest"
                        style={{ background: theme.primary }}>
                        <th className="p-4">Category</th>
                        <th className="p-4">NEET Score Range</th>
                        <th className="p-4">Percentile</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-700">
                      {college.cutoffs.map((c, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-4 font-bold text-slate-900">{c.category}</td>
                          <td className="p-4 font-black" style={{ color: theme.primary }}>{c.scoreRange}</td>
                          <td className="p-4">{c.percentile}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Admission Steps */}
            <section id="process" ref={sectionsRef.process} className="scroll-mt-28 bg-white border border-slate-200 p-8 rounded-3xl shadow-sm space-y-5">
              <div className="border-b border-slate-100 pb-4">
                <span className="block text-[8px] font-black uppercase tracking-[0.2em]" style={{ color: theme.primary }}>Workflow Matrix</span>
                <h2 className="text-xl font-serif font-black mt-0.5" style={{ color: theme.primary }}>{college.processSectionTitle}</h2>
              </div>
              <div className="relative border-l-2 pl-6 ml-4 space-y-8" style={{ borderColor: `${theme.primary}30` }}>
                {college.admissionSteps.map((step, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[37px] top-0 h-7 w-7 rounded-full flex items-center justify-center text-xs font-black border-2 border-white shadow"
                      style={{ background: theme.primary, color: theme.accent }}>
                      {idx + 1}
                    </span>
                    <h4 className="font-serif font-black text-sm leading-none mb-2" style={{ color: theme.primary }}>{step.title}</h4>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Facilities */}
            <section id="facilities" ref={sectionsRef.facilities} className="scroll-mt-28 bg-white border border-slate-200 p-8 rounded-3xl shadow-sm space-y-5">
              <div className="border-b border-slate-100 pb-4">
                <span className="block text-[8px] font-black uppercase tracking-[0.2em]" style={{ color: theme.primary }}>Infrastructure Assets</span>
                <h2 className="text-xl font-serif font-black mt-0.5" style={{ color: theme.primary }}>Campus Facilities</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {college.facilities.map((fac, idx) => {
                  const Icon = fac.icon;
                  return (
                    <div key={idx} className="flex gap-4 items-start p-4 rounded-2xl border"
                      style={{ background: theme.primaryLight, borderColor: `${theme.primary}15` }}>
                      <div className="h-9 w-9 rounded-xl flex items-center justify-center border shrink-0 shadow-sm"
                        style={{ background: 'white', color: theme.primary, borderColor: `${theme.primary}20` }}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.primary }}>{fac.title}</h4>
                        <p className="text-[11px] leading-relaxed font-semibold text-slate-500">{fac.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* FAQs */}
            <section id="faqs" ref={sectionsRef.faqs} className="scroll-mt-28 bg-white border border-slate-200 p-8 rounded-3xl shadow-sm space-y-5">
              <div className="border-b border-slate-100 pb-4">
                <span className="block text-[8px] font-black uppercase tracking-[0.2em]" style={{ color: theme.primary }}>Queries & Resolution</span>
                <h2 className="text-xl font-serif font-black mt-0.5" style={{ color: theme.primary }}>Frequently Asked Questions</h2>
              </div>
              <div className="space-y-3">
                {college.faqs.map((faq, idx) => {
                  const isOpen = activeFAQ === idx;
                  return (
                    <div key={idx} className="border rounded-2xl overflow-hidden bg-slate-50 transition-all"
                      style={{ borderColor: isOpen ? `${theme.primary}30` : '#e2e8f0' }}>
                      <button onClick={() => setActiveFAQ(isOpen ? null : idx)}
                        className="w-full p-4 flex justify-between items-center text-left gap-4 hover:bg-slate-100 transition-colors">
                        <span className="font-serif font-black text-xs sm:text-sm" style={{ color: theme.primary }}>{faq.q}</span>
                        {isOpen
                          ? <ChevronUp className="h-4 w-4 shrink-0" style={{ color: theme.primary }} />
                          : <ChevronDown className="h-4 w-4 shrink-0 text-slate-400" />}
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                            className="overflow-hidden bg-white border-t border-slate-100">
                            <p className="p-4 text-xs font-semibold text-slate-600 leading-relaxed">{faq.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* ── STICKY FORM ────────────────────────────────────────── */}
          <div className="lg:col-span-4 sticky top-28 space-y-5 z-20">
            <div ref={formRef} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: theme.primary }} />
              <div className="text-center pb-4 mb-4 border-b border-slate-100">
                <h3 className="font-serif font-black text-base" style={{ color: theme.primary }}>Counseling Desk</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{college.formDeskLabel}</p>
              </div>
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="h-14 w-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm" style={{ color: theme.primary }}>Profile Registered!</h4>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      Your counseling profile has been saved. An advisor will verify your eligibility and contact you shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                  <div className="space-y-1">
                    <Label htmlFor={`${college.formId}-lead-name`} className="text-[9px] font-black uppercase tracking-wider text-slate-400">Full Name *</Label>
                    <Input id={`${college.formId}-lead-name`} placeholder="Enter full name"
                      value={formData.name || ""} onChange={e => handleInputChange("name", e.target.value)}
                      className="h-9 rounded-xl border-slate-200" />
                    {errors.name && <p className="text-[10px] text-red-600 font-semibold">{errors.name}</p>}
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor={`${college.formId}-lead-phone`} className="text-[9px] font-black uppercase tracking-wider text-slate-400">Mobile Number *</Label>
                    <Input id={`${college.formId}-lead-phone`} type="tel" placeholder="10-digit number"
                      value={formData.phone || ""} onChange={e => handleInputChange("phone", e.target.value)}
                      className="h-9 rounded-xl border-slate-200" />
                    {errors.phone && <p className="text-[10px] text-red-600 font-semibold">{errors.phone}</p>}
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor={`${college.formId}-lead-email`} className="text-[9px] font-black uppercase tracking-wider text-slate-400">Email (Optional)</Label>
                    <Input id={`${college.formId}-lead-email`} type="email" placeholder="name@example.com"
                      value={formData.email || ""} onChange={e => handleInputChange("email", e.target.value)}
                      className="h-9 rounded-xl border-slate-200" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label htmlFor={`${college.formId}-lead-score`} className="text-[9px] font-black uppercase tracking-wider text-slate-400">NEET Score *</Label>
                      <Input id={`${college.formId}-lead-score`} type="number" placeholder="e.g., 550"
                        value={formData.neetScore || ""} onChange={e => handleInputChange("neetScore", e.target.value)}
                        className="h-9 rounded-xl border-slate-200" />
                      {errors.neetScore && <p className="text-[10px] text-red-600 font-semibold">{errors.neetScore}</p>}
                    </div>
                    <div className="space-y-1">
                      <Label className="text-[9px] font-black uppercase tracking-wider text-slate-400">Category *</Label>
                      <Select onValueChange={val => handleInputChange("category", val)} value={formData.category || "General"}>
                        <SelectTrigger className="h-9 rounded-xl border-slate-200"><SelectValue placeholder="Category" /></SelectTrigger>
                        <SelectContent className="rounded-xl">
                          <SelectItem value="General">General (UR)</SelectItem>
                          <SelectItem value="OBC">OBC-NCL</SelectItem>
                          <SelectItem value="SC">SC</SelectItem>
                          <SelectItem value="ST">ST</SelectItem>
                          <SelectItem value="EWS">EWS</SelectItem>
                          <SelectItem value="NRI">NRI Quota</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor={`${college.formId}-lead-state`} className="text-[9px] font-black uppercase tracking-wider text-slate-400">Domicile State *</Label>
                    <Input id={`${college.formId}-lead-state`} placeholder="e.g., Karnataka"
                      value={formData.state || ""} onChange={e => handleInputChange("state", e.target.value)}
                      className="h-9 rounded-xl border-slate-200" />
                    {errors.state && <p className="text-[10px] text-red-600 font-semibold">{errors.state}</p>}
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[9px] font-black uppercase tracking-wider text-slate-400">Preferred Quota *</Label>
                    <Select onValueChange={val => handleInputChange("preferredQuota", val)} value={formData.preferredQuota || ""}>
                      <SelectTrigger className="h-9 rounded-xl border-slate-200"><SelectValue placeholder="Select quota type" /></SelectTrigger>
                      <SelectContent className="rounded-xl">
                        {college.quotaOptions.map(opt => (
                          <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.preferredQuota && <p className="text-[10px] text-red-600 font-semibold">{errors.preferredQuota}</p>}
                  </div>
                  <Button type="submit" disabled={submitting}
                    className="w-full font-black text-xs uppercase tracking-widest py-3 rounded-xl shadow mt-2 transition-all active:scale-[0.98]"
                    style={{ background: theme.primary, color: theme.accent }}>
                    {submitting ? "Saving Profile..." : "Register Preference"}
                  </Button>
                </form>
              )}
            </div>
            <div className="p-5 rounded-3xl space-y-3 border"
              style={{ background: theme.primaryLight, borderColor: `${theme.primary}15` }}>
              <h4 className="font-serif font-black text-xs flex items-center gap-1.5 uppercase tracking-wider border-b pb-2"
                style={{ color: theme.primary, borderColor: `${theme.primary}15` }}>
                <Sparkles className="h-4 w-4" style={{ color: theme.primary }} /> Counselling Assistance
              </h4>
              <p className="text-[11px] font-semibold leading-relaxed text-slate-500">{college.counselingNote}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
