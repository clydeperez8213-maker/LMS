import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Books = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Classic", year: 1925, status: "Available", cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400" },
    { id: 2, title: "1984", author: "George Orwell", category: "Dystopian", year: 1949, status: "Borrowed", cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", category: "Classic", year: 1960, status: "Available", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400" },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen", category: "Romance", year: 1813, status: "Available", cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400" },
    { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", category: "Classic", year: 1951, status: "Available", cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400" },
    { id: 6, title: "Harry Potter", author: "J.K. Rowling", category: "Fantasy", year: 1997, status: "Borrowed", cover: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400" },
    { id: 7, title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fantasy", year: 1937, status: "Available", cover: "https://images.unsplash.com/photo-1618609378039-b572f64c5b42?w=400" },
    { id: 8, title: "Brave New World", author: "Aldous Huxley", category: "Dystopian", year: 1932, status: "Available", cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400" },
  ];

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-foreground mb-2">Book Collection</h1>
          <p className="text-muted-foreground">Browse through our extensive library collection</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by title or author..."
              className="pl-10 bg-card border-border"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="border-border">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book, index) => (
            <Link to={`/books/${book.id}`} key={book.id}>
              <Card 
                className="group hover:shadow-blue-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in-up border-border"
                style={{ animationDelay: `${index * 0.05}s` }}
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
                  <CardDescription className="text-muted-foreground mb-1">{book.author}</CardDescription>
                  <CardDescription className="text-sm text-muted-foreground mb-2">
                    {book.category} • {book.year}
                  </CardDescription>
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
      </main>
    </div>
  );
};

export default Books;
