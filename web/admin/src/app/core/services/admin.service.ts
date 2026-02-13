import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Tenant, User, SystemStats, LogEntry, IntegrationStatus } from '../models/admin.types';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // Mock Data
  private mockTenants: Tenant[] = [
    { id: '1', name: 'Acme Corp', domain: 'acme.com', status: 'active', plan: 'enterprise', createdAt: new Date(), userCount: 150 },
    { id: '2', name: 'StartUp Inc', domain: 'startup.io', status: 'active', plan: 'pro', createdAt: new Date(), userCount: 12 },
    { id: '3', name: 'Test Org', domain: 'test.local', status: 'provisioning', plan: 'free', createdAt: new Date(), userCount: 1 }
  ];

  private mockUsers: User[] = [
    { id: 'u1', email: 'admin@platform.com', role: 'super_admin', status: 'active', lastLogin: new Date() },
    { id: 'u2', email: 'manager@acme.com', role: 'org_admin', status: 'active', lastLogin: new Date() }
  ];

  private mockStats: SystemStats = {
    totalTenants: 3,
    totalUsers: 163,
    activeWorkflows: 45,
    apiCallsToday: 12500,
    systemHealth: 98
  };

  // State
  private tenantsSubject = new BehaviorSubject<Tenant[]>(this.mockTenants);
  tenants$ = this.tenantsSubject.asObservable();

  private statsSubject = new BehaviorSubject<SystemStats>(this.mockStats);
  stats$ = this.statsSubject.asObservable();

  constructor() {}

  getStats(): Observable<SystemStats> {
    return this.statsSubject.asObservable();
  }

  getTenants(): Observable<Tenant[]> {
    return this.tenantsSubject.asObservable();
  }

  // Optimistic Update Example
  createTenant(tenant: Partial<Tenant>): Observable<Tenant> {
    const newTenant: Tenant = {
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date(),
      userCount: 0,
      status: 'provisioning',
      ...tenant
    } as Tenant;

    // Optimistic Update: Update UI immediately
    const currentTenants = this.tenantsSubject.value;
    this.tenantsSubject.next([...currentTenants, newTenant]);

    // Simulate Server Call
    return of(newTenant).pipe(
      delay(1000), // Simulate latency
      tap(() => {
        // Confirm update (in real app, handle error here to revert)
        newTenant.status = 'active'; // Simulate async provisioning completion
        this.updateTenantInList(newTenant);
      })
    );
  }

  private updateTenantInList(updatedTenant: Tenant) {
    const list = this.tenantsSubject.value;
    const index = list.findIndex(t => t.id === updatedTenant.id);
    if (index !== -1) {
      list[index] = updatedTenant;
      this.tenantsSubject.next([...list]);
    }
  }

  getRecentLogs(): Observable<LogEntry[]> {
      return of([
          { id: '1', timestamp: new Date(), level: 'info', service: 'Auth', message: 'User logged in', source: 'System' },
          { id: '2', timestamp: new Date(), level: 'warn', service: 'Ingestion', message: 'High memory usage', source: 'K8s' },
          { id: '3', timestamp: new Date(), level: 'error', service: 'AI-Model', message: 'Timeout connecting to OpenAI', source: 'Backend' },
      ]);
  }

  getIntegrationsStatus(): Observable<IntegrationStatus[]> {
      return of([
          { name: 'OpenAI', service: 'openai', status: 'online', latencyMs: 240 },
          { name: 'Pinecone', service: 'pinecone', status: 'online', latencyMs: 45 },
          { name: 'SendGrid', service: 'sendgrid', status: 'offline', latencyMs: 0 },
      ]);
  }
}
