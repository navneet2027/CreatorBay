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


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AudioPlayer from "./AudioPlayer";
import { Music, Edit, Trash2, Crown, Heart } from "lucide-react";
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
  return (
    <div className="bg-neutral-900 rounded-xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all">
      {/* Header */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-white">{title}</h3>
              {access_type === 'free' ? (
                <div className="flex items-center gap-1 px-2 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs font-medium text-gray-300">
                  <Heart className="w-3 h-3" />
                  Free
                </div>
              ) : (
                <div className="flex items-center gap-1 px-2 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                  <Crown className="w-3 h-3" />
                  Premium
                </div>
              )}
            </div>
            {authorName && (
              <p className="text-sm text-gray-500">by {authorName}</p>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">
              {new Date(createdAt).toLocaleDateString()}
            </span>
            {onEdit && (
              <button
                onClick={onEdit}
                className="p-2 bg-neutral-800 hover:bg-neutral-700 text-gray-400 hover:text-white rounded-lg transition-all border border-gray-700"
                title="Edit post"
              >
                <Edit className="w-4 h-4" />
              </button>
            )}
            {onDelete && (
              <button
                onClick={onDelete}
                className="p-2 bg-neutral-800 hover:bg-red-900/50 text-gray-400 hover:text-red-400 rounded-lg transition-all border border-gray-700 hover:border-red-500/50"
                title="Delete post"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Media Display */}
        {contentType === "image" && mediaUrl && (
          <div className="rounded-lg overflow-hidden">
            <img
              src={mediaUrl}
              alt={title}
              className="w-full object-cover max-h-96"
            />
          </div>
        )}

        {contentType === "video" && mediaUrl && (
          <div className="relative rounded-lg overflow-hidden">
            <video
              src={mediaUrl}
              controls
              poster={thumbnailUrl}
              className="w-full rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {contentType === "audio" && mediaUrl && (
          <AudioPlayer 
            audio={mediaUrl} 
            thumbnail={thumbnailUrl} 
          />
        )}

        {/* Description */}
        {content && (
          <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">{content}</p>
        )}
      </div>
    </div>
  );
};