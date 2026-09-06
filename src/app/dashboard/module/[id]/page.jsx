"use client";

import { useCallback, useEffect, useRef } from 'react';
import { useRouter, useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useAppStore, useHydration } from '@/lib/store/useAppStore';
import { getModuleById } from '@/data/modulesIndex';

// Dynamically import SwipeCardViewer only when needed
const DynamicSwipeCardViewer = dynamic(
  () => import('@/components/shared/SwipeCardViewer').then(m => m.SwipeCardViewer),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 space-y-4">
        <div className="w-12 h-12 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 animate-spin" />
        <p className="text-xs font-bold text-slate-600">Loading Module Cards...</p>
      </div>
    )
  }
);

/**
 * /dashboard/module/[id] — Dedicated page for module learning.
 * Renders the DynamicSwipeCardViewer lazily.
 */
export default function ModulePage() {
  const router = useRouter();
  const params = useParams();
  const moduleId = Number(params.id);
  const hydrated = useHydration();
  
  const {
    isAuthenticated,
    completedModules,
    completeModule,
    addCoins,
    logActivity
  } = useAppStore();

  const handleClose = useCallback(() => {
    router.push('/home/dashboard');
  }, [router]);

  const handleComplete = useCallback(id => {
    if (!completedModules.includes(id)) {
      completeModule(id);
      addCoins(100);
    }
    router.push('/home/dashboard');
  }, [completedModules, completeModule, addCoins, router]);

  const hasLogged = useRef(false);

  useEffect(() => {
    if (hydrated && isAuthenticated && moduleId && !isNaN(moduleId) && !hasLogged.current) {
      const moduleData = getModuleById(moduleId);
      if (moduleData) {
        logActivity('module_section', `Started Module: ${moduleData.title}`, 0);
        hasLogged.current = true;
      }
    }
  }, [hydrated, isAuthenticated, moduleId, logActivity]);

  if (!hydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="w-12 h-12 rounded-full border-2 border-emerald-500/30 border-t-emerald-500 animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    router.push('/');
    return null;
  }

  if (!moduleId || isNaN(moduleId)) {
    router.push('/home');
    return null;
  }

  return (
    <DynamicSwipeCardViewer
      moduleId={moduleId}
      onClose={handleClose}
      onComplete={handleComplete}
    />
  );
}
