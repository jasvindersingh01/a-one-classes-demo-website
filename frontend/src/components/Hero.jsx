import { motion } from "framer-motion";
import HeroImg from "../assets/heroimg.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[100vh] w-full flex items-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.45]"
        style={{ backgroundImage: `url(${HeroImg})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/10"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg pt-16">
          A-One Classes, Kota
        </h1>

        <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto">
          Kota’s trusted coaching institute for strong academic foundation and smart learning.
        </p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-8 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-lg transition"
        >
          Contact Us
        </motion.a>
      </motion.div>
    </section>
  );
}
