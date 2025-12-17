import StaffHeader from "@/components/StaffHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

const staffStats = [
  { label: "Reservations Today", value: "28", icon: Calendar },
  { label: "Help Desk Chats", value: "12", icon: Users },
  { label: "Late Returns", value: "4", icon: BookOpen },
];

const staffHighlights = [
  {
    title: "Circulation Support",
    detail: "Coordinate check-outs, returns, and reading rooms in real time.",
  },
  {
    title: "Activity Calendar",
    detail: "Publish book talks and monitor reservations.",
  },
  {
    title: "Community Mentorship",
    detail: "Connect with students for academic support moments.",
  },
];

const quickActions = [
  { title: "Manage Reservations", detail: "Block rooms, release holds, and set reminders.", to: "/staff/schedule" },
  { title: "Student Alerts", detail: "Flag overdue readers and follow up on support chats.", to: "/staff/reports" },
  { title: "Event Logistics", detail: "Coordinate itineraries for book talks and workshops.", to: "/staff/events" },
];

const Staff = () => {
  return (
    <div className="min-h-screen bg-background">
      <StaffHeader />
      <main className="container mx-auto px-4 pt-32 pb-12 space-y-10">
        <section className="animate-fade-in-up rounded-[32px] border border-border bg-card px-10 py-12 shadow-xl shadow-slate-900/5">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-6">
              <div>
                <h1 className="text-3xl font-semibold text-foreground">Community Services Control</h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  Monitor circulation, respond to student requests, and orchestrate events through a refined platform built for formal operations.
                </p>
              </div>
              <Badge className="text-xs uppercase tracking-[0.5em] bg-secondary text-secondary-foreground">
                Staff Operations
              </Badge>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {staffStats.map((stat) => (
              <Card
                key={stat.label}
                className="border border-border bg-card"
              >
                <CardContent className="flex min-h-[160px] flex-col items-center justify-center gap-2 text-center">
                  <div className="flex flex-col items-center gap-1 text-xs uppercase tracking-[0.5em] text-slate-500">
                    <stat.icon className="h-5 w-5 text-slate-600" />
                    <span>{stat.label}</span>
                  </div>
                  <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="animate-fade-in-up grid gap-6 lg:grid-cols-3">
          {staffHighlights.map((highlight, idx) => (
            <Card
              key={highlight.title}
              className="space-y-3 border border-border bg-card p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span>Highlight</span>
                <span>{`0${idx + 1}`}</span>
              </div>
              <CardTitle className="text-2xl font-semibold text-foreground">{highlight.title}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">{highlight.detail}</CardDescription>
            </Card>
          ))}
        </section>

        <section className="animate-fade-in-up space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">Operational Navigation</h2>
            <p className="text-xs text-muted-foreground">Launch dedicated tools</p>
          </div>
              <div className="grid gap-4 md:grid-cols-3">
            {quickActions.map((action) => (
              <Link key={action.title} to={action.to} className="group">
                    <Card className="rounded-2xl border border-dashed border-border bg-card/80 p-5 transition duration-300 hover:border-primary hover:shadow-lg">
                  <CardTitle className="text-lg font-semibold text-foreground">{action.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{action.detail}</CardDescription>
                  <div className="mt-4 flex items-center justify-between text-sm text-primary">
                    <span>Open</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
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

export default Staff;

