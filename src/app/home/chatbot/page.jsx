'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Send, Loader2, Globe, Brain, TrendingUp, PiggyBank,
  Receipt, BarChart2, Plus, MessageSquare, Trash2, Clock,
  Copy, Check, ThumbsUp, ThumbsDown, Sparkles, ChevronDown,
  AlertCircle, WifiOff, Search, MoreHorizontal, PanelLeftClose,
  PanelLeft, ArrowUp, Sigma, Banknote, Wallet, CreditCard,
} from 'lucide-react';
import { MarkdownRenderer } from '@/components/chatbot/markdown-renderer';
import { SourceCard } from '@/components/chatbot/source-card';

/* ─────────────────────────────────────────
   HELPERS
───────────────────────────────────────── */
function generateId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

async function fetchConversations() {
  try {
    const res = await fetch('/api/chatbot/conversations');
    if (res.ok) return await res.json();
  } catch (_) {}
  return [];
}

/* ─────────────────────────────────────────
   TYPING ANIMATION
───────────────────────────────────────── */
function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 px-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full bg-blue-400"
          animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   COPY BUTTON
───────────────────────────────────────── */
function CopyBtn({ text }) {
  const [ok, setOk] = useState(false);
  const doCopy = async () => {
    await navigator.clipboard.writeText(text).catch(() => {});
    setOk(true);
    setTimeout(() => setOk(false), 2000);
  };
  return (
    <button onClick={doCopy} title="Copy"
      className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-all">
      {ok ? <Check className="size-3.5 text-blue-500" /> : <Copy className="size-3.5" />}
    </button>
  );
}

/* ─────────────────────────────────────────
   ROUTE BADGE
───────────────────────────────────────── */
function RouteBadge({ route }) {
  if (route === 'ONLINE')
    return (
      <span className="inline-flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200">
        <Globe className="size-2.5" /> Live
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-200">
      <Brain className="size-2.5" /> AI
    </span>
  );
}

