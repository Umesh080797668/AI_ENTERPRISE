// src/components/admin/IntegrationCard.tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

interface IntegrationCardProps {
  name: string;
  description: string;
  logo: string;
  connected: boolean;
  type: string;
}

export function IntegrationCard({ name, description, logo, connected, type }: IntegrationCardProps) {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="mb-2 w-fit">{type}</Badge>
          <Switch checked={connected} />
        </div>
        <CardTitle className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} alt={name} className="h-6 w-6" />
          {name}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="pt-4 border-t w-full">
        <Button variant={connected ? "outline" : "default"} className="w-full">
          {connected ? "Manage Settings" : "Connect"}
        </Button>
      </CardFooter>
    </Card>
  );
}

// src/components/admin/IntegrationsList.tsx
export function IntegrationsList() {
  const integrations = [
    { name: "Slack", description: "Receive workflow notifications in channels.", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg", connected: true, type: "Messaging" },
    { name: "Google Drive", description: "Sync documents from Drive folders.", logo: "https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png", connected: false, type: "Storage" },
    { name: "GitHub", description: "Connect code repositories for AI analysis.", logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", connected: true, type: "Development" },
    { name: "Salesforce", description: "Sync customer data and leads.", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg", connected: false, type: "CRM" },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {integrations.map((integration) => (
        <IntegrationCard key={integration.name} {...integration} />
      ))}
    </div>
  );
}
