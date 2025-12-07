// import { useEffect, useState } from "react";
// import { Navbar } from "@/components/Navbar";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { set } from "date-fns";
// import ProfileCard from "@/components/Postcardprofile";
// // Mock subscribed creators - TODO: Replace with API call

// const UserProfile = () => {
//   const navigate = useNavigate();
//   const [subscriptions, setSubscriptions] = useState([]);
//   const userName = localStorage.getItem("userName") || "User";
//   const [userEmail,setemail] = useState(); // TODO: Get from API
//             const [isloading, setIsloading] = useState(false);
//              const [profilePic, setProfilepic] = useState("");
          


//   useEffect(() => {
//     // Check if user is logged in
//     const token = localStorage.getItem("userToken");
//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     // TODO: Load user profile data
//     // Example: fetch('/api/user/profile').then(res => res.json()).then(data => setUserData(data));
//     setIsloading(true)
//    try {
  
//      const s =axios.get('http://localhost:5000/api/auth/me', {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//     })
//     s.then(res => {
//       setemail(res.data.email) 
//     setProfilepic(res.data.profilePic)  });
  

//     // TODO: Load subscribed creators
//     // Example: fetch('/api/user/subscriptions').then(res => res.json()).then(data => setSubscriptions(data));
//     const subs =axios.get('http://localhost:5000/api/payment/subscriptions/profile', {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//     })
//     subs.then(res => setSubscriptions(res.data))
//    } catch (error) {
    
//    }finally{
//         setIsloading(false)
//    }
//   }, [navigate]);

//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar userType="user" userName={userName} />
      
//       <div className="container mx-auto px-4 py-8 max-w-4xl">
//         <h1 className="text-3xl font-bold text-foreground mb-8">My Profile</h1>

//         {/* Profile Info */}
//         <Card className="mb-8">
//           <CardHeader>
//             <CardTitle>Profile Information</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="flex items-center gap-4">
//               <div>
//                     {profilePic === "" ? (
//                   <div>Loading profile...</div>
//                 ) : (
//                   <ProfileCard user={{profilePic,  allowed : true
// }} />
//                 )}
//               </div>
//               <div>
//                 <h2 className="text-xl font-semibold">{userName}</h2>
//                 <p className="text-muted-foreground">@{userName.toLowerCase()}</p>
//               </div>
//             </div>
//             <div className="pt-4 border-t">
//               <p className="text-sm text-muted-foreground">Email</p>
//               <p className="text-foreground">{userEmail}</p>
//             </div>
//           </CardContent>
//         </Card>
//    {isloading && (
//   <div 
//     className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
//   >
//     <div className="bg-white rounded-xl p-8 shadow-xl w-80 text-center">
//       <div className="loader mx-auto mb-4"></div>
//       <h2 className="text-lg font-semibold">loading…</h2>
//       <p className="text-muted-foreground text-sm mt-2">
//         Please wait,  getting your subscriptions....
//       </p>
//     </div>
//   </div>
// )}
         
