import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from "axios"
import { Badge } from "@/components/ui/badge";
import ProfileCard from "@/components/Postcardprofile";

interface Subscription {
  id: string;
  creatorName: string;
  creatorUsername: string;
  plan: 'free' | 'monthly' | 'yearly';
  price: number;
  renewalDate: string;
  status: 'active' | 'cancelled' | 'expired';
  profilePic: string;
    allowed : false

}

export default function SubscriptionManagement() {
  const navigate = useNavigate();
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const userUserName = localStorage.getItem("userName");
            const [isloading, setIsloading] = useState(false);



  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (!userToken) {
      navigate("/login");
      return;
    }
    setIsloading(true)
  try{
    const subs =axios.get('http://localhost:5000/api/payment/subscriptions', {
    headers: {
      Authorization: `Bearer ${userToken}`
    }
    })
    subs.then(res => {setSubscriptions(res.data)
      console.log(res.data)


      
    })
  }catch{

  }finally{

    setIsloading(false)
  }


    // TODO: Fetch user subscriptions from your backend
    // API call: GET /api/user/subscriptions
    // Response should include: subscription details, renewal dates, payment info

 
    // Mock data for demonstration
    
    
  }, [navigate]);

  const handleManageBilling = (subscriptionId: string) => {
    // TODO: Implement Stripe billing portal integration
    // API call: POST /api/stripe/create-billing-portal
    // Redirect user to Stripe billing portal
    console.log("Manage billing for subscription:", subscriptionId);
  };

  const handleCancelSubscription = (subscription: Subscription) => {
    if (subscription.plan !== 'free') {
      alert("You cannot cancel a paid subscription. Please wait for it to expire or manage through billing portal.");
      return;
    }

    // TODO: Cancel subscription via your backend
    // API call: POST /api/subscriptions/cancel
    // Update local state after successful cancellation
    console.log("Cancel subscription:", subscription.id);
  };

  const getPlanBadge = (plan: string) => {
    if (plan === 'free') return <Badge variant="secondary">Free</Badge>;
    if (plan === 'monthly') return <Badge>Monthly</Badge>;
    return <Badge className="bg-accent">Yearly</Badge>;
  };

  return (
    
    <div className="min-h-screen bg-background">
      <Navbar userType="user" userName={userUserName || undefined} />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">My Subscriptions</h1>
          <p className="text-muted-foreground">Manage your active subscriptions and billing</p>
        </div>
        

        <div className="space-y-4">
            {isloading && (
  <div 
    className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
  >
    <div className="bg-white rounded-xl p-8 shadow-xl w-80 text-center">
      <div className="loader mx-auto mb-4"></div>
      <h2 className="text-lg font-semibold">loading…</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Please wait, Fetching subscriptions....
      </p>
    </div>
  </div>
)}
          {subscriptions.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground mb-4">You don't have any active subscriptions</p>
                <Button onClick={() => navigate("/explore")}>Explore Creators</Button>
              </CardContent>
            </Card>
          ) : (
            subscriptions?.map((subscription) => (
              <Card key={subscription.id}>
                
                <CardHeader>
                  
                  <div className="flex items-start justify-between">

                
                    <div>
                           
                                 {!subscription? (
                                <div>Loading profile...</div>
                              ) : (
                                <ProfileCard user={subscription} />
                              )}
                              
                      <CardTitle className="text-xl mb-1">{subscription.creatorName}</CardTitle>
                      <CardDescription>@{subscription.creatorUsername}</CardDescription>
                    </div>
                    {getPlanBadge(subscription.plan)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Price</p>
                        <p className="text-lg font-semibold text-foreground">
                          {subscription.price === 0 ? 'Free' : `₹${subscription.price}/${subscription.plan === 'monthly' ? 'month' : 'year'}`}
                        </p>
                      </div>
                      {subscription.renewalDate !== '-' && (
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Next Renewal</p>
                          <p className="text-lg font-semibold text-foreground">{subscription.renewalDate}</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button
                        variant="outline"
                        onClick={() => navigate(`/creator/${subscription.creatorUsername}`)}
                      >
                        View Profile
                      </Button>
                      {subscription.plan !== 'free' && (
                        <Button
                          variant="outline"
                          onClick={() => handleManageBilling(subscription.id)}
                        >
                          Manage Billing
                        </Button>
                      )}
                      {subscription.plan === 'free' && (
                        <Button
                          variant="outline"
                          onClick={() => handleCancelSubscription(subscription)}
                        >
                          Unsubscribe
                        </Button>
                        
                      )}
                        
    
    
                    </div>
                  </div>
                </CardContent>
              </Card>
              
            ))
          )}
        </div>
      </div>
    </div>
  );
}
