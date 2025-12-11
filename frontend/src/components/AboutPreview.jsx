import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DirectorImg from "../assets/about/aboutpre.png";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-gray-50 px-6 md:px-20">

      <div className="flex flex-col md:flex-row items-center gap-14">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 relative"
        >
          {/* Optional top border like reference design */}
          <div className="absolute top-0.3 left-0 w-full h-2 bg-blue-700 rounded-t-2xl"></div>

          <img
            src={DirectorImg}
            alt="About A-One Classes"
            className="w-full h-[350px] md:h-[430px] object-cover rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <p className="text-blue-700 font-semibold tracking-wide mb-2">
            ABOUT US
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
            Welcome to <br />
            <span className="text-blue-700">A-One Classes Kota</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            A-One Classes Kota has been shaping academic excellence since 2010. 
            We focus on building strong fundamentals, disciplined study routines, 
            and a positive learning culture where students grow academically and personally.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            With expert faculty, structured classroom programs, and dedicated 
            mentorship, we guide students to succeed in Board Exams as well as 
            competitive exams like JEE, NEET, CUET, JET & Agriculture.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/about">
              <button className="px-8 py-3 border-2 border-blue-700 text-blue-700 font-semibold rounded-lg hover:bg-blue-700 hover:text-white transition">
                Read More
              </button>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
