'use client';

import { 
  User, 
  Lock, 
  Bell, 
  CreditCard, 
  Globe, 
  Puzzle, 
  Key,
  Shield,
  Save
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useAuth } from '@/lib/auth-context';
import { useState } from 'react';

const tabs = [
  { id: 'general', label: 'General', icon: User },
  { id: 'security', label: 'Security', icon: Lock },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'billing', label: 'Billing', icon: CreditCard },
  { id: 'integrations', label: 'Integrations', icon: Puzzle },
  { id: 'apikeys', label: 'API Keys', icon: Key },
];

export default function SettingsPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="max-w-[1600px] mx-auto pb-10">
        <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Settings</h1>
            <p className="text-slate-500 mt-1">Manage your account preferences and project configuration.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation for Settings */}
            <div className="w-full lg:w-64 shrink-0">
                <nav className="space-y-1">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                                activeTab === tab.id 
                                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' 
                                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                            }`}
                        >
                            <tab.icon size={18} />
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Content Area */}
            <div className="flex-1 space-y-6">
                
                {/* General Settings */}
                {activeTab === 'general' && (
                    <Card className="border-slate-200 shadow-sm rounded-2xl animate-fade-in text-slate-800">
                        <CardHeader>
                            <CardTitle>Profile Information</CardTitle>
                            <CardDescription>Update your photo and personal details here.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center gap-6">
                                <div className="h-24 w-24 rounded-full bg-slate-200 flex items-center justify-center text-3xl font-bold text-slate-500 border-4 border-white shadow-lg">
                                    {user?.name?.charAt(0)}
                                </div>
                                <div className="space-y-2">
                                    <Button variant="outline" className="text-slate-600">Change Photo</Button>
                                    <p className="text-xs text-slate-400">JPG, GIF or PNG. 1MB max.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Full Name</label>
                                    <input type="text" defaultValue={user?.name} className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Email Address</label>
                                    <input type="email" defaultValue={user?.email} className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none" />
                                </div>
                            </div>
                        </CardContent>
                        <div className="p-6 border-t border-slate-100 bg-slate-50/50 rounded-b-2xl flex justify-end">
                            <Button className="bg-indigo-600 hover:bg-indigo-700">Save Changes</Button>
                        </div>
                    </Card>
                )}

                {/* API Keys */}
                {activeTab === 'apikeys' && (
                    <Card className="border-slate-200 shadow-sm rounded-2xl animate-fade-in text-slate-800">
                        <CardHeader>
                            <CardTitle>API Keys</CardTitle>
                            <CardDescription>Manage keys to access your API.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                                        <Key size={20} />
                                    </div>
                                    <div>
                                        <p className="font-mono text-sm font-medium text-slate-800">sk_live_...4829</p>
                                        <p className="text-xs text-slate-500">Created 2 months ago</p>
                                    </div>
                                </div>
                                <Button variant="ghost" className="text-red-500 hover:bg-red-50 hover:text-red-600">Revoke</Button>
                            </div>
                             <Button className="w-full border-dashed border-2 border-slate-200 bg-transparent text-slate-500 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50">
                                + Generate New Key
                            </Button>
                        </CardContent>
                    </Card>
                )}

                 {/* Integrations */}
                 {activeTab === 'integrations' && (
                    <div className="space-y-4 animate-fade-in">
                        {['GitHub', 'Slack', 'Google Drive', 'Notion'].map((app) => (
                             <Card key={app} className="border-slate-200 shadow-sm rounded-2xl">
                                <CardContent className="p-6 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-lg text-slate-600">
                                            {app.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">{app}</h3>
                                            <p className="text-sm text-slate-500">Connect to sync data automatically.</p>
                                        </div>
                                    </div>
                                    <Button variant="outline" className="border-slate-200">Connect</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
                
                {/* Default placeholder for other tabs */}
                 {['security', 'notifications', 'billing'].includes(activeTab) && (
                     <Card className="border-slate-200 shadow-sm rounded-2xl animate-fade-in">
                        <CardContent className="p-12 text-center text-slate-500">
                            <Shield size={48} className="mx-auto mb-4 text-slate-300" />
                            <h3 className="text-lg font-semibold text-slate-700">Coming Soon</h3>
                            <p>This section is currently under development.</p>
                        </CardContent>
                    </Card>
                 )}

            </div>
        </div>
    </div>
  );
}
