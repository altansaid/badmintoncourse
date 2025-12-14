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
      "https://docs.google.com/forms/d/1a2lvtTf6RDRoW9Qb0VUqkJLtgfOYZ7FunAUAM64Izq0/viewform",
      "_blank"
    );
  };

  return (
    <section id="registration" className="py-20 px-6 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to <span className="text-primary">Join Us?</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take the first step towards your badminton journey. Register now and
            join our program led by professional coaches! First 8 classes are FREE.
          </p>
        </div>

        <Card className="gradient-card border-0 shadow-custom max-w-2xl mx-auto animate-slide-up">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-foreground">
              Fly Birdie Community Club Registration
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Winter 2025-2026 Session - Grades 5, 6, 7, and 8
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-secondary rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">8</div>
                <div className="text-sm text-muted-foreground">
                  Week Program
                </div>
              </div>
              <div className="p-4 bg-secondary rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">FREE</div>
                <div className="text-sm text-muted-foreground">First 8 Classes</div>
              </div>
              <div className="p-4 bg-secondary rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">Pro</div>
                <div className="text-sm text-muted-foreground">
                  Certified Coaches
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
                Program Details:
              </h4>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground text-left">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Professional coaching</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Saturdays 4:00-6:00 PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Nov 29 - Jan 31 (8 weeks)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Beginner to Intermediate levels</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Grades 5, 6, 7, and 8</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Supportive environment</span>
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
