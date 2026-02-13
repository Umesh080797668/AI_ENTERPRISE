'use client';

import { Navbar } from '../../components/Navbar';
import { APIReference } from '../../components/APIReference';
import { Footer } from '../../components/Footer';
import { Chatbot } from '../../components/Chatbot';

export default function APIReferencePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main className="flex-1">
        <div className="pt-16">
          <APIReference />
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}