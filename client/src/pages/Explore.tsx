import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { CreatorCard } from "@/components/CreatorCard";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import axios from "axios";

const Explore = () => {
  const navigate = useNavigate();
  
  const [creators, setCreators] = useState<any[]>([]);
  const userName = localStorage.getItem("Name") || "User";
          const [isloading, setIsloading] = useState(false);
 const [searchQuery, setSearchQuery] = useState("");
 

  const filteredCreators = creators.filter((creator) =>
    creator.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && filteredCreators.length > 0) {
      navigate(`/creator/${filteredCreators[0].username}`);
    }
  };


  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("userToken");
    if (!token) {
      navigate("/login");
      return;
    }

    // TODO: Fetch creators from backend
    // Example: fetch('/api/creators').then(res => res.json()).then(data => setCreators(data));
   setIsloading(true)
    const fetchData = async () =>{
      try{
  const creatorgetall = await axios.get('http://localhost:5000/api/auth/getall')

      setCreators(prev => {
        if (JSON.stringify(prev) === JSON.stringify(creatorgetall.data)) return prev;
        return creatorgetall.data;
      })
      }catch{

      }finally{
           setIsloading(false)
      }
    
    }
    fetchData()
   
    // Auto-refresh creators list every 5 seconds
    const interval = setInterval(fetchData
      // TODO: Re-fetch creators from backend
     , 5000);

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
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creators.map((creator) => (
            <CreatorCard key={creator.id} {...creator} />
          ))} */}
           <div className="mb-6 max-w-full ">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search creators by username..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleSearchKeyPress}
              className="pl-10 border border-gray-400 rounded-xl shadow-sm focus:border-gray-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCreators.map((creator) => (
            <CreatorCard key={creator.id} {...creator} />
          ))}
          {filteredCreators.length === 0 && (
            <p className="text-muted-foreground col-span-full text-center py-8">
              No creators found matching "{searchQuery}"
            </p>
          )}
        </div>
      </div>
      {isloading && (
  <div 
    className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
  >
    <div className="bg-white rounded-xl p-8 shadow-xl w-80 text-center">
      <div className="loader mx-auto mb-4"></div>
      <h2 className="text-lg font-semibold">loading…</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Please wait, Fetching creators....
      </p>
    </div>
  </div>
)}
    </div>
    
  );
};

export default Explore;
