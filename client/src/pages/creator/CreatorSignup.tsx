import { useState } from "react";
import { AuthLayout } from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";

const CreatorSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    bio: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Call creator signup API
    // Example: const response = await fetch('/api/creator/signup', { method: 'POST', body: JSON.stringify(formData) });
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
      name:formData.name,
      username:formData.username,
      email:formData.email,
      password:formData.password,
      role: "creator",
      bio: formData.bio,
    });
 
  
    localStorage.setItem("userToken", response.data.token);
    localStorage.setItem("userName", response.data.username);
    localStorage.setItem("Name", response.data.name);
    toast.success("Creator account created successfully!");
    navigate("/creator/dashboard");
    setLoading(false);

   
    } catch (error) {
      toast.error(`${error.response.data.message}`)
      console.error("Error:", error.response?.data || error.message);
    }
    // Simulating signup
   
  };

  return (
    <AuthLayout title="Creator Signup" subtitle="Join as a creator and start building your community">
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
            placeholder="creator@email.com"
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
        <div>
          <Label htmlFor="bio">Short Bio</Label>
          <Textarea
            id="bio"
            placeholder="Tell people about yourself and what you create..."
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            required
            className="mt-1 min-h-[100px]"
          />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Creating account..." : "Sign Up as Creator"}
        </Button>
        <div className="text-center text-sm">
          <span className="text-muted-foreground">Already have an account? </span>
          <Button
            type="button"
            variant="link"
            className="p-0 h-auto"
            onClick={() => navigate("/creator/login")}
          >
            Login
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default CreatorSignup;
