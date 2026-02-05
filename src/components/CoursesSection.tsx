import { Link } from "react-router-dom";
import course1 from "@/assets/course-1.jpg";
import course2 from "@/assets/course-2.jpg";
import course3 from "@/assets/course-3.jpg";

const courses = [
  {
    image: course1,
    title: "The Art of Self-Love",
    description: "A transformative journey into embracing your authentic beauty and nurturing your inner radiance.",
    alt: "Self-love course",
  },
  {
    image: course2,
    title: "Mindful Living",
    description: "Learn the gentle art of intentional living, from morning rituals to evening reflections.",
    alt: "Mindful living course",
  },
  {
    image: course3,
    title: "Feminine Leadership",
    description: "Step into your power with grace. Lead with intuition, empathy, and unwavering strength.",
    alt: "Leadership course",
  },
];

export const CoursesSection = () => {
  return (
    <section id="courses" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Learn & Grow
          </p>
          <h2 className="section-heading text-foreground">
            Professional Courses
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-card group cursor-pointer transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={course.image}
                  alt={course.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="p-8">
                <h3 className="font-serif text-xl md:text-2xl font-light text-foreground mb-4">
                  {course.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {course.description}
                </p>
                
                <button className="text-xs tracking-[0.2em] uppercase text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-colors">
                  Explore Course
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="text-center mt-12">
          <Link
            to="/courses"
            className="inline-block border border-foreground text-foreground px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};
