import AdminHeader from "@/components/AdminHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { BarChart3, LineChart, PieChart } from "lucide-react";

const reports = [
  { title: "Engagement Index", value: "89%", insight: "Membership interaction above SLA 85%", icon: BarChart3 },
  { title: "Policy Compliance", value: "100%", insight: "No new violations logged this period", icon: LineChart },
  { title: "Resource Utilization", value: "92%", insight: "Facilities running near optimal capacity", icon: PieChart },
];

const AdminReports = () => (
  <div className="min-h-screen bg-background">
    <AdminHeader />
    <main className="container mx-auto px-4 pt-32 pb-12 space-y-10">
      <section className="animate-fade-in-up rounded-[28px] border border-border bg-card px-8 py-10 shadow-xl shadow-slate-900/5">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-semibold text-foreground">Operational Intelligence</h1>
            <p className="max-w-3xl text-sm text-muted-foreground">
              Stay on top of platform performance, compliance traction, and utilization trends across BLUEBOOK.
            </p>
          </div>
          <Badge className="text-xs uppercase tracking-[0.4em] bg-secondary text-secondary-foreground">
            Reports
          </Badge>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {reports.map((report) => (
            <Card key={report.title} className="border border-border bg-card/80">
              <CardContent className="space-y-3 pt-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-muted-foreground">
                  <report.icon className="h-5 w-5 text-primary" />
                  <span>{report.title}</span>
                </div>
                <p className="text-3xl font-semibold text-foreground">{report.value}</p>
                <p className="text-sm text-muted-foreground">{report.insight}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="animate-fade-in-up rounded-3xl border border-dashed border-border bg-card/80 px-6 py-8 shadow-inner">
        <h2 className="text-2xl font-semibold text-foreground">Executive Notes</h2>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li>Engagement steady with a 4% increase in evening library usage.</li>
          <li>Policy rollouts complete for this quarter; awaiting stakeholder sign-off.</li>
          <li>Resource capacity at 92% – continue the current auto-scaling plan.</li>
        </ul>
      </section>
    </main>
  </div>
);

export default AdminReports;

