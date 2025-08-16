const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What is{" "}
            <span className="text-primary">Badminton?</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Badminton is a dynamic racquet sport played with shuttlecocks across a net. 
              Known for its speed and agility requirements, badminton is one of the fastest 
              racquet sports in the world, with shuttlecock speeds reaching over 200 mph!
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              This exciting sport combines strategy, precision, and athleticism, making it 
              perfect for players of all skill levels. Whether you're looking for a fun way 
              to stay fit or hoping to compete competitively, badminton offers endless 
              opportunities for growth and enjoyment.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 rounded-lg bg-secondary">
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">MPH Shuttlecock Speed</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary">
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <div className="text-sm text-muted-foreground">Players Maximum</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="gradient-card p-8 rounded-2xl shadow-custom">
              <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Badminton?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Excellent cardiovascular workout</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Improves hand-eye coordination</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Builds strategic thinking skills</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Low impact on joints</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Social and fun team environment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;