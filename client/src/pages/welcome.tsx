import { Users, Crown, Sparkles, Heart, TrendingUp, Star, ArrowRight, Zap } from "lucide-react";
import Footer from "@/components/footer";
const WelcomePage = () => {
  const handleUserLogin = () => {
    // Navigate to user login
    window.location.href = "/login";
  };

  const handleCreatorLogin = () => {
    // Navigate to creator login
    window.location.href = "/creator/login";
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-1 rounded-lg">Creator</span>
              <span>Bay</span>
            </h1>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Welcome to CreatorBay
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
              Support Your Favorite
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Creators
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-200">
              Join the platform where creators share exclusive content and fans support their work
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in-up delay-400">
              {/* User Login */}
              <button
                onClick={handleUserLogin}
                className="group relative w-full sm:w-auto"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-xl transition-all flex items-center justify-center gap-3 min-w-[240px]">
                  <Users className="w-6 h-6 text-white" />
                  <div className="text-left">
                    <div className="text-white font-bold text-lg">Join as Fan</div>
                    <div className="text-orange-100 text-xs">Support creators you love</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              {/* Creator Login */}
              <button
                onClick={handleCreatorLogin}
                className="group relative w-full sm:w-auto"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative px-8 py-4 bg-neutral-900 hover:bg-neutral-800 border-2 border-orange-500 rounded-xl transition-all flex items-center justify-center gap-3 min-w-[240px]">
                  <Crown className="w-6 h-6 text-orange-400" />
                  <div className="text-left">
                    <div className="text-white font-bold text-lg">I'm a Creator</div>
                    <div className="text-gray-400 text-xs">Start earning from your content</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-orange-400 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose <span className="text-orange-500">CreatorBay</span>?
              </h2>
              <p className="text-gray-400 text-lg">
                The best platform for creators and their supporters
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="group bg-neutral-900 border border-gray-800 rounded-xl p-6 hover:border-orange-500/50 transition-all">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Support Creators</h3>
                <p className="text-gray-400">
                  Subscribe to your favorite creators and get access to exclusive content
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group bg-neutral-900 border border-gray-800 rounded-xl p-6 hover:border-orange-500/50 transition-all">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Exclusive Content</h3>
                <p className="text-gray-400">
                  Access premium posts, videos, audio, and more from your favorite creators
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group bg-neutral-900 border border-gray-800 rounded-xl p-6 hover:border-orange-500/50 transition-all">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Flexible Pricing</h3>
                <p className="text-gray-400">
                  Choose between free, monthly, or yearly subscriptions that fit your budget
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">1000+</div>
                  <div className="text-gray-400">Active Creators</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">10K+</div>
                  <div className="text-gray-400">Happy Subscribers</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">50K+</div>
                  <div className="text-gray-400">Posts Created</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="container mx-auto px-6 py-16 pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Join thousands of creators and fans on CreatorBay today
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleUserLogin}
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold transition-all hover:scale-105 flex items-center gap-2"
              >
                Get Started as Fan
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={handleCreatorLogin}
                className="px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl font-bold transition-all hover:scale-105 border border-gray-800 flex items-center gap-2"
              >
                Start Creating
                <Crown className="w-5 h-5 text-orange-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
      <Footer></Footer>
    </div>
  );
};

export default WelcomePage;