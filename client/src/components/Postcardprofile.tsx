// import { useRef, useState } from "react";
// import { Pencil } from "lucide-react";
// import axios from "axios";

// export default function ProfileCard({ user }) {
//   const fileInputRef = useRef(null);
//   const [profilePic, setProfilePic] = useState(user.profilePic);

//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("profilePic", file);

//     const token = localStorage.getItem("userToken");
//     if (user.allowed){
//        const res = await axios.post(
//       "http://localhost:5000/api/auth/profilepic",
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     setProfilePic(res.data.url);

//     }

   
//   };

//   return (
//   <div
//   className={`relative mx-auto ${
//     user.small ? "w-10 h-10" : "w-40 h-40"
//   }`}
// >
//   {/* Thin premium gradient border */}
//   <div className="absolute inset-0 rounded-full p-[1.2px] bg-gray-500 shadow-md
// ">
    
//     <img
//       src={profilePic || "/default-user.png"}
//       alt="Profile"
//       className="
//         w-full h-full rounded-full object-cover bg-white  border-2 border-gray-300
//       "
//     />
//   </div>

//   {user.allowed && (
//     <>
//       <button
//         className="absolute bottom-2 right-2 bg-black/60 p-2 rounded-full"
//         onClick={() => fileInputRef.current?.click()}
//       >
//         <Pencil className="w-4 h-4 text-white" />
//       </button>

//       <input
//         type="file"
//         ref={fileInputRef}
//         accept="image/*"
//         className="hidden"
//         onChange={handleFileChange}
//       />
//     </>
//   )}
// </div>

//   );
// }



// import { useRef, useState } from "react";
// import { Pencil, Camera, Upload } from "lucide-react";
// import axios from "axios";

// export default function ProfileCard({ user }) {
//   const fileInputRef = useRef(null);
//   const [profilePic, setProfilePic] = useState(user.profilePic);
//   const [isHovered, setIsHovered] = useState(false);
//   const [isUploading, setIsUploading] = useState(false);

//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setIsUploading(true);
//     const formData = new FormData();
//     formData.append("profilePic", file);

//     const token = localStorage.getItem("userToken");
//     if (user.allowed) {
//       try {
//         const res = await axios.post(
//           "http://localhost:5000/api/auth/profilepic",
//           formData,
//           {
//             headers: {
//               "Content-Type": "multipart/form-data",
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         setProfilePic(res.data.url);
//       } catch (error) {
//         console.error("Upload failed:", error);
//       } finally {
//         setIsUploading(false);
//       }
//     }
//   };

//   // Adjusted sizes for better visual hierarchy
//   const sizes = {
//     small: "w-12 h-12",      // Increased from w-10 h-10
//     medium: "w-20 h-20",     // New medium size
//     large: "w-32 h-32",      // Adjusted from w-40 h-40 for better fit
//   };

//   const getSize = () => {
//     if (user.small) return sizes.small;
//     if (user.medium) return sizes.medium;
//     return sizes.large;
//   };

//   const isSmall = user.small;

//   return (
//     <div
//       className={`relative ${getSize()} flex-shrink-0`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Gradient Glow Effect */}
//       <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300" />

//       {/* Main Container */}
//       <div className="relative w-full h-full">
//         {/* Gradient Border */}
//         <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500">
//           {/* Inner Background */}
//           <div className="w-full h-full rounded-full bg-[#1a1a24] p-[2px]">
//             {/* Image Container */}
//             <div className="relative w-full h-full rounded-full overflow-hidden">
//               <img
//                 src={profilePic || "/default-user.png"}
//                 alt="Profile"
//                 className="w-full h-full object-cover bg-gradient-to-br from-gray-800 to-gray-900"
//               />
              
//               {/* Upload Overlay */}
//               {user.allowed && isHovered && !isSmall && (
//                 <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center animate-fadeIn">
//                   <div className="text-center">
//                     <Camera className="w-6 h-6 text-white mx-auto mb-1" />
//                     <span className="text-xs text-white font-medium">Change</span>
//                   </div>
//                 </div>
//               )}

//               {/* Uploading Overlay */}
//               {isUploading && (
//                 <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center">
//                   <div className="text-center">
//                     <div className="w-8 h-8 border-3 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-2" />
//                     <span className="text-xs text-white font-medium">Uploading...</span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Edit Button */}
//         {user.allowed && !isSmall && (
//           <button
//             className="absolute -bottom-1 -right-1 group/btn"
//             onClick={() => fileInputRef.current?.click()}
//             disabled={isUploading}
//           >
//             <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-50 group-hover/btn:opacity-75 transition-opacity" />
//             <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110">
//               <Pencil className="w-3.5 h-3.5 text-white" />
//             </div>
//           </button>
//         )}

