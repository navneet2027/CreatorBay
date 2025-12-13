// original 
// import { useEffect, useState } from "react";
// import { Navbar } from "@/components/Navbar";
// import { CreatorCard } from "@/components/CreatorCard";
// import { useNavigate } from "react-router-dom";
// import { Input } from "@/components/ui/input";
// import { Search } from "lucide-react";
// import axios from "axios";

// const Explore = () => {
//   const navigate = useNavigate();
  
//   const [creators, setCreators] = useState<any[]>([]);
//   const userName = localStorage.getItem("Name") || "User";
//           const [isloading, setIsloading] = useState(false);
//  const [searchQuery, setSearchQuery] = useState("");
 

//   const filteredCreators = creators.filter((creator) =>
//     creator.username.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter" && filteredCreators.length > 0) {
//       navigate(`/creator/${filteredCreators[0].username}`);
//     }
//   };


//   useEffect(() => {
//     // Check if user is logged in
//     const token = localStorage.getItem("userToken");
//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     // TODO: Fetch creators from backend
//     // Example: fetch('/api/creators').then(res => res.json()).then(data => setCreators(data));
//    setIsloading(true)
//     const fetchData = async () =>{
//       try{
//   const creatorgetall = await axios.get('http://localhost:5000/api/auth/getall')

//       setCreators(prev => {
//         if (JSON.stringify(prev) === JSON.stringify(creatorgetall.data)) return prev;
//         return creatorgetall.data;
//       })
//       }catch{

//       }finally{
//            setIsloading(false)
//       }
    
//     }
//     fetchData()
   
//     // Auto-refresh creators list every 5 seconds
//     const interval = setInterval(fetchData
//       // TODO: Re-fetch creators from backend
//      , 5000);

//     return () => clearInterval(interval);
//   }, [navigate]);

//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar userType="user" userName={userName} />
      
//       <div className="container mx-auto px-4 py-8">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-foreground mb-2">Explore Creators</h1>
//           <p className="text-muted-foreground">
//             Discover amazing creators and support their work
//           </p>
//         </div>
//         {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {creators.map((creator) => (
//             <CreatorCard key={creator.id} {...creator} />
//           ))} */}
//            <div className="mb-6 max-w-full ">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
//             <Input
//               type="text"
//               placeholder="Search creators by username..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               onKeyPress={handleSearchKeyPress}
//               className="pl-10 border border-gray-400 rounded-xl shadow-sm focus:border-gray-500"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredCreators.map((creator) => (
//             <CreatorCard key={creator.id} {...creator} />
//           ))}
//           {filteredCreators.length === 0 && (
//             <p className="text-muted-foreground col-span-full text-center py-8">
//               No creators found matching "{searchQuery}"
//             </p>
//           )}
//         </div>
//       </div>
//       {isloading && (
//   <div 
//     className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
//   >
//     <div className="bg-white rounded-xl p-8 shadow-xl w-80 text-center">
//       <div className="loader mx-auto mb-4"></div>
//       <h2 className="text-lg font-semibold">loading…</h2>
//       <p className="text-muted-foreground text-sm mt-2">
//         Please wait, Fetching creators....
//       </p>
//     </div>
//   </div>
// )}
//     </div>
    
//   );
// };

// export default Explore;


//claude
// import { useEffect, useState } from "react";
// import { Navbar } from "@/components/Navbar";
// import { CreatorCard } from "@/components/CreatorCard";
// import { useNavigate } from "react-router-dom";
// import { Input } from "@/components/ui/input";
// import { Search, TrendingUp, Star, Users, Sparkles, Filter, Grid3x3, List } from "lucide-react";
// import axios from "axios";

// const Explore = () => {
//   const navigate = useNavigate();
  
//   const [creators, setCreators] = useState<any[]>([]);
//   const userName = localStorage.getItem("Name") || "User";
//   const [isloading, setIsloading] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

//   const filteredCreators = creators.filter((creator) =>
//     creator.username.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter" && filteredCreators.length > 0) {
//       navigate(`/creator/${filteredCreators[0].username}`);
//     }
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("userToken");
//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     setIsloading(true);
//     const fetchData = async () => {
//       try {
//         const creatorgetall = await axios.get('http://localhost:5000/api/auth/getall');
//         setCreators(prev => {
//           if (JSON.stringify(prev) === JSON.stringify(creatorgetall.data)) return prev;
//           return creatorgetall.data;
//         });
//       } catch {
//       } finally {
//         setIsloading(false);
//       }
//     };
//     fetchData();

