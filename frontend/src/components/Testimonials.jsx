import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Virendra Sharma",
    review:
      "Here I m virnder sharma.. I am so happy to say that my son aayush tiwari is member as a student.. And he got 93% in cbse tenth bord... I advise to student to join A-one classes to make bright future... There is science agriculture.. And best teacher for jet.. And pramod ghalot is best teacher of biological",
    rating: 5
  },
  {
    name: "Rahul Paliwal",
    review:
      "🌟 Dear StudentsUnlock Your True Potential with A ONE CLASSES!🌟Join the leaders in quality education where excellence meets dedication. A ONE CLASSES, empower students with expert guidance, personalized attention, and a results-driven approach.",
    rating: 5
  },
  {
    name: "Manoj Kumar",
    review:
      "In Kota, finding a good institute for Agriculture / ICAR / JET / Class XII Science (Agriculture subject, etc.) depends a lot on what exactly you mean by A- ONE CLASSES Kota preparation for entrance exams (JET, ICAR, etc.), board exams, or just strengthening Agriculture / Science ubject in Class 10th to 12th . Best Teacher's and best environment study.",
    rating: 5
  },
  {
    name: "dharmendra nagar",
    review:
      "There are very good teachers, childrens do not need to worry about any subject,the teachers is the best in his subject, childrens are also tested to know their results and this is a good Best for agriculture and science Kota s no.1 classes kota",
    rating: 5
  },
  {
    name: "Vishal Nagar",
    review:
      "A-one classes kota best for education in al fields like agriculture and science jet cuet neet jee foundation in both medium hindi /english all facilities good in teaching and well qualified Best coching best results kotas no.1 coching",
    rating: 5
  },
  {
    name: "Jitendra Bajaj",
    review:
      "A one classes is a unique coaching forJET CUET AND IIT jee foundation and also for neet not only for IIT neet but also for agriculture top most and very experienced faculty available in this coaching so many scholarships are available for brilliant students SO DON'T WAST YOUR TIME AND ENROLL IN AONE CLASSES AS SOON AS POSSIBLE",
    rating: 5
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 px-6 md:px-20">
    
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-extrabold text-blue-800">What Our Students Say</h2>
        <p className="text-gray-600 mt-2">
          Real feedback from our achievers & learners
        </p>
      </motion.div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination]}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition min-h-[300px]"
            >
             <div className="flex justify-center">
  <FaUserCircle className="text-gray-400 text-7xl" />
</div>

              <h3 className="text-lg font-bold text-center mt-4 text-blue-700">
                {item.name}
              </h3>

              <div className="flex justify-center text-yellow-400 text-xl my-2">
                {"★".repeat(item.rating)}
                {"☆".repeat(5 - item.rating)}
              </div>

              <p className="text-gray-600 mt-2 text-center leading-relaxed">
                "{item.review}"
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
        <a
          href="https://www.google.com/maps/place/A-ONE+CLASSES+KOTA/@25.1356617,75.830923,17z/data=!4m8!3m7!1s0x396f85b1edcc463b:0xe42f32bce9bf11a4!8m2!3d25.1356617!4d75.8334979!9m1!1b1!16s%2Fg%2F11n13wz67q?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" 
          target="_blank"
          className="inline-block px-6 py-3 bg-blue-700 text-white rounded-lg font-medium shadow hover:bg-blue-600 transition"
        >
          View All Google Reviews →
        </a>
          <a
    href="https://www.google.com/maps/place/A-ONE+CLASSES+KOTA/@25.1356617,75.830923,17z/data=!4m8!3m7!1s0x396f85b1edcc463b:0xe42f32bce9bf11a4!8m2!3d25.1356617!4d75.8334979!9m1!1b1!16s%2Fg%2F11n13wz67q?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    className="px-6 py-3 bg-white text-blue-700 border-2 border-blue-700 rounded-lg font-medium shadow hover:bg-blue-50 transition"
  >
    Write a Review ★
  </a>
      </div>
    </section>
  );
}
