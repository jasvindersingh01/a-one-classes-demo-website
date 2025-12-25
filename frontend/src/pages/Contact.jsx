import { motion } from "framer-motion";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";
import banner from "../assets/banner.jpg";


export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: "Please fill all fields before submitting.",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://a-one-classes-demo-website.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "We will contact you soon.",
        });

        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Server issue. Please try again.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Please check your internet connection.",
      });
    }

    setLoading(false);
  };


  return (
   <section className="pb-20 bg-gray-50">

  <div className="w-full h-[25vh] md:h-[37vh] relative mb-16">
    <img src={banner} className="w-full h-full object-cover opacity-90" />
    <div className="absolute inset-0 bg-black/40"></div>

    <div className="absolute inset-0 flex items-center justify-center pt-4">
      <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
        Contact Us
      </h1>
    </div>
  </div>

  <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 mb-16">

    <div className="bg-white p-10 rounded-2xl shadow-xl space-y-6 border-l-4 border-blue-700">

      <h2 className="text-3xl font-bold text-blue-800">Get in Touch</h2>
      <p className="text-gray-600">
        Feel free to reach out for admission queries, study guidance or any support.
      </p>

      <div className="space-y-5 text-gray-700">

        <div className="flex gap-4">
          <FaMapMarkerAlt className="text-blue-700 text-2xl mt-1" />
          <p>
            <strong>Address:</strong><br />
            Mahaveer Nagar Vistar Yojna,<br />
            LBS School ke paas, Kota (Raj.)
          </p>
        </div>

        <div className="flex gap-4">
          <FaPhoneAlt className="text-blue-700 text-2xl mt-1" />
          <p>
            <strong>Phone:</strong><br />
            <a href="tel:9694218177" className="text-blue-600 font-semibold">
              9694218177
            </a>
          </p>
        </div>

        <div className="flex gap-4">
          <FaEnvelope className="text-blue-700 text-2xl mt-1" />
          <p>
            <strong>Email:</strong><br />
            contact@aoneclasses.com
          </p>
        </div>

        <p>
          <strong>Courses:</strong><br />
          8th–12th (CBSE/RBSE), JEE, NEET, CUET, JET<br />
          <strong>Hostel Facility Available</strong>
        </p>
      </div>
    </div>

    <form
      onSubmit={handleSubmit}
      className="bg-white p-10 rounded-2xl shadow-xl space-y-5"
    >
      <h3 className="text-2xl font-bold text-blue-800">Send Us a Message</h3>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full px-4 py-3 rounded-lg border focus:outline-blue-700"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="w-full px-4 py-3 rounded-lg border focus:outline-blue-700"
      />

      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Your Phone Number"
        className="w-full px-4 py-3 rounded-lg border focus:outline-blue-700"
      />

      <textarea
        rows="5"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        className="w-full px-4 py-3 rounded-lg border focus:outline-blue-700"
      ></textarea>

      <button
        type="submit"
        disabled={loading}
        className={`bg-blue-700 text-white px-6 py-3 rounded-lg w-full font-semibold hover:bg-blue-800 transition ${
          loading && "bg-blue-400 cursor-not-allowed"
        }`}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  </div>

  {/*GOOGLE MAP */}
  <div className="w-full h-[350px] md:h-[450px] shadow-xl">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.000862972934!2d75.83092297520936!3d25.135661677750686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f85b1edcc463b%3A0xe42f32bce9bf11a4!2sA-ONE%20CLASSES%20KOTA!5e0!3m2!1sen!2sin!4v1764671196865!5m2!1sen!2sin"
      className="w-full h-full border-0"
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>

</section>


  );
}
