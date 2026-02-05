import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Play, Clock, BookOpen, ArrowLeft } from "lucide-react";
import courseVideo1 from "@/assets/course-video-1.jpg";
import courseVideo2 from "@/assets/course-video-2.jpg";
import courseVideo3 from "@/assets/course-video-3.jpg";

interface Course {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  originalPrice?: number;
  duration: string;
  lessons: number;
  level: string;
  features: string[];
  popular?: boolean;
}

const courses: Course[] = [
  {
    id: "foundations",
    image: courseVideo1,
    title: "Video Editing Foundations",
    subtitle: "Master the Basics",
    description: "Start your journey into professional video editing. Learn essential techniques, software fundamentals, and create your first polished projects.",
    price: 99,
    originalPrice: 149,
    duration: "6 weeks",
    lessons: 24,
    level: "Beginner",
    features: [
      "Premiere Pro & Final Cut basics",
      "Timeline & sequence mastery",
      "Audio syncing fundamentals",
      "Export settings guide",
      "Lifetime access",
      "Certificate of completion",
    ],
    popular: true,
  },
  {
    id: "advanced",
    image: courseVideo2,
    title: "Advanced Editing Techniques",
    subtitle: "Elevate Your Craft",
    description: "Take your skills to the next level with advanced color grading, motion graphics, and cinematic storytelling techniques.",
    price: 199,
    originalPrice: 299,
    duration: "8 weeks",
    lessons: 36,
    level: "Intermediate",
    features: [
      "Advanced color grading",
      "Motion graphics basics",
      "Sound design & mixing",
      "Cinematic transitions",
      "1-on-1 feedback session",
      "Private community access",
    ],
  },
  {
    id: "pro",
    image: courseVideo3,
    title: "Professional Content Creation",
    subtitle: "Industry-Ready Skills",
    description: "Master the complete workflow from shooting to delivery. Learn client management, project organization, and high-end finishing techniques.",
    price: 349,
    originalPrice: 499,
    duration: "12 weeks",
    lessons: 48,
    level: "Advanced",
    features: [
      "Professional workflow systems",
      "Client project management",
      "Advanced VFX integration",
      "Commercial editing techniques",
      "Portfolio review session",
      "Job placement support",
    ],
  },
];

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const handlePurchase = (courseId: string) => {
    setSelectedCourse(courseId);
    // Show success message (in real app, this would go to checkout)
    setTimeout(() => {
      setSelectedCourse(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 nav-link">
              <ArrowLeft size={16} />
              <span>Back</span>
            </Link>
            <Link to="/" className="brand-logo text-foreground text-xl md:text-2xl">
              WTYLUV
            </Link>
            <div className="w-20" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Learn & Transform
          </p>
          <h1 className="section-heading text-foreground mb-6">
            Video Editing Courses
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Master the art of visual storytelling. Our curated courses guide you from 
            beginner fundamentals to professional-level expertise, all with the signature 
            WTYLUV touch of elegance and intention.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`bg-card border border-border relative flex flex-col transition-all duration-300 hover:shadow-xl ${
                  course.popular ? "ring-2 ring-foreground/20" : ""
                }`}
              >
                {/* Popular Badge */}
                {course.popular && (
                  <div className="absolute top-4 right-4 bg-foreground text-primary-foreground px-3 py-1 text-xs tracking-wider uppercase z-10">
                    Most Popular
                  </div>
                )}

                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative group">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-6 h-6 text-foreground ml-1" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                    {course.subtitle}
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl font-light text-foreground mb-3">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Course Meta */}
                  <div className="flex items-center gap-6 mb-6 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen size={14} />
                      <span>{course.lessons} lessons</span>
                    </div>
                  </div>

                  {/* Level Badge */}
                  <div className="mb-6">
                    <span className="inline-block border border-border px-3 py-1 text-xs tracking-wider uppercase">
                      {course.level}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm">
                        <Check size={16} className="text-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price & CTA */}
                  <div className="mt-auto">
                    <div className="flex items-baseline gap-3 mb-6">
                      <span className="font-serif text-3xl text-foreground">
                        ${course.price}
                      </span>
                      {course.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${course.originalPrice}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => handlePurchase(course.id)}
                      disabled={selectedCourse === course.id}
                      className={`w-full py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                        selectedCourse === course.id
                          ? "bg-foreground/80 text-primary-foreground"
                          : "bg-foreground text-primary-foreground hover:bg-foreground/90"
                      }`}
                    >
                      {selectedCourse === course.id ? "Added to Cart ✓" : "Enroll Now"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <h2 className="section-heading text-foreground text-2xl md:text-3xl mb-6">
            Your Journey Awaits
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Join hundreds of creators who have transformed their skills with WTYLUV. 
            Our courses combine technical excellence with creative intuition, 
            helping you find your unique voice in visual storytelling.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check size={16} />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} />
              <span>Lifetime course access</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} />
              <span>Expert support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <Link to="/" className="brand-logo text-xl mb-4 inline-block">
            WTYLUV
          </Link>
          <p className="text-xs text-primary-foreground/60">
            © 2026 WTYLUV. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Courses;
