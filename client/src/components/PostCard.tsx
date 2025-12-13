// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import  AudioPlayer  from "./AudioPlayer";
// import { Music } from "lucide-react";
// import { Badge } from "@/components/ui/badge";

// interface PostCardProps {
//   title: string;
//   content: string;
//   createdAt: string;
//   authorName?: string;
//   contentType?: string;
//   mediaUrl?: string;
//   thumbnailUrl?: string;
//   access_type?: string;
//   onEdit?: () => void;
// }

// // export const PostCard = ({ title, content, createdAt, authorName }: PostCardProps) => {
// export const PostCard = ({ 
//   title, 
//   content, 
//   createdAt, 
//   authorName,
//   contentType = "text",
//   mediaUrl,
//   thumbnailUrl,
//   access_type,
//   onEdit
// }: PostCardProps) => {
//   return (
//     <Card>
//       <CardHeader>
//         <div className="flex items-center justify-between">
//           <CardTitle className="text-lg">{title}</CardTitle>
//           <div className="flex items-center gap-2">
//             {onEdit && (
//               <button
//                 onClick={onEdit}
//                 className="text-xs text-primary hover:underline"
//               >
//                 Edit
//               </button>
//             )}
//             <CardDescription className="text-xs">
//               {new Date(createdAt).toLocaleDateString()}
//             </CardDescription>
//           </div>
//         </div>
//         {authorName && (
//           <CardDescription>by {authorName}</CardDescription>
//         )}
//       </CardHeader>
//       <CardContent className="space-y-4">
//         {/* Media Display */}
//         {contentType === "image" && mediaUrl && (
//           <img
//             src={mediaUrl}
//             alt={title}
//             className="w-full rounded-lg object-cover max-h-96"
//           />
//         )}

//         {contentType === "video" && mediaUrl && (
//           <div className="relative">
//             <video
//               src={mediaUrl}
//               controls
//               poster={thumbnailUrl}
//               className="w-full rounded-lg"
//             >
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         )}

//         {/* {contentType === "audio" && mediaUrl && (
//           <div className="p-6 bg-muted/50 rounded-lg flex flex-col items-center justify-center">
//             <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
//               <Music className="h-8 w-8 text-primary" />
//             </div>
//             <audio src={mediaUrl} controls className="w-full max-w-md">
//               Your browser does not support the audio tag.
//             </audio>
//           </div>
//         )} */}
//         {contentType === "audio" && mediaUrl && (
//   <AudioPlayer 
//       audio={mediaUrl} 
//     thumbnail={thumbnailUrl} 
  
//   />
// )}       <div>
//   {/* Description */}
//         <p className="text-sm text-muted-foreground whitespace-pre-wrap">{content}</p>
// </div> 
//          <Badge variant={access_type === 'free' ? 'secondary' : 'default'}>
//                       {access_type === 'free' ? 'Free' : 'Premium'}
//                     </Badge>
//       </CardContent>
      
//     </Card>
//   );
// };


// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import AudioPlayer from "./AudioPlayer";
// import { Music, Edit, Trash2, Crown, Heart } from "lucide-react";
// import { Badge } from "@/components/ui/badge";

// interface PostCardProps {
//   title: string;
//   content: string;
//   createdAt: string;
//   authorName?: string;
//   contentType?: string;
//   mediaUrl?: string;
//   thumbnailUrl?: string;
//   access_type?: string;
//   onEdit?: () => void;
//   onDelete?: () => void;
// }

// export const PostCard = ({ 
//   title, 
//   content, 
//   createdAt, 
//   authorName,
//   contentType = "text",
//   mediaUrl,
//   thumbnailUrl,
//   access_type,
//   onEdit,
//   onDelete
// }: PostCardProps) => {
//   return (
//     <div className="bg-neutral-900 rounded-xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all">
//       {/* Header */}
//       <div className="p-6 border-b border-gray-800">
//         <div className="flex items-start justify-between gap-4">
//           <div className="flex-1">
//             <div className="flex items-center gap-3 mb-2">
//               <h3 className="text-xl font-bold text-white">{title}</h3>
//               {access_type === 'free' ? (
//                 <div className="flex items-center gap-1 px-2 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs font-medium text-gray-300">
//                   <Heart className="w-3 h-3" />
//                   Free
//                 </div>
//               ) : (
//                 <div className="flex items-center gap-1 px-2 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
//                   <Crown className="w-3 h-3" />
//                   Premium
//                 </div>
//               )}
//             </div>
//             {authorName && (
//               <p className="text-sm text-gray-500">by {authorName}</p>
//             )}
//           </div>
          
