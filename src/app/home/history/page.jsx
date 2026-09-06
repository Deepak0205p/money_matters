'use client';

import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store/useAppStore';
import { Clock, Coins } from 'lucide-react';
import { ACTIVITY_EMOJI } from '@/lib/data/badges';

export default function HistoryPage() {
  const router = useRouter();
  const { activityLog } = useAppStore();

  return (
    <div className="space-y-6 max-w-4xl mx-auto text-left">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2.5">
            <Clock className="text-emerald-400" size={24} /> Learning History
          </h1>
          <p className="text-sm text-slate-500 mt-1">Everything you have learned and earned so far, all in one place!</p>
        </div>
        <div className="flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-4 py-2">
          <span className="text-xs font-bold text-emerald-400">Total Activities: {activityLog.length}</span>
        </div>
      </div>

      <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-xl">
        {activityLog.length === 0 ? (
          <div className="text-center py-16 space-y-4">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto">
              <Clock size={28} className="text-slate-500" />
            </div>
            <p className="text-base font-bold text-slate-600">No history yet</p>
            <button
              onClick={() => router.push('/home/dashboard')}
              className="btn-emerald px-5 py-2.5 rounded-xl text-xs font-bold cursor-pointer"
            >
              Start Learning Now
            </button>
          </div>
        ) : (
          <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
            {activityLog.map(act => (
              <div key={act.id} className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all border border-slate-200 hover:border-emerald-500/20 group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 group-hover:bg-emerald-500/10 transition-colors text-xl">
                  {ACTIVITY_EMOJI[act.type] || '✨'}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-700 leading-snug">{act.description}</p>
                  <span className="text-xs text-slate-500 mt-1 block">
                    {new Date(act.timestamp).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} at {new Date(act.timestamp).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                  </span>
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
        )}
      </div>
    </div>
  );
}
