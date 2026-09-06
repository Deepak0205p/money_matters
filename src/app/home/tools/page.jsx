'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, ShieldCheck, Milestone, Compass, 
  Eye, Target, Newspaper, PiggyBank, Brain, 
  Dices, HelpCircle, Gamepad2, Landmark, 
  CalendarDays, Award, BarChart3, Activity, Wrench, Lock, ArrowRight, X
} from 'lucide-react';
import { useAppStore } from '@/lib/store/useAppStore';
import { isToolUnlocked, getToolUnlockInfo } from '@/lib/utils';

export default function ToolsPage() {
  const router = useRouter();
  const { completedModules } = useAppStore();

  const [lockedModalInfo, setLockedModalInfo] = useState(null);

  const openToolDialog = (tool, unlocked) => {
    if (!unlocked) {
      const info = getToolUnlockInfo(tool.id);
      setLockedModalInfo({ tool, info });
      return;
    }
    router.push(`/home/tools?tool=${tool.id}`);
  };

  const tools = [
    { 
      id: 'sip', 
      label: 'Compounding Treasure 💰', 
      sub: 'SIP Growth Engine', 
      desc: 'Experience the magic of compounding and see how your investment grows.', 
      color: '#10B981', 
      icon: TrendingUp 
    },
    { 
      id: 'emergency', 
      label: 'Safety Shield 🛡️', 
      sub: 'Emergency Fund Builder', 
      desc: 'Estimate and track a safe reserve for your rainy days.', 
      color: '#10B981', 
      icon: ShieldCheck 
    },
    { 
      id: 'age', 
      label: 'Wealth Meter 📈', 
      sub: 'Financial Age Calculator', 
      desc: 'Calculate how mature you are at managing your money.', 
      color: '#10B981', 
      icon: Milestone 
    },
    { 
      id: 'priority', 
      label: 'Needs vs Wants ⚖️', 
      sub: 'Needs vs Wants Budgeter', 
      desc: 'Audit your daily expenses and set priorities wisely.', 
      color: '#10B981', 
      icon: Compass 
    },
    { 
      id: 'expense', 
      label: 'Expense Spy 🕵️‍♂️', 
      sub: 'Smart Expense Tracker', 
      desc: 'Where is your money going? Track your spending patterns.', 
      color: '#10B981', 
      icon: Eye 
    },
    { 
      id: 'goals', 
      label: 'Dream to Reality 🎯', 
      sub: 'Dream Goal Planner', 
      desc: 'Set your financial goals and map a target timeline.', 
      color: '#10B981', 
      icon: Target 
    },
    { 
      id: 'news', 
      label: 'Finance Gazette 📰', 
      sub: 'Finance News & Insights', 
      desc: 'Read daily market updates and important financial lessons.', 
      color: '#10B981', 
      icon: Newspaper 
    },
    { 
      id: 'savings', 
      label: 'Savings Challenge 🐷', 
      sub: 'Savings Challenger', 
      desc: 'Build a savings habit by completing smart money-saving challenges.', 
      color: '#10B981', 
      icon: PiggyBank 
    },
    { 
      id: 'quiz', 
      label: 'Knowledge Arena 🧠', 
      sub: 'Financial Literacy Quiz', 
      desc: 'Test your financial knowledge and earn new rewards.', 
      color: '#10B981', 
      icon: HelpCircle 
    },
    { 
      id: 'spin', 
      label: 'Fortune Wheel 🎡', 
      sub: 'Daily Fortune Wheel', 
      desc: 'Spin every day and win financial bonuses and tips.', 
      color: '#10B981', 
      icon: Dices 
    },
    { 
      id: 'memory', 
      label: 'Mind Workout 🧩', 
      sub: 'Financial Memory Match', 
      desc: 'Learn finance concepts in a fun way by matching cards.', 
      color: '#10B981', 
      icon: Brain 
    },
    { 
      id: 'word', 
      label: 'Word Scramble 🔠', 
      sub: 'Word Scramble Game', 
      desc: 'Arrange letters and discover finance terms.', 
      color: '#10B981', 
      icon: Gamepad2 
    },
    { 
      id: 'invest', 
      label: 'Big Decision 🔍', 
      sub: 'Investment Comparison', 
      desc: 'Compare returns across different assets (Gold, Stocks, FD).', 
      color: '#10B981', 
      icon: Landmark 
    },
    { 
      id: 'habit', 
      label: 'Habit Tracker 📅', 
      sub: 'Money Habit Tracker', 
      desc: 'Log daily good financial habits and build your streak.', 
      color: '#10B981', 
      icon: CalendarDays 
    },
    { 
      id: 'badges', 
      label: 'Honor Gallery 🏆', 
      sub: 'Financial Badges Showcase', 
      desc: 'Check your learned achievements and unlocked badges.', 
      color: '#10B981', 
      icon: Award 
    },
    { 
      id: 'achievement', 
      label: 'Success Board 📊', 
      sub: 'Achievement Dashboard', 
      desc: 'View your total learning progress and reward statistics.', 
      color: '#10B981', 
      icon: BarChart3 
    },
    { 
      id: 'health', 
      label: 'Money Doctor 🏥', 
      sub: 'Financial Health Checkup', 
      desc: 'Get a complete checkup of your financial status and a custom prescription.', 
      color: '#10B981', 
      icon: Activity 
    }
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto text-left py-2">
      {/* Header section */}
      <div className="space-y-2 border-b border-slate-200/80 pb-6">
        <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
          <Wrench className="text-emerald-600" size={26} /> Financial Tools & Utilities
        </h2>
        <p className="text-xs text-slate-600">
          Use smart utilities, calculators, and mini-activities to upgrade your money game. Complete modules to unlock advanced tools!
        </p>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tools.map(t => {
          const Icon = t.icon;
          const unlocked = isToolUnlocked(t.id, completedModules);
          const unlockInfo = getToolUnlockInfo(t.id);

          return (
            <div
              key={t.id}
              onClick={() => !unlocked && openToolDialog(t, false)}
              className={`border rounded-3xl p-5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                unlocked 
                  ? 'bg-white border-slate-200/80 hover:border-emerald-300 hover:shadow-lg shadow-sm' 
                  : 'bg-slate-50/80 border-slate-200/60 opacity-80 cursor-pointer'
              }`}
            >
              {/* Top ambient glow */}
              {unlocked && (
                <div 
                  className="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-[40px] opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none" 
                  style={{ backgroundColor: t.color }}
                />
              )}

              <div>
                {/* Icon & Sub-header */}
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-transform ${
                      unlocked 
                        ? 'group-hover:scale-105 border bg-emerald-50 border-emerald-200 text-emerald-600' 
                        : 'bg-slate-200/60 text-slate-400 border border-slate-300/40'
                    }`} 
                  >
                    {unlocked ? <Icon size={20} /> : <Lock size={18} />}
                  </div>
                  
                  {unlocked ? (
                    <span className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {t.sub}
                    </span>
                  ) : (
                    <span className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-200 text-slate-600 flex items-center gap-1">
                      <Lock size={10} /> {unlockInfo.reqModule ? `Requires Module ${unlockInfo.reqModule}` : 'Locked'}
                    </span>
                  )}
                </div>

                {/* Content */}
                <h4 className={`text-base font-black leading-tight transition-colors mt-2 ${
                  unlocked ? 'text-slate-900 group-hover:text-emerald-700' : 'text-slate-500'
                }`}>
                  {t.label}
                </h4>
                <p className={`text-xs leading-relaxed mt-2 min-h-[3.25rem] ${
                  unlocked ? 'text-slate-600' : 'text-slate-400'
                }`}>
                  {t.desc}
                </p>
              </div>

              {/* Action Button */}
              {unlocked ? (
                <button
                  onClick={() => openToolDialog(t, true)}
                  className="w-full mt-5 py-3 rounded-2xl text-[10px] font-black tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm"
                >
                  OPEN TOOL 🛠️
                </button>
              ) : (
                <button
                  onClick={() => openToolDialog(t, false)}
                  className="w-full mt-5 py-3 rounded-2xl text-[10px] font-black tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer bg-slate-200 hover:bg-slate-300 text-slate-700"
                >
                  <Lock size={12} /> {unlockInfo.reqModule ? `UNLOCK WITH MODULE ${unlockInfo.reqModule}` : 'LOCKED'}
                </button>
              )}
            </div>
          );
        })}
      </div>

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
                <h3 className="font-extrabold text-base text-slate-900">{lockedModalInfo.tool.label} is Locked</h3>
                <p className="text-xs text-slate-500">
                  {lockedModalInfo.info.moduleTitle ? (
                    <>Complete <strong className="text-emerald-600 font-bold">{lockedModalInfo.info.moduleTitle}</strong> to unlock this tool!</>
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
