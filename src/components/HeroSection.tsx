import { Star, Sparkles, Youtube, MessageCircle } from "lucide-react";
import bannerImage from "@/assets/banner.jpg";

const tags = [
  { label: "Indonesian/English/Japanese", icon: "🌏" },
  { label: "Detective", icon: "🔍" },
  { label: "Idol", icon: "⭐" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-20 md:pt-24 overflow-hidden">
      {/* Floating Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Star 
          className="absolute top-24 left-[5%] w-6 h-6 text-kawaii-gold opacity-60 animate-float-rotate" 
          fill="currentColor"
          style={{ animationDelay: "0s" }}
        />
        <Sparkles 
          className="absolute top-32 right-[8%] w-5 h-5 text-kawaii-pink opacity-50 animate-float-rotate" 
          style={{ animationDelay: "0.5s" }}
        />
        <Star 
          className="absolute top-48 left-[12%] w-4 h-4 text-kawaii-gold opacity-40 animate-float-rotate" 
          fill="currentColor"
          style={{ animationDelay: "1s" }}
        />
        <Sparkles 
          className="absolute top-40 right-[15%] w-7 h-7 text-kawaii-pink opacity-40 animate-float-rotate" 
          style={{ animationDelay: "1.5s" }}
        />
        <Star 
          className="absolute top-64 left-[3%] w-5 h-5 text-kawaii-gold opacity-50 animate-float-rotate" 
          fill="currentColor"
          style={{ animationDelay: "2s" }}
        />
        <Sparkles 
          className="absolute top-56 right-[5%] w-4 h-4 text-kawaii-pink opacity-35 animate-float-rotate" 
          style={{ animationDelay: "0.3s" }}
        />
        <Star 
          className="absolute top-20 left-[50%] w-8 h-8 text-kawaii-gold opacity-30 animate-float-rotate" 
          fill="currentColor"
          style={{ animationDelay: "0.7s" }}
        />
        <Sparkles 
          className="absolute top-72 right-[25%] w-6 h-6 text-kawaii-pink opacity-45 animate-float-rotate" 
          style={{ animationDelay: "1.2s" }}
        />
      </div>

      {/* Full Width Banner */}
      <div className="relative w-full h-48 md:h-64 lg:h-80 overflow-hidden">
        <img
          src={bannerImage}
          alt="Althea Antonia Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
        {/* Decorative overlay shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-kawaii-pink/10 via-transparent to-kawaii-gold/10" />
      </div>

      {/* Content Below Banner */}
      <div className="container mx-auto px-4 -mt-20 md:-mt-24 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Avatar with Floating Animation */}
          <div className="relative mb-8">
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-kawaii-pink/40 to-kawaii-gold/30 blur-3xl scale-150 animate-pulse-glow" />
            
            {/* Avatar Container */}
            <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-kawaii-white shadow-kawaii-lg animate-floating ring-4 ring-kawaii-pink/20 ring-offset-4 ring-offset-background">
              {/* Avatar Image */}
              <img 
                src="https://pbs.twimg.com/profile_images/1944433618010419201/OML7xTqk_400x400.jpg" 
                alt="Althea Antonia Avatar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Stars Around Avatar */}
            <Star className="absolute -top-3 -right-3 w-7 h-7 text-kawaii-gold animate-sparkle drop-shadow-lg" fill="currentColor" />
            <Star className="absolute -bottom-2 -left-4 w-5 h-5 text-kawaii-gold animate-sparkle drop-shadow-lg" style={{ animationDelay: "0.5s" }} fill="currentColor" />
            <Sparkles className="absolute top-0 -left-6 w-5 h-5 text-kawaii-pink animate-sparkle" style={{ animationDelay: "1s" }} />
            <Sparkles className="absolute -bottom-3 right-2 w-4 h-4 text-kawaii-pink animate-sparkle" style={{ animationDelay: "1.5s" }} />
          </div>

          {/* Title with Text Gradient */}
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-7xl text-gradient-kawaii mb-4 drop-shadow-sm">
            Althea Antonia
          </h1>

          {/* Subtitle with decorative elements */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium mb-8 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-kawaii-gold" />
            <span>The Intern Detective</span>
            <Sparkles className="w-5 h-5 text-kawaii-gold" />
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {tags.map((tag) => (
              <span
                key={tag.label}
                className="tag-kawaii shadow-sm hover:shadow-kawaii transition-shadow duration-300"
              >
                <span>{tag.icon}</span>
                {tag.label}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://discord.com/invite/ENXYAbrE3Q"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-kawaii btn-cta text-primary-foreground inline-flex items-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              Join Discord
            </a>
            <a
              href="https://youtube.com/@AltheaAntonia"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-kawaii-gold btn-kawaii btn-cta text-white inline-flex items-center gap-3"
            >
              <Youtube className="w-5 h-5" />
              Subscribe
            </a>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 kawaii-pattern opacity-20 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
