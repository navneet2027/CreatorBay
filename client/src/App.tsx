import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Explore from "./pages/Explore";
import UserProfile from "./pages/UserProfile";
import CreatorProfile from "./pages/CreatorProfile";
import CreatorLogin from "./pages/creator/CreatorLogin";
import CreatorSignup from "./pages/creator/CreatorSignup";
import CreatorDashboard from "./pages/creator/CreatorDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/creator/:username" element={<CreatorProfile />} />
          
          {/* Creator Routes */}
          <Route path="/creator/login" element={<CreatorLogin />} />
          <Route path="/creator/signup" element={<CreatorSignup />} />
          <Route path="/creator/dashboard" element={<CreatorDashboard />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
