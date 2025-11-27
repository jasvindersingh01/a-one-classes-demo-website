import { motion } from "framer-motion";
import { MdSchool, MdScience, MdBiotech, MdBook, MdAutoGraph } from "react-icons/md";

export default function Courses() {
  const courses = [
    {
      title: "Class 8th – 12th (CBSE/RBSE)",
      desc: "Strong foundation classes for PCM / PCB. Weekly tests & regular doubt sessions.",
      icon: <MdSchool className="text-blue-700 text-4xl" />,
    },
    {
      title: "JEE (Mains)",
      desc: "Expert faculty, concept building & topic-wise test practice for top performance.",
      icon: <MdScience className="text-blue-700 text-4xl" />,
    },
    {
      title: "NEET",
      desc: "Biology-focused guidance, practice sessions & full syllabus coverage.",
      icon: <MdBiotech className="text-blue-700 text-4xl" />,
    },
    {
      title: "CUET",
      desc: "Smart preparation for domain subjects & general test.",
      icon: <MdBook className="text-blue-700 text-4xl" />,
    },
    {
      title: "JET / B.Sc. Entrance",
      desc: "Structured entrance-based coaching with expert mentors.",
      icon: <MdAutoGraph className="text-blue-700 text-4xl" />,
    },
  ];

  return (
    <section id="courses" className="py-16 bg-gray-50 scroll-mt-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-blue-700">
          Courses We Offer
        </h2>
        <p className="text-gray-600 mt-2">
          Choose the best program for your academic growth
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20">
        {courses.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-white p-6 shadow-lg rounded-xl hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="mb-4">{item.icon}</div>

            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              {item.title}
            </h3>

            <p className="text-gray-600 text-[15px] leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
