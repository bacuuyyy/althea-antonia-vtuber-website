import { Calendar, Ruler, Scale, Sparkles, Users, Star } from "lucide-react";

const profileData = [
  { icon: Calendar, label: "Birthday", value: "Nov 5 (Scorpio)", emoji: "🦂" },
  { icon: Ruler, label: "Height", value: "149cm (4'10\")", emoji: "📏" },
  { icon: Scale, label: "Weight", value: "Classified", emoji: "🤫" },
  { icon: Sparkles, label: "Debut Date", value: "July 26, 2025", emoji: "🎉" },
  { icon: Users, label: "Fans Name", value: "SaksiAnton", emoji: "💝" },
];

const ProfileSection = () => {
  return (
    <section id="profile" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-2 mb-4">
            <Star className="w-5 h-5 text-kawaii-gold" fill="currentColor" />
            <span className="font-medium text-secondary-foreground">About Me</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary">
            Profile
          </h2>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
          {profileData.map((item, index) => (
            <div
              key={item.label}
              className="glass-premium rounded-3xl p-5 shadow-kawaii card-kawaii group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid grid-cols-[auto_1fr] gap-3 items-center">
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                
                {/* Content */}
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground font-medium">
                    {item.label}
                  </p>
                  <p className="font-display font-semibold text-sm text-foreground whitespace-nowrap">
                    {item.value} {item.emoji}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
