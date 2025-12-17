import AdminHeader from "@/components/AdminHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const AdminSettings = () => (
  <div className="min-h-screen bg-background">
    <AdminHeader />
    <main className="container mx-auto px-4 pt-24 pb-12 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground">Admin Settings</h1>
        <p className="text-muted-foreground">
          Configure access levels, renewal policies, and integration keys for BLUEBOOK.
        </p>
      </div>
      <Card className="animate-fade-in-up border-border bg-card">
        <CardHeader>
          <CardTitle className="text-2xl">General Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="policy" className="text-foreground">Renewal Policy</Label>
            <Input id="policy" defaultValue="Two renewals per borrower" className="bg-background" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="integration" className="text-foreground">Integration Key</Label>
            <Input id="integration" placeholder="••••••••" className="bg-background" />
          </div>
          <Button className="bg-primary text-primary-foreground">Save settings</Button>
        </CardContent>
      </Card>
    </main>
  </div>
);

export default AdminSettings;

