import StaffHeader from "@/components/StaffHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const events = [
  {
    title: "Faculty Book Talk",
    date: "Dec 1 · 5:30 PM",
    location: "Auditorium A",
    logistics: "Stage setup, AV check, 65 attendees expected, refreshments provided",
  },
  {
    title: "Youth Literacy Drive",
    date: "Dec 4 · 10:00 AM",
    location: "Community Hall",
    logistics: "Mobile library, 12 volunteers, transportation confirmed",
  },
  {
    title: "Collections Review",
    date: "Dec 6 · 2:00 PM",
    location: "Reading Room C",
    logistics: "Curator meeting, new acquisitions preview, compliance checklist",
  },
];

const StaffEvents = () => (
  <div className="min-h-screen bg-background">
    <StaffHeader />
    <main className="container mx-auto px-4 pt-32 pb-12 space-y-10">
      <section className="animate-fade-in-up rounded-3xl border border-border bg-card px-8 py-10 shadow-lg shadow-slate-900/10">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="text-4xl font-semibold text-foreground">Upcoming Engagements</h1>
              <p className="max-w-3xl text-sm text-muted-foreground">
                Confirmed events, assigned teams, and setup requirements keep the BLUEBOOK calendar running reliably.
              </p>
            </div>
            <Badge className="text-xs bg-secondary text-secondary-foreground uppercase tracking-[0.4em]">
              Event Logistics
            </Badge>
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.title} className="border border-border bg-card p-5">
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold text-foreground">{event.title}</CardTitle>
                  <Badge className="text-xs bg-primary text-primary-foreground">{event.date}</Badge>
                </div>
                <p className="text-sm font-semibold text-muted-foreground">{event.location}</p>
                <p className="text-sm text-muted-foreground">{event.logistics}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  </div>
);

export default StaffEvents;