//         {/* Small Size Edit Button */}
//         {user.allowed && isSmall && (
//           <button
//             className="absolute -bottom-0.5 -right-0.5"
//             onClick={() => fileInputRef.current?.click()}
//             disabled={isUploading}
//           >
//             <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-1 rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-300">
//               <Pencil className="w-2.5 h-2.5 text-white" />
//             </div>
//           </button>
//         )}

//         {/* Online Status Indicator (optional - only for non-small) */}
//         {!isSmall && !user.allowed && (
//           <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-[#1a1a24] animate-pulse" />
//         )}
//       </div>

//       <input
//         type="file"
//         ref={fileInputRef}
//         accept="image/*"
//         className="hidden"
//         onChange={handleFileChange}
//         disabled={isUploading}
//       />

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
//     </div>
//   );
// }


// import { useRef, useState } from "react";
// import { Pencil, Camera } from "lucide-react";
// import axios from "axios";

// export default function ProfileCard({ user }) {
//   const fileInputRef = useRef(null);
//   const [profilePic, setProfilePic] = useState(user.profilePic);
//   const [isHovered, setIsHovered] = useState(false);
//   const [isUploading, setIsUploading] = useState(false);

//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setIsUploading(true);
//     const formData = new FormData();
//     formData.append("profilePic", file);

//     const token = localStorage.getItem("userToken");
//     if (user.allowed) {
//       try {
//         const res = await axios.post(
//           "http://localhost:5000/api/auth/profilepic",
//           formData,
//           {
//             headers: {
//               "Content-Type": "multipart/form-data",
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         setProfilePic(res.data.url);
//       } catch (error) {
//         console.error("Upload failed:", error);
//       } finally {
//         setIsUploading(false);
//       }
//     }
//   };

//   const sizes = {
//     small: "w-12 h-12",
//     medium: "w-20 h-20",
//     large: "w-32 h-32",
//   };

//   const getSize = () => {
//     if (user.small) return sizes.small;
//     if (user.medium) return sizes.medium;
//     return sizes.large;
//   };

//   const isSmall = user.small;

//   return (
//     <div
//       className={`relative ${getSize()} flex-shrink-0`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
//     >
//       {/* Subtle Glow Effect */}
//       <div 
//         className="absolute -inset-1 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"
//         style={{ background: 'linear-gradient(135deg, #457B9D, #E63946)' }}
//       />

//       {/* Main Container */}
//       <div className="relative w-full h-full">
//         {/* Theme-Matched Border */}
//         <div 
//           className="absolute inset-0 rounded-full p-[3px]"
//           style={{ background: 'linear-gradient(135deg, #457B9D, #1D3557)' }}
//         >
//           {/* Inner Background */}
//           <div 
//             className="w-full h-full rounded-full p-[2px]"
//             style={{ background: '#F1FAEE' }}
//           >
//             {/* Image Container */}
//             <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg">
//               <img
//                 src={profilePic || "/default-user.png"}
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//                 style={{ background: 'linear-gradient(135deg, #E8F4F8, #D0E8F0)' }}
//               />
              
//               {/* Upload Overlay */}
//               {user.allowed && isHovered && !isSmall && (
//                 <div 
//                   className="absolute inset-0 flex items-center justify-center animate-fadeIn backdrop-blur-sm"
//                   style={{ background: 'rgba(29, 53, 87, 0.7)' }}
//                 >
//                   <div className="text-center">
//                     <Camera className="w-6 h-6 text-white mx-auto mb-1" />
//                     <span className="text-xs text-white font-semibold">Change Photo</span>
//                   </div>
//                 </div>
//               )}

