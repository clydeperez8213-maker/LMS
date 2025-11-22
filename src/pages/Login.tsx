import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const roleOptions = [
  {
    name: "Student",
    description: "Jump straight into your personalized reading dashboard.",
    destination: "/",
  },
  {
    name: "Staff",
    description: "Manage schedules, curate releases, and support learners.",
    destination: "/staff",
  },
  {
    name: "Admin",
    description: "Oversee platform health, roles, and policy documents.",
    destination: "/admin",
  },
];

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <Card className="mx-auto max-w-2xl space-y-6 border-border shadow-lg">
          <CardHeader className="text-center">
            <Badge className="mx-auto mb-2 bg-primary text-primary-foreground">Choose a role</Badge>
            <CardTitle className="text-3xl text-foreground">Welcome back to BLUEBOOK</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 py-6">
            <p className="text-center text-muted-foreground">
              Pick the profile that matches your responsibilities so we can route you to the right workspace.
            </p>
            <div className="space-y-4">
              {roleOptions.map((role) => (
                <Button
                  key={role.name}
                  variant="outline"
                  className="w-full flex items-center justify-between gap-4 rounded-2xl border-dashed border-border bg-background px-4 py-5"
                  onClick={() => navigate(role.destination)}
                >
                  <div className="flex flex-wrap items-center gap-2 text-left">
                    <p className="text-lg font-semibold text-foreground">{role.name}</p>
                    <span className="text-sm text-muted-foreground">– {role.description}</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Login;

