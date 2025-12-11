import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdSchool, MdScience, MdBiotech, MdAutoGraph } from "react-icons/md";

export default function CoursesPreview() {
  const courses = [
    {
      title: "Class 8th – 12th (CBSE/RBSE)",
      desc: "Strong foundation classes with weekly tests & doubt sessions.",
      icon: <MdSchool className="text-blue-700 text-5xl" />,
    },
    {
      title: "JEE (Mains)",
      desc: "Concept building, topic-wise test practice & expert faculty guidance.",
      icon: <MdScience className="text-blue-700 text-5xl" />,
    },
    {
      title: "NEET",
      desc: "Biology-focused coaching with full syllabus coverage.",
      icon: <MdBiotech className="text-blue-700 text-5xl" />,
    },
    {
      title: "JET / B.Sc. Entrance",
      desc: "Structured coaching & dedicated study material.",
      icon: <MdAutoGraph className="text-blue-700 text-5xl" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-50 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
          Courses We Offer
        </h2>
        <p className="text-gray-600 mt-2">
          Choose the best program for your academic journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.slice(0, 4).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-blue-700"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>

            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600 text-center text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/courses"
          className="px-8 py-3 bg-blue-800 text-white rounded-md font-semibold hover:bg-blue-900 transition duration-300 shadow-md"
        >
          View All Courses
        </Link>
      </div>
    </section>
  );
}
