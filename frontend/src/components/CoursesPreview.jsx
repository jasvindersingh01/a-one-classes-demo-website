import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CoursesPreview() {
  const courses = [
    {
      title: "Class 8–10 Foundation",
      desc: "Strong academic base with early competitive exam orientation.",
      link: "/courses/foundation",
    },
    {
      title: "Class 11–12 PCM / PCB",
      desc: "Board-focused preparation with parallel competitive guidance.",
      link: "/courses/pcm-pcb",
    },
    {
      title: "JEE (Main & Advanced)",
      desc: "Concept-driven coaching for engineering aspirants.",
      link: "/courses/jee",
    },
    {
      title: "NEET (UG)",
      desc: "NCERT-focused preparation for medical entrance exams.",
      link: "/courses/neet",
    },
    {
      title: "CUET",
      desc: "Smart and exam-oriented preparation for university admissions.",
      link: "/courses/cuet",
    },
    {
      title: "JET / ICAR & B.Sc",
      desc: "Focused coaching for agriculture & science-based careers.",
      link: "/courses/jet-icar",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-blue-700">
            Our Courses
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Designed to build strong fundamentals and exam confidence
          </p>
        </motion.div>

        {/* COURSES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                {course.title}
              </h3>

              <p className="text-gray-700 text-[16px] leading-relaxed mb-5">
                {course.desc}
              </p>

              <Link
                to={course.link}
                className="text-blue-600 font-medium hover:underline"
              >
                Know More →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
     <div className="text-center mt-10 text-gray-600 text-sm">
  Click on <span className="font-semibold text-blue-700">Know More</span> to explore detailed course information.
</div>

      </div>
    </section>
  );
}
