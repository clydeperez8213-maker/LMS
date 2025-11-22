import AdminHeader from "@/components/AdminHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const borrowedRecords = [
  {
    book: "The Great Gatsby",
    borrower: "L. Reyes",
    due: "Dec 5",
    status: "On Time",
    request: "Checked Out",
    priority: "Standard",
  },
  {
    book: "1984",
    borrower: "M. Santos",
    due: "Nov 30",
    status: "Overdue",
    request: "Renewal",
    priority: "High",
  },
  {
    book: "To Kill a Mockingbird",
    borrower: "C. Lopez",
    due: "Dec 3",
    status: "On Time",
    request: "Hold",
    priority: "Standard",
  },
  {
    book: "Pride and Prejudice",
    borrower: "A. Reyes",
    due: "Dec 10",
    status: "Request",
    request: "New Loan",
    priority: "Review",
  },
];

const statusColors: Record<string, string> = {
  "On Time": "bg-emerald-100 text-emerald-700",
  Overdue: "bg-destructive/10 text-destructive",
  Request: "bg-secondary/10 text-secondary",
};

const AdminBorrowedBooks = () => (
  <div className="min-h-screen bg-background">
    <AdminHeader />
    <main className="container mx-auto px-4 pt-32 pb-12 space-y-8">
      <section className="animate-fade-in-up rounded-[28px] border border-border bg-card px-8 py-10 shadow-xl shadow-slate-900/5">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-semibold text-foreground">Borrowed Books Tracker</h1>
            <p className="max-w-3xl text-sm text-muted-foreground">
              Monitor checkouts, approvals, and collections so the admin team can quickly spot overdue and requested titles.
            </p>
          </div>
          <Badge className="text-xs uppercase tracking-[0.4em] bg-foreground text-background">
            Requests
          </Badge>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 border-b border-border bg-card/80 px-6 py-3 text-xs uppercase tracking-[0.4em] text-muted-foreground">
            <span>Book</span>
            <span>Borrower</span>
            <span>Due</span>
            <span>Request</span>
            <span className="text-right">Status</span>
          </div>
          <div className="divide-y divide-border bg-card/80">
            {borrowedRecords.map((record) => (
              <Card key={record.book} className="border-0 bg-transparent shadow-none">
                <CardContent className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center gap-4 px-6 py-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground">{record.book}</p>
                    <p className="text-xs text-muted-foreground">Priority: {record.priority}</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground">{record.borrower}</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground">{record.due}</p>
                    <p className="text-xs text-muted-foreground">Due Date</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground">{record.request}</p>
                    <p className="text-xs text-muted-foreground">Request</p>
                  </div>
                  <div className="text-right space-y-1">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColors[record.status]}`}>
                      {record.status}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default AdminBorrowedBooks;

