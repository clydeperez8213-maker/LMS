import AdminHeader from "@/components/AdminHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Shield, Settings, FileText, BarChart3, Lock, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const adminStats = [
  { label: "Incidents Resolved", value: "118", icon: Shield },
  { label: "Active Policies", value: "24", icon: Lock },
  { label: "System Health", value: "99.9%", icon: Globe },
];

const adminHighlights = [
  {
    title: "Platform Health",
    detail: "Monitor uptime, usage trends, and policy compliance at a glance.",
    icon: BarChart3,
  },
  {
    title: "User & Role Control",
    detail: "Grant access, approve staff, and review flagged activities.",
    icon: Settings,
  },
  {
    title: "Documentation",
    detail: "Publish governance notes, archival records, and audit trails.",
    icon: FileText,
  },
];

const quickActions = [
  { title: "Review Approvals", detail: "Approve staff changes or revoke access", to: "/admin/approvals" },
  { title: "Update Policies", detail: "Adjust renewal policies and governance notices", to: "/admin/settings" },
  { title: "View Reports", detail: "Inspect platform trends and usage analytics", to: "/admin/approvals" },
];

const Admin = () => {
  return (
  <div className="min-h-screen bg-background">
      <AdminHeader />
      <main className="container mx-auto px-4 pt-28 pb-12 space-y-10">
      <section className="animate-fade-in-up rounded-[32px] border border-border bg-card px-10 py-12 shadow-xl shadow-slate-900/5">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-foreground">Oversight Console</h1>
              <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
                Stay ahead of compliance, approvals, and resource allocation with a centralized admin experience.
              </p>
            </div>
            <Badge className="text-xs uppercase tracking-[0.5em] bg-foreground text-background">
              Admin Workspace
            </Badge>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {adminStats.map((stat) => (
              <Card key={stat.label} className="border border-border bg-card">
                <CardContent className="space-y-2 text-center pt-4">
                  <stat.icon className="mx-auto h-5 w-5 text-primary" />
                  <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="animate-fade-in-up grid gap-6 lg:grid-cols-3">
          {adminHighlights.map((highlight) => (
            <Card
              key={highlight.title}
              className="border border-border bg-card p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-muted-foreground">
                <highlight.icon className="h-4 w-4 text-primary" />
              </div>
              <CardTitle className="text-2xl font-semibold text-foreground">{highlight.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{highlight.detail}</p>
            </Card>
          ))}
        </section>

        <section className="animate-fade-in-up space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">Admin Navigation</h2>
            <p className="text-xs text-muted-foreground">Launch the tools you need</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {quickActions.map((action) => (
              <Link key={action.title} to={action.to} className="group">
                <Card className="rounded-2xl border border-dashed border-border bg-card/80 p-5 transition duration-300 hover:border-primary hover:shadow-lg">
                  <CardTitle className="text-lg font-semibold text-foreground">{action.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{action.detail}</p>
                  <div className="mt-4 flex items-center justify-between text-sm text-primary">
                    <span>Go</span>
                    <Shield className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Admin;

