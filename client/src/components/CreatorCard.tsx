//original
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import ProfileCard from "./Postcardprofile";

// interface CreatorCardProps {
//   id: string;
//   name: string;
//   username: string;
//   bio: string;
//   subscriberCount?: number;
//   profilePic?: string
// }

// export const CreatorCard = ({ id, name, username, bio, subscriberCount ,profilePic }: CreatorCardProps) => {
//   const navigate = useNavigate();

//   return (
//     <Card className="hover:shadow-lg transition-shadow">
//       <CardHeader>
//         <div className="flex items-center gap-3 mb-2">
//           <div>
//              {!profilePic ? (
//             <div>Loading profile...</div>
//           ) : (
//             <ProfileCard user={{profilePic}} />
//           )}
//           </div>
           
//           <div>
//             <CardTitle className="text-lg">{name}</CardTitle>
//             <CardDescription>@{username}</CardDescription>
//           </div>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{bio}</p>
//         {subscriberCount !== undefined && (
//           <p className="text-xs text-muted-foreground mb-3">
//             {subscriberCount} subscribers
//           </p>
//         )}
//         <Button 
//           onClick={() => navigate(`/creator/${username}`)}
//           className="w-full"
//         >
//           View Profile
//         </Button>
//       </CardContent>
//     </Card>
//   );
// };



// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import ProfileCard from "./Postcardprofile";
// import { Users, ArrowRight, Sparkles, BadgeCheck } from "lucide-react";
// import {User} from "lucide-react"

// interface CreatorCardProps {
//   id: string;
//   name: string;
//   username: string;
//   bio: string;
//   subscriberCount?: number;
//   profilePic?: string;
// }

// export const CreatorCard = ({ id, name, username, bio, subscriberCount, profilePic }: CreatorCardProps) => {
//   const navigate = useNavigate();

//   return (
//     <div className="group relative">
//       {/* Glow Effect */}
//       <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      
//       {/* Card */}
//       <div className="relative bg-[#1a1a24] border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500">
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
//         <div className="relative p-6">
//           {/* Header */}
//           <div className="flex items-start gap-4 mb-4">
//             {/* Profile Picture */}
//             <div className="relative flex-shrink-0">
//               {!profilePic ? (
//                    <div className="relative">
//   <div className="flex items-center justify-center">
//     <div className="w-20 h-20 rounded-full border-2 border-white/10 group-hover:border-purple-500/50 transition-colors bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center overflow-hidden">
//       <User className="w-10 h-10 text-white" />
//     </div>
//   </div>
// </div>
//               ) : (
//                 <div className="relative">
//                   <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity" />
//                   <div className="relative w-19 h-19 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-purple-500/50 transition-colors">
//                     <ProfileCard user={{ profilePic , medium :true }} />
//                   </div>
//                 </div>
//               )}
//               {/* Online Indicator */}
//               <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-[#1a1a24] flex items-center justify-center">
//                 <Sparkles className="w-3 h-3 text-white" />
//               </div>
//             </div>

//             {/* Name and Username */}
//             <div className="flex-1 min-w-0">
//               <div className="flex items-center gap-2 mb-1">
//                 <h3 className="text-lg font-bold text-white truncate group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
//                   {name}
//                 </h3>
//                 <BadgeCheck className="w-5 h-5 text-blue-400 flex-shrink-0" />
//               </div>
//               <p className="text-sm text-gray-400 truncate">@{username}</p>
//             </div>
//           </div>

//           {/* Bio */}
//           <p className="text-sm text-gray-300 mb-4 line-clamp-2 leading-relaxed">
//             {bio}
//           </p>

//           {/* Stats */}
//           {subscriberCount !== undefined && (
//             <div className="flex items-center gap-2 mb-4 px-3 py-2 bg-white/5 border border-white/10 rounded-lg">
//               <div className="p-1.5 bg-purple-500/20 rounded-md">
//                 <Users className="w-4 h-4 text-purple-400" />
//               </div>
//               <div>
//                 <span className="text-base font-bold text-white">
//                   {subscriberCount.toLocaleString()}
//                 </span>
//                 <span className="text-xs text-gray-400 ml-1">subscribers</span>
//               </div>
//             </div>
//           )}

