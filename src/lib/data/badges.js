// ════════════════════════════════════════════════════════════════════════
// CAPITAL MASTERY — Comprehensive Badge System
// "Midnight Wealth + Emerald Growth"
// 30+ badges across 5 categories: Learning, Streaks, Strategies, Special
// ════════════════════════════════════════════════════════════════════════

// Tier color map (for ring + glow effects)
export const TIER_COLORS = {
  bronze: {
    ring: "#CD7F32",
    glow: "rgba(205, 127, 50, 0.45)",
    label: "Bronze",
  },
  silver: {
    ring: "#C0C0C0",
    glow: "rgba(192, 192, 192, 0.45)",
    label: "Silver",
  },
  gold: { ring: "#F59E0B", glow: "rgba(245, 158, 11, 0.55)", label: "Gold" },
  diamond: {
    ring: "#A78BFA",
    glow: "rgba(167, 139, 250, 0.65)",
    label: "Diamond",
  },
};

export const CATEGORY_META = {
  learning: { label: "Learning", emoji: "📚", accent: "#10B981" },
  streak: { label: "Streaks", emoji: "🔥", accent: "#EF4444" },
  strategy: { label: "Strategies", emoji: "🎮", accent: "#8B5CF6" },
  special: { label: "Special", emoji: "⭐", accent: "#F59E0B" },
};

// ────────────────────────────────────────────────────────────────────────
// LEARNING BADGES (11) — one per module
// ────────────────────────────────────────────────────────────────────────
const LEARNING_BADGES = [
  {
    id: "m1-pehli-seedi",
    name: "First Step",
    description: "Completed the first step of basic money understanding!",
    category: "learning",
    emoji: "🪜",
    tier: "bronze",
    requirement: "Module 1 — Complete Money Basics",
    rewardCoins: 50,
    rarity: 62,
  },
  {
    id: "m2-budget-boss",
    name: "Budget Boss",
    description: "Became a budgeting master!",
    category: "learning",
    emoji: "💼",
    tier: "silver",
    requirement: "Module 2 — Complete Budgeting In Real Life",
    rewardCoins: 60,
    rarity: 48,
  },
  {
    id: "m3-bachat-king",
    name: "Savings King/Queen",
    description: "Master of savings strategies!",
    category: "learning",
    emoji: "🐷",
    tier: "gold",
    requirement: "Module 3 — Complete Saving Strategies",
    rewardCoins: 75,
    rarity: 38,
  },
  {
    id: "m4-shield-bearer",
    name: "Shield Bearer",
    description: "Became the shield of emergency fund!",
    category: "learning",
    emoji: "🛡️",
    tier: "silver",
    requirement: "Module 4 — Complete Emergency Fund",
    rewardCoins: 70,
    rarity: 32,
  },
  {
    id: "m5-debt-slayer",
    name: "Debt Slayer",
    description: "Cut through the web of debt!",
    category: "learning",
    emoji: "⚔️",
    tier: "gold",
    requirement: "Module 5 — Complete Debt and Credit",
    rewardCoins: 80,
    rarity: 28,
  },
  {
    id: "m6-bank-master",
    name: "Bank Master",
    description: "Learned all the secrets of banking!",
    category: "learning",
    emoji: "🏛️",
    tier: "silver",
    requirement: "Module 6 — Complete Banking Basics",
    rewardCoins: 75,
    rarity: 25,
  },
  {
    id: "m7-niveshak",
    name: "Investor",
    description: "Built the foundation of investing!",
    category: "learning",
    emoji: "📈",
    tier: "gold",
    requirement: "Module 7 — Complete Investment Basics",
    rewardCoins: 90,
    rarity: 22,
  },
  {
    id: "m8-freedom-fighter",
    name: "Freedom Fighter",
    description: "On the road to financial freedom!",
    category: "learning",
    emoji: "🕊️",
    tier: "gold",
    requirement: "Module 8 — Complete Financial Independence",
    rewardCoins: 100,
    rarity: 18,
  },
  {
    id: "m9-suraksha-kavach",
    name: "Safety Shield",
    description: "Insurance has become your protective shield!",
    category: "learning",
    emoji: "☂️",
    tier: "silver",
    requirement: "Module 9 — Complete Insurance Basics",
    rewardCoins: 80,
    rarity: 15,
  },
  {
    id: "m10-tax-guru",
    name: "Tax Guru",
    description: "Learned all the tax saving tricks!",
    category: "learning",
    emoji: "🧮",
    tier: "gold",
    requirement: "Module 10 — Complete Tax Basics",
    rewardCoins: 90,
    rarity: 12,
  },
  {
    id: "m11-real-world-ready",
    name: "Real World Ready",
    description: "Ready for the real world!",
    category: "learning",
    emoji: "🏆",
    tier: "diamond",
    requirement: "Module 11 — Complete Real-World Scenarios",
    rewardCoins: 150,
    rarity: 8,
  },
];

