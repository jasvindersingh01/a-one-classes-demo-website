import { motion } from "framer-motion";
import cuetImg from "../../assets/course.webp";
import banner from "../../assets/banner.jpg";

export default function CUET() {
  return (
    <>
      {/* BANNER */}
      <div className="w-full h-[25vh] md:h-[37vh] relative">
        <img
          src={banner}
          alt="CUET Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            CUET
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
              src={cuetImg}
              alt="CUET Preparation"
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
              About CUET (UG)
            </h2>

            <p className="text-gray-700 text-[17px] leading-relaxed mb-4">
              Common University Entrance Test (CUET) is a national-level
              examination conducted for admission into undergraduate programs
              of Central Universities and other participating institutions
              across India.
            </p>

            <p className="text-gray-700 text-[17px] leading-relaxed mb-4">
              CUET evaluates students on the basis of their subject knowledge,
              analytical ability and understanding of core concepts. Proper
              preparation requires clarity of syllabus, regular practice and
              correct exam strategy.
            </p>

            <p className="text-gray-700 text-[17px] leading-relaxed mb-6">
              At A-One Classes, our CUET program is designed to help students
              prepare for domain subjects along with general test sections,
              while maintaining balance with their board exam preparation.
            </p>

            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Our CUET Preparation Approach
            </h3>

            <ul className="list-disc pl-5 text-gray-700 text-[17px] space-y-2">
              <li>Complete coverage of CUET domain subject syllabus</li>
              <li>NCERT-focused teaching for conceptual clarity</li>
              <li>Regular MCQ practice based on CUET pattern</li>
              <li>Periodic tests and performance evaluation</li>
              <li>Guidance on exam strategy and time management</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}
