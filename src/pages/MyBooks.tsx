import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const MyBooks = () => {
  const { toast } = useToast();

  const borrowedBooks = [
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400",
      borrowDate: "2024-01-15",
      dueDate: "2024-01-29",
      daysLeft: 5,
    },
    {
      id: 6,
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      cover: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400",
      borrowDate: "2024-01-18",
      dueDate: "2024-02-01",
      daysLeft: 8,
    },
  ];

  const readingList = [
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400",
      status: "Available",
    },
    {
      id: 7,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      cover: "https://images.unsplash.com/photo-1618609378039-b572f64c5b42?w=400",
      status: "Available",
    },
  ];

  const handleReturn = (bookTitle: string) => {
    toast({
      title: "Book returned!",
      description: `"${bookTitle}" has been returned successfully.`,
    });
  };

  const handleRenew = (bookTitle: string) => {
    toast({
      title: "Loan renewed!",
      description: `"${bookTitle}" loan has been extended by 14 days.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-foreground mb-2">My Books</h1>
          <p className="text-muted-foreground">Manage your borrowed books and reading list</p>
        </div>

        {/* Currently Borrowed */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Currently Borrowed ({borrowedBooks.length})
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {borrowedBooks.map((book, index) => (
              <Card 
                key={book.id}
                className="hover:shadow-blue-lg transition-all duration-300 border-border animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <Link to={`/books/${book.id}`} className="flex-shrink-0">
                      <img 
                        src={book.cover} 
                        alt={book.title}
                        className="w-32 h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                    
                    <div className="flex-1 flex flex-col">
                      <div className="flex-1">
                        <Link to={`/books/${book.id}`}>
                          <h3 className="text-xl font-bold text-foreground hover:text-primary transition-colors mb-1">
                            {book.title}
                          </h3>
                        </Link>
                        <p className="text-muted-foreground mb-4">{book.author}</p>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>Borrowed: {new Date(book.borrowDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>Due: {new Date(book.dueDate).toLocaleDateString()}</span>
                          </div>
                          <Badge 
                            variant={book.daysLeft <= 3 ? "destructive" : "default"}
                            className={book.daysLeft > 3 ? "bg-accent text-accent-foreground" : ""}
                          >
                            {book.daysLeft} days left
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 mt-4">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          onClick={() => handleRenew(book.title)}
                        >
                          Renew
                        </Button>
                        <Button 
                          size="sm" 
                          className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                          onClick={() => handleReturn(book.title)}
                        >
                          Return Book
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Reading List */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            My Reading List ({readingList.length})
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {readingList.map((book, index) => (
              <Link to={`/books/${book.id}`} key={book.id}>
                <Card 
                  className="group hover:shadow-blue-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in-up border-border"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
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
                    <Badge className="bg-accent text-accent-foreground">{book.status}</Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyBooks;
