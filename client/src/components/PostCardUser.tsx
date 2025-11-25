import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import  AudioPlayer  from "./AudioPlayer";
import { Music } from "lucide-react";

interface PostCardProps {
  title: string;
  content: string;
  createdAt: string;
  authorName?: string;
  contentType?: string;
  mediaUrl?: string;
  thumbnailUrl?: string;
  access_type?: string 
}

// export const PostCard = ({ title, content, createdAt, authorName }: PostCardProps) => {
export const PostCard = ({ 
  title, 
  content, 
  createdAt, 
  authorName,
  contentType = "text",
  mediaUrl,
  thumbnailUrl,
  access_type
  
}: PostCardProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          <div className="flex items-center gap-2">
        
            <CardDescription className="text-xs">
              {new Date(createdAt).toLocaleDateString()}
            </CardDescription>
          </div>
        </div>
        {authorName && (
          <CardDescription>by {authorName}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Media Display */}
        {contentType === "image" && mediaUrl && (
          <img
            src={mediaUrl}
            alt={title}
            className="w-full rounded-lg object-cover max-h-96"
          />
        )}

        {contentType === "video" && mediaUrl && (
          <div className="relative">
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

        {/* {contentType === "audio" && mediaUrl && (
          <div className="p-6 bg-muted/50 rounded-lg flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Music className="h-8 w-8 text-primary" />
            </div>
            <audio src={mediaUrl} controls className="w-full max-w-md">
              Your browser does not support the audio tag.
            </audio>
          </div>
        )} */}
        {contentType === "audio" && mediaUrl && (
  <AudioPlayer 
      audio={mediaUrl} 
    thumbnail={thumbnailUrl} 
  
  />
)}

        {/* Description */}
        <p className="text-sm text-muted-foreground whitespace-pre-wrap">{content}</p>
      </CardContent>
    </Card>
  );
};