// ────────────────────────────────────────────────────────────────────────
// STREAK BADGES (4) — login streak milestones
// ────────────────────────────────────────────────────────────────────────
const STREAK_BADGES = [
  {
    id: "streak-3-tiger",
    name: "3-Day Tiger",
    description: "A tiger who learns for 3 consecutive days!",
    category: "streak",
    emoji: "🐯",
    tier: "bronze",
    requirement: "Build a 3-day streak (3 consecutive logins)",
    rewardCoins: 30,
    rarity: 45,
  },
  {
    id: "streak-7-warrior",
    name: "Weekly Warrior",
    description: "A full week — warrior mode on!",
    category: "streak",
    emoji: "🔥",
    tier: "silver",
    requirement: "Build a 7-day streak",
    rewardCoins: 60,
    rarity: 28,
  },
  {
    id: "streak-30-monster",
    name: "Monthly Monster",
    description: "A 30-day monster streak!",
    category: "streak",
    emoji: "👹",
    tier: "gold",
    requirement: "Build a 30-day streak",
    rewardCoins: 200,
    rarity: 8,
  },
  {
    id: "streak-100-legend",
    name: "100-Day Legend",
    description: "100 days — you are a legend!",
    category: "streak",
    emoji: "👑",
    tier: "diamond",
    requirement: "Build a 100-day streak",
    rewardCoins: 500,
    rarity: 1,
  },
];

// ────────────────────────────────────────────────────────────────────────
// STRATEGY BADGES (8) — one per interactive strategy
// ────────────────────────────────────────────────────────────────────────
const STRATEGY_BADGES = [
  {
    id: "strat-gps-navigator",
    name: "GPS Navigator",
    description: "Completed the money GPS!",
    category: "strategy",
    emoji: "🧭",
    tier: "silver",
    requirement: "Complete Money GPS strategy",
    rewardCoins: 40,
    rarity: 35,
  },
  {
    id: "strat-swipe-master",
    name: "Swipe Master",
    description: "Swipe master in Budget Game!",
    category: "strategy",
    emoji: "💳",
    tier: "silver",
    requirement: "Complete Budget Game strategy",
    rewardCoins: 40,
    rarity: 32,
  },
  {
    id: "strat-interior-designer",
    name: "Interior Designer",
    description: "Designed the household budget!",
    category: "strategy",
    emoji: "🏠",
    tier: "silver",
    requirement: "Complete Home Budget strategy",
    rewardCoins: 40,
    rarity: 25,
  },
  {
    id: "strat-market-expert",
    name: "Market Expert",
    description: "Expert at the Mistake Market!",
    category: "strategy",
    emoji: "🛍️",
    tier: "silver",
    requirement: "Complete Mistake Market strategy",
    rewardCoins: 40,
    rarity: 22,
  },
  {
    id: "strat-time-traveler",
    name: "Time Traveler",
    description: "What If — peeked into the future!",
    category: "strategy",
    emoji: "⏳",
    tier: "gold",
    requirement: "Complete What If strategy",
    rewardCoins: 50,
    rarity: 18,
  },
  {
    id: "strat-inflation-hunter",
    name: "Inflation Hunter",
    description: "Caught the hidden thief!",
    category: "strategy",
    emoji: "🕵️",
    tier: "gold",
    requirement: "Complete Hidden Thief strategy",
    rewardCoins: 50,
    rarity: 15,
  },
  {
    id: "strat-tree-planter",
    name: "Tree Planter",
    description: "Grew the tree of compounding!",
    category: "strategy",
    emoji: "🌳",
    tier: "gold",
    requirement: "Complete Compounding Tree strategy",
    rewardCoins: 50,
    rarity: 20,
  },
  {
    id: "strat-debt-trap-survivor",
    name: "Debt Trap Survivor",
    description: "Escaped the debt trap!",
    category: "strategy",
    emoji: "⛓️",
    tier: "gold",
    requirement: "Complete Debt Trap Door strategy",
    rewardCoins: 60,
    rarity: 12,
  },
];

