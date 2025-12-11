import { motion } from "framer-motion";
import { FaFlask, FaMicroscope, FaGraduationCap, FaLeaf, FaBook, FaBolt } from "react-icons/fa";

import banner from "../assets/banner.jpg";
import img8 from "../assets/courses/class8.jpg";
import img9 from "../assets/courses/class99.avif";
import img10 from "../assets/courses/class10.png";

import imgPCM from "../assets/courses/pcm.webp";
import imgPCB from "../assets/courses/pcb.jpg";
import img12 from "../assets/courses/12th.png";
import imgAG from "../assets/courses/agri.png";

import imgJEE from "../assets/courses/jee.png";
import imgNEET from "../assets/courses/neet.png";
import imgJET from "../assets/courses/jet.webp";
import imgCUET from "../assets/courses/cuet.webp";
import imgICAR from "../assets/courses/icar.png";

import imgBSC from "../assets/courses/bsc.webp";  
import imgCBZ from "../assets/courses/cbz.jpg";  

const cardStyle =
  "bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer border-t-4 text-center";

export default function Courses() {
  return (
    <>
      <div className="w-full h-[28vh] md:h-[40vh] relative">
        <img src={banner} alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center pt-10">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Our Courses
          </h1>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">

        <SectionTitle title="Pre-Foundation (Class 8 – 10)" subtitle="CBSE / RBSE | All Subjects | English + Hindi Medium" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <CourseCard img={img8} title="Class 8 – All Subjects" icon={<FaBook />} color="blue" />
          <CourseCard img={img9} title="Class 9 – All Subjects" icon={<FaBook />} color="blue" />
          <CourseCard img={img10} title="Class 10 – All Subjects" icon={<FaBook />} color="blue" />
        </div>

        <SectionTitle title="Foundation (Class XI – XII)" subtitle="Science | Agriculture Streams" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <CourseCard img={imgPCM} title="Class XI – Science (PCM)" icon={<FaFlask />} color="green" />
          <CourseCard img={imgPCB} title="Class XI – Science (PCB)" icon={<FaMicroscope />} color="green" />
          <CourseCard img={img12} title="Class XII – Science (PCM/PCB)" icon={<FaBolt />} color="green" />
          <CourseCard img={imgAG} title="Class XI/XII – Agriculture" icon={<FaLeaf />} color="green" />
        </div>

        <SectionTitle title="Competitive Exams" subtitle="JET | CUET | ICAR | JEE | NEET" />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 ">
          <CourseCard img={imgJEE} title="JEE (Main)" icon={<FaBolt />} color="red" />
          <CourseCard img={imgNEET} title="NEET" icon={<FaMicroscope />} color="red" />
          <CourseCard img={imgJET} title="JET Agriculture" icon={<FaLeaf />} color="red" />
          <CourseCard img={imgCUET} title="CUET" icon={<FaBook />} color="red" />
          <CourseCard img={imgICAR} title="ICAR" icon={<FaLeaf />} color="red" />
        </div>

        <SectionTitle title="B.Sc Programs" subtitle="PCM | CBZ | Part I, II, III" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <CourseCard img={imgBSC} title="B.Sc (PCM)" icon={<FaGraduationCap />} color="yellow" />
          <CourseCard img={imgCBZ} title="B.Sc (CBZ)" icon={<FaGraduationCap />} color="yellow" />
        </div>

      </div>
      <section className="py-10 bg-white px-6 md:px-20 text-center">
  <h2 className="text-3xl font-bold text-blue-800 mb-4">Your Success is Our Priority</h2>
  
  <p className="text-gray-600 text-lg max-w-3xl mx-auto">
    At A-One Classes, we believe that every student has immense potential. 
    Through structured learning, expert guidance, and continuous motivation, 
    we help students achieve outstanding results in Board, JEE, NEET, CUET, 
    and other competitive examinations.
  </p>
</section>

    </>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-6">
      <h2 className="text-3xl font-bold text-blue-800">{title}</h2>
      <p className="text-gray-600 mt-1">{subtitle}</p>
    </div>
  );
}

function CourseCard({ img, title, icon, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`bg-white p-6 rounded-2xl shadow-lg border-t-4 text-center border-${color}-600`}
    >
      <img src={img} alt={title} className="w-full h-40 object-contain rounded-xl mb-4" />

      <div className="text-4xl mb-3 text-blue-700">{icon}</div>

      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </motion.div>
    
  );
}
