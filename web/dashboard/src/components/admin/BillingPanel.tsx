// src/components/admin/BillingPanel.tsx
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Check } from "lucide-react";

export function BillingPanel() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Subscription & Usage</h2>
        <p className="text-muted-foreground">Manage your plan and view resource consumption.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Current Plan */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Current Plan: Pro</CardTitle>
            <CardDescription>$49/month • Renews on March 15, 2026</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Vector Storage Used</span>
                <span className="text-muted-foreground">2.4GB / 10GB</span>
              </div>
              <Progress value={24} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>AI Queries (Monthly)</span>
                <span className="text-muted-foreground">8,432 / 50,000</span>
              </div>
              <Progress value={16} className="h-2" />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
               <div className="rounded-lg border p-3">
                 <div className="text-sm font-medium">Payment Method</div>
                 <div className="text-2xl font-bold mt-1">Visa •••• 4242</div>
               </div>
               <div className="rounded-lg border p-3">
                 <div className="text-sm font-medium">Next Invoice</div>
                 <div className="text-2xl font-bold mt-1">$49.00</div>
               </div>
            </div>
          </CardContent>
          <CardFooter className="justify-between border-t px-6 py-4">
            <span className="text-sm text-muted-foreground">Manage billing details via Stripe</span>
            <Button variant="outline">Update Payment Method</Button>
          </CardFooter>
        </Card>

        {/* Upgrade options */}
        <Card className="bg-slate-950 text-white border-slate-800">
          <CardHeader>
            <CardTitle>Enterprise Plan</CardTitle>
            <CardDescription className="text-slate-400">For large organizations requiring SSO & SLA.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             <ul className="space-y-2 text-sm">
               <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-400" /> Unlimited Vector Storage</li>
               <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-400" /> Custom AI Models</li>
               <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-400" /> SSO (SAML/OIDC)</li>
               <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-400" /> Dedicated Success Manager</li>
             </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-white text-black hover:bg-slate-200">Contact Sales</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
