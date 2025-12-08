// import { useState } from "react";
// import { AuthLayout } from "@/components/AuthLayout";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";
// import axios from "axios";
// import { profile } from "console";

// const CreatorSignup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     username: "",
//     email: "",
//     password: "",
//     bio: "",
//   });
//   const [loading, setLoading] = useState(false);
//         const [isloading, setIsloading] = useState(false);
  

//   const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     // TODO: Call creator signup API
//     // Example: const response = await fetch('/api/creator/signup', { method: 'POST', body: JSON.stringify(formData) });
//     try {
//       setIsloading(true)
//       const response = await axios.post("http://localhost:5000/api/auth/signup", {
//       name:formData.name,
//       username:formData.username,
//       email:formData.email,
//       password:formData.password,
//       role: "creator",
//       bio: formData.bio,
//       profilePic : "https://res.cloudinary.com/dtirmyj7p/image/upload/v1763996236/creator_posts/creator_apvu40.png"
//     });
 
  
//     localStorage.setItem("userToken", response.data.token);
//     localStorage.setItem("userName", response.data.username);
//     localStorage.setItem("Name", response.data.name);
//     toast.success("Creator account created successfully!");
//     navigate("/creator/dashboard");
//     setLoading(false);

   
//     } catch (error) {
//       setLoading(false);
//       toast.error(`${error.response.data.message}`)
//       console.error("Error:", error.response?.data || error.message);
//     }finally{
//            setIsloading(false)
//     }
   
//   };

//   return (
//     <AuthLayout title="Creator Signup" subtitle="Join as a creator and start building your community">
//       <form onSubmit={handleSignup} className="space-y-4">
//         <div>
//           <Label htmlFor="name">Name</Label>
//           <Input
//             id="name"
//             type="text"
//             placeholder="John Doe"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             required
//             className="mt-1"
//           />
//         </div>
//         <div>
//           <Label htmlFor="username">Username</Label>
//           <Input
//             id="username"
//             type="text"
//             placeholder="johndoe"
//             value={formData.username}
//             onChange={(e) => setFormData({ ...formData, username: e.target.value })}
//             required
//             className="mt-1"
//           />
//         </div>
//         <div>
//           <Label htmlFor="email">Email</Label>
//           <Input
//             id="email"
//             type="email"
//             placeholder="creator@email.com"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//             className="mt-1"
//           />
//         </div>
//         <div>
//           <Label htmlFor="password">Password</Label>
//           <Input
//             id="password"
//             type="password"
//             placeholder="••••••••"
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//             className="mt-1"
//           />
//         </div>
//         <div>
//           <Label htmlFor="bio">Short Bio</Label>
//           <Textarea
//             id="bio"
//             placeholder="Tell people about yourself and what you create..."
//             value={formData.bio}
//             onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
//             required
//             className="mt-1 min-h-[100px]"
//           />
//         </div>
//         <Button type="submit" className="w-full" disabled={loading}>
//           {loading ? "Creating account..." : "Sign Up as Creator"}
//         </Button>
//         <div className="text-center text-sm">
//           <span className="text-muted-foreground">Already have an account? </span>
//           <Button
//             type="button"
//             variant="link"
//             className="p-0 h-auto"
//             onClick={() => navigate("/creator/login")}
//           >
//             Login
//           </Button>
//         </div>
//          {isloading && (
//   <div 
//     className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
//   >
//     <div className="bg-white rounded-xl p-8 shadow-xl w-80 text-center">
//       <div className="loader mx-auto mb-4"></div>
//       <h2 className="text-lg font-semibold">loading…</h2>
//       <p className="text-muted-foreground text-sm mt-2">
//         Please wait, getting dashboard ready....
//       </p>
//     </div>
//   </div>
// )}
//       </form>
//     </AuthLayout>
//   );
// };

// export default CreatorSignup;










import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { Crown, Loader2, Sparkles } from "lucide-react";

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
  const [isloading, setIsloading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      setIsloading(true);
      const response = await axios.post("https://creatorbay.onrender.com/api/auth/signup", {
        name: formData.name,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: "creator",
        bio: formData.bio,
       
      });

      localStorage.setItem("userToken", response.data.token);
      localStorage.setItem("userName", response.data.username);
      localStorage.setItem("Name", response.data.name);
      localStorage.setItem("role","creator");
      toast.success("Creator account created successfully!");
      navigate("/creator/dashboard");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(`${error.response.data.message}`);
      console.error("Error:", error.response?.data || error.message);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white flex items-center justify-center gap-2 mb-2">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-1 rounded-lg">Creator</span>
            <span>Bay</span>
          </h1>
        </div>

        {/* Form Card */}
        <div className="bg-neutral-900 rounded-2xl border border-gray-800 overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-800">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full text-xs font-medium mb-3">
              <Crown className="w-3 h-3" />
              Creator Signup
            </div>
            <h2 className="text-2xl font-bold text-white mb-1">Start Creating Today</h2>
            <p className="text-gray-400 text-sm">Join as a creator and build your community</p>
          </div>

          {/* Form */}
          <div className="p-6">
            <form onSubmit={handleSignup} className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-white text-sm font-medium mb-2 block">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-black border-gray-800 text-white placeholder-gray-500 focus:border-orange-500"
                />
              </div>

              <div>
                <Label htmlFor="username" className="text-white text-sm font-medium mb-2 block">
                  Username
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="johndoe"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  required
                  className="bg-black border-gray-800 text-white placeholder-gray-500 focus:border-orange-500"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white text-sm font-medium mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="creator@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-black border-gray-800 text-white placeholder-gray-500 focus:border-orange-500"
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-white text-sm font-medium mb-2 block">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  className="bg-black border-gray-800 text-white placeholder-gray-500 focus:border-orange-500"
                />
              </div>

              <div>
                <Label htmlFor="bio" className="text-white text-sm font-medium mb-2 block">
                  Short Bio
                </Label>
                <Textarea
                  id="bio"
                  placeholder="Tell people about yourself and what you create..."
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  required
                  className="bg-black border-gray-800 text-white placeholder-gray-500 focus:border-orange-500 min-h-[100px] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  <>
                    <Crown className="w-5 h-5" />
                    Sign Up as Creator
                  </>
                )}
              </button>

              <div className="text-center text-sm">
                <span className="text-gray-400">Already have an account? </span>
                <button
                  type="button"
                  onClick={() => navigate("/creator/login")}
                  className="text-orange-400 hover:text-orange-300 font-medium transition-colors"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/")}
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>

      {/* Loading Modal */}
      {isloading && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-neutral-900 border border-gray-800 rounded-xl p-8 shadow-2xl w-80 text-center">
            <div className="w-16 h-16 border-4 border-gray-800 border-t-orange-500 rounded-full animate-spin mx-auto mb-4"></div>
            <h2 className="text-lg font-semibold text-white mb-2">Creating Account...</h2>
            <p className="text-gray-400 text-sm">
              Please wait, getting dashboard ready...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatorSignup;