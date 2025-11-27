import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-blue-900 text-white py-4 mt-10"
    >
      <div className="text-center text-gray-200 text-sm">
        © {new Date().getFullYear()} A-One Classes Kota. All Rights Reserved.
      </div>
    </motion.footer>
  );
}
