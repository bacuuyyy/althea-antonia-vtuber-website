import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LoreSection from "@/components/LoreSection";
import ProfileSection from "@/components/ProfileSection";
import LikesDislikesSection from "@/components/LikesDislikesSection";
import GoalsContentSection from "@/components/GoalsContentSection";
import ScheduleSection from "@/components/ScheduleSection";
import GallerySection from "@/components/GallerySection";
import SoundboardSection from "@/components/SoundboardSection";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import FloatingDecorations from "@/components/FloatingDecorations";
import StickyDecorations from "@/components/StickyDecorations";

const Index = () => {
  // Scroll animation effect
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".scroll-fade");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Global floating decorations - 50+ icons */}
      <FloatingDecorations variant="full" />
      
      {/* Sticky mascot and vertical text */}
      <StickyDecorations />
      
      <Navbar />
      
      <main>
        <HeroSection />
        
        <WaveDivider variant="curve" className="-mt-4 md:-mt-8" />
        
        <div className="scroll-fade">
          <LoreSection />
        </div>
        
        <WaveDivider variant="wave" flip className="-mb-1" />
        
        <div className="scroll-fade">
          <ProfileSection />
        </div>
        
        <WaveDivider variant="curve" className="-mt-1 -mb-1" />
        
        <div className="scroll-fade">
          <LikesDislikesSection />
        </div>
        
        <WaveDivider variant="wave" flip className="-mb-1" />
        
        <div className="scroll-fade">
          <GoalsContentSection />
        </div>
        
        <WaveDivider variant="curve" className="-mt-1 -mb-1" />
        
        <div className="scroll-fade">
          <ScheduleSection />
        </div>
        
        <WaveDivider variant="wave" flip className="-mb-1" />
        
        <div className="scroll-fade">
          <GallerySection />
        </div>
        
        <WaveDivider variant="curve" className="-mt-1 -mb-1" />
        
        <div className="scroll-fade">
          <SoundboardSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
