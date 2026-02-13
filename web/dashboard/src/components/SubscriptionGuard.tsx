'use client';

import { useAuth, SubscriptionTier } from '../lib/auth-context';
import { useRouter } from 'next/navigation';
import { ArrowUpCircle, Lock } from 'lucide-react';
import Link from 'next/link';

interface SubscriptionGuardProps {
  children: React.ReactNode;
  requiredTier: SubscriptionTier;
  fallback?: React.ReactNode;
}

const tierLevels: Record<SubscriptionTier, number> = {
  'Free': 0,
  'Pro': 1,
  'Enterprise': 2,
};

export function SubscriptionGuard({ children, requiredTier, fallback }: SubscriptionGuardProps) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  if (isLoading) {
    return <div className="animate-pulse bg-gray-100 w-full h-full rounded-lg"></div>;
  }

  if (!user) {
    return null; // Layout should handle redirect
  }

  const userLevel = tierLevels[user.tier];
  const requiredLevel = tierLevels[requiredTier];

  if (userLevel < requiredLevel) {
    if (fallback) return <>{fallback}</>;

    return (
      <div className="flex flex-col items-center justify-center p-12 text-center bg-white rounded-xl shadow-sm border border-gray-100 h-[60vh]">
        <div className="bg-sky-50 p-4 rounded-full mb-6">
          <Lock className="w-12 h-12 text-sky-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Premium Feature Locked</h2>
        <p className="text-gray-500 max-w-md mb-8">
          This feature is available exclusively for {requiredTier} tier subscribers. 
          Upgrade your plan to verify workflows, access advanced analytics, and more.
        </p>
        <Link 
          href="/dashboard/settings" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition w-full sm:w-auto justify-center font-medium shadow-sm hover:shadow-md"
        >
          <ArrowUpCircle className="w-5 h-5" />
          Upgrade to {requiredTier}
        </Link>
      </div>
    );
  }

  return <>{children}</>;
}
