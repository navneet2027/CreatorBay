import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { PostCard } from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// Mock data - TODO: Replace with API call
const mockSubscribers = [
  { id: "1", name: "John User", username: "johnuser" },
  { id: "2", name: "Jane Supporter", username: "janesupporter" },
];

const CreatorDashboard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<any[]>([]);
  const [subscribers, setSubscribers] = useState(mockSubscribers);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const creatorName = localStorage.getItem("Name") || "Creator";

  useEffect(() => {
    // Check if creator is logged in
    const token = localStorage.getItem("userToken");
    if (!token) {
      navigate("/creator/login");
      return;
    }

    // TODO: Fetch posts
    // Example: fetch('/api/creator/posts').then(res => res.json()).then(data => setPosts(data));

    // TODO: Fetch subscribers
    // Example: fetch('/api/creator/subscribers').then(res => res.json()).then(data => setSubscribers(data));

    // Auto-refresh data every 5 seconds
    const interval = setInterval(() => {
      // TODO: Re-fetch posts and subscribers
      console.log("Refreshing dashboard data...");
    }, 5000);

    return () => clearInterval(interval);
  }, [navigate]);

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Create post API
    // Example: await fetch('/api/creator/posts', { method: 'POST', body: JSON.stringify(newPost) });

    // Add post to list instantly (optimistic update)
    const createdPost = {
      id: Date.now().toString(),
      ...newPost,
      createdAt: new Date().toISOString(),
    };
    
    setPosts([createdPost, ...posts]);
    setNewPost({ title: "", content: "" });
    setShowCreatePost(false);
    toast.success("Post created successfully!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar userType="creator" userName={creatorName} />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-3xl font-bold text-foreground mb-8">Creator Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Creator Info */}
          <Card>
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-3xl mx-auto mb-3">
                  {creatorName.charAt(0).toUpperCase()}
                </div>
                <h3 className="font-semibold text-lg">{creatorName}</h3>
                <p className="text-muted-foreground text-sm">@{creatorName.toLowerCase()}</p>
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Total Posts</p>
                <p className="text-2xl font-bold">{posts.length}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Subscribers</p>
                <p className="text-2xl font-bold">{subscribers.length}</p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full"
                onClick={() => setShowCreatePost(!showCreatePost)}
              >
                {showCreatePost ? "Cancel" : "Create New Post"}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Create Post Form */}
        {showCreatePost && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Create New Post</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreatePost} className="space-y-4">
                <div>
                  <Label htmlFor="title">Post Title</Label>
                  <Input
                    id="title"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    placeholder="Enter post title..."
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    placeholder="Write your post content..."
                    required
                    className="mt-1 min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full">Publish Post</Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Posts Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>My Posts</CardTitle>
            <CardDescription>Manage your published content</CardDescription>
          </CardHeader>
          <CardContent>
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No posts yet. Create your first post!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {posts.map((post) => (
                  <PostCard
                    key={post.id}
                    title={post.title}
                    content={post.content}
                    createdAt={post.createdAt}
                  />
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Subscribers Section */}
        <Card>
          <CardHeader>
            <CardTitle>My Subscribers</CardTitle>
            <CardDescription>People supporting your work</CardDescription>
          </CardHeader>
          <CardContent>
            {subscribers.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No subscribers yet</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Name</th>
                      <th className="text-left py-3 px-4 font-medium">Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers.map((subscriber) => (
                      <tr key={subscriber.id} className="border-b">
                        <td className="py-3 px-4">{subscriber.name}</td>
                        <td className="py-3 px-4 text-muted-foreground">
                          @{subscriber.username}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreatorDashboard;
