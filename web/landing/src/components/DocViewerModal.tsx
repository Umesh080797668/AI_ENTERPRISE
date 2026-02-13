import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, ArrowRight, Share2, Printer, ThumbsUp } from 'lucide-react';

interface DocViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  doc: {
    title: string;
    description: string;
    type: 'article' | 'guide' | 'section';
    readTime?: string;
    category?: string;
    content?: string; // In a real app, this would be the full content or HTML
  } | null;
}

export const DocViewerModal: React.FC<DocViewerModalProps> = ({ isOpen, onClose, doc }) => {
  if (!doc) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-100 sticky top-0 bg-white z-10">
                <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                        doc.type === 'guide' ? 'bg-green-100 text-green-700' :
                        doc.type === 'section' ? 'bg-purple-100 text-purple-700' :
                        'bg-blue-100 text-blue-700'
                    }`}>
                        {doc.category || doc.type}
                    </span>
                    {doc.readTime && (
                        <span className="flex items-center text-slate-500 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            {doc.readTime}
                        </span>
                    )}
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => window.print()} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors" aria-label="Print">
                    <Printer className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors" aria-label="Share">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={onClose}
                    className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 overflow-y-auto custom-scrollbar">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{doc.title}</h2>
                
                <div className="prose prose-lg max-w-none text-slate-600">
                    <p className="lead text-xl text-slate-700 mb-8">{doc.description}</p>
                    
                    {/* Simulated Content based on type */}
                    {doc.type === 'guide' ? (
                        <div className="space-y-8">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <h4 className="flex items-center font-bold text-lg text-slate-900 mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm mr-3">1</span>
                                    Prerequisites
                                </h4>
                                <ul className="list-disc pl-14 text-slate-600 space-y-2">
                                    <li>Node.js 18+ installed</li>
                                    <li>Docker Desktop running</li>
                                    <li>API Key from the dashboard</li>
                                </ul>
                            </div>
                            
                            <div className="space-y-4">
                                <h4 className="flex items-center font-bold text-lg text-slate-900">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm mr-3">2</span>
                                    Installation
                                </h4>
                                <p className="pl-14">Run the following command to install the SDK:</p>
                                <div className="ml-14 bg-slate-900 rounded-lg p-4 font-mono text-sm text-blue-400">
                                    npm install @ai-enterprise/sdk
                                </div>
                            </div>

                             <div className="space-y-4">
                                <h4 className="flex items-center font-bold text-lg text-slate-900">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm mr-3">3</span>
                                    Configuration
                                </h4>
                                <p className="pl-14">Initialize the client with your API key:</p>
                                <div className="ml-14 bg-slate-900 rounded-lg p-4 font-mono text-sm text-white overflow-x-auto">
{`import { AIClient } from '@ai-enterprise/sdk';

const client = new AIClient({
  apiKey: process.env.AI_API_KEY
});`}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <p>
                                This article covers the essential aspects of <strong>{doc.title}</strong>. 
                                In the modern enterprise landscape, understanding {doc.title.toLowerCase()} is crucial for maintaining competitive advantage and operational efficiency.
                            </p>
                            
                            <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Key Concepts</h3>
                             <p>
                                When working with the platform, there are several core components you need to be familiar with.
                                These building blocks allow you to create powerful AI workflows that scale with your business needs.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Scalability:</strong> Designed to handle high-throughput workloads.</li>
                                <li><strong>Security:</strong> Enterprise-grade encryption and compliance.</li>
                                <li><strong>Flexibility:</strong> Adaptable to various industry use cases.</li>
                            </ul>

                             <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Implementation Strategy</h3>
                             <p>
                                We recommend a phased approach when adopting {doc.title.toLowerCase()}. Start with a pilot project to validate key metrics before rolling out to the wider organization.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                                <p className="text-blue-800 font-medium">Pro Tip</p>
                                <p className="text-blue-700 text-sm">Always verify your environment settings in the admin panel before deploying to production.</p>
                            </div>
                        </div>
                    )}
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-between items-center rounded-b-2xl">
                <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span>Was this helpful?</span>
                    <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                        <ThumbsUp className="w-4 h-4" /> Yes
                    </button>
                    <button className="flex items-center gap-1 hover:text-red-600 transition-colors">
                        No
                    </button>
                </div>
                {doc.type === 'guide' ? (
                     <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                        Next Step <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                ) : (
                    <button className="px-6 py-2 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors flex items-center">
                        Related Articles <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
