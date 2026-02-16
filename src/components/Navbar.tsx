import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    // { label: "Gallery", id: "gallery" },
    { label: "Program", id: "registration" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center space-x-2 group"
          >
            <div className={`rounded-full p-1 transition-all duration-300 ${
              isScrolled ? "" : "bg-white/90 shadow-md"
            }`}>
              <img 
                src={logo} 
                alt="Fly Birdie Logo" 
                className="h-14 md:h-16 w-auto"
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isScrolled
                    ? "text-foreground hover:text-primary hover:bg-primary/10"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("registration")}
              className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-bounce hover:scale-105"
            >
              Register Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-foreground hover:bg-primary/10"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled ? "bg-foreground" : "bg-white"
                } ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled ? "bg-foreground" : "bg-white"
                } ${isMobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled ? "bg-foreground" : "bg-white"
                } ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div
            className={`flex flex-col space-y-2 pt-4 ${
              isScrolled ? "bg-background/95" : "bg-black/80"
            } rounded-lg p-4`}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-3 rounded-lg font-medium text-left transition-all duration-200 ${
                  isScrolled
                    ? "text-foreground hover:text-primary hover:bg-primary/10"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("registration")}
              className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full"
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

