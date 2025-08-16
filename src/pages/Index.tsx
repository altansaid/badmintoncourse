import Hero from "@/components/Hero";
import About from "@/components/About";
import CourseContent from "@/components/CourseContent";
import Gallery from "@/components/Gallery";
import Registration from "@/components/Registration";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <CourseContent />
      <Gallery />
      <Registration />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