//           <div className="flex items-center gap-2">
//             <span className="text-xs text-gray-500">
//               {new Date(createdAt).toLocaleDateString()}
//             </span>
//             {onEdit && (
//               <button
//                 onClick={onEdit}
//                 className="p-2 bg-neutral-800 hover:bg-neutral-700 text-gray-400 hover:text-white rounded-lg transition-all border border-gray-700"
//                 title="Edit post"
//               >
//                 <Edit className="w-4 h-4" />
//               </button>
//             )}
//             {onDelete && (
//               <button
//                 onClick={onDelete}
//                 className="p-2 bg-neutral-800 hover:bg-red-900/50 text-gray-400 hover:text-red-400 rounded-lg transition-all border border-gray-700 hover:border-red-500/50"
//                 title="Delete post"
//               >
//                 <Trash2 className="w-4 h-4" />
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-6 space-y-4">
//         {/* Media Display */}
//         {contentType === "image" && mediaUrl && (
//           <div className="rounded-lg overflow-hidden">
//             <img
//               src={mediaUrl}
//               alt={title}
//               className="w-full object-cover max-h-96"
//             />
//           </div>
//         )}

//         {contentType === "video" && mediaUrl && (
//           <div className="relative rounded-lg overflow-hidden">
//             <video
//               src={mediaUrl}
//               controls
//               poster={thumbnailUrl}
//               className="w-full rounded-lg"
//             >
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         )}

//         {contentType === "audio" && mediaUrl && (
//           <AudioPlayer 
//             audio={mediaUrl} 
//             thumbnail={thumbnailUrl} 
//           />
//         )}

//         {/* Description */}
//         {content && (
//           <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">{content}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// import { useState } from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import AudioPlayer from "./AudioPlayer";
// import { Music, Edit, Trash2, Crown, Heart, X, Maximize2 } from "lucide-react";
// import { Badge } from "@/components/ui/badge";

// interface PostCardProps {
//   title: string;
//   content: string;
//   createdAt: string;
//   authorName?: string;
//   contentType?: string;
//   mediaUrl?: string;
//   thumbnailUrl?: string;
//   access_type?: string;
//   onEdit?: () => void;
//   onDelete?: () => void;
// }

// export const PostCard = ({ 
//   title, 
//   content, 
//   createdAt, 
//   authorName,
//   contentType = "text",
//   mediaUrl,
//   thumbnailUrl,
//   access_type,
//   onEdit,
//   onDelete
// }: PostCardProps) => {
//   const [isVideoFullscreen, setIsVideoFullscreen] = useState(false);

//   const openVideoFullscreen = () => {
//     setIsVideoFullscreen(true);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeVideoFullscreen = () => {
//     setIsVideoFullscreen(false);
//     document.body.style.overflow = 'unset';
//   };

//   return (
//     <>
//       <div className="bg-neutral-900 rounded-xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all">
//         {/* Header */}
//         <div className="p-4 sm:p-6 border-b border-gray-800">
//           <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
//             <div className="flex-1 min-w-0">
//               <div className="flex items-start sm:items-center gap-2 sm:gap-3 mb-2 flex-wrap">
//                 <h3 className="text-lg sm:text-xl font-bold text-white break-words">{title}</h3>
//                 {access_type === 'free' ? (
//                   <div className="flex items-center gap-1 px-2 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs font-medium text-gray-300 flex-shrink-0">
//                     <Heart className="w-3 h-3" />
//                     Free
//                   </div>
//                 ) : (
//                   <div className="flex items-center gap-1 px-2 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400 flex-shrink-0">
//                     <Crown className="w-3 h-3" />
//                     Premium
//                   </div>
//                 )}
//               </div>
//               {authorName && (
//                 <p className="text-sm text-gray-500">by {authorName}</p>
//               )}
//             </div>
            
//             <div className="flex items-center gap-2 flex-shrink-0">
//               <span className="text-xs text-gray-500 hidden sm:block">
//                 {new Date(createdAt).toLocaleDateString()}
//               </span>
//               {onEdit && (
//                 <button
//                   onClick={onEdit}
//                   className="p-2 bg-neutral-800 hover:bg-neutral-700 text-gray-400 hover:text-white rounded-lg transition-all border border-gray-700"
//                   title="Edit post"
//                 >
//                   <Edit className="w-4 h-4" />
//                 </button>
//               )}
//               {onDelete && (
//                 <button
//                   onClick={onDelete}
//                   className="p-2 bg-neutral-800 hover:bg-red-900/50 text-gray-400 hover:text-red-400 rounded-lg transition-all border border-gray-700 hover:border-red-500/50"
//                   title="Delete post"
//                 >
//                   <Trash2 className="w-4 h-4" />
//                 </button>
//               )}
//             </div>
//           </div>
//           <span className="text-xs text-gray-500 block sm:hidden mt-2">
//             {new Date(createdAt).toLocaleDateString()}
//           </span>
//         </div>

