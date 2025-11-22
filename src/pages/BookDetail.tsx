import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Calendar, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const BookDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();

  // Mock book data - in real app, fetch based on id
  const book = {
    id: parseInt(id || "1"),
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Classic Literature",
    year: 1925,
    isbn: "978-0-7432-7356-5",
    pages: 180,
    status: "Available",
    copies: 3,
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800",
    description: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
    publisher: "Scribner",
    language: "English",
  };

  const handleBorrow = () => {
    toast({
      title: "Book borrowed successfully!",
      description: `You have borrowed "${book.title}". Due date: ${new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString()}`,
    });
  };

  const handleReserve = () => {
    toast({
      title: "Book reserved!",
      description: `"${book.title}" has been reserved for you. We'll notify you when it's available.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Back Button */}
        <Link to="/books">
          <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Books
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Book Cover */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden border-border shadow-blue-sm animate-fade-in-up">
              <CardContent className="p-0">
                <img 
                  src={book.cover} 
                  alt={book.title}
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
            
            {/* Action Buttons */}
            <div className="mt-6 space-y-3 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              {book.status === "Available" ? (
                <Button 
                  className="w-full gradient-hero text-hero-text hover:opacity-90 border-0"
                  size="lg"
                  onClick={handleBorrow}
                >
                  Borrow This Book
                </Button>
              ) : (
                <Button 
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  size="lg"
                  onClick={handleReserve}
                >
                  Reserve This Book
                </Button>
              )}
              <Button variant="outline" className="w-full border-border" size="lg">
                Add to Reading List
              </Button>
            </div>
          </div>

          {/* Book Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title and Author */}
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-3 mb-2">
                <Badge className={book.status === "Available" ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}>
                  {book.status}
                </Badge>
                <Badge variant="outline" className="border-primary text-primary">{book.category}</Badge>
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{book.title}</h1>
              <p className="text-xl text-muted-foreground">by {book.author}</p>
            </div>

            {/* Description */}
            <Card className="border-border animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="text-foreground">Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{book.description}</p>
              </CardContent>
            </Card>

            {/* Book Information */}
            <Card className="border-border animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="text-foreground">Book Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Author</p>
                      <p className="text-foreground">{book.author}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Publication Year</p>
                      <p className="text-foreground">{book.year}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Pages</p>
                      <p className="text-foreground">{book.pages} pages</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">ISBN</p>
                      <p className="text-foreground">{book.isbn}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Publisher</p>
                      <p className="text-foreground">{book.publisher}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Available Copies</p>
                      <p className="text-foreground">{book.copies} of 5</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookDetail;
