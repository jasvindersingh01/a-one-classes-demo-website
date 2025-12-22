import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaAward, FaUsers, FaBookOpen } from "react-icons/fa";
import BgImg from "../assets/about/building.jpeg";

export default function Achievements() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  const counters = [
    { label: "Years of Excellence", value: 14, icon: <FaAward className="text-blue-700 text-4xl" /> },
    { label: "Students Taught", value: 5000, icon: <FaUsers className="text-blue-700 text-4xl" /> },
    { label: "Selections (JEE/NEET)", value: 1200, icon: <FaUserGraduate className="text-blue-700 text-4xl" /> },
    { label: "Weekly Tests", value: 800, icon: <FaBookOpen className="text-blue-700 text-4xl" /> },
  ];

  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStartCount(true);
      },
      { threshold: 0.25 }  
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCount) return;

    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((num, index) =>
          num < counters[index].value ? num + Math.ceil(counters[index].value / 50) : counters[index].value
        )
      );
    }, 40);

    return () => clearInterval(interval);
  }, [startCount]);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
   
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-blue-800">Our Achievements</h2>
          <p className="text-black mt-2">Dedicated results for over a decade</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-blue-100
                         hover:shadow-xl hover:-translate-y-2 transition transform"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>

              <h3 className="text-4xl font-extrabold text-blue-700 text-center">
                {counts[index]}+
              </h3>

              <p className="text-gray-700 mt-2 text-center font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
