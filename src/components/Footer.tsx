export const Footer = () => {
  return (
    <footer id="contact" className="py-20 md:py-28 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="brand-logo text-2xl md:text-3xl mb-8">WTYLUV</p>
          
          <p className="text-sm text-primary-foreground/70 mb-10 max-w-md mx-auto">
            Empowering women to embrace their authentic beauty and live with intention.
          </p>

          <div className="flex justify-center space-x-10 mb-12">
            <a href="#home" className="nav-link text-primary-foreground/70 hover:text-primary-foreground">
              Home
            </a>
            <a href="#about" className="nav-link text-primary-foreground/70 hover:text-primary-foreground">
              About
            </a>
            <a href="#explore" className="nav-link text-primary-foreground/70 hover:text-primary-foreground">
              Explore
            </a>
            <a href="#courses" className="nav-link text-primary-foreground/70 hover:text-primary-foreground">
              Courses
            </a>
          </div>

          <div className="w-16 h-px bg-primary-foreground/20 mx-auto mb-8" />

          <p className="text-xs text-primary-foreground/50 tracking-wider">
            © 2026 WTYLUV. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
