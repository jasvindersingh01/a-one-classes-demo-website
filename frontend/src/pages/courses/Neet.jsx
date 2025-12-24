import { motion } from "framer-motion";
import neetImg from "../../assets/course.webp";
import banner from "../../assets/banner.jpg";

export default function NEET() {
  return (
    <>
      {/* BANNER */}
      <div className="w-full h-[25vh] md:h-[37vh] relative">
        <img
          src={banner}
          alt="NEET Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            NEET
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
              src={neetImg}
              alt="NEET Preparation"
              className="w-full max-w-md h-[440px] md:h-[480px] object-cover rounded-2xl shadow-xl"
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
              About NEET (UG)
            </h2>

            <p className="text-gray-700 text-[17px] leading-relaxed mb-4">
              National Eligibility cum Entrance Test (NEET) is the national-level
              entrance examination for admission into medical courses such as
              MBBS, BDS, AYUSH and other allied medical programs across India.
            </p>

            <p className="text-gray-700 text-[17px] leading-relaxed mb-4">
              NEET requires strong conceptual clarity, especially in Biology,
              along with proper understanding of Physics and Chemistry. A
              systematic study plan, regular practice and correct guidance are
              essential for success in this competitive examination.
            </p>

            <p className="text-gray-700 text-[17px] leading-relaxed mb-6">
              At A-One Classes, our NEET preparation program focuses on complete
              NCERT-based learning, regular MCQ practice and continuous
              performance evaluation to help students achieve their medical
              career goals.
            </p>

            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Our NEET Preparation Approach
            </h3>

            <ul className="list-disc pl-5 text-gray-700 text-[17px] space-y-2">
              <li>Complete NCERT-focused syllabus coverage</li>
              <li>Strong emphasis on Biology (Botany & Zoology)</li>
              <li>Regular MCQ practice and test series</li>
              <li>Periodic assessments with performance feedback</li>
              <li>Doubt-solving and revision support</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}
