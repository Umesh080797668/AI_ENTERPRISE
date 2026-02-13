'use client';

import { Navbar } from '../../components/Navbar';
import { Careers } from '../../components/Careers';
import { Footer } from '../../components/Footer';
import { Chatbot } from '../../components/Chatbot';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main className="flex-1">
        <div className="pt-16">
          <Careers />
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}