// ────────────────────────────────────────────────────────────────────────
// SPECIAL ACHIEVEMENT BADGES (8)
// ────────────────────────────────────────────────────────────────────────
const SPECIAL_BADGES = [
  {
    id: "first-blood",
    name: "First Blood",
    description: "Completed the first activity!",
    category: "special",
    emoji: "🩸",
    tier: "bronze",
    requirement: "Complete any 1 activity",
    rewardCoins: 10,
    rarity: 70,
  },
  {
    id: "coin-collector-100",
    name: "Coin Collector 100",
    description: "Collection of 100 coins!",
    category: "special",
    emoji: "🪙",
    tier: "bronze",
    requirement: "Earn a total of 100 coins",
    rewardCoins: 20,
    rarity: 55,
  },
  {
    id: "coin-collector-500",
    name: "Coin Collector 500",
    description: "Collection of 500 coins!",
    category: "special",
    emoji: "💰",
    tier: "silver",
    requirement: "Earn a total of 500 coins",
    rewardCoins: 50,
    rarity: 28,
  },
  {
    id: "coin-collector-1000",
    name: "Coin Collector 1000",
    description: "1000 coins — a wealthy person!",
    category: "special",
    emoji: "💎",
    tier: "gold",
    requirement: "Earn a total of 1000 coins",
    rewardCoins: 100,
    rarity: 10,
  },
  {
    id: "quiz-champion",
    name: "Quiz Champion",
    description: "Scored 100% in the quiz!",
    category: "special",
    emoji: "🏅",
    tier: "gold",
    requirement: "Score 100% in any quiz",
    rewardCoins: 75,
    rarity: 20,
  },
  {
    id: "dictionary-nerd",
    name: "Dictionary Nerd",
    description: "Explored 20+ financial terms!",
    category: "special",
    emoji: "📖",
    tier: "silver",
    requirement: "Read 20+ terms in the dictionary",
    rewardCoins: 40,
    rarity: 15,
  },
  {
    id: "all-rounder",
    name: "All Rounder",
    description: "Completed all 11 modules!",
    category: "special",
    emoji: "🌈",
    tier: "diamond",
    requirement: "Complete all 11 modules",
    rewardCoins: 300,
    rarity: 3,
  },
  {
    id: "social-star",
    name: "Social Star",
    description: "Shared 5 results!",
    category: "special",
    emoji: "⭐",
    tier: "silver",
    requirement: "Share 5 results on social media",
    rewardCoins: 50,
    rarity: 12,
  },
];

// ────────────────────────────────────────────────────────────────────────
// MASTER BADGE LIST
// ────────────────────────────────────────────────────────────────────────
export const BADGES = [
  ...LEARNING_BADGES,
  ...STREAK_BADGES,
  ...STRATEGY_BADGES,
  ...SPECIAL_BADGES,
];

// Lookup helper
export function getBadgeById(id) {
  return BADGES.find((b) => b.id === id);
}

// Get badges by category
export function getBadgesByCategory(category) {
  if (category === "all") return BADGES;
  return BADGES.filter((b) => b.category === category);
}

// Rarest badges (rarity ≤ 12 — earned by <12% users)
export function getRarestBadges() {
  return BADGES.filter((b) => (b.rarity ?? 100) <= 12).sort(
    (a, b) => (a.rarity ?? 100) - (b.rarity ?? 100),
  );
}

// Total count
export const TOTAL_BADGES = BADGES.length;

// ────────────────────────────────────────────────────────────────────────
// LEVEL SYSTEM — XP thresholds & names
// ────────────────────────────────────────────────────────────────────────

