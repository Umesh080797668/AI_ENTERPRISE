'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  GitBranch, 
  BarChart2, 
  Settings, 
  ChevronLeft,
  ChevronRight,
  Database,
  Cpu,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Documents', href: '/dashboard/documents', icon: FileText },
  { name: 'Chat AI', href: '/dashboard/chat', icon: MessageSquare },
  { name: 'Workflows', href: '/dashboard/workflows', icon: GitBranch },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart2 },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const pathname = usePathname();
  const { user } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div 
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col bg-white border-r border-slate-100 transition-all duration-300 ease-in-out md:relative shadow-[4px_0_24px_-12px_rgba(0,0,0,0.05)]",
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          collapsed ? "md:w-[80px]" : "w-72 md:w-72"
        )}
      >
        {/* Logo Section */}
        <div className={cn("flex items-center gap-3 py-6 transition-all duration-300", collapsed ? " justify-center px-0" : "px-8")}>
            <div className="relative group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white font-bold text-xl shadow-lg shadow-indigo-200 transition-transform group-hover:scale-110">
                    <Sparkles size={20} fill="currentColor" className="text-white" />
                </div>
                <div className="absolute -inset-2 bg-indigo-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {!collapsed && (
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
                    NeuroFlow
                </span>
            )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-6">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-200 group no-underline",
                  isActive
                    ? "bg-indigo-50/80 text-indigo-600 shadow-sm ring-1 ring-indigo-100"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900",
                  collapsed && "justify-center px-0"
                )}
                title={collapsed ? item.name : undefined}
              >
                {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-indigo-500 rounded-r-full" />
                )}
                <item.icon className={cn("h-5 w-5 shrink-0 transition-colors", isActive ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-600")} />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section: Storage & User */}
        <div className="p-4 space-y-4">
             {/* Storage Meter - Only show when expanded */}
            {!collapsed && (
                <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 shadow-sm">
                    <div className="flex items-center gap-2 mb-2 text-slate-700 font-semibold text-xs uppercase tracking-wider">
                        <Database size={12} />
                        <span>Storage Used</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 w-[65%] h-full rounded-full" />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-slate-500">
                        <span>6.5 GB</span>
                        <span>10 GB</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100">
                         <div className="flex items-center gap-2 text-slate-700 font-semibold text-xs uppercase tracking-wider">
                            <Cpu size={12} />
                            <span>Compute Units</span>
                        </div>
                         <div className="flex items-center gap-1 mt-1 text-xs text-indigo-600 font-medium">
                            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                            Running: 250/h
                         </div>
                    </div>
                </div>
            )}

            {/* Collapse Toggle */}
            <div className={cn("flex", collapsed ? "justify-center" : "justify-end")}>
                <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setCollapsed(!collapsed)} 
                    className="text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg h-8 w-8"
                >
                    {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                </Button>
            </div>

            {/* User Profile */}
            <div className={cn("flex border-t border-slate-100 pt-4", collapsed ? "justify-center" : "items-center gap-3")}>
                  <div className="relative">
                      <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold text-sm shadow-md ring-2 ring-white">
                        {user?.name?.charAt(0) || 'U'}
                      </div>
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  </div>
                  
                  {!collapsed && (
                    <div className="flex flex-col overflow-hidden">
                        <span className="truncate font-semibold text-sm text-slate-900">{user?.name || 'User'}</span>
                        <span className="truncate text-xs text-slate-500">{user?.email || 'user@example.com'}</span>
                    </div>
                  )}
            </div>
        </div>
      </div>
    </>
  );
}
