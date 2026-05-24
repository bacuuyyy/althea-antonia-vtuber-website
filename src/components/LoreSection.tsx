import { BookOpen, Star } from "lucide-react";

const LoreSection = () => {
  return (
    <section id="lore" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-2 mb-4">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="font-medium text-secondary-foreground">Story</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary">
              The Lore
            </h2>
          </div>

          {/* Lore Card */}
          <div className="glass-premium rounded-3xl p-8 md:p-12 shadow-kawaii-lg relative overflow-hidden card-kawaii">
            {/* Decorative Elements */}
            <Star className="absolute top-6 right-6 w-8 h-8 text-kawaii-gold/40 animate-sparkle" fill="currentColor" />
            <Star className="absolute bottom-8 left-8 w-6 h-6 text-kawaii-gold/30 animate-sparkle" style={{ animationDelay: "1s" }} fill="currentColor" />
            
            {/* Quote Decoration */}
            <div className="absolute -top-4 -left-2 text-8xl text-primary/10 font-display">"</div>
            
            {/* Lore Text - Clean readable font */}
            <blockquote className="relative z-10">
              <p className="font-display text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/90 tracking-wide">
                Althea, a half-Japanese half-Indonesian girl born with the sacrifice of a loving mother. 
                Her mother was a writer, leaving her written mystery novel books for her legacy. 
                Captivated by the world of true crime, she holds no grudge to her family, 
                yet her heart is granted to those outside of her bloodline.
              </p>
            </blockquote>

            {/* Decorative Line */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <span className="text-2xl">📚</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 kawaii-pattern opacity-20 pointer-events-none" />
    </section>
  );
};

export default LoreSection;