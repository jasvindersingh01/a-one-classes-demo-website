import { motion } from "framer-motion";
import agriImg from "../../assets/course.webp";
import banner from "../../assets/banner.jpg";

export default function JETICAR() {
  return (
    <>
      {/* BANNER */}
      <div className="w-full h-[25vh] md:h-[37vh] relative">
        <img
          src={banner}
          alt="JET ICAR Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            JET / ICAR
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <section className="bg-gray-50 px-6 md:px-20 py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT : IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={agriImg}
              alt="JET ICAR Agriculture Coaching"
              className="w-full max-w-md h-[420px] md:h-[460px] object-cover rounded-2xl shadow-xl"
              loading="lazy"
            />
          </motion.div>

          {/* RIGHT : CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              About JET & ICAR Examinations
            </h2>

            <p className="text-gray-700 text-[17px] leading-relaxed mb-4">
              JET (Joint Entrance Test) and ICAR are important entrance
              examinations for admission into undergraduate programs in
              Agriculture, Horticulture, Forestry, Dairy Technology,
              Food Technology and other allied agricultural sciences.
            </p>

            <p className="text-gray-700 text-[17px] leading-relaxed mb-4">
              These exams are ideal for students who wish to build a career in
              agriculture, research, agri-technology, government services and
              related professional fields.
            </p>

            <p className="text-gray-700 text-[17px] leading-relaxed mb-6">
              At A-One Classes, our JET / ICAR preparation program focuses on
              building strong fundamentals in Biology, Chemistry and Physics
              along with exam-oriented practice.
            </p>

            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Our Preparation Approach
            </h3>

            <ul className="list-disc pl-5 text-gray-700 text-[17px] space-y-2">
              <li>Complete syllabus coverage as per JET & ICAR pattern</li>
              <li>Strong focus on Biology for agriculture-based exams</li>
              <li>Concept clarity with NCERT-based teaching</li>
              <li>Regular MCQ practice and mock tests</li>
              <li>Performance evaluation and doubt-solving sessions</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}
