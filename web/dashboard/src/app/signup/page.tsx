'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, User, Github, CheckCircle2, ChevronRight, Chrome, ArrowRight } from 'lucide-react';
import api from '@/lib/axios';

export default function SignupPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1639322537228-ad7117a73d2a?q=80&w=2544&auto=format&fit=crop',
      quote: "This platform has completely transformed how we handle our internal workflows. The AI integration is seamless and incredibly powerful.",
      author: "Elena Mars",
      role: "CTO at TechFlow Inc.",
      initials: "EM"
    },
    {
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2560&auto=format&fit=crop',
      quote: "Automating data ingestion has never been easier. We reduced our processing time by 80% within the first week.",
      author: "James Chen",
      role: "VP of Engineering at DataCorp",
      initials: "JC"
    },
    {
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2560&auto=format&fit=crop',
      quote: "The security features are top-notch. Finally, an enterprise AI solution we can trust with our sensitive data.",
      author: "Sarah Miller",
      role: "Head of Security at FinSecure",
      initials: "SM"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      const response = await api.post('/auth/register', { firstname, lastname, email, password });
      // const { token } = response.data;
      // localStorage.setItem('token', token);
      
      // Navigate to verification page with email in query params for context
      router.push(`/verify-email?email=${encodeURIComponent(email)}&type=signup`);
    } catch (err: any) {
      setError('Registration failed. Please check your details and try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const SocialButton = ({ icon: Icon, label, onClick }: { icon: any, label: string, onClick?: () => void }) => (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-blue-200 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all duration-200"
    >
      <Icon className="h-5 w-5 text-gray-900" />
      <span>{label}</span>
      <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );

  return (
    <div className="flex min-h-screen w-full bg-gray-50/50">
      {/* Left Panel - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-16 xl:p-24 overflow-y-auto">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Create your account
            </h2>
            <p className="text-base text-gray-600">
              Start your 14-day free trial. No credit card required. <br/>
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500 hover:underline transition-all">
                Sign in here
              </Link>
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <SocialButton icon={Github} label="GitHub" />
              <SocialButton icon={Chrome} label="Google" />
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-gray-500 font-medium">Or register with email</span>
              </div>
            </div>
          </div>
          
          <form className="space-y-5" onSubmit={handleSignup}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5 overflow-hidden text-ellipsis whitespace-nowrap">First Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    required
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-gray-50/50 text-gray-900 placeholder-gray-400 transition-all hover:bg-white"
                    placeholder="John"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5 overflow-hidden text-ellipsis whitespace-nowrap">Last Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    required
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-gray-50/50 text-gray-900 placeholder-gray-400 transition-all hover:bg-white"
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-gray-50/50 text-gray-900 placeholder-gray-400 transition-all hover:bg-white"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Create Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-gray-50/50 text-gray-900 placeholder-gray-400 transition-all hover:bg-white"
                  placeholder="Min. 8 characters"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Must be at least 8 characters containing a number and symbol.
              </p>
            </div>

            {error && (
              <div className="rounded-xl bg-red-50 p-4 border border-red-100 flex items-start animate-fade-in">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-red-500 rotate-45" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Registration Error</h3>
                  <div className="mt-1 text-sm text-red-700">{error}</div>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="group w-full flex items-center justify-center py-3 px-4 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-gray-900/20 hover:shadow-gray-900/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              {isLoading ? (
                <span className="flex items-center gap-2 relative z-10">
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Creating Account...
                </span>
              ) : (
                <span className="flex items-center gap-2 relative z-10">
                  Create Account <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              )}
            </button>
          </form>
          
          <div className="mt-6">
            <p className="text-xs text-center text-gray-500 max-w-xs mx-auto">
              By registering, you agree to our{' '}
              <Link href="/terms" className="underline hover:text-gray-900">Terms of Service</Link>{' '}
              and{' '}
              <Link href="/privacy" className="underline hover:text-gray-900">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel - Branding (Hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 bg-black relative flex-col justify-end p-16 overflow-hidden">
        {/* Background Carousel */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
             <div 
               className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear transform scale-105"
               style={{ 
                 backgroundImage: `url('${slide.image}')`,
                 transform: index === currentSlide ? 'scale(1.1)' : 'scale(1.0)',
               }}
             ></div>
             {/* Gradient Overlay - clear top, dark bottom for text */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          </div>
        ))}
        
        {/* Decorative blur elements matching login page - reduced opacity for better image visibility */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-lg">
          <div className="relative h-[320px]">
             {slides.map((slide, index) => (
                <div 
                  key={index} 
                  className={`absolute bottom-0 left-0 w-full transition-all duration-700 ease-out ${
                    index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm self-start mb-6">
                     <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
                     <span className="text-xs font-medium text-blue-300 uppercase tracking-wider">Enterprise Ready</span>
                  </div>

                  <blockquote className="text-2xl font-medium text-white leading-relaxed mb-8 block drop-shadow-lg">
                    &quot;{slide.quote}&quot;
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                     <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 p-[2px] shadow-lg shadow-indigo-900/20">
                       <div className="h-full w-full rounded-full bg-slate-800 flex items-center justify-center text-white font-bold text-sm tracking-wide">{slide.initials}</div>
                     </div>
                     <div>
                       <div className="text-white font-semibold text-lg drop-shadow-md">{slide.author}</div>
                       <div className="text-slate-300 text-sm drop-shadow-md">{slide.role}</div>
                     </div>
                  </div>
                </div>
             ))}
          </div>

          <div className="flex gap-2 mt-8">
             {slides.map((_, index) => (
               <button
                 key={index}
                 onClick={() => setCurrentSlide(index)}
                 className={`h-1.5 rounded-full transition-all duration-300 ${
                   index === currentSlide ? 'w-8 bg-blue-500' : 'w-2 bg-slate-600 hover:bg-slate-500' 
                 }`}
                 aria-label={`Go to slide ${index + 1}`}
               />
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
