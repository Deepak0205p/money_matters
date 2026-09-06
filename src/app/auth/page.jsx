'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { auth, googleProvider } from '@/lib/firebase';
import { 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signOut
} from 'firebase/auth';
import { useAppStore } from '@/lib/store/useAppStore';
import { 
  Lock, Mail, User, ArrowRight, Sparkles, 
  AlertCircle, Loader2, CheckCircle2, ShieldCheck,
  RefreshCw, MailCheck
} from 'lucide-react';

export default function AuthPage() {
  const router = useRouter();
  const { setUser } = useAppStore();

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Verification step state
  const [verifyStep, setVerifyStep] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);
  const [pendingUser, setPendingUser] = useState(null);

  const pollRef = useRef(null);

  // Poll for email verification when on verify step
  useEffect(() => {
    if (!verifyStep || !auth.currentUser) return;

    pollRef.current = setInterval(async () => {
      try {
        await auth.currentUser.reload();
        if (auth.currentUser.emailVerified) {
          clearInterval(pollRef.current);
          setUser({
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName || name || 'Learner',
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL,
            emailVerified: true
          });
          router.push('/home/dashboard');
        }
      } catch (err) {
        console.error('Polling error:', err);
      }
    }, 3000);

    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, [verifyStep, router, setUser, name]);

  // Resend countdown timer
  useEffect(() => {
    if (resendCountdown <= 0) return;
    const timer = setTimeout(() => setResendCountdown(c => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [resendCountdown]);

  // ── EMAIL / PASSWORD AUTH ──
  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        // Sign In
        const cred = await signInWithEmailAndPassword(auth, email, password);

        // Check if email is verified
        if (!cred.user.emailVerified) {
          setPendingUser(cred.user);
          setVerifyStep(true);
          setResendCountdown(60);
          setLoading(false);
          return;
        }

        setUser({
          uid: cred.user.uid,
          displayName: cred.user.displayName || 'Learner',
          email: cred.user.email,
          photoURL: cred.user.photoURL,
          emailVerified: true
        });
        router.push('/home/dashboard');
      } else {
        // Sign Up
        if (!name.trim()) {
          setError('Please enter your full name.');
          setLoading(false);
          return;
        }

        const cred = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(cred.user, { displayName: name });

        // Send verification email
        await sendEmailVerification(cred.user);

        setPendingUser(cred.user);
        setVerifyStep(true);
        setResendCountdown(60);
      }
    } catch (err) {
      console.error('Auth error:', err);
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        setError('Invalid email or password. Please try again.');
      } else if (err.code === 'auth/email-already-in-use') {
        setError('An account with this email already exists. Try signing in.');
      } else if (err.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters long.');
      } else if (err.code === 'auth/too-many-requests') {
        setError('Too many failed attempts. Please try again later.');
      } else {
        setError(err.message || 'Authentication failed. Please check your connection.');
      }
    } finally {
      setLoading(false);
    }
  };

  // ── RESEND VERIFICATION EMAIL ──
  const handleResendVerification = async () => {
    if (resendCountdown > 0) return;
    setVerifyLoading(true);
    setError('');

    try {
      const userToVerify = auth.currentUser || pendingUser;
      if (userToVerify) {
        await sendEmailVerification(userToVerify);
        setResendCountdown(60);
      } else {
        setError('Session expired. Please sign in again.');
        setVerifyStep(false);
      }
    } catch (err) {
      if (err.code === 'auth/too-many-requests') {
        setError('Please wait a moment before requesting another email.');
      } else {
        setError('Failed to resend verification email.');
      }
    } finally {
      setVerifyLoading(false);
    }
  };

  // ── MANUAL CHECK FOR VERIFICATION ──
  const handleCheckVerified = async () => {
    setVerifyLoading(true);
    setError('');

    try {
      if (auth.currentUser) {
        await auth.currentUser.reload();
        if (auth.currentUser.emailVerified) {
          setUser({
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName || name || 'Learner',
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL,
            emailVerified: true
          });
          router.push('/home/dashboard');
        } else {
          setError('Email not yet verified. Please click the link in your email.');
        }
      } else {
        setError('Session lost. Please sign in again.');
        setVerifyStep(false);
      }
    } catch (err) {
      setError('Could not verify status. Please try again.');
    } finally {
      setVerifyLoading(false);
    }
  };

  // ── GOOGLE AUTH (Google accounts are pre-verified) ──
  const handleGoogleAuth = async () => {
    setError('');
    setLoading(true);

    try {
      const cred = await signInWithPopup(auth, googleProvider);
      setUser({
        uid: cred.user.uid,
        displayName: cred.user.displayName || 'Learner',
        email: cred.user.email,
        photoURL: cred.user.photoURL,
        emailVerified: true
      });
      router.push('/home/dashboard');
    } catch (err) {
      console.error('Google Auth error:', err);
      if (err.code !== 'auth/popup-closed-by-user') {
        setError(err.message || 'Google sign in failed.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] flex flex-col items-center justify-center relative overflow-hidden px-4 py-12">
      
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-amber-500/[0.04] blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
        className="w-full max-w-md bg-white border border-slate-200/90 rounded-[2rem] shadow-[0_4px_25px_rgba(0,0,0,0.05)] p-8 relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="size-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto mb-5 shadow-xs"
          >
            <Sparkles className="size-8 text-emerald-700" />
          </motion.div>
          <h1 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Money Matters
          </h1>
          <p className="text-sm text-slate-600">
            {verifyStep 
              ? 'Check your email to verify' 
              : isLogin 
                ? 'Welcome back! Ready to learn?' 
                : 'Create an account to master your money.'}
          </p>
        </div>

        {/* Error Alert */}
        <AnimatePresence>
          {error && (
            <motion.div 
              initial={{ opacity: 0, height: 0, mb: 0 }}
              animate={{ opacity: 1, height: 'auto', mb: 20 }}
              exit={{ opacity: 0, height: 0, mb: 0 }}
              className="bg-rose-50 border border-rose-200 text-rose-700 text-sm px-4 py-3 rounded-xl flex items-start gap-3 overflow-hidden"
            >
              <AlertCircle className="size-4 shrink-0 mt-0.5 text-rose-600" />
              <p className="leading-tight text-xs font-semibold">{error}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {!verifyStep ? (
            /* ── Login / Signup Form ── */
            <motion.div
              key="auth-form"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <form onSubmit={handleEmailAuth} className="space-y-4">
                <AnimatePresence mode="popLayout">
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="relative"
                    >
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                      <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full Name" 
                        className="w-full bg-slate-50 border border-slate-200/90 focus:border-emerald-600 focus:bg-white rounded-xl py-3 pl-11 pr-4 text-slate-900 text-sm outline-none transition-all"
                        required={!isLogin}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address" 
                    className="w-full bg-slate-50 border border-slate-200/90 focus:border-emerald-600 focus:bg-white rounded-xl py-3 pl-11 pr-4 text-slate-900 text-sm outline-none transition-all"
                    required
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" 
                    className="w-full bg-slate-50 border border-slate-200/90 focus:border-emerald-600 focus:bg-white rounded-xl py-3 pl-11 pr-4 text-slate-900 text-sm outline-none transition-all"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold font-display py-3 px-4 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed mt-2 cursor-pointer"
                >
                  {loading ? (
                    <Loader2 className="size-5 animate-spin" />
                  ) : (
                    <>
                      {isLogin ? 'Sign In' : 'Create Account'}
                      <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-slate-200" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">OR</span>
                <div className="flex-1 h-px bg-slate-200" />
              </div>

              {/* Google Auth */}
              <button 
                type="button"
                onClick={handleGoogleAuth}
                disabled={loading}
                className="w-full bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-700 font-bold text-sm py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer shadow-xs"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>

              {/* Guest fallback */}
              <button 
                type="button"
                onClick={() => {
                  useAppStore.getState().loginAsGuest();
                  router.push('/home/dashboard');
                }}
                className="w-full mt-4 text-xs font-bold text-slate-600 hover:text-emerald-800 transition-colors py-2.5 flex justify-center items-center gap-2 rounded-xl bg-slate-50 border border-slate-200 hover:bg-emerald-50/50 cursor-pointer"
              >
                <ShieldCheck className="size-4 text-emerald-700" />
                <span>Continue as Guest (Instant Demo)</span>
              </button>

              {/* Footer Toggle */}
              <p className="text-center text-xs text-slate-500 mt-6">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button 
                  onClick={() => { setIsLogin(!isLogin); setError(''); }}
                  className="text-emerald-700 font-extrabold hover:underline transition-colors cursor-pointer"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </motion.div>
          ) : (
            /* ── Email Verification Step ── */
            <motion.div
              key="verify-form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              {/* Verification Icon */}
              <div className="flex justify-center mb-6">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                  className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700"
                >
                  <MailCheck className="size-10 text-emerald-700" />
                </motion.div>
              </div>

              {/* Email info */}
              <div className="text-center mb-6">
                <p className="text-slate-600 text-sm">
                  We sent a verification link to
                </p>
                <p className="text-slate-900 font-extrabold text-sm mt-1">{pendingUser?.email || email}</p>
                <p className="text-slate-500 text-xs mt-3">
                  Click the link in your email to verify your account.
                </p>
              </div>

              {/* Check Verification Button */}
              <button 
                onClick={handleCheckVerified}
                disabled={verifyLoading}
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold font-display py-3 px-4 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                {verifyLoading ? (
                  <Loader2 className="size-5 animate-spin" />
                ) : (
                  <>
                    I've Verified — Continue
                    <CheckCircle2 className="size-4 group-hover:scale-110 transition-transform" />
                  </>
                )}
              </button>

              {/* Resend Verification */}
              <div className="text-center mt-4">
                {resendCountdown > 0 ? (
                  <p className="text-slate-500 text-xs">
                    Resend email in {resendCountdown}s
                  </p>
                ) : (
                  <button
                    onClick={handleResendVerification}
                    disabled={verifyLoading}
                    className="text-emerald-700 text-xs font-bold hover:underline transition-colors disabled:opacity-50 flex items-center gap-1.5 mx-auto cursor-pointer"
                  >
                    <RefreshCw className="size-3" />
                    {verifyLoading ? 'Sending...' : 'Resend Verification Email'}
                  </button>
                )}
              </div>

              {/* Back to login */}
              <div className="text-center mt-6">
                <button
                  onClick={() => { 
                    setVerifyStep(false); 
                    setError(''); 
                    setResendCountdown(0);
                    clearInterval(pollRef.current);
                  }}
                  className="text-slate-500 text-xs font-bold hover:text-slate-900 transition-colors cursor-pointer"
                >
                  ← Back to sign in
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
