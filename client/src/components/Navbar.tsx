// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";

// interface NavbarProps {
//   userType?: "user" | "creator";
//   userName?: string;
// }

// export const Navbar = ({ userType, userName }: NavbarProps) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // TODO: Call logout API
//     localStorage.removeItem("userToken");
//     localStorage.removeItem("userName");
//     localStorage.removeItem("Name");
//     navigate(userType === "creator" ? "/creator/login" : "/login");
//   };

//   return (
//     <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
//       <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <h1 
//             className="text-xl font-bold text-primary cursor-pointer"
//             onClick={() => navigate(userType === "creator" ? "/creator/dashboard" : "/explore")}
//           >
//             CreatorBay
            
//           </h1>
//         </div>
        
//         <div className="flex items-center gap-3">
//           {userName && (
//             <>
//               <span className="text-sm text-foreground hidden sm:inline">
//                 Welcome, {userName}
//               </span>
//               {userType === "user" && (
//                  <>
//                   <Button 
//                     variant="outline" 
//                     size="sm"
//                     onClick={() => navigate("/subscriptions")}
//                   >
//                     Subscriptions
//                   </Button>
//                   <Button 
//                     variant="outline" 
//                     size="sm"
//                     onClick={() => navigate("/profile")}
//                   >
//                     My Profile
//                   </Button>
//                 </>
//               )}
//               {userType === "creator" && (
//                 <Button 
//                   variant="outline" 
//                   size="sm"
//                   onClick={() => navigate("/creator/settings")}
//                 >
//                   Settings
//                 </Button>
//               )}
//               <Button 
//                 variant="outline" 
//                 size="sm"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </Button>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };


//claude
// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";
// import { LogOut, Settings, User, Heart, Sparkles, Menu, X } from "lucide-react";
// import { useState } from "react";

// interface NavbarProps {
//   userType?: "user" | "creator";
//   userName?: string;
// }

// export const Navbar = ({ userType, userName }: NavbarProps) => {
//   const navigate = useNavigate();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem("userToken");
//     localStorage.removeItem("userName");
//     localStorage.removeItem("Name");
//     navigate(userType === "creator" ? "/creator/login" : "/login");
//     setMobileMenuOpen(false);
//   };

//   return (
//     <>
//       <nav className="bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 pointer-events-none" />
        
//         <div className="container mx-auto px-4 py-4 relative">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <div 
//               className="flex items-center gap-3 cursor-pointer group"
//               onClick={() => navigate(userType === "creator" ? "/creator/dashboard" : "/explore")}
//             >
//               <div className="relative">
//                 <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity" />
//                 <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg">
//                   <Sparkles className="w-5 h-5 text-white" />
//                 </div>
//               </div>
//               <div>
//                 <h1 className="text-2xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
//                   CreatorBay
//                 </h1>
//               </div>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center gap-3">
//               {userName && (
//                 <>
//                   <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
//                     <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
//                       <User className="w-4 h-4 text-white" />
//                     </div>
//                     <span className="text-sm font-medium text-white">
//                       {userName}
//                     </span>
//                   </div>

//                   {userType === "user" && (
//                     <>
//                       <button
//                         onClick={() => navigate("/subscriptions")}
//                         className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 flex items-center gap-2"
//                       >
//                         <Heart className="w-4 h-4" />
//                         Subscriptions
//                       </button>
//                       <button
//                         onClick={() => navigate("/profile")}
//                         className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 flex items-center gap-2"
//                       >
//                         <User className="w-4 h-4" />
//                         My Profile
//                       </button>
//                     </>
//                   )}

//                   {userType === "creator" && (
//                     <button
//                       onClick={() => navigate("/creator/settings")}
//                       className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 flex items-center gap-2"
//                     >
//                       <Settings className="w-4 h-4" />
//                       Settings
//                     </button>
//                   )}

