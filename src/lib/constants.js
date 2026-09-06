// App colors
export const COLORS = {
  background: "#0a0a0f",
  surface: "#12121a",
  secondarySurface: "#1a1a2e",
  primary: "#f59e0b", // Rupaiya Gold
  primaryHover: "#fbbf24",
  primaryDark: "#d97706",
  success: "#22c55e",
  danger: "#ef4444",
  warning: "#f59e0b",
  info: "#3b82f6",
  textPrimary: "#e8e8ed",
  textMuted: "#8888a0",
  border: "rgba(255,255,255,0.08)",
  indiaSaffron: "#ff9933",
  indiaGreen: "#138808",
};

// App metadata
export const APP_NAME = "Money Matters";
export const APP_TAGLINE = "Learn finance in a fun and engaging way";
export const APP_DESCRIPTION =
  "Financial literacy app for Indian youth aged 16-25";

// Financial constants
export const INFLATION_RATE = 6; // % average in India
export const DEFAULT_SIP_RETURN = 12; // % average equity return
export const EMERGENCY_FUND_MONTHS = 6;
export const RULE_OF_72 = 72;

// Budget percentages (50/30/20 rule)
export const BUDGET_RULE = {
  needs: 50,
  wants: 30,
  savings: 20,
};

// Milestone definitions for Financial GPS
export const MILESTONES = [
  {
    id: 1,
    label: "First ₹1,000 saved",
    description: "First thousand — the most important step to get started!",
    percentage: 10,
  },
  {
    id: 2,
    label: "Emergency fund started",
    description: "Emergency fund started — now you are safe from unexpected expenses",
    percentage: 25,
  },
  {
    id: 3,
    label: "First SIP started",
    description: "First SIP — the magic of compounding begins!",
    percentage: 40,
  },
  {
    id: 4,
    label: "Credit score 750+",
    description: "Good credit score — easier loan approvals",
    percentage: 60,
  },
  {
    id: 5,
    label: "6-month emergency fund",
    description: "6-month safety net — live tension-free!",
    percentage: 80,
  },
  {
    id: 6,
    label: "Financial Freedom",
    description: "Financial freedom — your dream is fulfilled!",
    percentage: 100,
  },
];

// Debt trap door definitions
export const DEBT_DOORS = [
  {
    id: 1,
    title: "Got a credit card!",
    subtitle: "It feels like free money...",
    color: "#fbbf24",
  },
  {
    id: 2,
    title: "Bought a phone on EMI",
    subtitle: "Small EMI, big loss",
    color: "#f97316",
  },
  {
    id: 3,
    title: "Added more cards",
    subtitle: "Kept growing the debt",
    color: "#ef4444",
  },
  {
    id: 4,
    title: "Minimum payment trap",
    subtitle: "Principal never comes down",
    color: "#dc2626",
  },
  {
    id: 5,
    title: "Took a personal loan",
    subtitle: "Paying debt with more debt",
    color: "#b91c1c",
  },
  {
    id: 6,
    title: "CIBIL score dropped",
    subtitle: "Now no loan will be approved",
    color: "#991b1b",
  },
  {
    id: 7,
    title: "Debt Trap!",
    subtitle: "It is too late now...",
    color: "#7f1d1d",
  },
];
