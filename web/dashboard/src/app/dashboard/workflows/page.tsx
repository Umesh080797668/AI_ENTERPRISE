'use client';

import { useState } from 'react';
import { 
  Plus, 
  GitBranch, 
  Play, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  MoreHorizontal,
  ArrowRight,
  Code
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';

// Mock Workflows
const workflows = [
  { id: 1, name: 'Daily Ingestion Sync', trigger: 'Scheduled (Daily)', lastRun: '2 hours ago', status: 'success', successRate: 98, runs: 450 },
  { id: 2, name: 'Customer Inquiries Routing', trigger: 'Event (Webhook)', lastRun: '5 mins ago', status: 'success', successRate: 99.5, runs: 1205 },
  { id: 3, name: 'Monthly Report Gen', trigger: 'Scheduled (Monthly)', lastRun: '28 days ago', status: 'failed', successRate: 85, runs: 12 },
  { id: 4, name: 'Lead Scoring Pipeline', trigger: 'Event (New Record)', lastRun: '1 hour ago', status: 'success', successRate: 92, runs: 85 },
];

export default function WorkflowsPage() {
  const [isCreating, setIsCreating] = useState(false);
  const [step, setStep] = useState(1);

  return (
    <div className="space-y-8 max-w-[1600px] mx-auto pb-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Workflows</h1>
          <p className="text-slate-500 mt-1">Automate your processes with visual pipelines.</p>
        </div>
        <Button 
            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-200"
            onClick={() => setIsCreating(true)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Create Workflow
        </Button>
      </div>

        {/* Creation Wizard Modal Overlay */}
        {isCreating && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <Card className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border-0">
                <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold text-slate-800">New Workflow</h2>
                        <p className="text-sm text-slate-500">Step {step} of 3</p>
                    </div>
                </div>
                
                <div className="p-8 min-h-[300px]">
                    {step === 1 && (
                        <div className="space-y-4 animate-fade-in">
                            <h3 className="font-semibold text-lg text-slate-700">Choose a Trigger</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {['Scheduled (Cron)', 'Webhook / API', 'File Uploaded', 'New Database Record'].map((opt) => (
                                    <div key={opt} className="p-4 border border-slate-200 rounded-xl hover:border-indigo-500 hover:bg-slate-50 cursor-pointer transition-all hover:shadow-md group">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                                <Zap size={20} />
                                            </div>
                                            <span className="font-medium text-slate-700">{opt}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {step === 2 && (
                         <div className="space-y-4 animate-fade-in">
                             <h3 className="font-semibold text-lg text-slate-700">Add Actions</h3>
                             <p className="text-slate-500">Configure what happens when triggered.</p>
                             <div className="h-40 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center flex-col text-slate-400">
                                <Plus size={32} className="mb-2" />
                                <span>No actions added</span>
                             </div>
                        </div>
                    )}
                     {step === 3 && (
                         <div className="space-y-4 animate-fade-in text-center pt-8">
                             <div className="mx-auto w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                                <CheckCircle2 size={32} />
                             </div>
                             <h3 className="font-bold text-2xl text-slate-800">Ready to Deploy!</h3>
                             <p className="text-slate-500">Your workflow has been configured successfully.</p>
                        </div>
                    )}
                </div>

                <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-between">
                    <Button variant="ghost" onClick={() => {
                        if (step > 1) setStep(step - 1);
                        else setIsCreating(false);
                    }}>
                        {step === 1 ? 'Cancel' : 'Back'}
                    </Button>
                    <Button 
                        className="bg-indigo-600 hover:bg-indigo-700"
                        onClick={() => {
                            if (step < 3) setStep(step + 1);
                            else {
                                setIsCreating(false);
                                setStep(1);
                            }
                        }}
                    >
                        {step === 3 ? 'Finish' : 'Next'} <ArrowRight size={16} className="ml-2" />
                    </Button>
                </div>
            </Card>
        </div>
        )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-0 shadow-lg shadow-indigo-200">
            <CardContent className="p-6">
                <p className="text-indigo-100 font-medium">Total Runs (24h)</p>
                <h3 className="text-3xl font-bold mt-1">1,482</h3>
                <div className="mt-4 flex items-center text-sm bg-white/20 w-fit px-2 py-1 rounded-lg backdrop-blur-sm">
                    <ArrowRight size={14} className="mr-1 rotate-[-45deg]" /> +12% vs yesterday
                </div>
            </CardContent>
        </Card>
         <Card className="border-slate-100 shadow-sm">
            <CardContent className="p-6">
                 <p className="text-slate-500 font-medium">Avg. Duration</p>
                <h3 className="text-3xl font-bold mt-1 text-slate-900">1.2s</h3>
                <div className="mt-4 flex items-center text-sm text-emerald-600 bg-emerald-50 w-fit px-2 py-1 rounded-lg">
                    <CheckCircle2 size={14} className="mr-1" /> Optimized
                </div>
            </CardContent>
        </Card>
        <Card className="border-slate-100 shadow-sm">
            <CardContent className="p-6">
                 <p className="text-slate-500 font-medium">Error Rate</p>
                <h3 className="text-3xl font-bold mt-1 text-slate-900">0.8%</h3>
                <div className="mt-4 flex items-center text-sm text-amber-600 bg-amber-50 w-fit px-2 py-1 rounded-lg">
                    <AlertCircle size={14} className="mr-1" /> Within limits
                </div>
            </CardContent>
        </Card>
      </div>

      {/* Workflows List */}
      <div className="grid gap-4">
        {workflows.map((wf) => (
            <div key={wf.id} className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                        <div className={cn(
                            "h-12 w-12 rounded-xl flex items-center justify-center shrink-0",
                            wf.status === 'success' ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"
                        )}>
                            <GitBranch size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{wf.name}</h3>
                             <div className="flex items-center gap-3 mt-1 text-sm text-slate-500">
                                <span className="flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-md text-xs font-medium">
                                    <Zap size={12} /> {wf.trigger}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock size={12} /> Last run {wf.lastRun}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                         {/* Stats Pill */}
                         <div className="hidden md:block text-right">
                             <p className="text-xs text-slate-400 uppercase font-semibold">Success Rate</p>
                             <div className="flex items-center gap-2">
                                <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                                     <div className={cn("h-full rounded-full", wf.status === 'success' ? "bg-emerald-500" : "bg-red-500")} style={{width: `${wf.successRate}%`}}></div>
                                </div>
                                <span className="font-bold text-slate-700">{wf.successRate}%</span>
                             </div>
                         </div>

                         <div className="flex gap-2">
                             <Button size="icon" variant="ghost" className="rounded-full hover:bg-indigo-50 hover:text-indigo-600" title="Manual Trigger">
                                <Play size={18} />
                             </Button>
                             <Button size="icon" variant="ghost" className="rounded-full hover:bg-slate-100" title="Logs">
                                <Code size={18} />
                             </Button>
                             <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button size="icon" variant="ghost" className="rounded-full hover:bg-slate-100">
                                        <MoreHorizontal size={18} />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>Edit Workflow</DropdownMenuItem>
                                    <DropdownMenuItem>View History</DropdownMenuItem>
                                    <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                             </DropdownMenu>
                         </div>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}

// Helper icons
import { Zap } from 'lucide-react';
