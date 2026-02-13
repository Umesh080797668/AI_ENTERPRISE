import Link from 'next/link';
import { Home, ArrowRight, Activity, Search, FileText, Layout, MessageSquare, ChevronRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-4xl w-full text-center relative z-10">
        {/* Abstract 404 Illustration */}
        <div className="relative w-full max-w-sm mx-auto mb-2">
            <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative">
                <div className="text-[10rem] md:text-[12rem] font-bold text-slate-900 leading-none select-none">
                    4
                    <span className="text-blue-600">0</span>
                    4
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                    <div className="w-full h-1 bg-slate-200 rotate-12"></div>
                </div>
            </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Page not found
        </h1>
        <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 relative cursor-not-allowed opacity-75">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
                type="text"
                disabled
                className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg leading-5 bg-white placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm transition-shadow hover:shadow-md cursor-not-allowed"
                placeholder="Search for documentation, guides, or features..."
            />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {/* Quick Actions */}
            <div className="space-y-4">
                 <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Popular Destinations</h3>
                 <div className="grid gap-3">
                    <Link href="/" className="group flex items-center p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-md group-hover:scale-110 transition-transform">
                            <Home className="w-5 h-5" />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-slate-900 group-hover:text-blue-600">Home Page</p>
                            <p className="text-xs text-slate-500">Return to the main landing page</p>
                        </div>
                         <ChevronRight className="ml-auto w-4 h-4 text-slate-300 group-hover:text-blue-500" />
                    </Link>

                    <Link href="/documentation" className="group flex items-center p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                         <div className="p-2 bg-purple-50 text-purple-600 rounded-md group-hover:scale-110 transition-transform">
                            <FileText className="w-5 h-5" />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-slate-900 group-hover:text-blue-600">Documentation</p>
                            <p className="text-xs text-slate-500">Browse guides and API references</p>
                        </div>
                        <ChevronRight className="ml-auto w-4 h-4 text-slate-300 group-hover:text-blue-500" />
                    </Link>

                     <Link href="/dashboard" className="group flex items-center p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                         <div className="p-2 bg-green-50 text-green-600 rounded-md group-hover:scale-110 transition-transform">
                            <Layout className="w-5 h-5" />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-slate-900 group-hover:text-blue-600">Dashboard</p>
                            <p className="text-xs text-slate-500">Access your project analytics</p>
                        </div>
                        <ChevronRight className="ml-auto w-4 h-4 text-slate-300 group-hover:text-blue-500" />
                    </Link>
                 </div>
            </div>

             {/* Support & Status */}
            <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">Need Assistance?</h3>
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                    <p className="text-slate-600 mb-6 text-sm">
                        If you believe this is a server error, please check our system status or contact our support team.
                    </p>
                    <div className="space-y-3">
                         <Link href="/status" className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors group">
                            <div className="flex items-center">
                                <Activity className="w-4 h-4 text-green-500 mr-2" />
                                <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">System Status</span>
                            </div>
                            <span className="text-xs text-green-600 font-medium px-2 py-1 bg-green-100 rounded-full">Operational</span>
                        </Link>
                         <Link href="/contact" className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors group">
                            <div className="flex items-center">
                                <MessageSquare className="w-4 h-4 text-blue-500 mr-2" />
                                <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Contact Support</span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
