import { Image as ImageIcon, Play, Star } from "lucide-react";

const galleryItems = [
  { 
    id: 1, 
    label: "Debut", 
    type: "video",
    src: "https://www.youtube.com/embed/qW_yI2J31ME"
  },
  { 
    id: 2, 
    label: "Character Sheet", 
    type: "image",
    src: "https://pbs.twimg.com/media/G5Zc5rCbgAAp1Yd.jpg"
  },
  { 
    id: 3, 
    label: "Gaming", 
    type: "video",
    src: "https://www.youtube.com/embed/UvHi3Y_IQcc"
  },
  { 
    id: 4, 
    label: "Collab", 
    type: "video",
    src: "https://www.youtube.com/embed/NQvE2tbTLzE"
  },
  { 
    id: 5, 
    label: "Competitive", 
    type: "video",
    src: "https://www.youtube.com/embed/c3t9fgRgIPM"
  },
  { 
    id: 6, 
    label: "Free Talk", 
    type: "video",
    src: "https://www.youtube.com/embed/nw0eaSb1-UU"
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-2 mb-4">
            <ImageIcon className="w-5 h-5 text-primary" />
            <span className="font-medium text-secondary-foreground">Showcase</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-3">
            Gallery
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Kumpulan momen spesial dan konten! 💕
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="glass-premium rounded-3xl overflow-hidden shadow-kawaii-lg card-kawaii group"
            >
              {/* Label Header */}
              <div className="px-4 py-3 bg-gradient-to-r from-primary/10 to-kawaii-gold/10 border-b border-border/50">
                <div className="flex items-center gap-2">
                  {item.type === "video" ? (
                    <Play className="w-4 h-4 text-primary" fill="currentColor" />
                  ) : (
                    <ImageIcon className="w-4 h-4 text-primary" />
                  )}
                  <span className="font-display font-semibold text-foreground">{item.label}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="aspect-video">
                {item.type === "video" ? (
                  <iframe
                    className="w-full h-full"
                    src={item.src}
                    title={item.label}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          📸 Tonton lebih banyak konten di YouTube!
        </p>
      </div>

      {/* Decorative Stars */}
      <Star className="absolute top-16 right-20 w-5 h-5 text-kawaii-gold/40 animate-sparkle hidden lg:block" fill="currentColor" />
    </section>
  );
};

export default GallerySection;
