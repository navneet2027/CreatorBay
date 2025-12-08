// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Navbar } from "@/components/Navbar";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import axios from "axios"
// import { useToast } from "@/hooks/use-toast";

// export default function CreatorSettings() {
//   const navigate = useNavigate();
//   const { toast } = useToast();
//   const creatorName = localStorage.getItem("Name");
  
//   const [pricing, setPricing] = useState({
//     monthly: 389,
//     yearly: 4201,
//     percentage_discount: 9.87
//   });

//   useEffect(() => {
//     const creatorToken = localStorage.getItem("userToken");
//     if (!creatorToken) {
//       navigate("/creator/login");
//       return;
//     }

//       const username = localStorage.getItem("userName");
//     // TODO: Fetch creator's current pricing from your backend
//     // API call: GET /api/creator/pricing
//     // Set the pricing state with the response
//     console.log(username)
    
//     fetch(`http://localhost:5000/api/auth/creator/${username}`).then(res => res.json()).then(data => setPricing(prev => ({
//       ...prev,
//       monthly: Number(data.monthly) || prev.monthly,
//   yearly: Number(data.yearly) || prev.yearly,
//   percentage_discount: Number(data.percentage_discount) || prev.percentage_discount
//     })));
//  console.log(pricing.monthly)
//     // Mock data is already set in state
//   }, [navigate]);

//   const handleSave = () => {
//     // Validate pricing ranges
//     console.log(pricing.monthly , pricing.yearly)
//     const username = localStorage.getItem("userName");
//     if (!pricing.monthly || !pricing.yearly){
//       toast({
//         title: "Invalid Price",
//         description: "Both fields must be filled within the given range",
//         variant: "destructive"
//       });
//       return;
//     }
    
//     //const username = localStorage.getItem("userName");
// //     const response = fetch(`http://localhost:5000/api/auth/creator/subscribers/${username}`);
// //      if (!pricing.monthly || !pricing.yearly){
      
// //       
// //     console.log(pricing.monthly , pricing.yearly)
// //             })
// //       }
  
// //       toast({
// //         title: "Invalid Price",
// //         description: "Both fields must be filled within the given range",
// //         variant: "destructive"
// //       });
// //       return;
// //     }
//     if (pricing.monthly < 389 || pricing.monthly > 500) {
//       toast({
//         title: "Invalid Monthly Price",
//         description: "Monthly price must be between ₹389 and ₹500",
//         variant: "destructive"
//       });
//       return;
//     }

//     if (pricing.yearly < 3874 || pricing.yearly > 5601) {
//       toast({
//         title: "Invalid Yearly Price",
//         description: "Yearly price must be between ₹3874 and ₹5601",
//         variant: "destructive"
//       });
//       return;
//     }
//      const token = localStorage.getItem("userToken");

  
//     // TODO: Save pricing to your backend
//     // API call: POST /api/creator/pricing
//     // Body: { monthly: pricing.monthly, yearly: pricing.yearly }
//     axios.post(`http://localhost:5000/api/auth/creator/pricing/${username}`,{monthly: pricing.monthly, yearly: pricing.yearly,percentage_discount : (100-((pricing.yearly*100)/(pricing.monthly*12))).toFixed(2)} , {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//     });
   
//     toast({
//       title: "Settings Saved",
//       description: "Your subscription pricing has been updated"
//     });
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar userType="creator" userName={creatorName || undefined} />
      
//       <div className="container mx-auto px-4 py-8 max-w-2xl">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-foreground mb-2">Creator Settings</h1>
//           <p className="text-muted-foreground">Customize your subscription pricing</p>
//         </div>

