/**
 * Strategy Registry — Maps interactive strategies to learning modules.
 * Each strategy is embedded inside a specific module and triggered via "Try It Now".
 * Each strategy also has its own dedicated full-page route at /strategy/[slug].
 *
 * STRICT MAPPING (8 strategies only):
 *   Module 2 (Tax Basics for Students)     → Paise Ka GPS, Budget Khel, Ghar Ka Budget, Mistake Market
 *   Module 3 (Saving Strategies)           → Kya Hota Agar, Chhupa Hua Chor, Power of Compounding
 *   Module 5 (Banking Basics)              → Debt Trap Ka Darwaza
 *
 * Removed from module integration (NOT embedded):
 *   - Financial Report Card
 *   - Rupaiya Dictionary
 *   - Ek Din Ka Kharcha (Daily Spending Simulator)
 */

export const STRATEGY_REGISTRY = [
// ── Module 2 (Tax Basics for Students) — 4 strategies ──
{
  id: 'paise-ka-gps',
  slug: 'paise-ka-gps',
  hook: 'See where your financial car is heading!',
  name: 'Paise Ka GPS',
  description: 'Financial health checkup — GPS style!',
  iconName: '🧭',
  accentColor: '#10B981',
  rewardCoins: 20,
  moduleId: 2,
  triggerAfterCard: 1,
  onboardingSteps: [{
    title: 'What Is This?',
    icon: '🧭',
    content: 'A financial health checkup that acts as a GPS for your money habits and shows you where your money is going.'
  }, {
    title: 'What Will You Learn?',
    icon: '🎯',
    content: '✅ Understand your income vs expense ratio\n✅ Get your saving health score\n✅ Find out where you need to improve'
  }, {
    title: 'How To Play?',
    icon: '🎮',
    content: 'Answer 5 simple questions and see your financial GPS score and direction.'
  }, {
    title: 'Ready?',
    icon: '🚀',
    content: 'Complete the game and earn 20 gold coins. LET\u2019S GO!'
  }]
}, {
  id: 'budget-khel',
  slug: 'budget-khel',
  hook: 'Swipe to decide — Need or Want?',
  name: 'Budget Khel',
  description: 'Tinder-style swipe — Need or Want?',
  iconName: '💳',
  accentColor: '#F59E0B',
  rewardCoins: 20,
  moduleId: 2,
  triggerAfterCard: 3,
  onboardingSteps: [{
    title: 'What Is This?',
    icon: '💳',
    content: 'A Tinder-style swipe game where you sort every expense card into Need or Want.'
  }, {
    title: 'What Will You Learn?',
    icon: '🎯',
    content: '✅ Learn the difference between Need and Want\n✅ Gain control over impulse buying\n✅ Build smart spending habits'
  }, {
    title: 'How To Play?',
    icon: '🎮',
    content: 'Swipe each card right (Need) or left (Want). Swipe wisely!'
  }, {
    title: 'Ready?',
    icon: '🚀',
    content: 'Answer correctly and earn 20 gold coins. LET\u2019S GO!'
  }]
}, {
  id: 'ghar-ka-budget',
  slug: 'ghar-ka-budget',
  hook: 'Change the budget, change the room!',
  name: 'Ghar Ka Budget',
  description: 'Allocate budget in a room visual!',
  iconName: '🏠',
  accentColor: '#06B6D4',
  rewardCoins: 20,
  moduleId: 2,
  triggerAfterCard: 5,
  onboardingSteps: [{
    title: 'What Is This?',
    icon: '🏠',
    content: 'A game where you allocate money into different buckets of your income in a virtual room.'
  }, {
    title: 'What Will You Learn?',
    icon: '🎯',
    content: '✅ Learn the 50-30-20 rule\n✅ Understand category-wise budgeting\n✅ Practice real-life allocation'
  }, {
    title: 'How To Play?',
    icon: '🎮',
    content: 'Drag and drop money into different parts of the room (rent, food, savings, fun).'
  }, {
    title: 'Ready?',
    icon: '🚀',
    content: 'Balance your budget and earn 20 gold coins. LET\u2019S GO!'
  }]
}, {
  id: 'mistake-market',
  slug: 'mistake-market',
  hook: 'Walk through the market, spot the mistakes!',
  name: 'Mistake Market',
  description: 'Visit 7 financial mistake stalls!',
  iconName: '🎪',
  accentColor: '#EF4444',
  rewardCoins: 20,
  moduleId: 2,
  triggerAfterCard: 7,
  onboardingSteps: [{
    title: 'What Is This?',
    icon: '🎪',
    content: 'A virtual market where you visit stalls of 7 financial mistakes and learn to spot them.'
  }, {
    title: 'What Will You Learn?',
    icon: '🎯',
    content: '✅ Spot common money mistakes\n✅ Learn how to avoid them\n✅ Make smart financial decisions'
  }, {
    title: 'How To Play?',
    icon: '🎮',
    content: 'Visit each stall, read the mistake, and choose the correct solution.'
  }, {
    title: 'Ready?',
    icon: '🚀',
    content: 'Visit all stalls and earn 20 gold coins. LET\u2019S GO!'
  }]
},
// ── Module 3 (Saving Strategies) — 3 strategies ──
{
  id: 'kya-hota-agar',
  slug: 'kya-hota-agar',
  hook: 'What will your life look like in 10 years?',
  name: 'Kya Hota Agar...',
  description: 'See the 10-year impact of saving vs spending!',
  iconName: '🤔',
  accentColor: '#A855F7',
  rewardCoins: 25,
  moduleId: 3,
  triggerAfterCard: 1,
  onboardingSteps: [{
    title: 'What Is This?',
    icon: '🤔',
    content: 'A 10-year simulator that shows the long-term impact of saving vs spending on your life.'
  }, {
    title: 'What Will You Learn?',
    icon: '🎯',
    content: '✅ Develop long-term thinking\n✅ Understand the compound effect of choices\n✅ Build a future financial vision'
  }, {
    title: 'How To Play?',
    icon: '🎮',
    content: 'Select different choices and see what your financial life looks like in 10 years.'
  }, {
    title: 'Ready?',
    icon: '🚀',
    content: 'Complete the simulation and earn 25 gold coins. LET\u2019S GO!'
  }]
}, {
  id: 'chhupa-hua-chor',
  slug: 'chhupa-hua-chor',
  hook: 'Watch how inflation eats your money!',
  name: 'Chhupa Hua Chor',
  description: 'See how inflation eats away your money!',
  iconName: '👀',
  accentColor: '#EF4444',
  rewardCoins: 15,
  moduleId: 3,
  triggerAfterCard: 3,
  onboardingSteps: [{
    title: 'What Is This?',
    icon: '👀',
    content: 'Think of inflation as a hidden thief that silently eats away your money.'
  }, {
    title: 'What Will You Learn?',
    icon: '🎯',
    content: '✅ Understand what inflation is\n✅ Learn real vs nominal value\n✅ Spot inflation-beating investments'
  }, {
    title: 'How To Play?',
    icon: '🎮',
    content: 'Move the time slider forward and watch how inflation eats your money.'
  }, {
    title: 'Ready?',
    icon: '🚀',
    content: 'Catch the thief and earn 15 gold coins. LET\u2019S GO!'
  }]
}, {
  id: 'compounding-tree',
  slug: 'compounding-tree',
  hook: 'Plant a seed, grow a money tree!',
  name: 'Power of Compounding',
  description: 'Grow a tree with SIP and watch your wealth!',
  iconName: '🌳',
  accentColor: '#10B981',
  rewardCoins: 25,
  moduleId: 3,
  triggerAfterCard: 5,
  onboardingSteps: [{
    title: 'What Is This?',
    icon: '🌳',
    content: 'Grow a virtual tree and see how the power of SIP creates a money tree over time.'
  }, {
    title: 'What Will You Learn?',
    icon: '🎯',
    content: '✅ See the magic of compounding\n✅ Understand the power of SIP\n✅ Learn the Time = Money concept'
  }, {
    title: 'How To Play?',
    icon: '🎮',
    content: 'Set the monthly amount and duration, then press \u201cGrow\u201d and watch the tree grow.'
  }, {
    title: 'Ready?',
    icon: '🚀',
    content: 'Let the tree fully grow and earn 25 gold coins. LET\u2019S GO!'
  }]
},
// ── Module 5 (Banking Basics) — 1 strategy ──
{
  id: 'debt-trap-darwaza',
  slug: 'debt-trap-darwaza',
  hook: 'Open 7 doors, discover the truth about debt!',
  name: 'Debt Trap Ka Darwaza',
  description: 'Open 7 debt trap doors and stay safe!',
  iconName: '🚪',
  accentColor: '#EF4444',
  rewardCoins: 30,
  moduleId: 5,
  triggerAfterCard: 2,
  onboardingSteps: [{
    title: 'What Is This?',
    icon: '🚪',
    content: 'Open 7 doors that represent different debt traps — discover the truth about debt.'
  }, {
    title: 'What Will You Learn?',
    icon: '🎯',
    content: '✅ Difference between good debt and bad debt\n✅ Spot interest rate traps\n✅ Learn ways to stay out of debt'
  }, {
    title: 'How To Play?',
    icon: '🎮',
    content: 'Open each door, understand the trap inside, and choose \u201cStay Safe\u201d to escape.'
  }, {
    title: 'Ready?',
    icon: '🚀',
    content: 'Cross all 7 doors and earn 30 gold coins. LET\u2019S GO!'
  }]
}];

/** Get all strategies for a specific module */
export function getStrategiesForModule(moduleId) {
  return STRATEGY_REGISTRY.filter(s => s.moduleId === moduleId);
}

/** Get a strategy by ID */
export function getStrategyById(id) {
  return STRATEGY_REGISTRY.find(s => s.id === id);
}

/** Get a strategy by URL slug (used by /strategy/[slug] route) */
export function getStrategyBySlug(slug) {
  return STRATEGY_REGISTRY.find(s => s.slug === slug);
}