//     const interval = setInterval(fetchData, 5000);
//     return () => clearInterval(interval);
//   }, [navigate]);

//   return (
//     <div className="min-h-screen bg-[#0a0a0f]">
//       <Navbar userType="user" userName={userName} />
      
//       {/* Animated Background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob" />
//         <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
//         <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
//       </div>

//       <div className="relative">
//         {/* Hero Section */}
//         <div className="container mx-auto px-4 pt-24 pb-16">
//           <div className="max-w-5xl mx-auto">
//             {/* Heading */}
//             <div className="text-center mb-12 space-y-6">
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 border border-white/10 backdrop-blur-xl mb-4">
//                 <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
//                 <span className="text-sm font-medium text-gray-300">Explore thousands of creators</span>
//               </div>
              
//               <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6">
//                 <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-gradient">
//                   Discover
//                 </span>
//                 <br />
//                 <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
//                   Amazing Talent
//                 </span>
//               </h1>
              
//               <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
//                 Support your favorite creators and become part of exclusive communities
//               </p>
//             </div>

//             {/* Search Bar */}
//             <div className="max-w-3xl mx-auto mb-12">
//               <div className="relative group">
//                 <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
//                 <div className="relative flex items-center">
//                   <div className="absolute left-6 pointer-events-none">
//                     <Search className="w-6 h-6 text-gray-400" />
//                   </div>
//                   <Input
//                     type="text"
//                     placeholder="Search creators..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     onKeyPress={handleSearchKeyPress}
//                     className="w-full h-16 pl-16 pr-6 text-lg bg-[#1a1a24] border-2 border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
//               <div className="relative group">
//                 <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
//                 <div className="relative bg-[#1a1a24] rounded-xl p-6 border border-white/10">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <div className="text-3xl font-bold text-white mb-1">{creators.length}</div>
//                       <div className="text-sm text-gray-400">Active Creators</div>
//                     </div>
//                     <div className="p-3 bg-purple-500/20 rounded-lg">
//                       <Users className="w-6 h-6 text-purple-400" />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="relative group">
//                 <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-orange-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
//                 <div className="relative bg-[#1a1a24] rounded-xl p-6 border border-white/10">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <div className="text-3xl font-bold text-white mb-1">Live</div>
//                       <div className="text-sm text-gray-400">Trending Now</div>
//                     </div>
//                     <div className="p-3 bg-pink-500/20 rounded-lg">
//                       <TrendingUp className="w-6 h-6 text-pink-400" />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="relative group">
//                 <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
//                 <div className="relative bg-[#1a1a24] rounded-xl p-6 border border-white/10">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <div className="text-3xl font-bold text-white mb-1">Top</div>
//                       <div className="text-sm text-gray-400">Rated Content</div>
//                     </div>
//                     <div className="p-3 bg-blue-500/20 rounded-lg">
//                       <Star className="w-6 h-6 text-blue-400" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Creators Section */}
//         <div className="container mx-auto px-4 pb-20">
//           <div className="max-w-7xl mx-auto">
//             {/* Controls */}
//             <div className="flex items-center justify-between mb-8">
//               <div>
//                 <h2 className="text-2xl font-bold text-white mb-1">
//                   {searchQuery ? `Results for "${searchQuery}"` : 'All Creators'}
//                 </h2>
//                 <p className="text-gray-400">
//                   {filteredCreators.length} {filteredCreators.length === 1 ? 'creator' : 'creators'} available
//                 </p>
//               </div>

//               <div className="flex items-center gap-3">
//                 <button className="px-4 py-2 bg-[#1a1a24] border border-white/10 rounded-lg text-gray-400 hover:text-white hover:border-purple-500/50 transition-all duration-300 flex items-center gap-2">
//                   <Filter className="w-4 h-4" />
//                   Filter
//                 </button>
                
