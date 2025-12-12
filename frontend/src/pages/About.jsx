import { motion } from "framer-motion";
import DirectorImg from "../assets/about/director.jpeg";
import StudentsImg from "../assets/about/student.png";
import MissionImg from "../assets/about/mission.png";
import VisionImg from "../assets/about/vision.png";
import banner from "../assets/banner.jpg"
import { useEffect, useRef, useState } from "react";
import AchieveImg from "../assets/about/achieve.png";
import { FaUserGraduate, FaAward, FaChalkboardTeacher, FaHistory } from "react-icons/fa";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const end = target;
        const speed = 10; 

        const counter = setInterval(() => {
          start += 5;
          if (start >= end) {
            start = end;
            clearInterval(counter);
          }
          setCount(start);
        }, speed);
      }
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}</span>;
};

export default function About() {
  return (
    <>
      <div className="w-full h-[25vh] md:h-[40vh] relative">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center pt-8">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            About Us
          </h1>
        </div>
      </div>
      <section className="py-20 bg-gray-50 min-h-screen px-6 md:px-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800">
            About A-One Classes, Kota
          </h1>
          <p className="text-gray-600 mt-3 text-lg mb-10">
            Guiding students towards excellence since 2010
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <img
              src={DirectorImg}
              className="w-60 h-60 rounded-full object-cover shadow-xl border-4 border-blue-700"
              alt="Director"
            />
            <p className="mt-4 text-center text-blue-800 font-semibold">
              Ramhet Sir — B.Tech, Polytechnic
              <br />Experience: 15+ Years
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
              Director’s Message
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              A-One Classes Kota welcomes you. In life, success is not achieved
              merely by wishes, but through determination, consistent hard work,
              the right guidance, and discipline. Every student has immense
              potential which shines with the right direction.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              In today's competitive world, smart work is as important as hard
              work. Every student is different — so their study pattern must also
              be different. We create an academic environment where students can
              perform at their best.
            </p>

            <p className="text-gray-700 leading-relaxed">
              At A-One Classes, students receive personal care, moral values,
              strong academics, and a positive learning environment. With correct
              guidance, even small efforts bring great achievements.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 bg-white rounded-2xl shadow-lg p-10 border-l-4 border-blue-600"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              Message for Students
            </h3>

            <p className="text-gray-700 leading-relaxed mb-3">
              Dear Students,
              Dreams are those that keep you awake — the ones for which you work
              day and night. We support every student at every step. Never stop,
              never settle, and never fear challenges.
            </p>

            <blockquote className="text-blue-800 font-semibold italic my-4">
              “Success belongs to those who give their dreams everything they have.”
            </blockquote>

            <p className="text-gray-700 leading-relaxed">
              We wish you a bright future. With consistent effort and the right
              strategy, you will definitely achieve great success.
            </p>
          </motion.div>

          <motion.img
            src={StudentsImg}
            alt="Students"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 w-full rounded-2xl shadow-xl object-cover"
          />
        </div>

<div className="space-y-20 mt-20">

  {/* Mission */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="flex flex-col md:flex-row items-center gap-12"
  >
    <motion.img
      src={MissionImg}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="md:w-1/2 w-full rounded-2xl shadow-xl object-cover h-72 md:h-96"
      alt="Mission"
    />

    <div className="md:w-1/2 bg-white rounded-2xl shadow-lg p-10 border-l-4 border-blue-600">
      <h3 className="text-3xl font-bold text-blue-700 mb-4">
        Our Mission
      </h3>

      <p className="text-gray-700 leading-relaxed mb-3">
        To help students achieve excellence through strong academic foundation,
        structured learning, modern teaching tools, and a joyful learning
        environment. We aim to deliver quality education that shapes a student's
        future with confidence and clarity.
      </p>
    </div>
  </motion.div>


  {/*Vision */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="flex flex-col md:flex-row-reverse items-center gap-12"
  >
    <motion.img
      src={VisionImg}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="md:w-1/2 w-full rounded-2xl shadow-xl object-cover h-72 md:h-96"
      alt="Vision"
    />

    <div className="md:w-1/2 bg-white rounded-2xl shadow-lg p-10 border-l-4 border-blue-600">
      <h3 className="text-3xl font-bold text-blue-700 mb-4">
        Our Vision
      </h3>

      <p className="text-gray-700 leading-relaxed mb-3">
        To build an educational ecosystem that empowers young minds to reach
        their highest potential. We aim to strengthen students' confidence,
        analytical skills, moral values, and lifelong learning habits so they
        succeed in every challenge of life.
      </p>
    </div>
  </motion.div>

{/* Achievements Section */}
<section className="mt-20">
  <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-10 rounded-2xl shadow-xl">

    <motion.img
      src={AchieveImg}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="md:w-1/2 w-full rounded-2xl shadow-lg object-cover h-72 md:h-96"
      alt="Achievements"
    />

    {/*COUNTERS */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="md:w-1/2 grid grid-cols-2 gap-8"
    >
      <div className="text-center bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <div className="flex justify-center mb-3">
          <FaUserGraduate className="text-blue-700 text-4xl p-2 bg-white rounded-full shadow-md" />
        </div>
        <h3 className="text-4xl font-bold text-blue-700">
          <Counter target={1500} />+
        </h3>
        <p className="text-gray-700 mt-1 font-medium">Happy Students</p>
      </div>

      <div className="text-center bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <div className="flex justify-center mb-3">
          <FaAward className="text-blue-700 text-4xl p-2 bg-white rounded-full shadow-md" />
        </div>
        <h3 className="text-4xl font-bold text-blue-700">
          <Counter target={350} />+
        </h3>
        <p className="text-gray-700 mt-1 font-medium">Top Selections</p>
      </div>

      <div className="text-center bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <div className="flex justify-center mb-3">
          <FaHistory className="text-blue-700 text-4xl p-2 bg-white rounded-full shadow-md" />
        </div>
        <h3 className="text-4xl font-bold text-blue-700">
          <Counter target={15} />+
        </h3>
        <p className="text-gray-700 mt-1 font-medium">Years Experience</p>
      </div>

      <div className="text-center bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <div className="flex justify-center mb-3">
          <FaChalkboardTeacher className="text-blue-700 text-4xl p-2 bg-white rounded-full shadow-md" />
        </div>
        <h3 className="text-4xl font-bold text-blue-700">
          <Counter target={20} />+
        </h3>
        <p className="text-gray-700 mt-1 font-medium">Expert Faculty</p>
      </div>
      
    </motion.div>
  </div>
</section>n
</div>
      </section>
    </>
  );
}
