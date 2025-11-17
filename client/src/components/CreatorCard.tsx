import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface CreatorCardProps {
  id: string;
  name: string;
  username: string;
  bio: string;
  subscriberCount?: number;
}

export const CreatorCard = ({ id, name, username, bio, subscriberCount }: CreatorCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
            {name.charAt(0)}
          </div>
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <CardDescription>@{username}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{bio}</p>
        {subscriberCount !== undefined && (
          <p className="text-xs text-muted-foreground mb-3">
            {subscriberCount} subscribers
          </p>
        )}
        <Button 
          onClick={() => navigate(`/creator/${username}`)}
          className="w-full"
        >
          View Profile
        </Button>
      </CardContent>
    </Card>
  );
};
