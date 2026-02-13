'use client';

import { usePathname } from 'next/navigation';
import { 
  Bell, 
  Search, 
  Menu,
  ChevronRight,
  Command,
  HelpCircle,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/auth-context';

interface HeaderProps {
    setSidebarOpen: (open: boolean) => void;
}

export function Header({ setSidebarOpen }: HeaderProps) {
  const pathname = usePathname();
  const { logout } = useAuth();

  // Generate pretty breadcrumbs
  const breadcrumbs = pathname
    .split('/')
    .filter(segment => segment !== 'dashboard' && Boolean(segment))
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1));

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200/60 px-6 py-4 transition-all">
        <div className="flex items-center justify-between max-w-[1600px] mx-auto">
            <div className="flex items-center gap-4">
                <Button
                    variant="ghost" 
                    size="icon" 
                    className="md:hidden -ml-2 text-slate-500 hover:bg-slate-100"
                    onClick={() => setSidebarOpen(true)}
                >
                    <Menu className="h-6 w-6" />
                </Button>

                {/* Modern Breadcrumbs */}
                <nav className="hidden md:flex items-center text-sm font-medium">
                    <span className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">Dashboard</span>
                    {breadcrumbs.length > 0 && breadcrumbs.map((crumb, index) => (
                        <div key={crumb} className="flex items-center animate-fade-in slide-in-from-left-2 duration-300">
                            <ChevronRight className="h-4 w-4 mx-2 text-slate-300" />
                            <span className={cn(
                                "transition-colors",
                                index === breadcrumbs.length - 1 
                                    ? "bg-slate-100 text-slate-800 px-2 py-0.5 rounded-md font-semibold" 
                                    : "text-slate-500 hover:text-slate-800"
                            )}>
                                {crumb}
                            </span>
                        </div>
                    ))}
                </nav>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
                {/* Search Bar with Command Hint */}
                <div className="hidden md:flex relative group">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                        <Search className="h-4 w-4" />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="h-10 w-64 lg:w-80 rounded-full border border-slate-200 bg-slate-50/50 pl-9 pr-12 text-sm outline-none placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all shadow-sm"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                        <kbd className="hidden lg:inline-flex h-5 items-center gap-1 rounded border border-slate-200 bg-slate-50 px-1.5 font-mono text-[10px] font-medium text-slate-500 opacity-100">
                            <span className="text-xs">⌘</span>K
                        </kbd>
                    </div>
                </div>

                {/* Quick New Action */}
                <Button className="hidden sm:flex bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg shadow-indigo-200 h-9 px-4 gap-2 text-xs font-semibold">
                    <Plus size={16} />
                    <span>New Project</span>
                </Button>

                {/* Icons */}
                <div className="flex items-center gap-1 sm:gap-2 pl-2">
                     <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full">
                        <HelpCircle className="h-5 w-5" />
                    </Button>
                    
                    <Button variant="ghost" size="icon" className="relative text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full">
                        <Bell className="h-5 w-5" />
                        <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-rose-500 border-2 border-white"></span>
                    </Button>

                    <div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block"></div>

                    <Button variant="ghost" size="sm" onClick={logout} className="text-slate-500 hover:text-rose-600 hover:bg-rose-50 text-xs font-medium px-3 rounded-full">
                        Log out
                    </Button>
                </div>
            </div>
        </div>
    </header>
  );
}

// Utility for cn (matching what Sidebar used, assuming it works or I'll implement it if needed, but standard in shadcn)
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}
