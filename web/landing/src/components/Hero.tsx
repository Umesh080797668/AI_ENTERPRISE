import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';
import { Tooltip } from './ui/Tooltip';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32 pb-16">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[1000px] h-[600px] bg-blue-50/50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute top-20 right-0 -z-10 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800 mb-6"
        >
          <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
          New: GPT-4o Integration Live
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl"
        >
          Your Enterprise Knowledge. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Instantly Accessible.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl leading-relaxed"
        >
          Transform scattered documents into an intelligent knowledge base. 
          Automate workflows, empower teams, and secure your data with enterprise-grade AI.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <Tooltip content="Start your 14-day free trial">
             <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL || 'http://localhost:3001'}/login?mode=signup`}>
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  Start Free Trial <ArrowRight className="h-4 w-4" />
                </Button>
            </Link>
          </Tooltip>
          <Tooltip content="Schedule a personalized demo">
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Book a Demo
              </Button>
            </Link>
          </Tooltip>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-500"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-blue-600" />
            <span>SOC 2 Type II Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-blue-600" />
            <span>99.9% Uptime SLA</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-blue-600" />
            <span>GDPR Compliant</span>
          </div>
        </motion.div>

        {/* Hero Image / Dashboard Preview */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.5 }}
           className="mt-16 w-full max-w-5xl rounded-xl bg-slate-100 p-2 ring-1 ring-slate-200/50 shadow-2xl overflow-hidden"
        >
           <div className="rounded-lg bg-white overflow-hidden aspect-[16/9] relative group">
              {/* Abstract UI Representation since we don't have an image */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white flex flex-col">
                 <div className="h-12 border-b flex items-center px-4 gap-4 bg-white/50">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-sm text-slate-600 font-medium">Knowledge Base - Recent Files</div>
                 </div>
                 <div className="flex-1 flex overflow-hidden">
                    <div className="w-64 border-r bg-slate-50 p-4 space-y-4 hidden md:block">
                       <div className="h-8 w-full bg-slate-200 rounded-md flex items-center px-2 text-xs text-slate-600">📁 Documents</div>
                       <div className="h-6 w-3/4 bg-slate-200 rounded-md flex items-center px-2 text-xs text-slate-600">📄 Reports</div>
                       <div className="h-6 w-1/2 bg-slate-200 rounded-md flex items-center px-2 text-xs text-slate-600">📊 Data</div>
                       <div className="h-6 w-5/6 bg-slate-200 rounded-md flex items-center px-2 text-xs text-slate-600">📝 Notes</div>
                    </div>
                    <div className="flex-1 p-8 space-y-6">
                        {/* File List with Text Content */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
                                <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-blue-600 text-sm">📄</div>
                                <div className="flex-1">
                                    <div className="font-medium text-slate-900">Q4_Sales_Report.pdf</div>
                                    <div className="text-xs text-slate-500">Modified 2 hours ago • 2.4 MB</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
                                <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center text-green-600 text-sm">📊</div>
                                <div className="flex-1">
                                    <div className="font-medium text-slate-900">Customer_Data.xlsx</div>
                                    <div className="text-xs text-slate-500">Modified yesterday • 1.8 MB</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
                                <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center text-purple-600 text-sm">📝</div>
                                <div className="flex-1">
                                    <div className="font-medium text-slate-900">Meeting_Notes.txt</div>
                                    <div className="text-xs text-slate-500">Modified 3 days ago • 45 KB</div>
                                </div>
                            </div>
                        </div>
                        <div className="h-32 bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 text-sm">
                             AI-Powered Search Results
                        </div>
                    </div>
                 </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg text-sm font-semibold text-slate-900">
                      Live Dashboard Preview
                  </div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};
