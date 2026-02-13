'use client';

import { useAuth } from '@/lib/auth-context';
import { 
  Zap, 
  FileText, 
  Users, 
  ArrowUpRight, 
  TrendingUp,
  Activity,
  Clock,
  MoreHorizontal,
  Plus,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

// --- MOCK DATA ---
const stats = [
  {
    title: "Active Workflows",
    value: "12",
    change: "+2.5%",
    trend: "up",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-50"
  },
  {
    title: "Documents Processed",
    value: "1,284",
    change: "+18%",
    trend: "up",
    icon: FileText,
    color: "text-indigo-500",
    bg: "bg-indigo-50"
  },
  {
    title: "Team Members",
    value: "8",
    change: "+2",
    trend: "up",
    icon: Users,
    color: "text-pink-500",
    bg: "bg-pink-50"
  },
  {
    title: "System Uptime",
    value: "99.9%",
    change: "Stable",
    trend: "neutral",
    icon: Activity,
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  }
];

const activityFeed = [
  {
    id: 1,
    user: "Alice Chen",
    avatar: "A",
    action: "deployed",
    target: "Customer Support Bot",
    time: "2 mins ago",
    type: "workflow"
  },
  {
    id: 2,
    user: "System",
    avatar: "S",
    action: "completed",
    target: "Daily Ingestion Sync",
    time: "15 mins ago",
    type: "system"
  },
  {
    id: 3,
    user: "Bob Smith",
    avatar: "B",
    action: "uploaded",
    target: "Q3_Financial_Report.pdf",
    time: "1 hour ago",
    type: "document"
  },
  {
    id: 4,
    user: "Sarah Jones",
    avatar: "S",
    action: "commented on",
    target: "Sales Pipeline Workflow",
    time: "3 hours ago",
    type: "comment"
  }
];

const quickActions = [
    { label: 'New Workflow', icon: Zap },
    { label: 'Upload Data', icon: FileText },
    { label: 'Invite Team', icon: Users },
];

export default function DashboardPage() {
  const { user } = useAuth();
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  return (
    <div className="space-y-8 max-w-[1600px] mx-auto pb-10">
      
      {/* Welcome Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
        <div className="relative z-10">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                {greeting}, {user?.name?.split(' ')[0] || 'User'}! 👋
            </h1>
            <p className="text-slate-500 mt-2 text-lg">
                Here's what's happening with your projects today.
            </p>
        </div>
        <div className="flex gap-3 relative z-10">
            {quickActions.map((action) => (
                <Button key={action.label} variant="outline" className="hidden sm:flex border-slate-200 hover:bg-slate-50 hover:border-indigo-200 text-slate-600">
                    <action.icon className="w-4 h-4 mr-2" />
                    {action.label}
                </Button>
            ))}
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-6 shadow-lg shadow-indigo-200/50">
                <Plus className="w-4 h-4 mr-2" />
                Create New
            </Button>
        </div>
        
        {/* Decorative Background Blob */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="rounded-2xl border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-[0_8px_30px_-12px_rgba(6,81,237,0.2)] transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                   <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                   <h3 className="text-3xl font-bold text-slate-900 mt-2">{stat.value}</h3>
                </div>
                <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                   <stat.icon size={20} />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${stat.trend === 'up' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'} flex items-center gap-1`}>
                    {stat.trend === 'up' && <TrendingUp size={12} />}
                    {stat.change}
                </span>
                <span className="text-xs text-slate-400 ml-2">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Area (Mock) */}
        <div className="lg:col-span-2 space-y-6">
             <Card className="rounded-2xl border-slate-100 shadow-sm overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between pb-2 bg-slate-50/50 border-b border-slate-100">
                    <div className="space-y-1">
                        <CardTitle className="text-lg font-bold text-slate-800">System Usage</CardTitle>
                        <CardDescription>API calls over time</CardDescription>
                    </div>
                    <Button variant="ghost" size="icon" className="text-slate-400"><MoreHorizontal size={20}/></Button>
                </CardHeader>
                <CardContent className="p-6">
                    {/* Mock Chart Visual - Just bars for now */}
                    <div className="h-[300px] w-full flex items-end justify-between gap-2 pt-4">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, idx) => (
                            <div key={idx} className="group relative w-full h-full flex items-end">
                                <div 
                                    className="w-full bg-indigo-100 rounded-t-lg transition-all duration-300 group-hover:bg-indigo-500"
                                    style={{ height: `${h}%` }}
                                ></div>
                                {/* Tooltip */}
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    {h*10} calls
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-slate-400 font-medium uppercase tracking-wider">
                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                        <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                    </div>
                </CardContent>
             </Card>

             {/* Recent Projects Row */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="rounded-2xl border-slate-100 shadow-sm bg-gradient-to-br from-violet-500 to-indigo-600 text-white">
                    <CardContent className="p-6 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold">Try the new AI Agent</h3>
                            <p className="text-indigo-100 mt-2 text-sm opacity-90 max-w-[80%]">Build autonomous agents that can browse the web and use tools.</p>
                            <Button className="mt-4 bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm">Explore Beta</Button>
                        </div>
                        <Sparkles className="absolute -bottom-4 -right-4 w-32 h-32 text-white/10 rotate-12" />
                    </CardContent>
                </Card>
                 <Card className="rounded-2xl border-slate-100 shadow-sm bg-slate-900 text-white">
                    <CardContent className="p-6 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold">Documentation</h3>
                            <p className="text-slate-400 mt-2 text-sm max-w-[80%]">Learn how to integrate our SDKs into your existing stack.</p>
                            <Button className="mt-4 bg-white hover:bg-slate-100 text-slate-900 border-0">Read Docs</Button>
                        </div>
                        <FileText className="absolute -bottom-4 -right-4 w-32 h-32 text-slate-800 rotate-12" />
                    </CardContent>
                </Card>
             </div>
        </div>

        {/* Activity Feed Sidebar */}
        <div className="space-y-6">
             <Card className="rounded-2xl border-slate-100 shadow-sm h-full max-h-[600px] flex flex-col">
                <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-bold text-slate-800 flex items-center gap-2">
                        <Clock size={16} className="text-indigo-500" />
                        Activity Feed
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto pr-2">
                    <div className="relative border-l border-slate-100 ml-3 space-y-6 pb-4">
                        {activityFeed.map((item) => (
                            <div key={item.id} className="ml-6 relative">
                                <span className={`absolute -left-[31px] flex h-8 w-8 items-center justify-center rounded-full ring-4 ring-white ${
                                    item.type === 'workflow' ? 'bg-amber-100 text-amber-600' :
                                    item.type === 'document' ? 'bg-indigo-100 text-indigo-600' :
                                    item.type === 'comment' ? 'bg-pink-100 text-pink-600' :
                                    'bg-slate-100 text-slate-600'
                                }`}>
                                    {item.type === 'workflow' ? <Zap size={14} /> :
                                     item.type === 'document' ? <FileText size={14} /> :
                                     item.type === 'comment' ? <MessageSquare size={14} fill="currentColor"/> :
                                     <Activity size={14} />}
                                </span>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                                    <p className="text-sm font-medium text-slate-900 group-hover:text-indigo-600 cursor-pointer transition-colors">
                                        <span className="text-indigo-600">{item.user}</span> {item.action} <span className="font-bold">{item.target}</span>
                                    </p>
                                </div>
                                <time className="block text-xs text-slate-400 mt-1">{item.time}</time>
                            </div>
                        ))}
                        
                         <div key="load-more" className="ml-6 relative pt-4">
                             <Button variant="ghost" size="sm" className="text-indigo-500 hover:text-indigo-700 p-0 h-auto font-semibold text-xs">View all activity &rarr;</Button>
                         </div>
                    </div>
                </CardContent>
             </Card>
        </div>
      </div>
    </div>
  );
}
