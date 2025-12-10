import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DirectorImg from "../assets/about/aboutpre.png";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-gray-50 px-6 md:px-20">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-bold text-blue-800">About Us</h2>
        <p className="text-gray-600 mt-2">
          A quick look at A-One Classes Kota
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center gap-10">

        <motion.img
          src={DirectorImg}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 rounded-2xl shadow-xl object-cover h-72 md:h-96"
          alt="About Preview"
        />
       
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
            A Trusted Coaching Institute Since 2010
          </h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            A-One Classes Kota has been helping students achieve success with 
            strong academic guidance, personal care, disciplined study structure, 
            and Kota-style teaching methodology.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Our mission is to build confident, knowledgeable, and disciplined students 
            who excel in Board Exams as well as Competitive Exams like JEE, NEET, CUET & JET.
          </p>

          <Link to="/about">
            <button className="px-6 py-3 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-600 transition">
              Read More →
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