//                   <button
//                     onClick={handleLogout}
//                     className="px-4 py-2 bg-gradient-to-r from-red-600/20 to-pink-600/20 border border-red-500/30 rounded-lg text-sm font-medium text-red-400 hover:from-red-600/30 hover:to-pink-600/30 hover:border-red-500/50 transition-all duration-300 flex items-center gap-2"
//                   >
//                     <LogOut className="w-4 h-4" />
//                     Logout
//                   </button>
//                 </>
//               )}
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="md:hidden p-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
//             >
//               {mobileMenuOpen ? (
//                 <X className="w-5 h-5" />
//               ) : (
//                 <Menu className="w-5 h-5" />
//               )}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-xl animate-fadeIn">
//           <div className="bg-[#0a0a0f] border-b border-white/10 h-full overflow-y-auto">
//             <div className="container mx-auto px-4 py-6 space-y-4">
//               {userName && (
//                 <>
//                   <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
//                     <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
//                       <User className="w-6 h-6 text-white" />
//                     </div>
//                     <div>
//                       <div className="text-xs text-gray-400 mb-1">Logged in as</div>
//                       <div className="text-base font-semibold text-white">{userName}</div>
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     {userType === "user" && (
//                       <>
//                         <button
//                           onClick={() => {
//                             navigate("/subscriptions");
//                             setMobileMenuOpen(false);
//                           }}
//                           className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 flex items-center gap-3"
//                         >
//                           <Heart className="w-5 h-5" />
//                           Subscriptions
//                         </button>
//                         <button
//                           onClick={() => {
//                             navigate("/profile");
//                             setMobileMenuOpen(false);
//                           }}
//                           className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 flex items-center gap-3"
//                         >
//                           <User className="w-5 h-5" />
//                           My Profile
//                         </button>
//                       </>
//                     )}

//                     {userType === "creator" && (
//                       <button
//                         onClick={() => {
//                           navigate("/creator/settings");
//                           setMobileMenuOpen(false);
//                         }}
//                         className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 flex items-center gap-3"
//                       >
//                         <Settings className="w-5 h-5" />
//                         Settings
//                       </button>
//                     )}

//                     <button
//                       onClick={handleLogout}
//                       className="w-full px-4 py-3 bg-gradient-to-r from-red-600/20 to-pink-600/20 border border-red-500/30 rounded-xl text-sm font-medium text-red-400 hover:from-red-600/30 hover:to-pink-600/30 hover:border-red-500/50 transition-all duration-300 flex items-center gap-3"
//                     >
//                       <LogOut className="w-5 h-5" />
//                       Logout
//                     </button>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       <style>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         .animate-fadeIn {
//           animation: fadeIn 0.2s ease-out;
//         }
//       `}</style>
//     </>
//   );
// };



// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";
// import { LogOut, Settings, User, Heart, Sparkles } from "lucide-react";

// interface NavbarProps {
//   userType?: "user" | "creator";
//   userName?: string;
// }

// export const Navbar = ({ userType, userName }: NavbarProps) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("userToken");
//     localStorage.removeItem("userName");
//     localStorage.removeItem("Name");
//     navigate(userType === "creator" ? "/creator/login" : "/login");
//   };

//   return (
//     <nav className="sticky top-0 z-50 backdrop-blur-md" 
//          style={{ 
//            background: 'rgba(241, 250, 238, 0.95)',
//            borderBottom: '2px solid rgba(69, 123, 157, 0.15)',
//            boxShadow: '0 4px 20px rgba(29, 53, 87, 0.08)',
//            fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
//          }}>
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo Section */}
//           <div 
//             className="flex items-center gap-3 cursor-pointer group"
//             onClick={() => navigate(userType === "creator" ? "/creator/dashboard" : "/explore")}
//           >
//             <div className="relative">
//               <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"
//                    style={{ background: 'linear-gradient(135deg, #457B9D, #E63946)' }}></div>
//               <div className="relative p-2.5 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
//                    style={{ background: 'linear-gradient(135deg, #1D3557, #457B9D)' }}>
//                 <Sparkles className="w-5 h-5 text-white" />
//               </div>
//             </div>
//             <h1 className="text-2xl font-bold group-hover:scale-105 transition-transform duration-300"
//                 style={{ color: '#1D3557' }}>
//               CreatorBay
//             </h1>
//           </div>
          
//           {/* User Actions Section */}
//           <div className="flex items-center gap-3">
//             {userName && (
//               <>
//                 {/* Welcome Message */}
//                 <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-2xl shadow-sm"
//                      style={{ background: 'white', border: '1px solid rgba(69, 123, 157, 0.2)' }}>
//                   <div className="p-1 rounded-lg" style={{ background: '#F1FAEE' }}>
//                     <User className="w-3.5 h-3.5" style={{ color: '#457B9D' }} />
//                   </div>
//                   <span className="text-sm font-semibold" style={{ color: '#1C1C1C' }}>
//                     {userName}
//                   </span>
//                 </div>

//                 {/* User-specific Buttons */}
//                 {userType === "user" && (
//                   <>
//                     <button
//                       onClick={() => navigate("/subscriptions")}
//                       className="rounded-2xl px-4 py-2.5 font-semibold hover:scale-105 transition-all duration-150 shadow-sm hover:shadow-md flex items-center gap-2"
//                       style={{ 
//                         background: 'white',
//                         color: '#1D3557',
//                         border: '1px solid rgba(69, 123, 157, 0.2)'
//                       }}
//                       onMouseEnter={(e) => {
//                         e.currentTarget.style.background = '#457B9D';
//                         e.currentTarget.style.color = 'white';
//                         e.currentTarget.style.borderColor = '#457B9D';
//                       }}
//                       onMouseLeave={(e) => {
//                         e.currentTarget.style.background = 'white';
//                         e.currentTarget.style.color = '#1D3557';
//                         e.currentTarget.style.borderColor = 'rgba(69, 123, 157, 0.2)';
//                       }}
//                     >
//                       <Heart className="w-4 h-4" />
//                       <span className="hidden sm:inline">Subscriptions</span>
//                     </button>
//                     <button
//                       onClick={() => navigate("/profile")}
//                       className="rounded-2xl px-4 py-2.5 font-semibold hover:scale-105 transition-all duration-150 shadow-sm hover:shadow-md flex items-center gap-2"
//                       style={{ 
//                         background: 'white',
//                         color: '#1D3557',
//                         border: '1px solid rgba(69, 123, 157, 0.2)'
//                       }}
//                       onMouseEnter={(e) => {
//                         e.currentTarget.style.background = '#457B9D';
//                         e.currentTarget.style.color = 'white';
//                         e.currentTarget.style.borderColor = '#457B9D';
//                       }}
//                       onMouseLeave={(e) => {
//                         e.currentTarget.style.background = 'white';
//                         e.currentTarget.style.color = '#1D3557';
//                         e.currentTarget.style.borderColor = 'rgba(69, 123, 157, 0.2)';
//                       }}
//                     >
//                       <User className="w-4 h-4" />
//                       <span className="hidden sm:inline">My Profile</span>
//                     </button>
//                   </>
//                 )}

//                 {/* Creator-specific Button */}
//                 {userType === "creator" && (
//                   <button
//                     onClick={() => navigate("/creator/settings")}
//                     className="rounded-2xl px-4 py-2.5 font-semibold hover:scale-105 transition-all duration-150 shadow-sm hover:shadow-md flex items-center gap-2"
//                     style={{ 
//                       background: 'white',
//                       color: '#1D3557',
//                       border: '1px solid rgba(69, 123, 157, 0.2)'
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.background = '#457B9D';
//                       e.currentTarget.style.color = 'white';
//                       e.currentTarget.style.borderColor = '#457B9D';
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.background = 'white';
//                       e.currentTarget.style.color = '#1D3557';
//                       e.currentTarget.style.borderColor = 'rgba(69, 123, 157, 0.2)';
//                     }}
//                   >
//                     <Settings className="w-4 h-4" />
//                     <span className="hidden sm:inline">Settings</span>
//                   </button>
//                 )}

//                 {/* Logout Button */}
//                 <button
//                   onClick={handleLogout}
//                   className="rounded-2xl px-5 py-2.5 font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-150 border-0 flex items-center gap-2"
//                   style={{ 
//                     background: '#E63946',
//                     color: 'white'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.background = '#C5303E';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.background = '#E63946';
//                   }}
//                 >
//                   <LogOut className="w-4 h-4" />
//                   <span className="hidden sm:inline">Logout</span>
//                   <span className="sm:hidden">Exit</span>
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
//       `}</style>
//     </nav>
//   );
// };

//claude
// import { LogOut, Settings, User, Heart, Sparkles, Menu, X, Bell, ChevronDown } from "lucide-react";
// import { useState } from "react";

// interface NavbarProps {
//   userType?: "user" | "creator";
//   userName?: string;
// }

// export const Navbar = ({ userType = "user", userName = "Guest User" }: NavbarProps) => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);

//   const handleLogout = () => {
//     alert("Logout clicked - In your app, this will clear localStorage and navigate to login");
//   };

//   const handleNavigation = (path: string) => {
//     alert(`Navigating to: ${path}`);
//     setMobileMenuOpen(false);
//   };

//   return (
//     <>
//       <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo Section */}
//             <div 
//               className="flex items-center gap-3 cursor-pointer group"
//               onClick={() => handleNavigation(userType === "creator" ? "/creator/dashboard" : "/explore")}
//             >
//               <div className="relative">
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
//                 <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
//                   <Sparkles className="w-5 h-5 text-white" />
//                 </div>
//               </div>
//               <div>
//                 <h1 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
//                   CreatorBay
//                 </h1>
//                 <p className="text-xs text-slate-500 font-medium hidden sm:block">
//                   Support your favorites
//                 </p>
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center gap-2">
//               {/* Notifications */}
//               <button 
//                 className="relative p-2.5 rounded-xl hover:bg-slate-100 transition-colors group"
//                 onClick={() => alert("Notifications")}
//               >
//                 <Bell className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
//                 <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
//               </button>

//               {/* User-specific Buttons */}
//               {userType === "user" && (
//                 <>
//                   <button
//                     onClick={() => handleNavigation("/subscriptions")}
//                     className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-all"
//                   >
//                     <Heart className="w-4 h-4" />
//                     <span>Subscriptions</span>
//                   </button>
//                   <button
//                     onClick={() => handleNavigation("/profile")}
//                     className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-all"
//                   >
//                     <User className="w-4 h-4" />
//                     <span>Profile</span>
//                   </button>
//                 </>
//               )}

//               {/* Creator-specific Button */}
//               {userType === "creator" && (
//                 <button
//                   onClick={() => handleNavigation("/creator/settings")}
//                   className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-all"
//                 >
//                   <Settings className="w-4 h-4" />
//                   <span>Settings</span>
//                 </button>
//               )}

//               {/* User Menu Dropdown */}
//               <div className="relative">
//                 <button
//                   onClick={() => setUserMenuOpen(!userMenuOpen)}
//                   className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-100 transition-all border border-slate-200"
//                 >
//                   <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm shadow-md">
//                     {userName.charAt(0).toUpperCase()}
//                   </div>
//                   <span className="font-semibold text-slate-900 max-w-[120px] truncate">
//                     {userName}
//                   </span>
//                   <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
//                 </button>

//                 {/* Dropdown Menu */}
//                 {userMenuOpen && (
//                   <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-scale-in">
//                     <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 border-b border-slate-200">
//                       <div className="flex items-center gap-3">
//                         <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
//                           {userName.charAt(0).toUpperCase()}
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <p className="font-bold text-slate-900 truncate">{userName}</p>
//                           <p className="text-sm text-slate-600 capitalize">{userType} Account</p>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="p-2">
//                       <button
//                         onClick={() => {
//                           handleNavigation("/profile");
//                           setUserMenuOpen(false);
//                         }}
//                         className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 transition-colors text-left"
//                       >
//                         <User className="w-5 h-5 text-slate-600" />
//                         <span className="font-medium text-slate-900">My Profile</span>
//                       </button>
                      
//                       <button
//                         onClick={() => {
//                           handleNavigation("/settings");
//                           setUserMenuOpen(false);
//                         }}
//                         className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 transition-colors text-left"
//                       >
//                         <Settings className="w-5 h-5 text-slate-600" />
//                         <span className="font-medium text-slate-900">Settings</span>
//                       </button>
                      
//                       <div className="my-2 border-t border-slate-200"></div>
                      
//                       <button
//                         onClick={() => {
//                           handleLogout();
//                           setUserMenuOpen(false);
//                         }}
//                         className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 transition-colors text-left"
//                       >
//                         <LogOut className="w-5 h-5 text-red-600" />
//                         <span className="font-medium text-red-600">Logout</span>
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
//             >
//               {mobileMenuOpen ? (
//                 <X className="w-6 h-6 text-slate-700" />
//               ) : (
//                 <Menu className="w-6 h-6 text-slate-700" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden border-t border-slate-200 bg-white animate-slide-down">
//             <div className="container mx-auto px-4 py-4 space-y-2">
//               {/* User Info */}
//               <div className="flex items-center gap-3 p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl mb-3">
//                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
//                   {userName.charAt(0).toUpperCase()}
//                 </div>
//                 <div>
//                   <p className="font-bold text-slate-900">{userName}</p>
//                   <p className="text-sm text-slate-600 capitalize">{userType} Account</p>
//                 </div>
//               </div>

//               {/* Notifications */}
//               <button 
//                 className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 transition-colors"
//                 onClick={() => handleNavigation("/notifications")}
//               >
//                 <div className="flex items-center gap-3">
//                   <Bell className="w-5 h-5 text-slate-600" />
//                   <span className="font-semibold text-slate-900">Notifications</span>
//                 </div>
//                 <span className="w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
//                   3
//                 </span>
//               </button>

//               {/* User Links */}
//               {userType === "user" && (
//                 <>
//                   <button
//                     onClick={() => handleNavigation("/subscriptions")}
//                     className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 transition-colors"
//                   >
//                     <Heart className="w-5 h-5 text-slate-600" />
//                     <span className="font-semibold text-slate-900">Subscriptions</span>
//                   </button>
//                   <button
//                     onClick={() => handleNavigation("/profile")}
//                     className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 transition-colors"
//                   >
//                     <User className="w-5 h-5 text-slate-600" />
//                     <span className="font-semibold text-slate-900">My Profile</span>
//                   </button>
//                 </>
//               )}

//               {userType === "creator" && (
//                 <button
//                   onClick={() => handleNavigation("/creator/settings")}
//                   className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 transition-colors"
//                 >
//                   <Settings className="w-5 h-5 text-slate-600" />
//                   <span className="font-semibold text-slate-900">Settings</span>
//                 </button>
//               )}

//               {/* Logout */}
//               <button
//                 onClick={handleLogout}
//                 className="w-full flex items-center gap-3 p-3 rounded-xl bg-red-50 hover:bg-red-100 transition-colors mt-2"
//               >
//                 <LogOut className="w-5 h-5 text-red-600" />
//                 <span className="font-semibold text-red-600">Logout</span>
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Overlay for dropdown */}
//       {(userMenuOpen || mobileMenuOpen) && (
//         <div 
//           className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
//           onClick={() => {
//             setUserMenuOpen(false);
//             setMobileMenuOpen(false);
//           }}
//         ></div>
//       )}

