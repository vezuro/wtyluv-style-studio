import { AnimatedSection } from "@/components/AnimatedSection";

export const Footer = () => {
  return (
    <footer id="contact" className="py-20 md:py-28 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-up">
            <p className="brand-logo text-2xl md:text-3xl mb-8">WTYLUV</p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-sm text-primary-foreground/70 mb-10 max-w-md mx-auto">
              Empowering women to embrace their authentic beauty and live with intention.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="flex justify-center flex-wrap gap-6 md:gap-10 mb-12">
              <a href="#home" className="nav-link text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Home
              </a>
              <a href="#about" className="nav-link text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                About
              </a>
              <a href="#explore" className="nav-link text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Explore
              </a>
              <a href="#courses" className="nav-link text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Courses
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={300}>
            <div className="w-16 h-px bg-primary-foreground/20 mx-auto mb-8" />
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <p className="text-xs text-primary-foreground/50 tracking-wider">
              © 2026 WTYLUV. All rights reserved.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </footer>
  );
};
