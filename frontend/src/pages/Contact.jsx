import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-6 px-6 md:px-20 bg-white scroll-mt-24"
    >
 
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-blue-700 text-center mb-10"
      >
        Contact Us
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto"
      >
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">
            A-One Classes, Kota
          </h3>

          <p className="text-gray-700">
            <strong>Address:</strong>  
            Mahaveer Nagar Vistar Yojna, LBS School ke paas, Kota (Raj.)
          </p>

          <p className="text-gray-700">
            <strong>Mobile:</strong>  
            <a
              href="tel:9694218177"
              className="text-blue-600 font-semibold hover:underline"
            >
              {" "}
              9694218177{" "}
            </a>
          </p>

          <p className="text-gray-700">
            <strong>Classes Available:</strong>  
            8th–12th CBSE/RBSE, JET, CUET, NEET, JEE
          </p>

          <p className="text-gray-700 font-semibold">
            Hostel Facility Available
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="bg-gray-100 p-6 rounded-xl shadow space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 w-full cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
