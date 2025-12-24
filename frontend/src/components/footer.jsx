import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "../assets/Logo.jpg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#072F70] text-white pt-14 pb-6 mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LOGO + ABOUT */}
        <div>
          <img
            src={Logo}
            alt="A-One Classes"
            className="w-24 rounded-md mb-4 shadow-lg"
          />
          <h2 className="text-xl font-semibold mb-3">
            A-One Classes Kota
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Kota’s trusted coaching institute for Class 8th–12th, JEE, NEET,
            CUET & JET. Delivering excellence with expert faculty since 2010.
          </p>

          <div className="flex gap-4 mt-5 text-xl">
            <a href="https://www.facebook.com/share/1MLH1P9pmk/" className="hover:text-yellow-400 transition">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/aone.classes" className="hover:text-yellow-400 transition">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@a-oneclasseskota" className="hover:text-yellow-400 transition">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-white/30 pb-2">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Gallery", path: "/gallery" },
              { name: "Contact", path: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className="flex items-center gap-2 hover:text-yellow-400 transition"
                >
                  <span className="text-yellow-400">{">"}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COURSES */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-white/30 pb-2">
            Courses
          </h3>

          <ul className="space-y-3 text-gray-300">
            {[
              ["Class 8–10 Foundation", "/courses/foundation"],
              ["Class 11–12 PCM / PCB", "/courses/pcm-pcb"],
              ["JEE (Main & Advanced)", "/courses/jee"],
              ["NEET (UG)", "/courses/neet"],
              ["CUET", "/courses/cuet"],
              ["JET / ICAR", "/courses/jet-icar"],
              ["B.Sc (PCM / CBZ)", "/courses/bsc"],
            ].map(([title, path], i) => (
              <li key={i}>
                <Link
                  to={path}
                  className="flex items-center gap-2 hover:text-yellow-400 transition"
                >
                  <span className="text-yellow-400">{">"}</span>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-white/30 pb-2">
            Contact Info
          </h3>

          <div className="flex items-start gap-3 mb-4 text-gray-300">
            <FaMapMarkerAlt className="text-yellow-400 mt-1" />
            <p>
              Mahaveer Nagar Vistar Yojna,  
              LBS School ke paas, Kota (Raj.)
            </p>
          </div>

          <div className="flex items-center gap-3 mb-3 text-gray-300">
            <FaPhoneAlt className="text-yellow-400" />
            <a href="tel:9694218177" className="hover:text-yellow-400 transition">
              9694218177
            </a>
          </div>

          <div className="flex items-center gap-3 text-gray-300">
            <FaEnvelope className="text-yellow-400" />
            <a
              href="mailto:aoneclasses@gmail.com"
              className="hover:text-yellow-400 transition"
            >
              aoneclasses@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-300 text-sm mt-12 border-t border-white/20 pt-4">
        © {new Date().getFullYear()} A-One Classes Kota. All Rights Reserved.
        <span className="mx-2 hidden sm:inline">|</span>
        <span className="block sm:inline mt-1 sm:mt-0">
          Designed & Developed by{" "}
          <a
            href="https://rightadsdigital.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 font-semibold transition"
          >
            Right Ads
          </a>
        </span>
      </div>
    </motion.footer>
  );
}