/* ─────────────────────────────────────────
   MESSAGE ROW
───────────────────────────────────────── */
function MessageRow({ message }) {
  const isUser = message.role === 'user';
  const [feedback, setFeedback] = useState(null);

  return (
    <div className={`group w-full ${isUser ? 'py-4' : 'py-5 px-4 sm:px-0 bg-slate-50/50'}`}>
      <div className="max-w-3xl mx-auto flex gap-3.5">
        {/* Avatar */}
        <div className="shrink-0 mt-0.5">
          {isUser ? (
            <div className="size-8 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-[11px] font-bold text-white shadow-sm">
              U
            </div>
          ) : (
            <div className="size-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-sm">
              <Sparkles className="size-4 text-white" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Name + time */}
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[13px] font-bold text-slate-900">
              {isUser ? 'You' : 'Money Mentor'}
            </span>
            {!isUser && message.route && <RouteBadge route={message.route} />}
            {!isUser && message.latency !== undefined && (
              <span className="text-[10px] text-slate-400 flex items-center gap-0.5">
                <Clock className="size-2.5" />
                {message.latency < 1000 ? `${Math.round(message.latency)}ms` : `${(message.latency / 1000).toFixed(1)}s`}
              </span>
            )}
          </div>

          {/* Text */}
          <div className="text-[14px] leading-[1.75] text-slate-800">
            {isUser ? (
              <p className="whitespace-pre-wrap">{message.content}</p>
            ) : message.content ? (
              <MarkdownRenderer content={message.content} />
            ) : (
              <TypingIndicator />
            )}
          </div>

          {/* AI actions — hover reveal */}
          {!isUser && message.content && (
            <div className="flex items-center gap-0.5 mt-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <CopyBtn text={message.content} />
              <button onClick={() => setFeedback('up')}
                className={`p-1.5 rounded-lg transition-all hover:bg-slate-100 ${feedback === 'up' ? 'text-blue-500' : 'text-slate-400 hover:text-slate-600'}`}>
                <ThumbsUp className="size-3.5" />
              </button>
              <button onClick={() => setFeedback('down')}
                className={`p-1.5 rounded-lg transition-all hover:bg-slate-100 ${feedback === 'down' ? 'text-red-400' : 'text-slate-400 hover:text-slate-600'}`}>
                <ThumbsDown className="size-3.5" />
              </button>
            </div>
          )}

          {/* Sources */}
          {!isUser && message.sources?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {message.sources.map((url, idx) => <SourceCard key={idx} url={url} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   SUGGESTION CARD
───────────────────────────────────────── */
function SuggestionCard({ icon: Icon, label, query, color, onClick }) {
  return (
    <button onClick={() => onClick(query)}
      className="group flex items-center gap-3 text-left bg-white hover:bg-gradient-to-br hover:from-blue-50/80 hover:to-indigo-50/50 border border-slate-200/80 hover:border-blue-300/60 rounded-2xl px-4 py-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(59,130,246,0.1)] transition-all duration-200 cursor-pointer">
      <div className={`shrink-0 size-9 rounded-xl flex items-center justify-center ${color}`}>
        <Icon className="size-4" />
      </div>
      <span className="text-[13px] text-slate-700 group-hover:text-blue-800 transition-colors leading-snug font-medium">{label}</span>
    </button>
  );
}

/* ═══════════════════════════════════════════
   MAIN PAGE
═════════════════════════════════════════ */
export default function ChatbotPage() {
  const [conversations, setConversations] = useState([]);
  const [activeConvId, setActiveConvId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [backendOk, setBackendOk] = useState(false);
  const [checkingHealth, setCheckingHealth] = useState(true);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const chatRef = useRef(null);
  const textareaRef = useRef(null);

  /* ── scroll ── */
  const scrollToBottom = useCallback((smooth = true) => {
    if (chatRef.current) {
      chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: smooth ? 'smooth' : 'instant' });
    }
  }, []);

  useEffect(() => {
    const el = chatRef.current;
    if (!el) return;
    const onScroll = () => setShowScrollBtn(el.scrollHeight - el.scrollTop - el.clientHeight > 200);
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setTimeout(() => scrollToBottom(false), 60); }, [messages, isLoading]);

  /* ── health ── */
  const checkHealth = useCallback(async () => {
    try { const res = await fetch('/api/chatbot/health'); setBackendOk(res.ok); }
    catch { setBackendOk(false); }
    finally { setCheckingHealth(false); }
  }, []);

  useEffect(() => {
    checkHealth();
    const t = setInterval(checkHealth, 15000);
    return () => clearInterval(t);
  }, [checkHealth]);

  /* ── conversations ── */
  const reloadList = useCallback(async () => {
    const data = await fetchConversations();
    setConversations(data);
  }, []);

  useEffect(() => { reloadList(); }, [activeConvId]);

  const selectConv = async (id) => {
    setActiveConvId(id);
    try {
      const res = await fetch(`/api/chatbot/conversations/${id}`);
      if (res.ok) {
        const data = await res.json();
        setMessages(data.map((m) => ({
          id: m.id, role: m.role, content: m.content,
          route: m.route, sources: m.sources, latency: m.latency_ms, timestamp: m.created_at,
        })));
      }
    } catch (_) {}
  };

  const newChat = () => { setActiveConvId(null); setMessages([]); setError(null); };

  const deleteConv = async (id, e) => {
    e.stopPropagation();
    await fetch(`/api/chatbot/conversations/${id}`, { method: 'DELETE' }).catch(() => {});
    setConversations((prev) => prev.filter((c) => c.id !== id));
    if (activeConvId === id) newChat();
  };

  /* ── send ── */
  const send = async (overrideText) => {
    const text = (overrideText ?? input).trim();
    if (!text || isLoading) return;
    setError(null);
    setMessages((prev) => [...prev, { id: generateId(), role: 'user', content: text, timestamp: Date.now() }]);
    setInput('');
    setIsLoading(true);
    if (textareaRef.current) textareaRef.current.style.height = 'auto';

    try {
      const res = await fetch('/api/chatbot/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, conversationId: activeConvId }),
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);

      const newId = res.headers.get('X-Conversation-Id');
      if (newId && newId !== activeConvId) setActiveConvId(newId);

      const reader = res.body.getReader();
      const dec = new TextDecoder();
      const aId = generateId();
      setMessages((prev) => [...prev, { id: aId, role: 'assistant', content: '', timestamp: Date.now() }]);

      let buf = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        for (const ev of dec.decode(value, { stream: true }).split('\n\n')) {
          if (!ev.startsWith('data: ')) continue;
          try {
            const d = JSON.parse(ev.slice(6));
            if (d.type === 'metadata') setMessages((p) => p.map((m) => m.id === aId ? { ...m, route: d.route, sources: d.sources } : m));
            else if (d.type === 'chunk') { buf += d.content; setMessages((p) => p.map((m) => m.id === aId ? { ...m, content: buf } : m)); }
            else if (d.type === 'done') setMessages((p) => p.map((m) => m.id === aId ? { ...m, latency: d.latency_ms } : m));
            else if (d.type === 'error') setError(d.message);
          } catch (_) {}
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setIsLoading(false);
      textareaRef.current?.focus();
    }
  };

  const onKey = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } };

  const SUGGESTIONS = [
    { icon: TrendingUp, label: "What's Nifty and Sensex doing today?", query: "What's the Nifty and Sensex doing today?", color: 'bg-emerald-100 text-emerald-600' },
    { icon: PiggyBank, label: 'Best SIP funds to start with ₹5,000/month', query: 'Best SIP mutual funds to start with ₹5000/month', color: 'bg-violet-100 text-violet-600' },
    { icon: Receipt, label: 'Explain the new tax regime for FY 2024-25', query: 'How does the new Indian tax regime work for FY 2024-25?', color: 'bg-amber-100 text-amber-600' },
    { icon: BarChart2, label: 'What are FII and DII flows saying about markets?', query: 'What are FII and DII flows saying about Indian markets?', color: 'bg-sky-100 text-sky-600' },
    { icon: Wallet, label: 'How to build an emergency fund as a student?', query: 'How to build an emergency fund as a student in India?', color: 'bg-rose-100 text-rose-600' },
    { icon: CreditCard, label: 'Credit card vs debit card — which is better?', query: 'Credit card vs debit card which is better for Indian students?', color: 'bg-indigo-100 text-indigo-600' },
  ];

  const isEmpty = messages.length === 0 && !isLoading;
  const filteredConvs = conversations.filter(c => !searchQuery || c.title?.toLowerCase().includes(searchQuery.toLowerCase()));

  /* ════════════════════════════════════════
     RENDER
  ════════════════════════════════════════ */
  return (
    <div className="flex h-full bg-slate-50">

      {/* ══════════ LEFT SIDEBAR ══════════ */}
      <AnimatePresence mode="wait">
        {sidebarOpen && (
          <motion.aside
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 280, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden md:flex flex-col bg-white border-r border-slate-200 h-full overflow-hidden shrink-0"
          >
            {/* Header */}
            <div className="p-4 pb-3 shrink-0">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="size-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-sm">
                    <Sparkles className="size-4 text-white" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900">Money Mentor</h2>
                    <p className="text-[10px] text-slate-400 font-medium">AI Financial Advisor</p>
                  </div>
                </div>
                <button onClick={() => setSidebarOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all">
                  <PanelLeftClose className="size-4" />
                </button>
              </div>

              {/* New Chat */}
              <button onClick={newChat}
                className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-bold transition-all shadow-sm shadow-blue-600/20">
                <Plus className="size-4" /> New Chat
              </button>

              {/* Search */}
              <div className="relative mt-3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search conversations..."
                  className="w-full pl-9 pr-3 py-2 text-[12px] bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/20 text-slate-700 placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Conversation list */}
            <div className="flex-1 overflow-y-auto px-3 pb-3" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(16,185,129,0.15) transparent' }}>
              {filteredConvs.length > 0 && (
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest px-1 mb-2">Recent</p>
              )}

              {filteredConvs.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="size-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-3">
                    <MessageSquare className="size-5 text-slate-300" />
                  </div>
                  <p className="text-[12px] text-slate-400 font-medium">No conversations yet</p>
                  <p className="text-[10px] text-slate-300 mt-0.5">Start a new chat below</p>
                </div>
              ) : (
                filteredConvs.map((c, i) => (
                  <motion.div
                    key={c.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.02 }}
                    onClick={() => selectConv(c.id)}
                    className={`group flex items-center justify-between rounded-xl px-3 py-2.5 cursor-pointer transition-all mb-1 ${
                      activeConvId === c.id
                        ? 'bg-blue-50 border border-blue-200/80 text-blue-800'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 overflow-hidden min-w-0">
                      <div className={`size-7 rounded-lg flex items-center justify-center shrink-0 ${
                        activeConvId === c.id ? 'bg-blue-100' : 'bg-slate-100'
                      }`}>
                        <MessageSquare className={`size-3.5 ${activeConvId === c.id ? 'text-blue-600' : 'text-slate-400'}`} />
                      </div>
                      <span className="truncate text-[12px] font-medium">{c.title || 'New Conversation'}</span>
                    </div>
                    <button onClick={(e) => deleteConv(c.id, e)}
                      className="size-5 opacity-0 group-hover:opacity-100 transition-opacity rounded flex items-center justify-center hover:text-red-500 shrink-0 ml-1">
                      <Trash2 className="size-3" />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Status footer */}
            <div className="px-4 py-3 border-t border-slate-100 shrink-0 flex items-center gap-2">
              {checkingHealth ? (
                <Loader2 className="size-3 animate-spin text-slate-400" />
              ) : backendOk ? (
                <span className="relative flex size-2">
                  <span className="animate-ping absolute size-full rounded-full bg-blue-400 opacity-40" />
                  <span className="relative size-2 rounded-full bg-blue-500" />
                </span>
              ) : (
                <WifiOff className="size-3 text-red-500" />
              )}
              <span className={`text-[11px] font-medium ${checkingHealth ? 'text-slate-400' : backendOk ? 'text-blue-600' : 'text-red-500'}`}>
                {checkingHealth ? 'Checking...' : backendOk ? 'Connected' : 'Offline'}
              </span>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* ══════════ MAIN CONTENT ══════════ */}
      <div className="flex flex-1 flex-col min-w-0 relative overflow-hidden">

        {/* ── Top bar ── */}
        <div className="shrink-0 flex items-center justify-between px-4 py-3 bg-white border-b border-slate-200/80">
          <div className="flex items-center gap-3">
            {!sidebarOpen && (
              <button onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all">
                <PanelLeft className="size-4" />
              </button>
            )}
            <div className="flex items-center gap-2">
              <div className="size-7 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center md:hidden">
                <Sparkles className="size-3.5 text-white" />
              </div>
              <div>
                <h1 className="text-[13px] font-bold text-slate-900">Money Mentor</h1>
                <p className="text-[10px] text-slate-400 font-medium hidden sm:block">Ask anything about finance</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={newChat}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all">
              <Plus className="size-4" />
            </button>
          </div>
        </div>

        {/* ── Chat scroll area ── */}
        <div ref={chatRef} className="flex-1 overflow-y-auto"
          style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.06) transparent' }}>

          {isEmpty ? (
            /* ── EMPTY STATE ── */
            <div className="flex flex-col items-center justify-center min-h-full px-4 pb-8 pt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="flex flex-col items-center text-center gap-8 w-full max-w-2xl"
              >
                {/* Logo + Heading */}
                <div className="space-y-3">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                    className="size-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto shadow-lg shadow-blue-500/20"
                  >
                    <Sparkles className="size-7 text-white" />
                  </motion.div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Money Mentor</span>
                  </h1>
                  <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                    Your AI financial advisor. Ask me anything about investing, saving, budgeting, taxes, or personal finance in India.
                  </p>
                </div>

                {/* Suggestion grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
                  {SUGGESTIONS.map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                    >
                      <SuggestionCard {...s} onClick={send} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ) : (
            /* ── MESSAGES ── */
            <div className="divide-y divide-slate-100/80">
              <AnimatePresence mode="popLayout" initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MessageRow message={msg} />
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing indicator */}
              {isLoading && messages[messages.length - 1]?.role !== 'assistant' && (
                <div className="py-5 px-4 sm:px-0">
                  <div className="max-w-3xl mx-auto flex gap-3.5">
                    <div className="size-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-sm">
                      <Sparkles className="size-4 text-white" />
                    </div>
                    <div className="flex flex-col gap-1 pt-1">
                      <span className="text-[13px] font-bold text-slate-900">Money Mentor</span>
                      <TypingIndicator />
                    </div>
                  </div>
                </div>
              )}
              <div className="h-6" />
            </div>
          )}
        </div>

        {/* Scroll-to-bottom */}
        <AnimatePresence>
          {showScrollBtn && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => scrollToBottom()}
              className="absolute bottom-28 right-6 size-9 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-all z-10">
              <ChevronDown className="size-4" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Error bar */}
        <AnimatePresence>
          {error && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
              className="mx-auto w-full max-w-3xl px-4 pb-2">
              <div className="flex items-center justify-between bg-red-50 border border-red-200 text-red-700 text-xs px-4 py-2.5 rounded-xl">
                <div className="flex items-center gap-2">
                  <AlertCircle className="size-3.5 shrink-0 text-red-500" />
                  {error}
                </div>
                <button onClick={() => setError(null)} className="font-semibold hover:text-red-900 transition-colors ml-3">✕</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ══════════ INPUT BAR ══════════ */}
        <div className="shrink-0 px-4 pb-4 pt-2 bg-slate-50">
          <div className="mx-auto max-w-3xl">
            <div className={`relative flex items-end rounded-2xl bg-white border shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 ${
              !backendOk && !checkingHealth ? 'border-red-300' : 'border-slate-200 focus-within:border-blue-400 focus-within:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]'
            }`}>
              <textarea
                ref={textareaRef}
                id="chatbot-input"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  e.target.style.height = 'auto';
                  e.target.style.height = Math.min(e.target.scrollHeight, 200) + 'px';
                }}
                onKeyDown={onKey}
                placeholder={
                  checkingHealth ? 'Checking connection...'
                  : !backendOk ? 'Backend offline — please start the server'
                  : 'Ask about investing, saving, taxes...'
                }
                disabled={isLoading || !backendOk}
                rows={1}
                className="flex-1 min-h-[48px] max-h-[200px] resize-none bg-transparent border-0 focus:outline-none px-4 py-3 text-[14px] text-slate-900 placeholder:text-slate-400 disabled:opacity-40 disabled:cursor-not-allowed leading-relaxed"
              />

              {/* Send button */}
              <div className="p-2 shrink-0">
                <motion.button
                  whileHover={input.trim() && backendOk && !isLoading ? { scale: 1.05 } : {}}
                  whileTap={input.trim() && backendOk && !isLoading ? { scale: 0.95 } : {}}
                  onClick={() => send()}
                  disabled={!input.trim() || isLoading || !backendOk}
                  id="chatbot-send-btn"
                  className={`size-9 rounded-xl flex items-center justify-center transition-all duration-150 ${
                    input.trim() && backendOk && !isLoading
                      ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-sm shadow-blue-600/20 hover:shadow-md hover:shadow-blue-600/30'
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}>
                  {isLoading
                    ? <Loader2 className="size-4 animate-spin" />
                    : <ArrowUp className="size-4" strokeWidth={2.5} />
                  }
                </motion.button>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-center text-[10px] text-slate-400 mt-2">
              Money Mentor can make mistakes. Not financial advice — always verify before investing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
