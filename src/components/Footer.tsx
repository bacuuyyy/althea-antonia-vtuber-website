import { Youtube, Instagram, Twitter, Star, Heart, MessageCircle } from "lucide-react";

// TikTok icon component (not in lucide-react)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const socialLinks = [
  { name: "Discord", icon: MessageCircle, href: "https://discord.com/invite/ENXYAbrE3Q", color: "hover:text-indigo-500" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@AltheaAntonia", color: "hover:text-red-500" },
  { name: "Twitter/X", icon: Twitter, href: "https://x.com/Altheantonia", color: "hover:text-sky-500" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/altheaantonia/", color: "hover:text-pink-500" },
  { name: "TikTok", icon: TikTokIcon, href: "https://www.tiktok.com/@altheaantonia", color: "hover:text-foreground" },
];

const Footer = () => {
  return (
    <footer className="relative py-12 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-5 h-5 text-kawaii-gold" fill="currentColor" />
            <span className="font-display font-bold text-xl text-primary">
              Althea Antonia
            </span>
            <Star className="w-5 h-5 text-kawaii-gold" fill="currentColor" />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full glass flex items-center justify-center text-foreground/70 transition-all hover:scale-110 ${social.color}`}
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Copyright © 2026 LAETA. All Rights Reserved.
          </p>

          {/* Fan Website Credit */}
          <p className="text-xs text-muted-foreground/60 mt-2 flex items-center gap-1">
            Unofficial Fan Website made with <Heart className="w-3 h-3 text-primary" fill="currentColor" /> by bacuuyyy (cucuy)
          </p>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 kawaii-pattern opacity-10 pointer-events-none" />
    </footer>
  );
};

export default Footer;
