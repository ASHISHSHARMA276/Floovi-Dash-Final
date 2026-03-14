import { motion } from "framer-motion";
import {
  Play,
  SkipForward,
  Square,
  ListMusic,
  Repeat,
  Clock,
  Ticket,
  Clock3,
  LogIn,
  Radio,
  Music,
  Headphones,
  Shield,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Snowfall } from "@/components/Snowfall";
import galaxyBg from "@/assets/images/galaxy-bg.png";
import unstoppableImg from "@/assets/images/unstoppable.png";
import ashishImg from "@/assets/images/void.png";
import royalImg from "@/assets/images/royal.png";
import voidImg from "@/assets/images/ashish.png";

const features = [
  {
    icon: <Play className="w-6 h-6 text-[#4cc9f0]" />,
    title: "Play",
    desc: "Instantly play high-quality music from your favorite sources.",
  },
  {
    icon: <SkipForward className="w-6 h-6 text-[#4cc9f0]" />,
    title: "Skip",
    desc: "Vote to skip or forcefully skip the current playing track.",
  },
  {
    icon: <Square className="w-6 h-6 text-[#4cc9f0]" />,
    title: "Stop",
    desc: "Clear the queue and disconnect the bot seamlessly.",
  },
  {
    icon: <ListMusic className="w-6 h-6 text-[#4cc9f0]" />,
    title: "Playlist",
    desc: "Load and manage custom playlists effortlessly.",
  },
  {
    icon: <Repeat className="w-6 h-6 text-[#4cc9f0]" />,
    title: "Autoplay",
    desc: "Never run out of music. Bot plays related tracks automatically.",
  },
  {
    icon: <Clock className="w-6 h-6 text-[#4cc9f0]" />,
    title: "24/7 Mode",
    desc: "Keep the music playing round the clock without interruptions.",
  },
  {
    icon: <Ticket className="w-6 h-6 text-[#4cc9f0]" />,
    title: "Ticket",
    desc: "Create and manage support tickets for your community.",
  },
  {
    icon: <Clock3 className="w-6 h-6 text-[#4cc9f0]" />,
    title: "AFK",
    desc: "Automatically detect and manage away-from-keyboard users.",
  },
  {
    icon: <LogIn className="w-6 h-6 text-[#4cc9f0]" />,
    title: "Welcome",
    desc: "Greet new members with customizable welcome messages.",
  },
  {
    icon: <Radio className="w-6 h-6 text-[#4cc9f0]" />,
    title: "Radio",
    desc: "Stream live radio stations and curated music channels.",
  },
  {
    icon: <Music className="w-6 h-6 text-[#4cc9f0]" />,
    title: "Spotify",
    desc: "Seamlessly integrate and play tracks from Spotify.",
  },
];

const team = [
  {
    name: "Unstoppable",
    role: "Owner & Developer",
    img: unstoppableImg,
    glow: "shadow-[0_0_30px_rgba(157,78,221,0.6)]",
    border: "border-[#9d4edd]",
    bio: "Visionary creator and technical mastermind behind Floovi",
  },
  {
    name: "Ashish",
    role: "Owner & Developer",
    img: ashishImg,
    glow: "shadow-[0_0_30px_rgba(76,201,240,0.6)]",
    border: "border-[#4cc9f0]",
    bio: "Core developer with expertise in music systems",
  },
  {
    name: "Royal",
    role: "Co-Owner",
    img: royalImg,
    glow: "shadow-[0_0_30px_rgba(255,193,7,0.6)]",
    border: "border-[#ffc107]",
    bio: "Strategic leader and infrastructure specialist",
  },
  {
    name: "Void",
    role: "Main Leader",
    img: voidImg,
    glow: "shadow-[0_0_30px_rgba(0,188,212,0.6)]",
    border: "border-[#00bcd4]",
    bio: "Community leader and quality assurance expert",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden selection:bg-primary/30">
      <Snowfall />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 z-10">
        <div className="absolute inset-0 z-[-1]">
          <img
            src={galaxyBg}
            alt="Galaxy Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border border-white/10">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium tracking-wider uppercase text-gray-300">
                Trusted By 153k+ users.
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              ELEVATE YOUR <br />
              <span className="text-gradient">DISCORD EXPERIENCE</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-sans">
              Experience the ultimate music streaming experience with premium 24/7 playback,
              advanced filters, and seamless queue management all in one sleek package.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://discord.com/oauth2/authorize?client_id=1462008990195126283&permissions=8&integration_type=0&scope=bot" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-lg h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(157,78,221,0.4)] hover:shadow-[0_0_30px_rgba(157,78,221,0.6)] transition-all uppercase tracking-widest font-bold"
                  data-testid="hero-invite-button"
                >
                  Invite Floovi
                </Button>
              </a>
              <a href="https://discord.gg/KrctHHC8Zm" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-lg h-14 px-8 rounded-full glass border-white/20 text-white hover:bg-white/10 transition-all uppercase tracking-widest font-bold"
                  data-testid="hero-support-button"
                >
                  Support Server
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              PREMIUM <span className="text-[#4cc9f0]">MUSIC</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#4cc9f0] to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#4cc9f0]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(76,201,240,0.2)]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              ENHANCED <span className="text-[#f72585]">COMMANDS</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#f72585] to-transparent mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="glass-card p-8 rounded-2xl flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#f72585]/10 flex items-center justify-center shrink-0">
                  <Shield className="text-[#f72585] w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold mb-2">Autoplay & Enhance</h4>
                  <p className="text-gray-400 text-sm">
                    Make your music quality at beast & autoplay make your queue
                    never ends.{" "}
                  </p>
                </div>
              </div>
              <div className="glass-card p-8 rounded-2xl flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#f72585]/10 flex items-center justify-center shrink-0">
                  <Zap className="text-[#f72585] w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold mb-2">Filters</h4>
                  <p className="text-gray-400 text-sm">
                    Engage your community with a 10+ filters which makes you to
                    vibe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="py-24 relative z-10 bg-black/40 border-t border-white/5"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              MEET THE <span className="text-gradient">FLOOVI TEAM</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div
                  className={`relative w-40 h-40 rounded-full mb-6 p-1 border-2 ${member.border} ${member.glow} transition-all duration-500 group-hover:scale-105 overflow-hidden`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className={`absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black border ${member.border}`}
                  >
                    {member.role.split(" ")[0]}
                  </div>
                </div>
                <h3 className="text-xl font-bold tracking-wider">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-500 text-xs text-center leading-relaxed px-2">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 relative z-10 border-t border-white/10 glass bg-background/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Headphones className="w-6 h-6 text-primary" />
            <span className="font-display font-bold text-xl tracking-widest text-white">
              FLOOVI
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Floovi Bot. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
