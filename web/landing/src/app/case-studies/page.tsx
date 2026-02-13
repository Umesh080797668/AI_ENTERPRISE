'use client';

import { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, TrendingUp, BarChart, ArrowRight, X, Clock, Users, Zap } from 'lucide-react';

export default function CaseStudiesPage() {
  const [selectedStudy, setSelectedStudy] = useState<any>(null);

  const caseStudies = [
    {
      company: "FinTech Global",
      industry: "Finance",
      title: "Automating Compliance Analysis with AI",
      result: "85% reduction in manual review time",
      logo: "FG",
      color: "bg-blue-600",
      stats: [
        { label: "Review Time", value: "-85%", icon: Clock },
        { label: "Cost Savings", value: "$2.4M", icon: TrendingUp },
        { label: "Accuracy", value: "99.9%", icon: Award }
      ],
      story: "FinTech Global faced a massive backlog of compliance documents that required manual review by highly paid legal experts. By implementing our custom NLP pipeline, they were able to automate the first pass of document review.\n\nThe system uses a fine-tuned transformer model to flag potential risks and inconsistencies, highlighting them for human review. This hybrid approach drastically reduced the workload while maintaining high compliance standards."
    },
    {
      company: "HealthCare Plus",
      industry: "Healthcare",
      title: "Patient Triage Support System",
      result: "Improved response time by 40%",
      logo: "HP",
      color: "bg-green-600",
      stats: [
        { label: "Response Time", value: "-40%", icon: Clock },
        { label: "Patient Sat.", value: "+25%", icon: Users },
        { label: "Staff Efficiency", value: "+30%", icon: Zap }
      ],
      story: "HealthCare Plus needed a way to prioritize patient inquiries coming through their digital channels. Our solution provided an AI-driven triage system that analyzes symptoms and urgency levels in real-time.\n\nThe system routes critical cases immediately to specialized medical staff while offering self-help resources for minor issues. This has led to faster treatment for those who need it most and reduced burnout among nursing staff."
    },
    {
      company: "Retail Giant",
      industry: "E-Commerce",
      title: "Personalized Shopping Assistant",
      result: "25% increase in conversion rate",
      logo: "RG",
      color: "bg-purple-600",
      stats: [
        { label: "Conversion", value: "+25%", icon: TrendingUp },
        { label: "Avg Order Value", value: "+15%", icon: BarChart },
        { label: "Engagement", value: "+3m", icon: Clock }
      ],
      story: "Retail Giant wanted to replicate the in-store personal shopper experience online. We built a conversational AI assistant that understands complex styling queries and customer preferences.\n\nUsing a combination of visual search and natural language understanding, the assistant recommends complete outfits rather than just individual items, significantly boosting cross-selling opportunities and customer engagement."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4" />
              Success Stories
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Case Studies</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover how leading companies are transforming their businesses with our AI solutions.
            </p>
          </motion.div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="grid md:grid-cols-4">
                  <div className={`${study.color} p-8 flex items-center justify-center md:col-span-1`}>
                    <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {study.logo}
                    </div>
                  </div>
                  <div className="p-8 md:col-span-3">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                       <h2 className="text-2xl font-bold text-slate-900">{study.company}</h2>
                       <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full w-fit">
                         {study.industry}
                       </span>
                    </div>
                    <h3 className="text-xl text-slate-700 font-medium mb-4">{study.title}</h3>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2 text-green-600 font-semibold bg-green-50 px-4 py-2 rounded-lg">
                        <TrendingUp className="h-5 w-5" />
                        {study.result}
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => setSelectedStudy(study)}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      Read full story <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <AnimatePresence>
        {selectedStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className={`${selectedStudy.color} p-8 text-white relative`}>
                <button 
                    onClick={() => setSelectedStudy(null)}
                    className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                    <X className="h-6 w-6" />
                </button>
                <div className="flex items-center gap-4 mb-4">
                     <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {selectedStudy.logo}
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">{selectedStudy.company}</h2>
                        <p className="opacity-90">{selectedStudy.industry} Case Study</p>
                    </div>
                </div>
                <h3 className="text-xl font-medium opacity-90">{selectedStudy.title}</h3>
              </div>
              
              <div className="p-8 overflow-y-auto">
                <div className="grid grid-cols-3 gap-4 mb-8">
                    {selectedStudy.stats.map((stat: any, i: number) => (
                        <div key={i} className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
                            <stat.icon className="h-6 w-6 mx-auto mb-2 text-slate-900" />
                            <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wide font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="prose prose-slate max-w-none">
                    <h4 className="text-lg font-bold text-slate-900 mb-3">The Challenge & Solution</h4>
                    {selectedStudy.story.split('\n\n').map((paragraph: string, i: number) => (
                        <p key={i} className="text-slate-600 leading-relaxed mb-4">
                            {paragraph}
                        </p>
                    ))}
                </div>
              </div>
              
              <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
                <button 
                    onClick={() => setSelectedStudy(null)}
                    className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
                >
                    Close Story
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
