import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-100 px-6 md:px-20 scroll-mt-20">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-blue-700 mb-6">About Us</h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          A-One Classes, Kota is a trusted coaching institute offering quality
          education for Class 8th–12th (CBSE/RBSE), JEE, NEET, CUET & JET.
          Our experienced faculty ensures strong concepts and result-oriented study.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
      >
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition text-center">
          <h3 className="text-2xl font-bold text-blue-700">14+ Years</h3>
          <p className="text-gray-600 mt-1">Of Excellence</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition text-center">
          <h3 className="text-2xl font-bold text-blue-700">Expert Faculty</h3>
          <p className="text-gray-600 mt-1">Focused Teaching Approach</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition text-center">
          <h3 className="text-2xl font-bold text-blue-700">Hostel Facility</h3>
          <p className="text-gray-600 mt-1">For Outstation Students</p>
        </div>
      </motion.div>

    </section>
  );
}
