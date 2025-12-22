import { motion } from "framer-motion";
import jeeImg from "../../assets/courses/course.webp";
import banner from "../../assets/banner.jpg";

export default function Jee() {
  return (
    <>
      <div className="w-full h-[25vh] md:h-[37vh] relative">
            <img src={banner} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
    
            <div className="absolute inset-0 flex items-center justify-center pt-4">
              <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
                JEE (Main & Advanced)
              </h1>
            </div>
          </div>
    <section className="pt-28 pb-20 bg-gray-50 px-6 md:px-20">

      {/* PAGE HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-14 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800">
          JEE 
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Focused preparation for JEE Main & Advanced with strong fundamentals
        </p>
      </motion.div>
      
      {/* CONTENT SECTION */}
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

  {/* LEFT : IMAGE */}
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className="flex justify-center"
  >
    <img
      src={jeeImg}
      alt="JEE Preparation at A-One Classes"
      className="
        w-full
        max-w-lg
        h-[420px] md:h-[480px]
        rounded-3xl
        shadow-2xl
        object-cover
      "
      loading="lazy"
    />
  </motion.div>

  {/* RIGHT : CONTENT */}
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7 }}
  >
    <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
      About JEE (Main & Advanced)
    </h2>

    <p className="text-gray-700 leading-relaxed mb-4">
      Joint Entrance Examination (JEE) is one of the most competitive
      engineering entrance examinations in India. It opens the gateway to
      prestigious institutions such as IITs, NITs, IIITs and other
      top engineering colleges. JEE demands not only hard work but also
      conceptual clarity, problem-solving skills and disciplined preparation.
    </p>

    <p className="text-gray-700 leading-relaxed mb-4">
      At <strong>A-One Classes, Kota</strong>, we prepare students for both
      <strong> JEE Main and JEE Advanced</strong> with a well-structured
      academic plan that balances board preparation along with competitive
      exam readiness.
    </p>

    <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">
      Our Teaching Approach
    </h3>

    <ul className="list-disc pl-5 text-gray-700 space-y-2">
      <li>Strong emphasis on Physics, Chemistry & Mathematics fundamentals</li>
      <li>Concept-based teaching with real exam-level problems</li>
      <li>Regular practice sheets & topic-wise assignments</li>
      <li>Weekly tests based on JEE pattern</li>
      <li>Detailed performance analysis & doubt-clearing sessions</li>
    </ul>

    <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">
      Why Choose A-One Classes for JEE?
    </h3>

    <p className="text-gray-700 leading-relaxed mb-4">
      Our experienced faculty understands the pressure and competition
      involved in JEE preparation. We focus on building confidence,
      discipline and problem-solving mindset in every student. Small batch
      sizes ensure personal attention, while regular mentoring helps
      students stay on track throughout the academic year.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Whether you are a Class 11 student starting early or a Class 12
      aspirant aiming for revision and practice, A-One Classes provides
      the right guidance, strategy and environment to help you achieve
      your JEE goals.
    </p>
  </motion.div>

</div>

    </section>
</>
  );
}
