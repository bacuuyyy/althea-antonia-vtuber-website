import { Heart, X, AlertTriangle, Star } from "lucide-react";

const likes = [
  { item: "Anime/Manga/Game", emoji: "🎮" },
  { item: "Leopard Gecko", emoji: "🦎" },
  { item: "Es Krim/Crepes/Kue", emoji: "🍨" },
  { item: "Mystery (Non-Horror)", emoji: "🔍" },
  { item: "Juara di Hatimu", emoji: "👑" },
];

const dislikes = [
  { item: "Ulat", emoji: "🐛" },
  { item: "Obat", emoji: "💊" },
  { item: "Tempat Gelap", emoji: "🌑" },
  { item: "Game Horror", emoji: "👻", isImportant: true },
];

const LikesDislikesSection = () => {
  return (
    <section className="py-16 md:py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-card rounded-full px-4 py-2 mb-4 shadow-sm">
            <Star className="w-5 h-5 text-kawaii-gold" fill="currentColor" />
            <span className="font-medium text-foreground">Preferences</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary">
            Likes & Dislikes
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Likes Column */}
          <div className="glass-premium rounded-3xl p-6 md:p-8 shadow-kawaii-lg card-kawaii">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
              </div>
              <h3 className="font-display font-bold text-xl text-primary">
                Things I Love 💖
              </h3>
            </div>

            <ul className="space-y-3">
              {likes.map((like) => (
                <li
                  key={like.item}
                  className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <span className="text-xl">{like.emoji}</span>
                  <span className="font-medium text-foreground">{like.item}</span>
                  <Heart className="w-4 h-4 text-primary ml-auto" fill="currentColor" />
                </li>
              ))}
            </ul>
          </div>

          {/* Dislikes Column */}
          <div className="glass-premium rounded-3xl p-6 md:p-8 shadow-kawaii-lg card-kawaii">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <X className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">
                Not My Thing 💔
              </h3>
            </div>

            <ul className="space-y-3">
              {dislikes.map((dislike) => (
                <li
                  key={dislike.item}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                    dislike.isImportant
                      ? "bg-primary/20 border-2 border-primary border-dashed"
                      : "bg-muted/50 hover:bg-muted"
                  }`}
                >
                  <span className="text-xl">{dislike.emoji}</span>
                  <span className={`font-medium ${dislike.isImportant ? "text-primary font-bold" : "text-foreground"}`}>
                    {dislike.item}
                  </span>
                  {dislike.isImportant ? (
                    <div className="ml-auto flex items-center gap-1 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-bold">
                      <AlertTriangle className="w-3 h-3" />
                      Important!
                    </div>
                  ) : (
                    <X className="w-4 h-4 text-muted-foreground ml-auto" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 kawaii-pattern opacity-20 pointer-events-none" />
    </section>
  );
};

export default LikesDislikesSection;
