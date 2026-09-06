"use client";

import { useState, useEffect, useMemo, useCallback, useRef, Suspense, lazy } from 'react';
import { useRouter, useSearchParams, useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useAppStore, useHydration } from '@/lib/store/useAppStore';
import { IndianRupee } from 'lucide-react';

// Lucide Icons
import {
  LayoutDashboard,
  MessageSquare,
  Wrench,
  User,
  LogOut,
  Moon,
  Sun,
  Coins,
  Trophy,
  Flame,
  ChevronRight,
  Sparkles,
  Zap,
  BookOpen,
  ArrowRight,
  Lock,
  CheckCircle2,
  Clock,
  Heart,
  Bookmark,
  Sliders,
  Send,
  MoreHorizontal,
  ChevronLeft,
  X,
  Menu,
  Target,
  UserCheck,
  Shield,
  Calendar,
  HeartPulse,
  Receipt,
  PiggyBank,
  CircleDot,
  Brain,
  Globe,
  PlusSquare,
  Plus,
  Compass,
  Filter,
  ArrowDownUp
} from 'lucide-react';

import { modules, getAllCardsForModule } from '@/data/modulesIndex';
import { getStrategyBySlug } from '@/lib/data/strategyRegistry';
import { strategies } from '@/lib/data/strategies';
import { BADGES, PROFILE_AVATARS, getLevelInfo, getLevelProgress, ACTIVITY_EMOJI } from '@/lib/data/badges';

// Lazy load dialogs/widgets
const LazyGoalTracker = lazy(() => import('@/components/shared/GoalTracker'));
const LazyExpenseTracker = lazy(() => import('@/components/shared/ExpenseTracker'));
const LazySavingsChallenge = lazy(() => import('@/components/shared/SavingsChallenge'));
const LazyQuizArena = lazy(() => import('@/components/shared/QuizArena'));
const LazySpinWheel = lazy(() => import('@/components/shared/SpinWheel'));
const LazyMemoryMatch = lazy(() => import('@/components/shared/MemoryMatch'));
const LazyWordScramble = lazy(() => import('@/components/shared/WordScramble'));
const LazyFinancialNewsWidget = lazy(() => import('@/components/shared/FinancialNewsWidget'));
const LazyPriorityCalculator = lazy(() => import('@/components/shared/PriorityCalculator'));
const LazyInvestmentComparison = lazy(() => import('@/components/shared/InvestmentComparison'));
const LazyEmergencyFundCalculator = lazy(() => import('@/components/shared/EmergencyFundCalculator'));
const LazyHabitTracker = lazy(() => import('@/components/shared/HabitTracker'));
const LazyFinancialAgeCalculator = lazy(() => import('@/components/shared/FinancialAgeCalculator'));
const LazySIPCalculator = lazy(() => import('@/components/shared/SIPCalculator'));
const LazyBadgeGallery = lazy(() => import('@/components/shared/BadgeGallery'));
const LazyAchievementDashboard = lazy(() => import('@/components/shared/AchievementDashboard'));
const LazyShareProgress = lazy(() => import('@/components/shared/ShareProgress'));
const LazyHealthCheckup = lazy(() => import('@/components/shared/HealthCheckup'));

// ── Lazy-loaded strategy components for Strategy Viewer ──
const StrategyComponents = {
  "paise-ka-gps": lazy(() => import("@/components/strategies/PaiseKaGPS")),
  "budget-khel": lazy(() => import("@/components/strategies/BudgetKhel")),
  "ghar-ka-budget": lazy(() => import("@/components/strategies/GharKaBudget")),
  "mistake-market": lazy(() => import("@/components/strategies/MistakeMarket")),
  "kya-hota-agar": lazy(() => import("@/components/strategies/KyaHotaAgar")),
  "chhupa-hua-chor": lazy(() => import("@/components/strategies/ChhupaHuaChor")),
  "compounding-tree": lazy(() => import("@/components/strategies/CompoundingTree")),
  "debt-trap-darwaza": lazy(() => import("@/components/strategies/DebtTrapDarwaza"))
};

const QUOTES = [
  'Paisa invest karo, future secure karo! 🚀',
  'Har rupee ek soldier hai — use wisely! ⚔️',
  'Compounding ka jadoo samjho, aur ameer bano! ✨',
  'Debt se bachna = financial freedom ka pehla step 🛡️',
  'Bachat karo, auto-debit shuru karo! 🐷'
];

const QUICK_QUESTIONS = [
  'SIP kaise shuru karein? 📈',
  'Emergency fund kitna hona chahiye? 🛡️',
  'Credit card trap se kaise bachein? 💳',
  'Needs aur Wants mein kya difference hai? 🧾',
  'Inflation hamare paise ko kaise khata hai? 🥷'
];

// Helper level calculation
function getLevelLabel(lvl) {
  if (lvl >= 10) return { label: 'Grand Master 👑', color: '#F59E0B' };
  if (lvl >= 7) return { label: 'Expert Advisor 🎓', color: '#10B981' };
  if (lvl >= 4) return { label: 'Smart Investor 💼', color: '#10B981' };
  return { label: 'Rookie Learner 🌱', color: '#94A3B8' };
}

// ════════════════════════════════════════════════════════════════════════════
// OLD STYLE DASHBOARD COMPONENT PORTING
// ════════════════════════════════════════════════════════════════════════════
const QUICK_TOOLS = [{
  id: 'goals',
  label: 'Goals',
  emoji: '🎯',
  color: '#10B981'
}, {
  id: 'expense',
  label: 'Kharcha',
  emoji: '🧾',
  color: '#10B981'
}, {
  id: 'quiz',
  label: 'Quiz',
  emoji: '🧠',
  color: '#10B981'
}, {
  id: 'spin',
  label: 'Spin',
  emoji: '🎡',
  color: '#10B981'
}, {
  id: 'memory',
  label: 'Memory',
  emoji: '🃏',
  color: '#10B981'
}, {
  id: 'health',
  label: 'Checkup',
  emoji: '🩺',
  color: '#10B981'
}];

function AnimatedCounter({
  target
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (target === 0) return;
    let start = 0;
    const duration = 1100;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target]);
  return <span>{count.toLocaleString('en-IN')}</span>;
}

