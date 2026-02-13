// src/app/dashboard/admin/settings/page.tsx
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function SettingsAdminPage() {
  return (
    <div className="space-y-6">
       <div>
        <h2 className="text-2xl font-bold tracking-tight">General Organization Settings</h2>
        <p className="text-muted-foreground">Configure your company profile and preferences.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Organization Profile</CardTitle>
          <CardDescription>This is how others will see you on the site.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Company Name</Label>
            <Input id="name" defaultValue="Acme Corp" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="domain">Primary Domain</Label>
            <Input id="domain" defaultValue="acme.com" disabled />
            <p className="text-xs text-muted-foreground">Contact support to change your primary domain.</p>
          </div>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security & Compliance</CardTitle>
          <CardDescription>Manage security policies for your organization.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="sso" className="flex flex-col space-y-1">
              <span>Enforce SSO</span>
              <span className="font-normal leading-snug text-muted-foreground">
                Require all users to log in via SAML/OIDC.
              </span>
            </Label>
            <Switch id="sso" />
          </div>
          <div className="flex items-center justify-between space-x-2">
             <Label htmlFor="2fa" className="flex flex-col space-y-1">
              <span>Require 2FA</span>
              <span className="font-normal leading-snug text-muted-foreground">
                Force two-factor authentication for all members.
              </span>
            </Label>
            <Switch id="2fa" defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="text-red-500">Danger Zone</CardTitle>
          <CardDescription>Irreversible actions requiring confirmation.</CardDescription>
        </CardHeader>
        <CardContent>
           <p className="text-sm text-muted-foreground mb-4">Deleting your organization will remove all data, users, and active subscriptions immediately.</p>
           <Button variant="destructive">Delete Organization</Button>
        </CardContent>
      </Card>
    </div>
  );
}
