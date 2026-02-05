import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="WTYLUV Collection"
          className="w-full h-full object-cover animate-[fade-in_1.5s_ease-out]"
        />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p 
          className="text-primary-foreground/90 text-xs tracking-[0.3em] uppercase mb-4 opacity-0 animate-[fade-in_1s_ease-out_0.3s_forwards]"
        >
          Embrace Your Essence
        </p>
        <h1 
          className="brand-logo text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 opacity-0 animate-[slide-up_1s_ease-out_0.5s_forwards]"
        >
          WTYLUV
        </h1>
        <p 
          className="text-primary-foreground/80 text-sm md:text-base tracking-[0.15em] uppercase mb-10 opacity-0 animate-[fade-in_1s_ease-out_0.8s_forwards]"
        >
          The Art of Being You
        </p>
        <a
          href="#explore"
          className="inline-block border border-primary-foreground/60 text-primary-foreground px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-primary-foreground/10 transition-all duration-300 opacity-0 animate-[fade-in_1s_ease-out_1s_forwards] hover:scale-105"
        >
          Explore Now
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-[fade-in_1s_ease-out_1.5s_forwards]">
        <div className="w-px h-16 bg-gradient-to-b from-primary-foreground/60 to-transparent animate-[pulse_2s_ease-in-out_infinite]" />
      </div>
    </section>
  );
};
