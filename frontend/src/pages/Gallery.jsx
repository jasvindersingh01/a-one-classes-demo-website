import { useState } from "react";
import { motion } from "framer-motion";
import banner from "../assets/banner.jpg";

import img1 from "../assets/gallery/Image1.avif";
import img2 from "../assets/gallery/Image2.webp";
import img3 from "../assets/gallery/Image3.avif";
import img4 from "../assets/gallery/Image4.webp";
import img5 from "../assets/gallery/Image5.avif";
import img9 from "../assets/gallery/img9.avif";
import img10 from "../assets/gallery/img10.avif";
import img11 from "../assets/gallery/img11.avif";
import img12 from "../assets/gallery/img12.avif";
import img13 from "../assets/gallery/img13.avif";
import img15 from "../assets/gallery/img15.png";
import img16 from "../assets/gallery/img16.png";
import img18 from "../assets/gallery/img18.png";
import img19 from "../assets/gallery/img19.png";
import img20 from "../assets/gallery/img20.png";
import img21 from "../assets/gallery/img21.png";
import img22 from "../assets/gallery/img22.png";
import img23 from "../assets/gallery/img23.png";
import r1 from "../assets/gallery/r1.jpeg";
import r2 from "../assets/gallery/r2.jpeg";
import r3 from "../assets/gallery/r3.jpeg";
import r4 from "../assets/gallery/r4.jpeg";
import r5 from "../assets/gallery/r5.jpeg";
import r6 from "../assets/gallery/r6.jpeg";
import r7 from "../assets/gallery/r7.jpeg";
import r8 from "../assets/gallery/r8.jpeg";
import r9 from "../assets/gallery/r9.jpeg";
import r10 from "../assets/gallery/r10.jpeg";
import r11 from "../assets/gallery/r11.jpeg";
import r12 from "../assets/gallery/r12.jpeg";

export default function Gallery() {
  const [active, setActive] = useState("All");

  const images = [
    { src: img1, category: "All" },
    { src: img2, category: "Events" },
    { src: img3, category: "Achivments" },
    { src: img4, category: "Achivments" },
    { src: img9, category: "Achivments" },
    { src: img10, category: "Achivments" },
    { src: img11, category: "Achivments" },
    { src: img12, category: "Achivments" },
    { src: img15, category: "Achivments" },
    { src: img16, category: "Achivments" },
    { src: img18, category: "Achivments" },
    { src: img19, category: "Achivments" },
    { src: img20, category: "Events" },
    { src: img21, category: "Events" },
    { src: img22, category: "Events" },
    { src: img23, category: "Events" },
    { src: r1, category: "Results" },
    { src: r2, category: "Results" },
    { src: r3, category: "Results" },
    { src: r4, category: "Results" },
    { src: r5, category: "Results" },
    { src: r6, category: "Results" },
    { src: r7, category: "Results" },
    { src: r8, category: "Results" },
    { src: r9, category: "Results" },
    { src: r10, category: "Results" },
    { src: r11, category: "Results" },
    { src: r12, category: "Results" },
    { src: img5, category: "Results" },
     { src: img13, category: "Results" },
  ];

  const filterImages =
    active === "All" ? images : images.filter((img) => img.category === active);

  const categories = ["All", "Achivments", "Events", "Results"];

  return (
    <>
      <div className="w-full h-[25vh] md:h-[37vh] relative">
        <img src={banner} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center pt-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Gallery
          </h1>
        </div>
      </div>

      {/* CATEGORY FILTER */}

      <section className="px-6 md:px-20 py-10 text-center">
        <div className="text-center mb-10">
          <p className="text-gray-600 text-lg">
            A glimpse of our classrooms, students, and learning environment at A-One Classes.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full font-medium transition 
                ${active === cat
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
                className="w-full object-contain mb-4 rounded-2xl group-hover:scale-105 transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
