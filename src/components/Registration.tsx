import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Registration = () => {
  const handleRegisterClick = () => {
    // This would typically open a Google Form or redirect to registration page
    window.open("https://forms.google.com/", "_blank");
  };

  return (
    <section id="registration" className="py-20 px-6 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to{" "}
            <span className="text-primary">Join Us?</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take the first step towards mastering badminton. Register now and start your journey 
            with our expert coaches and supportive community.
          </p>
        </div>
        
        <Card className="gradient-card border-0 shadow-custom max-w-2xl mx-auto animate-slide-up">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-foreground">Course Registration</CardTitle>
            <CardDescription className="text-muted-foreground">
              Click below to access our registration form and secure your spot in the course.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-secondary rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">8</div>
                <div className="text-sm text-muted-foreground">Week Course</div>
              </div>
              <div className="p-4 bg-secondary rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">2x</div>
                <div className="text-sm text-muted-foreground">Sessions per Week</div>
              </div>
              <div className="p-4 bg-secondary rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">12</div>
                <div className="text-sm text-muted-foreground">Max Students</div>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg"
                onClick={handleRegisterClick}
                className="gradient-accent text-accent-foreground hover:scale-105 transition-bounce px-12 py-4 text-lg font-semibold shadow-glow"
              >
                Register Now via Google Forms
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                You'll be redirected to our secure Google Forms registration page
              </p>
            </div>
            
            <div className="border-t pt-6">
              <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Professional coaching</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Equipment provided</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Court access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Progress tracking</span>
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