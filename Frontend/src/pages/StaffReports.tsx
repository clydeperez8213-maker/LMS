import StaffHeader from "@/components/StaffHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const highlights = [
  { title: "Circulation Summary", detail: "152 transactions · 18 renewals · 3 rapid holds" },
  { title: "Mentorship Touchpoints", detail: "42 student sessions logged · 6 referrals to counselors" },
  { title: "Facility Usage", detail: "Reading rooms at 87% capacity; 4 pods reserved for faculty" },
];

const metrics = [
  { label: "Average Response Time", value: "2m 16s" },
  { label: "Requests Pending", value: "8" },
  { label: "Programs Today", value: "5" },
];

const StaffReports = () => (
  <div className="min-h-screen bg-background">
    <StaffHeader />
    <main className="container mx-auto px-4 pt-32 pb-12 space-y-10">
      <section className="animate-fade-in-up rounded-[28px] border border-border bg-card px-8 py-10 shadow-xl shadow-slate-900/5">
        <header className="space-y-4">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl font-semibold text-foreground">Operations Insight</h1>
              <p className="max-w-3xl text-sm text-muted-foreground">
                Daily intelligence for circulation and outreach keeps decision-making grounded in the latest service KPIs.
              </p>
            </div>
            <Badge className="text-xs bg-secondary text-secondary-foreground uppercase tracking-[0.5em]">
              Operations Reports
            </Badge>
          </div>
        </header>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <Card key={metric.label} className="border border-border bg-card/80">
              <CardContent className="space-y-2">
                <div className="h-3" aria-hidden="true" />
                <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">{metric.label}</p>
                <p className="text-3xl font-semibold text-foreground">{metric.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="animate-fade-in-up grid gap-6 md:grid-cols-3">
        {highlights.map((highlight) => (
          <Card key={highlight.title} className="border border-border bg-card p-6 text-left shadow-sm">
            <CardContent className="space-y-2 pt-4">
              <CardTitle className="text-xl font-semibold text-foreground">{highlight.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{highlight.detail}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="animate-fade-in-up rounded-3xl border border-dashed border-border bg-card/80 px-6 py-8 shadow-inner">
        <h2 className="text-2xl font-semibold text-foreground">Executive Summary</h2>
        <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
          <li>Circulation demand is steady with a 6% uptick in evening returns.</li>
          <li>Mentorship outreach added two new partnerships with faculty advisors.</li>
          <li>Facility turnover time remains under 8 minutes, keeping events on schedule.</li>
        </ul>
      </section>
    </main>
  </div>
);

export default StaffReports;