//               {/* Uploading Overlay */}
//               {isUploading && (
//                 <div 
//                   className="absolute inset-0 flex items-center justify-center backdrop-blur-sm"
//                   style={{ background: 'rgba(29, 53, 87, 0.85)' }}
//                 >
//                   <div className="text-center">
//                     <div 
//                       className="w-8 h-8 border-3 rounded-full animate-spin mx-auto mb-2"
//                       style={{ 
//                         borderColor: 'rgba(230, 57, 70, 0.3)',
//                         borderTopColor: '#E63946'
//                       }}
//                     />
//                     <span className="text-xs text-white font-semibold">Uploading...</span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Edit Button - Regular Size */}
//         {user.allowed && !isSmall && (
//           <button
//             className="absolute -bottom-1 -right-1 group/btn"
//             onClick={() => fileInputRef.current?.click()}
//             disabled={isUploading}
//           >
//             <div 
//               className="absolute -inset-1 rounded-full blur opacity-40 group-hover/btn:opacity-70 transition-opacity"
//               style={{ background: 'linear-gradient(135deg, #457B9D, #E63946)' }}
//             />
//             <div 
//               className="relative p-2.5 rounded-full transition-all duration-150 transform hover:scale-110 shadow-md"
//               style={{ background: '#E63946' }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.background = '#C5303E';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.background = '#E63946';
//               }}
//             >
//               <Pencil className="w-3.5 h-3.5 text-white" />
//             </div>
//           </button>
//         )}

//         {/* Edit Button - Small Size */}
//         {user.allowed && isSmall && (
//           <button
//             className="absolute -bottom-0.5 -right-0.5 shadow-md"
//             onClick={() => fileInputRef.current?.click()}
//             disabled={isUploading}
//             style={{ background: '#E63946', borderRadius: '50%' }}
//           >
//             <div 
//               className="p-1.5 rounded-full transition-all duration-150"
//               onMouseEnter={(e) => {
//                 e.currentTarget.parentElement.style.background = '#C5303E';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.parentElement.style.background = '#E63946';
//               }}
//             >
//               <Pencil className="w-2.5 h-2.5 text-white" />
//             </div>
//           </button>
//         )}

//         {/* Online Status Indicator */}
//         {!isSmall && !user.allowed && (
//           <div 
//             className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 animate-pulse shadow-md"
//             style={{ 
//               background: '#E63946',
//               borderColor: '#F1FAEE'
//             }}
//           />
//         )}
//       </div>

//       <input
//         type="file"
//         ref={fileInputRef}
//         accept="image/*"
//         className="hidden"
//         onChange={handleFileChange}
//         disabled={isUploading}
//       />

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         .animate-fadeIn {
//           animation: fadeIn 0.2s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }



import { useRef, useState } from "react";
import { Pencil, User, Loader2 } from "lucide-react";
import axios from "axios";

export default function ProfileCard({ user }) {
  const fileInputRef = useRef(null);
  const [profilePic, setProfilePic] = useState(user.profilePic);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profilePic", file);

    const token = localStorage.getItem("userToken");
    if (user.allowed) {
      setIsUploading(true);
      try {
        const res = await axios.post(
          "https://creatorbay.onrender.com/api/auth/profilepic",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProfilePic(res.data.url);
      } catch (error) {
        console.error("Upload failed:", error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const sizeClass = user.small ? "w-10 h-10" : user.medium ? "w-20 h-20" : "w-40 h-40";
  const iconSize = user.small ? "w-5 h-5" : user.medium ? "w-10 h-10" : "w-20 h-20";
  const editButtonSize = user.small ? "p-1" : user.medium ? "p-1.5" : "p-2";
  const editIconSize = user.small ? "w-2.5 h-2.5" : user.medium ? "w-3 h-3" : "w-4 h-4";

  return (
    <div className={`relative mx-auto ${sizeClass}`}>
      {/* Orange gradient border - Boosty style */}
      <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
        <div className="w-full h-full rounded-full overflow-hidden bg-neutral-800 border-2 border-neutral-900 relative">
          {profilePic && profilePic !== "loading.." ? (
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement.innerHTML = `
                  <div class="w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <svg class="${iconSize} text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                `;
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
              <User className={`${iconSize} text-white`} />
            </div>
          )}
          
          {/* Uploading Overlay */}
          {isUploading && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <Loader2 className={`${iconSize} text-white animate-spin`} />
            </div>
          )}
        </div>
      </div>

      {user.allowed && (
        <>
          <button
            className={`absolute bottom-0 right-0 bg-orange-500 hover:bg-orange-600 ${editButtonSize} rounded-full shadow-lg transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed`}
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
          >
            {isUploading ? (
              <Loader2 className={`${editIconSize} text-white animate-spin`} />
            ) : (
              <Pencil className={`${editIconSize} text-white`} />
            )}
          </button>

          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
            disabled={isUploading}
          />
        </>
      )}
    </div>
  );
}