//       <style>{`
//         @keyframes scale-in {
//           from { transform: scale(0.95); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }
        
//         @keyframes slide-down {
//           from { transform: translateY(-10px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
        
//         .animate-scale-in {
//           animation: scale-in 0.2s cubic-bezier(0.16, 1, 0.3, 1);
//         }
        
//         .animate-slide-down {
//           animation: slide-down 0.3s cubic-bezier(0.16, 1, 0.3, 1);
//         }
//       `}</style>
//     </>
//   );
// };



import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogOut, Settings, User, LayoutDashboard, Menu, X } from "lucide-react";

interface NavbarProps {
  userType?: string;
  userName?: string;
}

export const Navbar = ({ userType, userName }: NavbarProps) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("Name");
    setIsMobileMenuOpen(false);
    navigate(userType === "creator" ? "/creator/login" : "/login");
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm bg-black/95">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h1 
            className="text-xl sm:text-2xl font-bold text-white flex items-center gap-1 sm:gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => handleNavigation(userType === "creator" ? "/creator/dashboard" : "/explore")}
          >
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 px-2 sm:px-3 py-1 rounded-lg text-sm sm:text-base">Creator</span>
            <span className="text-sm sm:text-base">Bay</span>
          </h1>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {userType === "creator" && (
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/creator/dashboard");
                }}
                className="text-gray-400 hover:text-white font-medium transition-colors cursor-pointer"
              >
                Dashboard
              </a>
            )}
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                navigate("/explore");
              }}
              className="text-gray-400 hover:text-white font-medium transition-colors cursor-pointer"
            >
              Explore
            </a>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                navigate("/subscriptions");
              }}
              className="text-gray-400 hover:text-white font-medium transition-colors cursor-pointer"
            >
              Subscriptions
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white font-medium transition-colors cursor-pointer"
            >
              Trending
            </a>
          </div>
          
          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {userName && (
              <>
                <span className="text-sm text-gray-300">
                  Welcome, <span className="text-white font-medium">{userName}</span>
                </span>
                
                {userType === "creator" && (
                  <Button 
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate("/creator/settings")}
                    className="text-gray-300 hover:text-white hover:bg-neutral-900 border-0"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                )}
                
                <Button 
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate("/profile")}
                  className="text-gray-300 hover:text-white hover:bg-neutral-900 border-0"
                >
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Button>
                
                <Button 
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-gray-300 hover:text-white hover:bg-neutral-900 border-0"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-3">
              {userName && (
                <div className="px-3 py-2 text-sm text-gray-300 border-b border-gray-800 pb-3 mb-2">
                  Welcome, <span className="text-white font-medium">{userName}</span>
                </div>
              )}

              {userType === "creator" && (
                <button
                  onClick={() => handleNavigation("/creator/dashboard")}
                  className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-neutral-900 rounded-lg transition-colors text-left"
                >
                  <LayoutDashboard className="w-5 h-5" />
                  <span>Dashboard</span>
                </button>
              )}

              <button
                onClick={() => handleNavigation("/explore")}
                className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-neutral-900 rounded-lg transition-colors text-left"
              >
                <span className="w-5 h-5 flex items-center justify-center">🔍</span>
                <span>Explore</span>
              </button>

              <button
                onClick={() => handleNavigation("/subscriptions")}
                className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-neutral-900 rounded-lg transition-colors text-left"
              >
                <span className="w-5 h-5 flex items-center justify-center">💝</span>
                <span>Subscriptions</span>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-neutral-900 rounded-lg transition-colors text-left"
              >
                <span className="w-5 h-5 flex items-center justify-center">🔥</span>
                <span>Trending</span>
              </button>

              <div className="border-t border-gray-800 pt-3 mt-3"></div>

              {userType === "creator" && (
                <button
                  onClick={() => handleNavigation("/creator/settings")}
                  className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-neutral-900 rounded-lg transition-colors text-left"
                >
                  <Settings className="w-5 h-5" />
                  <span>Settings</span>
                </button>
              )}

              <button
                onClick={() => handleNavigation("/profile")}
                className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-neutral-900 rounded-lg transition-colors text-left"
              >
                <User className="w-5 h-5" />
                <span>Profile</span>
              </button>

              <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-neutral-900 rounded-lg transition-colors text-left"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};




// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";
// import { LogOut, Settings, User, Heart, LayoutDashboard } from "lucide-react";

// interface NavbarProps {
//   userType?: string;
//   userName?: string;
// }

// export const Navbar = ({ userType, userName }: NavbarProps) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // TODO: Call logout API
//     localStorage.removeItem("userToken");
//     localStorage.removeItem("userName");
//     localStorage.removeItem("Name");
//     navigate(userType === "creator" ? "/creator/login" : "/login");
//   };

//   return (
//     <nav className="bg-black border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm bg-black/95">
//       <div className="container mx-auto px-6 py-4 flex items-center justify-between">
//         <div className="flex items-center gap-8">
//           <h1 
//             className="text-2xl font-bold text-white flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
//             onClick={() => navigate(userType === "creator" ? "/creator/dashboard" : "/explore")}
//           >
//             <span className="bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-1 rounded-lg">Creator</span>
//             <span>Bay</span>
//           </h1>
          
//           <div className="hidden md:flex items-center gap-6">
//             {userType === "creator" && (
//               <a 
//                 href="#" 
//                 onClick={(e) => {
//                   e.preventDefault();
//                   navigate("/creator/dashboard");
//                 }}
//                 className="text-gray-400 hover:text-white font-medium transition-colors cursor-pointer"
//               >
//                 Dashboard
//               </a>
//             )}
//             <a 
//               href="#" 
//               onClick={(e) => {
//                 e.preventDefault();
//                 navigate("/explore");
//               }}
//               className="text-gray-400 hover:text-white font-medium transition-colors cursor-pointer"
//             >
//               Explore
//             </a>
//             {/* {userType === "user" && ( */}
//               <a 
//                 href="#" 
//                 onClick={(e) => {
//                   e.preventDefault();
//                   navigate("/subscriptions");
//                 }}
//                 className="text-gray-400 hover:text-white font-medium transition-colors cursor-pointer"
//               >
//                 Subscriptions
//               </a>
//             {/* )} */}
//             <a 
//               href="#" 
//               className="text-gray-400 hover:text-white font-medium transition-colors cursor-pointer"
//             >
//               Trending
//             </a>
//           </div>
//         </div>
        
//         <div className="flex items-center gap-3">
//           {userName && (
//             <>
//               <span className="text-sm text-gray-300 hidden lg:inline">
//                 Welcome, <span className="text-white font-medium">{userName}</span>
//               </span>
              
//               {userType === "creator" && (
//                 <>
//                   <Button 
//                     variant="ghost"
//                     size="sm"
//                     onClick={() => navigate("/creator/dashboard")}
//                     className="text-gray-300 hover:text-white hover:bg-neutral-900 border-0 md:hidden"
//                   >
//                     <LayoutDashboard className="w-4 h-4 mr-2" />
//                     <span className="hidden sm:inline">Dashboard</span>
//                   </Button>
//                   <Button 
//                     variant="ghost"
//                     size="sm"
//                     onClick={() => navigate("/creator/settings")}
//                     className="text-gray-300 hover:text-white hover:bg-neutral-900 border-0"
//                   >
//                     <Settings className="w-4 h-4 mr-2" />
//                     <span className="hidden sm:inline">Settings</span>
//                   </Button>
//                 </>
//               )}
              
//               {/* {userType === "user" && ( */}
//                 <>
//                   <Button 
//                     variant="ghost"
//                     size="sm"
//                     onClick={() => navigate("/profile")}
//                     className="text-gray-300 hover:text-white hover:bg-neutral-900 border-0"
//                   >
//                     <User className="w-4 h-4 mr-2" />
//                     <span className="hidden sm:inline">Profile</span>
//                   </Button>
//                 </>
//               {/* )} */}
              
//               <Button 
//                 variant="ghost"
//                 size="sm"
//                 onClick={handleLogout}
//                 className="text-gray-300 hover:text-white hover:bg-neutral-900 border-0"
//               >
//                 <LogOut className="w-4 h-4 mr-2" />
//                 <span className="hidden sm:inline">Logout</span>
//               </Button>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };




// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";
// import { LogOut, Settings, User, Heart } from "lucide-react";

// interface NavbarProps {
//   userType?: "user" | "creator";
//   userName?: string;
// }

// export const Navbar = ({ userType, userName }: NavbarProps) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // TODO: Call logout API
//     localStorage.removeItem("userToken");
//     localStorage.removeItem("userName");
//     localStorage.removeItem("Name");
//     navigate(userType === "creator" ? "/creator/login" : "/login");
//   };

//   return (
//     <nav className="bg-black border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm bg-black/95">
//       <div className="container mx-auto px-6 py-4 flex items-center justify-between">
//         <div className="flex items-center gap-8">
//           <h1 
//             className="text-2xl font-bold text-white flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
//             onClick={() => navigate(userType === "creator" ? "/creator/dashboard" : "/explore")}
//           >
//             <span className="bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-1 rounded-lg">Creator</span>
//             <span>Bay</span>
//           </h1>
          
