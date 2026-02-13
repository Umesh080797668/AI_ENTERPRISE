export interface Tenant {
  id: string;
  name: string;
  domain: string;
  status: 'active' | 'suspended' | 'provisioning';
  plan: 'free' | 'pro' | 'enterprise';
  createdAt: Date;
  userCount: number;
}

export interface User {
  id: string;
  email: string;
  role: 'super_admin' | 'org_admin' | 'user';
  status: 'active' | 'inactive';
  lastLogin?: Date;
}

export interface SystemStats {
  totalTenants: number;
  totalUsers: number;
  activeWorkflows: number;
  apiCallsToday: number;
  systemHealth: number; // 0-100
}

export interface LogEntry {
  id: string;
  timestamp: Date;
  level: 'info' | 'warn' | 'error';
  service: string;
  message: string;
  source: string;
}

export interface IntegrationStatus {
  name: string;
  service: 'openai' | 'pinecone' | 'sendgrid' | 'slack';
  status: 'online' | 'offline' | 'error' | 'connected' | 'disconnected';
  latencyMs: number;
}
