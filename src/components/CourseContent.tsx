import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CourseContent = () => {
  const courseModules = [
    {
      title: "Basic Fundamentals",
      description: "Learn proper grip, stance, and basic strokes",
      features: ["Racquet grip techniques", "Court positioning", "Basic footwork", "Shuttlecock handling"]
    },
    {
      title: "Stroke Techniques",
      description: "Master essential badminton shots and techniques",
      features: ["Clear shots", "Drop shots", "Smash techniques", "Net play"]
    },
    {
      title: "Game Strategy",
      description: "Develop tactical awareness and game intelligence",
      features: ["Singles strategy", "Doubles coordination", "Match analysis", "Opponent reading"]
    },
    {
      title: "Physical Conditioning",
      description: "Build stamina, agility, and sport-specific fitness",
      features: ["Agility training", "Endurance building", "Injury prevention", "Recovery techniques"]
    },
    {
      title: "Advanced Skills",
      description: "Take your game to competitive levels",
      features: ["Advanced shots", "Deception techniques", "Match psychology", "Tournament preparation"]
    },
    {
      title: "Practice Sessions",
      description: "Structured practice with feedback and improvement",
      features: ["Skill drills", "Match simulation", "Video analysis", "Personal coaching"]
    }
  ];

  return (
    <section id="course-content" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Course{" "}
            <span className="text-primary">Content</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive badminton course covers everything from basics to advanced techniques, 
            ensuring you develop into a well-rounded player.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseModules.map((module, index) => (
            <Card 
              key={index} 
              className="gradient-card border-0 shadow-custom hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </span>
                  {module.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {module.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseContent;