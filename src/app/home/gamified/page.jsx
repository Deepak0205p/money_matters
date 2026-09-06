'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Zap, Navigation, GitBranch, Eye, Layers, Home, 
  DoorOpen, TreePine, Award, BookOpen, Clock, Store, Construction, Lock, ArrowRight, X
} from 'lucide-react';
import { strategies } from '@/lib/data/strategies';
import { useAppStore } from '@/lib/store/useAppStore';

const ICON_MAP = { Navigation, GitBranch, Eye, Layers, Home, DoorOpen, TreePine, Award, BookOpen, Clock, Store };

function getIcon(iconName) {
  if (!iconName) return Construction;
  return ICON_MAP[iconName] || Construction;
}

const getSlug = (strategy) => {
  if (strategy.slug) return strategy.slug;
  const nameMap = {
    'FinancialGPS': 'paise-ka-gps',
    'ConsequenceSim': 'kya-hota-agar',
    'KyaHotaAgar': 'kya-hota-agar',
    'InflationMonster': 'chhupa-hua-chor',
    'SwipeBudget': 'budget-khel',
    'RoomBudget': 'ghar-ka-budget',
    'DebtDoors': 'debt-trap-darwaza',
    'CompoundingTree': 'compounding-tree',
    'ReportCard': 'financial-health-report-card',
    'Dictionary': 'rupaiya-dictionary',
    'DailySimulator': 'ek-din-ka-kharcha',
    'MistakeMarket': 'mistake-market'
  };
  return nameMap[strategy.componentName] || strategy.title.toLowerCase().replace(/\s+/g, '-');
};

// Strategy Unlock Prerequisite Matrix
const STRATEGY_UNLOCKS = {
  'paise-ka-gps': { reqModule: 0, label: 'Day 1' },
  'budget-khel': { reqModule: 2, label: 'Module 2', title: 'Module 2: Budgeting In Real Life' },
  'ghar-ka-budget': { reqModule: 2, label: 'Module 2', title: 'Module 2: Budgeting In Real Life' },
  'compounding-tree': { reqModule: 3, label: 'Module 3', title: 'Module 3: Saving Strategies' },
  'chhupa-hua-chor': { reqModule: 3, label: 'Module 3', title: 'Module 3: Saving Strategies' },
  'debt-trap-darwaza': { reqModule: 4, label: 'Module 4', title: 'Module 4: Emergency Fund' },
  'kya-hota-agar': { reqModule: 5, label: 'Module 5', title: 'Module 5: Banking Basics' },
  'mistake-market': { reqModule: 5, label: 'Module 5', title: 'Module 5: Banking Basics' },
  'financial-health-report-card': { reqModule: 5, minModulesCount: 5, label: '5 Modules', title: 'Complete Any 5 Modules' },
  'rupaiya-dictionary': { reqModule: 0, label: 'Day 1' },
  'ek-din-ka-kharcha': { reqModule: 0, label: 'Day 1' }
};

function isStrategyUnlocked(slug, completedModules = []) {
  const req = STRATEGY_UNLOCKS[slug];
  if (!req || req.reqModule === 0) return true;
  if (req.minModulesCount) return completedModules.length >= req.minModulesCount;
  return completedModules.includes(req.reqModule);
}

function getStrategyUnlockInfo(slug) {
  return STRATEGY_UNLOCKS[slug] || { reqModule: 0, label: 'Unlocked' };
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 70, damping: 15 }
  }
};

export default function GamifiedPage() {
  const router = useRouter();
  const { completedModules } = useAppStore();

  const [activeFilter, setActiveFilter] = useState('ALL');
  const [lockedModalInfo, setLockedModalInfo] = useState(null);

  const openStrategyViewer = (strategy, unlocked) => {
    const slug = getSlug(strategy);
    if (!unlocked) {
      const info = getStrategyUnlockInfo(slug);
      setLockedModalInfo({ strategy, info });
      return;
    }
    router.push(`/home/gamified?strategy=${slug}`);
  };

  const getDifficulty = (priority) => {
    if (priority === 'highest' || priority === 'high') 
      return { label: 'Advanced 🔴', coins: '+100 Coins', filter: 'ADVANCED' };
    if (priority === 'medium') 
      return { label: 'Intermediate 🟡', coins: '+50 Coins', filter: 'INTERMEDIATE' };
    return { label: 'Beginner 🟢', coins: '+30 Coins', filter: 'BEGINNER' };
  };

  const filteredStrategies = strategies.filter(strategy => {
    const slug = getSlug(strategy);
    const unlocked = isStrategyUnlocked(slug, completedModules);

    if (activeFilter === 'UNLOCKED') return unlocked;
    if (activeFilter === 'LOCKED') return !unlocked;
    if (activeFilter === 'ALL') return true;

    return getDifficulty(strategy.priority).filter === activeFilter;
  });

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="space-y-8 max-w-5xl mx-auto text-left relative pb-16"
    >
      {/* Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[20%] w-[70%] h-[70%] rounded-full bg-emerald-500/[0.06] blur-[140px]" />
        <div className="absolute -bottom-[20%] -right-[20%] w-[70%] h-[70%] rounded-full bg-indigo-500/[0.06] blur-[140px]" />
      </div>

      {/* Header */}
      <motion.div variants={itemVariants} className="space-y-1 relative z-10">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #34D399, #10B981 60%, #047857)' }}
          >
            <Brain size={20} className="text-white" />
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">Visual Learning Strategies</h2>
            <p className="text-xs text-slate-500">Interactive financial learning experiences unlocked via modules</p>
          </div>
        </div>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5 pb-1 relative z-10">
        {['ALL', 'UNLOCKED', 'LOCKED', 'BEGINNER', 'INTERMEDIATE', 'ADVANCED'].map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-[10px] font-black tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-emerald-500 to-indigo-600 text-white shadow-md shadow-emerald-500/20 border border-transparent scale-105'
                  : 'bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {filter}
            </button>
          );
        })}
      </motion.div>

      {/* Strategy Cards Grid */}
      <motion.div
        layout
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredStrategies.map((strategy, i) => {
            const Icon = getIcon(strategy.icon);
            const difficulty = getDifficulty(strategy.priority);
            const slug = getSlug(strategy);
            const unlocked = isStrategyUnlocked(slug, completedModules);
            const unlockInfo = getStrategyUnlockInfo(slug);

            return (
              <motion.button
                layout
                key={strategy.id}
                variants={itemVariants}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                whileHover={unlocked ? {
                  y: -6,
                  boxShadow: `0 20px 45px rgba(0, 0, 0, 0.08), 0 0 30px ${strategy.color}15`,
                  borderColor: `${strategy.color}40`
                } : undefined}
                whileTap={{ scale: 0.98 }}
                onClick={() => openStrategyViewer(strategy, unlocked)}
                className={`group relative text-left rounded-3xl p-6 border transition-all duration-300 cursor-pointer overflow-hidden ${
                  unlocked 
                    ? 'bg-gradient-to-b from-slate-50/90 to-white/95 border-slate-200 shadow-sm' 
                    : 'bg-slate-50/80 border-slate-200/60 opacity-80'
                }`}
              >
                {/* Colored ambient glow */}
                {unlocked && (
                  <div
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[70px] opacity-15 group-hover:opacity-35 group-hover:scale-110 transition-all duration-500 pointer-events-none"
                    style={{ backgroundColor: strategy.color }}
                  />
                )}

                <div className="relative z-10 flex flex-col h-full justify-between">
                  {/* Top row: icon + badges */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 ${
                        unlocked ? 'group-hover:scale-110 shadow-lg' : 'bg-slate-200 text-slate-400'
                      }`}
                      style={unlocked ? {
                        backgroundColor: `${strategy.color}15`,
                        border: `1px solid ${strategy.color}25`
                      } : undefined}
                    >
                      {unlocked ? <Icon size={24} style={{ color: strategy.color }} /> : <Lock size={22} className="text-slate-400" />}
                    </div>

                    <div className="flex gap-1.5 items-center flex-wrap justify-end">
                      {unlocked ? (
                        <>
                          <span
                            className="text-[9px] font-black px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: `${strategy.color}15`,
                              color: strategy.color,
                              border: `1px solid ${strategy.color}25`
                            }}
                          >
                            S-{String(strategy.id).padStart(2, '0')}
                          </span>
                          <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                            {difficulty.coins}
                          </span>
                        </>
                      ) : (
                        <span className="text-[9px] font-bold px-2.5 py-1 rounded-full bg-slate-200 text-slate-600 flex items-center gap-1 border border-slate-300/60">
                          <Lock size={10} /> {unlockInfo.label ? `Requires ${unlockInfo.label}` : 'Locked'}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title + Description */}
                  <div>
                    <h3 className={`font-display text-lg font-extrabold mb-1.5 transition-colors duration-300 ${
                      unlocked ? 'text-slate-900 group-hover:text-emerald-600' : 'text-slate-500'
                    }`}>
                      {strategy.title}
                    </h3>
                    <p className={`text-[12px] transition-colors leading-relaxed line-clamp-3 mb-4 ${
                      unlocked ? 'text-slate-500 group-hover:text-slate-600' : 'text-slate-400'
                    }`}>
                      {strategy.description || strategy.titleEn}
                    </p>
                  </div>

                  {/* Footer: difficulty + CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-1 text-[10px] font-semibold text-slate-500">
                      <span>{difficulty.label}</span>
                    </div>

                    {unlocked ? (
                      <div
                        className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-900 transition-all flex items-center gap-1"
                      >
                        KHELO 🎮
                        <Zap size={10} className="text-amber-500" />
                      </div>
                    ) : (
                      <div className="px-3 py-1.5 rounded-xl bg-slate-200 text-[10px] font-bold text-slate-600 flex items-center gap-1">
                        <Lock size={10} /> LOCKED
                      </div>
                    )}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Lock Popup Modal */}
      <AnimatePresence>
        {lockedModalInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 10 }}
              className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-slate-200 space-y-4 text-center"
            >
              <div className="flex justify-end">
                <button onClick={() => setLockedModalInfo(null)} className="p-1 rounded-lg hover:bg-slate-100 text-slate-400">
                  <X size={16} />
                </button>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto">
                <Lock size={26} />
              </div>

              <div className="space-y-1">
                <h3 className="font-extrabold text-base text-slate-900">{lockedModalInfo.strategy.title} is Locked</h3>
                <p className="text-xs text-slate-500">
                  {lockedModalInfo.info.title ? (
                    <>Complete <strong className="text-emerald-600 font-bold">{lockedModalInfo.info.title}</strong> to play this simulator!</>
                  ) : (
                    <>Complete more modules to unlock!</>
                  )}
                </p>
              </div>

              {lockedModalInfo.info.reqModule > 0 ? (
                <button
                  onClick={() => {
                    const reqMod = lockedModalInfo.info.reqModule;
                    setLockedModalInfo(null);
                    router.push(`/dashboard/module/${reqMod}`);
                  }}
                  className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
                >
                  Start Module {lockedModalInfo.info.reqModule} Now <ArrowRight size={14} />
                </button>
              ) : (
                <button
                  onClick={() => {
                    setLockedModalInfo(null);
                    router.push('/home/dashboard');
                  }}
                  className="w-full py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs transition-all flex items-center justify-center gap-2"
                >
                  Go to Dashboard <ArrowRight size={14} />
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
