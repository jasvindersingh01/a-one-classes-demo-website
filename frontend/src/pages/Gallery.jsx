import { useState } from "react";
import { motion } from "framer-motion";
import banner from "../assets/banner.jpg";

import img1 from "../assets/gallery/Image1.avif";
import img2 from "../assets/gallery/Image2.webp";
import img3 from "../assets/gallery/Image3.avif";
import img4 from "../assets/gallery/Image4.webp";
import img5 from "../assets/gallery/Image5.avif";
import img6 from "../assets/gallery/Image6.avif";
import img7 from "../assets/gallery/Image7.avif";
import img8 from "../assets/gallery/Image8.avif";

export default function Gallery() {
  const [active, setActive] = useState("All");

  const images = [
    { src: img1, category: "Classroom" },
    { src: img2, category: "Events" },
    { src: img3, category: "Events" },
    { src: img4, category: "Events" },
    { src: img5, category: "Results" },
    { src: img6, category: "Results" },
    { src: img7, category: "Results" },
    { src: img8, category: "Results" },
  ];

  const filterImages =
    active === "All" ? images : images.filter((img) => img.category === active);

  const categories = ["All", "Classroom", "Events", "Results"];

  return (
    <>
      <div className="w-full h-[28vh] md:h-[40vh] relative">
        <img src={banner} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center pt-8">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Our Gallery
          </h1>
        </div>
      </div>

      {/* CATEGORY FILTER */}
      <section className="px-6 md:px-20 py-10 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full font-medium transition 
                ${
                  active === cat
                    ? "bg-blue-800 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="px-6 md:px-20 pb-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filterImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
            >
              <img
                src={img.src}
                className="w-full mb-4 rounded-2xl group-hover:scale-105 transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
