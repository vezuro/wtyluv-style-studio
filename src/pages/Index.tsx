import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExploreSection } from "@/components/ExploreSection";
import { CoursesSection } from "@/components/CoursesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExploreSection />
      <CoursesSection />
      <Footer />
    </div>
  );
};

export default Index;
