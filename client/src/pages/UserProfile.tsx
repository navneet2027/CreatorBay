import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

// Mock subscribed creators - TODO: Replace with API call
const mockSubscriptions = [
  { id: "1", name: "Jane Artist", username: "janeartist" },
  { id: "2", name: "Tech Guru", username: "techguru" },
];

const UserProfile = () => {
  const navigate = useNavigate();
  const [subscriptions, setSubscriptions] = useState(mockSubscriptions);
  const userName = localStorage.getItem("userName") || "User";
  const userEmail = "user@example.com"; // TODO: Get from API

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("userToken");
    if (!token) {
      navigate("/login");
      return;
    }

    // TODO: Load user profile data
    // Example: fetch('/api/user/profile').then(res => res.json()).then(data => setUserData(data));

    // TODO: Load subscribed creators
    // Example: fetch('/api/user/subscriptions').then(res => res.json()).then(data => setSubscriptions(data));
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar userType="user" userName={userName} />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-foreground mb-8">My Profile</h1>

        {/* Profile Info */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-3xl">
                {userName.charAt(0).toUpperCase()}
              </div>
              <div>
                <h2 className="text-xl font-semibold">{userName}</h2>
                <p className="text-muted-foreground">@{userName.toLowerCase()}</p>
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="text-foreground">{userEmail}</p>
            </div>
          </CardContent>
        </Card>

        {/* Subscribed Creators */}
        <Card>
          <CardHeader>
            <CardTitle>Subscribed Creators</CardTitle>
            <CardDescription>
              Creators you're currently supporting ({subscriptions.length})
            </CardDescription>
          </CardHeader>
          <CardContent>
            {subscriptions.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">
                You haven't subscribed to any creators yet
              </p>
            ) : (
              <div className="space-y-3">
                {subscriptions.map((creator) => (
                  <div
                    key={creator.id}
                    className="flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors cursor-pointer"
                    onClick={() => navigate(`/creator/${creator.username}`)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {creator.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{creator.name}</p>
                        <p className="text-sm text-muted-foreground">@{creator.username}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;