// XP threshold per level: 0, 100, 250, 500, 1000, 2000, 4000, 8000, 16000, 32000
// (each level needs 2x previous beyond Level 2)
export const LEVEL_THRESHOLDS = [
  0, // L1
  100, // L2
  250, // L3
  500, // L4
  1000, // L5
  2000, // L6
  4000, // L7
  8000, // L8
  16000, // L9
  32000, // L10
];

export const LEVEL_NAMES = [
  { name: "New Learner", emoji: "🌱" }, // L1
  { name: "Budget Seeker", emoji: "📊" }, // L2
  { name: "Savings Starter", emoji: "💰" }, // L3
  { name: "Money Manager", emoji: "📋" }, // L4
  { name: "Finance Fighter", emoji: "💪" }, // L5
  { name: "Wealth Builder", emoji: "🏗️" }, // L6
  { name: "Investment Ninja", emoji: "🥷" }, // L7
  { name: "Tax Smart", emoji: "🧠" }, // L8
  { name: "Financial Expert", emoji: "🎯" }, // L9
  { name: "Money Master", emoji: "👑" }, // L10
];

export const MAX_LEVEL = LEVEL_NAMES.length;

/**
 * Compute level info from XP.
 */
export function getLevelInfo(xp) {
  let level = 1;
  for (let i = 0; i < LEVEL_THRESHOLDS.length; i++) {
    if (xp >= LEVEL_THRESHOLDS[i]) level = i + 1;
    else break;
  }
  if (level > MAX_LEVEL) level = MAX_LEVEL;

  const minXp = LEVEL_THRESHOLDS[level - 1] ?? 0;
  const nextLevelXp =
    level >= MAX_LEVEL ? Infinity : (LEVEL_THRESHOLDS[level] ?? Infinity);

  return {
    level,
    name: LEVEL_NAMES[level - 1]?.name ?? "Money Master",
    emoji: LEVEL_NAMES[level - 1]?.emoji ?? "👑",
    minXp,
    nextLevelXp,
  };
}

/**
 * XP needed to go from current level → next level.
 * Returns progress percentage (0-100) within current level band.
 */
export function getLevelProgress(xp) {
  const info = getLevelInfo(xp);
  if (info.nextLevelXp === Infinity) {
    return { current: xp - info.minXp, needed: 0, percent: 100, toNext: 0 };
  }
  const bandTotal = info.nextLevelXp - info.minXp;
  const bandCurrent = xp - info.minXp;
  const percent =
    bandTotal > 0
      ? Math.min(100, Math.round((bandCurrent / bandTotal) * 100))
      : 100;
  return {
    current: bandCurrent,
    needed: bandTotal,
    percent,
    toNext: Math.max(0, info.nextLevelXp - xp),
  };
}

// ────────────────────────────────────────────────────────────────────────
// PRE-BUILT CARTOON AVATARS (emoji-based) — for Profile page
// ────────────────────────────────────────────────────────────────────────
export const PROFILE_AVATARS = [
  { id: "av1", emoji: "🦊", label: "Smart Fox" },
  { id: "av2", emoji: "🦁", label: "Lion Boss" },
  { id: "av3", emoji: "🐯", label: "Tiger Streak" },
  { id: "av4", emoji: "🐸", label: "Coin Frog" },
  { id: "av5", emoji: "🦉", label: "Wise Owl" },
  { id: "av6", emoji: "🐺", label: "Lone Wolf" },
  { id: "av7", emoji: "🐼", label: "Zen Panda" },
  { id: "av8", emoji: "🐧", label: "Penguin Pro" },
  { id: "av9", emoji: "🦄", label: "Unicorn" },
  { id: "av10", emoji: "🐲", label: "Dragon Wealth" },
];

// ────────────────────────────────────────────────────────────────────────
// ACTIVITY LOG TYPES
// ────────────────────────────────────────────────────────────────────────

// Activity emoji map
export const ACTIVITY_EMOJI = {
  login: "🔑",
  module_section: "📚",
  module_complete: "🎯",
  strategy: "🎮",
  quiz: "🧠",
  badge: "🏆",
  level_up: "🚀",
  spend: "💸",
  spin: "🎡",
  challenge: "⚡",
  general: "✨",
};
