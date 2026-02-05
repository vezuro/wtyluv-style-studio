import { AnimatedSection } from "@/components/AnimatedSection";
import explore1 from "@/assets/explore-1.jpg";
import explore2 from "@/assets/explore-2.jpg";
import explore3 from "@/assets/explore-3.jpg";

const exploreItems = [
  {
    id: "01",
    image: explore1,
    title: "Our Essentials",
    alt: "Elegant accessories",
  },
  {
    id: "02",
    image: explore2,
    title: "Featured Looks",
    alt: "Fashion silhouette",
  },
  {
    id: "03",
    image: explore3,
    title: "New Arrivals",
    alt: "Delicate jewelry",
  },
];

export const ExploreSection = () => {
  return (
    <section id="explore" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Discover
          </p>
          <h2 className="section-heading text-foreground">
            Explore Our World
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {exploreItems.map((item, index) => (
            <AnimatedSection 
              key={item.id} 
              animation="fade-up" 
              delay={index * 150}
            >
              <div className="group cursor-pointer">
                <p className="text-xs tracking-[0.2em] text-muted-foreground text-center mb-4">
                  {item.id}
                </p>
                
                <div className="aspect-square overflow-hidden mb-6">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <p className="card-title text-center group-hover:opacity-70 transition-opacity">
                  <span className="subtle-underline">{item.title}</span>
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
