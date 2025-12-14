import { useState } from "react";

// Import gallery images
import warmupSession from "@/assets/gallery/warmup-session.jpeg";
import coachBriefing from "@/assets/gallery/coach-briefing.jpeg";
import doublesMatch from "@/assets/gallery/doubles-match.jpeg";
import doublesAction from "@/assets/gallery/game-action.jpeg";
import rallyPractice from "@/assets/gallery/rally-practice.jpeg";
import serveDrill from "@/assets/gallery/serve-drill.jpeg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    { 
      id: 1, 
      src: warmupSession,
      alt: "Warm-up and stretching session", 
      caption: "Warm-up & Stretching" 
    },
    { 
      id: 2, 
      src: coachBriefing,
      alt: "Coach briefing the students", 
      caption: "Coach Instruction" 
    },
    { 
      id: 3, 
      src: doublesMatch,
      alt: "Students playing doubles match", 
      caption: "Doubles Match" 
    },
    { 
      id: 4, 
      src: doublesAction,
      alt: "Doubles game in action", 
      caption: "Game in Action" 
    },
    { 
      id: 5, 
      src: rallyPractice,
      alt: "Rally practice session", 
      caption: "Rally Practice" 
    },
    { 
      id: 6, 
      src: serveDrill,
      alt: "Serve practice drill", 
      caption: "Serve Drill" 
    }
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
            Capture the excitement and energy of our Fly Birdie training sessions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-custom hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="aspect-square">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">🔍</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-5xl w-full relative">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/80 hover:text-white text-lg font-medium flex items-center gap-2 transition-colors"
              >
                <span>Close</span>
                <span className="text-2xl">✕</span>
              </button>
              <img 
                src={galleryImages.find(img => img.id === selectedImage)?.src}
                alt={galleryImages.find(img => img.id === selectedImage)?.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg font-medium">
                {galleryImages.find(img => img.id === selectedImage)?.caption}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
