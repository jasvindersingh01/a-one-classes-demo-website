import { motion } from "framer-motion";
import foundationImg from "../../assets/course.webp";
import banner from "../../assets/banner.jpg";

export default function Foundation() {
  return (
    <>
      {/* BANNER */}
      <div className="w-full h-[25vh] md:h-[37vh] relative">
        <img
          src={banner}
          alt="Foundation Course Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center pt-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Class 8–10 Foundation
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <section className="pt-24 pb-20 bg-gray-50 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* LEFT : IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={foundationImg}
              alt="Class 8-10 Foundation Coaching"
              className="w-full max-w-lg h-[460px] md:h-[520px] rounded-3xl shadow-2xl object-cover"
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
              About Class 8–10 Foundation Program
            </h2>

            <p className="text-gray-700 text-[17px] leading-relaxed mb-4">
              The Class 8–10 Foundation program plays a crucial role in shaping a
              student’s academic future. These years are the base for higher
              studies, competitive exams and overall confidence in subjects like
              Mathematics and Science.
            </p>

            <p className="text-gray-700 text-[17px] leading-relaxed mb-6">
              Our Foundation Course is specially designed to strengthen core
              concepts of <strong>Mathematics, Science (Physics, Chemistry & Biology)</strong>
              while preparing students step-by-step for board exams as well as
              future competitive exams like JEE, NEET, CUET and other entrance tests.
            </p>

            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Teaching Methodology
            </h3>

            <ul className="list-disc pl-5 text-gray-700 text-[17px] space-y-2 mb-6">
              <li>Concept-based learning aligned with school syllabus</li>
              <li>Special focus on NCERT fundamentals</li>
              <li>Regular practice worksheets & chapter-wise tests</li>
              <li>Interactive classes to build interest in learning</li>
              <li>Continuous evaluation & doubt-solving sessions</li>
            </ul>

            {/* WHY CHOOSE – RIGHT SIDE, IMAGE KE NICHE */}
            <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-6">
                Why Choose Our Foundation Program?
              </h3>

              <ul className="space-y-4 text-gray-700 text-[17px]">
                <li>✔ Strong academic base for Classes 11 & 12</li>
                <li>✔ Early exposure to competitive exam thinking</li>
                <li>✔ Experienced and student-friendly faculty</li>
                <li>✔ Small batch size for personal attention</li>
                <li>✔ Special care for weak & average students</li>
                <li>✔ Balanced focus on Boards + Olympiads + Entrance exams</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
