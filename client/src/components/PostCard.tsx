import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface PostCardProps {
  title: string;
  content: string;
  createdAt: string;
  authorName?: string;
}

export const PostCard = ({ title, content, createdAt, authorName }: PostCardProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription className="text-xs">
            {new Date(createdAt).toLocaleDateString()}
          </CardDescription>
        </div>
        {authorName && (
          <CardDescription>by {authorName}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground whitespace-pre-wrap">{content}</p>
      </CardContent>
    </Card>
  );
};
