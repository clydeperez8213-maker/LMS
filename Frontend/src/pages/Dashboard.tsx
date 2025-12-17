import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, BookMarked, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    { title: "Total Books", value: "2,847", icon: BookOpen, change: "+12% from last month" },
    { title: "Active Members", value: "1,234", icon: Users, change: "+5% from last month" },
    { title: "Books Borrowed", value: "456", icon: BookMarked, change: "+8% from last month" },
    { title: "Popular Books", value: "89", icon: TrendingUp, change: "Trending this week" },
  ];

  const recentBooks = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", status: "Available", cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400" },
    { id: 2, title: "1984", author: "George Orwell", status: "Borrowed", cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", status: "Available", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400" },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen", status: "Available", cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Hero Section */}
        <div className="mb-12 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            PCU Library Management System
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover, borrow, and manage your reading journey with ease
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card 
              key={stat.title} 
              className="hover:shadow-blue-lg transition-all duration-300 animate-fade-in-up border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Books Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Recently Added Books</h2>
            <Link to="/books">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Books
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentBooks.map((book, index) => (
              <Link to={`/books/${book.id}`} key={book.id}>
                <Card 
                  className="group hover:shadow-blue-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in-up border-border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="p-0">
                    <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
                      <img 
                        src={book.cover} 
                        alt={book.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <CardTitle className="text-lg mb-2 text-foreground line-clamp-1">{book.title}</CardTitle>
                    <CardDescription className="text-muted-foreground mb-2">{book.author}</CardDescription>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      book.status === "Available" 
                        ? "bg-accent text-accent-foreground" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {book.status}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/books" className="block">
            <Card className="hover:shadow-blue-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer gradient-hero text-hero-text border-0">
              <CardHeader>
                <BookOpen className="h-12 w-12 mb-4" />
                <CardTitle className="text-2xl">Browse Books</CardTitle>
                <CardDescription className="text-hero-text/80">
                  Explore our extensive collection of books across all genres
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/my-books" className="block">
            <Card className="hover:shadow-blue-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-secondary text-secondary-foreground border-0">
              <CardHeader>
                <BookMarked className="h-12 w-12 mb-4" />
                <CardTitle className="text-2xl">My Books</CardTitle>
                <CardDescription className="text-secondary-foreground/80">
                  View and manage your currently borrowed books
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/profile" className="block">
            <Card className="hover:shadow-blue-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-accent text-accent-foreground border-border">
              <CardHeader>
                <Users className="h-12 w-12 mb-4 text-primary" />
                <CardTitle className="text-2xl text-foreground">My Profile</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Manage your account settings and preferences
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
