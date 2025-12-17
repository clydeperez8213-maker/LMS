import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, Calendar, BookOpen, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { toast } = useToast();

  const userStats = [
    { label: "Books Borrowed", value: "24", icon: BookOpen },
    { label: "Books Read", value: "18", icon: BookOpen },
    { label: "Member Since", value: "Jan 2024", icon: Calendar },
    { label: "Reading Streak", value: "7 days", icon: Award },
  ];

  const handleSave = () => {
    toast({
      title: "Profile updated!",
      description: "Your profile information has been saved successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-foreground mb-2">My Profile</h1>
          <p className="text-muted-foreground">Manage your account information and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="border-border shadow-blue-sm animate-fade-in-up">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src="/placeholder.svg" alt="Profile avatar" />
                    <AvatarFallback className="text-2xl bg-primary text-primary-foreground">NP</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-2xl text-foreground">Nathan Perez</CardTitle>
                <CardDescription className="text-muted-foreground">nathan.perez@pcu.edu.ph</CardDescription>
                <div className="mt-3 flex items-center justify-center gap-3 text-sm font-semibold text-foreground">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden="true" />
                  <span>Active now</span>
                </div>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Edit Profile Picture
                </Button>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="mt-6 border-border animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="text-foreground">Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {userStats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <stat.icon className="h-5 w-5 text-primary" />
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                    </div>
                    <span className="font-semibold text-foreground">{stat.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Profile Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card className="border-border animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="text-foreground">Personal Information</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Update your personal details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="firstName" defaultValue="Nathan" className="pl-10 bg-card border-border" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="lastName" defaultValue="Perez" className="pl-10 bg-card border-border" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="email" type="email" defaultValue="nathan.perez@pcu.edu.ph" className="pl-10 bg-card border-border" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="phone" defaultValue="+63 912 345 6789" className="pl-10 bg-card border-border" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="studentId" className="text-foreground">Student ID</Label>
                  <Input id="studentId" defaultValue="2024-12345" className="bg-card border-border" disabled />
                </div>

                <Button 
                  className="w-full md:w-auto gradient-hero text-hero-text hover:opacity-90 border-0"
                  onClick={handleSave}
                >
                  Save Changes
                </Button>
              </CardContent>
            </Card>

            {/* Library Preferences */}
            <Card className="border-border animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="text-foreground">Library Preferences</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Customize your library experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="favoriteGenre" className="text-foreground">Favorite Genre</Label>
                  <Input id="favoriteGenre" defaultValue="Science Fiction" className="bg-card border-border" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="readingGoal" className="text-foreground">Monthly Reading Goal</Label>
                  <Input id="readingGoal" type="number" defaultValue="3" className="bg-card border-border" />
                </div>

                <Button 
                  className="w-full md:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  onClick={handleSave}
                >
                  Update Preferences
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
