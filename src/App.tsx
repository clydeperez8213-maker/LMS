import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import MyBooks from "./pages/MyBooks";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Staff from "./pages/Staff";
import StaffSchedule from "./pages/StaffSchedule";
import StaffReports from "./pages/StaffReports";
import StaffEvents from "./pages/StaffEvents";
import Admin from "./pages/Admin";
import AdminApprovals from "./pages/AdminApprovals";
import AdminReports from "./pages/AdminReports";
import AdminSettings from "./pages/AdminSettings";
import AdminToolkit from "./pages/AdminToolkit";
import AdminBorrowedBooks from "./pages/AdminBorrowedBooks";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:id" element={<BookDetail />} />
            <Route path="/my-books" element={<MyBooks />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/staff/schedule" element={<StaffSchedule />} />
            <Route path="/staff/reports" element={<StaffReports />} />
            <Route path="/staff/events" element={<StaffEvents />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/approvals" element={<AdminApprovals />} />
            <Route path="/admin/reports" element={<AdminReports />} />
            <Route path="/admin/settings" element={<AdminSettings />} />
            <Route path="/admin/toolkit" element={<AdminToolkit />} />
            <Route path="/admin/borrowed-books" element={<AdminBorrowedBooks />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
