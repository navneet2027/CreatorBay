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
import { Check, PrinterCheck } from "lucide-react";
import { toast } from "sonner";

interface SubscriptionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  creatorName: string;
  prices  ;

  onSubscribe: (plan: "free" | "monthly" | "yearly") => void;
}

// TODO: Fetch pricing from creator settings
//const usernameofcreator = localStorage.getItem("creatorUserName")
//console.log("subdialog",usernameofcreator)
const mockPricing = {
  monthly: 389,
  yearly: 4201,
  percentage : 10 ,
};
//fetch(`http://localhost:5000/api/auth/creator/${usernameofcreator}`).then(res => res.json()).then(data => {mockPricing.monthly = data[0].monthly; mockPricing.yearly = data[0].yearly; mockPricing.percentage = data[0].percentage_discount});


export const SubscriptionDialog = ({ 
  open, 
  onOpenChange, 
  creatorName,
  prices ,

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
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          
          <DialogTitle className="text-2xl">Subscribe to {creatorName}</DialogTitle>
          <DialogDescription>
            Choose a subscription plan to support this creator
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Free Plan */}
          <Card 
            className={`cursor-pointer transition-all ${
              selectedPlan === "free" 
                ? "ring-2 ring-primary shadow-lg" 
                : "hover:shadow-md"
            }`}
            onClick={() => setSelectedPlan("free")}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Free</CardTitle>
                  <CardDescription>Access to free content</CardDescription>
                </div>
                <div className="text-3xl font-bold text-foreground">₹0</div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Access to all free posts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Community access</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Paid Plan */}
          <Card 
            className={`cursor-pointer transition-all ${
              selectedPlan === "paid" 
                ? "ring-2 ring-primary shadow-lg" 
                : "hover:shadow-md"
            }`}
            onClick={() => setSelectedPlan("paid")}
          >
            <CardHeader>
              <CardTitle>Premium</CardTitle>
              <CardDescription>Get exclusive content and benefits</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs value={paidType} onValueChange={(v) => setPaidType(v as "monthly" | "yearly")}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="yearly">
                    Yearly
                    <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                      Save {prices.discount}%
                    </span>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="monthly" className="space-y-4">
                  <div className="text-center py-4">
                    <div className="text-4xl font-bold text-foreground">
                      ₹{prices.monthly}
                      <span className="text-lg text-muted-foreground">/month</span>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="yearly" className="space-y-4">
                  <div className="text-center py-4">
                    <div className="text-4xl font-bold text-foreground">
                      ₹{prices.yearly}
                      <span className="text-lg text-muted-foreground">/year</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      ₹{(prices.yearly / 12).toFixed(2)} per month
                    </p>
                  </div>
                </TabsContent>
              </Tabs>

              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Access to all free posts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground font-medium">
                    Exclusive paid content
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Early access to new content</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Direct messaging with creator</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Button 
            onClick={handleSubscribe} 
            size="lg" 
            className="w-full"
          >
            {selectedPlan === "free" 
              ? "Subscribe for Free" 
              : `Subscribe ${paidType === "monthly" ? "Monthly" : "Yearly"}`}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