//           {/* View Profile Button */}
//           <button
//             onClick={() => navigate(`/creator/${username}`)}
//             className="relative w-full group/button overflow-hidden"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl transition-transform duration-300 group-hover/button:scale-105" />
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover/button:opacity-100 transition-opacity duration-300" />
//             <div className="relative px-4 py-3 flex items-center justify-center gap-2 text-white font-semibold">
//               <span>View Profile</span>
//               <ArrowRight className="w-4 h-4 transform group-hover/button:translate-x-1 transition-transform duration-300" />
//             </div>
//           </button>
//         </div>

//         {/* Bottom Accent */}
//         <div className="h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//       </div>
//     </div>
//   );
// };



//claude
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import ProfileCard from "./Postcardprofile";
// import { Users, ArrowRight } from "lucide-react";

// interface CreatorCardProps {
//   id: string;
//   name: string;
//   username: string;
//   bio: string;
//   subscriberCount?: number;
//   profilePic?: string;
// }

// export const CreatorCard = ({ id, name, username, bio, subscriberCount, profilePic }: CreatorCardProps) => {
//   const navigate = useNavigate();

//   return (
//     <div 
//       className="group cursor-pointer rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
//       style={{ 
//         background: 'white',
//         border: '1px solid rgba(69, 123, 157, 0.15)',
//         fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
//       }}
//       onClick={() => navigate(`/creator/${username}`)}
//     >
//       {/* Header with Profile Picture */}
//       <div className="p-6 pb-4">
//         <div className="flex items-start gap-4">
//           {/* Profile Picture */}
//           <div className="relative">
//             {!profilePic ? (
//               <div 
//                 className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm animate-pulse"
//                 style={{ background: 'linear-gradient(135deg, #F1FAEE, #E8F4F8)' }}
//               >
//                 <Users className="w-8 h-8" style={{ color: '#457B9D' }} />
//               </div>
//             ) : (
//               <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300">
//                 <ProfileCard user={{ profilePic }} />
//               </div>
//             )}
//             {/* Online indicator */}
//             <div 
//               className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white shadow-sm"
//               style={{ background: '#E63946' }}
//             ></div>
//           </div>

//           {/* Name and Username */}
//           <div className="flex-1 min-w-0">
//             <h3 
//               className="text-lg font-bold mb-1 truncate group-hover:text-opacity-80 transition-all"
//               style={{ color: '#1D3557' }}
//             >
//               {name}
//             </h3>
//             <p 
//               className="text-sm font-medium flex items-center gap-1"
//               style={{ color: '#457B9D' }}
//             >
//               <span>@{username}</span>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Bio Section */}
//       <div className="px-6 pb-4">
//         <p 
//           className="text-sm line-clamp-2 leading-relaxed"
//           style={{ color: '#5A5A5A' }}
//         >
//           {bio}
//         </p>
//       </div>

//       {/* Footer with Stats and CTA */}
//       <div 
//         className="px-6 py-4 flex items-center justify-between"
//         style={{ background: '#F1FAEE', borderTop: '1px solid rgba(69, 123, 157, 0.1)' }}
//       >
//         {/* Subscriber Count */}
//         {subscriberCount !== undefined && (
//           <div className="flex items-center gap-2">
//             <div 
//               className="p-1.5 rounded-lg"
//               style={{ background: 'white' }}
//             >
//               <Users className="w-4 h-4" style={{ color: '#457B9D' }} />
//             </div>
//             <div>
//               <p 
//                 className="text-xs font-medium"
//                 style={{ color: '#5A5A5A' }}
//               >
//                 Subscribers
//               </p>
//               <p 
//                 className="text-sm font-bold"
//                 style={{ color: '#1D3557' }}
//               >
//                 {subscriberCount.toLocaleString()}
//               </p>
//             </div>
//           </div>
//         )}

//         {/* View Profile Button */}
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//             navigate(`/creator/${username}`);
//           }}
//           className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all duration-150 hover:scale-105"
//           style={{ 
//             background: '#1D3557',
//             color: 'white'
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.background = '#457B9D';
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.background = '#1D3557';
//           }}
//         >
//           <span className="text-sm">View</span>
//           <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//         </button>
//       </div>

//       {/* Hover Effect Overlay */}
//       <div 
//         className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
//         style={{ 
//           background: 'linear-gradient(135deg, rgba(69, 123, 157, 0.03), rgba(230, 57, 70, 0.03))'
//         }}
//       ></div>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
//       `}</style>
//     </div>
//   );
// };


// import { Users, ArrowRight, Heart, TrendingUp, Check, Star, DollarSign } from "lucide-react";
// import { useState } from "react";

