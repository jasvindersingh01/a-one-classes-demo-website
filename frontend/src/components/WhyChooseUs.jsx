import { motion } from "framer-motion";
import { IoChevronForward } from "react-icons/io5";
import chooseImg from "../assets/heroimg.jpeg";

export default function WhyChooseUs() {
  const points = [
    "Strong Academic Foundation & Kota-Style Teaching",
    "Personalized Mentoring for Every Student",
    "Regular Tests, Practice & Doubt Clearing",
    "Qualified & Experienced Teachers",
    "Regular Tests, Doubt Sessions & Progress Tracking",
    "Safe Hostel Facilities & Student Support System",
  ];

  return (
    <section className="bg-[#F3FFFF] py-20 px-6 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-14 text-blue-900"
      >
        Why Choose Us!
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-12">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 space-y-6"
        >
          {points.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 border-b pb-4 border-gray-300"
            >
              <IoChevronForward className="text-red-500 text-2xl mt-1" />
              <p className="text-gray-700 text-lg leading-relaxed">{item}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <img
            src={chooseImg}
            alt="Why Choose Us"
            className="w-full rounded-tl-[80px] rounded-br-[80px] rounded-tr-lg rounded-bl-lg shadow-xl object-cover h-[450px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
