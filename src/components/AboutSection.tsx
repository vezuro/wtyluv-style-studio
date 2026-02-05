export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 bg-card">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
          Our Story
        </p>
        
        <h2 className="section-heading text-foreground mb-10">
          Where There Is a Woman,<br />
          <span className="italic">There Is Magic</span>
        </h2>
        
        <div className="w-16 h-px bg-border mx-auto mb-10" />
        
        <p className="editorial-text text-muted-foreground mb-8 text-balance">
          WTYLUV was born from a simple truth — every woman carries within her 
          an extraordinary light. We exist to nurture that light, to celebrate 
          the quiet power of femininity, and to create spaces where beauty, 
          wisdom, and self-love intertwine.
        </p>
        
        <p className="editorial-text text-muted-foreground text-balance">
          Our journey is one of gentle transformation, where elegance meets 
          authenticity, and where every woman is invited to embrace her most 
          radiant self.
        </p>
      </div>
    </section>
  );
};
