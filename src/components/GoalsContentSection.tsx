import { Target, Video, Star, CheckCircle2, Mic, Gamepad2, MessageCircle } from "lucide-react";

const goals = [
  { text: "Mencapai 10K Subs sebelum 1 tahun", icon: "🎯" },
  { text: "Bisa Nyanyi Enak", icon: "🎤" },
  { text: "Antarctica Hard Clear", icon: "🎮" },
  { text: "Ketemu Velkoz di Dunia Nyata", icon: "🦑" },
  { text: "Collab dengan semua Vtuber", icon: "🤝" },
];

const contentTypes = [
  { name: "Free Talk", icon: MessageCircle, color: "bg-primary" },
  { name: "Gaming", icon: Gamepad2, color: "bg-kawaii-gold" },
  { name: "Cover Song", icon: Mic, color: "bg-primary" },
];

const GoalsContentSection = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Goals Card */}
          <div className="glass-premium rounded-3xl p-6 md:p-8 shadow-kawaii-lg card-kawaii">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-kawaii-gold flex items-center justify-center">
                <Target className="w-6 h-6 text-kawaii-gold-light" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-foreground">
                  My Goals 🌟
                </h3>
                <p className="text-sm text-muted-foreground">Dreams to achieve!</p>
              </div>
            </div>

            <ul className="space-y-4">
              {goals.map((goal, index) => (
                <li
                  key={goal.text}
                  className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                    {goal.icon}
                  </div>
                  <span className="font-medium text-foreground flex-1">{goal.text}</span>
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground/30" />
                </li>
              ))}
            </ul>
          </div>

          {/* Content Card */}
          <div className="glass-premium rounded-3xl p-6 md:p-8 shadow-kawaii-lg card-kawaii">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Video className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-foreground">
                  Content 🎬
                </h3>
                <p className="text-sm text-muted-foreground">What I stream!</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {contentTypes.map((content, index) => (
                <div
                  key={content.name}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 hover:bg-secondary transition-all hover:scale-[1.02] cursor-default"
                >
                  <div className={`w-14 h-14 rounded-xl ${content.color} flex items-center justify-center shadow-md`}>
                    <content.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg text-foreground">
                      {content.name}
                    </h4>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(3)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-kawaii-gold" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsContentSection;
