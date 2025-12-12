import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaYoutube, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Logo from "../assets/Logo.jpg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#072F70] text-white pt-12 pb-6 mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

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

          <div className="flex gap-4 mt-4 text-xl">
            <a href="https://www.facebook.com/share/1MLH1P9pmk/" className="hover:text-yellow-400 transition">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/aone.classes?utm_source=qr&igsh=MW1jYXNlYjJla2VmbA==" className="hover:text-yellow-400 transition">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@a-oneclasseskota" className="hover:text-yellow-400 transition">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400 transition">About Us</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-yellow-400 transition">Gallery</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Courses</h3>
          <ul className="space-y-2 text-gray-300">

            <li>
              <Link to="/courses" className="hover:text-yellow-400 transition">
                Class 8th–12th
              </Link>
            </li>

            <li>
              <Link to="/courses" className="hover:text-yellow-400 transition">
                JEE (Mains)
              </Link>
            </li>

            <li>
              <Link to="/courses" className="hover:text-yellow-400 transition">
                NEET
              </Link>
            </li>

            <li>
              <Link to="/courses" className="hover:text-yellow-400 transition">
                CUET
              </Link>
            </li>

            <li>
              <Link to="/courses" className="hover:text-yellow-400 transition">
                JET / B.Sc Entrance
              </Link>
            </li>

          </ul>
        </div>

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

      <div className="text-center text-gray-300 text-sm mt-10 border-t border-white/20 pt-4">
        © {new Date().getFullYear()} A-One Classes Kota. All Rights Reserved.
      </div>
    </motion.footer>
  );
}
