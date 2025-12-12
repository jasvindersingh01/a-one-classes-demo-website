import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import img1 from "../assets/gallery/Image1.avif";
import img2 from "../assets/gallery/Image2.webp";
import img3 from "../assets/gallery/Image3.avif";
import img4 from "../assets/gallery/Image4.webp";
import img5 from "../assets/gallery/Image5.avif";
import img6 from "../assets/gallery/Image6.avif";

const images = [img1, img2, img3, img4, img5, img6];

export default function GalleryPreview() {
  return (
    <section className="py-10 bg-gray-50 px-6 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-10"
      >
        Gallery Highlights
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-xl shadow-md bg-white"
          >
            <motion.img
              src={img}
              alt="Gallery"
              className="w-full h-40 md:h-65 object-cover rounded-xl"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/gallery">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-700 text-white rounded-lg shadow-md font-semibold hover:bg-blue-800 transition"
          >
            View Full Gallery →
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
