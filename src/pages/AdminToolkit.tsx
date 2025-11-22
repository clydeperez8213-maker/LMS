import AdminHeader from "@/components/AdminHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const toolkitCommands = [
  { title: "Launch Approval Flow", description: "Open workflow, check pending docs, and request signatures." },
  { title: "Audit Logs", description: "Inspect the last 24 hours of platform activity and exports." },
  { title: "Emergency Policies", description: "Trigger overrides for compliance or reset sessions." },
];

const AdminToolkit = () => (
  <div className="min-h-screen bg-background">
    <AdminHeader />
    <main className="container mx-auto px-4 pt-32 pb-12 space-y-10">
      <section className="animate-fade-in-up rounded-[28px] border border-border bg-card px-8 py-10 shadow-xl shadow-slate-900/5">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-semibold text-foreground">Admin Toolkit</h1>
            <p className="max-w-3xl text-sm text-muted-foreground">
              Quick actions for audits, approvals, and system overrides with one click.
            </p>
          </div>
          <Badge className="text-xs uppercase tracking-[0.4em] bg-foreground text-background">
            Toolkit
          </Badge>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {toolkitCommands.map((command) => (
            <Card key={command.title} className="border border-border bg-card/80">
              <CardContent className="space-y-3 pt-4">
                <CardTitle className="text-xl font-semibold text-foreground">{command.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{command.description}</p>
                <Button className="bg-primary text-primary-foreground">Execute</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  </div>
);

export default AdminToolkit;

