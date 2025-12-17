import StaffHeader from "@/components/StaffHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const scheduleEntries = [
  {
    title: "Morning Circulation",
    time: "08:00 – 11:30",
    location: "Circulation Desk",
    status: "On Track",
    focus: "Processing 120 check-outs, preparing interlibrary loans",
  },
  {
    title: "Reading Room Support",
    time: "12:00 – 14:30",
    location: "Research Area B",
    status: "2 assigned",
    focus: "Monitoring quiet zones and assisting researchers",
  },
  {
    title: "Events Briefing",
    time: "15:00 – 16:30",
    location: "Conference Room",
    status: "In Review",
    focus: "Final run-through for tomorrow’s faculty book talk",
  },
];

const StaffSchedule = () => (
  <div className="min-h-screen bg-background">
    <StaffHeader />
    <main className="container mx-auto px-4 pt-24 pb-8 space-y-6">
      <section className="animate-fade-in-up rounded-[28px] border border-border bg-card px-6 py-10 shadow-xl shadow-slate-900/5">
        <header className="space-y-4">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl font-semibold text-foreground">Today&apos;s Coverage</h1>
              <p className="max-w-3xl text-sm text-muted-foreground">
                Review every shift with precise timings, staffing status, and key focus notes so the floor stays coordinated across services.
              </p>
            </div>
            <Badge className="text-xs bg-secondary text-secondary-foreground uppercase tracking-[0.4em]">
              Schedule Management
            </Badge>
          </div>
        </header>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {scheduleEntries.map((entry) => (
            <Card key={entry.title} className="border border-border bg-card/80">
              <CardContent className="flex min-h-[180px] flex-col justify-between gap-3 pt-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold text-foreground">{entry.title}</CardTitle>
                  <Badge className="text-[10px] uppercase tracking-[0.3em] bg-primary text-primary-foreground">
                    {entry.status}
                  </Badge>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p className="font-semibold">{entry.time}</p>
                  <p>{entry.location}</p>
                  <p className="max-w-[220px]">{entry.focus}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="animate-fade-in-up grid gap-6 md:grid-cols-2">
          <Card className="border border-border bg-card/90">
            <CardContent className="space-y-2 pt-4">
            <h2 className="text-lg font-semibold text-foreground">Staff Coverage</h2>
            <p className="text-sm text-muted-foreground">
              Shift leaders: Angela (Circulation), Marco (Rooms), Priya (Outreach)
            </p>
            <p className="text-sm text-muted-foreground">
              Floaters on standby: 2 – ready to assist with rush periods or late returns.
            </p>
          </CardContent>
        </Card>
        <Card className="border border-border bg-card/90">
            <CardContent className="space-y-2 pt-4">
            <h2 className="text-lg font-semibold text-foreground">Operational Notes</h2>
            <p className="text-sm text-muted-foreground">
              Quiet study pods are fully booked until 15:00; focus on reshelving returns before the evening shift.
            </p>
            <p className="text-sm text-muted-foreground">Wireless projector reserved for the after-hours lecture.</p>
          </CardContent>
        </Card>
      </section>
    </main>
  </div>
);

export default StaffSchedule;

