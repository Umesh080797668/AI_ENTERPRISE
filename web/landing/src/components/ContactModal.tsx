
'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export function ContactModal({ isOpen, onClose, initialTopic = 'general' }: ContactModalProps) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [topic, setTopic] = useState(initialTopic);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Support request submitted:', { email, topic, message });
    setSubmitted(true);
    setTimeout(() => {
        onClose();
        setSubmitted(false);
        setEmail('');
        setMessage('');
        setTopic(initialTopic);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl dark:bg-slate-900">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Contact Support</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Current Wait Time: &lt; 24 hours
          </p>
        </div>

        {submitted ? (
             <div className="text-center py-10">
                <div className="text-green-500 text-xl font-bold mb-2">Message Sent!</div>
                <p className="text-slate-600 dark:text-slate-300">We'll get back to you shortly.</p>
             </div>
        ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Email Address
                </label>
                <input
                type="email"
                required
                className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Topic
                </label>
                <select
                className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                >
                <option value="general">General Inquiry</option>
                <option value="billing">Billing & Plans</option>
                <option value="technical">Technical Support</option>
                <option value="enterprise">Enterprise Sales</option>
                <option value="legal">Legal Inquiries</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Message
                </label>
                <textarea
                required
                rows={4}
                className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                placeholder="How can we help?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
            </div>

            <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Send Message
            </button>
            </form>
        )}
      </div>
    </div>
  );
}
