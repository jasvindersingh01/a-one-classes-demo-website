import { motion } from "framer-motion";

import img1 from "../assets/gallery/Image1.avif";
import img2 from "../assets/gallery/Image2.webp";
import img3 from "../assets/gallery/Image3.avif";
import img4 from "../assets/gallery/Image4.webp";
import img5 from "../assets/gallery/Image5.avif";
import img6 from "../assets/gallery/Image6.avif";

export default function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section id="gallery" className="py-16 bg-white scroll-mt-20">
      
      {/* Heading Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-blue-700">Gallery</h2>
        <p className="text-gray-600 mt-2">
          A glimpse of A-One Classes campus, classrooms & learning environment
        </p>
      </motion.div>

      {/* Images Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-6 md:px-20">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all"
          >
            <img
              src={src}
              alt="Gallery"
              className="w-full h-64 object-cover hover:scale-110 transition duration-500"
            />
          </motion.div>
        ))}
      </div>

    </section>
  );
}
