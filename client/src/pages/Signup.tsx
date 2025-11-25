import { useState } from "react";
import { AuthLayout } from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from 'axios'

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
          const [isloading, setIsloading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Call user signup API
    // Example: const response = await fetch('/api/user/signup', { method: 'POST', body: JSON.stringify(formData) });
    try {
      setIsloading(true)
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
      name:formData.name,
      username:formData.username,
      email:formData.email,
      password:formData.password,
      role: "user",
      profilePic : "https://res.cloudinary.com/dtirmyj7p/image/upload/v1763996236/creator_posts/user_ayovos.png"
    });
    e.preventDefault();
  
    localStorage.setItem("userToken", response.data.token);
    localStorage.setItem("userName", response.data.username);
    localStorage.setItem("Name", response.data.name);
    toast.success("Account created successfully!");
    navigate("/explore");
    setLoading(false);

   
    } catch (error) {
      setLoading(false);
      toast.error(`${error.response.data.message}`)
      console.error("Error:", error.response?.data || error.message);
    }finally{
      setIsloading(false)
    }
   
  };

  return (
    <AuthLayout title="User Signup" subtitle="Create an account to start supporting creators">
      <form onSubmit={handleSignup} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            placeholder="johndoe"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
            className="mt-1"
          />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Creating account..." : "Sign Up"}
        </Button>
        <div className="text-center text-sm">
          <span className="text-muted-foreground">Already have an account? </span>
          <Button
            type="button"
            variant="link"
            className="p-0 h-auto"
            onClick={() => navigate("/login")}
          >
            Login
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

export default Signup;
