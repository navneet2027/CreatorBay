// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Navbar } from "@/components/Navbar";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import axios from "axios"
// import { Badge } from "@/components/ui/badge";
// import ProfileCard from "@/components/Postcardprofile";

// interface Subscription {
//   id: string;
//   creatorName: string;
//   creatorUsername: string;
//   plan: 'free' | 'monthly' | 'yearly';
//   price: number;
//   renewalDate: string;
//   status: 'active' | 'cancelled' | 'expired';
//   profilePic: string;
//     allowed : false

// }

// export default function SubscriptionManagement() {
//   const navigate = useNavigate();
//   const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
//   const userUserName = localStorage.getItem("userName");
//             const [isloading, setIsloading] = useState(false);



//   useEffect(() => {
//     const userToken = localStorage.getItem("userToken");
//     if (!userToken) {
//       navigate("/login");
//       return;
//     }
//     setIsloading(true)
//   try{
//     const subs =axios.get('http://localhost:5000/api/payment/subscriptions', {
//     headers: {
//       Authorization: `Bearer ${userToken}`
//     }
//     })
//     subs.then(res => {setSubscriptions(res.data)
//       console.log(res.data)


      
//     })
//   }catch{

//   }finally{

//     setIsloading(false)
//   }


//     // TODO: Fetch user subscriptions from your backend
//     // API call: GET /api/user/subscriptions
//     // Response should include: subscription details, renewal dates, payment info

 
//     // Mock data for demonstration
    
    
//   }, [navigate]);

//   const handleManageBilling = (subscriptionId: string) => {
//     // TODO: Implement Stripe billing portal integration
//     // API call: POST /api/stripe/create-billing-portal
//     // Redirect user to Stripe billing portal
//     console.log("Manage billing for subscription:", subscriptionId);
//   };

//   const handleCancelSubscription = (subscription: Subscription) => {
//     if (subscription.plan !== 'free') {
//       alert("You cannot cancel a paid subscription. Please wait for it to expire or manage through billing portal.");
//       return;
//     }

//     // TODO: Cancel subscription via your backend
//     // API call: POST /api/subscriptions/cancel
//     // Update local state after successful cancellation
//     console.log("Cancel subscription:", subscription.id);
//   };

//   const getPlanBadge = (plan: string) => {
//     if (plan === 'free') return <Badge variant="secondary">Free</Badge>;
//     if (plan === 'monthly') return <Badge>Monthly</Badge>;
//     return <Badge className="bg-accent">Yearly</Badge>;
//   };

//   return (
    
//     <div className="min-h-screen bg-background">
//       <Navbar userType="user" userName={userUserName || undefined} />
      
//       <div className="container mx-auto px-4 py-8 max-w-4xl">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-foreground mb-2">My Subscriptions</h1>
//           <p className="text-muted-foreground">Manage your active subscriptions and billing</p>
//         </div>
        

//         <div className="space-y-4">
//             {isloading && (
//   <div 
//     className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
//   >
//     <div className="bg-white rounded-xl p-8 shadow-xl w-80 text-center">
//       <div className="loader mx-auto mb-4"></div>
//       <h2 className="text-lg font-semibold">loading…</h2>
//       <p className="text-muted-foreground text-sm mt-2">
//         Please wait, Fetching subscriptions....
//       </p>
//     </div>
//   </div>
// )}
//           {subscriptions.length === 0 ? (
//             <Card>
//               <CardContent className="py-12 text-center">
//                 <p className="text-muted-foreground mb-4">You don't have any active subscriptions</p>
//                 <Button onClick={() => navigate("/explore")}>Explore Creators</Button>
//               </CardContent>
//             </Card>
//           ) : (
//             subscriptions?.map((subscription) => (
//               <Card key={subscription.id}>
                
//                 <CardHeader>
                  
//                   <div className="flex items-start justify-between">

                
//                     <div>
                           
//                                  {!subscription? (
//                                 <div>Loading profile...</div>
//                               ) : (
//                                 <ProfileCard user={subscription} />
//                               )}
                              
//                       <CardTitle className="text-xl mb-1">{subscription.creatorName}</CardTitle>
//                       <CardDescription>@{subscription.creatorUsername}</CardDescription>
//                     </div>
//                     {getPlanBadge(subscription.plan)}
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     <div className="flex justify-between items-center">
//                       <div>
//                         <p className="text-sm text-muted-foreground">Price</p>
//                         <p className="text-lg font-semibold text-foreground">
//                           {subscription.price === 0 ? 'Free' : `₹${subscription.price}/${subscription.plan === 'monthly' ? 'month' : 'year'}`}
//                         </p>
//                       </div>
//                       {subscription.renewalDate !== '-' && (
//                         <div className="text-right">
//                           <p className="text-sm text-muted-foreground">Next Renewal</p>
//                           <p className="text-lg font-semibold text-foreground">{subscription.renewalDate}</p>
//                         </div>
//                       )}
//                     </div>
                    
//                     <div className="flex gap-2 pt-2">
//                       <Button
//                         variant="outline"
//                         onClick={() => navigate(`/creator/${subscription.creatorUsername}`)}
//                       >
//                         View Profile
//                       </Button>
//                       {subscription.plan !== 'free' && (
//                         <Button
//                           variant="outline"
//                           onClick={() => handleManageBilling(subscription.id)}
//                         >
//                           Manage Billing
//                         </Button>
//                       )}
//                       {subscription.plan === 'free' && (
//                         <Button
//                           variant="outline"
//                           onClick={() => handleCancelSubscription(subscription)}
//                         >
//                           Unsubscribe
//                         </Button>
                        
//                       )}
                        
    
    
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
              
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Badge } from "@/components/ui/badge";
import ProfileCard from "@/components/Postcardprofile";
import { Calendar, CreditCard, ExternalLink, Heart, Star, Crown } from "lucide-react";

interface Subscription {
  id: string;
  creatorName: string;
  creatorUsername: string;
  plan: 'free' | 'monthly' | 'yearly';
  price: number;
  renewalDate: string;
  status: 'active' | 'cancelled' | 'expired';
  profilePic: string;
  allowed: false;
}