//           <div className="hidden md:flex items-center gap-6">
//             <a 
//               href="#" 
//               onClick={(e) => {
//                 e.preventDefault();
//                 navigate("/explore");
//               }}
//               className="text-gray-400 hover:text-white font-medium transition-colors cursor-pointer"
//             >
//               Explore
//             </a>
//             {userType === "user" && (
//               <a 
//                 href="#" 
//                 onClick={(e) => {
//                   e.preventDefault();
//                   navigate("/subscriptions");
//                 }}
//                 className="text-gray-400 hover:text-white font-medium transition-colors cursor-pointer"
//               >
//                 Subscriptions
//               </a>
//             )}
//             <a 
//               href="#" 
//               className="text-gray-400 hover:text-white font-medium transition-colors cursor-pointer"
//             >
//               Trending
//             </a>
//           </div>
//         </div>
        
//         <div className="flex items-center gap-3">
//           {userName && (
//             <>
//               <span className="text-sm text-gray-300 hidden lg:inline">
//                 Welcome, <span className="text-white font-medium">{userName}</span>
//               </span>
              
//               {userType === "user" && (
//                 <>
//                   <Button 
//                     variant="ghost"
//                     size="sm"
//                     onClick={() => navigate("/profile")}
//                     className="text-gray-300 hover:text-white hover:bg-neutral-900 border-0"
//                   >
//                     <User className="w-4 h-4 mr-2" />
//                     <span className="hidden sm:inline">Profile</span>
//                   </Button>
//                 </>
//               )}
              
//               {userType === "creator" && (
//                 <Button 
//                   variant="ghost"
//                   size="sm"
//                   onClick={() => navigate("/creator/settings")}
//                   className="text-gray-300 hover:text-white hover:bg-neutral-900 border-0"
//                 >
//                   <Settings className="w-4 h-4 mr-2" />
//                   <span className="hidden sm:inline">Settings</span>
//                 </Button>
//               )}
              
//               <Button 
//                 variant="ghost"
//                 size="sm"
//                 onClick={handleLogout}
//                 className="text-gray-300 hover:text-white hover:bg-neutral-900 border-0"
//               >
//                 <LogOut className="w-4 h-4 mr-2" />
//                 <span className="hidden sm:inline">Logout</span>
//               </Button>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };