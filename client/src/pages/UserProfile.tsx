import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { set } from "date-fns";
import ProfileCard from "@/components/Postcardprofile";
// Mock subscribed creators - TODO: Replace with API call

const UserProfile = () => {
  const navigate = useNavigate();
  const [subscriptions, setSubscriptions] = useState([]);
  const userName = localStorage.getItem("userName") || "User";
  const [userEmail,setemail] = useState(); // TODO: Get from API
            const [isloading, setIsloading] = useState(false);
             const [profilePic, setProfilepic] = useState("");
          


  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("userToken");
    if (!token) {
      navigate("/login");
      return;
    }

    // TODO: Load user profile data
    // Example: fetch('/api/user/profile').then(res => res.json()).then(data => setUserData(data));
    setIsloading(true)
   try {
  
     const s =axios.get('http://localhost:5000/api/auth/me', {
    headers: {
      Authorization: `Bearer ${token}`
    }
    })
    s.then(res => {
      setemail(res.data.email) 
    setProfilepic(res.data.profilePic)  });
  

    // TODO: Load subscribed creators
    // Example: fetch('/api/user/subscriptions').then(res => res.json()).then(data => setSubscriptions(data));
    const subs =axios.get('http://localhost:5000/api/payment/subscriptions/profile', {
    headers: {
      Authorization: `Bearer ${token}`
    }
    })
    subs.then(res => setSubscriptions(res.data))
   } catch (error) {
    
   }finally{
        setIsloading(false)
   }
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
              <div>
                    {profilePic === "" ? (
                  <div>Loading profile...</div>
                ) : (
                  <ProfileCard user={{profilePic,  allowed : true
}} />
                )}
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
   {isloading && (
  <div 
    className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
  >
    <div className="bg-white rounded-xl p-8 shadow-xl w-80 text-center">
      <div className="loader mx-auto mb-4"></div>
      <h2 className="text-lg font-semibold">loading…</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Please wait,  getting your subscriptions....
      </p>
    </div>
  </div>
)}
         
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
                    onClick={() => navigate(`/creator/${creator?.username}`)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                     
                         {!creator ? (
                          <div>Loading profile...</div>
                        ) : (
                          <ProfileCard user={{...creator,small:true}} />
                        )}
                     
                      </div>
                      <div>
                        <p className="font-medium">{creator?.name}</p>
                        <p className="text-sm text-muted-foreground">@{creator?.username}</p>
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