//         <Card>
//           <CardHeader>
//             <CardTitle>Subscription Pricing</CardTitle>
//             <CardDescription>
//               Set your monthly and yearly subscription prices within the allowed ranges
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-6">
//             <div className="space-y-2">
//               <Label htmlFor="monthly">Monthly Subscription Price</Label>
//               <div className="flex items-center gap-2">
//                 <span className="text-muted-foreground">₹</span>
//                 {/* <Input
//                   id ="monthly"
//                   type ="number"
//                   min ="389"
//                   max ="500"
//                   step ="0.01"
//                   value={pricing.monthly}
//                   onChange={(e) => setPricing({ ...pricing, monthly: parseFloat(e.target.value) || 0 })}
//                 /> */
//                 <Input
//                 id="monthly"
//                 type="number"
//                 min="389"
//                 max="500"
//                 step="0.01"
//                 value={pricing.monthly ?? ""}
//                 onChange={(e) => {
//                   const value = e.target.value;
//                   setPricing(prev => ({
//     ...prev,
//        monthly: value === "" ? undefined : Number(value)
//   }));
//   }}
// />}
//               </div>
//               <p className="text-xs text-muted-foreground">Range: ₹389 - ₹500 per month</p>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="yearly">Yearly Subscription Price</Label>
//               <div className="flex items-center gap-2">
//                 <span className="text-muted-foreground">₹</span>
//                 {/* <Input
//                   id="yearly"
//                   type="number"
//                   min="3874"
//                   max="5601"
//                   step="0.01"
//                   value={pricing.yearly}
//                   onChange={(e) => setPricing({ ...pricing, yearly: parseFloat(e.target.value) || 0 })}
//                 /> */
                
//                 <Input
//                 id="yearly"
 
//                 type="number"
//                 min="3874"
//                 max="5601"
//                 step="0.01"
//                 value={pricing.yearly ?? ""}
//                 onChange={(e) => {
//                   const value = e.target.value;
               
//                  setPricing(prev => ({
//     ...prev,
//        yearly: value === "" ? undefined : Number(value)
//   }));
//   }}
// />}
                
//               </div>
//               <p className="text-xs text-muted-foreground">Range: ₹3874 - ₹5601 per year</p>
//             </div>

//             <div className="pt-4">
//               <Button onClick={handleSave} className="w-full">
//                 Save Settings
//               </Button>
//             </div>
//           </CardContent>
//         </Card>

//         <div className="mt-6">
//           <Button
//             variant="outline"
//             onClick={() => navigate("/creator/dashboard")}
//             className="w-full"
//           >
//             Back to Dashboard
//           </Button>
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { Settings, DollarSign, TrendingUp, ArrowLeft, Save, Sparkles } from "lucide-react";

