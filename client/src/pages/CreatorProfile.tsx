// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Navbar } from "@/components/Navbar";
// import { PostCard } from "@/components/PostCardUser";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { SubscriptionDialog } from "@/components/SubscriptionDialog";
// import { toast } from "sonner";
// import { Lock } from "lucide-react";
// import axios from "axios"
// import AudioPlayer from "@/components/AudioPlayer";
// import ProfileCard from "@/components/Postcardprofile";


// // Mock data - TODO: Replace with API call
// const mockCreatorData = {
//   name: "loading...",
//   username: "loading...",
//   bio: "loading...",
//   subscriberCount: 0,
//   profilePic : "loading..",
//   allowed : false
  
// };

// // const mockPosts = [
// //   {
// //     id: "1",
// //     title: "New Artwork Preview",
// //     content: "Check out my latest digital painting! This piece took me 20 hours to complete. I'm really proud of how it turned out.",
// //     createdAt: new Date().toISOString(),
// //   },
// //   {
// //     id: "2",
// //     title: "Behind the Scenes",
// //     content: "Here's a quick look at my creative process. I always start with rough sketches before moving to digital.",
// //     createdAt: new Date(Date.now() - 86400000).toISOString(),
// //   },
// // ];
// const CreatorProfile = () => {
//   const { username } = useParams();
//   const navigate = useNavigate();
//   const [creator, setCreator] = useState(mockCreatorData);
//   const [posts, setPosts] = useState<any[]>([]);
//   const [isSubscribed, setIsSubscribed] = useState(false);
//   const [currentPlan, setCurrentPlan] = useState<'free' | 'monthly' | 'yearly' | null>(null);
//   const [showSubscriptionDialog, setShowSubscriptionDialog] = useState(false);
//   const userName = localStorage.getItem("Name") || "User";
//     const [isloading, setIsloading] = useState(false);


  
//   const [amountq, setAmountq] = useState({ monthly: 389, yearly: 4201, discount: 10 });
  
//   useEffect(() => {
//     // Check if user is logged in
//     const token = localStorage.getItem("userToken");
//     if (!token) {
//       navigate("/login");
//       return;
//     }
//     localStorage.setItem("creatorUserName",username)
//         setIsloading(true)

//     const fetchData = async () => {
//       try {
//           const check =await axios.get(`http://localhost:5000/api/payment/check-subscription/${username}`,{
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//     })
//           setIsSubscribed(check.data.isSubscribed);
//         console.log(check.data)
//        if (check.data.isSubscribed){
//             setCurrentPlan(check.data.subscription.tim);
//             console.log(check.data.subscription)
//        }
       
//           const creatorsget = await axios.get(`http://localhost:5000/api/auth/creator/${username}`,{
//     headers: {
//       Authorization: `Bearer ${token}`
//     }})
 
//         setCreator(prev => {
//            if (JSON.stringify(prev) === JSON.stringify(creatorsget.data[0])) return prev;
//         return creatorsget.data[0];
//         })
        

       
//      axios.get(`http://localhost:5000/api/auth/creator/subscribers/${username}`,{
//     headers: {
//       Authorization: `Bearer ${token}`
//     }}).then(res => setAmountq({
//       monthly: res.data.monthly,
//       yearly: res.data.yearly,
//       discount : res.data.discount

//     })
//      )

    
    
//            const postget = await axios.get(`http://localhost:5000/api/posts/creator/${username}`,{
//     headers: {
//       Authorization: `Bearer ${token}`
//     }})

      
// setPosts(prev => {
//            if (JSON.stringify(prev) === JSON.stringify(postget.data)) return prev;
//         return postget.data;
//         })
//       } catch (error) {
        
//       }finally{
//         setIsloading(false)
//       }
//     }
  
   
  


  
//    console.log(username)
 
// fetchData()


    
//     // TODO: Fetch creator details
//     console.log(username)
//     // Example: fetch(`/api/creator/${username}`).then(res => res.json()).then(data => setCreator(data));
 

//     console.log(username)
    
//     // TODO: Fetch posts
//     // Example: fetch(`/api/creator/${username}/posts`).then(res => res.json()).then(data => setPosts(data));


//     // Auto-refresh posts every 5 seconds
//     const interval = setInterval(fetchData
//       // TODO: Re-fetch posts from backend
// , 5000);

//     return () => clearInterval(interval);
//   }, [username, navigate]);

//   // const handleSubscribe = async () => {
//   //   // TODO: Handle subscribe API
//   //   // Example: await fetch(`/api/subscribe/${username}`, { method: 'POST' });
//   //   setIsSubscribed(!isSubscribed);
//   //   if (isSubscribed) {
//   //     await fetch(`http://localhost:5000/api/auth/unsubscribe/${username}`, { method: 'POST' });
      
//   //   }else{
//   //     await fetch(`http://localhost:5000/api/auth/subscribe/${username}`, { method: 'POST' });
//   //   };
   
//   //   toast.success(isSubscribed ? "Unsubscribed successfully!" : "Subscribed successfully!");
    
//   //   // Update subscriber count instantly
//   //   setCreator(prev => ({
//   //     ...prev,
//   //     subscriberCount: prev.subscriberCount + (isSubscribed ? -1 : 1),
//   //   }));
//   // };

//    const handleSubscribe = async (plan: "free" | "monthly" | "yearly") => {
//     // TODO: Handle subscribe API with plan type
//     // Example: await fetch(`/api/subscribe/${username}`, { 
//     //   method: 'POST',
//     //   body: JSON.stringify({ plan })
//     // });
     
//     // setIsSubscribed(true);
//     // toast.success(`Successfully subscribed to ${plan} plan!`);

//     setShowSubscriptionDialog(false);
    
//     // TODO: For paid plans (monthly/yearly), integrate with Stripe
//     // 1. Create Stripe checkout session:
//     //    POST /api/stripe/create-checkout-session
//     //    Body: { creatorUsername: username, plan: plan, successUrl, cancelUrl }
//     // 2. Redirect to Stripe: window.location.href = checkoutSession.url
//     // 3. After payment, Stripe redirects to successUrl
//     // 4. On success page, verify payment and update subscription status
//       const token = localStorage.getItem("userToken");
//     if (plan === "free") {
//       // TODO: Call your backend to create free subscription
//       // POST /api/subscribe
//       // Body: { creatorUsername: username, plan: 'free' }
    
//     const response = await axios.post(`http://localhost:5000/api/payment/create-order/free`, {
//         username : username, 
//         plan: 'free' 
        

      
//     },
//   {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//     });
//     const final = await axios.post('http://localhost:5000/api/payment/free/verify', { 

//         order_id: response.data.order_id, 
//         creator_id: response.data.creator_id,
//         username : username
       
// },
// {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//     });



//     localStorage.setItem("subscriptionId",`${final.data.subscription._id}`);
  
//     console.log(final.data)

   
      
//       setIsSubscribed(true);
//       setCurrentPlan('free');
//       toast.success("Successfully subscribed to free plan!");
//     } else {
//       // For paid plans, you would redirect to Stripe here
      
      
//      // await fetch(`http://localhost:5000/api/auth/creator/${username}`).then(res => res.json()).then(data => console.log(data));

//       if (plan === "monthly"){
//         const response = await axios.post(`http://localhost:5000/api/payment/create-order`, {
//         username : username, 
//         plan: 'paid', 
//         amount:amountq.monthly?? 0,
        

      
//     },
//   {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//     });

//        const final = await axios.post('http://localhost:5000/api/payment/verify', { 

//         order_id: response.data.order_id, 
//         creator_id: response.data.creator_id,
//         amount:amountq.monthly, 
//         username : username,
//          tim : "m"
        
       
// },
// {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//     });


//       };
//       if (plan === "yearly"){
//         const response = await axios.post(`http://localhost:5000/api/payment/create-order`, {
//         username : username, 
//         plan: 'paid', 
//         amount:amountq.yearly ,
         
       

      
//     },
//   {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//     });
//     const final = await axios.post('http://localhost:5000/api/payment/verify', { 

//         order_id: response.data.order_id, 
//         creator_id: response.data.creator_id,
//         amount:amountq.yearly ,

//         username : username,
//          tim : "y"
       
// },
// {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//     });


//   }
//       //toast.success(`Redirecting to Stripe checkout for ${plan} plan...`);
      
//       // Simulate payment - in real app, this happens after Stripe redirect
//     //   setTimeout(() => {
//     //     setIsSubscribed(true);
//     //     setCurrentPlan(plan);
//     //   }, 1000);
//     // }
//     setIsSubscribed(true);
//     setCurrentPlan(plan);
// }

//     // Update subscriber count instantly
//     setCreator(prev => ({
//       ...prev,
//       subscriberCount: prev.subscriberCount + 1,
//     }));
//   };

//    const handleUnsubscribe = async () => {
//     // TODO: Handle unsubscribe API
//     // Example: await fetch(`/api/unsubscribe/${username}`, { method: 'POST' });
//      // 2 .Prevent unsubscribe if user has active paid subscription
//     if (currentPlan === 'monthly' || currentPlan === 'yearly') {
//       toast.error("Cannot unsubscribe from paid subscription. Please wait for it to expire or manage through Subscriptions page.");
//       return;
//     }
    
//     // TODO: Call your backend to cancel free subscription
//     // POST /api/unsubscribe
//     // Body: { creatorUsername: username }
//     const subsId = localStorage.getItem("subscriptionId");
//     if (subsId === ""){
//         return
//     }
//     const token = localStorage.getItem("userToken");
//     axios.delete(`http://localhost:5000/api/payment/unsubscribe/${subsId}`,{
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//     });


//     setIsSubscribed(false);
//     setCurrentPlan(null);
//     toast.success("Unsubscribed successfully!");
    
//     // Update subscriber count instantly
//     setCreator(prev => ({
//       ...prev,
//       subscriberCount: prev.subscriberCount - 1,
//     }));
//   };
//    const canAccessPaidContent = currentPlan === 'monthly' || currentPlan === 'yearly';

//   const handleUpgrade = () => {
//     setShowSubscriptionDialog(true);
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar userType="user" userName={userName} />
      
//       <div className="container mx-auto px-4 py-8 max-w-4xl">
//         {/* Creator Info */}
//         <Card className="mb-8">
//           <CardHeader>
//             <div className="flex items-center justify-between flex-wrap gap-4">
//               <div className="flex items-center gap-4">
                
//                    {/* {creator?.name? creator.name.charAt(0): "?"} */}
//                       { creator === mockCreatorData ? (
//                      <div>Loading profile...</div>
//                    ) : (
//                      <ProfileCard user={creator} />
//                    )}
//                 <div>
//                   <CardTitle className="text-2xl">{creator?.name}</CardTitle>
//                   <p className="text-muted-foreground">@{creator?.username}</p>
//                   <p className="text-sm text-muted-foreground mt-1">
//                     {creator?.subscriberCount} subscribers
//                   </p>
//                 </div>
//               </div>
//               <Button 
//                 onClick={() => isSubscribed ? handleUnsubscribe() : setShowSubscriptionDialog(true)}
//                 variant={isSubscribed ? "outline" : "default"}
//                 size="lg"
//               >
//                 {isSubscribed ? "Unsubscribe" : "Subscribe"}
//               </Button>
//             </div>
//           </CardHeader>
//           <CardContent>
//              <p className="text-foreground mb-4">{creator?.bio}</p>
//             {currentPlan && (
//               <Badge variant={currentPlan === 'free' ? 'secondary' : 'default'}>
//                 {currentPlan === 'free' ? 'Free Subscriber' : `Premium - ${currentPlan}`}
//               </Badge>
//             )}
//           </CardContent>
//         </Card>

//         {/* Posts */}
//         {/* <div className="space-y-6">
//           <h2 className="text-2xl font-bold text-foreground">Posts</h2>
//           {posts.length === 0 ? (
//             <Card>
//               <CardContent className="py-12 text-center">
//                 <p className="text-muted-foreground">No posts yet</p>
//               </CardContent>
//             </Card>
//           ) : (
//             posts.map((post) => (
//               <PostCard
//                 key={post.id}
//                 title={post.title}
//                 content={post.content}
//                 createdAt={post.createdAt}
//               />
//             ))
//           )} */}
//            <div className="space-y-4">
//           <h2 className="text-2xl font-bold mb-4">Posts</h2>
      
