import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { PostCard } from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

// Mock data - TODO: Replace with API call
const mockCreatorData = {
  name: "Jane Artist",
  username: "janeartist",
  bio: "Digital artist creating beautiful illustrations and animations. Join my journey and get exclusive content!",
  subscriberCount: 1234,
};

const mockPosts = [
  {
    id: "1",
    title: "New Artwork Preview",
    content: "Check out my latest digital painting! This piece took me 20 hours to complete. I'm really proud of how it turned out.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Behind the Scenes",
    content: "Here's a quick look at my creative process. I always start with rough sketches before moving to digital.",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
];

const CreatorProfile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(mockCreatorData);
  const [posts, setPosts] = useState(mockPosts);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const userName = localStorage.getItem("userName") || "User";

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("userToken");
    if (!token) {
      navigate("/login");
      return;
    }

    // TODO: Fetch creator details
    // Example: fetch(`/api/creator/${username}`).then(res => res.json()).then(data => setCreator(data));

    // TODO: Fetch posts
    // Example: fetch(`/api/creator/${username}/posts`).then(res => res.json()).then(data => setPosts(data));

    // Auto-refresh posts every 5 seconds
    const interval = setInterval(() => {
      // TODO: Re-fetch posts from backend
      console.log("Refreshing posts...");
    }, 5000);

    return () => clearInterval(interval);
  }, [username, navigate]);

  const handleSubscribe = async () => {
    // TODO: Handle subscribe API
    // Example: await fetch(`/api/subscribe/${username}`, { method: 'POST' });
    
    setIsSubscribed(!isSubscribed);
    toast.success(isSubscribed ? "Unsubscribed successfully!" : "Subscribed successfully!");
    
    // Update subscriber count instantly
    setCreator(prev => ({
      ...prev,
      subscriberCount: prev.subscriberCount + (isSubscribed ? -1 : 1),
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar userType="user" userName={userName} />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Creator Info */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-3xl">
                  {creator.name.charAt(0)}
                </div>
                <div>
                  <CardTitle className="text-2xl">{creator.name}</CardTitle>
                  <p className="text-muted-foreground">@{creator.username}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {creator.subscriberCount} subscribers
                  </p>
                </div>
              </div>
              <Button 
                onClick={handleSubscribe}
                variant={isSubscribed ? "outline" : "default"}
                size="lg"
              >
                {isSubscribed ? "Unsubscribe" : "Subscribe"}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{creator.bio}</p>
          </CardContent>
        </Card>

        {/* Posts */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Posts</h2>
          {posts.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">No posts yet</p>
              </CardContent>
            </Card>
          ) : (
            posts.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                content={post.content}
                createdAt={post.createdAt}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;
