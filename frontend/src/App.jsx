import { Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
       <div className="pt-[35px]">
      <TopBar />
      </div>
      <div className="mt-10">
  <Navbar />
</div>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
