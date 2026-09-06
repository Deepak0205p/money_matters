'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, Check, PartyPopper, ArrowRight, Sparkles, Share2 } from 'lucide-react';
import { useAppStore } from '@/lib/store/useAppStore';
import { toast } from '@/hooks/use-toast';

const QUESTIONS = [
  {
    id: 'salary',
    question: 'What did you do first with your first salary or pocket money?',
    emoji: '💸',
    category: 'Money Mindset',
    options: [
      { text: 'Spent it all! Shopping spree 🛍️', score: 1, emoji: '💸' },
      { text: 'Spent some, put some in the piggy bank 🐷', score: 2, emoji: '🤔' },
      { text: 'Saved half, spent half on party/movies 🎬', score: 3, emoji: '💰' },
      { text: 'Set aside savings first, then enjoyed with the rest 🎯', score: 4, emoji: '🎯' }
    ]
  },
  {
    id: 'budget',
    question: 'Do you make a budget every month?',
    emoji: '📝',
    category: 'Budgeting',
    options: [
      { text: 'Budget? That\'s for rich people only 😅', score: 1, emoji: '🤷' },
      { text: 'I have one in my head, but don\'t strictly follow it 🧠', score: 2, emoji: '📅' },
      { text: 'I track income and key expenses on a basic excel/app ✅', score: 3, emoji: '✅' },
      { text: 'Detailed budget plan (50-30-20 rule) tracked solidly every month! 📊', score: 4, emoji: '📊' }
    ]
  },
  {
    id: 'emergency',
    question: 'How much emergency backup fund do you have?',
    emoji: '🛡️',
    category: 'Safety Net',
    options: [
      { text: 'Vault is empty boss! Would need to borrow from friends ❓', score: 1, emoji: '❓' },
      { text: 'Can cover 1-2 months of basic expenses 🌱', score: 2, emoji: '🌱' },
      { text: 'Have a standard 3-5 month locker backup 💪', score: 3, emoji: '💪' },
      { text: 'Have 6+ months of secure liquid surplus ready! 🛡️', score: 4, emoji: '🛡️' }
    ]
  },
  {
    id: 'sip',
    question: 'Are you running any regular SIP or mutual fund investments?',
    emoji: '📈',
    category: 'Investing',
    options: [
      { text: 'Investment? I just started earning 🚫', score: 1, emoji: '🚫' },
      { text: 'Money just sits in FDs/Savings account 🏦', score: 2, emoji: '🏦' },
      { text: 'Tried small micro-investments or crypto/stocks 🌱', score: 3, emoji: '🌱' },
      { text: 'Regular SIP & diversified equity portfolio mapped out! 🚀', score: 4, emoji: '🚀' }
    ]
  },
  {
    id: 'credit',
    question: 'If you use a credit card, how do you pay the bill?',
    emoji: '💳',
    category: 'Debt Management',
    options: [
      { text: 'Always pay minimum due, no tension taken 😬', score: 1, emoji: '😰' },
      { text: 'Pay partial bill when there\'s extra salary 🤷', score: 2, emoji: '🤷' },
      { text: 'Pay the full bill, mostly on time ✅', score: 3, emoji: '✅' },
      { text: 'Always full auto-pay + zero delay history tracked! 🎯', score: 4, emoji: '🎯' }
    ]
  },
  {
    id: 'insurance',
    question: 'What is your health or life insurance protection status?',
    emoji: '🏥',
    category: 'Insurance Protection',
    options: [
      { text: 'Insurance? Nothing will happen to me, full system strong! 🚫', score: 1, emoji: '🚫' },
      { text: 'Relying on corporate or parents\' health card 👨‍👩‍👦', score: 2, emoji: '👨‍👩‍👦' },
      { text: 'Yes, I have a basic independent cover 📋', score: 3, emoji: '📋' },
      { text: 'Optimal personal cover (Health + Term insurance) fully secured! 🛡️', score: 4, emoji: '🛡️' }
    ]
  },
  {
    id: 'spend',
    question: 'How much control do you have when you see online sale/discount offers?',
    emoji: '🛍️',
    category: 'Spending Habits',
    options: [
      { text: 'No control! "ADD TO CART" and swipe immediately! 😅', score: 1, emoji: '💸' },
      { text: 'I think about it but still buy 80% of the time 🛍️', score: 2, emoji: '🛍' },
      { text: 'Try to control by applying the 24-hour rule ⏰', score: 3, emoji: '⏰' },
      { text: 'Evaluate the need, add to wishlist, and wait 📝', score: 4, emoji: '📝' }
    ]
  },
  {
    id: 'tax',
    question: 'How much do you know about ITR filings and Tax-saving options?',
    emoji: '📋',
    category: 'Tax Awareness',
    options: [
      { text: 'Employer deducts the tax, what do I know 🤷', score: 1, emoji: '🤷' },
      { text: 'Only know about LIC or PPF savings under 80C 📚', score: 2, emoji: '📚' },
      { text: 'Claim basic savings with ELSS mutual funds and NPS ✅', score: 3, emoji: '✅' },
      { text: 'Optimize complete deductions with proper planning! 📊', score: 4, emoji: '📊' }
    ]
  },
  {
    id: 'goal',
    question: 'Have you planned any dedicated money goal for the next 5 years?',
    emoji: '🎯',
    category: 'Goal Setting',
    options: [
      { text: 'Who worries about tomorrow, let\'s chill today! 😅', score: 1, emoji: '🤷' },
      { text: 'I know I want to buy a car but haven\'t mapped savings 💭', score: 2, emoji: '💭' },
      { text: 'Have an approximate target, savings have started 📝', score: 3, emoji: '📝' },
      { text: 'SMART goals (Home, Travel, Business) with monthly budget tracked! 🎯', score: 4, emoji: '🎯' }
    ]
  }
];

