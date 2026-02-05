import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="WTYLUV Collection"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p className="text-primary-foreground/90 text-xs tracking-[0.3em] uppercase mb-4 animate-fade-in">
          Embrace Your Essence
        </p>
        <h1 className="brand-logo text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 animate-slide-up">
          WTYLUV
        </h1>
        <p className="text-primary-foreground/80 text-sm md:text-base tracking-[0.15em] uppercase mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          The Art of Being You
        </p>
        <a
          href="#explore"
          className="inline-block border border-primary-foreground/60 text-primary-foreground px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-primary-foreground/10 transition-all duration-300 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          Explore Now
        </a>
      </div>
    </section>
  );
};
