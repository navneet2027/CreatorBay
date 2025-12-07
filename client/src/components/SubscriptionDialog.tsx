// import { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Check, PrinterCheck } from "lucide-react";
// import { toast } from "sonner";

// interface SubscriptionDialogProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   creatorName: string;
//   prices  ;

//   onSubscribe: (plan: "free" | "monthly" | "yearly") => void;
// }

// // TODO: Fetch pricing from creator settings
// //const usernameofcreator = localStorage.getItem("creatorUserName")
// //console.log("subdialog",usernameofcreator)
// const mockPricing = {
//   monthly: 389,
//   yearly: 4201,
//   percentage : 10 ,
// };
// //fetch(`http://localhost:5000/api/auth/creator/${usernameofcreator}`).then(res => res.json()).then(data => {mockPricing.monthly = data[0].monthly; mockPricing.yearly = data[0].yearly; mockPricing.percentage = data[0].percentage_discount});


// export const SubscriptionDialog = ({ 
//   open, 
//   onOpenChange, 
//   creatorName,
//   prices ,

//   onSubscribe 
// }: SubscriptionDialogProps) => {
  
//   const [selectedPlan, setSelectedPlan] = useState<"free" | "paid">("free");
//   const [paidType, setPaidType] = useState<"monthly" | "yearly">("monthly");
  
   
//   const handleSubscribe = () => {
//     if (selectedPlan === "free") {
//       onSubscribe("free");
//     } else {
//       onSubscribe(paidType);
//     }
//     onOpenChange(false);
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
//         <DialogHeader>
          
//           <DialogTitle className="text-2xl">Subscribe to {creatorName}</DialogTitle>
//           <DialogDescription>
//             Choose a subscription plan to support this creator
//           </DialogDescription>
//         </DialogHeader>

//         <div className="space-y-6 mt-4">
//           {/* Free Plan */}
//           <Card 
//             className={`cursor-pointer transition-all ${
//               selectedPlan === "free" 
//                 ? "ring-2 ring-primary shadow-lg" 
//                 : "hover:shadow-md"
//             }`}
//             onClick={() => setSelectedPlan("free")}
//           >
//             <CardHeader>
//               <div className="flex items-center justify-between">
//                 <div>
//                   <CardTitle>Free</CardTitle>
//                   <CardDescription>Access to free content</CardDescription>
//                 </div>
//                 <div className="text-3xl font-bold text-foreground">₹0</div>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <ul className="space-y-2">
//                 <li className="flex items-center gap-2">
//                   <Check className="w-5 h-5 text-primary" />
//                   <span className="text-muted-foreground">Access to all free posts</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Check className="w-5 h-5 text-primary" />
//                   <span className="text-muted-foreground">Community access</span>
//                 </li>
//               </ul>
//             </CardContent>
//           </Card>

//           {/* Paid Plan */}
//           <Card 
//             className={`cursor-pointer transition-all ${
//               selectedPlan === "paid" 
//                 ? "ring-2 ring-primary shadow-lg" 
//                 : "hover:shadow-md"
//             }`}
//             onClick={() => setSelectedPlan("paid")}
//           >
//             <CardHeader>
//               <CardTitle>Premium</CardTitle>
//               <CardDescription>Get exclusive content and benefits</CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <Tabs value={paidType} onValueChange={(v) => setPaidType(v as "monthly" | "yearly")}>
//                 <TabsList className="grid w-full grid-cols-2">
//                   <TabsTrigger value="monthly">Monthly</TabsTrigger>
//                   <TabsTrigger value="yearly">
//                     Yearly
//                     <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
//                       Save {prices.discount}%
//                     </span>
//                   </TabsTrigger>
//                 </TabsList>
//                 <TabsContent value="monthly" className="space-y-4">
//                   <div className="text-center py-4">
//                     <div className="text-4xl font-bold text-foreground">
//                       ₹{prices.monthly}
//                       <span className="text-lg text-muted-foreground">/month</span>
//                     </div>
//                   </div>
//                 </TabsContent>
//                 <TabsContent value="yearly" className="space-y-4">
//                   <div className="text-center py-4">
//                     <div className="text-4xl font-bold text-foreground">
//                       ₹{prices.yearly}
//                       <span className="text-lg text-muted-foreground">/year</span>
//                     </div>
//                     <p className="text-sm text-muted-foreground mt-2">
//                       ₹{(prices.yearly / 12).toFixed(2)} per month
//                     </p>
//                   </div>
//                 </TabsContent>
//               </Tabs>

//               <ul className="space-y-2">
//                 <li className="flex items-center gap-2">
//                   <Check className="w-5 h-5 text-primary" />
//                   <span className="text-muted-foreground">Access to all free posts</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Check className="w-5 h-5 text-primary" />
//                   <span className="text-muted-foreground font-medium">
//                     Exclusive paid content
//                   </span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Check className="w-5 h-5 text-primary" />
//                   <span className="text-muted-foreground">Early access to new content</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Check className="w-5 h-5 text-primary" />
//                   <span className="text-muted-foreground">Direct messaging with creator</span>
//                 </li>
//               </ul>
//             </CardContent>
//           </Card>

