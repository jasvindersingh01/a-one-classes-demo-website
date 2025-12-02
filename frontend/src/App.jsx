import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./pages/Courses";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />

      {/* Full One-Page Website for Scrolling */}
      <Hero id="home" />
      <Courses id="courses" />
      <Gallery id="gallery" />
      <About id="about" />
      <Contact id="contact" /> 
      <Footer />
    </>
  );
}

export default App;