//         {/* Content */}
//         <div className="p-4 sm:p-6 space-y-4">
//           {/* Media Display */}
//           {contentType === "image" && mediaUrl && (
//             <div className="rounded-lg overflow-hidden bg-black flex items-center justify-center">
//               <img
//                 src={mediaUrl}
//                 alt={title}
//                 className="w-full h-auto object-contain max-h-[600px]"
//               />
//             </div>
//           )}

//           {contentType === "video" && mediaUrl && (
//             <div className="relative rounded-lg overflow-hidden bg-black group cursor-pointer" onClick={openVideoFullscreen}>
//               <video
//                 src={mediaUrl}
//                 poster={thumbnailUrl}
//                 className="w-full h-auto max-h-[600px] object-contain mx-auto block"
//                 preload="metadata"
//               >
//                 Your browser does not support the video tag.
//               </video>
              
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//                 <div className="bg-orange-500 rounded-full p-4">
//                   <Maximize2 className="w-8 h-8 text-white" />
//                 </div>
//               </div>
              
//               <p className="text-xs text-gray-400 text-center mt-2 px-2">Click to play in fullscreen</p>
//             </div>
//           )}

//           {contentType === "audio" && mediaUrl && (
//             <div className="w-full">
//               <AudioPlayer 
//                 audio={mediaUrl} 
//                 thumbnail={thumbnailUrl}
//                 title={title}
//               />
//             </div>
//           )}

//           {/* Description */}
//           {content && (
//             <p className="text-sm sm:text-base text-gray-300 whitespace-pre-wrap leading-relaxed break-words">{content}</p>
//           )}
//         </div>
//       </div>

//       {/* Video Fullscreen Modal */}
//       {isVideoFullscreen && contentType === "video" && mediaUrl && (
//         <div 
//           className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex items-center justify-center"
//           onClick={closeVideoFullscreen}
//           style={{ margin: 0, padding: 0 }}
//         >
//           {/* Close Button */}
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               closeVideoFullscreen();
//             }}
//             className="fixed top-4 right-4 p-3 bg-orange-500 hover:bg-orange-600 rounded-full transition-all z-[101] shadow-lg"
//             title="Close (ESC)"
//           >
//             <X className="w-6 h-6 text-white" />
//           </button>

//           {/* Video Container */}
//           <div 
//             className="w-full h-full flex items-center justify-center p-4 sm:p-8"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <video
//               src={mediaUrl}
//               controls
//               autoPlay
//               poster={thumbnailUrl}
//               className="max-w-full max-h-full w-auto h-auto"
//               style={{
//                 objectFit: 'contain',
//               }}
//             >
//               Your browser does not support the video tag.
//             </video>
//           </div>