// interface CreatorCardProps {
//   id: string;
//   name: string;
//   username: string;
//   bio: string;
//   subscriberCount?: number;
//   profilePic?: string;
//   isVerified?: boolean;
//   monthlyEarnings?: number;
//   category?: string;
// }

// export const CreatorCard = ({ 
//   id, 
//   name, 
//   username, 
//   bio, 
//   subscriberCount = 0, 
//   profilePic,
//   isVerified = false,
//   monthlyEarnings = 0,
//   category = "Creator"
// }: CreatorCardProps) => {
//   const [isLiked, setIsLiked] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   const handleNavigate = () => {
//     alert(`Navigating to creator profile: /creator/${username}`);
//   };

//   const handleLike = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     setIsLiked(!isLiked);
//   };

//   return (
//     <div 
//       className="group cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white border border-slate-100 relative"
//       onClick={handleNavigate}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Header Background Gradient */}
//       <div className="h-28 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 relative overflow-hidden">
//         <div className="absolute inset-0 bg-black/10"></div>
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        
//         {/* Like Button */}
//         <button
//           onClick={handleLike}
//           className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10"
//         >
//           <Heart 
//             className={`w-5 h-5 transition-all ${isLiked ? 'fill-red-500 text-red-500' : 'text-slate-600'}`}
//           />
//         </button>

//         {/* Category Badge */}
//         {category && (
//           <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-700 shadow-md">
//             {category}
//           </div>
//         )}
//       </div>

//       {/* Profile Picture - Overlapping Header */}
//       <div className="px-6 -mt-10 relative z-10">
//         <div className="relative inline-block">
//           {!profilePic ? (
//             <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center shadow-xl border-4 border-white">
//               <Users className="w-10 h-10 text-slate-500" />
//             </div>
//           ) : (
//             <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl border-4 border-white group-hover:scale-105 transition-transform">
//               <img src={profilePic} alt={name} className="w-full h-full object-cover" />
//             </div>
//           )}
          
//           {/* Online/Verified Badge */}
//           {isVerified ? (
//             <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center border-3 border-white shadow-md">
//               <Check className="w-4 h-4 text-white" strokeWidth={3} />
//             </div>
//           ) : (
//             <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-3 border-white shadow-md"></div>
//           )}
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="px-6 pt-3 pb-5">
//         {/* Name and Username */}
//         <div className="mb-3">
//           <div className="flex items-center gap-2 mb-1">
//             <h3 className="text-xl font-bold text-slate-900 truncate group-hover:text-blue-600 transition-colors">
//               {name}
//             </h3>
//             {isVerified && (
//               <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
//                 <Check className="w-3 h-3 text-white" strokeWidth={3} />
//               </div>
//             )}
//           </div>
//           <p className="text-sm font-medium text-slate-500">
//             @{username}
//           </p>
//         </div>

//         {/* Bio */}
//         <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
//           {bio}
//         </p>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-2 gap-3 mb-4">
//           <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
//             <div className="flex items-center gap-2 mb-1">
//               <Users className="w-4 h-4 text-blue-600" />
//               <span className="text-xs font-medium text-slate-500">Supporters</span>
//             </div>
//             <p className="text-lg font-bold text-slate-900">
//               {subscriberCount >= 1000 
//                 ? `${(subscriberCount / 1000).toFixed(1)}K` 
//                 : subscriberCount.toLocaleString()}
//             </p>
//           </div>

//           <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
//             <div className="flex items-center gap-2 mb-1">
//               <TrendingUp className="w-4 h-4 text-green-600" />
//               <span className="text-xs font-medium text-slate-500">Monthly</span>
//             </div>
//             <p className="text-lg font-bold text-slate-900">
//               ${monthlyEarnings >= 1000 
//                 ? `${(monthlyEarnings / 1000).toFixed(1)}K` 
//                 : monthlyEarnings.toLocaleString()}
//             </p>
//           </div>
//         </div>

//         {/* Support Tiers Preview */}
//         <div className="flex items-center gap-1 mb-4">
//           <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
//           <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
//           <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
//           <span className="text-xs text-slate-500 ml-1">4.8 rating</span>
//         </div>

//         {/* CTA Button */}
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//             handleNavigate();
//           }}
//           className={`w-full py-3 rounded-xl font-semibold shadow-md transition-all duration-300 flex items-center justify-center gap-2 ${
//             isHovered 
//               ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-105 shadow-lg' 
//               : 'bg-slate-900 text-white'
//           }`}
//         >
//           <span>View Profile</span>
//           <ArrowRight className={`w-4 h-4 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
//         </button>
//       </div>

