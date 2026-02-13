// src/app/dashboard/admin/layout.tsx
import { ReactNode } from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-6 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Organization Admin</h1>
          <p className="text-muted-foreground mt-1">Manage your team settings, billing, and global preferences.</p>
        </div>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <Link href="/dashboard" className="text-sm font-medium text-primary hover:underline">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 shrink-0">
          <nav className="grid gap-1 text-sm text-muted-foreground">
             <Link href="/dashboard/admin/users" className="block px-3 py-2 text-primary font-medium bg-secondary/50 rounded-md">
               Users & Permissions
             </Link>
             <Link href="/dashboard/admin/billing" className="block px-3 py-2 hover:bg-muted rounded-md transition-colors">
               Billing & Plans
             </Link>
             <Link href="/dashboard/admin/integrations" className="block px-3 py-2 hover:bg-muted rounded-md transition-colors">
               Integrations
             </Link>
             <Link href="/dashboard/admin/settings" className="block px-3 py-2 hover:bg-muted rounded-md transition-colors">
               General Settings
             </Link>
          </nav>
        </aside>
        
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