//           {/* Video Info */}
//           <div className="fixed bottom-4 left-4 right-4 sm:left-8 sm:right-8 bg-neutral-900/90 backdrop-blur-sm rounded-lg p-4 border border-gray-700 max-w-2xl mx-auto">
//             <h3 className="text-white font-bold text-base sm:text-lg mb-1 line-clamp-1">{title}</h3>
//             {authorName && (
//               <p className="text-gray-400 text-sm">by {authorName}</p>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AudioPlayer from "./AudioPlayer";
import { Music, Edit, Trash2, Crown, Heart, X, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PostCardProps {
  title: string;
  content: string;
  createdAt: string;
  authorName?: string;
  contentType?: string;
  mediaUrl?: string;
  thumbnailUrl?: string;
  access_type?: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const PostCard = ({ 
  title, 
  content, 
  createdAt, 
  authorName,
  contentType = "text",
  mediaUrl,
  thumbnailUrl,
  access_type,
  onEdit,
  onDelete
}: PostCardProps) => {
  const [isVideoFullscreen, setIsVideoFullscreen] = useState(false);

  const openVideoFullscreen = () => {
    setIsVideoFullscreen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoFullscreen = () => {
    setIsVideoFullscreen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <div className="bg-neutral-900 rounded-xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all">
        {/* Header */}
        <div className="p-3 sm:p-4 md:p-6 border-b border-gray-800">
          <div className="flex flex-col gap-3">
            {/* Title and Badge Row */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white break-words line-clamp-2">{title}</h3>
                  {access_type === 'free' ? (
                    <div className="flex items-center gap-1 px-2 py-0.5 sm:py-1 bg-gray-800 border border-gray-700 rounded-full text-xs font-medium text-gray-300 flex-shrink-0">
                      <Heart className="w-3 h-3" />
                      <span className="hidden xs:inline">Free</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 px-2 py-0.5 sm:py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400 flex-shrink-0">
                      <Crown className="w-3 h-3" />
                      <span className="hidden xs:inline">Premium</span>
                    </div>
                  )}
                </div>
                {authorName && (
                  <p className="text-xs sm:text-sm text-gray-500">by {authorName}</p>
                )}
              </div>
            </div>

            {/* Date and Actions Row */}
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs text-gray-500">
                {new Date(createdAt).toLocaleDateString()}
              </span>
              
              {(onEdit || onDelete) && (
                <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                  {onEdit && (
                    <button
                      onClick={onEdit}
                      className="p-1.5 sm:p-2 bg-neutral-800 hover:bg-neutral-700 text-gray-400 hover:text-white rounded-lg transition-all border border-gray-700"
                      title="Edit post"
                    >
                      <Edit className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  )}
                  {onDelete && (
                    <button
                      onClick={onDelete}
                      className="p-1.5 sm:p-2 bg-neutral-800 hover:bg-red-900/50 text-gray-400 hover:text-red-400 rounded-lg transition-all border border-gray-700 hover:border-red-500/50"
                      title="Delete post"
                    >
                      <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4">
          {/* Media Display */}
          {contentType === "image" && mediaUrl && (
            <div className="rounded-lg overflow-hidden bg-black flex items-center justify-center">
              <img
                src={mediaUrl}
                alt={title}
                className="w-full h-auto object-contain max-h-[400px] sm:max-h-[500px] md:max-h-[600px]"
                loading="lazy"
              />
            </div>
          )}

          {contentType === "video" && mediaUrl && (
            <div className="relative rounded-lg overflow-hidden bg-black group">
              {/* Video Thumbnail */}
              <div className="relative w-full">
                {thumbnailUrl ? (
                  <img
                    src={thumbnailUrl}
                    alt="Video thumbnail"
                    className="w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] object-contain mx-auto block"
                  />
                ) : (
                  <video
                    src={mediaUrl}
                    className="w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] object-contain mx-auto block"
                    preload="metadata"
                  />
                )}
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={openVideoFullscreen}
                    className="group/play"
                    aria-label="Play video"
                  >
                    <div className="relative">
                      {/* Pulsing ring */}
                      <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-75"></div>
                      
                      {/* Play button */}
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all group-hover/play:scale-110 shadow-lg shadow-orange-500/50">
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              
              <p className="text-xs text-gray-400 text-center mt-2 px-2">Click to play video</p>
            </div>
          )}

          {contentType === "audio" && mediaUrl && (
            <div className="w-full">
              <AudioPlayer 
                audio={mediaUrl} 
                thumbnail={thumbnailUrl}
                title={title}
              />
            </div>
          )}

          {/* Description */}
          {content && (
            <p className="text-xs sm:text-sm md:text-base text-gray-300 whitespace-pre-wrap leading-relaxed break-words">{content}</p>
          )}
        </div>
      </div>

      {/* Video Fullscreen Modal */}
      {isVideoFullscreen && contentType === "video" && mediaUrl && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex items-center justify-center"
          onClick={closeVideoFullscreen}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeVideoFullscreen();
            }}
            className="fixed top-2 right-2 sm:top-4 sm:right-4 p-2 sm:p-3 bg-orange-500 hover:bg-orange-600 rounded-full transition-all z-[101] shadow-lg"
            title="Close (ESC)"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Video Container */}
          <div 
            className="w-full h-full flex items-center justify-center p-2 sm:p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={mediaUrl}
              controls
              controlsList="nodownload"
              autoPlay
              poster={thumbnailUrl}
              playsInline
              className="max-w-full max-h-full w-auto h-auto rounded-lg"
              style={{
                objectFit: 'contain',
              }}
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video Info */}
          <div className="fixed bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 md:left-8 md:right-8 bg-neutral-900/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-white font-bold text-sm sm:text-base md:text-lg mb-1 line-clamp-1">{title}</h3>
            {authorName && (
              <p className="text-gray-400 text-xs sm:text-sm">by {authorName}</p>
            )}
            <p className="text-orange-400 text-xs mt-2 hidden md:block">
              💡 Tip: Double click on video to show controls
            </p>
          </div>
        </div>
      )}
    </>
  );
};