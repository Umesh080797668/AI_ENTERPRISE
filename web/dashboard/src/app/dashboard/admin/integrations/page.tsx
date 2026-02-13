// src/app/dashboard/admin/integrations/page.tsx
'use client';
import { IntegrationsList } from "@/components/admin/IntegrationsList";

export default function IntegrationsAdminPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Active Integrations</h2>
        <p className="text-muted-foreground">Manage connections to third-party services.</p>
      </div>
      <IntegrationsList />
    </div>
  );
}
