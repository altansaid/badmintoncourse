import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder images - will be generated
  const galleryImages = [
    { id: 1, alt: "Badminton training session", caption: "Group training session" },
    { id: 2, alt: "Professional badminton match", caption: "Match in progress" },
    { id: 3, alt: "Badminton equipment setup", caption: "Professional equipment" },
    { id: 4, alt: "Students practicing serves", caption: "Serve practice" },
    { id: 5, alt: "Doubles match action", caption: "Doubles coordination" },
    { id: 6, alt: "Coach demonstrating technique", caption: "Expert coaching" },
    { id: 7, alt: "Tournament preparation", caption: "Tournament ready" },
    { id: 8, alt: "Victory celebration", caption: "Celebrating success" }
  ];

  return (
    <section id="gallery" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Photo{" "}
            <span className="text-primary">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capture the excitement and energy of our badminton courses through these action-packed moments.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-custom hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                {/* Placeholder content */}
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/30 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-primary font-bold">{image.id}</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">{image.caption}</p>
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-sm">👁</span>
                  </div>
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl w-full bg-card rounded-lg overflow-hidden shadow-strong">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-primary text-2xl font-bold">{selectedImage}</span>
                  </div>
                  <p className="text-muted-foreground">
                    {galleryImages.find(img => img.id === selectedImage)?.caption}
                  </p>
                </div>
              </div>
              <div className="p-4 text-center">
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="text-muted-foreground hover:text-foreground transition-smooth"
                >
                  Click anywhere to close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;