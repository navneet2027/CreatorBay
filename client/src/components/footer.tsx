import { Github, Linkedin, Mail, Code, Heart, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 mt-16">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* About Developer Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Profile Picture */}
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full blur opacity-40"></div>
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-orange-500/50">
                {/* Replace this src with your actual profile picture URL */}
                <img
                  src="../public/dev.png"
                  alt="Navneet"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* About Text */}
            <div className="flex-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full text-xs font-medium mb-3">
                <Code className="w-3 h-3" />
                Developer
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Built by <span className="text-orange-500">Navneet</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                Hey! 👋 I'm Navneet, a 3rd-year engineering student passionate about building 
                innovative web applications. Currently pursuing my B.Tech and creating cool projects 
                like CreatorBay to solve real-world problems.
              </p>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="text-xs text-gray-500">Made with</span>
                <Heart className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />
                <span className="text-xs text-gray-500">and</span>
                <Sparkles className="w-4 h-4 text-orange-400" />
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="grid grid-cols-2 gap-8">
            {/* Platform Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-orange-500 rounded-full"></span>
                Platform
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="/explore" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                    Explore Creators
                  </a>
                </li>
                <li>
                  <a href="/creator/signup" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                    Become a Creator
                  </a>
                </li>
                <li>
                  <a href="/subscriptions" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                    Subscriptions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-orange-500 rounded-full"></span>
                Connect
              </h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://github.com/navneet2027" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-400 text-sm transition-colors flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/navneet-barmase" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-400 text-sm transition-colors flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:navneetbarmase00@gmail.com"
                    className="text-gray-400 hover:text-orange-400 text-sm transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 px-2 py-1 rounded text-sm">Creator</span>
                <span className="ml-1 text-sm">Bay</span>
              </span>
            </div>
            
            <div className="text-gray-400 text-sm text-center">
              © {new Date().getFullYear()} CreatorBay. Built by Navneet. All rights reserved.
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white text-xs transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-700">•</span>
              <a href="#" className="text-gray-400 hover:text-white text-xs transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;