function FinanceTicker() {
  const messages = ['Bhai, SIP miss mat karna! Compounding ka jadoo wahin se shuru hota hai. ✨', 'Emergency Fund = Financial Insurance. Pehle ise build karo! 🛡️', 'Credit Card ka minimum payment trap hai! Hamesha full pay karo. 💳', "Inflation ek silent chor hai. Apne paise ko invest karo, sirf save nahi! 📉", 'Wealth is what you don\'t see. Ameer mat dikho, ameer bano! 🕵️'];
  return (
    <div className="w-full bg-emerald/10 border-y border-emerald/20 py-2 overflow-hidden whitespace-nowrap relative">
      <motion.div
        animate={{
          x: [0, -2000]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="flex gap-12 items-center"
      >
        {[...messages, ...messages].map((msg, i) => (
          <span
            key={i}
            className="text-[10px] font-bold text-emerald-soft uppercase tracking-widest flex items-center gap-2"
          >
            <Zap size={12} fill="currentColor" /> {msg}
          </span>
        ))}
      </motion.div>
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10" />
    </div>
  );
}

function HealthScoreGauge({
  score
}) {
  const radius = 70;
  const circumference = Math.PI * radius; // half-circle
  const offset = circumference - score / 100 * circumference;
  const grade = score >= 75 ? 'Fit 💪' : score >= 50 ? 'Average 🤔' : 'In the ICU 🏥';
  const gradeColor = score >= 75 ? '#10B981' : score >= 50 ? '#F59E0B' : '#EF4444';
  return (
    <div className="relative flex flex-col items-center justify-center">
      <svg
        width="200"
        height="120"
        viewBox="0 0 200 120"
        className="overflow-visible"
      >
        <defs>
          <linearGradient
            id="gaugeGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <filter id="gaugeGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d={`M 20 110 A ${radius} ${radius} 0 0 1 180 110`}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <motion.path
          d={`M 20 110 A ${radius} ${radius} 0 0 1 180 110`}
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth="14"
          strokeLinecap="round"
          filter="url(#gaugeGlow)"
          strokeDasharray={circumference}
          initial={{
            strokeDashoffset: circumference
          }}
          animate={{
            strokeDashoffset: offset
          }}
          transition={{
            duration: 1.4,
            ease: 'easeOut'
          }}
        />
        {[0, 25, 50, 75, 100].map(t => {
          const angle = Math.PI - t / 100 * Math.PI;
          let x1, y1, x2, y2;
          if (t === 0) {
            x1 = 100 - radius - 5;
            y1 = 110;
            x2 = 100 - radius + 5;
            y2 = 110;
          } else if (t === 100) {
            x1 = 100 + radius - 5;
            y1 = 110;
            x2 = 100 + radius + 5;
            y2 = 110;
          } else {
            x1 = 100 + Math.cos(angle) * (radius - 5);
            y1 = 110 - Math.sin(angle) * (radius - 5);
            x2 = 100 + Math.cos(angle) * (radius + 5);
            y2 = 110 - Math.sin(angle) * (radius + 5);
          }
          return (
            <line
              key={t}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="2"
            />
          );
        })}
      </svg>
      <div className="absolute top-[50px] flex flex-col items-center">
        <motion.span
          initial={{
            scale: 0.5,
            opacity: 0
          }}
          animate={{
            scale: 1,
            opacity: 1
          }}
          transition={{
            delay: 0.6,
            type: 'spring'
          }}
          className="font-display text-4xl font-extrabold text-slate-900 leading-none"
          style={{
            textShadow: `0 0 24px ${gradeColor}80`
          }}
        >
          {score}
        </motion.span>
      </div>
      <div
        className="-mt-1 px-5 py-2 rounded-full border text-xs font-bold"
        style={{
          backgroundColor: `${gradeColor}12`,
          borderColor: `${gradeColor}25`,
          color: gradeColor
        }}
      >
        {grade}
      </div>
    </div>
  );
}

function StatCard({
  emoji,
  label,
  value,
  accent,
  sub,
  children,
  delay
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        delay,
        duration: 0.5
      }}
      whileHover={{
        y: -4
      }}
      className="glass-card rounded-2xl p-4 sm:p-5 relative overflow-hidden group border border-slate-200"
    >
      <div
        className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-30 transition-opacity group-hover:opacity-60"
        style={{
          backgroundColor: accent
        }}
      />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
            {label}
          </p>
          <p className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 leading-none">
            {value}
          </p>
          {sub && (
            <p
              className="text-[10px] font-bold mt-1.5"
              style={{
                color: accent
              }}
            >
              {sub}
            </p>
          )}
        </div>
        <div
          className="text-3xl sm:text-4xl"
          style={{
            filter: `drop-shadow(0 0 8px ${accent}80)`
          }}
        >
          {emoji}
        </div>
      </div>
      {children && (
        <div className="relative mt-3">
          {children}
        </div>
      )}
    </motion.div>
  );
}

function MiniRing({
  percent,
  color
}) {
  const r = 18;
  const c = 2 * Math.PI * r;
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      className="-rotate-90"
    >
      <circle
        cx="22"
        cy="22"
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="4"
      />
      <motion.circle
        cx="22"
        cy="22"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={c}
        initial={{
          strokeDashoffset: c
        }}
        animate={{
          strokeDashoffset: c - percent / 100 * c
        }}
        transition={{
          duration: 1,
          delay: 0.5
        }}
      />
    </svg>
  );
}

function ModuleCard({
  mod,
  index,
  isUnlocked,
  isActive,
  onClick
}) {
  const cardCount = getAllCardsForModule(mod.id).length;
  const {
    moduleProgress,
    completedModules
  } = useAppStore();
  const isCompleted = completedModules.includes(mod.id);
  const progressPercent = isCompleted ? 100 : Math.floor((moduleProgress[mod.id] || 0) / Math.max(cardCount - 1, 1) * 100);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        delay: index * 0.05,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={isUnlocked ? {
        y: -6,
        boxShadow: `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 25px ${mod.color}12`,
        borderColor: `${mod.color}40`
      } : undefined}
      className={`relative group cursor-pointer rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between h-full bg-gradient-to-b ${
        isUnlocked 
          ? 'from-white to-slate-50 border-slate-200 hover:border-slate-300' 
          : 'from-slate-100 to-slate-50 border-slate-200 grayscale opacity-45'
      } overflow-hidden`}
      onClick={isUnlocked ? onClick : undefined}
    >
      {isUnlocked && (
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[70px] opacity-15 group-hover:opacity-35 group-hover:scale-110 transition-all duration-500"
            style={{
              backgroundColor: mod.color
            }}
          />
          <div
            className="absolute -bottom-24 -left-24 w-36 h-36 rounded-full blur-[70px] opacity-5 group-hover:opacity-20 transition-all duration-500"
            style={{
              backgroundColor: mod.color
            }}
          />
        </div>
      )}
      <div className="flex flex-col h-full relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="relative">
            {isUnlocked && (
              <svg className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] -rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r="44%"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeOpacity="0.04"
                />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="44%"
                  fill="none"
                  stroke={mod.color}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  style={{
                    filter: `drop-shadow(0 0 4px ${mod.color}50)`
                  }}
                  initial={{
                    pathLength: 0
                  }}
                  animate={{
                    pathLength: progressPercent / 100
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.2
                  }}
                />
              </svg>
            )}
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 relative z-10 ${
                isUnlocked 
                   ? 'bg-slate-100 border border-slate-200 group-hover:scale-110 group-hover:border-slate-300' 
                   : 'bg-slate-50 border border-transparent'
              }`}
            >
              {isUnlocked ? mod.emoji : <Lock size={16} className="text-slate-400" />}
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            {isCompleted && (
              <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1">
                <CheckCircle2 size={10} className="text-emerald-400" />
                <span className="text-[9px] font-black text-emerald-400 uppercase tracking-wider">Done</span>
              </div>
            )}
            {isUnlocked && !isCompleted && progressPercent > 0 && (
              <div className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center gap-1">
                <span className="text-[9px] font-black text-amber-400 uppercase tracking-wider">{progressPercent}%</span>
              </div>
            )}
            {!isUnlocked && (
              <div className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 flex items-center gap-1">
                <Lock size={10} className="text-slate-400" />
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider">Locked</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 mt-2">
          <span
            className="text-[9px] font-black tracking-[0.25em] uppercase mb-1.5 block"
            style={{
              color: isUnlocked ? mod.color : '#64748B'
            }}
          >
            Module {mod.id}
          </span>
          <h3
            className={`font-display font-extrabold text-lg leading-snug mb-2 transition-colors duration-300 ${
              isUnlocked ? 'text-slate-900 group-hover:text-emerald-soft' : 'text-slate-300'
            }`}
          >
            {mod.title}
          </h3>
          <p
            className={`text-[12px] leading-relaxed line-clamp-3 transition-colors duration-300 ${
              isUnlocked ? 'text-slate-500 group-hover:text-slate-600' : 'text-slate-300'
            }`}
          >
            {mod.description}
          </p>
        </div>
        <div
          className={`mt-5 pt-4 border-t flex items-center justify-between transition-colors duration-300 ${
            isUnlocked ? 'border-slate-200 group-hover:border-slate-300' : 'border-slate-100'
          }`}
        >
          <div className="flex items-center gap-3.5 text-[11px] font-semibold text-slate-400">
            <span className="flex items-center gap-1.5 hover:text-slate-500 transition-colors">
              <BookOpen size={11} className="text-slate-400" /> {cardCount} Cards
            </span>
            <span className="flex items-center gap-1.5 hover:text-slate-500 transition-colors">
              <Clock size={11} className="text-slate-400" /> {cardCount * 2} min
            </span>
          </div>
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isUnlocked ? 'bg-slate-100 border border-slate-200 group-hover:bg-slate-200' : ''
            }`}
          >
            {isUnlocked ? (
              <ChevronRight size={16} className="text-slate-400 group-hover:text-slate-900 transition-colors" />
            ) : (
              <Lock size={14} className="text-slate-300" />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function buildActivityFeed(state) {
  const items = [];

  // Module completions
  Object.entries(state.moduleCompletionDates || {}).forEach(([modId, date]) => {
    const mod = modules.find(m => m.id === Number(modId));
    if (mod) items.push({
      id: `mod-${modId}`,
      icon: mod.emoji,
      text: `Module ${modId} complete kiya — "${mod.title}"`,
      time: date,
      color: mod.color
    });
  });
  if (state.healthCheckup?.completedAt) {
    items.push({
      id: 'health',
      icon: '🩺',
      text: `Financial checkup kiya — Score: ${state.healthCheckup.score}/100`,
      time: state.healthCheckup.completedAt,
      color: '#EC4899'
    });
  }
  state.goals.slice(-2).reverse().forEach(g => {
    items.push({
      id: `goal-${g.id}`,
      icon: g.emoji,
      text: `Naya goal set kiya — "${g.name}"`,
      time: g.createdAt,
      color: '#10B981'
    });
  });
  if (state.totalSpins > 0) {
    items.push({
      id: 'spin',
      icon: '🎡',
      text: `${state.totalSpins} baar spin kiya, ${state.spinWinnings} coins jeete`,
      time: new Date().toISOString().split('T')[0],
      color: '#F59E0B'
    });
  }
  if (state.savingsChallenge?.isActive) {
    items.push({
      id: 'savings-challenge',
      icon: '🔥',
      text: `Bachat challenge Day ${state.savingsChallenge.days.filter(d => d.saved).length}/${state.savingsChallenge.days.length} pe chal raha hai`,
      time: state.savingsChallenge.startDate,
      color: '#EF4444'
    });
  }
  return items.sort((a, b) => b.time.localeCompare(a.time)).slice(0, 5);
}

function RecentActivity() {
  const state = useAppStore();
  const items = useMemo(() => buildActivityFeed(state), [state]);
  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-2 opacity-40">📬</div>
        <p className="text-sm text-slate-400">Abhi koi activity nahi. Tools try karo aur yahan dikhao! 🚀</p>
      </div>
    );
  }
  return (
    <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.06 }}
          className="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-200 p-3 hover:bg-slate-100 transition-colors"
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
            style={{
              backgroundColor: `${item.color}20`,
              border: `1px solid ${item.color}30`
            }}
          >
            {item.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-slate-900 truncate">{item.text}</p>
            <p className="text-[10px] text-slate-400 mt-0.5">{item.time}</p>
          </div>
          <ChevronRight size={14} className="text-slate-400 flex-shrink-0" />
        </motion.div>
      ))}
    </div>
  );
}

