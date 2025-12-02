import { motion } from "framer-motion";
import { useState } from "react";
import Swal from "sweetalert2";

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
      const response = await fetch("http://localhost:5000/api/contact", {
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
    <section
      id="contact"
      className="py-6 px-6 md:px-20 bg-white scroll-mt-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-blue-700 text-center mb-10"
      >
        Contact Us
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto"
      >

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">
            A-One Classes, Kota
          </h3>

          <p className="text-gray-700">
            <strong>Address:</strong>
            Mahaveer Nagar Vistar Yojna, LBS School ke paas, Kota (Raj.)
          </p>

          <p className="text-gray-700">
            <strong>Mobile:</strong>
            <a
              href="tel:9694218177"
              className="text-blue-600 font-semibold hover:underline"
            >
              {" "}
              9694218177{" "}
            </a>
          </p>

          <p className="text-gray-700">
            <strong>Classes Available:</strong>
            8th–12th CBSE/RBSE, JET, CUET, NEET, JEE
          </p>

          <p className="text-gray-700 font-semibold">
            Hostel Facility Available
          </p>

          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.000862972934!2d75.83092297520936!3d25.135661677750686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f85b1edcc463b%3A0xe42f32bce9bf11a4!2sA-ONE%20CLASSES%20KOTA!5e0!3m2!1sen!2sin!4v1764671196865!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-6 rounded-xl shadow space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border focus:outline-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 w-full cursor-pointer ${loading ? "bg-blue-400 cursor-not-allowed" : ""
              }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
