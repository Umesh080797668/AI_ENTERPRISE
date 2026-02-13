'use client';

import { Navbar } from '../../../../components/Navbar';
import { Footer } from '../../../../components/Footer';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Share2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function EventDetailsPage({ params }: { params: { id: string } }) {
  // Mock event data depending on ID (simplified for this example)
  const event = {
    title: "AI Developer Meetup - San Francisco",
    date: "March 15, 2026",
    time: "6:00 PM - 9:00 PM PST",
    location: "Tech Hub SF, 123 Market St",
    type: "In-Person",
    description: "Join us for our monthly meetup featuring talks on the latest AI developments, networking opportunities with industry experts, and food & drinks. This month we're focusing on Generative AI in Production."
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/community" className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Community
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
          >
            <div className="h-48 md:h-64 bg-gradient-to-r from-blue-600 to-indigo-600 relative">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
                <div className="bg-white/20 backdrop-blur-sm inline-block px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {event.type}
                </div>
                <h1 className="text-3xl md:text-5xl font-bold">{event.title}</h1>
              </div>
            </div>
            
            <div className="p-6 md:p-10 grid md:grid-cols-3 gap-10">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">About this Event</h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {event.description}
                </p>
                <div className="border-t border-slate-200 pt-8">
                  <h3 className="text-xl font-bold mb-4">Agenda</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <span className="font-mono text-blue-600 font-semibold">18:00</span>
                      <span className="text-slate-700">Doors Open & Networking</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-mono text-blue-600 font-semibold">18:30</span>
                      <span className="text-slate-700">Keynote: The Future of LLMs</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-mono text-blue-600 font-semibold">19:30</span>
                      <span className="text-slate-700">Break & Refreshments</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-mono text-blue-600 font-semibold">20:00</span>
                      <span className="text-slate-700">Panel Discussion: AI Ethics</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="md:col-span-1">
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 sticky top-24">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-900">Date</div>
                        <div className="text-slate-600">{event.date}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-900">Time</div>
                        <div className="text-slate-600">{event.time}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-900">Location</div>
                        <div className="text-slate-600">{event.location}</div>
                      </div>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/community/events/register/${params.id}`}
                    className="block w-full text-center py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors mb-4"
                  >
                    Register Now
                  </Link>
                  <button className="block w-full flex items-center justify-center gap-2 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors">
                    <Share2 className="h-4 w-4" />
                    Share Event
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
