import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaYoutube, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Logo from "../assets/Logo.jpg";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-blue-900 text-white pt-12 pb-6 mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LOGO + ABOUT */}
        <div>
          <img
            src={Logo}
            alt="A-One Classes"
            className="w-24 rounded-md mb-4 shadow-md"
          />
          <h2 className="text-xl font-semibold mb-3">A-One Classes Kota</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Kota’s trusted coaching institute for Class 8th–12th, JEE, NEET,
            CUET & JET. Delivering excellence with expert faculty since 2010.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-yellow-400 transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-yellow-400 cursor-pointer transition">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer transition">About Us</li>
            <li className="hover:text-yellow-400 cursor-pointer transition">Gallery</li>
            <li className="hover:text-yellow-400 cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* COURSES */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Courses</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-yellow-400 cursor-pointer transition">Class 8th–12th</li>
            <li className="hover:text-yellow-400 cursor-pointer transition">JEE (Mains)</li>
            <li className="hover:text-yellow-400 cursor-pointer transition">NEET</li>
            <li className="hover:text-yellow-400 cursor-pointer transition">CUET</li>
            <li className="hover:text-yellow-400 cursor-pointer transition">JET / B.Sc Entrance</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>

          <div className="flex items-start gap-3 mb-3 text-gray-300">
            <FaMapMarkerAlt className="text-yellow-400 mt-1" />
            <p>Mahaveer Nagar Vistar Yojna, LBS School ke paas, Kota (Raj.)</p>
          </div>

          <div className="flex items-center gap-3 mb-3 text-gray-300">
            <FaPhoneAlt className="text-yellow-400" />
            <a href="tel:9694218177" className="hover:text-yellow-400 transition">
              9694218177
            </a>
          </div>

          <div className="flex items-center gap-3 text-gray-300">
            <FaEnvelope className="text-yellow-400" />
            <a href="mailto:aoneclasses@gmail.com" className="hover:text-yellow-400 transition">
              aoneclasses@gmail.com
            </a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-300 text-sm mt-10 border-t border-white/20 pt-4">
        © {new Date().getFullYear()} A-One Classes Kota. All Rights Reserved.
      </div>
    </motion.footer>
  );
}
