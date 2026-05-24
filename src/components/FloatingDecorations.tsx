import { Star, Search, BookOpen, Heart, Sparkles } from "lucide-react";
import { useMemo } from "react";

interface FloatingDecorationsProps {
  variant?: "hero" | "full" | "sides";
}

const FloatingDecorations = ({ variant = "full" }: FloatingDecorationsProps) => {
  // Generate 50+ random floating icons
  const floatingIcons = useMemo(() => {
    const icons = [Star, Search, BookOpen, Heart, Sparkles];
    const colors = ["text-kawaii-gold", "text-kawaii-pink", "text-primary"];
    const sizes = ["w-4 h-4", "w-5 h-5", "w-6 h-6", "w-7 h-7", "w-8 h-8"];
    
    const decorations = [];
    
    for (let i = 0; i < 80; i++) {
      const Icon = icons[Math.floor(Math.random() * icons.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      const top = `${Math.random() * 95}%`;
      // Spread across entire width: sides (0-20%, 80-100%) and center (20-80%)
      const left = `${Math.random() * 100}%`;
      const delay = `${Math.random() * 5}s`;
      const duration = `${3 + Math.random() * 4}s`;
      // Lower opacity for center icons to not distract from content
      const opacity = 8 + Math.floor(Math.random() * 12);
      
      decorations.push({
        Icon,
        color,
        size,
        top,
        left,
        delay,
        duration,
        opacity,
        id: i,
      });
    }
    
    return decorations;
  }, []);

  // Hero area decorations (existing)
  const heroDecorations = [
    { type: "star", size: 6, top: "10%", left: "5%", delay: "0s", duration: "4s" },
    { type: "star", size: 5, top: "15%", right: "8%", delay: "0.5s", duration: "3.5s" },
    { type: "star", size: 4, top: "25%", left: "12%", delay: "1s", duration: "4.5s" },
    { type: "star", size: 7, top: "20%", right: "15%", delay: "1.5s", duration: "3s" },
    { type: "star", size: 5, top: "35%", left: "3%", delay: "2s", duration: "5s" },
    { type: "star", size: 4, top: "40%", right: "5%", delay: "0.3s", duration: "4s" },
  ];

  const showHero = variant === "hero";
  const showFull = variant === "full";

  return (
    <>
      {/* Hero area floating stars */}
      {showHero && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {heroDecorations.map((dec, index) => {
            const positionStyle: React.CSSProperties = {
              position: "absolute",
              top: dec.top,
              ...(dec.left ? { left: dec.left } : {}),
              ...(dec.right ? { right: dec.right } : {}),
              animationDelay: dec.delay,
              animationDuration: dec.duration,
            };

            return (
              <Star
                key={`hero-${index}`}
                className={`w-${dec.size} h-${dec.size} text-kawaii-gold opacity-40 animate-float-rotate`}
                style={positionStyle}
                fill="currentColor"
              />
            );
          })}
        </div>
      )}

      {/* Full page floating decorations - 50+ icons scattered everywhere */}
      {showFull && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {floatingIcons.map((dec) => {
            const positionStyle: React.CSSProperties = {
              position: "absolute",
              top: dec.top,
              left: dec.left,
              animationDelay: dec.delay,
              animationDuration: dec.duration,
            };

            return (
              <dec.Icon
                key={`float-${dec.id}`}
                className={`${dec.size} ${dec.color} animate-floating`}
                style={{
                  ...positionStyle,
                  opacity: dec.opacity / 100,
                }}
                fill="currentColor"
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default FloatingDecorations;
