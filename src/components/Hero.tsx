import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-badminton.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[4px] scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto animate-fade-in pt-20">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium border border-primary/30">
            Winter 2025-2026 Registration Open
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-2xl md:text-3xl block mb-2 text-white/80">
            Welcome to
          </span>
          <span className="gradient-accent bg-clip-text text-transparent">
            Fly Birdie
          </span>
          <span className="block text-2xl md:text-3xl mt-2 text-white/90">
            Indoor Badminton Training
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-2xl mx-auto font-medium">
          Unlock Your Potential. Train with Purpose. Play with Passion.
        </p>

        <p className="text-lg mb-8 text-white/70 max-w-2xl mx-auto">
          Free badminton program for students in Grades 5, 6, 7, and 8. Led by
          professional coaches in a fun and supportive environment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold transition-bounce hover:scale-105 shadow-glow"
            onClick={() =>
              document
                .getElementById("registration")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Register Now - It's FREE
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transition-bounce hover:scale-105"
            onClick={() =>
              document
                .getElementById("course-content")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn More
          </Button>
        </div>

        {/* Quick Info Pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm">
            Saturdays 4:00-6:00 PM
          </div>
          <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm">
            8 Weeks Program
          </div>
          <div className="px-4 py-2 bg-primary/30 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
            100% FREE
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
