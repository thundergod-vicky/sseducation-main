// MBBS College Page Theme System
// 6 distinct visual identities for the 39 MBBS college pages

export type HeroVariant = 'split' | 'diagonal' | 'fullbleed' | 'geometric' | 'warm' | 'skygrad';
export type HeaderVariant = 'crest' | 'horizontal' | 'typographic' | 'minimal' | 'ornate' | 'modern';

export interface CollegeTheme {
  id: string;
  name: string;
  heroVariant: HeroVariant;
  headerVariant: HeaderVariant;
  // Core palette (inline styles — needed for dynamic color application)
  primary: string;
  primaryDark: string;
  primaryLight: string;
  accent: string;
  accentDark: string;
  accentLight: string;
  accentOnAccent: string; // text color on accent background
  pageBg: string;
  // Ticker bar
  tickerBg: string;
  tickerTextColor: string;
  tickerBadgeBg: string;
  tickerBadgeText: string;
  // Selection color
  selectionBg: string;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// THEME A — Royal Prestige (Karnataka Premier Colleges)
// Deep Navy + Rich Gold · Split hero · Crest header
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const THEME_ROYAL: CollegeTheme = {
  id: 'royal',
  name: 'Royal Prestige',
  heroVariant: 'split',
  headerVariant: 'crest',
  primary: '#1a3a5c',
  primaryDark: '#0f2540',
  primaryLight: '#e8eef6',
  accent: '#b8860b',
  accentDark: '#8b6508',
  accentLight: '#fef9e7',
  accentOnAccent: '#1a1a1a',
  pageBg: '#f7f8fa',
  tickerBg: '#b8860b',
  tickerTextColor: '#1a1a1a',
  tickerBadgeBg: '#1a3a5c',
  tickerBadgeText: '#f5d87c',
  selectionBg: '#1a3a5c',
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// THEME B — Emerald Academic (Green Medical Colleges)
// Forest Green + Teal · Diagonal hero · Horizontal header
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const THEME_EMERALD: CollegeTheme = {
  id: 'emerald',
  name: 'Emerald Academic',
  heroVariant: 'diagonal',
  headerVariant: 'horizontal',
  primary: '#134e36',
  primaryDark: '#0c3523',
  primaryLight: '#ecfdf5',
  accent: '#059669',
  accentDark: '#047857',
  accentLight: '#d1fae5',
  accentOnAccent: '#ffffff',
  pageBg: '#f0faf4',
  tickerBg: '#059669',
  tickerTextColor: '#ffffff',
  tickerBadgeBg: '#134e36',
  tickerBadgeText: '#6ee7b7',
  selectionBg: '#134e36',
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// THEME C — Crimson Excellence (Tamil Nadu Medical Colleges)
// Deep Burgundy + Rose · Full-bleed hero · Bold typographic header
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const THEME_CRIMSON: CollegeTheme = {
  id: 'crimson',
  name: 'Crimson Excellence',
  heroVariant: 'fullbleed',
  headerVariant: 'typographic',
  primary: '#7f1d1d',
  primaryDark: '#5c0f0f',
  primaryLight: '#fff1f2',
  accent: '#e11d48',
  accentDark: '#be123c',
  accentLight: '#ffe4e6',
  accentOnAccent: '#ffffff',
  pageBg: '#fdf7f7',
  tickerBg: '#e11d48',
  tickerTextColor: '#ffffff',
  tickerBadgeBg: '#7f1d1d',
  tickerBadgeText: '#fecdd3',
  selectionBg: '#7f1d1d',
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// THEME D — Slate Modern (West Bengal Colleges)
// Charcoal + Sky Cyan · Geometric hero · Minimal header
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const THEME_SLATE: CollegeTheme = {
  id: 'slate',
  name: 'Slate Modern',
  heroVariant: 'geometric',
  headerVariant: 'minimal',
  primary: '#1e293b',
  primaryDark: '#0f172a',
  primaryLight: '#f1f5f9',
  accent: '#0ea5e9',
  accentDark: '#0284c7',
  accentLight: '#e0f2fe',
  accentOnAccent: '#ffffff',
  pageBg: '#f8fafc',
  tickerBg: '#0ea5e9',
  tickerTextColor: '#ffffff',
  tickerBadgeBg: '#1e293b',
  tickerBadgeText: '#7dd3fc',
  selectionBg: '#1e293b',
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// THEME E — Saffron Pride (Rajasthan Colleges)
// Warm Amber-Brown + Saffron · Warm hero · Ornate header
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const THEME_SAFFRON: CollegeTheme = {
  id: 'saffron',
  name: 'Saffron Pride',
  heroVariant: 'warm',
  headerVariant: 'ornate',
  primary: '#7c3410',
  primaryDark: '#4d2008',
  primaryLight: '#fff7ed',
  accent: '#f59e0b',
  accentDark: '#d97706',
  accentLight: '#fef3c7',
  accentOnAccent: '#1a1a1a',
  pageBg: '#fffbf0',
  tickerBg: '#f59e0b',
  tickerTextColor: '#1a1a1a',
  tickerBadgeBg: '#7c3410',
  tickerBadgeText: '#fbbf24',
  selectionBg: '#7c3410',
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// THEME F — Indigo Future (UP + Odisha Colleges)
// Deep Indigo + Violet · Sky-gradient hero · Modern card header
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const THEME_INDIGO: CollegeTheme = {
  id: 'indigo',
  name: 'Indigo Future',
  heroVariant: 'skygrad',
  headerVariant: 'modern',
  primary: '#312e81',
  primaryDark: '#1e1b4b',
  primaryLight: '#eef2ff',
  accent: '#7c3aed',
  accentDark: '#6d28d9',
  accentLight: '#ede9fe',
  accentOnAccent: '#ffffff',
  pageBg: '#f5f3ff',
  tickerBg: '#7c3aed',
  tickerTextColor: '#ffffff',
  tickerBadgeBg: '#312e81',
  tickerBadgeText: '#c4b5fd',
  selectionBg: '#312e81',
};

// Theme assignment map
export const COLLEGE_THEMES: Record<string, CollegeTheme> = {
  // Karnataka — Royal Prestige
  'ramaiah': THEME_ROYAL,
  'stjohns': THEME_ROYAL,
  'eastpoint': THEME_ROYAL,
  'cmcvellore': THEME_ROYAL,
  // Karnataka — Emerald Academic
  'kims-bangalore': THEME_EMERALD,
  'vydehi': THEME_EMERALD,
  'bgs-global': THEME_EMERALD,
  'dr-ambedkar': THEME_EMERALD,
  // Tamil Nadu — Crimson Excellence
  'srm-chennai': THEME_CRIMSON,
  'sri-ramachandra': THEME_CRIMSON,
  'saveetha': THEME_CRIMSON,
  'sree-balaji': THEME_CRIMSON,
  'psg': THEME_CRIMSON,
  'chettinad': THEME_CRIMSON,
  // West Bengal — Slate Modern
  'kpc-kolkata': THEME_SLATE,
  'jagannath-gupta': THEME_SLATE,
  'iq-city': THEME_SLATE,
  'icare': THEME_SLATE,
  'gouri-devi': THEME_SLATE,
  // Rajasthan — Saffron Pride
  'mgmc-jaipur': THEME_SAFFRON,
  'nims-jaipur': THEME_SAFFRON,
  'jnu-jaipur': THEME_SAFFRON,
  'geetanjali': THEME_SAFFRON,
  'pacific-medical': THEME_SAFFRON,
  'pacific-institute': THEME_SAFFRON,
  'ananta': THEME_SAFFRON,
  'american-intl': THEME_SAFFRON,
  'tantia': THEME_SAFFRON,
  // UP — Indigo Future
  'sharda': THEME_INDIGO,
  'subharti': THEME_INDIGO,
  'eras': THEME_INDIGO,
  'srms': THEME_INDIGO,
  'rohilkhand': THEME_INDIGO,
  'hind': THEME_INDIGO,
  // Odisha — Indigo Future
  'kims-bhubaneswar': THEME_INDIGO,
  'ims-sum': THEME_INDIGO,
  'hitech-bhubaneswar': THEME_INDIGO,
  'hitech-rourkela': THEME_INDIGO,
  'driems': THEME_INDIGO,
};