//           <Button 
//             onClick={handleSubscribe} 
//             size="lg" 
//             className="w-full"
//           >
//             {selectedPlan === "free" 
//               ? "Subscribe for Free" 
//               : `Subscribe ${paidType === "monthly" ? "Monthly" : "Yearly"}`}
//           </Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };




import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Heart, Star, Crown, Sparkles } from "lucide-react";

interface SubscriptionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  creatorName: string;
  prices;
  onSubscribe: (plan: "free" | "monthly" | "yearly") => void;
}

export const SubscriptionDialog = ({ 
  open, 
  onOpenChange, 
  creatorName,
  prices,
  onSubscribe 
}: SubscriptionDialogProps) => {
  const [selectedPlan, setSelectedPlan] = useState<"free" | "paid">("free");
  const [paidType, setPaidType] = useState<"monthly" | "yearly">("monthly");

  const handleSubscribe = () => {
    if (selectedPlan === "free") {
      onSubscribe("free");
    } else {
      onSubscribe(paidType);
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-neutral-900 border-gray-800 text-white">
        <DialogHeader>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-2 w-fit">
            <Sparkles className="w-4 h-4" />
            Choose Your Plan
          </div>
          <DialogTitle className="text-3xl text-white">
            Subscribe to <span className="text-orange-500">{creatorName}</span>
          </DialogTitle>
          <DialogDescription className="text-gray-400 text-base">
            Choose a subscription plan to support this creator and unlock exclusive content
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-6">
          {/* Free Plan */}
          <div
            className={`cursor-pointer transition-all rounded-xl border ${
              selectedPlan === "free" 
                ? "border-orange-500 bg-orange-500/5 shadow-lg shadow-orange-500/20" 
                : "border-gray-800 bg-black/30 hover:border-gray-700"
            }`}
            onClick={() => setSelectedPlan("free")}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-800 rounded-lg">
                    <Heart className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Free</h3>
                    <p className="text-sm text-gray-400">Access to free content</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-white">₹0</div>
                  <p className="text-sm text-gray-500">forever</p>
                </div>
              </div>
              
              <div className="space-y-3 pt-4 border-t border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-orange-400" />
                  </div>
                  <span className="text-gray-300">Access to all free posts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-orange-400" />
                  </div>
                  <span className="text-gray-300">Community access</span>
                </div>
              </div>
            </div>
          </div>

          {/* Paid Plan */}
          <div
            className={`cursor-pointer transition-all rounded-xl border ${
              selectedPlan === "paid" 
                ? "border-orange-500 bg-orange-500/5 shadow-lg shadow-orange-500/20" 
                : "border-gray-800 bg-black/30 hover:border-gray-700"
            }`}
            onClick={() => setSelectedPlan("paid")}
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Premium</h3>
                  <p className="text-sm text-gray-400">Get exclusive content and benefits</p>
                </div>
              </div>

              {/* Tabs for Monthly/Yearly */}
              <Tabs 
                value={paidType} 
                onValueChange={(v) => setPaidType(v as "monthly" | "yearly")}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2 bg-black/50 border border-gray-800 p-1">
                  <TabsTrigger 
                    value="monthly"
                    className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-400"
                  >
                    <Star className="w-4 h-4 mr-2" />
                    Monthly
                  </TabsTrigger>
                  <TabsTrigger 
                    value="yearly"
                    className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-400"
                  >
                    <Crown className="w-4 h-4 mr-2" />
                    Yearly
                    <span className="ml-2 text-xs bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full border border-orange-500/30">
                      Save {prices.discount}%
                    </span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="monthly" className="mt-4">
                  <div className="text-center py-6 bg-black/30 rounded-lg border border-gray-800">
                    <div className="text-5xl font-bold text-white mb-2">
                      ₹{prices.monthly}
                    </div>
                    <p className="text-gray-400">per month</p>
                  </div>
                </TabsContent>

                <TabsContent value="yearly" className="mt-4">
                  <div className="text-center py-6 bg-black/30 rounded-lg border border-gray-800">
                    <div className="text-5xl font-bold text-white mb-2">
                      ₹{prices.yearly}
                    </div>
                    <p className="text-gray-400 mb-2">per year</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full">
                      <span className="text-sm text-orange-400 font-medium">
                        ₹{(prices.yearly / 12).toFixed(2)} per month
                      </span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Benefits List */}
              <div className="space-y-3 mt-6 pt-6 border-t border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-orange-400" />
                  </div>
                  <span className="text-gray-300">Access to all free posts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white font-semibold">Exclusive paid content</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-orange-400" />
                  </div>
                  <span className="text-gray-300">Early access to new content</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-orange-400" />
                  </div>
                  <span className="text-gray-300">Direct messaging with creator</span>
                </div>
              </div>
            </div>
          </div>

          {/* Subscribe Button */}
          <button
            onClick={handleSubscribe}
            className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold text-lg transition-all hover:scale-[1.02] shadow-lg shadow-orange-500/20"
          >
            {selectedPlan === "free" 
              ? "Subscribe for Free" 
              : `Subscribe ${paidType === "monthly" ? "Monthly" : "Yearly"} - ₹${paidType === "monthly" ? prices.monthly : prices.yearly}`}
          </button>

          <p className="text-center text-sm text-gray-500">
            You can cancel anytime from your subscriptions page
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