export default function SubscriptionManagement() {
  const navigate = useNavigate();
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const userUserName = localStorage.getItem("userName");
  const userNAme = localStorage.getItem("Name");
  const [isloading, setIsloading] = useState(false);
  const role = localStorage.getItem("role")

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (!userToken) {
      navigate("/login");
      return;
    }
    setIsloading(true);
    try {
      const subs = axios.get('https://creatorbay.onrender.com/api/payment/subscriptions', {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      });
      subs.then(res => {
        setSubscriptions(res.data);
        console.log(res.data);
      });
    } catch {
      // Handle error
    } finally {
      setIsloading(false);
    }
  }, [navigate]);

  const handleManageBilling = (subscriptionId: string) => {
    console.log("Manage billing for subscription:", subscriptionId);
  };

  const handleCancelSubscription = (subscription: Subscription) => {
    if (subscription.plan !== 'free') {
      alert("You cannot cancel a paid subscription. Please wait for it to expire or manage through billing portal.");
      return;
    }
    console.log("Cancel subscription:", subscription.id);
  };

  const getPlanBadge = (plan: string) => {
    if (plan === 'free') {
      return (
        <div className="flex items-center gap-1 px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs font-medium text-gray-300">
          <Heart className="w-3 h-3" />
          Free
        </div>
      );
    }
    if (plan === 'monthly') {
      return (
        <div className="flex items-center gap-1 px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
          <Star className="w-3 h-3" />
          Monthly
        </div>
      );
    }
    return (
      <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
        <Crown className="w-3 h-3" />
        Yearly
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar userType={role} userName={userNAme || undefined} />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Section */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
            <Heart className="w-4 h-4 fill-orange-400" />
            Your Active Subscriptions
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            My <span className="text-orange-500">Subscriptions</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Manage your active subscriptions and billing
          </p>
        </div>

        {/* Stats Overview */}
        {subscriptions.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-neutral-900 rounded-xl p-6 border border-gray-800">
              <div className="text-3xl font-bold text-orange-500 mb-1">{subscriptions.length}</div>
              <div className="text-gray-400 text-sm">Active Subscriptions</div>
            </div>
            <div className="bg-neutral-900 rounded-xl p-6 border border-gray-800">
              <div className="text-3xl font-bold text-orange-500 mb-1">
                ₹{subscriptions.reduce((acc, sub) => acc + sub.price, 0)}
              </div>
              <div className="text-gray-400 text-sm">Total Monthly Spend</div>
            </div>
            <div className="bg-neutral-900 rounded-xl p-6 border border-gray-800">
              <div className="text-3xl font-bold text-orange-500 mb-1">
                {subscriptions.filter(s => s.plan !== 'free').length}
              </div>
              <div className="text-gray-400 text-sm">Paid Subscriptions</div>
            </div>
          </div>
        )}

        {/* Subscriptions List */}
        <div className="space-y-4">
          {subscriptions.length === 0 && !isloading ? (
            <div className="bg-neutral-900 rounded-xl border border-gray-800 p-12 text-center">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No Active Subscriptions</h3>
              <p className="text-gray-400 mb-6">
                You don't have any active subscriptions yet
              </p>
              <button
                onClick={() => navigate("/explore")}
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-all hover:scale-105"
              >
                Explore Creators
              </button>
            </div>
          ) : (
            subscriptions?.map((subscription) => (
              <div
                key={subscription.id}
                className="bg-neutral-900 rounded-xl border border-gray-800 overflow-hidden hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        {!subscription ? (
                          <div className="text-gray-400">Loading profile...</div>
                        ) : (
                          <ProfileCard user={subscription} />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {subscription.creatorName}
                        </h3>
                        <p className="text-gray-500 text-sm">@{subscription.creatorUsername}</p>
                      </div>
                    </div>
                    {getPlanBadge(subscription.plan)}
                  </div>

                  {/* Pricing & Renewal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-black/30 rounded-lg border border-gray-800">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-500/20 rounded-lg">
                        <CreditCard className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Price</p>
                        <p className="text-lg font-bold text-white">
                          {subscription.price === 0 
                            ? 'Free' 
                            : `₹${subscription.price}/${subscription.plan === 'monthly' ? 'mo' : 'yr'}`}
                        </p>
                      </div>
                    </div>
                    
                    {subscription.renewalDate !== '-' && (
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-500/20 rounded-lg">
                          <Calendar className="w-5 h-5 text-orange-400" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Next Renewal</p>
                          <p className="text-lg font-bold text-white">{subscription.renewalDate}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => navigate(`/creator/${subscription.creatorUsername}`)}
                      className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg font-medium transition-all text-sm border border-gray-700"
                    >
                      View Profile
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    
                    {subscription.plan !== 'free' && (
                      <button
                        onClick={() => handleManageBilling(subscription.id)}
                        className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg font-medium transition-all text-sm border border-gray-700"
                      >
                        Manage Billing
                      </button>
                    )}
                    
                    {subscription.plan === 'free' && (
                      <button
                        onClick={() => handleCancelSubscription(subscription)}
                        className="px-4 py-2 bg-neutral-800 hover:bg-red-900/50 text-white hover:text-red-400 rounded-lg font-medium transition-all text-sm border border-gray-700 hover:border-red-500/50"
                      >
                        Unsubscribe
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
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
              Please wait, Fetching subscriptions....
            </p>
          </div>
        </div>
      )}
    </div>
  );
}