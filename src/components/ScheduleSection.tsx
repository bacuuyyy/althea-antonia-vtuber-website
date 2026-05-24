import { Calendar, Youtube, Star, Bell } from "lucide-react";

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-16 md:py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-card rounded-full px-4 py-2 mb-4 shadow-sm">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">Weekly</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-3">
            Stream Schedule
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Tonton live streaming langsung di YouTube! 🎬
          </p>
        </div>

        {/* YouTube Embed Container */}
        <div className="max-w-5xl mx-auto">
          {/* Frame decoration around video */}
          <div className="relative p-3 md:p-4 bg-gradient-to-br from-primary via-kawaii-pink to-kawaii-gold rounded-3xl shadow-kawaii-lg">
            {/* Corner decorations */}
            <Star className="absolute -top-2 -left-2 w-6 h-6 text-kawaii-gold animate-sparkle" fill="currentColor" />
            <Star className="absolute -top-2 -right-2 w-5 h-5 text-kawaii-gold animate-sparkle" style={{ animationDelay: "0.3s" }} fill="currentColor" />
            <Star className="absolute -bottom-2 -left-2 w-5 h-5 text-kawaii-gold animate-sparkle" style={{ animationDelay: "0.6s" }} fill="currentColor" />
            <Star className="absolute -bottom-2 -right-2 w-6 h-6 text-kawaii-gold animate-sparkle" style={{ animationDelay: "0.9s" }} fill="currentColor" />
            
            {/* Inner frame */}
            <div className="bg-white rounded-2xl p-2 md:p-3 shadow-inner">
              {/* Video container with 16:9 aspect ratio */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/4B3dlNCN6jo"
                  title="Althea Antonia Live Stream"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Call to action below video */}
          <div className="mt-8 text-center">
            <a
              href="https://youtube.com/@AltheaAntonia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-kawaii text-primary-foreground px-8 py-4 text-lg animate-bounce-soft"
            >
              <Bell className="w-5 h-5" />
              Subscribe & Turn On Notifications
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Stars */}
      <Star className="absolute top-20 left-10 w-6 h-6 text-kawaii-gold/30 animate-sparkle hidden lg:block" fill="currentColor" />
      <Star className="absolute bottom-32 right-16 w-8 h-8 text-kawaii-gold/20 animate-sparkle hidden lg:block" style={{ animationDelay: "0.7s" }} fill="currentColor" />
    </section>
  );
};

export default ScheduleSection;