//       {/* Hover Overlay Effect */}
//       <div 
//         className={`absolute inset-0 rounded-2xl transition-opacity pointer-events-none ${
//           isHovered ? 'opacity-100' : 'opacity-0'
//         }`}
//         style={{ 
//           background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(168, 85, 247, 0.05))'
//         }}
//       ></div>

//       {/* Premium Badge (Optional) */}
//       {monthlyEarnings > 5000 && (
//         <div className="absolute top-32 right-3 px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg shadow-lg">
//           <div className="flex items-center gap-1">
//             <Star className="w-3 h-3 text-white fill-white" />
//             <span className="text-xs font-bold text-white">PRO</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Demo Component with multiple cards
// export default function CreatorCardDemo() {
//   const sampleCreators = [
//     {
//       id: "1",
//       name: "Sarah Johnson",
//       username: "artpro_sarah",
//       bio: "Digital artist creating stunning fantasy illustrations and character designs. Join me on my creative journey! 🎨",
//       subscriberCount: 2456,
//       profilePic: "",
//       isVerified: true,
//       monthlyEarnings: 8500,
//       category: "Art & Design"
//     },
//     {
//       id: "2",
//       name: "Mike Chen",
//       username: "techguru_mike",
//       bio: "Full-stack developer sharing coding tutorials, tech reviews, and programming tips for beginners and professionals.",
//       subscriberCount: 1892,
//       profilePic: "",
//       isVerified: false,
//       monthlyEarnings: 3200,
//       category: "Technology"
//     },
//     {
//       id: "3",
//       name: "Emma Thompson",
//       username: "writer_emma",
//       bio: "Award-winning fantasy author. Get exclusive access to early chapters, behind-the-scenes content, and more! 📚",
//       subscriberCount: 5123,
//       profilePic: "",
//       isVerified: true,
//       monthlyEarnings: 12000,
//       category: "Writing"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-slate-900 mb-2">Featured Creators</h1>
//           <p className="text-lg text-slate-600">Support talented creators and get exclusive content</p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {sampleCreators.map((creator) => (
//             <CreatorCard key={creator.id} {...creator} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./Postcardprofile";
import { Users, Flame, User } from "lucide-react";

interface CreatorCardProps {
  id: string;
  name: string;
  username: string;
  bio: string;
  subscriberCount?: number;
  profilePic?: string;
}

export const CreatorCard = ({ id, name, username, bio, subscriberCount, profilePic }: CreatorCardProps) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/creator/${username}`)}
      className="group bg-neutral-900 rounded-xl border border-gray-800 overflow-hidden hover:border-orange-500/50 transition-all duration-300 cursor-pointer"
    >
      {/* Header Background with Gradient */}
      <div className="h-40 bg-gradient-to-br from-orange-500/20 via-orange-600/10 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(251,146,60,0.1),transparent)]"></div>
        <div className="absolute top-3 right-3">
          <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-orange-400 text-xs font-medium">
            <Flame className="w-3 h-3" />
            Popular
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 -mt-10 relative">
        {/* Profile Picture */}
        <div className="w-20 h-20 rounded-full bg-neutral-800 border-4 border-neutral-900 shadow-xl overflow-hidden mb-4">
          {!profilePic ? (
            <div className="w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white">
              <User className="w-10 h-10" />
            </div>
          ) : (
            <ProfileCard user={{ profilePic,medium:true}} />
          )}
        </div>

        {/* Name and Username */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-white mb-1 truncate group-hover:text-orange-400 transition-colors">
            {name}
          </h3>
          <p className="text-sm text-gray-500 truncate">@{username}</p>
        </div>

        {/* Bio */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 min-h-[40px] leading-relaxed">
          {bio}
        </p>

        {/* Subscriber Count and Button */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
          {subscriberCount !== undefined && (
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <Users className="w-4 h-4" />
              <span className="text-gray-400">{subscriberCount.toLocaleString()} subscribers</span>
            </div>
          )}
          {subscriberCount === undefined && (
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <Users className="w-4 h-4" />
              <span className="text-gray-400">0 subscribers</span>
            </div>
          )}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/creator/${username}`);
            }}
            className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-all text-sm hover:scale-105"
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};