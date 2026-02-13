'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export type SubscriptionTier = 'Free' | 'Pro' | 'Enterprise';

export interface User {
  id: string;
  name: string;
  email: string;
  tier: SubscriptionTier;
  avatarUrl?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string) => Promise<void>;
  logout: () => void;
  updateTier: (tier: SubscriptionTier) => void;
  tier: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check for existing session
    const storedUser = localStorage.getItem('user_session');
    if (storedUser) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUser(JSON.parse(storedUser));
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(false);
  }, []);

  const login = async (email: string) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    const mockUser: User = {
      id: '1',
      name: 'Premium User',
      email: email,
      tier: 'Enterprise', // Default to Enterprise for full access
    };

    setUser(mockUser);
    localStorage.setItem('user_session', JSON.stringify(mockUser));
    localStorage.setItem('token', 'mock_token');
    setIsLoading(false);
    router.push('/dashboard');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user_session');
    localStorage.removeItem('token');
    router.push('/login');
  };

  const updateTier = (tier: SubscriptionTier) => {
    if (user) {
      const updatedUser = { ...user, tier };
      setUser(updatedUser);
      localStorage.setItem('user_session', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, updateTier, tier: user?.tier || 'Free' }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