//                 <div className="flex items-center gap-1 bg-[#1a1a24] border border-white/10 rounded-lg p-1">
//                   <button
//                     onClick={() => setViewMode('grid')}
//                     className={`p-2 rounded transition-all duration-300 ${
//                       viewMode === 'grid'
//                         ? 'bg-purple-500 text-white'
//                         : 'text-gray-400 hover:text-white'
//                     }`}
//                   >
//                     <Grid3x3 className="w-4 h-4" />
//                   </button>
//                   <button
//                     onClick={() => setViewMode('list')}
//                     className={`p-2 rounded transition-all duration-300 ${
//                       viewMode === 'list'
//                         ? 'bg-purple-500 text-white'
//                         : 'text-gray-400 hover:text-white'
//                     }`}
//                   >
//                     <List className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Creators Grid */}
//             {filteredCreators.length > 0 ? (
//               <div className={`grid gap-6 ${
//                 viewMode === 'grid'
//                   ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
//                   : 'grid-cols-1'
//               }`}>
//                 {filteredCreators.map((creator, index) => (
//                   <div
//                     key={creator.id}
//                     className="animate-fadeInUp"
//                     style={{ animationDelay: `${index * 50}ms` }}
//                   >
//                     <CreatorCard {...creator} />
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-20">
//                 <div className="relative inline-flex mb-6">
//                   <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-30" />
//                   <div className="relative w-24 h-24 bg-[#1a1a24] rounded-full flex items-center justify-center border border-white/10">
//                     <Search className="w-12 h-12 text-gray-600" />
//                   </div>
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-2">No creators found</h3>
//                 <p className="text-gray-400 mb-8">
//                   Try adjusting your search for "<span className="text-purple-400 font-medium">{searchQuery}</span>"
//                 </p>
//                 <button
//                   onClick={() => setSearchQuery("")}
//                   className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-105"
//                 >
//                   Clear Search
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Loading Modal */}
//       {isloading && (
//         <div className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50">
//           <div className="relative">
//             <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-2xl opacity-50 animate-pulse" />
//             <div className="relative bg-[#1a1a24] rounded-2xl p-10 border border-white/10 text-center min-w-[400px]">
//               <div className="relative w-20 h-20 mx-auto mb-6">
//                 <div className="absolute inset-0 border-4 border-purple-500/30 rounded-full" />
//                 <div className="absolute inset-0 border-4 border-transparent border-t-purple-500 rounded-full animate-spin" />
//                 <Sparkles className="absolute inset-0 m-auto w-8 h-8 text-purple-400 animate-pulse" />
//               </div>
//               <h2 className="text-2xl font-bold text-white mb-2">Loading Creators</h2>
//               <p className="text-gray-400 mb-6">
//                 Discovering amazing talent...
//               </p>
//               <div className="h-2 bg-white/5 rounded-full overflow-hidden">
//                 <div className="h-full w-2/3 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full animate-shimmer" />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <style>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes blob {
//           0%, 100% {
//             transform: translate(0, 0) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//         }

//         @keyframes gradient {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }

//         @keyframes shimmer {
//           from {
//             transform: translateX(-100%);
//           }
//           to {
//             transform: translateX(200%);
//           }
//         }

//         .animate-fadeInUp {
//           animation: fadeInUp 0.6s ease-out forwards;
//         }

//         .animate-blob {
//           animation: blob 7s infinite;
//         }

//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }

//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }

//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }

//         .animate-shimmer {
//           animation: shimmer 2s infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Explore;


// import { useEffect, useState } from "react";
// import { Navbar } from "@/components/Navbar";
// import { CreatorCard } from "@/components/CreatorCard";
// import { useNavigate } from "react-router-dom";
// import { Input } from "@/components/ui/input";
// import { Search, TrendingUp, Sparkles, Filter } from "lucide-react";
// import axios from "axios";

// const Explore = () => {
//   const navigate = useNavigate();
  
//   const [creators, setCreators] = useState<any[]>([]);
//   const userName = localStorage.getItem("Name") || "User";
//   const [isloading, setIsloading] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [animate, setAnimate] = useState(false);

//   const filteredCreators = creators.filter((creator) =>
//     creator.username.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter" && filteredCreators.length > 0) {
//       navigate(`/creator/${filteredCreators[0].username}`);
//     }
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("userToken");
//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     setIsloading(true);
//     const fetchData = async () => {
//       try {
//         const creatorgetall = await axios.get('http://localhost:5000/api/auth/getall');
//         setCreators(prev => {
//           if (JSON.stringify(prev) === JSON.stringify(creatorgetall.data)) return prev;
//           return creatorgetall.data;
//         });
//       } catch {
//       } finally {
//         setIsloading(false);
//       }
//     };
    
//     fetchData();
//     const interval = setInterval(fetchData, 5000);
//     setTimeout(() => setAnimate(true), 100);

//     return () => clearInterval(interval);
//   }, [navigate]);

//   return (
//     <div className="min-h-screen" style={{ 
//       background: 'linear-gradient(135deg, #F1FAEE 0%, #E8F4F8 100%)',
//       fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
//     }}>
//       <Navbar userType="user" userName={userName} />
      
