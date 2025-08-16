const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Badminton Course</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Master the art of badminton with our comprehensive course designed 
              for students of all skill levels.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary-foreground transition-smooth"
                >
                  About Badminton
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('course-content')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary-foreground transition-smooth"
                >
                  Course Content
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary-foreground transition-smooth"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary-foreground transition-smooth"
                >
                  Registration
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>📧 badminton.course@university.edu</li>
              <li>📱 +1 (555) 123-4567</li>
              <li>📍 University Sports Center</li>
              <li>⏰ Mon/Wed 6-8PM, Sat 10AM-12PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-primary-foreground/60">
            © 2024 University Badminton Course. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;