import AdminHeader from "@/components/AdminHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const approvals = [
  { title: "Staff Onboarding", detail: "3 pending requests · documents ready for final review", status: "Review" },
  { title: "Resource Allocation", detail: "2 budgets awaiting approval; vendors verified", status: "Pending" },
  { title: "Policy Updates", detail: "Security charter draft ready for sign-off", status: "Draft" },
];

const AdminApprovals = () => (
  <div className="min-h-screen bg-background">
    <AdminHeader />
    <main className="container mx-auto px-4 pt-32 pb-12 space-y-10">
      <section className="animate-fade-in-up rounded-[28px] border border-border bg-card px-8 py-10 shadow-xl shadow-slate-900/5">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-semibold text-foreground">Pending Actions</h1>
            <p className="max-w-3xl text-sm text-muted-foreground">
              Approve staff roles, release budgets, and validate governance materials before they go live.
            </p>
          </div>
          <Badge className="text-xs uppercase tracking-[0.4em] bg-primary text-primary-foreground">
            Approvals
          </Badge>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {approvals.map((approval) => (
            <Card key={approval.title} className="border border-border bg-card/80">
              <CardContent className="space-y-3 pt-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold text-foreground">{approval.title}</CardTitle>
                  <Badge className="text-[10px] uppercase tracking-[0.3em] bg-secondary text-secondary-foreground">
                    {approval.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{approval.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-dashed border-border bg-card/80 p-6">
          <p className="text-sm text-muted-foreground">
            Compliance checkpoints cleared · signature queue idle · next review scheduled in 2 days.
          </p>
          <p className="text-sm text-muted-foreground">
            Need to escalate any item? Use the Launch Admin Toolkit action below to open the command palette.
          </p>
        </div>
        <div className="text-right mt-6">
          <Link
            to="/admin/toolkit"
            className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10"
          >
            Launch Admin Toolkit
          </Link>
        </div>
      </section>
    </main>
  </div>
);

export default AdminApprovals;