//       <div className="container mx-auto px-4 py-8 md:py-12">
//         {/* Hero Section */}
//         <div className={`mb-10 transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//           <div className="relative">
//             <div className="absolute -top-6 -left-4 w-32 h-32 rounded-full opacity-20 blur-3xl" 
//                  style={{ background: '#457B9D' }}></div>
//             <div className="absolute -bottom-4 -right-4 w-40 h-40 rounded-full opacity-15 blur-3xl" 
//                  style={{ background: '#E63946' }}></div>
            
//             <div className="relative">
//               <div className="flex items-center gap-3 mb-3">
//                 <div className="p-2 rounded-2xl shadow-md" style={{ background: '#1D3557' }}>
//                   <Sparkles className="w-6 h-6 text-white" />
//                 </div>
//                 <h1 className="text-4xl md:text-5xl font-semibold" style={{ color: '#1C1C1C' }}>
//                   Explore Creators
//                 </h1>
//               </div>
//               <p className="text-lg md:text-xl font-medium ml-14" style={{ color: '#5A5A5A' }}>
//                 Discover talented creators and support their amazing work
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className={`mb-10 transition-all duration-700 delay-150 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//           <div className="max-w-3xl mx-auto">
//             <div className="relative group">
//               <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" 
//                    style={{ background: 'linear-gradient(135deg, #457B9D, #E63946)' }}></div>
//               <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
//                 <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5" 
//                         style={{ color: '#5A5A5A' }} />
//                 <Input
//                   type="text"
//                   placeholder="Search creators by username..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   onKeyPress={handleSearchKeyPress}
//                   className="pl-14 pr-5 py-7 text-lg border-0 rounded-2xl focus:ring-2 transition-all"
//                   style={{ color: '#1C1C1C', caretColor: '#E63946' }}
//                 />
//                 <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
//                   <div className="px-3 py-1.5 rounded-xl text-xs font-medium" 
//                        style={{ background: '#F1FAEE', color: '#5A5A5A' }}>
//                     {filteredCreators.length} found
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Stats Bar */}
//         <div className={`mb-8 transition-all duration-700 delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//           <div className="flex flex-wrap gap-4 justify-center md:justify-start">
//             <div className="px-6 py-3 rounded-2xl shadow-md flex items-center gap-3 hover:scale-105 transition-transform duration-150"
//                  style={{ background: 'white' }}>
//               <TrendingUp className="w-5 h-5" style={{ color: '#E63946' }} />
//               <span className="font-semibold" style={{ color: '#1C1C1C' }}>
//                 {creators.length} Active Creators
//               </span>
//             </div>
//             <div className="px-6 py-3 rounded-2xl shadow-md flex items-center gap-3 hover:scale-105 transition-transform duration-150"
//                  style={{ background: '#1D3557' }}>
//               <Filter className="w-5 h-5 text-white" />
//               <span className="font-semibold text-white">All Categories</span>
//             </div>
//           </div>
//         </div>

//         {/* Creators Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredCreators.map((creator, index) => (
//             <div 
//               key={creator.id}
//               className="transition-all duration-700"
//               style={{
//                 opacity: animate ? 1 : 0,
//                 transform: animate ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
//                 transitionDelay: `${400 + index * 100}ms`
//               }}
//             >
//               <div className="h-full hover:scale-105 transition-transform duration-150">
//                 <CreatorCard {...creator} />
//               </div>
//             </div>
//           ))}
          
//           {filteredCreators.length === 0 && !isloading && (
//             <div className="col-span-full text-center py-16">
//               <div className="max-w-md mx-auto">
//                 <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg"
//                      style={{ background: 'linear-gradient(135deg, #457B9D, #1D3557)' }}>
//                   <Search className="w-10 h-10 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-semibold mb-2" style={{ color: '#1C1C1C' }}>
//                   No creators found
//                 </h3>
//                 <p className="text-lg" style={{ color: '#5A5A5A' }}>
//                   Try searching for "{searchQuery}" with a different spelling
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Loading Modal */}
//       {isloading && (
//         <div className="fixed inset-0 flex items-center justify-center z-50"
//              style={{ background: 'rgba(29, 53, 87, 0.6)', backdropFilter: 'blur(8px)' }}>
//           <div className="bg-white rounded-3xl p-10 shadow-2xl w-96 text-center transform scale-100 animate-scale-in">
//             <div className="relative w-16 h-16 mx-auto mb-6">
//               <div className="absolute inset-0 rounded-full animate-spin"
//                    style={{ border: '4px solid #F1FAEE', borderTopColor: '#E63946' }}></div>
//             </div>
//             <h2 className="text-2xl font-semibold mb-3" style={{ color: '#1C1C1C' }}>
//               Loading Creators
//             </h2>
//             <p className="text-base font-medium" style={{ color: '#5A5A5A' }}>
//               Discovering amazing talent for you...
//             </p>
//           </div>
//         </div>
//       )}

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
//         @keyframes scale-in {
//           from { transform: scale(0.9); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }
        
