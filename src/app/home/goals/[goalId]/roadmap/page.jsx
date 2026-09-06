'use client';

import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, useParams } from 'next/navigation';
import {
  ArrowLeft, Target, IndianRupee, Zap, Shield, Trophy, Rocket,
  Mountain, Calendar, CheckCircle2, AlertTriangle, Star, Flame,
  ChevronRight, Clock, TrendingUp, Loader2, Sparkles, Brain,
  ChevronDown, Pencil, Save, X, Check, MapPin, Flag, Plus, Lock
} from 'lucide-react';
import { useAppStore, useHydration } from '@/lib/store/useAppStore';
import { toast } from '@/hooks/use-toast';

// ─── Editable Text Field ──────────────────────────────────────
function EditableField({ value, onSave, className, multiline = false, tag: Tag = 'span' }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const inputRef = useRef(null);

  useEffect(() => { if (editing && inputRef.current) inputRef.current.focus(); }, [editing]);

  const save = () => { onSave(draft); setEditing(false); };

  if (editing) {
    return (
      <div className="flex items-center gap-2">
        {multiline ? (
          <textarea ref={inputRef} value={draft} onChange={e => setDraft(e.target.value)}
            className={`flex-1 bg-slate-100 border border-blue-500/30 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500/40 resize-none ${className}`}
            rows={3}
          />
        ) : (
          <input ref={inputRef} value={draft} onChange={e => setDraft(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && save()}
            className={`flex-1 bg-slate-100 border border-blue-500/30 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500/40 ${className}`}
          />
        )}
        <button onClick={save} className="p-1.5 rounded-lg bg-blue-500/20 text-blue-600 hover:bg-blue-500/30"><Save size={12} /></button>
        <button onClick={() => { setDraft(value); setEditing(false); }} className="p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:bg-slate-200"><X size={12} /></button>
      </div>
    );
  }

  return (
    <div className="group/field flex items-start gap-1.5 cursor-pointer" onClick={() => setEditing(true)}>
      <Tag className={className}>{value}</Tag>
      <Pencil size={10} className="text-slate-400 group-hover/field:text-blue-500 mt-1 shrink-0 opacity-0 group-hover/field:opacity-100 transition-opacity" />
    </div>
  );
}

// ─── Editable List Item ──────────────────────────────────────
function EditableListItem({ items, onSave, className }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(items?.join('\n') || '');

  const save = () => { onSave(draft.split('\n').filter(Boolean)); setEditing(false); };

  if (editing) {
    return (
      <div className="space-y-2">
        <textarea value={draft} onChange={e => setDraft(e.target.value)} autoFocus
          className={`w-full bg-slate-100 border border-blue-500/30 rounded-xl px-3 py-2 text-[11px] text-slate-900 focus:outline-none resize-none ${className}`}
          rows={Math.min(8, draft.split('\n').length + 2)}
        />
        <div className="flex gap-2">
          <button onClick={save} className="px-3 py-1 rounded-lg bg-blue-500/20 text-blue-600 text-[10px] font-bold hover:bg-blue-500/30 flex items-center gap-1"><Save size={10} /> Save</button>
          <button onClick={() => setEditing(false)} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-500 text-[10px] font-bold hover:bg-slate-200">Cancel</button>
        </div>
      </div>
    );
  }

  return (
    <div className="group/list cursor-pointer" onClick={() => setEditing(true)}>
      {items?.map((item, i) => (
        <div key={i} className="flex items-start gap-2 text-[11px] text-slate-600 mb-1">
          <ChevronRight size={10} className="text-blue-500 mt-0.5 shrink-0" /><span>{item}</span>
        </div>
      ))}
      <Pencil size={9} className="text-slate-400 group-hover/list:text-blue-500 mt-1 opacity-0 group-hover/list:opacity-100 transition-opacity" />
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════
// ENHANCED GAME MAP SVG
// ═════════════════════════════════════════════════════════════════
function GamePathSVG({ groups, totalSaved, onSelectLevel, selectedLevelId }) {
  const total = groups?.length || 4;
  const svgWidth = 380;
  const levelHeight = 220;
  const startY = 60;
  const svgHeight = total * levelHeight + 160;

  const levels = groups.map((g, i) => {
    const isLeft = i % 2 === 0;
    const isDone = totalSaved >= g.cumulativeTarget;
    const isCurrent = !isDone && (i === 0 || totalSaved >= (groups[i - 1]?.cumulativeTarget || 0));
    return {
      x: isLeft ? 90 : svgWidth - 90,
      y: startY + i * levelHeight,
      isLeft,
      group: g,
      index: i,
      done: isDone,
      current: isCurrent,
      locked: !isDone && !isCurrent
    };
  });

  const summit = { x: svgWidth / 2, y: startY + total * levelHeight + 30 };
  const start = { x: svgWidth / 2, y: startY - 30 };

  let pathD = `M ${start.x} ${start.y}`;
  levels.forEach((lv) => {
    pathD += ` L ${lv.x} ${lv.y}`;
  });
  pathD += ` L ${summit.x} ${summit.y}`;

  const completedCount = levels.filter(l => l.done).length;
  const totalLen = 4000;
  const progressRatio = total > 0 ? (completedCount / total) : 0;

  const segmentColors = ['#2563EB', '#4F46E5', '#7C3AED', '#F59E0B', '#10B981'];

  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none"
    >
      <defs>
        <linearGradient id="gamePathGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.4" />
          <stop offset="35%" stopColor="#4F46E5" stopOpacity="0.6" />
          <stop offset="70%" stopColor="#7C3AED" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0.9" />
        </linearGradient>
        <filter id="pathGlow">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer Glow Path */}
      <motion.path
        d={pathD}
        fill="none"
        stroke="rgba(37,99,235,0.08)"
        strokeWidth="24"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Dotted Base Path */}
      <motion.path
        d={pathD}
        fill="none"
        stroke="#E2E8F0"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="8,8"
      />

      {/* Active Glowing Trail */}
      <motion.path
        d={pathD}
        fill="none"
        stroke="url(#gamePathGrad)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#pathGlow)"
        strokeDasharray={totalLen}
        initial={{ strokeDashoffset: totalLen }}
        animate={{ strokeDashoffset: totalLen - (totalLen * progressRatio) }}
        transition={{ duration: 2, ease: 'easeOut' }}
      />

      {/* Nodes */}
      {levels.map((lv, i) => {
        const col = segmentColors[i % segmentColors.length];
        const isSelected = selectedLevelId === lv.group.id;

        return (
          <g key={`level-node-${i}`} className="pointer-events-auto cursor-pointer" onClick={() => onSelectLevel(lv.group)}>
            {/* Outer halo */}
            {(lv.done || lv.current || isSelected) && (
              <motion.circle
                cx={lv.x} cy={lv.y} r="36"
                fill={`${col}12`}
                stroke={col}
                strokeWidth="1.5"
                strokeOpacity="0.3"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}

            {/* Platform Base */}
            <motion.rect
              x={lv.x - 30} y={lv.y - 18}
              width="60" height="36"
              rx="12"
              fill={lv.done ? `${col}15` : lv.current ? '#EFF6FF' : '#F8FAFC'}
              stroke={lv.done ? col : lv.current ? '#2563EB' : '#CBD5E1'}
              strokeWidth={lv.done || lv.current ? 2.5 : 1.5}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />

            {/* Badge */}
            <circle cx={lv.x} cy={lv.y - 24} r="13" fill={lv.done ? col : lv.current ? '#2563EB' : '#94A3B8'} />
            <text x={lv.x} y={lv.y - 23} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="10" fontWeight="bold">
              {lv.done ? '✓' : `L${i + 1}`}
            </text>

            {/* Emoji / Icon */}
            <text x={lv.x} y={lv.y + 4} textAnchor="middle" dominantBaseline="middle" fontSize="18">
              {lv.locked ? '🔒' : lv.group.emoji}
            </text>

            {/* Star badge */}
            {lv.done && (
              <motion.text x={lv.x + 24} y={lv.y - 14} fontSize="12" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                ⭐
              </motion.text>
            )}
          </g>
        );
      })}

      {/* Summit Flag */}
      <g>
        <circle cx={summit.x} cy={summit.y} r="28" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
        <text x={summit.x} y={summit.y + 2} textAnchor="middle" dominantBaseline="middle" fontSize="24">🏆</text>
      </g>

      {/* Start Node */}
      <g>
        <circle cx={start.x} cy={start.y} r="16" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5" />
        <text x={start.x} y={start.y + 1} textAnchor="middle" dominantBaseline="middle" fontSize="14">🚀</text>
      </g>
    </svg>
  );
}

// ═════════════════════════════════════════════════════════════════
// MONTH DETAIL PANEL
// ═════════════════════════════════════════════════════════════════
function MonthDetailPanel({ group, detail, loading, onSaveDetail }) {
  if (loading) {
    return (
      <div className="flex flex-col items-center py-12 space-y-3">
        <Loader2 size={24} className="text-blue-600 animate-spin" />
        <p className="text-xs text-slate-500">Generating Level plan...</p>
      </div>
    );
  }

  if (!detail) return null;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{group.emoji}</span>
          <div className="flex-1">
            <EditableField value={detail.title || group.title}
              onSave={v => onSaveDetail('title', v)}
              className="font-extrabold text-base text-slate-900" tag="h3"
            />
            <p className="text-[10px] text-slate-500">{group.monthRange} • Target: ₹{(group.targetSavings || 0).toLocaleString('en-IN')}</p>
          </div>
        </div>
        <EditableField value={detail.overview || group.overview}
          onSave={v => onSaveDetail('overview', v)} multiline
          className="text-xs text-slate-600 leading-relaxed"
        />
      </div>

      {/* Weekly Plan */}
      {detail.weeklyPlan && (
        <div className="space-y-2">
          <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Calendar size={14} className="text-blue-600" /> Weekly Breakdown
          </h4>
          {detail.weeklyPlan.map((week, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-700 text-[10px] font-black">W{week.week}</span>
                  <EditableField value={week.title} onSave={v => onSaveDetail(`week_${i}_title`, v)} className="text-xs font-bold text-slate-900" />
                </div>
                <span className="text-[10px] font-extrabold text-blue-600">₹{(week.savingsTarget || 0).toLocaleString('en-IN')}</span>
              </div>
              <EditableListItem items={week.actions} onSave={v => onSaveDetail(`week_${i}_actions`, v)} />
              {week.keyMilestone && (
                <div className="flex items-center gap-1.5 text-[10px] text-amber-700 bg-amber-50 px-2 py-1 rounded-lg">
                  <Target size={10} className="text-amber-500 shrink-0" />
                  <EditableField value={week.keyMilestone} onSave={v => onSaveDetail(`week_${i}_milestone`, v)} className="font-bold" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* Daily Actions */}
      {detail.dailyActions && (
        <div className="space-y-2">
          <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Zap size={14} className="text-amber-500" /> Daily Micro-Actions
          </h4>
          {detail.dailyActions.map((action, i) => (
            <div key={i} className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
              <div className="flex items-center justify-between">
                <EditableField value={action.action} onSave={v => onSaveDetail(`action_${i}_action`, v)} className="text-xs font-bold text-slate-900" />
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[9px] font-bold">{action.savings}</span>
              </div>
              {action.whyItWorks && <p className="text-[10px] text-slate-500">💡 {action.whyItWorks}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═════════════════════════════════════════════════════════════════
export default function GoalRoadmapPage() {
  const hydrated = useHydration();
  const router = useRouter();
  const params = useParams();
  const goalId = params?.goalId;

  const { goals, isAuthenticated, coins, completedModules, streak,
    updateGoalRoadmap, updateGoalMonthDetail, updateGoalSaved } = useAppStore();

  const goal = goals.find(g => g.id === goalId);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);

  // Quick save deposit input
  const [depositAmount, setDepositAmount] = useState('');
  const [showDepositModal, setShowDepositModal] = useState(false);

  // Fetch roadmap overview
  useEffect(() => {
    if (!hydrated || !isAuthenticated) return;
    if (!goal) return;
    if (goal.roadmap) return;

    const generate = async () => {
      setLoading(true); setError(null);
      try {
        const res = await fetch('/api/goal-roadmap', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            goal: { name: goal.name, target: goal.target, saved: goal.saved || 0, deadline: goal.deadline, emoji: goal.emoji },
            userContext: { coins, completedModules, streak }
          })
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error);
        updateGoalRoadmap(goalId, data.roadmap);
        toast({ title: "Roadmap Generated! 🗺️" });
      } catch (err) {
        setError(err.message);
      } finally { setLoading(false); }
    };
    generate();
  }, [hydrated, isAuthenticated, goal, goalId, coins, completedModules, streak, updateGoalRoadmap]);

  const fetchMonthDetail = useCallback(async (group) => {
    if (goal?.monthDetails?.[group.id]) {
      setSelectedGroup(group);
      return;
    }

    setSelectedGroup(group);
    setDetailLoading(true);
    try {
      const res = await fetch('/api/goal-roadmap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          goal: { name: goal.name, target: goal.target, saved: goal.saved || 0 },
          userContext: { coins, completedModules, streak },
          mode: 'monthDetail',
          monthGroup: group
        })
      });
      const data = await res.json();
      updateGoalMonthDetail(goalId, group.id, data.monthDetail);
      toast({ title: `Plan ready for ${group.title}! 📋` });
    } catch {
      toast({ title: "Could not load plan", variant: "destructive" });
    } finally { setDetailLoading(false); }
  }, [goal, goalId, coins, completedModules, streak, updateGoalMonthDetail]);

  const handleSaveDetail = useCallback((field, value) => {
    if (!selectedGroup || !goal) return;
    const currentDetail = goal.monthDetails?.[selectedGroup.id] || {};
    let updated = { ...currentDetail };
    updated[field] = value;
    updateGoalMonthDetail(goalId, selectedGroup.id, updated);
    toast({ title: "Updated! ✅" });
  }, [selectedGroup, goal, goalId, updateGoalMonthDetail]);

  const handleAddSavingsSubmit = (e) => {
    e.preventDefault();
    const val = parseFloat(depositAmount);
    if (!val || val <= 0) return;
    updateGoalSaved(goalId, val);
    setDepositAmount('');
    setShowDepositModal(false);
    toast({ title: `Added ₹${val.toLocaleString('en-IN')} to Goal! 🎉` });
  };

  if (!hydrated || !isAuthenticated) {
    return <div className="flex min-h-screen items-center justify-center bg-slate-50"><Loader2 className="size-8 text-blue-600 animate-spin" /></div>;
  }

  if (!goal) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <AlertTriangle className="w-10 h-10 text-amber-500" />
        <p className="text-sm font-bold text-slate-700">Goal not found</p>
        <button onClick={() => router.push('/home/goals')} className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold">Go to Goals</button>
      </div>
    );
  }

  const roadmap = goal.roadmap;
  const totalSaved = goal.saved || 0;
  const completedCount = roadmap?.monthGroups?.filter(g => totalSaved >= g.cumulativeTarget).length || 0;
  const overallProgress = goal.target > 0 ? Math.min(100, (totalSaved / goal.target) * 100) : 0;

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-24 px-4 sm:px-0">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => router.push('/home/goals')} className="p-2 rounded-xl hover:bg-slate-100 text-slate-600 transition-all">
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              {goal.emoji} {goal.name}
            </h1>
            <p className="text-xs text-slate-500">Interactive Game Map & Progress Tracker</p>
          </div>
        </div>
        <button
          onClick={() => setShowDepositModal(true)}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-md shadow-blue-600/20 hover:opacity-95 transition-all"
        >
          <Plus size={14} /> Add Savings
        </button>
      </div>

      {/* Progress Header Card */}
      <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-slate-700">Overall Progress</span>
          <span className="font-black text-blue-600">{Math.round(overallProgress)}% Completed</span>
        </div>
        <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${overallProgress}%` }}
            transition={{ duration: 1 }}
            className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500"
          />
        </div>
        <div className="flex justify-between text-[11px] text-slate-500 font-medium pt-1">
          <span>Saved: <strong className="text-slate-900">₹{totalSaved.toLocaleString('en-IN')}</strong></span>
          <span>Target: <strong className="text-slate-900">₹{(goal.target || 0).toLocaleString('en-IN')}</strong></span>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center py-20 space-y-4">
          <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
          <p className="text-sm font-bold text-slate-900">Building Feasible Roadmap...</p>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center py-16 space-y-3 text-center">
          <AlertTriangle className="w-8 h-8 text-red-500" />
          <p className="text-sm font-bold text-slate-800">{error}</p>
          <button onClick={() => window.location.reload()} className="px-4 py-2 bg-slate-100 rounded-xl text-xs font-bold">Retry</button>
        </div>
      ) : roadmap ? (
        <>
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: Target, label: 'Goal Target', value: `₹${(goal.target || 0).toLocaleString('en-IN')}`, color: '#2563EB' },
              { icon: IndianRupee, label: 'Monthly Goal', value: `₹${(roadmap.monthlySavingsRequired || 0).toLocaleString('en-IN')}`, color: '#4F46E5' },
              { icon: Zap, label: 'Daily Goal', value: `₹${(roadmap.dailyTarget || 0).toLocaleString('en-IN')}`, color: '#7C3AED' },
              { icon: Calendar, label: 'Timeline', value: `${roadmap.totalMonths || 6} Months`, color: '#10B981' },
            ].map((s, i) => (
              <div key={i} className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-center">
                <s.icon size={16} style={{ color: s.color }} className="mx-auto mb-1" />
                <p className="text-sm font-black text-slate-900">{s.value}</p>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Interactive Game Level Map */}
          <div className="relative pt-4" style={{ minHeight: (roadmap.monthGroups?.length || 4) * 220 + 220 }}>
            {/* Path SVG */}
            <GamePathSVG
              groups={roadmap.monthGroups}
              totalSaved={totalSaved}
              onSelectLevel={fetchMonthDetail}
              selectedLevelId={selectedGroup?.id}
            />

            {/* Alternating Cards */}
            <div className="relative z-10 space-y-6">
              {roadmap.monthGroups?.map((group, i) => {
                const isLeft = i % 2 === 0;
                const isDone = totalSaved >= group.cumulativeTarget;
                const isCurrent = !isDone && (i === 0 || totalSaved >= (roadmap.monthGroups[i - 1]?.cumulativeTarget || 0));
                const isSelected = selectedGroup?.id === group.id;

                return (
                  <motion.div
                    key={group.id}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative ${isLeft ? 'mr-auto sm:mr-[52%]' : 'ml-auto sm:ml-[52%]'} max-w-[440px]`}
                  >
                    <div
                      onClick={() => fetchMonthDetail(group)}
                      className={`p-5 rounded-3xl border-2 transition-all cursor-pointer shadow-sm ${
                        isSelected
                          ? 'bg-white border-blue-500 shadow-md ring-2 ring-blue-500/10'
                          : isDone
                            ? 'bg-white border-emerald-300'
                            : isCurrent
                              ? 'bg-white border-blue-300'
                              : 'bg-slate-50/80 border-slate-200'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2.5">
                          <span className="text-2xl">{group.emoji}</span>
                          <div>
                            <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wider">
                              Level {i + 1} • {group.monthRange}
                            </span>
                            <h3 className="font-extrabold text-sm text-slate-900">{group.title}</h3>
                          </div>
                        </div>
                        {isDone ? (
                          <span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">Done ✓</span>
                        ) : isCurrent ? (
                          <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold">Active 🔥</span>
                        ) : (
                          <span className="px-2 py-1 rounded-full bg-slate-200 text-slate-600 text-[10px] font-bold">Locked 🔒</span>
                        )}
                      </div>

                      <p className="text-xs text-slate-600 mb-3">{group.overview}</p>

                      <div className="p-2.5 rounded-xl bg-slate-100/70 border border-slate-200/60 mb-2">
                        <div className="flex justify-between text-[10px] font-bold mb-1">
                          <span className="text-slate-500">Target for Level</span>
                          <span className="text-blue-600">₹{(group.targetSavings || 0).toLocaleString('en-IN')}</span>
                        </div>
                      </div>

                      {group.keyHabit && (
                        <div className="flex items-center gap-1.5 text-[10px] text-emerald-700 font-semibold">
                          <Flame size={12} className="text-emerald-500 shrink-0" />
                          <span>Habit: {group.keyHabit}</span>
                        </div>
                      )}
                    </div>

                    {/* Inline Expandable Detail */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pt-3 overflow-hidden"
                        >
                          <MonthDetailPanel
                            group={group}
                            detail={goal.monthDetails?.[group.id]}
                            loading={detailLoading}
                            onSaveDetail={handleSaveDetail}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Feasibility Warnings & Pro Tips */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {roadmap.warnings && (
              <div className="p-4 rounded-2xl bg-red-50/60 border border-red-200/80 space-y-2">
                <span className="text-xs font-bold text-red-700 flex items-center gap-1.5">
                  <Shield size={14} /> Traps to Avoid
                </span>
                {roadmap.warnings.map((w, idx) => (
                  <div key={idx} className="text-[11px] text-slate-700">
                    <strong>{w.emoji} {w.title}:</strong> {w.detail}
                  </div>
                ))}
              </div>
            )}

            {roadmap.proTips && (
              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-2">
                <span className="text-xs font-bold text-blue-700 flex items-center gap-1.5">
                  <Sparkles size={14} /> Savings Hacks
                </span>
                {roadmap.proTips.map((tip, idx) => (
                  <div key={idx} className="text-[11px] text-slate-700 flex items-start gap-1.5">
                    <span className="text-blue-500">•</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      ) : null}

      {/* Quick Deposit Modal */}
      <AnimatePresence>
        {showDepositModal && (
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
              className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-slate-200 space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base text-slate-900">Add Savings to Goal</h3>
                <button onClick={() => setShowDepositModal(false)} className="p-1 rounded-lg hover:bg-slate-100">
                  <X size={16} className="text-slate-400" />
                </button>
              </div>
              <form onSubmit={handleAddSavingsSubmit} className="space-y-3">
                <div>
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Deposit Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={depositAmount}
                    onChange={e => setDepositAmount(e.target.value)}
                    placeholder="e.g. 500"
                    autoFocus
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20"
                >
                  Deposit & Level Up! 🚀
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
