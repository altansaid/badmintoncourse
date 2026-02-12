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
            join our Spring Session 2026 program led by professional coaches.
          </p>
        </div>

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
                  <span>Sessions are held at indoor facilities in Barrhaven and nearby communities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Open to students in Grades 5-8</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>$25 per session</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Each session is 2 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>March 28, 2026</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>April 11, 18, 25, 2026</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>May 2, 9, 23, 30, 2026</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Payment details provided after registration</span>
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
