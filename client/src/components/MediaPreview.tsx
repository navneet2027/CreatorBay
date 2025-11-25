import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MediaPreviewProps {
  file: File | null;
  contentType: string;
  onRemove: () => void;
}

export const MediaPreview = ({ file, contentType, onRemove }: MediaPreviewProps) => {
  if (!file) return null;

  const previewUrl = URL.createObjectURL(file);

  return (
    <div className="relative mt-4 rounded-lg border border-border overflow-hidden">
      <Button
        type="button"
        variant="destructive"
        size="icon"
        className="absolute top-2 right-2 z-10"
        onClick={onRemove}
      >
        <X className="h-4 w-4" />
      </Button>

      {contentType === "image" && (
        <img
          src={previewUrl}
          alt="Preview"
          className="w-full h-64 object-cover"
        />
      )}

      {contentType === "video" && (
        <video
          src={previewUrl}
          controls
          className="w-full h-64"
        />
      )}

      {contentType === "audio" && (
        <div className="p-8 bg-muted/50 flex flex-col items-center justify-center">
          <audio src={previewUrl} controls className="w-full max-w-md" />
          <p className="mt-4 text-sm text-muted-foreground">{file.name}</p>
        </div>
      )}
    </div>
  );
};
