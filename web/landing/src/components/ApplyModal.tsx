'use client';

import React, { useState, useRef } from 'react';
import { X, Upload, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
}

export function ApplyModal({ isOpen, onClose, jobTitle }: ApplyModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Application submitted:', { 
        job: jobTitle || 'General Application',
        name, 
        email, 
        resume: resume?.name, 
        coverLetter 
    });
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    setTimeout(() => {
        handleClose();
    }, 2500);
  };

  const handleClose = () => {
      onClose();
      // Reset form on close after a short delay
      setTimeout(() => {
          setName('');
          setEmail('');
          setResume(null);
          setCoverLetter('');
          setIsSuccess(false);
      }, 300);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden"
        >
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 z-10 p-1 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          {isSuccess ? (
             <div className="flex flex-col items-center justify-center p-12 text-center h-full min-h-[400px]">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Application Received!</h2>
                <p className="text-slate-600">
                    Thanks for applying to {jobTitle ? `the ${jobTitle} position` : 'join our team'}. 
                    We'll review your information and get back to you shortly.
                </p>
             </div>
          ) : (
            <div className="p-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900">
                        {jobTitle ? `Apply for ${jobTitle}` : 'General Application'}
                    </h2>
                    <p className="mt-2 text-slate-600">
                        Join us in building the future of enterprise AI.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                            placeholder="Jane Doe"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                            placeholder="jane@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Resume/CV
                        </label>
                        <div 
                            onClick={() => fileInputRef.current?.click()}
                            className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all group"
                        >
                            <input 
                                type="file" 
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                className="hidden" 
                                accept=".pdf,.doc,.docx"
                            />
                            {resume ? (
                                <div className="flex items-center justify-center gap-2 text-blue-600 font-medium">
                                    <CheckCircle2 className="h-5 w-5" />
                                    <span className="truncate max-w-[200px]">{resume.name}</span>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center gap-2 text-slate-500 group-hover:text-blue-600">
                                    <Upload className="h-8 w-8 mb-1" />
                                    <span className="text-sm font-medium">Click to upload or drag and drop</span>
                                    <span className="text-xs text-slate-400">PDF, DOC up to 5MB</span>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Cover Letter (Optional)
                        </label>
                        <textarea
                            value={coverLetter}
                            onChange={(e) => setCoverLetter(e.target.value)}
                            rows={3}
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                            placeholder="Tell us why you're a great fit..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            'Submit Application'
                        )}
                    </button>
                </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
