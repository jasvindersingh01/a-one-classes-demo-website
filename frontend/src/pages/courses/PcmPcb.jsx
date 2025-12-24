import { motion } from "framer-motion";
import pcmPcbImg from "../../assets/course.webp";
import banner from "../../assets/banner.jpg";

export default function PcmPcb() {
  return (
    <>
      {/* BANNER */}
      <div className="w-full h-[25vh] md:h-[37vh] relative">
        <img
          src={banner}
          alt="Class 11-12 PCM PCB Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center pt-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Class 11–12 PCM / PCB
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
              src={pcmPcbImg}
              alt="Class 11-12 PCM PCB Coaching"
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
              About Class 11–12 PCM / PCB Program
            </h2>

            <p className="text-gray-700 text-[17px] leading-relaxed mb-4">
              Class 11 and 12 are the most important academic years in a student’s
              life. These classes decide not only board examination performance
              but also lay the foundation for competitive exams such as JEE, NEET,
              CUET and other entrance tests.
            </p>

            <p className="text-gray-700 text-[17px] leading-relaxed mb-6">
              Our <strong>PCM (Physics, Chemistry, Mathematics)</strong> and
              <strong> PCB (Physics, Chemistry, Biology)</strong> programs are
              designed to build deep conceptual understanding while keeping
              students fully aligned with their school syllabus and board exam
              requirements.
            </p>

            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Teaching Methodology
            </h3>

            <ul className="list-disc pl-5 text-gray-700 text-[17px] space-y-2 mb-6">
              <li>Concept-based teaching aligned with NCERT syllabus</li>
              <li>Daily classroom problem-solving & numerical practice</li>
              <li>Regular chapter-wise tests and cumulative assessments</li>
              <li>Focused preparation for Boards + Competitive Exams</li>
              <li>Dedicated doubt-clearing and revision sessions</li>
            </ul>

            {/* WHY CHOOSE – RIGHT SIDE, IMAGE KE NICHE */}
            <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-6">
                Why Choose Our PCM / PCB Program?
              </h3>

              <ul className="space-y-4 text-gray-700 text-[17px]">
                <li>✔ Strong focus on board exam excellence</li>
                <li>✔ Early and parallel preparation for JEE / NEET</li>
                <li>✔ Experienced faculty for all core subjects</li>
                <li>✔ Small batch size ensuring personal attention</li>
                <li>✔ Continuous performance tracking & feedback</li>
                <li>✔ Special support for weak and average students</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