//           {posts.length === 0 ? (
//   <div className="text-center py-10 text-muted-foreground">
//     This creator has no posts yet.
//   </div>
// ) : (
//   posts.map((post) => {
//     const isLocked = post.access_type === "paid" && !canAccessPaidContent;
//     return (
//       <Card key={post.id} className={isLocked ? "opacity-75" : ""}>
//         <CardHeader>
//           <div className="flex items-start justify-between">
//             <div className="flex-1">
//               <CardTitle className="text-xl flex items-center gap-2">
//                 {post.title}
//                 {isLocked && (
//                   <Lock className="w-4 h-4 text-muted-foreground" />
//                 )}
//               </CardTitle>
//               <CardDescription>
//                 {new Date(post.createdAt).toLocaleDateString()}
//               </CardDescription>
//             </div>
//             <Badge
//               variant={post.access_type === "free" ? "secondary" : "default"}
//             >
//               {post.access_type === "free" ? "Free" : "Premium"}
//             </Badge>
//           </div>
//         </CardHeader>

//         <CardContent>
//           {isLocked ? (
//             <div className="text-center py-8">
//               <Lock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
//               <p className="text-muted-foreground mb-4">
//                 This content is available only for premium subscribers.
//               </p>
//               <Button onClick={handleUpgrade}>Upgrade to Premium</Button>
//             </div>
//           ) : (
//             <>
//               {post.mediaUrl && (
//                 <div className="rounded-lg overflow-hidden">
//                   {post.contentType === "image" && (
//                     <img src={post.mediaUrl} className="rounded-lg w-full" />
//                   )}

//                   {post.contentType === "video" && (
//                     <video
//                       src={post.mediaUrl}
//                       controls
//                       poster={post.thumbnailUrl}
//                       className="w-full rounded-lg"
//                     ></video>
//                   )}

//                   {post.contentType === "audio" && (
//                     <AudioPlayer
//                       audio={post.mediaUrl}
//                       thumbnail={post.thumbnailUrl}
//                     />
//                   )}

//                   {post.content && (
//                     <p className="text-foreground mb-4">{post.content}</p>
//                   )}
//                 </div>
//               )}
//             </>
//           )}
//         </CardContent>
//       </Card>
//     );
//   })
// )}
//         </div>
//          {isloading && (
//   <div 
//     className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
//   >
//     <div className="bg-white rounded-xl p-8 shadow-xl w-80 text-center">
//       <div className="loader mx-auto mb-4"></div>
//       <h2 className="text-lg font-semibold">loading…</h2>
//       <p className="text-muted-foreground text-sm mt-2">
//         Please wait, loading creator data.
//       </p>
//     </div>
//   </div>
// )}
//       </div>
//       <SubscriptionDialog
//         open={showSubscriptionDialog}
//         onOpenChange={setShowSubscriptionDialog}
//         creatorName={creator.name}
//         onSubscribe={handleSubscribe}
//         prices={amountq}
//       />
//     </div>
    
    
//   );
// };

// export default CreatorProfile;






//new 
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { PostCard } from "@/components/PostCardUser";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SubscriptionDialog } from "@/components/SubscriptionDialog";
import { toast } from "sonner";
import { Lock, Users, Star, Crown, Heart, Calendar, ArrowRight } from "lucide-react";
import axios from "axios";
import AudioPlayer from "@/components/AudioPlayer";
import ProfileCard from "@/components/Postcardprofile";

const mockCreatorData = {
  name: "loading...",
  username: "loading...",
  bio: "loading...",
  subscriberCount: 0,
  profilePic: "loading..",
  allowed: false
};

