import { motion } from "framer-motion";
import bscImg from "../../assets/course.webp";
import banner from "../../assets/banner.jpg";

export default function BSc() {
  return (
    <>
      {/* BANNER */}
      <div className="w-full h-[25vh] md:h-[37vh] relative">
        <img
          src={banner}
          alt="B.Sc Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            B.Sc (PCM / CBZ)
          </h1>
        </div>
      </div>

      {/* SECTION 1 : INTRO + IMAGE */}
      <section className="bg-gray-50 px-6 md:px-20 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">
              About B.Sc Programs
            </h2>

            <p className="text-gray-700 text-[17px] leading-relaxed mb-4">
              Bachelor of Science (B.Sc) is an undergraduate degree program
              focused on building strong conceptual understanding in core
              science subjects. It is an ideal choice for students interested
              in academics, research, teaching, government exams and higher
              studies.
            </p>

            <p className="text-gray-700 text-[17px] leading-relaxed">
              At A-One Classes, we prepare students for B.Sc entrance exams and
              semester-level studies with a clear academic approach, ensuring
              strong fundamentals and exam readiness.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={bscImg}
              alt="B.Sc Preparation"
              className="w-full max-w-md h-[420px] object-cover rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 : STREAMS (DIFFERENT LOOK) */}
      <section className="bg-white px-6 md:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-indigo-700 mb-12 text-center">
            B.Sc Streams We Prepare For
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "B.Sc PCM",
                text: "Physics, Chemistry & Mathematics focused preparation for science-based degrees and competitive exams.",
              },
              {
                title: "B.Sc CBZ",
                text: "Chemistry, Botany & Zoology preparation for life sciences, medical research and teaching careers.",
              },
              {
                title: "B.Sc Agriculture / Allied",
                text: "Strong base for agriculture, horticulture, food technology and research-oriented programs.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
              >
                <h4 className="text-xl font-semibold text-indigo-700 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-[16px] leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 : CAREER + WHY A-ONE */}
      <section className="bg-gray-50 px-6 md:px-20 py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* CAREER */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">
              Career Scope After B.Sc
            </h3>

            <p className="text-gray-700 text-[17px] leading-relaxed mb-4">
              After completing B.Sc, students can pursue higher education such
              as M.Sc, PhD, B.Ed, or prepare for competitive exams like NET,
              SET, सरकारी exams and research-based careers.
            </p>

            <p className="text-gray-700 text-[17px] leading-relaxed">
              B.Sc also opens opportunities in teaching, laboratories,
              research institutes, agriculture sector and government services.
            </p>
          </motion.div>

          {/* WHY A-ONE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">
              Why Choose A-One Classes?
            </h3>

            <ul className="list-disc pl-5 text-gray-700 text-[17px] space-y-2">
              <li>Strong academic-focused teaching approach</li>
              <li>Experienced faculty for science subjects</li>
              <li>Concept clarity with exam-oriented guidance</li>
              <li>Small batch size for better understanding</li>
              <li>Personal mentoring and doubt-solving</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}