//         .animate-scale-in {
//           animation: scale-in 0.3s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Explore;




import { useEffect, useState } from "react";
import Footer from "@/components/footer";

import { Navbar } from "@/components/Navbar";
import { CreatorCard } from "@/components/CreatorCard";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Search, Flame, Star, TrendingUp, Users } from "lucide-react";
import axios from "axios";

const Explore = () => {
  const navigate = useNavigate();
  
  const [creators, setCreators] = useState<any[]>([]);
  const userName = localStorage.getItem("Name") || "User";
  const [isloading, setIsloading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const role = localStorage.getItem("role");
  let [len,setlen] =useState(0) ;
  const filteredCreators = creators.filter((creator) =>
    creator.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && filteredCreators.length > 0) {
      navigate(`/creator/${filteredCreators[0].username}`);
    }
  };

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("userToken");
    if (!token) {
      navigate("/login");
      return;
    }
    const creatorUserName = localStorage.getItem("userName");


    setIsloading(true);
    const fetchData = async () => {
      try {
        const creatorgetall = await axios.get('https://creatorbay.onrender.com/api/auth/getall');
        console.log(creatorgetall.data)
        const po = [];
        setlen(creatorgetall.data.length)
        creatorgetall.data.forEach(element => {
          if (element.username === creatorUserName){
          
            return
          }  ;
          
          po.push(element)

          
        });
      
        console.log(po)
        setCreators(prev => {
          if (JSON.stringify(prev) === JSON.stringify(po)) return prev;
          return po;
        });
      } catch {
        // Handle error silently
      } finally {
        setIsloading(false);
      }
    };
    
    fetchData();
   
    // Auto-refresh creators list every 5 seconds
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-black">
      <Navbar userType={role} userName={userName} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section with Boosty-style design */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-orange-400" />
            Discover Amazing Creators
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Explore <span className="text-orange-500">Creators</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Discover amazing creators and support their work
          </p>
        </div>

        {/* Search Bar with Boosty styling */}
        <div className="mb-6 max-w-full">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search creators by username..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleSearchKeyPress}
              className="pl-10 pr-4 py-6 bg-neutral-900 border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-500 shadow-none"
            />
          </div>
        </div>

        {/* Stats Bar - Boosty style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-neutral-900 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="text-3xl font-bold text-orange-500 mb-1">{len }</div>
            <div className="text-gray-400 text-sm">Active Creators</div>
          </div>
          <div className="bg-neutral-900 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="text-3xl font-bold text-orange-500 mb-1">
              {creators.reduce((acc, c) => acc + (c.subscribers || 0), 0)}
            </div>
            <div className="text-gray-400 text-sm">Total Subscribers</div>
          </div>
          <div className="bg-neutral-900 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="text-3xl font-bold text-orange-500 mb-1 flex items-center gap-2">
              <TrendingUp className="w-7 h-7" />
              <span>{Math.floor(creators.length * 0.3)}</span>
            </div>
            <div className="text-gray-400 text-sm">Trending Today</div>
          </div>
        </div>

        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-1 h-8 bg-orange-500 rounded-full"></span>
            All Creators
          </h2>
        </div>

        {/* Creators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCreators.map((creator) => (
          
            <CreatorCard key={creator.id} {...creator} />
          ))}
          {filteredCreators.length === 0 && !isloading && (
            <div className="col-span-full text-center py-16">
              <div className="w-20 h-20 bg-neutral-900 border border-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No creators found</h3>
              <p className="text-gray-400">
                No creators found matching "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </div>
  <Footer></Footer>
      {/* Loading Modal - Boosty style */}
      {isloading && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-neutral-900 border border-gray-800 rounded-xl p-8 shadow-2xl w-80 text-center">
            <div className="w-16 h-16 border-4 border-gray-800 border-t-orange-500 rounded-full animate-spin mx-auto mb-4"></div>
            <h2 className="text-lg font-semibold text-white mb-2">Loading...</h2>
            <p className="text-gray-400 text-sm">
              Please wait, Fetching creators....
            </p>
          </div>
        </div>
      )}
    
    </div>
    
  );
};

export default Explore;