function getAgeResult(score) {
  // Score mapping: 9 (min) to 36 (max). Real Age mapped from 12 to 60.
  const age = Math.round(12 + ((score - 9) / 27) * 48);
  
  if (score >= 30) {
    return {
      age,
      label: 'Financial Guru 🧙‍♂️',
      color: '#10B981',
      description: 'Wow! You are mature when it comes to financial terms and planning. You have gone far beyond your age!',
      tips: [
        'Diversify your portfolio into global indices or smart equity assets.',
        'Organize estate planning, nominees, and basic will documentation.',
        'Share savings and investment concepts with your friends too!'
      ]
    };
  }
  if (score >= 22) {
    return {
      age,
      label: 'Money Smart 🎯',
      color: '#06B6D4',
      description: 'You are on the right track! With a few minor fixes, you can become a fully mature money ninja.',
      tips: [
        'Expand your emergency surplus to a 6-month backup level.',
        'Step up your SIP amount by 10% every year with your income hike.',
        'Check your absolute life term cover status.'
      ]
    };
  }
  if (score >= 14) {
    return {
      age,
      label: 'Financial Teenager 📚',
      color: '#F59E0B',
      description: 'You are still in the learning stage. Basic savings are there, but deep investments and discipline still need to be built.',
      tips: [
        'Set up ₹1,000 auto-invest as soon as your salary arrives each month.',
        'Start parking your emergency fund in a safe bank liquid account.',
        'Keep credit limit usage under 30% to protect your CIBIL score.'
      ]
    };
  }
  return {
    age,
    label: 'Financial Kid 👶',
    color: '#EF4444',
    description: 'Your financial literacy level is at the starting point. But don\'t worry — there\'s no age to learn!',
    tips: [
      'Use a diary or tracker to track daily spends.',
      'Lock a short-term savings buffer instead of borrowing from friends.',
      'Regularly refer to the basic modules of Money Matters.'
    ]
  };
}

