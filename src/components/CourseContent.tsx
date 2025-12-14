import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CourseContent = () => {
  const benefits = [
    {
      icon: "🎯",
      title: "Skill Development",
      description: "Improve your technique, footwork, and game strategy with structured training sessions.",
    },
    {
      icon: "🏅",
      title: "Certified Coaching",
      description: "Learn from experienced, passionate coaches in a positive and encouraging setting.",
    },
    {
      icon: "💪",
      title: "Team Spirit & Confidence",
      description: "Build discipline, leadership skills, and develop a genuine love for the sport.",
    },
    {
      icon: "🌟",
      title: "All Levels Welcome",
      description: "Open to beginners, intermediate, and advanced players in Barrhaven and nearby communities.",
    },
  ];

  return (
    <section id="course-content" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose{" "}
            <span className="text-primary">Fly Birdie?</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide a free badminton club designed to help young athletes learn, 
            grow, and enjoy the sport in a fun and supportive environment.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="gradient-card border-0 shadow-custom hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-slide-up text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-2">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <CardTitle className="text-lg font-bold text-foreground">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Training Schedule */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Schedule Card */}
          <Card className="gradient-card border-0 shadow-custom animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                <span className="text-3xl">📅</span>
                Training Schedule
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">Winter Session 2025-2026</h4>
                <p className="text-muted-foreground">Beginner ~ Intermediate Classes</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                  <span className="text-xl">🔹</span>
                  <div>
                    <p className="font-medium text-foreground">Junior Training</p>
                    <p className="text-sm text-muted-foreground">8 classes total - <span className="text-primary font-semibold">FREE</span></p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                  <span className="text-xl">🔹</span>
                  <div>
                    <p className="font-medium text-foreground">Intermediate Training</p>
                    <p className="text-sm text-muted-foreground">8 classes total - <span className="text-primary font-semibold">FREE</span></p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex items-center gap-2 text-foreground">
                  <span>⏰</span>
                  <span className="font-medium">Saturdays, 4:00 – 6:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <span>📆</span>
                  <span className="font-medium">November 29 – January 31</span>
                  <span className="text-sm text-muted-foreground">(8 weeks)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location & Requirements */}
          <div className="space-y-6">
            {/* Location Card */}
            <Card className="gradient-card border-0 shadow-custom animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <span className="text-3xl">📍</span>
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-foreground mb-1">Huntley Centennial Public School</p>
                <p className="text-muted-foreground">118 Langstaff Dr, Carp, ON K0A 1L0</p>
              </CardContent>
            </Card>

            {/* Eligibility Card */}
            <Card className="gradient-card border-0 shadow-custom animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <span className="text-3xl">🎒</span>
                  Eligibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  This program is offered exclusively for students in:
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Grade 5", "Grade 6", "Grade 7", "Grade 8"].map((grade) => (
                    <span
                      key={grade}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {grade}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements Card */}
            <Card className="gradient-card border-0 shadow-custom animate-slide-up border-l-4 border-l-amber-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span>⚠️</span>
                  Important Remarks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Spots are limited - registration is on a first-come, first-served basis.</p>
                <p>• Participants must wear <strong className="text-foreground">court shoes</strong>, appropriate sports attire, and <strong className="text-foreground">protective eyewear</strong>.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
