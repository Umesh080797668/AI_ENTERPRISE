'use client';

import { Navbar } from '../../components/Navbar';
import { Contact } from '../../components/Contact';
import { Footer } from '../../components/Footer';
import { Chatbot } from '../../components/Chatbot';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main className="flex-1">
        <div className="pt-16">
          <Contact />
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}