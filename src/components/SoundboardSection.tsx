import { useState } from "react";
import { Volume2, VolumeX, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const SoundboardSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = async () => {
    if (isPlaying) return; // Prevent spam clicks
    
    setIsPlaying(true);
    
    try {
      // Use a reliable public audio source (notification sound)
      const audio = new Audio('/antontenonet.mp3');
      audio.volume = 0.7;
      
      audio.onended = () => setIsPlaying(false);
      audio.onerror = () => {
        console.error('Audio failed to load');
        setIsPlaying(false);
      };
      
      await audio.play();
    } catch (error) {
      console.error('Failed to play audio:', error);
      setIsPlaying(false);
    }
  };

  return (
    <section className="py-16 md:py-24 relative bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-card rounded-full px-4 py-2 mb-4 shadow-sm">
            <Volume2 className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">Interactive</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-3">
            Soundboard
          </h2>
          <p className="text-muted-foreground">
            Klik tombol untuk dengar suara Althea! 🔊
          </p>
        </div>

        {/* Soundboard Button */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Glow Effect */}
            <div className={`absolute inset-0 rounded-full bg-primary/30 blur-2xl scale-125 transition-all duration-300 ${isPlaying ? "opacity-100 scale-150" : "opacity-50"}`} />
            
            {/* Main Button */}
            <button
              onClick={handleClick}
              className={`relative w-32 h-32 md:w-40 md:h-40 rounded-full btn-kawaii flex flex-col items-center justify-center gap-2 text-primary-foreground transition-all duration-200 ${
                isPlaying ? "scale-95" : "hover:scale-105"
              }`}
            >
              <Sparkles className={`w-8 h-8 md:w-10 md:h-10 ${isPlaying ? "animate-spin" : ""}`} />
              <span className="font-display font-bold text-lg md:text-xl">Klik!</span>
            </button>

            {/* Decorative Stars */}
            <Star 
              className="absolute -top-4 -right-4 w-6 h-6 text-kawaii-gold animate-sparkle" 
              fill="currentColor"
            />
            <Star 
              className="absolute -bottom-2 -left-6 w-5 h-5 text-kawaii-gold animate-sparkle" 
              fill="currentColor"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        </div>

        {/* Status Text */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          {isPlaying ? "🔊 Playing..." : "🎵 Siap diputar!"}
        </p>
      </div>
    </section>
  );
};

export default SoundboardSection;
