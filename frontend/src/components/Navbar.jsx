import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/Logo.jpg";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideTopbar, setHideTopbar] = useState(false);
const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setHideTopbar(true);
      else setHideTopbar(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all 
         ${hideTopbar ? "top-0" : "md:top-[35px] top-0"}
        ${scrolled ? "bg-[#08377F]/95 shadow-lg backdrop-blur-md" : "bg-[#072F70]"}
      `}
    >
      <div className="mx-auto px-6 flex justify-between items-center py-6">

        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="A-One Classes"
            className="w-22 object-contain rounded-sm"
          />
          <h1 className="text-xl font-bold text-white tracking-wide">
            A-One Classes
          </h1>
        </div>

        <nav className="hidden md:flex gap-8 items-center text-white font-medium">
          {links.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`transition-all duration-200 ${location.pathname === item.path
                ? "text-yellow-300 font-semibold"
                : "hover:text-yellow-300"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button onClick={() => setOpen(!open)} className="text-white text-3xl md:hidden">
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0A3D91] text-white shadow-lg">
          <nav className="flex flex-col gap-4 px-6 py-4">
            {links.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`text-lg transition ${location.pathname === item.path
                  ? "text-yellow-300 font-semibold"
                  : "hover:text-yellow-300"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  );
}
