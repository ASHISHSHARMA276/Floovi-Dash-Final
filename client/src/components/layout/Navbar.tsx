import { Link } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import botLogo from "@assets/Floovi_Logo_1772880662772.png";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-md rounded-full group-hover:bg-primary/40 transition-colors" />
              <img src={botLogo} alt="Floovi Bot Logo" className="w-10 h-10 relative z-10" />
            </div>
            <span className="font-display font-bold text-2xl tracking-widest text-white group-hover:text-primary transition-colors">
              FLOOVI
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-gray-300 hover:text-white hover:text-shadow-sm transition-all uppercase tracking-wider">Features</a>
          <a href="#team" className="text-sm font-medium text-gray-300 hover:text-white hover:text-shadow-sm transition-all uppercase tracking-wider">Team</a>
          <a href="https://discord.com/oauth2/authorize?client_id=1462008990195126283&permissions=8&integration_type=0&scope=bot" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/80 text-white rounded-full px-6 font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(157,78,221,0.5)] transition-all hover:shadow-[0_0_25px_rgba(157,78,221,0.7)]" data-testid="button-invite">
              Add to Discord
            </Button>
          </a>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
          <Menu className="w-6 h-6" />
        </Button>
      </div>
    </nav>
  );
}