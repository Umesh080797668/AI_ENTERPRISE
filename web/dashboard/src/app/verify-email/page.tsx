'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { Mail, CheckCircle2, AlertCircle, RefreshCw, ArrowLeft } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

function VerifyEmailContent() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  const email = searchParams.get('email'); // Can use this to show email

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return; 
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };
  
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('Text').slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split('').forEach((char, index) => {
      if (index < 6) newOtp[index] = char;
    });
    setOtp(newOtp);
    inputRefs.current[Math.min(pastedData.length - 1, 5)]?.focus();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join('');
    if (code.length !== 6) {
      setError('Please enter the full 6-digit code.');
      return;
    }
    
    setError('');
    setIsLoading(true);

    try {
      // await api.post('/auth/verify-email', { code });
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setTimeout(() => {
        if (type === 'reset') {
          router.push('/reset-password');
        } else {
          router.push('/dashboard');
        }
      }, 2000);
    } catch (err) {
      setError('Invalid verification code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = () => {
    if (resendTimer === 0) {
      setResendTimer(30);
      // api.post('/auth/resend-verification');
    }
  };

  return (
    <div className="w-full max-w-md relative z-10">
      <div className="bg-white rounded-2xl shadow-2xl shadow-black/50 border border-white/10 overflow-hidden backdrop-blur-sm">
        <div className="px-8 pt-8 pb-6 text-center">
          <div className="mx-auto h-16 w-16 bg-blue-50/10 rounded-2xl flex items-center justify-center mb-6 shadow-inner ring-1 ring-blue-100/50">
            <Mail className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Verify your email</h2>
          <p className="mt-2 text-sm text-gray-500 max-w-sm mx-auto">
            We've sent a verification code to {email ? <span className="font-semibold text-gray-900">{decodeURIComponent(email)}</span> : 'your email address'}.
          </p>
        </div>

        <div className="px-8 pb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-between gap-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => { inputRefs.current[index] = el; }}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-12 h-14 text-center text-2xl font-bold rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-gray-50/50 text-gray-900 outline-none transition-all hover:bg-white"
                />
              ))}
            </div>

            {error && (
              <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg flex items-center gap-2 animate-pulse border border-red-100">
                <AlertCircle className="h-4 w-4" />
                {error}
              </div>
            )}
            
            {isSuccess && (
              <div className="p-3 bg-green-50 text-green-700 text-sm rounded-lg flex items-center gap-2 animate-pulse border border-green-100">
                <CheckCircle2 className="h-4 w-4" />
                Email verified successfully!
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || isSuccess}
              className="w-full flex items-center justify-center py-2.5 px-4 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-gray-900/20 hover:shadow-gray-900/40 transform active:scale-[0.98]"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Verifying...
                </span>
              ) : (
                'Verify Email'
              )}
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>Didn't receive the code?</span>
            <button
              type="button"
              onClick={handleResend}
              disabled={resendTimer > 0}
              className="font-medium text-blue-600 hover:text-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
            >
              {resendTimer > 0 ? `Resend in ${resendTimer}s` : 'Resend'}
              <RefreshCw className={`h-3 w-3 ${resendTimer === 0 ? 'group-hover:rotate-180 transition-transform' : ''}`} />
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <Link 
              href="/login" 
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 mr-1 transition-transform group-hover:-translate-x-1" />
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-black py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-black/80 to-purple-900/90"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px]"></div>
      </div>

      <Suspense fallback={
        <div className="flex items-center justify-center w-full h-full z-10 text-white">
            <div className="flex flex-col items-center">
              <div className="h-8 w-8 border-2 border-white/30 border-t-white rounded-full animate-spin mb-2" />
              <div>Loading...</div>
            </div>
        </div>
      }>
        <VerifyEmailContent />
      </Suspense>
    </div>
  );
}
