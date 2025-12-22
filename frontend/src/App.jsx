import { Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

import Jee from "./pages/courses/Jee";
import Foundation from "./pages/courses/Foundation";
import PcmPcb from "./pages/courses/PcmPcb";
import NEET from "./pages/courses/Neet";
import CUET from "./pages/courses/CUET";
import JETICAR from "./pages/courses/JETICAR";
import BSc from "./pages/courses/BSc";

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
        <Route path="/courses/jee" element={<Jee />} />
        <Route path="/courses/foundation" element={<Foundation />} />
        <Route path="/courses/pcm-pcb" element={<PcmPcb />} />
        <Route path="/courses/neet" element={<NEET />} />
        <Route path="/courses/cuet" element={<CUET />} />
        <Route path="/courses/jet-icar" element={<JETICAR />} />
        <Route path="/courses/bsc" element={<BSc />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