export default function FinancialAgeCalculator({ open, onClose }) {
  const { addCoins, addBadge } = useAppStore();
  const [gameState, setGameState] = useState('intro'); // intro | playing | reveal | result
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [revealedAge, setRevealedAge] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) {
      // Reset state on close
      setGameState('intro');
      setCurrentIdx(0);
      setAnswers([]);
      setRevealedAge(null);
    }
  }, [open]);

  const totalScore = useMemo(() => answers.reduce((s, v) => s + v, 0), [answers]);
  const result = useMemo(() => getAgeResult(totalScore), [totalScore]);

  const handleAnswer = useCallback((score) => {
    const nextAnswers = [...answers, score];
    setAnswers(nextAnswers);

    if (currentIdx + 1 < QUESTIONS.length) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setGameState('reveal');
      const finalScore = nextAnswers.reduce((a, b) => a + b, 0);
      const finalResult = getAgeResult(finalScore);

      setTimeout(() => {
        setRevealedAge(finalResult.age);
        setGameState('result');
        addCoins(20);
        addBadge('financial-age');
      }, 2500);
    }
  }, [answers, currentIdx, addCoins, addBadge]);

  const handleRestart = () => {
    setGameState('intro');
    setCurrentIdx(0);
    setAnswers([]);
    setRevealedAge(null);
  };

  const handleShare = () => {
    const text = `My Financial Age: ${revealedAge} years old! 🎂\nCategory: ${result.label}\n\nCheck your Wealth Meter status on the Money Matters app! 📈`;
    if (navigator.share) {
      navigator.share({ title: 'Wealth Meter Result', text }).catch(() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        toast({ title: "Result copied to clipboard! 📋" });
      });
    } else {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({ title: "Result copied to clipboard! 📋" });
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      {/* Backdrop blur overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

      {/* Modal Container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="relative z-10 w-full max-w-md bg-[#090D1A] border border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Effects */}
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-violet-500/10 blur-[80px] pointer-events-none" />

        {/* Top Header */}
        <div className="shrink-0 px-6 py-4 border-b border-white/[0.06] bg-[#0C1021]/80 backdrop-blur-md flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
              <Sparkles size={20} className="text-violet-400" />
            </div>
            <div>
              <h2 className="text-base font-black text-white">Wealth Meter 📈</h2>
              <p className="text-[10px] text-zinc-400">Financial Maturity Age Calculator</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-1.5 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
          >
            ✕
          </button>
        </div>

        {/* Content Box */}
        <div className="flex-1 overflow-y-auto p-6 custom-scroll">
          <AnimatePresence mode="wait">
            
            {/* INTRO SCREEN */}
            {gameState === 'intro' && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center space-y-6 py-4"
              >
                <div className="text-6xl animate-bounce">🎂</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-white">What Is Your Real Financial Age?</h3>
                  <p className="text-xs text-zinc-400 px-6 leading-relaxed">
                    Answer 9 simple spending and money management questions honestly and find out how mature your money mindset really is.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-[#05070F] border border-white/[0.03] rounded-2xl p-3">
                    <span className="text-xl block">⏱️</span>
                    <span className="text-[10px] text-zinc-400 font-bold block mt-1">2 mins only</span>
                  </div>
                  <div className="bg-[#05070F] border border-white/[0.03] rounded-2xl p-3">
                    <span className="text-xl block">💎</span>
                    <span className="text-[10px] text-zinc-400 font-bold block mt-1">+20 Coins</span>
                  </div>
                  <div className="bg-[#05070F] border border-white/[0.03] rounded-2xl p-3">
                    <span className="text-xl block">💡</span>
                    <span className="text-[10px] text-zinc-400 font-bold block mt-1">Custom tips</span>
                  </div>
                </div>

                <button
                  onClick={() => setGameState('playing')}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg shadow-violet-500/10 cursor-pointer"
                >
                  Start Wealth Meter Test <ArrowRight size={14} />
                </button>
              </motion.div>
            )}

            {/* QUESTIONS SCREEN */}
            {gameState === 'playing' && (
              <motion.div
                key="playing"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5 py-2"
              >
                {/* Progress bar */}
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest shrink-0">
                    Q: {currentIdx + 1}/{QUESTIONS.length}
                  </span>
                  <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-violet-500 transition-all duration-300"
                      style={{ width: `${((currentIdx + 1) / QUESTIONS.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Category label */}
                <div className="text-center">
                  <span className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[9px] font-black uppercase tracking-wider">
                    {QUESTIONS[currentIdx].category}
                  </span>
                </div>

                <h3 className="text-base font-black text-white text-center leading-snug px-2">
                  {QUESTIONS[currentIdx].question}
                </h3>

                {/* Options list */}
                <div className="space-y-2.5">
                  {QUESTIONS[currentIdx].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt.score)}
                      className="w-full p-4 rounded-2xl bg-[#0B0E19] border border-white/[0.04] hover:border-violet-500/30 text-left flex items-start gap-3.5 transition-all group cursor-pointer"
                    >
                      <span className="text-lg bg-white/5 p-1 rounded-lg shrink-0 group-hover:scale-105 transition-transform">
                        {opt.emoji}
                      </span>
                      <span className="text-xs font-semibold text-zinc-300 group-hover:text-white leading-relaxed">
                        {opt.text}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* REVEAL ANIMATION SCREEN */}
            {gameState === 'reveal' && (
              <motion.div
                key="reveal"
                className="text-center py-16 space-y-4"
              >
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-7xl"
                >
                  🔮
                </motion.div>
                <div className="space-y-1">
                  <p className="text-sm font-black text-violet-400 uppercase tracking-widest animate-pulse">
                    Analyzing Answers...
                  </p>
                  <p className="text-[10px] text-zinc-500">
                    Calculations are running on your money mind map.
                  </p>
                </div>
              </motion.div>
            )}

            {/* RESULTS SCREEN */}
            {gameState === 'result' && (
              <motion.div
                key="result"
                className="space-y-6 py-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {/* Visual Age Circle */}
                <div className="text-center space-y-2 relative">
                  <div className="w-32 h-32 rounded-full border-2 border-dashed border-violet-500/20 bg-violet-500/5 mx-auto flex flex-col items-center justify-center relative">
                    <span className="text-xs text-zinc-400">Financial Age</span>
                    <span className="text-5xl font-black" style={{ color: result.color }}>
                      {revealedAge}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-extrabold uppercase">Years Old</span>
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"
                    style={{ backgroundColor: `${result.color}15`, color: result.color, border: `1px solid ${result.color}25` }}
                  >
                    {result.label}
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed px-4">
                    {result.description}
                  </p>
                </div>

                {/* Score bar */}
                <div className="bg-[#05070F] border border-white/[0.03] rounded-2xl p-3.5 space-y-2">
                  <div className="flex justify-between text-[10px] text-zinc-400 font-bold">
                    <span>Maturity Score</span>
                    <span>{totalScore} / 36</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ backgroundColor: result.color, width: `${(totalScore / 36) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Personalized suggestions */}
                <div className="bg-[#0B0E19] border border-white/[0.04] rounded-3xl p-4 space-y-3">
                  <h4 className="text-xs font-black text-violet-400 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles size={13} /> Doctor's Money Prescription
                  </h4>
                  <div className="space-y-2">
                    {result.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                        <span className="text-emerald-500 font-extrabold mt-0.5">✓</span>
                        <span className="leading-relaxed">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={handleShare}
                    className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-[#070913] text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Share2 size={13} /> {copied ? 'Copied Link!' : 'Share Status'}
                  </button>
                  <button
                    onClick={handleRestart}
                    className="px-5 py-3 rounded-2xl border border-white/[0.06] text-xs font-extrabold text-zinc-400 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5"
                  >
                    <RotateCcw size={12} /> Retake Test
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Footer info */}
        <div className="shrink-0 px-6 py-4 border-t border-white/[0.06] bg-[#0C1021]/80 backdrop-blur-md flex items-center justify-center">
          <p className="text-[9px] text-zinc-500 font-black uppercase tracking-widest">
            Wealth Meter — +20 Coins Awarded upon completion
          </p>
        </div>
      </motion.div>
    </div>
  );
}