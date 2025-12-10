import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdSchool, MdScience, MdBiotech, MdBook, MdAutoGraph } from "react-icons/md";

export default function CoursesPreview() {
  const courses = [
    {
      title: "Class 8th – 12th (CBSE/RBSE)",
      desc: "Strong PCM/PCB foundation with tests & doubt sessions.",
      icon: <MdSchool className="text-blue-700 text-3xl" />,
    },
    {
      title: "JEE (Mains)",
      desc: "Concept building, expert faculty & topic-wise test practice.",
      icon: <MdScience className="text-blue-700 text-3xl" />,
    },
    {
      title: "NEET",
      desc: "Biology-focused preparation with complete syllabus coverage.",
      icon: <MdBiotech className="text-blue-700 text-3xl" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-50 scroll-mt-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-blue-700">Our Courses</h2>
        <p className="text-gray-600 mt-2">
          Strong academic foundation with expert guidance
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
        {courses.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 
                       transition-all duration-300"
          >
            {/* ICON WITH BACKGROUND CIRCLE */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 mb-4">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-[15px] leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* VIEW ALL BUTTON */}
      <div className="text-center mt-10">
        <Link>
          <button className="px-6 py-3 bg-blue-700 text-white rounded-lg font-medium
                             hover:bg-blue-600 transition shadow-md">
            View All Courses →
          </button>
        </Link>
      </div>
    </section>
  );
}
