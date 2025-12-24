import { useState, useEffect } from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function TopBar() {
  const [hideTopbar, setHideTopbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setHideTopbar(true);
      else setHideTopbar(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
    hidden md:flex
    w-full bg-gray-900 text-white text-sm py-2 px-4
    fixed left-0 z-[9999]
    transition-all duration-300
    ${hideTopbar ? "-translate-y-full" : "translate-y-0"}
  `}
      style={{ top: 0 }}
    >
      <div className="w-full flex items-center justify-between">

        {/* LEFT INFO */}
        <div className="flex items-center gap-6">

          <p className="flex items-center gap-2 whitespace-nowrap">
            📍
            <span>Mahaveer Nagar Vistar Yojna, LBS School ke paas, Kota (Raj.)</span>
          </p>

          <p className="flex items-center gap-2 whitespace-nowrap">
            ✉️
            <a href="mailto:contact@aoneclasses.com" className="hover:underline">
              contact@aoneclasses.com
            </a>
          </p>

        </div>

        {/* RIGHT SOCIAL ICONS */}
        <div className="flex items-center gap-4 text-lg">
           <p className="flex items-center gap-2 whitespace-nowrap text-sm">
            📞
            <a href="tel:9694218177" className="hover:underline">
              +91 9694218177
            </a>
          </p>
          <a
            href="https://www.instagram.com/aone.classes?utm_source=qr&igsh=MW1jYXNlYjJla2VmbA=="
            target="_blank"
            className="hover:text-yellow-300 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/share/1MLH1P9pmk/"
            target="_blank"
            className="hover:text-yellow-300 transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.youtube.com/@a-oneclasseskota"
            target="_blank"
            className="hover:text-yellow-300 transition"
          >
            <FaYoutube />
          </a>
        </div>

      </div>
    </div>
  );
}