export default function CreatorSettings() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const creatorName = localStorage.getItem("Name");
  
  const [pricing, setPricing] = useState({
    monthly: 389,
    yearly: 4201,
    percentage_discount: 9.87
  });

  useEffect(() => {
    const creatorToken = localStorage.getItem("userToken");
    if (!creatorToken) {
      navigate("/creator/login");
      return;
    }

    const username = localStorage.getItem("userName");
    console.log(username);
    
    fetch(`https://creatorbay.onrender.com/api/auth/creator/${username}`)
      .then(res => res.json())
      .then(data => setPricing(prev => ({
        ...prev,
        monthly: Number(data.monthly) || prev.monthly,
        yearly: Number(data.yearly) || prev.yearly,
        percentage_discount: Number(data.percentage_discount) || prev.percentage_discount
      })));
    console.log(pricing.monthly);
  }, [navigate]);

  const handleSave = () => {
    console.log(pricing.monthly, pricing.yearly);
    const username = localStorage.getItem("userName");
    
    if (!pricing.monthly || !pricing.yearly) {
      toast({
        title: "Invalid Price",
        description: "Both fields must be filled within the given range",
        variant: "destructive"
      });
      return;
    }
    
    if (pricing.monthly < 389 || pricing.monthly > 500) {
      toast({
        title: "Invalid Monthly Price",
        description: "Monthly price must be between ₹389 and ₹500",
        variant: "destructive"
      });
      return;
    }

    if (pricing.yearly < 3874 || pricing.yearly > 5601) {
      toast({
        title: "Invalid Yearly Price",
        description: "Yearly price must be between ₹3874 and ₹5601",
        variant: "destructive"
      });
      return;
    }
    
    const token = localStorage.getItem("userToken");
    
    axios.post(
      `https://creatorbay.onrender.com/api/auth/creator/pricing/${username}`,
      {
        monthly: pricing.monthly,
        yearly: pricing.yearly,
        percentage_discount: (100 - ((pricing.yearly * 100) / (pricing.monthly * 12))).toFixed(2)
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
   
    toast({
      title: "Settings Saved",
      description: "Your subscription pricing has been updated"
    });
  };

  const calculatedDiscount = pricing.monthly && pricing.yearly 
    ? (100 - ((pricing.yearly * 100) / (pricing.monthly * 12))).toFixed(2)
    : "0";

  return (
    <div className="min-h-screen bg-black">
      <Navbar userType="creator" userName={creatorName || undefined} />
      
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
            <Settings className="w-4 h-4" />
            Settings
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Creator <span className="text-orange-500">Settings</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Customize your subscription pricing
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-neutral-900 rounded-xl border border-gray-800 overflow-hidden mb-6">
          <div className="p-6 border-b border-gray-800">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-1 h-8 bg-orange-500 rounded-full"></span>
              Subscription Pricing
            </h2>
            <p className="text-gray-400 mt-1">
              Set your monthly and yearly subscription prices within the allowed ranges
            </p>
          </div>
          
          <div className="p-6 space-y-6">
            {/* Monthly Price */}
            <div className="space-y-3">
              <Label htmlFor="monthly" className="text-white text-base font-medium flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-orange-400" />
                Monthly Subscription Price
              </Label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">₹</span>
                <Input
                  id="monthly"
                  type="number"
                  min="389"
                  max="500"
                  step="0.01"
                  value={pricing.monthly ?? ""}
                  onChange={(e) => {
                    const value = e.target.value;
                    setPricing(prev => ({
                      ...prev,
                      monthly: value === "" ? undefined : Number(value)
                    }));
                  }}
                  className="pl-10 bg-black border-gray-800 text-white placeholder-gray-500 focus:border-orange-500 text-lg font-semibold"
                />
              </div>
              <p className="text-xs text-gray-500">Range: ₹389 - ₹500 per month</p>
            </div>

            {/* Yearly Price */}
            <div className="space-y-3">
              <Label htmlFor="yearly" className="text-white text-base font-medium flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-orange-400" />
                Yearly Subscription Price
              </Label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">₹</span>
                <Input
                  id="yearly"
                  type="number"
                  min="3874"
                  max="5601"
                  step="0.01"
                  value={pricing.yearly ?? ""}
                  onChange={(e) => {
                    const value = e.target.value;
                    setPricing(prev => ({
                      ...prev,
                      yearly: value === "" ? undefined : Number(value)
                    }));
                  }}
                  className="pl-10 bg-black border-gray-800 text-white placeholder-gray-500 focus:border-orange-500 text-lg font-semibold"
                />
              </div>
              <p className="text-xs text-gray-500">Range: ₹3874 - ₹5601 per year</p>
            </div>

            {/* Discount Preview */}
            <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Yearly Discount</p>
                  <p className="text-2xl font-bold text-orange-400">{calculatedDiscount}%</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400 mb-1">Monthly equivalent</p>
                  <p className="text-lg font-semibold text-white">
                    ₹{pricing.yearly ? (pricing.yearly / 12).toFixed(2) : "0"}/mo
                  </p>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <button
              onClick={handleSave}
              className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold text-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <Save className="w-5 h-5" />
              Save Settings
            </button>
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/creator/dashboard")}
          className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl font-medium transition-all border border-gray-800 flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}