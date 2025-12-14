import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Fly Birdie Logo" className="h-24 w-auto" />
              <h3 className="text-xl font-bold">Fly Birdie Community Club</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Indoor badminton training for students in Grades 5-8. First 8 classes FREE!
              Led by professional coaches in a supportive environment.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("hero")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary-foreground transition-smooth"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("course-content")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary-foreground transition-smooth"
                >
                  Program Details
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("gallery")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary-foreground transition-smooth"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("registration")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary-foreground transition-smooth"
                >
                  Register
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary-foreground transition-smooth"
                >
                  About Badminton
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Training Info</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a
                  href="mailto:flybirdies.ottawa@gmail.com"
                  className="hover:text-primary-foreground transition-smooth"
                >
                  flybirdies.ottawa@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>Huntley Centennial Public School</span>
              </li>
              <li className="flex items-center gap-2">
                <span>⏰</span>
                <span>Saturdays 4:00-6:00 PM</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📅</span>
                <span>Nov 29 - Jan 31 (8 weeks)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-primary-foreground/60">
            © 2025 Fly Birdie Community Club. All rights reserved.
          </p>
          <p className="text-primary-foreground/40 text-sm mt-2">
            Unlock Your Potential. Train with Purpose. Play with Passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
