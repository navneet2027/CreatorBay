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
            const [isloading, setIsloading] = useState(false);


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Call user login API
    // Example: const response = await fetch('/api/user/login', { method: 'POST', body: JSON.stringify({ email, password }) });
    
    try {
      setIsloading(true)
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
      setLoading(false);
      toast.error(`${error.response.data.message}`)
      console.error("Error:", error.response?.data || error.message);
    } finally{
      setIsloading(false)
    }
    
  
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
        {isloading && (
  <div 
    className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
  >
    <div className="bg-white rounded-xl p-8 shadow-xl w-80 text-center">
      <div className="loader mx-auto mb-4"></div>
      <h2 className="text-lg font-semibold">loading…</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Please wait, Logging in....
      </p>
    </div>
  </div>
)}
      </form>
    </AuthLayout>
  );
};

export default Login;
