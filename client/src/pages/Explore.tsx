import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { CreatorCard } from "@/components/CreatorCard";
import { useNavigate } from "react-router-dom";

// Mock data - TODO: Replace with API call
const mockCreators = [
  {
    id: "1",
    name: "Jane Artist",
    username: "janeartist",
    bio: "Digital artist creating beautiful illustrations and animations. Join my journey!",
    subscriberCount: 1234,
  },
  {
    id: "2",
    name: "Tech Guru",
    username: "techguru",
    bio: "Sharing tech tutorials, reviews, and insights. Support my content creation!",
    subscriberCount: 5678,
  },
  {
    id: "3",
    name: "Music Maker",
    username: "musicmaker",
    bio: "Independent musician crafting original songs. Help me make more music!",
    subscriberCount: 890,
  },
  {
    id: "4",
    name: "Story Writer",
    username: "storywriter",
    bio: "Writing engaging stories and novels. Be part of my creative process!",
    subscriberCount: 2345,
  },
];

const Explore = () => {
  const navigate = useNavigate();
  const [creators, setCreators] = useState(mockCreators);
  const userName = localStorage.getItem("Name") || "User";

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("userToken");
    if (!token) {
      navigate("/login");
      return;
    }

    // TODO: Fetch creators from backend
    // Example: fetch('/api/creators').then(res => res.json()).then(data => setCreators(data));
    
    // Auto-refresh creators list every 5 seconds
    const interval = setInterval(() => {
      // TODO: Re-fetch creators from backend
      console.log("Refreshing creators list...");
    }, 5000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar userType="user" userName={userName} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Explore Creators</h1>
          <p className="text-muted-foreground">
            Discover amazing creators and support their work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creators.map((creator) => (
            <CreatorCard key={creator.id} {...creator} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
