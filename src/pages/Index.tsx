import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import CourseContent from "@/components/CourseContent";
// import Gallery from "@/components/Gallery";
import Registration from "@/components/Registration";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      {/* <CourseContent /> */}
      {/* <Gallery /> */}
      <Registration />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
