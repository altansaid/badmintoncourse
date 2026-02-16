import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Registration = () => {
  const handleRegisterClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSeLX7bQ-okFSTjtBZY3FHFxpIrrW3Hi67lEDTs_bwzJM7kEJA/viewform",
      "_blank"
    );
  };

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
      description: "Open to students in Grades 5-8 at South March Public School (Kanata).",
    },
  ];

  return (
    <section id="registration" className="py-20 px-6 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to <span className="text-primary">Join Us?</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take the first step towards your badminton journey. Register now and
            join our Spring Session 2026 program led by professional coaches.
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

        {/* Registration Card */}
        <Card className="gradient-card border-0 shadow-custom max-w-2xl mx-auto animate-slide-up">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-foreground">
              Fly Birdie Community Club Registration
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Spring Session 2026 - Grades 5, 6, 7, and 8
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-secondary rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">$25</div>
                <div className="text-sm text-muted-foreground">Per Session</div>
              </div>
              <div className="p-4 bg-secondary rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">2 Hours</div>
                <div className="text-sm text-muted-foreground">Each Session</div>
              </div>
              <div className="p-4 bg-secondary rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">8</div>
                <div className="text-sm text-muted-foreground">Spring Dates</div>
              </div>
            </div>

            {/* Session Dates */}
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-center">
                Spring Session Dates:
              </h4>
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-md bg-secondary px-3 py-2 text-center">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">March 2026</p>
                  <p className="font-semibold text-foreground">28</p>
                </div>
                <div className="rounded-md bg-secondary px-3 py-2 text-center">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">April 2026</p>
                  <p className="font-semibold text-foreground">11, 18, 25</p>
                </div>
                <div className="rounded-md bg-secondary px-3 py-2 text-center">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">May 2026</p>
                  <p className="font-semibold text-foreground">2, 9, 23, 30</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                onClick={handleRegisterClick}
                className="gradient-accent text-accent-foreground hover:scale-105 transition-bounce px-8 md:px-12 py-6 text-lg font-semibold shadow-glow"
              >
                Register Now
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                You'll be redirected to our secure Google Forms registration
                page
              </p>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 text-left">
              <p className="text-amber-800 dark:text-amber-200 text-sm font-medium flex items-start gap-2">
                <span className="text-lg">⚡</span>
                <span>
                  Spots are limited and registration is on a first-come,
                  first-served basis. Don't miss your chance to join!
                </span>
              </p>
            </div>

            <div className="border-t pt-6">
              <h4 className="font-semibold text-foreground mb-4">
                Important Remarks:
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground text-left">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>South March Public School (Kanata)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Payment details provided after registration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                  <span>Participants must wear <strong className="text-foreground">court shoes</strong>, appropriate sports attire, and <strong className="text-foreground">protective eyewear</strong></span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Registration;