const CreatorProfile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(mockCreatorData);
  const [posts, setPosts] = useState<any[]>([]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [currentPlan, setCurrentPlan] = useState<'free' | 'monthly' | 'yearly' | null>(null);
  const [showSubscriptionDialog, setShowSubscriptionDialog] = useState(false);
  const userName = localStorage.getItem("Name") || "User";
  const [isloading, setIsloading] = useState(false);
  const [amountq, setAmountq] = useState({ monthly: 389, yearly: 4201, discount: 10 });

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      navigate("/login");
      return;
    }
    localStorage.setItem("creatorUserName", username);
    setIsloading(true);

    const fetchData = async () => {
      try {
        const check = await axios.get(`http://localhost:5000/api/payment/check-subscription/${username}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setIsSubscribed(check.data.isSubscribed);
        console.log(check.data);
        if (check.data.isSubscribed) {
          setCurrentPlan(check.data.subscription.tim);
          console.log(check.data.subscription);
        }

        const creatorsget = await axios.get(`http://localhost:5000/api/auth/creator/${username}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCreator(prev => {
          if (JSON.stringify(prev) === JSON.stringify(creatorsget.data[0])) return prev;
          return creatorsget.data[0];
        });

        axios.get(`http://localhost:5000/api/auth/creator/subscribers/${username}`, {
          headers: { Authorization: `Bearer ${token}` }
        }).then(res => setAmountq({
          monthly: res.data.monthly,
          yearly: res.data.yearly,
          discount: res.data.discount
        }));

        const postget = await axios.get(`http://localhost:5000/api/posts/creator/${username}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        setPosts(prev => {
          if (JSON.stringify(prev) === JSON.stringify(postget.data)) return prev;
          return postget.data;
        });
      } catch (error) {
        // Handle error
      } finally {
        setIsloading(false);
      }
    };

    console.log(username);
    fetchData();

    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, [username, navigate]);

  const handleSubscribe = async (plan: "free" | "monthly" | "yearly") => {
    const token = localStorage.getItem("userToken");
    setShowSubscriptionDialog(false);

    if (plan === "free") {
      const response = await axios.post(`http://localhost:5000/api/payment/create-order/free`, {
        username: username,
        plan: 'free'
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const final = await axios.post('http://localhost:5000/api/payment/free/verify', {
        order_id: response.data.order_id,
        creator_id: response.data.creator_id,
        username: username
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      localStorage.setItem("subscriptionId", `${final.data.subscription._id}`);
      console.log(final.data);

      setIsSubscribed(true);
      setCurrentPlan('free');
      toast.success("Successfully subscribed to free plan!");
    } else {
      if (plan === "monthly") {
        const response = await axios.post(`http://localhost:5000/api/payment/create-order`, {
          username: username,
          plan: 'paid',
          amount: amountq.monthly ?? 0,
        }, {
          headers: { Authorization: `Bearer ${token}` }
        });

        const final = await axios.post('http://localhost:5000/api/payment/verify', {
          order_id: response.data.order_id,
          creator_id: response.data.creator_id,
          amount: amountq.monthly,
          username: username,
          tim: "m"
        }, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }
      if (plan === "yearly") {
        const response = await axios.post(`http://localhost:5000/api/payment/create-order`, {
          username: username,
          plan: 'paid',
          amount: amountq.yearly,
        }, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const final = await axios.post('http://localhost:5000/api/payment/verify', {
          order_id: response.data.order_id,
          creator_id: response.data.creator_id,
          amount: amountq.yearly,
          username: username,
          tim: "y"
        }, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }
      setIsSubscribed(true);
      setCurrentPlan(plan);
    }

    setCreator(prev => ({
      ...prev,
      subscriberCount: prev.subscriberCount + 1,
    }));
  };

  const handleUnsubscribe = async () => {
    if (currentPlan === 'monthly' || currentPlan === 'yearly') {
      toast.error("Cannot unsubscribe from paid subscription. Please wait for it to expire or manage through Subscriptions page.");
      return;
    }

    const subsId = localStorage.getItem("subscriptionId");
    if (subsId === "") {
      return;
    }
    const token = localStorage.getItem("userToken");
    axios.delete(`http://localhost:5000/api/payment/unsubscribe/${subsId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    setIsSubscribed(false);
    setCurrentPlan(null);
    toast.success("Unsubscribed successfully!");

    setCreator(prev => ({
      ...prev,
      subscriberCount: prev.subscriberCount - 1,
    }));
  };

  const canAccessPaidContent = currentPlan === 'monthly' || currentPlan === 'yearly';

  const handleUpgrade = () => {
    setShowSubscriptionDialog(true);
  };

  const getPlanBadge = () => {
    if (currentPlan === 'free') {
      return (
        <div className="flex items-center gap-1 px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs font-medium text-gray-300">
          <Heart className="w-3 h-3" />
          Free Subscriber
        </div>
      );
    }
    if (currentPlan === 'monthly') {
      return (
        <div className="flex items-center gap-1 px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
          <Star className="w-3 h-3" />
          Premium - Monthly
        </div>
      );
    }
    if (currentPlan === 'yearly') {
      return (
        <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
          <Crown className="w-3 h-3" />
          Premium - Yearly
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar userType="user" userName={userName} />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Creator Profile Card */}
        <div className="bg-neutral-900 rounded-xl border border-gray-800 overflow-hidden mb-8">
          {/* Header Background */}
          <div className="h-40 bg-gradient-to-br from-orange-500/20 via-orange-600/10 to-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(251,146,60,0.1),transparent)]"></div>
          </div>

          {/* Profile Content */}
          <div className="p-6 -mt-16 relative">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-6">
              <div className="flex items-end gap-4">
                <div className="flex-shrink-0">
                  {creator === mockCreatorData ? (
                    <div className="text-gray-400">Loading profile...</div>
                  ) : (
                    <ProfileCard user={creator} />
                  )}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white mb-1">{creator?.name}</h1>
                  <p className="text-gray-500 mb-2">@{creator?.username}</p>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{creator?.subscriberCount} subscribers</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => isSubscribed ? handleUnsubscribe() : setShowSubscriptionDialog(true)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 ${
                  isSubscribed
                    ? 'bg-neutral-800 hover:bg-neutral-700 text-white border border-gray-700'
                    : 'bg-orange-500 hover:bg-orange-600 text-white'
                }`}
              >
                {isSubscribed ? "Unsubscribe" : "Subscribe"}
              </button>
            </div>

            <p className="text-gray-300 mb-4 leading-relaxed">{creator?.bio}</p>

            {currentPlan && getPlanBadge()}
          </div>
        </div>

        {/* Posts Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-1 h-8 bg-orange-500 rounded-full"></span>
              Posts
            </h2>
          </div>

          {posts.length === 0 ? (
            <div className="bg-neutral-900 rounded-xl border border-gray-800 p-12 text-center">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No Posts Yet</h3>
              <p className="text-gray-400">
                This creator hasn't posted any content yet.
              </p>
            </div>
          ) : (
            posts.map((post) => {
              const isLocked = post.access_type === "paid" && !canAccessPaidContent;
              return (
                <div
                  key={post.id}
                  className={`bg-neutral-900 rounded-xl border border-gray-800 overflow-hidden ${
                    isLocked ? 'opacity-75' : 'hover:border-orange-500/30'
                  } transition-all`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                          {post.title}
                          {isLocked && <Lock className="w-4 h-4 text-gray-500" />}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          {new Date(post.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        post.access_type === "free"
                          ? 'bg-gray-800 border border-gray-700 text-gray-300'
                          : 'bg-orange-500/20 border border-orange-500/30 text-orange-400'
                      }`}>
                        {post.access_type === "free" ? "Free" : "Premium"}
                      </div>
                    </div>

                    {isLocked ? (
                      <div className="text-center py-12 px-4 bg-black/30 rounded-lg border border-gray-800">
                        <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Lock className="w-8 h-8 text-gray-600" />
                        </div>
                        <p className="text-gray-400 mb-6">
                          This content is available only for premium subscribers.
                        </p>
                        <button
                          onClick={handleUpgrade}
                          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-all hover:scale-105 inline-flex items-center gap-2"
                        >
                          Upgrade to Premium
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <>
                        {post.mediaUrl && (
                          <div className="rounded-lg overflow-hidden">
                            {post.contentType === "image" && (
                              <img src={post.mediaUrl} className="rounded-lg w-full" alt={post.title} />
                            )}

                            {post.contentType === "video" && (
                              <video
                                src={post.mediaUrl}
                                controls
                                poster={post.thumbnailUrl}
                                className="w-full rounded-lg"
                              ></video>
                            )}

                            {post.contentType === "audio" && (
                              <AudioPlayer
                                audio={post.mediaUrl}
                                thumbnail={post.thumbnailUrl}
                              />
                            )}
                          </div>
                        )}
                        {post.content && (
                          <p className="text-gray-300 mt-4 leading-relaxed">{post.content}</p>
                        )}
                      </>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Loading Modal */}
      {isloading && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-neutral-900 border border-gray-800 rounded-xl p-8 shadow-2xl w-80 text-center">
            <div className="w-16 h-16 border-4 border-gray-800 border-t-orange-500 rounded-full animate-spin mx-auto mb-4"></div>
            <h2 className="text-lg font-semibold text-white mb-2">Loading...</h2>
            <p className="text-gray-400 text-sm">
              Please wait, loading creator data.
            </p>
          </div>
        </div>
      )}

      <SubscriptionDialog
        open={showSubscriptionDialog}
        onOpenChange={setShowSubscriptionDialog}
        creatorName={creator.name}
        onSubscribe={handleSubscribe}
        prices={amountq}
      />
    </div>
  );
};

export default CreatorProfile;