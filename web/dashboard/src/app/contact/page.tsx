'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
           <Link href="/login" className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Login
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Contact Info */}
            <div className="p-8 bg-slate-900 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-blue-400" />
                </div>
                <h1 className="text-2xl font-bold">Contact Us</h1>
              </div>
              
              <p className="text-slate-300 mb-8">
                Have questions about our Enterprise plans or need technical support? We&apos;re here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="font-medium text-white">Email Support</h3>
                    <p className="text-sm text-slate-400 mt-1">support@ai-enterprise.com</p>
                    <p className="text-xs text-slate-500">Response time: &lt; 24 hours</p>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-slate-800 rounded-xl border border-slate-700">
                    <h3 className="font-medium text-white mb-2">Office Hours</h3>
                    <div className="space-y-1 text-sm text-slate-400">
                        <div className="flex justify-between">
                            <span>Monday - Friday</span>
                            <span>9AM - 6PM EST</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Weekend</span>
                            <span>Closed</span>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-4 animate-fade-in-up">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600 mb-6">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-blue-600 font-medium hover:text-blue-700 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                    <input
                      type="text"
                      required
                      className="block w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      className="block w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      className="block w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {isLoading ? (
                       <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                       </span>
                    ) : (
                       <span className="flex items-center gap-2">
                        Send Message <Send className="h-4 w-4" />
                       </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
          
           <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 flex justify-between items-center text-sm text-slate-500">
              <p>© {new Date().getFullYear()} AI Enterprise. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="/terms" className="hover:text-blue-600 transition-colors">Terms</Link>
                <Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy</Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
