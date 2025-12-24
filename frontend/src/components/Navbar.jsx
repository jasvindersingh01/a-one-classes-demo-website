import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/Logo.jpg";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const manuRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [hideTopbar, setHideTopbar] = useState(false);
  const location = useLocation();

  const [openCourses, setOpenCourses] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  const courseLinks = [
    { name: "Class 8–10 Foundation", path: "/courses/foundation" },
    { name: "Class 11–12 PCM / PCB", path: "/courses/pcm-pcb" },
    { name: "JEE (Main & Advanced)", path: "/courses/jee" },
    { name: "NEET", path: "/courses/neet" },
    { name: "CUET", path: "/courses/cuet" },
    { name: "JET / ICAR", path: "/courses/jet-icar" },
    { name: "B.Sc.", path: "/courses/bsc" },
  ];

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (manuRef.current && !manuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  });

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

          {links.map((item, index) => {
            if (item.name === "Courses") {
              return (
                <div key={index} className="relative group">
                  <button
                    className={`flex items-center gap-1 transition-all duration-200 ${location.pathname.startsWith("/courses")
                      ? "text-yellow-300 font-semibold"
                      : "hover:text-yellow-300"
                      }`}
                  >
                    Courses <FaChevronDown className="text-xs mt-[2px]" />
                  </button>

                  {/* Dropdown */}
                  <div
                    className="
              absolute left-0 top-full mt-3 w-64
              bg-white text-gray-800 rounded-lg shadow-xl
              opacity-0 invisible group-hover:opacity-100 group-hover:visible
              transition-all duration-200 z-50
            "
                  >
                    <ul className="py-2">
                      {courseLinks.map((course, i) => (
                        <li key={i}>
                          <Link
                            to={course.path}
                            className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition"
                          >
                            {course.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }

            // Normal links
            return (
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
            );
          })}
        </nav>


        <button onClick={() => setOpen(!open)} className="text-white text-3xl md:hidden">
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <div ref={manuRef} className="md:hidden bg-[#0A3D91] text-white shadow-lg">
          <nav className="flex flex-col gap-4 px-6 py-4">
            {links.map((item, index) => {
              // COURSES DROPDOWN
              if (item.name === "Courses") {
                return (
                  <div key={index}>
                    <button
                      onClick={() => setOpenCourses(!openCourses)}
                      className="flex justify-between items-center w-full text-lg"
                    >
                      <span
                        className={
                          location.pathname.startsWith("/courses")
                            ? "text-yellow-300 font-semibold"
                            : ""
                        }
                      >
                        Courses
                      </span>

                      <FaChevronDown
                        className={`transition ${openCourses ? "rotate-180" : ""}`}
                      />
                    </button>

                    {openCourses && (
                      <div className="ml-4 mt-3 space-y-2">
                        {courseLinks.map((course, i) => (
                          <Link
                            key={i}
                            to={course.path}
                            onClick={() => {
                              setOpen(false);
                              setOpenCourses(false);
                            }}
                            className="block text-sm text-gray-300 hover:text-yellow-400 transition"
                          >
                            {course.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // NORMAL LINKS
              return (
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
              );
            })}

          </nav>
        </div>
      )}
    </motion.header>
  );
}
