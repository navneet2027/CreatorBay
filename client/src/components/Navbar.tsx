import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  userType?: "user" | "creator";
  userName?: string;
}

export const Navbar = ({ userType, userName }: NavbarProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Call logout API
    localStorage.removeItem("userToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("Name");
    navigate(userType === "creator" ? "/creator/login" : "/login");
  };

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 
            className="text-xl font-bold text-primary cursor-pointer"
            onClick={() => navigate(userType === "creator" ? "/creator/dashboard" : "/explore")}
          >
            CreatorBay
            
          </h1>
        </div>
        
        <div className="flex items-center gap-3">
          {userName && (
            <>
              <span className="text-sm text-foreground hidden sm:inline">
                Welcome, {userName}
              </span>
              {userType === "user" && (
                 <>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => navigate("/subscriptions")}
                  >
                    Subscriptions
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => navigate("/profile")}
                  >
                    My Profile
                  </Button>
                </>
              )}
              {userType === "creator" && (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate("/creator/settings")}
                >
                  Settings
                </Button>
              )}
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
