import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/Logo.jpg";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all 
        ${scrolled ? "bg-[#0A3D91] shadow-md" : "bg-[#0A3D91]"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="A-One Classes"
            className="w-18 h-18 object-contain rounded-sm"
          />
          <div>
            <h1 className="text-xl font-bold text-white leading-snug">
              A-One Classes
            </h1>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 items-center text-white font-medium">
          {["Home", "Courses", "Gallery", "About Us", "Contact Us"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="hover:text-yellow-300 transition-all duration-200"
            >
              {item}
            </a>
          ))}

          <a href="#contact">
            <button className="px-4 py-2 bg-yellow-400 text-blue-900 rounded-md font-semibold hover:bg-yellow-300 transition">
              Enroll Now
            </button>
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="text-white text-3xl md:hidden">
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0A3D91] text-white">
          <nav className="flex flex-col gap-4 px-6 py-4">
            {["Home", "Courses", "Gallery", "About Us", "Contact Us"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                onClick={() => setOpen(false)}
                className="hover:text-yellow-300 transition"
              >
                {item}
              </a>
            ))}

            <a href="#contact">
              <button className="mt-3 px-4 py-2 bg-yellow-400 text-blue-900 rounded-md">
                Enroll Now
              </button>
            </a>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
