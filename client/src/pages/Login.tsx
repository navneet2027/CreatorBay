import { useState } from "react";
import { AuthLayout } from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Call user login API
    // Example: const response = await fetch('/api/user/login', { method: 'POST', body: JSON.stringify({ email, password }) });
    
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {

      email:email,
      password:password,
  
    });
  

    localStorage.setItem("userToken", response.data.token);
    localStorage.setItem("userName", response.data.username);
    localStorage.setItem("Name", response.data.name);
    toast.success("Login successful!");
    navigate("/explore");
    setLoading(false);

   
    } catch (error) {
      toast.error(`${error.response.data.message}`)
      console.error("Error:", error.response?.data || error.message);
    }
    // Simulating login
  
  };

  return (
    <AuthLayout title="User Login" subtitle="Login to explore and support creators">
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1"
          />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
        <div className="text-center text-sm">
          <span className="text-muted-foreground">Don't have an account? </span>
          <Button
            type="button"
            variant="link"
            className="p-0 h-auto"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </Button>
        </div>
        <div className="text-center">
          <Button
            type="button"
            variant="link"
            className="text-xs"
            onClick={() => navigate("/creator/login")}
          >
            Login as Creator
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