export default function HomePage() {
  const hydrated = useHydration();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Zustand Store variables
  const {
    user,
    isAuthenticated,
    coins,
    streak,
    completedModules,
    moduleProgress,
    badges,
    earnedBadges,
    xp,
    level,
    activityLog,
    quizScores,
    masteredTerms,
    financialAge,
    savingsChallenge,
    setUser,
    addCoins,
    addXP,
    logActivity
  } = useAppStore();

  // App Layout State
  const params = useParams();
  const activeTab = params?.tab || 'dashboard';
  const setActiveTab = (tab) => {
    router.push(`/home/${tab}`);
  };
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  // Tools dialog and strategy state
  const [openTool, setOpenTool] = useState(null);
  const [activeStrategySlug, setActiveStrategySlug] = useState(null);
  const [showShareModal, setShowShareModal] = useState(false);

  // History state
  const [historyFilter, setHistoryFilter] = useState('all');
  const [historySort, setHistorySort] = useState('newest');

  const filteredAndGroupedHistory = useMemo(() => {
    const filtered = activityLog.filter(act => 
      (historyFilter === 'all' || act.type === historyFilter) && 
      act.description !== 'Theme toggle clicked'
    );
    const sorted = [...filtered].sort((a, b) => historySort === 'newest' ? b.timestamp - a.timestamp : a.timestamp - b.timestamp);
    
    return sorted.reduce((acc, act) => {
      const dateObj = new Date(act.timestamp);
      const today = new Date();
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      
      let dateKey = dateObj.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
      if (dateObj.toDateString() === today.toDateString()) dateKey = 'Today';
      else if (dateObj.toDateString() === yesterday.toDateString()) dateKey = 'Yesterday';

      if (!acc[dateKey]) acc[dateKey] = [];
      acc[dateKey].push(act);
      return acc;
    }, {});
  }, [activityLog, historyFilter, historySort]);

  const [sipAmount, setSipAmount] = useState(2000);
  const [sipYears, setSipYears] = useState(15);
  const [inflationYears, setInflationYears] = useState(5);
  const [emergencyExpenses, setEmergencyExpenses] = useState(15000);
  const [emergencyJob, setEmergencyJob] = useState('stable'); // stable (3x), business (6x), freelance (9x)
  const [ccBill, setCcBill] = useState(20000);
  const [ccPaymentMode, setCcPaymentMode] = useState('min'); // min vs full
  const [passiveCapital, setPassiveCapital] = useState(10000);

  // Chatbot state
  const [chatMessages, setChatMessages] = useState([
    {
      role: 'assistant',
      content: 'Namaste! Main hoon Paisa Buddy 🦊 - aapka personal AI financial advisor. Aaj aap kya seekhna chahenge? Niche diye gaye topics pe click karein ya apna sawaal likhein!',
      timestamp: Date.now()
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);
  // Auth/Hydration guards
  useEffect(() => {
    if (hydrated && !isAuthenticated) {
      router.replace('/');
    }
  }, [hydrated, isAuthenticated, router]);

  // Set active tab from query param if provided
  useEffect(() => {
    const tab = searchParams?.get('tab');
    if (tab && ['dashboard', 'chatbot', 'gamified', 'tools', 'profile', 'bookmarks', 'history'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  // Quote rotation
  useEffect(() => {
    const qInterval = setInterval(() => {
      setCurrentQuoteIndex(prev => (prev + 1) % QUOTES.length);
    }, 5000);
    return () => clearInterval(qInterval);
  }, []);

  // Scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isTyping]);


  const userGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return 'Subah ki shubhkamnayein';
    if (hours < 17) return 'Namaste';
    return 'Shubh Sandhya';
  };

  const totalCards = modules.reduce((acc, m) => acc + getAllCardsForModule(m.id).length, 0);
  const completedCards = Object.values(moduleProgress).reduce((a, b) => a + b, 0);
  const overallProgress = totalCards ? Math.min(100, Math.round((completedCards / totalCards) * 100)) : 0;

  const healthScore = Math.min(100, Math.round(
    (completedModules.length / modules.length) * 45 +
    (overallProgress / 100) * 30 +
    (coins / 1000) * 15 +
    (streak / 30) * 10
  ));

  // AI Chat Bot Handlers
  const handleSendMessage = async (textToSend) => {
    const text = textToSend || chatInput;
    if (!text.trim() || isTyping) return;

    const userMsg = {
      role: 'user',
      content: text.trim(),
      timestamp: Date.now()
    };

    setChatMessages(prev => [...prev, userMsg]);
    setChatInput('');
    setIsTyping(true);

    try {
      const recent = chatMessages.slice(-5).map(m => ({ role: m.role, content: m.content }));
      const response = await fetch('/api/finance-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text.trim(),
          context: { coins, completedModules, streak, masteredTerms, userName: user?.displayName, recentMessages: recent }
        })
      });

      const data = await response.json();
      if (data.reply) {
        setChatMessages(prev => [...prev, { role: 'assistant', content: data.reply, timestamp: Date.now() }]);
      } else {
        throw new Error();
      }
    } catch {
      // Offline fallback generator
      const reply = getHinglishFallbackReply(text.trim());
      setTimeout(() => {
        setChatMessages(prev => [...prev, { role: 'assistant', content: reply, timestamp: Date.now() }]);
      }, 1200);
    } finally {
      setIsTyping(false);
      addXP(5);
    }
  };

  const getHinglishFallbackReply = (text) => {
    const query = text.toLowerCase();
    if (query.includes('sip') || query.includes('invest')) {
      return "Suno bhai! SIP (Systematic Investment Plan) compounding ka sabse badhiya shortcut hai. Aap har mahine ₹500 ya ₹1000 se start kar sakte ho. Isse 'Rupee Cost Averaging' milti hai - jab market gire tab zyada units, jab badhe tab kam! Aapko start krna chahiye equity index funds se. Kaisa laga advice? 📈";
    }
    if (query.includes('budget') || query.includes('kharcha')) {
      return "Budget banana mushkil nahi hai boss! Ek simple rule follow karo: 50/30/20 Rule. 50% income Needs pe (rent, bill, groceries), 30% Wants pe (outside food, movies, shopping), aur 20% direct Savings & Investing mein. Auto-debit shuru kar do taaki saving automatic ho jaye. 🧾";
    }
    if (query.includes('emergency') || query.includes('fund') || query.includes('survival')) {
      return "Emergency fund ka standard rule hai: 3-6-9 Rule. Stable job walo ke liye 3 mahine ka expense, business/EMI walo ke liye 6 mahine ka, aur freelancers/irregular earnings walo ke liye 9 mahine ka expense liquid account mein backup hona chahiye! Taaki mobile broke ho ya job loss ho, udhaar na lena pade. 🛡️";
    }
    if (query.includes('credit') || query.includes('card') || query.includes('trap')) {
      return "Credit card ek do-dhaari talwar hai. Agar full payment karoge time pe, toh reward points aur credit score badhega. Lekin agar sirf 'Minimum Due' pay karoge toh 36-48% yearly interest lagta hai! Bank isi se kamaate hain. Is trap se bachein. 💳";
    }
    if (query.includes('inflation') || query.includes('mehangai')) {
      return "Inflation (mehangai) ek silent chor hai! Agar inflation 6% hai, toh aaj ka ₹100 agle saal sirf ₹94 ki cheezein khareed payega. Iska matlab safe savings account (jo 3% interest deta hai) mein rakhne se aapka paisa ghis raha hai! Aapko inflation ko beat krne ke liye mutual funds/stocks mein invest krna hoga. 🥷";
    }
    return `Aapne pucha: "${text}". Ye sach mein ek solid financial sawaal hai. Money Matters app ke learning modules ko padhein, aur visual strategy simulators ko use karein (jaise 'Paise ka GPS' ya 'Debt Doors') jo Tools menu mein hain, isse aapko deep practical understanding milegi! Kuch aur poochna hai Paisa Buddy se? 🦊`;
  };

  // Calculations derived
  const sipResult = useMemo(() => {
    const rate = 0.12 / 12;
    const months = sipYears * 12;
    const invested = sipAmount * months;
    let total = 0;
    for (let i = 0; i < months; i++) {
      total = (total + sipAmount) * (1 + rate);
    }
    return {
      invested,
      wealth: Math.round(total),
      gain: Math.max(0, Math.round(total - invested))
    };
  }, [sipAmount, sipYears]);

  const inflationResult = useMemo(() => {
    const rate = 0.06;
    const original = 10000;
    const value = Math.round(original / Math.pow(1 + rate, inflationYears));
    return {
      loss: original - value,
      value
    };
  }, [inflationYears]);

  const emergencyResult = useMemo(() => {
    const multiplier = emergencyJob === 'stable' ? 3 : emergencyJob === 'business' ? 6 : 9;
    return emergencyExpenses * multiplier;
  }, [emergencyExpenses, emergencyJob]);

  const ccResult = useMemo(() => {
    const interestRate = 0.035; // 3.5% monthly
    const minPercent = 0.05; // 5%
    let balance = ccBill;
    let months = 0;
    let totalPaid = 0;

    if (ccPaymentMode === 'full') {
      return { months: 1, totalPaid: ccBill, interest: 0 };
    }

    while (balance > 100 && months < 300) {
      const minPayment = Math.max(balance * minPercent, 500);
      const interest = balance * interestRate;
      totalPaid += minPayment;
      balance = balance + interest - minPayment;
      months++;
    }

    return {
      months,
      totalPaid: Math.round(totalPaid),
      interest: Math.round(Math.max(0, totalPaid - ccBill))
    };
  }, [ccBill, ccPaymentMode]);

  // Sidebar components links
  const sideLinks = [
    { id: 'dashboard', label: 'Dashboard', Icon: LayoutDashboard },
    { id: 'goals', label: 'Your Goals', Icon: Target },
    { id: 'chatbot', label: 'AI Chat Bot', Icon: MessageSquare },
    { id: 'gamified', label: 'Gamified Concept', Icon: Trophy },
    { id: 'tools', label: 'Learning Tools', Icon: Wrench },
    { id: 'history', label: 'Learning History', Icon: Clock },
    { id: 'profile', label: 'Profile', Icon: User }
  ];
  if (!hydrated || !isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-emerald-500/30 border-t-emerald-500 animate-spin" />
          <p className="text-slate-500 text-sm">Loading Money Matters...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden font-sans">
      {/* Background ambient glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-emerald-500/[0.02] blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-indigo-500/[0.02] blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.01]" style={{ backgroundImage: 'radial-gradient(circle, #000000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      </div>

      {/* Responsive layout container */}
      <div className="relative z-10 flex min-h-screen">
        
        {/* ── DESKTOP SIDEBAR (Instagram Style) ── */}
        <aside 
          onMouseEnter={() => setIsSidebarHovered(true)} 
          onMouseLeave={() => { setIsSidebarHovered(false); setShowMoreMenu(false); }}
          className={`hidden md:flex flex-col fixed inset-y-0 left-0 bg-white/90 backdrop-blur-xl border-r border-slate-200 p-5 z-40 transition-all duration-300 ease-in-out ${
            isSidebarHovered ? 'w-64 lg:w-72 shadow-2xl border-slate-300' : 'w-20'
          }`}
        >
          {/* Logo & Brand Name */}
          <Link href="/home" className={`flex items-center mb-8 px-2 group transition-all ${isSidebarHovered ? 'gap-3' : 'justify-center px-0'}`}>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform overflow-hidden">
              <img src="/logo.png" alt="Logo" className="h-full w-full object-cover" />
            </div>
            {isSidebarHovered && (
              <span className="text-xl font-bold font-display tracking-tight text-slate-900 whitespace-nowrap animate-fade-in">
                Money<span className="text-emerald-400"> Matters</span>
              </span>
            )}
          </Link>

          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col justify-center space-y-2">
            {sideLinks.map(link => {
              const Icon = link.Icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => { setActiveTab(link.id); setShowMoreMenu(false); }}
                  className={`w-full flex items-center rounded-xl text-left text-sm font-semibold transition-all duration-200 ${
                    isSidebarHovered ? 'justify-start gap-4 px-4 py-3' : 'justify-center p-3'
                  } ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-500/10 to-indigo-500/5 text-emerald-400 border border-emerald-500/20'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-transparent'
                  }`}
                  title={!isSidebarHovered ? link.label : undefined}
                >
                  <Icon size={20} className={`shrink-0 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
                  {isSidebarHovered && <span className="truncate whitespace-nowrap">{link.label}</span>}
                </button>
              );
            })}
          </nav>

          {/* Bottom "More" Button & Popover */}
          <div className="relative mt-auto">
            <AnimatePresence>
              {showMoreMenu && isSidebarHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="absolute bottom-12 left-0 w-full bg-white border border-slate-200 rounded-2xl p-2.5 shadow-2xl z-50 space-y-1"
                >
                  {/* Theme Toggle option */}
                  <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors">
                    <span className="text-xs font-semibold">Theme</span>
                    <button
                      className="flex items-center gap-1.5 p-1 rounded-md bg-slate-100 border border-slate-200"
                    >
                      <Moon size={14} className="text-emerald-400" />
                      <span className="text-[10px] uppercase font-bold text-slate-500">Dark</span>
                    </button>
                  </div>

                  {/* Bookmarks view link */}
                  <button
                    onClick={() => { setActiveTab('bookmarks'); setShowMoreMenu(false); }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-xs font-semibold text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  >
                    <Bookmark size={15} />
                    Bookmarks
                  </button>

                 </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setShowMoreMenu(!showMoreMenu)}
              className={`w-full flex items-center rounded-xl text-left text-sm font-semibold text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200 ${
                isSidebarHovered ? 'justify-start gap-4 px-4 py-3' : 'justify-center p-3'
              }`}
              title={!isSidebarHovered ? "More" : undefined}
            >
              <Menu size={20} className="shrink-0" />
              {isSidebarHovered && <span>More</span>}
            </button>
          </div>
        </aside>

        {/* ── MOBILE TOP HEADER ── */}
        <header className="md:hidden fixed top-0 inset-x-0 h-16 bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 flex items-center justify-between z-40">
          <Link href="/home" className="flex items-center gap-2 group">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-md overflow-hidden">
              <img src="/logo.png" alt="Logo" className="h-full w-full object-cover" />
            </div>
            <span className="text-base font-bold font-display tracking-tight text-slate-900">
              Money<span className="text-emerald-400"> Matters</span>
            </span>
          </Link>

          {/* Quick Header Indicators */}
          <div className="flex items-center gap-2">
            {/* Coins */}
            <div className="flex items-center gap-1 rounded-full bg-amber-400/10 border border-amber-400/20 px-2.5 py-1">
              <Coins size={12} className="text-amber-400" />
              <span className="font-bold text-amber-400 text-xs">{coins}</span>
            </div>

            {/* Streak */}
            <div className="flex items-center gap-1 rounded-full bg-orange-500/10 border border-orange-500/20 px-2.5 py-1">
              <Flame size={12} className="text-orange-400" />
              <span className="font-bold text-orange-400 text-xs">{streak}d</span>
            </div>

            </div>
        </header>

        {/* ── MOBILE BOTTOM NAVIGATION ── */}
        <nav className="md:hidden fixed bottom-0 inset-x-0 h-16 bg-white/95 backdrop-blur-xl border-t border-slate-200 grid grid-cols-8 items-center justify-center z-40">
          {sideLinks.map(link => {
            const Icon = link.Icon;
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => { setActiveTab(link.id); setShowMoreMenu(false); }}
                className="flex flex-col items-center justify-center h-full text-slate-500 relative"
              >
                <Icon size={20} className={isActive ? 'text-emerald-400 scale-110' : 'text-slate-500 hover:text-slate-900'} />
                {isActive && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute bottom-1 w-1 h-1 rounded-full bg-emerald-400"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* ── MAIN CONTENT AREA ── */}
        <div className={`flex-1 flex flex-col min-w-0 pb-16 md:pb-0 transition-all duration-300 ease-in-out ${
          isSidebarHovered ? 'md:ml-64 lg:ml-72' : 'md:ml-20'
        }`}>
          
          {/* Desktop Top Header Bar */}
          <header className="hidden md:flex h-16 items-center justify-between px-6 border-b border-slate-200 bg-white/50 backdrop-blur-md sticky top-0 z-30">
            <div>
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-400">
                {activeTab === 'dashboard' ? 'Home' : activeTab}
              </h2>
            </div>

            {/* Top Bar Controls */}
            <div className="flex items-center gap-4">
              {/* Coins Tracker */}
              <div className="flex items-center gap-2 rounded-xl bg-amber-400/10 border border-amber-400/20 px-3.5 py-1.5 border-b-2 shadow-sm shadow-amber-400/5">
                <span className="font-extrabold text-amber-400 text-sm leading-none mr-0.5">₹</span>
                <span className="font-bold text-amber-400 text-sm tabular-nums">{coins}</span>
              </div>

              {/* Streak Tracker */}
              <div className="flex items-center gap-2 rounded-xl bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 border-b-2 shadow-sm shadow-orange-500/5">
                <Flame size={14} className="text-orange-400" />
                <span className="font-bold text-orange-400 text-xs">
                  {streak} Days
                </span>
              </div>

              {/* User Greeting/Avatar */}
              <div className="flex items-center gap-2.5 border-l border-slate-200 pl-4">
                <span className="text-xs font-semibold text-slate-600">
                  {user?.displayName?.split(' ')[0] || 'User'}
                </span>
                <button
                  onClick={() => setActiveTab('profile')}
                  className="h-8 w-8 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-sm"
                >
                  🦊
                </button>
              </div>
            </div>
          </header>

          {/* Main scrollable body */}
          <div className="flex-1 overflow-y-auto px-4 py-6 md:p-8 mt-16 md:mt-0">
            <AnimatePresence mode="wait">
              
              {/* ══════════════════════════════════════════════════════════════
                  TAB: DASHBOARD
                  ══════════════════════════════════════════════════════════════ */}
              {activeTab === 'dashboard' && (
                <motion.div
                  key="dashboard"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6 max-w-6xl mx-auto"
                >
                  {/* Hero Greeting Panel */}
                  <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 glass-card-premium p-6 sm:p-8">
                    <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-emerald/10 blur-3xl pointer-events-none" />
                    <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                      <div className="flex-1">
                        <p className="text-xs font-bold text-emerald-soft uppercase tracking-widest mb-2">
                          {userGreeting()} 👋
                        </p>
                        <h1 className="font-display text-3xl sm:text-4xl font-extrabold heading-gradient mb-2">
                          Kya haal hai, {user?.displayName?.split(' ')[0] ?? 'Champion'}! 🔥
                        </h1>
                        <AnimatePresence mode="wait">
                          <motion.p
                            key={currentQuoteIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="text-sm text-slate-500 font-medium"
                          >
                            "{QUOTES[currentQuoteIndex]}"
                          </motion.p>
                        </AnimatePresence>
                      </div>
                      <div className="glass-card rounded-2xl p-4 flex-shrink-0">
                        <HealthScoreGauge score={healthScore} />
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    <StatCard
                      delay={0.05}
                      emoji={
                        <div
                          className="coin-spin-3d w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-yellow-600 flex items-center justify-center shadow-[0_4px_10px_rgba(245,158,11,0.4),_inset_0_2px_4px_rgba(255,255,255,0.4),_inset_0_-2px_4px_rgba(0,0,0,0.4)] border border-amber-400/30"
                          style={{
                            transformStyle: 'preserve-3d',
                            filter: 'drop-shadow(0 0 8px rgba(245,158,11,0.6))'
                          }}
                        >
                          <IndianRupee
                            size={20}
                            className="text-slate-900 font-extrabold drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]"
                            style={{
                              transform: 'translateZ(4px)'
                            }}
                          />
                        </div>
                      }
                      label="Total Coins"
                      value={<AnimatedCounter target={coins} />}
                      accent="#F59E0B"
                      sub={coins >= 500 ? 'Big saver energy 💰' : 'Aur kamao! 🚀'}
                    />
                    <StatCard
                      delay={0.12}
                      emoji={
                        <motion.span
                          animate={{ scale: [1, 1.15, 1], y: [0, -4, 0] }}
                          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                          className="inline-block"
                        >
                          🔥
                        </motion.span>
                      }
                      label="Streak"
                      value={`${streak} din`}
                      accent="#EF4444"
                      sub={streak > 0 ? 'Lagatar jaari rakho! 💪' : 'Aaj shuru karo!'}
                    />
                    <StatCard
                      delay={0.19}
                      emoji={
                        <motion.span
                          animate={{ rotate: [0, -5, 5, 0], y: [0, -2, 0] }}
                          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                          className="inline-block"
                        >
                          📚
                        </motion.span>
                      }
                      label="Modules"
                      value={`${completedModules.length}/${modules.length}`}
                      accent="#10B981"
                      sub={`${overallProgress}% overall`}
                    />
                    <StatCard
                      delay={0.26}
                      emoji={
                        <motion.span
                          animate={{ scale: [1, 1.12, 1], rotate: [0, -3, 3, 0] }}
                          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                          className="inline-block"
                        >
                          🏆
                        </motion.span>
                      }
                      label="Badges"
                      value={badges.length}
                      accent="#8B5CF6"
                      sub={badges.length > 0 ? 'Trophy case bharte ja! ⭐' : 'Pehla badge kamao!'}
                    />
                  </div>

                  {/* Continue Learning Spot */}
                  {(() => {
                    const activeModuleIndex = modules.findIndex(m => !completedModules.includes(m.id));
                    const activeModule = activeModuleIndex >= 0 ? modules[activeModuleIndex] : null;
                    const activeCardCount = activeModule ? getAllCardsForModule(activeModule.id).length : 0;
                    const activeProgress = activeModule ? Math.round((moduleProgress[activeModule.id] || 0) / Math.max(activeCardCount - 1, 1) * 100) : 0;

                    if (!activeModule) return null;

                    return (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative overflow-hidden rounded-2xl border border-emerald/20 glass-card-glow p-5 sm:p-6 spotlight-card"
                      >
                        <div
                          className="absolute -top-12 -left-12 w-40 h-40 rounded-full blur-3xl opacity-30"
                          style={{
                            backgroundColor: activeModule.color
                          }}
                        />
                        <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4">
                          <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-lg"
                            style={{
                              backgroundColor: `${activeModule.color}25`,
                              border: `1px solid ${activeModule.color}40`
                            }}
                          >
                            {activeModule.emoji}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[10px] font-black text-emerald-soft uppercase tracking-widest mb-1">
                              Continue Learning
                            </p>
                            <h3 className="font-display text-lg font-bold text-slate-900 mb-1 truncate">
                              {activeModule.title}
                            </h3>
                            <div className="flex items-center gap-3">
                              <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden max-w-xs">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${activeProgress}%` }}
                                  transition={{ duration: 1, delay: 0.4 }}
                                  className="h-full rounded-full"
                                  style={{
                                    background: `linear-gradient(90deg, ${activeModule.color}, #34D399)`
                                  }}
                                />
                              </div>
                              <span className="text-xs font-bold text-slate-900">
                                {activeProgress}%
                              </span>
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            onClick={() => router.push(`/dashboard/module/${activeModule.id}`)}
                            className="btn-3d rounded-xl px-5 py-3 font-bold text-sm text-midnight whitespace-nowrap flex items-center gap-2 cursor-pointer"
                            style={{
                              background: 'linear-gradient(135deg, #34D399, #10B981 60%, #047857)'
                            }}
                          >
                            Aage Badho <ArrowRight size={16} />
                          </motion.button>
                        </div>
                      </motion.div>
                    );
                  })()}

                  {/* Quick Access */}
                  <div className="space-y-3">
                    <h2 className="font-display text-lg font-bold text-slate-900 flex items-center gap-2">
                      <Zap size={18} className="text-amber-400" /> Quick Access
                    </h2>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
                      {QUICK_TOOLS.map((tool, i) => (
                        <motion.button
                          key={tool.id}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + i * 0.04 }}
                          whileHover={{ y: -4, scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            if (['goals', 'expense', 'savings', 'quiz', 'spin'].includes(tool.id)) {
                              setOpenTool(tool.id);
                            } else {
                              setActiveTab('tools');
                            }
                          }}
                          className="card-3d glass-card rounded-2xl p-3 sm:p-4 flex flex-col items-center gap-2 group cursor-pointer border border-slate-200 w-full"
                        >
                          <div
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl transition-transform group-hover:scale-110"
                            style={{
                              backgroundColor: `${tool.color}20`,
                              border: `1px solid ${tool.color}30`
                            }}
                          >
                            {tool.emoji}
                          </div>
                          <span className="text-[11px] sm:text-xs font-bold text-slate-900">
                            {tool.label}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Learning Journey Map */}
                  <div className="space-y-4 pt-4">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
                      <div>
                        <h2 className="font-display text-2xl font-extrabold text-slate-900 tracking-tight">
                          Financial Journey Map 🗺️
                        </h2>
                        <p className="text-sm text-slate-500 mt-1 max-w-xl">
                          Step-by-step personal finance seekho. Har module complete karo aur naya level unlock karo! 🚀
                        </p>
                      </div>
                      <div className="px-4 py-2 rounded-full bg-slate-100 border border-slate-200 flex items-center gap-2 w-fit">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                          {completedModules.length} of {modules.length} Completed
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {modules.map((mod, i) => {
                        const isUnlocked = i === 0 || completedModules.includes(modules[i - 1]?.id);
                        const activeModuleIndex = modules.findIndex(m => !completedModules.includes(m.id));
                        const isActive = i === activeModuleIndex;
                        return (
                          <ModuleCard
                            key={mod.id}
                            mod={mod}
                            index={i}
                            isUnlocked={isUnlocked}
                            isActive={isActive}
                            onClick={() => router.push(`/dashboard/module/${mod.id}`)}
                          />
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ══════════════════════════════════════════════════════════════
                  TAB: LEARNING HISTORY
                  ══════════════════════════════════════════════════════════════ */}
              {activeTab === 'history' && (
                <motion.div
                  key="history"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6 max-w-4xl mx-auto"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h1 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2.5">
                        <Clock className="text-emerald-400" size={24} /> Learning History
                      </h1>
                      <p className="text-sm text-slate-500 mt-1">Aapne ab tak jo bhi seekha aur earn kiya hai, sab yahan hai!</p>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3">
                      {/* Filter Dropdown */}
                      <div className="relative group">
                        <select 
                          value={historyFilter}
                          onChange={(e) => setHistoryFilter(e.target.value)}
                          className="appearance-none bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-600 font-medium focus:outline-none focus:border-emerald-500/50 cursor-pointer pr-10"
                        >
                          <option value="all">All Activities</option>
                          <option value="module_section">Modules</option>
                          <option value="strategy">Tools & Strategies</option>
                          <option value="general">General</option>
                        </select>
                        <Filter size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      </div>

                      {/* Sort Dropdown */}
                      <div className="relative group">
                        <select 
                          value={historySort}
                          onChange={(e) => setHistorySort(e.target.value)}
                          className="appearance-none bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-600 font-medium focus:outline-none focus:border-emerald-500/50 cursor-pointer pr-10"
                        >
                          <option value="newest">Newest First</option>
                          <option value="oldest">Oldest First</option>
                        </select>
                        <ArrowDownUp size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      </div>
                      
                      <div className="flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 shrink-0">
                        <span className="text-xs font-bold text-emerald-400">Total: {activityLog.length}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-xl">
                    {Object.keys(filteredAndGroupedHistory).length === 0 ? (
                      <div className="text-center py-16 space-y-4">
                        <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto">
                          <Clock size={28} className="text-slate-400" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-base font-bold text-slate-600">Koi history nahi hai abhi</p>
                          <p className="text-xs text-slate-400 max-w-xs mx-auto">Modules complete karein aur calculators use karein apni history build karne ke liye! 🚀</p>
                        </div>
                        <button 
                          onClick={() => { setHistoryFilter('all'); setHistorySort('newest'); setActiveTab('dashboard'); }}
                          className="btn-emerald px-5 py-2.5 rounded-xl text-xs font-bold cursor-pointer"
                        >
                          Start Learning Now
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-6 max-h-[65vh] overflow-y-auto pr-2 custom-scrollbar">
                        {Object.entries(filteredAndGroupedHistory).map(([date, acts]) => (
                          <div key={date} className="space-y-3">
                            {/* Date Header */}
                            <div className="flex items-center gap-3">
                              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{date}</span>
                              <div className="h-px flex-1 bg-slate-200" />
                            </div>
                            
                            {/* Activities */}
                            <div className="space-y-2">
                              {acts.map(act => (
                                <div key={act.id} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all border border-slate-200 hover:border-emerald-500/20 group">
                                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 group-hover:bg-emerald-500/10 transition-colors text-xl">
                                    {ACTIVITY_EMOJI[act.type] || '✨'}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-slate-700 leading-snug">{act.description}</p>
                                    <div className="flex items-center gap-2 mt-1">
                                      <span className="text-xs text-slate-400">
                                        {new Date(act.timestamp).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                                      </span>
                                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                                      <span className="text-[10px] font-medium text-emerald-500/70 capitalize">
                                        {act.type.replace('_', ' ')}
                                      </span>
                                    </div>
                                  </div>
                                  {act.coins > 0 && (
                                    <div className="flex items-center gap-1 rounded-full bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 shrink-0">
                                      <span className="text-xs font-black text-amber-400">+{act.coins}</span>
                                      <Coins size={10} className="text-amber-400" />
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* ══════════════════════════════════════════════════════════════
                  TAB: AI CHAT BOT ("Paisa Buddy")
                  ══════════════════════════════════════════════════════════════ */}
              {activeTab === 'chatbot' && (
                <motion.div
                  key="chatbot"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="flex flex-col lg:flex-row gap-5 max-w-5xl mx-auto h-[calc(100vh-10rem)] md:h-[calc(100vh-6rem)]"
                >
                  {/* Left Side Info Panel (desktop only) */}
                  <div className="hidden lg:flex flex-col w-72 bg-white border border-slate-200 p-5 rounded-3xl justify-between shrink-0">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                          <Sparkles size={20} className="text-[#0a0a0f]" />
                        </div>
                        <div>
                          <h4 className="text-sm font-black text-gradient-gold leading-none">Paisa Buddy</h4>
                          <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1 mt-1">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" /> Online Now
                          </span>
                        </div>
                      </div>

                      <p className="text-slate-500 text-xs leading-relaxed">
                        Aapka personal AI financial advisor. Hinglish mein sawaal pucho aur dynamic investment, budgeting, ya debt tips pao!
                      </p>

                      <div className="h-px bg-slate-100" />

                      <div className="space-y-2">
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Learning Tips</span>
                        <div className="text-[11px] text-slate-500 leading-snug bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                          Active learning se coins earn karein. Har dynamic chat pe +5 XP milta hai!
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setChatMessages([{ role: 'assistant', content: 'Namaste! Paisa Buddy reset ho gaya. Poocho apna sawaal!', timestamp: Date.now() }])}
                      className="flex items-center justify-center gap-2 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold hover:bg-red-500/15 transition-colors"
                    >
                      Clear Chat History
                    </button>
                  </div>

                  {/* Main Chat Conversation Container */}
                  <div className="flex-1 bg-white border border-slate-200 rounded-3xl flex flex-col overflow-hidden">
                    {/* Header */}
                    <div className="px-5 py-3.5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center lg:hidden">
                          <Sparkles size={16} className="text-[#0a0a0f]" />
                        </div>
                        <h3 className="text-sm font-extrabold text-slate-900">Chat Room: Paisa Buddy</h3>
                      </div>
                    </div>

                    {/* Chat Messages Log */}
                    <div className="flex-1 overflow-y-auto p-5 space-y-4 max-h-[60vh] lg:max-h-none">
                      {chatMessages.map((msg, index) => {
                        const isAI = msg.role === 'assistant';
                        return (
                          <div key={index} className={`flex ${isAI ? 'justify-start' : 'justify-end'}`}>
                            <div className={`max-w-[85%] sm:max-w-[75%] p-4 rounded-2xl text-xs leading-relaxed text-left border ${
                              isAI
                                ? 'bg-slate-50 border-slate-200 text-slate-700 rounded-tl-none'
                                : 'bg-emerald-500/10 border-emerald-500/25 text-emerald-700 rounded-tr-none shadow-md shadow-emerald-500/[0.02]'
                            }`}>
                              <p className="whitespace-pre-wrap">{msg.content}</p>
                              <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider block mt-1.5 text-right">
                                {new Date(msg.timestamp).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                              </span>
                            </div>
                          </div>
                        );
                      })}

                      {/* Typing indicator */}
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="bg-slate-50 border border-slate-200 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce" />
                            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                          </div>
                        </div>
                      )}
                      <div ref={chatEndRef} />
                    </div>

                    {/* Quick prompt chips */}
                    <div className="px-5 pb-2">
                      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                        {QUICK_QUESTIONS.map(q => (
                          <button
                            key={q}
                            onClick={() => handleSendMessage(q)}
                            className="shrink-0 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 hover:bg-slate-200 text-[10px] font-bold text-slate-600 transition-colors"
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Chat Input form */}
                    <form
                      onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
                      className="p-4 border-t border-slate-200 bg-slate-50/50 flex gap-2.5 items-center"
                    >
                      <input
                        type="text"
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        placeholder="Apna financial sawaal Hinglish mein likhein..."
                        disabled={isTyping}
                        className="flex-1 bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-emerald-500/40 disabled:opacity-50 transition-colors text-slate-900"
                      />
                      <button
                        type="submit"
                        disabled={!chatInput.trim() || isTyping}
                        className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-black flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-emerald-500/20 transition-all cursor-pointer"
                      >
                        <Send size={15} />
                      </button>
                    </form>
                  </div>
                </motion.div>
              )}

              {/* ══════════════════════════════════════════════════════════════
                  TAB: GAMIFIED CONCEPTS
                  ══════════════════════════════════════════════════════════════ */}
              {activeTab === 'gamified' && (
                <motion.div
                  key="gamified"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-6 max-w-5xl mx-auto text-left"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Game selectors */}
                    <div className="lg:col-span-2 space-y-6">
                      
                      {/* Spin the Wheel card */}
                      <div className="bg-white border border-slate-200 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between h-56">
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
                        <div>
                          <span className="text-[10px] font-black tracking-widest text-red-400 uppercase">Daily Reward</span>
                          <h3 className="text-xl font-extrabold text-slate-900 mt-1">Spin the Wheel of Fortune</h3>
                          <p className="text-slate-500 text-xs mt-1 max-w-sm">
                            Apni kismat aazmao aur har 24 ghante mein free gold coins jeeto. Coins ko tools unlock karne ke liye use karo!
                          </p>
                        </div>
                        <button
                          onClick={() => setOpenTool('spin')}
                          className="self-start px-5 py-2.5 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 text-white text-xs font-bold hover:shadow-lg hover:shadow-red-500/20 transition-all cursor-pointer uppercase flex items-center gap-1.5"
                        >
                          Spin Karo 🎡
                        </button>
                      </div>

                      {/* Memory Match Card */}
                      <div className="bg-white border border-slate-200 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between h-56">
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                        <div>
                          <span className="text-[10px] font-black tracking-widest text-purple-400 uppercase">Minigame</span>
                          <h3 className="text-xl font-extrabold text-slate-900 mt-1">Finance Terms Memory Match</h3>
                          <p className="text-slate-500 text-xs mt-1 max-w-sm">
                            SIP, Inflation, Debt trap, Dividend aur PPF jaise concepts ko match karein aur memory power badhayein. Earn +80 XP on win!
                          </p>
                        </div>
                        <button
                          onClick={() => setOpenTool('memory')}
                          className="self-start px-5 py-2.5 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 text-white text-xs font-bold hover:shadow-lg hover:shadow-purple-500/20 transition-all cursor-pointer uppercase flex items-center gap-1.5"
                        >
                          Play Match Game 🃏
                        </button>
                      </div>
                    </div>

                    {/* Weekly savings challenge tracker widget */}
                    <div className="bg-white border border-slate-200 p-5 rounded-3xl flex flex-col justify-between">
                      <div className="space-y-4">
                        <span className="text-[10px] font-black tracking-widest text-amber-400 uppercase">Saving Challenge</span>
                        <h3 className="text-base font-extrabold text-slate-900 leading-tight">30-Day Bachat Challenge</h3>
                      <p className="text-slate-500 text-xs leading-relaxed">
                          Har din thoda bacha ke continuous streak complete karo. 7d, 14d, aur 30d streaks pe special badges gallery unlock karein!
                        </p>
                        
                        {/* Interactive summary */}
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 text-center space-y-2">
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Total Saved This Challenge</p>
                          <span className="text-2xl font-black text-amber-400">
                            ₹{savingsChallenge?.totalSaved ?? 0}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => setOpenTool('savings')}
                        className="w-full py-3 rounded-xl bg-amber-400 text-black text-xs font-bold hover:bg-amber-300 transition-colors uppercase mt-6 flex items-center justify-center gap-1.5"
                      >
                        Bachat Challenge 🐷
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ══════════════════════════════════════════════════════════════
                  TAB: LEARNING TOOLS
                  ══════════════════════════════════════════════════════════════ */}
              {activeTab === 'tools' && (
                <motion.div
                  key="tools"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-8 max-w-5xl mx-auto text-left"
                >
                  {/* Strategy section */}
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                        <Brain className="text-emerald-400" size={20} /> Visual Learning Strategies
                      </h2>
                      <p className="text-xs text-slate-500 mt-1">11 gamified simulators for practical finance concepts</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {strategies.map((strategy, idx) => {
                        return (
                          <div
                            key={strategy.id}
                            className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-emerald-500/20 transition-all flex flex-col justify-between h-48 group hover:-translate-y-1"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-2xl" style={{ filter: `drop-shadow(0 4px 10px ${strategy.color}30)` }}>
                                  {strategy.icon === 'Navigation' && '🗺️'}
                                  {strategy.icon === 'GitBranch' && '🛤️'}
                                  {strategy.icon === 'Eye' && '👁️'}
                                  {strategy.icon === 'Layers' && '🥞'}
                                  {strategy.icon === 'Home' && '🏠'}
                                  {strategy.icon === 'DoorOpen' && '🚪'}
                                  {strategy.icon === 'TreePine' && '🌲'}
                                  {strategy.icon === 'Award' && '🏆'}
                                  {strategy.icon === 'BookOpen' && '📖'}
                                  {strategy.icon === 'Clock' && '⏰'}
                                  {strategy.icon === 'Store' && '🏪'}
                                </span>
                                <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                                  +100 XP
                                </span>
                              </div>
                              <h4 className="text-sm font-extrabold text-slate-900 leading-tight group-hover:text-emerald-400 transition-colors">{strategy.title}</h4>
                              <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-snug">{strategy.description || strategy.titleEn}</p>
                            </div>

                            <button
                              onClick={() => setActiveStrategySlug(strategy.slug)}
                              className="mt-4 self-start px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 hover:bg-emerald-500 hover:text-black hover:border-transparent text-[10px] font-bold text-slate-600 transition-all flex items-center gap-1 uppercase"
                            >
                              KHELO 🎮
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Calculators section */}
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                        <Wrench className="text-indigo-400" size={20} /> Financial Calculators & Utilities
                      </h2>
                      <p className="text-xs text-slate-500 mt-1">Tools to audit and evaluate your personal funds</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                      {[
                        { id: 'sip', label: 'SIP Calculator', desc: 'Compounding value calculate karo', color: '#10B981', icon: CalculatorIcon },
                        { id: 'emergency', label: 'Emergency Fund', desc: 'Locker backup analyze karo', color: '#38BDF8', icon: Shield },
                        { id: 'age', label: 'Financial Age', desc: 'Apna financial maturity score dekho', color: '#F59E0B', icon: UserCheck },
                        { id: 'priority', label: 'Priority Calculator', desc: 'Needs vs Wants priority set karo', color: '#8B5CF6', icon: Sliders },
                        { id: 'expense', label: 'Expense Auditor', desc: 'Monthly expenses list down karo', color: '#EF4444', icon: Receipt },
                        { id: 'goals', label: 'Goal Tracker', desc: 'Asset goal sets and values tracking', color: '#10B981', icon: Target },
                        { id: 'news', label: 'Market News Feed', desc: 'Important market insights padho', color: '#EC4899', icon: Globe }
                      ].map(t => {
                        const Icon = t.icon;
                        return (
                          <div
                            key={t.id}
                            className="bg-white border border-slate-200 rounded-2xl p-4.5 hover:border-slate-300 transition-all flex flex-col justify-between text-center group"
                          >
                            <div className="flex flex-col items-center">
                              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform" style={{ color: t.color }}>
                                <Icon size={20} />
                              </div>
                              <h4 className="text-xs font-extrabold text-slate-900 leading-tight truncate w-full">{t.label}</h4>
                              <p className="text-[10px] text-slate-400 leading-snug line-clamp-2 mt-1 min-h-[2rem]">{t.desc}</p>
                            </div>
                            <button
                              onClick={() => setOpenTool(t.id)}
                              className="w-full mt-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 hover:bg-slate-200 text-[9px] font-black text-slate-600 transition-colors uppercase"
                            >
                              Open Tool ⚙️
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ══════════════════════════════════════════════════════════════
                  TAB: PROFILE
                  ══════════════════════════════════════════════════════════════ */}
              {activeTab === 'profile' && (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-6 max-w-4xl mx-auto text-left"
                >
                  {/* Avatar & Experience Panel */}
                  <div className="bg-white border border-slate-200 p-6 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/5 rounded-full blur-[80px]" />
                    <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400/20 to-indigo-500/20 border-2 border-emerald-400/40 flex items-center justify-center text-4xl shadow-lg">
                          🦊
                        </div>
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-[9px] font-black px-2 py-0.5 rounded-full border border-black uppercase tracking-wider">
                          Lvl {level}
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-1">
                        <h3 className="text-xl font-extrabold text-slate-900 flex items-center justify-center sm:justify-start gap-2">
                          {user?.displayName ?? 'Capital Master'}
                        </h3>
                        <p className="text-xs text-slate-500">
                          {getLevelLabel(level).label} · Status: {user?.status ? user.status.toUpperCase() : 'STUDENT'}
                        </p>
                        
                        {/* XP Progress bar */}
                        <div className="pt-2 max-w-md">
                          <div className="flex justify-between text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                            <span>Experience Progress</span>
                            <span>{xp} / {(level * 300)} XP</span>
                          </div>
                          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-full" style={{ width: `${Math.min((xp / (level * 300)) * 100, 100)}%` }} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stats pills */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                      {[
                        { label: 'Gold Coins', value: coins, accent: '#F59E0B' },
                        { label: 'Streak Days', value: `${streak}d`, accent: '#EF4444' },
                        { label: 'Modules Done', value: `${completedModules.length}/11`, accent: '#10B981' },
                        { label: 'Badges Unlocked', value: `${badges.length + earnedBadges.length}`, accent: '#8B5CF6' }
                      ].map(pill => (
                        <div key={pill.label} className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center">
                          <span className="text-lg font-black text-white block" style={{ color: pill.accent }}>{pill.value}</span>
                          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1 block">{pill.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements Badge Gallery */}
                  <div className="bg-white border border-slate-200 p-5 rounded-3xl">
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                      <Trophy size={14} /> Badges Gallery
                    </h3>
                    <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3 text-center">
                      {BADGES.map(badge => {
                        const isUnlocked = badges.includes(badge.id) || earnedBadges.includes(badge.id);
                        return (
                          <div
                            key={badge.id}
                            className={`p-2 rounded-xl border flex flex-col items-center justify-center ${
                              isUnlocked
                                ? 'bg-slate-50 border-slate-200'
                                : 'bg-white border-transparent opacity-30 grayscale'
                            }`}
                            title={badge.description}
                          >
                            <span className="text-2xl">{badge.emoji}</span>
                            <span className="text-[9px] font-bold text-slate-600 mt-1 block truncate w-full">{badge.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ══════════════════════════════════════════════════════════════
                  TAB: BOOKMARKS
                  ══════════════════════════════════════════════════════════════ */}
              {activeTab === 'bookmarks' && (
                <motion.div
                  key="bookmarks"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-6 max-w-4xl mx-auto text-left"
                >
                  <div>
                    <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                      <Bookmark className="text-amber-400" size={20} fill="#F59E0B" /> Bookmarked Content
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">Saved financial terms for quick revision</p>
                  </div>

                  <div className="bg-white border border-slate-200 p-8 rounded-3xl text-center">
                    <p className="text-sm text-slate-400">Abhi koi bookmark nahi hai. Learning modules mein jaake terms ko bookmark karo!</p>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* ── ACTIVE TOOL CONTAINER (MODAL / DIALOG) ── */}
      <AnimatePresence>
        {openTool && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-slate-200 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative p-5 sm:p-7 custom-scroll text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setOpenTool(null)}
                className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all z-50 cursor-pointer"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <Suspense fallback={
                <div className="flex h-64 items-center justify-center">
                  <div className="w-10 h-10 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
                </div>
              }>
                {openTool === 'goals' && <LazyGoalTracker open={true} onClose={() => setOpenTool(null)} />}
                {openTool === 'expense' && <LazyExpenseTracker open={true} onClose={() => setOpenTool(null)} />}
                {openTool === 'savings' && <LazySavingsChallenge open={true} onClose={() => setOpenTool(null)} />}
                {openTool === 'quiz' && <LazyQuizArena open={true} onClose={() => setOpenTool(null)} />}
                {openTool === 'spin' && <LazySpinWheel open={true} onClose={() => setOpenTool(null)} />}
                {openTool === 'memory' && <LazyMemoryMatch open={true} onClose={() => setOpenTool(null)} />}
                {openTool === 'word' && <LazyWordScramble open={true} onClose={() => setOpenTool(null)} />}
                {openTool === 'news' && <LazyFinancialNewsWidget open={true} onClose={() => setOpenTool(null)} />}
                {openTool === 'priority' && <LazyPriorityCalculator open={true} onClose={() => setOpenTool(null)} />}
                {openTool === 'invest' && <LazyInvestmentComparison open={true} onClose={() => setOpenTool(null)} />}
                {openTool === 'emergency' && <LazyEmergencyFundCalculator open={true} onClose={() => setOpenTool(null)} />}
                {openTool === 'habit' && <LazyHabitTracker open={true} onClose={() => setOpenTool(null)} />}
                {openTool === 'age' && <LazyFinancialAgeCalculator open={true} onClose={() => setOpenTool(null)} />}
                {openTool === 'sip' && <LazySIPCalculator open={true} onClose={() => setOpenTool(null)} />}
                {openTool === 'badges' && <LazyBadgeGallery open={true} onClose={() => setOpenTool(null)} />}
                {openTool === 'achievement' && <LazyAchievementDashboard open={true} onClose={() => setOpenTool(null)} />}
                {openTool === 'health' && <LazyHealthCheckup open={true} onClose={() => setOpenTool(null)} />}
              </Suspense>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── STRATEGY SIMULATOR FULL-SCREEN VIEWER ── */}
      <AnimatePresence>
        {activeStrategySlug && (
          <div className="fixed inset-0 z-[120] bg-slate-50 flex flex-col">
            
            {/* Header control */}
            <div className="shrink-0 bg-white border-b border-slate-200 px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveStrategySlug(null)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                >
                  <ArrowLeftIcon className="w-3.5 h-3.5" /> Back to Tools
                </button>
                <div className="w-px h-4 bg-slate-200" />
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Strategy: {activeStrategySlug}</span>
              </div>
              <button
                onClick={() => setActiveStrategySlug(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all"
                aria-label="Close Viewer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Strategy viewport */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 max-w-6xl mx-auto w-full">
              <Suspense fallback={
                <div className="flex h-full items-center justify-center">
                  <div className="w-10 h-10 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
                </div>
              }>
                {(() => {
                  const Comp = StrategyComponents[activeStrategySlug];
                  return Comp ? <Comp /> : <p className="text-slate-400">Loading strategy component...</p>;
                })()}
              </Suspense>
            </div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}

// ── Simple inline utility icon components for safety ──



function CalculatorIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M16 10h.01" />
      <path d="M12 10h.01" />
      <path d="M8 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 14h.01" />
      <path d="M12 18h.01" />
      <path d="M8 18h.01" />
    </svg>
  );
}



function ArrowLeftIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}