//         {/* Subscribed Creators */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Subscribed Creators</CardTitle>
//             <CardDescription>
//               Creators you're currently supporting ({subscriptions.length})
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             {subscriptions.length === 0 ? (
//               <p className="text-muted-foreground text-center py-8">
//                 You haven't subscribed to any creators yet
//               </p>
//             ) : (
//               <div className="space-y-3">
//                 {subscriptions.map((creator) => (
//                   <div
//                     key={creator.id}
//                     className="flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors cursor-pointer"
//                     onClick={() => navigate(`/creator/${creator?.username}`)}
//                   >
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                     
//                          {!creator ? (
//                           <div>Loading profile...</div>
//                         ) : (
//                           <ProfileCard user={{...creator,small:true}} />
//                         )}
                     
//                       </div>
//                       <div>
//                         <p className="font-medium">{creator?.name}</p>
//                         <p className="text-sm text-muted-foreground">@{creator?.username}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//             </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;



import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProfileCard from "@/components/Postcardprofile";
import { Mail, Users, Heart, Star, ArrowRight, Crown, Sparkles } from "lucide-react";

const UserProfile = () => {
  const navigate = useNavigate();
  const [subscriptions, setSubscriptions] = useState([]);
  const Name = localStorage.getItem("Name") || "User";
  const userName = localStorage.getItem('userName');
  const [userEmail, setemail] = useState();
  const [isloading, setIsloading] = useState(false);
  const [profilePic, setProfilepic] = useState("");
  const role = localStorage.getItem("role");

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      navigate("/login");
      return;
    }

    setIsloading(true);
    try {
      const s = axios.get('http://localhost:5000/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      s.then(res => {
        setemail(res.data.email);
        setProfilepic(res.data.profilePic);
      });

      const subs = axios.get('http://localhost:5000/api/payment/subscriptions/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      subs.then(res => setSubscriptions(res.data));
    } catch (error) {
      // Handle error
    } finally {
      setIsloading(false);
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-black">
      <Navbar userType={role} userName={Name} />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-orange-400" />
            Your Profile
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            My <span className="text-orange-500">Profile</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Manage your account and view your subscriptions
          </p>
        </div>

        {/* Creator Dashboard CTA */}
        {role === "creator" && (
          <div className="relative group mb-8">
            {/* Animated background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
            
            {/* Card content */}
            <div className="relative bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-xl p-6 overflow-hidden">
              {/* Sparkle effects */}
              <div className="absolute top-4 right-4 opacity-20">
                <Sparkles className="w-16 h-16 text-orange-400" />
              </div>
              <div className="absolute bottom-4 left-4 opacity-10">
                <Crown className="w-12 h-12 text-orange-400" />
              </div>
              
              <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Crown className="w-6 h-6 text-orange-400" />
                    <h3 className="text-2xl font-bold text-white">You're a Creator! 🎨</h3>
                  </div>
                  <p className="text-gray-300 mb-1">
                    Ready to manage your content and grow your community?
                  </p>
                  <p className="text-orange-400 text-sm font-medium">
                    Access your personal creator dashboard →
                  </p>
                </div>
                <button
                  onClick={() => navigate("/creator/dashboard")}
                  className="group/btn relative px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-orange-500/30 flex items-center gap-2 whitespace-nowrap"
                >
                  <Crown className="w-5 h-5" />
                  Go to Dashboard
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Profile Info Card */}
        <div className="bg-neutral-900 rounded-xl border border-gray-800 overflow-hidden mb-8">
          {/* Header Background */}
          <div className="h-32 bg-gradient-to-br from-orange-500/20 via-orange-600/10 to-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(251,146,60,0.1),transparent)]"></div>
          </div>

          {/* Profile Content */}
          <div className="p-6 -mt-16 relative">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <div className="flex-shrink-0">
                {profilePic === "" ? (
                  <div className="text-gray-400">Loading profile...</div>
                ) : (
                  <ProfileCard user={{ profilePic, allowed: true }} />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-2xl font-bold text-white">{Name}</h2>
                  {role === "creator" && (
                    <div className="px-2 py-0.5 bg-orange-500/20 border border-orange-500/30 rounded-full flex items-center gap-1">
                      <Crown className="w-3 h-3 text-orange-400" />
                      <span className="text-xs text-orange-400 font-medium">Creator</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-500">@{userName?.toLowerCase()}</p>
              </div>
            </div>

            {/* Email Info */}
            <div className="p-4 bg-black/30 rounded-lg border border-gray-800">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500/20 rounded-lg">
                  <Mail className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email Address</p>
                  <p className="text-white font-medium">{userEmail}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-neutral-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-500/20 rounded-lg">
                <Heart className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">{subscriptions.length}</div>
                <div className="text-gray-400 text-sm">Active Subscriptions</div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-500/20 rounded-lg">
                <Users className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">{subscriptions.length}</div>
                <div className="text-gray-400 text-sm">Creators Supported</div>
              </div>
            </div>
          </div>
        </div>

        {/* Subscribed Creators */}
        <div className="bg-neutral-900 rounded-xl border border-gray-800 overflow-hidden">
          <div className="p-6 border-b border-gray-800">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-2">
              <span className="w-1 h-8 bg-orange-500 rounded-full"></span>
              Subscribed Creators
            </h2>
            <p className="text-gray-400">
              Creators you're currently supporting ({subscriptions.length})
            </p>
          </div>
          
          <div className="p-6">
            {subscriptions.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No Subscriptions Yet</h3>
                <p className="text-gray-400 mb-6">
                  You haven't subscribed to any creators yet
                </p>
                <button
                  onClick={() => navigate("/explore")}
                  className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-all hover:scale-105"
                >
                  Explore Creators
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {subscriptions.map((creator) => (
                  <div
                    key={creator.id}
                    className="group flex items-center justify-between p-4 bg-black/30 border border-gray-800 rounded-lg hover:border-orange-500/50 transition-all cursor-pointer"
                    onClick={() => navigate(`/creator/${creator?.username}`)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        {!creator ? (
                          <div className="text-gray-400">Loading...</div>
                        ) : (
                          <ProfileCard user={{ ...creator, small: true }} />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-white group-hover:text-orange-400 transition-colors">
                          {creator?.name}
                        </p>
                        <p className="text-sm text-gray-500">@{creator?.username}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Loading Modal */}
      {isloading && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-neutral-900 border border-gray-800 rounded-xl p-8 shadow-2xl w-80 text-center">
            <div className="w-16 h-16 border-4 border-gray-800 border-t-orange-500 rounded-full animate-spin mx-auto mb-4"></div>
            <h2 className="text-lg font-semibold text-white mb-2">Loading...</h2>
            <p className="text-gray-400 text-sm">
              Please wait, getting your subscriptions....
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;

// import { useEffect, useState } from "react";
// import { Navbar } from "@/components/Navbar";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import ProfileCard from "@/components/Postcardprofile";
// import { Mail, Users, Heart, Star, ArrowRight } from "lucide-react";

// const UserProfile = () => {
//   const navigate = useNavigate();
//   const [subscriptions, setSubscriptions] = useState([]);
//   const Name = localStorage.getItem("Name") || "User";
//   const userName = localStorage.getItem('userName');
//   const [userEmail, setemail] = useState();
//   const [isloading, setIsloading] = useState(false);
//   const [profilePic, setProfilepic] = useState("");
//   const role = localStorage.getItem("role")

//   useEffect(() => {
//     const token = localStorage.getItem("userToken");
//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     setIsloading(true);
//     try {
//       const s = axios.get('http://localhost:5000/api/auth/me', {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       s.then(res => {
//         setemail(res.data.email);
//         setProfilepic(res.data.profilePic);
//       });

//       const subs = axios.get('http://localhost:5000/api/payment/subscriptions/profile', {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       subs.then(res => setSubscriptions(res.data));
//     } catch (error) {
//       // Handle error
//     } finally {
//       setIsloading(false);
//     }
//   }, [navigate]);

//   return (
//     <div className="min-h-screen bg-black">
//       <Navbar userType={role} userName={Name} />
      
//       <div className="container mx-auto px-4 py-8 max-w-4xl">
//         {/* Header */}
//         <div className="mb-8">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
//             <Star className="w-4 h-4 fill-orange-400" />
//             Your Profile
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
//             My <span className="text-orange-500">Profile</span>
//           </h1>
//           <p className="text-gray-400 text-lg">
//             Manage your account and view your subscriptions
//           </p>
//         </div>

//         {/* Profile Info Card */}
//         <div className="bg-neutral-900 rounded-xl border border-gray-800 overflow-hidden mb-8">
//           {/* Header Background */}
//           <div className="h-32 bg-gradient-to-br from-orange-500/20 via-orange-600/10 to-transparent relative overflow-hidden">
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(251,146,60,0.1),transparent)]"></div>
//           </div>

//           {/* Profile Content */}
//           <div className="p-6 -mt-16 relative">
//             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
//               <div className="flex-shrink-0">
//                 {profilePic === "" ? (
//                   <div className="text-gray-400">Loading profile...</div>
//                 ) : (
//                   <ProfileCard user={{ profilePic, allowed: true }} />
//                 )}
//               </div>
//               <div className="flex-1">
//                 <h2 className="text-2xl font-bold text-white mb-1">{Name}</h2>
//                 <p className="text-gray-500">@{userName.toLowerCase()}</p>
//               </div>
//             </div>

//             {/* Email Info */}
//             <div className="p-4 bg-black/30 rounded-lg border border-gray-800">
//               <div className="flex items-center gap-3">
//                 <div className="p-2 bg-orange-500/20 rounded-lg">
//                   <Mail className="w-5 h-5 text-orange-400" />
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500 mb-1">Email Address</p>
//                   <p className="text-white font-medium">{userEmail}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Stats Card */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//           <div className="bg-neutral-900 rounded-xl p-6 border border-gray-800">
//             <div className="flex items-center gap-3">
//               <div className="p-3 bg-orange-500/20 rounded-lg">
//                 <Heart className="w-6 h-6 text-orange-400" />
//               </div>
//               <div>
//                 <div className="text-2xl font-bold text-white mb-1">{subscriptions.length}</div>
//                 <div className="text-gray-400 text-sm">Active Subscriptions</div>
//               </div>
//             </div>
//           </div>
//           <div className="bg-neutral-900 rounded-xl p-6 border border-gray-800">
//             <div className="flex items-center gap-3">
//               <div className="p-3 bg-orange-500/20 rounded-lg">
//                 <Users className="w-6 h-6 text-orange-400" />
//               </div>
//               <div>
//                 <div className="text-2xl font-bold text-white mb-1">{subscriptions.length}</div>
//                 <div className="text-gray-400 text-sm">Creators Supported</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Subscribed Creators */}
//         <div className="bg-neutral-900 rounded-xl border border-gray-800 overflow-hidden">
//           <div className="p-6 border-b border-gray-800">
//             <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-2">
//               <span className="w-1 h-8 bg-orange-500 rounded-full"></span>
//               Subscribed Creators
//             </h2>
//             <p className="text-gray-400">
//               Creators you're currently supporting ({subscriptions.length})
//             </p>
//           </div>
          
//           <div className="p-6">
//             {subscriptions.length === 0 ? (
//               <div className="text-center py-16">
//                 <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Heart className="w-10 h-10 text-gray-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-white mb-2">No Subscriptions Yet</h3>
//                 <p className="text-gray-400 mb-6">
//                   You haven't subscribed to any creators yet
//                 </p>
//                 <button
//                   onClick={() => navigate("/explore")}
//                   className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-all hover:scale-105"
//                 >
//                   Explore Creators
//                 </button>
//               </div>
//             ) : (
//               <div className="space-y-3">
//                 {subscriptions.map((creator) => (
//                   <div
//                     key={creator.id}
//                     className="group flex items-center justify-between p-4 bg-black/30 border border-gray-800 rounded-lg hover:border-orange-500/50 transition-all cursor-pointer"
//                     onClick={() => navigate(`/creator/${creator?.username}`)}
//                   >
//                     <div className="flex items-center gap-4">
//                       <div className="flex-shrink-0">
//                         {!creator ? (
//                           <div className="text-gray-400">Loading...</div>
//                         ) : (
//                           <ProfileCard user={{ ...creator, small: true }} />
//                         )}
//                       </div>
//                       <div>
//                         <p className="font-semibold text-white group-hover:text-orange-400 transition-colors">
//                           {creator?.name}
//                         </p>
//                         <p className="text-sm text-gray-500">@{creator?.username}</p>
//                       </div>
//                     </div>
//                     <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Loading Modal */}
//       {isloading && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="bg-neutral-900 border border-gray-800 rounded-xl p-8 shadow-2xl w-80 text-center">
//             <div className="w-16 h-16 border-4 border-gray-800 border-t-orange-500 rounded-full animate-spin mx-auto mb-4"></div>
//             <h2 className="text-lg font-semibold text-white mb-2">Loading...</h2>
//             <p className="text-gray-400 text-sm">
//               Please wait, getting your subscriptions....
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserProfile;