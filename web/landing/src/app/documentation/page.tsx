'use client';

import { Navbar } from '../../components/Navbar';
import { Documentation } from '../../components/Documentation';
import { Footer } from '../../components/Footer';
import { Chatbot } from '../../components/Chatbot';

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main className="flex-1">
        <div className="pt-16">
          <Documentation />
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}